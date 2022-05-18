let userName = ""
let userSenha = ""

function login(){
    userName = window.prompt('Digite seu nome de usuário.')
    userSenha = window.prompt('Digite sua senha.')
}

login()
while (userName === userSenha){
    window.alert('A senha não pode ser a mesma que o nome de usuário!')
    userSenha = window.prompt('Digite novamente sua senha.')
}