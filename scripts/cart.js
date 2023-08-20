function itemCart(element) {
    // Item addition
    const childElement = element.childNodes[3].childNodes[3];

    const listItems = document.getElementById('list-items');

    const li = document.createElement('li');
    li.innerText = childElement.innerText;

    listItems.append(li);

    // Price calculation

    const itemValue = document.getElementById('total-price');
    const valueSplit = itemValue.innerText.split(' ');
    const value = parseFloat(valueSplit[0]);    //total price

    const elementValue = element.childNodes[3].childNodes[5];   //item price
    const totalValue = value + parseFloat(elementValue.innerText);
    itemValue.innerText = totalValue.toFixed(2) + ' TK';

    if (totalValue > 0) {
        const purchase = document.getElementById('purchase');
        purchase.classList.remove('btn-disabled')
    }
    if (totalValue >= 200) {
        const purchase = document.getElementById('apply');
        purchase.classList.remove('btn-disabled')
    }
}

function discount() {
    const couponField = document.getElementById('coupon-field');
    const couponValue = couponField.value;

    const itemValue = document.getElementById('total-price');
    const valueSplit = itemValue.innerText.split(' ');
    const value = parseFloat(valueSplit[0]);

    const discount = document.getElementById('discount');
    const total = document.getElementById('total');


    if (couponValue === 'SELL200') {
        const discountValue = value * 0.2;

        discount.innerText = discountValue.toFixed(2) + 'TK';
        total.innerText = (value - discountValue).toFixed(2) + 'TK';

        couponField.value = '';
    }
    else {
        discount.innerText = '00.00 TK';
        total.innerText = value.toFixed(2) + 'TK';
    }
}