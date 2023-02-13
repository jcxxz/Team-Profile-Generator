const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');

inquirer.prompt([
    {
        type: 'input',
      name: 'name',
      message: 'What is your name?',

    },
    {
        type: 'input',
      name: 'id',
      message: 'What is your id?',

    },
    {
        type: 'input',
      name: 'email',
      message: 'What is your email?',

    },
    {
        type : 'list',
        name : 'type',
        choices : ['Engineer', 'Intern', 'Manager']
    },
    {
        type : 'input',
        name : 'office number',
        message : 'what is your office number?',
        when : (answers) => answers.type === 'Manager'
    },
    {
        type : 'input',
        name : 'github',
        message : 'what is your github?',
        when : (answers) => answers.type === 'Engineer'
    },
    {
        type : 'input',
        name : 'school',
        message : 'what is your school?',
        when : (answers) => answers.type === 'Intern'
    }

]).then((data) => {
    let employee ; 
    if(data.type === 'Engineer') {employee = new Engineer(data.name, data.email, data.id, data.github)}
    if(data.type === 'Manager') {employee = new Manager(data.name, data.email, data.id, data.officeNumber)}
    if(data.type === 'Intern') {employee = new Intern(data.name, data.email, data.id, data.school)}
    const content = generateHTML([employee]);
    // use fs to write this to index.html
});

const generateHTML = (employees) =>
  ` <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="index.css">
    <title>Document</title>
  </head>
  <body>
  ${employees.map(employee =>`<div class="employee-card">
  <div class="employee-card-header">
      <h2>${employee.getName()}</h2>
      <h3>${employee.GetRole()}</h3>
  </div>
  <div>
      <ul>
          <li>ID : ${employee.getId()}</li>
          <li>Email : ${employee.getEmail()}</li>
          <li>${generateHTMLForUniqueField(employee)}</li>
      </ul>
  </div>
</div>`)}
  </body>
  </html> `;

const generateHTMLForUniqueField = (employee) =>{
    if(employee.getRole() === 'Engineer'){
        return`<a href=https://github.com/${employee.getGithub()}>github : ${employee.getGithub()}</a>`;
    }
    else if(employee.getRole() === 'Intern'){
        return`school : ${employee.getSchool()}`
    }
    else if(employee.getRole() === 'Manager'){
        return`office number : ${employee.getOfficeNumber()}`
    }
}

const employee = new Employee('employee', 'email', 'id' );
// console.log(employee.getRole());

// 