async function runTests() {
    const { expect } = await import("chai");
    const jsdom = require("jsdom");
    const { JSDOM } = jsdom;

    describe('showItems', function () {
        it('should display items in the HTML content', function () {
            const dom = new JSDOM(`<!DOCTYPE html><div id="content"></div>`);
            global.window = dom.window;
            global.document = dom.window.document;

            const { showItems } = require('./script');

            const items = [
                { id: 1, name: 'Book', description: 'A great book to read.', category: 'Books', owner_id: 1, status: 'Available' },
                { id: 2, name: 'Laptop', description: 'Good condition laptop.', category: 'Electronics', owner_id: 2, status: 'Reserved' },
                { id: 3, name: 'Guitar', description: 'Acoustic guitar for beginners.', category: 'Music', owner_id: 3, status: 'Available' },
                { id: 4, name: 'Smartphone', description: 'Latest model smartphone.', category: 'Electronics', owner_id: 2, status: 'Available' },
            ];

            showItems(items);

            const contentDiv = global.document.getElementById('content');
            const itemElements = contentDiv.querySelectorAll('.item');

            expect(itemElements.length).to.equal(items.length);
            itemElements.forEach((itemElement, index) => {
                const item = items[index];
                expect(itemElement.innerHTML).to.include(`<h2>${item.name}</h2>`);
                expect(itemElement.innerHTML).to.include(`<p>Description: ${item.description}</p>`);
                expect(itemElement.innerHTML).to.include(`<p>Category: ${item.category}</p>`);
                expect(itemElement.innerHTML).to.include(`<p>Owner ID: ${item.owner_id}</p>`);
                expect(itemElement.innerHTML).to.include(`<p>Status: ${item.status}</p>`);
            });
        });
    });
}

runTests();
