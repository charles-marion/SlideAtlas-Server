//==============================================================================
// This widget will first be setup to define an arrow.
// Viewer will forward events to the arrow.
// TODO: I need to indicate that the base of the arrow has different active
// state than the rest.




// The arrow has just been created and is following the mouse.
// I have to differentiate from ARROW_WIDGET_DRAG because
// dragging while just created cannot be relative.  It places the tip on the mouse.
var ARROW_WIDGET_NEW = 0;
var ARROW_WIDGET_DRAG = 1; // The whole arrow is being dragged.
var ARROW_WIDGET_DRAG_TIP = 2;
var ARROW_WIDGET_DRAG_TAIL = 3;
var ARROW_WIDGET_WAITING = 4; // The normal (resting) state.
var ARROW_WIDGET_ACTIVE = 5; // Mouse is over the widget and it is receiving events.
var ARROW_WIDGET_PROPERTIES_DIALOG = 6; // Properties dialog is up


// We might get rid of the new flag by passing in a null viewer.
function ArrowWidget (viewer, newFlag) {
  if (viewer == null) {
    return null;
  }
  this.Viewer = viewer;
  this.IsTextActive = false;

  // Wait to create this until the first move event.
  this.Shape = new Arrow();
  this.Shape.Origin = [0,0];
  this.Shape.SetFillColor([0.0, 0.0, 0.0]);
  this.Shape.OutlineColor = [1.0, 1.0, 1.0];
  this.Shape.Length = 50;
  this.Shape.Width = 8;
  
  this.IsShapeUpdate = false;
  
  this.TextShape = false;
  this.DrawnCallback = function(widget){};
  
  // Note: If the user clicks before the mouse is in the
  // canvas, this will behave odd.
  this.TipPosition = [0,0];
  this.TipOffset = [0,0];

  if (viewer) {
    viewer.WidgetList.push(this);
    if (newFlag && viewer) {
      this.State = ARROW_WIDGET_NEW;
      this.Viewer.ActivateWidget(this);
      return;
    }
  }

  this.State = ARROW_WIDGET_WAITING;
}

