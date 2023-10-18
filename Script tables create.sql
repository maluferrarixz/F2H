create database projeto_aula;

use projeto_aula;

create table Users(
id_user int not null AUTO_INCREMENT,
nome varchar(255) not null,
senha varchar(255) not null,
email varchar(255) not null,
PRIMARY KEY (id_user)
);

create table Post(
id_post int not null AUTO_INCREMENT,
id_user int,
imagem blob,
conteudo Text,
status_favoritado ENUM('ativo','inativo'),
status_republicado ENUM('ativo','inativo'),
primary key(id_post),
FOREIGN KEY (id_user) REFERENCES users(id_user)
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
