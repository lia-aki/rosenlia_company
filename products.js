const products = [
    {
        image: "./images/imag_1.jpg",
        name: "エメラルドの扉",
        description: "MDD・SDM通用 ドール服 ワンピース 8点セット。",
        price: "¥12,800"
    },
    {
        image: "./images/imag_1.jpg",
        name: "エメラルドの扉",
        description: "MDD・SDM通用 ドール服 ワンピース 8点セット。",
        price: "¥12,800"
    },
    {
        image: "./images/imag_1.jpg",
        name: "エメラルドの扉",
        description: "MDD・SDM通用 ドール服 ワンピース 8点セット。",
        price: "¥12,800"
    },
    {
        image: "./images/imag_1.jpg",
        name: "エメラルドの扉",
        description: "MDD・SDM通用 ドール服 ワンピース 8点セット。",
        price: "¥12,800"
    },
    {
        image: "./images/imag_1.jpg",
        name: "エメラルドの扉",
        description: "MDD・SDM通用 ドール服 ワンピース 8点セット。",
        price: "¥12,800"
    },
    {
        image: "./images/imag_1.jpg",
        name: "エメラルドの扉",
        description: "MDD・SDM通用 ドール服 ワンピース 8点セット。",
        price: "¥12,800"
    },
    {
        image: "./images/imag_1.jpg",
        name: "エメラルドの扉",
        description: "MDD・SDM通用 ドール服 ワンピース 8点セット。",
        price: "¥12,800"
    },
    {
        image: "./images/imag_1.jpg",
        name: "エメラルドの扉",
        description: "MDD・SDM通用 ドール服 ワンピース 8点セット。",
        price: "¥12,800"
    },
    {
        image: "./images/imag_1.jpg",
        name: "エメラルドの扉",
        description: "MDD・SDM通用 ドール服 ワンピース 8点セット。",
        price: "¥12,800"
    },
];

const itemsPerPage = 8;
let currentPage = 1;

function displayProducts(page) {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';
    
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageProducts = products.slice(startIndex, endIndex);

    pageProducts.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">${product.price}</p>
        `;
        productGrid.appendChild(productItem);
    });
}

function setupPagination() {
    const pageCount = Math.ceil(products.length / itemsPerPage);
    const paginationElement = document.getElementById('pagination');
    paginationElement.innerHTML = '';

    for (let i = 1; i <= pageCount; i++) {
        const button = document.createElement('button');
        button.innerText = i;

        if (i === currentPage) {
            button.classList.add('active');
        }

        button.addEventListener('click', () => {
            currentPage = i;
            displayProducts(currentPage);
            
            const currentButton = document.querySelector('.active');
            currentButton.classList.remove('active');
            button.classList.add('active');
        });

        paginationElement.appendChild(button);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    displayProducts(currentPage);
    setupPagination();
});