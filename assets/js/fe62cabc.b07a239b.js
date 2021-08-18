"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[7786],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,f=u["".concat(c,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(f,o(o({ref:t},l),{},{components:n})):a.createElement(f,o({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3645:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={title:"The Graphics class",sidebar_position:3},c=void 0,p={unversionedId:"development/display/using-the-drawing-api/the-graphics-class",id:"development/display/using-the-drawing-api/the-graphics-class",isDocsHomePage:!1,title:"The Graphics class",description:"Each Shape, Sprite, and MovieClip object has a graphics property, which is an instance of the Graphics class. The Graphics class includes properties and methods for drawing lines, fills, and shapes. If you want a display object to use solely as a canvas for drawing content, you can use a Shape instance. A Shape instance will perform better than other display objects for drawing, because it doesn\u2019t have the overhead of the additional functionality in the Sprite and MovieClip classes. If you want a display object on which you can draw graphical content and also want that object to contain other display objects, you can use a Sprite instance. For more information on determining which display object to use for various tasks, see Choosing a DisplayObject subclass .",source:"@site/docs/development/display/using-the-drawing-api/the-graphics-class.md",sourceDirName:"development/display/using-the-drawing-api",slug:"/development/display/using-the-drawing-api/the-graphics-class",permalink:"/docs/development/display/using-the-drawing-api/the-graphics-class",editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/display/using-the-drawing-api/the-graphics-class.md",version:"current",sidebarPosition:3,frontMatter:{title:"The Graphics class",sidebar_position:3},sidebar:"mainSidebar",previous:{title:"Basics of the drawing API",permalink:"/docs/development/display/using-the-drawing-api/basics-of-the-drawing-api"},next:{title:"Drawing lines and curves",permalink:"/docs/development/display/using-the-drawing-api/drawing-lines-and-curves"}},l=[],d={toc:l};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Each Shape, Sprite, and MovieClip object has a graphics property, which is an instance of the Graphics class. The Graphics class includes properties and methods for drawing lines, fills, and shapes. If you want a display object to use solely as a canvas for drawing content, you can use a Shape instance. A Shape instance will perform better than other display objects for drawing, because it doesn\u2019t have the overhead of the additional functionality in the Sprite and MovieClip classes. If you want a display object on which you can draw graphical content and also want that object to contain other display objects, you can use a Sprite instance. For more information on determining which display object to use for various tasks, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/development/display/display-programming/working-with-display-objects/choosing-a-displayobject-subclass"},"Choosing a DisplayObject subclass")," ."))}u.isMDXComponent=!0}}]);