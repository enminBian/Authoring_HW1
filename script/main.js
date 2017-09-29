(function() {
var theImages = document.querySelectorAll('.image-holder'),
theHeading = document.querySelector('.heading'),
theSubhead = document.querySelector('.main-copy h2'),
theSeasonText = document.querySelector('.main-copy p'),
appliedClass;

function changeElements() {
//make sure event handling is working
//debugger;
let objectIndex = dynamicContent[this.id];
//grab thr object that cprresponds to the ID of the elment clicked on
let subImages = document.querySelector('.subImagesContainer')


while (subImages.firstChild) {
  subImages.removeChild(subImages.firstChild);

}
//add some imagr of the bottom of the padding
objectIndex.images.forEach(function(image, index){

  let newSubImg = document.createElement('img');

  newSubImg.classList.add('thumb');

  newSubImg.src = "images/" + objectIndex.images[index];

  subImages.appendChild(newSubImg);

});


//remove the last css class applied
theSubhead.classList.add(appliedClass);
theHeading.classList.add(appliedClass);

//change the color of the text element
theSubhead.classList.add(this.id);
theHeading.classList.add(this.id);

theSubhead.firstChild.nodeValue = objectIndex.headline;
theSeasonText.firstChild.nodeValue = objectIndex.text;

console.log(this.id);

appliedClass = this.id;
}

theImages.forEach(function(element, index) {
// loop through the images and add event handling to each one
element.addEventListener('click', changeElements, false);
});

//document.querySelector('#spring').click();



theSubhead.firstChild.nodeValue = dynamicContent['spring'].headline;
theSeasonText.firstChild.nodeValue = dynamicContent['spring'].text;
theHeading.classList.add('spring');

})();
