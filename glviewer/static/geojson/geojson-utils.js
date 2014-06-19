/* Copyright (c) 2006-2013 by OpenLayers Contributors (see authors.txt for
 * full list of contributors). Published under the 2-clause BSD license.
 * See license.txt in the OpenLayers distribution or repository for the
 * full text of the license. */

var geoJson = geoJson || {};
geoJson.Io =  geoJson.Io || {};

if(typeof console == "undefined")
  {
  console = {};
  console.log = function(){};
  }
/**
* APIMethod: read
* Deserialize a GeoJSON string.
*
* Parameters:
* json - {String} A GeoJSON string
* type - {String} Optional string that determines the structure of
*     the output.  Supported values are "Geometry", "Feature", and
*     "FeatureCollection".  If absent or null, a default of
*     "FeatureCollection" is assumed.
* filter - {Function} A function which will be called for every key and
*     value at every level of the final result. Each value will be
*     replaced by the result of the filter function. This can be used to
*     reform generic objects into instances of classes, or to transform
*     date strings into Date objects.
*
* Returns: 
* {Object} The return depends on the value of the type argument. If type
*     is "FeatureCollection" (the default), the return will be an array
*     of <OpenLayers.Feature.Vector>. If type is "Geometry", the input json
*     must represent a single geometry, and the return will be an
*     <OpenLayers.Geometry>.  If type is "Feature", the input json must
*     represent a single feature, and the return will be an
*     <OpenLayers.Feature.Vector>.
*/
geoJson.Io.read = function(json)
  {
  var obj = jQuery.parseJSON(json);
 
  if(obj == null || obj.type != "FeatureCollection") 
    {
    console.log("Bad JSON: " + json);
    return;
    } 
    
  $.each(obj.features, function(i, feature)
    {
    geoJson.Io.createObj[feature.geometry.type].apply(
          this, [feature]
          );
    if(typeof feature.properties.text != "undefined")
      {
      var widget = VIEWER1.WidgetList[VIEWER1.WidgetList.length-1];
      if(typeof widget.SetText != "undefined")
        {
        widget.SetText(feature.properties.text,12);
        }
      }
    })      
  }



geoJson.Io.createObj = {

  "point": function(array) {
    // Todo Create point
    //array[0], array[1]
  },
  
  "circle": function(feature) {
    var obj = {}
    obj.type = "circle";
    obj.origin = feature.geometry.coordinates[0];
    obj.radius = feature.geometry.coordinates[1];
    obj.outlinecolor = feature.properties.outlinecolor;
    obj.linewidth = feature.properties.linewidth;
    obj.dynamicwidth = feature.properties.dynamicwidth;
    VIEWER1.LoadWidget(obj);
  },
  
  "rectangle": function(feature) {
    var obj = {}
    obj.type = "rectangle";
    obj.points = feature.geometry.coordinates;
    obj.outlinecolor = feature.properties.outlinecolor;
    obj.linewidth = feature.properties.linewidth;
    obj.dynamicwidth = feature.properties.dynamicwidth;
    VIEWER1.LoadWidget(obj);
  },
  
  "pencil": function(feature) {
    var obj = {}
    obj.type = "pencil";
    obj.shapes = feature.geometry.coordinates;
    obj.outlinecolor = feature.properties.outlinecolor;
    obj.linewidth = feature.properties.linewidth;
    obj.dynamicwidth = feature.properties.dynamicwidth;
    VIEWER1.LoadWidget(obj);
  },
  
  "arrow": function(feature) {
    var obj = {}
    obj.type = "arrow";
    obj.origin = feature.geometry.coordinates.origin;
    obj.fillcolor = feature.geometry.coordinates.fillcolor;
    obj.length = feature.geometry.coordinates.length;
    obj.width = feature.geometry.coordinates.width;
    obj.orientation = feature.geometry.coordinates.orientation;
    obj.fixedsize = ""+feature.geometry.coordinates.fixedsize;
    obj.fixedorientation = ""+feature.geometry.coordinates.fixedorientation;
    obj.outlinecolor = feature.properties.outlinecolor;
    obj.linewidth = feature.properties.linewidth;
    VIEWER1.LoadWidget(obj);
  },
  
   "polyline": function(feature) {
    var obj = {}
    obj.type = "polyline";
    obj.points = feature.geometry.coordinates.points;
    obj.spacing = feature.geometry.coordinates.spacing;
    obj.closedloop = feature.geometry.coordinates.closedloop;
    obj.outlinecolor = feature.properties.outlinecolor;
    obj.linewidth = feature.properties.linewidth;
    obj.dynamicwidth = feature.properties.dynamicwidth;
    VIEWER1.LoadWidget(obj);
  }
  

},

