
const products = [
    {
        id: 0,
        image: 'image/book-1.png',
        title: 'The LORD Of KINGS',
        price: 399
    },
    {
        id: 1,
        image: 'image/f2.jpg',
        title: 'The Girl With No Dreams',
        price: 499
    },
    {
        id: 2,
        image: 'image/f3.jpg',
        title: 'Stephen: Black Holes',
        price: 449
    },
    {
        id: 3,
        image: 'image/f5.jpg',
        title: 'Draupadi :Indias daughter',
        price: 449
    },
    {
        id: 4,
        image: 'image/n4.jpg',
        title: 'Lisa Gardner Find Her',
        price: 599
    },
    {
        id: 5,
        image: 'image/n5.jpg',
        title: 'Designed For Wrok',
        price: 549
    },
    {
        id: 6,
        image: 'image/n6.jpg',
        title: 'Alice:Turn Of Mind',
        price: 349
    },
    {
        id: 7,
        image: 'image/n2.webp',
        title: 'Palace of Illusions',
        price: 449
    },
];

let cart = [];
let total = 0;

function addtocart(id) {
    const product = products.find(item => item.id === id);
    cart.push({...product});
    displaycart();
}

function delElement(index) {
    cart.splice(index, 1);
    displaycart();
}

function displaycart() {
    total = 0;
    const cartItems = document.getElementById("cartItem");
    const countElement = document.getElementById("count");
    const totalElement = document.getElementById("total");

    countElement.innerHTML = cart.length;

    if (cart.length === 0) {
        cartItems.innerHTML = "Your cart is empty";
        totalElement.innerHTML = "RS 0.00";
    } else {
        cartItems.innerHTML = cart.map((item, index) => {
            total += item.price;
            return `
            <div class ='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src='${item.image}'>
                </div>
                <p style='font-size:12px;'>${item.title}</p>
                <h2 style='font-size: 15px;'>RS ${item.price}.00</h2>
                <i class='fa-solid fa-trash' onclick='delElement(${index})'></i>
            </div>`;
        }).join('');
        totalElement.innerHTML = "RS " + total.toFixed(2);
    }
}

// Populate products in the root div
document.getElementById('root').innerHTML = products.map(product => {
    return `
    <div class='box'>
        <div class='img-box'>
            <img class='images' src='${product.image}'></img>
        </div>
        <div class='bottom'>
            <p>${product.title}</p>
            <h2>RS ${product.price}.00</h2>
            <button onclick='addtocart(${product.id})'>Add to cart</button>
        </div>
    </div>`;
}).join('');

// Function to handle the Buy Now button click event
function handleBuyNowClick() {
    // Simulate a payment process or redirect to a payment gateway
    // You can customize this part based on your payment integration
    alert("Thank you for your purchase! Please proceed to payment.");

    // Example: Redirect to a payment gateway
    window.location.href = "payment.html";
}

// Add event listener to the Buy Now button
document.addEventListener("DOMContentLoaded", function() {
    const buyNowButton = document.querySelector(".buy-now-button");
    buyNowButton.addEventListener("click", handleBuyNowClick);
});

