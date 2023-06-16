let usuarios = [
    {
        nome: "admin",
        senha: "admin"
    }, {
        nome: "Fernando",
        senha: "4321"
    }, {
        nome: "Carlsen",
        senha: "1990"
    }, {
        nome: "Kasparov",
        senha: "1963"
    }, {
        nome: "Bronstein",
        senha: "1924"
    }, {
        nome: "Aristóteles",
        senha: "384"
    }, {
        nome: "Karpov",
        senha: "1951"
    }, {
        nome: "Capablanca",
        senha: "1888"
    }, {
        nome: "Alekhine",
        senha: "1892"
    }, {
        nome: "Lasker",
        senha: "1868"
    }, {
        nome: "Nimzowitsch",
        senha: "1886"
    }, {
        nome: "Steinitz",
        senha: "1836"
    }, {
        nome: "Platão",
        senha: "428"
    }
]



const entrar = document.querySelector("#mybutton")
entrar.addEventListener("click", logar)

function logar() {

    let usu = document.querySelector('input#loginusu').value
    let senha = document.querySelector('input#senhausu').value

    for (i = 0; i < usuarios.length; i++) {
        if (usu == usuarios[i].nome && senha == usuarios[i].senha) {
            alert('Olá usuário,seja bem-vindo a nosso sistema!')
            i=usuarios.length
            window.location.href = "index.html"

        }
        if (usu != usuarios[i].nome || senha != usuarios[i].senha) {
            alert('Usuário não encontrado!')
            i = usuarios.length
            window.location.href = "index.html"

        }
    }



}