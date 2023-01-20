//Projects
var NewProjects = [
  {
    ProjectName: "Hangman",
    date_started: "march 2018",
    date_lastupdated: "January 2020",
    icon: "fa-male",
    languages: ["HTML", "CSS", "JavaScript"],
    model_id: "hangman_model",
    github: "https://github.com/PeteDawg5000/peteranderson.x10host.com/tree/master/projects/hangman",
    livedemo: "projects/hangman/Hangman.html",
    complete: "y",
  },
  {
    ProjectName: "Random Number Generator",
    date_started: "June 2017",
    date_lastupdated: "June 2017",
    icon: "fa-random",
    languages: ["HTML", "CSS", "JavaScript"],
    model_id: "random_model",
    github: "https://github.com/PeteDawg5000/peteranderson.x10host.com/tree/master/projects/random_number_generator",
    livedemo: "projects/random_number_generator/RanNumGen.html",
    complete: "y",
  },
  {
    ProjectName: "Calculator",
    date_started: "June 2017",
    date_lastupdated: "June 2017",
    icon: "fa-calculator",
    languages: ["HTML", "CSS", "JavaScript"],
    model_id: "calc_model",
    github: "https://github.com/PeteDawg5000/peteranderson.x10host.com/tree/master/projects/calculator",
    livedemo: "projects/calculator/Default.html",
    complete: "y",
  },
];

function convertJsontoHtmlTable() {
  var tablecolumns = [];
  for (var i = 0; i < NewProjects.length; i++) {
    for (var key in NewProjects[i]) {
      if (tablecolumns.indexOf(key) === -1) {
        tablecolumns.push(key);
      }
    }
  }

  //Creating html table and adding class to it
  var tableprojects = document.createElement("table");
  tableprojects.classList.add("table");
  tableprojects.classList.add("table-striped");
  tableprojects.classList.add("table-bordered");
  tableprojects.classList.add("table-hover");

  //Creating header of the HTML table using
  //tr
  var tr = tableprojects.insertRow(-1);

  for (var i = 0; i < tablecolumns.length; i++) {
    //header
    var th = document.createElement("th");
    th.innerHTML = tablecolumns[i];
    tr.appendChild(th);
  }

  // Add employee JSON data in table as tr or rows
  for (var i = 0; i < NewProjects.length; i++) {
    tr = tableprojects.insertRow(-1);
    for (var j = 0; j < tablecolumns.length; j++) {
      var tabCell = tr.insertCell(-1);
      tabCell.innerHTML = NewProjects[i][tablecolumns[j]];
    }
  }

  //Final step , append html table to the container div
  var projectdivcontainer = document.getElementById("projectdivcontainer");
  projectdivcontainer.innerHTML = "";
  projectdivcontainer.appendChild(tableprojects);
}

convertJsontoHtmlTable();
