//==============================================================================
// Mouse click places a point.
// A small circle will be used to shaow an active vertex.
// Widget starts with an active vertex (mouse up).
// Mouse down->up places the vertex and deactivates it.  A new deactive vertex is created.
// Mouse drag at this point drages an edge from the last vertex.


// Todo: Merge vertecies
// Properties dialog for a point (or list).

var POLYLINE_WIDGET_NEW = 0;
var POLYLINE_WIDGET_NEW_EDGE = 1;
var POLYLINE_WIDGET_WAITING = 2;
var POLYLINE_WIDGET_VERTEX_ACTIVE = 3;
var POLYLINE_WIDGET_MIDPOINT_ACTIVE = 4;
var POLYLINE_WIDGET_ACTIVE = 5;
var POLYLINE_WIDGET_PROPERTIES_DIALOG = 6;


function PolylineWidget (viewer, newFlag, oneLineOnly) {
  if (viewer === undefined) {
    return;
  }
  if(typeof oneLineOnly == "undefined") oneLineOnly = false;
  var cam = viewer.MainView.Camera;
  var viewport = viewer.MainView.Viewport;

  this.Viewer = viewer;
  this.IsClicked = false;
  // If the last point is the same as the first point, ClosedLoop is true.
  this.ClosedLoop = false;
  // Circle is to show an active vertex.
  this.Circle = new Circle();
  this.Circle.FillColor = [1.0, 1.0, 0.2];
  this.Circle.OutlineColor = [0.0,0.0,0.0];
  this.Circle.FixedSize = false;
  this.Circle.ZOffset = -0.05;
  
  this.Spacing = false;
  this.RulerShape = false;
  
  this.OneLineOnly = oneLineOnly; // It means the widget is disable when mouse up
  this.IsShapeUpdate = false;
  
  this.DrawnCallback = function(widget){};

  this.Shape = new Polyline();
	this.Shape.OutlineColor = [0.0, 0.0, 0.0];
  this.Shape.FixedSize = false;
  this.Shape.DynamicWidth = false;

  this.Viewer.WidgetList.push(this);
  
  // Set line thickness   using viewer. (5 pixels).
  this.Shape.LineWidth = 5.0*cam.Height/viewport[3];
  this.Circle.Radius = this.Shape.LineWidth; 
  this.Circle.UpdateBuffers();
  
  if (newFlag) {
    this.Viewer.SetCursor("crosshair");
    this.State = POLYLINE_WIDGET_NEW;
    this.Shape.Active = true;
    this.ActiveVertex = -1;
    this.Viewer.ActivateWidget(this);
  } else {
    this.State = POLYLINE_WIDGET_WAITING;
    this.Circle.Visibility = false;
    this.ActiveVertex == -1;
  }
  this.ActiveMidpoint = -1;
  eventuallyRender();
}

PolylineWidget.prototype.Draw = function(view) {
    var defaultWidth = this.Shape.LineWidth;
    if(this.Shape.DynamicWidth)
      {
      var factor = (this.Viewer.MainView.Camera.Height/this.Viewer.MainView.Viewport[3]);
      this.Shape.LineWidth = factor;
      }
    this.Shape.Draw(view);
    this.Circle.Draw(view);
    if(this.RulerShape != false && this.RulerShape.String != "")
      {
      this.UpdatetRulerLabelPosition(view);
      this.RulerShape.Draw(view);  
      }
      
    this.Shape.LineWidth = defaultWidth;
}

