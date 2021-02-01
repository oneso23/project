const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');
let x = document.querySelectorAll('.container');
const topScrollBtn = document.querySelector('.top_scroll_btn');

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}


function showDivs(n) {
    let i;
    
    if (n > x.length) { // n이 2보다 크다면
        slideIndex = 1
    }
    
    
    if (n < 1) { // n이 1보다 작다면
        slideIndex = x.length;
    }
    
    for (i = 0; i < x.length; i++) { // 2번 반복한다
        x[i].style.display = 'none';
    }
    
    x[slideIndex-1].style.display = 'flex';
}

topScrollBtn.addEventListener('click', scToTop);

function scToTop() {
    window.scrollTo({top:0,left:0,behavior:'smooth'});
}





