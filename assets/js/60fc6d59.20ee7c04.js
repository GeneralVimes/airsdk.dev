"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[5468],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),h=i,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||a;return n?r.createElement(m,s(s({ref:t},d),{},{components:n})):r.createElement(m,s({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6697:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),s=["components"],o={title:"Drawing shapes using built-in methods",sidebar_position:5},l=void 0,p={unversionedId:"development/display/using-the-drawing-api/drawing-shapes-using-built-in-methods",id:"development/display/using-the-drawing-api/drawing-shapes-using-built-in-methods",isDocsHomePage:!1,title:"Drawing shapes using built-in methods",description:"For convenience when drawing common shapes such as circles, ellipses, rectangles, and rectangles with rounded corners, ActionScript 3.0 has methods that draw these common shapes for you. These are the drawCircle() , drawEllipse() , drawRect() , and drawRoundRect() methods of the Graphics class. These methods may be used in place of the lineTo() and curveTo() methods. Note, however, that you must still specify line and fill styles before calling these methods.",source:"@site/docs/development/display/using-the-drawing-api/drawing-shapes-using-built-in-methods.md",sourceDirName:"development/display/using-the-drawing-api",slug:"/development/display/using-the-drawing-api/drawing-shapes-using-built-in-methods",permalink:"/docs/development/display/using-the-drawing-api/drawing-shapes-using-built-in-methods",editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/display/using-the-drawing-api/drawing-shapes-using-built-in-methods.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Drawing shapes using built-in methods",sidebar_position:5},sidebar:"mainSidebar",previous:{title:"Drawing lines and curves",permalink:"/docs/development/display/using-the-drawing-api/drawing-lines-and-curves"},next:{title:"Creating gradient lines and fills",permalink:"/docs/development/display/using-the-drawing-api/creating-gradient-lines-and-fills"}},d=[],c={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"For convenience when drawing common shapes such as circles, ellipses, rectangles, and rectangles with rounded corners, ActionScript 3.0 has methods that draw these common shapes for you. These are the ",(0,a.kt)("inlineCode",{parentName:"p"},"drawCircle()")," , ",(0,a.kt)("inlineCode",{parentName:"p"},"drawEllipse()")," , ",(0,a.kt)("inlineCode",{parentName:"p"},"drawRect()")," , and ",(0,a.kt)("inlineCode",{parentName:"p"},"drawRoundRect()")," methods of the Graphics class. These methods may be used in place of the ",(0,a.kt)("inlineCode",{parentName:"p"},"lineTo()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"curveTo()")," methods. Note, however, that you must still specify line and fill styles before calling these methods."),(0,a.kt)("p",null,"The following example recreates the example of drawing red, green, and blue squares with width and height of 100 pixels. This code uses the drawRect() method, and additionally specifies that the fill color has an alpha of 50% (0.5):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-actionscript"},"var squareSize:uint = 100;\nvar square:Shape = new Shape();\nsquare.graphics.beginFill(0xFF0000, 0.5);\nsquare.graphics.drawRect(0, 0, squareSize, squareSize);\nsquare.graphics.beginFill(0x00FF00, 0.5);\nsquare.graphics.drawRect(200, 0, squareSize, squareSize);\nsquare.graphics.beginFill(0x0000FF, 0.5);\nsquare.graphics.drawRect(400, 0, squareSize, squareSize);\nsquare.graphics.endFill();\nthis.addChild(square);\n")),(0,a.kt)("p",null,"In a Sprite or MovieClip object, the drawing content created with the graphics property always appears behind all child display objects that are contained by the object. Also, the ",(0,a.kt)("inlineCode",{parentName:"p"},"graphics")," property content is not a separate display object so it does not appear in the list of a Sprite or MovieClip object\u2019s children. For example, the following Sprite object has a circle drawn with its graphics property, and it has a TextField object in its list of child display objects:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-actionscript"},'var mySprite:Sprite = new Sprite();\nmySprite.graphics.beginFill(0xFFCC00);\nmySprite.graphics.drawCircle(30, 30, 30);\nvar label:TextField = new TextField();\nlabel.width = 200;\nlabel.text = "They call me mellow yellow...";\nlabel.x = 20;\nlabel.y = 20;\nmySprite.addChild(label);\nthis.addChild(mySprite);\n')),(0,a.kt)("p",null,"Note that the TextField appears on top of the circle drawn with the graphics object."))}u.isMDXComponent=!0}}]);