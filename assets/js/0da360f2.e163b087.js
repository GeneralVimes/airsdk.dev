"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[4485],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(g,r(r({ref:t},c),{},{components:n})):a.createElement(g,r({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7818:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],l={title:"Using Point objects",sidebar_position:3},s=void 0,p={unversionedId:"development/display/working-with-geometry/using-point-objects",id:"development/display/working-with-geometry/using-point-objects",isDocsHomePage:!1,title:"Using Point objects",description:"A Point object defines a Cartesian pair of coordinates. It represents location in a two-dimensional coordinate system, where x represents the horizontal axis and y represents the vertical axis.",source:"@site/docs/development/display/working-with-geometry/using-point-objects.md",sourceDirName:"development/display/working-with-geometry",slug:"/development/display/working-with-geometry/using-point-objects",permalink:"/docs/development/display/working-with-geometry/using-point-objects",editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/display/working-with-geometry/using-point-objects.md",version:"current",sidebarPosition:3,frontMatter:{title:"Using Point objects",sidebar_position:3},sidebar:"mainSidebar",previous:{title:"Basics of geometry",permalink:"/docs/development/display/working-with-geometry/basics-of-geometry"},next:{title:"Using Rectangle objects",permalink:"/docs/development/display/working-with-geometry/using-rectangle-objects"}},c=[{value:"Finding the distance between two points",id:"finding-the-distance-between-two-points",children:[]},{value:"Translating coordinate spaces",id:"translating-coordinate-spaces",children:[]},{value:"Moving a display object by a specified angle and distance",id:"moving-a-display-object-by-a-specified-angle-and-distance",children:[]},{value:"Other uses of the Point class",id:"other-uses-of-the-point-class",children:[]}],d={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"Point")," object defines a Cartesian pair of coordinates. It represents location in a two-dimensional coordinate system, where x represents the horizontal axis and y represents the vertical axis."),(0,o.kt)("p",null,"To define a Point object, you set its x and y properties, as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-actionscript"},"import flash.geom.*;\nvar pt1:Point = new Point(10, 20); // x == 10; y == 20\nvar pt2:Point = new Point();\npt2.x = 10;\npt2.y = 20;\n")),(0,o.kt)("h2",{id:"finding-the-distance-between-two-points"},"Finding the distance between two points"),(0,o.kt)("p",null,"You can use the distance() method of the Point class to find the distance between two points in a coordinate space. For example, the following code finds the distance between the registration points of two display objects, ",(0,o.kt)("inlineCode",{parentName:"p"},"circle1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"circle2")," , in the same display object container:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-actionscript"},"import flash.geom.*;\nvar pt1:Point = new Point(circle1.x, circle1.y);\nvar pt2:Point = new Point(circle2.x, circle2.y);\nvar distance:Number = Point.distance(pt1, pt2);\n")),(0,o.kt)("h2",{id:"translating-coordinate-spaces"},"Translating coordinate spaces"),(0,o.kt)("p",null,"If two display objects are in different display object containers, they can be in different coordinate spaces. You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"localToGlobal()")," method of the ",(0,o.kt)("inlineCode",{parentName:"p"},"DisplayObject")," class to translate the coordinates to the same (global) coordinate space, that of the Stage. For example, the following code finds the distance between the registration points of two display objects, ",(0,o.kt)("inlineCode",{parentName:"p"},"circle1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"circle2")," , in the different display object containers:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-actionscript"},"import flash.geom.*;\nvar pt1:Point = new Point(circle1.x, circle1.y);\npt1 = circle1.localToGlobal(pt1);\nvar pt2:Point = new Point(circle2.x, circle2.y);\npt2 = circle2.localToGlobal(pt2);\nvar distance:Number = Point.distance(pt1, pt2);\n")),(0,o.kt)("p",null,"Similarly, to find the distance of the registration point of a display object named target from a specific point on the Stage, use the localToGlobal() method of the DisplayObject class:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-actionscript"},"import flash.geom.*;\nvar stageCenter:Point = new Point();\nstageCenter.x = this.stage.stageWidth / 2;\nstageCenter.y = this.stage.stageHeight / 2;\nvar targetCenter:Point = new Point(target.x, target.y);\ntargetCenter = target.localToGlobal(targetCenter);\nvar distance:Number = Point.distance(stageCenter, targetCenter);\n")),(0,o.kt)("h2",{id:"moving-a-display-object-by-a-specified-angle-and-distance"},"Moving a display object by a specified angle and distance"),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"polar()")," method of the Point class to move a display object a specific distance by a specific angle. For example, the following code moves the myDisplayObject object 100 pixels by 60\xb0:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-actionscript"},"import flash.geom.*;\nvar distance:Number = 100;\nvar angle:Number = 2 _ Math.PI \\* (90 / 360);\nvar translatePoint:Point = Point.polar(distance, angle);\nmyDisplayObject.x += translatePoint.x;\nmyDisplayObject.y += translatePoint.y;\n")),(0,o.kt)("h2",{id:"other-uses-of-the-point-class"},"Other uses of the Point class"),(0,o.kt)("p",null,"You can use Point objects with the following methods and properties:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Class"),(0,o.kt)("th",{parentName:"tr",align:null},"Methods or properties"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"DisplayObjectContainer"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"areInaccessibleObjectsUnderPoint()")," ",(0,o.kt)("inlineCode",{parentName:"td"},"getObjectsUnderPoint()")),(0,o.kt)("td",{parentName:"tr",align:null},"Used to return a list of objects under a point in a display object container.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"BitmapData"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"hitTest()")),(0,o.kt)("td",{parentName:"tr",align:null},"Used to define the pixel in the BitmapData object as well as the point that you are checking for a hit.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"BitmapData"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"applyFilter()")," ",(0,o.kt)("inlineCode",{parentName:"td"},"copyChannel()")," ",(0,o.kt)("inlineCode",{parentName:"td"},"merge()")," ",(0,o.kt)("inlineCode",{parentName:"td"},"paletteMap()")," ",(0,o.kt)("inlineCode",{parentName:"td"},"pixelDissolve()")," ",(0,o.kt)("inlineCode",{parentName:"td"},"threshold()")),(0,o.kt)("td",{parentName:"tr",align:null},"Used to define the positions of rectangles that define the operations.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Matrix"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"deltaTransformPoint()")," ",(0,o.kt)("inlineCode",{parentName:"td"},"transformPoint()")),(0,o.kt)("td",{parentName:"tr",align:null},"Used to define points for which you want to apply a transformation.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Rectangle"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"bottomRight")," ",(0,o.kt)("inlineCode",{parentName:"td"},"size")," ",(0,o.kt)("inlineCode",{parentName:"td"},"topLeft")),(0,o.kt)("td",{parentName:"tr",align:null},"Used to define these properties.")))))}m.isMDXComponent=!0}}]);