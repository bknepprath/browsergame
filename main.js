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
var sharks = 0;
var seaturtles = 0;
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

///two functions for unlocking content blocks
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
	if(fishlvl>79){
		cardShip.style.display = "inline-block";
	}
	if(sharks>0){
		sharksholder.style.display = "inline-block";
	}
	if(seaturtles>0){
		seaturtlesholder.style.display = "inline-block";
	}
	if(fishlvl>14 && hammervisible === 0){
		hammervisible = 1;
		controlVisible();
	}
	if(houses>0){
		housesholder.style.display = "inline-block";
	}
}

function updateFishlvl(){
	fishlvl = Math.floor(Math.sqrt(fishxp));
	if(fishlvl<1){
		fishlvl = 1;
	}
	document.getElementById("fishlvl").innerHTML = fishlvl;
}

//This function will keep active idlers highlighted
//How do I make this smaller? I did this in skills idle, too
//I tried making the class of "cardstyles" update to white, then only change the necessary one to yellow. But they don't update to yellow - maybe class supersedes id?? 
function highlight(){
	if(currentlyfishing == 1){
		cardNetTitle.style.background = "yellow";
		cardRodTitle.style.background = "white";
		cardShipTitle.style.background = "white";
	}
	if(currentlyfishing == 2){
		cardNetTitle.style.background = "white";
		cardRodTitle.style.background = "yellow";
		cardShipTitle.style.background = "white";
	}
	if(currentlyfishing == 3){
		cardNetTitle.style.background = "white";
		cardRodTitle.style.background = "white";
		cardShipTitle.style.background = "yellow";
	}
	if(currentlybuilding == 1){
		cardHouseTitle.style.background = "yellow";
	}
}

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

function startShipFish(){
	currentlyfishing = 3;
	updateFishlvl();
	highlight();
}

function fishShrimp(){
	catchvar = Math.floor(Math.random()*4);
	fishxp = fishxp + catchvar*10;
	shrimps = shrimps + catchvar;
	document.getElementById("shrimps").innerHTML = shrimps;
	document.getElementById("fishxp").innerHTML = fishxp;
	updateFishlvl();
}

function fishAnchovy(){
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
function fishBass(){
	catchvar = 1;
	fishxp += catchvar*25;
	bass += catchvar;
	document.getElementById("bass").innerHTML = bass;
	document.getElementById("fishxp").innerHTML = fishxp;
	updateFishlvl();
}

function getLuckybass(){
	luckybass += 1;
	fishcoins += 1000;
	document.getElementById("luckybass").innerHTML = luckybass;
}

function fishMackerel(){
	catchvar = 1;
	fishxp = fishxp + catchvar*10;
	mackerels += catchvar;
	document.getElementById("mackerels").innerHTML = mackerels;
	document.getElementById("fishxp").innerHTML = fishxp;
	updateFishlvl();
}

function fishShark(){
	catchvar = 1;
	fishxp = fishxp + catchvar*2000;
	sharks += catchvar;
	document.getElementById("sharks").innerHTML = sharks;
	document.getElementById("fishxp").innerHTML = fishxp;
	updateFishlvl();
}

function fishSeaturtles(){
	catchvar = 1;
	fishxp = fishxp + catchvar*1000;
	seaturtles += catchvar;
	document.getElementById("seaturtles").innerHTML = seaturtles;
	document.getElementById("fishxp").innerHTML = fishxp;
	updateFishlvl();
}

function startBuild(){
	currentlybuilding = 1;
	highlight();
}

function build(){
	houses += 1;
	document.getElementById("houses").innerHTML = houses;
}

function gut(){
	while(shrimps>0){
		if(shrimps>1000){
			if((Math.random()*100)>50){
				fishcoins += (1000-(Math.random()*200));
			}
		}
		if((Math.random()*100)>50){
			fishcoins += 1;
		}
		shrimps -= 1;
		document.getElementById("shrimps").innerHTML = shrimps;
		document.getElementById("fishcoins").innerHTML = fishcoins;
	}
}
/*
function buyShrimpcatcher(){
    var shrimpcatcherCost = Math.floor(10 * Math.pow(1.1,shrimpcatchers));
    if(fishcoins >= shrimpcatcherCost){
        shrimpcatchers += 1;
    	fishcoins = fishcoins - shrimpcatcherCost;
        document.getElementById('shrimpcatchers').innerHTML = shrimpcatchers;
        document.getElementById('fishcoins').innerHTML = fishcoins;
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,shrimpcatchers));
    document.getElementById('shrimpcatcherCost').innerHTML = nextCost;
}
*/
window.setInterval(function(){
	if(currentlyfishing == 1){
		catchchancevar = Math.random()*100;
		if((80-(fishlvl/10))<catchchancevar){
			fishShrimp();
		}
		if(fishlvl>4){
			if((90-(fishlvl/10))<catchchancevar){
				fishAnchovy();
			}
		}
		if(fishlvl>9){
			if((100-(fishlvl/10))<catchchancevar){
				fishBass();
			}
		}
		if((Math.random()*1000000)<fishlvl){
			getLuckybass();
		}
	}
	if(currentlyfishing == 2){
		catchchancevar = Math.random()*100;
		if((80-(fishlvl/10))<catchchancevar){
			fishMackerel();
		}
		
	}
	if(currentlyfishing == 3){
		if(fishlvl>79){
			catchchancevar = Math.random()*100;
			if((105-(fishlvl/10))<catchchancevar){
				fishShark();
			}
		}
		if(fishlvl>99){
			catchchancevar = Math.random()*100;
			if((106-(fishlvl/10))<catchchancevar){
				fishSeaturtles();
			}
		}
		
	}
	/* shrimps += shrimpcatchers;
	document.getElementById("shrimps").innerHTML = shrimps;
	*/
	if(currentlybuilding == 1){
		build();
	}
	unlockContent();
	console.log("gay");
}, 1000);
