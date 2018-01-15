function setup (){ 
    
    let santa = document.getElementById("santa"); 

    santa.addEventListener ("click", dropgift);

    let manyGifts= [];

    function dropgift (event) {
        let px = event.pageX;
        let newGift = document.createElement("div"); //lager en ny div for gavene
        newGift.className = "gift"; //lager et navn for diven
        console.log(santa.style.left);
        newGift.style.left = px +"px";
        newGift.style.opacity = 1; //at den er synlig
        main.appendChild(newGift);//flytter pakken fra den nåværende posisjonen til en ny posisjon
        manyGifts.push(newGift); //pusher mange gaver inn i gaven, slik at man kan få flere gaver
        console.log(newGift);
    }
}