const INPUT = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

let rucksacks = INPUT.split('\n');

function match(string1, string2) {
    for (let i in string1) {
        if (string2.includes(string1[i])) {
            return string1[i];
        }
    }
    return false;
}

function matchInGroup(string1, string2, string3) {
    for (let i in string1) {
        if (string2.includes(string1[i]) && string3.includes(string1[i])) {
            return string1[i];
        }
    }
    return false;
}

function priorityValue(item) {
    let value = item.charCodeAt(0);
    if (value < 96) {
        value = value - 96 + 58;
    } else {
        value = value - 96;
    }
    return value;
}

// Part1
// let sumOfValue = 0;
//
// rucksacks.forEach(rucksack => {
//     const middle = rucksack.length / 2;
//     const half1 = rucksack.substr(0, middle);
//     const half2 = rucksack.substr(middle);
//
//     if (match(half1, half2)) {
//         const double = match(half1, half2);
//         let value = priorityValue(double);
//         sumOfValue += value;
//     }
//
// });
// console.log(sumOfValue);

// Part2
let sumOfBadges = 0;
for (let i = 0; i <= rucksacks.length - 3; i = i + 3) {
    const badge = matchInGroup(rucksacks[i], rucksacks[i + 1], rucksacks[i + 2]);
    let value = priorityValue(badge);
    sumOfBadges += value;
}
console.log(sumOfBadges);