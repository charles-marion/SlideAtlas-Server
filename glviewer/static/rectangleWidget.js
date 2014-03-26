//==============================================================================
// Mouse down places a point. Mouse up places the oposite point
// Widget starts with an active vertex (mouse up).
// Mouse down->up places the vertex and deactivates it.  A new deactive vertex is created.
// Mouse drag at this point drages an edge from the last vertex.


// Todo: Merge vertecies
// Properties dialog for a point (or list).

var RECTANGLE_WIDGET_NEW = 0;
var RECTANGLE_WIDGET_NEW_FACE = 1;
var RECTANGLE_WIDGET_WAITING = 2;
var RECTANGLE_WIDGET_DRAG = 3;
var RECTANGLE_WIDGET_ACTIVE = 5;
var RECTANGLE_WIDGET_MOVETOP = 6;
var RECTANGLE_WIDGET_MOVERIGHT = 7;
var RECTANGLE_WIDGET_MOVEBOTTOM = 8;
var RECTANGLE_WIDGET_MOVELEFT = 9;


function RectangleWidget (viewer, newFlag) {
  if (viewer === undefined) {
    return;
  }
  var cam = viewer.MainView.Camera;
  var viewport = viewer.MainView.Viewport;

  this.Viewer = viewer;
  this.IsTextActive = false;
  this.CenterDragPoint = false;
  this.MoveStatus = 0;

  this.Shape = new Polyline();
	this.Shape.OutlineColor = [0.0, 0.0, 0.0];
  this.Shape.FixedSize = false;
  this.MiddleCrossOffset = 100;
  this.IsShapeUpdate = false;

  this.Shape.Points[0] = [-50*cam.Height/viewport[3], -50*cam.Height/viewport[3]];
  this.Shape.Points[1] = [0,0];
  this.Shape.Points[2] = [50*cam.Height/viewport[3], 50*cam.Height/viewport[3]];
  
  this.TextShape = false;
  
  this.DrawnCallback = function(widget){};

  this.Viewer.WidgetList.push(this);
  
  // Set line thickness   using viewer. (5 pixels).
  this.Shape.LineWidth = 5.0*cam.Height/viewport[3];
  
  if (newFlag) {
    this.State = RECTANGLE_WIDGET_NEW;
    this.Shape.Active = true;
    this.Viewer.ActivateWidget(this);
  } else {
    this.State = RECTANGLE_WIDGET_WAITING;
  }
  eventuallyRender();
}

