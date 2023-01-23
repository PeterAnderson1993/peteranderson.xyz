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
	gameBoardInvisible()
	showMenu()
	resetGameBoard()
	document.getElementById("Lives").innerHTML = ""
	Lives = 10
	var strLives = String(Lives)
	document.getElementById("Lives").innerHTML = document.getElementById("Lives").innerHTML + "Lives: " + strLives
}

function LivesMinusOne() {
	return (Lives -= 1)
}

function gameOver() {
	var AllHiddenLetters = document.getElementsByClassName("GameWordLetterDivHide")

	for (var i = 0; i < AllHiddenLetters.length; i++) {
		AllHiddenLetters[i].style.visibility = "visible"
	}

	document.getElementById("HangingMan").style.background = "red"
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
			document.getElementById("letters").style.display = "none"
			gameOver(event)
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
