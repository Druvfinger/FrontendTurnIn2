fetch ('https://fakestoreapi.com/products') // hämtar returnerar  respons
.then(res => {  // konvertera response till en promise
    return res.json();
})
.then(data => {   // konvertat till array 
    data.forEach(product => {
        let description = product.description;
        let title = product.title;
        let id = product.id;
        const markup = `
        <div class="col">
        <div class="card mb-5 border-dark" style="max-width: 300px;">
            <img src="${product.image}" class="card-img-top p-3"></img>
            <div class="card-body">
            <h3 class="card-title">${product.title}</h3>
            <p class="card-text text-secondary ">${product.category}</p>
            <p class="card-text">${description.length > 20 ? description.substring(0, 20).concat(
               `<a href = "#" data-bs-toggle="modal" data-bs-target="#${product.id}">...more</a>`) : description}</p>
            <div class="row">
                <div class="col">
                    <h4 class="card-text d-md-inline-block">${product.price}kr</h4>
                    <a href="#" class="btn btn-secondary d-md-inline-block ms-md-3" data-bs-toggle="modal" data-bs-target="#${product.id}">Buy</a>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="${product.id}">
        <div class="modal-dialog" >
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title style="max-width: 400px;"" id="${product.id}">${product.title}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body d-flex" style="max-width: 500px;">
                    <div class="row">
                        <div class="col col-12 d-flex justify-content-center">
                            <img src="${product.image}" style="object-fit: contain; max-width: 400px;"></img>
                        </div>
                        <p class="col text-secondary">${product.category}</p>
                        <p>${product.description}</p>
                        <div>
                            <h4 class="card-text d-md-inline-block">${product.price}kr</h4>
                            <a href="#" class="btn btn-secondary d-md-inline-block ms-md-3">Buy</a>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    `
    const productCol = document.createElement('div');
    productCol.classList.add('col-md-3');
    productCol.innerHTML = markup; // markup är HTML-blocket
    document.querySelector('#product-row').appendChild(productCol); 
    })
})


/*
Maricas kod

fetch ('https://fakestoreapi.com/products')
.then(res => {
    return res.json();
})
.then(data => {
    data.forEach(product => {
        let description = product.description;
        let title = product.title;
        let id = product.id;
        const markup = `
    <div class="col h-100">   
        <div class="product">
            <div class="product-content">
                <img src="${product.image}" alt="" class="product-img">
                <h3 class="product-title">${title.length > 20 ? title.substring(0,20).concat('...') : title}</h3>
                <p class="product-category">${product.category}</p>
                <p class="product-description">${description.length > 20 ? description.substring(0, 20).concat('..more') : description}</p>
                <div class="procuct-price-container">
                    <div class="row" id="pricecon">
                        <div class="col-md-6">
                            <h5 class="product-price">${product.price} sek</h5>
                        </div>
                        <div class="col-md-6">
                        <button type="button" data-productId= ${product.id}  class="add-to-cart" 
                        data-bs-toggle="modal" data-bs-target="#modal">Beställ</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
    const productCol = document.createElement('div');
    productCol.classList.add('col-md-3');
    productCol.innerHTML = markup;
    document.querySelector('#product-row').appendChild(productCol);
    })
})




*/