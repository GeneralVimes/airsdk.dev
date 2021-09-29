"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[2720],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(g,s(s({ref:t},l),{},{components:n})):a.createElement(g,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6855:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=["components"],i={title:"Using XML namespaces",sidebar_position:9},p=void 0,c={unversionedId:"development/core-actionscript-classes/working-with-xml/using-xml-namespaces",id:"development/core-actionscript-classes/working-with-xml/using-xml-namespaces",isDocsHomePage:!1,title:"Using XML namespaces",description:"Namespaces in an XML object (or document) identify the type of data that the object contains. For example, in sending and delivering XML data to a web service that uses the SOAP messaging protocol, you declare the namespace in the opening tag of the XML:",source:"@site/docs/development/core-actionscript-classes/working-with-xml/using-xml-namespaces.md",sourceDirName:"development/core-actionscript-classes/working-with-xml",slug:"/development/core-actionscript-classes/working-with-xml/using-xml-namespaces",permalink:"/docs/development/core-actionscript-classes/working-with-xml/using-xml-namespaces",editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/core-actionscript-classes/working-with-xml/using-xml-namespaces.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Using XML namespaces",sidebar_position:9},sidebar:"mainSidebar",previous:{title:"Traversing XML structures",permalink:"/docs/development/core-actionscript-classes/working-with-xml/traversing-xml-structures"},next:{title:"XML type conversion",permalink:"/docs/development/core-actionscript-classes/working-with-xml/xml-type-conversion"}},l=[],m={toc:l};function u(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Namespaces in an XML object (or document) identify the type of data that the object contains. For example, in sending and delivering XML data to a web service that uses the SOAP messaging protocol, you declare the namespace in the opening tag of the XML:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-actionscript"},'var message:XML =\n    <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"\n    soap:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">\n        <soap:Body xmlns:w="http://www.test.com/weather/">\n            <w:getWeatherResponse>\n                <w:tempurature >78</w:tempurature>\n            </w:getWeatherResponse>\n        </soap:Body>\n    </soap:Envelope>;\n')),(0,o.kt)("p",null,"The namespace has a prefix, soap , and a URI that defines the namespace, ",(0,o.kt)("a",{parentName:"p",href:"http://schemas.xmlsoap.org/soap/envelope/"},"http://schemas.xmlsoap.org/soap/envelope/")," ."),(0,o.kt)("p",null,"ActionScript 3.0 includes the Namespace class for working with XML namespaces. For the XML object in the previous example, you can use the Namespace class as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-actionscript"},'var soapNS:Namespace = message.namespace("soap");\ntrace(soapNS); // Output: http://schemas.xmlsoap.org/soap/envelope/\n\nvar wNS:Namespace = new Namespace("w", "http://www.test.com/weather/");\nmessage.addNamespace(wNS);\nvar encodingStyle:XMLList = message.@soapNS::encodingStyle;\nvar body:XMLList = message.soapNS::Body;\n\nmessage.soapNS::Body.wNS::GetWeatherResponse.wNS::tempurature = "78";\n')),(0,o.kt)("p",null,"The XML class includes the following methods for working with namespaces: ",(0,o.kt)("inlineCode",{parentName:"p"},"addNamespace()")," , ",(0,o.kt)("inlineCode",{parentName:"p"},"inScopeNamespaces()")," , ",(0,o.kt)("inlineCode",{parentName:"p"},"localName()")," , ",(0,o.kt)("inlineCode",{parentName:"p"},"name()")," , ",(0,o.kt)("inlineCode",{parentName:"p"},"namespace()")," , ",(0,o.kt)("inlineCode",{parentName:"p"},"namespaceDeclarations()")," , ",(0,o.kt)("inlineCode",{parentName:"p"},"removeNamespace()")," , ",(0,o.kt)("inlineCode",{parentName:"p"},"setLocalName()")," , ",(0,o.kt)("inlineCode",{parentName:"p"},"setName()")," , and ",(0,o.kt)("inlineCode",{parentName:"p"},"setNamespace()")," ."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," ",(0,o.kt)("inlineCode",{parentName:"p"},"xml")," ",(0,o.kt)("inlineCode",{parentName:"p"},"namespace")," directive lets you assign a default namespace for XML objects. For example, in the following, both ",(0,o.kt)("inlineCode",{parentName:"p"},"x1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"x2")," have the same default namespace:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-actionscript"},'var ns1:Namespace = new Namespace("http://www.example.com/namespaces/");\ndefault xml namespace = ns1;\nvar x1:XML = <test1 />;\nvar x2:XML = <test2 />;\n')))}u.isMDXComponent=!0}}]);