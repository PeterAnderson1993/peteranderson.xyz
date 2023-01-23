/** @format */

var Lives = 10
var strLives = String(Lives)
document.getElementById("Lives").innerHTML = document.getElementById("Lives").innerHTML + strLives

function testWriteHTML(item, index) {
	var div = document.getElementById("GameWord")
	div.innerHTML = div.innerHTML + "<div class='underline'><div class='GameWordLetterDivHide' name='" + item + "'>" + item + "</div></div>"
}

function getRandomWord() {
	var paragrpraph = "Does the genetics like an upper laugh? The rotten intellect discriminates beside the sure dinner. Past an early norm breaks the stationary tooth. The manpower waffles. The coach asserts the regime. Why can't a sarcasm warm the distant tennis? The chemistry postulates the bananas sin. The whatsoever south composes. The funniest ace strains underneath each squashed bookshop. The attorney kids beside an average! The proof moans! Next to its classical stagger shies away the floating creed. A mythology combats a cupboard above the devious scream. A crush profiles a drunken professor. Its activating glass solos around a message. A reform clogs over a pressure. The designing chap barks. A puzzle downs the psychologist. The terrorist cries? The smile reacts in the constitutional! Why can't the autobiography succeed? A knee jumps! A juice ensures the biography below each traveling cash. The dropping wine pops before the encouraging trumpet. A scratch balances a shell blackmail. A deed guides the insensitive insistence. The silence stirs within an adequate ladder. The populated radical believes under a laser. The tempting lark enforces a varying misprint. Why can't the witch worship a dynamic violence? A symphony documents an elite sugar around the card."

	var wordList = paragrpraph.replace(/[^a-zA-Z ]/g, "")

	var arrWords = wordList.split(" ")

	var removeDuplicates = Array.from(new Set(arrWords))

	var noOfPossibleWords = removeDuplicates.length

	var randomNumber = Math.floor(Math.random() * (noOfPossibleWords - 0)) + 0

	var UserWord = removeDuplicates[randomNumber]
	var word = UserWord.toUpperCase()
	document.getElementById("UserWord").value = ""
	var charWord = word.split("")
	charWord.forEach(testWriteHTML)
	gameBoardVisible()
	hideMenu()
}

function getWord() {
	if (document.getElementById("UserWord").value == "") {
		alert("Type a word into the text box")
	} else if (!/^[a-zA-Z]*$/g.test(document.getElementById("UserWord").value)) {
		alert("No special characters or numbers allowed!")
	} else {
		var UserWord = document.getElementById("UserWord").value
		var word = UserWord.toUpperCase()
		document.getElementById("UserWord").value = ""
		var charWord = word.split("")
		charWord.forEach(testWriteHTML)
		gameBoardVisible()
		hideMenu()
	}
}

function gameBoardVisible() {
	document.getElementById("HangingMan").style.display = "inline-block"
	document.getElementById("GameWord").style.display = "block"
	document.getElementById("letters").style.display = "inline-block"
	document.getElementById("Lives").style.display = "inline-block"
	document.getElementById("btnEndGame").style.display = "inline-block"
}

function hideMenu() {
	document.getElementById("menu").style.display = "none"
}

function gameBoardInvisible() {
	document.getElementById("HangingMan").style.display = "none"
	document.getElementById("GameWord").style.display = "none"
	document.getElementById("letters").style.display = "none"
	document.getElementById("Lives").style.display = "none"
	document.getElementById("btnEndGame").style.display = "none"
}

function showMenu() {
	document.getElementById("menu").style.display = "block"
}

function resetGameBoard() {
	location.reload()
}

function checkVisibleLetters() {
	var letters = document.getElementsByClassName("GameWordLetterDivHide")

	var NumberOfInvisibleLetters = letters.length

	//alert(NumberOfVisibleLetters);

	if (NumberOfInvisibleLetters == 0 && Lives >= 1) {
		document.getElementById("YouWinImg").style.display = "inline-block"
		document.getElementById("letters").style.display = "none"
		document.getElementById("HangingMan").style.display = "none"
	}
}

function EndGame() {
	var con = confirm("Ending the game will cause you lose all progress of this game. Are you sure you want to end this game? ")
	if (con == true) {
		gameBoardInvisible()
		showMenu()
		resetGameBoard()
		document.getElementById("Lives").innerHTML = ""
		Lives = 10
		var strLives = String(Lives)
		document.getElementById("Lives").innerHTML = document.getElementById("Lives").innerHTML + "Lives: " + strLives
	} else {
	}
}

function LivesMinusOne() {
	return (Lives -= 1)
}

