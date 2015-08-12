/*
 * menudialog.js
 */

(function() {
    
    /**
     * @class tm.ui.MenuDialog
     * メニューダイアログ
     * @extends tm.app.Scene
     *
     * @usage
     *
     * var menuDialog = tm.ui.MenuDialog({
     *     menu: ['OK', 'CANCEL'],
     *     defaultIndex: 1,
     * }).on('selected', function(e) {
     *     console.log(e.value, e.index);
     * });
     * app.pushScene(menuDialog);
     *
     */
    tm.define("tm.ui.MenuDialog", {
        superClass: tm.app.Scene,

        /** @type {Array.<string>} menu text list */
        menu: null,
        /** @type {Array.<string>} menu description list */
        descriptions: null,

        /** @type {tm.display.Label} Label for title */
        title: null,
        /** @type {Array.<tm.ui.LabelButton>} LabelButtons for menu items */
        menuItems: [],
        /** @type {tm.display.Label} Label for current selected item's description */
        description: null,
        /** @type {tm.display.RectangleShape} background box */
        box: null,
        /** @type {tm.display.RectangleShape} cursor */
        cursor: null,

        /** @type {number} index of current selected item */
        currentIndex: 0,

        /**
         * @constructor
         * @param {Object} params
         */
        init: function(params) {
            this.superInit();

            this.params = {}.$extend(tm.ui.MenuDialog.DEFAULT_PARAM, params);

            this.fromJSON({
                children: {
                    bg: {
                        type: "tm.display.RectangleShape",
                        init: [this.params.width, this.params.height, {
                            fillStyle: this.params.backgroundColor,
                            strokeStyle: "transparent"
                        }],
                        originX: 0, originY: 0,
                    },
                },
            });

            this.menu = this.params.menu.clone();
            this.currentIndex = this.params.defaultIndex;
            if (this.params.menuDescriptions) {
                this.descriptions = this.params.menuDescriptions.clone();
            } else {
                this.descriptions = this.params.menu.clone();
            }

            if (this.params.showExit) {
                this.menu.push("exit");
                this.descriptions.push("前の画面へ戻ります");
            }

            var height = Math.max((1 + this.menu.length) * 50, 50) + 40;
            this.box = tm.display.RectangleShape(this.params.width * 0.8, height, {
                strokeStyle: "transparent",
                fillStyle: this.params.boxColor,
            })
                .setPosition(this.params.width * 0.5, this.params.height * 0.5)
                .setSize(1, 1)
                .setBoundingType("rect")
                .addChildTo(this);

            this.box.tweener
                .to({
                    width: this.params.width * 0.8,
                    height: height
                }, 200, "easeOutExpo")
                .call(this._onOpen.bind(this));

            this.description = tm.display.Label("", this.params.fontSize)
                .setAlign("center")
                .setBaseline("middle")
                .setPosition(this.params.width * 0.5, this.params.height - this.params.fontSize)
                .addChildTo(this);

            var y = this.params.height * 0.5 - this.menu.length * 25;

            this.title = tm.display.Label(this.params.title, this.params.fontSize * 1.2)
                .setAlign("center")
                .setBaseline("middle")
                .setPosition(this.params.width * 0.5, y);

            var self = this;
            this.menuItems = this.menu.map(function(text, i) {
                y += 50;
                var menuItem = tm.ui.LabelButton(text)
                    .setPosition(self.params.width * 0.5, y)
                    .setFontSize(self.params.fontSize)
                    .setInteractive(true)
                    .on("pointingend", function() {
                        if (self.currentIndex === i) {
                            self.closeDialog(true);
                        } else {
                            self.currentIndex = i;
                        }
                    });
                menuItem.width = self.params.width * 0.7;
                return menuItem;
            });

            this.cursor = this._createCursor();
            this.cursor.y = this.menuItems[this.currentIndex].y;
        },

        /**
         * @private
         */
        _onOpen: function() {
            var self = this;

            this.title.addChildTo(this);

            this.cursor.addChildTo(this);

            this.menuItems.forEach(function(menuItem) {
                menuItem.addChildTo(self);
            });

            // close window when touch bg outside
            this.on("pointingend", function(e) {
                var p = e.app.pointing;
                if (!self.box.isHitPoint(p.x, p.y)) {
                    self.closeDialog(false);
                }
            });

            // dispatch opened event
            this.flare("opened");
        },

        /**
         * @private
         */
        _createCursor: function() {
            var self = this;

            var cursor = tm.display.RectangleShape(this.params.width * 0.7, 30, {
                strokeStyle: "transparent",
                fillStyle: this.params.cursorColor
            });
            cursor.x = this.params.width * 0.5;
            cursor.target = this.currentIndex;
            
            cursor.update = function() {
                if (this.target !== self.currentIndex) {
                    this.target = self.currentIndex;

                    var e = tm.event.Event("preselected");
                    e.value = self.menu[self.currentIndex];
                    e.index = self.currentIndex;
                    self.fire(e);

                    this.tweener.clear();
                    this.tweener.to({
                        y: self.menuItems[self.currentIndex].y
                    }, 200, "easeOutExpo");
                }
            };

            return cursor;
        },

        /**
         * 更新
         */
        update: function(app) {
            var kb = app.keyboard;
            if (kb.getKeyDown("down")) {
                this.currentIndex = Math.clamp(this.currentIndex + 1, 0, this.menu.length - 1);
            } else if (kb.getKeyDown("up")) {
                this.currentIndex = Math.clamp(this.currentIndex - 1, 0, this.menu.length - 1);
            } else if (kb.getKeyDown(this.params.okKey)) {
                this.closeDialog(true);
            } else if (kb.getKeyDown(this.params.cancelKey)) {
                this.closeDialog(false);
            }

            this.description.text = this.descriptions[this.currentIndex];
        },

        /**
         * 閉じる
         */
        closeDialog: function(decided) {
            if (decided) {
                var e = tm.event.Event("selected");
                e.index = this.currentIndex;
                e.value = this.menu[this.currentIndex];
                this.fire(e);
            } else {
                this.flare("canceled");
            }

            var self = this;
            this.tweener
                .clear()
                .wait(decided ? 200 : 0)
                .call(function() {
                    self.cursor.remove();
                    self.title.remove();
                    self.menuItems.each(function(menuItem) {
                        menuItem.remove();
                    });
                    self.box.tweener
                        .clear()
                        .to({
                            width: 1,
                            height: 1
                        }, 200, "easeInExpo")
                        .call(function() {
                            self.app.popScene();

                            var e = tm.event.Event("closed");
                            if (decided) {
                                e.index = self.currentIndex;
                                e.value = self.menu[self.currentIndex];
                            } else {
                                e.index = -1;
                                e.value = null;
                            }
                            self.fire(e);
                        });
                });

            if (decided) {
                this.cursor.tweener.clear();
                this.cursor.on("enterframe", function() {
                    this.visible = !this.visible;
                });
            }
        },
    });

    tm.ui.MenuDialog.DEFAULT_PARAM = {
        title: "MENU",
        defaultIndex: 0,
        width: 640,
        height: 960,
        fontSize: 30,
        okKey: "enter",
        cancelKey: "escape",
        backgroundColor: "rgba(0,0,0,0.8)",
        boxColor: "rgba(43,156,255, 0.8)",
        cursorColor: "rgba(12,79,138,1)",
    };

})();
