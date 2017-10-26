function setup() {
    let list = [];
    let inpNavn = document.getElementById("navn");
    let divVisListe = document.getElementById("visliste");

    //let btnLagre = document.getElementById("lagre");
    //btnLagre.addEventListener("click", LagreNyElev);

    inpNavn.addEventListener("keydown", LagreNyElev);

    function LagreNyElev(event) {
        if (event.keyCode === 13) {

            let navn = inpNavn.value;
            if (navn === "") {
                event.preventDefault(); //skriv før return!!!!
                return;
            
            }
            list.push(navn);
            list.sort();
            let uList = "<ol>";
            for (let n of list) {
                uList += "<li>" + n + "</li>";
            }
            uList += "</ol>";
            divVisListe.innerHTML = uList;
            inpNavn.valure = "";
            event.preventDefault(); //dette er for at man skal kunne se lista, siden den bare ble posta
        }
    }
}
