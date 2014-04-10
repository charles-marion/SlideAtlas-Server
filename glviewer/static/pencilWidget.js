//==============================================================================
// Temporary drawing with a pencil.  It goes away as soon as the camera changes.
// pencil icon (image as html) follows the cursor.
// Middle mouse button (or properties menu item) drops pencil.
// maybe option in properties menu to save the drawing permanently.

// TODO:
// Break lines when the mouse is repressed.
// Smooth / compress lines. (Mouse pixel jitter)
// Option for the drawing to disappear when the camera changes.
// Serialize and Load methods.
// Undo / Redo.
// Color (property window).

var PENCIL_WIDGET_NEW = 0
var PENCIL_WIDGET_WAITING = 1
var PENCIL_WIDGET_ACTIVE = 2
var PENCIL_WIDGET_DRAG = 3;

function PencilWidget (viewer, newFlag, showIcon, oneLineOnly) {
  if (viewer == null) {
    return;
  }
  if(typeof showIcon == "undefined") showIcon = true;
  if(typeof oneLineOnly == "undefined") oneLineOnly = false;
  this.Viewer = viewer;    
  this.Viewer.WidgetList.push(this);
  this.IsTextActive = false;
  this.OutlineColor = [0.9, 1.0, 0.0];
  this.TextShape = false;
  this.LineWidth = 0;
  this.OneLineOnly = oneLineOnly; // It means the widget is disable when mouse up
  this.DrawnCallback = function(widget){};
  this.ActivePoint = false;  
  this.IsShapeUpdate = false;
  this.Cursor = $('<img>').appendTo('body')
    .css({
      'position': 'absolute',
      'height': '28px',
      'z-index': '1'})
    .attr('type','image')
    .attr('src',"webgl-viewer/static/Pencil-icon.png");  
  this.Shapes = [];
  
  if ( ! newFlag || !showIcon) {
      this.Cursor.hide();
  }
  
  if(newFlag)
    {
    this.Viewer.SetCursor("crosshair");
    this.State = PENCIL_WIDGET_NEW;
    }
  else
    {
    this.State = PENCIL_WIDGET_WAITING;
    }
}


PencilWidget.prototype.Draw = function(view) {
  for (var i = 0; i < this.Shapes.length; ++i) {
    this.Shapes[i].Draw(view);
  }
  
  if(this.TextShape != false && this.TextShape.String != "")
    {
    this.UpdatetTextPosition(view);
    this.TextShape.Draw(view);  
    }
  else if(this.Viewer.AnnotationEditable)
    {
    this.SetText("Add Label", 12)
    this.TextShape.Color =  [0.6, 0.6, 0.6];
    this.UpdatetTextPosition(view);
    this.TextShape.Draw(view);
    this.TextShape = false;
    }
}

PencilWidget.prototype.SetText = function(text, height) {
  this.TextShape = new Text();
  this.TextShape.String = text;  
  this.TextShape.Size = height;  
  this.TextShape.Color = this.OutlineColor;
  this.TextShape.UpdateBuffers(); 
}

PencilWidget.prototype.UpdatetTextPosition = function(view) {
  if(this.TextShape != false && this.TextShape.String != "")
    {    
    var bounds = this.GetSelectBounds()
    this.TextShape.Position[0] = bounds[0][0] + (bounds[1][0] - bounds[0][0])/2; 
    this.TextShape.Position[1] = bounds[1][1]; 
    var scale = this.Viewer.MainView.Viewport[3] / this.Viewer.MainView.Camera.GetHeight();
    view.Context2d.font = this.TextShape.Size+'pt Calibri';
    var width = view.Context2d.measureText(this.TextShape.String).width;    
    this.TextShape.Anchor = [width/2, -5 - scale * 10];
    this.TextShape.UpdateBuffers();
    }
}


PencilWidget.prototype.GetSelectBounds = function() {  
  var x1 = false;
  var x2 = false;
  var y1 = false;
  var y2 = false;
  
  for (var j = 0; j < this.Shapes.length; ++j) 
    {
    for(var i = 0; i < this.Shapes[j].Points.length; ++i) 
      {
      var x = this.Shapes[j].Points[i][0];
      var y = this.Shapes[j].Points[i][1];
      
      if(x1 == false || x < x1)
        {
        x1 = x;
        }
      if(x2 == false || x > x2)
        {
        x2 = x;
        }
      if(y1 == false || y < y1)
        {
        y1 = y;
        }
      if(y2 == false || y > y2)
        {
        y2 = y;
        }      
      }
    }
  return [[x1, y1], [x2, y2]];
}

