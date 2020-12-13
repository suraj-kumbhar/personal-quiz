let readlineSync = require('readline-sync');
let chalk = require('chalk');
const log = console.log
const headingLog = chalk.magenta.bold;
const questionLog = chalk.bold.cyan;
const correctLog = chalk.green;
const wrongLog = chalk.red;
const questionLogBlue = chalk.blue.bold;




let questions = [
    {
        'id': 1,
        'question': 'What is my favourite movie?',
        'answer': 'The Dark Knight',
        'options': [
            'Iron Man',
            'The Shawshank Redemption',
            'The Godfather',
            'The Dark Knight'
        ],
    },
    {
        'id': 2,
        'question': 'Where do I work?',
        'answer': 'Arcesium',
        'options': [
            'Tata Consultancy Services Ltd',
            'Infosys',
            'Arcesium',
            'Groffers'
        ],
    },
    {
        'id': 3,
        'question': 'What is my favourite book?',
        'answer': 'The Da Vinci Code',
        'options': [
            'The Da Vinci Code',
            'Divergent',
            'The Hunger Games',
            'To kill a Mockingbird'
        ],
    },
    {
        'id': 4,
        'question': 'What is my favourite color?',
        'answer': 'Purple',
        'options': [
            'Black',
            'Purple',
            'Blue',
            'Maroon'
        ],
    },
    {
        'id': 5,
        'question': 'Where do I live?',
        'answer': 'Ankleshwar',
        'options': [
            'Bhuvneshwar',
            'Lucknow',
            'Patna',
            'Ankleshwar'
        ],
    },
    {
        'id': 6,
        'question': 'What is my age?',
        'answer': '24',
        'options': [
            '25',
            '24',
            '23',
            '22'
        ],
    },
    {
        'id': 7,
        'question': 'Which is my favourite anime?',
        'answer': 'Death Note',
        'options': [
            'Code Geass',
            'Death Note',
            'Attack on Titan',
            'Naruto'
        ],
    },
    {
        'id': 8,
        'question': 'Which is my favourite football club?',
        'answer': 'FC Barcelona',
        'options': [
            'FC Barcelona',
            'Real Madrid C.F.',
            'Manchester United F.C.',
            'Juventus F.C.'
        ],
    },
    {
        'id': 9,
        'question': 'Which is my favourite IPL team?',
        'answer': 'Chennai Super Kings',
        'options': [
            'Chennai Super Kings',
            'Kolkata Knight Riders',
            'Mumbai Indians',
            'Sun Risers Hyderabad'
        ],
    },
    {
        'id': 10,
        'question': 'Which is my favourite sport?',
        'answer': 'Cricket',
        'options': [
            'Football',
            'Cricket',
            'Hockey',
            'Batminton'
        ],
    },
    {
        'id': 11,
        'question': 'Which is my favourite fiction author?',
        'answer': 'Dan Brown',
        'options': [
            'Chetan Bhagat',
            'Jeffrey Archer',
            'J.K. Rowling',
            'Dan Brown'
        ],
    },
    {
        'id': 12,
        'question': 'What is my favourite cuisine?',
        'answer': 'Chinese',
        'options': [
            'Continental',
            'Chinese',
            'Indian',
            'Italian'
        ],
    },
    {
        'id': 13,
        'question': 'Who is my favourite Cricketer?',
        'answer': 'M.S. Dhoni',
        'options': [
            'Sachin Tendulkar',
            'M.S. Dhoni',
            'Virat Kohli',
            'Chris Gayle'
        ],
    },
    {
        'id': 14,
        'question': 'Who is my favourite anime character?',
        'answer': 'Light Yagami',
        'options': [
            'Naruto',
            'Light Yagami',
            'Lelouch vi Britannia',
            'Uchiha Madara'
        ],
    },
]

let leaderBoard = [
    {
        'name': 'Suraj',
        'score': 90
    },
    {
        'name': 'Shivam',
        'score': 75
    },
    {
        'name': 'Abhinav',
        'score': 15
    },
    {
        'name': 'Tej',
        'score': 10
    },
    {
        'name': 'Sunhy',
        'score': 25
    },
    {
        'name': 'Jacky',
        'score': 50
    },
    {
        'name': 'Ashish',
        'score': 70
    },
    {
        'name': 'Tanay',
        'score': 80
    },
    {
        'name': 'Jane',
        'score': 55
    },
    {
        'name': 'Mary',
        'score': 10
    },
]

