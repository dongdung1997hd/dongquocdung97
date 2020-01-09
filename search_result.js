
let searchList = JSON.parse(localStorage.getItem("searchList"));

let searchKey = localStorage.getItem("searchKey");

let listPost = JSON.parse(localStorage.getItem("listPost"));


let s1 = `<h3>Kết quả tìm kiếm cho "${searchKey}"</h3>`;

document.getElementById('left-top').innerHTML = s1;

// Ket qua tim kiem

let s = '';

for (let i = 0; i < searchList.length; i++) {
    const element = searchList[i];
    s += `
    
    <ul>
        <li>
            <img src="${element.imageURLHeadline}" />
            <a href="#" onclick="goToPostDetail('${element.title}')"><h2>${element.title}</h2></a>
            ${element.headline}
        </li>
    </ul>
    
    `;
}

document.getElementById('left').innerHTML = s;


function goToPostDetail(title) {
    localStorage.setItem("selectedPost", title);
    window.location.href = "screen_chitiet.html";
}


// Bai viet gan day

let s2 = '';

for (let i = listPost.length - 1; i >= 0; i--) {
    const element = listPost[i];

    if (i >= listPost.length - 2) {
        s2 += `
    
    <ul>
        <li class="product-row">
            </a>
            <img class="product-img" src="${element.imageURLHeadline}" />
            <a href="#" onclick="goToPostDetail('${element.title}')"><h3>${element.title}</h3></a>
        </li>
    </ul>
    
    `;
    }
}

document.getElementById('menu-right-top').innerHTML = s2;

// Tinh nang tim kiem bai viet

function searchPhone(e) {

    e.preventDefault();


    let s3 = [];

    let searchBrand = document.getElementById("inlineFormInputGroupUsername").value;

    localStorage.setItem("searchKey", searchBrand);    

    for (let i = 0; i < listPost.length; i++) {
        const element = listPost[i];
        let phoneName = element.title;
        if (phoneName.toLowerCase().includes(searchBrand.toLowerCase())) {
            s3.push(element);
        } 
    }
        

    if (s3.length > 0) {
            
        localStorage.setItem('searchList', JSON.stringify(s3));
    
        window.location.href = "search_result.html";
    }

}
