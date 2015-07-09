function URL() {
    this.t = location.href;
}

URL.prototype.toString = function() {
    return this.t;
}

URL.prototype.get = function(arg) {
    if(this.contains(arg)) {
        return this.t.split(arg+"=")[1].split("&")[0];
    }
    return undefined;
}

URL.prototype.contains = function(arg) {
    return this.t.search(arg+"=")>-1;
}

URL.prototype.set = function(key, value) {
    var tmp = this.t;
    if(this.contains(key)){
        tmp = tmp.replace(key+"="+tmp.split(key+"=")[1].split("&")[0], key+"="+value);
    } else {
        tmp += tmp.search("\\?")>-1 ?  "&" :  "?";
        tmp += key + "=" + value;
    }
    this.t = tmp;
    return this;
}
