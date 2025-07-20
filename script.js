//variables
let mic;
let fft;


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  //set up microphone input
  mic = new p5.AudioIn();
  mic.start()

  //set up fast fourier transform (fft) algorithm
  fft = new p5.FFT();
  fft.setInput(mic);
}

function draw() {
  
}
