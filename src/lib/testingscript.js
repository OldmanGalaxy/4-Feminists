const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particlesArray = [];
const numberOfParticles = 1;

const mouse = {
    x: null,
    y: null
};

const leafImage = new Image();
leafImage.src = '/public/assets/leaf.png';

let mouseMoving = false;
let clearParticlesTimeout;

window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
    mouseMoving = true;
    clearTimeout(clearParticlesTimeout);
    createParticles();
    clearParticlesTimeout = setTimeout(() => {
        mouseMoving = false;
        particlesArray.length = 0; // Clear particles array
    }, 10000);
});

class Particle {
    constructor(x, y, size, weight, rotation, opacity, horizontalSpeed, fadePoint) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.weight = weight;
        this.rotation = rotation;
        this.opacity = opacity;
        this.horizontalSpeed = horizontalSpeed;
        this.fadePoint = fadePoint;
    }
    draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.drawImage(leafImage, -this.size / 2, -this.size / 2, this.size, this.size);
        ctx.restore();
    }
    update() {
        this.size -= 0.01;
        this.opacity -= 0.004;
        this.rotation += 0.01;

        if (this.size < 0 || this.opacity <= 0) {
            const index = particlesArray.indexOf(this);
            if (index > -1) {
                particlesArray.splice(index, 1);
            }
            return;
        }

        this.y += this.weight;
        this.x += this.horizontalSpeed;
        this.weight += 0.01;

        if (this.y > this.fadePoint)
            this.opacity -= 0.02;
    }
}

function createParticles() {
    for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 20) + 10;
        let x = mouse.x + (Math.random() * 20 - 10);
        let y = mouse.y + (Math.random() * 20 - 10);
        let weight = (Math.random() * 0.5) + 0.5;
        let rotation = Math.random() * 2 * Math.PI;
        let opacity = 1;
        let horizontalSpeed = (Math.random() * 2) - 1;
        let fadePoint = Math.random() * canvas.height;
        particlesArray.push(new Particle(x, y, size, weight, rotation, opacity, horizontalSpeed, fadePoint));
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = particlesArray.length - 1; i >= 0; i--) {
        particlesArray[i].update();
        particlesArray[i].draw();

        if (particlesArray[i].size < 0 || particlesArray[i].opacity <= 0)
            particlesArray.splice(i, 1);
    }
    requestAnimationFrame(animate);
}

leafImage.onload = function() {
    animate();
};
