var rand1 = 0;
var useRand = 0;
function randomPic() {
var imageNum = 7;
do {
var randomNum = Math.random();
rand1 = Math.round((imageNum - 1) * randomNum) + 1;
} while (rand1 == useRand);
useRand = rand1;
document.randimg.src = '/Miscellaneous/js/randPic/pic/' + useRand + '.png';
}
