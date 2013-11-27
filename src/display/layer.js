/*
 * layer.js
 */

tm.display = tm.display || {};


(function() {
    
    tm.define("tm.display.Layer", {
        superClass: tm.app.Object2D,

        init: function() {
            this.superInit();
        }

    });

    tm.define("tm.display.CanvasLayer", {
        superClass: tm.display.Layer,

        canvas: null,
        renderer: null,

        _drawInterval: 0,

        _drawCounter: 0,

        init: function(width, height) {
            this.superInit();

            this.canvas = tm.graphics.Canvas();
            this.renderer = tm.display.CanvasRenderer(this.canvas);

            this.resize(width, height);
        },

        _calcWorldMatrix: function() {
            this._worldMatrix.identity();
        },

        resize: function(width, height) {
            this.width = width;
            this.height = height;
            
            return this;
        },

        draw: function(canvas) {
            this._drawCounter -= 1;
            if (this._drawCounter <= 0) {
                this.canvas.clear();

                if (this.children.length > 0) {
                    var tempChildren = this.children.slice();

                    this.canvas.save();
                    for (var i = 0, len = tempChildren.length; i < len; i++) {
                        this.renderer.renderObject(tempChildren[i]);
                    }
                    this.canvas.restore();
                }

                this._drawCounter = this._drawInterval;
            }
            canvas.context.drawImage(this.canvas.element, 0, 0);
        }

    });

    /**
     * @property    width
     * 幅
     */
    tm.display.CanvasLayer.prototype.accessor("width", {
        "get": function()   { return this.canvas.width; },
        "set": function(v)  { this.canvas.width = v; }
    });
    
    /**
     * @property    height
     * 高さ
     */
    tm.display.CanvasLayer.prototype.accessor("height", {
        "get": function()   { return this.canvas.height; },
        "set": function(v)  { this.canvas.height = v; }
    });

    tm.display.CanvasLayer.prototype.accessor("drawInterval", {
        "get": function()   { return this._drawInterval; },
        "set": function(v)  { this._drawInterval = this._drawCounter = v; }
    });

})();
