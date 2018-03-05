// @ts-check

function setup() {
    
    let main = document.getElementById("main");
    let inpBy = document.getElementById("byer");
    let btnBestill = document.getElementById("button");
    let inpEnkel = document.getElementById("enkel");
    let inpDobbel = document.getElementById("dobbel");

    let byer = [];

    let peter = [];
    let newyork = [];
    let amster = [];
    let roma = [];

    byer.push(peter);
    byer.push(newyork);
    byer.push(amster);
    byer.push(roma);

    newyork.push("Hotell1");
    newyork.push("Hotell2");
    newyork.push("Hotell3");
    newyork.push("Hotell4");

    function intialize() {
        let byvalgt = inpBy.value;
        for(let i=0; i< byer.length; i++) {
            let byOption = byer[i];
        }
    }
}