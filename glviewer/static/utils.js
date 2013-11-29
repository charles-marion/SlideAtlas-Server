var CANVAS;
var EVENT_MANAGER;
var VIEWER1;
var VIEWER2;
var DUAL_VIEW = false;

var NOTES_WIDGET;

// hack to avoid an undefined error (until we unify annotation stuff).
function ShowAnnotationEditMenu(x, y) {
}
  
  
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



function StartVisualizationSession(container, userOptions) {    
  detectMobile();
  
  var options = {
    "center" : [0,0,0],
    "overview_cursor" : 'default',
    "overview_color" : "#4011E5",
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
    "use_annotation" : false,
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
    var width2 = (width-left) - width1;
    if (VIEWER1) {
      VIEWER1.SetViewport([left, 0, width1, height]);
      eventuallyRender();
    }
    if (VIEWER2) {
      VIEWER2.SetViewport([left+width1, 0, width2, height]);
      eventuallyRender();
    }
  };
  
  // Reset Cavas CSS properties
  VIEWER1.MainView.Canvas.css({
    'position': 'static',
    'bottom' : "auto",
    'height': "auto",
    'border': "none"
  });  
  
  // Trick to fix overview position
  var divWrapper = $('<div>').prependTo(container);
  divWrapper.css({
    'position': 'absolute',
    'right' : "5px",
    'top': "5px"
  });
  VIEWER1.OverView.Canvas.css({
    'position': 'static',
    'cursor': options.overview_cursor
  });    
  
  VIEWER1.OverView.Color = options.overview_color
  
  VIEWER1.OverView.Canvas.appendTo(divWrapper);
  VIEWER1.MainView.Camera.FocalPoint = [options.center[0], options.center[1], 10.0];
  VIEWER1.MainView.Camera.Height = options.viewHeight;
  
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


  document.body.addEventListener("mouseup", function(e){
    EVENT_MANAGER.HandleMouseUp(e);
  }, false);
  document.body.addEventListener("touchcancel", function(e){
    EVENT_MANAGER.HandleTouchCancel(e);
  }, false);

  if(options.use_annotation) new AnnotationWidget(VIEWER1, container, imgPath);
  if(options.use_dual && options.use_annotation) new AnnotationWidget(VIEWER2, container, imgPath);
  handleResize();
  if(options.use_dual) DualViewUpdateGui();
  
  if(typeof options.bounds == "undefined") options.bounds = [0, options.dimensions[0], 0, options.dimensions[1]];
 
  LoadImage(VIEWER1, options);
  eventuallyRender();
}

