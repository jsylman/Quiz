$(document).ready(function(){
	$(".questionID").text('');
	$(".hide").hide();
	$("#next").hide();
	$(".result").hide();
	var newQuiz;
	var qID;
	var questionArray;

	$("#newGame").click(function(){
		newGame();
	});

	$("form").submit(function(event){
		event.preventDefault();
		var userGuess = $(".multiple-choice-answer").val();
		checkAnswer(userGuess);
	});

	$("#next").click(function(){
		newQuiz.questionID++
		$(".multiple-choice-answer").val("");
		$('.result').hide();
		$('#next').hide();
		printQuestion();
	});

	$("#a").click(function(){
		$(".multiple-choice-answer").val("a");
	});
	$("#b").click(function(){
		$(".multiple-choice-answer").val("b");
	});
	$("#c").click(function(){
		$(".multiple-choice-answer").val("c");
	});
	$("#d").click(function(){
		$(".multiple-choice-answer").val("d");
	});


	var newGame = function(){
		$("#newGame").hide();
		$('.result').hide();
		newQuiz = Object.create(Quiz);
		$(".multiple-choice-answer").val("");
		$('.score').text(newQuiz.correct+" Correct, "+newQuiz.incorrect+" Incorrect");
		printQuestion();
	};

	var printQuestion = function(){
		qID= newQuiz.questionID+1
		questionArray = newQuiz.questions[qID-1]
		$(".questionID").text('Question '+qID+' of 10');
		$("#questionImage").attr("src",newQuiz.questions[qID-1].picture);
		$("#a").text('A. '+ questionArray.choices[0]);
		$("#b").text('B. '+ questionArray.choices[1]);
		$("#c").text('C. '+ questionArray.choices[2]);
		$("#d").text('D. '+ questionArray.choices[3]);
		$(".hide").show();
	}

	var checkAnswer = function(userAnswer){
		if(userAnswer.toLowerCase()==questionArray.answer.toLowerCase()){
			$('.questionResult').text("That is correct!");
			newQuiz.correct++;
			$('.score').text(newQuiz.correct+" Correct, "+newQuiz.incorrect+" Incorrect");
			$('.user').hide();
			$('.result').show();
			if(newQuiz.questionID<9){
				$('#next').show();
			}
			else{
				$(".questionID").text('');
				$("#newGame").text("New Game?");
				$("#newGame").show();
			}
		}
		else{
			$('.questionResult').text("Wrong! The correct answer is "+ questionArray.answer.toUpperCase());
			newQuiz.incorrect++;
			$('.score').text(newQuiz.correct+" Correct, "+newQuiz.incorrect+" Incorrect");
			$('.user').hide();
			$('.result').show();
			if(newQuiz.questionID<9){
				$('#next').show();
			}
			else{
				$(".questionID").text('');
				$("#newGame").text("New Game?");
				$("#newGame").show();
			}
		}
	}

	
	var question1 = {
		text: "Who is this character?",
		picture: "images/Abby.png",
		choices: ["Big Bird", "Abby", "Elmo", "Zoe"],
		answer: "b"
	};

	var question2 = {
		text: "Who is this character?",
		picture: "images/Bert.png",
		choices: ["Bert", "Abby", "Elmo", "Zoe"],
		answer: "a"
	};
	var question3 = {
		text: "Who is this character?",
		picture: "images/Bigbird.png",
		choices: ["Big Bird", "Abby", "Elmo", "Zoe"],
		answer: "a"
	};
	var question4 ={
		text: "Who is this character?",
		picture: "images/Cookie.png",
		choices: ["Big Bird", "Cookie Monster", "Elmo", "Zoe"],
		answer: "b"
	};
	var question5 = {
		text: "Who is this character?",
		picture: "images/Elmo.jpeg",
		choices: ["Big Bird", "Abby", "Elmo", "Zoe"],
		answer: "c"
	};
	var question6 = {
		text: "Who is this character?",
		picture: "images/Ernie.jpg",
		choices: ["Ernie", "Abby", "Elmo", "Zoe"],
		answer: "a"
	};
	var question7 = {
		text: "Who is this character?",
		picture: "images/Grover.jpg",
		choices: ["Big Bird", "Abby", "Grover", "Zoe"],
		answer: "c"
	};
	var question8 = {
		text: "Who is this character?",
		picture: "images/Oscar.jpeg",
		choices: ["Oscar", "Abby", "Elmo", "Zoe"],
		answer: "a"
	};
	var question9 = {
		text: "Who is this character?",
		picture: "images/Rosita.jpg",
		choices: ["Big Bird", "Abby", "Rosita", "Zoe"],
		answer: "c"
	};
	var question10 = {
		text: "Who is this character?",
		picture: "images/Snuffy.png",
		choices: ["Big Bird", "Zoe", "Elmo", "Snuffy"],
		answer: "d"
	};

	var Quiz = {
		questionID: 0,
		questionNumber: 1,
		questions: [question1, question2,question3,question4,question5,question6,question7,question8,question9,question10],
		correct: 0,
		incorrect: 0
	}
});