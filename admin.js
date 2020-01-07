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

let post3 = reviewPost();
post3.title = "Realme 5 Pro: Thiết kế đẹp, camera xịn, giá chỉ tầm trung";
post3.headline = "Realme 5 Pro là một trong những mẫu smartphone tầm trung đầu tiên được trang bị hệ thống 4 camera phía sau cùng họa tiết mặt lưng vô cùng ấn tượng.";
post3.content = "Chiến lược kinh doanh của Samsung trong năm thứ 10 phát triển dòng smartphone Galaxy thật đặc biệt. Không chỉ có 2 biến thể Galaxy S10, Samsung còn bổ sung thêm một thiết bị nhỏ gọn hơn, mang trong mình những công nghệ tốt nhất nhằm phục vụ cho nhu cầu ngày càng đa dạng của người dùng. Không phải ai cũng có bàn tay đủ lớn để cầm chiếc Galaxy S10+ hay không phải ai cũng có đủ tiền để sở hữu Galaxy S10, đáp ứng được cả hai thắc đó, Samsung đã đưa ra Galaxy S10e – siêu phẩm nhỏ gọn giữa những gã khổng lồ của phân khúc cao cấp. Sau 10 ngày trải nghiệm, người viết cần phải khẳng định Galaxy S10e là smartphone cao cấp đáng mua nhất hiện nay và bạn sẽ trải nghiệm được sự khác biệt ngay trong lòng bàn tay.";
post3.imageURLHeadline = "realme5pro.jpg";
post3.imageURLContent = "realme5proBig.jpg";
post3.code = "P3";
posts.push(post3);

let post4 = reviewPost();
post4.title = "Đánh giá Oppo F9: Khẳng định vị thế hàng đầu trong phân khúc 7 triệu đồng!";
post4.headline = "Oppo F9 là sản phẩm tầm trung hội tụ nhiều đặc tính hàng đầu của một thiết bị cao cấp với màn hình “giọt nước”, camera kép, sạc nhanh VOOC siêu tốc.";
post4.content = "Chiến lược kinh doanh của Samsung trong năm thứ 10 phát triển dòng smartphone Galaxy thật đặc biệt. Không chỉ có 2 biến thể Galaxy S10, Samsung còn bổ sung thêm một thiết bị nhỏ gọn hơn, mang trong mình những công nghệ tốt nhất nhằm phục vụ cho nhu cầu ngày càng đa dạng của người dùng. Không phải ai cũng có bàn tay đủ lớn để cầm chiếc Galaxy S10+ hay không phải ai cũng có đủ tiền để sở hữu Galaxy S10, đáp ứng được cả hai thắc đó, Samsung đã đưa ra Galaxy S10e – siêu phẩm nhỏ gọn giữa những gã khổng lồ của phân khúc cao cấp. Sau 10 ngày trải nghiệm, người viết cần phải khẳng định Galaxy S10e là smartphone cao cấp đáng mua nhất hiện nay và bạn sẽ trải nghiệm được sự khác biệt ngay trong lòng bàn tay.";
post4.imageURLHeadline = "oppof9.jpg";
post4.imageURLContent = "oppof9.jpg";
post4.code = "P4";
posts.push(post4);

let post5 = reviewPost();
post5.title = "Đánh giá chi tiết Honor 10 Lite: Smartphone giá rẻ hoàn hảo?";
post5.headline = "Một trong những smartphone hội tụ đủ yếu tổ nhanh, mạnh, màn hình tốt, camera tốt, thời lượng pin dài hơi, giá thành hấp dẫn đó chính là Honor 10 Lite.";
post5.content = "Chiến lược kinh doanh của Samsung trong năm thứ 10 phát triển dòng smartphone Galaxy thật đặc biệt. Không chỉ có 2 biến thể Galaxy S10, Samsung còn bổ sung thêm một thiết bị nhỏ gọn hơn, mang trong mình những công nghệ tốt nhất nhằm phục vụ cho nhu cầu ngày càng đa dạng của người dùng. Không phải ai cũng có bàn tay đủ lớn để cầm chiếc Galaxy S10+ hay không phải ai cũng có đủ tiền để sở hữu Galaxy S10, đáp ứng được cả hai thắc đó, Samsung đã đưa ra Galaxy S10e – siêu phẩm nhỏ gọn giữa những gã khổng lồ của phân khúc cao cấp. Sau 10 ngày trải nghiệm, người viết cần phải khẳng định Galaxy S10e là smartphone cao cấp đáng mua nhất hiện nay và bạn sẽ trải nghiệm được sự khác biệt ngay trong lòng bàn tay.";
post5.imageURLHeadline = "honor10.jpg";
post5.imageURLContent = "honor10.jpg";
post5.code = "P5";
posts.push(post5);


// Get comment from local Storage

let listComment = JSON.parse(localStorage.getItem("listComment"));

// Get initial comment array

let s2 = [];

for (let i = 0; i < listComment.length; i++) {
    const element = listComment[i];
    s2.push(element.userComment);
}

console.log(s2);


let savedCommentArray1 = [];
let savedCommentArray2 = [];


function userComment1() {


    for (let i = 0; i < s2.length; i++) {
        const element = s2[i];
        savedCommentArray1[i] = element;

    }

    // localStorage.setItem('savedComment1', JSON.stringify(savedCommentArray1));

    console.log(savedCommentArray1);

    return savedCommentArray1;

}

function userComment2() {
    let compareComment = userComment1();


<<<<<<< HEAD


function displayListPost(listPost) {
=======
    for (let i = 0; i < compareComment.length; i++) {
>>>>>>> 1d966ff8051e638cf7b2614d5f5ce3e93646622d

        if (compareComment[i] !== (savedCommentArray2[i])) {
            savedCommentArray2[i] = compareComment[i];

        }

    }

    saveCommentToStorage(savedCommentArray2);


    console.log(savedCommentArray2);

    return savedCommentArray2;

}

function saveCommentToStorage(com) {
    localStorage.setItem('savedComment2', JSON.stringify(com));

    let savedData = JSON.parse(localStorage.getItem("savedComment2"));

    return savedData;
}


function displayListPost(listPost) {

    let body = document.getElementById("list-content");

    let s = '';

    let savedComment = userComment2();

    let receivedComment = saveCommentToStorage(savedComment);

    for (let i = 0; i < listPost.length; i++) {

        const post = listPost[i];

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
                <td>${receivedComment[i]}</td>
               
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