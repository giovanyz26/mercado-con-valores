let items = localStorage.getItem('itemList');
    items = items ? items.split(',') : [];

showItem();

function addItem() {
    let item = document.getElementById('item').value;
    if(item) items.push({"items":items,"valor":valor});showItem();
   
}   

function showItem() {
    document.getElementById('item').value = '';
    let html = '';
    for (let index = 0; index < items.length; index++) {
        html += `<div class="col-10 mb-3"> ${items[index]} </div>`;
        html += `<div class="col-2 mb-3"> <a href="#" class="btn btn-danger" onclick="deleteItem(${index})"> Eliminar </a> </div>`;
    }

    localStorage.setItem('itemList', items);
    document.getElementById('items','').innerHTML = html; 
    
}
//eliminar
function deleteItem(item) {
    items.splice(item,1);
    showItem();
}

/*let nombre = 'Cristhian';
let valor = '1500';

var producto = [];
    producto.push({'nombre': nombre, 'valor': valor});

    producto.forEach((i, index) => {
        document.write(i.nombre +' - '+i.valor);
    });*/
