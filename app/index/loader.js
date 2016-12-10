
// A simple assets loader in broswer.

var Loader = {

  loadMap: function(mapUrl) {
    var _this = this,
        xhr = new XMLHttpRequest();
        
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        Loader._map = JSON.parse(xhr.responseText);
      }
    };
    xhr.open('GET', mapUrl + '?_=' + _this.createHash(12), false);
    xhr.send();
    return xhr;
  },

  loadCss: function(entry) {
    if (entry in Loader._map) {            
      if ('css' in Loader._map[entry]) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '.' + Loader._map[entry]['css'];
        document.head.appendChild(link);
      }
    }
  },

  loadJs: function(entry) {
    if (entry in Loader._map) {            
      if ('js' in Loader._map[entry]) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '.' + Loader._map[entry]['js'];
        document.body.appendChild(script);
      }
    }
  },
  
  createHash: function(len) {
    var str = '0123456789_*&^%$#@!~-+?/|\\abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
        hash = [];
    for (var i = 0; i < len; i++) {
        var index = Math.floor(Math.random() * str.length);
        hash.push(str.charAt(index));
    }
    return hash.join('');
  }
  
};