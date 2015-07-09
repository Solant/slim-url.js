function URL(u) {
    this.t = u;
}

URL.prototype.toString = function() {
    return this.t;
}

URL.prototype.get = function(arg) {
    if(this.contains(arg))
        return this.t.split(arg+"=")[1].split("&")[0];
}

URL.prototype.contains = function(arg) {
    return this.t.search(arg+"=")>-1;
}

URL.prototype.set = function(k, v) {
    var i = this.t;
    if(this.contains(k)){
        i = i.replace(k+"="+i.split(k+"=")[1].split("&")[0], k+"="+v);
    } else {
        i += i.search("\\?")>-1 ? "&" : "?";
        i += k + "=" + v;
    }
    this.t = i;
    return this;
}
