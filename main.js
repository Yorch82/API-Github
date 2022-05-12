const pizarra = document.querySelector(".canvas");
const buscaUsuario = document.getElementById("buscaUsuario")



function pintaUsuario (usuarioGit){ 
    axios.get(`https://api.github.com/users/${usuarioGit}`)
    .then((res) => {               
        let gitUser = res.data
        console.log(gitUser)           
        pizarra.innerHTML = ""
        pizarra.innerHTML += `<h2>Usuario: ${gitUser.login}</h2><h2>Nº Repositorios: ${gitUser.public_repos}</h2><img width=200px height=200px src=${gitUser.avatar_url}</img>`;
    })
    .catch((err) => console.error(err));
}

buscaUsuario.addEventListener('click', () => {
    let boton = document.getElementById("busca").value
    pintaUsuario(boton);
})
