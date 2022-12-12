const INPUT = `zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw`;

const LIMIT = 14; // Part1 = 4, Part2 = 14

let marker = INPUT[0];
let position = 1;
let markerValid = false;

while (!markerValid || marker.length !== LIMIT && position < INPUT.length) {
    if (!marker.includes(INPUT[position])) {
        markerValid = true;
    } else {
        marker = marker.slice(marker.indexOf(INPUT[position]) + 1, marker.length);
        markerValid = false;
    }

    marker += INPUT[position];
    position++;
    if (marker.length === LIMIT + 1) {
        marker = marker.slice(1, LIMIT);
    }
}
console.log(position);

