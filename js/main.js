// upload photo
const inputPhoto = document.getElementById('photo');
const changePhoto = document.getElementById('upload-btn');
const preview = document.getElementById('preview');

window.onload = () => {
    function updateImage(){
        // console.log(this.files);

        if(this.files && this.files.length){
            preview.style.height = '205px';
            preview.src = window.URL.createObjectURL(this.files[0]);
        } else {
            preview.setAttribute('src', '../img/avatar.png');
            preview.style.objectFit = 'unset';
        }
    }
    changePhoto.addEventListener("click", function (){
        inputPhoto.click();
    })
    inputPhoto.addEventListener('change', updateImage);
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// tooltip animation on copy function
const copies = document.getElementsByClassName('copy');
[...copies].forEach(copy => {
    copy.insertAdjacentHTML('afterend', '<div class="hint"></div>');
    const hint = copy.nextElementSibling;
    copy.addEventListener('mousemove', () => {hint.classList.add('hover')});
    copy.addEventListener('mouseout', () => {hint.classList.remove('hover')});
    copy.addEventListener('click', () => {
        hint.classList.add('focus')
        setTimeout(() => {
            hint.classList.remove('hover', 'focus');
        }, 700);
    })
});
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// tooltip animation on button change photo
changePhoto.insertAdjacentHTML('afterend', '<div class="hint hint-photo"></div>');
const hintPhoto = changePhoto.nextElementSibling;
changePhoto.addEventListener('mousemove', () => {hintPhoto.classList.add('hover', 'hover-photo')});
changePhoto.addEventListener('mouseout', () => {
    hintPhoto.classList.remove('hover', 'hover-photo');
    // hintPhoto.style.animation = 'photo';
    // hintPhoto.style.animationDuration = '0.7s';
    // hintPhoto.style.animationTimingFunction = 'linear';
    // hintPhoto.style.animationIterationCount = '1';
    // hintPhoto.style.animationFillMode = 'forwards';
    // setTimeout(() => {
    //     hint.classList.remove('hover', 'hover-photo');
    // }, 700);
});
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// copy function
function copyText(elem) {
    const text = elem.previousElementSibling;
    navigator.clipboard.writeText(text.innerText);
    //add to html onclick="copyText(this);"
}
function copyInputText(elem) {
    const text = elem.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;
    navigator.clipboard.writeText(text.value);
    //add to html onclick="copyInputText(this);"
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// add span to html to create input bottom line with angles
const anglesforLine = document.getElementsByClassName('bottom-line');
[...anglesforLine].forEach(angle => {
    angle.insertAdjacentHTML('beforebegin', '<span class="bottom-line--left-angle"></span>');
    angle.insertAdjacentHTML('afterend', '<span class="bottom-line--right-angle"></span>');
});
const anglesforNickname = document.getElementsByClassName('bottom-line-for-nickname');
[...anglesforNickname].forEach(angle => {
    angle.insertAdjacentHTML('beforebegin', '<span class="bottom-line-nickname--left-angle"></span>');
    angle.insertAdjacentHTML('afterend', '<span class="bottom-line-nickname--right-angle"></span>');
});
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// add inputs focus classes from Adik
// const inputs = document.getElementsByClassName('input');
// [...inputs].forEach((input, index) => {
//     if (index == 0) {
//         return undefined
//     }
//     const angleL = input.nextElementSibling
//     const line = angleL.nextElementSibling
//     const angleR = line.nextElementSibling
//     console.log(angleL, line, angleR)
//     input.addEventListener('focus', () => {
//         angleL.classList.add('bottom-line--left-angle-focus')
//         line.classList.add('bottom-line--focus')
//         angleR.classList.add('bottom-line--right-angle-focus')
//     })
//     input.addEventListener('blur', () => {
//         angleL.classList.remove('bottom-line--left-angle-focus')
//         line.classList.remove('bottom-line--focus')
//         angleR.classList.remove('bottom-line--right-angle-focus')
//     })
// })