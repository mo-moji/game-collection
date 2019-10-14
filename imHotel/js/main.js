const infoImage4 = document.querySelector(".info-image-4");
const infoImageContent4 = document.querySelector(".info-image-4-content");
const infoImageh14 = document.querySelector(".info-image-4-content h1");

const infoImage3 = document.querySelector(".info-image-3");
const infoImageContent3 = document.querySelector(".info-image-3-content");
const infoImageh13 = document.querySelector(".info-image-3-content h1");

const infoImage2 = document.querySelector(".info-image-2");
const infoImageContent2 = document.querySelector(".info-image-2-content");
const infoImageh12 = document.querySelector(".info-image-2-content h1");

const infoImage = document.querySelector(".info-image");
const infoImageContent = document.querySelector(".info-image-content");
const infoImageh1 = document.querySelector(".info-image-content h1");

const scrollInput = document.querySelector(".scroll-input .book-form");

window.addEventListener("scroll",()=>{
  let y = window.scrollY;
  console.log(y);
  if(y >= 200){
    scrollInput.style.transform = "translateY(0)";
  } 
  
  if( y < 200){
    scrollInput.style.transform = "translateY(-200px)";
  };
});


// content4 js
infoImage4.addEventListener("mouseenter", () => {
  infoImageContent4.style.backgroundColor = "rgba(0,0,0,0.5)";
  infoImageh14.style.opacity = "1";
  infoImageContent4.style.visibility = "visible";
 
  console.log("HELLO");
});
infoImage4.addEventListener("mouseleave", () => {
  infoImageContent3.style.visibility = "hidden";
  infoImageh14.style.opacity = ".1";
  infoImageContent4.style.background = "none";
  console.log("HELLO");
});
// content4 js end

// content3 js
infoImage3.addEventListener("mouseenter", () => {
  infoImageContent3.style.backgroundColor = "rgba(0,0,0,0.5)";
  infoImageh13.style.opacity = "1";
  infoImageContent3.style.visibility = "visible";
 
  console.log("HELLO");
});
infoImage3.addEventListener("mouseleave", () => {
  infoImageContent3.style.visibility = "hidden";
  infoImageh13.style.opacity = ".1";
  infoImageContent3.style.background = "none";
  console.log("HELLO");
});
// content3 js end

// content2 js
infoImage2.addEventListener("mouseenter", () => {
  infoImageContent2.style.backgroundColor = "rgba(0,0,0,0.5)";
  infoImageh12.style.opacity = "1";
  infoImageContent2.style.visibility = "visible";

  console.log("HELLO");
});

infoImage2.addEventListener("mouseleave", () => {
  infoImageContent2.style.visibility = "hidden";
  infoImageh12.style.opacity = ".1";
  infoImageContent2.style.background = "none";
  console.log("HELLO");
});
// content2 js end

// content2 js
infoImage.addEventListener("mouseenter", () => {
  infoImageContent.style.backgroundColor = "rgba(0,0,0,0.5)";
  infoImageh1.style.opacity = "1";
  infoImageContent.style.visibility = "visible";

  console.log("HELLO");
});

infoImage.addEventListener("mouseleave", () => {
  infoImageContent.style.visibility = "hidden";
  infoImageh1.style.opacity = ".1";
  infoImageContent.style.background = "none";
  console.log("HELLO");
});
// content2 js end

