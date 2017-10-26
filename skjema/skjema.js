function setup() {
    let inpFornavn = document.getElementById("fornavn");
    let inpEtternavn = document.getElementById("etternavn");
    let inpAlder = document.getElementById("alder");
    let inpEpost = document.getElementById("email");
    let inpFarge = document.getElementById("farge");
    let inpDato = document.getElementById("dato");
    
    
    let btnLagre = document.getElementById("lagre");
    btnLagre.addEventListener("click", LagreData);

    function LagreData (event) {
        let fornavn = inpFornavn.value;
        let etternavn = inpEtternavn.value;
        let alder = inpAlder.valueAsNumber;
        let email = inpEpost.value;
        let farge = inpFarge.value;
        let dato = inpDato.value;
         
        // kommer vi inn på senere :)))) 
        let person = { fornavn,etternavn,alder,email,farge,dato};
        let spillerData = JSON.stringify(person);
        localStorage.setItem("spiller",spillerData);
        location = "floppy.html";
    }


}