const INPUT = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`

// Part 1
let calories = INPUT.split('\n');
const Elves = [0];
let index = 0;

calories.forEach(CaloriesofItem => {
    if (CaloriesofItem === '') {
        index++;
        Elves.push(0);
    } else
        Elves[index] = Elves[index] + Number(CaloriesofItem);
})

let max = 0;
Elves.forEach(elf => {
    if (max < elf) {
        max = elf;
    }
})

console.log(max);

// Part 2
let max1 = 0;
let max2 = 0;
let max3 = 0;

Elves.forEach(elf => {
    switch (true) {
        case max1 < elf:
            max3 = max2;
            max2 = max1;
            max1 = elf;
            break;
        case max2 < elf:
            max3 = max2;
            max2 = elf;
        case max3 < elf:
            max3 = elf;
    }
})

console.log(max1 + max2 + max3);