Schema for the MongoDB
======================
version s0.3 corresponds to v2.0rc2


.. role:: optionalfield

.. role:: indexedfield

.. role:: sparsefield

.. todo::
   Complete the color coding

Color codes
~~~~~~~~~~~

- optional :optionalfield:`field`
- indexed :indexedfield:`field`
- optional :sparsefield:`sparse indexed field`

.. _admindb-label:

Administrative database (always named "slideatlas")
---------------------------------------------------

'users' collection
~~~~~~~~~~~~~~~~~~

- **'\_id'**: ObjectId
- **'type'**: :indexedfield:`indexed[2] str ("passwd", "facebook", "google")`
- **'name'**: :indexedfield:`indexed[2] unique str` Email
- **'label'**: :str: Name
- **'passwd'**:  :optionalfield:`str (required if 'type' == "passwd")`
- **'rules'**: array[n]

   -  ObjectId (pointer to 'rules' document)

- **'last\_login'**: DateTime
- **'first\_login'**: DateTime

'rules' collection
~~~~~~~~~~~~~~~~~~

- **'\_id'**: ObjectId
- **'label'**: str
- **'db'**: ObjectId (pointer to 'databases' document)
- **'facebook\_id'**: sparse unique indexed str
- **'db\_admin'**: bool
- **'can\_see'**: array[n]

   -  ObjectId (pointer to 'sessions' document, within a data database)

- **'can\_see\_all'**: bool (effectively populates 'can\_see' with all available sessions)
- **site\_admin'** : tag for super administrator if true

'databases' collection
~~~~~~~~~~~~~~~~~~~~~~

- **'\_id'**: ObjectId
- **'label'**: str
- **'host'**: str (*hostname* or *hostname:port*)
- **'dbname'**: str (name of a data database)
- **'copyright'**: str
- **'users'**: (Proposed for admin interface) List of the following structure

      - **'created\_by'**: ObjectId(pointer to users database)
      - **'created\_at'**: Time
      - **'valid\_until'**: Time

Data database ("bev1", etc.)
----------------------------


image data/pyramid collection (named *ObjectId*)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

- **'\_id'**: ObjectId
- **'name'**: indexed unique str ('tt.jpg', etc.)
- **'level'**: int ("0" is lowest-resolution / "t.jpg")
- **'file'**: binary

'images' metadata collection
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

- **'\_id'**: ObjectId (has a collection named the same)
- **'type'**: If this is not set, then assume pyramid2. 'stack' is a simple array of images named 1.png, 2.png ...
- **'filename'**: str file name of uploaded image
- **'origin'**: array[3] (necessary to import NDPA annotations)

   -  int/float (x / y / z world coords)

- **'spacing'**: array[3]

   - float (x / y / z nanometers/pixel or "1.0" if unknown)

- **'dimension'**: array[3] (size of non-padded region of base layer. Z dimensions is 1 for pyramid2 and stack size for pyramid3 and stack types)

   -  int (x / y / z pixel coords)

- **'levels'**: int (specific to pyramid2 and pyrmid3 types)

- **'label'**: str
- **'copyright'**: str

- **'extents'**: array[6] (deprecated)

   -  int (x / y / z start / end pixel coords)

- **'hide'**: null (depricated; field exists if image is hidden)

'views' metadata collection
~~~~~~~~~~~~~~~~~~~~~~~~~~~

- **'\_id'**: ObjectId
- **'img'**: ObjectId (pointer to document in 'images' collection)
- **'imgdb'**: Optional: For when the image is not in the same database as the view
- **'label'**: str
- **'startup\_view'**: ObjectId
- **'bookmarks'**: array[n]

   -  ObjectId (pointer to 'bookmarks' document)



Note (a recursive structure, which replaces view):
- User  : who created this view / note (email)
- Date  : When this view was created (javascript Date.getTime();)
- Type  : To find out scheme.  Currently set to "Note".
- Title : The short label used in note list or session list of views.
- HiddenTitle : Coded title for students.
- Text  : More descriptive and longer text.
- ViewerRecords: An array of objects defining views.  The client currently supports an array of up to two views for the dual viewer.
- Children: An array of notes objects that replaces bookmarks.
- ChildrenVisibility: A boolean indicating whether the children will be displayed and traversed by default.
- ParentId: Object id of parent note.  Used when a student makes a comment note which is saved in the Notes collection.



ViewerRecord (Contains one slide image, camera and annotation).
- Database : String name of the database containing the image.
- Image    : String name of the image collection.
- NumberOfLevels:  The number of levels in the image pyramid.
- Camera   : a camera object
   - FocalPoint : [x, y]
   - Height     : Height of the view in world coordinates
   - Rotation   : Rotation of the view in Radians. 
- Annotations: An array of annotation objects.
   - type   : one of "circle", "pencil", "text" or "polyline"
   - color  : [r,g,b]
   - ... 





'bookmarks' collection
~~~~~~~~~~~~~~~~~~~~~~
- **'\_id'**: ObjectId
- **'img'**: ObjectId (pointer to document in 'images' collection)
- **'title'**: str
- **'details'**: str
- **'center'**: array[3]

   -  float (x / y / z pixel coords)

- **'zoom'**: int ("0" is lowest-resolution)
- **'rotation'**: float (right-handed in degrees)
- **'lens'**: float (not used, but comes from NDPA annotations)
- **'annotation'**: object

   - **'type'**: str
   - **'displayname'**: str (not used, but comes from NDPA annotations)
   - **'color'**: str (6 digit hex)
   - **'radius'**: float (exists if 'type' == "circle")
   - **'measuretype'**: int (exists if 'type' == "freehand"; not used, but comes from NDPA annotations)
   - **'closed'**: int (exists if 'type' == "freehand"; not used, but comes from NDPA annotations)
   - **'specialtype'**: str (exists if 'type' == "freehand"; not used, but comes from NDPA annotations)
   - **'points'**: array[n] (n == 2 if 'type' == 'pointer'; n == 1 if 'type' == 'circle') array[3]

      -  float (x / y / z pixel coords)

'attachments' GridFS
~~~~~~~~~~~~~~~~~~~~

-  **'\_id'**: ObjectId
-  **'filename'**: str other required GridFS fields...

'sessions' collection
~~~~~~~~~~~~~~~~~~~~~

- **'\_id'**: ObjectId
- **'label'**: str
- **'views'**: array[n]

   - object

      - **'ref'**: ObjectId (pointer to document in 'views' collection)
      - **'pos'**: int
      - **'hide'**: bool

- **'attachments'**: array[n]

   - object

      - **'ref'**: ObjectId (pointer to file in 'attachments' GridFS)
      - **'pos'**: int
      - **'hide'**: bool
      - **'label'**: str


'log' collection
~~~~~~~~~~~~~~~~

- **'\_id'**: ObjectId
- **time** : ISODate("2013-01-07T22:18:07.222Z"),
- **time_str** : str  "Mon, 7 Jan 2013 17:18:07",
- **db_id** : ObjectId,
- **db_name** : str "bev1",
- **sess_id** : ObjectId,
- **view_id** : ObjectId,
- **img_id** : ObjectId,
- **image_label** : str,
- **ip**:str ("127.0.0.1" etc)
- **user** : Object

      - **\_id** : ObjectId,
      - **label** : str
      - **auth** : str("admin", "student" etc)
