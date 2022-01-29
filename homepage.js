alert("working");
//////////////////////////
//   Art Gallery Wheel  //
//////////////////////////
let theta = Math.PI / 2.0;
const cards = document.querySelectorAll('.picRot');
const artWheel = document.querySelectorAll(".artGalleryImg");
const wheel = document.querySelector('.centerCircle');
let wheelRadius = 300.00;
let wheelTheta = 0.0;
let newTheta = 0.0;
let newX = 0.0;
let newY = 0.0;
let changeAngle = 0;
let offsetInRadians = 0.0;
const center = {
  x: parseFloat(getComputedStyle(cards[0]).left),
  y: parseFloat(getComputedStyle(cards[0]).top)
};
let offscreenRotate = 1;
let imageNeeded = 0;
let newImage;
let loopCounter = 0;

cards.forEach((card, index) => {
  newTheta = (theta * index) + offsetInRadians;
  newX = Math.cos(newTheta) * wheelRadius;
  newY = Math.sin(newTheta) * wheelRadius * -1;
  card.style.left = `${center.x + newX}px`;
  card.style.top = `${center.y + newY}px`;
});

setInterval(function() {
  wheelTheta++;
  loopCounter++;
  wheel.style.transform = `translate(-50%, -50%) rotate(${wheelTheta}deg)`;

  if(loopCounter == 90)
  {
    newImage = pickNewImage(imageNeeded);
    artWheel[offscreenRotate].src = newImage;

    offscreenRotate++;
    if (offscreenRotate > 3) {
      offscreenRotate = 0;
    }
    imageNeeded++;
    if (imageNeeded > 8) {
      imageNeeded = 0;
    }
    loopCounter = 0;
  }
}, 50);
// setInterval(function() {
//   newImage = pickNewImage(imageNeeded);
//   artWheel[offscreenRotate].src = newImage;
//
//   offscreenRotate++;
//   if (offscreenRotate > 3) {
//     offscreenRotate = 0;
//   }
//   imageNeeded++;
//   if (imageNeeded > 8) {
//     imageNeeded = 0;
//   }
// }, 4500);

function pickNewImage(imagePlacer) {
  let newColor;
  switch (imagePlacer) {
    case 0:
      newColor = 'artGallery/chestBursters.jpg';
      break;
    case 1:
      newColor = 'artGallery/chockingOoze.jpg';
      break;
    case 2:
      newColor = 'artGallery/dragonMasquerade.jpg';
      break;
    case 3:
      newColor = 'artGallery/eroguro.jpg';
      break;
    case 4:
      newColor = 'artGallery/goreyAngel.jpg';
      break;
    case 5:
      newColor = 'artGallery/infection.jpg';
      break;
    case 6:
      newColor = 'artGallery/jekyllTransformation.jpg';
      break;
    case 7:
      newColor = 'artGallery/KartWheel.jpg';
      break;
    case 8:
      newColor = 'artGallery/symbolLady.jpg';
      break;
    default:
      newColor = "null";
  }
  return newColor;
}
