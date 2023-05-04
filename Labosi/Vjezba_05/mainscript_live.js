const showPicture = (path) => {
    document.querySelector('#image_name').innerHTML = path;
    document.querySelector('#image').src = path;
}