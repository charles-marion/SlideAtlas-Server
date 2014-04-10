var CANVAS;
var EVENT_MANAGER;
var VIEWER1;
var VIEWER2;
var DUAL_VIEW = false;
var records = [];
var viewer_click_callback = function(){
  
}

var NOTES_WIDGET;

  
function draw() {
  if (GL) {
    GL.clear(GL.COLOR_BUFFER_BIT | GL.DEPTH_BUFFER_BIT);
  }
    
  // This just changes the camera based on the current time.
  VIEWER1.Animate();
  if (DUAL_VIEW) {
    VIEWER2.Animate();
  }
  VIEWER1.Draw();
  if (DUAL_VIEW) {
    VIEWER2.Draw();
  }
}

function selectActiveWidget()
  {
  VIEWER1.SetSelectedWidget(getActiveWidget());
  return getActiveWidget();
  }
function unselectActiveWidget()
  {
  VIEWER1.SetSelectedWidget(null);
  }

function getActiveWidget()
  {
  return VIEWER1.ActiveWidget;
  }

function setWidgetText(widget, text, height)
  {
  if(typeof widget.SetText != "undefined")
    {
    widget.SetText(text, height);
    draw();
    }
  }

function setActiveWidget(type, lineWidth)
  {
  var color = "green";
  if(typeof VIEWER1.ActiveColor != "undefined")
    {
    color = VIEWER1.ActiveColor;
    }
  if(type == "circle")
    {
    var widget = new CircleWidget(VIEWER1, true);
    widget.EnableWidgetPopup(false);
    widget.Shape.LineWidth = lineWidth;
    VIEWER1.ActiveWidget = widget;
    VIEWER1.ActiveWidget.Shape.SetOutlineColor(color);
    }
  else if(type == "rectangle")
    {
    var widget = new RectangleWidget(VIEWER1, true);
    widget.Shape.LineWidth = lineWidth;
    VIEWER1.ActiveWidget = widget;
    VIEWER1.ActiveWidget.Shape.SetOutlineColor(color);
    }
  else if(type == "arrow")
    {
    var widget = new ArrowWidget(VIEWER1, true);
    VIEWER1.ActiveWidget = widget;
    VIEWER1.ActiveWidget.Shape.SetFillColor(color);
    }
  else if(type == "pencil")
    {
    var widget = new PencilWidget(VIEWER1, true, false, true);
    widget.LineWidth = lineWidth;
    VIEWER1.ActiveWidget = widget;
    VIEWER1.ActiveWidget.SetOutlineColor(color);
    }
  else if(type == "ruler")
    {
    var widget = new PolylineWidget(VIEWER1, true, true); 
    widget.Shape.LineWidth = lineWidth;
    VIEWER1.ActiveWidget = widget;
    VIEWER1.ActiveWidget.Shape.SetOutlineColor(color);
    }
  else if(VIEWER1.ActiveWidget != null)
    {
    VIEWER1.ActiveWidget.SetActive(false);
    }
  }
  
function setDrawnCallback(callback)
  {
  if(typeof VIEWER1.ActiveWidget.SetDrawnCallback != "undefined") VIEWER1.ActiveWidget.SetDrawnCallback(callback);
  }
  
function setActiveColor(color)
  {
  VIEWER1.ActiveColor = color;
  if(VIEWER1.ActiveWidget instanceof CircleWidget ||
     VIEWER1.ActiveWidget instanceof PolylineWidget ||
    VIEWER1.ActiveWidget instanceof RectangleWidget   )
    {
    VIEWER1.ActiveWidget.Shape.SetOutlineColor(color);
    if(VIEWER1.ActiveWidget.TextShape != false)
      {
      VIEWER1.ActiveWidget.TextShape.Color = VIEWER1.ActiveWidget.Shape.OutlineColor;
      }
    }
  if(VIEWER1.ActiveWidget instanceof ArrowWidget)
    {
    VIEWER1.ActiveWidget.Shape.SetFillColor(color);
    if(VIEWER1.ActiveWidget.TextShape != false)
      {
      VIEWER1.ActiveWidget.TextShape.Color = VIEWER1.ActiveWidget.Shape.FillColor;
      }
    }
  if(VIEWER1.ActiveWidget instanceof PencilWidget)
    {
    VIEWER1.ActiveWidget.SetOutlineColor(color);
    if(VIEWER1.ActiveWidget.TextShape != false)
      {
      VIEWER1.ActiveWidget.TextShape.Color = VIEWER1.ActiveWidget.OutlineColor;
      }
    }
  }

function getRecord()
  {  
  record = new ViewerRecord();
  record.CopyViewer(VIEWER1);
  return record;
  }
  
function convertRecordToJson(record)
  {
  return geoJson.Io.write(record);
  }

