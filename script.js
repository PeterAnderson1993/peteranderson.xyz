$(document).ready(function(){
  $('[data-toggle="popover"]').popover();
});

var i = 0;
var z = 0;
var firstLine = "Hello, I'm Peter Anderson.";
var secondLine = "I'm an email and web developer.";
var speed = 50;



function typeWriter() {
  if (i < firstLine.length) {
	document.getElementById("demo1").innerHTML += firstLine.charAt(i);
	i++;
	setTimeout(typeWriter, speed);
  }
	  setTimeout(function typeWriterSecondLine(){
		if (z < secondLine.length) {
		document.getElementById("demo2").innerHTML += secondLine.charAt(z);
		z++;
		setTimeout(typeWriter, speed);
	  }
	}, 2100);
}

//Projects 
//must be a multiple of 3 to have each row have 3 columns
var projects = 
[
	{
		"name":"API Test", "date_started":"June 2019", "date_lastupdated":"June 2019","icon":"fa-film", "languages":["HTML","CSS","JavaScript","AJAX","JSON","REST"],"model_id":"api_model",
		"github":"https://github.com/PeteDawg5000/peteranderson.x10host.com/tree/master/projects/api_test","livedemo":"projects/api_test/AllThree.html","":""
	},
	{
		"name":"Hangman", "date_started":"march 2018", "date_lastupdated":"January 2020","icon":"fa-male", "languages":["HTML","CSS","JavaScript"],"model_id":"hangman_model",
		"github":"https://github.com/PeteDawg5000/peteranderson.x10host.com/tree/master/projects/hangman","livedemo":"projects/hangman/Hangman.html"
	},
	{
		"name":"Random Number Generator", "date_started":"June 2017", "date_lastupdated":"June 2017","icon":"fa-random", "languages":["HTML","CSS","JavaScript"],"model_id":"random_model",
		"github":"https://github.com/PeteDawg5000/peteranderson.x10host.com/tree/master/projects/random_number_generator","livedemo":"projects/random_number_generator/RanNumGen.html"
	},
	{
		"name":"Calculator", "date_started":"June 2017", "date_lastupdated":"June 2017","icon":"fa-calculator", "languages":["HTML","CSS","JavaScript"],"model_id":"calc_model",
		"github":"https://github.com/PeteDawg5000/peteranderson.x10host.com/tree/master/projects/calculator","livedemo":"projects/calculator/Default.html"
	},
	{
		"name":"Football API", "date_started":"Febuary 2020", "date_lastupdated":"Febuary 2020","icon":"fa-futbol", "languages":["HTML","CSS","JavaScript","AJAX","JSON","REST"],"model_id":"football_model","github":"https://github.com/PeteDawg5000/peteranderson.x10host.com/tree/master/projects/football_api","livedemo":"projects/football_api/index.html"
	},
	{
		"name":"Now TV - Email Interview Task", "date_started":"Febuary 2020", "date_lastupdated":"Febuary 2020","icon":"nowTvIcon", "languages":["HTML","CSS"],"model_id":"nowTV_model","github":"https://github.com/PeteDawg5000/peteranderson.x10host.com/tree/master/projects/now_tv_email","livedemo":"projects/now_tv_email/interview_task.html"
	}
]

var i;
var idCode = 0;

//Only make 2 rows at array [2] and [3]
for (let i = 0; i < projects.length; i++) { 
	if (i == 0 || i == 1 || i == 4 || i == 5) 
		continue; idCode++; $('#projects_container')[0].innerHTML += "<div id='project_row_" + idCode + "' class='row pt-2'></div>";
};

var project_card;
var empty_project_card;
var move_to_new_row = 1;

console.log(projects[i].languages[1]);

//make a project card

//Not currently using the modals as info can be found on github
 for (i = 0; i < projects.length; i++) {
	 
	  
	
		project_card = 
		"\
			<div class='col-sm pt-1'>\
				<div class='card shadow' style='width:100%'>\
					<i class='fas " + projects[i].icon + "' style='font-size:100px; padding:20px; text-align:center'></i>\
					<div class='card-body card-body-height' style='height:175px'>\
						<h5 class='card-title'>" + projects[i].name + "</h5>\
						<p class='card-text'>\
							<h6>Languages:</h6>\
							<div class='languages_container'></div>\
						</p>\
						<div class='sticky'>\
							<!--<button type='button' class='btn btn-info' data-toggle='modal' data-target='#" + projects[i].model_id + "'>Info</button>&nbsp;-->\
							<a href='" + projects[i].github + "' target='_blank' class='btn btn-dark'>GitHub</a>&nbsp;\
							<a href='" + projects[i].livedemo + "' target='_blank' class='btn btn-primary'>Live Demo</a>\
						</div>\
					</div>\
				</div>\
			</div>\
			<!-- The Modal -->\
		  <div class='modal' id='" + projects[i].model_id + "'>\
			<div class='modal-dialog'>\
			  <div class='modal-content'>\
				<!-- Modal Header -->\
				<div class='modal-header'>\
				  <h4 class='modal-title'>" + projects[i].name + "</h4>\
				  <button type='button' class='close' data-dismiss='modal'>&times;</button>\
				</div>\
				<!-- Modal body -->\
				<div class='modal-body'>\
					<h6>Description</h6>\
					I made this game of hangman as a fun project idea to advance my JavaScript skills.\
					<br><br>\
					I first made this game to have one person type the word for someone else to guess. \
					Later, I used the same code but instead of having to type out a word, an array is made from a few paragraphs copied and pasted from various websites.\
					The paragraphs have been striped of all special characters and then the array is made by seperating each word by a space. \
					I then took the code from my Randon Number Generator to randomly select a number in the array. \
					This created a single player game. \
					<br><br>\
					<h6>Changes Made:</h6> \
					&bull; Added the viewport META tag to make it mobile responsive.<br>\
					&bull; Added ability to play a single player game.\
				</div>\
				<!-- Modal footer -->\
				<div class='modal-footer'>\
				  <button type='button' class='btn btn-danger' data-dismiss='modal'>Close</button>\
				</div>\
			  </div>\
			</div>\
		  </div>\
		";
		//Puts every project in to a new row at every 4th project(array starts at zero)
		if(i == 3 || i == 6){
			move_to_new_row++;
		}
		//make empty
		if(Object.entries(projects[i]).length === 0)
		{
			project_card = "<div class='col-sm paddingTop10'></div>"
			
			$('#project_row_'+ move_to_new_row)[0].innerHTML += project_card;
		}
		//else use populated column and project card
		else
		{
			$('#project_row_'+move_to_new_row)[0].innerHTML += project_card;
		}
	  
	
	
}

//adding languages to the project cards
var n;
var x;

for (n = 0; n < projects.length; n++) {
	
	for (x = 0; x < projects[n].languages.length; x++){
		
		$( ".languages_container" )[n].innerHTML += " <span class='badge badge-success'>" + projects[n].languages[x] +"</span>";
		
	}
	
}



	
