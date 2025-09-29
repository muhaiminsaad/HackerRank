function stripProperty(obj, prop) {
    const newObj = Object.keys(obj).reduce((acc, key) => {
        if (key !== prop) {
            acc[key] = obj[key];
        }
        return acc;
    }, {});
    return newObj;
}

function main(input) {
    const lines = input.trim().split('\n');
    if (lines.length < 2) return; 
    const n = parseInt(lines[0].trim(), 10);
    const propToStrip = lines[lines.length - 1].trim();
    const obj = {};
    for (let i = 1; i <= n; i++) {
        const line = lines[i].trim();
        const parts = line.split(' ');
        const key = parts[0];
        const value = parseInt(parts[1], 10);
        obj[key] = value;
    }
    const resultObj = stripProperty(obj, propToStrip);
    const keys = Object.keys(resultObj).sort();
    for (const key of keys) {
        console.log(`${key} ${resultObj[key]}`);
    }
}

let fullInput = '';
if (typeof process !== 'undefined' && process.stdin && process.stdin.setEncoding) {
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', (data) => {
        fullInput += data;
    });
    process.stdin.on('end', () => {
        main(fullInput);
    });
}
