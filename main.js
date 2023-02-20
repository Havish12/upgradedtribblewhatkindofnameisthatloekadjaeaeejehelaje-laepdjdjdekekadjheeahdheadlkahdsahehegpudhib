function setup()
{
    canvas = createCanvas(640,440);
    canvas.position(320,250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color="";
}

function draw()
{
    image(video, 0, 0, 640, 480);
    tint(tint_color);

    var canvas = document.getElementById('circle');
if (canvas.getContext)
{
var ctx = canvas.getContext('2d'); 
var X = canvas.width / 2;
var Y = canvas.height / 2;
var R = 45;
ctx.beginPath();
ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
ctx.lineWidth = 3;
ctx.strokeStyle = '#FF0000';
ctx.stroke();
}
}



function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}

function take_snapshot()
{
    save('havish.png');
}

