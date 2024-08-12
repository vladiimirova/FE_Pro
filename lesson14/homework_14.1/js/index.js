const sliderContainer = document.createElement('div');
sliderContainer.classList.add('slider-container');

const navigationBox = document.createElement('div');
navigationBox.classList.add('navigation-box');
sliderContainer.appendChild(navigationBox);

const prevBtn = document.createElement('button');
prevBtn.classList.add('slider-button', 'slider-button-prev');
prevBtn.textContent = '<';
navigationBox.appendChild(prevBtn);

const nextBtn = document.createElement('button');
nextBtn.classList.add('slider-button', 'slider-button-next');
nextBtn.textContent = '>';
navigationBox.appendChild(nextBtn);

prevBtn.addEventListener('click', showPreviousSlide);
nextBtn.addEventListener('click', showNextSlide);

const slidesWrapper = document.createElement('div');
slidesWrapper.classList.add('slides-wrapper');
sliderContainer.appendChild(slidesWrapper);

const sliderArray = [
    {
        imgSrc: 'img/apartment1.jpg',
        textTitle: 'Світла квартира з видом на море',
        textContent: 'Ця квартира наповнена природним світлом завдяки великим вікнам, які виходять на морське узбережжя. Вишуканий інтер`єр з білими стінами та прозорими меблями створює атмосферу простору та легкості. У центрі кімнати розташований обідній стіл, декорований стильним світильником, що додає елегантності приміщенню. Квартира ідеально підходить для тих, хто цінує красу та спокій.',
    },
    {
        imgSrc: 'img/apartment2.jpg',
        textTitle: 'Романтичний стиль з видом на парк',
        textContent: 'Ця квартира випромінює романтичний шарм завдяки теплому кольоровому оформленню та розкішним текстурам. Велике вікно, що виходить на зелену зону парку, наповнює простір натуральним світлом. Інтер`єр прикрашений ніжними пастельними відтінками, м’якими текстильними виробами та витонченими аксесуарами. Вітальня обладнана зручними диванами і стильним журнальним столиком, що створює затишну атмосферу для приємного відпочинку. Квартира стане ідеальним вибором для тих, хто прагне спокою і затишку.',
    },
    {
        imgSrc: 'img/apartment3.jpg',
        textTitle: 'Елегантний лофт з індустріальним дизайном',
        textContent: 'Ця квартира в стилі лофт поєднує сучасний індустріальний дизайн з елегантними деталями. Високі стелі та великі вікна дозволяють насолоджуватися просторим простором і чудовим природним освітленням. Цегляні стіни і металеві деталі створюють стильний контраст з м’якими меблями та сучасними аксесуарами. Вітальня оснащена комфортним диваном і стильним кофейним столиком, що додає атмосфері урбаністичної вишуканості. Квартира ідеально підходить для тих, хто цінує оригінальність та сучасний дизайн.',
    },
    {
        imgSrc: 'img/apartment4.jpg',
        textTitle: 'Стильний сучасний інтер`єр',
        textContent: 'Ця квартира оформлена в сучасному стилі з елементами мінімалізму. Сірі стіни чудово контрастують з яскравими декоративними елементами, такими як картини та рослини. Робоча зона облаштована дерев`яним столом та зручним кріслом, що робить цю квартиру ідеальним місцем як для відпочинку, так і для роботи. Вона стане чудовим вибором для тих, хто цінує комфорт та функціональність у сучасному дизайні.',

    },
    {
        imgSrc: 'img/apartment5.jpg',
        textTitle: 'Затишний сімейний простір з класичним інтер`єром',
        textContent: 'Ця квартира оформлена в класичному стилі з акцентом на комфорт і функціональність. Теплі відтінки стін і натуральні дерев`яні елементи створюють атмосферу затишку і гармонії. Просторі кімнати облаштовані зручними меблями та класичними аксесуарами, які надають інтер`єру вишуканості. У вітальні розташована комфортна зона для відпочинку з великим диваном і книжковою полицею, що робить квартиру ідеальним місцем для сімейних вечорів. Ця квартира стане чудовим вибором для тих, хто цінує традиційний стиль та домашній комфорт.',
    }
];

sliderArray.forEach(function(slideData, index) {
    const slide = document.createElement('div');
    slide.classList.add('slide');
    if (index !== 0) {
        slide.style.display = 'none';
    }
    
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    
    const img = document.createElement('img');
    img.src = slideData.imgSrc;
    imgContainer.appendChild(img);

    slide.appendChild(imgContainer);
    
    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');
    
    const title = document.createElement('h1');
    title.textContent = slideData.textTitle;
    textContainer.appendChild(title);
    
    const content = document.createElement('p');
    content.textContent = slideData.textContent;
    textContainer.appendChild(content);
    
    slide.appendChild(textContainer);

    slidesWrapper.appendChild(slide);
});

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(function(slide, i) {
        slide.style.display = i === index ? 'flex' : 'none';
    });

    const paginationButtons = document.querySelectorAll('.pagination-btn');
    paginationButtons.forEach(function(btn) {
        btn.classList.remove('active');
    });

    paginationButtons[index].classList.add('active');

    prevBtn.style.display = index === 0 ? 'none' : 'block';
    nextBtn.style.display = index === slides.length - 1 ? 'none' : 'block';
}
function showPreviousSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        showSlide(currentIndex);
    }
}

function showNextSlide() {
    if (currentIndex < sliderArray.length - 1) {
        currentIndex++;
        showSlide(currentIndex);
    }
}

prevBtn.addEventListener('click', showPreviousSlide);
nextBtn.addEventListener('click', showNextSlide);

const paginationBox = document.createElement('div');
paginationBox.classList.add('pagination-box');

sliderArray.forEach(function(_, index) { 
    const paginationBtn = document.createElement('button');
    paginationBtn.classList.add('pagination-btn');
    
    if (index === 0) {
        paginationBtn.classList.add('active');
    }
    
    paginationBtn.addEventListener('click', function() {
        currentIndex = index;
        showSlide(index);
    });
    
    paginationBox.appendChild(paginationBtn);
});

sliderContainer.appendChild(paginationBox);

document.body.appendChild(sliderContainer);

showSlide(0);