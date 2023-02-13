const buttonContainer = document.querySelectorAll(".button-container");
const totalDisplay = document.querySelector(".total-cost");
const orderButton = document.querySelector(".order-button");
const clearButton = document.querySelector(".clear-button");



let total = 0;
const menu_items = ["Mac & Cheese", "Pasta", "Taco", "Enchilada"];

buttonContainer.forEach(function (set) {
    let number = 0;
    const factor = parseInt(set.dataset.factor);
    const incrementButton = set.querySelector(".increment");
    const decrementButton = set.querySelector(".decrement");
    const numberDisplay = set.querySelector(".number");

    incrementButton.addEventListener("click", function () {
        number++;
        total += factor;
        numberDisplay.textContent = number;
        totalDisplay.textContent = total;
    });

    decrementButton.addEventListener("click", function () {
        if (number > 0) {
            number--;
            total -= factor;
        }
        numberDisplay.textContent = number;
        totalDisplay.textContent = total;
    });

    clearButton.addEventListener("click", function () {

        buttonContainer.forEach(function (set) {
            const numberDisplay = set.querySelector(".number");
            number = 0;
            numberDisplay.textContent = 0;
        });
        total = 0;
        totalDisplay.textContent = 0
    });

});

orderButton.addEventListener("click", function () {
    let order_message = "Order Placed!\n";
    let index = 0;
    let empty_item = 0;
    buttonContainer.forEach(function (set) {
        const numberDisplay = set.querySelector(".number");
        order_message += numberDisplay.textContent + " " + menu_items[index] + "\n";
        index++;
        if (parseInt(numberDisplay.textContent) != 0) {
            empty_item++;
        }
        number = 0;
        numberDisplay.textContent = 0;
    });
    total = 0;
    totalDisplay.textContent = 0;
    if (empty_item == 0) {
        alert("No items in cart");
    } else {
        alert(order_message);
    }
    buttonContainer.forEach(function (set) {
        clearButton.click();
    });
});




