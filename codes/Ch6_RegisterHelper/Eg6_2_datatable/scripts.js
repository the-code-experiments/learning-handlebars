'use strict';

var containerTpl = document.querySelector('#container-template').innerHTML;
var container = document.querySelector('#container');

/**
 * Data in the form for JavaScript object.
 */
var jsonData = {
  "employees": [{
    "name": "Ashwin",
    "department": "Engineering"
  }, {
    "name": "Kundan",
    "department": "Management"
  }, {
    "name": "Saju",
    "department": "Engineering"
  }, {
    "name": "Ajay",
    "department": "Management"
  }, {
    "name": "Jerin",
    "department": "Engineering"
  }]
};

Handlebars.registerHelper('getDepartmentCode', function(department) {
  if(department === 'Management') {
    return 'M';
  } else {
    return 'E';
  }
});

/**
 * Compile innerHTML using compile method.
 */
var template = Handlebars.compile(containerTpl);

/**
 * Passing object data to template.
 */
container.innerHTML = template({data: jsonData});
