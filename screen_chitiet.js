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
document.getElementById('date').innerHTML = `Đăng bởi Admin ngày ${post.date}`;
document.getElementById('image').innerHTML = ` 
<div>
    <img src="images/${post.imageURLContent}" width="100%"/>

</div>  
`;


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






