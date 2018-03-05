//@ts-check

function setup() {
    let divRamme = document.querySelector("#ramme");
    for (let i=1; i<13; i++){
        let div = document.createElement("div");
        div.className = "minical";
        divRamme.appendChild(div);
        tegnKalender(div, 2018, i);  
    }

    function tegnKalender(divMonth, year, month) {
        let monthNames ="Jan,Feb,Mar,Apr,Mai,Jun,Jul,Aug,Sep,Okt,Nov,Des".split(",");
        let maanedsNavn = monthNames[month-1];
        let d= document.createElement("div");
        d.className = "maaned";
        d.innerHTML = maanedsNavn;
        divMonth.appendChild(d);

        let dagnavn = ["Man","Tir","Ons","Tor","Fre","Lør","Søn"];
        d= document.createElement("div");
        d.className = "ukedager";
        for (let dn of dagnavn ) {
            let dd= document.createElement("div");
            dd.className = "dag";
            dd.innerHTML = dn;
            d.appendChild(dd);
        }
        divMonth.appendChild(d);
        
    }


}