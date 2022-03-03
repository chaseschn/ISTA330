// largestNumberIsAtLeastTwice
const q1 = [{
    input: [[3, 2, 26, 50]],
    output: false
},
{
    input: [[3, 2, 1, 57]],
    output: true
}];
// largestSubarray
const q2 = [{
    input: [[-12, 3, -1, 5, 2, -1, -7]],
    output: 9
},
{
    input: [[-17, 3, 1, 5, -9, -1, 10]],
    output: 10
}];
// PascalTriangle
const q3 = [{
    input: [6],
    output: [
        [1],
        [1, 1],
        [1, 2, 1],
        [1, 3, 3, 1],
        [1, 4, 6, 4, 1],
        [1, 5, 10, 10, 5, 1]
    ]
},
{
    input: [5],
    output: [
        [1],
        [1, 1],
        [1, 2, 1],
        [1, 3, 3, 1],
        [1, 4, 6, 4, 1]
    ]
}];
//hasDuplicates
const q4 = [{
    input: [[19, 18, 17, 23, 24, 4, 3, 26, 1, 2]],
    output: false
},
{
    input: [[3, 5, 90, 21, 3]],
    output: true
}];
//isMonotonic
const q5 = [{
    input: [[12, 6, 2, 2, 2, 3]],
    output: false
},
{
    input: [[29, 61, 310, 2500, 231000]],
    output: true
}];
// m_element
const q6 = [{
    input: [[1, 3, 2, 3, 3, 7, 3]],
    output: 3
},
{
    input: [[1, 2, 3, 4, 5, 6, 7, 8]],
    output: -1
}];
//transpose
const q7 = [{
    input: [[[1, 2, 3], [7, 5, 6]]],
    output: [[1, 7], [2, 5], [3, 6]]
},
{
    input: [[[1, 4], [2, 5], [3, 6]]],
    output: [[1, 2, 3], [4, 5, 6]]
}];
//d_integer
const q8 = [{
    input: [[3, 5, 3, 4, 4, 3, 5, 1, 4, 4]],
    output: 4
},
{
    input: [[3, 6, 3, 9, 6, 45, 86, 9]],
    output: -1
}];
//largestGroupsCount
const q9 = [{
    input: [12],
    output: 3
},
{
    input: [24],
    output: 5
}];
//minPairs
const q10 = [{
    input: [[1, -5, -10, 24, 19, -4, -14, 23]],
    output: [[-5, -4], [23, 24]]
},
{
    input: [[17, -5, -1, 24, 29, 54, 1, 27, 19]],
    output: [[-1, 1], [17, 19], [27, 29]]
}];
//d-count
const q11 = [{
    input: [[2, 1, 26, 3], [-5, -2, 10, -3, 7], 6],
    output: 1
},
{
    input: [[2, 100, 37, 39], [4, 8, 10, 0, -14], 10],
    output: 3
}];

//fibonacci
const q12 = [{
    input: [10],
    output: 55
},
{
    input: [30],
    output: 832040
}];

let testResultSetPracticum3 = [{
    functionName: 'largestNumberIsAtLeastTwice',
    functionCode: largestNumberIsAtLeastTwice,
    trials: [],
    cases: q1
},
{
    functionName: 'largestSubarray',
    functionCode: largestSubarray,
    trials: [],
    cases: q2
},
{
    functionName: 'PascalTriangle',
    functionCode: PascalTriangle,
    trials: [],
    cases: q3
},
{
    functionName: 'hasDuplicates',
    functionCode: hasDuplicates,
    trials: [],
    cases: q4
},
{
    functionName: 'isMonotonic',
    functionCode: isMonotonic,
    trials: [],
    cases: q5
},
{
    functionName: 'm_element',
    functionCode: m_element,
    trials: [],
    cases: q6
},
{
    functionName: 'transpose',
    functionCode: transpose,
    trials: [],
    cases: q7
},
{
    functionName: 'd_integer',
    functionCode: d_integer,
    trials: [],
    cases: q8
},
{
    functionName: 'largestGroupsCount',
    functionCode: largestGroupsCount,
    trials: [],
    cases: q9
},
{
    functionName: 'minPairs',
    functionCode: minPairs,
    trials: [],
    cases: q10
},
{
    functionName: 'd_count',
    functionCode: d_count,
    trials: [],
    cases: q11
},
{
    functionName: 'fibonacci',
    functionCode: F,
    trials: [],
    cases: q12
}
];

function isEqual(a1, a2) {
    const t = typeof (a1);
    if ((t === 'boolean') || (t === 'number') || (t === 'string')) {
        return a1 === a2;
    }

    if (!a1 || !a2 || a1.length !== a2.length) {
        return false;
    }
    for (let i = 0; i < a1.length; i++) {
        if (!isEqual(a1[i], a2[i])) {
            return false;
        }
    }
    return true;
}

for (let f of testResultSetPracticum3) {
    for (let x of f.cases) {
        let trial = {
            status: 'failed',
            input: x.input,
            expected: JSON.stringify(x.output),
            output: undefined
        };
        trial.output = f.functionCode(...x.input);

        if (isEqual(x.output, trial.output)) {
            trial.status = 'success';
        }
        if(trial.input.length === 1) {
            trial.input = JSON.stringify(...trial.input);
        } else {
            trial.input = JSON.stringify(trial.input);
        }        
        trial.output = JSON.stringify(trial.output);
        f.trials.push(trial);
    }
}



function showTestsResults() {
    for (x of testResultSetPracticum3) {
        let newDiv = document.createElement("div");
        let functionName = document.createElement("div");
        let name = document.createTextNode(x.functionName + ":");
        functionName.appendChild(name);
        functionName.className = 'functionName';
        newDiv.className = 'functionDiv';
        newDiv.appendChild(functionName);
        let ol = document.createElement('ol');
        for (y of x.trials) {
            let li = document.createElement('li');
            let content = document.createTextNode(`${y.status}`);
            li.appendChild(content);
            let br1 = document.createElement('br');
            li.appendChild(br1);
            let input = document.createTextNode(`input: ${y.input}`);
            li.appendChild(input);
            let br2 = document.createElement('br');
            li.appendChild(br2);
            let output = document.createTextNode(`output: ${y.output}`);
            li.appendChild(output);
            let br3 = document.createElement('br');
            li.appendChild(br3);
            let expected = document.createTextNode(`expected: ${y.expected}`);
            li.appendChild(expected);
            if (y.status === 'failed') {
                li.className = 'failed';
            } else {
                li.className = 'success';
            }
            ol.appendChild(li);
        }
        newDiv.appendChild(ol);
        document.body.appendChild(newDiv);
    }
}


