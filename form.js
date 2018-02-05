var ageRequired = function () {
    var drink = document.querySelector("select option:checked").value;
    var dateBox = document.querySelector("#birthdate");
    if (drink == "2" || drink == "4") {
        dateBox.style.visibility = "visible";
    } else {
        dateBox.style.visibility = "hidden";
    }
}

var checkAge = function () {
    var date = document.querySelector("#date").value;
    var birthday = moment(date);
    var minimum = moment().subtract("21", 'years');

    if (birthday.isAfter(minimum)) {
        document.querySelector("#boxtitle").innerHTML = "You must be born before ";
        document.querySelector("#boxcontent1").innerHTML = minimum.format("dddd, MMMM, D, YYYY");
        document.querySelector("#boxcontent2").innerHTML = "to order this beverage.";
        document.querySelector("#infobox").style.visibility = "visible";
        return false;
    } else {
        return true;
    }
}

var prices = [[1, 2, 3], [0.5, 1, 1.25], [3.5, 5, 6.5], [0.75, 1.25, 2], [3, 5, 7], [1.25, 2, 2.5]];
var beverages = ["Coke", "Water", "Wine", "Orange Juice", "Beer", "Milk"];
var sizes = { 0: "Small", 1: "Medium", 2: "Large" };

var submitOrder = function () {
    var name = document.querySelector("#name").value;
    var drink = document.querySelector("select option:checked").value;
    var drinkName = beverages[drink];
    var size = document.querySelector('[type="radio"]:checked').value;
    var quantity = Number(document.querySelector("#amount").value);
    var price = prices[drink][size];
    var totalPrice = quantity * price;

    if (checkAge()) {
        document.querySelector("#boxtitle").innerHTML = "Receipt";
        document.querySelector("#boxcontent1").innerHTML = name + " ordered " + quantity + " " + sizes[size] + " " + drinkName + " @ $" + price + " each."
        document.querySelector("#boxcontent2").innerHTML = "TOTAL: $" + totalPrice;
        document.querySelector("#infobox").style.visibility = "visible";
    }
}

window.onload = function () {
    document.querySelector("#birthdate").style.visibility = "hidden";
    document.querySelector("#infobox").style.visibility = "hidden";
    var dropdown = document.querySelector("#drop");
    var dateSelector = document.querySelector("#date");
    dropdown.onchange = ageRequired;
    document.querySelector("#btn").onclick = submitOrder;
}