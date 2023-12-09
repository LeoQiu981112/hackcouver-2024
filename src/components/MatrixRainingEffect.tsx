import React, { useEffect, useRef } from "react";

const MatrixRainingCode = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const characters = "abcdefghijklmnopqrstuvwxyz0123456789計算智机器未来电脑科技软件硬盘网络技術";
        const charArray = characters.split("");
        let drops = [];

        // Function to generate a random color (red)
        const getRandomRedColor = () => {
            const redChannel = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
            return `#ff${redChannel}${redChannel}`;
        };

        // Function to generate a random color (green)
        const getRandomGreenColor = () => {
            const greenChannel = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
            return `#00${greenChannel}00`;
        };
        // const getRandomColor = () => {
        //     const baseColor = Math.random() < 0.5 ? '00' : 'ff'; // '00' for green, 'ff' for red
        //     const randomChannelValue = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
        //     const alpha = Math.random() * 0.5 + 0.5; // Alpha between 0.5 and 1
        //     return `#${baseColor}${randomChannelValue}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`;
        // };
        const getRandomColor = () => {
            const isRed = Math.random() < 0.5;
            if (isRed) {
                return getRandomRedColor();
            } else {
                return getRandomGreenColor();
            }
        };

        // Initialize drops
        for (let i = 0; i < 100; i++) {
            drops[i] = {
                x: Math.random() * width,
                y: Math.random() * height,
                char: charArray[Math.floor(Math.random() * charArray.length)],
                fontSize: Math.floor(Math.random() * 5 + 15),
                color: getRandomColor(),
                speed: Math.random() * 1 + 0.3
            };
        }

        const draw = () => {
            ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
            ctx.fillRect(0, 0, width, height);

            drops.forEach(drop => {
                ctx.fillStyle = drop.color; // Set the fillStyle to the character's color
                ctx.font = drop.fontSize + "px monospace";
                ctx.fillText(drop.char, drop.x, drop.y);

                drop.y += drop.speed; // Move the drop at its speed

                if (drop.y > height) {
                    drop.x = Math.random() * width;
                    drop.color = getRandomColor();
                    drop.y = 0;
                    drop.char = charArray[Math.floor(Math.random() * charArray.length)];
                    drop.fontSize = Math.floor(Math.random() * 35 + 5); // Change font size only when reset
                }
            });
        };

        const animate = () => {
            draw();
            requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return <canvas className="matrix-canvas fixed top-0 left-0 z-[-1]" ref={canvasRef}></canvas>;
};

export default MatrixRainingCode;
