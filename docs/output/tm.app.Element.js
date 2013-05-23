Ext.data.JsonP.tm_app_Element({"tagname":"class","name":"tm.app.Element","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-tm.app.Element","members":{"cfg":[],"property":[{"name":"collision","tagname":"property","owner":"tm.app.Element","meta":{},"id":"property-collision"},{"name":"interaction","tagname":"property","owner":"tm.app.Element","meta":{},"id":"property-interaction"}],"method":[{"name":"addChild","tagname":"method","owner":"tm.app.Element","meta":{},"id":"method-addChild"},{"name":"addChildTo","tagname":"method","owner":"tm.app.Element","meta":{"chainable":true},"id":"method-addChildTo"},{"name":"addChildren","tagname":"method","owner":"tm.app.Element","meta":{},"id":"method-addChildren"},{"name":"execChildren","tagname":"method","owner":"tm.app.Element","meta":{},"id":"method-execChildren"},{"name":"getChildAt","tagname":"method","owner":"tm.app.Element","meta":{},"id":"method-getChildAt"},{"name":"getChildByName","tagname":"method","owner":"tm.app.Element","meta":{},"id":"method-getChildByName"},{"name":"getParent","tagname":"method","owner":"tm.app.Element","meta":{},"id":"method-getParent"},{"name":"getRoot","tagname":"method","owner":"tm.app.Element","meta":{},"id":"method-getRoot"},{"name":"init","tagname":"method","owner":"tm.app.Element","meta":{},"id":"method-init"},{"name":"remove","tagname":"method","owner":"tm.app.Element","meta":{"chainable":true},"id":"method-remove"},{"name":"removeChild","tagname":"method","owner":"tm.app.Element","meta":{},"id":"method-removeChild"},{"name":"removeChildren","tagname":"method","owner":"tm.app.Element","meta":{},"id":"method-removeChildren"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":10,"files":[{"filename":"element.js","href":"element.html#tm-app-Element"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/element.html#tm-app-Element' target='_blank'>element.js</a></div></pre><div class='doc-contents'><p>アプリケーション用オブジェクトの基底となるクラス</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-collision' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.app.Element'>tm.app.Element</span><br/><a href='source/collision.html#tm-app-Element-property-collision' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.app.Element-property-collision' class='name not-expandable'>collision</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'><p>コリジョン</p>\n</div><div class='long'><p>コリジョン</p>\n</div></div></div><div id='property-interaction' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.app.Element'>tm.app.Element</span><br/><a href='source/interaction.html#tm-app-Element-property-interaction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.app.Element-property-interaction' class='name not-expandable'>interaction</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'><p>インタラクション</p>\n</div><div class='long'><p>インタラクション</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addChild' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.app.Element'>tm.app.Element</span><br/><a href='source/element.html#tm-app-Element-method-addChild' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.app.Element-method-addChild' class='name expandable'>addChild</a>( <span class='pre'>child</span> )</div><div class='description'><div class='short'>子供を追加 ...</div><div class='long'><p>子供を追加</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>child</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-addChildTo' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.app.Element'>tm.app.Element</span><br/><a href='source/element.html#tm-app-Element-method-addChildTo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.app.Element-method-addChildTo' class='name expandable'>addChildTo</a>( <span class='pre'>parent</span> ) : <a href=\"#!/api/tm.app.Element\" rel=\"tm.app.Element\" class=\"docClass\">tm.app.Element</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>parent に自分を子供として追加 ...</div><div class='long'><p>parent に自分を子供として追加</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>parent</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.app.Element\" rel=\"tm.app.Element\" class=\"docClass\">tm.app.Element</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-addChildren' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.app.Element'>tm.app.Element</span><br/><a href='source/element.html#tm-app-Element-method-addChildren' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.app.Element-method-addChildren' class='name expandable'>addChildren</a>( <span class='pre'>children</span> )</div><div class='description'><div class='short'>まとめて追加\nscene 遷移時に子供をごっそり移譲するときなどに使用\nまだ動作確認していない ...</div><div class='long'><p>まとめて追加\nscene 遷移時に子供をごっそり移譲するときなどに使用\nまだ動作確認していない</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>children</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-execChildren' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.app.Element'>tm.app.Element</span><br/><a href='source/element.html#tm-app-Element-method-execChildren' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.app.Element-method-execChildren' class='name expandable'>execChildren</a>( <span class='pre'>func, args</span> )</div><div class='description'><div class='short'>関数実行 ...</div><div class='long'><p>関数実行</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>func</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>args</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getChildAt' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.app.Element'>tm.app.Element</span><br/><a href='source/element.html#tm-app-Element-method-getChildAt' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.app.Element-method-getChildAt' class='name expandable'>getChildAt</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>index 指定で子供を取得 ...</div><div class='long'><p>index 指定で子供を取得</p>\n</div></div></div><div id='method-getChildByName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.app.Element'>tm.app.Element</span><br/><a href='source/element.html#tm-app-Element-method-getChildByName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.app.Element-method-getChildByName' class='name expandable'>getChildByName</a>( <span class='pre'>name</span> )</div><div class='description'><div class='short'>名前の一致する child を取得 ...</div><div class='long'><p>名前の一致する child を取得</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getParent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.app.Element'>tm.app.Element</span><br/><a href='source/element.html#tm-app-Element-method-getParent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.app.Element-method-getParent' class='name expandable'>getParent</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>親を取得 ...</div><div class='long'><p>親を取得</p>\n</div></div></div><div id='method-getRoot' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.app.Element'>tm.app.Element</span><br/><a href='source/element.html#tm-app-Element-method-getRoot' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.app.Element-method-getRoot' class='name expandable'>getRoot</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>ルートを取得 ...</div><div class='long'><p>ルートを取得</p>\n</div></div></div><div id='method-init' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.app.Element'>tm.app.Element</span><br/><a href='source/element.html#tm-app-Element-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.app.Element-method-init' class='name expandable'>init</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>初期化 ...</div><div class='long'><p>初期化</p>\n</div></div></div><div id='method-remove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.app.Element'>tm.app.Element</span><br/><a href='source/element.html#tm-app-Element-method-remove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.app.Element-method-remove' class='name expandable'>remove</a>( <span class='pre'></span> ) : <a href=\"#!/api/tm.app.Element\" rel=\"tm.app.Element\" class=\"docClass\">tm.app.Element</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>親から離れる ...</div><div class='long'><p>親から離れる</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.app.Element\" rel=\"tm.app.Element\" class=\"docClass\">tm.app.Element</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-removeChild' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.app.Element'>tm.app.Element</span><br/><a href='source/element.html#tm-app-Element-method-removeChild' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.app.Element-method-removeChild' class='name expandable'>removeChild</a>( <span class='pre'>child</span> )</div><div class='description'><div class='short'>child に一致するエレメントを離す ...</div><div class='long'><p>child に一致するエレメントを離す</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>child</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-removeChildren' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.app.Element'>tm.app.Element</span><br/><a href='source/element.html#tm-app-Element-method-removeChildren' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.app.Element-method-removeChildren' class='name expandable'>removeChildren</a>( <span class='pre'>beginIndex</span> )</div><div class='description'><div class='short'>すべての child を離す ...</div><div class='long'><p>すべての child を離す</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>beginIndex</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});