function startVisualizationSession(container, userOptions) {    
  detectMobile();
  
  var options = {

    "center" : [0,0,0],
    "overview_cursor" : 'default',
    "overview_color" : "#4011E5",
    "overview_padding": 12,
    "overview_width_percentage": 15, 
    "overview_height_percentage": 30, 
    "rotation" : 0,
    "viewHeight" : 22000,
    "imgPath" : "static/",
    "dimensions" : [0,0,0],
    "_id" : "-1",
    "url" : "-1",
    "use_tms" : false,
    "levels" : "10",
    "debug" : false,
    "use_dual" : false,
    "use_recorder" : false,
    "use_notes" : false,
    "use_edit" : false,
    "use_browser" : false,
    "reverse_mouse_wheel" : false
  };
  
  $.each(userOptions, function(i, v)
  {
    options[i] = v;
  });

  var imgPath = options.imgPath;

  initGC(container);
  EVENT_MANAGER = new EventManager(CANVAS);

  $(container).css('position', 'relative');
  var width = $(container).width();
  var height = $(container).height();
  var halfWidth = width/2;
  VIEWER1 = new Viewer([0,0, halfWidth,height], null);
  EVENT_MANAGER.AddViewer(VIEWER1);
  
  // Might consider interactive resize feature too.
  var handleResize = function () {
    var width = CANVAS.innerWidth();
    var height = CANVAS.innerHeight();
    if (GL) {
      CANVAS.attr("width",width.toString());
      CANVAS.attr("height",height.toString());
      GL.viewport(0, 0, width, height);
    } // SetViewport does the work for 2d canvases.
    
    // we set the left border to leave space for the notes window.
    var left = 0;
    if (NOTES_WIDGET) {
      left = width * NOTES_WIDGET.WidthFraction;
    }
    // The remaining width is split between the two viewers.
    var width1 = (width-left) * VIEWER1_FRACTION;
    if (VIEWER1) {

       var overViewWidth = width1 * options.overview_width_percentage/100;
       var overViewHeight = height * options.overview_height_percentage/100;
       var overViewport = [left + width1 - overViewWidth - options.overview_padding, 
                        height - overViewHeight - options.overview_padding,
                        overViewWidth,
                        overViewHeight];
                      
      if(typeof VIEWER1.OverView != "undefined")
        {        
        VIEWER1.SetViewport([left, 0, width1, height]);
        VIEWER1.OverView.SetViewport(overViewport);
        VIEWER1.OverView.Camera.ComputeMatrix();
        eventuallyRender();
        }
    }   
    
    if(MOBILE_DEVICE !== false)
      {
      VIEWER1.OverView.Canvas.hide();
      }
  };
  
  // Reset Cavas CSS properties
  VIEWER1.MainView.Canvas.css({
    'position': 'absolute',
    'bottom' : "auto",
    'height': "auto",
    'border': "none"
  });  
  
  // Trick to fix overview position
  if(typeof VIEWER1.OverView != "undefined")
    {
    VIEWER1.OverView.Canvas.css({
      'cursor': options.overview_cursor
    });    

    VIEWER1.OverView.Color = options.overview_color
    }
  
  
  VIEWER1.MainView.Camera.FocalPoint = [options.center[0], options.center[1], 10.0];
  
  
  if(options.use_edit)InitViewEditMenus();
  if(options.use_browser)InitViewBrowser();
  if(options.use_dual)InitDualViewWidget(container, imgPath);
  if(options.use_notes)InitNotesWidget();
  if(options.use_recorder)InitRecorderWidget(container, imgPath);

  $(window).resize(function() {
    handleResize();
  }).trigger('resize');

  var can = CANVAS[0];
  
  can.addEventListener("mousedown",  function(e){
    EVENT_MANAGER.HandleMouseDown(e);
  },  false);
  can.addEventListener("mousemove",  function(e){
    EVENT_MANAGER.HandleMouseMove(e);
  },  false);
  can.addEventListener("touchstart", function(e){
    EVENT_MANAGER.HandleTouchStart(e);
  }, false);
  can.addEventListener("touchmove",  function(e){
    EVENT_MANAGER.HandleTouchMove(e);
  },  true);
  can.addEventListener("touchend",   function(e){
    EVENT_MANAGER.HandleTouchEnd(e);
  },    false);
  can.addEventListener("mousewheel", function(e){
    VIEWER1.ReverseMouseWheel = options.reverse_mouse_wheel;
    EVENT_MANAGER.HandleMouseWheel(e);
  }, false);
  can.addEventListener("DOMMouseScroll", function(e){
    VIEWER1.ReverseMouseWheel = options.reverse_mouse_wheel;
    e.wheelDelta = -e.detail*40;
    EVENT_MANAGER.HandleMouseWheel(e);
  }, false);


  can.addEventListener("mouseup", function(e){   
    EVENT_MANAGER.HandleMouseUp(e);    
    viewer_click_callback(e);
  }, false);
  can.addEventListener("touchcancel", function(e){
    EVENT_MANAGER.HandleTouchCancel(e);
  }, false);

  VIEWER1.SetAnnotationVisibility(true);

  handleResize();
  if(options.use_dual) DualViewUpdateGui();
  
  if(typeof options.bounds == "undefined") options.bounds = [0, options.dimensions[0], 0, options.dimensions[1]];
 
  LoadImage(VIEWER1, options);
  
  var canvasRatio = CANVAS.innerWidth()/CANVAS.innerHeight();
  var left = 0;
  var bds = VIEWER1.GetCache().GetBounds();
  var heightCamera = (bds[3]-bds[2]);
  var widthCamera = ((bds[1]-bds[0])/canvasRatio);

  if(bds[3]-bds[2] > bds[1]-bds[0] || heightCamera > widthCamera)VIEWER1.MainView.Camera.Height = heightCamera;
  else VIEWER1.MainView.Camera.Height = widthCamera;
  
  VIEWER1.ZoomTarget = VIEWER1.MainView.Camera.Height;
  VIEWER1.MainView.Camera.ComputeMatrix();
  draw();  
  
  eventuallyRender();
}

