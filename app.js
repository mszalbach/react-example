webpackJsonp([0],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n(1),a=r(o),i=n(31),u=r(i),l=n(165),c=r(l);u["default"].render(a["default"].createElement(c["default"],null),document.getElementById("application"))},165:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),f=r(c),s=n(166),d=r(s),p=n(176),v=r(p);n(178);var y=function(e){function t(e){a(this,t);var n=i(this,Object.getPrototypeOf(t).call(this,e));return n.deleteNote=function(e,t){t.stopPropagation(),n.setState({notes:n.state.notes.filter(function(t){return t.id!==e})})},n.activateNoteEdit=function(e){n.setState({notes:n.state.notes.map(function(t){return t.id===e&&(t.editing=!0),t})})},n.editNote=function(e,t){n.setState({notes:n.state.notes.map(function(n){return n.id===e&&(n.editing=!1,n.task=t),n})})},n.state={notes:[{id:v["default"].v4(),task:"Learn React"},{id:v["default"].v4(),task:"Do laundry"}]},n.addNote=n.addNote.bind(n),n}return u(t,e),l(t,[{key:"render",value:function(){var e=this.state.notes;return f["default"].createElement("div",null,f["default"].createElement("button",{className:"add-note",onClick:this.addNote},"+"),f["default"].createElement(d["default"],{notes:e,onNoteClick:this.activateNoteEdit,onEdit:this.editNote,onDelete:this.deleteNote}))}},{key:"addNote",value:function(){this.setState({notes:[].concat(o(this.state.notes),[{id:v["default"].v4(),task:"New task"}])})}}]),t}(f["default"].Component);t["default"]=y},166:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=r(o),i=n(167),u=r(i),l=n(172),c=r(l);n(174),t["default"]=function(e){var t=e.notes,n=e.onNoteClick,r=void 0===n?function(){}:n,o=e.onEdit,i=void 0===o?function(){}:o,l=e.onDelete,f=void 0===l?function(){}:l;return a["default"].createElement("ul",{className:"notes"},t.map(function(e){var t=e.id,n=e.editing,o=e.task;return a["default"].createElement("li",{key:t},a["default"].createElement(u["default"],{className:"note",onClick:r.bind(null,t)},a["default"].createElement(c["default"],{className:"editable",editing:n,value:o,onEdit:i.bind(null,t)}),a["default"].createElement("button",{className:"delete",onClick:f.bind(null,t)},"x")))}))}},167:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),i=r(a);n(168),t["default"]=function(e){var t=e.children,n=o(e,["children"]);return i["default"].createElement("div",n,t)}},168:function(e,t){},172:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=n(1),s=r(f),d=n(173),p=r(d);t["default"]=function(e){var t=e.editing,n=e.value,r=e.onEdit,o=e.className,a=u(e,["editing","value","onEdit","className"]);return t?s["default"].createElement(v,c({className:o,value:n,onEdit:r},a)):s["default"].createElement("span",c({className:(0,p["default"])("value",o)},a),n)};var v=function(e){function t(){var e,n,r,i;o(this,t);for(var u=arguments.length,l=Array(u),c=0;c<u;c++)l[c]=arguments[c];return n=r=a(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),r.checkEnter=function(e){"Enter"===e.key&&r.finishEdit(e)},r.finishEdit=function(e){var t=e.target.value;r.props.onEdit&&r.props.onEdit(t)},i=n,a(r,i)}return i(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.value,r=(e.onEdit,u(e,["className","value","onEdit"]));return s["default"].createElement("input",c({type:"text",className:(0,p["default"])("edit",t),autoFocus:!0,defaultValue:n,onBlur:this.finishEdit,onKeyPress:this.checkEnter},r))}}]),t}(s["default"].Component)},174:function(e,t){},178:function(e,t){}});
//# sourceMappingURL=app.js.map