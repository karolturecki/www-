document.getElementById("zamowienieButton").addEventListener("click", function() {
    const ksztalt = document.getElementById("ksztalt").value;
    let cukierek;

    switch (ksztalt) {
        case "1":
            cukierek = "cytryna";
            break;
        case "2":
            cukierek = "liść";
            break;
        case "3":
            cukierek = "banan";
            break;
        default:
            cukierek = "inny";
            break;
    }

    const zamowienieText = `Twoje zamówienie to cukierek ${cukierek}`;
    document.getElementById("order-text").innerText = zamowienieText;
});


document.getElementById("kolorButton").addEventListener("click", function() {
    const r = document.getElementById("r").value;
    const g = document.getElementById("g").value;
    const b = document.getElementById("b").value;

    const kolor = `rgb(${r}, ${g}, ${b})`;
    document.getElementById("kolorButton").style.backgroundColor = kolor;
});