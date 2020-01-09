// Get post content

let listPost = JSON.parse(localStorage.getItem("listPost"));

let selectedPost = localStorage.getItem("selectedPost");

let post;
for (let i = 0; i < listPost.length; i++) {
  const element = listPost[i];
  if (element.title === selectedPost) {
    post = element;
    break;
  }
}

document.getElementById('title').innerHTML = post.title;
document.getElementById('content').innerHTML = post.content;
document.getElementById('date').innerHTML = `By ${post.author} - ${post.date}`;
document.getElementById('thietke').innerHTML = post.thietke;
document.getElementById('hieunang').innerHTML = post.hieunang;
document.getElementById('thoiluongpin').innerHTML = post.thoiluongpin;
document.getElementById('video').innerHTML = post.video;
document.getElementById('loiket').innerHTML = post.loiket;
// document.getElementById('author').innerHTML = post.author;
document.getElementById('imageURLContent').innerHTML = ` 
<div>
    <img src="${post.imageURLContent}" width="100%"/>

</div>  
`;
document.getElementById('imageURLcauhinh').innerHTML = ` 
<div>
    <img src="${post.imageURLcauhinh}" width="100%"/>

</div>  
`;
document.getElementById('imageURLContent2').innerHTML = ` 
<div>
    <img src="${post.imageURLContent2}" width="100%"/>

</div>  
`;
document.getElementById('imageURLthietke').innerHTML = ` 
<div>
    <img src="${post.imageURLthietke}" width="100%"/>

</div>  
`;
document.getElementById('imageURLContent3').innerHTML = ` 
<div>
    <img src="${post.imageURLContent3}" width="100%"/>

</div>  
`;
document.getElementById('imageURLhieunang').innerHTML = ` 
<div>
    <img src="${post.imageURLhieunang}" width="100%"/>

</div>  
`;
document.getElementById('imageURLContent4').innerHTML = ` 
<div>
    <img src="${post.imageURLContent4}" width="100%"/>

</div>  
`;
document.getElementById('imageURLthoiluongpin').innerHTML = ` 
<div>
    <img src="${post.imageURLthoiluongpin}" width="100%"/>

</div>  
`;
document.getElementById('imageURLthoiluongpin').innerHTML = ` 
<div>
    <img src="${post.imageURLthoiluongpin}" width="100%"/>

</div>  
`;

// Bai viet moi nhat

let s2 = '';

for (let i = listPost.length -1 ; i >= 0; i--) {
  const element = listPost[i];

  if (i >= listPost.length - 2){
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
                
      localStorage.setItem('searchList', JSON.stringify(s3));
  
      window.location.href = "search_result.html";

}


function setObject(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}
function getObject(key) {
  var storage = window.localStorage,
      value = storage.getItem(key);
  return value && JSON.parse(value);
}
function clearStorage() {
  window.localStorage.clear();
}

function clearComment(){
  $('#txt1').val('');
  $('#namebox').val('');
  clearStorage();
}

function saveComment(){
  var cText = $('#txt1').val(),
      cName = $('#namebox').val(),
      cmtList = getObject('cmtlist');

  if (cmtList){
    cmtList.push({name: cName, text: cText});
    setObject('cmtlist', cmtList);
  }else{ 
    setObject('cmtlist', [{name: cName, text: cText}]);
  }

  bindCmt();
}

function bindCmt(){
  var cmtListElement = $('#cmtlist'),
      cmtList = getObject('cmtlist');

  cmtListElement.empty();
  $.each(cmtList, function(i, k){
    cmtListElement.append( $('<p><span>'+ k.name +'</span>'+ k.text +'</p>') );
  });
}

$(function(){
  bindCmt();
});

// Get rated star

function getRatedStar(click) {


    // let ratedStar = [];

  switch (click) {
    case document.getElementById("star-5").value:
        let ratingStar5 = document.getElementById("star-5").value;
        localStorage.setItem('ratedStar', ratingStar5);

        alert(ratingStar5);
        
      break;
    case document.getElementById("star-4").value:
        let ratingStar4 = document.getElementById("star-4").value;
        localStorage.setItem('ratedStar', ratingStar4);

      break;
    case document.getElementById("star-3").value:
        let ratingStar3 = document.getElementById("star-3").value;
        localStorage.setItem('ratedStar', ratingStar3);


      break;
    case document.getElementById("star-2").value:
        let ratingStar2 = document.getElementById("star-2").value;
        localStorage.setItem('ratedStar', ratingStar2);


      break;
    case document.getElementById("star-1").value:
        let ratingStar1 = document.getElementById("star-1").value;
        localStorage.setItem('ratedStar', ratingStar1);

      break;

  }

  // let ratingStar5 = document.getElementById("star-5").value;
  // let ratingStar4 = document.getElementById("star-4").value;
  // let ratingStar3 = document.getElementById("star-3").value;
  // let ratingStar2 = document.getElementById("star-2").value;
  // let ratingStar1 = document.getElementById("star-1").value;


  // ratedStar.push(ratingStar1);
  // ratedStar.push(ratingStar2);
  // ratedStar.push(ratingStar3);
  // ratedStar.push(ratingStar4);
  // ratedStar.push(ratingStar5);
 
  // localStorage.setItem('ratedStar', ratingStar5);
  // localStorage.setItem('ratedStar', ratingStar4);
  // localStorage.setItem('ratedStar', ratingStar3);
  // localStorage.setItem('ratedStar', ratingStar2);
  // localStorage.setItem('ratedStar', ratingStar1);

  // console.log(ratedStar);
}




