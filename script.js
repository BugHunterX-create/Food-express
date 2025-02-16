const foods = [
    { id: 1, name: "Burger", price: "₹120", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Pizza", price: "₹250", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Pasta", price: "₹180", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Sandwich", price: "₹100", image: "https://via.placeholder.com/150" },
    { id: 5, name: "French Fries", price: "₹80", image: "https://via.placeholder.com/150" }
];

let cartCount = 0;

const foodContainer = document.getElementById("foodContainer");
const cartCountElement = document.getElementById("cartCount");

foods.forEach(food => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${food.image}" alt="${food.name}">
        <h2>${food.name}</h2>
        <p>${food.price}</p>
        <button class="button" onclick="addToCart()">Add to Cart</button>
    `;

    foodContainer.appendChild(card);
});

function addToCart() {
    cartCount++;
    cartCountElement.textContent = cartCount;
}
