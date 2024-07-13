function generateLeaves() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';

    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const maxParticles = 300;
    let particles = [];

    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 20 + 10;
            this.image = new Image();
            this.image.src = '../public/assets/leaf.png';
            this.speedX = Math.random() * 4 - 2;
            this.speedY = Math.random() * 2 + 1;
            this.rotation = Math.random() * 2 * Math.PI;
            this.opacity = Math.random() * 0.5 + 0.5;
            this.fadeInterval = Math.random() * 2000 + 1000;
            this.fadeStart = Date.now();
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            this.rotation += Math.random() * 0.05 - 0.025;

            const elapsedTime = Date.now() - this.fadeStart;
            if (elapsedTime > this.fadeInterval)
                this.opacity -= 0.005;

            if (this.opacity <= 0)
                particles.splice(particles.indexOf(this), 1);
        }

        draw() {
            ctx.save();
            ctx.globalAlpha = this.opacity;
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation);
            ctx.drawImage(this.image, -this.size / 2, -this.size / 2, this.size, this.size);
            ctx.restore();
        }
    }

    function createParticles(x, y) {
        if (particles.length < maxParticles)
            particles.push(new Particle(x, y));
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((particle) => {
            particle.update();
            particle.draw();
        });
        requestAnimationFrame(animate);
    }

    let lastCall = 0;
    const throttle = 35;

    const mouseMoveHandler = (event) => {
        const now = Date.now();
        if (now - lastCall < throttle)
            return;
        lastCall = now;

        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        createParticles(mouseX, mouseY);
    };

    window.addEventListener('mousemove', mouseMoveHandler);

    const resizeHandler = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeHandler);

    animate();

    return {
        canvas,
        cleanup: () => {
            window.removeEventListener('mousemove', mouseMoveHandler);
            window.removeEventListener('resize', resizeHandler);
            document.body.removeChild(canvas);
        },
    };
}

generateLeaves();