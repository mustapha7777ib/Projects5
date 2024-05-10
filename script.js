var images = document.querySelectorAll('.a1 img');

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', display);
}

function display(event) {
    var extendsDiv = event.target.parentElement.nextElementSibling; 
    let height = extendsDiv.children[0].offsetHeight;
    console.log(height);
    if (extendsDiv.style.maxHeight === `${height + 20}px`) {
        extendsDiv.style.maxHeight = 0; 
        event.target.src = "./assets/images/icon-plus.svg";
    } else {
        images.forEach(function(image) {
            image.parentElement.nextElementSibling.style.maxHeight = 0;
            image.src = "./assets/images/icon-plus.svg";
        })
        extendsDiv.style.maxHeight = `${height + 20}px`;
        event.target.src = "./assets/images/icon-minus.svg";
    }
}
