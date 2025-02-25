// var btnOne = document.getElementById('read-more-one');
// var btnTwo = document.getElementById('read-more-two');
// var btnThree = document.getElementById('read-more-three');
// var btnFour = document.getElementById('read-more-four');

// function buttonOne(){
//     btnOne 
// }


document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', () => {
        const postContent = button.previousElementSibling;
        const dots = postContent.querySelector('.dots');
        const moreText = postContent.querySelector('.more');

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            moreText.style.display = "none";
            button.textContent = "Read more";
        } else {
            dots.style.display = "none";
            moreText.style.display = "inline";
            button.textContent = "Read less";
            }
        });
});