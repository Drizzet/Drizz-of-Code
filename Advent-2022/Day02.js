const INPUT = `A Y
B X
C Z`

// Part 1
// A-Rock-X B-Paper-Y C-Scissor-Z
let strategy = INPUT.split('\n');

// let points = 0;
// strategy.forEach(round => {
//     let choice = round.split(' ');
//     switch(choice[1]) {
//         case 'X':
//             points = points + 1;
//             break;
//         case 'Y':
//             points = points + 2;
//             break;
//         case 'Z':
//             points = points + 3;
//             break;
//
//     }
//     switch (choice[0].charCodeAt(0) - choice[1].charCodeAt(0)) {
//         case -23:
//             points = points + 3;
//             break;
//         case -24:
//         case -21:
//             points = points + 6;
//             break;
//     }
// })
//
// console.log(points);

// Part 2
let points = 0;
let move = 0;
strategy.forEach(round => {
    let choice = round.split(' ');
    switch(choice[1]) {
        case 'X':
            points = points + 0;
            move = (choice[0].charCodeAt(0) - 64) - 1 != 0 ? (choice[0].charCodeAt(0) - 64) - 1 : 3
            points = points + move;
            break;
        case 'Y':
            points = points + 3;
            move = (choice[0].charCodeAt(0) - 64)
            points = points + move;
            break;
        case 'Z':
            points = points + 6;
            move = (choice[0].charCodeAt(0) - 64) + 1 != 4 ? (choice[0].charCodeAt(0) - 64) + 1 : 1
            points = points + move;
            break;

    }
})

console.log(points);

