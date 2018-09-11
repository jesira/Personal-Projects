const opacity = 0.4;

const [current,images]= [document.querySelector('#current'), document.querySelectorAll('.imgs img')];
images[0].style.opacity = 0.4;
images.forEach(img=>img.addEventListener('click', clicked));

function clicked(e) {
    //reset the opacity of all images of the grid to 1.

    images.forEach(img=> img.style.opacity = 1);
    //make the current source to target(Clicked) images source
    current.src = e.target.src;
    //Add fade in class
    current.classList.add('fade-in');
    //clear fade-in class

    setTimeout(()=>current.classList.remove('fade-in'),500)
    //setting the target images opacity to .4.
    e.target.style.opacity = opacity;
}