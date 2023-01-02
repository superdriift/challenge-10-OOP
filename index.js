const inquirer = require('inquirer');
const test = require('jest');
const fs = require('fs')
const managers = [];
const interns = [];
const engineers = [];
const Manager = require('./library/manager')
const Engineer = require('./library/engineer')
const Intern = require('./library/intern')

const generateTeam = function (team) {
    let html = '';

    team.managers.forEach(manager => {
        html += `
            <article class="col-md-4">
            <div class="card">
                <div class="card-header" style="background-color: rgb(46, 46, 255); color: white;">
                    <h2>${manager.getName()} <br> <i class="fa-solid fa-mug-hot"></i> Manager </h2>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"> ID: ${manager.getId()}</li>
                    <li class="list-group-item"> E-Mail: <a href="mailto:${manager.getEmail()}"> ${manager.getEmail()}</a> </li>
                    <li class="list-group-item"> Office Number: ${manager.officeNumber} </li>
                </ul>
            </div>
        </article>
            `;
    });

    team.engineers.forEach(engineer => {
        html += `
        <article class="col-md-4">
        <div class="card">
            <div class="card-header" style="background-color: rgb(46, 46, 255); color: white;">
                <h2>${engineer.getName()} <br> <i class="fa-solid fa-glasses"></i> Engineer</h2>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"> ID: ${engineer.getId()}</li>
                <li class="list-group-item"> E-Mail: <a href="mailto:${engineer.getEmail()}"> ${engineer.getEmail()}</a> </li>
                <li class="list-group-item"> GitHub: <a href="https://www.github.com/${engineer.getGitHub()}">${engineer.getGitHub()}</a></li>
            </ul>
        </div>
    </article>
        `;
    })

    team.interns.forEach(intern => {
        html += `
        <article class="col-md-4">
        <div class="card">
            <div class="card-header" style="background-color: rgb(46, 46, 255); color: white;">
                <h2>${intern.getName()} <br> <i class="fa-solid fa-graduation-cap"></i> Student </h2>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"> ID: ${intern.getId()}</li>
                <li class="list-group-item"> E-Mail: <a href="mailto:${intern.getEmail()}"> ${intern.getEmail()}</a></li>
                <li class="list-group-item"> School: ${intern.getSchool()} </li>
            </ul>
        </div>
    </article>
        `;
    })

    return html;
};


const generateHTML = function (team) {
    console.log(team)
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">


    <link rel="stylesheet" href="./assets/style.css">
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <title>The Driifters</title>
</head>


<body>
    <header class="container-fluid text-center p-5" style="background-color: rgb(196, 39, 39); color: white;">
        <h1>The Driifters</h1>
    </header>

    <main class="container text-center p-5">
        <section class="row">
        ${generateTeam(team)}
        </section> 
    </main>



</body>

</html>
    `
};


function startApp() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `What is the Manager's name?`
        },
        {
            type: 'input',
            name: 'id',
            message: `What is the Manager's ID?`
        },
        {
            type: 'input',
            name: 'email',
            message: `What is the Manager's E-Mail?`
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: `What is the Manager's office number?`
        }
    ]).then((answers) => {
        console.log(answers);
        const { name, id, email, officeNumber } = answers;
        managers.push(new Manager(name, id, email, officeNumber));

        console.log('managers:', managers);

        createTeam();
    })
}

function createEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Engineer\'s name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the Engineer\'s ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the Engineer\'s E-Mail address?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the Engineer\'s Github username?',
        },
    ]).then((answers) => {
        console.log(answers);
        const { name, id, email, github } = answers;
        engineers.push(new Engineer(name, id, email, github));
        console.log('engineers:', engineers);
        createTeam()
    })
}

function createIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Intern\'s name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the Intern\'s ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the Intern\'s E-Mail address?',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the Intern\'s school?',
        },
    ]).then((answers) => {
        console.log(answers);
        const { name, id, email, school } = answers;
        interns.push(new Intern(name, id, email, school));
        console.log('interns', interns);
        createTeam()
    })
}


function createTeam() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'type',
            message: 'What kind of employee would you like to add?',
            choices: [
                'Engineer',
                'Intern',
                'None'
            ]
        },
    ]).then((answers) => {
        console.log(answers);
        switch (answers.type) {
            case 'Engineer':
                createEngineer();
                break;
            case 'Intern':
                createIntern();
                break;
            default:
                fs.writeFileSync('./dist/team.html', generateHTML({ managers, engineers, interns }));
                return;
        }
    })
}

startApp()

