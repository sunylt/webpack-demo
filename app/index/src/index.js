
  require('./index.css');
  require('./detail.css');

  var $ = require('jquery');
  var Class = require('class');
  
  var greeter = require('./js/fn.js');
  document.getElementById('root').appendChild(greeter());
  $('#root').animate({'marginLeft': 100}, 'slow');
  
  var Person = Class.create({
    talk: function() {
      $('<p style="color: red;">Person classes</p>').prependTo(document.body);
    }
  });
  
  var s1 = new Person();
  s1.talk();






