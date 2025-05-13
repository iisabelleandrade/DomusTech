document.getElementById("loginBtn").addEventListener("click", function() {
    let nome = prompt("Digite seu nome:");
    if (nome) {
        document.getElementById("clienteNome").textContent = nome;
        document.getElementById("perfil").classList.remove("hidden");
        this.classList.add("hidden");
    }
});

document.getElementById("categoriasBtn").addEventListener("click", function() {
    document.getElementById("categorias").classList.toggle("hidden");
});