function gameOver() {
	document.getElementsByName("A")
	var x = document.getElementsByName("A")
	var i
	for (i = 0; i < x.length; i++) {
		x[i].classList.remove("GameWordLetterDivHide")
		x[i].classList.add("GameWordLetterDivShow")
	}

	document.getElementsByName("B")
	var x = document.getElementsByName("B")
	var i
	for (i = 0; i < x.length; i++) {
		x[i].classList.remove("GameWordLetterDivHide")
		x[i].classList.add("GameWordLetterDivShow")
	}

	document.getElementsByName("C")
	var x = document.getElementsByName("C")
	var i
	for (i = 0; i < x.length; i++) {
		x[i].classList.remove("GameWordLetterDivHide")
		x[i].classList.add("GameWordLetterDivShow")
	}

	document.getElementsByName("D")
	var x = document.getElementsByName("D")
	var i
	for (i = 0; i < x.length; i++) {
		x[i].classList.remove("GameWordLetterDivHide")
		x[i].classList.add("GameWordLetterDivShow")
	}

	document.getElementsByName("E")
	var x = document.getElementsByName("E")
	var i
	for (i = 0; i < x.length; i++) {
		x[i].classList.remove("GameWordLetterDivHide")
		x[i].classList.add("GameWordLetterDivShow")
	}

	document.getElementsByName("F")
	var x = document.getElementsByName("F")
	var i
	for (i = 0; i < x.length; i++) {
		x[i].classList.remove("GameWordLetterDivHide")
		x[i].classList.add("GameWordLetterDivShow")
	}

	document.getElementsByName("G")
	var x = document.getElementsByName("G")
	var i
	for (i = 0; i < x.length; i++) {
		x[i].classList.remove("GameWordLetterDivHide")
		x[i].classList.add("GameWordLetterDivShow")
	}

	document.getElementsByName("H")
	var x = document.getElementsByName("H")
	var i
	for (i = 0; i < x.length; i++) {
		x[i].classList.remove("GameWordLetterDivHide")
		x[i].classList.add("GameWordLetterDivShow")
	}

	document.getElementsByName("I")
	var x = document.getElementsByName("I")
	var i
	for (i = 0; i < x.length; i++) {
		x[i].classList.remove("GameWordLetterDivHide")
		x[i].classList.add("GameWordLetterDivShow")
	}

	document.getElementsByName("J")
	var x = document.getElementsByName("J")
	var i
	for (i = 0; i < x.length; i++) {
		x[i].classList.remove("GameWordLetterDivHide")
		x[i].classList.add("GameWordLetterDivShow")
	}

	document.getElementsByName("K")
	var x = document.getElementsByName("K")
	var i
	for (i = 0; i < x.length; i++) {
		x[i].classList.remove("GameWordLetterDivHide")
		x[i].classList.add("GameWordLetterDivShow")
	}

	document.getElementsByName("L")
	var x = document.getElementsByName("L")
	var i
	for (i = 0; i < x.length; i++) {
		x[i].classList.remove("GameWordLetterDivHide")
		x[i].classList.add("GameWordLetterDivShow")
	}

	document.getElementsByName("M")
	var x = document.getElementsByName("M")
	var i
	for (i = 0; i < x.length; i++) {
		x[i].classList.remove("GameWordLetterDivHide")
		x[i].classList.add("GameWordLetterDivShow")
	}

	document.getElementsByName("N")
	var x = document.getElementsByName("N")
	var i
	for (i = 0; i < x.length; i++) {
		x[i].classList.remove("GameWordLetterDivHide")
		x[i].classList.add("GameWordLetterDivShow")
	}

	document.getElementsByName("O")
	var x = document.getElementsByName("O")
	var i
	for (i = 0; i < x.length; i++) {
		x[i].classList.remove("GameWordLetterDivHide")
		x[i].classList.add("GameWordLetterDivShow")
	}

	document.getElementsByName("P")
	var x = document.getElementsByName("P")
	var i
	for (i = 0; i < x.length; i++) {
		x[i].classList.remove("GameWordLetterDivHide")
		x[i].classList.add("GameWordLetterDivShow")
	}

	document.getElementsByName("Q")
	var x = document.getElementsByName("Q")
	var i
	for (i = 0; i < x.length; i++) {
		x[i].classList.remove("GameWordLetterDivHide")
		x[i].classList.add("GameWordLetterDivShow")
	}

	document.getElementsByName("R")
	var x = document.getElementsByName("R")
	var i
	for (i = 0; i < x.length; i++) {
		x[i].classList.remove("GameWordLetterDivHide")
		x[i].classList.add("GameWordLetterDivShow")
	}

	document.getElementsByName("S")
	var x = document.getElementsByName("S")
	var i
	for (i = 0; i < x.length; i++) {
		x[i].classList.remove("GameWordLetterDivHide")
		x[i].classList.add("GameWordLetterDivShow")
	}

	document.getElementsByName("T")
	var x = document.getElementsByName("T")
	var i
	for (i = 0; i < x.length; i++) {
		x[i].classList.remove("GameWordLetterDivHide")
		x[i].classList.add("GameWordLetterDivShow")
	}

	document.getElementsByName("U")
	var x = document.getElementsByName("U")
	var i
	for (i = 0; i < x.length; i++) {
		x[i].classList.remove("GameWordLetterDivHide")
		x[i].classList.add("GameWordLetterDivShow")
	}

	document.getElementsByName("V")
	var x = document.getElementsByName("V")
	var i
	for (i = 0; i < x.length; i++) {
		x[i].classList.remove("GameWordLetterDivHide")
		x[i].classList.add("GameWordLetterDivShow")
	}

	document.getElementsByName("W")
	var x = document.getElementsByName("W")
	var i
	for (i = 0; i < x.length; i++) {
		x[i].classList.remove("GameWordLetterDivHide")
		x[i].classList.add("GameWordLetterDivShow")
	}

	document.getElementsByName("X")
	var x = document.getElementsByName("X")
	var i
	for (i = 0; i < x.length; i++) {
		x[i].classList.remove("GameWordLetterDivHide")
		x[i].classList.add("GameWordLetterDivShow")
	}

	document.getElementsByName("Y")
	var x = document.getElementsByName("Y")
	var i
	for (i = 0; i < x.length; i++) {
		x[i].classList.remove("GameWordLetterDivHide")
		x[i].classList.add("GameWordLetterDivShow")
	}

	document.getElementsByName("Z")
	var x = document.getElementsByName("Z")
	var i
	for (i = 0; i < x.length; i++) {
		x[i].classList.remove("GameWordLetterDivHide")
		x[i].classList.add("GameWordLetterDivShow")
	}
}

