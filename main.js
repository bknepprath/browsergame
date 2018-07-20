//state variables
var currentlybuilding = 0;
var currentlyfishing = 0;

//unlock variables. Start at 0, invisible. 1 is visible. Once unlocked and utilized, set to 2.
var netvisible = 1;
var hammervisible = 0;

//item variables
var fishxp = 0;
var fishcoins = 0;
var shrimps = 0;
var shrimpcatchers = 0;
var anchovies = 0;
var bass = 0;
var luckybass = 0;
var mackerels = 0;
var tuna = 0;
var swordfish = 0;
var sharks = 0;
var seaturtles = 0;
var octopuses = 0;
var mantarays = 0;
var houses = 0;

//This function will be called whenever something needs to appear or disappear
function controlVisible(){
	if(netvisible == 1){
		pickupnetbutton.style.display = "block";
	}
	else{
		pickupnetbutton.style.display = "none";
	}
	if(hammervisible == 1){
		pickuphammerbutton.style.display = "block";
	}
	else{
		pickuphammerbutton.style.display = "none";
	}
}

//Functions connected to buttons for unlocking content blocks
function pickUpNet(){
	netvisible = 2;
	cardNet.style.display = "inline-block";
	controlVisible();
}
function pickUpHammer(){
	hammervisible = 2;
	constructioncontainer.style.display = "block";
	cardHouse.style.display = "inline-block";
	controlVisible();
}

//Function that is run every second that makes variables appear when they get unlocked
function unlockContent(){
	if(shrimps>0){
		shrimpsholder.style.display = "inline-block";
	}
	if(anchovies>0){
		anchoviesholder.style.display = "inline-block";
	}
	if(bass>0){
		bassholder.style.display = "inline-block";
	}
	if(luckybass>0){
		luckybassholder.style.display = "inline-block";
	}
	if(fishlvl>4){
		cardRod.style.display = "inline-block";
	}
	if(mackerels>0){
		mackerelsholder.style.display = "inline-block";
	}
	if(fishlvl>29){
		cardHarpoon.style.display = "inline-block";
	}
	if(tuna>0){
		tunaholder.style.display = "inline-block";
	}
	if(swordfish>0){
		swordfishholder.style.display = "inline-block";
	}
	if(sharks>0){
		sharksholder.style.display = "inline-block";
	}
	if(fishlvl>99){
		cardShip.style.display = "inline-block";
	}
	if(seaturtles>0){
		seaturtlesholder.style.display = "inline-block";
	}
	if(octopuses>0){
		octopusesholder.style.display = "inline-block";
	}
	if(mantarays>0){
		mantaraysholder.style.display = "inline-block";
	}
	if(fishlvl>14 && hammervisible === 0){
		hammervisible = 1;
		controlVisible();
	}
	if(houses>0){
		housesholder.style.display = "inline-block";
	}
}

//equation for determining level based on experience
function updateFishlvl(){
	fishlvl = Math.floor(Math.sqrt(fishxp));
	if(fishlvl<1){
		fishlvl = 1;
	}
	document.getElementById("fishlvl").innerHTML = fishlvl;
}

//This function will keep the current action highlighted
//How do I make this smaller? I did this in skills idle, too
//I tried making the class of "cardstyles" update to white, then only change the necessary one to yellow. But they don't update to yellow - maybe class supersedes id?? 
function highlight(){
	if(currentlyfishing == 1){
		cardNetTitle.style.background = "yellow";
		cardRodTitle.style.background = "white";
		cardHarpoonTitle.style.background = "white";
		cardShipTitle.style.background = "white";
	}
	if(currentlyfishing == 2){
		cardNetTitle.style.background = "white";
		cardRodTitle.style.background = "yellow";
		cardHarpoonTitle.style.background = "white";
		cardShipTitle.style.background = "white";
	}
	if(currentlyfishing == 3){
		cardNetTitle.style.background = "white";
		cardRodTitle.style.background = "white";
		cardHarpoonTitle.style.background = "yellow";
		cardShipTitle.style.background = "white";
	}
	if(currentlyfishing == 4){
		cardNetTitle.style.background = "white";
		cardRodTitle.style.background = "white";
		cardHarpoonTitle.style.background = "white";
		cardShipTitle.style.background = "yellow";
	}
	if(currentlybuilding == 1){
		cardHouseTitle.style.background = "yellow";
	}
}

//Functions for starting actions
function startNetFish(){
	currentlyfishing = 1;
	updateFishlvl();
	highlight();
}
function startRodFish(){
	currentlyfishing = 2;
	updateFishlvl();
	highlight();
}
function startHarpoonFish(){
	currentlyfishing = 3;
	updateFishlvl();
	highlight();
}
function startShipFish(){
	currentlyfishing = 4;
	updateFishlvl();
	highlight();
}

