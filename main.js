const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        id: 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image":"https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

// dichiarazione container
const CONTAINER = document.getElementById("container");

// creazione layout post
for (let i = 0 ; i < posts.length ; i++){
    
    let objArr = posts[i];

        for ( let key in objArr){
            let subObjArr = objArr[key]
            // console.log(subObjArr);
        }

    // destructuring obj array
    const {id,content,media,author,likes,created}=objArr;
    const{ name,image}= author;

    ///////////////////////////LAYOUT CARD!///////////////////////////////////
    let card = document.createElement("div");
    CONTAINER.append(card);
    card.classList.add("post");

    // HEADER
    let cardHeader = document.createElement("div");
    card.append(cardHeader);
    cardHeader.classList.add("post__header");
    
    // POST-META
    let subHeader = document.createElement("div");
    cardHeader.append(subHeader);
    subHeader.classList.add("post-meta")
    
    //ICON-HEADER
    let iconHeader = document.createElement("div");
    subHeader.append(iconHeader);
    iconHeader.classList.add("post-meta__icon");
    iconHeader.innerHTML = `<img class="profile-pic" src="${image}" alt="${name}">  `

    // DATA-HEADER
    let dataHeader = document.createElement("div");
    subHeader.append(dataHeader);
    dataHeader.classList.add("post-meta__data");
    

    // SUB DATA HEADER AUTHOR
    let authorData = document.createElement("div");
    dataHeader.append(authorData);
    authorData.classList.add("post-meta__author");
    authorData.innerHTML = `${name}`
    
    // SUD DATA HEADER TIME
    let timeData = document.createElement("div");
    dataHeader.append(timeData);
    timeData.classList.add("post-meta__time");
    timeData.innerHTML = `${created}`
    // TEXT
    let cardText = document.createElement("div");
    card.append(cardText);
    cardText.classList.add("post-text");
    cardText.innerHTML = `${content}`
    
    // IMAGE
    let cardImg = document.createElement("div");
    card.append(cardImg);
    cardImg.classList.add("post__image");
    cardImg.innerHTML=`<img src="${media}" alt="">`

    // FOOTER
    let cardFooter = document.createElement("div");
    card.append(cardFooter);
    cardFooter.classList.add("post__footer");

    // SUBFOOTER
    let subFooter = document.createElement("div");
    cardFooter.append(subFooter);
    subFooter.classList.add("likes");
    subFooter.classList.add("js-likes");

    // LIKES BTN
    let likesDiv = document.createElement("div");
    subFooter.appendChild(likesDiv);
    likesDiv.classList.add("likes__cta");
    likesDiv.innerHTML=`
    <a class="like-button  js-like-button" href="#" data-postid="1" id="like-btn">
    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
    <span class="like-button__label">Mi Piace</span>
    </a>`
        
    // LIKES COUNT
    let likesCount = document.createElement("div");
    subFooter.appendChild(likesCount);
    likesCount.classList.add("likes__counter")
    likesCount.innerHTML = `Piace a 
    <b id="like-counter-1" class="js-likes-counter">80</b>
     persone`
/////////////////// LAYOUT CARD //////////////////////
}

const LIKE_BTN = document.getElementById("like-btn")
LIKE_BTN.addEventListener("click",
function(){
    document.querySelector(".like-button__label").classList.toggle("like-button--liked")
})
