let extraCanvas;

function setup() {
    createCanvas(255, 255);
    pixelDensity(1);
}

function draw() {
    background(0, 255, 255); // before
    loadPixels();
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let idx = (x + y * width) * 4;
            pixels[idx + 0] = x;
            pixels[idx + 1] = x;
            pixels[idx + 2] = x;
            pixels[idx + 3] = 255;
        }
    }
    updatePixels(); // after 
    
    // dimgray = "#303030"
    // draw_rect(20, 50, 20, 155, dimgray);
    // draw_rect(70, 50, 20, 155, dimgray);
    // draw_rect(120, 50, 20, 155, dimgray);
    // draw_rect(170, 50, 20, 155, dimgray);
    // draw_rect(220, 50, 20, 155, dimgray);
    
    lightgray = "#a3a3a3"
    draw_rect(20, 50, 20, 155, lightgray);
    draw_rect(70, 50, 20, 155, lightgray);
    draw_rect(120, 50, 20, 155, lightgray);
    draw_rect(170, 50, 20, 155, lightgray);
    draw_rect(220, 50, 20, 155, lightgray);

    noLoop();
}

function draw_rect(x, y, width, height, color) {
    fill(color);
    noStroke();
    rect(x, y, width, height);
}


