var rand1 = 0;
var useRand = 0;
images = new Array;
images[1] = new Image();
images[1].src = "/Miscellaneous/js/randPic/pic/1.png";
images[2] = new Image();
images[2].src = "/Miscellaneous/js/randPic/pic/2.png";
images[3] = new Image();
images[3].src = "/Miscellaneous/js/randPic/pic/3.png";
images[4] = new Image();
images[4].src = "/Miscellaneous/js/randPic/pic/4.png";
images[5] = new Image();
images[5].src = "/Miscellaneous/js/randPic/pic/5.png";
images[6] = new Image();
images[6].src = "/Miscellaneous/js/randPic/pic/6.png";
images[7] = new Image();
images[7].src = "/Miscellaneous/js/randPic/pic/7.png";
function randomPic() {
var imageNum = images.length - 1;
do {
var randomNum = Math.random();
rand1 = Math.round((imageNum - 1) * randomNum) + 1;
} while (rand1 == useRand);
useRand = rand1;
document.randimg.src = images[useRand].src;
}
