
// Get data from local Storage

let listPost = JSON.parse(localStorage.getItem("listPost"));

// Display on HTML file

let s = '';

for (let i = 0; i < listPost.length; i++) {
    const element = listPost[i];
    s += `
    
    <ul>
                    <li>
                        <img src="images/${element.imageURLHeadline}" />
                        <a href="#" onclick="goToPostDetail('${element.title}')"><h2>${element.title}</h2></a>
                        ${element.headline}
                    </li>
                </ul>
    
    `;
}

document.getElementById('left').innerHTML = s;

// Click on title, jump to post detail 

function goToPostDetail(title) {
    localStorage.setItem("selectedPost", title);
    window.location.href = "screen_chitiet.html";
}

// window.onscroll = function() {myFunction()};

// var relative = document.getElementById("relative");
// var sticky = relative.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     relative.classList.add("sticky")
//   } else {
//     relative.classList.remove("sticky");
//   }
// }