PolylineWidget.prototype.UpdatetRulerLabelPosition = function(view) {
  
  if(this.RulerShape != false && this.RulerShape.String != "")
    {    
    var bounds = this.GetSelectBounds()
    this.RulerShape.Position[0] = bounds[0][0] + (bounds[1][0] - bounds[0][0])/2; 
    this.RulerShape.Position[1] = bounds[1][1]; 
    var scale = this.Viewer.MainView.Viewport[3] / this.Viewer.MainView.Camera.GetHeight();
    view.Context2d.font = this.RulerShape.Size+'pt Calibri';
    var width = view.Context2d.measureText(this.RulerShape.String).width;    
    
    if(typeof this.Shape.Points[1] == "undefined") return;
    
    var deltaY = this.Shape.Points[1][1] - this.Shape.Points[0][1];
    var deltaX = this.Shape.Points[1][0] - this.Shape.Points[0][0];
    if(Math.abs(deltaY) >  30 / this.Viewer.GetPixelsPerUnit())
      {
      if(deltaY > 0 && deltaX > 0 || deltaY < 0 && deltaX < 0)
        {
        this.RulerShape.Position[0] = bounds[0][0] + (bounds[1][0] - bounds[0][0])/2; 
        this.RulerShape.Position[1] = bounds[1][1] - (bounds[1][1] - bounds[0][1])/2 ; 
        this.RulerShape.Anchor = [-width/2  ,0];
        }
      else
        {
        this.RulerShape.Position[0] = bounds[1][0] - (bounds[1][0] - bounds[0][0])/2; 
        this.RulerShape.Position[1] = bounds[1][1] - (bounds[1][1] - bounds[0][1])/2; 
        this.RulerShape.Anchor = [-width/2  ,0];
        }    
      }
    else
      {
      this.RulerShape.Position[0] = bounds[0][0] + (bounds[1][0] - bounds[0][0])/2; 
      this.RulerShape.Position[1] = bounds[1][1]; 
      this.RulerShape.Anchor = [width/2, -5 - scale * 10];
      }    


    this.RulerShape.UpdateBuffers();
    }
}

PolylineWidget.prototype.ShowRuler = function(spacing) {
  if(this.OneLineOnly == false)
    {
    alert('Error: The ruler is only available is we show one line.');
    return;
    }
  this.Spacing = spacing;
  
  this.RulerShape = new Text();
  this.RulerShape.String = "";  
  this.RulerShape.Size = 12;  
  this.RulerShape.Color = this.Shape.OutlineColor;
  this.RulerShape.UpdateBuffers(); 
  
  this.UpdateRuler(spacing);
}

PolylineWidget.prototype.UpdateRuler = function(spacing) {
  if(spacing == false) return;
  var bounds = this.GetSelectBounds();
  var distanceX = bounds[1][0] - bounds[0][0];
  var distanceY = bounds[1][1] - bounds[0][1];
  var distancePixel = Math.sqrt((distanceX * distanceX) + (distanceY * distanceY));
  var distanceUm = distancePixel * spacing * 1000; // the spacing is in mm
  
  if(distanceUm > 1000)
    {
    this.RulerShape.String = ""+(distanceUm/1000).toFixed(2)+"mm"; 
    }
  else
    {
    this.RulerShape.String = ""+distanceUm.toFixed(2)+"µm"; 
    }  
}

