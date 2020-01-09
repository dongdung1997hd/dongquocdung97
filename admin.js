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
        'cauhinh': '',
        'imageURLcauhinh': '',
        'imageURLContent2': '',
        'thietke': '',
        'imageURLthietke': '',
        'imageURLContent3': '',
        'hieunang': '',
        'imageURLhieunang': '',
        'imageURLContent4': '',
        'thoiluongpin': '',
        'imageURLthoiluongpin': '',
        'imageURLContent5': '',
        'video': '',
        'loiket': '',
        'author': '',
    }
};

// Data Test

let posts = [];
let post1 = reviewPost();
post1.code = "P1";
post1.title = "Đánh giá chi tiết Samsung Galaxy S10e: Nhỏ nhưng tinh thông võ nghệ!";
post1.imageURLHeadline = "https://media.techz.vn/media2019/upload/2019/04/08/image-1554719674-DSC06384.jpg";
post1.headline = "Cũng từ rất lâu rồi, sau cuộc chạy đua về cấu hình và kích thước màn hình, một chiếc smartphone nhỏ gọn nhưng hội tụ đủ những công nghệ đỉnh cao mới xuất hiện. Đó chính là Samsung Galaxy S10e.";
post1.imageURLContent = "https://media.techz.vn/media2019/upload/2019/04/08/image-1554719674-DSC06384.jpg";
post1.content = "Chiến lược kinh doanh của Samsung trong năm thứ 10 phát triển dòng smartphone Galaxy thật đặc biệt. Không chỉ có 2 biến thể Galaxy S10, Samsung còn bổ sung thêm một thiết bị nhỏ gọn hơn, mang trong mình những công nghệ tốt nhất nhằm phục vụ cho nhu cầu ngày càng đa dạng của người dùng. Không phải ai cũng có bàn tay đủ lớn để cầm chiếc Galaxy S10+ hay không phải ai cũng có đủ tiền để sở hữu Galaxy S10, đáp ứng được cả hai thắc đó, Samsung đã đưa ra Galaxy S10e – siêu phẩm nhỏ gọn giữa những gã khổng lồ của phân khúc cao cấp. Sau 10 ngày trải nghiệm, người viết cần phải khẳng định Galaxy S10e là smartphone cao cấp đáng mua nhất hiện nay và bạn sẽ trải nghiệm được sự khác biệt ngay trong lòng bàn tay.";
post1.cauhinh = "S10e sở hữu màn hình công nghệ Dynamic AMOLED độ phân giải 2.280 x 1.080 pixel với mật độ điểm ảnh 438 ppi. So với màn hình HD hay HD+ trên iPhone 8 / XR thì S10e thể hiện độ sắc nét chi tiết hơn, khả năng cân bằng màu có thể được tuỳ chỉnh trong Settings dễ dàng. Samsung ưu ái cho S10e công nghệ màn hình tương tự các dòng S10 khác, trừ kiểu dáng cong tràn cạnh. Máy được thiết kế 3 cạnh rất đồng đều, chỉ có cằm dưới là hơi dày một chút nhưng vẫn đem lại cảm giác cao cấp, khác biệt so với các dòng máy tầm trung";
post1.imageURLcauhinh = "https://photo2.tinhte.vn/data/attachment-files/2019/02/4572748_tinhte_samsung_galaxy_s10e_19.jpg";
post1.imageURLContent2 = "https://photo2.tinhte.vn/data/attachment-files/2019/04/4616130_S10e_TInhte_5.jpg";
post1.thietke = "Về cơ bản thiết kế máy tương tự kiểu dáng điện thoại hiện nay với viền bo tròn, hai mặt kính. Trong đó phần mép nằm giữa kính mặt trước và viền kim loại được hoàn thiện tốt, không bị lồi lên nhiều giúp việc vuốt các lệnh ở cạnh màn hình được thoải mái.";
post1.imageURLthietke = "https://photo2.tinhte.vn/data/attachment-files/2019/04/4616128_S10e_TInhte_7.jpg";
post1.imageURLContent3 = "https://photo2.tinhte.vn/data/attachment-files/2019/04/4616132_S10e_TInhte_3.jpg";
post1.hieunang = "Chất lượng âm thanh của hai loa rất mạnh mẽ và rõ ràng. Tuy nhiên, có một điểm trừ là khi người dùng tăng âm lượng lên tối đa, âm thanh sẽ khiến cho khung điện thoại rung lên gây cảm giác khó chịu. Ngoài ra, Galaxy S10e vẫn hỗ trợ tai nghe 3.5mm và có tai nghe AKG đi kèm trong bộ sản phẩm.";
post1.imageURLhieunang = "https://cdn.tgdd.vn/Files/2019/03/08/1153563/5_800x450.jpg";
post1.imageURLContent4 = "https://cdn.tgdd.vn/Files/2019/03/08/1153563/6_800x450.jpg";
post1.thoiluongpin = "Điện thoại được trang bị pin dung lượng 3.100 mAh, khá lớn khi so với kích thước nhỏ gọn của Galaxy S10e. Máy có thể sẽ bị nóng khi thực hiện nhiều tác vụ cùng lúc.";
post1.imageURLthoiluongpin = "https://cdn.tgdd.vn/Files/2019/03/08/1153563/7_800x450.jpg";
post1.imageURLContent5 = "https://cdn.tgdd.vn/Files/2019/03/08/1153563/3_800x450.jpg";
post1.video = "https://www.youtube.com/watch?v=NAa9J7hexo0&t=2m57s";
post1.loiket = "Samsung Galaxy S10e không chỉ là flagship giá rẻ mà điện thoại còn phù hợp với nhu cầu của những đối tượng người dùng khác nhau. Mặc dù Galaxy S10e đang được so sánh rất nhiều với iPhone XR nhưng sự thực thì tiềm năng của điện thoại còn lớn hơn vậy.";
post1.author = "HDH TEAM";
posts.push(post1);


