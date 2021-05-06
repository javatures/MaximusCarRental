\c postgres

create table cars (id int4 generated by default as identity, make varchar(255), model varchar(255), category varchar(255), year varchar(255), primary key (id));
create table images (id int4 generated by default as identity, alt varchar(255), link varchar(255), car_id int4, primary key (id));
create table reservation (id int4 generated by default as identity, drop_off timestamp, pick_up timestamp, car_id int4, user_id int4, primary key (id));
create table users (id int4 generated by default as identity, admin boolean, email varchar(255), fname varchar(255), lname varchar(255), password varchar(255), phone_string varchar(255), username varchar(255), primary key (id));
alter table if exists users add constraint UK_r43af9ap4edm43mmtq01oddj6 unique (username);
alter table if exists images add constraint FK79gaadgp4fm6x4f6mm3yeuk8 foreign key (car_id) references cars;
alter table if exists reservation add constraint FKiuhjtmx94f270xu2cstcc4hwo foreign key (car_id) references cars;
alter table if exists reservation add constraint FKrea93581tgkq61mdl13hehami foreign key (user_id) references users;
