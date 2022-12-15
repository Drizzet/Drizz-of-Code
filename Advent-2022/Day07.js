class FileTree {
    constructor() {
        this.view = {};
        this.pwd = [];
    }

    add(item) {
        let curDir = this.pwd.reduce((curDir, d) => curDir[d], this.view);
        curDir[item[1]] = !isNaN(item[0]) ? parseInt(item[0]) : {};
    }

    cd(name) {
        if (name === '/') {
            this.pwd = [];
        } else if (name === '..') {
            this.pwd.pop();
        } else {
            this.pwd.push(name);
        }
    }
}

const INPUT = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`;

let tree = new FileTree();
let terminal = INPUT.split('\n');

// Create tree of directories
for (let i = 0; i < terminal.length; i++) {
    let command = terminal[i].split(' ');
    if (command[0] === '$' && command[1] === 'cd') {
        tree.cd(command[2]);
    } else {
        tree.add(command);
    }
}

let dirs = {};

// Count size of each directory
const countSizes = (directory = '', branch = tree.view) => {
    let size = 0;
    for (let [k, v] of Object.entries(branch)) {
        if (typeof (v) === 'number') {
            size += v;
        } else {
            size += countSizes(`${directory}/${k}`, branch[k]);
        }
    }
    dirs[directory ? directory : '/'] = size;
    return size;
};

countSizes();

dirs = Object.fromEntries(Object.entries(dirs).sort((a, b) => a[1] - b[1]));

// Part 1
console.log(
    `${Object.values(dirs)
        .filter((n) => n < 100000)
        .reduce((a, n) => a + n, 0)}`,
);

let spaceNeeded = 30000000 - (70000000 - dirs['/']),
    deleteDir = Object.keys(dirs).filter((dir) => dirs[dir] >= spaceNeeded)[0];

// Part 2
console.log(`${dirs[deleteDir]}`);