let post2 = reviewPost();
post2.title = "iPhone XR giảm giá chỉ còn 6,6 triệu đồng tại thị trường Việt Nam";
post2.headline = "Trên một số trang rao vặt, iPhone XR phiên bản quốc tế đã qua sử dụng được rao bán với giá 10,7 triệu đồng, còn bản khoá mạng (lock) cũ giảm còn 6,6 triệu đồng.";
post2.content = "Dạo qua một số trang rao vặt có thể thấy rất nhiều tin rao bán iPhone XR lock với giá chỉ từ 6,6 triệu đồng. Tuy nhiên, đây là hàng đã qua sử dụng và không kèm hộp, phụ kiện đầy đủ. Riêng bản quốc tế, iPhone XR được rao bán với mức giá cao hơn là 10,7 triệu đồng. Khi kích vào thông tin thì hầu hết những máy này đều đã qua sử dụng nhưng còn khá mới. Đa số iPhone XR lock được rao bán trên thị trường đều đến từ nhà mạng của Nhật Bản. Điều này đồng nghĩa với việc máy không thể tắt âm khi chụp ảnh. Đây là điều bất tiện nhất của người dùng khi sử dụng iPhone XR.";
post2.imageURLHeadline = "https://vcdn-sohoa.vnecdn.net/2018/11/22/iphone-xr-1394-1542890262.jpg";
post2.imageURLContent = "https://vcdn-sohoa.vnecdn.net/2018/11/22/iphone-xr-1394-1542890262.jpg";
post2.code = "P2";
post2.cauhinh = "Nhìn chung, iPhone XR sẽ là một trong những sản phẩm xứng đáng trong phân khúc giá 23 triệu đồng. Với mức giá 23 triệu đồng, chúng ta sẽ có những gì? Một thiết kế đẹp không kém cạnh gì so với iPhone Xs, một cấu hình mạnh mẽ nhất với con chip A12 7nm mới đảm bảo cho tất cả các thiết bị Android khác “hít khói”, một thời lượng sử dụng pin ấn tượng hơn cả iPhone Xs Max hay là một camera tốt vẫn có khả năng chụp xóa phông mặc dù chỉ là camera đơn… iPhone XR sẽ là một chiếc smartphone đáng để nâng cấp cho những người dùng hiện tại đang sở hữu iPhone 7/8 Plus hay các thiết bị iPhone cũ khác, còn với người dùng iPhone X, nếu bạn không cần một hiệu năng tốt hơn thì iPhone XR có lẽ không hẳn là một lựa chọn hợp l";
post2.imageURLcauhinh = "https://cellphones.com.vn/sforum/wp-content/uploads/2018/10/IMG_3705-960x640.jpg";


