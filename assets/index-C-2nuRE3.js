var sr=Object.defineProperty;var hr=(YI,yg,ng)=>yg in YI?sr(YI,yg,{enumerable:!0,configurable:!0,writable:!0,value:ng}):YI[yg]=ng;var TA=(YI,yg,ng)=>(hr(YI,typeof yg!="symbol"?yg+"":yg,ng),ng);(async()=>{(function(){const C=document.createElement("link").relList;if(C&&C.supports&&C.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))I(g);new MutationObserver(g=>{for(const B of g)if(B.type==="childList")for(const Q of B.addedNodes)Q.tagName==="LINK"&&Q.rel==="modulepreload"&&I(Q)}).observe(document,{childList:!0,subtree:!0});function A(g){const B={};return g.integrity&&(B.integrity=g.integrity),g.referrerPolicy&&(B.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?B.credentials="include":g.crossOrigin==="anonymous"?B.credentials="omit":B.credentials="same-origin",B}function I(g){if(g.ep)return;g.ep=!0;const B=A(g);fetch(g.href,B)}})();class YI{constructor(A,I,g,B,Q="div"){this.parent=A,this.object=I,this.property=g,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(Q),this.domElement.classList.add("controller"),this.domElement.classList.add(B),this.$name=document.createElement("div"),this.$name.classList.add("name"),YI.nextNameID=YI.nextNameID||0,this.$name.id=`lil-gui-name-${++YI.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",E=>E.stopPropagation()),this.domElement.addEventListener("keyup",E=>E.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(g)}name(A){return this._name=A,this.$name.innerHTML=A,this}onChange(A){return this._onChange=A,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(A){return this._onFinishChange=A,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(A=!0){return this.disable(!A)}disable(A=!0){return A===this._disabled?this:(this._disabled=A,this.domElement.classList.toggle("disabled",A),this.$disable.toggleAttribute("disabled",A),this)}show(A=!0){return this._hidden=!A,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(A){const I=this.parent.add(this.object,this.property,A);return I.name(this._name),this.destroy(),I}min(A){return this}max(A){return this}step(A){return this}decimals(A){return this}listen(A=!0){return this._listening=A,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const A=this.save();A!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=A}getValue(){return this.object[this.property]}setValue(A){return this.object[this.property]=A,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(A){return this.setValue(A),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class yg extends YI{constructor(A,I,g){super(A,I,g,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function ng(C){let A,I;return(A=C.match(/(#|0x)?([a-f0-9]{6})/i))?I=A[2]:(A=C.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?I=parseInt(A[1]).toString(16).padStart(2,0)+parseInt(A[2]).toString(16).padStart(2,0)+parseInt(A[3]).toString(16).padStart(2,0):(A=C.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(I=A[1]+A[1]+A[2]+A[2]+A[3]+A[3]),I?"#"+I:!1}const PD={isPrimitive:!0,match:C=>typeof C=="string",fromHexString:ng,toHexString:ng},BB={isPrimitive:!0,match:C=>typeof C=="number",fromHexString:C=>parseInt(C.substring(1),16),toHexString:C=>"#"+C.toString(16).padStart(6,0)},jD={isPrimitive:!1,match:C=>Array.isArray(C),fromHexString(C,A,I=1){const g=BB.fromHexString(C);A[0]=(g>>16&255)/255*I,A[1]=(g>>8&255)/255*I,A[2]=(g&255)/255*I},toHexString([C,A,I],g=1){g=255/g;const B=C*g<<16^A*g<<8^I*g<<0;return BB.toHexString(B)}},VD={isPrimitive:!1,match:C=>Object(C)===C,fromHexString(C,A,I=1){const g=BB.fromHexString(C);A.r=(g>>16&255)/255*I,A.g=(g>>8&255)/255*I,A.b=(g&255)/255*I},toHexString({r:C,g:A,b:I},g=1){g=255/g;const B=C*g<<16^A*g<<8^I*g<<0;return BB.toHexString(B)}},XD=[PD,BB,jD,VD];function _D(C){return XD.find(A=>A.match(C))}class zD extends YI{constructor(A,I,g,B){super(A,I,g,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=_D(this.initialValue),this._rgbScale=B,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const Q=ng(this.$text.value);Q&&this._setValueFromHexString(Q)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(A){if(this._format.isPrimitive){const I=this._format.fromHexString(A);this.setValue(I)}else this._format.fromHexString(A,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(A){return this._setValueFromHexString(A),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class XQ extends YI{constructor(A,I,g){super(A,I,g,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",B=>{B.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class $D extends YI{constructor(A,I,g,B,Q,E){super(A,I,g,"number"),this._initInput(),this.min(B),this.max(Q);const i=E!==void 0;this.step(i?E:this._getImplicitStep(),i),this.updateDisplay()}decimals(A){return this._decimals=A,this.updateDisplay(),this}min(A){return this._min=A,this._onUpdateMinMax(),this}max(A){return this._max=A,this._onUpdateMinMax(),this}step(A,I=!0){return this._step=A,this._stepExplicit=I,this}updateDisplay(){const A=this.getValue();if(this._hasSlider){let I=(A-this._min)/(this._max-this._min);I=Math.max(0,Math.min(I,1)),this.$fill.style.width=I*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?A:A.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const A=()=>{let e=parseFloat(this.$input.value);isNaN(e)||(this._stepExplicit&&(e=this._snap(e)),this.setValue(this._clamp(e)))},I=e=>{const l=parseFloat(this.$input.value);isNaN(l)||(this._snapClampSetValue(l+e),this.$input.value=this.getValue())},g=e=>{e.key==="Enter"&&this.$input.blur(),e.code==="ArrowUp"&&(e.preventDefault(),I(this._step*this._arrowKeyMultiplier(e))),e.code==="ArrowDown"&&(e.preventDefault(),I(this._step*this._arrowKeyMultiplier(e)*-1))},B=e=>{this._inputFocused&&(e.preventDefault(),I(this._step*this._normalizeMouseWheel(e)))};let Q=!1,E,i,o,a,D;const t=5,s=e=>{E=e.clientX,i=o=e.clientY,Q=!0,a=this.getValue(),D=0,window.addEventListener("mousemove",w),window.addEventListener("mouseup",S)},w=e=>{if(Q){const l=e.clientX-E,k=e.clientY-i;Math.abs(k)>t?(e.preventDefault(),this.$input.blur(),Q=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(l)>t&&S()}if(!Q){const l=e.clientY-o;D-=l*this._step*this._arrowKeyMultiplier(e),a+D>this._max?D=this._max-a:a+D<this._min&&(D=this._min-a),this._snapClampSetValue(a+D)}o=e.clientY},S=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",w),window.removeEventListener("mouseup",S)},M=()=>{this._inputFocused=!0},G=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",A),this.$input.addEventListener("keydown",g),this.$input.addEventListener("wheel",B,{passive:!1}),this.$input.addEventListener("mousedown",s),this.$input.addEventListener("focus",M),this.$input.addEventListener("blur",G)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const A=(e,l,k,F,d)=>(e-l)/(k-l)*(d-F)+F,I=e=>{const l=this.$slider.getBoundingClientRect();let k=A(e,l.left,l.right,this._min,this._max);this._snapClampSetValue(k)},g=e=>{this._setDraggingStyle(!0),I(e.clientX),window.addEventListener("mousemove",B),window.addEventListener("mouseup",Q)},B=e=>{I(e.clientX)},Q=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",B),window.removeEventListener("mouseup",Q)};let E=!1,i,o;const a=e=>{e.preventDefault(),this._setDraggingStyle(!0),I(e.touches[0].clientX),E=!1},D=e=>{e.touches.length>1||(this._hasScrollBar?(i=e.touches[0].clientX,o=e.touches[0].clientY,E=!0):a(e),window.addEventListener("touchmove",t,{passive:!1}),window.addEventListener("touchend",s))},t=e=>{if(E){const l=e.touches[0].clientX-i,k=e.touches[0].clientY-o;Math.abs(l)>Math.abs(k)?a(e):(window.removeEventListener("touchmove",t),window.removeEventListener("touchend",s))}else e.preventDefault(),I(e.touches[0].clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",t),window.removeEventListener("touchend",s)},w=this._callOnFinishChange.bind(this),S=400;let M;const G=e=>{if(Math.abs(e.deltaX)<Math.abs(e.deltaY)&&this._hasScrollBar)return;e.preventDefault();const l=this._normalizeMouseWheel(e)*this._step;this._snapClampSetValue(this.getValue()+l),this.$input.value=this.getValue(),clearTimeout(M),M=setTimeout(w,S)};this.$slider.addEventListener("mousedown",g),this.$slider.addEventListener("touchstart",D,{passive:!1}),this.$slider.addEventListener("wheel",G,{passive:!1})}_setDraggingStyle(A,I="horizontal"){this.$slider&&this.$slider.classList.toggle("active",A),document.body.classList.toggle("lil-gui-dragging",A),document.body.classList.toggle(`lil-gui-${I}`,A)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(A){let{deltaX:I,deltaY:g}=A;return Math.floor(A.deltaY)!==A.deltaY&&A.wheelDelta&&(I=0,g=-A.wheelDelta/120,g*=this._stepExplicit?1:10),I+-g}_arrowKeyMultiplier(A){let I=this._stepExplicit?1:10;return A.shiftKey?I*=10:A.altKey&&(I/=10),I}_snap(A){const I=Math.round(A/this._step)*this._step;return parseFloat(I.toPrecision(15))}_clamp(A){return A<this._min&&(A=this._min),A>this._max&&(A=this._max),A}_snapClampSetValue(A){this.setValue(this._clamp(this._snap(A)))}get _hasScrollBar(){const A=this.parent.root.$children;return A.scrollHeight>A.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Ae extends YI{constructor(A,I,g,B){super(A,I,g,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(B)}options(A){return this._values=Array.isArray(A)?A:Object.values(A),this._names=Array.isArray(A)?A:Object.keys(A),this.$select.replaceChildren(),this._names.forEach(I=>{const g=document.createElement("option");g.innerHTML=I,this.$select.appendChild(g)}),this.updateDisplay(),this}updateDisplay(){const A=this.getValue(),I=this._values.indexOf(A);return this.$select.selectedIndex=I,this.$display.innerHTML=I===-1?A:this._names[I],this}}class Ie extends YI{constructor(A,I,g){super(A,I,g,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",B=>{B.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const ge=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "\u2195";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "\u25BE";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "\u25B8";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "\u2713";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function Ce(C){const A=document.createElement("style");A.innerHTML=C;const I=document.querySelector("head link[rel=stylesheet], head style");I?document.head.insertBefore(A,I):document.head.appendChild(A)}let Hi=!1;class _Q{constructor({parent:A,autoPlace:I=A===void 0,container:g,width:B,title:Q="Controls",closeFolders:E=!1,injectStyles:i=!0,touchStyles:o=!0}={}){if(this.parent=A,this.root=A?A.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",a=>{(a.code==="Enter"||a.code==="Space")&&(a.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(Q),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),o&&this.domElement.classList.add("allow-touch-styles"),!Hi&&i&&(Ce(ge),Hi=!0),g?g.appendChild(this.domElement):I&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),B&&this.domElement.style.setProperty("--width",B+"px"),this._closeFolders=E}add(A,I,g,B,Q){if(Object(g)===g)return new Ae(this,A,I,g);const E=A[I];switch(typeof E){case"number":return new $D(this,A,I,g,B,Q);case"boolean":return new yg(this,A,I);case"string":return new Ie(this,A,I);case"function":return new XQ(this,A,I)}console.error(`gui.add failed
	property:`,I,`
	object:`,A,`
	value:`,E)}addColor(A,I,g=1){return new zD(this,A,I,g)}addFolder(A){const I=new _Q({parent:this,title:A});return this.root._closeFolders&&I.close(),I}load(A,I=!0){return A.controllers&&this.controllers.forEach(g=>{g instanceof XQ||g._name in A.controllers&&g.load(A.controllers[g._name])}),I&&A.folders&&this.folders.forEach(g=>{g._title in A.folders&&g.load(A.folders[g._title])}),this}save(A=!0){const I={controllers:{},folders:{}};return this.controllers.forEach(g=>{if(!(g instanceof XQ)){if(g._name in I.controllers)throw new Error(`Cannot save GUI with duplicate property "${g._name}"`);I.controllers[g._name]=g.save()}}),A&&this.folders.forEach(g=>{if(g._title in I.folders)throw new Error(`Cannot save GUI with duplicate folder "${g._title}"`);I.folders[g._title]=g.save()}),I}open(A=!0){return this._setClosed(!A),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(A){this._closed!==A&&(this._closed=A,this._callOnOpenClose(this))}show(A=!0){return this._hidden=!A,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(A=!0){return this._setClosed(!A),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const I=this.$children.clientHeight;this.$children.style.height=I+"px",this.domElement.classList.add("transition");const g=Q=>{Q.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",g))};this.$children.addEventListener("transitionend",g);const B=A?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!A),requestAnimationFrame(()=>{this.$children.style.height=B+"px"})}),this}title(A){return this._title=A,this.$title.innerHTML=A,this}reset(A=!0){return(A?this.controllersRecursive():this.controllers).forEach(I=>I.reset()),this}onChange(A){return this._onChange=A,this}_callOnChange(A){this.parent&&this.parent._callOnChange(A),this._onChange!==void 0&&this._onChange.call(this,{object:A.object,property:A.property,value:A.getValue(),controller:A})}onFinishChange(A){return this._onFinishChange=A,this}_callOnFinishChange(A){this.parent&&this.parent._callOnFinishChange(A),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:A.object,property:A.property,value:A.getValue(),controller:A})}onOpenClose(A){return this._onOpenClose=A,this}_callOnOpenClose(A){this.parent&&this.parent._callOnOpenClose(A),this._onOpenClose!==void 0&&this._onOpenClose.call(this,A)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(A=>A.destroy())}controllersRecursive(){let A=Array.from(this.controllers);return this.folders.forEach(I=>{A=A.concat(I.controllersRecursive())}),A}foldersRecursive(){let A=Array.from(this.folders);return this.folders.forEach(I=>{A=A.concat(I.foldersRecursive())}),A}}var LB=class extends EventTarget{dispatchTypedEvent(C,A){return super.dispatchEvent(A)}};class Be extends LB{constructor(){super(...arguments);TA(this,"sound",{muted:!0});TA(this,"impulse",{strength:3,count:1,apply:()=>{this.dispatchTypedEvent("applyImpulse",new CustomEvent("applyImpulse"))}});TA(this,"reset",{type:"hologram",radius:.5,length:2,count:5,reset:()=>{this.dispatchTypedEvent("reset",new CustomEvent("reset"))}});TA(this,"mettalic",{roughness:.1,metalness:.75});TA(this,"hologram",{frequency:30,speed:.1});TA(this,"helpers",{directionalLightCameraHelper:!1})}}const gI=new Be,kC=new _Q;kC.add(gI.sound,"muted");const zQ=kC.addFolder("Impulse");zQ.add(gI.impulse,"strength",0,5),zQ.add(gI.impulse,"count",1,7,1),zQ.add(gI.impulse,"apply");const QB=kC.addFolder("Reset");QB.add(gI.reset,"type",["hologram","metallic","random"]).onChange(ui),QB.add(gI.reset,"radius",.1,.75),QB.add(gI.reset,"length",.5,2.5),QB.add(gI.reset,"count",1,7,1),QB.add(gI.reset,"reset");const EB=kC.addFolder("Hologram");EB.add(gI.hologram,"frequency",0,100),EB.add(gI.hologram,"speed",.01,1);const iB=kC.addFolder("Metallic");iB.add(gI.mettalic,"roughness",0,1),iB.add(gI.mettalic,"metalness",0,1),kC.addFolder("Helpers").add(gI.helpers,"directionalLightCameraHelper");function ui(C){const A={hologram:[EB],metallic:[iB],random:[EB,iB]};[EB,iB].forEach(I=>A[C].includes(I)?I.show():I.hide())}ui(gI.reset.type);const $Q="161",MC={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},yC={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Qe=0,mi=1,Ee=2,fi=1,ie=2,lg=3,ug=0,ZI=1,tg=2,mg=0,nC=1,AE=2,Ti=3,xi=4,oe=5,gC=100,ae=101,De=102,Oi=103,bi=104,ee=200,te=201,se=202,he=203,IE=204,gE=205,Ge=206,we=207,Se=208,re=209,ce=210,ke=211,Me=212,ye=213,ne=214,le=0,Ue=1,Ke=2,HB=3,Ne=4,Je=5,Fe=6,Re=7,vi=0,qe=1,pe=2,fg=0,de=1,Ye=2,Le=3,He=4,ue=5,me=6,Zi=300,lC=301,UC=302,CE=303,BE=304,uB=306,QE=1e3,Qg=1001,EE=1002,xI=1003,Wi=1004,oB=1005,WI=1006,iE=1007,CC=1008,Tg=1009,fe=1010,Te=1011,oE=1012,Pi=1013,xg=1014,Ug=1015,aB=1016,ji=1017,Vi=1018,BC=1020,xe=1021,Eg=1023,Oe=1024,be=1025,QC=1026,KC=1027,ve=1028,Xi=1029,Ze=1030,_i=1031,zi=1033,aE=33776,DE=33777,eE=33778,tE=33779,$i=35840,Ao=35841,Io=35842,go=35843,Co=36196,Bo=37492,Qo=37496,Eo=37808,io=37809,oo=37810,ao=37811,Do=37812,eo=37813,to=37814,so=37815,ho=37816,Go=37817,wo=37818,So=37819,ro=37820,co=37821,sE=36492,ko=36494,Mo=36495,We=36283,yo=36284,no=36285,lo=36286,Uo=3e3,EC=3001,Pe=3200,je=3201,Ko=0,Ve=1,zI="",dI="srgb",Kg="srgb-linear",hE="display-p3",mB="display-p3-linear",fB="linear",DI="srgb",TB="rec709",xB="p3",NC=7680,No=519,Xe=512,_e=513,ze=514,Jo=515,$e=516,At=517,It=518,gt=519,Fo=35044,Ro="300 es",GE=1035,Ng=2e3,OB=2001;class iC{addEventListener(A,I){this._listeners===void 0&&(this._listeners={});const g=this._listeners;g[A]===void 0&&(g[A]=[]),g[A].indexOf(I)===-1&&g[A].push(I)}hasEventListener(A,I){if(this._listeners===void 0)return!1;const g=this._listeners;return g[A]!==void 0&&g[A].indexOf(I)!==-1}removeEventListener(A,I){if(this._listeners===void 0)return;const g=this._listeners[A];if(g!==void 0){const B=g.indexOf(I);B!==-1&&g.splice(B,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const I=this._listeners[A.type];if(I!==void 0){A.target=this;const g=I.slice(0);for(let B=0,Q=g.length;B<Q;B++)g[B].call(this,A);A.target=null}}}const LI=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qo=1234567;const DB=Math.PI/180,eB=180/Math.PI;function JC(){const C=Math.random()*4294967295|0,A=Math.random()*4294967295|0,I=Math.random()*4294967295|0,g=Math.random()*4294967295|0;return(LI[C&255]+LI[C>>8&255]+LI[C>>16&255]+LI[C>>24&255]+"-"+LI[A&255]+LI[A>>8&255]+"-"+LI[A>>16&15|64]+LI[A>>24&255]+"-"+LI[I&63|128]+LI[I>>8&255]+"-"+LI[I>>16&255]+LI[I>>24&255]+LI[g&255]+LI[g>>8&255]+LI[g>>16&255]+LI[g>>24&255]).toLowerCase()}function HI(C,A,I){return Math.max(A,Math.min(I,C))}function wE(C,A){return(C%A+A)%A}function Ct(C,A,I,g,B){return g+(C-A)*(B-g)/(I-A)}function Bt(C,A,I){return C!==A?(I-C)/(A-C):0}function tB(C,A,I){return(1-I)*C+I*A}function Qt(C,A,I,g){return tB(C,A,1-Math.exp(-I*g))}function Et(C,A=1){return A-Math.abs(wE(C,A*2)-A)}function it(C,A,I){return C<=A?0:C>=I?1:(C=(C-A)/(I-A),C*C*(3-2*C))}function ot(C,A,I){return C<=A?0:C>=I?1:(C=(C-A)/(I-A),C*C*C*(C*(C*6-15)+10))}function at(C,A){return C+Math.floor(Math.random()*(A-C+1))}function Dt(C,A){return C+Math.random()*(A-C)}function et(C){return C*(.5-Math.random())}function tt(C){C!==void 0&&(qo=C);let A=qo+=1831565813;return A=Math.imul(A^A>>>15,A|1),A^=A+Math.imul(A^A>>>7,A|61),((A^A>>>14)>>>0)/4294967296}function st(C){return C*DB}function ht(C){return C*eB}function SE(C){return(C&C-1)===0&&C!==0}function Gt(C){return Math.pow(2,Math.ceil(Math.log(C)/Math.LN2))}function bB(C){return Math.pow(2,Math.floor(Math.log(C)/Math.LN2))}function wt(C,A,I,g,B){const Q=Math.cos,E=Math.sin,i=Q(I/2),o=E(I/2),a=Q((A+g)/2),D=E((A+g)/2),t=Q((A-g)/2),s=E((A-g)/2),w=Q((g-A)/2),S=E((g-A)/2);switch(B){case"XYX":C.set(i*D,o*t,o*s,i*a);break;case"YZY":C.set(o*s,i*D,o*t,i*a);break;case"ZXZ":C.set(o*t,o*s,i*D,i*a);break;case"XZX":C.set(i*D,o*S,o*w,i*a);break;case"YXY":C.set(o*w,i*D,o*S,i*a);break;case"ZYZ":C.set(o*S,o*w,i*D,i*a);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+B)}}function FC(C,A){switch(A.constructor){case Float32Array:return C;case Uint32Array:return C/4294967295;case Uint16Array:return C/65535;case Uint8Array:return C/255;case Int32Array:return Math.max(C/2147483647,-1);case Int16Array:return Math.max(C/32767,-1);case Int8Array:return Math.max(C/127,-1);default:throw new Error("Invalid component type.")}}function OI(C,A){switch(A.constructor){case Float32Array:return C;case Uint32Array:return Math.round(C*4294967295);case Uint16Array:return Math.round(C*65535);case Uint8Array:return Math.round(C*255);case Int32Array:return Math.round(C*2147483647);case Int16Array:return Math.round(C*32767);case Int8Array:return Math.round(C*127);default:throw new Error("Invalid component type.")}}const St={DEG2RAD:DB,RAD2DEG:eB,generateUUID:JC,clamp:HI,euclideanModulo:wE,mapLinear:Ct,inverseLerp:Bt,lerp:tB,damp:Qt,pingpong:Et,smoothstep:it,smootherstep:ot,randInt:at,randFloat:Dt,randFloatSpread:et,seededRandom:tt,degToRad:st,radToDeg:ht,isPowerOfTwo:SE,ceilPowerOfTwo:Gt,floorPowerOfTwo:bB,setQuaternionFromProperEuler:wt,normalize:OI,denormalize:FC};class LA{constructor(A=0,I=0){LA.prototype.isVector2=!0,this.x=A,this.y=I}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,I){return this.x=A,this.y=I,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const I=this.x,g=this.y,B=A.elements;return this.x=B[0]*I+B[3]*g+B[6],this.y=B[1]*I+B[4]*g+B[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(HI(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y;return I*I+g*g}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this}rotateAround(A,I){const g=Math.cos(I),B=Math.sin(I),Q=this.x-A.x,E=this.y-A.y;return this.x=Q*g-E*B+A.x,this.y=Q*B+E*g+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jA{constructor(A,I,g,B,Q,E,i,o,a){jA.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],A!==void 0&&this.set(A,I,g,B,Q,E,i,o,a)}set(A,I,g,B,Q,E,i,o,a){const D=this.elements;return D[0]=A,D[1]=B,D[2]=i,D[3]=I,D[4]=Q,D[5]=o,D[6]=g,D[7]=E,D[8]=a,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],this}extractBasis(A,I,g){return A.setFromMatrix3Column(this,0),I.setFromMatrix3Column(this,1),g.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const I=A.elements;return this.set(I[0],I[4],I[8],I[1],I[5],I[9],I[2],I[6],I[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,B=I.elements,Q=this.elements,E=g[0],i=g[3],o=g[6],a=g[1],D=g[4],t=g[7],s=g[2],w=g[5],S=g[8],M=B[0],G=B[3],e=B[6],l=B[1],k=B[4],F=B[7],d=B[2],q=B[5],J=B[8];return Q[0]=E*M+i*l+o*d,Q[3]=E*G+i*k+o*q,Q[6]=E*e+i*F+o*J,Q[1]=a*M+D*l+t*d,Q[4]=a*G+D*k+t*q,Q[7]=a*e+D*F+t*J,Q[2]=s*M+w*l+S*d,Q[5]=s*G+w*k+S*q,Q[8]=s*e+w*F+S*J,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[3]*=A,I[6]*=A,I[1]*=A,I[4]*=A,I[7]*=A,I[2]*=A,I[5]*=A,I[8]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[1],B=A[2],Q=A[3],E=A[4],i=A[5],o=A[6],a=A[7],D=A[8];return I*E*D-I*i*a-g*Q*D+g*i*o+B*Q*a-B*E*o}invert(){const A=this.elements,I=A[0],g=A[1],B=A[2],Q=A[3],E=A[4],i=A[5],o=A[6],a=A[7],D=A[8],t=D*E-i*a,s=i*o-D*Q,w=a*Q-E*o,S=I*t+g*s+B*w;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/S;return A[0]=t*M,A[1]=(B*a-D*g)*M,A[2]=(i*g-B*E)*M,A[3]=s*M,A[4]=(D*I-B*o)*M,A[5]=(B*Q-i*I)*M,A[6]=w*M,A[7]=(g*o-a*I)*M,A[8]=(E*I-g*Q)*M,this}transpose(){let A;const I=this.elements;return A=I[1],I[1]=I[3],I[3]=A,A=I[2],I[2]=I[6],I[6]=A,A=I[5],I[5]=I[7],I[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const I=this.elements;return A[0]=I[0],A[1]=I[3],A[2]=I[6],A[3]=I[1],A[4]=I[4],A[5]=I[7],A[6]=I[2],A[7]=I[5],A[8]=I[8],this}setUvTransform(A,I,g,B,Q,E,i){const o=Math.cos(Q),a=Math.sin(Q);return this.set(g*o,g*a,-g*(o*E+a*i)+E+A,-B*a,B*o,-B*(-a*E+o*i)+i+I,0,0,1),this}scale(A,I){return this.premultiply(rE.makeScale(A,I)),this}rotate(A){return this.premultiply(rE.makeRotation(-A)),this}translate(A,I){return this.premultiply(rE.makeTranslation(A,I)),this}makeTranslation(A,I){return A.isVector2?this.set(1,0,A.x,0,1,A.y,0,0,1):this.set(1,0,A,0,1,I,0,0,1),this}makeRotation(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,g,I,0,0,0,1),this}makeScale(A,I){return this.set(A,0,0,0,I,0,0,0,1),this}equals(A){const I=this.elements,g=A.elements;for(let B=0;B<9;B++)if(I[B]!==g[B])return!1;return!0}fromArray(A,I=0){for(let g=0;g<9;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A}clone(){return new this.constructor().fromArray(this.elements)}}const rE=new jA;function po(C){for(let A=C.length-1;A>=0;--A)if(C[A]>=65535)return!0;return!1}function vB(C){return document.createElementNS("http://www.w3.org/1999/xhtml",C)}function rt(){const C=vB("canvas");return C.style.display="block",C}const Yo={};function RC(C){C in Yo||(Yo[C]=!0,console.warn(C))}const Lo=new jA().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ho=new jA().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ZB={[Kg]:{transfer:fB,primaries:TB,toReference:C=>C,fromReference:C=>C},[dI]:{transfer:DI,primaries:TB,toReference:C=>C.convertSRGBToLinear(),fromReference:C=>C.convertLinearToSRGB()},[mB]:{transfer:fB,primaries:xB,toReference:C=>C.applyMatrix3(Ho),fromReference:C=>C.applyMatrix3(Lo)},[hE]:{transfer:DI,primaries:xB,toReference:C=>C.convertSRGBToLinear().applyMatrix3(Ho),fromReference:C=>C.applyMatrix3(Lo).convertLinearToSRGB()}},ct=new Set([Kg,mB]),iI={enabled:!0,_workingColorSpace:Kg,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(C){if(!ct.has(C))throw new Error(`Unsupported working color space, "${C}".`);this._workingColorSpace=C},convert:function(C,A,I){if(this.enabled===!1||A===I||!A||!I)return C;const g=ZB[A].toReference,B=ZB[I].fromReference;return B(g(C))},fromWorkingColorSpace:function(C,A){return this.convert(C,this._workingColorSpace,A)},toWorkingColorSpace:function(C,A){return this.convert(C,A,this._workingColorSpace)},getPrimaries:function(C){return ZB[C].primaries},getTransfer:function(C){return C===zI?fB:ZB[C].transfer}};function qC(C){return C<.04045?C*.0773993808:Math.pow(C*.9478672986+.0521327014,2.4)}function cE(C){return C<.0031308?C*12.92:1.055*Math.pow(C,.41666)-.055}let pC;class uo{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let I;if(A instanceof HTMLCanvasElement)I=A;else{pC===void 0&&(pC=vB("canvas")),pC.width=A.width,pC.height=A.height;const g=pC.getContext("2d");A instanceof ImageData?g.putImageData(A,0,0):g.drawImage(A,0,0,A.width,A.height),I=pC}return I.width>2048||I.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),I.toDataURL("image/jpeg",.6)):I.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const I=vB("canvas");I.width=A.width,I.height=A.height;const g=I.getContext("2d");g.drawImage(A,0,0,A.width,A.height);const B=g.getImageData(0,0,A.width,A.height),Q=B.data;for(let E=0;E<Q.length;E++)Q[E]=qC(Q[E]/255)*255;return g.putImageData(B,0,0),I}else if(A.data){const I=A.data.slice(0);for(let g=0;g<I.length;g++)I instanceof Uint8Array||I instanceof Uint8ClampedArray?I[g]=Math.floor(qC(I[g]/255)*255):I[g]=qC(I[g]);return{data:I,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}let kt=0;class mo{constructor(A=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kt++}),this.uuid=JC(),this.data=A,this.dataReady=!0,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const g={uuid:this.uuid,url:""},B=this.data;if(B!==null){let Q;if(Array.isArray(B)){Q=[];for(let E=0,i=B.length;E<i;E++)B[E].isDataTexture?Q.push(kE(B[E].image)):Q.push(kE(B[E]))}else Q=kE(B);g.url=Q}return I||(A.images[this.uuid]=g),g}}function kE(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap?uo.getDataURL(C):C.data?{data:Array.from(C.data),width:C.width,height:C.height,type:C.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mt=0;class PI extends iC{constructor(A=PI.DEFAULT_IMAGE,I=PI.DEFAULT_MAPPING,g=Qg,B=Qg,Q=WI,E=CC,i=Eg,o=Tg,a=PI.DEFAULT_ANISOTROPY,D=zI){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mt++}),this.uuid=JC(),this.name="",this.source=new mo(A),this.mipmaps=[],this.mapping=I,this.channel=0,this.wrapS=g,this.wrapT=B,this.magFilter=Q,this.minFilter=E,this.anisotropy=a,this.format=i,this.internalFormat=null,this.type=o,this.offset=new LA(0,0),this.repeat=new LA(1,1),this.center=new LA(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jA,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof D=="string"?this.colorSpace=D:(RC("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=D===EC?dI:zI),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(A=null){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.channel=A.channel,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.colorSpace=A.colorSpace,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const g={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(g.userData=this.userData),I||(A.textures[this.uuid]=g),g}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==Zi)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case QE:A.x=A.x-Math.floor(A.x);break;case Qg:A.x=A.x<0?0:1;break;case EE:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case QE:A.y=A.y-Math.floor(A.y);break;case Qg:A.y=A.y<0?0:1;break;case EE:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return RC("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===dI?EC:Uo}set encoding(A){RC("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=A===EC?dI:zI}}PI.DEFAULT_IMAGE=null,PI.DEFAULT_MAPPING=Zi,PI.DEFAULT_ANISOTROPY=1;class FI{constructor(A=0,I=0,g=0,B=1){FI.prototype.isVector4=!0,this.x=A,this.y=I,this.z=g,this.w=B}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,I,g,B){return this.x=A,this.y=I,this.z=g,this.w=B,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;case 3:this.w=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this.w=A.w+I.w,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this.w+=A.w*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this.w=A.w-I.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const I=this.x,g=this.y,B=this.z,Q=this.w,E=A.elements;return this.x=E[0]*I+E[4]*g+E[8]*B+E[12]*Q,this.y=E[1]*I+E[5]*g+E[9]*B+E[13]*Q,this.z=E[2]*I+E[6]*g+E[10]*B+E[14]*Q,this.w=E[3]*I+E[7]*g+E[11]*B+E[15]*Q,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const I=Math.sqrt(1-A.w*A.w);return I<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/I,this.y=A.y/I,this.z=A.z/I),this}setAxisAngleFromRotationMatrix(A){let I,g,B,Q;const E=A.elements,i=E[0],o=E[4],a=E[8],D=E[1],t=E[5],s=E[9],w=E[2],S=E[6],M=E[10];if(Math.abs(o-D)<.01&&Math.abs(a-w)<.01&&Math.abs(s-S)<.01){if(Math.abs(o+D)<.1&&Math.abs(a+w)<.1&&Math.abs(s+S)<.1&&Math.abs(i+t+M-3)<.1)return this.set(1,0,0,0),this;I=Math.PI;const e=(i+1)/2,l=(t+1)/2,k=(M+1)/2,F=(o+D)/4,d=(a+w)/4,q=(s+S)/4;return e>l&&e>k?e<.01?(g=0,B=.707106781,Q=.707106781):(g=Math.sqrt(e),B=F/g,Q=d/g):l>k?l<.01?(g=.707106781,B=0,Q=.707106781):(B=Math.sqrt(l),g=F/B,Q=q/B):k<.01?(g=.707106781,B=.707106781,Q=0):(Q=Math.sqrt(k),g=d/Q,B=q/Q),this.set(g,B,Q,I),this}let G=Math.sqrt((S-s)*(S-s)+(a-w)*(a-w)+(D-o)*(D-o));return Math.abs(G)<.001&&(G=1),this.x=(S-s)/G,this.y=(a-w)/G,this.z=(D-o)/G,this.w=Math.acos((i+t+M-1)/2),this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this.w=Math.max(A.w,Math.min(I.w,this.w)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this.w=Math.max(A,Math.min(I,this.w)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this.w+=(A.w-this.w)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this.w=A.w+(I.w-A.w)*g,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this.w=A[I+3],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A[I+3]=this.w,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this.w=A.getW(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yt extends iC{constructor(A=1,I=1,g={}){super(),this.isRenderTarget=!0,this.width=A,this.height=I,this.depth=1,this.scissor=new FI(0,0,A,I),this.scissorTest=!1,this.viewport=new FI(0,0,A,I);const B={width:A,height:I,depth:1};g.encoding!==void 0&&(RC("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),g.colorSpace=g.encoding===EC?dI:zI),g=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:WI,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},g),this.texture=new PI(B,g.mapping,g.wrapS,g.wrapT,g.magFilter,g.minFilter,g.format,g.type,g.anisotropy,g.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=g.generateMipmaps,this.texture.internalFormat=g.internalFormat,this.depthBuffer=g.depthBuffer,this.stencilBuffer=g.stencilBuffer,this.depthTexture=g.depthTexture,this.samples=g.samples}setSize(A,I,g=1){(this.width!==A||this.height!==I||this.depth!==g)&&(this.width=A,this.height=I,this.depth=g,this.texture.image.width=A,this.texture.image.height=I,this.texture.image.depth=g,this.dispose()),this.viewport.set(0,0,A,I),this.scissor.set(0,0,A,I)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.scissor.copy(A.scissor),this.scissorTest=A.scissorTest,this.viewport.copy(A.viewport),this.texture=A.texture.clone(),this.texture.isRenderTargetTexture=!0;const I=Object.assign({},A.texture.image);return this.texture.source=new mo(I),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oC extends yt{constructor(A=1,I=1,g={}){super(A,I,g),this.isWebGLRenderTarget=!0}}class fo extends PI{constructor(A=null,I=1,g=1,B=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:I,height:g,depth:B},this.magFilter=xI,this.minFilter=xI,this.wrapR=Qg,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nt extends PI{constructor(A=null,I=1,g=1,B=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:I,height:g,depth:B},this.magFilter=xI,this.minFilter=xI,this.wrapR=Qg,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class aC{constructor(A=0,I=0,g=0,B=1){this.isQuaternion=!0,this._x=A,this._y=I,this._z=g,this._w=B}static slerpFlat(A,I,g,B,Q,E,i){let o=g[B+0],a=g[B+1],D=g[B+2],t=g[B+3];const s=Q[E+0],w=Q[E+1],S=Q[E+2],M=Q[E+3];if(i===0){A[I+0]=o,A[I+1]=a,A[I+2]=D,A[I+3]=t;return}if(i===1){A[I+0]=s,A[I+1]=w,A[I+2]=S,A[I+3]=M;return}if(t!==M||o!==s||a!==w||D!==S){let G=1-i;const e=o*s+a*w+D*S+t*M,l=e>=0?1:-1,k=1-e*e;if(k>Number.EPSILON){const d=Math.sqrt(k),q=Math.atan2(d,e*l);G=Math.sin(G*q)/d,i=Math.sin(i*q)/d}const F=i*l;if(o=o*G+s*F,a=a*G+w*F,D=D*G+S*F,t=t*G+M*F,G===1-i){const d=1/Math.sqrt(o*o+a*a+D*D+t*t);o*=d,a*=d,D*=d,t*=d}}A[I]=o,A[I+1]=a,A[I+2]=D,A[I+3]=t}static multiplyQuaternionsFlat(A,I,g,B,Q,E){const i=g[B],o=g[B+1],a=g[B+2],D=g[B+3],t=Q[E],s=Q[E+1],w=Q[E+2],S=Q[E+3];return A[I]=i*S+D*t+o*w-a*s,A[I+1]=o*S+D*s+a*t-i*w,A[I+2]=a*S+D*w+i*s-o*t,A[I+3]=D*S-i*t-o*s-a*w,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,I,g,B){return this._x=A,this._y=I,this._z=g,this._w=B,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,I=!0){const g=A._x,B=A._y,Q=A._z,E=A._order,i=Math.cos,o=Math.sin,a=i(g/2),D=i(B/2),t=i(Q/2),s=o(g/2),w=o(B/2),S=o(Q/2);switch(E){case"XYZ":this._x=s*D*t+a*w*S,this._y=a*w*t-s*D*S,this._z=a*D*S+s*w*t,this._w=a*D*t-s*w*S;break;case"YXZ":this._x=s*D*t+a*w*S,this._y=a*w*t-s*D*S,this._z=a*D*S-s*w*t,this._w=a*D*t+s*w*S;break;case"ZXY":this._x=s*D*t-a*w*S,this._y=a*w*t+s*D*S,this._z=a*D*S+s*w*t,this._w=a*D*t-s*w*S;break;case"ZYX":this._x=s*D*t-a*w*S,this._y=a*w*t+s*D*S,this._z=a*D*S-s*w*t,this._w=a*D*t+s*w*S;break;case"YZX":this._x=s*D*t+a*w*S,this._y=a*w*t+s*D*S,this._z=a*D*S-s*w*t,this._w=a*D*t-s*w*S;break;case"XZY":this._x=s*D*t-a*w*S,this._y=a*w*t-s*D*S,this._z=a*D*S+s*w*t,this._w=a*D*t+s*w*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+E)}return I===!0&&this._onChangeCallback(),this}setFromAxisAngle(A,I){const g=I/2,B=Math.sin(g);return this._x=A.x*B,this._y=A.y*B,this._z=A.z*B,this._w=Math.cos(g),this._onChangeCallback(),this}setFromRotationMatrix(A){const I=A.elements,g=I[0],B=I[4],Q=I[8],E=I[1],i=I[5],o=I[9],a=I[2],D=I[6],t=I[10],s=g+i+t;if(s>0){const w=.5/Math.sqrt(s+1);this._w=.25/w,this._x=(D-o)*w,this._y=(Q-a)*w,this._z=(E-B)*w}else if(g>i&&g>t){const w=2*Math.sqrt(1+g-i-t);this._w=(D-o)/w,this._x=.25*w,this._y=(B+E)/w,this._z=(Q+a)/w}else if(i>t){const w=2*Math.sqrt(1+i-g-t);this._w=(Q-a)/w,this._x=(B+E)/w,this._y=.25*w,this._z=(o+D)/w}else{const w=2*Math.sqrt(1+t-g-i);this._w=(E-B)/w,this._x=(Q+a)/w,this._y=(o+D)/w,this._z=.25*w}return this._onChangeCallback(),this}setFromUnitVectors(A,I){let g=A.dot(I)+1;return g<Number.EPSILON?(g=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=g):(this._x=0,this._y=-A.z,this._z=A.y,this._w=g)):(this._x=A.y*I.z-A.z*I.y,this._y=A.z*I.x-A.x*I.z,this._z=A.x*I.y-A.y*I.x,this._w=g),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(HI(this.dot(A),-1,1)))}rotateTowards(A,I){const g=this.angleTo(A);if(g===0)return this;const B=Math.min(1,I/g);return this.slerp(A,B),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,I){const g=A._x,B=A._y,Q=A._z,E=A._w,i=I._x,o=I._y,a=I._z,D=I._w;return this._x=g*D+E*i+B*a-Q*o,this._y=B*D+E*o+Q*i-g*a,this._z=Q*D+E*a+g*o-B*i,this._w=E*D-g*i-B*o-Q*a,this._onChangeCallback(),this}slerp(A,I){if(I===0)return this;if(I===1)return this.copy(A);const g=this._x,B=this._y,Q=this._z,E=this._w;let i=E*A._w+g*A._x+B*A._y+Q*A._z;if(i<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,i=-i):this.copy(A),i>=1)return this._w=E,this._x=g,this._y=B,this._z=Q,this;const o=1-i*i;if(o<=Number.EPSILON){const w=1-I;return this._w=w*E+I*this._w,this._x=w*g+I*this._x,this._y=w*B+I*this._y,this._z=w*Q+I*this._z,this.normalize(),this}const a=Math.sqrt(o),D=Math.atan2(a,i),t=Math.sin((1-I)*D)/a,s=Math.sin(I*D)/a;return this._w=E*t+this._w*s,this._x=g*t+this._x*s,this._y=B*t+this._y*s,this._z=Q*t+this._z*s,this._onChangeCallback(),this}slerpQuaternions(A,I,g){return this.copy(A).slerp(I,g)}random(){const A=Math.random(),I=Math.sqrt(1-A),g=Math.sqrt(A),B=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random();return this.set(I*Math.cos(B),g*Math.sin(Q),g*Math.cos(Q),I*Math.sin(B))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,I=0){return this._x=A[I],this._y=A[I+1],this._z=A[I+2],this._w=A[I+3],this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._w,A}fromBufferAttribute(A,I){return this._x=A.getX(I),this._y=A.getY(I),this._z=A.getZ(I),this._w=A.getW(I),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(A=0,I=0,g=0){Y.prototype.isVector3=!0,this.x=A,this.y=I,this.z=g}set(A,I,g){return g===void 0&&(g=this.z),this.x=A,this.y=I,this.z=g,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,I){return this.x=A.x*I.x,this.y=A.y*I.y,this.z=A.z*I.z,this}applyEuler(A){return this.applyQuaternion(To.setFromEuler(A))}applyAxisAngle(A,I){return this.applyQuaternion(To.setFromAxisAngle(A,I))}applyMatrix3(A){const I=this.x,g=this.y,B=this.z,Q=A.elements;return this.x=Q[0]*I+Q[3]*g+Q[6]*B,this.y=Q[1]*I+Q[4]*g+Q[7]*B,this.z=Q[2]*I+Q[5]*g+Q[8]*B,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const I=this.x,g=this.y,B=this.z,Q=A.elements,E=1/(Q[3]*I+Q[7]*g+Q[11]*B+Q[15]);return this.x=(Q[0]*I+Q[4]*g+Q[8]*B+Q[12])*E,this.y=(Q[1]*I+Q[5]*g+Q[9]*B+Q[13])*E,this.z=(Q[2]*I+Q[6]*g+Q[10]*B+Q[14])*E,this}applyQuaternion(A){const I=this.x,g=this.y,B=this.z,Q=A.x,E=A.y,i=A.z,o=A.w,a=2*(E*B-i*g),D=2*(i*I-Q*B),t=2*(Q*g-E*I);return this.x=I+o*a+E*t-i*D,this.y=g+o*D+i*a-Q*t,this.z=B+o*t+Q*D-E*a,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const I=this.x,g=this.y,B=this.z,Q=A.elements;return this.x=Q[0]*I+Q[4]*g+Q[8]*B,this.y=Q[1]*I+Q[5]*g+Q[9]*B,this.z=Q[2]*I+Q[6]*g+Q[10]*B,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,I){const g=A.x,B=A.y,Q=A.z,E=I.x,i=I.y,o=I.z;return this.x=B*o-Q*i,this.y=Q*E-g*o,this.z=g*i-B*E,this}projectOnVector(A){const I=A.lengthSq();if(I===0)return this.set(0,0,0);const g=A.dot(this)/I;return this.copy(A).multiplyScalar(g)}projectOnPlane(A){return ME.copy(this).projectOnVector(A),this.sub(ME)}reflect(A){return this.sub(ME.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(HI(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y,B=this.z-A.z;return I*I+g*g+B*B}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,I,g){const B=Math.sin(I)*A;return this.x=B*Math.sin(g),this.y=Math.cos(I)*A,this.z=B*Math.cos(g),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,I,g){return this.x=A*Math.sin(I),this.y=g,this.z=A*Math.cos(I),this}setFromMatrixPosition(A){const I=A.elements;return this.x=I[12],this.y=I[13],this.z=I[14],this}setFromMatrixScale(A){const I=this.setFromMatrixColumn(A,0).length(),g=this.setFromMatrixColumn(A,1).length(),B=this.setFromMatrixColumn(A,2).length();return this.x=I,this.y=g,this.z=B,this}setFromMatrixColumn(A,I){return this.fromArray(A.elements,I*4)}setFromMatrix3Column(A,I){return this.fromArray(A.elements,I*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}setFromColor(A){return this.x=A.r,this.y=A.g,this.z=A.b,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=(Math.random()-.5)*2,I=Math.random()*Math.PI*2,g=Math.sqrt(1-A**2);return this.x=g*Math.cos(I),this.y=g*Math.sin(I),this.z=A,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ME=new Y,To=new aC;class sB{constructor(A=new Y(1/0,1/0,1/0),I=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=I}set(A,I){return this.min.copy(A),this.max.copy(I),this}setFromArray(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I+=3)this.expandByPoint(ig.fromArray(A,I));return this}setFromBufferAttribute(A){this.makeEmpty();for(let I=0,g=A.count;I<g;I++)this.expandByPoint(ig.fromBufferAttribute(A,I));return this}setFromPoints(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I++)this.expandByPoint(A[I]);return this}setFromCenterAndSize(A,I){const g=ig.copy(I).multiplyScalar(.5);return this.min.copy(A).sub(g),this.max.copy(A).add(g),this}setFromObject(A,I=!1){return this.makeEmpty(),this.expandByObject(A,I)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,I=!1){A.updateWorldMatrix(!1,!1);const g=A.geometry;if(g!==void 0){const Q=g.getAttribute("position");if(I===!0&&Q!==void 0&&A.isInstancedMesh!==!0)for(let E=0,i=Q.count;E<i;E++)A.isMesh===!0?A.getVertexPosition(E,ig):ig.fromBufferAttribute(Q,E),ig.applyMatrix4(A.matrixWorld),this.expandByPoint(ig);else A.boundingBox!==void 0?(A.boundingBox===null&&A.computeBoundingBox(),WB.copy(A.boundingBox)):(g.boundingBox===null&&g.computeBoundingBox(),WB.copy(g.boundingBox)),WB.applyMatrix4(A.matrixWorld),this.union(WB)}const B=A.children;for(let Q=0,E=B.length;Q<E;Q++)this.expandByObject(B[Q],I);return this}containsPoint(A){return!(A.x<this.min.x||A.x>this.max.x||A.y<this.min.y||A.y>this.max.y||A.z<this.min.z||A.z>this.max.z)}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,I){return I.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return!(A.max.x<this.min.x||A.min.x>this.max.x||A.max.y<this.min.y||A.min.y>this.max.y||A.max.z<this.min.z||A.min.z>this.max.z)}intersectsSphere(A){return this.clampPoint(A.center,ig),ig.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let I,g;return A.normal.x>0?(I=A.normal.x*this.min.x,g=A.normal.x*this.max.x):(I=A.normal.x*this.max.x,g=A.normal.x*this.min.x),A.normal.y>0?(I+=A.normal.y*this.min.y,g+=A.normal.y*this.max.y):(I+=A.normal.y*this.max.y,g+=A.normal.y*this.min.y),A.normal.z>0?(I+=A.normal.z*this.min.z,g+=A.normal.z*this.max.z):(I+=A.normal.z*this.max.z,g+=A.normal.z*this.min.z),I<=-A.constant&&g>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(hB),PB.subVectors(this.max,hB),dC.subVectors(A.a,hB),YC.subVectors(A.b,hB),LC.subVectors(A.c,hB),Og.subVectors(YC,dC),bg.subVectors(LC,YC),DC.subVectors(dC,LC);let I=[0,-Og.z,Og.y,0,-bg.z,bg.y,0,-DC.z,DC.y,Og.z,0,-Og.x,bg.z,0,-bg.x,DC.z,0,-DC.x,-Og.y,Og.x,0,-bg.y,bg.x,0,-DC.y,DC.x,0];return!yE(I,dC,YC,LC,PB)||(I=[1,0,0,0,1,0,0,0,1],!yE(I,dC,YC,LC,PB))?!1:(jB.crossVectors(Og,bg),I=[jB.x,jB.y,jB.z],yE(I,dC,YC,LC,PB))}clampPoint(A,I){return I.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return this.clampPoint(A,ig).distanceTo(A)}getBoundingSphere(A){return this.isEmpty()?A.makeEmpty():(this.getCenter(A.center),A.radius=this.getSize(ig).length()*.5),A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(Jg[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),Jg[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),Jg[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),Jg[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),Jg[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),Jg[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),Jg[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),Jg[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(Jg),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const Jg=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],ig=new Y,WB=new sB,dC=new Y,YC=new Y,LC=new Y,Og=new Y,bg=new Y,DC=new Y,hB=new Y,PB=new Y,jB=new Y,eC=new Y;function yE(C,A,I,g,B){for(let Q=0,E=C.length-3;Q<=E;Q+=3){eC.fromArray(C,Q);const i=B.x*Math.abs(eC.x)+B.y*Math.abs(eC.y)+B.z*Math.abs(eC.z),o=A.dot(eC),a=I.dot(eC),D=g.dot(eC);if(Math.max(-Math.max(o,a,D),Math.min(o,a,D))>i)return!1}return!0}const lt=new sB,GB=new Y,nE=new Y;class VB{constructor(A=new Y,I=-1){this.isSphere=!0,this.center=A,this.radius=I}set(A,I){return this.center.copy(A),this.radius=I,this}setFromPoints(A,I){const g=this.center;I!==void 0?g.copy(I):lt.setFromPoints(A).getCenter(g);let B=0;for(let Q=0,E=A.length;Q<E;Q++)B=Math.max(B,g.distanceToSquared(A[Q]));return this.radius=Math.sqrt(B),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const I=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=I*I}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,I){const g=this.center.distanceToSquared(A);return I.copy(A),g>this.radius*this.radius&&(I.sub(this.center).normalize(),I.multiplyScalar(this.radius).add(this.center)),I}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;GB.subVectors(A,this.center);const I=GB.lengthSq();if(I>this.radius*this.radius){const g=Math.sqrt(I),B=(g-this.radius)*.5;this.center.addScaledVector(GB,B/g),this.radius+=B}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(nE.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(GB.copy(A.center).add(nE)),this.expandByPoint(GB.copy(A.center).sub(nE))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fg=new Y,lE=new Y,XB=new Y,vg=new Y,UE=new Y,_B=new Y,KE=new Y;class NE{constructor(A=new Y,I=new Y(0,0,-1)){this.origin=A,this.direction=I}set(A,I){return this.origin.copy(A),this.direction.copy(I),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,I){return I.copy(this.origin).addScaledVector(this.direction,A)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,Fg)),this}closestPointToPoint(A,I){I.subVectors(A,this.origin);const g=I.dot(this.direction);return g<0?I.copy(this.origin):I.copy(this.origin).addScaledVector(this.direction,g)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const I=Fg.subVectors(A,this.origin).dot(this.direction);return I<0?this.origin.distanceToSquared(A):(Fg.copy(this.origin).addScaledVector(this.direction,I),Fg.distanceToSquared(A))}distanceSqToSegment(A,I,g,B){lE.copy(A).add(I).multiplyScalar(.5),XB.copy(I).sub(A).normalize(),vg.copy(this.origin).sub(lE);const Q=A.distanceTo(I)*.5,E=-this.direction.dot(XB),i=vg.dot(this.direction),o=-vg.dot(XB),a=vg.lengthSq(),D=Math.abs(1-E*E);let t,s,w,S;if(D>0)if(t=E*o-i,s=E*i-o,S=Q*D,t>=0)if(s>=-S)if(s<=S){const M=1/D;t*=M,s*=M,w=t*(t+E*s+2*i)+s*(E*t+s+2*o)+a}else s=Q,t=Math.max(0,-(E*s+i)),w=-t*t+s*(s+2*o)+a;else s=-Q,t=Math.max(0,-(E*s+i)),w=-t*t+s*(s+2*o)+a;else s<=-S?(t=Math.max(0,-(-E*Q+i)),s=t>0?-Q:Math.min(Math.max(-Q,-o),Q),w=-t*t+s*(s+2*o)+a):s<=S?(t=0,s=Math.min(Math.max(-Q,-o),Q),w=s*(s+2*o)+a):(t=Math.max(0,-(E*Q+i)),s=t>0?Q:Math.min(Math.max(-Q,-o),Q),w=-t*t+s*(s+2*o)+a);else s=E>0?-Q:Q,t=Math.max(0,-(E*s+i)),w=-t*t+s*(s+2*o)+a;return g&&g.copy(this.origin).addScaledVector(this.direction,t),B&&B.copy(lE).addScaledVector(XB,s),w}intersectSphere(A,I){Fg.subVectors(A.center,this.origin);const g=Fg.dot(this.direction),B=Fg.dot(Fg)-g*g,Q=A.radius*A.radius;if(B>Q)return null;const E=Math.sqrt(Q-B),i=g-E,o=g+E;return o<0?null:i<0?this.at(o,I):this.at(i,I)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const I=A.normal.dot(this.direction);if(I===0)return A.distanceToPoint(this.origin)===0?0:null;const g=-(this.origin.dot(A.normal)+A.constant)/I;return g>=0?g:null}intersectPlane(A,I){const g=this.distanceToPlane(A);return g===null?null:this.at(g,I)}intersectsPlane(A){const I=A.distanceToPoint(this.origin);return I===0||A.normal.dot(this.direction)*I<0}intersectBox(A,I){let g,B,Q,E,i,o;const a=1/this.direction.x,D=1/this.direction.y,t=1/this.direction.z,s=this.origin;return a>=0?(g=(A.min.x-s.x)*a,B=(A.max.x-s.x)*a):(g=(A.max.x-s.x)*a,B=(A.min.x-s.x)*a),D>=0?(Q=(A.min.y-s.y)*D,E=(A.max.y-s.y)*D):(Q=(A.max.y-s.y)*D,E=(A.min.y-s.y)*D),g>E||Q>B||((Q>g||isNaN(g))&&(g=Q),(E<B||isNaN(B))&&(B=E),t>=0?(i=(A.min.z-s.z)*t,o=(A.max.z-s.z)*t):(i=(A.max.z-s.z)*t,o=(A.min.z-s.z)*t),g>o||i>B)||((i>g||g!==g)&&(g=i),(o<B||B!==B)&&(B=o),B<0)?null:this.at(g>=0?g:B,I)}intersectsBox(A){return this.intersectBox(A,Fg)!==null}intersectTriangle(A,I,g,B,Q){UE.subVectors(I,A),_B.subVectors(g,A),KE.crossVectors(UE,_B);let E=this.direction.dot(KE),i;if(E>0){if(B)return null;i=1}else if(E<0)i=-1,E=-E;else return null;vg.subVectors(this.origin,A);const o=i*this.direction.dot(_B.crossVectors(vg,_B));if(o<0)return null;const a=i*this.direction.dot(UE.cross(vg));if(a<0||o+a>E)return null;const D=-i*vg.dot(KE);return D<0?null:this.at(D/E,Q)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cI{constructor(A,I,g,B,Q,E,i,o,a,D,t,s,w,S,M,G){cI.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],A!==void 0&&this.set(A,I,g,B,Q,E,i,o,a,D,t,s,w,S,M,G)}set(A,I,g,B,Q,E,i,o,a,D,t,s,w,S,M,G){const e=this.elements;return e[0]=A,e[4]=I,e[8]=g,e[12]=B,e[1]=Q,e[5]=E,e[9]=i,e[13]=o,e[2]=a,e[6]=D,e[10]=t,e[14]=s,e[3]=w,e[7]=S,e[11]=M,e[15]=G,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cI().fromArray(this.elements)}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],I[9]=g[9],I[10]=g[10],I[11]=g[11],I[12]=g[12],I[13]=g[13],I[14]=g[14],I[15]=g[15],this}copyPosition(A){const I=this.elements,g=A.elements;return I[12]=g[12],I[13]=g[13],I[14]=g[14],this}setFromMatrix3(A){const I=A.elements;return this.set(I[0],I[3],I[6],0,I[1],I[4],I[7],0,I[2],I[5],I[8],0,0,0,0,1),this}extractBasis(A,I,g){return A.setFromMatrixColumn(this,0),I.setFromMatrixColumn(this,1),g.setFromMatrixColumn(this,2),this}makeBasis(A,I,g){return this.set(A.x,I.x,g.x,0,A.y,I.y,g.y,0,A.z,I.z,g.z,0,0,0,0,1),this}extractRotation(A){const I=this.elements,g=A.elements,B=1/HC.setFromMatrixColumn(A,0).length(),Q=1/HC.setFromMatrixColumn(A,1).length(),E=1/HC.setFromMatrixColumn(A,2).length();return I[0]=g[0]*B,I[1]=g[1]*B,I[2]=g[2]*B,I[3]=0,I[4]=g[4]*Q,I[5]=g[5]*Q,I[6]=g[6]*Q,I[7]=0,I[8]=g[8]*E,I[9]=g[9]*E,I[10]=g[10]*E,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromEuler(A){const I=this.elements,g=A.x,B=A.y,Q=A.z,E=Math.cos(g),i=Math.sin(g),o=Math.cos(B),a=Math.sin(B),D=Math.cos(Q),t=Math.sin(Q);if(A.order==="XYZ"){const s=E*D,w=E*t,S=i*D,M=i*t;I[0]=o*D,I[4]=-o*t,I[8]=a,I[1]=w+S*a,I[5]=s-M*a,I[9]=-i*o,I[2]=M-s*a,I[6]=S+w*a,I[10]=E*o}else if(A.order==="YXZ"){const s=o*D,w=o*t,S=a*D,M=a*t;I[0]=s+M*i,I[4]=S*i-w,I[8]=E*a,I[1]=E*t,I[5]=E*D,I[9]=-i,I[2]=w*i-S,I[6]=M+s*i,I[10]=E*o}else if(A.order==="ZXY"){const s=o*D,w=o*t,S=a*D,M=a*t;I[0]=s-M*i,I[4]=-E*t,I[8]=S+w*i,I[1]=w+S*i,I[5]=E*D,I[9]=M-s*i,I[2]=-E*a,I[6]=i,I[10]=E*o}else if(A.order==="ZYX"){const s=E*D,w=E*t,S=i*D,M=i*t;I[0]=o*D,I[4]=S*a-w,I[8]=s*a+M,I[1]=o*t,I[5]=M*a+s,I[9]=w*a-S,I[2]=-a,I[6]=i*o,I[10]=E*o}else if(A.order==="YZX"){const s=E*o,w=E*a,S=i*o,M=i*a;I[0]=o*D,I[4]=M-s*t,I[8]=S*t+w,I[1]=t,I[5]=E*D,I[9]=-i*D,I[2]=-a*D,I[6]=w*t+S,I[10]=s-M*t}else if(A.order==="XZY"){const s=E*o,w=E*a,S=i*o,M=i*a;I[0]=o*D,I[4]=-t,I[8]=a*D,I[1]=s*t+M,I[5]=E*D,I[9]=w*t-S,I[2]=S*t-w,I[6]=i*D,I[10]=M*t+s}return I[3]=0,I[7]=0,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromQuaternion(A){return this.compose(Ut,A,Kt)}lookAt(A,I,g){const B=this.elements;return jI.subVectors(A,I),jI.lengthSq()===0&&(jI.z=1),jI.normalize(),Zg.crossVectors(g,jI),Zg.lengthSq()===0&&(Math.abs(g.z)===1?jI.x+=1e-4:jI.z+=1e-4,jI.normalize(),Zg.crossVectors(g,jI)),Zg.normalize(),zB.crossVectors(jI,Zg),B[0]=Zg.x,B[4]=zB.x,B[8]=jI.x,B[1]=Zg.y,B[5]=zB.y,B[9]=jI.y,B[2]=Zg.z,B[6]=zB.z,B[10]=jI.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,B=I.elements,Q=this.elements,E=g[0],i=g[4],o=g[8],a=g[12],D=g[1],t=g[5],s=g[9],w=g[13],S=g[2],M=g[6],G=g[10],e=g[14],l=g[3],k=g[7],F=g[11],d=g[15],q=B[0],J=B[4],V=B[8],aA=B[12],c=B[1],N=B[5],W=B[9],EA=B[13],p=B[2],Z=B[6],b=B[10],X=B[14],j=B[3],P=B[7],BA=B[11],AA=B[15];return Q[0]=E*q+i*c+o*p+a*j,Q[4]=E*J+i*N+o*Z+a*P,Q[8]=E*V+i*W+o*b+a*BA,Q[12]=E*aA+i*EA+o*X+a*AA,Q[1]=D*q+t*c+s*p+w*j,Q[5]=D*J+t*N+s*Z+w*P,Q[9]=D*V+t*W+s*b+w*BA,Q[13]=D*aA+t*EA+s*X+w*AA,Q[2]=S*q+M*c+G*p+e*j,Q[6]=S*J+M*N+G*Z+e*P,Q[10]=S*V+M*W+G*b+e*BA,Q[14]=S*aA+M*EA+G*X+e*AA,Q[3]=l*q+k*c+F*p+d*j,Q[7]=l*J+k*N+F*Z+d*P,Q[11]=l*V+k*W+F*b+d*BA,Q[15]=l*aA+k*EA+F*X+d*AA,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[4]*=A,I[8]*=A,I[12]*=A,I[1]*=A,I[5]*=A,I[9]*=A,I[13]*=A,I[2]*=A,I[6]*=A,I[10]*=A,I[14]*=A,I[3]*=A,I[7]*=A,I[11]*=A,I[15]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[4],B=A[8],Q=A[12],E=A[1],i=A[5],o=A[9],a=A[13],D=A[2],t=A[6],s=A[10],w=A[14],S=A[3],M=A[7],G=A[11],e=A[15];return S*(+Q*o*t-B*a*t-Q*i*s+g*a*s+B*i*w-g*o*w)+M*(+I*o*w-I*a*s+Q*E*s-B*E*w+B*a*D-Q*o*D)+G*(+I*a*t-I*i*w-Q*E*t+g*E*w+Q*i*D-g*a*D)+e*(-B*i*D-I*o*t+I*i*s+B*E*t-g*E*s+g*o*D)}transpose(){const A=this.elements;let I;return I=A[1],A[1]=A[4],A[4]=I,I=A[2],A[2]=A[8],A[8]=I,I=A[6],A[6]=A[9],A[9]=I,I=A[3],A[3]=A[12],A[12]=I,I=A[7],A[7]=A[13],A[13]=I,I=A[11],A[11]=A[14],A[14]=I,this}setPosition(A,I,g){const B=this.elements;return A.isVector3?(B[12]=A.x,B[13]=A.y,B[14]=A.z):(B[12]=A,B[13]=I,B[14]=g),this}invert(){const A=this.elements,I=A[0],g=A[1],B=A[2],Q=A[3],E=A[4],i=A[5],o=A[6],a=A[7],D=A[8],t=A[9],s=A[10],w=A[11],S=A[12],M=A[13],G=A[14],e=A[15],l=t*G*a-M*s*a+M*o*w-i*G*w-t*o*e+i*s*e,k=S*s*a-D*G*a-S*o*w+E*G*w+D*o*e-E*s*e,F=D*M*a-S*t*a+S*i*w-E*M*w-D*i*e+E*t*e,d=S*t*o-D*M*o-S*i*s+E*M*s+D*i*G-E*t*G,q=I*l+g*k+B*F+Q*d;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/q;return A[0]=l*J,A[1]=(M*s*Q-t*G*Q-M*B*w+g*G*w+t*B*e-g*s*e)*J,A[2]=(i*G*Q-M*o*Q+M*B*a-g*G*a-i*B*e+g*o*e)*J,A[3]=(t*o*Q-i*s*Q-t*B*a+g*s*a+i*B*w-g*o*w)*J,A[4]=k*J,A[5]=(D*G*Q-S*s*Q+S*B*w-I*G*w-D*B*e+I*s*e)*J,A[6]=(S*o*Q-E*G*Q-S*B*a+I*G*a+E*B*e-I*o*e)*J,A[7]=(E*s*Q-D*o*Q+D*B*a-I*s*a-E*B*w+I*o*w)*J,A[8]=F*J,A[9]=(S*t*Q-D*M*Q-S*g*w+I*M*w+D*g*e-I*t*e)*J,A[10]=(E*M*Q-S*i*Q+S*g*a-I*M*a-E*g*e+I*i*e)*J,A[11]=(D*i*Q-E*t*Q-D*g*a+I*t*a+E*g*w-I*i*w)*J,A[12]=d*J,A[13]=(D*M*B-S*t*B+S*g*s-I*M*s-D*g*G+I*t*G)*J,A[14]=(S*i*B-E*M*B-S*g*o+I*M*o+E*g*G-I*i*G)*J,A[15]=(E*t*B-D*i*B+D*g*o-I*t*o-E*g*s+I*i*s)*J,this}scale(A){const I=this.elements,g=A.x,B=A.y,Q=A.z;return I[0]*=g,I[4]*=B,I[8]*=Q,I[1]*=g,I[5]*=B,I[9]*=Q,I[2]*=g,I[6]*=B,I[10]*=Q,I[3]*=g,I[7]*=B,I[11]*=Q,this}getMaxScaleOnAxis(){const A=this.elements,I=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],g=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],B=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(I,g,B))}makeTranslation(A,I,g){return A.isVector3?this.set(1,0,0,A.x,0,1,0,A.y,0,0,1,A.z,0,0,0,1):this.set(1,0,0,A,0,1,0,I,0,0,1,g,0,0,0,1),this}makeRotationX(A){const I=Math.cos(A),g=Math.sin(A);return this.set(1,0,0,0,0,I,-g,0,0,g,I,0,0,0,0,1),this}makeRotationY(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,0,g,0,0,1,0,0,-g,0,I,0,0,0,0,1),this}makeRotationZ(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,0,g,I,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,I){const g=Math.cos(I),B=Math.sin(I),Q=1-g,E=A.x,i=A.y,o=A.z,a=Q*E,D=Q*i;return this.set(a*E+g,a*i-B*o,a*o+B*i,0,a*i+B*o,D*i+g,D*o-B*E,0,a*o-B*i,D*o+B*E,Q*o*o+g,0,0,0,0,1),this}makeScale(A,I,g){return this.set(A,0,0,0,0,I,0,0,0,0,g,0,0,0,0,1),this}makeShear(A,I,g,B,Q,E){return this.set(1,g,Q,0,A,1,E,0,I,B,1,0,0,0,0,1),this}compose(A,I,g){const B=this.elements,Q=I._x,E=I._y,i=I._z,o=I._w,a=Q+Q,D=E+E,t=i+i,s=Q*a,w=Q*D,S=Q*t,M=E*D,G=E*t,e=i*t,l=o*a,k=o*D,F=o*t,d=g.x,q=g.y,J=g.z;return B[0]=(1-(M+e))*d,B[1]=(w+F)*d,B[2]=(S-k)*d,B[3]=0,B[4]=(w-F)*q,B[5]=(1-(s+e))*q,B[6]=(G+l)*q,B[7]=0,B[8]=(S+k)*J,B[9]=(G-l)*J,B[10]=(1-(s+M))*J,B[11]=0,B[12]=A.x,B[13]=A.y,B[14]=A.z,B[15]=1,this}decompose(A,I,g){const B=this.elements;let Q=HC.set(B[0],B[1],B[2]).length();const E=HC.set(B[4],B[5],B[6]).length(),i=HC.set(B[8],B[9],B[10]).length();this.determinant()<0&&(Q=-Q),A.x=B[12],A.y=B[13],A.z=B[14],og.copy(this);const o=1/Q,a=1/E,D=1/i;return og.elements[0]*=o,og.elements[1]*=o,og.elements[2]*=o,og.elements[4]*=a,og.elements[5]*=a,og.elements[6]*=a,og.elements[8]*=D,og.elements[9]*=D,og.elements[10]*=D,I.setFromRotationMatrix(og),g.x=Q,g.y=E,g.z=i,this}makePerspective(A,I,g,B,Q,E,i=Ng){const o=this.elements,a=2*Q/(I-A),D=2*Q/(g-B),t=(I+A)/(I-A),s=(g+B)/(g-B);let w,S;if(i===Ng)w=-(E+Q)/(E-Q),S=-2*E*Q/(E-Q);else if(i===OB)w=-E/(E-Q),S=-E*Q/(E-Q);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+i);return o[0]=a,o[4]=0,o[8]=t,o[12]=0,o[1]=0,o[5]=D,o[9]=s,o[13]=0,o[2]=0,o[6]=0,o[10]=w,o[14]=S,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(A,I,g,B,Q,E,i=Ng){const o=this.elements,a=1/(I-A),D=1/(g-B),t=1/(E-Q),s=(I+A)*a,w=(g+B)*D;let S,M;if(i===Ng)S=(E+Q)*t,M=-2*t;else if(i===OB)S=Q*t,M=-1*t;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+i);return o[0]=2*a,o[4]=0,o[8]=0,o[12]=-s,o[1]=0,o[5]=2*D,o[9]=0,o[13]=-w,o[2]=0,o[6]=0,o[10]=M,o[14]=-S,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(A){const I=this.elements,g=A.elements;for(let B=0;B<16;B++)if(I[B]!==g[B])return!1;return!0}fromArray(A,I=0){for(let g=0;g<16;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A[I+9]=g[9],A[I+10]=g[10],A[I+11]=g[11],A[I+12]=g[12],A[I+13]=g[13],A[I+14]=g[14],A[I+15]=g[15],A}}const HC=new Y,og=new cI,Ut=new Y(0,0,0),Kt=new Y(1,1,1),Zg=new Y,zB=new Y,jI=new Y,xo=new cI,Oo=new aC;class $B{constructor(A=0,I=0,g=0,B=$B.DEFAULT_ORDER){this.isEuler=!0,this._x=A,this._y=I,this._z=g,this._order=B}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,I,g,B=this._order){return this._x=A,this._y=I,this._z=g,this._order=B,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,I=this._order,g=!0){const B=A.elements,Q=B[0],E=B[4],i=B[8],o=B[1],a=B[5],D=B[9],t=B[2],s=B[6],w=B[10];switch(I){case"XYZ":this._y=Math.asin(HI(i,-1,1)),Math.abs(i)<.9999999?(this._x=Math.atan2(-D,w),this._z=Math.atan2(-E,Q)):(this._x=Math.atan2(s,a),this._z=0);break;case"YXZ":this._x=Math.asin(-HI(D,-1,1)),Math.abs(D)<.9999999?(this._y=Math.atan2(i,w),this._z=Math.atan2(o,a)):(this._y=Math.atan2(-t,Q),this._z=0);break;case"ZXY":this._x=Math.asin(HI(s,-1,1)),Math.abs(s)<.9999999?(this._y=Math.atan2(-t,w),this._z=Math.atan2(-E,a)):(this._y=0,this._z=Math.atan2(o,Q));break;case"ZYX":this._y=Math.asin(-HI(t,-1,1)),Math.abs(t)<.9999999?(this._x=Math.atan2(s,w),this._z=Math.atan2(o,Q)):(this._x=0,this._z=Math.atan2(-E,a));break;case"YZX":this._z=Math.asin(HI(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-D,a),this._y=Math.atan2(-t,Q)):(this._x=0,this._y=Math.atan2(i,w));break;case"XZY":this._z=Math.asin(-HI(E,-1,1)),Math.abs(E)<.9999999?(this._x=Math.atan2(s,a),this._y=Math.atan2(i,Q)):(this._x=Math.atan2(-D,w),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+I)}return this._order=I,g===!0&&this._onChangeCallback(),this}setFromQuaternion(A,I,g){return xo.makeRotationFromQuaternion(A),this.setFromRotationMatrix(xo,I,g)}setFromVector3(A,I=this._order){return this.set(A.x,A.y,A.z,I)}reorder(A){return Oo.setFromEuler(this),this.setFromQuaternion(Oo,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$B.DEFAULT_ORDER="XYZ";class bo{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}let Nt=0;const vo=new Y,uC=new aC,Rg=new cI,AQ=new Y,wB=new Y,Jt=new Y,Ft=new aC,Zo=new Y(1,0,0),Wo=new Y(0,1,0),Po=new Y(0,0,1),Rt={type:"added"},qt={type:"removed"};class RI extends iC{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nt++}),this.uuid=JC(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=RI.DEFAULT_UP.clone();const A=new Y,I=new $B,g=new aC,B=new Y(1,1,1);function Q(){g.setFromEuler(I,!1)}function E(){I.setFromQuaternion(g,void 0,!1)}I._onChange(Q),g._onChange(E),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:I},quaternion:{configurable:!0,enumerable:!0,value:g},scale:{configurable:!0,enumerable:!0,value:B},modelViewMatrix:{value:new cI},normalMatrix:{value:new jA}}),this.matrix=new cI,this.matrixWorld=new cI,this.matrixAutoUpdate=RI.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=RI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,I){this.quaternion.setFromAxisAngle(A,I)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,I){return uC.setFromAxisAngle(A,I),this.quaternion.multiply(uC),this}rotateOnWorldAxis(A,I){return uC.setFromAxisAngle(A,I),this.quaternion.premultiply(uC),this}rotateX(A){return this.rotateOnAxis(Zo,A)}rotateY(A){return this.rotateOnAxis(Wo,A)}rotateZ(A){return this.rotateOnAxis(Po,A)}translateOnAxis(A,I){return vo.copy(A).applyQuaternion(this.quaternion),this.position.add(vo.multiplyScalar(I)),this}translateX(A){return this.translateOnAxis(Zo,A)}translateY(A){return this.translateOnAxis(Wo,A)}translateZ(A){return this.translateOnAxis(Po,A)}localToWorld(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(Rg.copy(this.matrixWorld).invert())}lookAt(A,I,g){A.isVector3?AQ.copy(A):AQ.set(A,I,g);const B=this.parent;this.updateWorldMatrix(!0,!1),wB.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rg.lookAt(wB,AQ,this.up):Rg.lookAt(AQ,wB,this.up),this.quaternion.setFromRotationMatrix(Rg),B&&(Rg.extractRotation(B.matrixWorld),uC.setFromRotationMatrix(Rg),this.quaternion.premultiply(uC.invert()))}add(A){if(arguments.length>1){for(let I=0;I<arguments.length;I++)this.add(arguments[I]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.parent!==null&&A.parent.remove(A),A.parent=this,this.children.push(A),A.dispatchEvent(Rt)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let g=0;g<arguments.length;g++)this.remove(arguments[g]);return this}const I=this.children.indexOf(A);return I!==-1&&(A.parent=null,this.children.splice(I,1),A.dispatchEvent(qt)),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){return this.remove(...this.children)}attach(A){return this.updateWorldMatrix(!0,!1),Rg.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),Rg.multiply(A.parent.matrixWorld)),A.applyMatrix4(Rg),this.add(A),A.updateWorldMatrix(!1,!0),this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,I){if(this[A]===I)return this;for(let g=0,B=this.children.length;g<B;g++){const Q=this.children[g].getObjectByProperty(A,I);if(Q!==void 0)return Q}}getObjectsByProperty(A,I,g=[]){this[A]===I&&g.push(this);const B=this.children;for(let Q=0,E=B.length;Q<E;Q++)B[Q].getObjectsByProperty(A,I,g);return g}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wB,A,Jt),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wB,Ft,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(I[8],I[9],I[10]).normalize()}raycast(){}traverse(A){A(this);const I=this.children;for(let g=0,B=I.length;g<B;g++)I[g].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const I=this.children;for(let g=0,B=I.length;g<B;g++)I[g].traverseVisible(A)}traverseAncestors(A){const I=this.parent;I!==null&&(A(I),I.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,A=!0);const I=this.children;for(let g=0,B=I.length;g<B;g++){const Q=I[g];(Q.matrixWorldAutoUpdate===!0||A===!0)&&Q.updateMatrixWorld(A)}}updateWorldMatrix(A,I){const g=this.parent;if(A===!0&&g!==null&&g.matrixWorldAutoUpdate===!0&&g.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),I===!0){const B=this.children;for(let Q=0,E=B.length;Q<E;Q++){const i=B[Q];i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!1,!0)}}}toJSON(A){const I=A===void 0||typeof A=="string",g={};I&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},g.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const B={};B.uuid=this.uuid,B.type=this.type,this.name!==""&&(B.name=this.name),this.castShadow===!0&&(B.castShadow=!0),this.receiveShadow===!0&&(B.receiveShadow=!0),this.visible===!1&&(B.visible=!1),this.frustumCulled===!1&&(B.frustumCulled=!1),this.renderOrder!==0&&(B.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(B.userData=this.userData),B.layers=this.layers.mask,B.matrix=this.matrix.toArray(),B.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(B.matrixAutoUpdate=!1),this.isInstancedMesh&&(B.type="InstancedMesh",B.count=this.count,B.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(B.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(B.type="BatchedMesh",B.perObjectFrustumCulled=this.perObjectFrustumCulled,B.sortObjects=this.sortObjects,B.drawRanges=this._drawRanges,B.reservedRanges=this._reservedRanges,B.visibility=this._visibility,B.active=this._active,B.bounds=this._bounds.map(i=>({boxInitialized:i.boxInitialized,boxMin:i.box.min.toArray(),boxMax:i.box.max.toArray(),sphereInitialized:i.sphereInitialized,sphereRadius:i.sphere.radius,sphereCenter:i.sphere.center.toArray()})),B.maxGeometryCount=this._maxGeometryCount,B.maxVertexCount=this._maxVertexCount,B.maxIndexCount=this._maxIndexCount,B.geometryInitialized=this._geometryInitialized,B.geometryCount=this._geometryCount,B.matricesTexture=this._matricesTexture.toJSON(A),this.boundingSphere!==null&&(B.boundingSphere={center:B.boundingSphere.center.toArray(),radius:B.boundingSphere.radius}),this.boundingBox!==null&&(B.boundingBox={min:B.boundingBox.min.toArray(),max:B.boundingBox.max.toArray()}));function Q(i,o){return i[o.uuid]===void 0&&(i[o.uuid]=o.toJSON(A)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?B.background=this.background.toJSON():this.background.isTexture&&(B.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(B.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){B.geometry=Q(A.geometries,this.geometry);const i=this.geometry.parameters;if(i!==void 0&&i.shapes!==void 0){const o=i.shapes;if(Array.isArray(o))for(let a=0,D=o.length;a<D;a++){const t=o[a];Q(A.shapes,t)}else Q(A.shapes,o)}}if(this.isSkinnedMesh&&(B.bindMode=this.bindMode,B.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(Q(A.skeletons,this.skeleton),B.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const i=[];for(let o=0,a=this.material.length;o<a;o++)i.push(Q(A.materials,this.material[o]));B.material=i}else B.material=Q(A.materials,this.material);if(this.children.length>0){B.children=[];for(let i=0;i<this.children.length;i++)B.children.push(this.children[i].toJSON(A).object)}if(this.animations.length>0){B.animations=[];for(let i=0;i<this.animations.length;i++){const o=this.animations[i];B.animations.push(Q(A.animations,o))}}if(I){const i=E(A.geometries),o=E(A.materials),a=E(A.textures),D=E(A.images),t=E(A.shapes),s=E(A.skeletons),w=E(A.animations),S=E(A.nodes);i.length>0&&(g.geometries=i),o.length>0&&(g.materials=o),a.length>0&&(g.textures=a),D.length>0&&(g.images=D),t.length>0&&(g.shapes=t),s.length>0&&(g.skeletons=s),w.length>0&&(g.animations=w),S.length>0&&(g.nodes=S)}return g.object=B,g;function E(i){const o=[];for(const a in i){const D=i[a];delete D.metadata,o.push(D)}return o}}clone(A){return new this.constructor().copy(this,A)}copy(A,I=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.animations=A.animations.slice(),this.userData=JSON.parse(JSON.stringify(A.userData)),I===!0)for(let g=0;g<A.children.length;g++){const B=A.children[g];this.add(B.clone())}return this}}RI.DEFAULT_UP=new Y(0,1,0),RI.DEFAULT_MATRIX_AUTO_UPDATE=!0,RI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ag=new Y,qg=new Y,JE=new Y,pg=new Y,mC=new Y,fC=new Y,jo=new Y,FE=new Y,RE=new Y,qE=new Y;class sg{constructor(A=new Y,I=new Y,g=new Y){this.a=A,this.b=I,this.c=g}static getNormal(A,I,g,B){B.subVectors(g,I),ag.subVectors(A,I),B.cross(ag);const Q=B.lengthSq();return Q>0?B.multiplyScalar(1/Math.sqrt(Q)):B.set(0,0,0)}static getBarycoord(A,I,g,B,Q){ag.subVectors(B,I),qg.subVectors(g,I),JE.subVectors(A,I);const E=ag.dot(ag),i=ag.dot(qg),o=ag.dot(JE),a=qg.dot(qg),D=qg.dot(JE),t=E*a-i*i;if(t===0)return Q.set(0,0,0),null;const s=1/t,w=(a*o-i*D)*s,S=(E*D-i*o)*s;return Q.set(1-w-S,S,w)}static containsPoint(A,I,g,B){return this.getBarycoord(A,I,g,B,pg)===null?!1:pg.x>=0&&pg.y>=0&&pg.x+pg.y<=1}static getInterpolation(A,I,g,B,Q,E,i,o){return this.getBarycoord(A,I,g,B,pg)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(Q,pg.x),o.addScaledVector(E,pg.y),o.addScaledVector(i,pg.z),o)}static isFrontFacing(A,I,g,B){return ag.subVectors(g,I),qg.subVectors(A,I),ag.cross(qg).dot(B)<0}set(A,I,g){return this.a.copy(A),this.b.copy(I),this.c.copy(g),this}setFromPointsAndIndices(A,I,g,B){return this.a.copy(A[I]),this.b.copy(A[g]),this.c.copy(A[B]),this}setFromAttributeAndIndices(A,I,g,B){return this.a.fromBufferAttribute(A,I),this.b.fromBufferAttribute(A,g),this.c.fromBufferAttribute(A,B),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return ag.subVectors(this.c,this.b),qg.subVectors(this.a,this.b),ag.cross(qg).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return sg.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,I){return sg.getBarycoord(A,this.a,this.b,this.c,I)}getInterpolation(A,I,g,B,Q){return sg.getInterpolation(A,this.a,this.b,this.c,I,g,B,Q)}containsPoint(A){return sg.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return sg.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,I){const g=this.a,B=this.b,Q=this.c;let E,i;mC.subVectors(B,g),fC.subVectors(Q,g),FE.subVectors(A,g);const o=mC.dot(FE),a=fC.dot(FE);if(o<=0&&a<=0)return I.copy(g);RE.subVectors(A,B);const D=mC.dot(RE),t=fC.dot(RE);if(D>=0&&t<=D)return I.copy(B);const s=o*t-D*a;if(s<=0&&o>=0&&D<=0)return E=o/(o-D),I.copy(g).addScaledVector(mC,E);qE.subVectors(A,Q);const w=mC.dot(qE),S=fC.dot(qE);if(S>=0&&w<=S)return I.copy(Q);const M=w*a-o*S;if(M<=0&&a>=0&&S<=0)return i=a/(a-S),I.copy(g).addScaledVector(fC,i);const G=D*S-w*t;if(G<=0&&t-D>=0&&w-S>=0)return jo.subVectors(Q,B),i=(t-D)/(t-D+(w-S)),I.copy(B).addScaledVector(jo,i);const e=1/(G+M+s);return E=M*e,i=s*e,I.copy(g).addScaledVector(mC,E).addScaledVector(fC,i)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}const Vo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wg={h:0,s:0,l:0},IQ={h:0,s:0,l:0};function pE(C,A,I){return I<0&&(I+=1),I>1&&(I-=1),I<1/6?C+(A-C)*6*I:I<1/2?A:I<2/3?C+(A-C)*6*(2/3-I):C}class _A{constructor(A,I,g){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(A,I,g)}set(A,I,g){if(I===void 0&&g===void 0){const B=A;B&&B.isColor?this.copy(B):typeof B=="number"?this.setHex(B):typeof B=="string"&&this.setStyle(B)}else this.setRGB(A,I,g);return this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,I=dI){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,iI.toWorkingColorSpace(this,I),this}setRGB(A,I,g,B=iI.workingColorSpace){return this.r=A,this.g=I,this.b=g,iI.toWorkingColorSpace(this,B),this}setHSL(A,I,g,B=iI.workingColorSpace){if(A=wE(A,1),I=HI(I,0,1),g=HI(g,0,1),I===0)this.r=this.g=this.b=g;else{const Q=g<=.5?g*(1+I):g+I-g*I,E=2*g-Q;this.r=pE(E,Q,A+1/3),this.g=pE(E,Q,A),this.b=pE(E,Q,A-1/3)}return iI.toWorkingColorSpace(this,B),this}setStyle(A,I=dI){function g(Q){Q!==void 0&&parseFloat(Q)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let B;if(B=/^(\w+)\(([^\)]*)\)/.exec(A)){let Q;const E=B[1],i=B[2];switch(E){case"rgb":case"rgba":if(Q=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return g(Q[4]),this.setRGB(Math.min(255,parseInt(Q[1],10))/255,Math.min(255,parseInt(Q[2],10))/255,Math.min(255,parseInt(Q[3],10))/255,I);if(Q=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return g(Q[4]),this.setRGB(Math.min(100,parseInt(Q[1],10))/100,Math.min(100,parseInt(Q[2],10))/100,Math.min(100,parseInt(Q[3],10))/100,I);break;case"hsl":case"hsla":if(Q=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return g(Q[4]),this.setHSL(parseFloat(Q[1])/360,parseFloat(Q[2])/100,parseFloat(Q[3])/100,I);break;default:console.warn("THREE.Color: Unknown color model "+A)}}else if(B=/^\#([A-Fa-f\d]+)$/.exec(A)){const Q=B[1],E=Q.length;if(E===3)return this.setRGB(parseInt(Q.charAt(0),16)/15,parseInt(Q.charAt(1),16)/15,parseInt(Q.charAt(2),16)/15,I);if(E===6)return this.setHex(parseInt(Q,16),I);console.warn("THREE.Color: Invalid hex color "+A)}else if(A&&A.length>0)return this.setColorName(A,I);return this}setColorName(A,I=dI){const g=Vo[A.toLowerCase()];return g!==void 0?this.setHex(g,I):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=qC(A.r),this.g=qC(A.g),this.b=qC(A.b),this}copyLinearToSRGB(A){return this.r=cE(A.r),this.g=cE(A.g),this.b=cE(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=dI){return iI.fromWorkingColorSpace(uI.copy(this),A),Math.round(HI(uI.r*255,0,255))*65536+Math.round(HI(uI.g*255,0,255))*256+Math.round(HI(uI.b*255,0,255))}getHexString(A=dI){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,I=iI.workingColorSpace){iI.fromWorkingColorSpace(uI.copy(this),I);const g=uI.r,B=uI.g,Q=uI.b,E=Math.max(g,B,Q),i=Math.min(g,B,Q);let o,a;const D=(i+E)/2;if(i===E)o=0,a=0;else{const t=E-i;switch(a=D<=.5?t/(E+i):t/(2-E-i),E){case g:o=(B-Q)/t+(B<Q?6:0);break;case B:o=(Q-g)/t+2;break;case Q:o=(g-B)/t+4;break}o/=6}return A.h=o,A.s=a,A.l=D,A}getRGB(A,I=iI.workingColorSpace){return iI.fromWorkingColorSpace(uI.copy(this),I),A.r=uI.r,A.g=uI.g,A.b=uI.b,A}getStyle(A=dI){iI.fromWorkingColorSpace(uI.copy(this),A);const I=uI.r,g=uI.g,B=uI.b;return A!==dI?`color(${A} ${I.toFixed(3)} ${g.toFixed(3)} ${B.toFixed(3)})`:`rgb(${Math.round(I*255)},${Math.round(g*255)},${Math.round(B*255)})`}offsetHSL(A,I,g){return this.getHSL(Wg),this.setHSL(Wg.h+A,Wg.s+I,Wg.l+g)}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,I){return this.r=A.r+I.r,this.g=A.g+I.g,this.b=A.b+I.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,I){return this.r+=(A.r-this.r)*I,this.g+=(A.g-this.g)*I,this.b+=(A.b-this.b)*I,this}lerpColors(A,I,g){return this.r=A.r+(I.r-A.r)*g,this.g=A.g+(I.g-A.g)*g,this.b=A.b+(I.b-A.b)*g,this}lerpHSL(A,I){this.getHSL(Wg),A.getHSL(IQ);const g=tB(Wg.h,IQ.h,I),B=tB(Wg.s,IQ.s,I),Q=tB(Wg.l,IQ.l,I);return this.setHSL(g,B,Q),this}setFromVector3(A){return this.r=A.x,this.g=A.y,this.b=A.z,this}applyMatrix3(A){const I=this.r,g=this.g,B=this.b,Q=A.elements;return this.r=Q[0]*I+Q[3]*g+Q[6]*B,this.g=Q[1]*I+Q[4]*g+Q[7]*B,this.b=Q[2]*I+Q[5]*g+Q[8]*B,this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,I=0){return this.r=A[I],this.g=A[I+1],this.b=A[I+2],this}toArray(A=[],I=0){return A[I]=this.r,A[I+1]=this.g,A[I+2]=this.b,A}fromBufferAttribute(A,I){return this.r=A.getX(I),this.g=A.getY(I),this.b=A.getZ(I),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const uI=new _A;_A.NAMES=Vo;let pt=0;class TC extends iC{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pt++}),this.uuid=JC(),this.name="",this.type="Material",this.blending=nC,this.side=ug,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=IE,this.blendDst=gE,this.blendEquation=gC,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _A(0,0,0),this.blendAlpha=0,this.depthFunc=HB,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=No,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=NC,this.stencilZFail=NC,this.stencilZPass=NC,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const I in A){const g=A[I];if(g===void 0){console.warn(`THREE.Material: parameter '${I}' has value of undefined.`);continue}const B=this[I];if(B===void 0){console.warn(`THREE.Material: '${I}' is not a property of THREE.${this.type}.`);continue}B&&B.isColor?B.set(g):B&&B.isVector3&&g&&g.isVector3?B.copy(g):this[I]=g}}toJSON(A){const I=A===void 0||typeof A=="string";I&&(A={textures:{},images:{}});const g={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};g.uuid=this.uuid,g.type=this.type,this.name!==""&&(g.name=this.name),this.color&&this.color.isColor&&(g.color=this.color.getHex()),this.roughness!==void 0&&(g.roughness=this.roughness),this.metalness!==void 0&&(g.metalness=this.metalness),this.sheen!==void 0&&(g.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(g.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(g.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(g.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(g.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(g.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(g.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(g.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(g.shininess=this.shininess),this.clearcoat!==void 0&&(g.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(g.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(g.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(g.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(g.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,g.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(g.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(g.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(g.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(g.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(g.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.anisotropy!==void 0&&(g.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(g.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(g.anisotropyMap=this.anisotropyMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(g.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(g.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(g.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(g.lightMap=this.lightMap.toJSON(A).uuid,g.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(g.aoMap=this.aoMap.toJSON(A).uuid,g.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(g.bumpMap=this.bumpMap.toJSON(A).uuid,g.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(g.normalMap=this.normalMap.toJSON(A).uuid,g.normalMapType=this.normalMapType,g.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(g.displacementMap=this.displacementMap.toJSON(A).uuid,g.displacementScale=this.displacementScale,g.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(g.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(g.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(g.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(g.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(g.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(g.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(g.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(g.combine=this.combine)),this.envMapIntensity!==void 0&&(g.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(g.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(g.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(g.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(g.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(g.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(g.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(g.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(g.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(g.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(g.size=this.size),this.shadowSide!==null&&(g.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(g.sizeAttenuation=this.sizeAttenuation),this.blending!==nC&&(g.blending=this.blending),this.side!==ug&&(g.side=this.side),this.vertexColors===!0&&(g.vertexColors=!0),this.opacity<1&&(g.opacity=this.opacity),this.transparent===!0&&(g.transparent=!0),this.blendSrc!==IE&&(g.blendSrc=this.blendSrc),this.blendDst!==gE&&(g.blendDst=this.blendDst),this.blendEquation!==gC&&(g.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(g.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(g.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(g.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(g.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(g.blendAlpha=this.blendAlpha),this.depthFunc!==HB&&(g.depthFunc=this.depthFunc),this.depthTest===!1&&(g.depthTest=this.depthTest),this.depthWrite===!1&&(g.depthWrite=this.depthWrite),this.colorWrite===!1&&(g.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(g.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==No&&(g.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(g.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(g.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==NC&&(g.stencilFail=this.stencilFail),this.stencilZFail!==NC&&(g.stencilZFail=this.stencilZFail),this.stencilZPass!==NC&&(g.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(g.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(g.rotation=this.rotation),this.polygonOffset===!0&&(g.polygonOffset=!0),this.polygonOffsetFactor!==0&&(g.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(g.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(g.linewidth=this.linewidth),this.dashSize!==void 0&&(g.dashSize=this.dashSize),this.gapSize!==void 0&&(g.gapSize=this.gapSize),this.scale!==void 0&&(g.scale=this.scale),this.dithering===!0&&(g.dithering=!0),this.alphaTest>0&&(g.alphaTest=this.alphaTest),this.alphaHash===!0&&(g.alphaHash=!0),this.alphaToCoverage===!0&&(g.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(g.premultipliedAlpha=!0),this.forceSinglePass===!0&&(g.forceSinglePass=!0),this.wireframe===!0&&(g.wireframe=!0),this.wireframeLinewidth>1&&(g.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(g.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(g.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(g.flatShading=!0),this.visible===!1&&(g.visible=!1),this.toneMapped===!1&&(g.toneMapped=!1),this.fog===!1&&(g.fog=!1),Object.keys(this.userData).length>0&&(g.userData=this.userData);function B(Q){const E=[];for(const i in Q){const o=Q[i];delete o.metadata,E.push(o)}return E}if(I){const Q=B(A.textures),E=B(A.images);Q.length>0&&(g.textures=Q),E.length>0&&(g.images=E)}return g}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.blendColor.copy(A.blendColor),this.blendAlpha=A.blendAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const I=A.clippingPlanes;let g=null;if(I!==null){const B=I.length;g=new Array(B);for(let Q=0;Q!==B;++Q)g[Q]=I[Q].clone()}return this.clippingPlanes=g,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaHash=A.alphaHash,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.forceSinglePass=A.forceSinglePass,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}}class Xo extends TC{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _A(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vi,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const kI=new Y,gQ=new LA;class hg{constructor(A,I,g=!1){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=I,this.count=A!==void 0?A.length/I:0,this.normalized=g,this.usage=Fo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ug,this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}get updateRange(){return RC("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(A){return this.usage=A,this}addUpdateRange(A,I){this.updateRanges.push({start:A,count:I})}clearUpdateRanges(){this.updateRanges.length=0}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this.gpuType=A.gpuType,this}copyAt(A,I,g){A*=this.itemSize,g*=I.itemSize;for(let B=0,Q=this.itemSize;B<Q;B++)this.array[A+B]=I.array[g+B];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let I=0,g=this.count;I<g;I++)gQ.fromBufferAttribute(this,I),gQ.applyMatrix3(A),this.setXY(I,gQ.x,gQ.y);else if(this.itemSize===3)for(let I=0,g=this.count;I<g;I++)kI.fromBufferAttribute(this,I),kI.applyMatrix3(A),this.setXYZ(I,kI.x,kI.y,kI.z);return this}applyMatrix4(A){for(let I=0,g=this.count;I<g;I++)kI.fromBufferAttribute(this,I),kI.applyMatrix4(A),this.setXYZ(I,kI.x,kI.y,kI.z);return this}applyNormalMatrix(A){for(let I=0,g=this.count;I<g;I++)kI.fromBufferAttribute(this,I),kI.applyNormalMatrix(A),this.setXYZ(I,kI.x,kI.y,kI.z);return this}transformDirection(A){for(let I=0,g=this.count;I<g;I++)kI.fromBufferAttribute(this,I),kI.transformDirection(A),this.setXYZ(I,kI.x,kI.y,kI.z);return this}set(A,I=0){return this.array.set(A,I),this}getComponent(A,I){let g=this.array[A*this.itemSize+I];return this.normalized&&(g=FC(g,this.array)),g}setComponent(A,I,g){return this.normalized&&(g=OI(g,this.array)),this.array[A*this.itemSize+I]=g,this}getX(A){let I=this.array[A*this.itemSize];return this.normalized&&(I=FC(I,this.array)),I}setX(A,I){return this.normalized&&(I=OI(I,this.array)),this.array[A*this.itemSize]=I,this}getY(A){let I=this.array[A*this.itemSize+1];return this.normalized&&(I=FC(I,this.array)),I}setY(A,I){return this.normalized&&(I=OI(I,this.array)),this.array[A*this.itemSize+1]=I,this}getZ(A){let I=this.array[A*this.itemSize+2];return this.normalized&&(I=FC(I,this.array)),I}setZ(A,I){return this.normalized&&(I=OI(I,this.array)),this.array[A*this.itemSize+2]=I,this}getW(A){let I=this.array[A*this.itemSize+3];return this.normalized&&(I=FC(I,this.array)),I}setW(A,I){return this.normalized&&(I=OI(I,this.array)),this.array[A*this.itemSize+3]=I,this}setXY(A,I,g){return A*=this.itemSize,this.normalized&&(I=OI(I,this.array),g=OI(g,this.array)),this.array[A+0]=I,this.array[A+1]=g,this}setXYZ(A,I,g,B){return A*=this.itemSize,this.normalized&&(I=OI(I,this.array),g=OI(g,this.array),B=OI(B,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=B,this}setXYZW(A,I,g,B,Q){return A*=this.itemSize,this.normalized&&(I=OI(I,this.array),g=OI(g,this.array),B=OI(B,this.array),Q=OI(Q,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=B,this.array[A+3]=Q,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==Fo&&(A.usage=this.usage),A}}class _o extends hg{constructor(A,I,g){super(new Uint16Array(A),I,g)}}class zo extends hg{constructor(A,I,g){super(new Uint32Array(A),I,g)}}class mI extends hg{constructor(A,I,g){super(new Float32Array(A),I,g)}}let dt=0;const $I=new cI,dE=new RI,xC=new Y,VI=new sB,SB=new sB,qI=new Y;class XI extends iC{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dt++}),this.uuid=JC(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(po(A)?zo:_o)(A,1):this.index=A,this}getAttribute(A){return this.attributes[A]}setAttribute(A,I){return this.attributes[A]=I,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,I,g=0){this.groups.push({start:A,count:I,materialIndex:g})}clearGroups(){this.groups=[]}setDrawRange(A,I){this.drawRange.start=A,this.drawRange.count=I}applyMatrix4(A){const I=this.attributes.position;I!==void 0&&(I.applyMatrix4(A),I.needsUpdate=!0);const g=this.attributes.normal;if(g!==void 0){const Q=new jA().getNormalMatrix(A);g.applyNormalMatrix(Q),g.needsUpdate=!0}const B=this.attributes.tangent;return B!==void 0&&(B.transformDirection(A),B.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return $I.makeRotationFromQuaternion(A),this.applyMatrix4($I),this}rotateX(A){return $I.makeRotationX(A),this.applyMatrix4($I),this}rotateY(A){return $I.makeRotationY(A),this.applyMatrix4($I),this}rotateZ(A){return $I.makeRotationZ(A),this.applyMatrix4($I),this}translate(A,I,g){return $I.makeTranslation(A,I,g),this.applyMatrix4($I),this}scale(A,I,g){return $I.makeScale(A,I,g),this.applyMatrix4($I),this}lookAt(A){return dE.lookAt(A),dE.updateMatrix(),this.applyMatrix4(dE.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xC).negate(),this.translate(xC.x,xC.y,xC.z),this}setFromPoints(A){const I=[];for(let g=0,B=A.length;g<B;g++){const Q=A[g];I.push(Q.x,Q.y,Q.z||0)}return this.setAttribute("position",new mI(I,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sB);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),I)for(let g=0,B=I.length;g<B;g++){const Q=I[g];VI.setFromBufferAttribute(Q),this.morphTargetsRelative?(qI.addVectors(this.boundingBox.min,VI.min),this.boundingBox.expandByPoint(qI),qI.addVectors(this.boundingBox.max,VI.max),this.boundingBox.expandByPoint(qI)):(this.boundingBox.expandByPoint(VI.min),this.boundingBox.expandByPoint(VI.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new VB);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Y,1/0);return}if(A){const g=this.boundingSphere.center;if(VI.setFromBufferAttribute(A),I)for(let Q=0,E=I.length;Q<E;Q++){const i=I[Q];SB.setFromBufferAttribute(i),this.morphTargetsRelative?(qI.addVectors(VI.min,SB.min),VI.expandByPoint(qI),qI.addVectors(VI.max,SB.max),VI.expandByPoint(qI)):(VI.expandByPoint(SB.min),VI.expandByPoint(SB.max))}VI.getCenter(g);let B=0;for(let Q=0,E=A.count;Q<E;Q++)qI.fromBufferAttribute(A,Q),B=Math.max(B,g.distanceToSquared(qI));if(I)for(let Q=0,E=I.length;Q<E;Q++){const i=I[Q],o=this.morphTargetsRelative;for(let a=0,D=i.count;a<D;a++)qI.fromBufferAttribute(i,a),o&&(xC.fromBufferAttribute(A,a),qI.add(xC)),B=Math.max(B,g.distanceToSquared(qI))}this.boundingSphere.radius=Math.sqrt(B),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,I=this.attributes;if(A===null||I.position===void 0||I.normal===void 0||I.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const g=A.array,B=I.position.array,Q=I.normal.array,E=I.uv.array,i=B.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hg(new Float32Array(4*i),4));const o=this.getAttribute("tangent").array,a=[],D=[];for(let c=0;c<i;c++)a[c]=new Y,D[c]=new Y;const t=new Y,s=new Y,w=new Y,S=new LA,M=new LA,G=new LA,e=new Y,l=new Y;function k(c,N,W){t.fromArray(B,c*3),s.fromArray(B,N*3),w.fromArray(B,W*3),S.fromArray(E,c*2),M.fromArray(E,N*2),G.fromArray(E,W*2),s.sub(t),w.sub(t),M.sub(S),G.sub(S);const EA=1/(M.x*G.y-G.x*M.y);isFinite(EA)&&(e.copy(s).multiplyScalar(G.y).addScaledVector(w,-M.y).multiplyScalar(EA),l.copy(w).multiplyScalar(M.x).addScaledVector(s,-G.x).multiplyScalar(EA),a[c].add(e),a[N].add(e),a[W].add(e),D[c].add(l),D[N].add(l),D[W].add(l))}let F=this.groups;F.length===0&&(F=[{start:0,count:g.length}]);for(let c=0,N=F.length;c<N;++c){const W=F[c],EA=W.start,p=W.count;for(let Z=EA,b=EA+p;Z<b;Z+=3)k(g[Z+0],g[Z+1],g[Z+2])}const d=new Y,q=new Y,J=new Y,V=new Y;function aA(c){J.fromArray(Q,c*3),V.copy(J);const N=a[c];d.copy(N),d.sub(J.multiplyScalar(J.dot(N))).normalize(),q.crossVectors(V,N);const W=q.dot(D[c])<0?-1:1;o[c*4]=d.x,o[c*4+1]=d.y,o[c*4+2]=d.z,o[c*4+3]=W}for(let c=0,N=F.length;c<N;++c){const W=F[c],EA=W.start,p=W.count;for(let Z=EA,b=EA+p;Z<b;Z+=3)aA(g[Z+0]),aA(g[Z+1]),aA(g[Z+2])}}computeVertexNormals(){const A=this.index,I=this.getAttribute("position");if(I!==void 0){let g=this.getAttribute("normal");if(g===void 0)g=new hg(new Float32Array(I.count*3),3),this.setAttribute("normal",g);else for(let s=0,w=g.count;s<w;s++)g.setXYZ(s,0,0,0);const B=new Y,Q=new Y,E=new Y,i=new Y,o=new Y,a=new Y,D=new Y,t=new Y;if(A)for(let s=0,w=A.count;s<w;s+=3){const S=A.getX(s+0),M=A.getX(s+1),G=A.getX(s+2);B.fromBufferAttribute(I,S),Q.fromBufferAttribute(I,M),E.fromBufferAttribute(I,G),D.subVectors(E,Q),t.subVectors(B,Q),D.cross(t),i.fromBufferAttribute(g,S),o.fromBufferAttribute(g,M),a.fromBufferAttribute(g,G),i.add(D),o.add(D),a.add(D),g.setXYZ(S,i.x,i.y,i.z),g.setXYZ(M,o.x,o.y,o.z),g.setXYZ(G,a.x,a.y,a.z)}else for(let s=0,w=I.count;s<w;s+=3)B.fromBufferAttribute(I,s+0),Q.fromBufferAttribute(I,s+1),E.fromBufferAttribute(I,s+2),D.subVectors(E,Q),t.subVectors(B,Q),D.cross(t),g.setXYZ(s+0,D.x,D.y,D.z),g.setXYZ(s+1,D.x,D.y,D.z),g.setXYZ(s+2,D.x,D.y,D.z);this.normalizeNormals(),g.needsUpdate=!0}}normalizeNormals(){const A=this.attributes.normal;for(let I=0,g=A.count;I<g;I++)qI.fromBufferAttribute(A,I),qI.normalize(),A.setXYZ(I,qI.x,qI.y,qI.z)}toNonIndexed(){function A(i,o){const a=i.array,D=i.itemSize,t=i.normalized,s=new a.constructor(o.length*D);let w=0,S=0;for(let M=0,G=o.length;M<G;M++){i.isInterleavedBufferAttribute?w=o[M]*i.data.stride+i.offset:w=o[M]*D;for(let e=0;e<D;e++)s[S++]=a[w++]}return new hg(s,D,t)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const I=new XI,g=this.index.array,B=this.attributes;for(const i in B){const o=B[i],a=A(o,g);I.setAttribute(i,a)}const Q=this.morphAttributes;for(const i in Q){const o=[],a=Q[i];for(let D=0,t=a.length;D<t;D++){const s=a[D],w=A(s,g);o.push(w)}I.morphAttributes[i]=o}I.morphTargetsRelative=this.morphTargetsRelative;const E=this.groups;for(let i=0,o=E.length;i<o;i++){const a=E[i];I.addGroup(a.start,a.count,a.materialIndex)}return I}toJSON(){const A={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const a in o)o[a]!==void 0&&(A[a]=o[a]);return A}A.data={attributes:{}};const I=this.index;I!==null&&(A.data.index={type:I.array.constructor.name,array:Array.prototype.slice.call(I.array)});const g=this.attributes;for(const o in g){const a=g[o];A.data.attributes[o]=a.toJSON(A.data)}const B={};let Q=!1;for(const o in this.morphAttributes){const a=this.morphAttributes[o],D=[];for(let t=0,s=a.length;t<s;t++){const w=a[t];D.push(w.toJSON(A.data))}D.length>0&&(B[o]=D,Q=!0)}Q&&(A.data.morphAttributes=B,A.data.morphTargetsRelative=this.morphTargetsRelative);const E=this.groups;E.length>0&&(A.data.groups=JSON.parse(JSON.stringify(E)));const i=this.boundingSphere;return i!==null&&(A.data.boundingSphere={center:i.center.toArray(),radius:i.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const I={};this.name=A.name;const g=A.index;g!==null&&this.setIndex(g.clone(I));const B=A.attributes;for(const a in B){const D=B[a];this.setAttribute(a,D.clone(I))}const Q=A.morphAttributes;for(const a in Q){const D=[],t=Q[a];for(let s=0,w=t.length;s<w;s++)D.push(t[s].clone(I));this.morphAttributes[a]=D}this.morphTargetsRelative=A.morphTargetsRelative;const E=A.groups;for(let a=0,D=E.length;a<D;a++){const t=E[a];this.addGroup(t.start,t.count,t.materialIndex)}const i=A.boundingBox;i!==null&&(this.boundingBox=i.clone());const o=A.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $o=new cI,tC=new NE,CQ=new VB,Aa=new Y,OC=new Y,bC=new Y,vC=new Y,YE=new Y,BQ=new Y,QQ=new LA,EQ=new LA,iQ=new LA,Ia=new Y,ga=new Y,Ca=new Y,oQ=new Y,aQ=new Y;class Dg extends RI{constructor(A=new XI,I=new Xo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=Array.isArray(A.material)?A.material.slice():A.material,this.geometry=A.geometry,this}updateMorphTargets(){const A=this.geometry.morphAttributes,I=Object.keys(A);if(I.length>0){const g=A[I[0]];if(g!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let B=0,Q=g.length;B<Q;B++){const E=g[B].name||String(B);this.morphTargetInfluences.push(0),this.morphTargetDictionary[E]=B}}}}getVertexPosition(A,I){const g=this.geometry,B=g.attributes.position,Q=g.morphAttributes.position,E=g.morphTargetsRelative;I.fromBufferAttribute(B,A);const i=this.morphTargetInfluences;if(Q&&i){BQ.set(0,0,0);for(let o=0,a=Q.length;o<a;o++){const D=i[o],t=Q[o];D!==0&&(YE.fromBufferAttribute(t,A),E?BQ.addScaledVector(YE,D):BQ.addScaledVector(YE.sub(I),D))}I.add(BQ)}return I}raycast(A,I){const g=this.geometry,B=this.material,Q=this.matrixWorld;B!==void 0&&(g.boundingSphere===null&&g.computeBoundingSphere(),CQ.copy(g.boundingSphere),CQ.applyMatrix4(Q),tC.copy(A.ray).recast(A.near),!(CQ.containsPoint(tC.origin)===!1&&(tC.intersectSphere(CQ,Aa)===null||tC.origin.distanceToSquared(Aa)>(A.far-A.near)**2))&&($o.copy(Q).invert(),tC.copy(A.ray).applyMatrix4($o),!(g.boundingBox!==null&&tC.intersectsBox(g.boundingBox)===!1)&&this._computeIntersections(A,I,tC)))}_computeIntersections(A,I,g){let B;const Q=this.geometry,E=this.material,i=Q.index,o=Q.attributes.position,a=Q.attributes.uv,D=Q.attributes.uv1,t=Q.attributes.normal,s=Q.groups,w=Q.drawRange;if(i!==null)if(Array.isArray(E))for(let S=0,M=s.length;S<M;S++){const G=s[S],e=E[G.materialIndex],l=Math.max(G.start,w.start),k=Math.min(i.count,Math.min(G.start+G.count,w.start+w.count));for(let F=l,d=k;F<d;F+=3){const q=i.getX(F),J=i.getX(F+1),V=i.getX(F+2);B=DQ(this,e,A,g,a,D,t,q,J,V),B&&(B.faceIndex=Math.floor(F/3),B.face.materialIndex=G.materialIndex,I.push(B))}}else{const S=Math.max(0,w.start),M=Math.min(i.count,w.start+w.count);for(let G=S,e=M;G<e;G+=3){const l=i.getX(G),k=i.getX(G+1),F=i.getX(G+2);B=DQ(this,E,A,g,a,D,t,l,k,F),B&&(B.faceIndex=Math.floor(G/3),I.push(B))}}else if(o!==void 0)if(Array.isArray(E))for(let S=0,M=s.length;S<M;S++){const G=s[S],e=E[G.materialIndex],l=Math.max(G.start,w.start),k=Math.min(o.count,Math.min(G.start+G.count,w.start+w.count));for(let F=l,d=k;F<d;F+=3){const q=F,J=F+1,V=F+2;B=DQ(this,e,A,g,a,D,t,q,J,V),B&&(B.faceIndex=Math.floor(F/3),B.face.materialIndex=G.materialIndex,I.push(B))}}else{const S=Math.max(0,w.start),M=Math.min(o.count,w.start+w.count);for(let G=S,e=M;G<e;G+=3){const l=G,k=G+1,F=G+2;B=DQ(this,E,A,g,a,D,t,l,k,F),B&&(B.faceIndex=Math.floor(G/3),I.push(B))}}}}function Yt(C,A,I,g,B,Q,E,i){let o;if(A.side===ZI?o=g.intersectTriangle(E,Q,B,!0,i):o=g.intersectTriangle(B,Q,E,A.side===ug,i),o===null)return null;aQ.copy(i),aQ.applyMatrix4(C.matrixWorld);const a=I.ray.origin.distanceTo(aQ);return a<I.near||a>I.far?null:{distance:a,point:aQ.clone(),object:C}}function DQ(C,A,I,g,B,Q,E,i,o,a){C.getVertexPosition(i,OC),C.getVertexPosition(o,bC),C.getVertexPosition(a,vC);const D=Yt(C,A,I,g,OC,bC,vC,oQ);if(D){B&&(QQ.fromBufferAttribute(B,i),EQ.fromBufferAttribute(B,o),iQ.fromBufferAttribute(B,a),D.uv=sg.getInterpolation(oQ,OC,bC,vC,QQ,EQ,iQ,new LA)),Q&&(QQ.fromBufferAttribute(Q,i),EQ.fromBufferAttribute(Q,o),iQ.fromBufferAttribute(Q,a),D.uv1=sg.getInterpolation(oQ,OC,bC,vC,QQ,EQ,iQ,new LA),D.uv2=D.uv1),E&&(Ia.fromBufferAttribute(E,i),ga.fromBufferAttribute(E,o),Ca.fromBufferAttribute(E,a),D.normal=sg.getInterpolation(oQ,OC,bC,vC,Ia,ga,Ca,new Y),D.normal.dot(g.direction)>0&&D.normal.multiplyScalar(-1));const t={a:i,b:o,c:a,normal:new Y,materialIndex:0};sg.getNormal(OC,bC,vC,t.normal),D.face=t}return D}class rB extends XI{constructor(A=1,I=1,g=1,B=1,Q=1,E=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:I,depth:g,widthSegments:B,heightSegments:Q,depthSegments:E};const i=this;B=Math.floor(B),Q=Math.floor(Q),E=Math.floor(E);const o=[],a=[],D=[],t=[];let s=0,w=0;S("z","y","x",-1,-1,g,I,A,E,Q,0),S("z","y","x",1,-1,g,I,-A,E,Q,1),S("x","z","y",1,1,A,g,I,B,E,2),S("x","z","y",1,-1,A,g,-I,B,E,3),S("x","y","z",1,-1,A,I,g,B,Q,4),S("x","y","z",-1,-1,A,I,-g,B,Q,5),this.setIndex(o),this.setAttribute("position",new mI(a,3)),this.setAttribute("normal",new mI(D,3)),this.setAttribute("uv",new mI(t,2));function S(M,G,e,l,k,F,d,q,J,V,aA){const c=F/J,N=d/V,W=F/2,EA=d/2,p=q/2,Z=J+1,b=V+1;let X=0,j=0;const P=new Y;for(let BA=0;BA<b;BA++){const AA=BA*N-EA;for(let wA=0;wA<Z;wA++){const yA=wA*c-W;P[M]=yA*l,P[G]=AA*k,P[e]=p,a.push(P.x,P.y,P.z),P[M]=0,P[G]=0,P[e]=q>0?1:-1,D.push(P.x,P.y,P.z),t.push(wA/J),t.push(1-BA/V),X+=1}}for(let BA=0;BA<V;BA++)for(let AA=0;AA<J;AA++){const wA=s+AA+Z*BA,yA=s+AA+Z*(BA+1),v=s+(AA+1)+Z*(BA+1),iA=s+(AA+1)+Z*BA;o.push(wA,yA,iA),o.push(yA,v,iA),j+=6}i.addGroup(w,j,aA),w+=j,s+=X}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new rB(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function ZC(C){const A={};for(const I in C){A[I]={};for(const g in C[I]){const B=C[I][g];B&&(B.isColor||B.isMatrix3||B.isMatrix4||B.isVector2||B.isVector3||B.isVector4||B.isTexture||B.isQuaternion)?B.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),A[I][g]=null):A[I][g]=B.clone():Array.isArray(B)?A[I][g]=B.slice():A[I][g]=B}}return A}function bI(C){const A={};for(let I=0;I<C.length;I++){const g=ZC(C[I]);for(const B in g)A[B]=g[B]}return A}function Lt(C){const A=[];for(let I=0;I<C.length;I++)A.push(C[I].clone());return A}function Ba(C){return C.getRenderTarget()===null?C.outputColorSpace:iI.workingColorSpace}const Ht={clone:ZC,merge:bI};var ut=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mt=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dg extends TC{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ut,this.fragmentShader=mt,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=ZC(A.uniforms),this.uniformsGroups=Lt(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const I=super.toJSON(A);I.glslVersion=this.glslVersion,I.uniforms={};for(const B in this.uniforms){const Q=this.uniforms[B].value;Q&&Q.isTexture?I.uniforms[B]={type:"t",value:Q.toJSON(A).uuid}:Q&&Q.isColor?I.uniforms[B]={type:"c",value:Q.getHex()}:Q&&Q.isVector2?I.uniforms[B]={type:"v2",value:Q.toArray()}:Q&&Q.isVector3?I.uniforms[B]={type:"v3",value:Q.toArray()}:Q&&Q.isVector4?I.uniforms[B]={type:"v4",value:Q.toArray()}:Q&&Q.isMatrix3?I.uniforms[B]={type:"m3",value:Q.toArray()}:Q&&Q.isMatrix4?I.uniforms[B]={type:"m4",value:Q.toArray()}:I.uniforms[B]={value:Q}}Object.keys(this.defines).length>0&&(I.defines=this.defines),I.vertexShader=this.vertexShader,I.fragmentShader=this.fragmentShader,I.lights=this.lights,I.clipping=this.clipping;const g={};for(const B in this.extensions)this.extensions[B]===!0&&(g[B]=!0);return Object.keys(g).length>0&&(I.extensions=g),I}}let LE=class extends RI{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new cI,this.projectionMatrix=new cI,this.projectionMatrixInverse=new cI,this.coordinateSystem=Ng}copy(C,A){return super.copy(C,A),this.matrixWorldInverse.copy(C.matrixWorldInverse),this.projectionMatrix.copy(C.projectionMatrix),this.projectionMatrixInverse.copy(C.projectionMatrixInverse),this.coordinateSystem=C.coordinateSystem,this}getWorldDirection(C){return super.getWorldDirection(C).negate()}updateMatrixWorld(C){super.updateMatrixWorld(C),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(C,A){super.updateWorldMatrix(C,A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const Pg=new Y,Qa=new LA,Ea=new LA;class Ag extends LE{constructor(A=50,I=1,g=.1,B=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=g,this.far=B,this.focus=10,this.aspect=I,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const I=.5*this.getFilmHeight()/A;this.fov=eB*2*Math.atan(I),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(DB*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return eB*2*Math.atan(Math.tan(DB*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(A,I,g){Pg.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),I.set(Pg.x,Pg.y).multiplyScalar(-A/Pg.z),Pg.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),g.set(Pg.x,Pg.y).multiplyScalar(-A/Pg.z)}getViewSize(A,I){return this.getViewBounds(A,Qa,Ea),I.subVectors(Ea,Qa)}setViewOffset(A,I,g,B,Q,E){this.aspect=A/I,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=B,this.view.width=Q,this.view.height=E,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let I=A*Math.tan(DB*.5*this.fov)/this.zoom,g=2*I,B=this.aspect*g,Q=-.5*B;const E=this.view;if(this.view!==null&&this.view.enabled){const o=E.fullWidth,a=E.fullHeight;Q+=E.offsetX*B/o,I-=E.offsetY*g/a,B*=E.width/o,g*=E.height/a}const i=this.filmOffset;i!==0&&(Q+=A*i/this.getFilmWidth()),this.projectionMatrix.makePerspective(Q,Q+B,I,I-g,A,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.fov=this.fov,I.object.zoom=this.zoom,I.object.near=this.near,I.object.far=this.far,I.object.focus=this.focus,I.object.aspect=this.aspect,this.view!==null&&(I.object.view=Object.assign({},this.view)),I.object.filmGauge=this.filmGauge,I.object.filmOffset=this.filmOffset,I}}const WC=-90,PC=1;class ft extends RI{constructor(A,I,g){super(),this.type="CubeCamera",this.renderTarget=g,this.coordinateSystem=null,this.activeMipmapLevel=0;const B=new Ag(WC,PC,A,I);B.layers=this.layers,this.add(B);const Q=new Ag(WC,PC,A,I);Q.layers=this.layers,this.add(Q);const E=new Ag(WC,PC,A,I);E.layers=this.layers,this.add(E);const i=new Ag(WC,PC,A,I);i.layers=this.layers,this.add(i);const o=new Ag(WC,PC,A,I);o.layers=this.layers,this.add(o);const a=new Ag(WC,PC,A,I);a.layers=this.layers,this.add(a)}updateCoordinateSystem(){const A=this.coordinateSystem,I=this.children.concat(),[g,B,Q,E,i,o]=I;for(const a of I)this.remove(a);if(A===Ng)g.up.set(0,1,0),g.lookAt(1,0,0),B.up.set(0,1,0),B.lookAt(-1,0,0),Q.up.set(0,0,-1),Q.lookAt(0,1,0),E.up.set(0,0,1),E.lookAt(0,-1,0),i.up.set(0,1,0),i.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(A===OB)g.up.set(0,-1,0),g.lookAt(-1,0,0),B.up.set(0,-1,0),B.lookAt(1,0,0),Q.up.set(0,0,1),Q.lookAt(0,1,0),E.up.set(0,0,-1),E.lookAt(0,-1,0),i.up.set(0,-1,0),i.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+A);for(const a of I)this.add(a),a.updateMatrixWorld()}update(A,I){this.parent===null&&this.updateMatrixWorld();const{renderTarget:g,activeMipmapLevel:B}=this;this.coordinateSystem!==A.coordinateSystem&&(this.coordinateSystem=A.coordinateSystem,this.updateCoordinateSystem());const[Q,E,i,o,a,D]=this.children,t=A.getRenderTarget(),s=A.getActiveCubeFace(),w=A.getActiveMipmapLevel(),S=A.xr.enabled;A.xr.enabled=!1;const M=g.texture.generateMipmaps;g.texture.generateMipmaps=!1,A.setRenderTarget(g,0,B),A.render(I,Q),A.setRenderTarget(g,1,B),A.render(I,E),A.setRenderTarget(g,2,B),A.render(I,i),A.setRenderTarget(g,3,B),A.render(I,o),A.setRenderTarget(g,4,B),A.render(I,a),g.texture.generateMipmaps=M,A.setRenderTarget(g,5,B),A.render(I,D),A.setRenderTarget(t,s,w),A.xr.enabled=S,g.texture.needsPMREMUpdate=!0}}class ia extends PI{constructor(A,I,g,B,Q,E,i,o,a,D){A=A!==void 0?A:[],I=I!==void 0?I:lC,super(A,I,g,B,Q,E,i,o,a,D),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class Tt extends oC{constructor(A=1,I={}){super(A,A,I),this.isWebGLCubeRenderTarget=!0;const g={width:A,height:A,depth:1},B=[g,g,g,g,g,g];I.encoding!==void 0&&(RC("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),I.colorSpace=I.encoding===EC?dI:zI),this.texture=new ia(B,I.mapping,I.wrapS,I.wrapT,I.magFilter,I.minFilter,I.format,I.type,I.anisotropy,I.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=I.generateMipmaps!==void 0?I.generateMipmaps:!1,this.texture.minFilter=I.minFilter!==void 0?I.minFilter:WI}fromEquirectangularTexture(A,I){this.texture.type=I.type,this.texture.colorSpace=I.colorSpace,this.texture.generateMipmaps=I.generateMipmaps,this.texture.minFilter=I.minFilter,this.texture.magFilter=I.magFilter;const g={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},B=new rB(5,5,5),Q=new dg({name:"CubemapFromEquirect",uniforms:ZC(g.uniforms),vertexShader:g.vertexShader,fragmentShader:g.fragmentShader,side:ZI,blending:mg});Q.uniforms.tEquirect.value=I;const E=new Dg(B,Q),i=I.minFilter;return I.minFilter===CC&&(I.minFilter=WI),new ft(1,10,this).update(A,E),I.minFilter=i,E.geometry.dispose(),E.material.dispose(),this}clear(A,I,g,B){const Q=A.getRenderTarget();for(let E=0;E<6;E++)A.setRenderTarget(this,E),A.clear(I,g,B);A.setRenderTarget(Q)}}const HE=new Y,xt=new Y,Ot=new jA;class jg{constructor(A=new Y(1,0,0),I=0){this.isPlane=!0,this.normal=A,this.constant=I}set(A,I){return this.normal.copy(A),this.constant=I,this}setComponents(A,I,g,B){return this.normal.set(A,I,g),this.constant=B,this}setFromNormalAndCoplanarPoint(A,I){return this.normal.copy(A),this.constant=-I.dot(this.normal),this}setFromCoplanarPoints(A,I,g){const B=HE.subVectors(g,I).cross(xt.subVectors(A,I)).normalize();return this.setFromNormalAndCoplanarPoint(B,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,I){return I.copy(A).addScaledVector(this.normal,-this.distanceToPoint(A))}intersectLine(A,I){const g=A.delta(HE),B=this.normal.dot(g);if(B===0)return this.distanceToPoint(A.start)===0?I.copy(A.start):null;const Q=-(A.start.dot(this.normal)+this.constant)/B;return Q<0||Q>1?null:I.copy(A.start).addScaledVector(g,Q)}intersectsLine(A){const I=this.distanceToPoint(A.start),g=this.distanceToPoint(A.end);return I<0&&g>0||g<0&&I>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,I){const g=I||Ot.getNormalMatrix(A),B=this.coplanarPoint(HE).applyMatrix4(A),Q=this.normal.applyMatrix3(g).normalize();return this.constant=-B.dot(Q),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const sC=new VB,eQ=new Y;class uE{constructor(A=new jg,I=new jg,g=new jg,B=new jg,Q=new jg,E=new jg){this.planes=[A,I,g,B,Q,E]}set(A,I,g,B,Q,E){const i=this.planes;return i[0].copy(A),i[1].copy(I),i[2].copy(g),i[3].copy(B),i[4].copy(Q),i[5].copy(E),this}copy(A){const I=this.planes;for(let g=0;g<6;g++)I[g].copy(A.planes[g]);return this}setFromProjectionMatrix(A,I=Ng){const g=this.planes,B=A.elements,Q=B[0],E=B[1],i=B[2],o=B[3],a=B[4],D=B[5],t=B[6],s=B[7],w=B[8],S=B[9],M=B[10],G=B[11],e=B[12],l=B[13],k=B[14],F=B[15];if(g[0].setComponents(o-Q,s-a,G-w,F-e).normalize(),g[1].setComponents(o+Q,s+a,G+w,F+e).normalize(),g[2].setComponents(o+E,s+D,G+S,F+l).normalize(),g[3].setComponents(o-E,s-D,G-S,F-l).normalize(),g[4].setComponents(o-i,s-t,G-M,F-k).normalize(),I===Ng)g[5].setComponents(o+i,s+t,G+M,F+k).normalize();else if(I===OB)g[5].setComponents(i,t,M,k).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+I);return this}intersectsObject(A){if(A.boundingSphere!==void 0)A.boundingSphere===null&&A.computeBoundingSphere(),sC.copy(A.boundingSphere).applyMatrix4(A.matrixWorld);else{const I=A.geometry;I.boundingSphere===null&&I.computeBoundingSphere(),sC.copy(I.boundingSphere).applyMatrix4(A.matrixWorld)}return this.intersectsSphere(sC)}intersectsSprite(A){return sC.center.set(0,0,0),sC.radius=.7071067811865476,sC.applyMatrix4(A.matrixWorld),this.intersectsSphere(sC)}intersectsSphere(A){const I=this.planes,g=A.center,B=-A.radius;for(let Q=0;Q<6;Q++)if(I[Q].distanceToPoint(g)<B)return!1;return!0}intersectsBox(A){const I=this.planes;for(let g=0;g<6;g++){const B=I[g];if(eQ.x=B.normal.x>0?A.max.x:A.min.x,eQ.y=B.normal.y>0?A.max.y:A.min.y,eQ.z=B.normal.z>0?A.max.z:A.min.z,B.distanceToPoint(eQ)<0)return!1}return!0}containsPoint(A){const I=this.planes;for(let g=0;g<6;g++)if(I[g].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function oa(){let C=null,A=!1,I=null,g=null;function B(Q,E){I(Q,E),g=C.requestAnimationFrame(B)}return{start:function(){A!==!0&&I!==null&&(g=C.requestAnimationFrame(B),A=!0)},stop:function(){C.cancelAnimationFrame(g),A=!1},setAnimationLoop:function(Q){I=Q},setContext:function(Q){C=Q}}}function bt(C,A){const I=A.isWebGL2,g=new WeakMap;function B(a,D){const t=a.array,s=a.usage,w=t.byteLength,S=C.createBuffer();C.bindBuffer(D,S),C.bufferData(D,t,s),a.onUploadCallback();let M;if(t instanceof Float32Array)M=C.FLOAT;else if(t instanceof Uint16Array)if(a.isFloat16BufferAttribute)if(I)M=C.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=C.UNSIGNED_SHORT;else if(t instanceof Int16Array)M=C.SHORT;else if(t instanceof Uint32Array)M=C.UNSIGNED_INT;else if(t instanceof Int32Array)M=C.INT;else if(t instanceof Int8Array)M=C.BYTE;else if(t instanceof Uint8Array)M=C.UNSIGNED_BYTE;else if(t instanceof Uint8ClampedArray)M=C.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+t);return{buffer:S,type:M,bytesPerElement:t.BYTES_PER_ELEMENT,version:a.version,size:w}}function Q(a,D,t){const s=D.array,w=D._updateRange,S=D.updateRanges;if(C.bindBuffer(t,a),w.count===-1&&S.length===0&&C.bufferSubData(t,0,s),S.length!==0){for(let M=0,G=S.length;M<G;M++){const e=S[M];I?C.bufferSubData(t,e.start*s.BYTES_PER_ELEMENT,s,e.start,e.count):C.bufferSubData(t,e.start*s.BYTES_PER_ELEMENT,s.subarray(e.start,e.start+e.count))}D.clearUpdateRanges()}w.count!==-1&&(I?C.bufferSubData(t,w.offset*s.BYTES_PER_ELEMENT,s,w.offset,w.count):C.bufferSubData(t,w.offset*s.BYTES_PER_ELEMENT,s.subarray(w.offset,w.offset+w.count)),w.count=-1),D.onUploadCallback()}function E(a){return a.isInterleavedBufferAttribute&&(a=a.data),g.get(a)}function i(a){a.isInterleavedBufferAttribute&&(a=a.data);const D=g.get(a);D&&(C.deleteBuffer(D.buffer),g.delete(a))}function o(a,D){if(a.isGLBufferAttribute){const s=g.get(a);(!s||s.version<a.version)&&g.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const t=g.get(a);if(t===void 0)g.set(a,B(a,D));else if(t.version<a.version){if(t.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Q(t.buffer,a,D),t.version=a.version}}return{get:E,remove:i,update:o}}class cB extends XI{constructor(A=1,I=1,g=1,B=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:I,widthSegments:g,heightSegments:B};const Q=A/2,E=I/2,i=Math.floor(g),o=Math.floor(B),a=i+1,D=o+1,t=A/i,s=I/o,w=[],S=[],M=[],G=[];for(let e=0;e<D;e++){const l=e*s-E;for(let k=0;k<a;k++){const F=k*t-Q;S.push(F,-l,0),M.push(0,0,1),G.push(k/i),G.push(1-e/o)}}for(let e=0;e<o;e++)for(let l=0;l<i;l++){const k=l+a*e,F=l+a*(e+1),d=l+1+a*(e+1),q=l+1+a*e;w.push(k,F,q),w.push(F,d,q)}this.setIndex(w),this.setAttribute("position",new mI(S,3)),this.setAttribute("normal",new mI(M,3)),this.setAttribute("uv",new mI(G,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new cB(A.width,A.height,A.widthSegments,A.heightSegments)}}var vt=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zt=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Wt=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pt=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jt=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vt=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xt=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_t=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zt=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$t=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,As=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Is=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gs=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Cs=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bs=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Qs=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Es=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,is=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,os=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,as=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ds=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,es=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ts=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ss=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hs=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Gs=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ws=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ss=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rs=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cs=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ks="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ms=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,ys=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ns=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ls=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Us=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ks=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ns=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Js=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fs=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rs=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qs=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ps=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ds=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ys=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ls=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hs=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,us=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ms=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fs=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ts=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xs=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Os=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,bs=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vs=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zs=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ws=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ps=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,js=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vs=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Xs=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,_s=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zs=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$s=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ah=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ih=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ch=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Qh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Eh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ih=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,oh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ah=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,th=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ch=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Uh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Kh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Nh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Jh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ph=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,uh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Th=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Oh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ph=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Xh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,_h=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$h=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,AG=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IG=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gG=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CG=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,BG=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QG=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,EG=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iG=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,oG=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aG=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,DG=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,eG=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tG=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sG=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hG=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GG=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wG=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SG=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rG=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cG=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kG=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,MG=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yG=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xA={alphahash_fragment:vt,alphahash_pars_fragment:Zt,alphamap_fragment:Wt,alphamap_pars_fragment:Pt,alphatest_fragment:jt,alphatest_pars_fragment:Vt,aomap_fragment:Xt,aomap_pars_fragment:_t,batching_pars_vertex:zt,batching_vertex:$t,begin_vertex:As,beginnormal_vertex:Is,bsdfs:gs,iridescence_fragment:Cs,bumpmap_pars_fragment:Bs,clipping_planes_fragment:Qs,clipping_planes_pars_fragment:Es,clipping_planes_pars_vertex:is,clipping_planes_vertex:os,color_fragment:as,color_pars_fragment:Ds,color_pars_vertex:es,color_vertex:ts,common:ss,cube_uv_reflection_fragment:hs,defaultnormal_vertex:Gs,displacementmap_pars_vertex:ws,displacementmap_vertex:Ss,emissivemap_fragment:rs,emissivemap_pars_fragment:cs,colorspace_fragment:ks,colorspace_pars_fragment:Ms,envmap_fragment:ys,envmap_common_pars_fragment:ns,envmap_pars_fragment:ls,envmap_pars_vertex:Us,envmap_physical_pars_fragment:us,envmap_vertex:Ks,fog_vertex:Ns,fog_pars_vertex:Js,fog_fragment:Fs,fog_pars_fragment:Rs,gradientmap_pars_fragment:qs,lightmap_fragment:ps,lightmap_pars_fragment:ds,lights_lambert_fragment:Ys,lights_lambert_pars_fragment:Ls,lights_pars_begin:Hs,lights_toon_fragment:ms,lights_toon_pars_fragment:fs,lights_phong_fragment:Ts,lights_phong_pars_fragment:xs,lights_physical_fragment:Os,lights_physical_pars_fragment:bs,lights_fragment_begin:vs,lights_fragment_maps:Zs,lights_fragment_end:Ws,logdepthbuf_fragment:Ps,logdepthbuf_pars_fragment:js,logdepthbuf_pars_vertex:Vs,logdepthbuf_vertex:Xs,map_fragment:_s,map_pars_fragment:zs,map_particle_fragment:$s,map_particle_pars_fragment:Ah,metalnessmap_fragment:Ih,metalnessmap_pars_fragment:gh,morphcolor_vertex:Ch,morphnormal_vertex:Bh,morphtarget_pars_vertex:Qh,morphtarget_vertex:Eh,normal_fragment_begin:ih,normal_fragment_maps:oh,normal_pars_fragment:ah,normal_pars_vertex:Dh,normal_vertex:eh,normalmap_pars_fragment:th,clearcoat_normal_fragment_begin:sh,clearcoat_normal_fragment_maps:hh,clearcoat_pars_fragment:Gh,iridescence_pars_fragment:wh,opaque_fragment:Sh,packing:rh,premultiplied_alpha_fragment:ch,project_vertex:kh,dithering_fragment:Mh,dithering_pars_fragment:yh,roughnessmap_fragment:nh,roughnessmap_pars_fragment:lh,shadowmap_pars_fragment:Uh,shadowmap_pars_vertex:Kh,shadowmap_vertex:Nh,shadowmask_pars_fragment:Jh,skinbase_vertex:Fh,skinning_pars_vertex:Rh,skinning_vertex:qh,skinnormal_vertex:ph,specularmap_fragment:dh,specularmap_pars_fragment:Yh,tonemapping_fragment:Lh,tonemapping_pars_fragment:Hh,transmission_fragment:uh,transmission_pars_fragment:mh,uv_pars_fragment:fh,uv_pars_vertex:Th,uv_vertex:xh,worldpos_vertex:Oh,background_vert:bh,background_frag:vh,backgroundCube_vert:Zh,backgroundCube_frag:Wh,cube_vert:Ph,cube_frag:jh,depth_vert:Vh,depth_frag:Xh,distanceRGBA_vert:_h,distanceRGBA_frag:zh,equirect_vert:$h,equirect_frag:AG,linedashed_vert:IG,linedashed_frag:gG,meshbasic_vert:CG,meshbasic_frag:BG,meshlambert_vert:QG,meshlambert_frag:EG,meshmatcap_vert:iG,meshmatcap_frag:oG,meshnormal_vert:aG,meshnormal_frag:DG,meshphong_vert:eG,meshphong_frag:tG,meshphysical_vert:sG,meshphysical_frag:hG,meshtoon_vert:GG,meshtoon_frag:wG,points_vert:SG,points_frag:rG,shadow_vert:cG,shadow_frag:kG,sprite_vert:MG,sprite_frag:yG},oA={common:{diffuse:{value:new _A(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jA},alphaMap:{value:null},alphaMapTransform:{value:new jA},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jA}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jA}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jA}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jA},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jA},normalScale:{value:new LA(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jA},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jA}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jA}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jA}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _A(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _A(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jA},alphaTest:{value:0},uvTransform:{value:new jA}},sprite:{diffuse:{value:new _A(16777215)},opacity:{value:1},center:{value:new LA(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jA},alphaMap:{value:null},alphaMapTransform:{value:new jA},alphaTest:{value:0}}},Gg={basic:{uniforms:bI([oA.common,oA.specularmap,oA.envmap,oA.aomap,oA.lightmap,oA.fog]),vertexShader:xA.meshbasic_vert,fragmentShader:xA.meshbasic_frag},lambert:{uniforms:bI([oA.common,oA.specularmap,oA.envmap,oA.aomap,oA.lightmap,oA.emissivemap,oA.bumpmap,oA.normalmap,oA.displacementmap,oA.fog,oA.lights,{emissive:{value:new _A(0)}}]),vertexShader:xA.meshlambert_vert,fragmentShader:xA.meshlambert_frag},phong:{uniforms:bI([oA.common,oA.specularmap,oA.envmap,oA.aomap,oA.lightmap,oA.emissivemap,oA.bumpmap,oA.normalmap,oA.displacementmap,oA.fog,oA.lights,{emissive:{value:new _A(0)},specular:{value:new _A(1118481)},shininess:{value:30}}]),vertexShader:xA.meshphong_vert,fragmentShader:xA.meshphong_frag},standard:{uniforms:bI([oA.common,oA.envmap,oA.aomap,oA.lightmap,oA.emissivemap,oA.bumpmap,oA.normalmap,oA.displacementmap,oA.roughnessmap,oA.metalnessmap,oA.fog,oA.lights,{emissive:{value:new _A(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xA.meshphysical_vert,fragmentShader:xA.meshphysical_frag},toon:{uniforms:bI([oA.common,oA.aomap,oA.lightmap,oA.emissivemap,oA.bumpmap,oA.normalmap,oA.displacementmap,oA.gradientmap,oA.fog,oA.lights,{emissive:{value:new _A(0)}}]),vertexShader:xA.meshtoon_vert,fragmentShader:xA.meshtoon_frag},matcap:{uniforms:bI([oA.common,oA.bumpmap,oA.normalmap,oA.displacementmap,oA.fog,{matcap:{value:null}}]),vertexShader:xA.meshmatcap_vert,fragmentShader:xA.meshmatcap_frag},points:{uniforms:bI([oA.points,oA.fog]),vertexShader:xA.points_vert,fragmentShader:xA.points_frag},dashed:{uniforms:bI([oA.common,oA.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xA.linedashed_vert,fragmentShader:xA.linedashed_frag},depth:{uniforms:bI([oA.common,oA.displacementmap]),vertexShader:xA.depth_vert,fragmentShader:xA.depth_frag},normal:{uniforms:bI([oA.common,oA.bumpmap,oA.normalmap,oA.displacementmap,{opacity:{value:1}}]),vertexShader:xA.meshnormal_vert,fragmentShader:xA.meshnormal_frag},sprite:{uniforms:bI([oA.sprite,oA.fog]),vertexShader:xA.sprite_vert,fragmentShader:xA.sprite_frag},background:{uniforms:{uvTransform:{value:new jA},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xA.background_vert,fragmentShader:xA.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:xA.backgroundCube_vert,fragmentShader:xA.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xA.cube_vert,fragmentShader:xA.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xA.equirect_vert,fragmentShader:xA.equirect_frag},distanceRGBA:{uniforms:bI([oA.common,oA.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xA.distanceRGBA_vert,fragmentShader:xA.distanceRGBA_frag},shadow:{uniforms:bI([oA.lights,oA.fog,{color:{value:new _A(0)},opacity:{value:1}}]),vertexShader:xA.shadow_vert,fragmentShader:xA.shadow_frag}};Gg.physical={uniforms:bI([Gg.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jA},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jA},clearcoatNormalScale:{value:new LA(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jA},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jA},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jA},sheen:{value:0},sheenColor:{value:new _A(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jA},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jA},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jA},transmissionSamplerSize:{value:new LA},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jA},attenuationDistance:{value:0},attenuationColor:{value:new _A(0)},specularColor:{value:new _A(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jA},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jA},anisotropyVector:{value:new LA},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jA}}]),vertexShader:xA.meshphysical_vert,fragmentShader:xA.meshphysical_frag};const tQ={r:0,b:0,g:0};function nG(C,A,I,g,B,Q,E){const i=new _A(0);let o=Q===!0?0:1,a,D,t=null,s=0,w=null;function S(G,e){let l=!1,k=e.isScene===!0?e.background:null;k&&k.isTexture&&(k=(e.backgroundBlurriness>0?I:A).get(k)),k===null?M(i,o):k&&k.isColor&&(M(k,1),l=!0);const F=C.xr.getEnvironmentBlendMode();F==="additive"?g.buffers.color.setClear(0,0,0,1,E):F==="alpha-blend"&&g.buffers.color.setClear(0,0,0,0,E),(C.autoClear||l)&&C.clear(C.autoClearColor,C.autoClearDepth,C.autoClearStencil),k&&(k.isCubeTexture||k.mapping===uB)?(D===void 0&&(D=new Dg(new rB(1,1,1),new dg({name:"BackgroundCubeMaterial",uniforms:ZC(Gg.backgroundCube.uniforms),vertexShader:Gg.backgroundCube.vertexShader,fragmentShader:Gg.backgroundCube.fragmentShader,side:ZI,depthTest:!1,depthWrite:!1,fog:!1})),D.geometry.deleteAttribute("normal"),D.geometry.deleteAttribute("uv"),D.onBeforeRender=function(d,q,J){this.matrixWorld.copyPosition(J.matrixWorld)},Object.defineProperty(D.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),B.update(D)),D.material.uniforms.envMap.value=k,D.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,D.material.uniforms.backgroundBlurriness.value=e.backgroundBlurriness,D.material.uniforms.backgroundIntensity.value=e.backgroundIntensity,D.material.toneMapped=iI.getTransfer(k.colorSpace)!==DI,(t!==k||s!==k.version||w!==C.toneMapping)&&(D.material.needsUpdate=!0,t=k,s=k.version,w=C.toneMapping),D.layers.enableAll(),G.unshift(D,D.geometry,D.material,0,0,null)):k&&k.isTexture&&(a===void 0&&(a=new Dg(new cB(2,2),new dg({name:"BackgroundMaterial",uniforms:ZC(Gg.background.uniforms),vertexShader:Gg.background.vertexShader,fragmentShader:Gg.background.fragmentShader,side:ug,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),B.update(a)),a.material.uniforms.t2D.value=k,a.material.uniforms.backgroundIntensity.value=e.backgroundIntensity,a.material.toneMapped=iI.getTransfer(k.colorSpace)!==DI,k.matrixAutoUpdate===!0&&k.updateMatrix(),a.material.uniforms.uvTransform.value.copy(k.matrix),(t!==k||s!==k.version||w!==C.toneMapping)&&(a.material.needsUpdate=!0,t=k,s=k.version,w=C.toneMapping),a.layers.enableAll(),G.unshift(a,a.geometry,a.material,0,0,null))}function M(G,e){G.getRGB(tQ,Ba(C)),g.buffers.color.setClear(tQ.r,tQ.g,tQ.b,e,E)}return{getClearColor:function(){return i},setClearColor:function(G,e=1){i.set(G),o=e,M(i,o)},getClearAlpha:function(){return o},setClearAlpha:function(G){o=G,M(i,o)},render:S}}function lG(C,A,I,g){const B=C.getParameter(C.MAX_VERTEX_ATTRIBS),Q=g.isWebGL2?null:A.get("OES_vertex_array_object"),E=g.isWebGL2||Q!==null,i={},o=G(null);let a=o,D=!1;function t(p,Z,b,X,j){let P=!1;if(E){const BA=M(X,b,Z);a!==BA&&(a=BA,w(a.object)),P=e(p,X,b,j),P&&l(p,X,b,j)}else{const BA=Z.wireframe===!0;(a.geometry!==X.id||a.program!==b.id||a.wireframe!==BA)&&(a.geometry=X.id,a.program=b.id,a.wireframe=BA,P=!0)}j!==null&&I.update(j,C.ELEMENT_ARRAY_BUFFER),(P||D)&&(D=!1,V(p,Z,b,X),j!==null&&C.bindBuffer(C.ELEMENT_ARRAY_BUFFER,I.get(j).buffer))}function s(){return g.isWebGL2?C.createVertexArray():Q.createVertexArrayOES()}function w(p){return g.isWebGL2?C.bindVertexArray(p):Q.bindVertexArrayOES(p)}function S(p){return g.isWebGL2?C.deleteVertexArray(p):Q.deleteVertexArrayOES(p)}function M(p,Z,b){const X=b.wireframe===!0;let j=i[p.id];j===void 0&&(j={},i[p.id]=j);let P=j[Z.id];P===void 0&&(P={},j[Z.id]=P);let BA=P[X];return BA===void 0&&(BA=G(s()),P[X]=BA),BA}function G(p){const Z=[],b=[],X=[];for(let j=0;j<B;j++)Z[j]=0,b[j]=0,X[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:b,attributeDivisors:X,object:p,attributes:{},index:null}}function e(p,Z,b,X){const j=a.attributes,P=Z.attributes;let BA=0;const AA=b.getAttributes();for(const wA in AA)if(AA[wA].location>=0){const yA=j[wA];let v=P[wA];if(v===void 0&&(wA==="instanceMatrix"&&p.instanceMatrix&&(v=p.instanceMatrix),wA==="instanceColor"&&p.instanceColor&&(v=p.instanceColor)),yA===void 0||yA.attribute!==v||v&&yA.data!==v.data)return!0;BA++}return a.attributesNum!==BA||a.index!==X}function l(p,Z,b,X){const j={},P=Z.attributes;let BA=0;const AA=b.getAttributes();for(const wA in AA)if(AA[wA].location>=0){let yA=P[wA];yA===void 0&&(wA==="instanceMatrix"&&p.instanceMatrix&&(yA=p.instanceMatrix),wA==="instanceColor"&&p.instanceColor&&(yA=p.instanceColor));const v={};v.attribute=yA,yA&&yA.data&&(v.data=yA.data),j[wA]=v,BA++}a.attributes=j,a.attributesNum=BA,a.index=X}function k(){const p=a.newAttributes;for(let Z=0,b=p.length;Z<b;Z++)p[Z]=0}function F(p){d(p,0)}function d(p,Z){const b=a.newAttributes,X=a.enabledAttributes,j=a.attributeDivisors;b[p]=1,X[p]===0&&(C.enableVertexAttribArray(p),X[p]=1),j[p]!==Z&&((g.isWebGL2?C:A.get("ANGLE_instanced_arrays"))[g.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](p,Z),j[p]=Z)}function q(){const p=a.newAttributes,Z=a.enabledAttributes;for(let b=0,X=Z.length;b<X;b++)Z[b]!==p[b]&&(C.disableVertexAttribArray(b),Z[b]=0)}function J(p,Z,b,X,j,P,BA){BA===!0?C.vertexAttribIPointer(p,Z,b,j,P):C.vertexAttribPointer(p,Z,b,X,j,P)}function V(p,Z,b,X){if(g.isWebGL2===!1&&(p.isInstancedMesh||X.isInstancedBufferGeometry)&&A.get("ANGLE_instanced_arrays")===null)return;k();const j=X.attributes,P=b.getAttributes(),BA=Z.defaultAttributeValues;for(const AA in P){const wA=P[AA];if(wA.location>=0){let yA=j[AA];if(yA===void 0&&(AA==="instanceMatrix"&&p.instanceMatrix&&(yA=p.instanceMatrix),AA==="instanceColor"&&p.instanceColor&&(yA=p.instanceColor)),yA!==void 0){const v=yA.normalized,iA=yA.itemSize,sA=I.get(yA);if(sA===void 0)continue;const FA=sA.buffer,RA=sA.type,rA=sA.bytesPerElement,AI=g.isWebGL2===!0&&(RA===C.INT||RA===C.UNSIGNED_INT||yA.gpuType===Pi);if(yA.isInterleavedBufferAttribute){const HA=yA.data,m=HA.stride,NI=yA.offset;if(HA.isInstancedInterleavedBuffer){for(let UA=0;UA<wA.locationSize;UA++)d(wA.location+UA,HA.meshPerAttribute);p.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=HA.meshPerAttribute*HA.count)}else for(let UA=0;UA<wA.locationSize;UA++)F(wA.location+UA);C.bindBuffer(C.ARRAY_BUFFER,FA);for(let UA=0;UA<wA.locationSize;UA++)J(wA.location+UA,iA/wA.locationSize,RA,v,m*rA,(NI+iA/wA.locationSize*UA)*rA,AI)}else{if(yA.isInstancedBufferAttribute){for(let HA=0;HA<wA.locationSize;HA++)d(wA.location+HA,yA.meshPerAttribute);p.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=yA.meshPerAttribute*yA.count)}else for(let HA=0;HA<wA.locationSize;HA++)F(wA.location+HA);C.bindBuffer(C.ARRAY_BUFFER,FA);for(let HA=0;HA<wA.locationSize;HA++)J(wA.location+HA,iA/wA.locationSize,RA,v,iA*rA,iA/wA.locationSize*HA*rA,AI)}}else if(BA!==void 0){const v=BA[AA];if(v!==void 0)switch(v.length){case 2:C.vertexAttrib2fv(wA.location,v);break;case 3:C.vertexAttrib3fv(wA.location,v);break;case 4:C.vertexAttrib4fv(wA.location,v);break;default:C.vertexAttrib1fv(wA.location,v)}}}}q()}function aA(){W();for(const p in i){const Z=i[p];for(const b in Z){const X=Z[b];for(const j in X)S(X[j].object),delete X[j];delete Z[b]}delete i[p]}}function c(p){if(i[p.id]===void 0)return;const Z=i[p.id];for(const b in Z){const X=Z[b];for(const j in X)S(X[j].object),delete X[j];delete Z[b]}delete i[p.id]}function N(p){for(const Z in i){const b=i[Z];if(b[p.id]===void 0)continue;const X=b[p.id];for(const j in X)S(X[j].object),delete X[j];delete b[p.id]}}function W(){EA(),D=!0,a!==o&&(a=o,w(a.object))}function EA(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:t,reset:W,resetDefaultState:EA,dispose:aA,releaseStatesOfGeometry:c,releaseStatesOfProgram:N,initAttributes:k,enableAttribute:F,disableUnusedAttributes:q}}function UG(C,A,I,g){const B=g.isWebGL2;let Q;function E(D){Q=D}function i(D,t){C.drawArrays(Q,D,t),I.update(t,Q,1)}function o(D,t,s){if(s===0)return;let w,S;if(B)w=C,S="drawArraysInstanced";else if(w=A.get("ANGLE_instanced_arrays"),S="drawArraysInstancedANGLE",w===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}w[S](Q,D,t,s),I.update(t,Q,s)}function a(D,t,s){if(s===0)return;const w=A.get("WEBGL_multi_draw");if(w===null)for(let S=0;S<s;S++)this.render(D[S],t[S]);else{w.multiDrawArraysWEBGL(Q,D,0,t,0,s);let S=0;for(let M=0;M<s;M++)S+=t[M];I.update(S,Q,1)}}this.setMode=E,this.render=i,this.renderInstances=o,this.renderMultiDraw=a}function KG(C,A,I){let g;function B(){if(g!==void 0)return g;if(A.has("EXT_texture_filter_anisotropic")===!0){const J=A.get("EXT_texture_filter_anisotropic");g=C.getParameter(J.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else g=0;return g}function Q(J){if(J==="highp"){if(C.getShaderPrecisionFormat(C.VERTEX_SHADER,C.HIGH_FLOAT).precision>0&&C.getShaderPrecisionFormat(C.FRAGMENT_SHADER,C.HIGH_FLOAT).precision>0)return"highp";J="mediump"}return J==="mediump"&&C.getShaderPrecisionFormat(C.VERTEX_SHADER,C.MEDIUM_FLOAT).precision>0&&C.getShaderPrecisionFormat(C.FRAGMENT_SHADER,C.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const E=typeof WebGL2RenderingContext<"u"&&C.constructor.name==="WebGL2RenderingContext";let i=I.precision!==void 0?I.precision:"highp";const o=Q(i);o!==i&&(console.warn("THREE.WebGLRenderer:",i,"not supported, using",o,"instead."),i=o);const a=E||A.has("WEBGL_draw_buffers"),D=I.logarithmicDepthBuffer===!0,t=C.getParameter(C.MAX_TEXTURE_IMAGE_UNITS),s=C.getParameter(C.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=C.getParameter(C.MAX_TEXTURE_SIZE),S=C.getParameter(C.MAX_CUBE_MAP_TEXTURE_SIZE),M=C.getParameter(C.MAX_VERTEX_ATTRIBS),G=C.getParameter(C.MAX_VERTEX_UNIFORM_VECTORS),e=C.getParameter(C.MAX_VARYING_VECTORS),l=C.getParameter(C.MAX_FRAGMENT_UNIFORM_VECTORS),k=s>0,F=E||A.has("OES_texture_float"),d=k&&F,q=E?C.getParameter(C.MAX_SAMPLES):0;return{isWebGL2:E,drawBuffers:a,getMaxAnisotropy:B,getMaxPrecision:Q,precision:i,logarithmicDepthBuffer:D,maxTextures:t,maxVertexTextures:s,maxTextureSize:w,maxCubemapSize:S,maxAttributes:M,maxVertexUniforms:G,maxVaryings:e,maxFragmentUniforms:l,vertexTextures:k,floatFragmentTextures:F,floatVertexTextures:d,maxSamples:q}}function NG(C){const A=this;let I=null,g=0,B=!1,Q=!1;const E=new jg,i=new jA,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(t,s){const w=t.length!==0||s||g!==0||B;return B=s,g=t.length,w},this.beginShadows=function(){Q=!0,D(null)},this.endShadows=function(){Q=!1},this.setGlobalState=function(t,s){I=D(t,s,0)},this.setState=function(t,s,w){const S=t.clippingPlanes,M=t.clipIntersection,G=t.clipShadows,e=C.get(t);if(!B||S===null||S.length===0||Q&&!G)Q?D(null):a();else{const l=Q?0:g,k=l*4;let F=e.clippingState||null;o.value=F,F=D(S,s,k,w);for(let d=0;d!==k;++d)F[d]=I[d];e.clippingState=F,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=l}};function a(){o.value!==I&&(o.value=I,o.needsUpdate=g>0),A.numPlanes=g,A.numIntersection=0}function D(t,s,w,S){const M=t!==null?t.length:0;let G=null;if(M!==0){if(G=o.value,S!==!0||G===null){const e=w+M*4,l=s.matrixWorldInverse;i.getNormalMatrix(l),(G===null||G.length<e)&&(G=new Float32Array(e));for(let k=0,F=w;k!==M;++k,F+=4)E.copy(t[k]).applyMatrix4(l,i),E.normal.toArray(G,F),G[F+3]=E.constant}o.value=G,o.needsUpdate=!0}return A.numPlanes=M,A.numIntersection=0,G}}function JG(C){let A=new WeakMap;function I(E,i){return i===CE?E.mapping=lC:i===BE&&(E.mapping=UC),E}function g(E){if(E&&E.isTexture){const i=E.mapping;if(i===CE||i===BE)if(A.has(E)){const o=A.get(E).texture;return I(o,E.mapping)}else{const o=E.image;if(o&&o.height>0){const a=new Tt(o.height);return a.fromEquirectangularTexture(C,E),A.set(E,a),E.addEventListener("dispose",B),I(a.texture,E.mapping)}else return null}}return E}function B(E){const i=E.target;i.removeEventListener("dispose",B);const o=A.get(i);o!==void 0&&(A.delete(i),o.dispose())}function Q(){A=new WeakMap}return{get:g,dispose:Q}}class aa extends LE{constructor(A=-1,I=1,g=1,B=-1,Q=.1,E=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=I,this.top=g,this.bottom=B,this.near=Q,this.far=E,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,I,g,B,Q,E){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=B,this.view.width=Q,this.view.height=E,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),I=(this.top-this.bottom)/(2*this.zoom),g=(this.right+this.left)/2,B=(this.top+this.bottom)/2;let Q=g-A,E=g+A,i=B+I,o=B-I;if(this.view!==null&&this.view.enabled){const a=(this.right-this.left)/this.view.fullWidth/this.zoom,D=(this.top-this.bottom)/this.view.fullHeight/this.zoom;Q+=a*this.view.offsetX,E=Q+a*this.view.width,i-=D*this.view.offsetY,o=i-D*this.view.height}this.projectionMatrix.makeOrthographic(Q,E,i,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.zoom=this.zoom,I.object.left=this.left,I.object.right=this.right,I.object.top=this.top,I.object.bottom=this.bottom,I.object.near=this.near,I.object.far=this.far,this.view!==null&&(I.object.view=Object.assign({},this.view)),I}}const jC=4,Da=[.125,.215,.35,.446,.526,.582],hC=20,mE=new aa,ea=new _A;let fE=null,TE=0,xE=0;const GC=(1+Math.sqrt(5))/2,VC=1/GC,ta=[new Y(1,1,1),new Y(-1,1,1),new Y(1,1,-1),new Y(-1,1,-1),new Y(0,GC,VC),new Y(0,GC,-VC),new Y(VC,0,GC),new Y(-VC,0,GC),new Y(GC,VC,0),new Y(-GC,VC,0)];class sa{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,I=0,g=.1,B=100){fE=this._renderer.getRenderTarget(),TE=this._renderer.getActiveCubeFace(),xE=this._renderer.getActiveMipmapLevel(),this._setSize(256);const Q=this._allocateTargets();return Q.depthBuffer=!0,this._sceneToCubeUV(A,g,B,Q),I>0&&this._blur(Q,0,0,I),this._applyPMREM(Q),this._cleanup(Q),Q}fromEquirectangular(A,I=null){return this._fromTexture(A,I)}fromCubemap(A,I=null){return this._fromTexture(A,I)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ga(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(fE,TE,xE),A.scissorTest=!1,sQ(A,0,0,A.width,A.height)}_fromTexture(A,I){A.mapping===lC||A.mapping===UC?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),fE=this._renderer.getRenderTarget(),TE=this._renderer.getActiveCubeFace(),xE=this._renderer.getActiveMipmapLevel();const g=I||this._allocateTargets();return this._textureToCubeUV(A,g),this._applyPMREM(g),this._cleanup(g),g}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),I=4*this._cubeSize,g={magFilter:WI,minFilter:WI,generateMipmaps:!1,type:aB,format:Eg,colorSpace:Kg,depthBuffer:!1},B=ha(A,I,g);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A||this._pingPongRenderTarget.height!==I){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ha(A,I,g);const{_lodMax:Q}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=FG(Q)),this._blurMaterial=RG(Q,A,I)}return B}_compileMaterial(A){const I=new Dg(this._lodPlanes[0],A);this._renderer.compile(I,mE)}_sceneToCubeUV(A,I,g,B){const Q=new Ag(90,1,I,g),E=[1,-1,1,1,1,1],i=[1,1,1,-1,-1,-1],o=this._renderer,a=o.autoClear,D=o.toneMapping;o.getClearColor(ea),o.toneMapping=fg,o.autoClear=!1;const t=new Xo({name:"PMREM.Background",side:ZI,depthWrite:!1,depthTest:!1}),s=new Dg(new rB,t);let w=!1;const S=A.background;S?S.isColor&&(t.color.copy(S),A.background=null,w=!0):(t.color.copy(ea),w=!0);for(let M=0;M<6;M++){const G=M%3;G===0?(Q.up.set(0,E[M],0),Q.lookAt(i[M],0,0)):G===1?(Q.up.set(0,0,E[M]),Q.lookAt(0,i[M],0)):(Q.up.set(0,E[M],0),Q.lookAt(0,0,i[M]));const e=this._cubeSize;sQ(B,G*e,M>2?e:0,e,e),o.setRenderTarget(B),w&&o.render(s,Q),o.render(A,Q)}s.geometry.dispose(),s.material.dispose(),o.toneMapping=D,o.autoClear=a,A.background=S}_textureToCubeUV(A,I){const g=this._renderer,B=A.mapping===lC||A.mapping===UC;B?(this._cubemapMaterial===null&&(this._cubemapMaterial=wa()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ga());const Q=B?this._cubemapMaterial:this._equirectMaterial,E=new Dg(this._lodPlanes[0],Q),i=Q.uniforms;i.envMap.value=A;const o=this._cubeSize;sQ(I,0,0,3*o,2*o),g.setRenderTarget(I),g.render(E,mE)}_applyPMREM(A){const I=this._renderer,g=I.autoClear;I.autoClear=!1;for(let B=1;B<this._lodPlanes.length;B++){const Q=Math.sqrt(this._sigmas[B]*this._sigmas[B]-this._sigmas[B-1]*this._sigmas[B-1]),E=ta[(B-1)%ta.length];this._blur(A,B-1,B,Q,E)}I.autoClear=g}_blur(A,I,g,B,Q){const E=this._pingPongRenderTarget;this._halfBlur(A,E,I,g,B,"latitudinal",Q),this._halfBlur(E,A,g,g,B,"longitudinal",Q)}_halfBlur(A,I,g,B,Q,E,i){const o=this._renderer,a=this._blurMaterial;E!=="latitudinal"&&E!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const D=3,t=new Dg(this._lodPlanes[B],a),s=a.uniforms,w=this._sizeLods[g]-1,S=isFinite(Q)?Math.PI/(2*w):2*Math.PI/(2*hC-1),M=Q/S,G=isFinite(Q)?1+Math.floor(D*M):hC;G>hC&&console.warn(`sigmaRadians, ${Q}, is too large and will clip, as it requested ${G} samples when the maximum is set to ${hC}`);const e=[];let l=0;for(let J=0;J<hC;++J){const V=J/M,aA=Math.exp(-V*V/2);e.push(aA),J===0?l+=aA:J<G&&(l+=2*aA)}for(let J=0;J<e.length;J++)e[J]=e[J]/l;s.envMap.value=A.texture,s.samples.value=G,s.weights.value=e,s.latitudinal.value=E==="latitudinal",i&&(s.poleAxis.value=i);const{_lodMax:k}=this;s.dTheta.value=S,s.mipInt.value=k-g;const F=this._sizeLods[B],d=3*F*(B>k-jC?B-k+jC:0),q=4*(this._cubeSize-F);sQ(I,d,q,3*F,2*F),o.setRenderTarget(I),o.render(t,mE)}}function FG(C){const A=[],I=[],g=[];let B=C;const Q=C-jC+1+Da.length;for(let E=0;E<Q;E++){const i=Math.pow(2,B);I.push(i);let o=1/i;E>C-jC?o=Da[E-C+jC-1]:E===0&&(o=0),g.push(o);const a=1/(i-2),D=-a,t=1+a,s=[D,D,t,D,t,t,D,D,t,t,D,t],w=6,S=6,M=3,G=2,e=1,l=new Float32Array(M*S*w),k=new Float32Array(G*S*w),F=new Float32Array(e*S*w);for(let q=0;q<w;q++){const J=q%3*2/3-1,V=q>2?0:-1,aA=[J,V,0,J+2/3,V,0,J+2/3,V+1,0,J,V,0,J+2/3,V+1,0,J,V+1,0];l.set(aA,M*S*q),k.set(s,G*S*q);const c=[q,q,q,q,q,q];F.set(c,e*S*q)}const d=new XI;d.setAttribute("position",new hg(l,M)),d.setAttribute("uv",new hg(k,G)),d.setAttribute("faceIndex",new hg(F,e)),A.push(d),B>jC&&B--}return{lodPlanes:A,sizeLods:I,sigmas:g}}function ha(C,A,I){const g=new oC(C,A,I);return g.texture.mapping=uB,g.texture.name="PMREM.cubeUv",g.scissorTest=!0,g}function sQ(C,A,I,g,B){C.viewport.set(A,I,g,B),C.scissor.set(A,I,g,B)}function RG(C,A,I){const g=new Float32Array(hC),B=new Y(0,1,0);return new dg({name:"SphericalGaussianBlur",defines:{n:hC,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/I,CUBEUV_MAX_MIP:`${C}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:g},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:B}},vertexShader:OE(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mg,depthTest:!1,depthWrite:!1})}function Ga(){return new dg({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:OE(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mg,depthTest:!1,depthWrite:!1})}function wa(){return new dg({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:OE(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mg,depthTest:!1,depthWrite:!1})}function OE(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qG(C){let A=new WeakMap,I=null;function g(i){if(i&&i.isTexture){const o=i.mapping,a=o===CE||o===BE,D=o===lC||o===UC;if(a||D)if(i.isRenderTargetTexture&&i.needsPMREMUpdate===!0){i.needsPMREMUpdate=!1;let t=A.get(i);return I===null&&(I=new sa(C)),t=a?I.fromEquirectangular(i,t):I.fromCubemap(i,t),A.set(i,t),t.texture}else{if(A.has(i))return A.get(i).texture;{const t=i.image;if(a&&t&&t.height>0||D&&t&&B(t)){I===null&&(I=new sa(C));const s=a?I.fromEquirectangular(i):I.fromCubemap(i);return A.set(i,s),i.addEventListener("dispose",Q),s.texture}else return null}}}return i}function B(i){let o=0;const a=6;for(let D=0;D<a;D++)i[D]!==void 0&&o++;return o===a}function Q(i){const o=i.target;o.removeEventListener("dispose",Q);const a=A.get(o);a!==void 0&&(A.delete(o),a.dispose())}function E(){A=new WeakMap,I!==null&&(I.dispose(),I=null)}return{get:g,dispose:E}}function pG(C){const A={};function I(g){if(A[g]!==void 0)return A[g];let B;switch(g){case"WEBGL_depth_texture":B=C.getExtension("WEBGL_depth_texture")||C.getExtension("MOZ_WEBGL_depth_texture")||C.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":B=C.getExtension("EXT_texture_filter_anisotropic")||C.getExtension("MOZ_EXT_texture_filter_anisotropic")||C.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":B=C.getExtension("WEBGL_compressed_texture_s3tc")||C.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||C.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":B=C.getExtension("WEBGL_compressed_texture_pvrtc")||C.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:B=C.getExtension(g)}return A[g]=B,B}return{has:function(g){return I(g)!==null},init:function(g){g.isWebGL2?(I("EXT_color_buffer_float"),I("WEBGL_clip_cull_distance")):(I("WEBGL_depth_texture"),I("OES_texture_float"),I("OES_texture_half_float"),I("OES_texture_half_float_linear"),I("OES_standard_derivatives"),I("OES_element_index_uint"),I("OES_vertex_array_object"),I("ANGLE_instanced_arrays")),I("OES_texture_float_linear"),I("EXT_color_buffer_half_float"),I("WEBGL_multisampled_render_to_texture")},get:function(g){const B=I(g);return B===null&&console.warn("THREE.WebGLRenderer: "+g+" extension not supported."),B}}}function dG(C,A,I,g){const B={},Q=new WeakMap;function E(t){const s=t.target;s.index!==null&&A.remove(s.index);for(const S in s.attributes)A.remove(s.attributes[S]);for(const S in s.morphAttributes){const M=s.morphAttributes[S];for(let G=0,e=M.length;G<e;G++)A.remove(M[G])}s.removeEventListener("dispose",E),delete B[s.id];const w=Q.get(s);w&&(A.remove(w),Q.delete(s)),g.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,I.memory.geometries--}function i(t,s){return B[s.id]===!0||(s.addEventListener("dispose",E),B[s.id]=!0,I.memory.geometries++),s}function o(t){const s=t.attributes;for(const S in s)A.update(s[S],C.ARRAY_BUFFER);const w=t.morphAttributes;for(const S in w){const M=w[S];for(let G=0,e=M.length;G<e;G++)A.update(M[G],C.ARRAY_BUFFER)}}function a(t){const s=[],w=t.index,S=t.attributes.position;let M=0;if(w!==null){const l=w.array;M=w.version;for(let k=0,F=l.length;k<F;k+=3){const d=l[k+0],q=l[k+1],J=l[k+2];s.push(d,q,q,J,J,d)}}else if(S!==void 0){const l=S.array;M=S.version;for(let k=0,F=l.length/3-1;k<F;k+=3){const d=k+0,q=k+1,J=k+2;s.push(d,q,q,J,J,d)}}else return;const G=new(po(s)?zo:_o)(s,1);G.version=M;const e=Q.get(t);e&&A.remove(e),Q.set(t,G)}function D(t){const s=Q.get(t);if(s){const w=t.index;w!==null&&s.version<w.version&&a(t)}else a(t);return Q.get(t)}return{get:i,update:o,getWireframeAttribute:D}}function YG(C,A,I,g){const B=g.isWebGL2;let Q;function E(w){Q=w}let i,o;function a(w){i=w.type,o=w.bytesPerElement}function D(w,S){C.drawElements(Q,S,i,w*o),I.update(S,Q,1)}function t(w,S,M){if(M===0)return;let G,e;if(B)G=C,e="drawElementsInstanced";else if(G=A.get("ANGLE_instanced_arrays"),e="drawElementsInstancedANGLE",G===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}G[e](Q,S,i,w*o,M),I.update(S,Q,M)}function s(w,S,M){if(M===0)return;const G=A.get("WEBGL_multi_draw");if(G===null)for(let e=0;e<M;e++)this.render(w[e]/o,S[e]);else{G.multiDrawElementsWEBGL(Q,S,0,i,w,0,M);let e=0;for(let l=0;l<M;l++)e+=S[l];I.update(e,Q,1)}}this.setMode=E,this.setIndex=a,this.render=D,this.renderInstances=t,this.renderMultiDraw=s}function LG(C){const A={geometries:0,textures:0},I={frame:0,calls:0,triangles:0,points:0,lines:0};function g(Q,E,i){switch(I.calls++,E){case C.TRIANGLES:I.triangles+=i*(Q/3);break;case C.LINES:I.lines+=i*(Q/2);break;case C.LINE_STRIP:I.lines+=i*(Q-1);break;case C.LINE_LOOP:I.lines+=i*Q;break;case C.POINTS:I.points+=i*Q;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",E);break}}function B(){I.calls=0,I.triangles=0,I.points=0,I.lines=0}return{memory:A,render:I,programs:null,autoReset:!0,reset:B,update:g}}function HG(C,A){return C[0]-A[0]}function uG(C,A){return Math.abs(A[1])-Math.abs(C[1])}function mG(C,A,I){const g={},B=new Float32Array(8),Q=new WeakMap,E=new FI,i=[];for(let a=0;a<8;a++)i[a]=[a,0];function o(a,D,t){const s=a.morphTargetInfluences;if(A.isWebGL2===!0){const w=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,S=w!==void 0?w.length:0;let M=Q.get(D);if(M===void 0||M.count!==S){let l=function(){EA.dispose(),Q.delete(D),D.removeEventListener("dispose",l)};M!==void 0&&M.texture.dispose();const k=D.morphAttributes.position!==void 0,F=D.morphAttributes.normal!==void 0,d=D.morphAttributes.color!==void 0,q=D.morphAttributes.position||[],J=D.morphAttributes.normal||[],V=D.morphAttributes.color||[];let aA=0;k===!0&&(aA=1),F===!0&&(aA=2),d===!0&&(aA=3);let c=D.attributes.position.count*aA,N=1;c>A.maxTextureSize&&(N=Math.ceil(c/A.maxTextureSize),c=A.maxTextureSize);const W=new Float32Array(c*N*4*S),EA=new fo(W,c,N,S);EA.type=Ug,EA.needsUpdate=!0;const p=aA*4;for(let Z=0;Z<S;Z++){const b=q[Z],X=J[Z],j=V[Z],P=c*N*4*Z;for(let BA=0;BA<b.count;BA++){const AA=BA*p;k===!0&&(E.fromBufferAttribute(b,BA),W[P+AA+0]=E.x,W[P+AA+1]=E.y,W[P+AA+2]=E.z,W[P+AA+3]=0),F===!0&&(E.fromBufferAttribute(X,BA),W[P+AA+4]=E.x,W[P+AA+5]=E.y,W[P+AA+6]=E.z,W[P+AA+7]=0),d===!0&&(E.fromBufferAttribute(j,BA),W[P+AA+8]=E.x,W[P+AA+9]=E.y,W[P+AA+10]=E.z,W[P+AA+11]=j.itemSize===4?E.w:1)}}M={count:S,texture:EA,size:new LA(c,N)},Q.set(D,M),D.addEventListener("dispose",l)}let G=0;for(let l=0;l<s.length;l++)G+=s[l];const e=D.morphTargetsRelative?1:1-G;t.getUniforms().setValue(C,"morphTargetBaseInfluence",e),t.getUniforms().setValue(C,"morphTargetInfluences",s),t.getUniforms().setValue(C,"morphTargetsTexture",M.texture,I),t.getUniforms().setValue(C,"morphTargetsTextureSize",M.size)}else{const w=s===void 0?0:s.length;let S=g[D.id];if(S===void 0||S.length!==w){S=[];for(let k=0;k<w;k++)S[k]=[k,0];g[D.id]=S}for(let k=0;k<w;k++){const F=S[k];F[0]=k,F[1]=s[k]}S.sort(uG);for(let k=0;k<8;k++)k<w&&S[k][1]?(i[k][0]=S[k][0],i[k][1]=S[k][1]):(i[k][0]=Number.MAX_SAFE_INTEGER,i[k][1]=0);i.sort(HG);const M=D.morphAttributes.position,G=D.morphAttributes.normal;let e=0;for(let k=0;k<8;k++){const F=i[k],d=F[0],q=F[1];d!==Number.MAX_SAFE_INTEGER&&q?(M&&D.getAttribute("morphTarget"+k)!==M[d]&&D.setAttribute("morphTarget"+k,M[d]),G&&D.getAttribute("morphNormal"+k)!==G[d]&&D.setAttribute("morphNormal"+k,G[d]),B[k]=q,e+=q):(M&&D.hasAttribute("morphTarget"+k)===!0&&D.deleteAttribute("morphTarget"+k),G&&D.hasAttribute("morphNormal"+k)===!0&&D.deleteAttribute("morphNormal"+k),B[k]=0)}const l=D.morphTargetsRelative?1:1-e;t.getUniforms().setValue(C,"morphTargetBaseInfluence",l),t.getUniforms().setValue(C,"morphTargetInfluences",B)}}return{update:o}}function fG(C,A,I,g){let B=new WeakMap;function Q(o){const a=g.render.frame,D=o.geometry,t=A.get(o,D);if(B.get(t)!==a&&(A.update(t),B.set(t,a)),o.isInstancedMesh&&(o.hasEventListener("dispose",i)===!1&&o.addEventListener("dispose",i),B.get(o)!==a&&(I.update(o.instanceMatrix,C.ARRAY_BUFFER),o.instanceColor!==null&&I.update(o.instanceColor,C.ARRAY_BUFFER),B.set(o,a))),o.isSkinnedMesh){const s=o.skeleton;B.get(s)!==a&&(s.update(),B.set(s,a))}return t}function E(){B=new WeakMap}function i(o){const a=o.target;a.removeEventListener("dispose",i),I.remove(a.instanceMatrix),a.instanceColor!==null&&I.remove(a.instanceColor)}return{update:Q,dispose:E}}class Sa extends PI{constructor(A,I,g,B,Q,E,i,o,a,D){if(D=D!==void 0?D:QC,D!==QC&&D!==KC)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");g===void 0&&D===QC&&(g=xg),g===void 0&&D===KC&&(g=BC),super(null,B,Q,E,i,o,D,g,a),this.isDepthTexture=!0,this.image={width:A,height:I},this.magFilter=i!==void 0?i:xI,this.minFilter=o!==void 0?o:xI,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(A){return super.copy(A),this.compareFunction=A.compareFunction,this}toJSON(A){const I=super.toJSON(A);return this.compareFunction!==null&&(I.compareFunction=this.compareFunction),I}}const ra=new PI,ca=new Sa(1,1);ca.compareFunction=Jo;const ka=new fo,Ma=new nt,ya=new ia,na=[],la=[],Ua=new Float32Array(16),Ka=new Float32Array(9),Na=new Float32Array(4);function XC(C,A,I){const g=C[0];if(g<=0||g>0)return C;const B=A*I;let Q=na[B];if(Q===void 0&&(Q=new Float32Array(B),na[B]=Q),A!==0){g.toArray(Q,0);for(let E=1,i=0;E!==A;++E)i+=I,C[E].toArray(Q,i)}return Q}function nI(C,A){if(C.length!==A.length)return!1;for(let I=0,g=C.length;I<g;I++)if(C[I]!==A[I])return!1;return!0}function lI(C,A){for(let I=0,g=A.length;I<g;I++)C[I]=A[I]}function hQ(C,A){let I=la[A];I===void 0&&(I=new Int32Array(A),la[A]=I);for(let g=0;g!==A;++g)I[g]=C.allocateTextureUnit();return I}function TG(C,A){const I=this.cache;I[0]!==A&&(C.uniform1f(this.addr,A),I[0]=A)}function xG(C,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(C.uniform2f(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(nI(I,A))return;C.uniform2fv(this.addr,A),lI(I,A)}}function OG(C,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(C.uniform3f(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else if(A.r!==void 0)(I[0]!==A.r||I[1]!==A.g||I[2]!==A.b)&&(C.uniform3f(this.addr,A.r,A.g,A.b),I[0]=A.r,I[1]=A.g,I[2]=A.b);else{if(nI(I,A))return;C.uniform3fv(this.addr,A),lI(I,A)}}function bG(C,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(C.uniform4f(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(nI(I,A))return;C.uniform4fv(this.addr,A),lI(I,A)}}function vG(C,A){const I=this.cache,g=A.elements;if(g===void 0){if(nI(I,A))return;C.uniformMatrix2fv(this.addr,!1,A),lI(I,A)}else{if(nI(I,g))return;Na.set(g),C.uniformMatrix2fv(this.addr,!1,Na),lI(I,g)}}function ZG(C,A){const I=this.cache,g=A.elements;if(g===void 0){if(nI(I,A))return;C.uniformMatrix3fv(this.addr,!1,A),lI(I,A)}else{if(nI(I,g))return;Ka.set(g),C.uniformMatrix3fv(this.addr,!1,Ka),lI(I,g)}}function WG(C,A){const I=this.cache,g=A.elements;if(g===void 0){if(nI(I,A))return;C.uniformMatrix4fv(this.addr,!1,A),lI(I,A)}else{if(nI(I,g))return;Ua.set(g),C.uniformMatrix4fv(this.addr,!1,Ua),lI(I,g)}}function PG(C,A){const I=this.cache;I[0]!==A&&(C.uniform1i(this.addr,A),I[0]=A)}function jG(C,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(C.uniform2i(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(nI(I,A))return;C.uniform2iv(this.addr,A),lI(I,A)}}function VG(C,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(C.uniform3i(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(nI(I,A))return;C.uniform3iv(this.addr,A),lI(I,A)}}function XG(C,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(C.uniform4i(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(nI(I,A))return;C.uniform4iv(this.addr,A),lI(I,A)}}function _G(C,A){const I=this.cache;I[0]!==A&&(C.uniform1ui(this.addr,A),I[0]=A)}function zG(C,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(C.uniform2ui(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(nI(I,A))return;C.uniform2uiv(this.addr,A),lI(I,A)}}function $G(C,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(C.uniform3ui(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(nI(I,A))return;C.uniform3uiv(this.addr,A),lI(I,A)}}function Aw(C,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(C.uniform4ui(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(nI(I,A))return;C.uniform4uiv(this.addr,A),lI(I,A)}}function Iw(C,A,I){const g=this.cache,B=I.allocateTextureUnit();g[0]!==B&&(C.uniform1i(this.addr,B),g[0]=B);const Q=this.type===C.SAMPLER_2D_SHADOW?ca:ra;I.setTexture2D(A||Q,B)}function gw(C,A,I){const g=this.cache,B=I.allocateTextureUnit();g[0]!==B&&(C.uniform1i(this.addr,B),g[0]=B),I.setTexture3D(A||Ma,B)}function Cw(C,A,I){const g=this.cache,B=I.allocateTextureUnit();g[0]!==B&&(C.uniform1i(this.addr,B),g[0]=B),I.setTextureCube(A||ya,B)}function Bw(C,A,I){const g=this.cache,B=I.allocateTextureUnit();g[0]!==B&&(C.uniform1i(this.addr,B),g[0]=B),I.setTexture2DArray(A||ka,B)}function Qw(C){switch(C){case 5126:return TG;case 35664:return xG;case 35665:return OG;case 35666:return bG;case 35674:return vG;case 35675:return ZG;case 35676:return WG;case 5124:case 35670:return PG;case 35667:case 35671:return jG;case 35668:case 35672:return VG;case 35669:case 35673:return XG;case 5125:return _G;case 36294:return zG;case 36295:return $G;case 36296:return Aw;case 35678:case 36198:case 36298:case 36306:case 35682:return Iw;case 35679:case 36299:case 36307:return gw;case 35680:case 36300:case 36308:case 36293:return Cw;case 36289:case 36303:case 36311:case 36292:return Bw}}function Ew(C,A){C.uniform1fv(this.addr,A)}function iw(C,A){const I=XC(A,this.size,2);C.uniform2fv(this.addr,I)}function ow(C,A){const I=XC(A,this.size,3);C.uniform3fv(this.addr,I)}function aw(C,A){const I=XC(A,this.size,4);C.uniform4fv(this.addr,I)}function Dw(C,A){const I=XC(A,this.size,4);C.uniformMatrix2fv(this.addr,!1,I)}function ew(C,A){const I=XC(A,this.size,9);C.uniformMatrix3fv(this.addr,!1,I)}function tw(C,A){const I=XC(A,this.size,16);C.uniformMatrix4fv(this.addr,!1,I)}function sw(C,A){C.uniform1iv(this.addr,A)}function hw(C,A){C.uniform2iv(this.addr,A)}function Gw(C,A){C.uniform3iv(this.addr,A)}function ww(C,A){C.uniform4iv(this.addr,A)}function Sw(C,A){C.uniform1uiv(this.addr,A)}function rw(C,A){C.uniform2uiv(this.addr,A)}function cw(C,A){C.uniform3uiv(this.addr,A)}function kw(C,A){C.uniform4uiv(this.addr,A)}function Mw(C,A,I){const g=this.cache,B=A.length,Q=hQ(I,B);nI(g,Q)||(C.uniform1iv(this.addr,Q),lI(g,Q));for(let E=0;E!==B;++E)I.setTexture2D(A[E]||ra,Q[E])}function yw(C,A,I){const g=this.cache,B=A.length,Q=hQ(I,B);nI(g,Q)||(C.uniform1iv(this.addr,Q),lI(g,Q));for(let E=0;E!==B;++E)I.setTexture3D(A[E]||Ma,Q[E])}function nw(C,A,I){const g=this.cache,B=A.length,Q=hQ(I,B);nI(g,Q)||(C.uniform1iv(this.addr,Q),lI(g,Q));for(let E=0;E!==B;++E)I.setTextureCube(A[E]||ya,Q[E])}function lw(C,A,I){const g=this.cache,B=A.length,Q=hQ(I,B);nI(g,Q)||(C.uniform1iv(this.addr,Q),lI(g,Q));for(let E=0;E!==B;++E)I.setTexture2DArray(A[E]||ka,Q[E])}function Uw(C){switch(C){case 5126:return Ew;case 35664:return iw;case 35665:return ow;case 35666:return aw;case 35674:return Dw;case 35675:return ew;case 35676:return tw;case 5124:case 35670:return sw;case 35667:case 35671:return hw;case 35668:case 35672:return Gw;case 35669:case 35673:return ww;case 5125:return Sw;case 36294:return rw;case 36295:return cw;case 36296:return kw;case 35678:case 36198:case 36298:case 36306:case 35682:return Mw;case 35679:case 36299:case 36307:return yw;case 35680:case 36300:case 36308:case 36293:return nw;case 36289:case 36303:case 36311:case 36292:return lw}}class Kw{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.type=I.type,this.setValue=Qw(I.type)}}class Nw{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.type=I.type,this.size=I.size,this.setValue=Uw(I.type)}}class Jw{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,I,g){const B=this.seq;for(let Q=0,E=B.length;Q!==E;++Q){const i=B[Q];i.setValue(A,I[i.id],g)}}}const bE=/(\w+)(\])?(\[|\.)?/g;function Ja(C,A){C.seq.push(A),C.map[A.id]=A}function Fw(C,A,I){const g=C.name,B=g.length;for(bE.lastIndex=0;;){const Q=bE.exec(g),E=bE.lastIndex;let i=Q[1];const o=Q[2]==="]",a=Q[3];if(o&&(i=i|0),a===void 0||a==="["&&E+2===B){Ja(I,a===void 0?new Kw(i,C,A):new Nw(i,C,A));break}else{let D=I.map[i];D===void 0&&(D=new Jw(i),Ja(I,D)),I=D}}}class GQ{constructor(A,I){this.seq=[],this.map={};const g=A.getProgramParameter(I,A.ACTIVE_UNIFORMS);for(let B=0;B<g;++B){const Q=A.getActiveUniform(I,B),E=A.getUniformLocation(I,Q.name);Fw(Q,E,this)}}setValue(A,I,g,B){const Q=this.map[I];Q!==void 0&&Q.setValue(A,g,B)}setOptional(A,I,g){const B=I[g];B!==void 0&&this.setValue(A,g,B)}static upload(A,I,g,B){for(let Q=0,E=I.length;Q!==E;++Q){const i=I[Q],o=g[i.id];o.needsUpdate!==!1&&i.setValue(A,o.value,B)}}static seqWithValue(A,I){const g=[];for(let B=0,Q=A.length;B!==Q;++B){const E=A[B];E.id in I&&g.push(E)}return g}}function Fa(C,A,I){const g=C.createShader(A);return C.shaderSource(g,I),C.compileShader(g),g}const Rw=37297;let qw=0;function pw(C,A){const I=C.split(`
`),g=[],B=Math.max(A-6,0),Q=Math.min(A+6,I.length);for(let E=B;E<Q;E++){const i=E+1;g.push(`${i===A?">":" "} ${i}: ${I[E]}`)}return g.join(`
`)}function dw(C){const A=iI.getPrimaries(iI.workingColorSpace),I=iI.getPrimaries(C);let g;switch(A===I?g="":A===xB&&I===TB?g="LinearDisplayP3ToLinearSRGB":A===TB&&I===xB&&(g="LinearSRGBToLinearDisplayP3"),C){case Kg:case mB:return[g,"LinearTransferOETF"];case dI:case hE:return[g,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",C),[g,"LinearTransferOETF"]}}function Ra(C,A,I){const g=C.getShaderParameter(A,C.COMPILE_STATUS),B=C.getShaderInfoLog(A).trim();if(g&&B==="")return"";const Q=/ERROR: 0:(\d+)/.exec(B);if(Q){const E=parseInt(Q[1]);return I.toUpperCase()+`

`+B+`

`+pw(C.getShaderSource(A),E)}else return B}function Yw(C,A){const I=dw(A);return`vec4 ${C}( vec4 value ) { return ${I[0]}( ${I[1]}( value ) ); }`}function Lw(C,A){let I;switch(A){case de:I="Linear";break;case Ye:I="Reinhard";break;case Le:I="OptimizedCineon";break;case He:I="ACESFilmic";break;case me:I="AgX";break;case ue:I="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),I="Linear"}return"vec3 "+C+"( vec3 color ) { return "+I+"ToneMapping( color ); }"}function Hw(C){return[C.extensionDerivatives||C.envMapCubeUVHeight||C.bumpMap||C.normalMapTangentSpace||C.clearcoatNormalMap||C.flatShading||C.alphaToCoverage||C.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(C.extensionFragDepth||C.logarithmicDepthBuffer)&&C.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",C.extensionDrawBuffers&&C.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(C.extensionShaderTextureLOD||C.envMap||C.transmission)&&C.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(_C).join(`
`)}function uw(C){return[C.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",C.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_C).join(`
`)}function mw(C){const A=[];for(const I in C){const g=C[I];g!==!1&&A.push("#define "+I+" "+g)}return A.join(`
`)}function fw(C,A){const I={},g=C.getProgramParameter(A,C.ACTIVE_ATTRIBUTES);for(let B=0;B<g;B++){const Q=C.getActiveAttrib(A,B),E=Q.name;let i=1;Q.type===C.FLOAT_MAT2&&(i=2),Q.type===C.FLOAT_MAT3&&(i=3),Q.type===C.FLOAT_MAT4&&(i=4),I[E]={type:Q.type,location:C.getAttribLocation(A,E),locationSize:i}}return I}function _C(C){return C!==""}function qa(C,A){const I=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return C.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,I).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function pa(C,A){return C.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const Tw=/^[ \t]*#include +<([\w\d./]+)>/gm;function vE(C){return C.replace(Tw,Ow)}const xw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Ow(C,A){let I=xA[A];if(I===void 0){const g=xw.get(A);if(g!==void 0)I=xA[g],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',A,g);else throw new Error("Can not resolve #include <"+A+">")}return vE(I)}const bw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function da(C){return C.replace(bw,vw)}function vw(C,A,I,g){let B="";for(let Q=parseInt(A);Q<parseInt(I);Q++)B+=g.replace(/\[\s*i\s*\]/g,"[ "+Q+" ]").replace(/UNROLLED_LOOP_INDEX/g,Q);return B}function Ya(C){let A=`precision ${C.precision} float;
	precision ${C.precision} int;
	precision ${C.precision} sampler2D;
	precision ${C.precision} samplerCube;
	`;return C.isWebGL2&&(A+=`precision ${C.precision} sampler3D;
		precision ${C.precision} sampler2DArray;
		precision ${C.precision} sampler2DShadow;
		precision ${C.precision} samplerCubeShadow;
		precision ${C.precision} sampler2DArrayShadow;
		precision ${C.precision} isampler2D;
		precision ${C.precision} isampler3D;
		precision ${C.precision} isamplerCube;
		precision ${C.precision} isampler2DArray;
		precision ${C.precision} usampler2D;
		precision ${C.precision} usampler3D;
		precision ${C.precision} usamplerCube;
		precision ${C.precision} usampler2DArray;
		`),C.precision==="highp"?A+=`
#define HIGH_PRECISION`:C.precision==="mediump"?A+=`
#define MEDIUM_PRECISION`:C.precision==="lowp"&&(A+=`
#define LOW_PRECISION`),A}function Zw(C){let A="SHADOWMAP_TYPE_BASIC";return C.shadowMapType===fi?A="SHADOWMAP_TYPE_PCF":C.shadowMapType===ie?A="SHADOWMAP_TYPE_PCF_SOFT":C.shadowMapType===lg&&(A="SHADOWMAP_TYPE_VSM"),A}function Ww(C){let A="ENVMAP_TYPE_CUBE";if(C.envMap)switch(C.envMapMode){case lC:case UC:A="ENVMAP_TYPE_CUBE";break;case uB:A="ENVMAP_TYPE_CUBE_UV";break}return A}function Pw(C){let A="ENVMAP_MODE_REFLECTION";if(C.envMap)switch(C.envMapMode){case UC:A="ENVMAP_MODE_REFRACTION";break}return A}function jw(C){let A="ENVMAP_BLENDING_NONE";if(C.envMap)switch(C.combine){case vi:A="ENVMAP_BLENDING_MULTIPLY";break;case qe:A="ENVMAP_BLENDING_MIX";break;case pe:A="ENVMAP_BLENDING_ADD";break}return A}function Vw(C){const A=C.envMapCubeUVHeight;if(A===null)return null;const I=Math.log2(A)-2,g=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,I),7*16)),texelHeight:g,maxMip:I}}function Xw(C,A,I,g){const B=C.getContext(),Q=I.defines;let E=I.vertexShader,i=I.fragmentShader;const o=Zw(I),a=Ww(I),D=Pw(I),t=jw(I),s=Vw(I),w=I.isWebGL2?"":Hw(I),S=uw(I),M=mw(Q),G=B.createProgram();let e,l,k=I.glslVersion?"#version "+I.glslVersion+`
`:"";I.isRawShaderMaterial?(e=["#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,M].filter(_C).join(`
`),e.length>0&&(e+=`
`),l=[w,"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,M].filter(_C).join(`
`),l.length>0&&(l+=`
`)):(e=[Ya(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,M,I.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",I.batching?"#define USE_BATCHING":"",I.instancing?"#define USE_INSTANCING":"",I.instancingColor?"#define USE_INSTANCING_COLOR":"",I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+D:"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.displacementMap?"#define USE_DISPLACEMENTMAP":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropy?"#define USE_ANISOTROPY":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaHash?"#define USE_ALPHAHASH":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.mapUv?"#define MAP_UV "+I.mapUv:"",I.alphaMapUv?"#define ALPHAMAP_UV "+I.alphaMapUv:"",I.lightMapUv?"#define LIGHTMAP_UV "+I.lightMapUv:"",I.aoMapUv?"#define AOMAP_UV "+I.aoMapUv:"",I.emissiveMapUv?"#define EMISSIVEMAP_UV "+I.emissiveMapUv:"",I.bumpMapUv?"#define BUMPMAP_UV "+I.bumpMapUv:"",I.normalMapUv?"#define NORMALMAP_UV "+I.normalMapUv:"",I.displacementMapUv?"#define DISPLACEMENTMAP_UV "+I.displacementMapUv:"",I.metalnessMapUv?"#define METALNESSMAP_UV "+I.metalnessMapUv:"",I.roughnessMapUv?"#define ROUGHNESSMAP_UV "+I.roughnessMapUv:"",I.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+I.anisotropyMapUv:"",I.clearcoatMapUv?"#define CLEARCOATMAP_UV "+I.clearcoatMapUv:"",I.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+I.clearcoatNormalMapUv:"",I.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+I.clearcoatRoughnessMapUv:"",I.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+I.iridescenceMapUv:"",I.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+I.iridescenceThicknessMapUv:"",I.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+I.sheenColorMapUv:"",I.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+I.sheenRoughnessMapUv:"",I.specularMapUv?"#define SPECULARMAP_UV "+I.specularMapUv:"",I.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+I.specularColorMapUv:"",I.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+I.specularIntensityMapUv:"",I.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+I.transmissionMapUv:"",I.thicknessMapUv?"#define THICKNESSMAP_UV "+I.thicknessMapUv:"",I.vertexTangents&&I.flatShading===!1?"#define USE_TANGENT":"",I.vertexColors?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.flatShading?"#define FLAT_SHADED":"",I.skinning?"#define USE_SKINNING":"",I.morphTargets?"#define USE_MORPHTARGETS":"",I.morphNormals&&I.flatShading===!1?"#define USE_MORPHNORMALS":"",I.morphColors&&I.isWebGL2?"#define USE_MORPHCOLORS":"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+I.morphTextureStride:"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_COUNT "+I.morphTargetsCount:"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.sizeAttenuation?"#define USE_SIZEATTENUATION":"",I.numLightProbes>0?"#define USE_LIGHT_PROBES":"",I.useLegacyLights?"#define LEGACY_LIGHTS":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.logarithmicDepthBuffer&&I.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_C).join(`
`),l=[w,Ya(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,M,I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",I.map?"#define USE_MAP":"",I.matcap?"#define USE_MATCAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+a:"",I.envMap?"#define "+D:"",I.envMap?"#define "+t:"",s?"#define CUBEUV_TEXEL_WIDTH "+s.texelWidth:"",s?"#define CUBEUV_TEXEL_HEIGHT "+s.texelHeight:"",s?"#define CUBEUV_MAX_MIP "+s.maxMip+".0":"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropy?"#define USE_ANISOTROPY":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoat?"#define USE_CLEARCOAT":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescence?"#define USE_IRIDESCENCE":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaTest?"#define USE_ALPHATEST":"",I.alphaHash?"#define USE_ALPHAHASH":"",I.sheen?"#define USE_SHEEN":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.vertexTangents&&I.flatShading===!1?"#define USE_TANGENT":"",I.vertexColors||I.instancingColor?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.gradientMap?"#define USE_GRADIENTMAP":"",I.flatShading?"#define FLAT_SHADED":"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",I.numLightProbes>0?"#define USE_LIGHT_PROBES":"",I.useLegacyLights?"#define LEGACY_LIGHTS":"",I.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.logarithmicDepthBuffer&&I.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",I.toneMapping!==fg?"#define TONE_MAPPING":"",I.toneMapping!==fg?xA.tonemapping_pars_fragment:"",I.toneMapping!==fg?Lw("toneMapping",I.toneMapping):"",I.dithering?"#define DITHERING":"",I.opaque?"#define OPAQUE":"",xA.colorspace_pars_fragment,Yw("linearToOutputTexel",I.outputColorSpace),I.useDepthPacking?"#define DEPTH_PACKING "+I.depthPacking:"",`
`].filter(_C).join(`
`)),E=vE(E),E=qa(E,I),E=pa(E,I),i=vE(i),i=qa(i,I),i=pa(i,I),E=da(E),i=da(i),I.isWebGL2&&I.isRawShaderMaterial!==!0&&(k=`#version 300 es
`,e=[S,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+e,l=["precision mediump sampler2DArray;","#define varying in",I.glslVersion===Ro?"":"layout(location = 0) out highp vec4 pc_fragColor;",I.glslVersion===Ro?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+l);const F=k+e+E,d=k+l+i,q=Fa(B,B.VERTEX_SHADER,F),J=Fa(B,B.FRAGMENT_SHADER,d);B.attachShader(G,q),B.attachShader(G,J),I.index0AttributeName!==void 0?B.bindAttribLocation(G,0,I.index0AttributeName):I.morphTargets===!0&&B.bindAttribLocation(G,0,"position"),B.linkProgram(G);function V(W){if(C.debug.checkShaderErrors){const EA=B.getProgramInfoLog(G).trim(),p=B.getShaderInfoLog(q).trim(),Z=B.getShaderInfoLog(J).trim();let b=!0,X=!0;if(B.getProgramParameter(G,B.LINK_STATUS)===!1)if(b=!1,typeof C.debug.onShaderError=="function")C.debug.onShaderError(B,G,q,J);else{const j=Ra(B,q,"vertex"),P=Ra(B,J,"fragment");console.error("THREE.WebGLProgram: Shader Error "+B.getError()+" - VALIDATE_STATUS "+B.getProgramParameter(G,B.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+EA+`
`+j+`
`+P)}else EA!==""?console.warn("THREE.WebGLProgram: Program Info Log:",EA):(p===""||Z==="")&&(X=!1);X&&(W.diagnostics={runnable:b,programLog:EA,vertexShader:{log:p,prefix:e},fragmentShader:{log:Z,prefix:l}})}B.deleteShader(q),B.deleteShader(J),aA=new GQ(B,G),c=fw(B,G)}let aA;this.getUniforms=function(){return aA===void 0&&V(this),aA};let c;this.getAttributes=function(){return c===void 0&&V(this),c};let N=I.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=B.getProgramParameter(G,Rw)),N},this.destroy=function(){g.releaseStatesOfProgram(this),B.deleteProgram(G),this.program=void 0},this.type=I.shaderType,this.name=I.shaderName,this.id=qw++,this.cacheKey=A,this.usedTimes=1,this.program=G,this.vertexShader=q,this.fragmentShader=J,this}let _w=0;class zw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const I=A.vertexShader,g=A.fragmentShader,B=this._getShaderStage(I),Q=this._getShaderStage(g),E=this._getShaderCacheForMaterial(A);return E.has(B)===!1&&(E.add(B),B.usedTimes++),E.has(Q)===!1&&(E.add(Q),Q.usedTimes++),this}remove(A){const I=this.materialCache.get(A);for(const g of I)g.usedTimes--,g.usedTimes===0&&this.shaderCache.delete(g.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const I=this.materialCache;let g=I.get(A);return g===void 0&&(g=new Set,I.set(A,g)),g}_getShaderStage(A){const I=this.shaderCache;let g=I.get(A);return g===void 0&&(g=new $w(A),I.set(A,g)),g}}class $w{constructor(A){this.id=_w++,this.code=A,this.usedTimes=0}}function AS(C,A,I,g,B,Q,E){const i=new bo,o=new zw,a=new Set,D=[],t=B.isWebGL2,s=B.logarithmicDepthBuffer,w=B.vertexTextures;let S=B.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function G(c){return a.add(c),c===0?"uv":`uv${c}`}function e(c,N,W,EA,p){const Z=EA.fog,b=p.geometry,X=c.isMeshStandardMaterial?EA.environment:null,j=(c.isMeshStandardMaterial?I:A).get(c.envMap||X),P=j&&j.mapping===uB?j.image.height:null,BA=M[c.type];c.precision!==null&&(S=B.getMaxPrecision(c.precision),S!==c.precision&&console.warn("THREE.WebGLProgram.getParameters:",c.precision,"not supported, using",S,"instead."));const AA=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,wA=AA!==void 0?AA.length:0;let yA=0;b.morphAttributes.position!==void 0&&(yA=1),b.morphAttributes.normal!==void 0&&(yA=2),b.morphAttributes.color!==void 0&&(yA=3);let v,iA,sA,FA;if(BA){const BI=Gg[BA];v=BI.vertexShader,iA=BI.fragmentShader}else v=c.vertexShader,iA=c.fragmentShader,o.update(c),sA=o.getVertexShaderID(c),FA=o.getFragmentShaderID(c);const RA=C.getRenderTarget(),rA=p.isInstancedMesh===!0,AI=p.isBatchedMesh===!0,HA=!!c.map,m=!!c.matcap,NI=!!j,UA=!!c.aoMap,dA=!!c.lightMap,nA=!!c.bumpMap,eI=!!c.normalMap,mA=!!c.displacementMap,n=!!c.emissiveMap,r=!!c.metalnessMap,f=!!c.roughnessMap,QA=c.anisotropy>0,z=c.clearcoat>0,IA=c.iridescence>0,MA=c.sheen>0,eA=c.transmission>0,hA=QA&&!!c.anisotropyMap,KA=z&&!!c.clearcoatMap,fA=z&&!!c.clearcoatNormalMap,gA=z&&!!c.clearcoatRoughnessMap,CI=IA&&!!c.iridescenceMap,vA=IA&&!!c.iridescenceThicknessMap,YA=MA&&!!c.sheenColorMap,lA=MA&&!!c.sheenRoughnessMap,tA=!!c.specularMap,K=!!c.specularColorMap,_=!!c.specularIntensityMap,GA=eA&&!!c.transmissionMap,cA=eA&&!!c.thicknessMap,bA=!!c.gradientMap,U=!!c.alphaMap,CA=c.alphaTest>0,$=!!c.alphaHash,qA=!!c.extensions;let kA=fg;c.toneMapped&&(RA===null||RA.isXRRenderTarget===!0)&&(kA=C.toneMapping);const ZA={isWebGL2:t,shaderID:BA,shaderType:c.type,shaderName:c.name,vertexShader:v,fragmentShader:iA,defines:c.defines,customVertexShaderID:sA,customFragmentShaderID:FA,isRawShaderMaterial:c.isRawShaderMaterial===!0,glslVersion:c.glslVersion,precision:S,batching:AI,instancing:rA,instancingColor:rA&&p.instanceColor!==null,supportsVertexTextures:w,outputColorSpace:RA===null?C.outputColorSpace:RA.isXRRenderTarget===!0?RA.texture.colorSpace:Kg,alphaToCoverage:!!c.alphaToCoverage,map:HA,matcap:m,envMap:NI,envMapMode:NI&&j.mapping,envMapCubeUVHeight:P,aoMap:UA,lightMap:dA,bumpMap:nA,normalMap:eI,displacementMap:w&&mA,emissiveMap:n,normalMapObjectSpace:eI&&c.normalMapType===Ve,normalMapTangentSpace:eI&&c.normalMapType===Ko,metalnessMap:r,roughnessMap:f,anisotropy:QA,anisotropyMap:hA,clearcoat:z,clearcoatMap:KA,clearcoatNormalMap:fA,clearcoatRoughnessMap:gA,iridescence:IA,iridescenceMap:CI,iridescenceThicknessMap:vA,sheen:MA,sheenColorMap:YA,sheenRoughnessMap:lA,specularMap:tA,specularColorMap:K,specularIntensityMap:_,transmission:eA,transmissionMap:GA,thicknessMap:cA,gradientMap:bA,opaque:c.transparent===!1&&c.blending===nC&&c.alphaToCoverage===!1,alphaMap:U,alphaTest:CA,alphaHash:$,combine:c.combine,mapUv:HA&&G(c.map.channel),aoMapUv:UA&&G(c.aoMap.channel),lightMapUv:dA&&G(c.lightMap.channel),bumpMapUv:nA&&G(c.bumpMap.channel),normalMapUv:eI&&G(c.normalMap.channel),displacementMapUv:mA&&G(c.displacementMap.channel),emissiveMapUv:n&&G(c.emissiveMap.channel),metalnessMapUv:r&&G(c.metalnessMap.channel),roughnessMapUv:f&&G(c.roughnessMap.channel),anisotropyMapUv:hA&&G(c.anisotropyMap.channel),clearcoatMapUv:KA&&G(c.clearcoatMap.channel),clearcoatNormalMapUv:fA&&G(c.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gA&&G(c.clearcoatRoughnessMap.channel),iridescenceMapUv:CI&&G(c.iridescenceMap.channel),iridescenceThicknessMapUv:vA&&G(c.iridescenceThicknessMap.channel),sheenColorMapUv:YA&&G(c.sheenColorMap.channel),sheenRoughnessMapUv:lA&&G(c.sheenRoughnessMap.channel),specularMapUv:tA&&G(c.specularMap.channel),specularColorMapUv:K&&G(c.specularColorMap.channel),specularIntensityMapUv:_&&G(c.specularIntensityMap.channel),transmissionMapUv:GA&&G(c.transmissionMap.channel),thicknessMapUv:cA&&G(c.thicknessMap.channel),alphaMapUv:U&&G(c.alphaMap.channel),vertexTangents:!!b.attributes.tangent&&(eI||QA),vertexColors:c.vertexColors,vertexAlphas:c.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,pointsUvs:p.isPoints===!0&&!!b.attributes.uv&&(HA||U),fog:!!Z,useFog:c.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:c.flatShading===!0,sizeAttenuation:c.sizeAttenuation===!0,logarithmicDepthBuffer:s,skinning:p.isSkinnedMesh===!0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:wA,morphTextureStride:yA,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:E.numPlanes,numClipIntersection:E.numIntersection,dithering:c.dithering,shadowMapEnabled:C.shadowMap.enabled&&W.length>0,shadowMapType:C.shadowMap.type,toneMapping:kA,useLegacyLights:C._useLegacyLights,decodeVideoTexture:HA&&c.map.isVideoTexture===!0&&iI.getTransfer(c.map.colorSpace)===DI,premultipliedAlpha:c.premultipliedAlpha,doubleSided:c.side===tg,flipSided:c.side===ZI,useDepthPacking:c.depthPacking>=0,depthPacking:c.depthPacking||0,index0AttributeName:c.index0AttributeName,extensionDerivatives:qA&&c.extensions.derivatives===!0,extensionFragDepth:qA&&c.extensions.fragDepth===!0,extensionDrawBuffers:qA&&c.extensions.drawBuffers===!0,extensionShaderTextureLOD:qA&&c.extensions.shaderTextureLOD===!0,extensionClipCullDistance:qA&&c.extensions.clipCullDistance===!0&&g.has("WEBGL_clip_cull_distance"),extensionMultiDraw:qA&&c.extensions.multiDraw===!0&&g.has("WEBGL_multi_draw"),rendererExtensionFragDepth:t||g.has("EXT_frag_depth"),rendererExtensionDrawBuffers:t||g.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:t||g.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:g.has("KHR_parallel_shader_compile"),customProgramCacheKey:c.customProgramCacheKey()};return ZA.vertexUv1s=a.has(1),ZA.vertexUv2s=a.has(2),ZA.vertexUv3s=a.has(3),a.clear(),ZA}function l(c){const N=[];if(c.shaderID?N.push(c.shaderID):(N.push(c.customVertexShaderID),N.push(c.customFragmentShaderID)),c.defines!==void 0)for(const W in c.defines)N.push(W),N.push(c.defines[W]);return c.isRawShaderMaterial===!1&&(k(N,c),F(N,c),N.push(C.outputColorSpace)),N.push(c.customProgramCacheKey),N.join()}function k(c,N){c.push(N.precision),c.push(N.outputColorSpace),c.push(N.envMapMode),c.push(N.envMapCubeUVHeight),c.push(N.mapUv),c.push(N.alphaMapUv),c.push(N.lightMapUv),c.push(N.aoMapUv),c.push(N.bumpMapUv),c.push(N.normalMapUv),c.push(N.displacementMapUv),c.push(N.emissiveMapUv),c.push(N.metalnessMapUv),c.push(N.roughnessMapUv),c.push(N.anisotropyMapUv),c.push(N.clearcoatMapUv),c.push(N.clearcoatNormalMapUv),c.push(N.clearcoatRoughnessMapUv),c.push(N.iridescenceMapUv),c.push(N.iridescenceThicknessMapUv),c.push(N.sheenColorMapUv),c.push(N.sheenRoughnessMapUv),c.push(N.specularMapUv),c.push(N.specularColorMapUv),c.push(N.specularIntensityMapUv),c.push(N.transmissionMapUv),c.push(N.thicknessMapUv),c.push(N.combine),c.push(N.fogExp2),c.push(N.sizeAttenuation),c.push(N.morphTargetsCount),c.push(N.morphAttributeCount),c.push(N.numDirLights),c.push(N.numPointLights),c.push(N.numSpotLights),c.push(N.numSpotLightMaps),c.push(N.numHemiLights),c.push(N.numRectAreaLights),c.push(N.numDirLightShadows),c.push(N.numPointLightShadows),c.push(N.numSpotLightShadows),c.push(N.numSpotLightShadowsWithMaps),c.push(N.numLightProbes),c.push(N.shadowMapType),c.push(N.toneMapping),c.push(N.numClippingPlanes),c.push(N.numClipIntersection),c.push(N.depthPacking)}function F(c,N){i.disableAll(),N.isWebGL2&&i.enable(0),N.supportsVertexTextures&&i.enable(1),N.instancing&&i.enable(2),N.instancingColor&&i.enable(3),N.matcap&&i.enable(4),N.envMap&&i.enable(5),N.normalMapObjectSpace&&i.enable(6),N.normalMapTangentSpace&&i.enable(7),N.clearcoat&&i.enable(8),N.iridescence&&i.enable(9),N.alphaTest&&i.enable(10),N.vertexColors&&i.enable(11),N.vertexAlphas&&i.enable(12),N.vertexUv1s&&i.enable(13),N.vertexUv2s&&i.enable(14),N.vertexUv3s&&i.enable(15),N.vertexTangents&&i.enable(16),N.anisotropy&&i.enable(17),N.alphaHash&&i.enable(18),N.batching&&i.enable(19),c.push(i.mask),i.disableAll(),N.fog&&i.enable(0),N.useFog&&i.enable(1),N.flatShading&&i.enable(2),N.logarithmicDepthBuffer&&i.enable(3),N.skinning&&i.enable(4),N.morphTargets&&i.enable(5),N.morphNormals&&i.enable(6),N.morphColors&&i.enable(7),N.premultipliedAlpha&&i.enable(8),N.shadowMapEnabled&&i.enable(9),N.useLegacyLights&&i.enable(10),N.doubleSided&&i.enable(11),N.flipSided&&i.enable(12),N.useDepthPacking&&i.enable(13),N.dithering&&i.enable(14),N.transmission&&i.enable(15),N.sheen&&i.enable(16),N.opaque&&i.enable(17),N.pointsUvs&&i.enable(18),N.decodeVideoTexture&&i.enable(19),N.alphaToCoverage&&i.enable(20),c.push(i.mask)}function d(c){const N=M[c.type];let W;if(N){const EA=Gg[N];W=Ht.clone(EA.uniforms)}else W=c.uniforms;return W}function q(c,N){let W;for(let EA=0,p=D.length;EA<p;EA++){const Z=D[EA];if(Z.cacheKey===N){W=Z,++W.usedTimes;break}}return W===void 0&&(W=new Xw(C,N,c,Q),D.push(W)),W}function J(c){if(--c.usedTimes===0){const N=D.indexOf(c);D[N]=D[D.length-1],D.pop(),c.destroy()}}function V(c){o.remove(c)}function aA(){o.dispose()}return{getParameters:e,getProgramCacheKey:l,getUniforms:d,acquireProgram:q,releaseProgram:J,releaseShaderCache:V,programs:D,dispose:aA}}function IS(){let C=new WeakMap;function A(Q){let E=C.get(Q);return E===void 0&&(E={},C.set(Q,E)),E}function I(Q){C.delete(Q)}function g(Q,E,i){C.get(Q)[E]=i}function B(){C=new WeakMap}return{get:A,remove:I,update:g,dispose:B}}function gS(C,A){return C.groupOrder!==A.groupOrder?C.groupOrder-A.groupOrder:C.renderOrder!==A.renderOrder?C.renderOrder-A.renderOrder:C.material.id!==A.material.id?C.material.id-A.material.id:C.z!==A.z?C.z-A.z:C.id-A.id}function La(C,A){return C.groupOrder!==A.groupOrder?C.groupOrder-A.groupOrder:C.renderOrder!==A.renderOrder?C.renderOrder-A.renderOrder:C.z!==A.z?A.z-C.z:C.id-A.id}function Ha(){const C=[];let A=0;const I=[],g=[],B=[];function Q(){A=0,I.length=0,g.length=0,B.length=0}function E(t,s,w,S,M,G){let e=C[A];return e===void 0?(e={id:t.id,object:t,geometry:s,material:w,groupOrder:S,renderOrder:t.renderOrder,z:M,group:G},C[A]=e):(e.id=t.id,e.object=t,e.geometry=s,e.material=w,e.groupOrder=S,e.renderOrder=t.renderOrder,e.z=M,e.group=G),A++,e}function i(t,s,w,S,M,G){const e=E(t,s,w,S,M,G);w.transmission>0?g.push(e):w.transparent===!0?B.push(e):I.push(e)}function o(t,s,w,S,M,G){const e=E(t,s,w,S,M,G);w.transmission>0?g.unshift(e):w.transparent===!0?B.unshift(e):I.unshift(e)}function a(t,s){I.length>1&&I.sort(t||gS),g.length>1&&g.sort(s||La),B.length>1&&B.sort(s||La)}function D(){for(let t=A,s=C.length;t<s;t++){const w=C[t];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:I,transmissive:g,transparent:B,init:Q,push:i,unshift:o,finish:D,sort:a}}function CS(){let C=new WeakMap;function A(g,B){const Q=C.get(g);let E;return Q===void 0?(E=new Ha,C.set(g,[E])):B>=Q.length?(E=new Ha,Q.push(E)):E=Q[B],E}function I(){C=new WeakMap}return{get:A,dispose:I}}function BS(){const C={};return{get:function(A){if(C[A.id]!==void 0)return C[A.id];let I;switch(A.type){case"DirectionalLight":I={direction:new Y,color:new _A};break;case"SpotLight":I={position:new Y,direction:new Y,color:new _A,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":I={position:new Y,color:new _A,distance:0,decay:0};break;case"HemisphereLight":I={direction:new Y,skyColor:new _A,groundColor:new _A};break;case"RectAreaLight":I={color:new _A,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return C[A.id]=I,I}}}function QS(){const C={};return{get:function(A){if(C[A.id]!==void 0)return C[A.id];let I;switch(A.type){case"DirectionalLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new LA};break;case"SpotLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new LA};break;case"PointLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new LA,shadowCameraNear:1,shadowCameraFar:1e3};break}return C[A.id]=I,I}}}let ES=0;function iS(C,A){return(A.castShadow?2:0)-(C.castShadow?2:0)+(A.map?1:0)-(C.map?1:0)}function oS(C,A){const I=new BS,g=QS(),B={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let D=0;D<9;D++)B.probe.push(new Y);const Q=new Y,E=new cI,i=new cI;function o(D,t){let s=0,w=0,S=0;for(let W=0;W<9;W++)B.probe[W].set(0,0,0);let M=0,G=0,e=0,l=0,k=0,F=0,d=0,q=0,J=0,V=0,aA=0;D.sort(iS);const c=t===!0?Math.PI:1;for(let W=0,EA=D.length;W<EA;W++){const p=D[W],Z=p.color,b=p.intensity,X=p.distance,j=p.shadow&&p.shadow.map?p.shadow.map.texture:null;if(p.isAmbientLight)s+=Z.r*b*c,w+=Z.g*b*c,S+=Z.b*b*c;else if(p.isLightProbe){for(let P=0;P<9;P++)B.probe[P].addScaledVector(p.sh.coefficients[P],b);aA++}else if(p.isDirectionalLight){const P=I.get(p);if(P.color.copy(p.color).multiplyScalar(p.intensity*c),p.castShadow){const BA=p.shadow,AA=g.get(p);AA.shadowBias=BA.bias,AA.shadowNormalBias=BA.normalBias,AA.shadowRadius=BA.radius,AA.shadowMapSize=BA.mapSize,B.directionalShadow[M]=AA,B.directionalShadowMap[M]=j,B.directionalShadowMatrix[M]=p.shadow.matrix,F++}B.directional[M]=P,M++}else if(p.isSpotLight){const P=I.get(p);P.position.setFromMatrixPosition(p.matrixWorld),P.color.copy(Z).multiplyScalar(b*c),P.distance=X,P.coneCos=Math.cos(p.angle),P.penumbraCos=Math.cos(p.angle*(1-p.penumbra)),P.decay=p.decay,B.spot[e]=P;const BA=p.shadow;if(p.map&&(B.spotLightMap[J]=p.map,J++,BA.updateMatrices(p),p.castShadow&&V++),B.spotLightMatrix[e]=BA.matrix,p.castShadow){const AA=g.get(p);AA.shadowBias=BA.bias,AA.shadowNormalBias=BA.normalBias,AA.shadowRadius=BA.radius,AA.shadowMapSize=BA.mapSize,B.spotShadow[e]=AA,B.spotShadowMap[e]=j,q++}e++}else if(p.isRectAreaLight){const P=I.get(p);P.color.copy(Z).multiplyScalar(b),P.halfWidth.set(p.width*.5,0,0),P.halfHeight.set(0,p.height*.5,0),B.rectArea[l]=P,l++}else if(p.isPointLight){const P=I.get(p);if(P.color.copy(p.color).multiplyScalar(p.intensity*c),P.distance=p.distance,P.decay=p.decay,p.castShadow){const BA=p.shadow,AA=g.get(p);AA.shadowBias=BA.bias,AA.shadowNormalBias=BA.normalBias,AA.shadowRadius=BA.radius,AA.shadowMapSize=BA.mapSize,AA.shadowCameraNear=BA.camera.near,AA.shadowCameraFar=BA.camera.far,B.pointShadow[G]=AA,B.pointShadowMap[G]=j,B.pointShadowMatrix[G]=p.shadow.matrix,d++}B.point[G]=P,G++}else if(p.isHemisphereLight){const P=I.get(p);P.skyColor.copy(p.color).multiplyScalar(b*c),P.groundColor.copy(p.groundColor).multiplyScalar(b*c),B.hemi[k]=P,k++}}l>0&&(A.isWebGL2?C.has("OES_texture_float_linear")===!0?(B.rectAreaLTC1=oA.LTC_FLOAT_1,B.rectAreaLTC2=oA.LTC_FLOAT_2):(B.rectAreaLTC1=oA.LTC_HALF_1,B.rectAreaLTC2=oA.LTC_HALF_2):C.has("OES_texture_float_linear")===!0?(B.rectAreaLTC1=oA.LTC_FLOAT_1,B.rectAreaLTC2=oA.LTC_FLOAT_2):C.has("OES_texture_half_float_linear")===!0?(B.rectAreaLTC1=oA.LTC_HALF_1,B.rectAreaLTC2=oA.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),B.ambient[0]=s,B.ambient[1]=w,B.ambient[2]=S;const N=B.hash;(N.directionalLength!==M||N.pointLength!==G||N.spotLength!==e||N.rectAreaLength!==l||N.hemiLength!==k||N.numDirectionalShadows!==F||N.numPointShadows!==d||N.numSpotShadows!==q||N.numSpotMaps!==J||N.numLightProbes!==aA)&&(B.directional.length=M,B.spot.length=e,B.rectArea.length=l,B.point.length=G,B.hemi.length=k,B.directionalShadow.length=F,B.directionalShadowMap.length=F,B.pointShadow.length=d,B.pointShadowMap.length=d,B.spotShadow.length=q,B.spotShadowMap.length=q,B.directionalShadowMatrix.length=F,B.pointShadowMatrix.length=d,B.spotLightMatrix.length=q+J-V,B.spotLightMap.length=J,B.numSpotLightShadowsWithMaps=V,B.numLightProbes=aA,N.directionalLength=M,N.pointLength=G,N.spotLength=e,N.rectAreaLength=l,N.hemiLength=k,N.numDirectionalShadows=F,N.numPointShadows=d,N.numSpotShadows=q,N.numSpotMaps=J,N.numLightProbes=aA,B.version=ES++)}function a(D,t){let s=0,w=0,S=0,M=0,G=0;const e=t.matrixWorldInverse;for(let l=0,k=D.length;l<k;l++){const F=D[l];if(F.isDirectionalLight){const d=B.directional[s];d.direction.setFromMatrixPosition(F.matrixWorld),Q.setFromMatrixPosition(F.target.matrixWorld),d.direction.sub(Q),d.direction.transformDirection(e),s++}else if(F.isSpotLight){const d=B.spot[S];d.position.setFromMatrixPosition(F.matrixWorld),d.position.applyMatrix4(e),d.direction.setFromMatrixPosition(F.matrixWorld),Q.setFromMatrixPosition(F.target.matrixWorld),d.direction.sub(Q),d.direction.transformDirection(e),S++}else if(F.isRectAreaLight){const d=B.rectArea[M];d.position.setFromMatrixPosition(F.matrixWorld),d.position.applyMatrix4(e),i.identity(),E.copy(F.matrixWorld),E.premultiply(e),i.extractRotation(E),d.halfWidth.set(F.width*.5,0,0),d.halfHeight.set(0,F.height*.5,0),d.halfWidth.applyMatrix4(i),d.halfHeight.applyMatrix4(i),M++}else if(F.isPointLight){const d=B.point[w];d.position.setFromMatrixPosition(F.matrixWorld),d.position.applyMatrix4(e),w++}else if(F.isHemisphereLight){const d=B.hemi[G];d.direction.setFromMatrixPosition(F.matrixWorld),d.direction.transformDirection(e),G++}}}return{setup:o,setupView:a,state:B}}function ua(C,A){const I=new oS(C,A),g=[],B=[];function Q(){g.length=0,B.length=0}function E(D){g.push(D)}function i(D){B.push(D)}function o(D){I.setup(g,D)}function a(D){I.setupView(g,D)}return{init:Q,state:{lightsArray:g,shadowsArray:B,lights:I},setupLights:o,setupLightsView:a,pushLight:E,pushShadow:i}}function aS(C,A){let I=new WeakMap;function g(Q,E=0){const i=I.get(Q);let o;return i===void 0?(o=new ua(C,A),I.set(Q,[o])):E>=i.length?(o=new ua(C,A),i.push(o)):o=i[E],o}function B(){I=new WeakMap}return{get:g,dispose:B}}class DS extends TC{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pe,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}class eS extends TC{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}const tS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hS(C,A,I){let g=new uE;const B=new LA,Q=new LA,E=new FI,i=new DS({depthPacking:je}),o=new eS,a={},D=I.maxTextureSize,t={[ug]:ZI,[ZI]:ug,[tg]:tg},s=new dg({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new LA},radius:{value:4}},vertexShader:tS,fragmentShader:sS}),w=s.clone();w.defines.HORIZONTAL_PASS=1;const S=new XI;S.setAttribute("position",new hg(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Dg(S,s),G=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fi;let e=this.type;this.render=function(q,J,V){if(G.enabled===!1||G.autoUpdate===!1&&G.needsUpdate===!1||q.length===0)return;const aA=C.getRenderTarget(),c=C.getActiveCubeFace(),N=C.getActiveMipmapLevel(),W=C.state;W.setBlending(mg),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const EA=e!==lg&&this.type===lg,p=e===lg&&this.type!==lg;for(let Z=0,b=q.length;Z<b;Z++){const X=q[Z],j=X.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;B.copy(j.mapSize);const P=j.getFrameExtents();if(B.multiply(P),Q.copy(j.mapSize),(B.x>D||B.y>D)&&(B.x>D&&(Q.x=Math.floor(D/P.x),B.x=Q.x*P.x,j.mapSize.x=Q.x),B.y>D&&(Q.y=Math.floor(D/P.y),B.y=Q.y*P.y,j.mapSize.y=Q.y)),j.map===null||EA===!0||p===!0){const AA=this.type!==lg?{minFilter:xI,magFilter:xI}:{};j.map!==null&&j.map.dispose(),j.map=new oC(B.x,B.y,AA),j.map.texture.name=X.name+".shadowMap",j.camera.updateProjectionMatrix()}C.setRenderTarget(j.map),C.clear();const BA=j.getViewportCount();for(let AA=0;AA<BA;AA++){const wA=j.getViewport(AA);E.set(Q.x*wA.x,Q.y*wA.y,Q.x*wA.z,Q.y*wA.w),W.viewport(E),j.updateMatrices(X,AA),g=j.getFrustum(),F(J,V,j.camera,X,this.type)}j.isPointLightShadow!==!0&&this.type===lg&&l(j,V),j.needsUpdate=!1}e=this.type,G.needsUpdate=!1,C.setRenderTarget(aA,c,N)};function l(q,J){const V=A.update(M);s.defines.VSM_SAMPLES!==q.blurSamples&&(s.defines.VSM_SAMPLES=q.blurSamples,w.defines.VSM_SAMPLES=q.blurSamples,s.needsUpdate=!0,w.needsUpdate=!0),q.mapPass===null&&(q.mapPass=new oC(B.x,B.y)),s.uniforms.shadow_pass.value=q.map.texture,s.uniforms.resolution.value=q.mapSize,s.uniforms.radius.value=q.radius,C.setRenderTarget(q.mapPass),C.clear(),C.renderBufferDirect(J,null,V,s,M,null),w.uniforms.shadow_pass.value=q.mapPass.texture,w.uniforms.resolution.value=q.mapSize,w.uniforms.radius.value=q.radius,C.setRenderTarget(q.map),C.clear(),C.renderBufferDirect(J,null,V,w,M,null)}function k(q,J,V,aA){let c=null;const N=V.isPointLight===!0?q.customDistanceMaterial:q.customDepthMaterial;if(N!==void 0)c=N;else if(c=V.isPointLight===!0?o:i,C.localClippingEnabled&&J.clipShadows===!0&&Array.isArray(J.clippingPlanes)&&J.clippingPlanes.length!==0||J.displacementMap&&J.displacementScale!==0||J.alphaMap&&J.alphaTest>0||J.map&&J.alphaTest>0){const W=c.uuid,EA=J.uuid;let p=a[W];p===void 0&&(p={},a[W]=p);let Z=p[EA];Z===void 0&&(Z=c.clone(),p[EA]=Z,J.addEventListener("dispose",d)),c=Z}if(c.visible=J.visible,c.wireframe=J.wireframe,aA===lg?c.side=J.shadowSide!==null?J.shadowSide:J.side:c.side=J.shadowSide!==null?J.shadowSide:t[J.side],c.alphaMap=J.alphaMap,c.alphaTest=J.alphaTest,c.map=J.map,c.clipShadows=J.clipShadows,c.clippingPlanes=J.clippingPlanes,c.clipIntersection=J.clipIntersection,c.displacementMap=J.displacementMap,c.displacementScale=J.displacementScale,c.displacementBias=J.displacementBias,c.wireframeLinewidth=J.wireframeLinewidth,c.linewidth=J.linewidth,V.isPointLight===!0&&c.isMeshDistanceMaterial===!0){const W=C.properties.get(c);W.light=V}return c}function F(q,J,V,aA,c){if(q.visible===!1)return;if(q.layers.test(J.layers)&&(q.isMesh||q.isLine||q.isPoints)&&(q.castShadow||q.receiveShadow&&c===lg)&&(!q.frustumCulled||g.intersectsObject(q))){q.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,q.matrixWorld);const W=A.update(q),EA=q.material;if(Array.isArray(EA)){const p=W.groups;for(let Z=0,b=p.length;Z<b;Z++){const X=p[Z],j=EA[X.materialIndex];if(j&&j.visible){const P=k(q,j,aA,c);q.onBeforeShadow(C,q,J,V,W,P,X),C.renderBufferDirect(V,null,W,P,q,X),q.onAfterShadow(C,q,J,V,W,P,X)}}}else if(EA.visible){const p=k(q,EA,aA,c);q.onBeforeShadow(C,q,J,V,W,p,null),C.renderBufferDirect(V,null,W,p,q,null),q.onAfterShadow(C,q,J,V,W,p,null)}}const N=q.children;for(let W=0,EA=N.length;W<EA;W++)F(N[W],J,V,aA,c)}function d(q){q.target.removeEventListener("dispose",d);for(const J in a){const V=a[J],aA=q.target.uuid;aA in V&&(V[aA].dispose(),delete V[aA])}}}function GS(C,A,I){const g=I.isWebGL2;function B(){let U=!1;const CA=new FI;let $=null;const qA=new FI(0,0,0,0);return{setMask:function(kA){$!==kA&&!U&&(C.colorMask(kA,kA,kA,kA),$=kA)},setLocked:function(kA){U=kA},setClear:function(kA,ZA,BI,hI,pI){pI===!0&&(kA*=hI,ZA*=hI,BI*=hI),CA.set(kA,ZA,BI,hI),qA.equals(CA)===!1&&(C.clearColor(kA,ZA,BI,hI),qA.copy(CA))},reset:function(){U=!1,$=null,qA.set(-1,0,0,0)}}}function Q(){let U=!1,CA=null,$=null,qA=null;return{setTest:function(kA){kA?rA(C.DEPTH_TEST):AI(C.DEPTH_TEST)},setMask:function(kA){CA!==kA&&!U&&(C.depthMask(kA),CA=kA)},setFunc:function(kA){if($!==kA){switch(kA){case le:C.depthFunc(C.NEVER);break;case Ue:C.depthFunc(C.ALWAYS);break;case Ke:C.depthFunc(C.LESS);break;case HB:C.depthFunc(C.LEQUAL);break;case Ne:C.depthFunc(C.EQUAL);break;case Je:C.depthFunc(C.GEQUAL);break;case Fe:C.depthFunc(C.GREATER);break;case Re:C.depthFunc(C.NOTEQUAL);break;default:C.depthFunc(C.LEQUAL)}$=kA}},setLocked:function(kA){U=kA},setClear:function(kA){qA!==kA&&(C.clearDepth(kA),qA=kA)},reset:function(){U=!1,CA=null,$=null,qA=null}}}function E(){let U=!1,CA=null,$=null,qA=null,kA=null,ZA=null,BI=null,hI=null,pI=null;return{setTest:function(QI){U||(QI?rA(C.STENCIL_TEST):AI(C.STENCIL_TEST))},setMask:function(QI){CA!==QI&&!U&&(C.stencilMask(QI),CA=QI)},setFunc:function(QI,vI,Mg){($!==QI||qA!==vI||kA!==Mg)&&(C.stencilFunc(QI,vI,Mg),$=QI,qA=vI,kA=Mg)},setOp:function(QI,vI,Mg){(ZA!==QI||BI!==vI||hI!==Mg)&&(C.stencilOp(QI,vI,Mg),ZA=QI,BI=vI,hI=Mg)},setLocked:function(QI){U=QI},setClear:function(QI){pI!==QI&&(C.clearStencil(QI),pI=QI)},reset:function(){U=!1,CA=null,$=null,qA=null,kA=null,ZA=null,BI=null,hI=null,pI=null}}}const i=new B,o=new Q,a=new E,D=new WeakMap,t=new WeakMap;let s={},w={},S=new WeakMap,M=[],G=null,e=!1,l=null,k=null,F=null,d=null,q=null,J=null,V=null,aA=new _A(0,0,0),c=0,N=!1,W=null,EA=null,p=null,Z=null,b=null;const X=C.getParameter(C.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,P=0;const BA=C.getParameter(C.VERSION);BA.indexOf("WebGL")!==-1?(P=parseFloat(/^WebGL (\d)/.exec(BA)[1]),j=P>=1):BA.indexOf("OpenGL ES")!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(BA)[1]),j=P>=2);let AA=null,wA={};const yA=C.getParameter(C.SCISSOR_BOX),v=C.getParameter(C.VIEWPORT),iA=new FI().fromArray(yA),sA=new FI().fromArray(v);function FA(U,CA,$,qA){const kA=new Uint8Array(4),ZA=C.createTexture();C.bindTexture(U,ZA),C.texParameteri(U,C.TEXTURE_MIN_FILTER,C.NEAREST),C.texParameteri(U,C.TEXTURE_MAG_FILTER,C.NEAREST);for(let BI=0;BI<$;BI++)g&&(U===C.TEXTURE_3D||U===C.TEXTURE_2D_ARRAY)?C.texImage3D(CA,0,C.RGBA,1,1,qA,0,C.RGBA,C.UNSIGNED_BYTE,kA):C.texImage2D(CA+BI,0,C.RGBA,1,1,0,C.RGBA,C.UNSIGNED_BYTE,kA);return ZA}const RA={};RA[C.TEXTURE_2D]=FA(C.TEXTURE_2D,C.TEXTURE_2D,1),RA[C.TEXTURE_CUBE_MAP]=FA(C.TEXTURE_CUBE_MAP,C.TEXTURE_CUBE_MAP_POSITIVE_X,6),g&&(RA[C.TEXTURE_2D_ARRAY]=FA(C.TEXTURE_2D_ARRAY,C.TEXTURE_2D_ARRAY,1,1),RA[C.TEXTURE_3D]=FA(C.TEXTURE_3D,C.TEXTURE_3D,1,1)),i.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rA(C.DEPTH_TEST),o.setFunc(HB),mA(!1),n(mi),rA(C.CULL_FACE),nA(mg);function rA(U){s[U]!==!0&&(C.enable(U),s[U]=!0)}function AI(U){s[U]!==!1&&(C.disable(U),s[U]=!1)}function HA(U,CA){return w[U]!==CA?(C.bindFramebuffer(U,CA),w[U]=CA,g&&(U===C.DRAW_FRAMEBUFFER&&(w[C.FRAMEBUFFER]=CA),U===C.FRAMEBUFFER&&(w[C.DRAW_FRAMEBUFFER]=CA)),!0):!1}function m(U,CA){let $=M,qA=!1;if(U)if($=S.get(CA),$===void 0&&($=[],S.set(CA,$)),U.isWebGLMultipleRenderTargets){const kA=U.texture;if($.length!==kA.length||$[0]!==C.COLOR_ATTACHMENT0){for(let ZA=0,BI=kA.length;ZA<BI;ZA++)$[ZA]=C.COLOR_ATTACHMENT0+ZA;$.length=kA.length,qA=!0}}else $[0]!==C.COLOR_ATTACHMENT0&&($[0]=C.COLOR_ATTACHMENT0,qA=!0);else $[0]!==C.BACK&&($[0]=C.BACK,qA=!0);qA&&(I.isWebGL2?C.drawBuffers($):A.get("WEBGL_draw_buffers").drawBuffersWEBGL($))}function NI(U){return G!==U?(C.useProgram(U),G=U,!0):!1}const UA={[gC]:C.FUNC_ADD,[ae]:C.FUNC_SUBTRACT,[De]:C.FUNC_REVERSE_SUBTRACT};if(g)UA[Oi]=C.MIN,UA[bi]=C.MAX;else{const U=A.get("EXT_blend_minmax");U!==null&&(UA[Oi]=U.MIN_EXT,UA[bi]=U.MAX_EXT)}const dA={[ee]:C.ZERO,[te]:C.ONE,[se]:C.SRC_COLOR,[IE]:C.SRC_ALPHA,[ce]:C.SRC_ALPHA_SATURATE,[Se]:C.DST_COLOR,[Ge]:C.DST_ALPHA,[he]:C.ONE_MINUS_SRC_COLOR,[gE]:C.ONE_MINUS_SRC_ALPHA,[re]:C.ONE_MINUS_DST_COLOR,[we]:C.ONE_MINUS_DST_ALPHA,[ke]:C.CONSTANT_COLOR,[Me]:C.ONE_MINUS_CONSTANT_COLOR,[ye]:C.CONSTANT_ALPHA,[ne]:C.ONE_MINUS_CONSTANT_ALPHA};function nA(U,CA,$,qA,kA,ZA,BI,hI,pI,QI){if(U===mg){e===!0&&(AI(C.BLEND),e=!1);return}if(e===!1&&(rA(C.BLEND),e=!0),U!==oe){if(U!==l||QI!==N){if((k!==gC||q!==gC)&&(C.blendEquation(C.FUNC_ADD),k=gC,q=gC),QI)switch(U){case nC:C.blendFuncSeparate(C.ONE,C.ONE_MINUS_SRC_ALPHA,C.ONE,C.ONE_MINUS_SRC_ALPHA);break;case AE:C.blendFunc(C.ONE,C.ONE);break;case Ti:C.blendFuncSeparate(C.ZERO,C.ONE_MINUS_SRC_COLOR,C.ZERO,C.ONE);break;case xi:C.blendFuncSeparate(C.ZERO,C.SRC_COLOR,C.ZERO,C.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case nC:C.blendFuncSeparate(C.SRC_ALPHA,C.ONE_MINUS_SRC_ALPHA,C.ONE,C.ONE_MINUS_SRC_ALPHA);break;case AE:C.blendFunc(C.SRC_ALPHA,C.ONE);break;case Ti:C.blendFuncSeparate(C.ZERO,C.ONE_MINUS_SRC_COLOR,C.ZERO,C.ONE);break;case xi:C.blendFunc(C.ZERO,C.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}F=null,d=null,J=null,V=null,aA.set(0,0,0),c=0,l=U,N=QI}return}kA=kA||CA,ZA=ZA||$,BI=BI||qA,(CA!==k||kA!==q)&&(C.blendEquationSeparate(UA[CA],UA[kA]),k=CA,q=kA),($!==F||qA!==d||ZA!==J||BI!==V)&&(C.blendFuncSeparate(dA[$],dA[qA],dA[ZA],dA[BI]),F=$,d=qA,J=ZA,V=BI),(hI.equals(aA)===!1||pI!==c)&&(C.blendColor(hI.r,hI.g,hI.b,pI),aA.copy(hI),c=pI),l=U,N=!1}function eI(U,CA){U.side===tg?AI(C.CULL_FACE):rA(C.CULL_FACE);let $=U.side===ZI;CA&&($=!$),mA($),U.blending===nC&&U.transparent===!1?nA(mg):nA(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),i.setMask(U.colorWrite);const qA=U.stencilWrite;a.setTest(qA),qA&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),f(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?rA(C.SAMPLE_ALPHA_TO_COVERAGE):AI(C.SAMPLE_ALPHA_TO_COVERAGE)}function mA(U){W!==U&&(U?C.frontFace(C.CW):C.frontFace(C.CCW),W=U)}function n(U){U!==Qe?(rA(C.CULL_FACE),U!==EA&&(U===mi?C.cullFace(C.BACK):U===Ee?C.cullFace(C.FRONT):C.cullFace(C.FRONT_AND_BACK))):AI(C.CULL_FACE),EA=U}function r(U){U!==p&&(j&&C.lineWidth(U),p=U)}function f(U,CA,$){U?(rA(C.POLYGON_OFFSET_FILL),(Z!==CA||b!==$)&&(C.polygonOffset(CA,$),Z=CA,b=$)):AI(C.POLYGON_OFFSET_FILL)}function QA(U){U?rA(C.SCISSOR_TEST):AI(C.SCISSOR_TEST)}function z(U){U===void 0&&(U=C.TEXTURE0+X-1),AA!==U&&(C.activeTexture(U),AA=U)}function IA(U,CA,$){$===void 0&&(AA===null?$=C.TEXTURE0+X-1:$=AA);let qA=wA[$];qA===void 0&&(qA={type:void 0,texture:void 0},wA[$]=qA),(qA.type!==U||qA.texture!==CA)&&(AA!==$&&(C.activeTexture($),AA=$),C.bindTexture(U,CA||RA[U]),qA.type=U,qA.texture=CA)}function MA(){const U=wA[AA];U!==void 0&&U.type!==void 0&&(C.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function eA(){try{C.compressedTexImage2D.apply(C,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function hA(){try{C.compressedTexImage3D.apply(C,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function KA(){try{C.texSubImage2D.apply(C,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fA(){try{C.texSubImage3D.apply(C,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function gA(){try{C.compressedTexSubImage2D.apply(C,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function CI(){try{C.compressedTexSubImage3D.apply(C,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function vA(){try{C.texStorage2D.apply(C,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function YA(){try{C.texStorage3D.apply(C,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function lA(){try{C.texImage2D.apply(C,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function tA(){try{C.texImage3D.apply(C,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(U){iA.equals(U)===!1&&(C.scissor(U.x,U.y,U.z,U.w),iA.copy(U))}function _(U){sA.equals(U)===!1&&(C.viewport(U.x,U.y,U.z,U.w),sA.copy(U))}function GA(U,CA){let $=t.get(CA);$===void 0&&($=new WeakMap,t.set(CA,$));let qA=$.get(U);qA===void 0&&(qA=C.getUniformBlockIndex(CA,U.name),$.set(U,qA))}function cA(U,CA){const $=t.get(CA).get(U);D.get(CA)!==$&&(C.uniformBlockBinding(CA,$,U.__bindingPointIndex),D.set(CA,$))}function bA(){C.disable(C.BLEND),C.disable(C.CULL_FACE),C.disable(C.DEPTH_TEST),C.disable(C.POLYGON_OFFSET_FILL),C.disable(C.SCISSOR_TEST),C.disable(C.STENCIL_TEST),C.disable(C.SAMPLE_ALPHA_TO_COVERAGE),C.blendEquation(C.FUNC_ADD),C.blendFunc(C.ONE,C.ZERO),C.blendFuncSeparate(C.ONE,C.ZERO,C.ONE,C.ZERO),C.blendColor(0,0,0,0),C.colorMask(!0,!0,!0,!0),C.clearColor(0,0,0,0),C.depthMask(!0),C.depthFunc(C.LESS),C.clearDepth(1),C.stencilMask(4294967295),C.stencilFunc(C.ALWAYS,0,4294967295),C.stencilOp(C.KEEP,C.KEEP,C.KEEP),C.clearStencil(0),C.cullFace(C.BACK),C.frontFace(C.CCW),C.polygonOffset(0,0),C.activeTexture(C.TEXTURE0),C.bindFramebuffer(C.FRAMEBUFFER,null),g===!0&&(C.bindFramebuffer(C.DRAW_FRAMEBUFFER,null),C.bindFramebuffer(C.READ_FRAMEBUFFER,null)),C.useProgram(null),C.lineWidth(1),C.scissor(0,0,C.canvas.width,C.canvas.height),C.viewport(0,0,C.canvas.width,C.canvas.height),s={},AA=null,wA={},w={},S=new WeakMap,M=[],G=null,e=!1,l=null,k=null,F=null,d=null,q=null,J=null,V=null,aA=new _A(0,0,0),c=0,N=!1,W=null,EA=null,p=null,Z=null,b=null,iA.set(0,0,C.canvas.width,C.canvas.height),sA.set(0,0,C.canvas.width,C.canvas.height),i.reset(),o.reset(),a.reset()}return{buffers:{color:i,depth:o,stencil:a},enable:rA,disable:AI,bindFramebuffer:HA,drawBuffers:m,useProgram:NI,setBlending:nA,setMaterial:eI,setFlipSided:mA,setCullFace:n,setLineWidth:r,setPolygonOffset:f,setScissorTest:QA,activeTexture:z,bindTexture:IA,unbindTexture:MA,compressedTexImage2D:eA,compressedTexImage3D:hA,texImage2D:lA,texImage3D:tA,updateUBOMapping:GA,uniformBlockBinding:cA,texStorage2D:vA,texStorage3D:YA,texSubImage2D:KA,texSubImage3D:fA,compressedTexSubImage2D:gA,compressedTexSubImage3D:CI,scissor:K,viewport:_,reset:bA}}function wS(C,A,I,g,B,Q,E){const i=B.isWebGL2,o=A.has("WEBGL_multisampled_render_to_texture")?A.get("WEBGL_multisampled_render_to_texture"):null,a=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),D=new WeakMap;let t;const s=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(n,r){return w?new OffscreenCanvas(n,r):vB("canvas")}function M(n,r,f,QA){let z=1;if((n.width>QA||n.height>QA)&&(z=QA/Math.max(n.width,n.height)),z<1||r===!0)if(typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap){const IA=r?bB:Math.floor,MA=IA(z*n.width),eA=IA(z*n.height);t===void 0&&(t=S(MA,eA));const hA=f?S(MA,eA):t;return hA.width=MA,hA.height=eA,hA.getContext("2d").drawImage(n,0,0,MA,eA),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+n.width+"x"+n.height+") to ("+MA+"x"+eA+")."),hA}else return"data"in n&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+n.width+"x"+n.height+")."),n;return n}function G(n){return SE(n.width)&&SE(n.height)}function e(n){return i?!1:n.wrapS!==Qg||n.wrapT!==Qg||n.minFilter!==xI&&n.minFilter!==WI}function l(n,r){return n.generateMipmaps&&r&&n.minFilter!==xI&&n.minFilter!==WI}function k(n){C.generateMipmap(n)}function F(n,r,f,QA,z=!1){if(i===!1)return r;if(n!==null){if(C[n]!==void 0)return C[n];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+n+"'")}let IA=r;if(r===C.RED&&(f===C.FLOAT&&(IA=C.R32F),f===C.HALF_FLOAT&&(IA=C.R16F),f===C.UNSIGNED_BYTE&&(IA=C.R8)),r===C.RED_INTEGER&&(f===C.UNSIGNED_BYTE&&(IA=C.R8UI),f===C.UNSIGNED_SHORT&&(IA=C.R16UI),f===C.UNSIGNED_INT&&(IA=C.R32UI),f===C.BYTE&&(IA=C.R8I),f===C.SHORT&&(IA=C.R16I),f===C.INT&&(IA=C.R32I)),r===C.RG&&(f===C.FLOAT&&(IA=C.RG32F),f===C.HALF_FLOAT&&(IA=C.RG16F),f===C.UNSIGNED_BYTE&&(IA=C.RG8)),r===C.RGBA){const MA=z?fB:iI.getTransfer(QA);f===C.FLOAT&&(IA=C.RGBA32F),f===C.HALF_FLOAT&&(IA=C.RGBA16F),f===C.UNSIGNED_BYTE&&(IA=MA===DI?C.SRGB8_ALPHA8:C.RGBA8),f===C.UNSIGNED_SHORT_4_4_4_4&&(IA=C.RGBA4),f===C.UNSIGNED_SHORT_5_5_5_1&&(IA=C.RGB5_A1)}return(IA===C.R16F||IA===C.R32F||IA===C.RG16F||IA===C.RG32F||IA===C.RGBA16F||IA===C.RGBA32F)&&A.get("EXT_color_buffer_float"),IA}function d(n,r,f){return l(n,f)===!0||n.isFramebufferTexture&&n.minFilter!==xI&&n.minFilter!==WI?Math.log2(Math.max(r.width,r.height))+1:n.mipmaps!==void 0&&n.mipmaps.length>0?n.mipmaps.length:n.isCompressedTexture&&Array.isArray(n.image)?r.mipmaps.length:1}function q(n){return n===xI||n===Wi||n===oB?C.NEAREST:C.LINEAR}function J(n){const r=n.target;r.removeEventListener("dispose",J),aA(r),r.isVideoTexture&&D.delete(r)}function V(n){const r=n.target;r.removeEventListener("dispose",V),N(r)}function aA(n){const r=g.get(n);if(r.__webglInit===void 0)return;const f=n.source,QA=s.get(f);if(QA){const z=QA[r.__cacheKey];z.usedTimes--,z.usedTimes===0&&c(n),Object.keys(QA).length===0&&s.delete(f)}g.remove(n)}function c(n){const r=g.get(n);C.deleteTexture(r.__webglTexture);const f=n.source,QA=s.get(f);delete QA[r.__cacheKey],E.memory.textures--}function N(n){const r=n.texture,f=g.get(n),QA=g.get(r);if(QA.__webglTexture!==void 0&&(C.deleteTexture(QA.__webglTexture),E.memory.textures--),n.depthTexture&&n.depthTexture.dispose(),n.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(f.__webglFramebuffer[z]))for(let IA=0;IA<f.__webglFramebuffer[z].length;IA++)C.deleteFramebuffer(f.__webglFramebuffer[z][IA]);else C.deleteFramebuffer(f.__webglFramebuffer[z]);f.__webglDepthbuffer&&C.deleteRenderbuffer(f.__webglDepthbuffer[z])}else{if(Array.isArray(f.__webglFramebuffer))for(let z=0;z<f.__webglFramebuffer.length;z++)C.deleteFramebuffer(f.__webglFramebuffer[z]);else C.deleteFramebuffer(f.__webglFramebuffer);if(f.__webglDepthbuffer&&C.deleteRenderbuffer(f.__webglDepthbuffer),f.__webglMultisampledFramebuffer&&C.deleteFramebuffer(f.__webglMultisampledFramebuffer),f.__webglColorRenderbuffer)for(let z=0;z<f.__webglColorRenderbuffer.length;z++)f.__webglColorRenderbuffer[z]&&C.deleteRenderbuffer(f.__webglColorRenderbuffer[z]);f.__webglDepthRenderbuffer&&C.deleteRenderbuffer(f.__webglDepthRenderbuffer)}if(n.isWebGLMultipleRenderTargets)for(let z=0,IA=r.length;z<IA;z++){const MA=g.get(r[z]);MA.__webglTexture&&(C.deleteTexture(MA.__webglTexture),E.memory.textures--),g.remove(r[z])}g.remove(r),g.remove(n)}let W=0;function EA(){W=0}function p(){const n=W;return n>=B.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+n+" texture units while this GPU supports only "+B.maxTextures),W+=1,n}function Z(n){const r=[];return r.push(n.wrapS),r.push(n.wrapT),r.push(n.wrapR||0),r.push(n.magFilter),r.push(n.minFilter),r.push(n.anisotropy),r.push(n.internalFormat),r.push(n.format),r.push(n.type),r.push(n.generateMipmaps),r.push(n.premultiplyAlpha),r.push(n.flipY),r.push(n.unpackAlignment),r.push(n.colorSpace),r.join()}function b(n,r){const f=g.get(n);if(n.isVideoTexture&&eI(n),n.isRenderTargetTexture===!1&&n.version>0&&f.__version!==n.version){const QA=n.image;if(QA===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(QA.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{iA(f,n,r);return}}I.bindTexture(C.TEXTURE_2D,f.__webglTexture,C.TEXTURE0+r)}function X(n,r){const f=g.get(n);if(n.version>0&&f.__version!==n.version){iA(f,n,r);return}I.bindTexture(C.TEXTURE_2D_ARRAY,f.__webglTexture,C.TEXTURE0+r)}function j(n,r){const f=g.get(n);if(n.version>0&&f.__version!==n.version){iA(f,n,r);return}I.bindTexture(C.TEXTURE_3D,f.__webglTexture,C.TEXTURE0+r)}function P(n,r){const f=g.get(n);if(n.version>0&&f.__version!==n.version){sA(f,n,r);return}I.bindTexture(C.TEXTURE_CUBE_MAP,f.__webglTexture,C.TEXTURE0+r)}const BA={[QE]:C.REPEAT,[Qg]:C.CLAMP_TO_EDGE,[EE]:C.MIRRORED_REPEAT},AA={[xI]:C.NEAREST,[Wi]:C.NEAREST_MIPMAP_NEAREST,[oB]:C.NEAREST_MIPMAP_LINEAR,[WI]:C.LINEAR,[iE]:C.LINEAR_MIPMAP_NEAREST,[CC]:C.LINEAR_MIPMAP_LINEAR},wA={[Xe]:C.NEVER,[gt]:C.ALWAYS,[_e]:C.LESS,[Jo]:C.LEQUAL,[ze]:C.EQUAL,[It]:C.GEQUAL,[$e]:C.GREATER,[At]:C.NOTEQUAL};function yA(n,r,f){if(r.type===Ug&&A.has("OES_texture_float_linear")===!1&&(r.magFilter===WI||r.magFilter===iE||r.magFilter===oB||r.magFilter===CC||r.minFilter===WI||r.minFilter===iE||r.minFilter===oB||r.minFilter===CC)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),f?(C.texParameteri(n,C.TEXTURE_WRAP_S,BA[r.wrapS]),C.texParameteri(n,C.TEXTURE_WRAP_T,BA[r.wrapT]),(n===C.TEXTURE_3D||n===C.TEXTURE_2D_ARRAY)&&C.texParameteri(n,C.TEXTURE_WRAP_R,BA[r.wrapR]),C.texParameteri(n,C.TEXTURE_MAG_FILTER,AA[r.magFilter]),C.texParameteri(n,C.TEXTURE_MIN_FILTER,AA[r.minFilter])):(C.texParameteri(n,C.TEXTURE_WRAP_S,C.CLAMP_TO_EDGE),C.texParameteri(n,C.TEXTURE_WRAP_T,C.CLAMP_TO_EDGE),(n===C.TEXTURE_3D||n===C.TEXTURE_2D_ARRAY)&&C.texParameteri(n,C.TEXTURE_WRAP_R,C.CLAMP_TO_EDGE),(r.wrapS!==Qg||r.wrapT!==Qg)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),C.texParameteri(n,C.TEXTURE_MAG_FILTER,q(r.magFilter)),C.texParameteri(n,C.TEXTURE_MIN_FILTER,q(r.minFilter)),r.minFilter!==xI&&r.minFilter!==WI&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),r.compareFunction&&(C.texParameteri(n,C.TEXTURE_COMPARE_MODE,C.COMPARE_REF_TO_TEXTURE),C.texParameteri(n,C.TEXTURE_COMPARE_FUNC,wA[r.compareFunction])),A.has("EXT_texture_filter_anisotropic")===!0){const QA=A.get("EXT_texture_filter_anisotropic");if(r.magFilter===xI||r.minFilter!==oB&&r.minFilter!==CC||r.type===Ug&&A.has("OES_texture_float_linear")===!1||i===!1&&r.type===aB&&A.has("OES_texture_half_float_linear")===!1)return;(r.anisotropy>1||g.get(r).__currentAnisotropy)&&(C.texParameterf(n,QA.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(r.anisotropy,B.getMaxAnisotropy())),g.get(r).__currentAnisotropy=r.anisotropy)}}function v(n,r){let f=!1;n.__webglInit===void 0&&(n.__webglInit=!0,r.addEventListener("dispose",J));const QA=r.source;let z=s.get(QA);z===void 0&&(z={},s.set(QA,z));const IA=Z(r);if(IA!==n.__cacheKey){z[IA]===void 0&&(z[IA]={texture:C.createTexture(),usedTimes:0},E.memory.textures++,f=!0),z[IA].usedTimes++;const MA=z[n.__cacheKey];MA!==void 0&&(z[n.__cacheKey].usedTimes--,MA.usedTimes===0&&c(r)),n.__cacheKey=IA,n.__webglTexture=z[IA].texture}return f}function iA(n,r,f){let QA=C.TEXTURE_2D;(r.isDataArrayTexture||r.isCompressedArrayTexture)&&(QA=C.TEXTURE_2D_ARRAY),r.isData3DTexture&&(QA=C.TEXTURE_3D);const z=v(n,r),IA=r.source;I.bindTexture(QA,n.__webglTexture,C.TEXTURE0+f);const MA=g.get(IA);if(IA.version!==MA.__version||z===!0){I.activeTexture(C.TEXTURE0+f);const eA=iI.getPrimaries(iI.workingColorSpace),hA=r.colorSpace===zI?null:iI.getPrimaries(r.colorSpace),KA=r.colorSpace===zI||eA===hA?C.NONE:C.BROWSER_DEFAULT_WEBGL;C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,r.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,r.unpackAlignment),C.pixelStorei(C.UNPACK_COLORSPACE_CONVERSION_WEBGL,KA);const fA=e(r)&&G(r.image)===!1;let gA=M(r.image,fA,!1,B.maxTextureSize);gA=mA(r,gA);const CI=G(gA)||i,vA=Q.convert(r.format,r.colorSpace);let YA=Q.convert(r.type),lA=F(r.internalFormat,vA,YA,r.colorSpace,r.isVideoTexture);yA(QA,r,CI);let tA;const K=r.mipmaps,_=i&&r.isVideoTexture!==!0&&lA!==Co,GA=MA.__version===void 0||z===!0,cA=IA.dataReady,bA=d(r,gA,CI);if(r.isDepthTexture)lA=C.DEPTH_COMPONENT,i?r.type===Ug?lA=C.DEPTH_COMPONENT32F:r.type===xg?lA=C.DEPTH_COMPONENT24:r.type===BC?lA=C.DEPTH24_STENCIL8:lA=C.DEPTH_COMPONENT16:r.type===Ug&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),r.format===QC&&lA===C.DEPTH_COMPONENT&&r.type!==oE&&r.type!==xg&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),r.type=xg,YA=Q.convert(r.type)),r.format===KC&&lA===C.DEPTH_COMPONENT&&(lA=C.DEPTH_STENCIL,r.type!==BC&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),r.type=BC,YA=Q.convert(r.type))),GA&&(_?I.texStorage2D(C.TEXTURE_2D,1,lA,gA.width,gA.height):I.texImage2D(C.TEXTURE_2D,0,lA,gA.width,gA.height,0,vA,YA,null));else if(r.isDataTexture)if(K.length>0&&CI){_&&GA&&I.texStorage2D(C.TEXTURE_2D,bA,lA,K[0].width,K[0].height);for(let U=0,CA=K.length;U<CA;U++)tA=K[U],_?cA&&I.texSubImage2D(C.TEXTURE_2D,U,0,0,tA.width,tA.height,vA,YA,tA.data):I.texImage2D(C.TEXTURE_2D,U,lA,tA.width,tA.height,0,vA,YA,tA.data);r.generateMipmaps=!1}else _?(GA&&I.texStorage2D(C.TEXTURE_2D,bA,lA,gA.width,gA.height),cA&&I.texSubImage2D(C.TEXTURE_2D,0,0,0,gA.width,gA.height,vA,YA,gA.data)):I.texImage2D(C.TEXTURE_2D,0,lA,gA.width,gA.height,0,vA,YA,gA.data);else if(r.isCompressedTexture)if(r.isCompressedArrayTexture){_&&GA&&I.texStorage3D(C.TEXTURE_2D_ARRAY,bA,lA,K[0].width,K[0].height,gA.depth);for(let U=0,CA=K.length;U<CA;U++)tA=K[U],r.format!==Eg?vA!==null?_?cA&&I.compressedTexSubImage3D(C.TEXTURE_2D_ARRAY,U,0,0,0,tA.width,tA.height,gA.depth,vA,tA.data,0,0):I.compressedTexImage3D(C.TEXTURE_2D_ARRAY,U,lA,tA.width,tA.height,gA.depth,0,tA.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_?cA&&I.texSubImage3D(C.TEXTURE_2D_ARRAY,U,0,0,0,tA.width,tA.height,gA.depth,vA,YA,tA.data):I.texImage3D(C.TEXTURE_2D_ARRAY,U,lA,tA.width,tA.height,gA.depth,0,vA,YA,tA.data)}else{_&&GA&&I.texStorage2D(C.TEXTURE_2D,bA,lA,K[0].width,K[0].height);for(let U=0,CA=K.length;U<CA;U++)tA=K[U],r.format!==Eg?vA!==null?_?cA&&I.compressedTexSubImage2D(C.TEXTURE_2D,U,0,0,tA.width,tA.height,vA,tA.data):I.compressedTexImage2D(C.TEXTURE_2D,U,lA,tA.width,tA.height,0,tA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_?cA&&I.texSubImage2D(C.TEXTURE_2D,U,0,0,tA.width,tA.height,vA,YA,tA.data):I.texImage2D(C.TEXTURE_2D,U,lA,tA.width,tA.height,0,vA,YA,tA.data)}else if(r.isDataArrayTexture)_?(GA&&I.texStorage3D(C.TEXTURE_2D_ARRAY,bA,lA,gA.width,gA.height,gA.depth),cA&&I.texSubImage3D(C.TEXTURE_2D_ARRAY,0,0,0,0,gA.width,gA.height,gA.depth,vA,YA,gA.data)):I.texImage3D(C.TEXTURE_2D_ARRAY,0,lA,gA.width,gA.height,gA.depth,0,vA,YA,gA.data);else if(r.isData3DTexture)_?(GA&&I.texStorage3D(C.TEXTURE_3D,bA,lA,gA.width,gA.height,gA.depth),cA&&I.texSubImage3D(C.TEXTURE_3D,0,0,0,0,gA.width,gA.height,gA.depth,vA,YA,gA.data)):I.texImage3D(C.TEXTURE_3D,0,lA,gA.width,gA.height,gA.depth,0,vA,YA,gA.data);else if(r.isFramebufferTexture){if(GA)if(_)I.texStorage2D(C.TEXTURE_2D,bA,lA,gA.width,gA.height);else{let U=gA.width,CA=gA.height;for(let $=0;$<bA;$++)I.texImage2D(C.TEXTURE_2D,$,lA,U,CA,0,vA,YA,null),U>>=1,CA>>=1}}else if(K.length>0&&CI){_&&GA&&I.texStorage2D(C.TEXTURE_2D,bA,lA,K[0].width,K[0].height);for(let U=0,CA=K.length;U<CA;U++)tA=K[U],_?cA&&I.texSubImage2D(C.TEXTURE_2D,U,0,0,vA,YA,tA):I.texImage2D(C.TEXTURE_2D,U,lA,vA,YA,tA);r.generateMipmaps=!1}else _?(GA&&I.texStorage2D(C.TEXTURE_2D,bA,lA,gA.width,gA.height),cA&&I.texSubImage2D(C.TEXTURE_2D,0,0,0,vA,YA,gA)):I.texImage2D(C.TEXTURE_2D,0,lA,vA,YA,gA);l(r,CI)&&k(QA),MA.__version=IA.version,r.onUpdate&&r.onUpdate(r)}n.__version=r.version}function sA(n,r,f){if(r.image.length!==6)return;const QA=v(n,r),z=r.source;I.bindTexture(C.TEXTURE_CUBE_MAP,n.__webglTexture,C.TEXTURE0+f);const IA=g.get(z);if(z.version!==IA.__version||QA===!0){I.activeTexture(C.TEXTURE0+f);const MA=iI.getPrimaries(iI.workingColorSpace),eA=r.colorSpace===zI?null:iI.getPrimaries(r.colorSpace),hA=r.colorSpace===zI||MA===eA?C.NONE:C.BROWSER_DEFAULT_WEBGL;C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,r.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,r.unpackAlignment),C.pixelStorei(C.UNPACK_COLORSPACE_CONVERSION_WEBGL,hA);const KA=r.isCompressedTexture||r.image[0].isCompressedTexture,fA=r.image[0]&&r.image[0].isDataTexture,gA=[];for(let U=0;U<6;U++)!KA&&!fA?gA[U]=M(r.image[U],!1,!0,B.maxCubemapSize):gA[U]=fA?r.image[U].image:r.image[U],gA[U]=mA(r,gA[U]);const CI=gA[0],vA=G(CI)||i,YA=Q.convert(r.format,r.colorSpace),lA=Q.convert(r.type),tA=F(r.internalFormat,YA,lA,r.colorSpace),K=i&&r.isVideoTexture!==!0,_=IA.__version===void 0||QA===!0,GA=z.dataReady;let cA=d(r,CI,vA);yA(C.TEXTURE_CUBE_MAP,r,vA);let bA;if(KA){K&&_&&I.texStorage2D(C.TEXTURE_CUBE_MAP,cA,tA,CI.width,CI.height);for(let U=0;U<6;U++){bA=gA[U].mipmaps;for(let CA=0;CA<bA.length;CA++){const $=bA[CA];r.format!==Eg?YA!==null?K?GA&&I.compressedTexSubImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+U,CA,0,0,$.width,$.height,YA,$.data):I.compressedTexImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+U,CA,tA,$.width,$.height,0,$.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?GA&&I.texSubImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+U,CA,0,0,$.width,$.height,YA,lA,$.data):I.texImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+U,CA,tA,$.width,$.height,0,YA,lA,$.data)}}}else{bA=r.mipmaps,K&&_&&(bA.length>0&&cA++,I.texStorage2D(C.TEXTURE_CUBE_MAP,cA,tA,gA[0].width,gA[0].height));for(let U=0;U<6;U++)if(fA){K?GA&&I.texSubImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,gA[U].width,gA[U].height,YA,lA,gA[U].data):I.texImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,tA,gA[U].width,gA[U].height,0,YA,lA,gA[U].data);for(let CA=0;CA<bA.length;CA++){const $=bA[CA].image[U].image;K?GA&&I.texSubImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+U,CA+1,0,0,$.width,$.height,YA,lA,$.data):I.texImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+U,CA+1,tA,$.width,$.height,0,YA,lA,$.data)}}else{K?GA&&I.texSubImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,YA,lA,gA[U]):I.texImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,tA,YA,lA,gA[U]);for(let CA=0;CA<bA.length;CA++){const $=bA[CA];K?GA&&I.texSubImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+U,CA+1,0,0,YA,lA,$.image[U]):I.texImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+U,CA+1,tA,YA,lA,$.image[U])}}}l(r,vA)&&k(C.TEXTURE_CUBE_MAP),IA.__version=z.version,r.onUpdate&&r.onUpdate(r)}n.__version=r.version}function FA(n,r,f,QA,z,IA){const MA=Q.convert(f.format,f.colorSpace),eA=Q.convert(f.type),hA=F(f.internalFormat,MA,eA,f.colorSpace);if(!g.get(r).__hasExternalTextures){const KA=Math.max(1,r.width>>IA),fA=Math.max(1,r.height>>IA);z===C.TEXTURE_3D||z===C.TEXTURE_2D_ARRAY?I.texImage3D(z,IA,hA,KA,fA,r.depth,0,MA,eA,null):I.texImage2D(z,IA,hA,KA,fA,0,MA,eA,null)}I.bindFramebuffer(C.FRAMEBUFFER,n),nA(r)?o.framebufferTexture2DMultisampleEXT(C.FRAMEBUFFER,QA,z,g.get(f).__webglTexture,0,dA(r)):(z===C.TEXTURE_2D||z>=C.TEXTURE_CUBE_MAP_POSITIVE_X&&z<=C.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&C.framebufferTexture2D(C.FRAMEBUFFER,QA,z,g.get(f).__webglTexture,IA),I.bindFramebuffer(C.FRAMEBUFFER,null)}function RA(n,r,f){if(C.bindRenderbuffer(C.RENDERBUFFER,n),r.depthBuffer&&!r.stencilBuffer){let QA=i===!0?C.DEPTH_COMPONENT24:C.DEPTH_COMPONENT16;if(f||nA(r)){const z=r.depthTexture;z&&z.isDepthTexture&&(z.type===Ug?QA=C.DEPTH_COMPONENT32F:z.type===xg&&(QA=C.DEPTH_COMPONENT24));const IA=dA(r);nA(r)?o.renderbufferStorageMultisampleEXT(C.RENDERBUFFER,IA,QA,r.width,r.height):C.renderbufferStorageMultisample(C.RENDERBUFFER,IA,QA,r.width,r.height)}else C.renderbufferStorage(C.RENDERBUFFER,QA,r.width,r.height);C.framebufferRenderbuffer(C.FRAMEBUFFER,C.DEPTH_ATTACHMENT,C.RENDERBUFFER,n)}else if(r.depthBuffer&&r.stencilBuffer){const QA=dA(r);f&&nA(r)===!1?C.renderbufferStorageMultisample(C.RENDERBUFFER,QA,C.DEPTH24_STENCIL8,r.width,r.height):nA(r)?o.renderbufferStorageMultisampleEXT(C.RENDERBUFFER,QA,C.DEPTH24_STENCIL8,r.width,r.height):C.renderbufferStorage(C.RENDERBUFFER,C.DEPTH_STENCIL,r.width,r.height),C.framebufferRenderbuffer(C.FRAMEBUFFER,C.DEPTH_STENCIL_ATTACHMENT,C.RENDERBUFFER,n)}else{const QA=r.isWebGLMultipleRenderTargets===!0?r.texture:[r.texture];for(let z=0;z<QA.length;z++){const IA=QA[z],MA=Q.convert(IA.format,IA.colorSpace),eA=Q.convert(IA.type),hA=F(IA.internalFormat,MA,eA,IA.colorSpace),KA=dA(r);f&&nA(r)===!1?C.renderbufferStorageMultisample(C.RENDERBUFFER,KA,hA,r.width,r.height):nA(r)?o.renderbufferStorageMultisampleEXT(C.RENDERBUFFER,KA,hA,r.width,r.height):C.renderbufferStorage(C.RENDERBUFFER,hA,r.width,r.height)}}C.bindRenderbuffer(C.RENDERBUFFER,null)}function rA(n,r){if(r&&r.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(I.bindFramebuffer(C.FRAMEBUFFER,n),!(r.depthTexture&&r.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!g.get(r.depthTexture).__webglTexture||r.depthTexture.image.width!==r.width||r.depthTexture.image.height!==r.height)&&(r.depthTexture.image.width=r.width,r.depthTexture.image.height=r.height,r.depthTexture.needsUpdate=!0),b(r.depthTexture,0);const f=g.get(r.depthTexture).__webglTexture,QA=dA(r);if(r.depthTexture.format===QC)nA(r)?o.framebufferTexture2DMultisampleEXT(C.FRAMEBUFFER,C.DEPTH_ATTACHMENT,C.TEXTURE_2D,f,0,QA):C.framebufferTexture2D(C.FRAMEBUFFER,C.DEPTH_ATTACHMENT,C.TEXTURE_2D,f,0);else if(r.depthTexture.format===KC)nA(r)?o.framebufferTexture2DMultisampleEXT(C.FRAMEBUFFER,C.DEPTH_STENCIL_ATTACHMENT,C.TEXTURE_2D,f,0,QA):C.framebufferTexture2D(C.FRAMEBUFFER,C.DEPTH_STENCIL_ATTACHMENT,C.TEXTURE_2D,f,0);else throw new Error("Unknown depthTexture format")}function AI(n){const r=g.get(n),f=n.isWebGLCubeRenderTarget===!0;if(n.depthTexture&&!r.__autoAllocateDepthBuffer){if(f)throw new Error("target.depthTexture not supported in Cube render targets");rA(r.__webglFramebuffer,n)}else if(f){r.__webglDepthbuffer=[];for(let QA=0;QA<6;QA++)I.bindFramebuffer(C.FRAMEBUFFER,r.__webglFramebuffer[QA]),r.__webglDepthbuffer[QA]=C.createRenderbuffer(),RA(r.__webglDepthbuffer[QA],n,!1)}else I.bindFramebuffer(C.FRAMEBUFFER,r.__webglFramebuffer),r.__webglDepthbuffer=C.createRenderbuffer(),RA(r.__webglDepthbuffer,n,!1);I.bindFramebuffer(C.FRAMEBUFFER,null)}function HA(n,r,f){const QA=g.get(n);r!==void 0&&FA(QA.__webglFramebuffer,n,n.texture,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,0),f!==void 0&&AI(n)}function m(n){const r=n.texture,f=g.get(n),QA=g.get(r);n.addEventListener("dispose",V),n.isWebGLMultipleRenderTargets!==!0&&(QA.__webglTexture===void 0&&(QA.__webglTexture=C.createTexture()),QA.__version=r.version,E.memory.textures++);const z=n.isWebGLCubeRenderTarget===!0,IA=n.isWebGLMultipleRenderTargets===!0,MA=G(n)||i;if(z){f.__webglFramebuffer=[];for(let eA=0;eA<6;eA++)if(i&&r.mipmaps&&r.mipmaps.length>0){f.__webglFramebuffer[eA]=[];for(let hA=0;hA<r.mipmaps.length;hA++)f.__webglFramebuffer[eA][hA]=C.createFramebuffer()}else f.__webglFramebuffer[eA]=C.createFramebuffer()}else{if(i&&r.mipmaps&&r.mipmaps.length>0){f.__webglFramebuffer=[];for(let eA=0;eA<r.mipmaps.length;eA++)f.__webglFramebuffer[eA]=C.createFramebuffer()}else f.__webglFramebuffer=C.createFramebuffer();if(IA)if(B.drawBuffers){const eA=n.texture;for(let hA=0,KA=eA.length;hA<KA;hA++){const fA=g.get(eA[hA]);fA.__webglTexture===void 0&&(fA.__webglTexture=C.createTexture(),E.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(i&&n.samples>0&&nA(n)===!1){const eA=IA?r:[r];f.__webglMultisampledFramebuffer=C.createFramebuffer(),f.__webglColorRenderbuffer=[],I.bindFramebuffer(C.FRAMEBUFFER,f.__webglMultisampledFramebuffer);for(let hA=0;hA<eA.length;hA++){const KA=eA[hA];f.__webglColorRenderbuffer[hA]=C.createRenderbuffer(),C.bindRenderbuffer(C.RENDERBUFFER,f.__webglColorRenderbuffer[hA]);const fA=Q.convert(KA.format,KA.colorSpace),gA=Q.convert(KA.type),CI=F(KA.internalFormat,fA,gA,KA.colorSpace,n.isXRRenderTarget===!0),vA=dA(n);C.renderbufferStorageMultisample(C.RENDERBUFFER,vA,CI,n.width,n.height),C.framebufferRenderbuffer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+hA,C.RENDERBUFFER,f.__webglColorRenderbuffer[hA])}C.bindRenderbuffer(C.RENDERBUFFER,null),n.depthBuffer&&(f.__webglDepthRenderbuffer=C.createRenderbuffer(),RA(f.__webglDepthRenderbuffer,n,!0)),I.bindFramebuffer(C.FRAMEBUFFER,null)}}if(z){I.bindTexture(C.TEXTURE_CUBE_MAP,QA.__webglTexture),yA(C.TEXTURE_CUBE_MAP,r,MA);for(let eA=0;eA<6;eA++)if(i&&r.mipmaps&&r.mipmaps.length>0)for(let hA=0;hA<r.mipmaps.length;hA++)FA(f.__webglFramebuffer[eA][hA],n,r,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+eA,hA);else FA(f.__webglFramebuffer[eA],n,r,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+eA,0);l(r,MA)&&k(C.TEXTURE_CUBE_MAP),I.unbindTexture()}else if(IA){const eA=n.texture;for(let hA=0,KA=eA.length;hA<KA;hA++){const fA=eA[hA],gA=g.get(fA);I.bindTexture(C.TEXTURE_2D,gA.__webglTexture),yA(C.TEXTURE_2D,fA,MA),FA(f.__webglFramebuffer,n,fA,C.COLOR_ATTACHMENT0+hA,C.TEXTURE_2D,0),l(fA,MA)&&k(C.TEXTURE_2D)}I.unbindTexture()}else{let eA=C.TEXTURE_2D;if((n.isWebGL3DRenderTarget||n.isWebGLArrayRenderTarget)&&(i?eA=n.isWebGL3DRenderTarget?C.TEXTURE_3D:C.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),I.bindTexture(eA,QA.__webglTexture),yA(eA,r,MA),i&&r.mipmaps&&r.mipmaps.length>0)for(let hA=0;hA<r.mipmaps.length;hA++)FA(f.__webglFramebuffer[hA],n,r,C.COLOR_ATTACHMENT0,eA,hA);else FA(f.__webglFramebuffer,n,r,C.COLOR_ATTACHMENT0,eA,0);l(r,MA)&&k(eA),I.unbindTexture()}n.depthBuffer&&AI(n)}function NI(n){const r=G(n)||i,f=n.isWebGLMultipleRenderTargets===!0?n.texture:[n.texture];for(let QA=0,z=f.length;QA<z;QA++){const IA=f[QA];if(l(IA,r)){const MA=n.isWebGLCubeRenderTarget?C.TEXTURE_CUBE_MAP:C.TEXTURE_2D,eA=g.get(IA).__webglTexture;I.bindTexture(MA,eA),k(MA),I.unbindTexture()}}}function UA(n){if(i&&n.samples>0&&nA(n)===!1){const r=n.isWebGLMultipleRenderTargets?n.texture:[n.texture],f=n.width,QA=n.height;let z=C.COLOR_BUFFER_BIT;const IA=[],MA=n.stencilBuffer?C.DEPTH_STENCIL_ATTACHMENT:C.DEPTH_ATTACHMENT,eA=g.get(n),hA=n.isWebGLMultipleRenderTargets===!0;if(hA)for(let KA=0;KA<r.length;KA++)I.bindFramebuffer(C.FRAMEBUFFER,eA.__webglMultisampledFramebuffer),C.framebufferRenderbuffer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+KA,C.RENDERBUFFER,null),I.bindFramebuffer(C.FRAMEBUFFER,eA.__webglFramebuffer),C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0+KA,C.TEXTURE_2D,null,0);I.bindFramebuffer(C.READ_FRAMEBUFFER,eA.__webglMultisampledFramebuffer),I.bindFramebuffer(C.DRAW_FRAMEBUFFER,eA.__webglFramebuffer);for(let KA=0;KA<r.length;KA++){IA.push(C.COLOR_ATTACHMENT0+KA),n.depthBuffer&&IA.push(MA);const fA=eA.__ignoreDepthValues!==void 0?eA.__ignoreDepthValues:!1;if(fA===!1&&(n.depthBuffer&&(z|=C.DEPTH_BUFFER_BIT),n.stencilBuffer&&(z|=C.STENCIL_BUFFER_BIT)),hA&&C.framebufferRenderbuffer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.RENDERBUFFER,eA.__webglColorRenderbuffer[KA]),fA===!0&&(C.invalidateFramebuffer(C.READ_FRAMEBUFFER,[MA]),C.invalidateFramebuffer(C.DRAW_FRAMEBUFFER,[MA])),hA){const gA=g.get(r[KA]).__webglTexture;C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,gA,0)}C.blitFramebuffer(0,0,f,QA,0,0,f,QA,z,C.NEAREST),a&&C.invalidateFramebuffer(C.READ_FRAMEBUFFER,IA)}if(I.bindFramebuffer(C.READ_FRAMEBUFFER,null),I.bindFramebuffer(C.DRAW_FRAMEBUFFER,null),hA)for(let KA=0;KA<r.length;KA++){I.bindFramebuffer(C.FRAMEBUFFER,eA.__webglMultisampledFramebuffer),C.framebufferRenderbuffer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+KA,C.RENDERBUFFER,eA.__webglColorRenderbuffer[KA]);const fA=g.get(r[KA]).__webglTexture;I.bindFramebuffer(C.FRAMEBUFFER,eA.__webglFramebuffer),C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0+KA,C.TEXTURE_2D,fA,0)}I.bindFramebuffer(C.DRAW_FRAMEBUFFER,eA.__webglMultisampledFramebuffer)}}function dA(n){return Math.min(B.maxSamples,n.samples)}function nA(n){const r=g.get(n);return i&&n.samples>0&&A.has("WEBGL_multisampled_render_to_texture")===!0&&r.__useRenderToTexture!==!1}function eI(n){const r=E.render.frame;D.get(n)!==r&&(D.set(n,r),n.update())}function mA(n,r){const f=n.colorSpace,QA=n.format,z=n.type;return n.isCompressedTexture===!0||n.isVideoTexture===!0||n.format===GE||f!==Kg&&f!==zI&&(iI.getTransfer(f)===DI?i===!1?A.has("EXT_sRGB")===!0&&QA===Eg?(n.format=GE,n.minFilter=WI,n.generateMipmaps=!1):r=uo.sRGBToLinear(r):(QA!==Eg||z!==Tg)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",f)),r}this.allocateTextureUnit=p,this.resetTextureUnits=EA,this.setTexture2D=b,this.setTexture2DArray=X,this.setTexture3D=j,this.setTextureCube=P,this.rebindTextures=HA,this.setupRenderTarget=m,this.updateRenderTargetMipmap=NI,this.updateMultisampleRenderTarget=UA,this.setupDepthRenderbuffer=AI,this.setupFrameBufferTexture=FA,this.useMultisampledRTT=nA}function SS(C,A,I){const g=I.isWebGL2;function B(Q,E=zI){let i;const o=iI.getTransfer(E);if(Q===Tg)return C.UNSIGNED_BYTE;if(Q===ji)return C.UNSIGNED_SHORT_4_4_4_4;if(Q===Vi)return C.UNSIGNED_SHORT_5_5_5_1;if(Q===fe)return C.BYTE;if(Q===Te)return C.SHORT;if(Q===oE)return C.UNSIGNED_SHORT;if(Q===Pi)return C.INT;if(Q===xg)return C.UNSIGNED_INT;if(Q===Ug)return C.FLOAT;if(Q===aB)return g?C.HALF_FLOAT:(i=A.get("OES_texture_half_float"),i!==null?i.HALF_FLOAT_OES:null);if(Q===xe)return C.ALPHA;if(Q===Eg)return C.RGBA;if(Q===Oe)return C.LUMINANCE;if(Q===be)return C.LUMINANCE_ALPHA;if(Q===QC)return C.DEPTH_COMPONENT;if(Q===KC)return C.DEPTH_STENCIL;if(Q===GE)return i=A.get("EXT_sRGB"),i!==null?i.SRGB_ALPHA_EXT:null;if(Q===ve)return C.RED;if(Q===Xi)return C.RED_INTEGER;if(Q===Ze)return C.RG;if(Q===_i)return C.RG_INTEGER;if(Q===zi)return C.RGBA_INTEGER;if(Q===aE||Q===DE||Q===eE||Q===tE)if(o===DI)if(i=A.get("WEBGL_compressed_texture_s3tc_srgb"),i!==null){if(Q===aE)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Q===DE)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Q===eE)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Q===tE)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=A.get("WEBGL_compressed_texture_s3tc"),i!==null){if(Q===aE)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Q===DE)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Q===eE)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Q===tE)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Q===$i||Q===Ao||Q===Io||Q===go)if(i=A.get("WEBGL_compressed_texture_pvrtc"),i!==null){if(Q===$i)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Q===Ao)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Q===Io)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Q===go)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Q===Co)return i=A.get("WEBGL_compressed_texture_etc1"),i!==null?i.COMPRESSED_RGB_ETC1_WEBGL:null;if(Q===Bo||Q===Qo)if(i=A.get("WEBGL_compressed_texture_etc"),i!==null){if(Q===Bo)return o===DI?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(Q===Qo)return o===DI?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(Q===Eo||Q===io||Q===oo||Q===ao||Q===Do||Q===eo||Q===to||Q===so||Q===ho||Q===Go||Q===wo||Q===So||Q===ro||Q===co)if(i=A.get("WEBGL_compressed_texture_astc"),i!==null){if(Q===Eo)return o===DI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Q===io)return o===DI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Q===oo)return o===DI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Q===ao)return o===DI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Q===Do)return o===DI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Q===eo)return o===DI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Q===to)return o===DI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Q===so)return o===DI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Q===ho)return o===DI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Q===Go)return o===DI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Q===wo)return o===DI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Q===So)return o===DI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Q===ro)return o===DI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Q===co)return o===DI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Q===sE||Q===ko||Q===Mo)if(i=A.get("EXT_texture_compression_bptc"),i!==null){if(Q===sE)return o===DI?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Q===ko)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Q===Mo)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Q===We||Q===yo||Q===no||Q===lo)if(i=A.get("EXT_texture_compression_rgtc"),i!==null){if(Q===sE)return i.COMPRESSED_RED_RGTC1_EXT;if(Q===yo)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Q===no)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Q===lo)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return Q===BC?g?C.UNSIGNED_INT_24_8:(i=A.get("WEBGL_depth_texture"),i!==null?i.UNSIGNED_INT_24_8_WEBGL:null):C[Q]!==void 0?C[Q]:null}return{convert:B}}class rS extends Ag{constructor(A=[]){super(),this.isArrayCamera=!0,this.cameras=A}}class wQ extends RI{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cS={type:"move"};class ZE{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wQ,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wQ,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wQ,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(A){return this._targetRay!==null&&this._targetRay.dispatchEvent(A),this._grip!==null&&this._grip.dispatchEvent(A),this._hand!==null&&this._hand.dispatchEvent(A),this}connect(A){if(A&&A.hand){const I=this._hand;if(I)for(const g of A.hand.values())this._getHandJoint(I,g)}return this.dispatchEvent({type:"connected",data:A}),this}disconnect(A){return this.dispatchEvent({type:"disconnected",data:A}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(A,I,g){let B=null,Q=null,E=null;const i=this._targetRay,o=this._grip,a=this._hand;if(A&&I.session.visibilityState!=="visible-blurred"){if(a&&A.hand){E=!0;for(const M of A.hand.values()){const G=I.getJointPose(M,g),e=this._getHandJoint(a,M);G!==null&&(e.matrix.fromArray(G.transform.matrix),e.matrix.decompose(e.position,e.rotation,e.scale),e.matrixWorldNeedsUpdate=!0,e.jointRadius=G.radius),e.visible=G!==null}const D=a.joints["index-finger-tip"],t=a.joints["thumb-tip"],s=D.position.distanceTo(t.position),w=.02,S=.005;a.inputState.pinching&&s>w+S?(a.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:A.handedness,target:this})):!a.inputState.pinching&&s<=w-S&&(a.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:A.handedness,target:this}))}else o!==null&&A.gripSpace&&(Q=I.getPose(A.gripSpace,g),Q!==null&&(o.matrix.fromArray(Q.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,Q.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(Q.linearVelocity)):o.hasLinearVelocity=!1,Q.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(Q.angularVelocity)):o.hasAngularVelocity=!1));i!==null&&(B=I.getPose(A.targetRaySpace,g),B===null&&Q!==null&&(B=Q),B!==null&&(i.matrix.fromArray(B.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,B.linearVelocity?(i.hasLinearVelocity=!0,i.linearVelocity.copy(B.linearVelocity)):i.hasLinearVelocity=!1,B.angularVelocity?(i.hasAngularVelocity=!0,i.angularVelocity.copy(B.angularVelocity)):i.hasAngularVelocity=!1,this.dispatchEvent(cS)))}return i!==null&&(i.visible=B!==null),o!==null&&(o.visible=Q!==null),a!==null&&(a.visible=E!==null),this}_getHandJoint(A,I){if(A.joints[I.jointName]===void 0){const g=new wQ;g.matrixAutoUpdate=!1,g.visible=!1,A.joints[I.jointName]=g,A.add(g)}return A.joints[I.jointName]}}const kS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}


uniform float uTime;
uniform vec3 cameraPosition;
uniform float uFrequency;
uniform float uSpeed;

varying vec3 vPosition;
varying vec3 vNormal;

void main() {
    vec3 normal = normalize(vNormal);
    if (!gl_FrontFacing) {
        normal *= -1.;
    }

    float stripes = mod(vPosition.y * uFrequency - uTime * .01 * uSpeed, 1.);
    stripes = pow(stripes, 3.);

    vec3 viewDirection = normalize(vPosition - cameraPosition);
    float fresnel = dot(viewDirection, normal) + 1.;
    fresnel = pow(fresnel, 2.);

    float falloff = smoothstep(2., 0., fresnel);

    float holographic = stripes * fresnel;
    holographic *= fresnel * 2.;
    holographic *= falloff;

    gl_FragColor = vec4(.25, .9, .75, holographic);
}`,dD=`uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform float uTime;
uniform float uGlitchStrength;

attribute vec3 position;
attribute vec3 normal;
attribute vec3 cameraPosition;

varying vec3 vPosition;
varying vec3 vNormal;

float random2D(vec2 value) {
    return fract(sin(dot(value.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

void main() {
    vec3 pos = position;
    pos.x += (random2D(pos.xz + uTime) - .5) * uGlitchStrength;
    pos.z += (random2D(pos.xz + uTime) - .5) * uGlitchStrength;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

    
    
    vPosition = position;

    vec4 modelNormal = modelMatrix * vec4(normal, 0.);
    vNormal = modelNormal.xyz;
}`,_S=`precision highp float;

void main() {
    gl_FragColor = vec4(.0);
}`;class YD{constructor(){TA(this,"material");TA(this,"audio",new Audio(VS));TA(this,"receiveShadow",!1);TA(this,"depthMaterial");TA(this,"lineMaterial",new kB({color:4187583,transparent:!0,opacity:.5}));this.material=new va({vertexShader:dD,fragmentShader:XS,transparent:!0,side:tg,depthWrite:!1,blending:AE,uniforms:{uTime:{value:dB.elapsed},uGlitchStrength:{value:0},uFrequency:{value:gI.hologram.frequency},uSpeed:{value:gI.hologram.speed}}}),this.depthMaterial=new va({vertexShader:dD,fragmentShader:_S,uniforms:this.material.uniforms})}update(){this.material.uniforms.uTime.value=dB.elapsed,this.material.uniforms.uGlitchStrength.value=LS(this.material.uniforms.uGlitchStrength.value,0,HS(.1,dB.delta)),this.material.uniforms.uFrequency.value=gI.hologram.frequency,this.material.uniforms.uSpeed.value=gI.hologram.speed}onContact(A){this.material.uniforms.uGlitchStrength.value=A*1.5}dispose(){this.material.dispose(),this.depthMaterial.dispose(),this.lineMaterial.dispose()}}const zS="/w3/assets/collision-DrU3Smvg.mp3";class LD{constructor(){TA(this,"material");TA(this,"audio",new Audio(zS));TA(this,"lineMaterial",new kB({color:6710886}));TA(this,"receiveShadow",!0);this.material=new Za({color:13369344,roughness:gI.mettalic.roughness,metalness:gI.mettalic.metalness})}update(){this.material.roughness=gI.mettalic.roughness,this.material.metalness=gI.mettalic.metalness}onContact(){}dispose(){this.material.dispose(),this.lineMaterial.dispose()}}class $S{constructor({radius:A,length:I,count:g}){TA(this,"scene",new SQ);TA(this,"pendulumns",[]);TA(this,"abortController",new AbortController);this.pendulumns=[...YS(0,g)].map(B=>{const Q=B*A*2-A*(g-1),E=(()=>{switch(gI.reset.type){case"metallic":return LD;case"hologram":return YD;case"random":return Math.random()>.5?YD:LD;default:throw new Error("Invalid reset type")}})(),i=new jS(new E,{radius:A-Math.max(A*.02,.009),position:{x:Q,y:0,z:0},length:I});return this.scene.add(i.scene),i}),IC.addEventListener("collision",B=>{this.pendulumns.filter(Q=>B.detail.colliders.includes(Q.collider)).forEach(Q=>Q.playCollisionSound(B.detail.force))},{signal:this.abortController.signal})}applyImpulse(A,I){this.pendulumns.slice(0,I).forEach(g=>g.applyImpulse(A))}update(){IC.update(),this.pendulumns.forEach(A=>A.update())}dispose(){this.abortController.abort(),this.pendulumns.forEach(A=>A.dispose())}}class Ar{constructor(){TA(this,"scene",new SQ);TA(this,"directionalLightCameraHelper");TA(this,"cradle");this.resetCradle(),gI.addEventListener("applyImpulse",()=>{var I;(I=this.cradle)==null||I.applyImpulse(-gI.impulse.strength,gI.impulse.count)}),gI.addEventListener("reset",()=>{this.resetCradle()});const A=new Dg(new cB(100,100),new Za({color:16777215}));A.receiveShadow=!0,A.rotation.x=-Math.PI/2,A.position.y=-2,this.scene.add(A),this.addLights()}addLights(){const A=new qS(16777215,.95);this.scene.add(A);const I=new RS(16777215,1.5);I.castShadow=!0,I.position.set(3,3,3),this.scene.add(I);const g=new pS(I);this.scene.add(g),g.visible=!1,I.shadow.camera.near=1,I.shadow.camera.far=15,I.shadow.camera.top=6,I.shadow.camera.right=6,I.shadow.camera.bottom=-6,I.shadow.camera.left=-6,I.shadow.mapSize.width=2**10,I.shadow.mapSize.height=2**10;const B=new dS(I.shadow.camera);this.scene.add(B),this.directionalLightCameraHelper=B}resetCradle(){var g;this.cradle&&this.scene.remove(this.cradle.scene),(g=this.cradle)==null||g.dispose();const{reset:A}=gI,I=new $S({radius:A.radius,length:A.length,count:A.count});this.cradle=I,this.scene.add(I.scene)}update(){var A;(A=this.cradle)==null||A.update(),this.directionalLightCameraHelper&&(this.directionalLightCameraHelper.visible=gI.helpers.directionalLightCameraHelper)}}const HD=new Ar,uD={type:"change"},Ji={type:"start"},mD={type:"end"},PQ=new NE,fD=new jg,Ir=Math.cos(70*St.DEG2RAD);class gr extends iC{constructor(A,I){super(),this.object=A,this.domElement=I,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Y,this.cursor=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:MC.ROTATE,MIDDLE:MC.DOLLY,RIGHT:MC.PAN},this.touches={ONE:yC.ROTATE,TWO:yC.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return i.phi},this.getAzimuthalAngle=function(){return i.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(K){K.addEventListener("keydown",KA),this._domElementKeyEvents=K},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",KA),this._domElementKeyEvents=null},this.saveState=function(){g.target0.copy(g.target),g.position0.copy(g.object.position),g.zoom0=g.object.zoom},this.reset=function(){g.target.copy(g.target0),g.object.position.copy(g.position0),g.object.zoom=g.zoom0,g.object.updateProjectionMatrix(),g.dispatchEvent(uD),g.update(),Q=B.NONE},this.update=function(){const K=new Y,_=new aC().setFromUnitVectors(A.up,new Y(0,1,0)),GA=_.clone().invert(),cA=new Y,bA=new aC,U=new Y,CA=2*Math.PI;return function($=null){const qA=g.object.position;K.copy(qA).sub(g.target),K.applyQuaternion(_),i.setFromVector3(K),g.autoRotate&&Q===B.NONE&&W(c($)),g.enableDamping?(i.theta+=o.theta*g.dampingFactor,i.phi+=o.phi*g.dampingFactor):(i.theta+=o.theta,i.phi+=o.phi);let kA=g.minAzimuthAngle,ZA=g.maxAzimuthAngle;isFinite(kA)&&isFinite(ZA)&&(kA<-Math.PI?kA+=CA:kA>Math.PI&&(kA-=CA),ZA<-Math.PI?ZA+=CA:ZA>Math.PI&&(ZA-=CA),kA<=ZA?i.theta=Math.max(kA,Math.min(ZA,i.theta)):i.theta=i.theta>(kA+ZA)/2?Math.max(kA,i.theta):Math.min(ZA,i.theta)),i.phi=Math.max(g.minPolarAngle,Math.min(g.maxPolarAngle,i.phi)),i.makeSafe(),g.enableDamping===!0?g.target.addScaledVector(D,g.dampingFactor):g.target.add(D),g.target.sub(g.cursor),g.target.clampLength(g.minTargetRadius,g.maxTargetRadius),g.target.add(g.cursor),g.zoomToCursor&&q||g.object.isOrthographicCamera?i.radius=BA(i.radius):i.radius=BA(i.radius*a),K.setFromSpherical(i),K.applyQuaternion(GA),qA.copy(g.target).add(K),g.object.lookAt(g.target),g.enableDamping===!0?(o.theta*=1-g.dampingFactor,o.phi*=1-g.dampingFactor,D.multiplyScalar(1-g.dampingFactor)):(o.set(0,0,0),D.set(0,0,0));let BI=!1;if(g.zoomToCursor&&q){let hI=null;if(g.object.isPerspectiveCamera){const pI=K.length();hI=BA(pI*a);const QI=pI-hI;g.object.position.addScaledVector(F,QI),g.object.updateMatrixWorld()}else if(g.object.isOrthographicCamera){const pI=new Y(d.x,d.y,0);pI.unproject(g.object),g.object.zoom=Math.max(g.minZoom,Math.min(g.maxZoom,g.object.zoom/a)),g.object.updateProjectionMatrix(),BI=!0;const QI=new Y(d.x,d.y,0);QI.unproject(g.object),g.object.position.sub(QI).add(pI),g.object.updateMatrixWorld(),hI=K.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),g.zoomToCursor=!1;hI!==null&&(this.screenSpacePanning?g.target.set(0,0,-1).transformDirection(g.object.matrix).multiplyScalar(hI).add(g.object.position):(PQ.origin.copy(g.object.position),PQ.direction.set(0,0,-1).transformDirection(g.object.matrix),Math.abs(g.object.up.dot(PQ.direction))<Ir?A.lookAt(g.target):(fD.setFromNormalAndCoplanarPoint(g.object.up,g.target),PQ.intersectPlane(fD,g.target))))}else g.object.isOrthographicCamera&&(BI=a!==1,BI&&(g.object.zoom=Math.max(g.minZoom,Math.min(g.maxZoom,g.object.zoom/a)),g.object.updateProjectionMatrix()));return a=1,q=!1,BI||cA.distanceToSquared(g.object.position)>E||8*(1-bA.dot(g.object.quaternion))>E||U.distanceToSquared(g.target)>0?(g.dispatchEvent(uD),cA.copy(g.object.position),bA.copy(g.object.quaternion),U.copy(g.target),!0):!1}}(),this.dispose=function(){g.domElement.removeEventListener("contextmenu",CI),g.domElement.removeEventListener("pointerdown",n),g.domElement.removeEventListener("pointercancel",f),g.domElement.removeEventListener("wheel",IA),g.domElement.removeEventListener("pointermove",r),g.domElement.removeEventListener("pointerup",f),g._domElementKeyEvents!==null&&(g._domElementKeyEvents.removeEventListener("keydown",KA),g._domElementKeyEvents=null)};const g=this,B={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let Q=B.NONE;const E=1e-6,i=new Va,o=new Va;let a=1;const D=new Y,t=new LA,s=new LA,w=new LA,S=new LA,M=new LA,G=new LA,e=new LA,l=new LA,k=new LA,F=new Y,d=new LA;let q=!1;const J=[],V={};let aA=!1;function c(K){return K!==null?2*Math.PI/60*g.autoRotateSpeed*K:2*Math.PI/60/60*g.autoRotateSpeed}function N(K){const _=Math.abs(K*.01);return Math.pow(.95,g.zoomSpeed*_)}function W(K){o.theta-=K}function EA(K){o.phi-=K}const p=function(){const K=new Y;return function(_,GA){K.setFromMatrixColumn(GA,0),K.multiplyScalar(-_),D.add(K)}}(),Z=function(){const K=new Y;return function(_,GA){g.screenSpacePanning===!0?K.setFromMatrixColumn(GA,1):(K.setFromMatrixColumn(GA,0),K.crossVectors(g.object.up,K)),K.multiplyScalar(_),D.add(K)}}(),b=function(){const K=new Y;return function(_,GA){const cA=g.domElement;if(g.object.isPerspectiveCamera){const bA=g.object.position;K.copy(bA).sub(g.target);let U=K.length();U*=Math.tan(g.object.fov/2*Math.PI/180),p(2*_*U/cA.clientHeight,g.object.matrix),Z(2*GA*U/cA.clientHeight,g.object.matrix)}else g.object.isOrthographicCamera?(p(_*(g.object.right-g.object.left)/g.object.zoom/cA.clientWidth,g.object.matrix),Z(GA*(g.object.top-g.object.bottom)/g.object.zoom/cA.clientHeight,g.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),g.enablePan=!1)}}();function X(K){g.object.isPerspectiveCamera||g.object.isOrthographicCamera?a/=K:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),g.enableZoom=!1)}function j(K){g.object.isPerspectiveCamera||g.object.isOrthographicCamera?a*=K:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),g.enableZoom=!1)}function P(K,_){if(!g.zoomToCursor)return;q=!0;const GA=g.domElement.getBoundingClientRect(),cA=K-GA.left,bA=_-GA.top,U=GA.width,CA=GA.height;d.x=cA/U*2-1,d.y=-(bA/CA)*2+1,F.set(d.x,d.y,1).unproject(g.object).sub(g.object.position).normalize()}function BA(K){return Math.max(g.minDistance,Math.min(g.maxDistance,K))}function AA(K){t.set(K.clientX,K.clientY)}function wA(K){P(K.clientX,K.clientX),e.set(K.clientX,K.clientY)}function yA(K){S.set(K.clientX,K.clientY)}function v(K){s.set(K.clientX,K.clientY),w.subVectors(s,t).multiplyScalar(g.rotateSpeed);const _=g.domElement;W(2*Math.PI*w.x/_.clientHeight),EA(2*Math.PI*w.y/_.clientHeight),t.copy(s),g.update()}function iA(K){l.set(K.clientX,K.clientY),k.subVectors(l,e),k.y>0?X(N(k.y)):k.y<0&&j(N(k.y)),e.copy(l),g.update()}function sA(K){M.set(K.clientX,K.clientY),G.subVectors(M,S).multiplyScalar(g.panSpeed),b(G.x,G.y),S.copy(M),g.update()}function FA(K){P(K.clientX,K.clientY),K.deltaY<0?j(N(K.deltaY)):K.deltaY>0&&X(N(K.deltaY)),g.update()}function RA(K){let _=!1;switch(K.code){case g.keys.UP:K.ctrlKey||K.metaKey||K.shiftKey?EA(2*Math.PI*g.rotateSpeed/g.domElement.clientHeight):b(0,g.keyPanSpeed),_=!0;break;case g.keys.BOTTOM:K.ctrlKey||K.metaKey||K.shiftKey?EA(-2*Math.PI*g.rotateSpeed/g.domElement.clientHeight):b(0,-g.keyPanSpeed),_=!0;break;case g.keys.LEFT:K.ctrlKey||K.metaKey||K.shiftKey?W(2*Math.PI*g.rotateSpeed/g.domElement.clientHeight):b(g.keyPanSpeed,0),_=!0;break;case g.keys.RIGHT:K.ctrlKey||K.metaKey||K.shiftKey?W(-2*Math.PI*g.rotateSpeed/g.domElement.clientHeight):b(-g.keyPanSpeed,0),_=!0;break}_&&(K.preventDefault(),g.update())}function rA(K){if(J.length===1)t.set(K.pageX,K.pageY);else{const _=tA(K),GA=.5*(K.pageX+_.x),cA=.5*(K.pageY+_.y);t.set(GA,cA)}}function AI(K){if(J.length===1)S.set(K.pageX,K.pageY);else{const _=tA(K),GA=.5*(K.pageX+_.x),cA=.5*(K.pageY+_.y);S.set(GA,cA)}}function HA(K){const _=tA(K),GA=K.pageX-_.x,cA=K.pageY-_.y,bA=Math.sqrt(GA*GA+cA*cA);e.set(0,bA)}function m(K){g.enableZoom&&HA(K),g.enablePan&&AI(K)}function NI(K){g.enableZoom&&HA(K),g.enableRotate&&rA(K)}function UA(K){if(J.length==1)s.set(K.pageX,K.pageY);else{const GA=tA(K),cA=.5*(K.pageX+GA.x),bA=.5*(K.pageY+GA.y);s.set(cA,bA)}w.subVectors(s,t).multiplyScalar(g.rotateSpeed);const _=g.domElement;W(2*Math.PI*w.x/_.clientHeight),EA(2*Math.PI*w.y/_.clientHeight),t.copy(s)}function dA(K){if(J.length===1)M.set(K.pageX,K.pageY);else{const _=tA(K),GA=.5*(K.pageX+_.x),cA=.5*(K.pageY+_.y);M.set(GA,cA)}G.subVectors(M,S).multiplyScalar(g.panSpeed),b(G.x,G.y),S.copy(M)}function nA(K){const _=tA(K),GA=K.pageX-_.x,cA=K.pageY-_.y,bA=Math.sqrt(GA*GA+cA*cA);l.set(0,bA),k.set(0,Math.pow(l.y/e.y,g.zoomSpeed)),X(k.y),e.copy(l);const U=(K.pageX+_.x)*.5,CA=(K.pageY+_.y)*.5;P(U,CA)}function eI(K){g.enableZoom&&nA(K),g.enablePan&&dA(K)}function mA(K){g.enableZoom&&nA(K),g.enableRotate&&UA(K)}function n(K){g.enabled!==!1&&(J.length===0&&(g.domElement.setPointerCapture(K.pointerId),g.domElement.addEventListener("pointermove",r),g.domElement.addEventListener("pointerup",f)),vA(K),K.pointerType==="touch"?fA(K):QA(K))}function r(K){g.enabled!==!1&&(K.pointerType==="touch"?gA(K):z(K))}function f(K){switch(YA(K),J.length){case 0:g.domElement.releasePointerCapture(K.pointerId),g.domElement.removeEventListener("pointermove",r),g.domElement.removeEventListener("pointerup",f),g.dispatchEvent(mD),Q=B.NONE;break;case 1:const _=J[0],GA=V[_];fA({pointerId:_,pageX:GA.x,pageY:GA.y});break}}function QA(K){let _;switch(K.button){case 0:_=g.mouseButtons.LEFT;break;case 1:_=g.mouseButtons.MIDDLE;break;case 2:_=g.mouseButtons.RIGHT;break;default:_=-1}switch(_){case MC.DOLLY:if(g.enableZoom===!1)return;wA(K),Q=B.DOLLY;break;case MC.ROTATE:if(K.ctrlKey||K.metaKey||K.shiftKey){if(g.enablePan===!1)return;yA(K),Q=B.PAN}else{if(g.enableRotate===!1)return;AA(K),Q=B.ROTATE}break;case MC.PAN:if(K.ctrlKey||K.metaKey||K.shiftKey){if(g.enableRotate===!1)return;AA(K),Q=B.ROTATE}else{if(g.enablePan===!1)return;yA(K),Q=B.PAN}break;default:Q=B.NONE}Q!==B.NONE&&g.dispatchEvent(Ji)}function z(K){switch(Q){case B.ROTATE:if(g.enableRotate===!1)return;v(K);break;case B.DOLLY:if(g.enableZoom===!1)return;iA(K);break;case B.PAN:if(g.enablePan===!1)return;sA(K);break}}function IA(K){g.enabled===!1||g.enableZoom===!1||Q!==B.NONE||(K.preventDefault(),g.dispatchEvent(Ji),FA(MA(K)),g.dispatchEvent(mD))}function MA(K){const _=K.deltaMode,GA={clientX:K.clientX,clientY:K.clientY,deltaY:K.deltaY};switch(_){case 1:GA.deltaY*=16;break;case 2:GA.deltaY*=100;break}return K.ctrlKey&&!aA&&(GA.deltaY*=10),GA}function eA(K){K.key==="Control"&&(aA=!0,g.domElement.getRootNode().addEventListener("keyup",hA,{passive:!0,capture:!0}))}function hA(K){K.key==="Control"&&(aA=!1,g.domElement.getRootNode().removeEventListener("keyup",hA,{passive:!0,capture:!0}))}function KA(K){g.enabled===!1||g.enablePan===!1||RA(K)}function fA(K){switch(lA(K),J.length){case 1:switch(g.touches.ONE){case yC.ROTATE:if(g.enableRotate===!1)return;rA(K),Q=B.TOUCH_ROTATE;break;case yC.PAN:if(g.enablePan===!1)return;AI(K),Q=B.TOUCH_PAN;break;default:Q=B.NONE}break;case 2:switch(g.touches.TWO){case yC.DOLLY_PAN:if(g.enableZoom===!1&&g.enablePan===!1)return;m(K),Q=B.TOUCH_DOLLY_PAN;break;case yC.DOLLY_ROTATE:if(g.enableZoom===!1&&g.enableRotate===!1)return;NI(K),Q=B.TOUCH_DOLLY_ROTATE;break;default:Q=B.NONE}break;default:Q=B.NONE}Q!==B.NONE&&g.dispatchEvent(Ji)}function gA(K){switch(lA(K),Q){case B.TOUCH_ROTATE:if(g.enableRotate===!1)return;UA(K),g.update();break;case B.TOUCH_PAN:if(g.enablePan===!1)return;dA(K),g.update();break;case B.TOUCH_DOLLY_PAN:if(g.enableZoom===!1&&g.enablePan===!1)return;eI(K),g.update();break;case B.TOUCH_DOLLY_ROTATE:if(g.enableZoom===!1&&g.enableRotate===!1)return;mA(K),g.update();break;default:Q=B.NONE}}function CI(K){g.enabled!==!1&&K.preventDefault()}function vA(K){J.push(K.pointerId)}function YA(K){delete V[K.pointerId];for(let _=0;_<J.length;_++)if(J[_]==K.pointerId){J.splice(_,1);return}}function lA(K){let _=V[K.pointerId];_===void 0&&(_=new LA,V[K.pointerId]=_),_.set(K.pageX,K.pageY)}function tA(K){const _=K.pointerId===J[0]?J[1]:J[0];return V[_]}g.domElement.addEventListener("contextmenu",CI),g.domElement.addEventListener("pointerdown",n),g.domElement.addEventListener("pointercancel",f),g.domElement.addEventListener("wheel",IA,{passive:!1}),g.domElement.getRootNode().addEventListener("keydown",eA,{passive:!0,capture:!0}),this.update()}}class Cr extends LB{constructor(){super();TA(this,"width",window.innerWidth);TA(this,"height",window.innerHeight);TA(this,"pixelRatio",Math.min(window.devicePixelRatio,2));TA(this,"abortController",new AbortController);window.addEventListener("resize",this.update.bind(this),{signal:this.abortController.signal})}update(){this.width=window.innerWidth,this.height=window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.dispatchTypedEvent("resize",new CustomEvent("resize",{detail:this}))}dispose(){this.abortController.abort()}}const Lg=new Cr,TD=5;class Br{constructor(){TA(this,"camera");this.camera=this.createCamera()}createCamera(){const A=new Ag(this.calcFov(),Lg.width/Lg.height,.1,TD*3);return A.position.z=TD,A}calcFov(){const{height:A}=Lg,I=A/2/1e3;return Math.atan(I)*2*(180/Math.PI)}resize(){this.camera.fov=this.calcFov(),this.camera.aspect=Lg.width/Lg.height,this.camera.updateProjectionMatrix()}}const Fi=new Br;class Qr{constructor(){TA(this,"canvas",document.createElement("canvas"));TA(this,"renderer",new ma({canvas:this.canvas}));TA(this,"controls",new gr(Fi.camera,this.canvas));TA(this,"scene",new SQ);this.initCanvas(),this.controls.enableDamping=!0,this.controls.maxDistance=7.5,this.controls.minDistance=2,this.controls.enablePan=!1,this.controls.maxPolarAngle=Math.PI*(3/4),this.controls.minPolarAngle=Math.PI/4,this.controls.maxAzimuthAngle=Math.PI/2,this.controls.minAzimuthAngle=-Math.PI/2,this.resize(),this.renderer.shadowMap.enabled=!0}initCanvas(){this.canvas.style.display="block",document.body.appendChild(this.canvas)}resize(){Fi.resize(),this.renderer.setSize(Lg.width,Lg.height),this.renderer.setPixelRatio(Lg.pixelRatio)}update(){this.controls.update(),this.renderer.render(this.scene,Fi.camera)}dispose(){this.controls.dispose(),this.renderer.dispose(),this.canvas.remove()}}const Ri=new Qr;function Er(){Ri.resize()}function ir(){HD.update(),Ri.update()}Ri.scene.add(HD.scene),Lg.addEventListener("resize",Er),dB.addEventListener("tick",ir)})();