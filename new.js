function User(nome, email) {
   this.nome = nome
   this.email = email

   this.exibeInfos = function () {
      return `${this.nome}, ${this.email} `
   }
}

const novoUser = new User('Juliana', 'j@j.com');
console.log(novoUser.exibeInfos())

function Admin(role) {
   User.call(this, 'Juliana', 'j@j.com')
   this.role = role || 'estudante'
}

Admin.prototype = Object.create(User.prototype)
const novoiUser = new Admin('admin')
console.log(novoiUser.exibeInfos())
console.log(novoiUser.role)