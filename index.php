<?php
// get file access/modification times
//echo "Last accessed on: " . date("d-m-y", fileatime('index.html'));
 
$last_modified_date_home = "Last modified on: " . date("jS F Y", filemtime('index.php'));
$last_modified_date_calc = date("jS F Y", filemtime('projects/calculator/Default.html'));
$last_modified_date_apitest = date("jS F Y", filemtime('projects/api_test/AllThree.html'));
$last_modified_date_hangman = date("jS F Y", filemtime('projects/hangman/Hangman.html'));
$last_modified_date_random = date("jS F Y", filemtime('projects/random_number_generator/RanNumGen.html'));

?>


<html>

<head>
	<title>Peter Anderson</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="style.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
	
	
	
</head>

<body id="home" onload="typeWriter()" style="background-color:#F8F9FA">
		
		<div style="background-color:black;">
			<div class="container pt-3" style="height: 100vh;">
			
			  <h1 style="text-align:center; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width:">
			  <code style="color:white;" id="demo1"></code></br><code style="color:white;" id="demo2"></code>
			  </h1>
			  <button type="button" class="btn btn-dark findOutMore"><a href="#about" class="text-light">Find out more</a> <i class="fas fa-arrow-down"></i></button>
			</div>
			
		</div>
		
		<nav class="navbar navbar-expand-md bg-dark navbar-dark sticky-top" style="border-bottom: 5px solid #0069D9">
			<!-- brand -->
			<a class="navbar-brand" href="#">
				
			</a>
			
			<!-- navbar toggle -->
			<button class="navbar-toggler" type="button" data-toggle="dropdown" data-target="#collapsibleNavbar">
				<span class="navbar-toggler-icon"></span>
			</button>
			
			<!-- navbar links --> 
			<div class="collapse navbar-collapse" id="collapsibleNavbar">
				<ul class="navbar-nav">
					<li class="nav-item">
						<a class="nav-link" href="#home">Home</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#about">About</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#resume">Resume</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#projects">Projects</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#contact">Contact</a>
					</li>
				</ul>
			</div>
		</nav>

		<div id="about" class="container heading">
			<p class="display-3 pb-2" style="text-align:center; border-bottom:3px solid #212529; width:200px; margin:0 auto;">
				About
			</p>
		</div>
		
		<div class="container pt-5">
			<div class="d-flex justify-content-center">
				<img class="rounded-circle" src="images/Photo_of_Pete.png" alt="About" style="width:30%">
			</div>
		</div>
		
		<div class="container pt-5">
			<p style="text-align:center; width:75%; margin:0 auto; font-weight:bold;">Hello I’m Peter Anderson, I’m an email and web developer and I am looking for work. Preferably in a fun, collaborative and challenging environment in London.</p>
			</br>
			<p>I really enjoy building websites and working with HTML, CSS, JavaScript. I really want to learn more web development languages so I can make more impressive and advanced web features . I’m currently making my own website using HTML, CSS, JavaScript and PHP in order to keep my skills up to date. I am looking to challenge myself, because that is the only way to learn more skills and grow as a person.</p>
		</div>
		
		
		<div class="container pt-3">
			<span class="badge badge-light">HTML</span>
			<div class="progress">
				<div class="progress-bar progress-bar-striped progress-bar-animated" style="width:90%">90%</div>
			</div>
		</div>
		<div class="container pt-2">
			<span class="badge badge-light">CSS</span>
			<div class="progress">
				<div class="progress-bar progress-bar-striped progress-bar-animated" style="width:90%">90%</div>
			</div>
		</div>
		<div class="container pt-2">
			<span class="badge badge-light">Bootstrap 4</span>
			<div class="progress">		
				<div class="progress-bar progress-bar-striped progress-bar-animated" style="width:75%">75%</div>
			</div>
		</div>
		<div class="container pt-2">
			<span class="badge badge-light">JavaScript</span>
			<div class="progress">
				<div class="progress-bar progress-bar-striped progress-bar-animated" style="width:75%">75%</div>
			</div>
		</div>
		<div class="container pt-2">
			<span class="badge badge-light">JQuery</span>
			<div class="progress">
				<div class="progress-bar progress-bar-striped progress-bar-animated" style="width:55%">55%</div>
			</div>
		</div>
		<div class="container pt-2">
			<span class="badge badge-light">PHP</span>
			<div class="progress">
				<div class="progress-bar progress-bar-striped progress-bar-animated" style="width:35%"><span>35%</span></div>
			</div>
		</div>
		<div class="container pt-2">
			<span class="badge badge-light">Email Development</span>
			<div class="progress">
				<div class="progress-bar progress-bar-striped progress-bar-animated" style="width:80%">80%</div>
			</div>
		</div>
		<div class="container pt-2">
			<span class="badge badge-light">Photoshop</span>
			<div class="progress">
				<div class="progress-bar progress-bar-striped progress-bar-animated" style="width:75%">75%</div>
			</div>
		</div>
		
		<div id="resume" class="container heading">
			<p class="display-3 pb-2" style="text-align:center; border-bottom:3px solid #212529; width:250px; margin:0 auto;">
				Resume
			</p>
		</div>
			
		<div class="container pb-4 pt-5">
		 
		  <br>
		  <!-- Nav tabs -->
		  <ul class="nav nav-tabs" role="tablist">
			
			<li class="nav-item">
			  <a class="nav-link active" data-toggle="tab" href="#menu1">Employment History</a>
			</li>
			<li class="nav-item">
			  <a class="nav-link" data-toggle="tab" href="#menu2">Education</a>
			</li>
		  </ul>

		  <!-- Tab panes -->
		  <div class="tab-content">
		   
			<div id="menu1" class="container tab-pane active"><br>
			  <h3 class="">Employment History <small>- Click on each role for details.</small></h3>
				<div class="pt-3">
					<strong><a class="employmentcollapse" data-toggle="collapse" data-target="#job1">Email Campaign Manager</a></strong></br>Engine: Transformation</br>August 2019 - October 2019
					<div id="job1" class="collapse">
					</br>
					
					<ul>
					  <li>Coding pixel perfect, responsive Emails that render correctly on all major email clients</li>
					  <li>Testing emails on all main email clients using Litmus.</li>
					  <li>Writing clear and concise HTML5 and CSS3.</li>
					  <li>Setting up email campaigns in Adobe Campaigns, Smartfocus and Salesforce.</li>
					</ul>
					</div>
				</div>
				
				<div class="pt-3">
					<strong><a class="employmentcollapse" data-toggle="collapse" data-target="#job2">Technical Consultant</a></strong></br>Mapp Digital</br>July 2018 – August 2019
					<div id="job2" class="collapse">
					</br>
					<ul>
					  <li>Coding full email campaigns.</li>
					  <li>Testing Emails on a variety of email clients to ensure they render correctly and everything is working.</li>
					  <li>Writing clear and concise HTML5 and CSS3.</li>
					  <li>Building Rest API calls.</li>
					  <li>Coding with JSP to send data from web forms to the Mapp Engage system.</li>
					  <li>Implementing JavaScript/jQuery into landing pages.</li>
					  <li>Working and communicating efficiently with project managers.</li>
					  <li>Helping colleagues whenever I can.</li>
					  <li>Managing my time to ensure I meet deadlines.</li>
					  <li>Taking advantage of all resources to ensure the quick and quality delivery of completed tasks and projects.</li>
					  <li>Training colleges to create email campaigns.</li>
					  <li>Providing technical expertise to clients.</li>
					</ul>
					</div>
				</div>
				<div class="pt-3">
					<strong><a class="employmentcollapse" data-toggle="collapse" data-target="#job3">Web and Intranet Content Editor</a></strong></br>De Montfort University</br>January 2018 – March 2018
					<div id="job3" class="collapse">
					</br>
					<ul>
					  <li>Moving staff content from the DMU main site to the staff intranet called "DMU connect".</li>
					  <li>Creating professional web pages for the staff intranet using Microsoft SharePoint.</li>
					  <li>Creating policy pages with bookmark links.</li>
					  <li>Copying policies from PDFs onto a web page.</li>
					  <li>Expressing my ideas to my supervisor and in meetings for improving our section of the intranet.</li>
					  <li>Editing pictures using Adobe Fireworks or Photoshop for the intranet to make the web pages look more attractive.</li>
					  <li>Stayed on for 2 extra weeks after my 6 weeks contract came to an end.</li>
					</ul>
					</div>
				</div>
			</div>
			<div id="menu2" class="container tab-pane fade"><br>
			  <h3>Education</h3>
				<p class="pt-3"><strong>De Montfort University 2013 - 2017</strong></br>
				Computing BSc (Hons)</br>
				3rd Class Honours Degree</p>
				
				<p class="pt-2"><strong>Erith Secondary School Post 16 2009 – 2011</strong></br>
				A level Oracle – Pass</br>
				OCR Level 3 ICT – Pass</p>
				
				<p class="pt-2"><strong>Erith Secondary School 2004 – 2009</strong></br>
				6 A – C GCSEs – Including English Lang + Lit (C), Maths (C) and IT (C)
				</p>
			</div>
		  </div>
		</div>
		
		<div id="projects" class="container heading">
			<p class="display-3 pb-3" style="text-align:center; border-bottom:3px solid #212529; width:250px; margin:0 auto;">
				Projects
			</p>
		</div>
		
		<div id="projects_container" class="container pb-5" style="padding-top:65px;">
			<!-- DO NOT DELETE THIS DIV -->
			<!-- this div is used by script.js to house the project cards -->	  
		</div>
		
		<div id="contact" class="container heading">
			<p class="display-3 pb-3" style="text-align:center; border-bottom:3px solid #212529; width:250px; margin:0 auto;">
				Contact
			</p>
		</div>
		
		<div class="container pt-5">
			<div style="margin:0 auto; width:100%; height:500px;">
				<iframe src="contact_form.html" style="border:0;  overflow: hidden; width:100%; height:500px;"></iframe>
			</div>
		</div>
			
		<div class="footer1 bg-dark p-3">
		  <h3>Peter Anderson</h3>
		  <p style="font-size:30px;">
			<a href="https://www.facebook.com/Peter5000" target="_blank" style="color:white; text-decoration:none;">
				<i class="fab fa-facebook"></i>
			</a>
			<a href="https://www.instagram.com/petera93/?hl=en" target="_blank" style="color:white; text-decoration:none;">
				<i class="fab fa-instagram"></i>
			</a>
			<a href="https://www.linkedin.com/in/peteranderson1993/" target="_blank" style="color:white; text-decoration:none;">
				<i class="fab fa-linkedin"></i>
			</a>
			<a href="https://github.com/PeteDawg5000/peteranderson.x10host.com" target="_blank" style="color:white; text-decoration:none;">
				<i class="fab fa-github"></i>
			</a>
			</p>
			<p><?php echo $last_modified_date_home; ?></p>
		</div>
	
	
	
	
</body>
<script src="script.js"></script>
</html>