/*
 * canvaslayer.js
 */
(function() {

    /**
     * HTMLCanvasElementを内包した要素.
     * @class tm.display.CanvasLayer
     * @extends tm.app.Object2D
     */
    tm.define("tm.display.CanvasLayer", {
        superClass: "tm.app.Object2D",
        init: function(canvas) {
            this.superInit();

            if (canvas instanceof HTMLCanvasElement) {
                this.element = canvas;
                this.canvas = tm.graphics.Canvas(this.element);
            } else if (canvas instanceof tm.graphics.Canvas) {
                this.element = canvas.element;
                this.canvas = canvas;
            } else if (typeof canvas == "string") {
                this.element = document.querySelector(canvas);
                this.canvas = tm.graphics.Canvas(this.element);
            } else {
                this.element = document.createElement("canvas");
                this.canvas = tm.graphics.Canvas(this.element);
            }

            this.renderer = tm.display.CanvasRenderer(this.canvas);

            this._drawToSelf = true;

            this.background = "black";
            
            this._drawCounter = 1.0;
            this.drawRate = 1.0;

            window.addEventListener("resize", function() {
                this.onresize();
            }.bind(this), false);

            this.one("enterframe", function() {
                this.onresize();
            });
        },

        onresize: function() {
            var app = this.getRoot().app;
            if (app instanceof tm.display.CanvasApp) {
                this.canvas.resize(app.width, app.height);

                var e = this.element;
                var s = e.style;

                s.position = "absolute";
                s.margin = "auto";
                s.left = "0px";
                s.top = "0px";
                s.bottom = "0px";
                s.right = "0px";
                s.width = app.element.style.width;
                s.height = app.element.style.height;
            }
        },

        update: function(app) {
            this._drawCounter += this.drawRate;
        },

        draw: function() {
            if (this._drawCounter < 1.0) return;
            
            this._drawCounter -= 1.0;

            this.canvas.clear();

            this.children.forEach(function(c) {
                this.renderer.render(c);
            }.bind(this));
        },
    });

    tm.display.CanvasLayer.prototype.accessor("background", {
        "get": function() {
            return this._background;
        },
        "set": function(v) {
            this._background = v;
            this.element.style.background = v;
        }
    });

})();