function guessLetter(event) {
	var letterToGuess = event.target.innerHTML

	var x = document.getElementsByName(letterToGuess)
	var i
	for (i = 0; i < x.length; i++) {
		x[i].classList.remove("GameWordLetterDivHide")
		x[i].classList.add("GameWordLetterDivShow")
	}

	if (x.length == 0) {
		document.getElementById("Lives").innerHTML = "Lives: " + LivesMinusOne()

		if (Lives <= 9) {
			baseline()
		}
		if (Lives <= 8) {
			VerticalLine()
		}
		if (Lives <= 7) {
			BottemEnforcer()
		}
		if (Lives <= 6) {
			TopLine()
		}
		if (Lives <= 5) {
			TopEnforcer()
		}
		if (Lives <= 4) {
			Noose()
		}
		if (Lives <= 3) {
			head()
		}
		if (Lives <= 2) {
			body()
		}
		if (Lives <= 1) {
			legs()
		}
		if (Lives <= 0) {
			arms()
			/* document.getElementById("GameOverImg").style.display = "inline-block"; */
			document.getElementById("letters").style.display = "none"
			gameOver()
		}
	}

	checkVisibleLetters()
	event.target.disabled = true
	event.target.style.backgroundColor = "grey"
}

var canvas = document.getElementById("HangingMan")
var ctx = canvas.getContext("2d")

function VerticalLine() {
	/* Vertical Line */
	ctx.moveTo(100, 50)
	ctx.lineTo(100, 350)
	ctx.stroke()
}

function baseline() {
	/* BaseLine */
	ctx.moveTo(100, 350)
	ctx.lineTo(200, 350)
	ctx.stroke()
}

function TopLine() {
	/* TopLine */
	ctx.moveTo(100, 50)
	ctx.lineTo(300, 50)
	ctx.stroke()
}

function BottemEnforcer() {
	/* BottomEnforcer */
	ctx.moveTo(100, 300)
	ctx.lineTo(150, 350)
	ctx.stroke()
}

function TopEnforcer() {
	/* TopEnforcer */
	ctx.moveTo(100, 100)
	ctx.lineTo(150, 50)
	ctx.stroke()
}

function Noose() {
	/* Noose */
	ctx.moveTo(300, 50)
	ctx.lineTo(300, 100)
	ctx.stroke()
}

function head() {
	/* head */
	ctx.beginPath()
	ctx.arc(300, 120, 20, 0 * Math.PI, 2 * Math.PI)
	ctx.stroke()
}

function body() {
	/* body */
	ctx.moveTo(300, 140)
	ctx.lineTo(300, 250)
	ctx.stroke()
}

function legs() {
	/* LeftLeg */
	ctx.moveTo(300, 250)
	ctx.lineTo(275, 275)
	ctx.stroke()
	/* RightLeg */
	ctx.moveTo(300, 250)
	ctx.lineTo(325, 275)
	ctx.stroke()
}

function arms() {
	/* Arms */
	ctx.moveTo(275, 175)
	ctx.lineTo(325, 175)
	ctx.stroke()
}
