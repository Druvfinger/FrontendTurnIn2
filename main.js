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
        <div class="card border-dark m-2" style="height:80vh; min-height:750px;">
            <div class="card-body" style ="min-width: fit-content;">
            <img src="${product.image}" class="card-img-top" style= "width: 100%;
            height: 35vh; 
            object-fit: contain;"></img>
            <h3 class="card-title" style="font-size:large;">${product.title}</h3>
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
    productCol.classList.add('col-md-6');//col-md-4 standard
    productCol.innerHTML = markup; // markup är HTML-blocket
    document.querySelector('#product-row').appendChild(productCol); 
    })
})

