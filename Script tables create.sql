create database projeto_aula;

use projeto_aula;

create table dancas(
id_danca int not null auto_increment,
nome varchar (255) not null,
isEnabled boolean not null default 1,
primary key (id_danca)
);

create table problemas(
id_problema int not null auto_increment,
nome varchar (255) not null,
isEnabled boolean not null default 1,
primary key(id_problema)
);

create table formulario(
id_formulario int not null auto_increment,
id_danca int,
id_problema int,
primary key(id_formulario),
FOREIGN KEY (id_danca) REFERENCES dancas(id_danca),
FOREIGN KEY (id_problema) REFERENCES problemas(id_problema)
);

create table Users(
id_user int not null AUTO_INCREMENT,
nome varchar(255) not null,
senha varchar(255) not null,
email varchar(255) not null,
isEnabled boolean not null default 1,
id_formulario int,
PRIMARY KEY (id_user),
FOREIGN KEY (id_formulario) REFERENCES formulario(id_formulario)
);

create table Post(
id_post int not null AUTO_INCREMENT,
id_user int,
imagem blob,
conteudo Text,
status_favoritado ENUM('ativo','inativo'),
status_republicado ENUM('ativo','inativo'),
id_danca int,
id_problema int,
primary key(id_post),
FOREIGN KEY (id_user) REFERENCES users(id_user),
FOREIGN KEY (id_danca) REFERENCES dancas(id_danca),
FOREIGN KEY (id_problema) REFERENCES problemas(id_problema)
);

create table Post_Republic(
id_post int,
id_user int,
RepublicIsEnabled boolean default 1 ,
FOREIGN KEY (id_user) REFERENCES users(id_user),
FOREIGN KEY (id_post) REFERENCES post(id_post)
);

create table Post_Saved(
id_post int,
id_user int,
SavedIsEnabled boolean default 1 ,
FOREIGN KEY (id_user) REFERENCES users(id_user),
FOREIGN KEY (id_post) REFERENCES post(id_post)
);
insert into problemas(nome, isEnabled)
values ('Distorção',1);

select * from problemas;
select * from dancas;