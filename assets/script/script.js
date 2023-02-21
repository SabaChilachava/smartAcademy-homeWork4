SVGFEPointLightElement mainimg = document.querySelector('.section-image');
let images = document.querySelectorAll('.section-carousel');




console.log(mainimg.src)
images.forEach(img=>{
    img.addEventListener('click',()=>{
        let tmp = mainimg.src;
        mainimg.src = img.src;
        img.src = tmp;
        console.log(img.src)
    })
})

