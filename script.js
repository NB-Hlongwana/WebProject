const bar = document.getElementById('bar');
const close = document.getElementById('bar');

const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

var removeCartItem = document.getElementsByClassName('fa fa-times-circle')
console.log(removeCartItembutton)
for (var i = 0; i < removeCarItemButton.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click', function() {
        console.log('clicked')
            var buttonClicked = event.target
            buttonClicked.parentElement.parentElement.remove()
    })
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-image')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var qualityElement = cartRow.getElementsByClassName('cart-quality-input')
        [0]
        console.log(priceElement, qualityElement)
    }
}