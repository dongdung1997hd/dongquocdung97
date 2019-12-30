var a = document.getElementById('icon-search');

a.addEventListener('click', function () {
    if (document.getElementById('search-form-top').style.display == 'none' || document.getElementById('search-form-top').style.display == '') {
        document.getElementById('search-form-top').style.display = 'block';
    } else {
        document.getElementById('search-form-top').style.display = 'none';
    }
});