// //var menu = document.querySelector("#btn-menu"); // Mais antigo. Variável pode mudar.
// //let menu = document.querySelector("#btn-menu"); // Mais moderno. Variável pode mudar.
// const menu = document.querySelector("#btn-menu"); // Mais moderno. Constante não pode mudar.

// menu.addEventListener("click", () => {
//     console.log("Clicou.")
// });

// Botão 'Estou com sorte'

const imWithLuck = document.querySelector("#btn-imWithLuck");

imWithLuck.addEventListener("click", () => {
    //console.log("Estou com sorte");
    location.href = "https://class.hcode.com.br";

});