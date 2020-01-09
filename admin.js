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
        'ratingStar': '',
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
post1.video = `<iframe width='560' height='315' src='https://www.youtube.com/embed/NAa9J7hexo0' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>`;
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
post2.video = `<iframe width='560' height='315' src='https://www.youtube.com/embed/RMWGJgFCqK0' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>`;
post2.loiket = "iPhone XR sẽ được Apple phân phối chính hãng tại thị trường Việt Nam kể từ ngày 2/11 tới đây với đầy đủ các tùy chọn màu sắc bao gồm cả phiên bản màu đặc biệt Product RED. Mức giá cụ thể cho phiên bản mã VN/A sẽ là 22.990.000 đồng. Người dùng ngay bây giờ đã có thể đặt trước máy tại CellphoneS để nhận được các phần quà hấp dẫn như đế sạc không dây Anker 10W, gói bảo hành 2 năm và cơ hội trả góp lãi suất 0%. Chi tiết về sản phẩm iPhone XR bạn đọc có thể truy cập tại đường dẫn dưới đây.";
post2.author = "HDH TEAM";
posts.push(post2);

let post3 = reviewPost();
post3.title = "Trên tay Sony Xperia 1: vẫn đầy chất riêng và khác biệt";
post3.headline = "Xperia 1 ra đời cho thấy Sony đã tìm đúng hướng đi mà họ muốn nhắm tới nhiều năm trước. Khi cầm trên tay Xperia 1, Sony vẫn cho thấy sản phẩm họ khác biệt so với phần còn lại của thế giới Android. Và nếu là một fan Sony thì chắc sản phẩm này sẽ giúp nhiều anh em thoả mãn và hạnh phúc hơn.";
post3.content = "Chiếc flagship mới của Sony đem đến sự khác biệt ngay khi nhìn vào đó là tỉ lệ màn hình 21:9. Giá trị của Sony cũng thể hiện ở bộ sưu tập vỏ màu pha trộn đặc sắc, cũng như mức độ hoàn thiện sản phẩm rất tốt, cảm giác cầm rất tự tin.";
post3.imageURLHeadline = "https://cdn.tgdd.vn/Files/2019/06/10/1172282/bomay_800x599.jpg";
post3.imageURLContent = "http://sonycenter.sony.com.vn/Data/Sites/1/Product/980/h2.jpg";
post3.code = "P3";
post3.cauhinh = "Về cấu hình phần cứng, Sony trang bị cho Xperia 1 nền tảng Snapdragon 855 dễ dàng đáp ứng nhu cầu sử dụng trong năm nay và một vài năm sắp tới. Sony cũng trang bị cho máy kết nối mạng 5G tốc độ cao. Rõ ràng là phần cứng cốt lỗi và kết nối mạng sẽ không bị lạc hậu.";
post3.imageURLcauhinh = "https://cdn.tgdd.vn/Products/Images/42/195747/sony-xperia-17.jpg";
post3.imageURLContent2 = "https://cdn.fptshop.com.vn/Uploads/Originals/2019/9/3/637031227780007729_sony-xperia-1-4.png";
post3.thietke = "Máy sở hữu một màn hình OLED 4K 6,5” rất ấn tượng, vì thế công nghệ trên Xperia 1 cũng không còn nằm dưới bất kỳ chiếc điện thoại nào cùng phân khúc khác. Về màu sắc, màn hình cũng đáp ứng tiêu chuẩn hiển thị HDR 10-bit nhờ vi xử lý X1 for mobile giống trên TV BRAVIA. Tỉ lệ 21:9 trên Xperia 1 không đơn thuần là trải nghiệm việc xem phim. Đối với mình tỉ lệ này giúp cho máy có hình dáng khác biệt hơn.";
post3.imageURLthietke = "https://cdn.tgdd.vn/Products/Images/42/195747/sony-xperia-1-400x460.png";
post3.imageURLContent3 = "https://vnreview.vn/image/19/11/58/1911581.jpg";
post3.hieunang ="Camera cũng được Sony đầu tư đầy đủ từ tiêu cự siêu rộng cho đến tiêu chuẩn hay tele, với 3 cảm biến đều có độ phân giải 12 MP. Sony không còn chạy theo độ phân giải khủng như những năm trước dù họ đang bán cảm biến lên đến 48 MP cho các thương hiệu điện thoại khác";
post3.imageURLhieunang = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAiHT5rpm4ETCJ8EFKUN3GXURYpPmfWgHCdVxxdYPFaWM5sU1z&s";
post3.imageURLContent4 ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWJaRrMdgSmFJI8KYZe_yGpF-jZNOrWv75Oj1MjinYhiG05UmU&s";
post3.thoiluongpin = "Cảm giác khi mình cầm thao tác trên chiếc máy này vẫn rất gọn với tay. Nó có phần nào đó gọn về chiều rộng hơn so với một số smartphone có màn hình tương tự khác.";
post3.imageURLthoiluongpin = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPij8i3aheQBxG9P9HSRsyYVusN3whmHy0FedMhusQZyWNBAPU&s";
post3.imageURLContent5 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp8v0PF3eSSlNEAXvuXPK8a_joFaAv7auJh49kwTqL_uUYFA8A&s";
post3.video = `<iframe width='560' height='315' src='https://www.youtube.com/embed/bqO08V4VDDM' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>`;
post3.loiket ="Có thể thấy, anh em fan Sony sẽ có được nhiều lợi ích nhất từ chiếc Xperia 1. Anh em có thể sở hữu nó để cảm thấy sự khác biệt và vượt trội hơn so với những chiếc điện thoại cùng phân khúc khác.";
post3.author = "HDH TEAM";
posts.push(post3);

