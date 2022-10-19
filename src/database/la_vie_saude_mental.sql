create database la_Vie_saude_mental;
use la_Vie_saude_mental;
create table paciente (
id int primary key auto_increment not null,
nome varchar(100),
email varchar(45) unique,
idade varchar(3)
);

create table psicologos (
id int primary key auto_increment not null,
nome varchar(100),
email varchar(45) unique,
senha varchar(60),
 apresentacao text
);

create table atendimento (
paciente_id int primary key auto_increment not null,
data_atendimento date,
observacao text,
foreign key (paciente_id) references paciente(id)
);
