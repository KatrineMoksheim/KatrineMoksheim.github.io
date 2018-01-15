// @ts-check

function setup () {
    let inpforbruk = document.getElementById("forbruk");
    let inpTank = document.getElementById("tank");
    let btnBeregn = document.getElementById("beregn");
    let spnRekkevidde = document.getElementById("rekkevidde");

    btnBeregn.addEventListener("click", beregnRekkevidde);

    function beregnRekkevidde (e) {
        // @ts-ignore
        let forbruk = Number(inpforbruk.value);
        // @ts-ignore
        let tank = inpTank.valueAsNumber;
        let rekkevidde = tank / forbruk;
        spnRekkevidde.innerHTML = rekkevidde.toFixed(2); 


    }
    
}
