export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }

    #montaObjUser() {
        return ({
            nome: this.#nome,
            email: this.#email,
            nascimento: this.#nascimento,
            role: this.#role,
            ativo: this.#ativo
        })
    }

    exibeInfos() {
        const objUser = this.#montaObjUser()

        return `${objUser.nome}, ${objUser.email}, ${objUser.nascimento}, ${objUser.role}, ${objUser.ativo}`
    }
}
//const novoUser = new User('João', 'j@j.com', '2021/01/10')
//console.log(novoUser)
//console.log(novoUser.exibeInfos())