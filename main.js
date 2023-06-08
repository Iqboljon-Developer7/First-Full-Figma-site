// -------------- Navbar functions -------------- //
const searchIcon1 = document.querySelector('.search-icon1')

const header2 = document.querySelector('.header2');
const menuIcon = document.querySelector('.bx-menu');
const menuIcon3 = document.querySelector('.bx-menu3');

const exitLayer = document.querySelector('.exit-layer');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-menu2');
    header2.classList.toggle('show');
    exitLayer.classList.toggle('exit-layer-show');
    header2.classList.toggle('z');
}
menuIcon3.onclick = () =>{
    menuIcon.classList.toggle('bx-menu2');
    header2.classList.toggle('show');
    exitLayer.classList.toggle('exit-layer-show');
    header2.classList.toggle('z');
}
exitLayer.onclick = () =>{
    menuIcon.classList.toggle('bx-menu2');
    header2.classList.toggle('show');
    exitLayer.classList.toggle('exit-layer-show');
    header2.classList.toggle('z');
}

// -------------- Navbar functions -------------- ///



// -------------- Navbar functions -------------- //

const searchContents = document.querySelectorAll('.search-content');
const searchContentsInfo = document.querySelectorAll('.search-content-p');

const searchLayer = document.querySelector('.Search-layer');
const searchInput = document.querySelector('.form-search-input');
const searchInput2 = document.querySelector('.form-search-input2');

const searchExitLayer = document.querySelector('.exit-layer2');

searchInput.onclick = () =>{
    searchLayer.classList.toggle('Search-layer-show');
    searchExitLayer.classList.toggle('exit-layer2-2');
}
searchLayer.onclick = () =>{
    searchLayer.classList.toggle('Search-layer-show');
    // searchExitLayer.classList.toggle('exit-layer2-2');
}


function searchContentFilter(){
    let inputInfo = searchInput.value;
    for (let i = 0;i < searchContentsInfo.length;i++){
        inputInfo = inputInfo.charAt(0).toUpperCase() + inputInfo.slice(1);
        if (searchContentsInfo[i].innerText.startsWith(inputInfo)){
            searchContents[i].style.display = 'block';
        }
        else{
            searchContents[i].style.display = 'none';
        }
    }
}
function searchContentFilter(){
    let inputInfo = searchInput2.value;
    for (let i = 0;i < searchContentsInfo.length;i++){
        inputInfo = inputInfo.charAt(0).toUpperCase() + inputInfo.slice(1);
        if (searchContentsInfo[i].innerText.startsWith(inputInfo)){
            searchContents[i].style.display = 'block';
        }
        else{
            searchContents[i].style.display = 'none';
        }
    }
}

const form2 = document.querySelector('.form2');
const navbarInput2 = document.querySelector('.form-search-input2');

