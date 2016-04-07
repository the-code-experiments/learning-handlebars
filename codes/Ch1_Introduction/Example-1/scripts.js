'use strict';

document.addEventListener("DOMContentLoaded", function() {

  var containerTpl = document.querySelector('#container-template').innerHTML;
  var container = document.querySelector('#container');

  var jsonData = {
    'message': 'Hello World!',
    'name': 'Ashwin Hegde'
  }
  var template = Handlebars.compile(containerTpl);

  container.innerHTML = template(jsonData);

});