let post4 = reviewPost();
post4.title = "Trên tay và đánh giá nhanh Huawei P30: Ngoài camera ngon rồi còn gì nữa?";
post4.headline = "Mặc dù Huawei P30 Pro là ngôi sao chính của đêm nay, nhưng với thiết kế giữ nguyên, giá bán thấp hơn và cấu hình ấn tượng của Huawei P30 cũng đủ làm nhiều bạn phải trầm trồ.";
post4.content = "Còn chần chờ gì nữa, ngay bây giờ cùng mình đánh giá nhanh thiết bị này nhé.";
post4.imageURLHeadline ="https://cdn.tgdd.vn/Products/Images/42/197228/huawei-p30-pro-1-600x600.jpg";
post4.imageURLContent = "https://cdn.fptshop.com.vn/Uploads/Originals/2019/3/27/636893071116127819_huawei-p30-den-1.png";
post4.code = "P4";
post4.cauhinh = "Thay vì sử dụng màn hình “tai thỏ” như năm ngoái, năm nay Huawei P30 được nâng cấp lên màn hình “giọt sương” và phần khuyết chỉ có một cái camera selfie vì vậy máy sẽ được nhiều diện tích hiển thị hơn. Đặc biệt, P30 sở hữu cảm biến vân tay dưới màn hình đây là cảm biến vân tay quang học khá nhạy.";
post4.imageURLcauhinh = "https://hoanghamobile.com/Uploads/Originals/2019/04/22/201904221109342320_P30-Pro-2.png;width=820;height=550;watermark=logo;crop=auto;format=jpg";
post4.imageURLContent2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0_Kt-kjIZJUpqlzPmpn6kxvHgywBh4AVuRCsEdvTEEwavWS7P&s";
post4.thietke = "Huawei P30 được trang bị màn hình 6.1 inch Full HD+ OLED, có tỷ lệ 19.5:9 và có viền màn hình siêu mỏng. Nhờ viền mỏng này, thiết bị có kích thước khá nhỏ so với iPhone Xr. ";
post4.imageURLthietke = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Prm56aumqN-tUzrzm0lSq_hb6w3pQelobv768KpJyu7I7cmn&s";
post4.imageURLContent3 = "https://abbelectronics.us/EbayTemplate2018/img/debb9bf225a613d01090aa9d8bb058f3.jpg";
post4.hieunang = "Sức mạnh phần cứng trên Huawei P30 được cung cấp bởi vi xử lý Kirin 980 đi kèm với các tùy chọn 6 GB RAM / 128 GB ROM, 8 GB RAM / 64 GB ROM, 8 GB RAM / 128 GB ROM và 8 GB RAM / 256 GB ROM (hỗ trợ thẻ nhớ mở rộng)";
post4.imageURLhieunang = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Q1ESjqK1Gw1U0WT64sMvsBNjboe9LE8nT0b7hduJHmUqXfD8&s";
post4.imageURLContent4 = "https://i.ebayimg.com/images/g/B1EAAOSwTHlcmy1A/s-l300.jpg";
post4.thoiluongpin = "Máy sẽ chạy Android 9 Pie với EMUI 9.1 và xuất xưởng cùng viên pin dung lượng ổn 3.650 mAh cùng khả năng sạc nhanh.";
post4.imageURLthoiluongpin = "https://images-na.ssl-images-amazon.com/images/I/51JtGY2yooL._SX569_.jpg";
post4.imageURLContent5 = "https://i.ebayimg.com/images/g/B1EAAOSwTHlcmy1A/s-l300.jpg";
post4.video = `<iframe width='560' height='315' src='https://www.youtube.com/embed/fIr0E3cRNo8' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>`;
post4.loiket = "Huawei P30 khi bán ra sẽ có những màu sắc như Amber Sunrise, Breat Breath Crystal, Pearl White, Aurora và Black có hiệu ứng đổi màu khá đẹp mắt khi nghiêng ở các góc nhìn khác nhau.";
post4.author = "HDH TEAM";
posts.push(post4);

