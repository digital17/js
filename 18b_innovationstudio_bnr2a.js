(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.wood = function() {
	this.initialize(img.wood);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,350);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.vflash2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAyFlIkQrJICtAAIEQLJg");
	this.shape.setTransform(22.3,35.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.vflash2, new cjs.Rectangle(0,0,44.7,71.4), null);


(lib.vflash1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjdlfICrgKIEPLJIiqAKg");
	this.shape.setTransform(22.2,35.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.vflash1, new cjs.Rectangle(0,-0.9,44.3,72.3), null);


(lib.Vbreakapart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhDFhIkbrBICqAAIC2HtIC3ntICmAAIkbLBg");
	this.shape.setTransform(39.5,47.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Vbreakapart, new cjs.Rectangle(0,0,78.2,103.9), null);


(lib.Tween30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#301558").s().p("AgkBCQgHgDgFgGQgFgFgDgIQgDgHAAgJIABgMIADgMQADgGAJgLIAIgIIAJgFIAKgDIALgBQAGAAAGABQAFACAFAEIAIAHIAFAJIAQg9IAOAAIgkCGIgOAAIAEgQQgHAJgIAEIgJAEQgFACgGAAQgIAAgHgDgAgUgOQgHADgGAHQgFAFgDAIQgDAJAAAJQAAAGACAGQACAFAEAEQADAEAFACQAFACAGAAQAIAAAIgEQAGgDAGgHQAGgGAEgIQAEgJAAgIQAAgGgDgFQgCgFgEgEQgEgEgFgDQgGgCgFAAQgIAAgIAEg");
	this.shape.setTransform(351.8,-1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#301558").s().p("AgUAvQgIgDgGgFQgFgGgDgIQgDgHAAgJQAAgIAEgNQADgHAJgLIAIgIIAJgGIALgEIAKgBQAJAAAHACQAHAEAFAEQAEAFADAHQACAHAAAIQAAAJgDAIIhKAAIAAADQAAAHACAGQACAEAEAFQADADAGACQAFACAHABQAIgBAHgDQAGgDAHgFIAIAJQgIAHgIADQgOAFgHAAQgJAAgIgDgAgEgjQgGADgFAEQgFAFgDAFQgEAGgCAHIA8AAIABgHIgBgKQgBgEgDgEQgDgEgFgBQgEgCgGAAQgHAAgGACg");
	this.shape_1.setTransform(339.6,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#301558").s().p("AgmAxIAZhfIANAAIgFAZIAJgLIAKgJQAGgEAGgBQAGgCAIAAIgFAQIAAAAQgJAAgHADQgIADgGAFQgGAGgFAIQgFAHgDALIgKAmg");
	this.shape_2.setTransform(330.9,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#301558").s().p("AgUAvQgIgDgGgFQgFgGgDgIQgDgHAAgJQAAgIAEgNQADgHAJgLIAIgIIAJgGIALgEIAKgBQAJAAAHACQAHAEAFAEQAEAFADAHQACAHAAAIQAAAJgDAIIhKAAIAAADQAAAHACAGQACAEAEAFQADADAGACQAFACAHABQAIgBAHgDQAGgDAHgFIAIAJQgIAHgIADQgOAFgHAAQgJAAgIgDgAgEgjQgGADgFAEQgFAFgDAFQgEAGgCAHIA8AAIABgHIgBgKQgBgEgDgEQgDgEgFgBQgEgCgGAAQgHAAgGACg");
	this.shape_3.setTransform(321.3,0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#301558").s().p("AgLBDQgFgCgFgEQgEgDgDgEQgEgEgCgFIgFAVIgPAAIAliGIAOAAIgPA4QAHgJAJgEQADgDAFgBQAFgBAGAAQAIAAAHACQAHADAFAGQAFAFADAHQADAHAAAJIgBAMQgBAGgDAGIgFAKIgGAIQgLAKgHADQgEACgFABIgLACQgGAAgGgCgAgCgOQgHADgGAHQgHAFgDAIQgEAJAAAIQAAAGADAGQACAFAEAEQAEAEAFADQAFACAGAAQAIAAAIgEQAHgDAGgHQAFgGADgIQADgJAAgJQAAgGgCgFQgCgFgEgEQgDgEgFgCQgFgCgGAAQgIAAgHAEg");
	this.shape_4.setTransform(309.4,-1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#301558").s().p("AAyAxIAPg1QABgGAAgFQAAgFgBgEIgEgGIgGgEQgEgBgFAAQgFAAgFACQgFACgFAFQgEAEgEAFIgFANIgNA1IgOAAIAOg1IABgLQAAgFgBgEIgEgGIgGgEQgEgBgEAAQgGAAgFACQgFACgEAFQgFAEgDAFQgEAGgBAHIgPA1IgOAAIAZhfIAPAAIgEAQQAHgJAHgEIAIgEIAJgBQAGAAAFACIAHAFIAGAHIADAIIAHgJIAJgHIAKgEQAGgCAGAAQAGAAAGACQAFACAEAEQAEAEACAGQACAFAAAHIgCAOIgOA1g");
	this.shape_5.setTransform(294.5,0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#301558").s().p("AgUAvQgIgDgGgFQgFgGgDgIQgDgHAAgJQAAgIAEgNQADgHAJgLIAIgIIAJgGIALgEIAKgBQAJAAAHACQAHAEAFAEQAEAFADAHQACAHAAAIQAAAJgDAIIhKAAIAAADQAAAHACAGQACAEAEAFQADADAGACQAFACAHABQAIgBAHgDQAGgDAHgFIAIAJQgIAHgIADQgOAFgHAAQgJAAgIgDgAgEgjQgGADgFAEQgFAFgDAFQgEAGgCAHIA8AAIABgHIgBgKQgBgEgDgEQgDgEgFgBQgEgCgGAAQgHAAgGACg");
	this.shape_6.setTransform(280.8,0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#301558").s().p("AAyAxIAPg1IABgLQAAgFgBgEIgEgGIgGgEQgEgBgFAAQgFAAgFACQgFACgFAFQgEAEgEAFIgFANIgNA1IgOAAIAOg1IABgLQAAgFgBgEIgEgGIgGgEQgEgBgEAAQgGAAgFACQgFACgEAFQgFAEgDAFQgEAGgBAHIgPA1IgOAAIAZhfIAPAAIgEAQQAHgJAHgEIAIgEIAJgBQAGAAAFACIAHAFIAGAHIADAIIAHgJIAJgHIAKgEQAGgCAGAAQAGAAAGACQAFACAEAEQAEAEACAGQACAFAAAHIgCAOIgOA1g");
	this.shape_7.setTransform(266.1,0.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#301558").s().p("AgUAvQgIgDgGgFQgFgGgDgIQgDgHAAgJQAAgIAEgNQADgHAJgLIAIgIIAJgGIALgEIAKgBQAJAAAHACQAHAEAFAEQAEAFADAHQACAHAAAIQAAAJgDAIIhKAAIAAADQAAAHACAGQACAEAEAFQADADAGACQAFACAHABQAIgBAHgDQAGgDAHgFIAIAJQgIAHgIADQgOAFgHAAQgJAAgIgDgAgEgjQgGADgFAEQgFAFgDAFQgEAGgCAHIA8AAIABgHIgBgKQgBgEgDgEQgDgEgFgBQgEgCgGAAQgHAAgGACg");
	this.shape_8.setTransform(252.4,0.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#301558").s().p("AgmAxIAZhfIANAAIgFAZIAJgLIAKgJQAGgEAGgBQAGgCAIAAIgFAQIgBAAQgHAAgIADQgIADgGAFQgGAGgFAIQgFAHgDALIgKAmg");
	this.shape_9.setTransform(243.7,0.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#301558").s().p("AgUAvQgIgDgGgFQgFgGgDgIQgDgHAAgJQAAgIAEgNQADgHAJgLIAIgIIAJgGIALgEIAKgBQAJAAAHACQAHAEAFAEQAEAFADAHQACAHAAAIQAAAJgDAIIhKAAIAAADQAAAHACAGQACAEAEAFQADADAGACQAFACAHABQAIgBAHgDQAGgDAHgFIAIAJQgIAHgIADQgOAFgHAAQgJAAgIgDgAgEgjQgGADgFAEQgFAFgDAFQgEAGgCAHIA8AAIABgHIgBgKQgBgEgDgEQgDgEgFgBQgEgCgGAAQgHAAgGACg");
	this.shape_10.setTransform(228.6,0.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#301558").s().p("AgLBDQgFgCgFgEQgEgDgDgEQgEgEgCgFIgFAVIgPAAIAliGIAOAAIgPA4QAHgJAJgEQADgDAFgBQAFgBAGAAQAIAAAHACQAHADAFAGQAFAFADAHQADAHAAAJIgBAMQgBAGgDAGIgFAKIgGAIQgLAKgHADQgEACgFABIgLACQgGAAgGgCgAgCgOQgHADgGAHQgHAFgDAIQgEAJAAAIQAAAGADAGQACAFAEAEQAEAEAFADQAFACAGAAQAIAAAIgEQAHgDAGgHQAFgGADgIQADgJAAgJQAAgGgCgFQgCgFgEgEQgDgEgFgCQgFgCgGAAQgIAAgHAEg");
	this.shape_11.setTransform(216.7,-1.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#301558").s().p("AgYBEIAjiGIAOAAIgjCGg");
	this.shape_12.setTransform(203.5,-1.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#301558").s().p("AgYBEIAjiGIAOAAIgjCGg");
	this.shape_13.setTransform(198.6,-1.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#301558").s().p("AgZBCIAZheIAOAAIgYBegAAFgyIAEgPIARAAIgFAPg");
	this.shape_14.setTransform(193.8,-1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#301558").s().p("AAAAwIgFhKIguBKIgMAAIgIhfIAOAAIAFBLIAvhLIALAAIAFBLIAuhLIAPAAIg8Bfg");
	this.shape_15.setTransform(184.1,0.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#301558").s().p("AgPAOQAHgCAFgDQADgFABgEIgGAAIAFgUIAQAAIgEAQQgCAGgCAEIgFAHIgHAFQgEACgGABg");
	this.shape_16.setTransform(165.7,5.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#301558").s().p("AgRA+QgEgBgDgDQgDgCgCgDQgCgEAAgEIABgKIAQg4IgOAAIAEgMIANAAIAHgdIAOAAIgIAdIAeAAIgDAMIgeAAIgOA3IgBAGQAAAFADADQAEACAGAAQAGAAAHgDIgEAOQgGACgHAAIgKgBg");
	this.shape_17.setTransform(162.1,-0.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#301558").s().p("AgnBEIAWhSIgNAAIADgNIANAAIAEgLQABgIAEgFQADgFADgEQAEgDAFgCQAFgCAGAAIALABIAIADIgDANQgIgEgIAAQgHAAgEAEQgFAFgDAJIgCAJIAfAAIgEANIgeAAIgWBSg");
	this.shape_18.setTransform(155.5,-1.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#301558").s().p("AgZBCIAZheIAPAAIgaBegAAFgyIAEgPIAQAAIgEAPg");
	this.shape_19.setTransform(148.8,-1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#301558").s().p("AgaA/IgMgEIgMgFIgKgHIAJgKQAIAHAJAEIAKACIALACQAJAAAGgDQAGgDAFgEQAEgEADgGQADgFACgIIACgKQgIAIgIAEIgJAEIgKABQgIAAgHgCQgHgDgFgEQgGgFgDgGQgDgGAAgJQAAgGABgFQABgGADgFQACgGAKgLQAHgHAKgEQAGgDANgBQAHAAAGACQAFACAFADQAEADADAFIAFAIIAFgVIAPAAIgWBRQgDALgEAHQgEAHgFAFQgHAHgJADQgMAEgIAAIgNgBgAgHgvQgIADgFAFQgGAFgDAIQgDAHAAAIQAAAHACAEQACAEAEAEIAJAFQAFABAGAAQAHAAAHgDQAIgDAFgGQAGgEADgHQAEgHAAgHQAAgGgCgEQgCgFgEgEQgEgEgFgCQgGgCgHAAQgGAAgHADg");
	this.shape_20.setTransform(139.4,2.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#301558").s().p("AgkBCQgHgDgFgGQgFgFgDgIQgDgHAAgJIABgMIADgMQADgGAJgLIAIgIIAJgFIAKgDIALgBQAGAAAGABQAFACAFAEIAIAHIAFAJIAQg9IAOAAIgkCGIgOAAIAEgQQgHAJgIAEIgJAEQgFACgGAAQgIAAgHgDgAgUgOQgHADgGAHQgFAFgDAIQgDAJAAAJQAAAGACAGQACAFAEAEQADAEAFACQAFACAGAAQAIAAAIgEQAGgDAGgHQAGgGAEgIQAEgJAAgIQAAgGgDgFQgCgFgEgEQgEgEgFgDQgGgCgFAAQgIAAgIAEg");
	this.shape_21.setTransform(122.8,-1.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#301558").s().p("AgUAvQgIgDgGgFQgFgGgDgIQgDgHAAgJQAAgIAEgNQADgHAJgLIAIgIIAJgGIALgEIAKgBQAJAAAHACQAHAEAFAEQAEAFADAHQACAHAAAIQAAAJgDAIIhKAAIAAADQAAAHACAGQACAEAEAFQADADAGACQAFACAHABQAIgBAHgDQAGgDAHgFIAIAJQgIAHgIADQgOAFgHAAQgJAAgIgDgAgEgjQgGADgFAEQgFAFgDAFQgEAGgCAHIA8AAIABgHIgBgKQgBgEgDgEQgDgEgFgBQgEgCgGAAQgHAAgGACg");
	this.shape_22.setTransform(110.6,0.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#301558").s().p("AgnAxIAahfIAOAAIgGAZIAIgLIALgJQAGgEAGgBQAHgCAGAAIgDAQIgBAAQgIAAgIADQgHADgIAFQgFAGgFAIQgFAHgDALIgKAmg");
	this.shape_23.setTransform(101.9,0.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#301558").s().p("AgUAvQgIgDgGgFQgFgGgDgIQgDgHAAgJQAAgIAEgNQADgHAJgLIAIgIIAJgGIALgEIAKgBQAJAAAHACQAHAEAFAEQAEAFADAHQACAHAAAIQAAAJgDAIIhKAAIAAADQAAAHACAGQACAEAEAFQADADAGACQAFACAHABQAIgBAHgDQAGgDAHgFIAIAJQgIAHgIADQgOAFgHAAQgJAAgIgDgAgEgjQgGADgFAEQgFAFgDAFQgEAGgCAHIA8AAIABgHIgBgKQgBgEgDgEQgDgEgFgBQgEgCgGAAQgHAAgGACg");
	this.shape_24.setTransform(92.3,0.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#301558").s().p("AgkBCQgHgDgFgGQgFgFgDgIQgDgHAAgJIABgMIADgMQADgGAJgLIAIgIIAJgFIAKgDIALgBQAGAAAGABQAFACAFAEIAIAHIAFAJIAQg9IAOAAIgkCGIgOAAIAEgQQgHAJgIAEIgJAEQgFACgGAAQgIAAgHgDgAgUgOQgHADgGAHQgFAFgDAIQgDAJAAAJQAAAGACAGQACAFAEAEQADAEAFACQAFACAGAAQAIAAAIgEQAGgDAGgHQAGgGAEgIQAEgJAAgIQAAgGgDgFQgCgFgEgEQgEgEgFgDQgGgCgFAAQgIAAgIAEg");
	this.shape_25.setTransform(81.6,-1.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#301558").s().p("AgYBCIAYheIAPAAIgaBegAAFgyIAEgPIAQAAIgEAPg");
	this.shape_26.setTransform(72.8,-1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#301558").s().p("AgZAuQgGgCgEgEIgJgHIAJgJQAHAHAJAEQAIADAJAAQAIAAAGgEIAFgFQABgDAAgEQAAgFgDgDQgEgEgLgEIgKgFIgJgFQgDgDgCgEQgCgEAAgFQAAgGADgFQADgFAEgEQAFgEAHgDQAGgCAHAAQAIAAANAEQAIAEAHAFIgJAKQgGgFgGgDQgIgDgIAAQgEAAgEABQgEABgCADQgFAEAAAGQAAAFADADQAFAEAJAEIAMAGIAIAEQADAEACADQACAEAAAFQAAAGgDAGQgDAFgFAEQgFAEgHADQgGACgHAAQgPgCgHgCg");
	this.shape_27.setTransform(65.1,0.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#301558").s().p("AATAxIAPg1QABgGAAgFQAAgFgBgEQgCgDgDgDQgCgCgEgCQgEgBgFAAQgGAAgFACQgFACgEAFQgFAEgEAFQgDAGgCAHIgOA1IgPAAIAahfIAOAAIgEAQQAIgJAGgEIAIgEIAKgBQAHAAAGACQAGACAEAEQAEAEACAFQACAGAAAHQAAAFgCAJIgPA1g");
	this.shape_28.setTransform(54.6,0.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#301558").s().p("AgXAvQgJgEgFgFQgGgGgDgIQgDgIAAgJIABgKIADgKQADgIAKgLIAIgHIAKgGIAKgDIAKgBQAKAAAIADQAIADAGAGQAGAFADAJQADAHAAAKIgBAKIgEALIgFAJIgHAIQgLAKgHADQgFADgFABIgKABQgKAAgIgDgAgKghQgGADgGAHQgGAHgDAHQgEAJAAAGQAAAIADAGQACAFAEAEQAEAEAFACQAGACAHAAQAGAAAIgEQAHgDAGgHQAGgFADgJQAEgHgBgIQABgHgDgGQgCgGgEgEQgEgDgGgDQgFgCgGAAQgIABgIADg");
	this.shape_29.setTransform(43.5,0.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#301558").s().p("AgUAvQgHgDgHgFQgFgGgEgIQgDgIAAgJIABgLIADgKQADgHAKgMIAIgHIAKgGQAFgCAFgBIAKgBQAIAAAFABIAMAGIAIAGQADAEACAFIgLAHQgFgHgFgEQgEgDgEgBQgEgBgGgBQgHABgIADQgGADgGAHQgGAHgDAHQgEAJAAAHQAAAIADAFQACAGAEAEQAEADAFACQAGACAFAAQAHAAAHgEQAGgCAIgHIAIAKQgIAIgJADQgEADgFABQgGABgFAAQgIAAgIgDg");
	this.shape_30.setTransform(32.8,0.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#301558").s().p("Ag0A9QgFgBgFgEIAIgLQAGAFAJAAQAGAAAGgEQAGgEAHgJIgShfIAPAAIANBPIAzhPIAQAAIhABiIgKAMQgFAGgFADIgJAEQgFACgGAAQgGAAgFgCg");
	this.shape_31.setTransform(15.9,2.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#301558").s().p("AgYBEIAjiGIAOAAIgjCGg");
	this.shape_32.setTransform(9.2,-1.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#301558").s().p("AgYBEIAjiGIAOAAIgjCGg");
	this.shape_33.setTransform(4.3,-1.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#301558").s().p("AgfAvQgFgCgEgEQgEgEgCgGQgDgFAAgHQAAgFADgKIAOg0IAOAAIgOA1IgCALQAAAFACADQABAEADADQADACAEACQAEABAFAAQAFAAAGgCIAJgHQAEgEAEgGQADgFACgHIAPg1IAOAAIgaBfIgOAAIAEgQQgHAJgHAEIgIADQgFACgFAAQgHAAgGgCg");
	this.shape_34.setTransform(-3.9,0.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#301558").s().p("AgnBEIAWhSIgNAAIADgNIANAAIAEgLQABgIAEgFQADgFADgEQAEgDAFgCQAFgCAGAAIALABIAIADIgDANQgIgEgIAAQgHAAgEAEQgFAFgDAJIgCAJIAfAAIgEANIgeAAIgWBSg");
	this.shape_35.setTransform(-12,-1.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#301558").s().p("AgRA+QgEgBgEgDQgDgCgBgDQgCgEAAgEIACgKIAOg4IgNAAIADgMIAOAAIAIgdIAMAAIgHAdIAeAAIgEAMIgdAAIgOA3IgBAGQAAAFAEADQADACAGAAQAGAAAHgDIgDAOQgHACgIAAIgJgBg");
	this.shape_36.setTransform(-19.6,-0.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#301558").s().p("AATBEIAPg2IABgMQAAgDgBgEQgCgDgDgDQgCgDgEgBQgEgBgFgBQgGABgFACQgFACgEAEQgFAFgEAEQgDAGgCAHIgOA2IgPAAIAliGIANAAIgOA3QAIgJAGgEIAIgEIAKgBQAHAAAGACQAGACAEAEQAEADACAGQACAGAAAGQAAAFgCAJIgPA2g");
	this.shape_37.setTransform(-30.3,-1.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#301558").s().p("AgaA/IgMgEIgMgFIgKgHIAJgKQAIAHAJAEIAKACIALACQAJAAAGgDQAGgDAFgEQAEgEADgGQADgFACgIIACgKQgIAIgIAEIgJAEIgKABQgIAAgHgCQgHgDgFgEQgGgFgDgGQgDgGAAgJQAAgGABgFQABgGADgFQACgGAKgLQAHgHAKgEQAGgDANgBQAHAAAGACQAFACAFADQAEADADAFIAFAIIAFgVIAPAAIgWBRQgDALgEAHQgEAHgFAFQgHAHgJADQgMAEgIAAIgNgBgAgHgvQgIADgFAFQgGAFgDAIQgDAHAAAIQAAAHACAEQACAEAEAEIAJAFQAFABAGAAQAHAAAHgDQAIgDAFgGQAGgEADgHQAEgHAAgHQAAgGgCgEQgCgFgEgEQgEgEgFgCQgGgCgHAAQgGAAgHADg");
	this.shape_38.setTransform(-41.9,2.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#301558").s().p("AgfAvQgFgCgEgEQgEgEgCgGQgDgFAAgHQAAgFADgKIAOg0IAOAAIgOA1IgCALQAAAFACADQABAEADADQADACAEACQAEABAFAAQAFAAAGgCIAJgHQAEgEAEgGQADgFACgHIAPg1IAOAAIgaBfIgOAAIAEgQQgHAJgHAEIgIADQgFACgFAAQgHAAgGgCg");
	this.shape_39.setTransform(-53,0.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#301558").s().p("AgXAvQgJgEgFgFQgGgGgDgIQgDgIAAgJIABgKIADgKQAEgIAJgLIAIgHIAKgGIAKgDIAKgBQAKAAAIADQAIADAGAGQAGAFADAJQADAHAAAKIgBAKIgEALIgFAJIgHAIQgMAKgGADQgFADgFABIgKABQgKAAgIgDgAgKghQgGADgGAHQgGAHgDAHQgEAJAAAGQABAIACAGQACAFAEAEQAEAEAFACQAGACAHAAQAGAAAIgEQAHgDAGgHQAGgFADgJQAEgHgBgIQAAgHgCgGQgCgGgEgEQgEgDgGgDQgFgCgHAAQgHABgIADg");
	this.shape_40.setTransform(-64.9,0.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#301558").s().p("AATBEIAPg2IABgMQAAgDgBgEQgCgDgDgDQgCgDgEgBQgEgBgFgBQgGABgFACQgFACgEAEQgFAFgEAEQgDAGgCAHIgOA2IgPAAIAliGIANAAIgOA3QAIgJAGgEIAIgEIAKgBQAHAAAGACQAGACAEAEQAEADACAGQACAGAAAGQAAAFgCAJIgPA2g");
	this.shape_41.setTransform(-76.8,-1.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#301558").s().p("AgRA+QgEgBgEgDQgDgCgBgDQgCgEAAgEIACgKIAOg4IgNAAIADgMIAOAAIAIgdIAMAAIgHAdIAeAAIgEAMIgdAAIgOA3IgBAGQAAAFAEADQADACAGAAQAGAAAHgDIgDAOQgHACgIAAIgJgBg");
	this.shape_42.setTransform(-84.9,-0.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#301558").s().p("AgaAwQgGgCgEgEQgEgDgDgFQgCgEAAgHQAAgIADgHQADgGAGgEQAFgEAIgCQAIgCAJgBQAMAAAVAGIABgDIABgJQAAgEgBgDQgCgEgDgDQgDgCgFgCQgFgBgHAAIgNABIgNAEIgCgLIAPgFQAHgCAJABQAIAAAIABQAGACAFAFQAFADADAGQACAFAAAHQAAAGgCAIIgOA1IgOAAIAEgQQgKAKgGADIgIAEIgLABQgGgBgFgBgAgOAAQgFACgEAEQgEACgCAFQgCADAAAGIACAHIAEAFQACACAEABQAEACAFAAQAGAAAFgDQAGgCAFgDIAJgJQADgGACgGIACgGQgTgEgLAAQgGAAgGAAg");
	this.shape_43.setTransform(-100.7,0.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#301558").s().p("AgUAvQgIgDgGgFQgFgGgDgIQgDgHAAgJQAAgIAEgNQADgHAJgLIAIgIIAJgGIALgEIAKgBQAJAAAHACQAHAEAFAEQAEAFADAHQACAHAAAIQAAAJgDAIIhKAAIAAADQAAAHACAGQACAEAEAFQADADAGACQAFACAHABQAIgBAHgDQAGgDAHgFIAIAJQgIAHgIADQgOAFgHAAQgJAAgIgDgAgEgjQgGADgFAEQgFAFgDAFQgEAGgCAHIA8AAIABgHIgBgKQgBgEgDgEQgDgEgFgBQgEgCgGAAQgHAAgGACg");
	this.shape_44.setTransform(-116.6,0.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#301558").s().p("AAOBEIgVguIgaAVIgHAZIgOAAIAliGIANAAIgYBbIBAg0IATAAIg0AoIAbA3g");
	this.shape_45.setTransform(-126.8,-1.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#301558").s().p("AgYBCIAYheIAOAAIgZBegAAFgyIAEgPIAQAAIgEAPg");
	this.shape_46.setTransform(-134.4,-1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#301558").s().p("AgYBEIAjiGIAOAAIgjCGg");
	this.shape_47.setTransform(-139.3,-1.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#301558").s().p("AgPAOQAHgCAFgDQADgFABgEIgFAAIAEgUIAQAAIgEAQQgCAGgCAEIgFAHIgHAFQgEACgGABg");
	this.shape_48.setTransform(-151.7,5.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#301558").s().p("AgZAuQgFgCgFgEIgJgHIAJgJQAIAHAJAEQAIADAIAAQAIAAAGgEIAFgFQABgDABgEQAAgFgFgDQgDgEgKgEIgLgFIgIgFQgEgDgCgEQgCgEABgFQgBgGADgFQADgFAEgEQAFgEAGgDQAHgCAIAAQAGAAANAEQAKAEAGAFIgIAKQgHgFgHgDQgHgDgHAAQgGAAgDABQgDABgDADQgGAEAAAGQAAAFAFADQAEAEAJAEIAMAGIAIAEQADAEACADQACAEAAAFQAAAGgDAGQgDAFgFAEQgFAEgGADQgIACgGAAQgPgCgHgCg");
	this.shape_49.setTransform(-157.3,0.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#301558").s().p("AgUAvQgIgDgGgFQgFgGgDgIQgDgHAAgJQAAgIAEgNQADgHAJgLIAIgIIAJgGIALgEIAKgBQAJAAAHACQAHAEAFAEQAEAFADAHQACAHAAAIQAAAJgDAIIhKAAIAAADQAAAHACAGQACAEAEAFQADADAGACQAFACAHABQAIgBAHgDQAGgDAHgFIAIAJQgIAHgIADQgOAFgHAAQgJAAgIgDgAgEgjQgGADgFAEQgFAFgDAFQgEAGgCAHIA8AAIABgHIgBgKQgBgEgDgEQgDgEgFgBQgEgCgGAAQgHAAgGACg");
	this.shape_50.setTransform(-167,0.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#301558").s().p("AgmAxIAZhfIANAAIgFAZIAJgLIAKgJQAGgEAGgBQAGgCAIAAIgFAQIgBAAQgHAAgIADQgIADgGAFQgGAGgFAIQgFAHgDALIgKAmg");
	this.shape_51.setTransform(-175.7,0.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#301558").s().p("AgfAvQgFgCgEgEQgEgEgCgGQgDgFAAgHQAAgFADgKIAOg0IAOAAIgOA1IgCALQAAAFACADQABAEADADQADACAEACQAEABAFAAQAFAAAGgCIAJgHQAEgEAEgGQADgFACgHIAPg1IAOAAIgaBfIgOAAIAEgQQgHAJgHAEIgIADQgFACgFAAQgHAAgGgCg");
	this.shape_52.setTransform(-185.2,0.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#301558").s().p("AgRA+QgEgBgDgDQgEgCgBgDQgCgEAAgEIABgKIAQg4IgOAAIAEgMIANAAIAIgdIAMAAIgHAdIAeAAIgDAMIgeAAIgOA3IgBAGQAAAFAEADQADACAGAAQAFAAAIgDIgEAOQgGACgIAAIgJgBg");
	this.shape_53.setTransform(-194,-0.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#301558").s().p("AgZAuQgGgCgEgEIgJgHIAJgJQAIAHAIAEQAJADAIAAQAIAAAGgEIAFgFQACgDAAgEQgBgFgEgDQgEgEgJgEIgLgFIgJgFQgDgDgCgEQgBgEAAgFQAAgGACgFQADgFAEgEQAFgEAHgDQAFgCAJAAQAGAAAOAEQAIAEAHAFIgIAKQgGgFgIgDQgHgDgIAAQgEAAgEABQgEABgCADQgFAEgBAGQAAAFAFADQADAEAKAEIAMAGIAIAEQADAEACADQACAEAAAFQAAAGgDAGQgDAFgFAEQgFAEgGADQgIACgGAAQgPgCgHgCg");
	this.shape_54.setTransform(-203.4,0.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#301558").s().p("AgUAvQgIgDgGgFQgFgGgDgIQgDgHAAgJQAAgIAEgNQADgHAJgLIAIgIIAJgGIALgEIAKgBQAJAAAHACQAHAEAFAEQAEAFADAHQACAHAAAIQAAAJgDAIIhKAAIAAADQAAAHACAGQACAEAEAFQADADAGACQAFACAHABQAIgBAHgDQAGgDAHgFIAIAJQgIAHgIADQgOAFgHAAQgJAAgIgDgAgEgjQgGADgFAEQgFAFgDAFQgEAGgCAHIA8AAIABgHIgBgKQgBgEgDgEQgDgEgFgBQgEgCgGAAQgHAAgGACg");
	this.shape_55.setTransform(-213.1,0.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#301558").s().p("AgaA/IgMgEIgMgFIgKgHIAJgKQAIAHAJAEIAKACIALACQAJAAAGgDQAGgDAFgEQAEgEADgGQADgFACgIIACgKQgIAIgIAEIgJAEIgKABQgIAAgHgCQgHgDgFgEQgGgFgDgGQgDgGAAgJQAAgGABgFQABgGADgFQACgGAKgLQAHgHAKgEQAGgDANgBQAHAAAGACQAFACAFADQAEADADAFIAFAIIAFgVIAPAAIgWBRQgDALgEAHQgEAHgFAFQgHAHgJADQgMAEgIAAIgNgBgAgHgvQgIADgFAFQgGAFgDAIQgDAHAAAIQAAAHACAEQACAEAEAEIAJAFQAFABAGAAQAHAAAHgDQAIgDAFgGQAGgEADgHQAEgHAAgHQAAgGgCgEQgCgFgEgEQgEgEgFgCQgGgCgHAAQgGAAgHADg");
	this.shape_56.setTransform(-225,2.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#301558").s().p("AgkBCQgHgDgFgGQgFgFgDgIQgDgHAAgJQAAgGABgGIADgMQADgGAJgLIAIgIIAJgFIAKgDIALgBQAGAAAGABQAFACAFAEIAIAHIAFAJIAQg9IAOAAIgkCGIgOAAIAEgQQgHAJgIAEIgJAEQgFACgGAAQgIAAgHgDgAgUgOQgHADgGAHQgFAFgDAIQgDAJAAAJQAAAGACAGQACAFAEAEQADAEAFACQAFACAGAAQAIAAAIgEQAGgDAGgHQAGgGAEgIQAEgJAAgIQAAgGgDgFQgCgFgEgEQgEgEgFgDQgGgCgFAAQgIAAgIAEg");
	this.shape_57.setTransform(-241.6,-1.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#301558").s().p("AATAxIAPg1QABgGAAgFQAAgFgBgEQgCgDgDgDQgCgCgEgCQgEgBgFAAQgGAAgFACQgFACgEAFQgFAEgEAFQgDAGgCAHIgOA1IgPAAIAahfIAOAAIgEAQQAIgJAGgEIAIgEIAKgBQAHAAAGACQAGACAEAEQAEAEACAFQACAGAAAHQAAAFgCAJIgPA1g");
	this.shape_58.setTransform(-254.5,0.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#301558").s().p("AgZBCIAZheIAPAAIgaBegAAFgyIAEgPIAQAAIgEAPg");
	this.shape_59.setTransform(-261.6,-1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#301558").s().p("AAOBEIgVguIgaAVIgHAZIgOAAIAliGIANAAIgYBbIBAg0IATAAIg0AoIAbA3g");
	this.shape_60.setTransform(-269.3,-1.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#301558").s().p("AgUAvQgIgDgGgFQgFgGgDgIQgDgHAAgJQAAgIAEgNQADgHAJgLIAIgIIAJgGIALgEIAKgBQAJAAAHACQAHAEAFAEQAEAFADAHQACAHAAAIQAAAJgDAIIhKAAIAAADQAAAHACAGQACAEAEAFQADADAGACQAFACAHABQAIgBAHgDQAGgDAHgFIAIAJQgIAHgIADQgOAFgHAAQgJAAgIgDgAgEgjQgGADgFAEQgFAFgDAFQgEAGgCAHIA8AAIABgHIgBgKQgBgEgDgEQgDgEgFgBQgEgCgGAAQgHAAgGACg");
	this.shape_61.setTransform(-286,0.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#301558").s().p("AgZAuQgGgCgEgEIgJgHIAJgJQAHAHAJAEQAIADAJAAQAIAAAGgEIAFgFQABgDAAgEQAAgFgDgDQgEgEgLgEIgKgFIgJgFQgDgDgCgEQgCgEAAgFQAAgGADgFQADgFAEgEQAFgEAHgDQAGgCAHAAQAIAAANAEQAIAEAHAFIgJAKQgGgFgGgDQgIgDgIAAQgEAAgEABQgEABgCADQgFAEAAAGQAAAFADADQAFAEAJAEIAMAGIAIAEQADAEACADQACAEAAAFQAAAGgDAGQgDAFgFAEQgFAEgHADQgGACgHAAQgPgCgHgCg");
	this.shape_62.setTransform(-296.3,0.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#301558").s().p("AgfAvQgFgCgEgEQgEgEgCgGQgDgFAAgHQAAgFADgKIAOg0IAOAAIgOA1IgCALQAAAFACADQABAEADADQADACAEACQAEABAFAAQAFAAAGgCIAJgHQAEgEAEgGQADgFACgHIAPg1IAOAAIgaBfIgOAAIAEgQQgHAJgHAEIgIADQgFACgFAAQgHAAgGgCg");
	this.shape_63.setTransform(-306,0.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#301558").s().p("AgaAwQgGgCgEgEQgEgDgDgFQgCgEAAgHQAAgIADgHQADgGAGgEQAFgEAIgCQAIgCAJgBQAMAAAVAGIABgDIABgJQAAgEgBgDQgCgEgDgDQgDgCgFgCQgFgBgHAAIgNABIgNAEIgCgLIAPgFQAHgCAJABQAIAAAIABQAGACAFAFQAFADADAGQACAFAAAHQAAAGgCAIIgOA1IgOAAIAEgQQgKAKgGADIgIAEIgLABQgGgBgFgBgAgOAAQgFACgEAEQgEACgCAFQgCADAAAGIACAHIAEAFQACACAEABQAEACAFAAQAGAAAFgDQAGgCAFgDIAJgJQADgGACgGIACgGQgTgEgLAAQgGAAgGAAg");
	this.shape_64.setTransform(-317.7,0.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#301558").s().p("AgUAvQgIgDgFgFQgHgGgCgIQgEgIAAgJIABgLIADgKQAEgHAIgMIAJgHIAJgGQAGgCAFgBIAKgBQAIAAAFABIALAGIAIAGQAEAEACAFIgLAHQgFgHgFgEQgEgDgEgBQgEgBgGgBQgIABgGADQgIADgFAHQgGAHgDAHQgDAJgBAHQABAIACAFQACAGAEAEQAEADAFACQAFACAGAAQAHAAAHgEQAHgCAGgHIAIAKQgHAIgJADQgEADgGABQgFABgFAAQgIAAgIgDg");
	this.shape_65.setTransform(-327.4,0.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#301558").s().p("AgUAvQgIgDgGgFQgFgGgDgIQgDgHAAgJQAAgIAEgNQADgHAJgLIAIgIIAJgGIALgEIAKgBQAJAAAHACQAHAEAFAEQAEAFADAHQACAHAAAIQAAAJgDAIIhKAAIAAADQAAAHACAGQACAEAEAFQADADAGACQAFACAHABQAIgBAHgDQAGgDAHgFIAIAJQgIAHgIADQgOAFgHAAQgJAAgIgDgAgEgjQgGADgFAEQgFAFgDAFQgEAGgCAHIA8AAIABgHIgBgKQgBgEgDgEQgDgEgFgBQgEgCgGAAQgHAAgGACg");
	this.shape_66.setTransform(-338.3,0.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#301558").s().p("Ag9BBIAjiBIAwAAQAJAAAIACQAHACAFAEQAFAEADAGQADAGAAAGQAAAHgDAGQgCAGgFAEQgEAEgGADQgGADgHABIAJADIAIAGQADADABAEQACAFAAAFQAAAJgDAHQgEAHgHAFQgHAFgKADQgLADgLAAgAgrA0IArAAQAIAAAHgCQAHgCAFgDQAFgEADgEQACgFAAgGQAAgFgCgEQgCgEgEgCQgEgDgFgBQgGgBgGAAIgnAAgAgbgGIAkAAQAIAAAHgCQAHgCAFgDQAFgDADgFQADgFAAgGQAAgEgCgEQgCgDgDgDQgEgCgFgBQgEgCgHAAIgjAAg");
	this.shape_67.setTransform(-350.4,-0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-359.1,-11.2,718.3,22.5);


(lib.Tween29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#301558").s().p("AgkBCQgHgDgFgGQgFgFgDgIQgDgHAAgJIABgMIADgMQADgGAJgLIAIgIIAJgFIAKgDIALgBQAGAAAGABQAFACAFAEIAIAHIAFAJIAQg9IAOAAIgkCGIgOAAIAEgQQgHAJgIAEIgJAEQgFACgGAAQgIAAgHgDgAgUgOQgHADgGAHQgFAFgDAIQgDAJAAAJQAAAGACAGQACAFAEAEQADAEAFACQAFACAGAAQAIAAAIgEQAGgDAGgHQAGgGAEgIQAEgJAAgIQAAgGgDgFQgCgFgEgEQgEgEgFgDQgGgCgFAAQgIAAgIAEg");
	this.shape.setTransform(351.8,-1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#301558").s().p("AgUAvQgIgDgGgFQgFgGgDgIQgDgHAAgJQAAgIAEgNQADgHAJgLIAIgIIAJgGIALgEIAKgBQAJAAAHACQAHAEAFAEQAEAFADAHQACAHAAAIQAAAJgDAIIhKAAIAAADQAAAHACAGQACAEAEAFQADADAGACQAFACAHABQAIgBAHgDQAGgDAHgFIAIAJQgIAHgIADQgOAFgHAAQgJAAgIgDgAgEgjQgGADgFAEQgFAFgDAFQgEAGgCAHIA8AAIABgHIgBgKQgBgEgDgEQgDgEgFgBQgEgCgGAAQgHAAgGACg");
	this.shape_1.setTransform(339.6,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#301558").s().p("AgmAxIAZhfIANAAIgFAZIAJgLIAKgJQAGgEAGgBQAGgCAIAAIgFAQIAAAAQgJAAgHADQgIADgGAFQgGAGgFAIQgFAHgDALIgKAmg");
	this.shape_2.setTransform(330.9,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#301558").s().p("AgUAvQgIgDgGgFQgFgGgDgIQgDgHAAgJQAAgIAEgNQADgHAJgLIAIgIIAJgGIALgEIAKgBQAJAAAHACQAHAEAFAEQAEAFADAHQACAHAAAIQAAAJgDAIIhKAAIAAADQAAAHACAGQACAEAEAFQADADAGACQAFACAHABQAIgBAHgDQAGgDAHgFIAIAJQgIAHgIADQgOAFgHAAQgJAAgIgDgAgEgjQgGADgFAEQgFAFgDAFQgEAGgCAHIA8AAIABgHIgBgKQgBgEgDgEQgDgEgFgBQgEgCgGAAQgHAAgGACg");
	this.shape_3.setTransform(321.3,0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#301558").s().p("AgLBDQgFgCgFgEQgEgDgDgEQgEgEgCgFIgFAVIgPAAIAliGIAOAAIgPA4QAHgJAJgEQADgDAFgBQAFgBAGAAQAIAAAHACQAHADAFAGQAFAFADAHQADAHAAAJIgBAMQgBAGgDAGIgFAKIgGAIQgLAKgHADQgEACgFABIgLACQgGAAgGgCgAgCgOQgHADgGAHQgHAFgDAIQgEAJAAAIQAAAGADAGQACAFAEAEQAEAEAFADQAFACAGAAQAIAAAIgEQAHgDAGgHQAFgGADgIQADgJAAgJQAAgGgCgFQgCgFgEgEQgDgEgFgCQgFgCgGAAQgIAAgHAEg");
	this.shape_4.setTransform(309.4,-1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#301558").s().p("AAyAxIAPg1QABgGAAgFQAAgFgBgEIgEgGIgGgEQgEgBgFAAQgFAAgFACQgFACgFAFQgEAEgEAFIgFANIgNA1IgOAAIAOg1IABgLQAAgFgBgEIgEgGIgGgEQgEgBgEAAQgGAAgFACQgFACgEAFQgFAEgDAFQgEAGgBAHIgPA1IgOAAIAZhfIAPAAIgEAQQAHgJAHgEIAIgEIAJgBQAGAAAFACIAHAFIAGAHIADAIIAHgJIAJgHIAKgEQAGgCAGAAQAGAAAGACQAFACAEAEQAEAEACAGQACAFAAAHIgCAOIgOA1g");
	this.shape_5.setTransform(294.5,0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#301558").s().p("AgUAvQgIgDgGgFQgFgGgDgIQgDgHAAgJQAAgIAEgNQADgHAJgLIAIgIIAJgGIALgEIAKgBQAJAAAHACQAHAEAFAEQAEAFADAHQACAHAAAIQAAAJgDAIIhKAAIAAADQAAAHACAGQACAEAEAFQADADAGACQAFACAHABQAIgBAHgDQAGgDAHgFIAIAJQgIAHgIADQgOAFgHAAQgJAAgIgDgAgEgjQgGADgFAEQgFAFgDAFQgEAGgCAHIA8AAIABgHIgBgKQgBgEgDgEQgDgEgFgBQgEgCgGAAQgHAAgGACg");
	this.shape_6.setTransform(280.8,0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#301558").s().p("AAyAxIAPg1IABgLQAAgFgBgEIgEgGIgGgEQgEgBgFAAQgFAAgFACQgFACgFAFQgEAEgEAFIgFANIgNA1IgOAAIAOg1IABgLQAAgFgBgEIgEgGIgGgEQgEgBgEAAQgGAAgFACQgFACgEAFQgFAEgDAFQgEAGgBAHIgPA1IgOAAIAZhfIAPAAIgEAQQAHgJAHgEIAIgEIAJgBQAGAAAFACIAHAFIAGAHIADAIIAHgJIAJgHIAKgEQAGgCAGAAQAGAAAGACQAFACAEAEQAEAEACAGQACAFAAAHIgCAOIgOA1g");
	this.shape_7.setTransform(266.1,0.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#301558").s().p("AgUAvQgIgDgGgFQgFgGgDgIQgDgHAAgJQAAgIAEgNQADgHAJgLIAIgIIAJgGIALgEIAKgBQAJAAAHACQAHAEAFAEQAEAFADAHQACAHAAAIQAAAJgDAIIhKAAIAAADQAAAHACAGQACAEAEAFQADADAGACQAFACAHABQAIgBAHgDQAGgDAHgFIAIAJQgIAHgIADQgOAFgHAAQgJAAgIgDgAgEgjQgGADgFAEQgFAFgDAFQgEAGgCAHIA8AAIABgHIgBgKQgBgEgDgEQgDgEgFgBQgEgCgGAAQgHAAgGACg");
	this.shape_8.setTransform(252.4,0.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#301558").s().p("AgmAxIAZhfIANAAIgFAZIAJgLIAKgJQAGgEAGgBQAGgCAIAAIgFAQIgBAAQgHAAgIADQgIADgGAFQgGAGgFAIQgFAHgDALIgKAmg");
	this.shape_9.setTransform(243.7,0.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#301558").s().p("AgUAvQgIgDgGgFQgFgGgDgIQgDgHAAgJQAAgIAEgNQADgHAJgLIAIgIIAJgGIALgEIAKgBQAJAAAHACQAHAEAFAEQAEAFADAHQACAHAAAIQAAAJgDAIIhKAAIAAADQAAAHACAGQACAEAEAFQADADAGACQAFACAHABQAIgBAHgDQAGgDAHgFIAIAJQgIAHgIADQgOAFgHAAQgJAAgIgDgAgEgjQgGADgFAEQgFAFgDAFQgEAGgCAHIA8AAIABgHIgBgKQgBgEgDgEQgDgEgFgBQgEgCgGAAQgHAAgGACg");
	this.shape_10.setTransform(228.6,0.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#301558").s().p("AgLBDQgFgCgFgEQgEgDgDgEQgEgEgCgFIgFAVIgPAAIAliGIAOAAIgPA4QAHgJAJgEQADgDAFgBQAFgBAGAAQAIAAAHACQAHADAFAGQAFAFADAHQADAHAAAJIgBAMQgBAGgDAGIgFAKIgGAIQgLAKgHADQgEACgFABIgLACQgGAAgGgCgAgCgOQgHADgGAHQgHAFgDAIQgEAJAAAIQAAAGADAGQACAFAEAEQAEAEAFADQAFACAGAAQAIAAAIgEQAHgDAGgHQAFgGADgIQADgJAAgJQAAgGgCgFQgCgFgEgEQgDgEgFgCQgFgCgGAAQgIAAgHAEg");
	this.shape_11.setTransform(216.7,-1.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#301558").s().p("AgYBEIAjiGIAOAAIgjCGg");
	this.shape_12.setTransform(203.5,-1.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#301558").s().p("AgYBEIAjiGIAOAAIgjCGg");
	this.shape_13.setTransform(198.6,-1.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#301558").s().p("AgZBCIAZheIAOAAIgYBegAAFgyIAEgPIARAAIgFAPg");
	this.shape_14.setTransform(193.8,-1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#301558").s().p("AAAAwIgFhKIguBKIgMAAIgIhfIAOAAIAFBLIAvhLIALAAIAFBLIAuhLIAPAAIg8Bfg");
	this.shape_15.setTransform(184.1,0.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#301558").s().p("AgPAOQAHgCAFgDQADgFABgEIgGAAIAFgUIAQAAIgEAQQgCAGgCAEIgFAHIgHAFQgEACgGABg");
	this.shape_16.setTransform(165.7,5.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#301558").s().p("AgRA+QgEgBgDgDQgDgCgCgDQgCgEAAgEIABgKIAQg4IgOAAIAEgMIANAAIAHgdIAOAAIgIAdIAeAAIgDAMIgeAAIgOA3IgBAGQAAAFADADQAEACAGAAQAGAAAHgDIgEAOQgGACgHAAIgKgBg");
	this.shape_17.setTransform(162.1,-0.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#301558").s().p("AgnBEIAWhSIgNAAIADgNIANAAIAEgLQABgIAEgFQADgFADgEQAEgDAFgCQAFgCAGAAIALABIAIADIgDANQgIgEgIAAQgHAAgEAEQgFAFgDAJIgCAJIAfAAIgEANIgeAAIgWBSg");
	this.shape_18.setTransform(155.5,-1.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#301558").s().p("AgZBCIAZheIAPAAIgaBegAAFgyIAEgPIAQAAIgEAPg");
	this.shape_19.setTransform(148.8,-1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#301558").s().p("AgaA/IgMgEIgMgFIgKgHIAJgKQAIAHAJAEIAKACIALACQAJAAAGgDQAGgDAFgEQAEgEADgGQADgFACgIIACgKQgIAIgIAEIgJAEIgKABQgIAAgHgCQgHgDgFgEQgGgFgDgGQgDgGAAgJQAAgGABgFQABgGADgFQACgGAKgLQAHgHAKgEQAGgDANgBQAHAAAGACQAFACAFADQAEADADAFIAFAIIAFgVIAPAAIgWBRQgDALgEAHQgEAHgFAFQgHAHgJADQgMAEgIAAIgNgBgAgHgvQgIADgFAFQgGAFgDAIQgDAHAAAIQAAAHACAEQACAEAEAEIAJAFQAFABAGAAQAHAAAHgDQAIgDAFgGQAGgEADgHQAEgHAAgHQAAgGgCgEQgCgFgEgEQgEgEgFgCQgGgCgHAAQgGAAgHADg");
	this.shape_20.setTransform(139.4,2.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#301558").s().p("AgkBCQgHgDgFgGQgFgFgDgIQgDgHAAgJIABgMIADgMQADgGAJgLIAIgIIAJgFIAKgDIALgBQAGAAAGABQAFACAFAEIAIAHIAFAJIAQg9IAOAAIgkCGIgOAAIAEgQQgHAJgIAEIgJAEQgFACgGAAQgIAAgHgDgAgUgOQgHADgGAHQgFAFgDAIQgDAJAAAJQAAAGACAGQACAFAEAEQADAEAFACQAFACAGAAQAIAAAIgEQAGgDAGgHQAGgGAEgIQAEgJAAgIQAAgGgDgFQgCgFgEgEQgEgEgFgDQgGgCgFAAQgIAAgIAEg");
	this.shape_21.setTransform(122.8,-1.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#301558").s().p("AgUAvQgIgDgGgFQgFgGgDgIQgDgHAAgJQAAgIAEgNQADgHAJgLIAIgIIAJgGIALgEIAKgBQAJAAAHACQAHAEAFAEQAEAFADAHQACAHAAAIQAAAJgDAIIhKAAIAAADQAAAHACAGQACAEAEAFQADADAGACQAFACAHABQAIgBAHgDQAGgDAHgFIAIAJQgIAHgIADQgOAFgHAAQgJAAgIgDgAgEgjQgGADgFAEQgFAFgDAFQgEAGgCAHIA8AAIABgHIgBgKQgBgEgDgEQgDgEgFgBQgEgCgGAAQgHAAgGACg");
	this.shape_22.setTransform(110.6,0.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#301558").s().p("AgnAxIAahfIAOAAIgGAZIAIgLIALgJQAGgEAGgBQAHgCAGAAIgDAQIgBAAQgIAAgIADQgHADgIAFQgFAGgFAIQgFAHgDALIgKAmg");
	this.shape_23.setTransform(101.9,0.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#301558").s().p("AgUAvQgIgDgGgFQgFgGgDgIQgDgHAAgJQAAgIAEgNQADgHAJgLIAIgIIAJgGIALgEIAKgBQAJAAAHACQAHAEAFAEQAEAFADAHQACAHAAAIQAAAJgDAIIhKAAIAAADQAAAHACAGQACAEAEAFQADADAGACQAFACAHABQAIgBAHgDQAGgDAHgFIAIAJQgIAHgIADQgOAFgHAAQgJAAgIgDgAgEgjQgGADgFAEQgFAFgDAFQgEAGgCAHIA8AAIABgHIgBgKQgBgEgDgEQgDgEgFgBQgEgCgGAAQgHAAgGACg");
	this.shape_24.setTransform(92.3,0.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#301558").s().p("AgkBCQgHgDgFgGQgFgFgDgIQgDgHAAgJIABgMIADgMQADgGAJgLIAIgIIAJgFIAKgDIALgBQAGAAAGABQAFACAFAEIAIAHIAFAJIAQg9IAOAAIgkCGIgOAAIAEgQQgHAJgIAEIgJAEQgFACgGAAQgIAAgHgDgAgUgOQgHADgGAHQgFAFgDAIQgDAJAAAJQAAAGACAGQACAFAEAEQADAEAFACQAFACAGAAQAIAAAIgEQAGgDAGgHQAGgGAEgIQAEgJAAgIQAAgGgDgFQgCgFgEgEQgEgEgFgDQgGgCgFAAQgIAAgIAEg");
	this.shape_25.setTransform(81.6,-1.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#301558").s().p("AgYBCIAYheIAPAAIgaBegAAFgyIAEgPIAQAAIgEAPg");
	this.shape_26.setTransform(72.8,-1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#301558").s().p("AgZAuQgGgCgEgEIgJgHIAJgJQAHAHAJAEQAIADAJAAQAIAAAGgEIAFgFQABgDAAgEQAAgFgDgDQgEgEgLgEIgKgFIgJgFQgDgDgCgEQgCgEAAgFQAAgGADgFQADgFAEgEQAFgEAHgDQAGgCAHAAQAIAAANAEQAIAEAHAFIgJAKQgGgFgGgDQgIgDgIAAQgEAAgEABQgEABgCADQgFAEAAAGQAAAFADADQAFAEAJAEIAMAGIAIAEQADAEACADQACAEAAAFQAAAGgDAGQgDAFgFAEQgFAEgHADQgGACgHAAQgPgCgHgCg");
	this.shape_27.setTransform(65.1,0.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#301558").s().p("AATAxIAPg1QABgGAAgFQAAgFgBgEQgCgDgDgDQgCgCgEgCQgEgBgFAAQgGAAgFACQgFACgEAFQgFAEgEAFQgDAGgCAHIgOA1IgPAAIAahfIAOAAIgEAQQAIgJAGgEIAIgEIAKgBQAHAAAGACQAGACAEAEQAEAEACAFQACAGAAAHQAAAFgCAJIgPA1g");
	this.shape_28.setTransform(54.6,0.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#301558").s().p("AgXAvQgJgEgFgFQgGgGgDgIQgDgIAAgJIABgKIADgKQADgIAKgLIAIgHIAKgGIAKgDIAKgBQAKAAAIADQAIADAGAGQAGAFADAJQADAHAAAKIgBAKIgEALIgFAJIgHAIQgLAKgHADQgFADgFABIgKABQgKAAgIgDgAgKghQgGADgGAHQgGAHgDAHQgEAJAAAGQAAAIADAGQACAFAEAEQAEAEAFACQAGACAHAAQAGAAAIgEQAHgDAGgHQAGgFADgJQAEgHgBgIQABgHgDgGQgCgGgEgEQgEgDgGgDQgFgCgGAAQgIABgIADg");
	this.shape_29.setTransform(43.5,0.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#301558").s().p("AgUAvQgHgDgHgFQgFgGgEgIQgDgIAAgJIABgLIADgKQADgHAKgMIAIgHIAKgGQAFgCAFgBIAKgBQAIAAAFABIAMAGIAIAGQADAEACAFIgLAHQgFgHgFgEQgEgDgEgBQgEgBgGgBQgHABgIADQgGADgGAHQgGAHgDAHQgEAJAAAHQAAAIADAFQACAGAEAEQAEADAFACQAGACAFAAQAHAAAHgEQAGgCAIgHIAIAKQgIAIgJADQgEADgFABQgGABgFAAQgIAAgIgDg");
	this.shape_30.setTransform(32.8,0.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#301558").s().p("Ag0A9QgFgBgFgEIAIgLQAGAFAJAAQAGAAAGgEQAGgEAHgJIgShfIAPAAIANBPIAzhPIAQAAIhABiIgKAMQgFAGgFADIgJAEQgFACgGAAQgGAAgFgCg");
	this.shape_31.setTransform(15.9,2.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#301558").s().p("AgYBEIAjiGIAOAAIgjCGg");
	this.shape_32.setTransform(9.2,-1.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#301558").s().p("AgYBEIAjiGIAOAAIgjCGg");
	this.shape_33.setTransform(4.3,-1.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#301558").s().p("AgfAvQgFgCgEgEQgEgEgCgGQgDgFAAgHQAAgFADgKIAOg0IAOAAIgOA1IgCALQAAAFACADQABAEADADQADACAEACQAEABAFAAQAFAAAGgCIAJgHQAEgEAEgGQADgFACgHIAPg1IAOAAIgaBfIgOAAIAEgQQgHAJgHAEIgIADQgFACgFAAQgHAAgGgCg");
	this.shape_34.setTransform(-3.9,0.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#301558").s().p("AgnBEIAWhSIgNAAIADgNIANAAIAEgLQABgIAEgFQADgFADgEQAEgDAFgCQAFgCAGAAIALABIAIADIgDANQgIgEgIAAQgHAAgEAEQgFAFgDAJIgCAJIAfAAIgEANIgeAAIgWBSg");
	this.shape_35.setTransform(-12,-1.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#301558").s().p("AgRA+QgEgBgEgDQgDgCgBgDQgCgEAAgEIACgKIAOg4IgNAAIADgMIAOAAIAIgdIAMAAIgHAdIAeAAIgEAMIgdAAIgOA3IgBAGQAAAFAEADQADACAGAAQAGAAAHgDIgDAOQgHACgIAAIgJgBg");
	this.shape_36.setTransform(-19.6,-0.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#301558").s().p("AATBEIAPg2IABgMQAAgDgBgEQgCgDgDgDQgCgDgEgBQgEgBgFgBQgGABgFACQgFACgEAEQgFAFgEAEQgDAGgCAHIgOA2IgPAAIAliGIANAAIgOA3QAIgJAGgEIAIgEIAKgBQAHAAAGACQAGACAEAEQAEADACAGQACAGAAAGQAAAFgCAJIgPA2g");
	this.shape_37.setTransform(-30.3,-1.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#301558").s().p("AgaA/IgMgEIgMgFIgKgHIAJgKQAIAHAJAEIAKACIALACQAJAAAGgDQAGgDAFgEQAEgEADgGQADgFACgIIACgKQgIAIgIAEIgJAEIgKABQgIAAgHgCQgHgDgFgEQgGgFgDgGQgDgGAAgJQAAgGABgFQABgGADgFQACgGAKgLQAHgHAKgEQAGgDANgBQAHAAAGACQAFACAFADQAEADADAFIAFAIIAFgVIAPAAIgWBRQgDALgEAHQgEAHgFAFQgHAHgJADQgMAEgIAAIgNgBgAgHgvQgIADgFAFQgGAFgDAIQgDAHAAAIQAAAHACAEQACAEAEAEIAJAFQAFABAGAAQAHAAAHgDQAIgDAFgGQAGgEADgHQAEgHAAgHQAAgGgCgEQgCgFgEgEQgEgEgFgCQgGgCgHAAQgGAAgHADg");
	this.shape_38.setTransform(-41.9,2.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#301558").s().p("AgfAvQgFgCgEgEQgEgEgCgGQgDgFAAgHQAAgFADgKIAOg0IAOAAIgOA1IgCALQAAAFACADQABAEADADQADACAEACQAEABAFAAQAFAAAGgCIAJgHQAEgEAEgGQADgFACgHIAPg1IAOAAIgaBfIgOAAIAEgQQgHAJgHAEIgIADQgFACgFAAQgHAAgGgCg");
	this.shape_39.setTransform(-53,0.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#301558").s().p("AgXAvQgJgEgFgFQgGgGgDgIQgDgIAAgJIABgKIADgKQAEgIAJgLIAIgHIAKgGIAKgDIAKgBQAKAAAIADQAIADAGAGQAGAFADAJQADAHAAAKIgBAKIgEALIgFAJIgHAIQgMAKgGADQgFADgFABIgKABQgKAAgIgDgAgKghQgGADgGAHQgGAHgDAHQgEAJAAAGQABAIACAGQACAFAEAEQAEAEAFACQAGACAHAAQAGAAAIgEQAHgDAGgHQAGgFADgJQAEgHgBgIQAAgHgCgGQgCgGgEgEQgEgDgGgDQgFgCgHAAQgHABgIADg");
	this.shape_40.setTransform(-64.9,0.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#301558").s().p("AATBEIAPg2IABgMQAAgDgBgEQgCgDgDgDQgCgDgEgBQgEgBgFgBQgGABgFACQgFACgEAEQgFAFgEAEQgDAGgCAHIgOA2IgPAAIAliGIANAAIgOA3QAIgJAGgEIAIgEIAKgBQAHAAAGACQAGACAEAEQAEADACAGQACAGAAAGQAAAFgCAJIgPA2g");
	this.shape_41.setTransform(-76.8,-1.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#301558").s().p("AgRA+QgEgBgEgDQgDgCgBgDQgCgEAAgEIACgKIAOg4IgNAAIADgMIAOAAIAIgdIAMAAIgHAdIAeAAIgEAMIgdAAIgOA3IgBAGQAAAFAEADQADACAGAAQAGAAAHgDIgDAOQgHACgIAAIgJgBg");
	this.shape_42.setTransform(-84.9,-0.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#301558").s().p("AgaAwQgGgCgEgEQgEgDgDgFQgCgEAAgHQAAgIADgHQADgGAGgEQAFgEAIgCQAIgCAJgBQAMAAAVAGIABgDIABgJQAAgEgBgDQgCgEgDgDQgDgCgFgCQgFgBgHAAIgNABIgNAEIgCgLIAPgFQAHgCAJABQAIAAAIABQAGACAFAFQAFADADAGQACAFAAAHQAAAGgCAIIgOA1IgOAAIAEgQQgKAKgGADIgIAEIgLABQgGgBgFgBgAgOAAQgFACgEAEQgEACgCAFQgCADAAAGIACAHIAEAFQACACAEABQAEACAFAAQAGAAAFgDQAGgCAFgDIAJgJQADgGACgGIACgGQgTgEgLAAQgGAAgGAAg");
	this.shape_43.setTransform(-100.7,0.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#301558").s().p("AgUAvQgIgDgGgFQgFgGgDgIQgDgHAAgJQAAgIAEgNQADgHAJgLIAIgIIAJgGIALgEIAKgBQAJAAAHACQAHAEAFAEQAEAFADAHQACAHAAAIQAAAJgDAIIhKAAIAAADQAAAHACAGQACAEAEAFQADADAGACQAFACAHABQAIgBAHgDQAGgDAHgFIAIAJQgIAHgIADQgOAFgHAAQgJAAgIgDgAgEgjQgGADgFAEQgFAFgDAFQgEAGgCAHIA8AAIABgHIgBgKQgBgEgDgEQgDgEgFgBQgEgCgGAAQgHAAgGACg");
	this.shape_44.setTransform(-116.6,0.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#301558").s().p("AAOBEIgVguIgaAVIgHAZIgOAAIAliGIANAAIgYBbIBAg0IATAAIg0AoIAbA3g");
	this.shape_45.setTransform(-126.8,-1.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#301558").s().p("AgYBCIAYheIAOAAIgZBegAAFgyIAEgPIAQAAIgEAPg");
	this.shape_46.setTransform(-134.4,-1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#301558").s().p("AgYBEIAjiGIAOAAIgjCGg");
	this.shape_47.setTransform(-139.3,-1.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#301558").s().p("AgPAOQAHgCAFgDQADgFABgEIgFAAIAEgUIAQAAIgEAQQgCAGgCAEIgFAHIgHAFQgEACgGABg");
	this.shape_48.setTransform(-151.7,5.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#301558").s().p("AgZAuQgFgCgFgEIgJgHIAJgJQAIAHAJAEQAIADAIAAQAIAAAGgEIAFgFQABgDABgEQAAgFgFgDQgDgEgKgEIgLgFIgIgFQgEgDgCgEQgCgEABgFQgBgGADgFQADgFAEgEQAFgEAGgDQAHgCAIAAQAGAAANAEQAKAEAGAFIgIAKQgHgFgHgDQgHgDgHAAQgGAAgDABQgDABgDADQgGAEAAAGQAAAFAFADQAEAEAJAEIAMAGIAIAEQADAEACADQACAEAAAFQAAAGgDAGQgDAFgFAEQgFAEgGADQgIACgGAAQgPgCgHgCg");
	this.shape_49.setTransform(-157.3,0.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#301558").s().p("AgUAvQgIgDgGgFQgFgGgDgIQgDgHAAgJQAAgIAEgNQADgHAJgLIAIgIIAJgGIALgEIAKgBQAJAAAHACQAHAEAFAEQAEAFADAHQACAHAAAIQAAAJgDAIIhKAAIAAADQAAAHACAGQACAEAEAFQADADAGACQAFACAHABQAIgBAHgDQAGgDAHgFIAIAJQgIAHgIADQgOAFgHAAQgJAAgIgDgAgEgjQgGADgFAEQgFAFgDAFQgEAGgCAHIA8AAIABgHIgBgKQgBgEgDgEQgDgEgFgBQgEgCgGAAQgHAAgGACg");
	this.shape_50.setTransform(-167,0.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#301558").s().p("AgmAxIAZhfIANAAIgFAZIAJgLIAKgJQAGgEAGgBQAGgCAIAAIgFAQIgBAAQgHAAgIADQgIADgGAFQgGAGgFAIQgFAHgDALIgKAmg");
	this.shape_51.setTransform(-175.7,0.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#301558").s().p("AgfAvQgFgCgEgEQgEgEgCgGQgDgFAAgHQAAgFADgKIAOg0IAOAAIgOA1IgCALQAAAFACADQABAEADADQADACAEACQAEABAFAAQAFAAAGgCIAJgHQAEgEAEgGQADgFACgHIAPg1IAOAAIgaBfIgOAAIAEgQQgHAJgHAEIgIADQgFACgFAAQgHAAgGgCg");
	this.shape_52.setTransform(-185.2,0.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#301558").s().p("AgRA+QgEgBgDgDQgEgCgBgDQgCgEAAgEIABgKIAQg4IgOAAIAEgMIANAAIAIgdIAMAAIgHAdIAeAAIgDAMIgeAAIgOA3IgBAGQAAAFAEADQADACAGAAQAFAAAIgDIgEAOQgGACgIAAIgJgBg");
	this.shape_53.setTransform(-194,-0.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#301558").s().p("AgZAuQgGgCgEgEIgJgHIAJgJQAIAHAIAEQAJADAIAAQAIAAAGgEIAFgFQACgDAAgEQgBgFgEgDQgEgEgJgEIgLgFIgJgFQgDgDgCgEQgBgEAAgFQAAgGACgFQADgFAEgEQAFgEAHgDQAFgCAJAAQAGAAAOAEQAIAEAHAFIgIAKQgGgFgIgDQgHgDgIAAQgEAAgEABQgEABgCADQgFAEgBAGQAAAFAFADQADAEAKAEIAMAGIAIAEQADAEACADQACAEAAAFQAAAGgDAGQgDAFgFAEQgFAEgGADQgIACgGAAQgPgCgHgCg");
	this.shape_54.setTransform(-203.4,0.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#301558").s().p("AgUAvQgIgDgGgFQgFgGgDgIQgDgHAAgJQAAgIAEgNQADgHAJgLIAIgIIAJgGIALgEIAKgBQAJAAAHACQAHAEAFAEQAEAFADAHQACAHAAAIQAAAJgDAIIhKAAIAAADQAAAHACAGQACAEAEAFQADADAGACQAFACAHABQAIgBAHgDQAGgDAHgFIAIAJQgIAHgIADQgOAFgHAAQgJAAgIgDgAgEgjQgGADgFAEQgFAFgDAFQgEAGgCAHIA8AAIABgHIgBgKQgBgEgDgEQgDgEgFgBQgEgCgGAAQgHAAgGACg");
	this.shape_55.setTransform(-213.1,0.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#301558").s().p("AgaA/IgMgEIgMgFIgKgHIAJgKQAIAHAJAEIAKACIALACQAJAAAGgDQAGgDAFgEQAEgEADgGQADgFACgIIACgKQgIAIgIAEIgJAEIgKABQgIAAgHgCQgHgDgFgEQgGgFgDgGQgDgGAAgJQAAgGABgFQABgGADgFQACgGAKgLQAHgHAKgEQAGgDANgBQAHAAAGACQAFACAFADQAEADADAFIAFAIIAFgVIAPAAIgWBRQgDALgEAHQgEAHgFAFQgHAHgJADQgMAEgIAAIgNgBgAgHgvQgIADgFAFQgGAFgDAIQgDAHAAAIQAAAHACAEQACAEAEAEIAJAFQAFABAGAAQAHAAAHgDQAIgDAFgGQAGgEADgHQAEgHAAgHQAAgGgCgEQgCgFgEgEQgEgEgFgCQgGgCgHAAQgGAAgHADg");
	this.shape_56.setTransform(-225,2.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#301558").s().p("AgkBCQgHgDgFgGQgFgFgDgIQgDgHAAgJQAAgGABgGIADgMQADgGAJgLIAIgIIAJgFIAKgDIALgBQAGAAAGABQAFACAFAEIAIAHIAFAJIAQg9IAOAAIgkCGIgOAAIAEgQQgHAJgIAEIgJAEQgFACgGAAQgIAAgHgDgAgUgOQgHADgGAHQgFAFgDAIQgDAJAAAJQAAAGACAGQACAFAEAEQADAEAFACQAFACAGAAQAIAAAIgEQAGgDAGgHQAGgGAEgIQAEgJAAgIQAAgGgDgFQgCgFgEgEQgEgEgFgDQgGgCgFAAQgIAAgIAEg");
	this.shape_57.setTransform(-241.6,-1.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#301558").s().p("AATAxIAPg1QABgGAAgFQAAgFgBgEQgCgDgDgDQgCgCgEgCQgEgBgFAAQgGAAgFACQgFACgEAFQgFAEgEAFQgDAGgCAHIgOA1IgPAAIAahfIAOAAIgEAQQAIgJAGgEIAIgEIAKgBQAHAAAGACQAGACAEAEQAEAEACAFQACAGAAAHQAAAFgCAJIgPA1g");
	this.shape_58.setTransform(-254.5,0.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#301558").s().p("AgZBCIAZheIAPAAIgaBegAAFgyIAEgPIAQAAIgEAPg");
	this.shape_59.setTransform(-261.6,-1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#301558").s().p("AAOBEIgVguIgaAVIgHAZIgOAAIAliGIANAAIgYBbIBAg0IATAAIg0AoIAbA3g");
	this.shape_60.setTransform(-269.3,-1.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#301558").s().p("AgUAvQgIgDgGgFQgFgGgDgIQgDgHAAgJQAAgIAEgNQADgHAJgLIAIgIIAJgGIALgEIAKgBQAJAAAHACQAHAEAFAEQAEAFADAHQACAHAAAIQAAAJgDAIIhKAAIAAADQAAAHACAGQACAEAEAFQADADAGACQAFACAHABQAIgBAHgDQAGgDAHgFIAIAJQgIAHgIADQgOAFgHAAQgJAAgIgDgAgEgjQgGADgFAEQgFAFgDAFQgEAGgCAHIA8AAIABgHIgBgKQgBgEgDgEQgDgEgFgBQgEgCgGAAQgHAAgGACg");
	this.shape_61.setTransform(-286,0.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#301558").s().p("AgZAuQgGgCgEgEIgJgHIAJgJQAHAHAJAEQAIADAJAAQAIAAAGgEIAFgFQABgDAAgEQAAgFgDgDQgEgEgLgEIgKgFIgJgFQgDgDgCgEQgCgEAAgFQAAgGADgFQADgFAEgEQAFgEAHgDQAGgCAHAAQAIAAANAEQAIAEAHAFIgJAKQgGgFgGgDQgIgDgIAAQgEAAgEABQgEABgCADQgFAEAAAGQAAAFADADQAFAEAJAEIAMAGIAIAEQADAEACADQACAEAAAFQAAAGgDAGQgDAFgFAEQgFAEgHADQgGACgHAAQgPgCgHgCg");
	this.shape_62.setTransform(-296.3,0.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#301558").s().p("AgfAvQgFgCgEgEQgEgEgCgGQgDgFAAgHQAAgFADgKIAOg0IAOAAIgOA1IgCALQAAAFACADQABAEADADQADACAEACQAEABAFAAQAFAAAGgCIAJgHQAEgEAEgGQADgFACgHIAPg1IAOAAIgaBfIgOAAIAEgQQgHAJgHAEIgIADQgFACgFAAQgHAAgGgCg");
	this.shape_63.setTransform(-306,0.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#301558").s().p("AgaAwQgGgCgEgEQgEgDgDgFQgCgEAAgHQAAgIADgHQADgGAGgEQAFgEAIgCQAIgCAJgBQAMAAAVAGIABgDIABgJQAAgEgBgDQgCgEgDgDQgDgCgFgCQgFgBgHAAIgNABIgNAEIgCgLIAPgFQAHgCAJABQAIAAAIABQAGACAFAFQAFADADAGQACAFAAAHQAAAGgCAIIgOA1IgOAAIAEgQQgKAKgGADIgIAEIgLABQgGgBgFgBgAgOAAQgFACgEAEQgEACgCAFQgCADAAAGIACAHIAEAFQACACAEABQAEACAFAAQAGAAAFgDQAGgCAFgDIAJgJQADgGACgGIACgGQgTgEgLAAQgGAAgGAAg");
	this.shape_64.setTransform(-317.7,0.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#301558").s().p("AgUAvQgIgDgFgFQgHgGgCgIQgEgIAAgJIABgLIADgKQAEgHAIgMIAJgHIAJgGQAGgCAFgBIAKgBQAIAAAFABIALAGIAIAGQAEAEACAFIgLAHQgFgHgFgEQgEgDgEgBQgEgBgGgBQgIABgGADQgIADgFAHQgGAHgDAHQgDAJgBAHQABAIACAFQACAGAEAEQAEADAFACQAFACAGAAQAHAAAHgEQAHgCAGgHIAIAKQgHAIgJADQgEADgGABQgFABgFAAQgIAAgIgDg");
	this.shape_65.setTransform(-327.4,0.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#301558").s().p("AgUAvQgIgDgGgFQgFgGgDgIQgDgHAAgJQAAgIAEgNQADgHAJgLIAIgIIAJgGIALgEIAKgBQAJAAAHACQAHAEAFAEQAEAFADAHQACAHAAAIQAAAJgDAIIhKAAIAAADQAAAHACAGQACAEAEAFQADADAGACQAFACAHABQAIgBAHgDQAGgDAHgFIAIAJQgIAHgIADQgOAFgHAAQgJAAgIgDgAgEgjQgGADgFAEQgFAFgDAFQgEAGgCAHIA8AAIABgHIgBgKQgBgEgDgEQgDgEgFgBQgEgCgGAAQgHAAgGACg");
	this.shape_66.setTransform(-338.3,0.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#301558").s().p("Ag9BBIAjiBIAwAAQAJAAAIACQAHACAFAEQAFAEADAGQADAGAAAGQAAAHgDAGQgCAGgFAEQgEAEgGADQgGADgHABIAJADIAIAGQADADABAEQACAFAAAFQAAAJgDAHQgEAHgHAFQgHAFgKADQgLADgLAAgAgrA0IArAAQAIAAAHgCQAHgCAFgDQAFgEADgEQACgFAAgGQAAgFgCgEQgCgEgEgCQgEgDgFgBQgGgBgGAAIgnAAgAgbgGIAkAAQAIAAAHgCQAHgCAFgDQAFgDADgFQADgFAAgGQAAgEgCgEQgCgDgDgDQgEgCgFgBQgEgCgHAAIgjAAg");
	this.shape_67.setTransform(-350.4,-0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-359.1,-11.2,718.3,22.5);


(lib.Tween26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#301558").s().p("AAnBPIgnhvIgmBvIgXAAIg4idIAfAAIAlBzIAnh0IAWAAIAnB0IAlhzIAeAAIg4Cdg");
	this.shape.setTransform(261,-1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#301558").s().p("Ag6BPIAAidIB0AAIAAAZIhYAAIAAApIBOAAIAAAYIhOAAIAAAqIBZAAIAAAZg");
	this.shape_1.setTransform(241.3,-1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#301558").s().p("AgNBPIAAidIAbAAIAACdg");
	this.shape_2.setTransform(229.9,-1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#301558").s().p("AgLBPIhCidIAfAAIAvB4IAvh4IAeAAIhCCdg");
	this.shape_3.setTransform(217.9,-1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#301558").s().p("Ag6BPIAAidIB1AAIAAAZIhZAAIAAArIBPAAIAAAZIhPAAIAABAg");
	this.shape_4.setTransform(195.8,-1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#301558").s().p("AgRBQIgQgFIgOgHIgMgKIgJgMQgFgHgCgHIgFgPQgBgIAAgJIAAAAIABgPQACgIADgHIAHgOIAKgMIAMgKQAGgFAIgDQAHgDAJgCQAIgBAIAAQAJAAAJABQAIACAHADIAOAIQAHAEAFAFIAKAMIAHAOQADAHACAIQABAIAAAIQAAAIgBAIQgCAIgDAHQgDAIgEAGQgEAHgGAFIgMAKIgOAIQgIADgIACQgIABgJAAQgIAAgJgBgAgVgzQgJAFgIAHQgHAIgDAKQgEAKAAALQAAALAEALQADAKAIAIQAHAHAKAFQAKAEAKAAQAMAAAKgEQAJgFAHgHQAHgIAEgKQAEgKAAgMIAAAAQAAgKgEgLQgEgKgHgHQgHgIgKgFQgKgEgLAAQgLAAgKAEg");
	this.shape_5.setTransform(178.4,-1.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#301558").s().p("AgNBPIAAiDIgyAAIAAgaIB/AAIAAAaIgyAAIAACDg");
	this.shape_6.setTransform(154.9,-1.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#301558").s().p("AAuBPIhWhvIAABvIgcAAIAAidIAaAAIBUBsIAAhsIAbAAIAACdg");
	this.shape_7.setTransform(138.7,-1.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#301558").s().p("AgNBPIAAidIAbAAIAACdg");
	this.shape_8.setTransform(126.3,-1.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#301558").s().p("AgRBQIgQgFIgOgHIgMgKIgJgMQgFgHgCgHIgFgPQgBgIAAgJIAAAAIABgPQACgIADgHIAHgOIAKgMIAMgKQAGgFAIgDQAHgDAJgCQAIgBAIAAQAJAAAJABQAIACAHADIAOAIQAHAEAFAFIAKAMIAHAOQADAHACAIQABAIAAAIQAAAIgBAIQgCAIgDAHQgDAIgEAGQgEAHgGAFIgMAKIgOAIQgIADgIACQgIABgJAAQgIAAgJgBgAgVgzQgJAFgIAHQgHAIgDAKQgEAKAAALQAAALAEALQADAKAIAIQAHAHAKAFQAKAEAKAAQAMAAAKgEQAJgFAHgHQAHgIAEgKQAEgKAAgMIAAAAQAAgKgEgLQgEgKgHgHQgHgIgKgFQgKgEgLAAQgLAAgKAEg");
	this.shape_9.setTransform(113.2,-1.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#301558").s().p("Ag8BPIAAidIA9AAQAOAAALAEQALAEAIAHQAIAHAEAJQAEAKAAAMIAAAAIgBANIgEALQgFAIgIAHQgJAHgMAEQgKADgNAAIgfAAIAAAzgAggADIAgAAQAHAAAGgCQAHgBAEgEQAEgDACgGQADgFAAgGIAAAAQAAgHgDgGQgCgFgEgDQgFgEgGgCQgGgCgHAAIggAAg");
	this.shape_10.setTransform(96.7,-1.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#301558").s().p("AAnBPIgnhvIgmBvIgXAAIg4idIAfAAIAlBzIAnh0IAWAAIAnB0IAlhzIAeAAIg4Cdg");
	this.shape_11.setTransform(69.3,-1.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#301558").s().p("Ag6BPIAAidIB0AAIAAAZIhYAAIAAApIBOAAIAAAYIhOAAIAAAqIBZAAIAAAZg");
	this.shape_12.setTransform(49.6,-1.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#301558").s().p("AAuBPIhWhvIAABvIgcAAIAAidIAaAAIBUBsIAAhsIAbAAIAACdg");
	this.shape_13.setTransform(32.8,-1.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#301558").s().p("AA1BPIgQgmIhJAAIgRAmIgcAAIBFidIAZAAIBFCdgAAbARIgbg+IgaA+IA1AAg");
	this.shape_14.setTransform(8.3,-1.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#301558").s().p("AAyBPIAAhwIgyBJIAAAAIgxhJIAABwIgcAAIAAidIAfAAIAuBLIAwhLIAeAAIAACdg");
	this.shape_15.setTransform(-17,-1.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#301558").s().p("AgRBQIgQgFIgOgHIgMgKIgJgMQgFgHgCgHIgFgPQgBgIAAgJIAAAAIABgPQACgIADgHIAHgOIAKgMIAMgKQAGgFAIgDQAHgDAJgCQAIgBAIAAQAJAAAJABQAIACAHADIAOAIQAHAEAFAFIAKAMIAHAOQADAHACAIQABAIAAAIQAAAIgBAIQgCAIgDAHQgDAIgEAGQgEAHgGAFIgMAKIgOAIQgIADgIACQgIABgJAAQgIAAgJgBgAgVgzQgJAFgIAHQgHAIgDAKQgEAKAAALQAAALAEALQADAKAIAIQAHAHAKAFQAKAEAKAAQAMAAAKgEQAJgFAHgHQAHgIAEgKQAEgKAAgMIAAAAQAAgKgEgLQgEgKgHgHQgHgIgKgFQgKgEgLAAQgLAAgKAEg");
	this.shape_16.setTransform(-36.3,-1.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#301558").s().p("AAiBPIgmg3IAAAAIgiAAIAAA3IgcAAIAAidIBFAAQALAAAQAEQALAEAIAIQAGAHADAIQAEAJAAAKIAAAAQAAAKgDAIQgDAIgFAFQgEAFgIAFQgGAEgJACIArA8gAgmAAIAoAAQAHAAAGgCQAGgBAEgEQAEgDACgFQADgFAAgGQAAgHgDgFQgCgFgEgDQgEgDgGgCQgGgCgIAAIgnAAg");
	this.shape_17.setTransform(-53.4,-1.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#301558").s().p("Ag6BPIAAidIB1AAIAAAZIhZAAIAAArIBPAAIAAAZIhPAAIAABAg");
	this.shape_18.setTransform(-69,-1.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#301558").s().p("AgMBPIgRgEQgJgDgHgFQgIgFgHgGIARgUQAHAGAQAJIAMAEIANABIAMgBIAJgEIAGgGQABgEAAgEIAAgBQABgEgCgDQgBgEgFgCQgDgDgIgDIgQgFIgWgHQgKgDgHgFQgHgFgDgHQgEgIAAgLIAAAAQAAgKAFgJQADgIAHgGQAIgGAKgEQAJgDAMAAIAPABIAQAEQAJADARAMIgQAVQgKgIgLgEQgKgEgKAAIgLABQgFABgDADQgHAFAAAIIAAABQAAAEACAEQABADAEADQAFADAHACIASAFIAVAHQAKAEAHAFQAFAFAEAHQADAIAAAJIAAABQAAALgEAJQgEAIgIAHQgHAGgLADQgJADgNAAIgRgCg");
	this.shape_19.setTransform(-91,-1.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#301558").s().p("AgNBPIAAiDIgyAAIAAgaIB/AAIAAAaIgyAAIAACDg");
	this.shape_20.setTransform(-105.3,-1.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#301558").s().p("Ag6BPIAAidIB1AAIAAAZIhZAAIAAArIBPAAIAAAZIhPAAIAABAg");
	this.shape_21.setTransform(-119.5,-1.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#301558").s().p("AgNBPIAAidIAbAAIAACdg");
	this.shape_22.setTransform(-130.9,-1.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#301558").s().p("AgIBQQgJgCgHgDQgIgDgHgEQgGgEgGgGIgJgMIgHgOIgEgPIgBgRIAAAAIABgPIAEgPQADgIAEgGQAEgHAGgFIAMgKQAGgFAIgDQAHgDAJgCQAHgBAJAAIATABQAHABAIADQAKAEAQAMIgSAVQgJgJgKgDQgPgFgKAAQgJAAgKAEQgJAFgHAHQgHAIgEAKQgDAKAAALQgBAMAEALQAEAKAHAHQAHAIAKAEQAKAEALAAQALAAAKgDQAJgDAIgGIAAgdIgpAAIAAgXIBEAAIAABBQgRANgLAEQgJAEgJACIgUABQgIAAgIgBg");
	this.shape_23.setTransform(-143.3,-1.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#301558").s().p("AhGBPIAAidIA7AAIARACIAQAEIAOAHQAHAEAFAGIAKALQAEAHADAHQADAHACAHQABAIAAAIQAAAIgBAIQgCAIgDAHQgDAHgEAGQgEAHgGAFIgMAKIgOAHIgQAEIgRACgAgqA2IAfAAQALAAAKgEQAKgEAIgHQAHgIADgJQAEgKAAgMIAAAAQAAgKgEgKQgDgKgHgHQgIgIgKgEQgKgEgLAAIgfAAg");
	this.shape_24.setTransform(-167.2,-1.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#301558").s().p("Ag6BPIAAidIB0AAIAAAZIhYAAIAAApIBOAAIAAAYIhOAAIAAAqIBZAAIAAAZg");
	this.shape_25.setTransform(-183.5,-1.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#301558").s().p("AgNBPIAAiDIgyAAIAAgaIB/AAIAAAaIgyAAIAACDg");
	this.shape_26.setTransform(-198.6,-1.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#301558").s().p("AA1BPIgQgmIhJAAIgRAmIgcAAIBFidIAZAAIBFCdgAAbARIgbg+IgaA+IA1AAg");
	this.shape_27.setTransform(-214.8,-1.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#301558").s().p("AAjBPIgmg3IgBAAIgiAAIAAA3IgcAAIAAidIBFAAQALAAAQAEQALAEAIAIQAGAHAEAIQADAJAAAKIAAAAQAAAKgDAIQgDAIgEAFQgGAFgHAFQgGAEgIACIAqA8gAgmAAIAnAAQAIAAAGgCQAGgBAEgEQAEgDADgFQACgFAAgGQAAgHgCgFQgDgFgEgDQgEgDgGgCQgGgCgIAAIgnAAg");
	this.shape_28.setTransform(-231.2,-1.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#301558").s().p("AgbBMQgGgCgGgEQgFgDgEgFIgIgKIgGgLQgCgHgBgIIgBgPIAAhaIAbAAIAABYQAAALADAJQADAIAFAGQAFAFAHADQAIADAIAAQAJAAAIgCQAHgDAFgGQAFgFADgIQADgJAAgKIAAhaIAbAAIAABYIgBARIgDAPIgGALIgIAKIgKAIQgFAEgGACQgSAEgKAAQgTgBgIgDg");
	this.shape_29.setTransform(-248.4,-1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#301558").s().p("AgIBQQgIgCgHgDQgHgDgGgEIgMgKIgKgMIgHgOQgDgHgCgIQgBgIAAgJIAAAAIABgPIAFgQQADgHAEgGQAEgHAGgFQAFgGAHgEIANgIQAHgDAJgCQAHgBAJAAQAKAAAKABIAQAFQAKAFAQANIgSAVQgKgKgKgFIgMgEQgGgBgGAAQgKAAgKAEQgJAFgHAHQgIAIgDAKQgEAKAAALQAAALAEALQADAKAIAIQAHAHAJAFQAKAEAKAAQAHAAAGgBIAMgEQAJgFALgKIASASIgNALQgHAFgIAEQgHAEgJACQgKABgKAAQgIAAgIgBg");
	this.shape_30.setTransform(-265,-1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-275.6,-13.2,551.3,26.5);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E73000","rgba(231,48,0,0)"],[0.18,1],0,205,0,-204.9).s().p("EgBFAgBQgBgEgEAAMAAAg/5QAEAAABgEICMAAQAAAEAEAAMAAAA/5QgEAAAAAEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,-204.9,15,409.9);


(lib.TFlash2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhUFyIAArjICpAAIAALjg");
	this.shape.setTransform(8.5,37);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TFlash2, new cjs.Rectangle(0,0,17,74), null);


(lib.Tflash1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkrBaIAAizIJXAAIAACzg");
	this.shape.setTransform(30,9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Tflash1, new cjs.Rectangle(0,0,60,18), null);


(lib.Tbreakapart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhMFeIAAotIjVAAIAAiOIJDAAIAACOIjVAAIAAItg");
	this.shape.setTransform(34.4,46.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Tbreakapart, new cjs.Rectangle(0,0,74,103.9), null);


(lib.Studio1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgwDjQgXgFgVgJQgUgJgTgNQgRgNgPgQQgPgQgLgSQgMgTgHgUQgIgVgEgWQgEgWAAgXIAAgBQAAgWAEgWQAEgWAIgVQAIgVALgSQAMgTAPgQQAPgQARgNQASgNAVgJQAVgJAXgFQAXgFAYAAQAaAAAXAFQAXAFAVAJQAUAJASANQASAMAPARQAOAPAMATQALASAIAVQAIAVAEAVQAEAXAAAWQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAXgEAWQgEAWgIAVQgIAUgMATQgLATgPAQQgPAQgSAMQgSANgUAKQgVAJgXAFQgYAFgYAAQgZAAgXgFgAgojFQgTAEgRAIQgRAIgQALIgcAYIgWAeIgRAhQgOAzAAAbIAAABQAAAUAEAUIAKAmIARAiIAXAeIAcAZQAQALARAHQASAIASAEQAUAEATAAQAVAAATgEQATgEASgHQARgIAPgLIAcgYIAXgeIAQgiIALglIAEgpIAAgBQAAgbgPgyIgRgjIgXgdIgcgZQgPgLgRgIQgSgIgTgEQgTgEgUAAQgUAAgUAEg");
	this.shape.setTransform(527.7,30.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgQDgIAAm/IAhAAIAAG/g");
	this.shape_1.setTransform(431.8,30.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AjBDgIAAm/ICVAAQAbAAAXAFQAYADAWAJQAWAIATAMQASAMAQAPQAQAPAMASQANARAIAVQAJAUAEAWQAFAWAAAYIAAAAQAAAXgFAXQgEAWgJAUQgIAUgNASQgMATgQAPQgQAOgSANQgTAMgWAIQgWAIgYAFQgXAEgbAAgAigDCIB0AAQAYAAAUgFQAVgDATgIQATgHAQgLQAQgKANgNQANgNALgPQAKgPAHgRIAKgkIAEgoIAAgBIgEgmIgKgkIgRghQgLgPgNgNQgNgNgQgLQgQgLgTgHQgTgIgVgEQgUgDgYAAIh0AAg");
	this.shape_2.setTransform(339,30.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhJDXIgfgQQgPgJgMgMQgMgNgKgOQgKgQgGgSQgHgSgDgUIgEgsIAAkFIAiAAIAAEBQAAAnAKAgQAKAeAUAWQAUAVAcAMQAcALAigBQAjABAbgLQAcgKATgVQAUgUAKgeQALggAAgnIAAkFIAhAAIAAEAIgEAuQgDAVgHATQgGARgKARQgJAPgMANQgMAMgPAJQgPAJgQAHQgwAMgbAAQgzgDgWgJg");
	this.shape_3.setTransform(228.7,31.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgQDgIAAmgIicAAIAAgfIFZAAIAAAfIicAAIAAGgg");
	this.shape_4.setTransform(123.7,30.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgiDiQgYgFgWgIQgWgKgVgNQgUgNgUgSIAVgaIAlAeQASANAUAIQATAJAVADQAVAFAYgBQAZAAAVgGQAVgHAPgMQAPgMAIgQQAIgQAAgTIAAgCQAAgSgFgOQgGgOgOgLQgOgNgZgIQgZgKgmgHQgngJgcgJQgdgMgSgPQgSgPgJgUQgJgTAAgaIAAgBQAAgZALgWQALgVATgRQAUgQAagIQAbgJAeAAIAsADQAVADATAHQAYAJAtAgIgVAbQgqgggWgIQgggLglAAQgYAAgVAGQgTAHgPAMQgPALgHAPQgIAQAAARIAAABQAAAUAFANQAGAPAOALQAPAMAZAJQAaALAmAHQAoAIAbAKQAcALASAPQARAPAJAUQAIATAAAZIAAABQAAAbgLAXQgKAWgUAQQgUARgbAJQgcAIggABQgagBgYgEg");
	this.shape_5.setTransform(22.2,30.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Studio1, new cjs.Rectangle(0,0,617.1,68), null);


(lib.Obreakapart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhOFjQglgIgigNQgigOgdgUQgegTgZgZQgYgYgUgdQgTgdgNggQgOgggHgjQgHgkAAglIAAgCQAAgkAHgkQAHgjAOghQANggAUgdQAUgdAYgZQAagZAdgTQAegUAhgNQAjgOAlgIQAmgHAnAAQAoAAAmAHQAlAHAiAPQAiANAdATQAdAUAaAYQAZAZATAdQATAdANAgQANAhAIAiQAHAkAAAlIAAABQAAAlgHAkQgIAjgNAgQgOAhgTAdQgUAdgYAZQgZAYgfAUQgdATgiAPQgiANglAHQgmAIgnAAQgoAAgmgHgAhVjKQgmARgdAeQgcAegPAoQgPAoAAAsIAAABQAAAtAPAoQAQAoAcAeQAdAfAnAQQAnASAtAAQAtAAAogRQAmgRAdgeQAcgeAPgnQAPgoAAgtIAAgCQAAgrgQgpQgPgogcgeQgdgfgngRQgogRgsAAQgtAAgoARg");
	this.shape.setTransform(44.5,46.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Obreakapart, new cjs.Rectangle(0,0,90.2,103.9), null);


(lib.Oblurcircle3white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Oblurcircle3white, null, null);


(lib.Oblurcircle2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkQEQQhwhxAAifQAAgoAHglQAWhuBThUQByhxCeAAQBOAABDAbQBFAdA6A5QBxBxAACeQAACfhxBxQhwBxigAAQieAAhyhxgAg0jHQg6AMgsAsQg8A8ABBUQgBBVA8A7IAFAGIAFAEQA8A9BVAAQBUAAA8g9QA9g7gBhVQAAgZgEgWQgOg2gqgrIgGgGIgEgEQgmgmgugOQgVgGgWgCIgOAAIgCAAIgEAAIgBAAQgUAAgTAEg");
	this.shape.setTransform(-404,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Oblurcircle2, new cjs.Rectangle(-442.5,-39.1,77,77), null);


(lib.Oblurcircle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C62574").s().p("AkQEQQhwhwAAigQAAgnAHgmQAVhuBUhUQBxhxCfAAQBPAABCAcQBGAbA5A6QBxBxAACeQAACghxBwQhwBxigAAQifAAhxhxgAg1jIQg5ANgsArQg8A9AABUQAABUA8A8IAGAGIAEAFQA8A8BUAAQBVAAA8g8QA8g9AAhUQAAgYgEgYQgOg1gqgsIgFgFIgFgFQglglgvgNQgVgHgWgBIgPgBIgCAAIgCAAIgBAAQgVABgUACg");
	this.shape.setTransform(38.5,38.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Oblurcircle, new cjs.Rectangle(0,0,77,77), null);


(lib.Nflashb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACsFjIoWrFIC+AAIIXLFg");
	this.shape.setTransform(36.3,35.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Nflashb, new cjs.Rectangle(0,0,72.5,71), null);


(lib.Nflasha = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhQFkIAArHIChAAIAALHg");
	this.shape.setTransform(8.1,35.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Nflasha, new cjs.Rectangle(0,0,16.3,71.3), null);


(lib.Nbreakapart2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AC0FeIlSm8IAAG8IiYAAIAAq7ICOAAIFHGuIAAmuICYAAIAAK7g");
	this.shape.setTransform(41.5,46.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Nbreakapart2, new cjs.Rectangle(0,0,88.2,103.9), null);


(lib.Nbreakapart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AC0FeIlSm8IAAG8IiYAAIAAq7ICOAAIFHGuIAAmuICYAAIAAK7g");
	this.shape.setTransform(41.5,46.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Nbreakapart, new cjs.Rectangle(0,0,88.2,103.9), null);


(lib.IFlash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhPFjIAArFICfAAIAALFg");
	this.shape.setTransform(7,37.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.IFlash, new cjs.Rectangle(-1,2,16,71), null);


(lib.I_breakapart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhMFeIAAq7ICZAAIAAK7g");
	this.shape.setTransform(18.8,46.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.I_breakapart, new cjs.Rectangle(0,0,42.8,103.9), null);


(lib.blurpurple3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0033FF","rgba(205,6,106,0)"],[0,1],-1,-189.4,-1,189.5).s().p("AhPdnMAAAg7NICfAAMAAAA7Ng");
	this.shape.setTransform(7,189.1,1,1,0,0,0,-1,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blurpurple3, new cjs.Rectangle(0,0,16,379), null);


(lib.blurpurple = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#731472","rgba(205,6,106,0)"],[0,1],-1,-189.4,-1,189.5).s().p("AhPdnMAAAg7NICfAAMAAAA7Ng");
	this.shape.setTransform(7,189.1,1,1,0,0,0,-1,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blurpurple, new cjs.Rectangle(0,0,16,379), null);


(lib.blurmagenta3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C6006F","rgba(205,6,106,0)"],[0,1],0,170.7,0,-170.7).s().p("AhFarMAAAg1VICLAAMAAAA1Vg");
	this.shape.setTransform(7,170.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blurmagenta3, new cjs.Rectangle(0,0,14,341.5), null);


(lib.blurmagenta2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C6006F","rgba(205,6,106,0)"],[0,1],0,170.7,0,-170.7).s().p("AhFarMAAAg1VICLAAMAAAA1Vg");
	this.shape.setTransform(7,170.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blurmagenta2, new cjs.Rectangle(0,0,14,341.5), null);


(lib.blurmagenta1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C6006F","rgba(205,6,106,0)"],[0,1],0,170.7,0,-170.7).s().p("AhFarMAAAg1VICLAAMAAAA1Vg");
	this.shape.setTransform(7,170.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blurmagenta1, new cjs.Rectangle(0,0,14,341.5), null);


(lib.blurmagenta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C6006F","rgba(205,6,106,0)"],[0,1],0,170.7,0,-170.7).s().p("AhFarMAAAg1VICLAAMAAAA1Vg");
	this.shape.setTransform(7,170.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blurmagenta, new cjs.Rectangle(0,0,14,341.5), null);


(lib.blurangle8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C675FD","rgba(205,6,106,0)"],[0,1],-83.4,-198.4,83.5,198.5).s().p("AuN+gICWg/MAaFA+AIiWA/g");
	this.shape.setTransform(262.1,431.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blurangle8, new cjs.Rectangle(171.1,229.7,182.1,403.2), null);


(lib.blurangle7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C675FD","rgba(205,6,106,0)"],[0,1],-83.4,-198.4,83.5,198.5).s().p("AuN+gICWg/MAaFA+AIiWA/g");
	this.shape.setTransform(262.1,431.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blurangle7, new cjs.Rectangle(171.1,229.7,182.1,403.2), null);


(lib.blurangle5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C675FD","rgba(205,6,106,0)"],[0,1],-83.4,-198.4,83.5,198.5).s().p("AuN+gICWg/MAaFA+AIiWA/g");
	this.shape.setTransform(262.1,431.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blurangle5, new cjs.Rectangle(171.1,229.7,182.1,403.2), null);


(lib.blurangle4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C675FD","rgba(205,6,106,0)"],[0,1],-83.4,-198.4,83.5,198.5).s().p("AuN+gICWg/MAaFA+AIiWA/g");
	this.shape.setTransform(262.1,431.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blurangle4, new cjs.Rectangle(171.1,229.7,182.1,403.2), null);


(lib.blurangle3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#6423FF","rgba(205,6,106,0)"],[0,1],-83.4,-198.4,83.5,198.5).s().p("AuN+gICWg/MAaFA+AIiWA/g");
	this.shape.setTransform(262.1,431.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blurangle3, new cjs.Rectangle(171.1,229.7,182.1,403.2), null);


(lib.blurangle2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C675FD","rgba(205,6,106,0)"],[0,1],-83.4,-198.4,83.5,198.5).s().p("AuN+gICWg/MAaFA+AIiWA/g");
	this.shape.setTransform(262.1,431.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blurangle2, new cjs.Rectangle(171.1,229.7,182.1,403.2), null);


(lib.blurangle1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C62574","rgba(205,6,106,0)"],[0,1],129.6,171.9,-129.6,-171.9).s().p("A1Q6FICChiMAofA1tIiCBig");
	this.shape.setTransform(136.1,176.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blurangle1, new cjs.Rectangle(0,0,272.3,353.7), null);


(lib.background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFE4").s().p("EhMeAbRMAAAg2hMCY9AAAMAAAA2hg");
	this.shape.setTransform(489.5,174.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.background, new cjs.Rectangle(0,0,979,349), null);


(lib.Aflash3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ak2BHIA7iSIHzAAIA/CXg");
	this.shape.setTransform(31.1,7.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Aflash3, new cjs.Rectangle(0,0,62.2,15.2), null);


(lib.Aflash2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA3FlIkFrCICNgHIEQLJg");
	this.shape.setTransform(24,35.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Aflash2, new cjs.Rectangle(3.3,0,41.4,71.4), null);


(lib.Aflash1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjdlfICrgKIEPLJIiqAKg");
	this.shape.setTransform(22.2,35.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Aflash1, new cjs.Rectangle(0,-0.9,44.3,72.3), null);


(lib.Abreakapart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ADSFhIhAidIknAAIhACdIidAAIEsrAICNAAIEsLAgABbA7IhcjiIhdDiIC5AAg");
	this.shape.setTransform(41.5,46.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Abreakapart, new cjs.Rectangle(0,0,82.2,103.9), null);


(lib.UP = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blurpurple();
	this.instance.parent = this;
	this.instance.setTransform(109,189.5,1,1,0,0,0,109,189.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.UP, new cjs.Rectangle(0,0,16,379), null);


(lib.Tween21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blurangle8();
	this.instance.parent = this;
	this.instance.setTransform(0.1,-141,1,1,60.2,0,0,262.1,431.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-220.2,-320.1,440.4,358.3);


(lib.Tween15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Oblurcircle();
	this.instance.parent = this;
	this.instance.setTransform(0,0.2,1,1,128.3,0,0,38.6,38.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkQEQQhwhxAAifQAAgnAHgmQAWhuBThUQByhxCeAAQBOAABDAbQBFAcA6A6QBxBxAACeQAACfhxBxQhwBxigAAQieAAhyhxgAg0jHQg6AMgsArQg8A9ABBUQgBBVA8A7IAFAGIAFAEQA8A9BVAAQBUAAA8g9QA9g7gBhVQAAgYgEgXQgOg3gqgrIgGgFIgEgFQgmglgugOQgUgGgXgCIgOAAIgCAAIgEAAIgBAAQgUABgTADg");
	this.shape.setTransform(0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54,-54,108.2,108.2);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Nflashb();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,36.2,35.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,0,3,true).p("AlqliIC+AAIIXLFIi+AAg");
	this.shape.setTransform(0.3,0,1,1,0,0,0,0.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.2,-36.5,74.5,73);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Nflashb();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,36.2,35.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,0,3,true).p("AlqliIC+AAIIXLFIi+AAg");
	this.shape.setTransform(0.3,0,1,1,0,0,0,0.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.2,-36.5,74.5,73);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.UP();
	this.instance.parent = this;
	this.instance.setTransform(102,-2.5,1,1,0,0,0,109,189.5);

	this.instance_1 = new lib.UP();
	this.instance_1.parent = this;
	this.instance_1.setTransform(102,2.6,1,1,0,0,0,109,189.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-192,16,384);


(lib.Nflashc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Nflasha();
	this.instance.parent = this;
	this.instance.setTransform(8.1,35.6,1,1,0,0,0,8.1,35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Nflashc, new cjs.Rectangle(0,0,16.3,71.3), null);


(lib.Tween20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Oblurcircle2();
	this.instance.parent = this;
	this.instance.setTransform(442.4,38.6,1,1,0,0,0,38.5,38.5);

	this.instance_1 = new lib.Tween15("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.6,-39,77.3,77.6);


(lib.Tween19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween15("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.4,-38.4,77.1,77);


// stage content:
(lib._18b_innovationstudio_bnr2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_60 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(60).call(this.frame_60).wait(1));

	// I Flash
	this.instance = new lib.IFlash();
	this.instance.parent = this;
	this.instance.setTransform(142.9,84.1,1,1,0,0,0,8,36.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({y:83.9,alpha:1},5).to({y:83.3},20).to({_off:true},1).wait(33));

	// I breakapart
	this.instance_1 = new lib.I_breakapart();
	this.instance_1.parent = this;
	this.instance_1.setTransform(145,89.8,1,1,0,0,0,21.4,52);
	this.instance_1.alpha = 0.449;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(23).to({_off:false},0).to({alpha:0.82},10).to({alpha:0.879},9).to({alpha:1},17).wait(2));

	// I up
	this.instance_2 = new lib.UP();
	this.instance_2.parent = this;
	this.instance_2.setTransform(243.9,549.5,1,1,0,0,0,109,189.5);

	this.instance_3 = new lib.Tween3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(141.2,511.6,0.973,1,0,0,0,0.2,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},19).to({state:[{t:this.instance_3}]},9).to({state:[{t:this.instance_3}]},13).to({state:[]},1).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).to({y:241.8},9).to({regX:0.1,scaleX:0.91,x:141.1,y:-229.7},13).to({_off:true},1).wait(19));

	// I down
	this.instance_4 = new lib.Tween1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(142.4,-239.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:-133},4).to({y:521.8},17).to({_off:true},1).wait(39));

	// N Flash A
	this.instance_5 = new lib.Nflasha();
	this.instance_5.parent = this;
	this.instance_5.setTransform(179.9,85.4,0.985,1,0,0,0,8.2,35.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({_off:false},0).to({alpha:0.172},2).to({alpha:1},10).wait(11).to({_off:true},1).wait(29));

	// N Flash B
	this.instance_6 = new lib.Tween8("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(203.7,85.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween9("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(203.7,85.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},8).to({state:[{t:this.instance_6}]},12).to({state:[{t:this.instance_7}]},11).to({state:[]},1).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({_off:false},0).to({alpha:1},12).to({_off:true},11).wait(30));

	// N Flash C
	this.instance_8 = new lib.Nflashc();
	this.instance_8.parent = this;
	this.instance_8.setTransform(227.1,85.2,0.985,1,0,0,0,8,35.6);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10).to({_off:false},0).to({alpha:1},21).to({_off:true},1).wait(29));

	// N breakapart
	this.instance_9 = new lib.Nbreakapart();
	this.instance_9.parent = this;
	this.instance_9.setTransform(206.4,90.4,1,1,0,0,0,44.1,52);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(29).to({_off:false},0).wait(32));

	// N down 2
	this.instance_10 = new lib.blurmagenta();
	this.instance_10.parent = this;
	this.instance_10.setTransform(179.9,530.5,1.143,1,0,0,0,7,170.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(20).to({x:227.8,y:-206.4},0).to({x:227.4,y:-45.3},6).to({x:227.3,y:489.7},8).to({_off:true},1).wait(26));

	// N up 2
	this.instance_11 = new lib.blurpurple();
	this.instance_11.parent = this;
	this.instance_11.setTransform(227.9,549.9,1,1,0,0,0,8,189.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({x:227.4,y:239.3},10).to({x:227.3,y:-225.1},10).to({_off:true},1).wait(40));

	// N down
	this.instance_12 = new lib.blurmagenta();
	this.instance_12.parent = this;
	this.instance_12.setTransform(179.9,529.5,1.143,1,0,0,0,7,170.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(20).to({y:-205.9},0).to({y:-45.3},6).to({y:489.7},8).to({_off:true},1).wait(26));

	// N up
	this.instance_13 = new lib.blurpurple();
	this.instance_13.parent = this;
	this.instance_13.setTransform(179.9,548.9,1,1,0,0,0,8,189.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({y:239.3},10).to({y:-225.1},10).to({_off:true},1).wait(40));

	// N angle down
	this.instance_14 = new lib.blurangle1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-14.9,-207,0.977,0.978,0,0,0,136.1,176.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({x:113.3,y:-35.2},11).to({x:243.5,y:139.6},4).to({x:471.3,y:445.5},7).to({_off:true},1).wait(38));

	// N angle up
	this.instance_15 = new lib.blurangle4();
	this.instance_15.parent = this;
	this.instance_15.setTransform(513.3,494.5,1,1,-14.2,0,0,262.1,431.3);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(22).to({_off:false},0).to({x:-23.9,y:-217.4},12).to({_off:true},1).wait(26));

	// N Flash A copy
	this.instance_16 = new lib.Nflasha();
	this.instance_16.parent = this;
	this.instance_16.setTransform(263.9,85.4,0.985,1,0,0,0,8.2,35.6);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({regX:8.3,x:264.2,y:85.3,alpha:0.488},10).to({regX:8.2,x:264.9,y:84.9,alpha:1},22).to({_off:true},1).wait(28));

	// N Flash B copy
	this.instance_17 = new lib.Tween8("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(287.7,85.3);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.instance_18 = new lib.Tween9("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(287.7,85.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_17}]},8).to({state:[{t:this.instance_17}]},12).to({state:[{t:this.instance_18}]},12).to({state:[]},1).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(8).to({_off:false},0).to({x:288.7,alpha:1},12).to({_off:true,x:287.7,y:85.1},12).wait(29));

	// N Flash C copy
	this.instance_19 = new lib.Nflashc();
	this.instance_19.parent = this;
	this.instance_19.setTransform(311.1,85.4,0.985,1,0,0,0,8,35.6);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(10).to({_off:false},0).to({y:85.2,alpha:1},22).to({_off:true},1).wait(28));

	// N breakapart
	this.instance_20 = new lib.Nbreakapart2();
	this.instance_20.parent = this;
	this.instance_20.setTransform(290.4,90.4,1,1,0,0,0,44.1,52);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(29).to({_off:false},0).wait(32));

	// N up 2 copy
	this.instance_21 = new lib.blurmagenta();
	this.instance_21.parent = this;
	this.instance_21.setTransform(263.9,530.2,1,1,0,180,0,7,170.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({scaleX:1.14,x:264.4,y:209.2},6).to({x:264.3,y:-205.2},8).to({_off:true},1).wait(46));

	// N down 2 copy
	this.instance_22 = new lib.blurpurple();
	this.instance_22.parent = this;
	this.instance_22.setTransform(264.3,-224.5,1,1,0,180,0,8,189.5);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(14).to({_off:false},0).to({y:-60.8},10).to({y:507.8},10).to({_off:true},1).wait(26));

	// N down copy
	this.instance_23 = new lib.blurmagenta();
	this.instance_23.parent = this;
	this.instance_23.setTransform(179.9,530.5,1.143,1,0,0,0,7,170.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(20).to({x:311.9,y:-204.7},0).to({y:-41.3},6).to({y:486.7},8).to({_off:true},1).wait(26));

	// N up copy
	this.instance_24 = new lib.blurpurple();
	this.instance_24.parent = this;
	this.instance_24.setTransform(311.9,548.5,1,1,0,0,0,8,189.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).to({x:312,y:233.9},10).to({x:311.9,y:-225.4},10).to({_off:true},1).wait(40));

	// N angle down copy
	this.instance_25 = new lib.blurangle1();
	this.instance_25.parent = this;
	this.instance_25.setTransform(66.1,-211,0.977,0.978,0,0,0,136.1,176.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).to({x:185.3,y:-52.2},11).to({x:328.5,y:139},4).to({regX:136.2,x:492.3,y:358.1},5).to({regX:136.1,x:585.3,y:480.5},2).to({_off:true},1).wait(38));

	// N angle up copy
	this.instance_26 = new lib.blurangle5();
	this.instance_26.parent = this;
	this.instance_26.setTransform(598,494.3,1,1,-14.2,0,0,262.1,431.3);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(22).to({_off:false},0).to({x:61.7,y:-216.2},12).to({_off:true},1).wait(26));

	// O flash color MASK up (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_37 = new cjs.Graphics().p("AHFGkIJosSIPJL0IppMUg");
	var mask_graphics_38 = new cjs.Graphics().p("AHZGIIJnsTIPJL1IpoMUg");
	var mask_graphics_39 = new cjs.Graphics().p("AHsFrIJnsSIPJL0IpoMUg");
	var mask_graphics_40 = new cjs.Graphics().p("AH/FOIJosSIPJL0IppMUg");
	var mask_graphics_41 = new cjs.Graphics().p("AISEyIJosTIPJL1IppMUg");
	var mask_graphics_42 = new cjs.Graphics().p("AImEVIJnsSIPJL0IpoMUg");
	var mask_graphics_43 = new cjs.Graphics().p("AI5D5IJosTIPJL1IppMUg");
	var mask_graphics_44 = new cjs.Graphics().p("AJMDcIJosTIPJL1IppMUg");
	var mask_graphics_45 = new cjs.Graphics().p("AJgC/IJnsSIPJL0IpoMUg");
	var mask_graphics_46 = new cjs.Graphics().p("AJzCjIJnsTIPJL1IpoMUg");
	var mask_graphics_47 = new cjs.Graphics().p("AKGCGIJosSIPJL0IppMUg");
	var mask_graphics_48 = new cjs.Graphics().p("AKaBqIJnsTIPJL1IpoMUg");
	var mask_graphics_49 = new cjs.Graphics().p("AKtBNIJnsTIPJL1IpoMUg");
	var mask_graphics_50 = new cjs.Graphics().p("ALAAwIJosSIPJL0IppMUg");
	var mask_graphics_51 = new cjs.Graphics().p("ALTAUIJosTIPJL2IpoMTg");
	var mask_graphics_52 = new cjs.Graphics().p("AL4APIJnsTIPJL2IpoMTg");
	var mask_graphics_53 = new cjs.Graphics().p("AMcAPIJosTIPJL2IppMTg");
	var mask_graphics_54 = new cjs.Graphics().p("ANBAPIJnsTIPJL2IpoMTg");
	var mask_graphics_55 = new cjs.Graphics().p("ANlAPIJosTIPIL2IpoMTg");
	var mask_graphics_56 = new cjs.Graphics().p("AOJAPIJosTIPJL2IppMTg");
	var mask_graphics_57 = new cjs.Graphics().p("AOuAPIJnsTIPJL2IpoMTg");
	var mask_graphics_58 = new cjs.Graphics().p("APSAPIJosTIPJL2IppMTg");
	var mask_graphics_59 = new cjs.Graphics().p("AP3APIJnsTIPJL2IpoMTg");
	var mask_graphics_60 = new cjs.Graphics().p("AOwAPIJnsTIPKL2IppMTg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(37).to({graphics:mask_graphics_37,x:203.8,y:117.8}).wait(1).to({graphics:mask_graphics_38,x:205.7,y:115}).wait(1).to({graphics:mask_graphics_39,x:207.6,y:112.1}).wait(1).to({graphics:mask_graphics_40,x:209.6,y:109.2}).wait(1).to({graphics:mask_graphics_41,x:211.5,y:106.4}).wait(1).to({graphics:mask_graphics_42,x:213.4,y:103.5}).wait(1).to({graphics:mask_graphics_43,x:215.4,y:100.7}).wait(1).to({graphics:mask_graphics_44,x:217.3,y:97.8}).wait(1).to({graphics:mask_graphics_45,x:219.2,y:94.9}).wait(1).to({graphics:mask_graphics_46,x:221.1,y:92.1}).wait(1).to({graphics:mask_graphics_47,x:223.1,y:89.2}).wait(1).to({graphics:mask_graphics_48,x:225,y:86.4}).wait(1).to({graphics:mask_graphics_49,x:226.9,y:83.5}).wait(1).to({graphics:mask_graphics_50,x:228.9,y:80.6}).wait(1).to({graphics:mask_graphics_51,x:230.8,y:77.8}).wait(1).to({graphics:mask_graphics_52,x:234.4,y:71.6}).wait(1).to({graphics:mask_graphics_53,x:238.1,y:64.9}).wait(1).to({graphics:mask_graphics_54,x:241.7,y:58.2}).wait(1).to({graphics:mask_graphics_55,x:245.4,y:51.5}).wait(1).to({graphics:mask_graphics_56,x:249,y:44.7}).wait(1).to({graphics:mask_graphics_57,x:252.6,y:38}).wait(1).to({graphics:mask_graphics_58,x:256.3,y:31.3}).wait(1).to({graphics:mask_graphics_59,x:259.9,y:24.6}).wait(1).to({graphics:mask_graphics_60,x:252.9,y:13.6}).wait(1));

	// O flash color up
	this.instance_27 = new lib.Tween19("synched",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(375.7,85.5);
	this.instance_27._off = true;

	this.instance_28 = new lib.Tween15("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(375.7,85.2);
	this.instance_28._off = true;

	this.instance_29 = new lib.Tween20("synched",0);
	this.instance_29.parent = this;
	this.instance_29.setTransform(375.7,86.2);
	this.instance_29._off = true;

	var maskedShapeInstanceList = [this.instance_27,this.instance_28,this.instance_29];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(37).to({_off:false},0).to({y:85.2},2).to({_off:true},17).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(39).to({_off:false},17).to({_off:true,y:86.2},3).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(56).to({_off:false},3).to({y:85.5},1).wait(1));

	// O flash color MASK up white (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_44 = new cjs.Graphics().p("AGQIvIJnsTIPJL1IpoMUg");
	var mask_1_graphics_45 = new cjs.Graphics().p("AG0IAIJosSIPJL0IppMUg");
	var mask_1_graphics_46 = new cjs.Graphics().p("AHYHRIJosSIPJL0IppMUg");
	var mask_1_graphics_47 = new cjs.Graphics().p("AH9GjIJnsTIPJL1IpoMUg");
	var mask_1_graphics_48 = new cjs.Graphics().p("AIhF0IJosSIPJL0IppMUg");
	var mask_1_graphics_49 = new cjs.Graphics().p("AJFFFIJosSIPJL0IppMUg");
	var mask_1_graphics_50 = new cjs.Graphics().p("AJqEXIJnsTIPJL1IpoMUg");
	var mask_1_graphics_51 = new cjs.Graphics().p("AKODoIJnsTIPJL1IpoMUg");
	var mask_1_graphics_52 = new cjs.Graphics().p("AKyC5IJosSIPJL0IppMUg");
	var mask_1_graphics_53 = new cjs.Graphics().p("ALXCLIJnsTIPJL1IpoMUg");
	var mask_1_graphics_54 = new cjs.Graphics().p("AL7BcIJnsTIPJL1IpoMUg");
	var mask_1_graphics_55 = new cjs.Graphics().p("AMfAtIJosSIPJL0IppMUg");
	var mask_1_graphics_56 = new cjs.Graphics().p("ANEAPIJnsTIPJL2IpoMTg");
	var mask_1_graphics_57 = new cjs.Graphics().p("ANoAPIJnsTIPJL2IpoMTg");
	var mask_1_graphics_58 = new cjs.Graphics().p("AOMAPIJosTIPJL2IppMTg");
	var mask_1_graphics_59 = new cjs.Graphics().p("AOwAPIJosTIPJL2IppMTg");
	var mask_1_graphics_60 = new cjs.Graphics().p("AOwAPIJnsTIPKL2IppMTg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_1_graphics_44,x:198.4,y:131.7}).wait(1).to({graphics:mask_1_graphics_45,x:202.1,y:127}).wait(1).to({graphics:mask_1_graphics_46,x:205.7,y:122.3}).wait(1).to({graphics:mask_1_graphics_47,x:209.3,y:117.7}).wait(1).to({graphics:mask_1_graphics_48,x:213,y:113}).wait(1).to({graphics:mask_1_graphics_49,x:216.6,y:108.3}).wait(1).to({graphics:mask_1_graphics_50,x:220.2,y:103.7}).wait(1).to({graphics:mask_1_graphics_51,x:223.8,y:99}).wait(1).to({graphics:mask_1_graphics_52,x:227.5,y:94.3}).wait(1).to({graphics:mask_1_graphics_53,x:231.1,y:89.7}).wait(1).to({graphics:mask_1_graphics_54,x:234.7,y:85}).wait(1).to({graphics:mask_1_graphics_55,x:238.4,y:80.3}).wait(1).to({graphics:mask_1_graphics_56,x:242,y:74}).wait(1).to({graphics:mask_1_graphics_57,x:245.6,y:64.7}).wait(1).to({graphics:mask_1_graphics_58,x:249.3,y:55.4}).wait(1).to({graphics:mask_1_graphics_59,x:252.9,y:46}).wait(1).to({graphics:mask_1_graphics_60,x:252.9,y:13.6}).wait(1));

	// O flash color MASK down (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_16 = new cjs.Graphics().p("APOAPIJnsTIPJL2IppMTg");
	var mask_2_graphics_17 = new cjs.Graphics().p("AOiAPIJnsTIPJL2IpoMTg");
	var mask_2_graphics_18 = new cjs.Graphics().p("AN2APIJosTIPJL2IppMTg");
	var mask_2_graphics_19 = new cjs.Graphics().p("ANLAPIJnsTIPJL2IpoMTg");
	var mask_2_graphics_20 = new cjs.Graphics().p("AMfAPIJosTIPJL2IppMTg");
	var mask_2_graphics_21 = new cjs.Graphics().p("ALzAPIJosTIPJL2IppMTg");
	var mask_2_graphics_22 = new cjs.Graphics().p("ALIAvIJnsSIPJL0IpoMUg");
	var mask_2_graphics_23 = new cjs.Graphics().p("AKcBmIJosTIPJL1IppMUg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(16).to({graphics:mask_2_graphics_16,x:255.8,y:18.3}).wait(1).to({graphics:mask_2_graphics_17,x:251.4,y:29.2}).wait(1).to({graphics:mask_2_graphics_18,x:247.1,y:40.1}).wait(1).to({graphics:mask_2_graphics_19,x:242.7,y:51}).wait(1).to({graphics:mask_2_graphics_20,x:238.4,y:62}).wait(1).to({graphics:mask_2_graphics_21,x:234,y:72.9}).wait(1).to({graphics:mask_2_graphics_22,x:229.6,y:80.5}).wait(1).to({graphics:mask_2_graphics_23,x:225.3,y:86}).wait(38));

	// O flash color down
	this.instance_30 = new lib.Oblurcircle3white();
	this.instance_30.parent = this;
	this.instance_30.setTransform(375,119.1,1,1,0,0,0,-233.5,63.5);
	this.instance_30._off = true;

	var maskedShapeInstanceList = [this.instance_30];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(16).to({_off:false},0).wait(28).to({_off:true},1).wait(16));

	// O flash color MASK (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_9 = new cjs.Graphics().p("AOiAPIJosTIPJL2IpoMTg");
	var mask_3_graphics_10 = new cjs.Graphics().p("AN7APIJnsTIPJL2IpoMTg");
	var mask_3_graphics_11 = new cjs.Graphics().p("ANTAPIJosTIPJL2IppMTg");
	var mask_3_graphics_12 = new cjs.Graphics().p("AMsAPIJnsTIPJL2IpoMTg");
	var mask_3_graphics_13 = new cjs.Graphics().p("AMEAPIJnsTIPKL2IppMTg");
	var mask_3_graphics_14 = new cjs.Graphics().p("ALcAPIJosTIPJL2IppMTg");
	var mask_3_graphics_15 = new cjs.Graphics().p("AK1ARIJnsTIPJL2IpoMTg");
	var mask_3_graphics_16 = new cjs.Graphics().p("AKNBHIJosSIPJL0IppMUg");
	var mask_3_graphics_17 = new cjs.Graphics().p("AJmB+IJnsSIPJL0IpoMUg");
	var mask_3_graphics_18 = new cjs.Graphics().p("AI+C1IJnsTIPJL1IpoMUg");
	var mask_3_graphics_19 = new cjs.Graphics().p("AIWDrIJosSIPJL0IppMUg");
	var mask_3_graphics_20 = new cjs.Graphics().p("AHvEiIJnsTIPJL1IpoMUg");
	var mask_3_graphics_21 = new cjs.Graphics().p("AHHFZIJosTIPJL1IppMUg");
	var mask_3_graphics_22 = new cjs.Graphics().p("AGfGPIJosSIPJL0IppMUg");
	var mask_3_graphics_23 = new cjs.Graphics().p("AF4HGIJnsTIPJL1IpoMUg");
	var mask_3_graphics_24 = new cjs.Graphics().p("AFQH8IJosSIPJL1IppMTg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_3_graphics_9,x:251.5,y:12.1}).wait(1).to({graphics:mask_3_graphics_10,x:247.5,y:23}).wait(1).to({graphics:mask_3_graphics_11,x:243.6,y:33.9}).wait(1).to({graphics:mask_3_graphics_12,x:239.6,y:44.9}).wait(1).to({graphics:mask_3_graphics_13,x:235.7,y:55.8}).wait(1).to({graphics:mask_3_graphics_14,x:231.7,y:66.7}).wait(1).to({graphics:mask_3_graphics_15,x:227.7,y:77.5}).wait(1).to({graphics:mask_3_graphics_16,x:223.8,y:82.9}).wait(1).to({graphics:mask_3_graphics_17,x:219.8,y:88.4}).wait(1).to({graphics:mask_3_graphics_18,x:215.8,y:93.9}).wait(1).to({graphics:mask_3_graphics_19,x:211.9,y:99.3}).wait(1).to({graphics:mask_3_graphics_20,x:207.9,y:104.8}).wait(1).to({graphics:mask_3_graphics_21,x:204,y:110.3}).wait(1).to({graphics:mask_3_graphics_22,x:200,y:115.7}).wait(1).to({graphics:mask_3_graphics_23,x:196,y:121.2}).wait(1).to({graphics:mask_3_graphics_24,x:192.1,y:126.7}).wait(37));

	// O flash color
	this.instance_31 = new lib.Tween15("synched",0);
	this.instance_31.parent = this;
	this.instance_31.setTransform(375.1,85.2);
	this.instance_31._off = true;

	var maskedShapeInstanceList = [this.instance_31];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(9).to({_off:false},0).to({x:375.7,y:84.5},15).to({_off:true},1).wait(36));

	// O white flash
	this.instance_32 = new lib.Oblurcircle2();
	this.instance_32.parent = this;
	this.instance_32.setTransform(546.2,149.4,1,1,0,0,0,-233.5,63.5);
	this.instance_32.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(9).to({alpha:0.25},0).wait(28).to({alpha:0.539},0).wait(19).to({alpha:1},0).to({_off:true},1).wait(4));

	// O breakapart
	this.instance_33 = new lib.Obreakapart();
	this.instance_33.parent = this;
	this.instance_33.setTransform(375.4,90.4,1,1,0,0,0,45.1,52);
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(56).to({_off:false},0).wait(5));

	// O down angle MASK (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_0 = new cjs.Graphics().p("AhiUNMAoegz1IOqLcMgofAz1g");
	var mask_4_graphics_1 = new cjs.Graphics().p("AhXUNMAodgz1IOqLcMgofAz1g");
	var mask_4_graphics_2 = new cjs.Graphics().p("AhNUNMAodgz1IOqLcMgoeAz1g");
	var mask_4_graphics_3 = new cjs.Graphics().p("AhDUNMAoegz1IOpLcMgoeAz1g");
	var mask_4_graphics_4 = new cjs.Graphics().p("Ag5UNMAoegz1IOqLcMgofAz1g");
	var mask_4_graphics_5 = new cjs.Graphics().p("AguUNMAodgz1IOqLcMgofAz1g");
	var mask_4_graphics_6 = new cjs.Graphics().p("AgkUNMAodgz1IOqLcMgoeAz1g");
	var mask_4_graphics_7 = new cjs.Graphics().p("AgaUNMAoegz1IOpLcMgoeAz1g");
	var mask_4_graphics_8 = new cjs.Graphics().p("AgQUNMAoegz1IOqLcMgofAz1g");
	var mask_4_graphics_9 = new cjs.Graphics().p("AgGUNMAoegz1IOqLcMgofAz1g");
	var mask_4_graphics_10 = new cjs.Graphics().p("AgIUNMAoegz1IOqLcMgofAz1g");
	var mask_4_graphics_11 = new cjs.Graphics().p("AgKUNMAoegz1IOqLcMgofAz1g");
	var mask_4_graphics_12 = new cjs.Graphics().p("AgMUNMAodgz1IOqLcMgoeAz1g");
	var mask_4_graphics_13 = new cjs.Graphics().p("AgOUNMAodgz1IOqLcMgoeAz1g");
	var mask_4_graphics_14 = new cjs.Graphics().p("AgRUNMAoegz1IOqLcMgofAz1g");
	var mask_4_graphics_15 = new cjs.Graphics().p("AgTUNMAoegz1IOqLcMgofAz1g");
	var mask_4_graphics_16 = new cjs.Graphics().p("AgVUNMAodgz1IOqLcMgoeAz1g");
	var mask_4_graphics_17 = new cjs.Graphics().p("AgXUNMAodgz1IOqLcMgoeAz1g");
	var mask_4_graphics_18 = new cjs.Graphics().p("AgaUNMAoegz1IOqLcMgofAz1g");
	var mask_4_graphics_19 = new cjs.Graphics().p("AgcUNMAoegz1IOqLcMgofAz1g");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:mask_4_graphics_0,x:343,y:-90.1}).wait(1).to({graphics:mask_4_graphics_1,x:344,y:-92.4}).wait(1).to({graphics:mask_4_graphics_2,x:345,y:-94.7}).wait(1).to({graphics:mask_4_graphics_3,x:346.1,y:-96.9}).wait(1).to({graphics:mask_4_graphics_4,x:347.1,y:-99.2}).wait(1).to({graphics:mask_4_graphics_5,x:348.1,y:-101.4}).wait(1).to({graphics:mask_4_graphics_6,x:349.1,y:-103.7}).wait(1).to({graphics:mask_4_graphics_7,x:350.2,y:-105.9}).wait(1).to({graphics:mask_4_graphics_8,x:351.2,y:-108.2}).wait(1).to({graphics:mask_4_graphics_9,x:352.2,y:-110.4}).wait(1).to({graphics:mask_4_graphics_10,x:352,y:-107.2}).wait(1).to({graphics:mask_4_graphics_11,x:351.8,y:-104}).wait(1).to({graphics:mask_4_graphics_12,x:351.5,y:-100.8}).wait(1).to({graphics:mask_4_graphics_13,x:351.3,y:-97.5}).wait(1).to({graphics:mask_4_graphics_14,x:351.1,y:-94.3}).wait(1).to({graphics:mask_4_graphics_15,x:350.9,y:-91.1}).wait(1).to({graphics:mask_4_graphics_16,x:350.6,y:-87.8}).wait(1).to({graphics:mask_4_graphics_17,x:350.4,y:-84.6}).wait(1).to({graphics:mask_4_graphics_18,x:350.2,y:-81.4}).wait(1).to({graphics:mask_4_graphics_19,x:350,y:-78.1}).wait(42));

	// O down angle
	this.instance_34 = new lib.blurangle1();
	this.instance_34.parent = this;
	this.instance_34.setTransform(572,-181.6,1,1,0,0,180,136.1,176.8);

	var maskedShapeInstanceList = [this.instance_34];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_34).to({x:510.1,y:-95.3},9).to({x:409,y:41.1},2).to({x:255.1,y:245.4},3).to({x:201.1,y:315.6},1).to({x:104.8,y:455.1},2).to({x:14.6,y:596.6},2).to({_off:true},1).wait(41));

	// O down angle 2 MASK (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_0 = new cjs.Graphics().p("A4BaQMAodgz1IOqLbMgodAz2g");
	var mask_5_graphics_29 = new cjs.Graphics().p("A4XcnMAodgz1IOqLcMgodAz1g");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:mask_5_graphics_0,x:199.1,y:241.2}).wait(29).to({graphics:mask_5_graphics_29,x:196.8,y:256.3}).wait(32));

	// O down angle 2
	this.instance_35 = new lib.blurangle1();
	this.instance_35.parent = this;
	this.instance_35.setTransform(468,-37.7,1,1,0,0,180,136.1,176.8);
	this.instance_35._off = true;

	var maskedShapeInstanceList = [this.instance_35];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(17).to({_off:false},0).to({x:394.4,y:61.3},2).to({x:250.3,y:253.7},4).to({x:44.2,y:533.7},5).to({x:46.1,y:550.3},1).to({_off:true},1).wait(31));

	// O angle Mask up top (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_48 = new cjs.Graphics().p("ADwNcMAdOgnlIRPMuMgdOAnlg");
	var mask_6_graphics_49 = new cjs.Graphics().p("AD1NcMAdPgnlIROMuMgdOAnlg");
	var mask_6_graphics_50 = new cjs.Graphics().p("AD7NcMAdPgnlIROMuMgdOAnlg");
	var mask_6_graphics_51 = new cjs.Graphics().p("AEBNcMAdOgnlIRPMuMgdOAnlg");
	var mask_6_graphics_52 = new cjs.Graphics().p("AEGNcMAdPgnlIROMuMgdOAnlg");
	var mask_6_graphics_53 = new cjs.Graphics().p("AEMNcMAdPgnlIROMuMgdOAnlg");
	var mask_6_graphics_54 = new cjs.Graphics().p("AESNcMAdOgnlIRPMuMgdOAnlg");
	var mask_6_graphics_55 = new cjs.Graphics().p("AEXNcMAdPgnlIROMuMgdOAnlg");
	var mask_6_graphics_56 = new cjs.Graphics().p("AEdNcMAdPgnlIROMuMgdOAnlg");
	var mask_6_graphics_57 = new cjs.Graphics().p("AEjNcMAdOgnlIRPMuMgdOAnlg");
	var mask_6_graphics_58 = new cjs.Graphics().p("AEYNcMAdOgnlIRPMuMgdOAnlg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(48).to({graphics:mask_6_graphics_48,x:321.3,y:-70.8}).wait(1).to({graphics:mask_6_graphics_49,x:321.8,y:-70}).wait(1).to({graphics:mask_6_graphics_50,x:322.4,y:-69.3}).wait(1).to({graphics:mask_6_graphics_51,x:323,y:-68.5}).wait(1).to({graphics:mask_6_graphics_52,x:323.5,y:-67.8}).wait(1).to({graphics:mask_6_graphics_53,x:324.1,y:-67}).wait(1).to({graphics:mask_6_graphics_54,x:324.7,y:-66.3}).wait(1).to({graphics:mask_6_graphics_55,x:325.2,y:-65.5}).wait(1).to({graphics:mask_6_graphics_56,x:325.8,y:-64.8}).wait(1).to({graphics:mask_6_graphics_57,x:326.4,y:-64}).wait(1).to({graphics:mask_6_graphics_58,x:325.3,y:-63.7}).wait(3));

	// O angle up top
	this.instance_36 = new lib.Tween21("synched",0);
	this.instance_36.parent = this;
	this.instance_36.setTransform(232.9,412.9);
	this.instance_36._off = true;

	var maskedShapeInstanceList = [this.instance_36];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(48).to({_off:false},0).wait(1).to({x:268.9,y:366.9},0).wait(1).to({x:273.7,y:359.9},0).wait(3).to({x:301.8,y:321.1},0).wait(3).to({x:320.6,y:295.2},0).wait(1).to({x:337.4,y:273.7},0).wait(1).to({x:455.2,y:121.3},0).to({_off:true},1).wait(2));

	// O angle Mask up (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_28 = new cjs.Graphics().p("AujTUMAdNgnmIRPMvMgdOAnkg");
	var mask_7_graphics_29 = new cjs.Graphics().p("AugTWMAdOgnlIROMuMgdOAnlg");
	var mask_7_graphics_30 = new cjs.Graphics().p("AucTZMAdOgnlIROMuMgdOAnlg");
	var mask_7_graphics_31 = new cjs.Graphics().p("AuYTcMAdNgnlIRPMuMgdOAnlg");
	var mask_7_graphics_32 = new cjs.Graphics().p("AuVTeMAdOgnlIROMuMgdOAnlg");
	var mask_7_graphics_33 = new cjs.Graphics().p("AuRThMAdOgnlIROMuMgdOAnlg");
	var mask_7_graphics_34 = new cjs.Graphics().p("AuNTkMAdNgnlIRPMuMgdOAnlg");
	var mask_7_graphics_35 = new cjs.Graphics().p("AuKTnMAdOgnlIROMuMgdOAnlg");
	var mask_7_graphics_36 = new cjs.Graphics().p("AuGTpMAdOgnlIROMuMgdOAnlg");
	var mask_7_graphics_37 = new cjs.Graphics().p("AuCTsMAdNgnlIRPMuMgdOAnlg");
	var mask_7_graphics_38 = new cjs.Graphics().p("At/TvMAdOgnlIROMuMgdOAnlg");
	var mask_7_graphics_39 = new cjs.Graphics().p("At7TyMAdNgnmIRPMvMgdOAnkg");
	var mask_7_graphics_40 = new cjs.Graphics().p("At9TwMAdNgnlIRPMuMgdOAnlg");
	var mask_7_graphics_41 = new cjs.Graphics().p("At/TuMAdNgnlIRPMuMgdOAnlg");
	var mask_7_graphics_42 = new cjs.Graphics().p("AuBTsMAdNgnlIRPMuMgdOAnlg");
	var mask_7_graphics_43 = new cjs.Graphics().p("AuDTrMAdNgnlIRPMuMgdOAnlg");
	var mask_7_graphics_44 = new cjs.Graphics().p("AuFTpMAdNgnlIRPMuMgdOAnlg");
	var mask_7_graphics_46 = new cjs.Graphics().p("AuGToMAdOgnlIROMuMgdOAnlg");
	var mask_7_graphics_48 = new cjs.Graphics().p("AuGTnMAdNgnlIRPMuMgdOAnlg");
	var mask_7_graphics_49 = new cjs.Graphics().p("AuGTnMAdNgnlIRPMuMgdOAnlg");
	var mask_7_graphics_50 = new cjs.Graphics().p("AuHTmMAdOgnlIROMuMgdOAnlg");
	var mask_7_graphics_51 = new cjs.Graphics().p("AuHTmMAdOgnlIROMuMgdOAnlg");
	var mask_7_graphics_52 = new cjs.Graphics().p("AuHTlMAdOgnlIROMuMgdOAnlg");
	var mask_7_graphics_53 = new cjs.Graphics().p("AuHTlMAdNgnlIRPMuMgdOAnlg");
	var mask_7_graphics_54 = new cjs.Graphics().p("AuHTkMAdNgnlIRPMuMgdOAnlg");
	var mask_7_graphics_55 = new cjs.Graphics().p("AuITkMAdOgnlIROMuMgdOAnlg");
	var mask_7_graphics_56 = new cjs.Graphics().p("AuITjMAdOgnlIROMuMgdOAnlg");
	var mask_7_graphics_57 = new cjs.Graphics().p("AuITjMAdNgnlIRPMuMgdOAnlg");
	var mask_7_graphics_58 = new cjs.Graphics().p("AuITiMAdNgnkIRPMtMgdOAnmg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(28).to({graphics:mask_7_graphics_28,x:204.1,y:205}).wait(1).to({graphics:mask_7_graphics_29,x:204.4,y:205.2}).wait(1).to({graphics:mask_7_graphics_30,x:204.8,y:205.5}).wait(1).to({graphics:mask_7_graphics_31,x:205.2,y:205.8}).wait(1).to({graphics:mask_7_graphics_32,x:205.5,y:206}).wait(1).to({graphics:mask_7_graphics_33,x:205.9,y:206.3}).wait(1).to({graphics:mask_7_graphics_34,x:206.3,y:206.6}).wait(1).to({graphics:mask_7_graphics_35,x:206.6,y:206.9}).wait(1).to({graphics:mask_7_graphics_36,x:207,y:207.1}).wait(1).to({graphics:mask_7_graphics_37,x:207.4,y:207.4}).wait(1).to({graphics:mask_7_graphics_38,x:207.7,y:207.7}).wait(1).to({graphics:mask_7_graphics_39,x:208.1,y:208}).wait(1).to({graphics:mask_7_graphics_40,x:207.9,y:207.8}).wait(1).to({graphics:mask_7_graphics_41,x:207.7,y:207.6}).wait(1).to({graphics:mask_7_graphics_42,x:207.5,y:207.4}).wait(1).to({graphics:mask_7_graphics_43,x:207.3,y:207.3}).wait(1).to({graphics:mask_7_graphics_44,x:207.1,y:207.1}).wait(2).to({graphics:mask_7_graphics_46,x:207,y:207}).wait(2).to({graphics:mask_7_graphics_48,x:207,y:206.9}).wait(1).to({graphics:mask_7_graphics_49,x:207,y:206.9}).wait(1).to({graphics:mask_7_graphics_50,x:206.9,y:206.8}).wait(1).to({graphics:mask_7_graphics_51,x:206.9,y:206.8}).wait(1).to({graphics:mask_7_graphics_52,x:206.9,y:206.7}).wait(1).to({graphics:mask_7_graphics_53,x:206.9,y:206.7}).wait(1).to({graphics:mask_7_graphics_54,x:206.9,y:206.6}).wait(1).to({graphics:mask_7_graphics_55,x:206.8,y:206.6}).wait(1).to({graphics:mask_7_graphics_56,x:206.8,y:206.5}).wait(1).to({graphics:mask_7_graphics_57,x:206.8,y:206.5}).wait(1).to({graphics:mask_7_graphics_58,x:206.8,y:206.5}).wait(3));

	// O angle up
	this.instance_37 = new lib.blurangle7();
	this.instance_37.parent = this;
	this.instance_37.setTransform(46,530.8,1,1,59.9,0,0,262.1,431.3);
	this.instance_37._off = true;

	var maskedShapeInstanceList = [this.instance_37];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(28).to({_off:false},0).to({regY:431.2,scaleX:1,scaleY:1,x:224.6,y:282.7},9).to({regY:431.3,scaleX:1,scaleY:1,x:252.9,y:247.7},2).to({regY:431.2,scaleX:1,scaleY:1,x:554.5,y:-148},17).to({regY:431.3,scaleX:1,scaleY:1,x:596,y:-186.7},2).to({_off:true},1).wait(2));

	// V flash 1
	this.instance_38 = new lib.vflash1();
	this.instance_38.parent = this;
	this.instance_38.setTransform(443,85.9,1,1,0,0,0,22.3,35.6);
	this.instance_38.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).to({alpha:0.34},3).to({alpha:1},14).wait(5).to({_off:true},1).wait(38));

	// V flash 2
	this.instance_39 = new lib.vflash2();
	this.instance_39.parent = this;
	this.instance_39.setTransform(468.9,85.3,1,1,0,0,180,22.3,35.6);
	this.instance_39.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).to({alpha:0.371},9).to({alpha:1},6).wait(7).to({_off:true},1).wait(38));

	// V breakapart
	this.instance_40 = new lib.Vbreakapart();
	this.instance_40.parent = this;
	this.instance_40.setTransform(455.4,90.4,1,1,0,0,0,39.1,52);
	this.instance_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(20).to({_off:false},0).wait(41));

	// V angle down 1
	this.instance_41 = new lib.blurmagenta1();
	this.instance_41.parent = this;
	this.instance_41.setTransform(333,-198.6,1.093,1,-21.2,0,0,7.2,170.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_41).to({x:596.4,y:485},14).to({_off:true},1).wait(46));

	// V angle up 1
	this.instance_42 = new lib.blurpurple();
	this.instance_42.parent = this;
	this.instance_42.setTransform(602.6,502.8,1,1,-20.9,0,0,8,189.6);
	this.instance_42._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(13).to({_off:false},0).to({x:321.1,y:-233.7},11).to({_off:true},1).wait(36));

	// V angle up 2
	this.instance_43 = new lib.blurpurple();
	this.instance_43.parent = this;
	this.instance_43.setTransform(294.5,538.9,1,1,20.7,0,0,8,189.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_43).to({x:584.1,y:-218.6},13).to({_off:true},1).wait(47));

	// V angle down 2
	this.instance_44 = new lib.blurmagenta1();
	this.instance_44.parent = this;
	this.instance_44.setTransform(577.2,-199.9,1,1,20.7,0,0,7,170.7);
	this.instance_44._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(12).to({_off:false},0).to({x:302.6,y:521.9},11).to({_off:true},1).wait(37));

	// A flash 1
	this.instance_45 = new lib.Aflash1();
	this.instance_45.parent = this;
	this.instance_45.setTransform(546.7,85.4,1.002,1,0,-2.2,1.8,22.3,35.2);
	this.instance_45.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(3).to({alpha:0.539},0).wait(14).to({alpha:0.789},0).wait(5).to({x:547.2,alpha:1},0).to({_off:true},1).wait(38));

	// A flash 2
	this.instance_46 = new lib.Aflash2();
	this.instance_46.parent = this;
	this.instance_46.setTransform(517.8,85.3,1.215,1.001,0,-2,180,22.2,35.8);
	this.instance_46.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(4).to({alpha:0.59},0).wait(10).to({alpha:0.879},0).wait(8).to({alpha:1},0).to({_off:true},1).wait(38));

	// a flash 3
	this.instance_47 = new lib.Aflash3();
	this.instance_47.parent = this;
	this.instance_47.setTransform(531.9,97.5,1,1,0,0,0,31.1,7.6);
	this.instance_47.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(6).to({alpha:0.672},0).wait(11).to({alpha:1},0).wait(5).to({_off:true},1).wait(38));

	// A breakapart
	this.instance_48 = new lib.Abreakapart();
	this.instance_48.parent = this;
	this.instance_48.setTransform(531.4,90.4,1,1,0,0,0,41.1,52);
	this.instance_48._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(22).to({_off:false},0).wait(39));

	// A angle down 1
	this.instance_49 = new lib.blurangle2();
	this.instance_49.parent = this;
	this.instance_49.setTransform(536.4,14.5,1,1,180,0,0,136.1,176.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_49).to({x:858.8,y:790.3},14).to({_off:true},1).wait(46));

	// A angle up 1
	this.instance_50 = new lib.blurangle3();
	this.instance_50.parent = this;
	this.instance_50.setTransform(728.6,524.6,1,1,0,0,0,262.1,431.3);
	this.instance_50._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(13).to({_off:false},0).to({x:402.2,y:-258.6},11).to({_off:true},1).wait(36));

	// A angle up 2
	this.instance_51 = new lib.blurangle2();
	this.instance_51.parent = this;
	this.instance_51.setTransform(309.5,555.8,1,1,46.5,0,0,262.1,431.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_51).to({x:658.1,y:-243},13).to({_off:true},1).wait(47));

	// A angle down 2
	this.instance_52 = new lib.blurpurple();
	this.instance_52.parent = this;
	this.instance_52.setTransform(649.9,-219.4,1,1,-156.5,0,0,8,189.5);
	this.instance_52._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(12).to({_off:false},0).to({x:324,y:533.1},11).to({_off:true},1).wait(37));

	// A side left 1
	this.instance_53 = new lib.blurpurple();
	this.instance_53.parent = this;
	this.instance_53.setTransform(-194.7,97.1,1,1,90,0,0,8,189.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_53).to({x:1173.1},14).to({_off:true},1).wait(46));

	// A side right 2
	this.instance_54 = new lib.blurmagenta();
	this.instance_54.parent = this;
	this.instance_54.setTransform(1155.2,96.9,1.171,1,90,0,0,7,170.7);
	this.instance_54._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_54).wait(13).to({_off:false},0).to({x:-173.3},11).to({_off:true},1).wait(36));

	// T flash 1
	this.instance_55 = new lib.Tflash1();
	this.instance_55.parent = this;
	this.instance_55.setTransform(603.1,56.4,1,1,0,0,0,30,9);
	this.instance_55.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_55).wait(5).to({alpha:0.559},0).wait(13).to({alpha:0.828},0).wait(4).to({alpha:1},0).to({_off:true},1).wait(38));

	// T flash 2
	this.instance_56 = new lib.TFlash2();
	this.instance_56.parent = this;
	this.instance_56.setTransform(602.5,84.1,1,1,0,0,0,8.5,37);
	this.instance_56.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_56).wait(5).to({alpha:0.59},0).wait(11).to({alpha:0.801},0).wait(6).to({alpha:1},0).to({_off:true},1).wait(38));

	// T breakapart
	this.instance_57 = new lib.Tbreakapart();
	this.instance_57.parent = this;
	this.instance_57.setTransform(605.3,90.4,1,1,0,0,0,37,52);
	this.instance_57._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_57).wait(22).to({_off:false},0).wait(39));

	// T up
	this.instance_58 = new lib.blurpurple();
	this.instance_58.parent = this;
	this.instance_58.setTransform(603,548.3,1,1,0,0,0,8,189.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_58).to({y:-224.9},15).to({_off:true},1).wait(45));

	// T down
	this.instance_59 = new lib.blurmagenta2();
	this.instance_59.parent = this;
	this.instance_59.setTransform(603,-209.9,1.286,1,0,0,0,7,170.7);
	this.instance_59._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_59).wait(14).to({_off:false},0).to({y:492},10).to({_off:true},1).wait(36));

	// T right
	this.instance_60 = new lib.blurpurple3();
	this.instance_60.parent = this;
	this.instance_60.setTransform(1179,55.4,1,1,-90,0,0,8,189.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_60).to({x:-195.9},14).to({_off:true},1).wait(46));

	// T left
	this.instance_61 = new lib.blurmagenta3();
	this.instance_61.parent = this;
	this.instance_61.setTransform(-177.6,57.1,1.193,1,-90,0,0,7,170.7);
	this.instance_61._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_61).wait(13).to({_off:false},0).to({x:1159.3},11).to({_off:true},1).wait(36));

	// I Flash copy
	this.instance_62 = new lib.IFlash();
	this.instance_62.parent = this;
	this.instance_62.setTransform(657.4,84.1,1,1,0,0,0,8,36.5);
	this.instance_62.alpha = 0;
	this.instance_62._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_62).wait(2).to({_off:false},0).to({y:83.9,alpha:1},5).to({y:83.3},20).to({_off:true},1).wait(33));

	// I breakapart copy
	this.instance_63 = new lib.I_breakapart();
	this.instance_63.parent = this;
	this.instance_63.setTransform(659.5,89.8,1,1,0,0,0,21.4,52);
	this.instance_63.alpha = 0.449;
	this.instance_63._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_63).wait(23).to({_off:false},0).to({alpha:0.82},10).to({alpha:0.879},9).to({alpha:1},17).wait(2));

	// I up copy
	this.instance_64 = new lib.UP();
	this.instance_64.parent = this;
	this.instance_64.setTransform(758.4,549.9,1,1,0,0,0,109,189.5);

	this.instance_65 = new lib.Tween3("synched",0);
	this.instance_65.parent = this;
	this.instance_65.setTransform(655.6,511.6,0.973,1,0,0,0,0.2,0);
	this.instance_65._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_64}]}).to({state:[{t:this.instance_65}]},19).to({state:[{t:this.instance_65}]},9).to({state:[{t:this.instance_65}]},13).to({state:[]},1).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance_65).wait(19).to({_off:false},0).to({y:241.8},9).to({regX:0.1,scaleX:0.91,y:-229.7},13).to({_off:true},1).wait(19));

	// I down copy
	this.instance_66 = new lib.Tween1("synched",0);
	this.instance_66.parent = this;
	this.instance_66.setTransform(656.9,-239.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_66).to({y:-133},4).to({y:521.8},17).to({_off:true},1).wait(39));

	// O flash color MASK up copy 3 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_37 = new cjs.Graphics().p("EAh7AGiIJosTIPJL1IppMTg");
	var mask_8_graphics_38 = new cjs.Graphics().p("EAiPAGFIJnsTIPJL1IpoMUg");
	var mask_8_graphics_39 = new cjs.Graphics().p("EAiiAFoIJnsSIPJL0IpoMUg");
	var mask_8_graphics_40 = new cjs.Graphics().p("EAi1AFMIJosTIPJL1IppMUg");
	var mask_8_graphics_41 = new cjs.Graphics().p("EAjIAEvIJosSIPJL0IppMUg");
	var mask_8_graphics_42 = new cjs.Graphics().p("EAjcAESIJnsSIPJL0IpoMUg");
	var mask_8_graphics_43 = new cjs.Graphics().p("EAjvAD2IJosTIPJL1IppMUg");
	var mask_8_graphics_44 = new cjs.Graphics().p("EAkCADZIJosSIPJL0IppMUg");
	var mask_8_graphics_45 = new cjs.Graphics().p("EAkWAC9IJnsTIPJL1IpoMUg");
	var mask_8_graphics_46 = new cjs.Graphics().p("EAkpACgIJnsSIPJL0IpoMUg");
	var mask_8_graphics_47 = new cjs.Graphics().p("EAk8ACDIJosSIPJL0IppMUg");
	var mask_8_graphics_48 = new cjs.Graphics().p("EAlQABnIJnsTIPJL1IpoMUg");
	var mask_8_graphics_49 = new cjs.Graphics().p("EAljABKIJnsSIPJL0IpoMUg");
	var mask_8_graphics_50 = new cjs.Graphics().p("EAl2AAuIJosTIPJL1IppMUg");
	var mask_8_graphics_51 = new cjs.Graphics().p("EAmJAARIJosTIPJL2IpoMTg");
	var mask_8_graphics_52 = new cjs.Graphics().p("EAmtAAPIJnsTIPJL2IpoMTg");
	var mask_8_graphics_53 = new cjs.Graphics().p("EAnQAAPIJosTIPIL2IpoMTg");
	var mask_8_graphics_54 = new cjs.Graphics().p("EAnzAAPIJosTIPJL2IppMTg");
	var mask_8_graphics_55 = new cjs.Graphics().p("EAoWAAPIJosTIPJL2IpoMTg");
	var mask_8_graphics_56 = new cjs.Graphics().p("EAo6AAPIJnsTIPJL2IpoMTg");
	var mask_8_graphics_57 = new cjs.Graphics().p("EApdAAPIJnsTIPKL2IppMTg");
	var mask_8_graphics_58 = new cjs.Graphics().p("EAquAAPIJnsTIPKL2IppMTg");
	var mask_8_graphics_59 = new cjs.Graphics().p("EArNAAPIJosTIPJL2IppMTg");
	var mask_8_graphics_60 = new cjs.Graphics().p("EArrAAPIJnsTIPJL2IppMTg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(37).to({graphics:mask_8_graphics_37,x:375.6,y:117.6}).wait(1).to({graphics:mask_8_graphics_38,x:377.5,y:114.7}).wait(1).to({graphics:mask_8_graphics_39,x:379.4,y:111.8}).wait(1).to({graphics:mask_8_graphics_40,x:381.4,y:109}).wait(1).to({graphics:mask_8_graphics_41,x:383.3,y:106.1}).wait(1).to({graphics:mask_8_graphics_42,x:385.2,y:103.2}).wait(1).to({graphics:mask_8_graphics_43,x:387.2,y:100.4}).wait(1).to({graphics:mask_8_graphics_44,x:389.1,y:97.5}).wait(1).to({graphics:mask_8_graphics_45,x:391,y:94.7}).wait(1).to({graphics:mask_8_graphics_46,x:392.9,y:91.8}).wait(1).to({graphics:mask_8_graphics_47,x:394.9,y:88.9}).wait(1).to({graphics:mask_8_graphics_48,x:396.8,y:86.1}).wait(1).to({graphics:mask_8_graphics_49,x:398.7,y:83.2}).wait(1).to({graphics:mask_8_graphics_50,x:400.7,y:80.4}).wait(1).to({graphics:mask_8_graphics_51,x:402.6,y:77.5}).wait(1).to({graphics:mask_8_graphics_52,x:406.1,y:66.8}).wait(1).to({graphics:mask_8_graphics_53,x:409.7,y:55.9}).wait(1).to({graphics:mask_8_graphics_54,x:413.2,y:44.9}).wait(1).to({graphics:mask_8_graphics_55,x:416.7,y:34}).wait(1).to({graphics:mask_8_graphics_56,x:420.2,y:23.1}).wait(1).to({graphics:mask_8_graphics_57,x:423.8,y:12.1}).wait(1).to({graphics:mask_8_graphics_58,x:431.9,y:11.8}).wait(1).to({graphics:mask_8_graphics_59,x:435,y:-0.4}).wait(1).to({graphics:mask_8_graphics_60,x:437.9,y:0}).wait(1));

	// O flash color up copy 3
	this.instance_67 = new lib.Tween19("synched",0);
	this.instance_67.parent = this;
	this.instance_67.setTransform(719.3,84.9);
	this.instance_67._off = true;

	this.instance_68 = new lib.Tween15("synched",0);
	this.instance_68.parent = this;
	this.instance_68.setTransform(719.3,84.7);
	this.instance_68._off = true;

	this.instance_69 = new lib.Tween20("synched",0);
	this.instance_69.parent = this;
	this.instance_69.setTransform(718.8,89.4);
	this.instance_69._off = true;

	var maskedShapeInstanceList = [this.instance_67,this.instance_68,this.instance_69];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_67).wait(37).to({_off:false},0).to({y:84.7},2).to({_off:true},17).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance_68).wait(39).to({_off:false},17).to({x:719.1,y:85.7},1).to({x:719.6,y:88.7},1).to({_off:true,x:718.8,y:89.4},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_69).wait(58).to({_off:false},1).to({y:90.4},1).wait(1));

	// O flash color MASK up white copy 3 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_44 = new cjs.Graphics().p("EAhGAIsIJnsSIPJL0IpoMUg");
	var mask_9_graphics_45 = new cjs.Graphics().p("EAhrAHvIJosTIPJL1IppMUg");
	var mask_9_graphics_46 = new cjs.Graphics().p("EAiRAGyIJnsTIPJL1IpoMUg");
	var mask_9_graphics_47 = new cjs.Graphics().p("EAi2AF0IJnsSIPJL0IpoMUg");
	var mask_9_graphics_48 = new cjs.Graphics().p("EAjbAE3IJosSIPJL0IppMUg");
	var mask_9_graphics_49 = new cjs.Graphics().p("EAkBAD6IJnsTIPJL1IpoMUg");
	var mask_9_graphics_50 = new cjs.Graphics().p("EAkmAC9IJosTIPJL1IppMUg");
	var mask_9_graphics_51 = new cjs.Graphics().p("EAlLAB/IJosSIPJL0IppMUg");
	var mask_9_graphics_52 = new cjs.Graphics().p("EAlxABCIJnsSIPJL0IpoMUg");
	var mask_9_graphics_53 = new cjs.Graphics().p("EAmWAAPIJosTIPJL2IppMTg");
	var mask_9_graphics_54 = new cjs.Graphics().p("EAm8AAPIJnsTIPJL2IpoMTg");
	var mask_9_graphics_55 = new cjs.Graphics().p("EAnhAAPIJnsTIPJL2IpoMTg");
	var mask_9_graphics_56 = new cjs.Graphics().p("EAoGAAPIJosTIPJL2IppMTg");
	var mask_9_graphics_57 = new cjs.Graphics().p("EAosAAPIJnsTIPJL2IpoMTg");
	var mask_9_graphics_58 = new cjs.Graphics().p("EApuAAPIJnsTIPJL2IppMTg");
	var mask_9_graphics_59 = new cjs.Graphics().p("EAqHAAPIJnsTIPJL2IpoMTg");
	var mask_9_graphics_60 = new cjs.Graphics().p("EArrAAPIJnsTIPJL2IppMTg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_9_graphics_44,x:370.2,y:131.4}).wait(1).to({graphics:mask_9_graphics_45,x:374,y:125.3}).wait(1).to({graphics:mask_9_graphics_46,x:377.7,y:119.2}).wait(1).to({graphics:mask_9_graphics_47,x:381.4,y:113}).wait(1).to({graphics:mask_9_graphics_48,x:385.2,y:106.9}).wait(1).to({graphics:mask_9_graphics_49,x:388.9,y:100.8}).wait(1).to({graphics:mask_9_graphics_50,x:392.7,y:94.7}).wait(1).to({graphics:mask_9_graphics_51,x:396.4,y:88.5}).wait(1).to({graphics:mask_9_graphics_52,x:400.1,y:82.4}).wait(1).to({graphics:mask_9_graphics_53,x:403.9,y:75.3}).wait(1).to({graphics:mask_9_graphics_54,x:407.6,y:63.1}).wait(1).to({graphics:mask_9_graphics_55,x:411.3,y:50.8}).wait(1).to({graphics:mask_9_graphics_56,x:415.1,y:38.6}).wait(1).to({graphics:mask_9_graphics_57,x:418.8,y:26.3}).wait(1).to({graphics:mask_9_graphics_58,x:425.4,y:27.7}).wait(1).to({graphics:mask_9_graphics_59,x:428,y:21}).wait(1).to({graphics:mask_9_graphics_60,x:437.9,y:0}).wait(1));

	// O flash color MASK down copy 3 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_16 = new cjs.Graphics().p("EAqEAAPIJnsTIPJL2IppMTg");
	var mask_10_graphics_17 = new cjs.Graphics().p("EApYAAPIJnsTIPJL2IpoMTg");
	var mask_10_graphics_18 = new cjs.Graphics().p("EAosAAPIJosTIPJL2IppMTg");
	var mask_10_graphics_19 = new cjs.Graphics().p("EAoBAAPIJnsTIPJL2IpoMTg");
	var mask_10_graphics_20 = new cjs.Graphics().p("EAnVAAPIJosTIPJL2IppMTg");
	var mask_10_graphics_21 = new cjs.Graphics().p("EAmpAAPIJosTIPJL2IppMTg");
	var mask_10_graphics_22 = new cjs.Graphics().p("EAl+AAsIJnsSIPJL0IpoMUg");
	var mask_10_graphics_23 = new cjs.Graphics().p("EAlSABjIJosTIPJL1IppMUg");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:null,x:0,y:0}).wait(16).to({graphics:mask_10_graphics_16,x:427.6,y:17.8}).wait(1).to({graphics:mask_10_graphics_17,x:423.2,y:28.7}).wait(1).to({graphics:mask_10_graphics_18,x:418.9,y:39.6}).wait(1).to({graphics:mask_10_graphics_19,x:414.5,y:50.5}).wait(1).to({graphics:mask_10_graphics_20,x:410.2,y:61.4}).wait(1).to({graphics:mask_10_graphics_21,x:405.8,y:72.3}).wait(1).to({graphics:mask_10_graphics_22,x:401.4,y:80.2}).wait(1).to({graphics:mask_10_graphics_23,x:397.1,y:85.7}).wait(38));

	// O flash color down copy 3
	this.instance_70 = new lib.Oblurcircle3white();
	this.instance_70.parent = this;
	this.instance_70.setTransform(718.6,118.5,1,1,0,0,0,-233.5,63.5);
	this.instance_70._off = true;

	var maskedShapeInstanceList = [this.instance_70];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_70).wait(16).to({_off:false},0).wait(28).to({_off:true},1).wait(16));

	// O flash color MASK copy 3 (mask)
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	var mask_11_graphics_9 = new cjs.Graphics().p("EApYAAPIJosTIPJL2IpoMTg");
	var mask_11_graphics_10 = new cjs.Graphics().p("EAoxAAPIJnsTIPJL2IpoMTg");
	var mask_11_graphics_11 = new cjs.Graphics().p("EAoJAAPIJosTIPJL2IppMTg");
	var mask_11_graphics_12 = new cjs.Graphics().p("EAniAAPIJnsTIPJL2IpoMTg");
	var mask_11_graphics_13 = new cjs.Graphics().p("EAm6AAPIJosTIPIL2IpoMTg");
	var mask_11_graphics_14 = new cjs.Graphics().p("EAmSAAPIJosTIPJL2IppMTg");
	var mask_11_graphics_15 = new cjs.Graphics().p("EAlrAAPIJnsTIPJL2IpoMTg");
	var mask_11_graphics_16 = new cjs.Graphics().p("EAlDABFIJosTIPJL1IppMUg");
	var mask_11_graphics_17 = new cjs.Graphics().p("EAkcAB7IJnsSIPJL0IpoMUg");
	var mask_11_graphics_18 = new cjs.Graphics().p("EAj0ACyIJnsTIPJL1IpoMUg");
	var mask_11_graphics_19 = new cjs.Graphics().p("EAjMADpIJosTIPJL1IppMUg");
	var mask_11_graphics_20 = new cjs.Graphics().p("EAilAEfIJnsSIPJL0IpoMUg");
	var mask_11_graphics_21 = new cjs.Graphics().p("EAh9AFWIJosTIPJL1IppMUg");
	var mask_11_graphics_22 = new cjs.Graphics().p("EAhVAGMIJosSIPJL0IppMUg");
	var mask_11_graphics_23 = new cjs.Graphics().p("EAguAHDIJnsSIPJL0IpoMUg");
	var mask_11_graphics_24 = new cjs.Graphics().p("EAgGAH6IJosTIPJL1IppMUg");

	this.timeline.addTween(cjs.Tween.get(mask_11).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_11_graphics_9,x:423.3,y:11.5}).wait(1).to({graphics:mask_11_graphics_10,x:419.3,y:22.5}).wait(1).to({graphics:mask_11_graphics_11,x:415.4,y:33.4}).wait(1).to({graphics:mask_11_graphics_12,x:411.4,y:44.3}).wait(1).to({graphics:mask_11_graphics_13,x:407.5,y:55.3}).wait(1).to({graphics:mask_11_graphics_14,x:403.5,y:66.2}).wait(1).to({graphics:mask_11_graphics_15,x:399.5,y:77.1}).wait(1).to({graphics:mask_11_graphics_16,x:395.6,y:82.7}).wait(1).to({graphics:mask_11_graphics_17,x:391.6,y:88.1}).wait(1).to({graphics:mask_11_graphics_18,x:387.6,y:93.6}).wait(1).to({graphics:mask_11_graphics_19,x:383.7,y:99.1}).wait(1).to({graphics:mask_11_graphics_20,x:379.7,y:104.5}).wait(1).to({graphics:mask_11_graphics_21,x:375.8,y:110}).wait(1).to({graphics:mask_11_graphics_22,x:371.8,y:115.4}).wait(1).to({graphics:mask_11_graphics_23,x:367.8,y:120.9}).wait(1).to({graphics:mask_11_graphics_24,x:363.9,y:126.4}).wait(37));

	// O flash color copy 3
	this.instance_71 = new lib.Tween15("synched",0);
	this.instance_71.parent = this;
	this.instance_71.setTransform(718.7,84.6);
	this.instance_71._off = true;

	var maskedShapeInstanceList = [this.instance_71];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_11;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_71).wait(9).to({_off:false},0).to({x:719.3,y:84},15).to({_off:true},1).wait(36));

	// O white flash copy 3
	this.instance_72 = new lib.Oblurcircle2();
	this.instance_72.parent = this;
	this.instance_72.setTransform(889.8,148.8,1,1,0,0,0,-233.5,63.5);
	this.instance_72.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_72).wait(9).to({alpha:0.25},0).wait(28).to({alpha:0.539},0).wait(19).to({alpha:1},0).to({_off:true},1).wait(4));

	// O breakapart copy 3
	this.instance_73 = new lib.Obreakapart();
	this.instance_73.parent = this;
	this.instance_73.setTransform(719,89.9,1,1,0,0,0,45.1,52);
	this.instance_73._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_73).wait(56).to({_off:false},0).wait(3).to({x:718.5,y:89.4},0).wait(2));

	// O down angle MASK copy 3 (mask)
	var mask_12 = new cjs.Shape();
	mask_12._off = true;
	var mask_12_graphics_0 = new cjs.Graphics().p("AZTUNMAofgz1IOqLcMgofAz1g");
	var mask_12_graphics_1 = new cjs.Graphics().p("AZeUNMAoegz1IOqLcMgoeAz1g");
	var mask_12_graphics_2 = new cjs.Graphics().p("AZoUNMAoegz1IOqLcMgoeAz1g");
	var mask_12_graphics_3 = new cjs.Graphics().p("AZyUNMAofgz1IOqLcMgofAz1g");
	var mask_12_graphics_4 = new cjs.Graphics().p("AZ8UNMAofgz1IOqLcMgofAz1g");
	var mask_12_graphics_5 = new cjs.Graphics().p("AaHUNMAoegz1IOqLcMgoeAz1g");
	var mask_12_graphics_6 = new cjs.Graphics().p("AaRUNMAoegz1IOqLcMgoeAz1g");
	var mask_12_graphics_7 = new cjs.Graphics().p("AabUNMAofgz1IOqLcMgofAz1g");
	var mask_12_graphics_8 = new cjs.Graphics().p("AalUNMAofgz1IOqLcMgofAz1g");
	var mask_12_graphics_9 = new cjs.Graphics().p("AawUNMAoegz1IOqLcMgofAz1g");
	var mask_12_graphics_10 = new cjs.Graphics().p("AatUNMAofgz1IOqLcMgofAz1g");
	var mask_12_graphics_11 = new cjs.Graphics().p("AarUNMAofgz1IOqLcMgofAz1g");
	var mask_12_graphics_12 = new cjs.Graphics().p("AapUNMAoegz1IOqLcMgoeAz1g");
	var mask_12_graphics_13 = new cjs.Graphics().p("AanUNMAoegz1IOqLcMgoeAz1g");
	var mask_12_graphics_14 = new cjs.Graphics().p("AakUNMAofgz1IOqLcMgofAz1g");
	var mask_12_graphics_15 = new cjs.Graphics().p("AaiUNMAofgz1IOqLcMgofAz1g");
	var mask_12_graphics_16 = new cjs.Graphics().p("AagUNMAoegz1IOqLcMgoeAz1g");
	var mask_12_graphics_17 = new cjs.Graphics().p("AaeUNMAoegz1IOqLcMgoeAz1g");
	var mask_12_graphics_18 = new cjs.Graphics().p("AabUNMAofgz1IOqLcMgofAz1g");
	var mask_12_graphics_19 = new cjs.Graphics().p("AaZUNMAofgz1IOqLcMgofAz1g");

	this.timeline.addTween(cjs.Tween.get(mask_12).to({graphics:mask_12_graphics_0,x:514.8,y:-90.7}).wait(1).to({graphics:mask_12_graphics_1,x:515.8,y:-93}).wait(1).to({graphics:mask_12_graphics_2,x:516.8,y:-95.2}).wait(1).to({graphics:mask_12_graphics_3,x:517.9,y:-97.5}).wait(1).to({graphics:mask_12_graphics_4,x:518.9,y:-99.7}).wait(1).to({graphics:mask_12_graphics_5,x:519.9,y:-102}).wait(1).to({graphics:mask_12_graphics_6,x:520.9,y:-104.2}).wait(1).to({graphics:mask_12_graphics_7,x:522,y:-106.5}).wait(1).to({graphics:mask_12_graphics_8,x:523,y:-108.7}).wait(1).to({graphics:mask_12_graphics_9,x:524,y:-111}).wait(1).to({graphics:mask_12_graphics_10,x:523.8,y:-107.8}).wait(1).to({graphics:mask_12_graphics_11,x:523.6,y:-104.5}).wait(1).to({graphics:mask_12_graphics_12,x:523.3,y:-101.3}).wait(1).to({graphics:mask_12_graphics_13,x:523.1,y:-98.1}).wait(1).to({graphics:mask_12_graphics_14,x:522.9,y:-94.8}).wait(1).to({graphics:mask_12_graphics_15,x:522.7,y:-91.6}).wait(1).to({graphics:mask_12_graphics_16,x:522.4,y:-88.4}).wait(1).to({graphics:mask_12_graphics_17,x:522.2,y:-85.2}).wait(1).to({graphics:mask_12_graphics_18,x:522,y:-81.9}).wait(1).to({graphics:mask_12_graphics_19,x:521.8,y:-78.7}).wait(42));

	// O down angle copy 3
	this.instance_74 = new lib.blurangle1();
	this.instance_74.parent = this;
	this.instance_74.setTransform(915.6,-182.2,1,1,0,0,180,136.1,176.8);

	var maskedShapeInstanceList = [this.instance_74];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_12;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_74).to({x:853.7,y:-95.9},9).to({x:752.6,y:40.5},2).to({x:598.7,y:244.8},3).to({x:544.7,y:315.1},1).to({x:448.4,y:454.5},2).to({x:358.2,y:596},2).to({_off:true},1).wait(41));

	// O down angle 2 MASK copy 3 (mask)
	var mask_13 = new cjs.Shape();
	mask_13._off = true;
	var mask_13_graphics_0 = new cjs.Graphics().p("AC0aNMAofgz1IOpLcMgoeAz1g");
	var mask_13_graphics_29 = new cjs.Graphics().p("ACeckMAoegz1IOqLcMgoeAz1g");

	this.timeline.addTween(cjs.Tween.get(mask_13).to({graphics:mask_13_graphics_0,x:370.9,y:240.9}).wait(29).to({graphics:mask_13_graphics_29,x:368.6,y:256}).wait(32));

	// O down angle 2 copy 3
	this.instance_75 = new lib.blurangle1();
	this.instance_75.parent = this;
	this.instance_75.setTransform(811.6,-38.2,1,1,0,0,180,136.1,176.8);
	this.instance_75._off = true;

	var maskedShapeInstanceList = [this.instance_75];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_13;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_75).wait(17).to({_off:false},0).to({x:738,y:60.8},2).to({x:593.9,y:253.2},4).to({x:387.8,y:533.1},5).to({x:389.7,y:549.8},1).to({_off:true},1).wait(31));

	// O angle Mask up top copy 3 (mask)
	var mask_14 = new cjs.Shape();
	mask_14._off = true;
	var mask_14_graphics_48 = new cjs.Graphics().p("AemNcMAdOgnlIRPMuMgdOAnlg");
	var mask_14_graphics_49 = new cjs.Graphics().p("AemNcMAdOgnlIRPMuMgdOAnlg");
	var mask_14_graphics_50 = new cjs.Graphics().p("AemNcMAdOgnlIRPMuMgdOAnlg");
	var mask_14_graphics_51 = new cjs.Graphics().p("AemNcMAdPgnlIROMuMgdOAnlg");
	var mask_14_graphics_52 = new cjs.Graphics().p("AemNcMAdPgnlIROMuMgdOAnlg");
	var mask_14_graphics_53 = new cjs.Graphics().p("AemNcMAdPgnlIROMuMgdOAnlg");
	var mask_14_graphics_54 = new cjs.Graphics().p("AemNcMAdPgnlIROMuMgdOAnlg");
	var mask_14_graphics_55 = new cjs.Graphics().p("AenNcMAdOgnlIRPMuMgdOAnlg");
	var mask_14_graphics_56 = new cjs.Graphics().p("AenNcMAdOgnlIRPMuMgdOAnlg");
	var mask_14_graphics_57 = new cjs.Graphics().p("AenNcMAdOgnlIRPMuMgdOAnlg");
	var mask_14_graphics_58 = new cjs.Graphics().p("AfZNcMAdPgnlIROMuMgdOAnlg");

	this.timeline.addTween(cjs.Tween.get(mask_14).to({graphics:null,x:0,y:0}).wait(48).to({graphics:mask_14_graphics_48,x:493.1,y:-71.3}).wait(1).to({graphics:mask_14_graphics_49,x:493.1,y:-71}).wait(1).to({graphics:mask_14_graphics_50,x:493.1,y:-70.7}).wait(1).to({graphics:mask_14_graphics_51,x:493.1,y:-70.4}).wait(1).to({graphics:mask_14_graphics_52,x:493.1,y:-70.1}).wait(1).to({graphics:mask_14_graphics_53,x:493.1,y:-69.8}).wait(1).to({graphics:mask_14_graphics_54,x:493.1,y:-69.5}).wait(1).to({graphics:mask_14_graphics_55,x:493.2,y:-69.2}).wait(1).to({graphics:mask_14_graphics_56,x:493.2,y:-68.9}).wait(1).to({graphics:mask_14_graphics_57,x:493.2,y:-68.6}).wait(1).to({graphics:mask_14_graphics_58,x:498.2,y:-82.8}).wait(3));

	// O angle up top copy 3
	this.instance_76 = new lib.Tween21("synched",0);
	this.instance_76.parent = this;
	this.instance_76.setTransform(576.5,412.3);
	this.instance_76._off = true;

	var maskedShapeInstanceList = [this.instance_76];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_14;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_76).wait(48).to({_off:false},0).wait(1).to({x:612.5,y:366.3},0).wait(1).to({x:617.3,y:359.3},0).wait(3).to({x:645.4,y:320.6},0).wait(3).to({x:664.2,y:294.7},0).wait(1).to({x:681,y:273.2},0).wait(1).to({x:822.3,y:98.2},0).to({_off:true},1).wait(2));

	// O angle Mask up copy 3 (mask)
	var mask_15 = new cjs.Shape();
	mask_15._off = true;
	var mask_15_graphics_28 = new cjs.Graphics().p("AMSTRMAdOgnlIRPMuMgdOAnlg");
	var mask_15_graphics_29 = new cjs.Graphics().p("AMVTTMAdPgnlIROMuMgdOAnlg");
	var mask_15_graphics_30 = new cjs.Graphics().p("AMZTWMAdPgnlIROMuMgdOAnlg");
	var mask_15_graphics_31 = new cjs.Graphics().p("AMdTZMAdOgnlIRPMuMgdOAnlg");
	var mask_15_graphics_32 = new cjs.Graphics().p("AMgTcMAdPgnlIROMuMgdOAnlg");
	var mask_15_graphics_33 = new cjs.Graphics().p("AMkTeMAdPgnlIROMuMgdOAnlg");
	var mask_15_graphics_34 = new cjs.Graphics().p("AMoThMAdOgnlIRPMuMgdOAnlg");
	var mask_15_graphics_35 = new cjs.Graphics().p("AMrTkMAdPgnlIROMuMgdOAnlg");
	var mask_15_graphics_36 = new cjs.Graphics().p("AMvTnMAdPgnlIROMuMgdOAnlg");
	var mask_15_graphics_37 = new cjs.Graphics().p("AMzTpMAdOgnlIRPMuMgdOAnlg");
	var mask_15_graphics_38 = new cjs.Graphics().p("AM2TsMAdPgnlIROMuMgdOAnlg");
	var mask_15_graphics_39 = new cjs.Graphics().p("AM6TvMAdOgnlIRPMuMgdOAnlg");
	var mask_15_graphics_40 = new cjs.Graphics().p("AM4TtMAdOgnlIRPMuMgdOAnlg");
	var mask_15_graphics_41 = new cjs.Graphics().p("AM2TrMAdOgnlIRPMuMgdOAnlg");
	var mask_15_graphics_42 = new cjs.Graphics().p("AM0TqMAdOgnlIRPMuMgdOAnlg");
	var mask_15_graphics_43 = new cjs.Graphics().p("AMyToMAdOgnlIRPMuMgdOAnlg");
	var mask_15_graphics_44 = new cjs.Graphics().p("AMwTmMAdOgnlIRPMuMgdOAnlg");
	var mask_15_graphics_45 = new cjs.Graphics().p("AM0TdMAdOgnlIRPMuMgdOAnlg");
	var mask_15_graphics_46 = new cjs.Graphics().p("AM4TTMAdOgnlIRPMuMgdOAnlg");
	var mask_15_graphics_47 = new cjs.Graphics().p("AM8TJMAdOgnlIRPMuMgdOAnlg");
	var mask_15_graphics_48 = new cjs.Graphics().p("ANATAMAdOgnlIRPMuMgdOAnlg");
	var mask_15_graphics_49 = new cjs.Graphics().p("ANES2MAdOgnlIRPMuMgdOAnlg");
	var mask_15_graphics_50 = new cjs.Graphics().p("ANISsMAdOgnlIRPMuMgdOAnlg");
	var mask_15_graphics_51 = new cjs.Graphics().p("ANMSjMAdOgnlIRPMuMgdOAnlg");
	var mask_15_graphics_52 = new cjs.Graphics().p("ANQSZMAdOgnlIRPMuMgdOAnlg");
	var mask_15_graphics_53 = new cjs.Graphics().p("ANUSQMAdOgnlIRPMuMgdOAnlg");
	var mask_15_graphics_54 = new cjs.Graphics().p("ANYSGMAdOgnlIRPMuMgdOAnlg");
	var mask_15_graphics_55 = new cjs.Graphics().p("ANcR8MAdOgnlIRPMuMgdOAnlg");
	var mask_15_graphics_56 = new cjs.Graphics().p("ANgRzMAdOgnlIRPMuMgdOAnlg");
	var mask_15_graphics_57 = new cjs.Graphics().p("ANjRpMAdPgnlIROMuMgdNAnlg");
	var mask_15_graphics_58 = new cjs.Graphics().p("AOER0MAdPgnlIROMuMgdOAnlg");

	this.timeline.addTween(cjs.Tween.get(mask_15).to({graphics:null,x:0,y:0}).wait(28).to({graphics:mask_15_graphics_28,x:375.9,y:204.7}).wait(1).to({graphics:mask_15_graphics_29,x:376.2,y:204.9}).wait(1).to({graphics:mask_15_graphics_30,x:376.6,y:205.2}).wait(1).to({graphics:mask_15_graphics_31,x:377,y:205.5}).wait(1).to({graphics:mask_15_graphics_32,x:377.3,y:205.8}).wait(1).to({graphics:mask_15_graphics_33,x:377.7,y:206}).wait(1).to({graphics:mask_15_graphics_34,x:378.1,y:206.3}).wait(1).to({graphics:mask_15_graphics_35,x:378.4,y:206.6}).wait(1).to({graphics:mask_15_graphics_36,x:378.8,y:206.9}).wait(1).to({graphics:mask_15_graphics_37,x:379.2,y:207.1}).wait(1).to({graphics:mask_15_graphics_38,x:379.5,y:207.4}).wait(1).to({graphics:mask_15_graphics_39,x:379.9,y:207.7}).wait(1).to({graphics:mask_15_graphics_40,x:379.7,y:207.5}).wait(1).to({graphics:mask_15_graphics_41,x:379.5,y:207.3}).wait(1).to({graphics:mask_15_graphics_42,x:379.3,y:207.2}).wait(1).to({graphics:mask_15_graphics_43,x:379.1,y:207}).wait(1).to({graphics:mask_15_graphics_44,x:378.9,y:206.8}).wait(1).to({graphics:mask_15_graphics_45,x:379.3,y:205.9}).wait(1).to({graphics:mask_15_graphics_46,x:379.7,y:204.9}).wait(1).to({graphics:mask_15_graphics_47,x:380.1,y:203.9}).wait(1).to({graphics:mask_15_graphics_48,x:380.5,y:203}).wait(1).to({graphics:mask_15_graphics_49,x:380.9,y:202}).wait(1).to({graphics:mask_15_graphics_50,x:381.3,y:201}).wait(1).to({graphics:mask_15_graphics_51,x:381.7,y:200.1}).wait(1).to({graphics:mask_15_graphics_52,x:382.1,y:199.1}).wait(1).to({graphics:mask_15_graphics_53,x:382.5,y:198.2}).wait(1).to({graphics:mask_15_graphics_54,x:382.9,y:197.2}).wait(1).to({graphics:mask_15_graphics_55,x:383.3,y:196.2}).wait(1).to({graphics:mask_15_graphics_56,x:383.7,y:195.3}).wait(1).to({graphics:mask_15_graphics_57,x:384.1,y:194.3}).wait(1).to({graphics:mask_15_graphics_58,x:387.3,y:195.4}).wait(3));

	// O angle up copy 3
	this.instance_77 = new lib.blurangle7();
	this.instance_77.parent = this;
	this.instance_77.setTransform(389.6,530.3,1,1,59.9,0,0,262.1,431.3);
	this.instance_77._off = true;

	var maskedShapeInstanceList = [this.instance_77];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_15;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_77).wait(28).to({_off:false},0).to({regY:431.2,scaleX:1,scaleY:1,x:568.2,y:282.2},9).to({regY:431.3,scaleX:1,scaleY:1,x:596.5,y:247.2},2).to({regY:431.2,scaleX:1,scaleY:1,x:898.1,y:-148.6},17).to({x:918.7,y:-181.4},1).to({regY:431.3,scaleX:1,scaleY:1,x:942,y:-199.8},1).to({_off:true},1).wait(2));

	// N Flash A copy 2
	this.instance_78 = new lib.Nflasha();
	this.instance_78.parent = this;
	this.instance_78.setTransform(777.6,85.4,0.985,1,0,0,0,8.2,35.6);
	this.instance_78.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_78).to({regX:8.3,x:778.8,y:85.3,alpha:0.488},10).to({regX:8.2,x:779.6,y:84.9,alpha:1},22).to({_off:true},1).wait(28));

	// N Flash B copy 2
	this.instance_79 = new lib.Tween8("synched",0);
	this.instance_79.parent = this;
	this.instance_79.setTransform(802.4,85.3);
	this.instance_79.alpha = 0;
	this.instance_79._off = true;

	this.instance_80 = new lib.Tween9("synched",0);
	this.instance_80.parent = this;
	this.instance_80.setTransform(802.4,85.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_79}]},8).to({state:[{t:this.instance_79}]},12).to({state:[{t:this.instance_80}]},12).to({state:[]},1).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.instance_79).wait(8).to({_off:false},0).to({x:803.4,alpha:1},12).to({_off:true,x:802.4,y:85.1},12).wait(29));

	// N Flash C copy 2
	this.instance_81 = new lib.Nflashc();
	this.instance_81.parent = this;
	this.instance_81.setTransform(825.7,85.4,0.985,1,0,0,0,8,35.6);
	this.instance_81.alpha = 0;
	this.instance_81._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_81).wait(10).to({_off:false},0).to({y:85.2,alpha:1},22).to({_off:true},1).wait(28));

	// N breakapart copy
	this.instance_82 = new lib.Nbreakapart2();
	this.instance_82.parent = this;
	this.instance_82.setTransform(805,90.4,1,1,0,0,0,44.1,52);
	this.instance_82._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_82).wait(29).to({_off:false},0).wait(30).to({x:804},0).wait(2));

	// N up 2 copy 2
	this.instance_83 = new lib.blurmagenta();
	this.instance_83.parent = this;
	this.instance_83.setTransform(776.5,529.6,1,1,0,180,0,7,170.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_83).to({scaleX:1.14,x:779,y:209.2},6).to({y:-205.2},8).to({_off:true},1).wait(46));

	// N down 2 copy 2
	this.instance_84 = new lib.blurpurple();
	this.instance_84.parent = this;
	this.instance_84.setTransform(778.9,-224.5,1,1,0,180,0,8,189.5);
	this.instance_84._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_84).wait(14).to({_off:false},0).to({y:-60.8},10).to({x:779,y:507.8},10).to({_off:true},1).wait(26));

	// N down copy 2
	this.instance_85 = new lib.blurmagenta();
	this.instance_85.parent = this;
	this.instance_85.setTransform(693.5,529.5,1.143,1,0,0,0,7,170.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_85).wait(20).to({x:826.5,y:-204.7},0).to({y:-41.3},6).to({y:486.7},8).to({_off:true},1).wait(26));

	// N up copy 2
	this.instance_86 = new lib.blurpurple();
	this.instance_86.parent = this;
	this.instance_86.setTransform(825.5,548.3,1,1,0,0,0,8,189.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_86).to({x:826.7,y:233.9},10).to({x:826.5,y:-225.4},10).to({_off:true},1).wait(40));

	// N angle down copy 2
	this.instance_87 = new lib.blurangle1();
	this.instance_87.parent = this;
	this.instance_87.setTransform(579.8,-211,0.977,0.978,0,0,0,136.1,176.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_87).to({x:699.9,y:-52.2},11).to({x:843.1,y:139},4).to({regX:136.2,x:1006.9,y:358.1},5).to({regX:136.1,x:1099.9,y:480.5},2).to({_off:true},1).wait(38));

	// N angle up copy 2
	this.instance_88 = new lib.blurangle5();
	this.instance_88.parent = this;
	this.instance_88.setTransform(1112.6,494.3,1,1,-14.2,0,0,262.1,431.3);
	this.instance_88._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_88).wait(22).to({_off:false},0).to({x:576.4,y:-216.2},12).to({_off:true},1).wait(26));

	// studio
	this.instance_89 = new lib.Studio1();
	this.instance_89.parent = this;
	this.instance_89.setTransform(545.8,370.9,1.614,1.614,0,0,0,308.4,34);
	this.instance_89._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_89).wait(39).to({_off:false},0).to({regX:308.6,scaleX:1,scaleY:1,x:519.5,y:181.1},20).wait(2));

	// subhead
	this.instance_90 = new lib.Tween26("synched",0);
	this.instance_90.parent = this;
	this.instance_90.setTransform(1261.5,257.4);
	this.instance_90._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_90).wait(55).to({_off:false},0).to({x:488.3},5).wait(1));

	// tagline
	this.instance_91 = new lib.Tween29("synched",0,false);
	this.instance_91.parent = this;
	this.instance_91.setTransform(-376.2,288.4);
	this.instance_91._off = true;

	this.instance_92 = new lib.Tween30("synched",0);
	this.instance_92.parent = this;
	this.instance_92.setTransform(489,288.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_91}]},55).to({state:[{t:this.instance_92}]},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_91).wait(55).to({_off:false},0).to({_off:true,x:489,y:288.9},5).wait(1));

	// Background
	this.instance_93 = new lib.wood();
	this.instance_93.parent = this;
	this.instance_93.setTransform(0,1);

	this.instance_94 = new lib.background();
	this.instance_94.parent = this;
	this.instance_94.setTransform(489.5,175.5,1,1,0,0,0,489.5,174.5);
	this.instance_94.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_94},{t:this.instance_93}]}).to({state:[{t:this.instance_94},{t:this.instance_93}]},59).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(105.9,-269.7,1752.6,1205.4);
// library properties:
lib.properties = {
	id: '0AF140E26A3F4C16957480F3FB49F7AC',
	width: 980,
	height: 350,
	fps: 16,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/wood.jpg", id:"wood"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0AF140E26A3F4C16957480F3FB49F7AC'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;