// -------------- Navbar functions -------------- //


// const header = document.querySelector('.header');

// const form = document.querySelector('.form');
// const formContainer = document.querySelector('.form-container');
// const formSearchButton = document.querySelector('.form-search-button');
// const formSearchInput = document.querySelector('.form-search-input');
// const formSearchSelect = document.querySelector('.form-search-select');

const searchIcon1 = document.querySelector('.search-icon1')


const header2 = document.querySelector('.header2');
const menuIcon = document.querySelector('.bx-menu');
const menuIcon3 = document.querySelector('.bx-menu3');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-menu2');
    header2.classList.toggle('show');
}
menuIcon3.onclick = () =>{
    menuIcon.classList.toggle('bx-menu2');
    header2.classList.toggle('show');
}

// -------------- Navbar functions -------------- ///


// -------------- Collection functions -------------- //

const collections = document.querySelector('.collections');
const collectionContainer = document.querySelector('.collectionsContainer');
const buttonLeft = document.querySelector('.collectionsbtn__left');
const buttonRight = document.querySelector('.collectionsbtn__right');

const collectionP1 = document.querySelector('.collectionP1');
const collectionH1 = document.querySelector('.collectionH1');
const collectionP2 = document.querySelector('.collectionP2');

let collectionInfos = [
    {
        p1:'New Cloth!',
        h1:'MAN COLLECTION',
        p2:'There are many variations of passages of Lorem Ipsum available majority have suffered alteration',
        img:'url(./1/1-2.png)'
    },
    {
        p1:'New Apperance!',
        h1:'MAN Anniversary',
        p2:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates sit id at corrupti ut.',
        img:'url(./1/2-2.png)'
    },
    {
        p1:'New Gift!',
        h1:'MAN Suits',
        p2:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptate praesentium explicabo numquam ad.',
        img:'url(./1/3.jpg)'
    },
    {
        p1:'New Outlook!',
        h1:'MAN Appearance',
        p2:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellat cumque. Velit, corrupti repellat?',
        img:'url(./1/4.png)'
    },
]

var son = 0;
let uzunlik = collectionInfos.length;

// Collections dot navigations //
const collectionsNavigationContainer = document.querySelector('.collections-navigation');
for(let i = 0;i < uzunlik;i++){
    var navigationsDot = document.createElement('div');
    navigationsDot.classList = 'navigation-dot';

    collectionsNavigationContainer.appendChild(navigationsDot);
}

// Collections dot navigations ///

collectionP1.innerText = collectionInfos[0].p1;
collectionH1.innerText = collectionInfos[0].h1;
collectionP2.innerText = collectionInfos[0].p2;
collectionContainer.style.backgroundImage = collectionInfos[0].img;

var navigationsDots = document.querySelectorAll('.navigation-dot');
navigationsDots[0].classList.add('active');

buttonRight.addEventListener("click", ()=>{
    son += 1; /* son = 1 */
    
    for(let i = 0;i < navigationsDots.length; i++){
        if (i == son){
            navigationsDots[i].classList.add('active');
        }
        else{
            navigationsDots[i].classList.remove('active');
        }
    }

    if (son < uzunlik){
        collectionP1.innerText = collectionInfos[son].p1;
        collectionH1.innerText = collectionInfos[son].h1;
        collectionP2.innerText = collectionInfos[son].p2;
        collectionContainer.style.backgroundImage = collectionInfos[son].img;
    }
    else if(son >= uzunlik){
        navigationsDots[0].classList.add('active');

        son = 0;
        collectionP1.innerText = collectionInfos[son].p1;
        collectionH1.innerText = collectionInfos[son].h1;
        collectionP2.innerText = collectionInfos[son].p2;
        collectionContainer.style.backgroundImage = collectionInfos[son].img;
    }
})
buttonLeft.addEventListener("click", ()=>{
    if (son > 0){
        son -= 1;
        collectionP1.innerText = collectionInfos[son].p1;
        collectionH1.innerText = collectionInfos[son].h1;
        collectionP2.innerText = collectionInfos[son].p2;
        collectionContainer.style.backgroundImage = collectionInfos[son].img;
    
        for(let i = 0;i < navigationsDots.length; i++){
            if (i == son){
                navigationsDots[i].classList.add('active');
            }
            else{
                navigationsDots[i].classList.remove('active');
            }
        }
    }
    else if(son == 0){
        son = uzunlik - 1;
        collectionP1.innerText = collectionInfos[son].p1;
        collectionH1.innerText = collectionInfos[son].h1;
        collectionP2.innerText = collectionInfos[son].p2;
        collectionContainer.style.backgroundImage = collectionInfos[son].img;
        
        navigationsDots[0].classList.remove('active');
        navigationsDots[collectionInfos.length - 1].classList.add('active');
    }
});
// Collections dot functions //
for (let j = 0;j < navigationsDots.length;j++){
    navigationsDots[j].onclick = () =>{
        son = j;

        for (let i = 0;i < navigationsDots.length; i++){            
            if (i == son){
                navigationsDots[i].classList.add('active');
            }
            else(
                navigationsDots[i].classList.remove('active')
            )

            collectionP1.innerText = collectionInfos[j].p1;
            collectionH1.innerText = collectionInfos[j].h1;
            collectionP2.innerText = collectionInfos[j].p2;
            collectionContainer.style.backgroundImage = collectionInfos[j].img;
        }
    }
}
// -------------- Collection functions -------------- //


