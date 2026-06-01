var d = document,
itemBox = d.querySelectorAll('.tovar1'),
cartCont = d.getElementById('cart_content');
function addEvent(elem, type, handler) {
if (elem.addEventListener) {
    elem.addEventListener(type, handler, false);
} else {
    elem.attachEvent('on' + type, function () { handler.call(elem); });
}
return false;
}

function getCartData() {
return JSON.parse(localStorage.getItem('cart'));
}
function setCartData(o) {
localStorage.setItem('cart', JSON.stringify(o));
return false;
}
function addToCart(e) {
this.disabled = true;
var cartData = getCartData() || {},
    parentBox = this.parentNode,
    itemId = this.getAttribute('data-id'),
    itemTitle = parentBox.querySelector('.tovar_title').innerHTML,
    itemInput = parentBox.querySelector('.input1').value,
    itemPrice = parentBox.querySelector('.tovar_price').innerHTML;
if (itemInput > 99) { itemInput = 99; parentBox.querySelector('.input1').value = 99 }
else if (itemInput < 0.1) { itemInput = 0.1; parentBox.querySelector('.input1').value = 0.1 };
if (cartData.hasOwnProperty(itemId)) {
    cartData[itemId][2] = +cartData[itemId][2] + +itemInput;
} else {
    cartData[itemId] = [itemTitle, itemPrice, itemInput];
}

if (!setCartData(cartData)) {
    this.disabled = false;
    cartCont.innerHTML = 'Товар добавлен в корзину.';
    setTimeout(function () {
        cartCont.innerHTML = 'Продолжить покупки...';
    }, 1000);
}
return false;
}

for (var i = 0; i < itemBox.length; i++) {
addEvent(itemBox[i].querySelector('.add_tovar'), 'click', addToCart);
}

function openCart(e) {

var cartData = getCartData(),
    itog = 0,
    itog2 = 0,
    totalItems = '';
console.log(JSON.stringify(cartData));

if (cartData !== null) {
    totalItems = '<table class="shopping_list"><tr><th>Наименование</th><th>Цена</th><th>Кг</th><th>Сумма</th></tr>';
    for (var items in cartData) {
        totalItems += '<tr>';
        for (var i = 0; i < cartData[items].length; i++) {
            totalItems += '<td>' + cartData[items][i] + '</td>';
            if (i == 1) {
                itog = cartData[items][i] * cartData[items][i + 1];
                itog2 += itog;
            }
        }
        totalItems += '<td>' + itog + '</td>';
        totalItems += '</tr>';
    }
    totalItems += '<tr><td>Итог:' + itog2 + ' руб.</td></tr>';
    cartCont.innerHTML = totalItems;
} else {

    cartCont.innerHTML = 'В корзине пусто!';
}
return false;
}

addEvent(d.getElementById('checkout'), 'click', openCart);

addEvent(d.getElementById('clear_cart'), 'click', function (e) {
localStorage.removeItem('cart');
cartCont.innerHTML = 'Корзина очишена.';
});

addEvent(d.getElementById('close'), 'click', function (e) {
cartCont.innerHTML = ' ';
});

for (var i = 0; i < itemBox.length; i++) {
    addEvent(itemBox[i].querySelector('.quantity-arrow-minus'), 'click', function (e) {
        if (this.parentNode.querySelector('.input1').value>1)
            this.parentNode.querySelector('.input1').value--;
    })
    addEvent(itemBox[i].querySelector('.quantity-arrow-plus'), 'click', function (e) {
        if (this.parentNode.querySelector('.input1').value < 99)
        this.parentNode.querySelector('.input1').value++;
    })

};
