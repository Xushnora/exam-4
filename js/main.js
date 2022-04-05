
const stories = [
    {
        id: 1,
        name: "master-class",
        media:  ["imgs/active.img1.jpg", "imgs/tipografika2.jpg"],
        avatar: "imgs/img1.jpg",
        type: 'imgs',
        active: false
    },
    {
        id: 2,
        name: "Imtihon",
        media: ["media/MUSOBAQA tgg(Android).mp4", "media/MUSOBAQA tgg(Android).mp4"],
        avatar: "imgs/img2.jpg",
        type: 'vedio',
        active: false
    },
    {
        id: 3,
        name: "ramazon",
        media: ["imgs/active.img2.jpg", "imgs/tipografika1.jpg"],
        avatar: "imgs/img3.jpg",
        type: 'imgs',
        active: false
    },
    {
        id: 4,
        name: "smm",
        media: ["media/alohida-mavzu.mp4", "media/MUSOBAQA tgg(Android).mp4"],
        avatar: "imgs/img4.jpg",
        type: 'vedio',
        active: false
    },
    {
        id: 5,
        name: "dasturlash",
        media: ["media/xurshid.mp4", "media/MUSOBAQA tgg(Android).mp4"],
        avatar: "imgs/img1.jpg",
        type: 'vedio',
        active: false
    },
    {
        id: 6,
        name: "suhbat",
        media: ["imgs/active.img3.jpg", "imgs/tipografika4.jpg"],
        avatar: "imgs/img3.jpg",
        type: 'imgs',
        active: false
    }
];

const elSliderList = document.querySelector('.slider-list');


function render(stories) {
    stories.forEach(item => {
        let li = document.createElement('li');
        li.className = 'slider-item';
        if(item.type == 'imgs') {
            li.innerHTML = `
            <div class="item-box">
                <div class = "before-box">
                    <span class = "before-span"></span>
                </div>
                <div class="user-box">
                    <div class="user">
                        <img src="${item.avatar}" alt="najot">
                        <span>${item.name}</span>
                    </div>
                </div>
                <div class = "imgs-box"></div>
                <img class="slider-img" src="${item.media[0]}" alt="img">
                <div class="sumbit-box">
                    <input type="text" placeholder="Reply to najottalim...">
                    <button type="submit">
                        <i class='bx bxl-telegram'></i>
                    </button>
                </div>
            </div>
        `
        } else if(item.type == 'vedio') {
            li.innerHTML = `
            <div class="item-box">
                <div class = "before-box">
                    <span class = "before-span"></span>
                </div>
                <div class="user-box">
                    <div class="user">
                        <img src="${item.avatar}" alt="najot">
                        <span>${item.name}</span>
                    </div>
                </div>
                <div class = "imgs-box"></div>
                <video class="video-style" controls src="${item.media[0]}"></video>
                <div class="sumbit-box">
                    <input type="text" placeholder="Reply to najottalim...">
                    <button type="submit">
                        <i class='bx bxl-telegram'></i>
                    </button>
                </div>
            </div>
        `
        }
        elSliderList.appendChild(li);
    })
}

render(stories);

const elItems = document.querySelectorAll('.slider-item');

    elItems[0].addEventListener('click', () => {
        elItems[0].classList.add('active');
        elItems[1].classList.remove('active');
        elItems[2].classList.remove('active');
        elItems[3].classList.remove('active');
        elItems[4].classList.remove('active');
        elItems[5].classList.remove('active');
        elSliderList.style.transform =`translateX(400px)`
    })
    elItems[1].addEventListener('click', () => {
        elItems[1].classList.add('active');
        elItems[0].classList.remove('active');
        elItems[2].classList.remove('active');
        elItems[3].classList.remove('active');
        elItems[4].classList.remove('active');
        elItems[5].classList.remove('active');
        elSliderList.style.transform =`translateX(180px)`
    })
    elItems[2].addEventListener('click', () => {
        elItems[2].classList.add('active');
        elItems[0].classList.remove('active');
        elItems[1].classList.remove('active');
        elItems[3].classList.remove('active');
        elItems[4].classList.remove('active');
        elItems[5].classList.remove('active');
        elSliderList.style.transform =`translateX(-25px)`
    })
    elItems[3].addEventListener('click', () => {
        elItems[3].classList.add('active');
        elItems[0].classList.remove('active');
        elItems[1].classList.remove('active');
        elItems[2].classList.remove('active');
        elItems[4].classList.remove('active');
        elItems[5].classList.remove('active');
        elSliderList.style.transform =`translateX(-230px)`
    })
    elItems[4].addEventListener('click', () => {
        elItems[4].classList.add('active');
        elItems[0].classList.remove('active');
        elItems[1].classList.remove('active');
        elItems[2].classList.remove('active');
        elItems[3].classList.remove('active');
        elItems[5].classList.remove('active');
        elSliderList.style.transform =`translateX(-440px)`
    })
    elItems[5].addEventListener('click', () => {
        elItems[5].classList.add('active');
        elItems[0].classList.remove('active');
        elItems[1].classList.remove('active');
        elItems[2].classList.remove('active');
        elItems[3].classList.remove('active');
        elItems[4].classList.remove('active');
        elSliderList.style.transform =`translateX(-650px)`
    })

// ================== post slider list ===============


const leftBtn = document.querySelector('.left__btn');
const rightBtn = document.querySelector('.right__btn');

// Right button boslignada eng oxirgisiga o'tasiz,
rightBtn.addEventListener('click', ()=> {
    stories.forEach(item => {
        if(item.id == 1) {
            elItems[5].classList.add('active');
            elItems[0].classList.remove('active');
            elItems[1].classList.remove('active');
            elItems[2].classList.remove('active');
            elItems[3].classList.remove('active');
            elItems[4].classList.remove('active');
            elSliderList.style.transform =`translateX(-650px)`
        } 
    });
})

//  left button bosilganda eng birinchisiga o'tasiz
leftBtn.addEventListener('click', ()=> {
    stories.forEach(item => {
        if(item.id == 1) {
            elItems[0].classList.add('active');
            elItems[1].classList.remove('active');
            elItems[2].classList.remove('active');
            elItems[3].classList.remove('active');
            elItems[4].classList.remove('active');
            elItems[5].classList.remove('active');
            elSliderList.style.transform =`translateX(400px)`
        } 

    });
})


const closeBtn = document.querySelector('.close-btn');
const storiesWindow = document.querySelector('.container');

closeBtn.addEventListener('click', ()=> {
    storiesWindow.style.display = "none";
})


