define(['runtime'], function(jade){
  return function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<div class="containter-fluid"><div class="row-fluid"><div class="span3"><div id="nav"></div></div><div class="span9"><div id="status"></div><div id="feed"></div></div></div></div>');
}
return buf.join("");
};
});