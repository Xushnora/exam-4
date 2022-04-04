const stories = [
    {
        id: 1,
        name: "master-class",
        media:  ["imgs/tipografika.3.jpg", "imgs/tipografika2.jpg"],
        avatar: "imgs/img1.jpg",
        active: false
    },
    {
        id: 2,
        name: "Imtihon",
        media: ["imgs/tipografika2.jpg", "imgs/tipografika2.jpg"],
        avatar: "imgs/img2.jpg",
        active: false
    },
    {
        id: 3,
        name: "ramazon",
        media: ["imgs/tipografika1.jpg", "imgs/tipografika1.jpg"],
        avatar: "imgs/img3.jpg",
        active: false
    },
    {
        id: 4,
        name: "smm",
        media: ["imgs/tipografika4.jpg", "imgs/tipografika4.jpg"],
        avatar: "imgs/img4.jpg",
        active: false
    },
    {
        id: 5,
        name: "dasturlash",
        media: ["imgs/tipografika4.jpg", "imgs/tipografika4.jpg"],
        avatar: "imgs/img1.jpg",
        active: false
    },
    {
        id: 6,
        name: "suhbat",
        media: ["imgs/tipografika4.jpg", "imgs/tipografika4.jpg"],
        avatar: "imgs/img3.jpg",
        active: false
    }
];

const elSliderList = document.querySelector('.slider-list');


// let elList1 = document.querySelector('#slider1');
// let elList2 = document.querySelector('#slider2');
let elList3 = document.querySelector('#slider3');

// elList3.addEventListener('click', openActive);

// function openActive() {
//     elList1.classList.add('active');
//     elList3.classList.remove('active');
//     elList1.innerHTML = `
//         <div class="item-box">
//             <img class="slider-img" src="imgs/tipografika1.jpg" alt="img">
//             <div class="sumbit-box">
//                 <input type="text" placeholder="Reply to najottalim...">
//                 <button type="submit">
//                     <i class='bx bxl-telegram'></i>
//                 </button>
//             </div>
//         </div>
//     `
// }

function render(stories) {
    stories.forEach(item => {
        let li = document.createElement('li');
        li.className = 'slider-item';
        // li[2].classlist.add('active');
        li.innerHTML = `
            <div class="item-box">
                <img class="slider-img" src="${item.media[0]}" alt="img">
                <div class="avatar-box">
                    <img class="img-avatar" src="${item.avatar}" alt="pic">
                    <p class="avatar-title">${item.name}</p>
                </div>
            </div>
        `
        elSliderList.appendChild(li);
    })
}

// render(stories);


// ================== post slider list ===============

const leftBtn = document.querySelector('.left__btn');
const rightBtn = document.querySelector('.right__btn');
const itemCard = document.querySelectorAll('.slider-item');

let idx = 0;

function postSlider() {
    if(idx > itemCard.length-4){
        idx = 0;
    }
    else if(idx < 0) {
        idx = itemCard-4
    }

    elSliderList.style.transform =`translateX(${-idx*150}px)`
}
// rightBtn.addEventListener('click', ()=> {
//     idx++;
//     postSlider();
// })
// leftBtn.addEventListener('click', ()=> {
//     idx--;
//     postSlider();
// })

rightBtn.addEventListener('click', () => {
    elSliderList.style.transform =`translateX(150px)`
})

leftBtn.addEventListener('click', () => {
    elSliderList.style.transform =`translateX(-150px)`
})



