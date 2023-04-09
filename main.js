function preload() {
    img = loadImage("https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/NarutoUzumaki.png/260px-NarutoUzumaki.png");
}
function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(300, 250);

}

function draw() {
    stroke("green");
    strokeWeight(10);
    noFill();
    rect(100, 100, 500, 300);
    fill("red");
    stroke("red");
    circle(100, 100, 50);
    circle(600, 100, 50);
    circle(100, 400, 50);
    circle(600, 400, 50);
    image(img,200,200,200,100);
}

function take_snapshot() {
    save('veera.png');
}
