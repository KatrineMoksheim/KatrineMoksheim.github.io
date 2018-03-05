function setup () {
    let divHalden = document.getElementById("halden");
    let divFredrikstad= document.getElementById("fredrikstad");
    let divPopup1 = document.getElementById("popup1");
    let divPopup2 = document.getElementById("popup2");



    divPopup1.addEventListener("click", fjernFilm1);
    divPopup2.addEventListener("click", fjernFilm2);
    divHalden.addEventListener("click", visFilm1);
    divFredrikstad.addEventListener("click", visFilm2);
    
   function visFilm1() {
       divPopup1.classList.add("vis");

   }

   function visFilm2() {
    divPopup2.classList.add("vis");
   }
   
   function fjernFilm1() {
    divPopup1.classList.remove("vis");
   }

   function fjernFilm2 () {
    divPopup2.classList.remove("vis");
   }
}