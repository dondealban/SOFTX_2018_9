webpackJsonp([44],{564:function(e,t,n){"use strict";function a(e){function t(t){var a=e.util.getContainerEditorElement(t);Array.prototype.slice.call(a.parentElement.querySelectorAll("."+n)).forEach(function(e){e.classList.remove(n)})}var n="medium-editor-dragover",a=e.Extension.extend({name:"fileDragging",allowedTypes:["image"],init:function(){e.Extension.prototype.init.apply(this,arguments),this.subscribe("editableDrag",this.handleDrag.bind(this)),this.subscribe("editableDrop",this.handleDrop.bind(this))},handleDrag:function(e){e.preventDefault(),e.dataTransfer.dropEffect="copy";var a=e.target.classList?e.target:e.target.parentElement;t(a),"dragover"===e.type&&a.classList.add(n)},handleDrop:function(e){e.preventDefault(),e.stopPropagation(),this.base.selectElement(e.target);var n=this.base.exportSelection();if(n.start=n.end,this.base.importSelection(n),e.dataTransfer.files){var a=e.dataTransfer.files.item(0);this.isAllowedFile(a)&&a.type.match("image")&&this.insertImageFile(a)}t(e.target)},isAllowedFile:function(e){return this.allowedTypes.some(function(t){return!!e.type.match(t)})},insertImageFile:function(e){if("function"==typeof FileReader){var t=new FileReader;t.readAsDataURL(e),t.addEventListener("load",function(e){var t=this.base.getSelectedParentElement(),n=new Image,a=document.createElement("p"),i=document.createElement("span"),o=r.helpers.makeId(10);n.id=o,r.helpers.getDictItem("loading_img").then(function(e){i.innerHTML="["+e+" ]"}),a.appendChild(n),a.appendChild(i);var l=this.base;n.onload=function(){i.remove(),l.checkContentChanged(l.elements[0])},t.appendChild(a),Shiny.onInputChange("imageUpload",{img:e.target.result,id:o})}.bind(this))}}});e.extensions.fileDragging=a}Object.defineProperty(t,"__esModule",{value:!0}),t.addDragDropToMedium=a;var i=n(2),r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(i)}});