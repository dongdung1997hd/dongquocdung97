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







