const boom = document.getElementById("boom");
const playBoomSound = document.getElementById("play-boom");
const clap = document.getElementById("clap");
const playClapSound = document.getElementById("play-clap");
const hihat = document.getElementById("hihat");
const playHihatSound= document.getElementById("play-hihat");
const kick = document.getElementById("kick");
const playKickSound = document.getElementById("play-kick");
const openhat = document.getElementById("openhat");
const playOpenhatSound = document.getElementById("play-openhat");
const ride = document.getElementById("ride");
const playRideSound = document.getElementById("play-ride");
const snare = document.getElementById("snare");
const playSnareSound = document.getElementById("play-snare");
const tink = document.getElementById("tink");
const playTinkSound = document.getElementById("play-tink");
const tom = document.getElementById("tom");
const playTomSound = document.getElementById("play-tom");

boom.addEventListener('click',playBoom);
clap.addEventListener('click',playClap);
hihat.addEventListener('click',playHihat);
kick.addEventListener('click',playKick);
openhat.addEventListener('click',playOpenhat);
ride.addEventListener('click',playRide);
snare.addEventListener('click',playSnare);
tink.addEventListener('click',playTink);
tom.addEventListener('click',playTom);



function playBoom(){
	playBoomSound.load();
	playBoomSound.play();
	boom.style.boxShadow = '0px 0px 30px 15px red';
	setTimeout(function(){
		boom.style.boxShadow = 'none';
	},100);
}

function playClap(){

	clap.style.boxShadow = '0px 0px 30px 15px  #FFAC33';
	console.log("pressed");
	playClapSound.load();
	playClapSound.play();
	setTimeout(function(){
		clap.style.boxShadow = 'none';
	},100);
}

function playHihat(){

	hihat.style.boxShadow = '0px 0px 30px 15px  #F9FF33';
	console.log("pressed");
	playHihatSound.load();
	playHihatSound.play();
	setTimeout(function(){
		hihat.style.boxShadow = 'none';
	},100);
}

function playKick(){

	kick.style.boxShadow = '0px 0px 30px 15px #80FF33';
	console.log("pressed");
	playKickSound.load();
	playKickSound.play();
	setTimeout(function(){
		kick.style.boxShadow = 'none';
	},100);
}

function playOpenhat(){

	openhat.style.boxShadow = '0px 0px 30px 15px #33FF9F';
	console.log("pressed");
	playOpenhatSound.load();
	playOpenhatSound.play();
	setTimeout(function(){
		openhat.style.boxShadow = 'none';
	},100);
}

function playRide(){

	ride.style.boxShadow = '0px 0px 30px 15px #33F3FF';
	console.log("pressed");
	playRideSound.load();
	playRideSound.play();
	setTimeout(function(){
		ride.style.boxShadow = 'none';
	},100);
}

function playSnare(){

	snare.style.boxShadow = '0px 0px 30px 15px #3393FF';
	console.log("pressed");
	playSnareSound.load();
	playSnareSound.play();
	setTimeout(function(){
		snare.style.boxShadow = 'none';
	},100);
}

function playTink(){

	tink.style.boxShadow = '0px 0px 30px 15px #7D33FF';
	console.log("pressed");
	playTinkSound.load();
	playTinkSound.play();
	setTimeout(function(){
		tink.style.boxShadow = 'none';
	},100);
}

function playTom(){

	tom.style.boxShadow = '0px 0px 30px 15px #FF33FF';
	console.log("pressed");
	playTomSound.load();
	playTomSound.play();
	setTimeout(function(){
		tom.style.boxShadow = 'none';
	},100);
}

document.onkeydown = event => {
  if(event.keyCode == 65){
  	playBoom();
  }else if(event.keyCode == 83){
  	playClap()
  }else if(event.keyCode == 68){
  	playHihat()
  }else if(event.keyCode == 70){
  	playKick()
  }else if(event.keyCode == 71){
  	playOpenhat()
  }else if(event.keyCode == 72){
  	playRide()
  }else if(event.keyCode == 74){
  	playSnare()
  }else if(event.keyCode == 75){
  	playTink()
  }else if(event.keyCode == 76){
  	playTom()
  }
}
