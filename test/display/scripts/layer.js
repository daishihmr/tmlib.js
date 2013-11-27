tm.define("tests.layer.draw", {
    superClass: "tm.app.Scene",
    
    init: function() {
        this.superInit();

        tm.display.CircleShape(30, 30, { fillStyle: "green" })
            .setPosition(0, 50)
            .addChildTo(this)
            .update = function() {
                this.x += 1;
            };

        var layer0 = tm.display.CanvasLayer(640, 480);
        layer0.addChildTo(this);
        tm.display.CircleShape(30, 30, { fillStyle: "red" })
            .setPosition(0, 100)
            .addChildTo(layer0)
            .update = function() {
                this.x += 1;
            };

        var layer1 = tm.display.CanvasLayer(640, 480);
        layer1.drawInterval = 3;
        layer1.addChildTo(this);
        tm.display.CircleShape(30, 30, { fillStyle: "blue" })
            .setPosition(0, 150)
            .addChildTo(layer1)
            .update = function() {
                this.x += 1;
            };

        this.update = function(app) {
            if (app.keyboard.getKeyDown("z")) {
                layer0.canvas.saveAsImage();
            }
        };
    }
})