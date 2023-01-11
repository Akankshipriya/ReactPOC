use StudentWebApi

insert into Student values('Alish','2000-12-28','Alish@gmail.com','3')
select * from Student
insert into Student values('Bob','1998-11-28','bob@gmail.com','6')


DBCC CHECKIDENT (Student, RESEED, 0)