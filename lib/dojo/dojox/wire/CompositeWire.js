/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojox/wire/CompositeWire",["dojo","dijit","dojox","dojox/wire/_base","dojox/wire/Wire"],function(_1,_2,_3){
_1.getObject("dojox.wire.CompositeWire",1);
_1.declare("dojox.wire.CompositeWire",_3.wire.Wire,{_wireClass:"dojox.wire.CompositeWire",constructor:function(_4){
this._initializeChildren(this.children);
},_getValue:function(_5){
if(!_5||!this.children){
return _5;
}
var _6=(_1.isArray(this.children)?[]:{});
for(var c in this.children){
_6[c]=this.children[c].getValue(_5);
}
return _6;
},_setValue:function(_7,_8){
if(!_7||!this.children){
return _7;
}
for(var c in this.children){
this.children[c].setValue(_8[c],_7);
}
return _7;
},_initializeChildren:function(_9){
if(!_9){
return;
}
for(var c in _9){
var _a=_9[c];
_a.parent=this;
if(!_3.wire.isWire(_a)){
_9[c]=_3.wire.create(_a);
}
}
}});
return _1.getObject("dojox.wire.CompositeWire");
});
require(["dojox/wire/CompositeWire"]);