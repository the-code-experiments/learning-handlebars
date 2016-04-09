'use strict';

var containerTpl = document.querySelector('#container-template').innerHTML;
var container = document.querySelector('#container');

/**
 * Data in the form for JavaScript object.
 */
var jsonData = {
  'title': 'Learning Handlebars.js',
  'firstname': 'Ashwin',
  'lastname': 'Hegde',
  'address': {
    'city': 'Pune',
    'country': 'India'
  }
};

/**
 * Compile innerHTML using compile method.
 */
var template = Handlebars.compile(containerTpl);

/**
 * Passing object data to template.
 */
container.innerHTML = template({data: jsonData});
