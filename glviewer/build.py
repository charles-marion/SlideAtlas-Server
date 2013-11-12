#!/usr/bin/env python
#
# imports
# all option, routine to go through dirs not good enough
#
# Based on the XTK build tool http://goxtk.com
# 
# system imports
import os, sys, argparse, datetime, tempfile, fnmatch, shutil, json
from jsmin import jsmin

#import Utilities.build.test_manager

# Paths definition
javaPath = "java"
projectRootDir = os.path.dirname( os.path.realpath(__file__) )
jsFiles = ["glMatrix-0.9.5.min.js", "webgl-utils.js", "cookies.js", "viewEditMenu.js",
"viewBrowser.js", "dualViewWidget.js", "annotationWidget.js", "recorderWidget.js", "viewer-utils.js",
"init.js", "loader.js", "camera.js", "tile.js", "cache.js", "section.js", "view.js", "viewer.js",
"arrowWidget.js", "circleWidget.js", "textWidget.js", "polylineWidget.js", "pencilWidget.js", "widgetPopup.js", "notesWidget.js",
"shape.js", "crossHairs.js", "arrow.js", "circle.js", "polyline.js","text.js", "eventManager.js", 'utils.js']

def buildLib(projectRootDir, minified):
  buffer = []
  bufferCSS = []
  print 'Reading JS Files'
  for jsFile in jsFiles:
    with open(projectRootDir + os.sep + "static" + os.sep + jsFile, 'r') as f:
      buffer.append(f.read())
          
  text = "".join(buffer)
  
  if minified:
    text = jsmin(text)

  filename = projectRootDir + os.sep  + "GLViewer.js"
  with open(filename, 'w') as f:
		f.write(addHeader(text))
  
def addHeader(text):
	return ("// Kitware\n"   ) + text

  
print 'Viewer Builder v0.1. Use -h for more information'
parser = argparse.ArgumentParser( description='This the Kitware Viewer build tool' )

# build
parser.add_argument( '-b', '--build',
                    action='store_true',
                    dest='build',
                    default=False,
                    help='Compile the VTKjs source code.' )
                    
# build
parser.add_argument( '-bd', '--buildDebug',
                    action='store_true',
                    dest='buildDebug',
                    default=False,
                    help='Compile the VTKjs source code without minifying.' )

# documentation
parser.add_argument( '-j', '--jsdoc',
                    action='store_true',
                    dest='jsdoc',
                    default=False,
                    help='Generate documentation of the target projects.' )


options = parser.parse_args()


#
# generate the documentation
# the documentation will be generated in the target-build/doc folder
#
if( options.jsdoc ):
    print '*-----------------------*'
    print 'Generating Documentation '

    output = os.path.normpath( projectRootDir + os.sep + 'Documentation' )
    # remove output dir contents
    if os.path.exists( output ): shutil.rmtree( output )
    os.makedirs( output )

    # also create the symbol subdir
    os.mkdir( output + os.sep + "symbols" )

    command = javaPath + ' -jar'
    command += ' ' + jsdocLibraryDir + os.sep + 'jsrun.jar'
    command += ' ' + jsdocLibraryDir + os.sep + 'app' + os.sep + 'run.js'
    command += ' -d=' + output
    # exlude
    for dir in libraryExcludeDirs:
      command += ' -E='+os.path.normpath( projectRootDir + os.sep + dir )
      command += ' -E='+dir 
    # recursive level
    command += ' -r=10'
    # template
    command += ' -t=' + buildUtilityDir + os.sep + 'jsdoc-template'
    # source dir
    command += ' -a ' + projectRootDir
    os.system( command )

    print 'Documentation generated'
    print '*-----------------------*'

#
# Compile the project
#
if( options.build ):
    print '*-----------------------*'
    print 'Merging and Minifying Code'
    buildLib(projectRootDir, True)
    print 'Done'
    print '*-----------------------*'
    
if( options.buildDebug ):
    print '*-----------------------*'
    print 'Merging Code'
    buildLib(projectRootDir, False)
    print 'Done'
    print '*-----------------------*'



