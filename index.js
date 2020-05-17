let data = [
    { colour: '#2e9bb3', percent: 0.6 },
    { colour: '#44e754', percent: 0.4 }
]

const addData = function(colour, percent) {
    data.push({ colour, percent: percent / 100 });
    updatePie();
}

const updatePie = function() {
    let pie_canvas = document.getElementById('piechart');
    let pie_ctx = pie_canvas.getContext('2d');
    const width = pie_canvas.width;
    const height = pie_canvas.height;
    const radius = 0.4 * Math.min(width, height);
    let angle = 0;
    let finalAngle = 0;
    data.forEach(segment => {
    finalAngle = angle + 2 * Math.PI * segment.percent;
        pie_ctx.beginPath();
        pie_ctx.moveTo(width / 2, height / 2);
        pie_ctx.arc(width / 2, height / 2, radius, angle, finalAngle);
        pie_ctx.lineTo(width / 2, height / 2);
        pie_ctx.closePath();
        pie_ctx.fillStyle = segment.colour;
        pie_ctx.fill();
        angle = finalAngle;
    })
}
updatePie();
