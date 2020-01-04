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
document.getElementById('date').innerHTML = `bởi Admin ngày ${post.date}`;

