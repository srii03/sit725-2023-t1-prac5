// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Model (simulated data)
    let items = [
        { id: 1, name: 'Book', description: 'A great book to read.', category: 'Books', owner_id: 1, status: 'Available', imageUrl: 'images/item1.jpg' },
        { id: 2, name: 'Laptop', description: 'Good condition laptop.', category: 'Electronics', owner_id: 2, status: 'Reserved', imageUrl: 'images/item2.jpg' },
        { id: 3, name: 'Guitar', description: 'Acoustic guitar for beginners.', category: 'Music', owner_id: 3, status: 'Available', imageUrl: 'images/item3.jpg' },
        { id: 4, name: 'Smartphone', description: 'Latest model smartphone.', category: 'Electronics', owner_id: 2, status: 'Available', imageUrl: 'images/item4.jpg' },
        { id: 5, name: 'Painting Kit', description: 'Complete set for painting enthusiasts.', category: 'Art', owner_id: 4, status: 'Available', imageUrl: 'images/item5.jpg' },
        { id: 6, name: 'Fitness Tracker', description: 'Track your fitness goals.', category: 'Health', owner_id: 5, status: 'Reserved', imageUrl: 'images/item7.jpg' },
        { id: 7, name: 'Cookbook', description: 'Delicious recipes for every occasion.', category: 'Books', owner_id: 6, status: 'Available', imageUrl: 'images/item8.jpg' },
        { id: 8, name: 'Headphones', description: 'High-quality headphones for immersive audio.', category: 'Electronics', owner_id: 2, status: 'Available', imageUrl: 'images/item9.jpg' },
    ];

    // View
    function showItems(items) {
        let itemHtml = '';
        items.forEach(item => {
            itemHtml += `
                <div class="item">
                    <h2>${item.name}</h2>
                    <img src="${item.imageUrl}" alt="${item.name}">
                    <p>Description: ${item.description}</p>
                    <p>Category: ${item.category}</p>
                    <p>Owner ID: ${item.owner_id}</p>
                    <p>Status: ${item.status}</p>
                    <button onclick="reserveItem(${item.id})">Reserve</button>
                </div>
            `;
        });
        document.getElementById('content').innerHTML = itemHtml;
    }

    // Controller
    function browseItems() {
        showItems(items);
    }

    function addItem() {
        const itemName = prompt('Enter the name of the item:');
        const itemDescription = prompt('Enter the description of the item:');
        const itemCategory = prompt('Enter the category of the item:');
        const itemOwnerId = prompt('Enter the owner ID of the item:');

        const newItem = {
            id: items.length + 1,
            name: itemName,
            description: itemDescription,
            category: itemCategory,
            owner_id: parseInt(itemOwnerId),
            status: 'Available'
        };

        items.push(newItem);

        showItems(items);
    }

    function reserveItem(itemId) {
        alert(`Item ${itemId} reserved successfully.`);
    }

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function() {
        const searchQuery = searchInput.value.trim().toLowerCase();
        const filteredItems = items.filter(item => {
            return item.name.toLowerCase().includes(searchQuery);
        });
        showItems(filteredItems);
    });

    // Event listeners
    document.getElementById('browseLink').addEventListener('click', browseItems);
    document.getElementById('addItemLink').addEventListener('click', addItem);

    // Initial view
    browseItems();
});