PencilWidget.prototype.Serialize = function() {
  var obj = new Object();
  obj.type = "pencil";
  obj.outlinecolor = this.OutlineColor;
  obj.shapes = [];
  obj.linewidth = this.LineWidth;
  for (var i = 0; i < this.Shapes.length; ++i) {
    var shape = this.Shapes[i];
    var points = [];
    for (var j = 0; j < shape.Points.length; ++j) {
      points.push([shape.Points[j][0], shape.Points[j][1]]);
    } 
    obj.shapes.push(points);
  }
  if(this.TextShape != false && this.TextShape.String != "")
    {
    obj.text = this.TextShape.String;
    }
  return obj;
}

PencilWidget.prototype.SetOutlineColor = function(c) {
  this.OutlineColor = ConvertColor(c);
  this.ApplyColor(this.OutlineColor);
}

PencilWidget.prototype.ApplyColor = function(color) {
  for (var i = 0; i < this.Shapes.length; ++i) 
    {
    this.Shapes[i].OutlineColor = color;    
    this.Shapes[i].Active = false;    
    }
}


// Load a widget from a json object (origin MongoDB).
PencilWidget.prototype.Load = function(obj) {
  this.OutlineColor = obj.outlinecolor
  for(var n=0; n < obj.shapes.length; n++){
    var points = obj.shapes[n];
    var shape = new Polyline();
    shape.OutlineColor = this.OutlineColor
    shape.FixedSize = false;
    shape.LineWidth = obj.linewidth;
    this.Shapes.push(shape);
    for (var m = 0; m < points.length; ++m) {
      shape.Points[m] = [points[m][0], points[m][1]];
    }
    shape.Activate = false;
    shape.UpdateBuffers();
  }
}

PencilWidget.prototype.HandleKeyPress = function(keyCode, shift) {
}


PencilWidget.prototype.Deactivate = function() {
  this.Cursor.hide();
  this.Viewer.DeactivateWidget(this);
  this.ApplyColor(this.OutlineColor);
  this.State = PENCIL_WIDGET_WAITING;
  if(this.TextShape != false) this.TextShape.Active = false;
}

PencilWidget.prototype.HandleMouseDown = function(event) {
  var x = event.MouseX;
  var y = event.MouseY;
  
  if (this.State == PENCIL_WIDGET_ACTIVE) 
    {
    this.State = PENCIL_WIDGET_DRAG;
    }
  else
    {
    if (event.SystemEvent.which == 1) 
      {
      // Start drawing.
      var shape = new Polyline();
      shape.OutlineColor = [0.9, 1.0, 0.0];
      shape.FixedSize = false;
      shape.Active = false;
      shape.LineWidth = this.LineWidth;
      this.Shapes.push(shape);

      var pt = this.Viewer.ConvertPointViewerToWorld(x,y);  
      shape.Points.push([pt[0], pt[1]]); // avoid same reference.
      this.ApplyColor(this.OutlineColor);
      }
    }
}

PencilWidget.prototype.SetDrawnCallback = function(callback) {
    this.DrawnCallback = callback;
}

PencilWidget.prototype.HandleMouseUp = function(event) {
  
  if(this.State == PENCIL_WIDGET_ACTIVE)
    {
    this.CheckActive(event);
    }
  else if(this.State == PENCIL_WIDGET_DRAG)
    {
    this.CheckActive(event);
    if(this.IsShapeUpdate)this.Viewer.UpdateCallback(this);
    this.IsShapeUpdate = false;
    }
  else
    {
    if (event.SystemEvent.which == 3) 
      {
      // Right mouse was pressed.
      // Pop up the properties dialog.
      this.ShowPropertiesDialog();
      }
    // Middle mouse deactivates the widget.
    if (event.SystemEvent.which == 2) 
      {
      // Middle mouse was pressed.
      this.Deactivate();
      this.DrawnCallback(this);
      if(this.IsShapeUpdate)this.Viewer.UpdateCallback(this);
      this.IsShapeUpdate = false;
      }

    // A stroke has just been finished.
    if (event.SystemEvent.which == 1 && this.Shapes.length > 0) 
      {
      var spacing = this.Viewer.GetSpacing();
      this.Decimate(this.Shapes[this.Shapes.length - 1], spacing);
      RecordState();
      }

    if(this.OneLineOnly)
      {
      this.Deactivate();
      this.DrawnCallback(this);
      if(this.IsShapeUpdate)this.Viewer.UpdateCallback(this);
      this.IsShapeUpdate = false;
      }
    }   
}

