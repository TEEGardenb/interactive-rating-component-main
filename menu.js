/*captura de toda la clase num*/
const nums = document.querySelectorAll(".num");
/*Convertimos una nodelist en un array para manipularlos*/
let arreglonum = [].slice.call(nums);

const button = document.getElementById("submit");
const ContainerThankYou = document.getElementById("ContainerThankYouDisplay");
const containerPrincipal = document.getElementById("containerDisplay");
const ratingNumberDisplay = document.getElementById("rating_number");

for (let i = 0; i < arreglonum.length; i++) {
  /*funcion de click para activar el color*/

  arreglonum[i].onclick = function () {
    arreglonum[i].classList.toggle("active");
    let seleccionado = arreglonum[i];
    let otrosNumeros = arreglonum.filter((i) => i !== seleccionado);
    console.log(seleccionado.innerHTML);

    for (let y = 0; y < otrosNumeros.length; y++) {
      /*console.log(otrosNumeros[y].innerHTML);*/

      if (arreglonum[i].classList.contains("active")) {
        otrosNumeros[y].classList.remove("active");
      }
    }

    /*Funcion para aparecer el menu de gracias*/

    button.onclick = function () {
      ContainerThankYou.style.display = "flex";
      containerPrincipal.style.display = "none";
      ratingNumberDisplay.innerHTML = arreglonum[i].innerHTML;
    };
  };
}
