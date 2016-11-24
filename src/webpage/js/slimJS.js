var slimJS = function(selector, context) {
    return slimJS.prototype.init(selector, context);
};

slimJS.prototype = {
    constructor: slimJS,
    init: function(selector, context) {
        if(typeof selector == 'string') {
            this.find(selector, context);
        }else {
            this.selector = selector;
        }
        return this;
    },
    forEach: function(callback) {
        callback = callback || function(){};

        var sliceData = ('length' in this.selector) ? this.selector : [this.selector];

        Array.prototype.slice.call(sliceData).forEach(function(item, i) {
            callback.apply(this, [item, i]);
        });
    },
    find: function(selector, context) {
        if(typeof context == 'string') {
            context = document.querySelector(context);
        }
        this.context = context = context || document;

        context = [context];

        var list = selector.split(/\s+/);
        var tmp = null;

        while(tmp = list.shift()) {
            var result = [];
            context.forEach(function(item) {
                Array.prototype.push.apply(result, item.querySelectorAll(tmp));
            });
            context = result;
        }
        this.selector = context.length == 1?context[0]:context;
        return this;
    },
    on:function(type, callback, useCapture) {
        useCapture = useCapture || false;
        this.forEach(function(item) {
            item.addEventListener(type, callback, useCapture);
        });
    },
    sibling: function(until) {
        if(Array.isArray(this.selector)) {
            return [];
        }

        var r = [];
        var n = this.selector;
        while(n = n.nextSibling) {
            if(n.nodeName.toLowerCase() == until) break;
            if(n.nodeType === 1) {
                r.push(n);
            }
        }
        this.selector = r;
        return this;
    },
    css: function(cssObject) {
        this.forEach(function(item) {
            for(var key in cssObject) {
                if(~['transition'].indexOf(key)) {
                    var prefix = ['moz-', 'webkit-', 'o'];
                    prefix.map(function(p) {
                        var k = (p+key).replace(/\-(\w)/g, function(x){return x.slice(1).toUpperCase();});
                        item.style[k] = cssObject[key];
                    })
                }
                var realKey = key.replace(/\-(\w)/g, function(x){return x.slice(1).toUpperCase();});
                item.style[realKey] = cssObject[key];
            }
        });
    },
    toggle: function(oneHandle, twoHandle) {
        this.forEach(function(item) {
            item.dataset.toggle = item.dataset.hasOwnProperty('toggle')?item.dataset.toggle:'false';
            if(item.dataset.toggle == 'false') {
                oneHandle.call(item);
                item.dataset.toggle = 'true';
            } else {
                twoHandle.call(item);
                item.dataset.toggle = 'false';
            }
        });
    },
    remove: function() {
        this.forEach(function(item) {
            var p = item.parentNode;
            if(p) {
                p.removeChild(item);
            }
        });
    },
    slideDown: function() {
        this.forEach(function(item) {
            var height = window.getComputedStyle(item).height;

            $(item).css({
                transition: 'none',
                height: 'auto'
            });

            var targetHeight = window.getComputedStyle(item).height;
            $(item).css({
                height: height
            });
            item.offsetWidth = item.offsetWidth;

            $(item).css({
                transition: 'height 300ms',
                height: targetHeight
            });
        });
    },
    slideUp: function() {
        this.forEach(function(item) {
            var height = window.getComputedStyle(item).height;

            $(item).css({transition: 'none'});

            var targetHeight = 0;
            $(item).css({height: height});
            item.offsetWidth = item.offsetWidth;

            $(item).css({
                transition: 'height 300ms',
                height: targetHeight
            });
        });
    }
};