let count = 0;
let total = 0;

// Функція, яка спрацьовує при натисканні на кнопку
function addToCart(price) {
    // 1. Додаємо 1 до кількості
    count = count + 1;
    
    // 2. Додаємо ціну до загальної суми
    total = total + price;

    // 3. Знаходимо елементи на сторінці та міняємо їх текст
    document.getElementById('cart-count').innerText = count;
    document.getElementById('cart-total').innerText = total;

    // 4. Маленький бонус: показуємо сповіщення
    console.log("Товар додано! Поточна сума: " + total + " грн");
}