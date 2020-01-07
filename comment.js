function comment() {
    return {
        'userComment': '',
    }
};

let comments = [];

// Sample Data

let comment1 = comment();
comment1.userComment = "Test 1";
comments.push(comment1);


// Add comment

function addComment(e) {

    e.preventDefault();
    let listPost = JSON.parse(localStorage.getItem("listPost"));

    let selectedPost = localStorage.getItem("selectedPost");


    let newComment = comment();


    for (let i = 0; i < listPost.length; i++) {
        const element = listPost[i];
        if (element.title === selectedPost) {
            newComment.userComment = document.getElementById("comment").value;
            comments[i] = newComment;
            localStorage.setItem('listComment', JSON.stringify(comments));
        }
      }
    
    //   comments.push(newComment);          

    document.getElementById("frmNewComment").reset();

    localStorage.setItem('listComment', JSON.stringify(comments));
}

// save data to local storage

let isExistComment = localStorage.getItem("listComment");
if (!isExistComment) {
    localStorage.setItem('listComment', JSON.stringify(comments));
}
console.log(comments);
