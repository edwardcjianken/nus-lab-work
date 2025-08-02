create database test_db;

use test_db;

create table Departments (
	DepartmentID int primary key,
    DepartmentName varchar(50) not null
);

create table Employees (
	EmployeeID int primary key,
    Name varchar(50) not null,
    DepartmentID int,
    foreign key (DepartmentID) references Departments(DepartmentID)
);
	
create table Projects (
	ProjectID int primary key,
    ProjectName varchar(50) not null,
    EmployeeID int,
    foreign key (EmployeeID) references Employees(EmployeeID)	
);

insert into Departments (DepartmentID, DepartmentName) values (1, 'IT');
insert into Departments (DepartmentID, DepartmentName) values (2, 'HR');
insert into Departments (DepartmentID, DepartmentName) values (3, 'Fiannce');
insert into Departments (DepartmentID, DepartmentName) values (4, 'Marketing');

insert into Employees (EmployeeID, Name, DepartmentID) values 
(101, 'Alice', 1),
(102, 'Bob', 2),
(103, 'Charlie', 3),
(104, 'David', null);

insert into Projects (ProjectID, ProjectName, EmployeeID) values
(201, 'Project Alpha', 101),
(202, 'Project Beta', 102),
(203, 'Project Gamma', 103);

select * from Projects;
select * from Employees;
select * from Departments;

select * from Employees where EmployeeID = 102;

select * from employees e join projects p on e.EmployeeID = p.EmployeeID;
select * from employees e left join projects p on e.EmployeeID = p.EmployeeID;
select * from employees e right join projects p on e.EmployeeID = p.EmployeeID;