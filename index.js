"use strict"
import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

//const novoUser = new User('Marina', 'm@m.com', '2021-01-01');
//const novoAdmin = new Admin('Leticia', 'l@l.com', '2021-01-01')
//console.log(novoUser.nome);

//console.log(novoAdmin.nome)

//novoAdmin.nome = ''
//console.log(novoNome.nome)

const novoDocente = new Docente('Luan', 'l@l.com', '2021-08-09');
console.log(novoDocente.exibeInfos())// Aqui esta um ex: do polimorfismo!