post2.imageURLContent2 = "https://cellphones.com.vn/sforum/wp-content/uploads/2018/10/IMG_3753-960x640.jpg";
post2.thietke = "Điểm khác biệt là Apple không dùng chất liệu thép không gỉ cho bộ khung viền của iPhone XR, mà chỉ sử dụng chất liệu nhôm Series 7000 giống với thế hệ iPhone 8 hay iPhone 8 Plus. Tuy vậy thì điều này không ảnh hưởng quá nhiều tới độ bền của máy.";
post2.imageURLthietke = "https://cellphones.com.vn/sforum/wp-content/uploads/2018/10/IMG_3642.jpg";
post2.imageURLContent3 = "https://cellphones.com.vn/sforum/wp-content/uploads/2018/10/IMG_3680-960x640.jpg";
post2.hieunang = "Mặt trước của iPhone XR sẽ là một màn hình 6.1 inch sử dụng tấm nền LCD với độ phân giải HD+ (828 x 1792). Màn hình này thực chất có mật độ điểm ảnh được giữ nguyên là 326ppi giống như trên các thiết bị iPhone trước đây như iPhone 6, 6S, 7 hay 8. Độ sắc nét của màn hình iPhone XR không quá cao nhưng cũng không quá thấp. ";
post2.imageURLhieunang = "https://cellphones.com.vn/sforum/wp-content/uploads/2018/10/IMG_3672-960x640.jpg";
post2.imageURLContent4 = "https://cellphones.com.vn/sforum/wp-content/uploads/2018/10/IMG_3661.jpg";
post2.thoiluongpin = "Thời lượng pin của iPhone XR tốt hơn iPhone X kha khá. Trong trường hợp sử dụng của mình với cường độ sử dụng như nhau, thì từ sáng đến tối đi làm về X còn khoảng 20% và XR còn khoảng 40%. Chi tiết onscreen như thế nào thì các bạn đón xem bài đánh giá pin của Tinh Tế nhé.";
post2.imageURLthoiluongpin = "https://photo2.tinhte.vn/data/attachment-files/2018/11/4484306_Cover.jpg";
post2.imageURLContent5 = "https://photo2.tinhte.vn/data/attachment-files/2019/07/4706177_646480B0-3BC4-4EAC-87C9-FCDD4C6D908D.jpeg";
post2.video = "https://www.youtube.com/watch?v=RMWGJgFCqK0";
post2.loiket = "iPhone XR sẽ được Apple phân phối chính hãng tại thị trường Việt Nam kể từ ngày 2/11 tới đây với đầy đủ các tùy chọn màu sắc bao gồm cả phiên bản màu đặc biệt Product RED. Mức giá cụ thể cho phiên bản mã VN/A sẽ là 22.990.000 đồng. Người dùng ngay bây giờ đã có thể đặt trước máy tại CellphoneS để nhận được các phần quà hấp dẫn như đế sạc không dây Anker 10W, gói bảo hành 2 năm và cơ hội trả góp lãi suất 0%. Chi tiết về sản phẩm iPhone XR bạn đọc có thể truy cập tại đường dẫn dưới đây.";
post2.author = "HDH TEAM";
posts.push(post2);


function displayListPost(listPost) {

    let body = document.getElementById("list-content");

    let s = '';

    for (let i = 0; i < listPost.length; i++) {

        const post = listPost[i];
             
        let tr = `
            <tr>

            <td>
            <button class="btn btn-info" onclick="editPost('${post.code}');" data-toggle="modal" data-target="#editPost">Edit</button>
            <button class="btn btn-danger" onclick="deletePost('${post.code}');">Delete</button>
            </td>
            
                <td>${i+1}</td>
                <td>${post.code}</td>
                <td>${post.date}</td>
                <td>${post.title}</td>
                <td>${cutContent2(post.imageURLHeadline)}</td>
                <td>${cutContent2(post.imageURLContent)}</td>
                <td>${cutContent(post.headline)}</td>
                <td>${cutContent(post.content)}</td>
                <td>${cutContent(post.cauhinh)}</td>
                <td>${cutContent2(post.imageURLcauhinh)}</td>
                <td>${cutContent2(post.imageURLContent2)}</td>
                <td>${cutContent(post.thietke)}</td>
                <td>${cutContent2(post.imageURLthietke)}</td>
                <td>${cutContent2(post.imageURLContent3)}</td>
                <td>${cutContent(post.hieunang)}</td>
                <td>${cutContent2(post.imageURLhieunang)}</td>
                <td>${cutContent2(post.imageURLContent4)}</td>
                <td>${cutContent(post.thoiluongpin)}</td>
                <td>${cutContent2(post.imageURLthoiluongpin)}</td>
                <td>${cutContent2(post.imageURLContent5)}</td>
                <td>${cutContent2(post.video)}</td>
                <td>${cutContent(post.loiket)}</td>
                <td>${post.author}</td>
               
            </tr>`;

        s += tr;
    }

    body.innerHTML = s;
}



