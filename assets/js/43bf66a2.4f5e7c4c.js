"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[6713],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(g,i(i({ref:t},l),{},{components:n})):r.createElement(g,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2183:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={title:"Rotating objects",sidebar_position:10},p=void 0,c={unversionedId:"development/display/display-programming/manipulating-display-objects/rotating-objects",id:"development/display/display-programming/manipulating-display-objects/rotating-objects",isDocsHomePage:!1,title:"Rotating objects",description:"Display objects can be rotated using the rotation property. You can read this value to find out whether an object has been rotated, or to rotate the object you can set this property to a number (in degrees) representing the amount of rotation to be applied to the object. For instance, this line of code rotates the object named square 45 degrees (one eighth of one complete revolution):",source:"@site/docs/development/display/display-programming/manipulating-display-objects/rotating-objects.md",sourceDirName:"development/display/display-programming/manipulating-display-objects",slug:"/development/display/display-programming/manipulating-display-objects/rotating-objects",permalink:"/docs/development/display/display-programming/manipulating-display-objects/rotating-objects",editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/display/display-programming/manipulating-display-objects/rotating-objects.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Rotating objects",sidebar_position:10},sidebar:"mainSidebar",previous:{title:"Adjusting DisplayObject colors",permalink:"/docs/development/display/display-programming/manipulating-display-objects/adjusting-displayobject-colors"},next:{title:"Fading objects",permalink:"/docs/development/display/display-programming/manipulating-display-objects/fading-objects"}},l=[],d={toc:l};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Display objects can be rotated using the ",(0,a.kt)("inlineCode",{parentName:"p"},"rotation")," property. You can read this value to find out whether an object has been rotated, or to rotate the object you can set this property to a number (in degrees) representing the amount of rotation to be applied to the object. For instance, this line of code rotates the object named square 45 degrees (one eighth of one complete revolution):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-actionscript"},"square.rotation = 45;\n")),(0,a.kt)("p",null,"Alternatively, you can rotate a display object using a transformation matrix, described in ",(0,a.kt)("a",{parentName:"p",href:"/docs/development/display/working-with-geometry/index"},"Working with geometry")," ."))}u.isMDXComponent=!0}}]);