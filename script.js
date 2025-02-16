const foods = [
    { id: 1, name: "Burger", price: "₹120", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Pizza", price: "₹250", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Pasta", price: "₹180", image: "https://via.placeholder.com/150" }
];

const foodGrid = document.getElementById("foodGrid");

foods.forEach(food => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${food.image}" alt="${food.name}">
        <h2>${food.name}</h2>
        <p>${food.price}</p>
        <button class="button">Add to Cart</button>
    `;

    foodGrid.appendChild(card);
});
