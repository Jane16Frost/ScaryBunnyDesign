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
let mobileLoopCounter = 0;
let newWidth = 0.0;
let newHeight = 0.0;
let newPercentage = 0.0;
let imageNeededForLoops;
window.onload = setArtGalleyLook;
window.addEventListener("resize", setArtGalleyLook);
// cards.forEach((card, index) => {
//   newTheta = (theta * index) + offsetInRadians;
//   newX = Math.cos(newTheta) * wheelRadius;
//   newY = Math.sin(newTheta) * wheelRadius * -1;
//   card.style.left = `${center.x + newX}px`;
//   card.style.top = `${center.y + newY}px`;
// });
setInterval(function() {
  if (window.innerWidth > 992) {
    wheelTheta++;
    loopCounter++;
    wheel.style.transform = `translate(-50%, -50%) rotate(${wheelTheta}deg)`;

    if (loopCounter == 90) {
      newImage = pickNewImage(imageNeeded);
      artWheel[offscreenRotate].src = newImage;

      offscreenRotate++;
      if (offscreenRotate > 3) {
        offscreenRotate = 0;
      }
      loopCounter = 0;
      imageNeeded++;
      if (imageNeeded > 8) {
        imageNeeded = 0;
      }
    }
  }
  else
  {
      mobileLoopCounter++;
      if (mobileLoopCounter == 50) {
        mobileLoopCounter = 0;

        imageNeededForLoops = imageNeeded - 2;
        if(imageNeededForLoops == -2)
        {
          imageNeededForLoops = 7;
        }
        if(imageNeededForLoops == -1)
        {
          imageNeededForLoops = 8;
        }
        artWheel[0].src = pickNewImage(imageNeededForLoops);

        imageNeededForLoops = imageNeeded - 1;
        if(imageNeededForLoops == -1)
        {
          imageNeededForLoops = 8;
        }

        artWheel[1].src = pickNewImage(imageNeededForLoops);

        artWheel[2].src = pickNewImage(imageNeeded);
        imageNeededForLoops = imageNeeded + 1;
        if(imageNeededForLoops == 9)
        {
          imageNeededForLoops = 0;
        }
        artWheel[3].src = pickNewImage(imageNeededForLoops);

        imageNeeded++;
        if (imageNeeded > 8) {
          imageNeeded = 0;
        }
      }
      newWidth = 200.0 - mobileLoopCounter;
      newHeight = 280.0 - (mobileLoopCounter * 1.4);
      newPercentage = 51.0 - mobileLoopCounter;
      cards[1].style.width = `${newWidth}px`;
      cards[1].style.height = `${newHeight}px`;
      cards[1].style.left = `${newPercentage}%`;

      newWidth = 150.0 + mobileLoopCounter;
      newHeight = 210.0 + (mobileLoopCounter * 1.4);
      newPercentage = 101.0 - mobileLoopCounter;
      cards[2].style.width = `${newWidth}px`;
      cards[2].style.height = `${newHeight}px`;
      cards[2].style.left = `${newPercentage}%`;

  }
}, 50);


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

function setArtGalleyLook() {
  if (window.innerWidth > 992) {
    wheel.style.transform = `translate(-50%, -50%) rotate(0deg)`;
    cards.forEach((card, index) => {
      card.style.width = "200px";
      card.style.height = '280px';
      newTheta = (theta * index) + offsetInRadians;
      newX = Math.cos(newTheta) * wheelRadius;
      newY = Math.sin(newTheta) * wheelRadius * -1;
      card.style.left = `${center.x + newX}px`;
      card.style.top = `${center.y + newY}px`;
    });
  } else {
    cards.forEach((card, index) => {
      card.style.top = "50%";
      card.style.transform = 'translate(-50%, - 50%)';
      // card.style.left = "50%";
    });
    wheel.style.transform = `translate(-50%, -50%) rotate(0deg)`;
    cards[0].style.left = '0%';
    cards[0].style.height = '210px';
    cards[0].style.width = '150px';
    cards[3].style.left = '100%';
    cards[3].style.height = '210px';
    cards[3].style.width = '150px';
  }
}
