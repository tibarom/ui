"use client"

interface AniComponentProps {
}

import React, { useEffect, useRef } from 'react';

const StarFieldAnimation: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const w = canvas.width = window.innerWidth;
        const h = canvas.height = window.innerHeight;

        let stars: any[] = [];
        const hue = 217;
        const maxStars = 1200;

        // Create an offscreen canvas to draw the glow effect
        const canvas2 = document.createElement('canvas');
        const ctx2 = canvas2.getContext('2d');
        canvas2.width = 100;
        canvas2.height = 100;
        const half = canvas2.width / 2;
        if (!ctx || !ctx2) return;
        const gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
        gradient2.addColorStop(0.025, '#fff');
        gradient2.addColorStop(0.1, `hsl(${hue}, 61%, 33%)`);
        gradient2.addColorStop(0.25, `hsl(${hue}, 64%, 6%)`);
        gradient2.addColorStop(1, 'transparent');

        ctx2.fillStyle = gradient2;
        ctx2.beginPath();
        ctx2.arc(half, half, half, 0, Math.PI * 2);
        ctx2.fill();

        // Helper functions
        const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
        const maxOrbit = (x: number, y: number) => {
          let max = Math.max(x, y)
          let diameter = Math.round(Math.sqrt(max * max + max * max));
          return diameter / 2;
        } 

        const minOrbit = (x: number, y: number) => {
          let min = Math.min(x, y)
          let diameter = Math.round(Math.sqrt(min * min + min * min));
          return diameter / 2;
        } 
        
        class Star {
            orbitRadius;
            radius;
            orbitX;
            orbitY;
            timePassed;
            speed;
            alpha;

            constructor() {
                this.orbitRadius = random(minOrbit(w, h), maxOrbit(w, h));
                this.radius = random(60, this.orbitRadius) / 12;
                this.orbitX = w / 2;
                this.orbitY = h / 2;
                this.timePassed = random(0, maxStars);
                this.speed = random(0, this.orbitRadius) / 900000;
                this.alpha = random(2, 10) / 10;
                stars.push(this);
            }

            draw() {
                const x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX;
                const y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY;
                const twinkle = random(0, 10);

                if (twinkle === 1 && this.alpha > 0) {
                    this.alpha -= 0.05;
                } else if (twinkle === 2 && this.alpha < 1) {
                    this.alpha += 0.05;
                }
                
                if(!ctx) return;
                ctx.globalAlpha = this.alpha;
                ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
                this.timePassed += this.speed;
            }
        }

        const initStars = () => {
            for (let i = 0; i < maxStars; i++) {
                new Star();
            }
        };

        const animate = () => {
            ctx.globalCompositeOperation = 'source-over';
            ctx.globalAlpha = 0.8;
            ctx.fillStyle = `hsla(${hue}, 64%, 6%, 1)`;
            ctx.fillRect(0, 0, w, h);

            ctx.globalCompositeOperation = 'lighter';
            stars.forEach(star => star.draw());

            window.requestAnimationFrame(animate);
        };

        initStars();
        animate();
    }, []);

    return (
      <div className="sticky top-0">
        <div>
      <div id="canvas">
      <canvas 
        // style = {{ width: "100vw", height: "100vw" }}
        ref={canvasRef}></canvas>
        </div>
      </div>
      </div>
    );
};

export default StarFieldAnimation;