let play = (name) => {

    let score = 0;
    let askQuestion = (questionSet) => {
        question = questionSet['question'];
        answer = questionSet['answer'];
        options = questionSet['options'];

        console.log(correctLog(`Score : ${score}\n`))
        console.log(`---- Question ----\n`)
        console.log(`${questionLog(question)}`);
        console.log();
        for (let i = 0; i < 4; i++) {
            console.log(`[${String.fromCharCode(i + 'a'.charCodeAt(0))}] ${options[i]}`)
        }
        console.log();
    }

    let compare = (object1, object2) => {
        if (object1.score > object2.score) {
            return -1;
        }
        else if (object1.score < object2.score) {
            return 1;
        }
        return 0;
    }

    let scoreDisplay = (name, round = 2) => {
        console.clear();
        log(headingLog(`🕴  ---- QUIZ ---- 🕴  \n`));
        console.log(`\n🥳  Thank you ${questionLog(name)} for trying the game! 🥳\n`);
        if (round === 0) {
            log(`Minimum Score required to qualify to ${wrongLog(`Round 2`)} is ${correctLog(`20`)}\n`);
        }
        else if (round === 1) {
            log(`Minimum Score required to qualify to ${wrongLog(`Round 3`)} is ${correctLog(`35`)}\n`);
        }
        newScore = {}
        newScore['name'] = name;
        newScore['score'] = score;
        leaderBoard[leaderBoard.length] = newScore;
        leaderBoard.sort(compare);
        let flag = false
        for (let k = 0; k < leaderBoard.length && k < 5; k++) {
            if (name === leaderBoard[k].name && score === leaderBoard[k].score) {
                console.log(`Your score is 🎉  ${correctLog(score)} 🎉\nYou are our new ${k + 1}${k === 0 ? `st` : k === 1 ? `nd` : k === 2 ? `rd` : `th`} high scorer.`);
                flag = true;
                break;
            }
        }
        if (!flag) {
            console.log(`Your score is 🎉  ${correctLog(score)} 🎉`);
        }
        log(headingLog(`\n🎯  ---- LEADER BOARD ---- 🎯\n`));
        for (let k = 0; k < leaderBoard.length && k < 5; k++) {
            console.log(`${k + 1}.    ${wrongLog(leaderBoard[k].name)} => ${correctLog(leaderBoard[k].score)} ${k === 0 ? `👑 👑 👑` : k === 1 ? `👑 👑` : k === 2 ? '👑' : ``}\n`);
        }
        console.log(`\n${wrongLog(`Note :`)} The leader board is non presistent. Please reachout to ${correctLog(`surajkannankumbhar@gmail.com`)} with the screenshot of the your score to get featured permanently on the leader board.`)
        return;
    }

    let questionIdList = []
    abort = false
    for (let i = 0; i < 3 && !abort; i++) {
        for (let j = 0; j < (4 - i) && !abort; j++) {
            console.clear();
            log(headingLog(`🕴  ---- QUIZ ---- 🕴  \n`));
            console.log(`\nRound ${i + 1} | Question ${j + 1}                                       ${wrongLog(`[x]=Exit`)}\n`);
            let questionId = Math.floor(Math.random() * (14));
            while (questionIdList.includes(questionId)) {
                questionId = Math.floor(Math.random() * (14));
            }
            questionIdList[questionIdList.length] = questionId;
            questionSet = questions[questionId];
            log(questionId);
            askQuestion(questionSet);
            let input = readlineSync.question(questionLogBlue('Please enter the correct option : '));
            if (input === 'x') {
                scoreDisplay(name, 2);
                abort = true;
                return;
            }
            else if (options[input.charCodeAt(0) - 97] === questionSet['answer']) {
                console.log(correctLog(`\n✅  Correct Answer 🎉\n`));
                score += 10;
            }
            else {
                console.log(`${wrongLog(`\n❌  Oops Wrong Answer`)}\n${correctLog(`The correct Answer is : ${questionSet['answer']}`)}\n`)
                score -= 5;
            }
            if (i === 2 && j === 1) {
                scoreDisplay(name, 2);
                abort = true;
                return;
            }
            console.log(wrongLog(`[c]=Continue                                                  [x]=Exit`));
            let lastInput = readlineSync.question(questionLogBlue('Please enter your choice : '));
            if (lastInput === 'x') {
                scoreDisplay(name, 2);
                abort = true;
                return;
            }
        }
        if (i === 0 && score < 20) {
            scoreDisplay(name, 0);
            abort = true;
            return;
        }
        else if (i === 1 && score < 35) {
            scoreDisplay(name, 1);
            abort = true;
            return;
        }
    }
}

let intro = () => {
    log(headingLog(`🕴  ---- QUIZ ---- 🕴  \n`));
    let name = readlineSync.question(questionLogBlue('May I have your name: '));
    console.clear();
    log(headingLog(`🕴  ---- QUIZ ---- 🕴  \n`));
    log(`Hey ${questionLog(name)}, Welcome to the game. \n`)
    console.log(`🚨  _________________Rules____________________ 🚨\n`)
    console.log(`✅  +10 for every correct answer.\n✅  -5 for every wrong answer.\n✅  Hit [x] to exit the game.\n✅  Minimum score of 20 required to continue to Round 2.\n✅  Minimum score of 35 required to continue to Round 3.\n`)
    log(wrongLog(`[c]=Continue                                                  [x]=Exit`))
    let input = readlineSync.question(questionLogBlue('Please enter your choice : '));
    if (input === 'x') {
        console.clear();
        log(headingLog(`🕴  ---- QUIZ ---- 🕴  \n`));
        console.log(`\n🥳  Thank you ${headingLog(name)} for trying the game! 🥳\n`);
        return;
    }
    else {
        play(name);
    }
}

intro();