PolylineWidget.prototype.GetSelectBounds = function() {  
  var x1 = false;
  var x2 = false;
  var y1 = false;
  var y2 = false;
  
  for(var i = 0; i < this.Shape.Points.length; ++i) 
    {
    var x = this.Shape.Points[i][0];
    var y = this.Shape.Points[i][1];

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
    
  return [[x1, y1], [x2, y2]];
}


PolylineWidget.prototype.Serialize = function() {
  if(this.Shape === undefined){ return null; }
  var obj = new Object();
  obj.type = "polyline";
  obj.outlinecolor = this.Shape.OutlineColor;
  obj.linewidth = this.Shape.LineWidth;
  // Copy the points to avoid array reference bug.
  obj.points = [];
  for (var i = 0; i < this.Shape.Points.length; ++i) {
    obj.points.push([this.Shape.Points[i][0], this.Shape.Points[i][1]]);
  }  
  obj.spacing = this.Spacing;
  obj.closedloop = this.ClosedLoop;
  obj.dynamicwidth = this.Shape.DynamicWidth;
  return obj;
}

// Load a widget from a json object (origin MongoDB).
PolylineWidget.prototype.Load = function(obj) {
  this.Shape.OutlineColor[0] = parseFloat(obj.outlinecolor[0]);
  this.Shape.OutlineColor[1] = parseFloat(obj.outlinecolor[1]);
  this.Shape.OutlineColor[2] = parseFloat(obj.outlinecolor[2]);
  this.Shape.DynamicWidth = obj.dynamicwidth;
  this.Shape.LineWidth = parseFloat(obj.linewidth);
  for(var n=0; n < obj.points.length; n++){
      this.Shape.Points[n] = [parseFloat(obj.points[n][0]),
                            parseFloat(obj.points[n][1])];
  }
  this.ClosedLoop = (obj.closedloop == "true");
  if(obj.spacing != "false")
    {
    this.OneLineOnly = true;
    this.ShowRuler(obj.spacing)
    }
  
  this.Shape.UpdateBuffers();
}



PolylineWidget.prototype.RemoveFromViewer = function() {
  if (this.Viewer == null) {
    return;
  }
  var idx = this.Viewer.WidgetList.indexOf(this);
  if(idx!=-1) { 
    this.Viewer.WidgetList.splice(idx, 1); 
  }
}


PolylineWidget.prototype.CityBlockDistance = function(p0, p1) {
  return Math.abs(p1[0]-p0[0]) + Math.abs(p1[1]-p0[1]);
}

PolylineWidget.prototype.HandleKeyPress = function(keyCode, shift) {
}

PolylineWidget.prototype.HandleDoubleClick = function(event) {
}

PolylineWidget.prototype.Deactivate = function() {
  this.State = POLYLINE_WIDGET_WAITING;
  this.Viewer.DeactivateWidget(this);
  this.Shape.Active = false;
  this.ActivateVertex(-1);
  eventuallyRender();
}

// Mouse down does nothing. Mouse up causes all state changes.
PolylineWidget.prototype.HandleMouseDown = function(event) {
  this.IsClicked = true;
  var x = event.MouseX;
  var y = event.MouseY;
  var pt = this.Viewer.ConvertPointViewerToWorld(x,y);
  
  if (this.State == POLYLINE_WIDGET_NEW) {
    this.Shape.Points.push(pt);
    this.Shape.Points.push([pt[0], pt[1]]); // avoid same reference.
    this.ActivateVertex(-1);
    this.State = POLYLINE_WIDGET_NEW_EDGE;
    eventuallyRender();
    this.IsShapeUpdate = true;
    return;
  }
  if (this.State == POLYLINE_WIDGET_NEW_EDGE) {
    if (this.ActiveVertex >= 0) { // The user clicked on an active vertex.  End the line.
      if (this.ActiveVertex == 0) {
        this.ClosedLoop = true;
      } else {
        this.ClosedLoop = false;
        // Remove the last duplicate point.
        this.Shape.Points.pop();
      }
      this.Deactivate();
      RecordState();
      return;
    }
    this.Shape.Points.push(pt);
    this.Shape.UpdateBuffers();
    eventuallyRender();
    this.IsShapeUpdate = true;
    return;
  }

  if (this.State == POLYLINE_WIDGET_MIDPOINT_ACTIVE && this.OneLineOnly == false) {
    // Compute the midpoint.
    var x = 0.5 * (this.Shape.Points[this.ActiveMidpoint-1][0] + this.Shape.Points[this.ActiveMidpoint][0]);
    var y = 0.5 * (this.Shape.Points[this.ActiveMidpoint-1][1] + this.Shape.Points[this.ActiveMidpoint][1]);
    // Insert the midpoint in the loop.
    this.Shape.Points.splice(this.ActiveMidpoint,0,[x,y]);
    // Now set up dragging interaction on the new point.
    this.ActivateVertex(this.ActiveMidpoint);
    this.ActiveMidpoint = -1;
    this.State = POLYLINE_WIDGET_VERTEX_ACTIVE; // Activate vertex probably does this.
    this.IsShapeUpdate = true;
    }

  if (this.State == POLYLINE_WIDGET_ACTIVE) {
    this.LastMouseWorld = pt;
  }
}

PolylineWidget.prototype.SetDrawnCallback = function(callback) {
    this.DrawnCallback = callback;
}

// Returns false when it is finished doing its work.
PolylineWidget.prototype.HandleMouseUp = function(event) {
  this.IsClicked = false;
  
  // Logic to remove a vertex.  Drag it over a neighbor.
  //if (this.State  do this later.
  
  if (this.State == POLYLINE_WIDGET_ACTIVE && event.SystemEvent.which == 3) {
    // Right mouse was pressed.
    // Pop up the properties dialog.
    this.State = POLYLINE_WIDGET_PROPERTIES_DIALOG;
    this.ShowPropertiesDialog();
  }

  if (event.SystemEvent.which == 1) {
    if (this.State == POLYLINE_WIDGET_NEW_EDGE) {
      if(this.OneLineOnly)
        {
        this.Deactivate();
        }
      this.DrawnCallback(this);
      if(this.IsShapeUpdate)
        {
        this.Viewer.UpdateCallback(this);
        this.UpdateRuler(this.Spacing);
        }
      this.IsShapeUpdate = false;      
    }
    if (this.State == POLYLINE_WIDGET_VERTEX_ACTIVE ||
        this.State == POLYLINE_WIDGET_ACTIVE) {
      // Dragging a vertex or the whole polyline.
      RecordState();      
    }
  }

}


PolylineWidget.prototype.HandleMouseMove = function(event) {
  var x = event.MouseX;
  var y = event.MouseY;
  var pt = this.Viewer.ConvertPointViewerToWorld(x,y);
  
  console.log(event.SystemEvent.which);

  if (this.State == POLYLINE_WIDGET_NEW) {
    this.Circle.Origin = pt;
    eventuallyRender();
    return;
  }
  if (this.State == POLYLINE_WIDGET_NEW_EDGE) {
    var lastIdx = this.Shape.Points.length - 1;
    this.Shape.Points[lastIdx] = pt;
    this.Shape.UpdateBuffers();
    var idx = this.WhichVertexShouldBeActive(pt);
    // Only the first or last vertexes will stop the new line.
    this.ActivateVertex(idx);
    this.UpdateRuler(this.Spacing);
    eventuallyRender();
    return;
  }
  if (this.State == POLYLINE_WIDGET_VERTEX_ACTIVE ||
      this.State == POLYLINE_WIDGET_MIDPOINT_ACTIVE ||
      this.State == POLYLINE_WIDGET_ACTIVE) {
    if (!this.IsClicked) {
      // Turn off the active vertex if the mouse moves away.
      this.SetActive(this.CheckActive(event));
      return;
    }
    if (this.State == POLYLINE_WIDGET_ACTIVE && event.SystemEvent.which == 1) {
      //drag the whole widget.
      var dx = pt[0] - this.LastMouseWorld[0];
      var dy = pt[1] - this.LastMouseWorld[1];
      for (var i = 0; i < this.Shape.Points.length; ++i) {
        this.Shape.Points[i][0] += dx;
        this.Shape.Points[i][1] += dy;
      }
      this.LastMouseWorld = pt;
      this.Shape.UpdateBuffers();
      eventuallyRender();
      return;
    }
    if (this.State == POLYLINE_WIDGET_VERTEX_ACTIVE && event.SystemEvent.which == 1) {
      //drag the vertex
      var last = this.Shape.Points.length-1;
      if (this.ClosedLoop && (this.ActiveVertex == 0 || this.ActiveVertex == last)) {
        this.Shape.Points[0] = pt;
        this.Shape.Points[last] = [pt[0],pt[1]]; // Bug moving entire line with shared points incremented twice.
        }
      else
        {
        this.Shape.Points[this.ActiveVertex] = pt;
        }
      this.Circle.Origin = pt;
      this.Shape.UpdateBuffers();
      this.UpdateRuler(this.Spacing);
      eventuallyRender();
    }
  }
}

// pt is mouse in world coordinates.
PolylineWidget.prototype.WhichVertexShouldBeActive = function(pt) {
  if (this.State == POLYLINE_WIDGET_NEW) {
    return -1;
  }
  var r2 = this.Circle.Radius * this.Circle.Radius;
  if (this.State == POLYLINE_WIDGET_NEW_EDGE) {
    var dx = pt[0] - this.Shape.Points[0][0];
    var dy = pt[1] - this.Shape.Points[0][1];
    var dist2 = dx*dx + dy*dy;
    if (dist2 < r2) { return 0; }
    var last = this.Shape.Points.length - 2;
    if (last >= 0 ) {
      var dx = pt[0] - this.Shape.Points[last][0];
      var dy = pt[1] - this.Shape.Points[last][1];
      var dist2 = dx*dx + dy*dy;
      if (dist2 < r2) { return last; }    
    }
    return -1;
  }

  if (this.State == POLYLINE_WIDGET_WAITING || this.State == POLYLINE_WIDGET_VERTEX_ACTIVE) {
    // Check all the vertecies.
    for (var i = 0; i < this.Shape.Points.length; ++i) {
      var dx = pt[0] - this.Shape.Points[i][0];
      var dy = pt[1] - this.Shape.Points[i][1];
      var dist2 = dx*dx + dy*dy;
      if (dist2 < r2) { 
        return i;
      }
    }
  }
  
  return -1;
}



PolylineWidget.prototype.HandleTouchPan = function(event) {
}
PolylineWidget.prototype.HandleTouchPinch = function(event) {
}
PolylineWidget.prototype.HandleTouchEnd = function(event) {
}


    
PolylineWidget.prototype.CheckActive = function(event) {
  var x = event.MouseX;
  var y = event.MouseY;
  var pt = this.Viewer.ConvertPointViewerToWorld(x,y);

  // First check if any verticies are active.
  var idx = this.WhichVertexShouldBeActive(pt);
  this.ActivateVertex(idx);
  if (idx != -1) {
    this.State = POLYLINE_WIDGET_VERTEX_ACTIVE;
    return true;
  }

  // Check for the mouse over a midpoint.
  if(this.OneLineOnly == false){
    var r2 = this.Circle.Radius * this.Circle.Radius;
    for (idx = 1; idx < this.Shape.Points.length; ++idx) {
      x = 0.5 *(this.Shape.Points[idx-1][0] + this.Shape.Points[idx][0]);
      y = 0.5 *(this.Shape.Points[idx-1][1] + this.Shape.Points[idx][1]);
      var dx = pt[0] - x;
      var dy = pt[1] - y;
      if ((dx*dx + dy*dy) <= r2) {
        this.Circle.Visibility = true;
        this.Circle.Origin = [x, y];
        this.State = POLYLINE_WIDGET_MIDPOINT_ACTIVE;
        this.Shape.Active = false;
        this.ActiveMidpoint = idx;
        return true;
        }
    }
  }  
  
  // Check for mouse touching an edge.
  for (var i = 1; i < this.Shape.Points.length; ++i) {
    if (this.Shape.IntersectPointLine(pt, this.Shape.Points[i-1], this.Shape.Points[i], this.Shape.LineWidth)) {
      this.State = POLYLINE_WIDGET_ACTIVE;
      this.Shape.Active = true;
      this.Viewer.SetCursor("move");
      return true;
    }
  }
  
  return false;
}

// -1 => no active vertex.
PolylineWidget.prototype.ActivateVertex = function(vIdx) {
  if (vIdx >= this.Shape.Points.length) {
    // Index out of bounds.
    alert("PolylineWidget::ActivateVertex: index out of bounds");
    return;
  }
  if (vIdx < 0) {
    this.Circle.Visibility = false;
    eventuallyRender();
  } else {
    this.Circle.Visibility = true;
    this.Circle.Origin = this.Shape.Points[vIdx];
    eventuallyRender();
  }
  
  this.ActiveVertex = vIdx;
}

// Multiple active states.  Active state is a bit confusing.
// Only one state (WAITING) does not receive events from the viewer.
PolylineWidget.prototype.GetActive = function() {
  if (this.State == POLYLINE_WIDGET_WAITING) {
    return false;  
  }
  return true;
}

// Active simply means that the widget is receiving events.
// This widget can activate verticies, the whole polyline, or a middle vertex.
PolylineWidget.prototype.SetActive = function(flag) {  
  if (flag == this.GetActive()) {
    return;
  }

  if (flag) {
    this.State = POLYLINE_WIDGET_ACTIVE;  
    this.Shape.Active = true;
    this.Viewer.ActivateWidget(this);
    eventuallyRender();
  } else {
    this.Deactivate();
  }
}

// Can we bind the dialog apply callback to an objects method?
var POLYLINE_WIDGET_DIALOG_SELF;
PolylineWidget.prototype.ShowPropertiesDialog = function () {
  var color = document.getElementById("polylinecolor");
  color.value = ConvertColorToHex(this.Shape.OutlineColor);

  var lineWidth = document.getElementById("polylinewidth");
  lineWidth.value = (this.Shape.LineWidth).toFixed(2);

  POLYLINE_WIDGET_DIALOG_SELF = this;
  $("#polyline-properties-dialog").dialog("open");
}    

function PolylinePropertyDialogApply() {
  var widget = POLYLINE_WIDGET_DIALOG_SELF;
  if ( ! widget) { 
    return; 
  }
  var hexcolor = document.getElementById("polylinecolor").value;
  widget.Shape.SetOutlineColor(hexcolor);
  var lineWidth = document.getElementById("polylinewidth");
  widget.Shape.LineWidth = parseFloat(lineWidth.value);
  widget.Shape.UpdateBuffers();
  if (widget != null) {
    widget.SetActive(false);
  }
  RecordState();
  eventuallyRender();
}

function PolylinePropertyDialogCancel() {
  var widget = POLYLINE_WIDGET_DIALOG_SELF;
  if (widget != null) {
    widget.SetActive(false);
  }
}

function PolylinePropertyDialogDelete() {
  var widget = POLYLINE_WIDGET_DIALOG_SELF;
  if (widget != null) {
    widget.SetActive(false);
    // We need to remove an item from a list.
    // shape list and widget list.
    widget.RemoveFromViewer();
    eventuallyRender();
    RecordState();
  }
}





