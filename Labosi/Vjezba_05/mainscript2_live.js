const imageArray = [
    'Slika1_1.jpg',
    'Slika1_2.jpg',
    'Slika1_3.jpg',
    'Slika1_4.jpg',
    'Slika2_1.jpg',
    'Slika2_2.jpg',
    'Slika2_3.jpg',
    'Slika2_4.jpg'
];

let counter = 0;

const imageName = document.querySelector('.image_name');
const imageInfo = document.querySelector('.image_info');
const image = document.querySelector('.image');


const setupImage = () => {
    imageName.innerHTML = imageArray[counter];
    image.src = `Images/${imageArray[counter]}`;
    imageInfo.innerHTML = `${counter + 1} / ${imageArray.length}`;

    if (counter === 0) {
        document.querySelector('.prev').disabled = true;
    } else if (counter === imageArray.length - 1) {
        document.querySelector('.next').disabled = true;
    } else {
        document.querySelector('.prev').disabled = false;
        document.querySelector('.next').disabled = false;
    }
}

const prev = () => {
    counter--;
    setupImage();
};

const next = () => {
    counter++;
    setupImage();
}