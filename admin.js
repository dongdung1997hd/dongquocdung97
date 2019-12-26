
function getDefaultClother(){
    return {
    'code': '',
    'name': '',
    'brand': '',
    'price': 0,
    'size': '',
    'color': '',
    'description': '',
};
}
let clothers = [];
let clother1 = getDefaultClother();
clother1.code = "CLO1";
clother1.name = "Quan kaki 001";
clother1.brand = "Adam";
clother1.price = 2e5;
clother1.size = "X";
clother1.color = "black";
clother1.description = "Quan kaki Adam size X, mau den";
clothers.push(clother1);

let clother2 = getDefaultClother();
clother2.code = "CLO2";
clother2.name = "Quan bo";
clother2.brand = "Adam 001";
clother2.price = 3e5;
clother2.size = "M";
clother2.color = "white";
clother2.description = "Quan bo Adam 001 size M, mau trang";
clothers.push(clother2);

let clother3 = getDefaultClother();
clother3.code = "CLO3";
clother3.name = "Quan bo";
clother3.brand = "Adam 002";
clother3.price = 4e5;
clother3.size = "L";
clother3.color = "blue";
clother3.description = "Quan bo Adam 002 size L, mau xanh";
clothers.push(clother3);

let checkExit = localStorage.getItem("AllClothers");
if (checkExit === null) {
localStorage.setItem('AllClothers',JSON.stringify(clothers));
} else {
    clothers = JSON.parse(checkExit);
}

console.log(clothers);
function displayListClothers(listClothers){
let body = document.getElementById('list-clothers');
let s = '';
for (let i = 0; i < listClothers.length; i++) {
    const clother = listClothers[i];
    let tr = `
        <tr>
            <td>${i+1}</td>
            <td>${clother.code}</td>
            <td>${clother.name}</td>
            <td>${clother.price}d</td>
            <td>${clother.size}</td>
            <td>${clother.color}</td>      
           <td>${clother.brand}</td>
           <td>
           <button class = "btn btn-success" onclick = "editClother('${clother.code}')">Edit</button>
           <button class = "btn btn-warning" onclick = "deleteClother('${clother.code}')">Delete</button>
           </td>
        </tr>`;
         s += tr;
    }
    body.innerHTML = s;
}
displayListClothers(clothers);

function editClother(code){
    let currentClother;
    for (let i = 0; i < clothers.length; i++) {
        const clother = clothers[i];
        if(clother.code === code){
            currentClother = clother;
            break;
        }
    }
    $('#editClother').modal('show');
    document.getElementById('txtEditCode').value = currentClother.code;
    document.getElementById('txtEditName').value = currentClother.name;
    document.getElementById('txtEditPrice').value = currentClother.price;
}

function deleteClother(code){
    if(confirm("Ban co muon xoa khong?")) {
    for (let i = 0; i < clothers.length; i++) {
        const clother = clothers[i];
        if(clother.code === code){
            clothers.splice(i,1);
            break;
        }
    }
    displayListClothers(clothers);
}
localStorage.setItem('AllClothers',JSON.stringify(clothers));

}
function addClother(e){
    e.preventDefault();
    let code = document.getElementById('txtCode').value;
    let name = document.getElementById('txtName').value;
    let price = document.getElementById('txtPrice').value;
    let newClother = getDefaultClother();
    newClother.code = code;
    newClother.name = name;
    newClother.price = Number(price);
    clothers.push(newClother);
    displayListClothers(clothers);
    document.getElementById('frmNewClother').reset();    
    $('#addClother').modal('hide');
    localStorage.setItem('AllClothers',JSON.stringify(clothers));
}

function saveClother(e){
    e.preventDefault();
    let code = document.getElementById('txtEditCode').value;
    let name = document.getElementById('txtEditName').value;
    let price = document.getElementById('txtEditPrice').value;
    let currentClother;
    for (let i = 0; i < clothers.length; i++) {
        const clother = clothers[i];
        if(clother.code === code){
            clother.name = name;
            clother.price = price;
            break;
        }
    }
    displayListClothers(clothers);

    document.getElementById('frmNewClother').reset();    

    $('#editClother').modal('hide');
    localStorage.setItem('AllClothers',JSON.stringify(clothers));
}
