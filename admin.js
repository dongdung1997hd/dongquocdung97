// ADMIN cho trang đầu tiên

function reviewPost() {
    return {
        'title': '',
        'headline': '',
        'imageURLHeadline': '',
        'imageURLContent': '',
        'code': '',
        'content': '',
        'date': (new Date()).toLocaleDateString('en-US'),
    }
};

// Data Test

let posts = [];
let post1 = reviewPost();
post1.title = "Đánh giá chi tiết Samsung Galaxy S10e: Nhỏ nhưng tinh thông võ nghệ!";
post1.headline = "Cũng từ rất lâu rồi, sau cuộc chạy đua về cấu hình và kích thước màn hình, một chiếc smartphone nhỏ gọn nhưng hội tụ đủ những công nghệ đỉnh cao mới xuất hiện. Đó chính là Samsung Galaxy S10e.";
post1.content = "Chiến lược kinh doanh của Samsung trong năm thứ 10 phát triển dòng smartphone Galaxy thật đặc biệt. Không chỉ có 2 biến thể Galaxy S10, Samsung còn bổ sung thêm một thiết bị nhỏ gọn hơn, mang trong mình những công nghệ tốt nhất nhằm phục vụ cho nhu cầu ngày càng đa dạng của người dùng. Không phải ai cũng có bàn tay đủ lớn để cầm chiếc Galaxy S10+ hay không phải ai cũng có đủ tiền để sở hữu Galaxy S10, đáp ứng được cả hai thắc đó, Samsung đã đưa ra Galaxy S10e – siêu phẩm nhỏ gọn giữa những gã khổng lồ của phân khúc cao cấp. Sau 10 ngày trải nghiệm, người viết cần phải khẳng định Galaxy S10e là smartphone cao cấp đáng mua nhất hiện nay và bạn sẽ trải nghiệm được sự khác biệt ngay trong lòng bàn tay.";
post1.imageURLHeadline = "S10e.jpg";
post1.imageURLContent = "S10eBig.jpg";
post1.code = "P1";
posts.push(post1);


let post2 = reviewPost();
post2.title = "iPhone XR giảm giá chỉ còn 6,6 triệu đồng tại thị trường Việt Nam";
post2.headline = "Trên một số trang rao vặt, iPhone XR phiên bản quốc tế đã qua sử dụng được rao bán với giá 10,7 triệu đồng, còn bản khoá mạng (lock) cũ giảm còn 6,6 triệu đồng.";
post2.content = "Chiến lược kinh doanh của Samsung trong năm thứ 10 phát triển dòng smartphone Galaxy thật đặc biệt. Không chỉ có 2 biến thể Galaxy S10, Samsung còn bổ sung thêm một thiết bị nhỏ gọn hơn, mang trong mình những công nghệ tốt nhất nhằm phục vụ cho nhu cầu ngày càng đa dạng của người dùng. Không phải ai cũng có bàn tay đủ lớn để cầm chiếc Galaxy S10+ hay không phải ai cũng có đủ tiền để sở hữu Galaxy S10, đáp ứng được cả hai thắc đó, Samsung đã đưa ra Galaxy S10e – siêu phẩm nhỏ gọn giữa những gã khổng lồ của phân khúc cao cấp. Sau 10 ngày trải nghiệm, người viết cần phải khẳng định Galaxy S10e là smartphone cao cấp đáng mua nhất hiện nay và bạn sẽ trải nghiệm được sự khác biệt ngay trong lòng bàn tay.";
post2.imageURLHeadline = "iPhoneXR.jpg";
post2.imageURLContent = "iPhoneXRBig.jpg";
post2.code = "P2";
posts.push(post2);

// Get comment from local Storage

let listComment = JSON.parse(localStorage.getItem("listComment"));

function userComment() {
    
    let s2 = [];

    for (let i = 0; i < listComment.length; i++) {
        const element = listComment[i];
        s2.push(element.userComment);
    }
    return s2;
}



function displayListPost(listPost) {



    let body = document.getElementById("list-content");

    let s = '';


    for (let i = 0; i < listPost.length; i++) {

        const post = listPost[i];
        let comment = userComment();
             
        let tr = `
            <tr>

            <td>
            <button class="btn btn-success" onclick="editPost('${post.code}');" data-toggle="modal" data-target="#editPost">Edit</button>
            <button class="btn btn-warning" onclick="deletePost('${post.code}');">Delete</button>
            </td>
            
                <td>${i+1}</td>
                <td>${post.code}</td>
                <td>${post.date}</td>
                <td>${post.title}</td>
                <td>${post.imageURLHeadline}</td>
                <td>${post.imageURLContent}</td>
                <td>${cutContent(post.headline)}</td>
                <td>${cutContent(post.content)}</td>
                <td>${comment[i]}</td>
               
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
    newPost.title = document.getElementById("postTitle").value;
    newPost.imageURLHeadline = document.getElementById("postImage").value;
    newPost.imageURLContent = document.getElementById("postImageContent").value;
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
    document.getElementById('postEditTitle').value = currentPost.title;
    document.getElementById('postEditImage').value = currentPost.imageURLHeadline;
    document.getElementById('postEditImageContent').value = currentPost.imageURLContent;
    document.getElementById('postEditHeadline').value = currentPost.headline;
    document.getElementById('postEditContent').value = currentPost.content;

}

function savePost(e) {
    e.preventDefault();

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        let code = document.getElementById("postEditCode").value;

        if (post.code === code) {
            post.title = document.getElementById("postEditTitle").value;
            post.imageURLHeadline = document.getElementById("postEditImage").value;
            post.imageURLContent = document.getElementById("postEditImageContent").value;
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