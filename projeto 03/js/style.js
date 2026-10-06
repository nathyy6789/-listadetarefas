const tarefa = document.getElementById("tarefa");
const adicionar = document.getElementById("adicionar");
const lista = document.getElementById("lista");

adicionar.addEventListener("click", function() {

    if (tarefa.value.trim() === "") {
        alert("Digite uma tarefa!");
        return;
    }

    const item = document.createElement("li");

    const texto = document.createElement("span");
    texto.textContent = tarefa.value;

    texto.addEventListener("click", function() {
        texto.classList.toggle("concluida");
    });

    const excluir = document.createElement("button");
    excluir.textContent = "Excluir";
    excluir.classList.add("excluir");

    excluir.addEventListener("click", function() {
        item.remove();
    });

    item.appendChild(texto);
    item.appendChild(excluir);

    lista.appendChild(item);

    tarefa.value = "";
});