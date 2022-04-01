alert("working");


let checkboxValue = [];
let checkboxSelector = document.getElementsByClassName('checkbox');
let otherPage = 0;
let buttonSelector = document.getElementsByClassName('counterBtn');
let otherFeatures = 0;


let generateBtn = document.getElementsByClassName('Generate');
let multiPage = false;
let totalFeatures;
let totalPages;
let totalCost = 0;

let pageNumBtns = document.getElementsByClassName('prevQuestionSquare');
pageNumBtns[0].classList.add("hidden");
pageNumBtns[1].classList.add("hidden");
let qpScreens = document.getElementsByClassName('QPscreen');
let miniScreens = document.getElementsByClassName('prevQuestionBar');
let nextButton = document.getElementsByClassName('nextBtn');


//////////////////////////////
//    QpScreen 0 Buttons    //
//////////////////////////////
document.getElementsByClassName('PageBtn')[0].addEventListener("click", ()=>{
multiPage = false;
pageNumBtns[0].classList.remove("hidden");
pageNumBtns[1].classList.remove("hidden");
qpScreens[0].classList.add("hidden");
qpScreens[1].classList.remove("hidden");
pageNumBtns[0].style.borderRadius = "25px 25px 0 0";
pageNumBtns[1].style.borderRadius = "25px";

});
document.getElementsByClassName('PageBtn')[1].addEventListener("click", ()=>{
multiPage = true;
pageNumBtns[0].classList.remove("hidden");
pageNumBtns[1].classList.remove("hidden");
qpScreens[0].classList.add("hidden");
qpScreens[1].classList.remove("hidden");
pageNumBtns[0].style.borderRadius = "25px";
pageNumBtns[1].style.borderRadius = "25px 25px 0 0";
});

///////////////////////////
//     Next Buttons     //
//////////////////////////
nextButton[0].addEventListener("click", function(){
  miniScreens[0].classList.remove("hidden");
  qpScreens[1].classList.add("hidden");
  qpScreens[2].classList.remove("hidden");

});
nextButton[1].addEventListener("click", function(){
  miniScreens[1].classList.remove("hidden");
  qpScreens[2].classList.add("hidden");
  qpScreens[3].classList.remove("hidden");
  getQuote();
  document.getElementsByClassName("Cost")[0].textContent = "$" + totalCost + ".00";
});

////////////////////////////
//   Mini Screen Buttons  //
////////////////////////////
pageNumBtns[0].addEventListener("click", function(){
  multiPage = false;
  pageNumBtns[0].classList.remove("hidden");
  pageNumBtns[1].classList.remove("hidden");
  qpScreens[0].classList.add("hidden");
  qpScreens[1].classList.remove("hidden");
  qpScreens[2].classList.add("hidden");
  qpScreens[3].classList.add("hidden");
  miniScreens[0].classList.add("hidden");
  miniScreens[1].classList.add("hidden");
  pageNumBtns[0].style.borderRadius = "25px 25px 0 0";
  pageNumBtns[1].style.borderRadius = "25px";
});
pageNumBtns[1].addEventListener("click", function(){
  multiPage = true;
  pageNumBtns[0].classList.remove("hidden");
  pageNumBtns[1].classList.remove("hidden");
  qpScreens[0].classList.add("hidden");
  qpScreens[1].classList.remove("hidden");
  qpScreens[2].classList.add("hidden");
  qpScreens[3].classList.add("hidden");
  miniScreens[0].classList.add("hidden");
  miniScreens[1].classList.add("hidden");
  pageNumBtns[0].style.borderRadius = "25px";
  pageNumBtns[1].style.borderRadius = "25px 25px 0 0";
});
miniScreens[0].addEventListener("click", function(){
  qpScreens[0].classList.add("hidden");
  qpScreens[1].classList.remove("hidden");
  qpScreens[2].classList.add("hidden");
  qpScreens[3].classList.add("hidden");
  miniScreens[0].classList.add("hidden");
  miniScreens[1].classList.add("hidden");

});
miniScreens[1].addEventListener("click", function(){
  qpScreens[0].classList.add("hidden");
  qpScreens[1].classList.add("hidden");
  qpScreens[2].classList.remove("hidden");
  qpScreens[3].classList.add("hidden");
  miniScreens[1].classList.add("hidden");

});
///////////////////////////
//  Form Functionality   //
//////////////////////////

