const pizarra = document.querySelector(".canvas");
const buscaUsuario = document.getElementById("buscaUsuario")



function pintaUsuario (usuarioGit){ 
    axios.get(`https://api.github.com/users/${usuarioGit}`)
    .then((res) => {
        console.log(res)        
        // let gitUser = res.data           
        // pizarra.innerHTML = ""
        // pizarra.innerHTML += `<img style="height: 50%; width: 50%; display: block;" src="${imagenPerreteRandom}"  alt="Card     image">`;
    })
    .catch((err) => console.error(err));
}

buscaUsuario.addEventListener('click', () => {
    let boton = document.getElementById("busca").value
    pintaUsuario(boton);
})
