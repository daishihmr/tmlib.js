Ext.data.JsonP.tm_dom_Event({"tagname":"class","name":"tm.dom.Event","autodetected":{},"files":[{"filename":"event.js","href":"event.html#tm-dom-Event"}],"members":[{"name":"domElement","tagname":"property","owner":"tm.dom.Event","id":"property-domElement","meta":{}},{"name":"element","tagname":"property","owner":"tm.dom.Event","id":"property-element","meta":{}},{"name":"funcIndex","tagname":"property","owner":"tm.dom.Event","id":"property-funcIndex","meta":{}},{"name":"funcList","tagname":"property","owner":"tm.dom.Event","id":"property-funcList","meta":{}},{"name":"POINT_END","tagname":"property","owner":"tm.dom.Event","id":"static-property-POINT_END","meta":{"static":true}},{"name":"POINT_MOVE","tagname":"property","owner":"tm.dom.Event","id":"static-property-POINT_MOVE","meta":{"static":true}},{"name":"POINT_START","tagname":"property","owner":"tm.dom.Event","id":"static-property-POINT_START","meta":{"static":true}},{"name":"constructor","tagname":"method","owner":"tm.dom.Event","id":"method-constructor","meta":{}},{"name":"add","tagname":"method","owner":"tm.dom.Event","id":"method-add","meta":{"chainable":true}},{"name":"click","tagname":"method","owner":"tm.dom.Event","id":"method-click","meta":{"chainable":true}},{"name":"getFunc","tagname":"method","owner":"tm.dom.Event","id":"method-getFunc","meta":{}},{"name":"hover","tagname":"method","owner":"tm.dom.Event","id":"method-hover","meta":{"chainable":true}},{"name":"mdlclick","tagname":"method","owner":"tm.dom.Event","id":"method-mdlclick","meta":{}},{"name":"one","tagname":"method","owner":"tm.dom.Event","id":"method-one","meta":{"chainable":true}},{"name":"pointend","tagname":"method","owner":"tm.dom.Event","id":"method-pointend","meta":{}},{"name":"pointmove","tagname":"method","owner":"tm.dom.Event","id":"method-pointmove","meta":{}},{"name":"pointstart","tagname":"method","owner":"tm.dom.Event","id":"method-pointstart","meta":{}},{"name":"remove","tagname":"method","owner":"tm.dom.Event","id":"method-remove","meta":{}},{"name":"toggle","tagname":"method","owner":"tm.dom.Event","id":"method-toggle","meta":{"chainable":true}}],"alternateClassNames":[],"aliases":{},"id":"class-tm.dom.Event","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/event.html#tm-dom-Event' target='_blank'>event.js</a></div></pre><div class='doc-contents'><p>Event クラス</p>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance properties</h3><div id='property-domElement' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.dom.Event'>tm.dom.Event</span><br/><a href='source/event.html#tm-dom-Event-property-domElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.dom.Event-property-domElement' class='name expandable'>domElement</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-element' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.dom.Event'>tm.dom.Event</span><br/><a href='source/event.html#tm-dom-Event-property-element' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.dom.Event-property-element' class='name expandable'>element</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>DOMエレメント</p>\n</div><div class='long'><p>DOMエレメント</p>\n</div></div></div><div id='property-funcIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.dom.Event'>tm.dom.Event</span><br/><a href='source/event.html#tm-dom-Event-property-funcIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.dom.Event-property-funcIndex' class='name expandable'>funcIndex</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>関数リストのインデックス　未使用？ ...</div><div class='long'><p>関数リストのインデックス　未使用？</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-funcList' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.dom.Event'>tm.dom.Event</span><br/><a href='source/event.html#tm-dom-Event-property-funcList' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.dom.Event-property-funcList' class='name expandable'>funcList</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>イベント発火時に実行する関数リスト</p>\n</div><div class='long'><p>イベント発火時に実行する関数リスト</p>\n</div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static properties</h3><div id='static-property-POINT_END' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.dom.Event'>tm.dom.Event</span><br/><a href='source/event.html#tm-dom-Event-static-property-POINT_END' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.dom.Event-static-property-POINT_END' class='name expandable'>POINT_END</a> : Object<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='static-property-POINT_MOVE' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.dom.Event'>tm.dom.Event</span><br/><a href='source/event.html#tm-dom-Event-static-property-POINT_MOVE' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.dom.Event-static-property-POINT_MOVE' class='name expandable'>POINT_MOVE</a> : Object<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='static-property-POINT_START' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.dom.Event'>tm.dom.Event</span><br/><a href='source/event.html#tm-dom-Event-static-property-POINT_START' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.dom.Event-static-property-POINT_START' class='name expandable'>POINT_START</a> : Object<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.dom.Event'>tm.dom.Event</span><br/><a href='source/event.html#tm-dom-Event-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/tm.dom.Event-method-constructor' class='name expandable'>tm.dom.Event</a>( <span class='pre'></span> ) : <a href=\"#!/api/tm.dom.Event\" rel=\"tm.dom.Event\" class=\"docClass\">tm.dom.Event</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.dom.Event\" rel=\"tm.dom.Event\" class=\"docClass\">tm.dom.Event</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-add' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.dom.Event'>tm.dom.Event</span><br/><a href='source/event.html#tm-dom-Event-method-add' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.dom.Event-method-add' class='name expandable'>add</a>( <span class='pre'>type, fn, id</span> ) : <a href=\"#!/api/tm.dom.Event\" rel=\"tm.dom.Event\" class=\"docClass\">tm.dom.Event</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>イベントを追加 ...</div><div class='long'><p>イベントを追加</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>fn</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>id</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.dom.Event\" rel=\"tm.dom.Event\" class=\"docClass\">tm.dom.Event</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-click' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.dom.Event'>tm.dom.Event</span><br/><a href='source/event.html#tm-dom-Event-method-click' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.dom.Event-method-click' class='name expandable'>click</a>( <span class='pre'>fn, id</span> ) : <a href=\"#!/api/tm.dom.Event\" rel=\"tm.dom.Event\" class=\"docClass\">tm.dom.Event</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>クリックイベント ...</div><div class='long'><p>クリックイベント</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>id</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.dom.Event\" rel=\"tm.dom.Event\" class=\"docClass\">tm.dom.Event</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-getFunc' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.dom.Event'>tm.dom.Event</span><br/><a href='source/event.html#tm-dom-Event-method-getFunc' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.dom.Event-method-getFunc' class='name expandable'>getFunc</a>( <span class='pre'>type, id</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>指定したイベントタイプ &amp; id の関数を取得 ...</div><div class='long'><p>指定したイベントタイプ &amp; id の関数を取得</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>id</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-hover' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.dom.Event'>tm.dom.Event</span><br/><a href='source/event.html#tm-dom-Event-method-hover' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.dom.Event-method-hover' class='name expandable'>hover</a>( <span class='pre'>fn, id</span> ) : <a href=\"#!/api/tm.dom.Event\" rel=\"tm.dom.Event\" class=\"docClass\">tm.dom.Event</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>ホバーイベント ...</div><div class='long'><p>ホバーイベント</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>id</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.dom.Event\" rel=\"tm.dom.Event\" class=\"docClass\">tm.dom.Event</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-mdlclick' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.dom.Event'>tm.dom.Event</span><br/><a href='source/event.html#tm-dom-Event-method-mdlclick' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.dom.Event-method-mdlclick' class='name expandable'>mdlclick</a>( <span class='pre'>fn, id</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>ミドルクリックイベント ...</div><div class='long'><p>ミドルクリックイベント</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>id</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-one' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.dom.Event'>tm.dom.Event</span><br/><a href='source/event.html#tm-dom-Event-method-one' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.dom.Event-method-one' class='name expandable'>one</a>( <span class='pre'>type, fn, id</span> ) : <a href=\"#!/api/tm.dom.Event\" rel=\"tm.dom.Event\" class=\"docClass\">tm.dom.Event</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>一度だけ呼ばれるイベントを登録 ...</div><div class='long'><p>一度だけ呼ばれるイベントを登録</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>fn</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>id</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.dom.Event\" rel=\"tm.dom.Event\" class=\"docClass\">tm.dom.Event</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-pointend' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.dom.Event'>tm.dom.Event</span><br/><a href='source/event.html#tm-dom-Event-method-pointend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.dom.Event-method-pointend' class='name expandable'>pointend</a>( <span class='pre'>fn, id</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>ポインティングエンド ...</div><div class='long'><p>ポインティングエンド</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>id</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-pointmove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.dom.Event'>tm.dom.Event</span><br/><a href='source/event.html#tm-dom-Event-method-pointmove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.dom.Event-method-pointmove' class='name expandable'>pointmove</a>( <span class='pre'>fn, id</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>ポインティング中 ...</div><div class='long'><p>ポインティング中</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>id</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-pointstart' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.dom.Event'>tm.dom.Event</span><br/><a href='source/event.html#tm-dom-Event-method-pointstart' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.dom.Event-method-pointstart' class='name expandable'>pointstart</a>( <span class='pre'>fn, id</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>ポインティングスタート ...</div><div class='long'><p>ポインティングスタート</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>id</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-remove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.dom.Event'>tm.dom.Event</span><br/><a href='source/event.html#tm-dom-Event-method-remove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.dom.Event-method-remove' class='name expandable'>remove</a>( <span class='pre'>type, fn_or_id</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>イベントを解除 ...</div><div class='long'><p>イベントを解除</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>fn_or_id</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-toggle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.dom.Event'>tm.dom.Event</span><br/><a href='source/event.html#tm-dom-Event-method-toggle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.dom.Event-method-toggle' class='name expandable'>toggle</a>( <span class='pre'>type, fn_list</span> ) : <a href=\"#!/api/tm.dom.Event\" rel=\"tm.dom.Event\" class=\"docClass\">tm.dom.Event</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>トグルイベント登録 ...</div><div class='long'><p>トグルイベント登録</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>fn_list</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.dom.Event\" rel=\"tm.dom.Event\" class=\"docClass\">tm.dom.Event</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});