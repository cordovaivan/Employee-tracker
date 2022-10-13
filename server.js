const inquirer = require("inquirer");
const cTable = require("console.table");
const sql = require('./db/query_lib');
const choiceHelper = require('./library/choiceHelper');


const PORT = process.env.PORT || 3001;






  const newDept = async () => {
    
    const department = await inquirer.prompt([
        {
            type:"input",
            name:"name",
            message: "What is the name of the department you would like to add?",
            validate: (name) => {
                if (name) {
                    return true;
                } else {
                    console.log("Please enter a department name")
                    return false;
                }
            }
        },
    ])
    sql.addDept(department);
    chooseRequest();
  };



  const newEmp = async () => {
    const role = await choiceHelper.roleChoices();

    const management = await choiceHelper.managementChoices();

    const employee = await inquirer.prompt([
        {
            type: "input",
            name: "First",
            message: "What is the employees first name?",
            validate: (first) => {

                if (first) {
                    return true;

                } else {
                    console.log("Please enter employees first name")
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "last",
            message: "what is the employees last name?",
            validate: (last) => {
                if (last) {
                    return true;
                } else {
                    console.log("Please enter employees last name")
                    return false;
                }
            }
        },
        {
            type: "list",
            name: "role-id",
            message: "What is the employees role?",
            choices: role,
            loop: false,
        },
        {
            type: "list",
            name: "manager-id",
            message: "who is the employees manager?",
            choices: management,
            loop: false,
        },
    ])
    sql.addEmp(employee);
    chooseRequest();
  };


  const newRole = async () => {

    const Choices = await choiceHelper.departmentchoices();

    const role = await inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the role of the new employee",
            validate: (title) => {
                if (title) {
                    return true;
                } else {
                    console.log("Please enter the name of the role!")
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "salary",
            message: "whait is the salary for this role?",
            validate: (salary) => {
                if (salary) {
                    return true;
                } else {
                    console.log("enter the salary for this role");
                }
            }
        },
        {
            type: "list",
            name: "department-id",
            message: "what department in the role associated with?",
            choices: Choices,
            loop: false,
        }
    ])
    sql.addRole(role);
    chooseRequest();
  };

 
  const updateEmployee = async () => {
    const roleArr = await choiceHelper.roleChoices();

    const employees = await choiceHelper.employees();

    const emp = await inquirer.prompt([
        {
            type: "list",
            name: "emp-id",
            message: "which employee info would you like to update?",
            choices: employees,
            loop: false,
        },
        {
            type: "list",
            name: "role-id",
            message: "what is the current role of the employee selected?",
            choices: roleChoices,
            loop: false,
        },
    ])
    sql.updateEmployee(emp);
    chooseRequest();
  };


  const viewDepts = () => {
    sql.getDepts()

    .then(([rows]) => {
        console.log(cTable.getTable(rows));
    })

    .then(() => {
        chooseRequest();
    })
  }

  const viewRoles = () => {
    sql.getRoles()

    .then(([rows]) => {
        console.log(cTable.getTable(rows));
    })

    .then(() => {
        chooseRequest();
    })
  }

  const viewEmps = () => {
    sql.getEmps()

    .then(([rows]) => {
        console.log(cTable.getTable(rows));
    })

    .then(() => {
        chooseRequest();
    })
  }

  const chooseRequest = () => {
    inquirer.prompt([
        {
            type: "list", 
            name: "request",
            message: "What would you like to do?",
            choices: [
                "Add a department",
                "Add a role",
                "Update employee",
                "View departments",
                "View employees",
                "View roles",
            ],
            loop: false,
        },
    ])
    .then((data) => {
        const {request} = data;
        console.log(request);
      //   Switch case
      switch (request) {
          case 'Add a Department':
            newDept();
            break;
          case 'Add a Role':
            newRole();
            break;
          case 'Add an Employee':
            newEmp();
            break;
          case 'Update Employees Role':
            updateEmployee();
            break;
          case 'View All Departments':
            viewDepts();
            break;
          case 'View All Employees':
            viewEmps();
            break;
          case 'View All Roles':
            viewRoles();
            break;                      
      
          default:
              break;
      }
  })

}

chooseRequest();

