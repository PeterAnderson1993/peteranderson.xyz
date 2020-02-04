
var APIGetCurrentRound = {
	"async": true,
	"crossDomain": true,
	"url": "https://api-football-v1.p.rapidapi.com/v2/fixtures/rounds/524/current",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
		"x-rapidapi-key": "a32de81b44msh7563bb138017a16p112ca3jsn9eb729aa53ad"
	}
}

$.ajax(APIGetCurrentRound).done(function (response) {
	console.log(response);
	var currentRound = response.api.fixtures[0];
	
	var gameweekNum = currentRound.replace(/[^0-9]/gi, '');
	$('#gameweekNum')[0].innerHTML = gameweekNum;

	var GetFixturesOfRound = {
	"async": true,
	"crossDomain": true,
	"url": "https://api-football-v1.p.rapidapi.com/v2/fixtures/league/524/"+currentRound+"?timezone=Europe/London",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
		"x-rapidapi-key": "a32de81b44msh7563bb138017a16p112ca3jsn9eb729aa53ad"
		}
	}

	$.ajax(GetFixturesOfRound).done(function (response) {
		console.log(response);
		var fixtures_of_round = response.api.fixtures;
		/* alert(fixtures_of_round[0].homeTeam.team_name + " vs " + fixtures_of_round[0].awayTeam.team_name) */
		
		var text = "";
		var i;
		var placement = i+1;
		for (i = 0; i < fixtures_of_round.length; i++) {
	  
		text += "<p> <img src='" + fixtures_of_round[i].homeTeam.logo + "' width='25' style='padding-right:10px;'>" + fixtures_of_round[i].homeTeam.team_name + " vs " + fixtures_of_round[i].awayTeam.team_name + "<img src='" + fixtures_of_round[i].awayTeam.logo + "' width='25' style='padding-left:10px;'></p>";
		}
		
		$('#fixtures')[0].innerHTML = text;
		
		
	});
		
});



