let count = 10;
const apikey = "-OIs6964caZdH3SxlARdGnTw2Qy6XRop6y8De1N5uVc";
const url = `https://api.unsplash.com/photos/random/?client_id=${apikey}&count=${count}`;
let imageCounter = 0;
let isImagesReady =  false;

const getImage = async() => {
    try{
        const res = await fetch(url);
        const data = await res.json();
        displayImage(data);
    }catch(err){
        console.log(err);
    }
}

const imageloaded = () => {
   imageCounter++;
   if(count == imageCounter) isImagesReady = true
}

let imageContainer = document.getElementById('image-container');
const displayImage = (imageArray) => {
  imageArray.forEach(image => {
    const img = document.createElement('img');
    img.src = image.urls.regular;
    img.alt = "random-image";
    img.addEventListener('load' , imageloaded);
    imageContainer.append(img);
  })
}

getImage();

window.addEventListener('scroll' , () => {
    console.log('first')
    if(window.scrollY + window.innerHeight >= document.body.offsetHeight && isImagesReady == true){
        console.log('reached')
        isImagesReady = false;
        imageCounter = 0;
        getImage();
    }
})