//Functions for fishing
function fishShrimp(){
	if((Math.random()*100)>80){
		catchvar = Math.floor(Math.random()*4);
		fishxp = fishxp + catchvar*10;
		shrimps = shrimps + catchvar;
		document.getElementById("shrimps").innerHTML = shrimps;
		document.getElementById("fishxp").innerHTML = fishxp;
		updateFishlvl();
	}
}
function fishAnchovy(){
	if(fishlvl>14){
		if((Math.random()*100)>80){
			catchvar = Math.floor(Math.random()*3);
			if(catchvar<1){
				catchvar = 0;
			}
			fishxp += catchvar*15;
			anchovies += catchvar;
			document.getElementById("anchovies").innerHTML = anchovies;
			document.getElementById("fishxp").innerHTML = fishxp;
			updateFishlvl();
		}
	}
}
function fishBass(){
	if(fishlvl>24){
		if((Math.random()*100)>80){
			catchvar = 1;
			fishxp += catchvar*25;
			bass += catchvar;
			document.getElementById("bass").innerHTML = bass;
			document.getElementById("fishxp").innerHTML = fishxp;
			updateFishlvl();
		}
	}
}
function getLuckybass(){
	if((Math.random()*1000000)<fishlvl){
		luckybass += 1;
		document.getElementById("luckybass").innerHTML = luckybass;
	}
}
function fishMackerel(){
	if((Math.random()*100)>80){
		catchvar = 1;
		fishxp = fishxp + catchvar*10;
		mackerels += catchvar;
		document.getElementById("mackerels").innerHTML = mackerels;
		document.getElementById("fishxp").innerHTML = fishxp;
		updateFishlvl();
	}
}
function fishTuna(){
	if(fishlvl>29){
		if((Math.random()*100)>80){
			catchvar = 1;
			fishxp = fishxp + catchvar*70;
			tuna += catchvar;
			document.getElementById("tuna").innerHTML = tuna;
			document.getElementById("fishxp").innerHTML = fishxp;
			updateFishlvl();
		}
	}
}
function fishSwordfish(){
	if(fishlvl>49){
		if((Math.random()*100)>80){
			catchvar = 1;
			fishxp = fishxp + catchvar*90;
			swordfish += catchvar;
			document.getElementById("swordfish").innerHTML = swordfish;
			document.getElementById("fishxp").innerHTML = fishxp;
			updateFishlvl();
		}
	}
}
function fishShark(){
	if(fishlvl>79){
		if((Math.random()*100)>80){
			catchvar = 1;
			fishxp = fishxp + catchvar*2000;
			sharks += catchvar;
			document.getElementById("sharks").innerHTML = sharks;
			document.getElementById("fishxp").innerHTML = fishxp;
			updateFishlvl();
		}
	}
}
function fishSeaturtles(){
	if(fishlvl>99){
		if((Math.random()*100)>80){
			catchvar = 1;
			fishxp = fishxp + catchvar*1000;
			seaturtles += catchvar;
			document.getElementById("seaturtles").innerHTML = seaturtles;
			document.getElementById("fishxp").innerHTML = fishxp;
			updateFishlvl();
		}
	}
}
function fishOctopuses(){
	if(fishlvl>119){
		if((Math.random()*100)>80){
			catchvar = 8;
			fishxp = fishxp + catchvar*(3000/8);
			octopuses += catchvar;
			document.getElementById("octopuses").innerHTML = octopuses;
			document.getElementById("fishxp").innerHTML = fishxp;
			updateFishlvl();
		}
	}
}
function fishMantarays(){
	if(fishlvl>139){
		if((Math.random()*100)>80){
			catchvar = 1;
			fishxp = fishxp + catchvar*5000;
			mantarays += catchvar;
			document.getElementById("mantarays").innerHTML = mantarays;
			document.getElementById("fishxp").innerHTML = fishxp;
			updateFishlvl();
		}
	}
}

//function for construction button
function startBuild(){
	currentlybuilding = 1;
	highlight();
}

//function that runs every second to build
function build(){
	houses += 1;
	document.getElementById("houses").innerHTML = houses;
}

//1 second tick
window.setInterval(function(){
	if(currentlyfishing == 1){
		fishShrimp();
		fishAnchovy();
		fishBass();
		getLuckybass();
	}
	if(currentlyfishing == 2){
		fishMackerel();
	}
	if(currentlyfishing == 3){
		fishTuna();
		fishSwordfish();
		fishShark();
	}
	if(currentlyfishing == 4){
		fishSeaturtles();
		fishOctopuses();
		fishMantarays();
	}
	if(currentlybuilding == 1){
		build();
	}
	unlockContent();
}, 1000);