// -------------- Product functions -------------- //

const productLeftButton = document.querySelector('.product-left-button')
const productRightButton = document.querySelector('.product-right-button')

const productCards = document.querySelectorAll('.product-card');
const productCardsImage = document.querySelectorAll('.product-card-image');
const productCardsInfo1 = document.querySelectorAll('.product-card-infop1');
const productCardsInfo2 = document.querySelectorAll('.product-card-infop2');

const productCardsInformations = [
    {
        img:'./3/1-1.png',
        info1:'Man Sweet Hoodie',
        info2:'$250.00'
    },
    {
        img:'./3/1-2.png',
        info1:'Man Sweet Hoodie',
        info2:'$150.00'
    },
    {
        img:'./3/1-3.png',
        info1:'Man Sweet Hoodie',
        info2:'$150.00'
    },
    {
        img:'./3/2-1.png',
        info1:'Women Sweet Hoodie',
        info2:'$250.00'
    },
    {
        img:'./3/2-2.png',
        info1:'Women Sweet Hoodie',
        info2:'$250.00'
    },
    {
        img:'./3/2-3.png',
        info1:'Man Sweet Hoodie',
        info2:'$150.00'
    },
]

for (let i = 0; i < productCards.length;i++){
    productCardsImage[i].src = productCardsInformations[i].img;
    productCardsInfo1[i].innerText = productCardsInformations[i].info1;
    productCardsInfo2[i].innerText = productCardsInformations[i].info2;
}

var counter = 3;

productRightButton.addEventListener('click', ()=>{
    if (counter != productCardsInformations.length){
        for (let j = 0;j < productCards.length;j++){
            productCardsImage[j].src = productCardsInformations[counter].img;
            productCardsInfo1[j].innerText = productCardsInformations[counter].info1;
            productCardsInfo2[j].innerText = productCardsInformations[counter].info2;
            counter += 1
        }
    }
    else if (counter == productCardsInformations.length){
        counter = 3;
        for (let i = 0; i < productCards.length;i++){
            productCardsImage[i].src = productCardsInformations[i].img;
            productCardsInfo1[i].innerText = productCardsInformations[i].info1;
            productCardsInfo2[i].innerText = productCardsInformations[i].info2;
        }
    }
})
productLeftButton.addEventListener('click', ()=>{
    counter = counter - 6;

    if (counter < 0){
        counter = 3;        
        for (let j = 0;j < productCards.length;j++){
            productCardsImage[j].src = productCardsInformations[counter].img;
            productCardsInfo1[j].innerText = productCardsInformations[counter].info1;
            productCardsInfo2[j].innerText = productCardsInformations[counter].info2;
            counter++
        }
    }
    else{
        for (let j = 0;j < productCards.length;j++){
            productCardsImage[j].src = productCardsInformations[counter].img;
            productCardsInfo1[j].innerText = productCardsInformations[counter].info1;
            productCardsInfo2[j].innerText = productCardsInformations[counter].info2;
            counter++
        }
    }
})
// -------------- Product functions -------------- ///