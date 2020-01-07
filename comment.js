function comment() {
    return {
        'userComment': '',
    }
};

let comments = [];

// Sample Data

let comment1 = comment();
comment1.userComment = "Test Comment 1";
comments.push(comment1);

let comment2 = comment();
comment2.userComment = "Test Comment 2";
comments.push(comment2);

let comment3 = comment();
comment3.userComment = "Test Comment 3";
comments.push(comment3);


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
        }
      }
    
    document.getElementById("frmNewComment").reset();

    localStorage.setItem('listComment', JSON.stringify(comments));
}

// save data to local storage

let isExistComment = localStorage.getItem("listComment");
if (!isExistComment) {
    localStorage.setItem('listComment', JSON.stringify(comments));
}


/////////////////////////

// let savedCommentArray2 = [];

// function userComment() {

//     let savedCommentArray2 = JSON.parse(localStorage.getItem("listComment"));


//     for (let i = 0; i < comments.length; i++) {
//         const comment = comments[i];
//         if (savedCommentArray2[i] !== comment) {
//             savedCommentArray2[i] === comment;
//         }
//     }

//     return savedCommentArray2;

// }

// displayComment = userComment();
// console.log(displayComment);