var d = document,
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

function openCart(e) {
    
var cartData = getCartData(),
    itog = 0,
    itog2 = 0,
    totalItems = '';
console.log(JSON.stringify(cartData));

if (cartData !== null) {
    totalItems = ' ';
    for (var items in cartData) {

        totalItems += 'Наименование:' + cartData[items][0] + ', Цена:' + cartData[items][1] + ', Количество:' + cartData[items][2] + ';';
            itog = cartData[items][1] * cartData[items][2];
            itog2 += itog;     
            
    }
    totalItems += 'Итого: ' + itog2+' рублей';
    cartCont.innerHTML = totalItems;
} else {

    cartCont.innerHTML = 'В корзине пусто!';
}
return false;
}

addEvent(d.getElementById('clear_cart'), 'click', function (e) {
    localStorage.removeItem('cart');
});

openCart();