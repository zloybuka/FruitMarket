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
    totalItems = '<table ><tr><th> </th><th>Наименование</th><th>Цена</th><th></th><th>Вес</th></tr>';
    for (var items in cartData) {

        totalItems += '<tr><td><img src="img/' + items +'.png" style="width: 300;height:200"><td> ' + cartData[items][0] + '<td> ' + cartData[items][1] + '<td style="width: 30"><button class="quantity-arrow-plus" onclick="unadd(' + items + ')">-</button><td style="width: 30;text-align:center"> <input id="' + items + '" type="number" value="' + cartData[items][2] + '" onchange="inp(' + items + ',this.value)" style="width: 30;"><td><button class="quantity-arrow-plus" onclick="add(' + items + ')">+</button><td><button   onclick="del(' + items + ')" style="padding: 0"><img src="img/31.png"></button><tr>';
            itog = cartData[items][1] * cartData[items][2];
            itog2 += itog;     
            
    }
    totalItems += '<table><td style="text-align:right;">Итого: ' + itog2+' рублей';
    cartCont.innerHTML = totalItems;
} else {

    cartCont.innerHTML = 'В корзине пусто!';
}
return false;
}
function del(items) {
    var cartData = getCartData() || {};
    delete cartData[items];
    localStorage.removeItem('cart');
    setCartData(cartData);
    openCart();
    return false;
}

function add(items){
    var cartData = getCartData() || {};
    if(cartData[items][2]<99)
    cartData[items][2]++;
   localStorage.removeItem('cart');
    setCartData(cartData);
    openCart();
    return false;
}
function unadd(items){
    var cartData = getCartData() || {};
    if(cartData[items][2]>0.1)
    cartData[items][2]--;
   localStorage.removeItem('cart');
    setCartData(cartData);
    openCart();
    return false;
}

function inp(items,val){
    var cartData = getCartData() || {};
    if(val<1)val=0.1;
    if(val>99)val=99;
   cartData[items][2]=val;
   localStorage.removeItem('cart');
    setCartData(cartData);
    openCart();
    return false;
}
openCart();