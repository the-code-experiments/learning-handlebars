'use strict';

var containerTpl = document.querySelector('#container-template').innerHTML;
var container = document.querySelector('#container');

/**
 * Data in the form for JavaScript object.
 */
var jsonData = {
  "author": [{
    "name": "Ashwin",
    "department": "Engineer"
  }, {
    "name": "Kundan",
    "department": "Manager"
  }, {
    "name": "Saju",
    "department": "Sr. Engineer"
  }, {
    "name": "Ajay",
    "department": "Sr. Engineer"
  }, {
    "name": "Jerin",
    "department": "Engineer"
  }]
};

Handlebars.registerHelper('list', function(authors, options) {
  var out = "<ul>", i = 0;

  for(; i < authors.length; i++) {
    out = out + "<li>" + authors[i].name + " - " + authors[i].department + "</li>";
  }

  return out + "</ul>";
});

/**
 * Compile innerHTML using compile method.
 */
var template = Handlebars.compile(containerTpl);

/**
 * Passing object data to template.
 */
container.innerHTML = template({data: jsonData});