/**
 * APIMethod: write
 * Serialize a feature, geometry, array of features into a GeoJSON string.
 *
 * Parameters:
 * obj - {Object} An <OpenLayers.Feature.Vector>, <OpenLayers.Geometry>,
 *     or an array of features.
 * pretty - {Boolean} Structure the output with newlines and indentation.
 *     Default is false.
 *
 * Returns:
 * {String} The GeoJSON string representation of the input geometry,
 *     features, or array of features.
 */
geoJson.Io.write = function(obj) {
  var geojson = {
    "type": null
  };
  // Todo
  geojson.type = "FeatureCollection";
  var numFeatures = obj.Annotations.length;
  geojson.features = new Array(numFeatures);
  for(var i=0; i<numFeatures; ++i) {
    var element = obj.Annotations[i];
    geojson.features[i] = this.extract.feature.apply(
      this, [element]
      );
    if(typeof element.text != "undefined" 
        && element.text != "")
      {
      geojson.features[i].properties['text'] = element.text;
      }
  }
  return JSON.stringify(geojson);
}

/**
     * Property: extract
     * Object with properties corresponding to the GeoJSON types.
     *     Property values are functions that do the actual value extraction.
     */
geoJson.Io.extract ={
  /**
         * Method: extract.feature
         * Return a partial GeoJSON object representing a single feature.
         *
         * Parameters:
         * feature - {<OpenLayers.Feature.Vector>}
         *
         * Returns:
         * {Object} An object representing the point.
         */
  'feature': function(feature) {
    var geom = this.extract.geometry.apply(this, [feature]);
    var json = {
      "type": "Feature",
      "properties": {linewidth:feature.linewidth , outlinecolor:feature.outlinecolor, dynamicwidth:feature.dynamicwidth},
      "geometry": geom
    };
    if (feature.fid != null) {
      json.id = feature.fid;
    }
    return json;
  },
        
  /**
         * Method: extract.geometry
         * Return a GeoJSON object representing a single geometry.
         *
         * Parameters:
         * geometry - {<OpenLayers.Geometry>}
         *
         * Returns:
         * {Object} An object representing the geometry.
         */
  'geometry': function(geometry) {
    if (geometry == null) {
      return null;
    }
                    
    var geometryType = geometry.type;
    var data = this.extract[geometryType.toLowerCase()].apply(this, [geometry]);
    var json;
    if(geometryType == "Collection") {
      json = {
        "type": "GeometryCollection",
        "geometries": data
      };
    } else {
      json = {
        "type": geometryType,
        "coordinates": data
      };
    }
            
    return json;
  },
  

  'point': function(point) {
    return [point.x, point.y];
  },

 
  'circle': function(circle) {
    return [circle.origin, circle.radius];
  },
  
  'rectangle': function(rectangle) {
    return rectangle.points;
  },
  
  'pencil': function(rectangle) {
    return rectangle.shapes;
  },
  
  'arrow': function(arrow) {
    return {origin:arrow.origin,  fillcolor: arrow.fillcolor,
      length:arrow.length,
      width:arrow.width,
      orientation:arrow.orientation,
      fixedsize:arrow.fixedsize,
      fixedorientation:arrow.fixedorientation
    };
  },
 
  'polyline': function(multipoint) {
    var array = {points: multipoint.points,
      closedloop: multipoint.closedloop,
      spacing: multipoint.spacing
    }
    return array;
  }               

}
    