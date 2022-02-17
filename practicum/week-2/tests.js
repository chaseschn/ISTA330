
const q1 = [{
    input: [[5, 6, 0]],
    output: [5, 11, 11]
},
{
    input: [[42, -3, -39]],
    output: [42, 39, 0]
}];

const q2 = [{
    input: [[5, 6, 1], 5],
    output: false
},
{
    input: [[3, 5, 2], 8],
    output: true
}];

const q3 = [{
    input: [[5, 6, 7]],
    output: 3
},
{
    input: [[3, 2, 1, 0]],
    output: 0
}];

const q4 = [{
    input: ['asDf', 'dsssaaF'],
    output: 5
},
{
    input: ['tek', 'TTTERk'],
    output: 1
}];

const q5 = [{
    input: [13],
    output: 4
},
{
    input: [19],
    output: 5
}];

const q6 = [{
    input: [[1, 2, 2, 8, 5, 7, 9 ]],
    output: 5
},
{
    input: [[1, 2, 3, 4, 6, 6, 7, 8]],
    output: 5
}];

const q7 = [{
    input: [[4, 3, 8, 1]],
    output: 5
},
{
    input: [[1, 3, 4, 2, 6, 8, 5, 7]],
    output: 16
}];

const q8 = [{
    input: [[23, 44, 12, 24]],
    output: [2, 0, 2, 1]
},
{
    input: [[1, 3, 4, 2, 6, 8, 5, 7]],
    output: [4, 3, 2, 3, 1, 0, 2, 1]
}];

const q9 = [{
    input: ['singgreet', [8, 5, 6, 0, 7, 1, 2, 3, 4]],
    output: 'greetings'
},
{
    input: ['emelwco', [1, 5, 6, 2, 0, 3, 4]],
    output: 'welcome'
}];

const q10 = [{
    input: [4729],
    output: 7
},
{
    input: [87034],
    output: 8
}];

const q11 = [{
    input: [[2, 5, 5, 2]],
    output: [5, 5, 2, 2, 2, 2, 2]
},
{
    input: [[0, 8, 1, 3, 2, 7]],
    output: [3, 7, 7]
}];

const q12 = [{
    input: ['abaabbabab'],
    output: 4
},
{
    input: ['aaababbba'],
    output: 3
}];

let result = [{
    functionName: 'runningSum',
    functionCode: runningSum,
    trials: [],
    cases: q1
},
{
    functionName: 'canGetEqualCookies',
    functionCode: canGetEqualCookies,
    trials: [],
    cases: q2
},
{
    functionName: 'numberOfOrderedPairs',
    functionCode: numberOfOrderedPairs,
    trials: [],
    cases: q3
},
{
    functionName: 'howManyCommon',
    functionCode: howManyCommon,
    trials: [],
    cases: q4
},
{
    functionName: 'minimalReduction',
    functionCode: minimalReduction,
    trials: [],
    cases: q5
},
{
    functionName: 'median',
    functionCode: median,
    trials: [],
    cases: q6
},
{
    functionName: 'maxSumOfMins',
    functionCode: maxSumOfMins,
    trials: [],
    cases: q7
},
{
    functionName: 'biggerAndEven',
    functionCode: biggerAndEven,
    trials: [],
    cases: q8
},
{
    functionName: 'suffleString',
    functionCode: suffleString,
    trials: [],
    cases: q9
},
{
    functionName: 'maxMinusMin',
    functionCode: maxMinusMin,
    trials: [],
    cases: q10
},
{
    functionName: 'decode',
    functionCode: decode,
    trials: [],
    cases: q11
},
{
    functionName: 'maxBalanceNumber',
    functionCode: maxBalanceNumber,
    trials: [],
    cases: q12
}
];

function isEqual(a1, a2){
    const t = typeof(a1);
    if((t === 'boolean') || (t === 'number') || (t === 'string')){
        return a1 === a2;
    }
    
    if(!a1 || !a2 || a1.length !== a2.length) {
        return false;
    }
    for(let i = 0; i < a1.length; i++) {
        if(!isEqual(a1[i], a2[i])) {
            return false;
        }
    }
    return true;
}

for(let f of result){
    for(let x of f.cases){    
        let trial = {status: 'failed',
         input: x.input + "",
        expected: x.output, 
        output: undefined};
        trial.output = f.functionCode(...x.input);
        if(isEqual(x.output, trial.output)) {
            trial.status = 'success'
        }
        f.trials.push(trial);
    }
}



function showTestsResults() {
    for (x of result) {
        let newDiv = document.createElement("div");
        let functionName = document.createElement("div");
        let name = document.createTextNode(x.functionName + ":");
        functionName.appendChild(name);
        functionName.className = 'functionName';
        newDiv.className = 'functionDiv';
        newDiv.appendChild(functionName);
        let ol = document.createElement('ol');
        for(y of x.trials) {
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
            if(y.status === 'failed') {
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