navbarInput2.onclick = () =>{
    form2.classList.toggle('form2-2');
    searchLayer.classList.toggle('Search-layer-show');
    header2.classList.toggle('invisible');
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

const collectionInfo = document.querySelectorAll('.collectionInfos');

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
            // navigationsDots[i].classList.add('active');
            setTimeout(() => {
                navigationsDots[i].classList.add('active');
            }, 500);
        }
        else{
            navigationsDots[i].classList.remove('active');
        }
    }

    if (son < uzunlik){
        setTimeout(() => {
            collectionP1.innerText = collectionInfos[son].p1;
            collectionH1.innerText = collectionInfos[son].h1;
            collectionP2.innerText = collectionInfos[son].p2;
            collectionContainer.style.backgroundImage = collectionInfos[son].img;
        }, 500);
    

        collectionContainer.classList.remove('collectionBackImage');   
        
        setTimeout(() => {
            collectionContainer.classList.add('collectionBackImage');      
        }, 0);

        for (let k = 0;k < collectionInfo.length;k++){
            collectionInfo[k].classList.remove('collection-infos-animation');
            setTimeout(() => {
                collectionInfo[k].classList.add('collection-infos-animation');
            }, 0);
        }
    }
    else if(son >= uzunlik){
        setTimeout(() => {
            navigationsDots[0].classList.add('active');
        }, 500);

        son = 0;

        setTimeout(() => {
            collectionP1.innerText = collectionInfos[son].p1;
            collectionH1.innerText = collectionInfos[son].h1;
            collectionP2.innerText = collectionInfos[son].p2;
            collectionContainer.style.backgroundImage = collectionInfos[son].img;
        }, 500);

        collectionContainer.classList.remove('collectionBackImage');   
        
        setTimeout(() => {
            collectionContainer.classList.add('collectionBackImage');      
        }, 0);

        for (let k = 0;k < collectionInfo.length;k++){
            collectionInfo[k].classList.remove('collection-infos-animation');
            setTimeout(() => {
                collectionInfo[k].classList.add('collection-infos-animation');
            }, 0);
        }
    }
})
buttonLeft.addEventListener("click", ()=>{
    if (son > 0){
        son -= 1;
        
        setTimeout(() => {            
            collectionP1.innerText = collectionInfos[son].p1;
            collectionH1.innerText = collectionInfos[son].h1;
            collectionP2.innerText = collectionInfos[son].p2;
            collectionContainer.style.backgroundImage = collectionInfos[son].img;
        }, 500);

        collectionContainer.classList.remove('collectionBackImage');   

        setTimeout(() => {
            collectionContainer.classList.add('collectionBackImage');      
        }, 0);

        for (let k = 0;k < collectionInfo.length;k++){
            collectionInfo[k].classList.remove('collection-infos-animation');
            setTimeout(() => {
                collectionInfo[k].classList.add('collection-infos-animation');
            }, 0);
        }                                                                                                                       

        for(let i = 0;i < navigationsDots.length; i++){
            if (i == son){
                setTimeout(() => {
                    navigationsDots[i].classList.add('active');
                }, 500);
            }
            else{
                navigationsDots[i].classList.remove('active');
            }
        }
    }
    else if(son == 0){
        son = uzunlik - 1;

        setTimeout(() => {            
            collectionP1.innerText = collectionInfos[son].p1;
            collectionH1.innerText = collectionInfos[son].h1;
            collectionP2.innerText = collectionInfos[son].p2;
            collectionContainer.style.backgroundImage = collectionInfos[son].img;
        }, 500);

        navigationsDots[0].classList.remove('active');
        
        setTimeout(() => {
            navigationsDots[collectionInfos.length - 1].classList.add('active');
        }, 500);
    
        collectionContainer.classList.remove('collectionBackImage');   
        
        setTimeout(() => {
            collectionContainer.classList.add('collectionBackImage');      
        }, 0);
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



// -------------- Customers functions -------------- //

const customerLeftBtn = document.querySelector('.customerLeftBtn');
const customerRightBtn = document.querySelector('.customerRightBtn');

const customerP1 = document.querySelector('.customer-contents-p1');
const customerP2 = document.querySelector('.customer-contents-p2');
const customerImage = document.querySelector('.customer-contents-img');

const customerNavigationDotsContainer = document.querySelector('.customer-contents-navigation-dots');
const customerInformations = [
    {
        p1:"There are many variations of pages of Lorem Ipsun available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable",
        p2:`Wade Warren 
            UI Designer`,
        img:"./9-additionals/Customer.png"
    },
    {
        p1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nulla quidem dolorum consequatur exercitationem. Impedit et iure cupiditate doloribus architecto.",
        p2:`John Smith 
            UX Designer`,
        img:"./9-additionals/1.png"
    },
    {
        p1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore molestias soluta corporis similique minima! Fuga illo animi numquam soluta beatae.",
        p2:`Carlin Wollin 
            Backend Programmer`,
        img:"./9-additionals/2.png"
    },
]

for (let i = 0;i < customerInformations.length;i++){
    let navigationDot = document.createElement('div');
    navigationDot.classList = "customer-navigation-dot";
    customerNavigationDotsContainer.appendChild(navigationDot);
}

var customNavigationDots = document.querySelectorAll('.customer-navigation-dot');



customerP1.innerText = customerInformations[0].p1;
customerP2.innerText = customerInformations[0].p2;
customerImage.src = customerInformations[0].img;

customNavigationDots[0].classList.add('custom-dot');

let count = 0
customerRightBtn.onclick = () =>{
    count++

    if(count == customerInformations.length){
        count = 0
        customerP1.innerText = customerInformations[0].p1;
        customerP2.innerText = customerInformations[0].p2;
        customerImage.src = customerInformations[0].img;
        
        for (let i = 0;i < customerInformations.length;i++){
            customNavigationDots[i].classList.remove('custom-dot')
        }

        customNavigationDots[0].classList.add('custom-dot')
    }
    else{
        customerP1.innerText = customerInformations[count].p1;
        customerP2.innerText = customerInformations[count].p2;
        customerImage.src = customerInformations[count].img;
    
        for (let i = 0;i < customerInformations.length;i++){
            if (count == i){
                customNavigationDots[i].classList.add('custom-dot');
            }
            else{
                customNavigationDots[i].classList.remove('custom-dot');
            }
        }
    }
}
customerLeftBtn.onclick = ()=>{
    if (count >= 1){
        
        count--
        customerP1.innerText = customerInformations[count].p1;
        customerP2.innerText = customerInformations[count].p2;
        customerImage.src = customerInformations[count].img;
    
        for (let i = 0;i < customerInformations.length;i++){
            if (count == i){
                customNavigationDots[i].classList.add('custom-dot');
            }
            else{
                customNavigationDots[i].classList.remove('custom-dot');
            }
        }
    }
    else if(count <= 0){

        count = customerInformations.length - 1; 

        customerP1.innerText = customerInformations[count].p1;
        customerP2.innerText = customerInformations[count].p2;
        customerImage.src = customerInformations[count].img;
    
        for (let i = 0;i < customerInformations.length;i++){
            customNavigationDots[i].classList.remove('custom-dot')
        }

        customNavigationDots[customerInformations.length - 1].classList.add('custom-dot')
    }
}

for (let i = 0;i < customNavigationDots.length;i++){
    customNavigationDots[i].onclick = ()=>{
        count = i;

        for (let k = 0;k < customNavigationDots.length;k++){
            if (count == k){
                customNavigationDots[k].classList.add('custom-dot');
            }
            else{
                customNavigationDots[k].classList.remove('custom-dot');
            }

            customerP1.innerText = customerInformations[count].p1;
            customerP2.innerText = customerInformations[count].p2;
            customerImage.src = customerInformations[count].img;
        }
    }
}
// -------------- Customers functions -------------- ///



// -------------- Footer functions -------------- //

const footer2Contents = document.querySelectorAll('.footer2-content');
const footer2Icons = document.querySelectorAll('.footer2-icon');

let nimadur = 0;
for (let i = 0;i < footer2Contents.length;i++){
    nimadur++;
    footer2Icons[i].onclick = () =>{
        for (let j = 0;j < footer2Icons.length; j++){
            if (j == i){
                footer2Contents[j].classList.add('footer2-content2');
            }
            else{
                footer2Contents[j].classList.remove('footer2-content2');
            }
        }
    }
}
// -------------- Footer functions -------------- ///