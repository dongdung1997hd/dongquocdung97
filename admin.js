// ADMIN cho trang đầu tiên

function reviewPost() {
    return {
        'title': '',
        'headline': '',
        'imageURL': '',
        'code': '',
        'content': '',
        'date': (new Date()).toLocaleDateString('en-US'),
    }
};

// Data Test

let posts = [];
let post1 = reviewPost();
post1.title = "Đánh giá chi tiết điện thoại";
post1.headline = "Cũng từ rất lâu rồi, sau cuộc chạy đua về cấu hình và kích thước màn hình, một chiếc smartphone nhỏ gọn nhưng hội tụ đủ những công nghệ đỉnh cao mới xuất hiện. Đó chính là Samsung Galaxy S10e.";
post1.content = "Cũng từ rất lâu rồi, sau cuộc chạy đua về cấu hình và kích thước màn hình, một chiếc smartphone nhỏ gọn nhưng hội tụ đủ những công nghệ đỉnh cao mới xuất hiện. Đó chính là Samsung Galaxy S10e.";
post1.imageURL = "iPhoneXR.jpg";
post1.code = "P1";
posts.push(post1);





function displayListPost(listPost) {
    let body = document.getElementById("list-content");

    let s = '';

    for (let i = 0; i < listPost.length; i++) {
        const post = listPost[i];

        let tr = `
            <tr>
                <td>${i+1}</td>
                <td>${post.code}</td>
                <td>${post.date}</td>
                <td>${post.title}</td>
                <td>${post.imageURL}</td>
                <td>${cutContent(post.headline)}</td>
                <td>${cutContent(post.content)}</td>

                <td>
                <button class="btn btn-success" onclick="editPost('${post.code}');" data-toggle="modal" data-target="#editPost">Edit</button>
                <button class="btn btn-warning" onclick="deletePost('${post.code}');">Delete</button>
                </td>
               
            </tr>`;


        s += tr;
    }

    body.innerHTML = s;
}

displayListPost(posts);

function cutContent(content) {
    if (content.length > 50) {
        return content.substring(0, 50) + "...";
    }
    return content;
}


function addPost(e) {

    e.preventDefault();

    let newPost = reviewPost();

    newPost.code = document.getElementById("postCode").value;
    // newPost.date = document.getElementById("postDate").value;
    newPost.title = document.getElementById("postTitle").value;
    newPost.imageURL = document.getElementById("postImage").value;
    newPost.headline = document.getElementById("postHeadline").value;
    newPost.content = document.getElementById("postContent").value;


    posts.push(newPost);

    displayListPost(posts);

    document.getElementById("frmNewPost").reset();
    $("#addPost").modal('hide');

    localStorage.setItem('listPost', JSON.stringify(posts));

}

function editPost(code) {

    let currentPost;
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        if (post.code === code) {
            currentPost = post;

            break;
        }
    }

    document.getElementById('postEditCode').value = currentPost.code;
    // document.getElementById('postEditDate').value = currentPost.date;
    document.getElementById('postEditTitle').value = currentPost.title;
    document.getElementById('postEditImage').value = currentPost.imageURL;
    document.getElementById('postEditHeadline').value = currentPost.headline;
    document.getElementById('postEditContent').value = currentPost.content;

}

function savePost(e) {
    e.preventDefault();

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        let code = document.getElementById("postEditCode").value;

        if (post.code === code) {
            // post.date = document.getElementById("postEditDate").value;
            post.title = document.getElementById("postEditTitle").value;
            post.imageURL = document.getElementById("postEditImage").value;
            post.headline = document.getElementById("postEditHeadline").value;
            post.content = document.getElementById("postEditContent").value;

            break;
        }
    }

    displayListPost(posts);

    document.getElementById("frmEditPost").reset();
    $("#editPost").modal('hide');

    localStorage.setItem('listPost', JSON.stringify(posts));

}

function deletePost(code) {

    if (confirm("Do you want to delete?")) {

        for (let i = 0; i < posts.length; i++) {
            const post = posts[i];
            if (post.code === code) {
                posts.splice(i, 1)
                break;
            }
        }
    }
    displayListPost(posts);

    localStorage.setItem('listPost', JSON.stringify(posts));

}


// lưu dữ liệu mẫu vào localstorage.
let isExist = localStorage.getItem("listPost");
if (!isExist) {
    localStorage.setItem('listPost', JSON.stringify(posts));
}

