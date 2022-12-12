let inputStacks = [
    ['Z', 'N'],
    ['M', 'C', 'D'],
    ['P'],
];

const inputCommands = `move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

const commands = inputCommands.split('\n');

// reading commands Part1
commands.forEach(command => {
    const amount = command.split(' ')[1];
    const from = command.split(' ')[3];
    const to = command.split(' ')[5];


    for (let i = 1; i <= amount; i++) {
        let moving = inputStacks[from - 1].pop();
        inputStacks[to - 1].push(moving);
    }
});

// reading commands Part2
commands.forEach(command => {
    const amount = command.split(' ')[1];
    const from = command.split(' ')[3];
    const to = command.split(' ')[5];

    let moving = inputStacks[from - 1].splice(inputStacks[from - 1].length - amount, amount);
    inputStacks[to - 1] = inputStacks[to - 1].concat(moving);
});

// reading stacks
let message = '';
inputStacks.forEach(stack => {
    message += stack[stack.length - 1];
});
console.log(message);