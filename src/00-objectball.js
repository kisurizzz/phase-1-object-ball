function gameObject(){
    const home = {
        teamName: 'Brooklyn Nets',
        colors: ['black', 'white'],
        players: {
            'Alan Anderson': {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                asists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1
            },
            'Reggie Evans': {
                number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                asists: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7
            },
            'Brook Lopez': {
                number: 11,
                shoe: 17,
                points: 17,
                rebounds: 19,
                asists: 10,
                steals: 3,
                blocks: 1,
                slamDunks: 15
            },
            'Mason Plumlee': {
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                asists: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5
            },
            'Jason Terry': {
                number: 31,
                shoe: 15,
                points: 19,
                rebounds: 2,
                asists: 2,
                steals: 4,
                blocks: 11,
                slamDunks: 1
            },
        },
    }



    const away = {
        teamName: 'Charlotte Hornets',
        colors: ['Turquoise', 'Purple'],
        players: {
            'Jeff Adrien': {
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                asists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2
            },
            'Bismak Biyombo': {
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                asists: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 10
            },
            'DeSagna Diop': {
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                asists: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5
            },
            'Ben Gordon': {
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                asists: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 0
            },
            'Brendan Haywood': {
                number: 33,
                shoe: 15,
                points: 6,
                rebounds: 12,
                asists: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12
            },
        },
    }
    return{
        home: home,
        away: away
    }
}
console.log(gameObject())


const homeTeamName = () => {
    let object = gameObject()
    return object['home']["teamName"]
}

console.log(homeTeamName())

const numPointsScored = (playerName) => {
    const game = gameObject()

    let playerPoints;
  if (playerName in game.home.players) {
    playerPoints = game.home.players[playerName];
  } else if (playerName in game.away.players) {
    playerPoints = game.away.players[playerName];
  } else {
    // Player not found in either team
    return -1;
  }

 
  return playerPoints.points;
}


function shoeSize(playerName) {
    // Get the game data from the gameObject function
    const game = gameObject();
  
    // Check if 'home' or 'away' team has the player
    let playerStats;
    if (playerName in game.home.players) {
      playerStats = game.home.players[playerName];
    } else if (playerName in game.away.players) {
      playerStats = game.away.players[playerName];
    } else {
      // Player not found in either team
      return -1;
    }
  
    // If player found, return their shoe size
    return playerStats.shoe;
  }
  
//   const playerName = "Brook Lopez";
//   const shoeSizeValue = console.log(shoeSize(playerName));



  function teamColors(teamName) {
    const game = gameObject();
  
    if (teamName === game.home.teamName) {
      return game.home.colors;
    } else if (teamName === game.away.teamName) {
      return game.away.colors;
    } else {
      // Team not found
      return null;
    }
  }
  

//   const teamName = "Brooklyn Nets";
//   const colors = console.log(teamColors(teamName));
  
function teamNames() {
    const game = gameObject();
  
    const teamNamesArray = [game.home.teamName, game.away.teamName];
  
    return teamNamesArray;
  }
  
//   const teams = teamNames();
//   console.log("Teams:", teams);

function playerNumbers(teamName) {
    const game = gameObject();
  
    if (teamName === game.home.teamName) {
     
      return Object.keys(game.home.players).map(playerName => game.home.players[playerName].number);
    } else if (teamName === game.away.teamName) {
      
      return Object.keys(game.away.players).map(playerName => game.away.players[playerName].number);
    } else {
      // Team not found
      return null;
    }
  }
  

//   const teamName = "Charlotte Hornets";
//   const jerseyNumbers = console.log(playerNumbers(teamName));

function playerStats(playerName) {
    const game = gameObject();
  

    let playerStats;
    if (playerName in game.home.players) {
      playerStats = game.home.players[playerName];
    } else if (playerName in game.away.players) {
      playerStats = game.away.players[playerName];
    } else {
      // Player not found in either team
      return null;
    }
  
    // If player found, return their stats object
    return playerStats;
  }
  
//   const playerName = "Alan Anderson";
//   const stats = console.log(playerStats(playerName));

function bigShoeRebounds() {
   
    const game = gameObject();
  
    
    let largestShoeSize = 0;
    let playerWithLargestShoe;
  
    
    for (const playerName in game.home.players) {
      const playerStats = game.home.players[playerName];
      if (playerStats.shoe > largestShoeSize) {
        largestShoeSize = playerStats.shoe;
        playerWithLargestShoe = playerName;
      }
    }
  
    for (const playerName in game.away.players) {
      const playerStats = game.away.players[playerName];
      if (playerStats.shoe > largestShoeSize) {
        largestShoeSize = playerStats.shoe;
        playerWithLargestShoe = playerName;
      }
    }
  
    /
    if (playerWithLargestShoe) {
      
      return game.home.players[playerWithLargestShoe]?.rebounds || game.away.players[playerWithLargestShoe]?.rebounds;
    } else {
      return null;
    }
  }
  

  const rebounds = console.log(bigShoeRebounds());