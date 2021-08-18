"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[7442],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(a),u=i,m=d["".concat(s,".").concat(u)]||d[u]||h[u]||o;return a?n.createElement(m,r(r({ref:t},p),{},{components:a})):n.createElement(m,r({ref:t},p))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var l=2;l<o;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7100:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var n=a(7462),i=a(3366),o=(a(7294),a(3905)),r=["components"],c={title:"Caching display objects",sidebar_position:6},s=void 0,l={unversionedId:"development/display/display-programming/manipulating-display-objects/caching-display-objects",id:"development/display/display-programming/manipulating-display-objects/caching-display-objects",isDocsHomePage:!1,title:"Caching display objects",description:"As your designs in Flash grow in size, whether you are creating an application or complex scripted animations, you need to consider performance and optimization. When you have content that remains static (such as a rectangle Shape instance), Flash Player and AIR do not optimize the content. Therefore, when you change the position of the rectangle, Flash Player or AIR redraws the entire Shape instance.",source:"@site/docs/development/display/display-programming/manipulating-display-objects/caching-display-objects.md",sourceDirName:"development/display/display-programming/manipulating-display-objects",slug:"/development/display/display-programming/manipulating-display-objects/caching-display-objects",permalink:"/docs/development/display/display-programming/manipulating-display-objects/caching-display-objects",editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/display/display-programming/manipulating-display-objects/caching-display-objects.md",version:"current",sidebarPosition:6,frontMatter:{title:"Caching display objects",sidebar_position:6},sidebar:"mainSidebar",previous:{title:"Controlling distortion when scaling",permalink:"/docs/development/display/display-programming/manipulating-display-objects/controlling-distortion-when-scaling"},next:{title:"Setting an opaque background color",permalink:"/docs/development/display/display-programming/manipulating-display-objects/setting-an-opaque-background-color"}},p=[{value:"When to enable caching",id:"when-to-enable-caching",children:[{value:"When to use bitmap caching",id:"when-to-use-bitmap-caching",children:[]},{value:"When to avoid using bitmap caching",id:"when-to-avoid-using-bitmap-caching",children:[]}]},{value:"Enabling bitmap caching",id:"enabling-bitmap-caching",children:[{value:"Cached bitmap transform matrices",id:"cached-bitmap-transform-matrices",children:[]}]}],h={toc:p};function d(e){var t=e.components,a=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As your designs in Flash grow in size, whether you are creating an application or complex scripted animations, you need to consider performance and optimization. When you have content that remains static (such as a rectangle Shape instance), Flash Player and AIR do not optimize the content. Therefore, when you change the position of the rectangle, Flash Player or AIR redraws the entire Shape instance."),(0,o.kt)("p",null,"You can cache specified display objects to improve the performance of your SWF file. The display object is a surface , essentially a bitmap version of the instance's vector data, which is data that you do not intend to change much over the course of your SWF file. Therefore, instances with caching turned on are not continually redrawn as the SWF file plays, letting the SWF file render quickly."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can update the vector data, at which time the surface is recreated. Therefore, the vector data cached in the surface does not need to remain the same for the entire SWF file."))),(0,o.kt)("p",null,"Setting a display object's ",(0,o.kt)("inlineCode",{parentName:"p"},"cacheAsBitmap")," property to true makes the display object cache a bitmap representation of itself. Flash Player or AIR creates a surface object for the instance, which is a cached bitmap instead of vector data. If you change the bounds of the display object, the surface is recreated instead of resized. Surfaces can nest within other surfaces. The child surface copies its bitmap onto its parent surface. For more information, see Enabling bitmap caching ."),(0,o.kt)("p",null,"The DisplayObject class's ",(0,o.kt)("inlineCode",{parentName:"p"},"opaqueBackground")," property and ",(0,o.kt)("inlineCode",{parentName:"p"},"scrollRect")," property are related to bitmap caching using the ",(0,o.kt)("inlineCode",{parentName:"p"},"cacheAsBitmap")," property. Although these three properties are independent of each other, the ",(0,o.kt)("inlineCode",{parentName:"p"},"opaqueBackground")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"scrollRect")," properties work best when an object is cached as a bitmap\u2014you see performance benefits for the ",(0,o.kt)("inlineCode",{parentName:"p"},"opaqueBackground")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"scrollRect")," properties only when you set ",(0,o.kt)("inlineCode",{parentName:"p"},"cacheAsBitmap")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," . For more information about scrolling display object content, see Panning and scrolling display objects . For more information about setting an opaque background, see Setting an opaque background color ."),(0,o.kt)("p",null,"For information on alpha channel masking, which requires you to set the ",(0,o.kt)("inlineCode",{parentName:"p"},"cacheAsBitmap")," property to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," , see Masking display objects ."),(0,o.kt)("h2",{id:"when-to-enable-caching"},"When to enable caching"),(0,o.kt)("p",null,"Enabling caching for a display object creates a surface, which has several advantages, such as helping complex vector animations to render fast. There are several scenarios in which you will want to enable caching. It might seem as though you would always want to enable caching to improve the performance of your SWF files; however, there are situations in which enabling caching does not improve performance, or can even decrease it. This section describes scenarios in which caching should be used, and when to use regular display objects."),(0,o.kt)("p",null,"Overall performance of cached data depends on how complex the vector data of your instances are, how much of the data you change, and whether or not you set the ",(0,o.kt)("inlineCode",{parentName:"p"},"opaqueBackground")," property. If you are changing small regions, the difference between using a surface and using vector data could be negligible. You might want to test both scenarios with your work before you deploy the application."),(0,o.kt)("h3",{id:"when-to-use-bitmap-caching"},"When to use bitmap caching"),(0,o.kt)("p",null,"The following are typical scenarios in which you might see significant benefits when you enable bitmap caching."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Complex background image: An application that contains a detailed and complex background image of vector data (perhaps an image where you applied the trace bitmap command, or artwork that you created in Adobe Illustrator\xae). You might animate characters over the background, which slows the animation because the background needs to continuously regenerate the vector data. To improve performance, you can set the ",(0,o.kt)("inlineCode",{parentName:"li"},"opaqueBackground")," property of the background display object to ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," . The background is rendered as a bitmap and can be redrawn quickly, so that your animation plays much faster."),(0,o.kt)("li",{parentName:"ul"},"Scrolling text field: An application that displays a large amount of text in a scrolling text field. You can place the text field in a display object that you set as scrollable with scrolling bounds (the ",(0,o.kt)("inlineCode",{parentName:"li"},"scrollRect")," property). This enables fast pixel scrolling for the specified instance. When a user scrolls the display object instance, Flash Player or AIR shifts the scrolled pixels up and generates the newly exposed region instead of regenerating the entire text field."),(0,o.kt)("li",{parentName:"ul"},"Windowing system: An application with a complex system of overlapping windows. Each window can be open or closed (for example, web browser windows). If you mark each window as a surface (by setting the ",(0,o.kt)("inlineCode",{parentName:"li"},"cacheAsBitmap")," property to ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," ), each window is isolated and cached. Users can drag the windows so that they overlap each other, and each window doesn't need to regenerate the vector content."),(0,o.kt)("li",{parentName:"ul"},"Alpha channel masking: When you are using alpha channel masking, you must set the ",(0,o.kt)("inlineCode",{parentName:"li"},"cacheAsBitmap")," property to ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," . For more information, see ",(0,o.kt)("a",{parentName:"li",href:"masking-display-objects"},"Masking display objects")," .")),(0,o.kt)("p",null,"Enabling bitmap caching in all of these scenarios improves the responsiveness and interactivity of the application by optimizing the vector graphics."),(0,o.kt)("p",null,"In addition, whenever you apply a filter to a display object, ",(0,o.kt)("inlineCode",{parentName:"p"},"cacheAsBitmap")," is automatically set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," , even if you explicitly set it to false . If you clear all the filters from the display object, the ",(0,o.kt)("inlineCode",{parentName:"p"},"cacheAsBitmap")," property returns to the value it was last set to."),(0,o.kt)("h3",{id:"when-to-avoid-using-bitmap-caching"},"When to avoid using bitmap caching"),(0,o.kt)("p",null,"Using this feature in the wrong circumstances can negatively affect the performance of your SWF file. When you use bitmap caching, remember the following guidelines:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Do not overuse surfaces (display objects with caching enabled). Each surface uses more memory than a regular display object, which means that you should only enable surfaces when you need to improve rendering performance."),(0,o.kt)("li",{parentName:"ul"},"A cached bitmap can use significantly more memory than a regular display object. For example, if a Sprite instance on the Stage is 250 pixels by 250 pixels in size, when cached it might use 250 KB instead of 1 KB when it's a regular (un-cached) Sprite instance."),(0,o.kt)("li",{parentName:"ul"},"Avoid zooming into cached surfaces. If you overuse bitmap caching, a large amount of memory is consumed (see previous bullet), especially if you zoom in on the content."),(0,o.kt)("li",{parentName:"ul"},"Use surfaces for display object instances that are largely static (non-animating). You can drag or move the instance, but the contents of the instance should not animate or change a lot. (Animation or changing content are more likely with a MovieClip instance containing animation or a Video instance.) For example, if you rotate or transform an instance, the instance changes between the surface and vector data, which is difficult to process and negatively affects your SWF file."),(0,o.kt)("li",{parentName:"ul"},"If you mix surfaces with vector data, it increases the amount of processing that Flash Player and AIR (and sometimes the computer) need to do. Group surfaces together as much as possible\u2014for example, when you create windowing applications."),(0,o.kt)("li",{parentName:"ul"},"Do not cache objects whose graphics change frequently. Every time you scale, skew, rotate the display object, change the alpha or color transform, move child display objects, or draw using the graphics property, the bitmap cache is redrawn. If this happens every frame, the runtime must draw the object into a bitmap and then copy that bitmap onto the stage\u2014which results in extra work compared to just drawing the uncached object to the stage. The performance tradeoff of caching versus update frequency depends on the complexity and size of the display object and can only be determined by testing the specific content.")),(0,o.kt)("h2",{id:"enabling-bitmap-caching"},"Enabling bitmap caching"),(0,o.kt)("p",null,"To enable bitmap caching for a display object, you set its ",(0,o.kt)("inlineCode",{parentName:"p"},"cacheAsBitmap")," property to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-actionscript"},"mySprite.cacheAsBitmap = true;\n")),(0,o.kt)("p",null,"After you set the ",(0,o.kt)("inlineCode",{parentName:"p"},"cacheAsBitmap")," property to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," , you might notice that the display object automatically pixel-snaps to whole coordinates. When you test the SWF file, you should notice that any animation performed on a complex vector image renders much faster."),(0,o.kt)("p",null,"A surface (cached bitmap) is not created, even if ",(0,o.kt)("inlineCode",{parentName:"p"},"cacheAsBitmap")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," , if one or more of the following occurs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The bitmap is greater than 2880 pixels in height or width."),(0,o.kt)("li",{parentName:"ul"},"The bitmap fails to allocate (because of an out-of-memory error).")),(0,o.kt)("h3",{id:"cached-bitmap-transform-matrices"},"Cached bitmap transform matrices"),(0,o.kt)("p",null,"In AIR applications for mobile devices, you should set the ",(0,o.kt)("inlineCode",{parentName:"p"},"cacheAsBitmapMatrix")," property whenever you set the ",(0,o.kt)("inlineCode",{parentName:"p"},"cacheAsBitmap")," property. Setting this property allows you to apply a wider range of transformations to the display object without triggering rerendering."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-actionscript"},"mySprite.cacheAsBitmap = true;\nmySprite.cacheAsBitmapMatrix = new Matrix();\n")),(0,o.kt)("p",null,"When you set this matrix property, you can apply the following additional transformation to the display object without recaching the object:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Move or translate without pixel-snapping"),(0,o.kt)("li",{parentName:"ul"},"Rotate"),(0,o.kt)("li",{parentName:"ul"},"Scale"),(0,o.kt)("li",{parentName:"ul"},"Skew"),(0,o.kt)("li",{parentName:"ul"},"Change alpha (between 0 and 100% transparency)")),(0,o.kt)("p",null,"These transformations are applied directly to the cached bitmap."))}d.isMDXComponent=!0}}]);