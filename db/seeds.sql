INSERT INTO department (department_name)
VALUES ("Sales"),
       ("Accounting"),
       ("Human Resources"),
       ("Customer Service");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Manager", 90000, 1),
       ("Sales Lead", 80000, 1),
       ("Sales Representative", 45000, 1),
       ("Accounting Manager", 85000, 2),
       ("Accounting Lead", 75000, 2),
       ("Accounting Representative", 40000, 2),
       ("HR Manager", 80000, 3),
       ("HR Lead", 70000, 3),
       ("HR Representative", 35000, 3),
       ("CS Manager", 120000, 4),

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jerry", "Smith", 1, NULL),
       ("Sally", "Sue", 2, 1),
       ("Morty", "Ross", 3, 1),
       ("Rick", "Sanchez", 4, NULL),
       ("Shawn", "Jones", 5, 4),
       ("Leif", "Ericson", 6, 4),
       ("Mark", "Martinez", 7, NULL),
       ("Ivan", "Cordova", 8, 7),
       ("Billy", "Boy", 9, 7),
       ("Paul", "Mc", 10, NULL),
       ("John", "Johnson", 11, 10),
       ("Jane", "Doe", 12, 10);