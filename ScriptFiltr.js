var sortByNameBtn = document.getElementById('sortByName');
var sortByPriceBtn = document.getElementById('sortByPrice');

function sortingByName() {
    var items = document.querySelectorAll('.tovar1');

    Array.from(items).sort(function (a, b) {
        a = a.querySelector('.tovar_title').innerText.toLowerCase()
        b = b.querySelector('.tovar_title').innerText.toLowerCase()
        return (a > b) - (a < b)
    }).forEach(function (n, i) {
        n.style.order = i
    })

}
function sortingByPrice() {
    var items = document.querySelectorAll('.tovar1')

    Array.from(items).sort(function (a, b) {
        a = ~~a.querySelector('.tovar_price').innerText
        b = ~~b.querySelector('.tovar_price').innerText
        return a - b
    }).forEach(function (n, i) {
        n.style.order = i
    })
}
sortByNameBtn.addEventListener('click', sortingByName);
sortByPriceBtn.addEventListener('click', sortingByPrice);