PencilWidget.prototype.HandleDoubleClick = function(event) {
  this.Deactivate();
}

PencilWidget.prototype.HandleMouseMove = function(event) {
  var x = event.MouseX;
  var y = event.MouseY;

  // Move the pencil icon to follow the mouse.
  this.Cursor.css({'left': x, 'bottom': y});  
  
  if (this.State == PENCIL_WIDGET_ACTIVE) 
    {
    this.CheckActive(event);
    }
  else if(this.State == PENCIL_WIDGET_DRAG)
    {
    var pt = this.Viewer.ConvertPointViewerToWorld(x,y);
    var point = this.Shapes[this.ActivePoint[0]].Points[this.ActivePoint[1]];
    var deltaX = point[0] - pt[0];
    var deltaY = point[1] - pt[1];
    for (var j = 0; j < this.Shapes.length; ++j) 
      {
      for(var i = 0; i < this.Shapes[j].Points.length; ++i) 
        {
        this.Shapes[j].Points[i][0] -= deltaX;
        this.Shapes[j].Points[i][1] -= deltaY;
        this.Shapes[j].UpdateBuffers();
        }
      }
    this.IsShapeUpdate = true;
    eventuallyRender();    
    }
  else if (event.MouseDown == true) 
    {
    if (event.SystemEvent.which == 1) 
      {
      var shape = this.Shapes[this.Shapes.length-1];
      var pt = this.Viewer.ConvertPointViewerToWorld(x,y);  
      shape.Points.push([pt[0], pt[1]]); // avoid same reference.
      shape.UpdateBuffers();
      this.ApplyColor(this.OutlineColor);
      eventuallyRender();
      this.IsShapeUpdate = true;
      return;
      }
    }  
}


PencilWidget.prototype.HandleTouchPan = function(event) {
}
PencilWidget.prototype.HandleTouchPinch = function(event) {
}
PencilWidget.prototype.HandleTouchEnd = function(event) {
}

PencilWidget.prototype.CheckActive = function(event) {
  var x = event.MouseX;
  var y = event.MouseY;
  var pt = this.Viewer.ConvertPointViewerToWorld(x,y);
  
  var textOriginScreenPixelPosition;
  var tMouseX = null;
  var tMouseY = null;
  
  this.IsTextActive = false;
  
  if(this.TextShape != false && this.TextShape.String != "")
    {
    textOriginScreenPixelPosition = this.Viewer.ConvertPointWorldToViewer(this.TextShape.Position[0],this.TextShape.Position[1]);

    tMouseX = (x - textOriginScreenPixelPosition[0]) + this.TextShape.Anchor[0];  
    tMouseY = (y - textOriginScreenPixelPosition[1]) + this.TextShape.Anchor[1];  
    if (tMouseX != null && tMouseX > this.TextShape.PixelBounds[0] && tMouseX < this.TextShape.PixelBounds[1] &&
    tMouseY > this.TextShape.PixelBounds[2] && tMouseY < this.TextShape.PixelBounds[3])
      {
      this.SetActive(true);
      this.IsTextActive = true;
      this.Viewer.SetCursor("text");
      return true;
      }    
    }
  else if(this.Viewer.AnnotationEditable)
    {
    var bounds = this.GetSelectBounds()
    var ptX = bounds[0][0] + (bounds[1][0] - bounds[0][0])/2; 
    var ptY = bounds[1][1]; 
    textOriginScreenPixelPosition = this.Viewer.ConvertPointWorldToViewer(ptX,ptY);

    tMouseX = (x - textOriginScreenPixelPosition[0]);  
    tMouseY = (y - textOriginScreenPixelPosition[1] - 12);  
    
    if(Math.abs(tMouseX) < 35 && Math.abs(tMouseY) < 6)   
      {
      this.SetActive(true);
      this.IsTextActive = true;
      this.Viewer.SetCursor("text");
      return true;
      }
    }
  
  
  for (var j = 0; j < this.Shapes.length; ++j) 
    {
    var shape = this.Shapes[j];
    // Check for mouse touching an edge.
    for(var i = 1; i < shape.Points.length; ++i) 
      {
      if(shape.IntersectPointLine(pt, shape.Points[i-1], shape.Points[i], 200)) 
        {
        this.ActivePoint = [j,i];
        this.SetActive(true);        
        return true;
        }
      }
    }
   
  this.SetActive(false);
  return false;
}

