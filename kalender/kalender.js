function setup() {

    let buttons = document.getElementById("buttons");
    let divYear = document.getElementById("year");
    let divMonth = document.getElementById("month");

    let year = Number(divYear.innerHTML);
    let month = divMonth.innerHTML;

    let months = ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"];
    let monthN = months.indexOf(month);

    buttons.addEventListener("click", buttonClick);


    function buttonClick(e) {
        if (e.toElement.id === "buttons") {
            return;
        }
        let toDo = e.toElement.id.split(",");
        eval(toDo[1] + toDo[0] + toDo[0]);

        if (monthN === 12) {
            monthN = 0;
            year++;
        }
        if (monthN === -1) {
            monthN = 11;
            year--;
        }
        console.log(year, monthN);
        divYear.innerHTML = year;
        divMonth.innerHTML = months[monthN];
    }

}