const INPUT = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;

const assignmentPairs = INPUT.split('\n');

function prepareAssignments(assignment) {
    const [start, end] = assignment.split('-').map(x => Number(x));
    const elf = [...Array(end - start + 1).keys()].map((i) => i + start);

    return elf
}

let fullyContains = 0;
let partiallyContains = 0;
assignmentPairs.forEach(pair => {
    const [elf1,elf2] = pair.split(',').map(x => prepareAssignments(x));

    switch (true) {
        case elf1.every((v) => elf2.includes(v)):
            fullyContains++;
            break;
        case elf2.every((v) => elf1.includes(v)):
            fullyContains++;
            break;
        case elf1.some((v) => elf2.includes(v)):
            partiallyContains++;
            break;
        case elf2.some((v) => elf1.includes(v)):
            partiallyContains++;
            break;
    }
});
console.log(fullyContains);
console.log(fullyContains + partiallyContains);