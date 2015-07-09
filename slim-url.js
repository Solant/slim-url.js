function URL(u) {
    this.t = u;
}

URL.prototype.toString = function() {
    return this.t;
}

URL.prototype.get = function(a) {
    if(this.contains(a))
        return this.t.split(a+"=")[1].split(/[&#]/)[0];
}

URL.prototype.contains = function(a) {
    return this.t.search(a+"=")>-1;
}

URL.prototype.set = function(k, v) {
    var i = this.t;
    if(this.contains(k)){
        i = i.replace(k+"="+i.split(k+"=")[1].split(/[&#]/)[0], k+"="+v);
    } else {
        var o = i.split("#");
        i = o[0];
        i += i.search("\\?")>-1 ? "&" : "?";
        i += k + "=" + v;
        o.length == 1 ? i : i+="#"+o[1];
    }
    this.t = i;
    return this;
}
