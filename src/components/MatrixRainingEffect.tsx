import { useEffect, useRef } from "react";

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

        // Function to generate a random gray to white color
        const getRandomGrayColor = () => {
            const grayColors = ['#111111', '#222222', '#333333', '#444444', '#555555', '#666666', '#777777', '#888888', '#999999', '#aaaaaa', '#bbbbbb', '#cccccc', '#dddddd', '#eeeeee', '#ffffff'];
            return grayColors[Math.floor(Math.random() * grayColors.length)];
        };

        
        // create function to generate random black color
        const getRandomNeonColor = () => {
            const neonColors = ['#cb3301', '#ff0066', '#ff6666', '#feff99', '#ffff67', '#ccff66', '#99fe00', '#fe99ff', '#ff99cb', '#fe349a', '#cc33cc', '#cb33ff', '#6633cc', '#3366ff', '#33ccff', '#99ffff', '#33cccc', '#339999', '#00ffcc', '#00cc99', '#66ffcc', '#66ff66', '#66cc66', '#00ff99', '#33ff99', '#33cc33', '#66ff33', '#66ff00', '#66cc00', '#00cc33', '#00ff00', '#33ff00', '#33cc00', '#339933', '#669933', '#99cc33', '#ccff33', '#ffff00', '#ffcc00', '#ff9900', '#ff6600', '#cc6633', '#996633', '#663300', '#ff3300', '#ff0000', '#cc0000', '#990033', '#330000', '#660000'];
            return neonColors[Math.floor(Math.random() * neonColors.length)];
        };


        const getRandomColor = () => {
            // pick red or green randomly
            const redOrGreen = Math.floor(Math.random() * 2);
            if (redOrGreen === 0) {
                return getRandomGrayColor();
            } else {
                return getRandomGrayColor();
            }
        };

        // Initialize drops
        for (let i = 0; i < 100; i++) {
            drops[i] = {
                x: Math.random() * width,
                y: Math.random() * height,
                char: charArray[Math.floor(Math.random() * charArray.length)],
                fontSize: Math.floor(Math.random() * 10 + 30),
                color: getRandomColor(),
                speed: Math.random() * 1 + 0.3
            };
        }

        const draw = () => {
            ctx.clearRect(0, 0, width, height); // Clear the entire canvas
        
            drops.forEach(drop => {
                ctx.fillStyle = drop.color; // Set the fillStyle to the character's color
                ctx.font = `${drop.fontSize}px VT323, monospace`; // Use VT323 font
                ctx.fillText(drop.char, drop.x, drop.y);                ctx.fillText(drop.char, drop.x, drop.y);
        
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

    return <canvas className="matrix-canvas" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        pointerEvents: 'none',
    }} ref={canvasRef}></canvas>;
};

export default MatrixRainingCode;
