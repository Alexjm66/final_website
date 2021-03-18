// This is the javascript for the testimnoials
// Code gotten from a pen: https://codepen.io/Chryptolite/pen/KKMrXdj
// Fetching the containers in the html
let slidesContainer = document.getElementById('carousel-container');
let bulletsContainer = document.getElementById('carousel-bullets');


//Content for slides

let slideContent = [
    {
        title: "Thapelo Tsotetsi ",
        subtitle: "Lecturer",
        description: "Alex is a hard-working individual who gives his best and takes advantage of any opportunity presented to him. Alex is always focused and willing to help others when the need arise. He has a very good eye as well as the implementation when it comes to UI/UX. He's communication skills are very good, he always ask questions when the user requirements are not clear.",
        image: './images/thapelo-tsotetsi-min.jpg'
    },
    {
        title: "Aashiq Adams",
        subtitle: "Peer",
        description: "Alexander is an honorable man and a diligent worker. He is always keen to help others without question. When a problem arises he displays good leadership skills and is capable of working well with others. Well mannered and cool-headed in all situations, Alexander displays all the qualities a prospective employer would be seeking.",
        image: './images/Aashiq Adams (5)-min.JPG'
    },
    {
        title: "Laeeqah Esau",
        subtitle: "Peer",
        description: "Alex is very hardworking and always tries his best.He knows what to do if a problem arises.He is always willing to help a person when they need help with their code",
        image: './images/myprofile-min.jpg'
    },
    {
        title: "Sandile Tukani",
        subtitle: "Peer",
        description: "Alexander: This is a well-mannered and inviting young man. He displays a good amount of maturity and determination with regards to his work. Alexander is easy to work with and makes it even fun to work with him through the day-to-day problems any programmer would be faced with.",
        image: './images/sandile-min.png'
    },
]

let totalSlides = slideContent.length;

//function that creates the bullets
function createBullets(index){
    // Create button to be clicked on and add attributes
    let bulletButton = document.createElement("button");
    bulletButton.classList.add("carousel-bullet");
    bulletButton.setAttribute("onclick", `bulletSlider(${index})`);


    // Create bullet with active classes
    let bullet = document.createElement("i");
    bullet.classList.add("fas")
    bullet.classList.add("fa-circle");
    if (index == 0) bullet.classList.add("active");

    // Add bullet to bulletButton
    bulletButton.appendChild(bullet);

    // Add bulletButton to buttonContainer
    bulletsContainer.appendChild(bulletButton);
}

// Creating a function that creates the slides 
function createSlide(slide, index){
    // Create slide container
    let slideWrapper = document.createElement("div");
    slideWrapper.classList.add("carousel-slide");
    if (index == 0) slideWrapper.classList.add("active")

    // Create content for slides
    let slideImage = document.createElement("img");
    slideImage.src = slide.image;
    slideImage.classList.add("carousel-img");

    let slideHeading = document.createElement("h2");
    slideHeading.innerHTML = slide.title;

    let slideSubtitle = document.createElement("h4");
    slideSubtitle.innerHTML = slide.subtitle;

    let slideDescription = document.createElement("p")
    slideDescription.innerHTML = slide.description;

    // BUild slide
    slideWrapper.appendChild(slideImage);
    slideWrapper.appendChild(slideHeading);
    slideWrapper.appendChild(slideSubtitle);
    slideWrapper.appendChild(slideDescription);

    // Add slide to container
    slidesContainer.appendChild(slideWrapper);
}

// Initialize carousel
slideContent.forEach((slide, index)=>{
    createBullets(index);
    createSlide(slide, index);
});

let bulletSlider = (index)=> {
    let bullets  = document.getElementsByClassName("fa-circle");
    for (let i =0; i<totalSlides; i++){
        if (index === i) {
            bullets[i].classList.add("active");
            slide[i].classList.add("active");
        } else{
            bullets[i].classList.remove("active");
            slide[i].classList.remove("active");
        }
    }
};

let changeSlide = (toSlide) => {
    let bullets = document.getElementsByClassName("fa-circle");
    let slides = document.getElementsByClassName("carousel-slide");
    for (let i = 0; i < totalSlides; i++) {
        if (slides[i].classList.contains("active")) {
            let endOfArray = i + toSlide > totalSlides - 1 ? true:
        false;
            let beginningOfArray = i + toSlide < 0 ? true: false;
            slides[i].classList.remove("active");
            bullets[i].classList.remove("active");
            if (endOfArray){
                slides[0].classList.add("active");
                bullets[0].classList.add("active");
            } else if (beginningOfArray){
                bullets[totalSlides - 1].classList.add("active");
                slides[totalSlides - 1].classList.add("active");
            } else{
                bullets[i + toSlide].classList.add("active");
                slides[i + toSlide].classList.add("active");
            }
            break;
        }
    }
};