PencilWidget.prototype.GetActive = function() {
  return this.State != PENCIL_WIDGET_WAITING;;  
}

// Setting to active always puts state into "active".
// It can move to other states and stay active.
PencilWidget.prototype.SetActive = function(flag) {  
  for (var j = 0; j < this.Shapes.length; ++j){
    this.Shapes[j].Active = flag;
  }
  if (flag) {
    this.Viewer.SetCursor("move");
    this.Viewer.ActivateWidget(this);
    this.State = PENCIL_WIDGET_ACTIVE;
    if(this.TextShape != false) this.TextShape.Active = true;
    eventuallyRender();
  } else {
    this.Viewer.SetCursor("default");
    this.Cursor.hide();
    this.Viewer.DeactivateWidget(this);
    this.State = PENCIL_WIDGET_WAITING;
    if(this.TextShape != false) this.TextShape.Active = false;
    eventuallyRender();
  }  
}

// Can we bind the dialog apply callback to an objects method?
PencilWidget.prototype.ShowPropertiesDialog = function () {
  //do this later.
}

function PencilPropertyDialogApply() {
}

function PencilPropertyDialogCancel() {
}

function PencilPropertyDialogDelete() {
}

// The real problem is aliasing.  Line is jagged with high frequency sampling artifacts.
// Pass in the spacing as a hint to get rid of aliasing.
PencilWidget.prototype.Decimate = function(shape, spacing) {
  // Keep looping over the line removing points until the line does not change.
  var modified = true;
  while (modified) {
    modified = false;
    var newPoints = [];
    newPoints.push(shape.Points[0]);
    // Window of four points.
    var i = 3;
    while (i < shape.Points.length) {
      var p0 = shape.Points[i];
      var p1 = shape.Points[i-1];
      var p2 = shape.Points[i-2];
      var p3 = shape.Points[i-3];
      // Compute the average of the center two.
      var cx = (p1[0] + p2[0]) * 0.5; 
      var cy = (p1[1] + p2[1]) * 0.5; 
      // Find the perendicular normal.
      var nx = (p0[1] - p3[1]);
      var ny = -(p0[0] - p3[0]);
      var mag = Math.sqrt(nx*nx + ny*ny);
      nx = nx / mag;
      ny = ny / mag;
      mag = Math.abs(nx*(cx-shape.Points[i-3][0]) + ny*(cy-shape.Points[i-3][1]));
      // Mag metric does not distinguish between line and a stroke that double backs on itself.
      // Make sure the two point being merged are between the outer points 0 and 3.
      var dir1 = (p0[0]-p1[0])*(p3[0]-p1[0]) + (p0[1]-p1[1])*(p3[1]-p1[1]);
      var dir2 = (p0[0]-p2[0])*(p3[0]-p2[0]) + (p0[1]-p2[1])*(p3[1]-p2[1]);
      if (mag < spacing && dir1 < 0.0 && dir2 < 0.0) { 
        // Replace the two points with their average.
        newPoints.push([cx, cy]);
        modified = true;
        // Skip the next point the window will have one old merged point,
        // but that is ok because it is just used as reference and not altered.
        i += 2;
      } else {
        //  No modification.  Just move the window one.
        newPoints.push(shape.Points[i-2]);    
        ++i;
      }
    }
    // Copy the remaing point / 2 points
    i = i-2;
    while (i < shape.Points.length) {
      newPoints.push(shape.Points[i]);
      ++i;
    }
    shape.Points = newPoints;
  }

  shape.UpdateBuffers();  
}

PencilWidget.prototype.RemoveFromViewer = function() {
  if (this.Viewer == null) {
    return;
  }
  var idx = this.Viewer.WidgetList.indexOf(this);
  if(idx!=-1) { 
    this.Viewer.WidgetList.splice(idx, 1); 
  }
}
