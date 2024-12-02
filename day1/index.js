import * as fs from "node:fs";

const input = fs.readFileSync('./inputs.txt', 'utf8').replace(/\s+/g, ',').split(',');
const left = input.filter((x, i) => i % 2 === 0);
const right = input.filter((x, i) => i % 2 !== 0);

function getDistance(a, b) {
    left.sort();
    right.sort();
    let distance = left.reduce((acc, val, i) => acc + Math.abs(Number(val) - Number(right[i])), 0);
    console.log(distance);
}
getDistance(left, right);

function getSimilarity(a, b) {
    let similarity = 0;
    left.forEach((x) => {
        let localSimilarity = 0;
        right.forEach(y => {
            if (x === y) {
                localSimilarity++;
            }
        })
        similarity += (localSimilarity*x);
    })
    console.log(similarity);
}
getSimilarity(left, right);