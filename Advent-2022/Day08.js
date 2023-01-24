const INPUT =
`30373
 25512
 65332
 33549
 35390`;

let forest = INPUT.split('\n').map(row =>
    Array.from(row),
);

for (let i = 0; i < forest.length; i++) {
    let seen = 0;
    for (let j = 0; j < forest[i].length; j++) {
        seen = Math.max(forest[i]);
    }
    console.log(seen);
}

