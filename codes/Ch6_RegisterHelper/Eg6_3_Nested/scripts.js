'use strict';

var containerTpl = document.querySelector('#container-template').innerHTML;
var container = document.querySelector('#container');

/**
 * Data in the form for JavaScript object.
 */
var jsonData = {
  "employees": [{
    "name": "Ashwin",
    "department": "Engineering",
    "skills": [
      'HTML', 'CSS', 'JavaScript', 'Node.js', 'Backbone', 'React'
    ]
  }, {
    "name": "Kundan",
    "department": "Management",
    "skills": [
      'Communication', 'Decisions Making', 'Team Management', 'Problem Solving'
    ]
  }, {
    "name": "Saju",
    "department": "Engineering",
    "skills": [
      'HTML', 'CSS', 'JavaScript', 'Node.js', 'Backbone', 'Angular'
    ]
  }, {
    "name": "Ajay",
    "department": "Management",
    "skills": [
      'Motivating', 'Encouraging', 'Planning'
    ]
  }, {
    "name": "Jerin",
    "department": "Engineering",
    "skills": [
      'HTML', 'CSS', 'JavaScript', 'Node.js', 'Backbone', 'Knockout'
    ]
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
