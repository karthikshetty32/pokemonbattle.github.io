// JavaScript Document

// JavaScript Document

let GameManager = {
	setGameStart: function(classType){
		this.resetPlayer(classType);
		this.setPrefight();
		},
		resetPlayer: function(classType){
		switch(classType){
			
		case "Blastoise" :	
		player = new Player(classType, 200 ,0 ,150, 80, 50);
			break;
			
	    case "Charizad" :	
		player = new Player(classType, 200 ,0 ,150, 90, 60);
			break;
			
		case "Greninja" :	
		player = new Player(classType, 170 ,0 ,90, 60, 85);
			break;
			
		case "Pikachu" :	
		player = new Player(classType, 140 ,1 ,70, 100, 70);
			break;
			
		case "Lugia" :	
		player = new Player(classType, 150 ,0 ,150, 100, 70);
			break;	
			
		case "Eevee" :	
		player = new Player(classType, 120 ,1 ,50, 100, 80);
			break;
			
			}
			let getInterface = document.querySelector(".interface");
			
			getInterface.innerHTML = '<img src="images/playerpokemon/' + classType.toLowerCase() + '.jpg" class="img-avatar"><div class="d-flex flex-column px-5"><h3>' + classType + '</h3><p class="health-player">Health: ' + player.health + '</p><p>Mana : ' + player.mana + '</p><p>Strength : ' + player.strength + '</p><p>Agility : ' + player.agility + '</p><p>Speed :' + player.speed + '</p></div>' ;
			
		},
		setPrefight: function(){
			let getHeader = document.querySelector(".header");	
			let getActions = document.querySelector(".actions");
			let getArena = document.querySelector(".arena");
			
		getHeader.innerHTML = '<p>Task : Find an enemy!</p>';
		getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()" >Search for an enemy!</a>';
		getArena.style.visibility = "visible";
		
		},
		setFight: function(){
			let getHeader = document.querySelector(".header");	
			let getActions = document.querySelector(".actions");
			let getEnemy = document.querySelector(".enemy");
			
			
			// create enemy!
			
			let enemy00 = new Enemy("Darkrai", 150,0,90,80,70 );
			let enemy01 = new Enemy("Garchomp", 180,0,100,120,100 );
			let enemy02 = new Enemy("Lapras", 120,0,50,100,80 );
			let enemy03 = new Enemy("Lucario", 150,0,100,90,80 );
			let enemy04 = new Enemy("Milotic", 120,1,50,80,80 );
			let enemy05 = new Enemy("Rhyperior", 200,0,140,80,90 );
			let enemy06 = new Enemy("Tyranitar", 200,0,130,70,100 );
			let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(7));
		//	console.log(chooseRandomEnemy);
		
		switch(chooseRandomEnemy){
			
		case 0 :	
		    enemy = enemy00;
			break;
			
	   case 1 :	
		    enemy = enemy01;
			break
			
	   case 2 :	
		    enemy = enemy02;
			break;
			
	   case 3 :	
		    enemy = enemy03;
			break
			
	   case 4 :	
		    enemy = enemy04;
			break;
			
	   case 5 :	
		    enemy = enemy05;
			break
			
	   case 6 :	
		    enemy = enemy06;
			break
						
			}
			getHeader.innerHTML = '<span style="float:left;"><a href="index.html" class="btn btn-danger ">Refresh Browser to Play New Match</a></span><p>Task: Choose your move!</p>';
			getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack</a>';
			getEnemy.innerHTML = '<img src="images/enemypokemon/' + enemy.enemyType.toLowerCase() + '.jpg" alt="' + enemy.enemyType + '" class="img-avatar"><div class="d-flex flex-column px-5"><h3>' + enemy.enemyType + '</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p>Mana : ' + enemy.mana + '</p><p>Strength : ' + enemy.strength+ '</p><p>Agility: ' + enemy.agility + '</p><p>Speed: ' + enemy.speed + '</p></div> ';
			}
	
	
	}