ArrowWidget.prototype.Draw = function(view) {
    this.Shape.Draw(view);
    if(this.TextShape != false && this.TextShape.String != "")
      {
      this.UpdatetTextPosition();
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

ArrowWidget.prototype.UpdatetTextPosition = function(view) {
  if(this.TextShape != false && this.TextShape.String != "")
    {
    this.TextShape.Position= this.Shape.Origin; 
    var theta = this.Shape.Orientation * 3.1415926536 / 180.0;
    var y = Math.sin( theta) * (this.Shape.PointBuffer[9]+4);
    var x = Math.cos( theta) * (this.Shape.PointBuffer[9]+4);    
    if(y < 0) y -= 5
    this.TextShape.Anchor = [-x,-y];
    }
}

ArrowWidget.prototype.GetSelectBounds = function() {
  var theta = this.Shape.Orientation * 3.1415926536 / 180.0;
  var y = Math.sin( theta) * (this.Shape.PointBuffer[9]);
  var x = Math.cos( theta) * (this.Shape.PointBuffer[9]);    
  x = this.Shape.Origin[0] + x/this.Viewer.GetPixelsPerUnit();
  y = this.Shape.Origin[1] + y/this.Viewer.GetPixelsPerUnit();
  var pt1 = [this.Shape.Origin[0], this.Shape.Origin[1]];
  var pt2 = [x, y];
  return [pt1,pt2];
}

ArrowWidget.prototype.SetDrawnCallback = function(callback) {
    this.DrawnCallback = callback;
}

ArrowWidget.prototype.SetText = function(text, height) {
  this.TextShape = new Text();
  this.TextShape.String = text;  
  this.TextShape.Size = height;  
  this.TextShape.Color = this.Shape.FillColor;
  this.TextShape.Position= this.Shape.Origin; 
  this.TextShape.UpdateBuffers(); 
}


ArrowWidget.prototype.RemoveFromViewer = function() {
  if (this.Viewer == null) {
    return;
  }
  var idx = this.Viewer.WidgetList.indexOf(this);
  if(idx!=-1) { 
    this.Viewer.WidgetList.splice(idx, 1); 
  }
}

ArrowWidget.prototype.Serialize = function() {
  if(this.Shape === undefined) { 
    return null; 
  }

  var obj = new Object();
  obj.type = "arrow";
  obj.origin = this.Shape.Origin
  obj.fillcolor = this.Shape.FillColor;
  obj.outlinecolor = this.Shape.OutlineColor;
  obj.length = this.Shape.Length;
  obj.width = this.Shape.Width;
  obj.orientation = this.Shape.Orientation;
  obj.fixedsize = this.Shape.FixedSize;
  obj.fixedorientation = this.Shape.FixedOrientation;
  
  obj.test = "";
  if(this.TextShape != false && this.TextShape.String != "")
    {
    obj.text = this.TextShape.String;
    }

  return obj;
}

// Load a widget from a json object (origin MongoDB).
ArrowWidget.prototype.Load = function(obj) {
  this.Shape.Origin = [parseFloat(obj.origin[0]), parseFloat(obj.origin[1])];
  this.Shape.FillColor = [parseFloat(obj.fillcolor[0]),parseFloat(obj.fillcolor[1]),parseFloat(obj.fillcolor[2])];
  this.Shape.OutlineColor = [parseFloat(obj.outlinecolor[0]),parseFloat(obj.outlinecolor[1]),parseFloat(obj.outlinecolor[2])];
  this.Shape.Length = parseFloat(obj.length);
  this.Shape.Width = parseFloat(obj.width);
  this.Shape.Orientation = parseFloat(obj.orientation);
 
  if (obj.fixedsize === undefined) {
    this.Shape.FixedSize = true;
  } else {
    this.Shape.FixedSize = (obj.fixedsize == "true");
  }
  
  if (obj.fixedorientation === undefined) {
    this.Shape.FixedOrientation = true;
  } else {
    this.Shape.FixedOrientation = (obj.fixedorientation == "true");
  }
  this.Shape.UpdateBuffers();
}

// When we toggle fixed size, we have to convert the length of the arrow
// between viewer and world.
ArrowWidget.prototype.SetFixedSize = function(fixedSizeFlag) {
  if (this.Shape.FixedSize == fixedSizeFlag) {
    return;
  }
  var pixelsPerUnit = this.Viewer.GetPixelsPerUnit();

  if (fixedSizeFlag) {
    // Convert length from world to viewer.
    this.Shape.Length *= pixelsPerUnit;
    this.Shape.Width *= pixelsPerUnit;
  } else {
    this.Shape.Length /= pixelsPerUnit;
    this.Shape.Width /= pixelsPerUnit;
  }
  this.Shape.FixedSize = fixedSizeFlag;
  this.Shape.UpdateBuffers();
  eventuallyRender();
}



ArrowWidget.prototype.HandleKeyPress = function(keyCode, shift) {
}

ArrowWidget.prototype.HandleMouseDown = function(event) {
  if (event.SystemEvent.which != 1)
    {
    return;
    }
  if (this.State == ARROW_WIDGET_NEW) {
    this.TipPosition = [event.MouseX, event.MouseY];
    this.State = ARROW_WIDGET_DRAG_TAIL;
  }
  if (this.State == ARROW_WIDGET_ACTIVE) {
    if (this.ActiveTail) {
      this.TipPosition = this.Viewer.ConvertPointWorldToViewer(this.Shape.Origin[0], this.Shape.Origin[1]);
      this.State = ARROW_WIDGET_DRAG_TAIL;
    } else {
      var tipPosition = this.Viewer.ConvertPointWorldToViewer(this.Shape.Origin[0], this.Shape.Origin[1]);
      this.TipOffset[0] = tipPosition[0] - event.MouseX;
      this.TipOffset[1] = tipPosition[1] - event.MouseY;
      this.State = ARROW_WIDGET_DRAG;
    }
  }
}

// returns false when it is finished doing its work.
ArrowWidget.prototype.HandleMouseUp = function(event) {
  if (this.State == ARROW_WIDGET_ACTIVE && event.SystemEvent.which == 3) {
    // Right mouse was pressed.
    // Pop up the properties dialog.
    // Which one should we popup?
    // Add a ShowProperties method to the widget. (With the magic of javascript). 
    this.State = ARROW_WIDGET_PROPERTIES_DIALOG;
    this.ShowPropertiesDialog();
  } else if (this.State != ARROW_WIDGET_PROPERTIES_DIALOG) {
    this.DrawnCallback(this);
    if(this.IsShapeUpdate)this.Viewer.UpdateCallback(this);
    this.IsShapeUpdate = false;
    this.SetActive(false);
  }
}

ArrowWidget.prototype.HandleMouseMove = function(event) {
  var x = event.MouseX;
  var y = event.MouseY;

  if (event.MouseDown == false && this.State == ARROW_WIDGET_ACTIVE) {
    this.CheckActive(event);
    return;
  }

  if (this.State == ARROW_WIDGET_NEW || this.State == ARROW_WIDGET_DRAG) {
    var viewport = this.Viewer.GetViewport();    
    this.Shape.Origin = this.Viewer.ConvertPointViewerToWorld(x+this.TipOffset[0], y+this.TipOffset[1]);
    eventuallyRender();
    this.IsShapeUpdate = true;
  }

  if (this.State == ARROW_WIDGET_DRAG_TAIL) { 
    var dx = x-this.TipPosition[0];
    var dy = y-this.TipPosition[1];
    if ( ! this.Shape.FixedSize) {
      var pixelsPerUnit = this.Viewer.GetPixelsPerUnit();
      dx /= pixelsPerUnit;
      dy /= pixelsPerUnit;
    }
    this.Shape.Length = Math.sqrt(dx*dx + dy*dy);
    this.Shape.Orientation = Math.atan2(dy, dx) * 180.0 / Math.PI;
    this.Shape.UpdateBuffers();
    eventuallyRender();
    this.IsShapeUpdate = true;
  }

  if (this.State == ARROW_WIDGET_WAITING) { 
    this.CheckActive(event);
  }
}

ArrowWidget.prototype.CheckActive = function(event) {
  var viewport = this.Viewer.GetViewport();
  var cam = this.Viewer.MainView.Camera;
  var m = cam.Matrix;
  // Compute tip point in screen coordinates.
  var x = this.Shape.Origin[0];
  var y = this.Shape.Origin[1];
  // Convert from world coordinate to view (-1->1);
  var h = (x*m[3] + y*m[7] + m[15]);
  var xNew = (x*m[0] + y*m[4] + m[12]) / h;
  var yNew = (x*m[1] + y*m[5] + m[13]) / h;
  // Convert from view to screen pixel coordinates.
  xNew = (xNew + 1.0)*0.5*viewport[2] + viewport[0];
  yNew = (yNew + 1.0)*0.5*viewport[3] + viewport[1];

  // Use this point as the origin.
  x = event.MouseX - xNew;
  y = event.MouseY - yNew;
  // Rotate so arrow lies along the x axis.
  var tmp = this.Shape.Orientation * Math.PI / 180.0;
  var ct = Math.cos(tmp);
  var st = Math.sin(tmp);
  xNew = x*ct + y*st;
  yNew = -x*st + y*ct;

  var length = this.Shape.Length;
  var halfWidth = this.Shape.Width / 2.0;
  if ( ! this.Shape.FixedSize) {
    var pixelsPerUnit = this.Viewer.GetPixelsPerUnit();
    length *= pixelsPerUnit;
    halfWidth *= pixelsPerUnit;
  }
  
  this.IsTextActive = false;
  
  var textOriginScreenPixelPosition;
  var tMouseX = null;
  var tMouseY = null;
  
  if(this.TextShape != false && this.TextShape.String != "")
    {
    textOriginScreenPixelPosition = this.Viewer.ConvertPointWorldToViewer(this.TextShape.Position[0],this.TextShape.Position[1]);
    
    tMouseX = (event.MouseX - textOriginScreenPixelPosition[0]) + this.TextShape.Anchor[0];  
    tMouseY = (event.MouseY - textOriginScreenPixelPosition[1]) + this.TextShape.Anchor[1];  
   
    if (tMouseX > this.TextShape.PixelBounds[0] && tMouseX < this.TextShape.PixelBounds[1] &&
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
    var theta = this.Shape.Orientation * 3.1415926536 / 180.0;
    var yAnchor = Math.sin( theta) * (this.Shape.PointBuffer[9]+4);
    var xAnchor  = Math.cos( theta) * (this.Shape.PointBuffer[9]+4);    
    if(yAnchor < 0) yAnchor -= 5
    textOriginScreenPixelPosition = this.Viewer.ConvertPointWorldToViewer(this.Shape.Origin[0], this.Shape.Origin[1]);
    tMouseX = (event.MouseX - textOriginScreenPixelPosition[0]  - xAnchor );  
    tMouseY = (event.MouseY - textOriginScreenPixelPosition[1] - yAnchor  - 6);  
    if(tMouseX > 0 && tMouseX < 70 && Math.abs(tMouseY) < 6)   
      {
      this.SetActive(true);
      this.IsTextActive = true;
      this.Viewer.SetCursor("text");
      return true;
      }
    }
  

  this.ActiveTail = false;
  if (xNew > 0.0 && xNew < length && yNew > -halfWidth && yNew < halfWidth) {
    this.SetActive(true);
    // Save the position along the arrow to decide which drag behavior to use.
    if (xNew > length - halfWidth*4) 
      {
      this.ActiveTail = true;
      this.Viewer.SetCursor("col-resize");
      }
    else
      {
      this.Viewer.SetCursor("move");
      }
    return true;
  } else {
    this.Viewer.SetCursor("move");
    this.SetActive(false);
    return false;
  }
}

// We have three states this widget is active.
// First created and folloing the mouse (actually two, head or tail following). Color nbot active.
// Active because mouse is over the arrow.  Color of arrow set to active.
// Active because the properties dialog is up. (This is how dialog know which widget is being edited).
ArrowWidget.prototype.GetActive = function() {
  if (this.State == ARROW_WIDGET_WAITING) {
    return false;  
  }
  return true;
}

ArrowWidget.prototype.SetActive = function(flag) {  
  if (flag == this.GetActive()) {
    return;
  }

  if (flag) {
    this.State = ARROW_WIDGET_ACTIVE;  
    this.Shape.Active = true;
    if(this.TextShape != false) this.TextShape.Active = true;
    this.Viewer.ActivateWidget(this);
    eventuallyRender();
  } else {
    this.State = ARROW_WIDGET_WAITING;
    this.Shape.Active = false;
    if(this.TextShape != false) this.TextShape.Active = false;
    this.Viewer.DeactivateWidget(this);
    eventuallyRender();
  }
}

// Can we bind the dialog apply callback to an objects method?
var ARROW_WIDGET_DIALOG_SELF;
ArrowWidget.prototype.ShowPropertiesDialog = function () {
  //var fs = document.getElementById("ArrowFixedSize");
  //fs.checked = this.Shape.FixedSize;

  var color = document.getElementById("arrowcolor");
  color.value = ConvertColorToHex(this.Shape.FillColor);
  
  var lengthLabel = document.getElementById("ArrowLength");
  //if (fs.checked) {
  //  lengthLabel.innerHTML = "Length: " + (this.Shape.Length).toFixed(2) + " pixels";
  //} else {
  //  lengthLabel.innerHTML = "Length: " + (this.Shape.Length).toFixed(2) + " units";
  //}
  
  ARROW_WIDGET_DIALOG_SELF = this;
  $("#arrow-properties-dialog").dialog("open");
}    

// I need this because old schemes cannot use "Load"
ArrowWidget.prototype.SetColor = function (hexColor) {
  this.Shape.SetFillColor(hexColor);
  eventuallyRender();
}

function ArrowPropertyDialogApply() {
  var widget = ARROW_WIDGET_DIALOG_SELF;
  if ( ! widget) { 
    return; 
  }

  var hexcolor = document.getElementById("arrowcolor").value;
  //var fixedSizeFlag = document.getElementById("ArrowFixedSize").checked;
  widget.Shape.SetFillColor(hexcolor);
  if (widget != null) {
    widget.SetActive(false);
    //widget.SetFixedSize(fixedSizeFlag);
  }
  eventuallyRender();
}

function ArrowPropertyDialogCancel() {
  var widget = ARROW_WIDGET_DIALOG_SELF;
  if (widget != null) {
    widget.SetActive(false);
  }
}

function ArrowPropertyDialogDelete() {
  var widget = ARROW_WIDGET_DIALOG_SELF;
  if (widget != null) {
    viewer.ActiveWidget = null;
    // We need to remove an item from a list.
    // shape list and widget list.
    widget.RemoveFromViewer();
    eventuallyRender();
  }
}






