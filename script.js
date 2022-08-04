window.addEventListener('load', () => {
    const cavas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // colors
    const strokeWithColor = color => {
        ctx.strokeStyle = color;
        ctx.stroke();
    }

    const fillWithColor = color => {
        ctx.fillStyle = color;
        ctx.fill();
    }

    // basic boxes

    const drawFillRect = (x, y, width, height) => {
        ctx.fillRect(x, y, width, height);
    }

    const drawStrokeRect = (x, y, width, height) => {
        ctx.strokeRect(x, y, width, height);
    }

    const clearRect = (x, y, width, height) => {
        ctx.clearRect(x, y, width, height);
    }

    // lines

    const drawLine = (startX, startY, x, y) => {
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(x, y);
        ctx.stroke();
    }

    const drawLineMultiple = (startX, startY, lineArray) => {
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        lineArray.forEach(line => {
            ctx.lineTo(line[0], line[1]);
        })
        ctx.stroke();
    }

    // arcs
    const arc = (x, y, radius, startAngle, endAngle, lineWidth) => {
        const endingAngle = !!endAngle ? endAngle : Math.PI * 2;

        ctx.beginPath();
        ctx.arc(x, y, radius, startAngle, endingAngle);
        if(lineWidth) {
            ctx.lineWidth = lineWidth;
        }
    }

    const closePath = () => {
        ctx.closePath();
    }

    // texts
    const fillText = (text, x, y, fontSize) => {
        ctx.font = `${fontSize ? fontSize : '48px'} serif`;
        ctx.fillText(text, x, y);
    }

    const strokeText = (text, x, y, fontSize) => {
        ctx.font = `${fontSize ? fontSize : '48px'} serif`;
        ctx.strokeText(text, x, y);
    }

    // boxes
    drawFillRect(25, 25, 200, 100);
    clearRect(45, 45, 60, 60);
    clearRect(145, 45, 60, 60)
    drawStrokeRect(50, 50, 50, 50);
    drawStrokeRect(150, 50, 50, 25)

    drawFillRect(65, 70, 20, 10)

    // lines
    // drawLine(50, 20, 250, 20);
    // drawLine(250, 20, 250, 75);
    // drawLine(250, 75, 275, 20);
    drawLineMultiple(50, 20, [[250, 20],[250, 75], [275, 20]])
    closePath();

    // arcs
    arc(260, 120, 25, 0, false, 10);
    strokeWithColor('pink');
    closePath();

    arc(260, 120, 10, 0);
    fillWithColor('green');
    closePath();

    // texts
    // fillWithColor('red');
    fillText('Hello Fill', 50, 15, 20, '20px');

    // strokeWithColor('blue');
    strokeText('Hello', 50, 135, '25px');
    
    console.log('Script File Connected', {canvas, ctx});
})