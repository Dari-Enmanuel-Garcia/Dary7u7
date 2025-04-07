const style = document.createElement("style");
style.textContent = `
    .star {
        position: absolute;
        width: 2px;
        height: 2px;
        background: white;
        border-radius: 50%;
        animation: twinkle 3s infinite ease-in-out;
    }
    @keyframes twinkle {
        0% {
            opacity: 0.2;
        }
        25% {
            opacity: 0.6;
        }
        50% {
            opacity: 1;
        }
        75% {
            opacity: 0.6;
        }
        100% {
            opacity: 0.2;
        }
    }
`;
document.head.appendChild(style);

function createStar() {
    const star = document.createElement("div");
    star.classList.add("star");

    const maxX = window.innerWidth - 2;  
    const maxY = window.innerHeight - 2; 
    star.style.left = `${Math.random() * maxX}px`; 
    star.style.top = `${Math.random() * maxY}px`;  

    star.style.animationDuration = `${2 + Math.random() * 2}s`; 

    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 3000 + Math.random() * 2000); 
}

for (let i = 0; i < 20; i++) {
    createStar();
}

setInterval(createStar, 250);