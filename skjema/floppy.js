function setup() {

    let spiller = { fornavn: "idiot" };

    try {
        let spillerData = localStorage.getItem("spiller");
        spiller = JSON.parse(spillerData);
    } catch (error) {
        console.log("uregistrert spiller")
    }

    let divSpiller = document.getElementById("spiller");
    divSpiller.innerHTML = spiller.fornavn;



    let divFuggel = document.getElementById("bird");
    let divPoeng = document.getElementById("poeng");

    let farge = spiller.farge || "red";
    divFuggel.style.boxShadow = "2px 2px 2px" + farge;
    
    
    
    setInterval(flytt, 60);
    let top = 255;
    let fart = 0;
    let soylepos = 650;
    const PXperMS = 18;

    let crashed = false;

    let poeng = 0;

    let melding = "Gralla du vant";

    /*
    regner ut hvor mye søylene flytter seg på 60ms:
    900px på 3000ms
    6*9/3=6*3=18px = PXperMS
    */

    addEventListener("keydown", gifart);

    function flytt() {
        divFuggel.style.top = top + "px";
        top = top - fart;
        fart = fart - 5;
        if (top > 510) {
            fart = 0;
        }
        if (top < 0) {
            fart = 0;
            top = 0;
        }
        soylepos = soylepos - PXperMS;
        if (soylepos < -250) {
            soylepos = 650;
            poeng += 1;
            crashed = false;

        }
        // oppdaterer posisjonen til søyler
        if (!crashed) {
            if (soylepos < 255 + 90 && soylepos > 255 - 50) {
                if (top < 120 || top > 410) {
                    divFuggel.style.top = "510px";
                    top = 510;
                    poeng -= 2;
                    crashed = true;
                }
            }
        }
        divPoeng.innerHTML = String(poeng);
        if (poeng > 15) {
            divPoeng.innerHTML = melding;

        }
    }
    function gifart() {
        fart = 35;
    }
}