buttonSelector[0].addEventListener("click", ()=>{
  otherPage--;
  if(otherPage < 0){
    otherPage =0;
  }
  document.getElementsByClassName('counterNum')[0].textContent = otherPage;
});
buttonSelector[1].addEventListener("click", ()=>{
  otherPage++;
  if(otherPage > 10){
    otherPage = 10;
  }
  document.getElementsByClassName('counterNum')[0].textContent = otherPage;
});
buttonSelector[2].addEventListener("click", ()=>{
  otherFeatures--;
  if(otherFeatures < 0){
    otherFeatures =0;
  }
  document.getElementsByClassName('counterNum')[1].textContent = otherFeatures;
});
buttonSelector[3].addEventListener("click", ()=>{
  otherFeatures++;
  if(otherFeatures > 10){
    otherFeatures = 10;
  }
  document.getElementsByClassName('counterNum')[1].textContent = otherFeatures;
});


checkboxSelector[0].addEventListener("click", ()=>{
  toggleCheck(0);
});
checkboxSelector[1].addEventListener("click", ()=>{
  toggleCheck(1);
});
checkboxSelector[2].addEventListener("click", ()=>{
  toggleCheck(2);
});
checkboxSelector[3].addEventListener("click", ()=>{
  toggleCheck(3);
});
checkboxSelector[4].addEventListener("click", ()=>{
  toggleCheck(4);
});
checkboxSelector[5].addEventListener("click", ()=>{
  toggleCheck(5);
});
checkboxSelector[6].addEventListener("click", ()=>{
  toggleCheck(6);
});
checkboxSelector[7].addEventListener("click", ()=>{
  toggleCheck(7);
});
checkboxSelector[8].addEventListener("click", ()=>{
  toggleCheck(8);
});
checkboxSelector[9].addEventListener("click", ()=>{
  toggleCheck(9);
});
checkboxSelector[10].addEventListener("click", ()=>{
  toggleCheck(10);
});
checkboxSelector[11].addEventListener("click", ()=>{
  toggleCheck(11);
});
checkboxSelector[12].addEventListener("click", ()=>{
  toggleCheck(12);
});
checkboxSelector[13].addEventListener("click", ()=>{
  toggleCheck(13);
});
generateBtn[0].addEventListener("click", function(){
  getQuote();
  document.getElementsByClassName("Cost")[0].textContent = "$" + totalCost + ".00";
});









////////////////////////////////////////////////////////////////////////////////
//                              Functions                                     //
////////////////////////////////////////////////////////////////////////////////


function toggleCheck(btnNum){

checkboxValue[btnNum] = checkboxValue[btnNum] !== true;

checkboxSelector[btnNum].classList.toggle("checked");

}
function getQuote(){
//Sets total page Value
totalPages = 0;
for (var i = 0; i < 7; i++) {
  if(checkboxValue[i] == true){
    totalPages++;
  }
}
totalPages = totalPages + otherPage;
// Sets total feature value
totalFeatures = 0;
for (var i = 7; i < 14; i++) {
if(checkboxValue[i] == true)
{
totalFeatures++;
}
}
totalFeatures = totalFeatures + otherFeatures;
//Decides what type of website it is
if(multiPage == false){
//Generates single page cost
totalCost = 600 + (totalPages * 25) + (totalFeatures * 50);
}else{
//Generates multi Page cost
totalCost = 500 + (totalPages * 100) + (totalFeatures * 50);
}
}
