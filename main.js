canvas= document.getElementById('myCanvas');
ctx= canvas.getContext ("2d");
nasa_mars_images_array = ["nasa1.jpg","NASA2.jpg", "Nasa3.jpg","Nasa4.jpg"];
random_number = Math.floor(Math.random() * 4);
background_image = nasa_mars_images_array[random_number];
rover_height=300; rover_width=300;
rover_image = "rover.png";

function add() {
background_imagetag  = new Image ();
background_imagetag.onload  =  uploadbackground; 
background_imagetag.src=background_image;
rover_x=10;
rover_y=10;


rover_imagetag  = new Image ();
rover_imagetag.onload  =  uploadrover; 
rover_imagetag.src=rover_image;
}

function uploadbackground() {
ctx.drawImage (background_imagetag,0,0,canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage (rover_imagetag, rover_x,rover_y, rover_width, rover_height);
    }

    window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
keyPressed = e.keyCode; console.log(keyPressed);
if (keyPressed ==  '38') {up ();}
if (keyPressed ==  '40') {down ();}
if (keyPressed ==  '37') {left ();}
if (keyPressed ==  '39') {right ();}
}

function up() {
if (rover_y >= 0) {
rover_y = rover_y-10;
uploadbackground(); 
uploadrover();}
}
function down() {
if (rover_y <=500) {
rover_y = rover_y+10;
uploadbackground ();
uploadrover();}
}

function right() {
if (rover_x>=0) {
rover_x = rover_x+10;
uploadbackground();
uploadrover();}
}

function left() {
if (rover_x<=700) {
rover_x = rover_x-10;
uploadbackground ();
uploadrover ();}
}