displayListPost(posts);

function cutContent(content) {
    if (content.length > 30) {
        return content.substring(0, 30) + "...";
    }
    return content;
}

function cutContent2(content) {

    if (content.split("").length > 10) {
        return content.substring(0, 10) + "...";
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
    newPost.cauhinh = document.getElementById("postCauhinh").value;
    newPost.imageURLcauhinh = document.getElementById("postImage2").value;
    newPost.imageURLContent2 = document.getElementById("postImageContent2").value;
    newPost.thietke = document.getElementById("postThietke").value;
    newPost.imageURLthietke = document.getElementById("postImage3").value;
    newPost.imageURLContent3 = document.getElementById("postImageContent3").value;
    newPost.hieunang = document.getElementById("postHieunang").value;
    newPost.imageURLhieunang = document.getElementById("postImage4").value;
    newPost.imageURLContent4 = document.getElementById("postImageContent4").value;
    newPost.thoiluongpin = document.getElementById("postThoiluongpin").value;
    newPost.imageURLthoiluongpin = document.getElementById("postImage5").value;
    newPost.imageURLContent5 = document.getElementById("postImageContent5").value;
    newPost.video = document.getElementById("postVideo").value;
    newPost.loiket = document.getElementById("postLoiket").value;
    newPost.author = document.getElementById('postAuthor').value;
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
    document.getElementById('postEditCauhinh').value = currentPost.cauhinh;
    document.getElementById('postEditImage2').value = currentPost.imageURLcauhinh;
    document.getElementById('postEditImageContent2').value = currentPost.imageURLContent2;
    document.getElementById('postEditThietke').value = currentPost.thietke;
    document.getElementById('postEditImage3').value = currentPost.imageURLthietke;
    document.getElementById('postEditImageContent3').value = currentPost.imageURLContent3;
    document.getElementById('postEditHieunang').value = currentPost.hieunang;
    document.getElementById('postEditImage4').value = currentPost.imageURLhieunang;
    document.getElementById('postEditImageContent4').value = currentPost.imageURLContent4;
    document.getElementById('postEditThoiluongpin').value = currentPost.thoiluongpin;
    document.getElementById('postEditImage5').value = currentPost.imageURLthoiluongpin;
    document.getElementById('postEditImageContent5').value = currentPost.imageURLContent5;
    document.getElementById('postEditVideo').value = currentPost.video;
    document.getElementById('postEditLoiket').value = currentPost.loiket;
    document.getElementById('postEditAuthor').value = currentPost.author;

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
            post.cauhinh = document.getElementById("postEditCauhinh").value;
            post.imageURLcauhinh = document.getElementById("postEditImage2").value;
            post.imageURLContent2 = document.getElementById("postEditImageContent2").value;
            post.thietke = document.getElementById("postEditThietke").value;
            post.imageURLthietke = document.getElementById("postEditImage3").value;
            post.imageURLContent3 = document.getElementById("postEditImageContent3").value;
            post.hieunang = document.getElementById("postEditHieunang").value;
            post.imageURLhieunang = document.getElementById("postEditImage4").value;
            post.imageURLContent4 = document.getElementById("postEditImageContent4").value;
            post.thoiluongpin = document.getElementById("postEditThoiluongpin").value;
            post.imageURLthoiluongpin = document.getElementById("postEditImage5").value;
            post.imageURLContent5 = document.getElementById("postEditImageContent5").value;
            post.video = document.getElementById("postEditVideo").value;
            post.loiket = document.getElementById("postEditLoiket").value;
            post.author = document.getElementById("postEditAuthor").value;
           
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