exports.ids=[2],exports.modules={625:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return y});var r=n(0),o=n.n(r),u=n(250);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}function f(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){function t(){return a(this,t),f(this,p(t).apply(this,arguments))}return s(t,o.a.Component),c(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(b,null))}}]),t}(),b=function(e){function t(){return a(this,t),f(this,p(t).apply(this,arguments))}return s(t,o.a.Component),c(t,[{key:"onSubmit",value:function(e){var t=new FormData(e.target);u.a.post("posts/new",t).then(function(e){return console.log("is heree",e)}),e.preventDefault()}},{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.onSubmit.bind(this),encType:"multipart/form-data  "},o.a.createElement("div",null,o.a.createElement("input",{type:"text",placeholder:"Titulo",name:"title",required:!0})),o.a.createElement("div",null,o.a.createElement("textarea",{placeholder:"Descripción",name:"description",required:!0})),o.a.createElement("div",null,o.a.createElement("input",{type:"file",name:"files[]",multiple:!0,required:!0})),o.a.createElement("div",null,o.a.createElement("input",{type:"text",name:"tags",placeholder:"tags",required:!0})),o.a.createElement("div",null,o.a.createElement("input",{type:"submit",value:"Subir"})))}}]),t}()}};
//# sourceMappingURL=2.server.js.map