RectangleWidget.prototype.Draw = function(view) {
  this.Shape.Draw(view);
  
  // draw cross middle if editable
  if(this.Viewer.AnnotationEditable)
    { 
    var vertical = new Polyline();
    var center = [0,0];
    center[0] = this.Shape.Points[0][0] - (this.Shape.Points[0][0] - this.Shape.Points[1][0])/2;
    center[1] = this.Shape.Points[0][1] - (this.Shape.Points[0][1] - this.Shape.Points[2][1])/2;
    
    vertical.OutlineColor = [0.6, 0.6, 0.6];
    vertical.FixedSize = false;
    vertical.Points = [];
    vertical.Points.push([center[0] - this.MiddleCrossOffset, center[1]]);
    vertical.Points.push([center[0] + this.MiddleCrossOffset, center[1]]);
    vertical.UpdateBuffers();
    vertical.Draw(view)     

    var horizontal = new Polyline();     
    horizontal.OutlineColor = [0.6, 0.6, 0.6];     
    horizontal.FixedSize = false;
    horizontal.Points = [];
    horizontal.Points.push([center[0], center[1] - this.MiddleCrossOffset]);
    horizontal.Points.push([center[0], center[1] + this.MiddleCrossOffset]);
    horizontal.UpdateBuffers();
    horizontal.Draw(view)
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

RectangleWidget.prototype.GetSelectBounds = function() {
  var offset = this.Shape.LineWidth;
  var pt1 = [this.Shape.Points[0][0] - offset, this.Shape.Points[0][1] - offset];
  var pt2 = [this.Shape.Points[2][0] + offset, this.Shape.Points[2][1] + offset];
  return [pt1,pt2];
}

RectangleWidget.prototype.SetDrawnCallback = function(callback) {
    this.DrawnCallback = callback;
}

RectangleWidget.prototype.SetText = function(text, height) {
  this.TextShape = new Text();
  this.TextShape.String = text;  
  this.TextShape.Size = height;  
  this.TextShape.Color = this.Shape.OutlineColor;
  this.TextShape.UpdateBuffers(); 
}

RectangleWidget.prototype.UpdatetTextPosition = function(view) {
  if(this.TextShape != false && this.TextShape.String != "")
    {    
    this.TextShape.Position[0] = this.Shape.Points[0][0] + (this.Shape.Points[2][0] - this.Shape.Points[0][0])/2; 
    this.TextShape.Position[1] = this.Shape.Points[2][1]; 
    var scale = this.Viewer.MainView.Viewport[3] / this.Viewer.MainView.Camera.GetHeight();
    view.Context2d.font = this.TextShape.Size+'pt Calibri';
    var width = view.Context2d.measureText(this.TextShape.String).width;    
    this.TextShape.Anchor = [width/2, -5 - (scale * this.Shape.LineWidth)/2];
    this.TextShape.UpdateBuffers();
    }
}

RectangleWidget.prototype.CheckActive = function(event) {
  var x = event.MouseX;
  var y = event.MouseY;
  var pt = this.Viewer.ConvertPointViewerToWorld(x,y);
  
  this.IsTextActive = false;
  
  var textOriginScreenPixelPosition;
  var tMouseX = null;
  var tMouseY = null;
  
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
    var ptX = this.Shape.Points[0][0] + (this.Shape.Points[2][0] - this.Shape.Points[0][0])/2; 
    var ptY = this.Shape.Points[2][1]; 
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
    
  var center = [0,0];
  center[0] = this.Shape.Points[0][0] - (this.Shape.Points[0][0] - this.Shape.Points[1][0])/2;
  center[1] = this.Shape.Points[0][1] - (this.Shape.Points[0][1] - this.Shape.Points[2][1])/2;
  if(center[0] + this.MiddleCrossOffset > pt[0] &&  center[0] - this.MiddleCrossOffset < pt[0] &&
     center[1] + this.MiddleCrossOffset > pt[1] &&  center[1] - this.MiddleCrossOffset < pt[1] )
     {
     this.Viewer.SetCursor("move");
     this.SetActive(true);
     this.MoveStatus = RECTANGLE_WIDGET_DRAG;
     return true;
     }

  // Check for mouse touching an edge.
  for (var i = 1; i < this.Shape.Points.length; ++i) {
    if (this.Shape.IntersectPointLine(pt, this.Shape.Points[i-1], this.Shape.Points[i], this.Shape.LineWidth)) {
     this.SetActive(true);
     if(this.Shape.Points[i-1][0] == this.Shape.Points[i][0])
       {
       if(this.Shape.Points[i-1][1] > this.Shape.Points[i][1])
         {
         this.MoveStatus = RECTANGLE_WIDGET_MOVELEFT;
         }
       else
         {
         this.MoveStatus = RECTANGLE_WIDGET_MOVERIGHT;
         }
       this.Viewer.SetCursor("ew-resize");
       }
     else
       {
       if(this.Shape.Points[i-1][0] > this.Shape.Points[i][0])
         {
         this.MoveStatus = RECTANGLE_WIDGET_MOVEBOTTOM;
         }
       else
         {
         this.MoveStatus = RECTANGLE_WIDGET_MOVETOP;
         }
       this.Viewer.SetCursor("ns-resize");
       }

     return true;
    }
  }
  this.SetActive(false);
  return false;
}


RectangleWidget.prototype.Serialize = function() {
  if(this.Shape === undefined){ return null; }
  var obj = new Object();
  obj.type = "rectangle";
  obj.outlinecolor = this.Shape.OutlineColor;
  obj.linewidth = this.Shape.LineWidth;
  obj.test = "";
  if(this.TextShape != false && this.TextShape.String != "")
    {
    obj.text = this.TextShape.String;
    }
  // Copy the points to avoid array reference bug.
  obj.points = [];
  for (var i = 0; i < this.Shape.Points.length; ++i) {
    obj.points.push([this.Shape.Points[i][0], this.Shape.Points[i][1]]);
  }
  
  obj.closedloop = this.ClosedLoop;
  return obj;
}

// Load a widget from a json object (origin MongoDB).
RectangleWidget.prototype.Load = function(obj) {
  this.Shape.OutlineColor[0] = parseFloat(obj.outlinecolor[0]);
  this.Shape.OutlineColor[1] = parseFloat(obj.outlinecolor[1]);
  this.Shape.OutlineColor[2] = parseFloat(obj.outlinecolor[2]);
  this.Shape.LineWidth = parseFloat(obj.linewidth);  
  this.CreatePointArray(obj.points[0], obj.points[2]); 
  this.ClosedLoop = (obj.closedloop == "true");
}

RectangleWidget.prototype.CreatePointArray = function(topLeft, bottomRight) {
  var newTopLeft = [0, 0];
  var newBottomRight = [0, 0];
  if(topLeft[0]  < bottomRight[0])
    {
    newTopLeft[0] = topLeft[0];
    newBottomRight[0] = bottomRight[0];
    }
  else
    {
    newTopLeft[0] = bottomRight[0];
    newBottomRight[0] = topLeft[0];
    }
  if(topLeft[1] < bottomRight[1])
    {
    newTopLeft[1] = topLeft[1];
    newBottomRight[1] = bottomRight[1];
    }
  else
    {
    newTopLeft[1] = bottomRight[1];
    newBottomRight[1] = topLeft[1];
    }
  this.Shape.Points = [];
  this.Shape.Points.push(newTopLeft);
  this.Shape.Points.push([newBottomRight[0], newTopLeft[1]]);
  this.Shape.Points.push([newBottomRight[0], newBottomRight[1]]);
  this.Shape.Points.push([newTopLeft[0], newBottomRight[1]]);
  this.Shape.Points.push(newTopLeft);    
  this.Shape.Points.push([newBottomRight[0], newTopLeft[1]]);
  this.Shape.UpdateBuffers();  
}


RectangleWidget.prototype.RemoveFromViewer = function() {
  if (this.Viewer == null) {
    return;
  }
  var idx = this.Viewer.WidgetList.indexOf(this);
  if(idx!=-1) { 
    this.Viewer.WidgetList.splice(idx, 1); 
  }
}



RectangleWidget.prototype.HandleKeyPress = function(keyCode, shift) {
}

RectangleWidget.prototype.HandleDoubleClick = function(event) {
}

RectangleWidget.prototype.Deactivate = function() {
  this.State = RECTANGLE_WIDGET_WAITING;
  this.Viewer.DeactivateWidget(this);
  this.Shape.Active = false;
  if(this.TextShape != false) this.TextShape.Active = false;
  eventuallyRender();
}

// Mouse down does nothing. Mouse up causes all state changes.
RectangleWidget.prototype.HandleMouseDown = function(event) {
  var x = event.MouseX;
  var y = event.MouseY;
  var pt = this.Viewer.ConvertPointViewerToWorld(x,y);
  
  if (this.State == RECTANGLE_WIDGET_NEW) {
    this.State = RECTANGLE_WIDGET_NEW_FACE;
    this.CenterDragPoint = pt;
    eventuallyRender();
    return;
  }

  if (this.State == RECTANGLE_WIDGET_ACTIVE) {
    this.LastMouseWorld = pt;
    this.State = this.MoveStatus;
  }
}

// Returns false when it is finished doing its work.
RectangleWidget.prototype.HandleMouseUp = function(event) {
  var x = event.MouseX;
  var y = event.MouseY;
  var pt = this.Viewer.ConvertPointViewerToWorld(x,y);
  if (this.State == RECTANGLE_WIDGET_NEW_FACE) {
    this.Shape.UpdateBuffers();
    eventuallyRender();
    this.SetActive(false);
    RecordState();
    this.DrawnCallback(this);
    if(this.IsShapeUpdate)this.Viewer.UpdateCallback(this);
    this.IsShapeUpdate = false;
    return;
  }
  
  if(this.State == RECTANGLE_WIDGET_DRAG || this.State == RECTANGLE_WIDGET_MOVEBOTTOM ||
      this.State == RECTANGLE_WIDGET_MOVETOP ||
      this.State == RECTANGLE_WIDGET_MOVERIGHT ||
      this.State == RECTANGLE_WIDGET_MOVELEFT)
    {
    eventuallyRender();
    this.SetActive(false);
    if(this.IsShapeUpdate)this.Viewer.UpdateCallback(this);
    this.IsShapeUpdate = false;
    RecordState();
    }
}


RectangleWidget.prototype.HandleMouseMove = function(event) {
  var x = event.MouseX;
  var y = event.MouseY;
  var pt = this.Viewer.ConvertPointViewerToWorld(x,y);
  var topLeft;
  var bottomRight;

  if (this.State == RECTANGLE_WIDGET_NEW_FACE) {
    var center =  this.CenterDragPoint;
    var offset = [center[0] - pt[0], center[1] -pt[1]];  
    var topleft = [center[0] - offset[0], center[1] - offset[1]];
    var bottomright = [center[0] + offset[0], center[1] + offset[1]];
    this.CreatePointArray(topleft, bottomright);
   
    this.Shape.UpdateBuffers();
    eventuallyRender();
    this.IsShapeUpdate = true;
    return;
  } 
 else if(this.State == RECTANGLE_WIDGET_DRAG || this.State == RECTANGLE_WIDGET_NEW)
   {
   topLeft = this.Shape.Points[0];
   bottomRight = this.Shape.Points[2];
   
   var newTopLeft = [(topLeft[0] - bottomRight[0])/2 + pt[0],
                     -(bottomRight[1] - topLeft[1])/2 + pt[1]];
   var newBottomRight = [-(topLeft[0] - bottomRight[0])/2 + pt[0],
                     (bottomRight[1] - topLeft[1])/2 + pt[1]];
                   
   this.CreatePointArray(newTopLeft, newBottomRight);
   eventuallyRender();
   this.IsShapeUpdate = true;
   return;
   }
 else if(this.State == RECTANGLE_WIDGET_MOVELEFT)
   {
   topLeft = this.Shape.Points[0];
   topLeft[0] = pt[0];
   bottomRight = this.Shape.Points[2];
   this.CreatePointArray(topLeft, bottomRight);
   eventuallyRender();
   this.IsShapeUpdate = true;
   return;
   }
 else if(this.State == RECTANGLE_WIDGET_MOVERIGHT)
   {
   topLeft = this.Shape.Points[0];
   bottomRight = this.Shape.Points[2];
   bottomRight[0] = pt[0];
   this.CreatePointArray(topLeft, bottomRight);
   eventuallyRender();
   this.IsShapeUpdate = true;
   return;
   }
 else if(this.State == RECTANGLE_WIDGET_MOVETOP)
   {
   topLeft = this.Shape.Points[0];
   bottomRight = this.Shape.Points[2];
   topLeft[1] = pt[1];
   this.CreatePointArray(topLeft, bottomRight);
   eventuallyRender();
   this.IsShapeUpdate = true;
   return;
   }
 else if(this.State == RECTANGLE_WIDGET_MOVEBOTTOM)
   {
   topLeft = this.Shape.Points[0];
   bottomRight = this.Shape.Points[2];
   bottomRight[1] = pt[1];
   this.CreatePointArray(topLeft, bottomRight);
   eventuallyRender();
   this.IsShapeUpdate = true;
   return;
   }

  
 if (this.State == RECTANGLE_WIDGET_ACTIVE) {
    this.CheckActive(event);
  }
}


RectangleWidget.prototype.HandleTouchPan = function(event) {
}
RectangleWidget.prototype.HandleTouchPinch = function(event) {
}
RectangleWidget.prototype.HandleTouchEnd = function(event) {
}

// Multiple active states.  Active state is a bit confusing.
// Only one state (WAITING) does not receive events from the viewer.
RectangleWidget.prototype.GetActive = function() {
  if (this.State == RECTANGLE_WIDGET_WAITING) {
    return false;  
  }
  return true;
}

// Active simply means that the widget is receiving events.
// This widget can activate verticies, the whole polyline, or a middle vertex.
RectangleWidget.prototype.SetActive = function(flag) {  
  if (flag == this.GetActive()) {
    return;
  }

  if (flag) {
    this.State = RECTANGLE_WIDGET_ACTIVE;  
    this.Shape.Active = true;
    if(this.TextShape != false) this.TextShape.Active = true;
    this.Viewer.ActivateWidget(this);
    eventuallyRender();
  } else {
    this.Deactivate();
  }
}

