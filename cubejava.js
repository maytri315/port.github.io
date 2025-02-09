const title = document.querySelector('h1');
const paragraph = document.getElementById('movingParagraph');

document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) - 0.5;
    const y = (e.clientY / window.innerHeight) - 0.5;

    const rotateXTitle = y * 20;
    const rotateYTitle = x * 20;

    const rotateXParagraph = -y * 20;
    const rotateYParagraph = -x * 20;

    title.style.transform = `rotateX(${rotateXTitle}deg) rotateY(${rotateYTitle}deg)`;
    paragraph.style.transform = `rotateX(${rotateXParagraph}deg) rotateY(${rotateYParagraph}deg)`;
});

function slideUpBox() {
    const box = document.getElementById('slideBox');
    box.classList.add('active');
}

function showText() {
    const text = document.getElementById('myText');
    text.style.display = 'block';
    setTimeout(() => {
        text.style.opacity = 1;
    }, 10); // Small delay to allow display change to take effect
}