let post5 = reviewPost();
post5.title = "Smartphone cao cấp nhất của VinSmart lộ diện: Camera 48 vân tay dưới màn hình";
post5.headline = "Dù chưa được công bố chính thức, song thông tin về thế hệ smartphone cao cấp nhất trong số 4 chiếc máy mà Vingroup sẽ giới thiệu trong thời gian sắp tới đã được các đại lý bán lẻ  để lộ.";
post5.content = "Mới đây, trang mua sắm thương mại điện tử của Vingroup là Adayroi vừa mới công bố sản phẩm mới của mình là chiếc Vsmart Live.";
post5.imageURLHeadline = "https://icdn.dantri.com.vn/thumb_w/640/2019/08/06/vsmart-live-1565055954929.png";
post5.imageURLContent = "https://cdn.vietnammoi.vn/stores/news_dataimages/hangnt/122018/14/22/2947_2.Vsmart_Active1_13_2.jpg";
post5.code = "P5"
post5.cauhinh = "Cùng với đó, Vsmart Live sẽ có mặt lưng có màu gradient bắt mắt, với điểm nhấn là cụm 3 camera thời thượng, với độ phân giải lên tới 48  gồm cảm biến chính, cảm biến góc rộng.";
post5.imageURLcauhinh = "https://vcdn-sohoa.vnecdn.net/2018/12/13/a11-4977-1544696676.jpg";
post5.imageURLContent2 = "http://congly.vn/data/news/2018/12/13/4-dien-thoai-cua-vinsmart-lo-cau-hinh-truoc-ngay-ra-mat.jpg";
post5.thietke = "Thông qua hình ảnh được hé lộ, có thể thấy rằng máy sử dụng thiết kế tràn viền theo xu hướng của nhiều smartphone cao cấp hiện nay, không điểm khuyết, không tai thỏ hay lỗ đục. Để làm được điều này, cụm camera selfie và loa thoại của máy sẽ được đặt ở cạnh viền rất mỏng bên trên.";
post5.imageURLthietke = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScsBs3V3KPEfA_pMNvIP0Sa-GP1vzBYNklbWfQHJO48N1xYHI-&s";
post5.imageURLContent3 = "https://ircdn.vingroup.net/storage/public/2019/07/anh%204%20dt-20190724T015754046767.jpg";
post5.hieunang = "Mặc dù là sản phẩm cao nhất từ trước tới nay, nhưng Vsmart Live vẫn là một chiếc máy thuộc phân khúc tầm trung, sở hữu nhiều ưu điểm vượt trội như hiệu năng mạnh mẽ, cụm 3 camera hiện đại, vân tay dưới màn hình";
post5.imageURLhieunang = "https://media.doisongphapluat.com/601/2018/12/14/Vsmart-chinh-thuc-ra-mat-4-smartphone-gia-tu-25-trieu-dong-cau-hinh-cuc-khung-01.jpg";
post5.imageURLContent4 = "http://nguoivietdunghangviet.vn/upload/hang-viet/vinsmart.jpg";
post5.thoiluongpin = "Máy sẽ có dung lượng pin là 4,000mAh cùng khả năng sạc nhanh QuickCharge có lẽ là 3.0 tương tự thế hệ trước thông qua cổng kết nối USB-C.";
post5.imageURLthoiluongpin = "https://cdn.didongthongminh.vn/upload_images/2018/12/dien-thoai-vsmart-2-1.jpg";
post5.imageURLContent5 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKBM8wHTIbufRXNnpXFiFBINBKv79yH7jiUwNWULWswZeUNFQ0&s";
post5.video = `<iframe width="560" height="315" src="https://www.youtube.com/embed/BS2nehXhP_E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
post5.loiket = "Hiện tại, dự kiến rằng Vsmart Live sẽ được giới thiệu vào đầu tháng 8 này và theo như các trang thương mại điện tử lớn tại Việt Nam, máy sẽ được bán ra trong khoảng từ ngày 9-10";
post5.author = "HDH TEAM";
posts.push(post5);


// Get star rated

let ratedStar = localStorage.getItem('ratedStar');


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
                <td>${post.video}</td>
                <td>${cutContent(post.loiket)}</td>
                <td>${post.author}</td>
                <td>${ratedStar}</td>
               
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