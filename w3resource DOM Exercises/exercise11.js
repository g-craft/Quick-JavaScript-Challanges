function randomImage() {
var imagesList = [{
   src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
   width: "240",
   height: "160"
}, {
   src: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
   width: "320",
   height: "195"
}, {
   src: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
   width: "500",
   height: "343"
}];
random = Math.floor(Math.random()*3);

document.querySelector("img").src = imagesList[random].src;
document.querySelector("img").width = imagesList[random].width;
document.querySelector("img").height = imagesList[random].height;

}
