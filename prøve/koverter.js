function setup() {

    let inpKroner = document.getElementById("kroner");
    let inpDollar = document.getElementById("dollar");
    let inpBitcoin = document.getElementById("bitcoin");

    
    let btnK2d = document.getElementById("k2d");
    btnK2d.addEventListener("click", k2d);

    let btnD2k = document.getElementById("d2k");
    btnD2k.addEventListener("click", d2k);

    let btnB2d = document.getElementById("b2d");
    btnB2d.addEventListener("click",b2d )

    //omgjør verdiene 
    function k2d(event) {
        let kroner = inpKroner.valueAsNumber;
        let dollar = kroner * 0.17;
        inpDollar.value = dollar.toFixed(2);
    }
    function d2k (event) {
        let dollar = inpDollar.valueAsNumber;
        let kroner = dollar * 7.82;
        inpKroner.value = kroner.toFixed(2);
        
    }
        //prøvd å legge til flere verdier 
    //function b2d (event) {
        //let bitcoin = inpBitcoin.valueAsNumber; 
        //let dollar = bitcoin *0.000087
        //inpDollar = dollar.toFixed(6);
    //}

}
// lag et eksempel som viser bruk av input, variable, enkle beregninger og funksjoner styrt 
// av hendelser