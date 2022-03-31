

window.onload = () => {
    console.log(window.location.href);
    let hostname = new URL(window.location.href).hostname;
    let username = hostname.split('.')[0];
    console.log(username);
    let names = ['Fred', 'John', 'Philip', 'Pablo', 'Toby', 'Rio'];
    let random = Math.floor(Math.random() * names.length);
    let api = `https://${username}-imagequiz-api.herokuapp.com`;
    //let api = `http://localhost:4002`;
    let testTaker = names[random];
    let testTakerEmail = testTaker + '@gmail.com';
    let password = 123;
    let quizId = -1;
    let testDiv = document.getElementById('test-the-api');
    testDiv.innerHTML += `<h2>****************************************************************************************</h2>`;
    testDiv.innerHTML += `<h2>Testing the API at ${api} ...</h2>`;
    fetch(`${api}/flowers`).then(x => x.json()).
        then(x => testDiv.innerHTML += 
            `<h2>Done:${x.done}.There are ${x.result.length} flowers in the database.${x.message ? x.message : ''}</h2>`)
        .catch(e => testDiv.innerHTML += `<h2>Error in /flowers method: ${e}</h2>`);
    
    fetch(`${api}/register`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: testTaker,
            email: testTakerEmail,
            password: password
        })
    }).then(x => {
        if (x.status == 200) {
            testDiv.innerHTML += `<h2>The test taker ${testTakerEmail} registered successfully.</h2>`;
        } else if (x.status == 403) {
            testDiv.innerHTML += `<h2>A test taker with the same email address ${testTakerEmail} already exists.</h2>`;
        } else {
            testDiv.innerHTML += `<h2>The registration request failed. Status code is ${x.status}</h2>`;
        }
    })
        .catch(e => testDiv.innerHTML += `<h2>Error in /register method: ${e}</h2>`)
        .then(() => fetch(`${api}/login`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: testTakerEmail,
                password: password
            })
        }))
        .then(x => x.json())
        .then(x => testDiv.innerHTML += (x.done ? `<h2>The test taker ${testTakerEmail} logged in successfully.</h2>` :
            `<h2>The provided credentials are invalid.</h2>`))
        .catch(e => testDiv.innerHTML += `<h2>Error in /login method: ${e}</h2>`)
        .then(() => fetch(`${api}/flowers`))
        .then(x => x.json())
        .then(x => {
            quizId = x.result[Math.floor(Math.random() * x.result.length)].name;
            return x;
        })
        .then(x => fetch(`${api}/score`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                quizTaker: testTakerEmail,
                quizName: quizId,
                score: 5
            })
        }))
        .then(x => x.json())
        .then(x => testDiv.innerHTML += `<h2>Done:${x.done}. The score for the test taker ${testTakerEmail} for quiz ${quizId} was submitted.</h2>`)
        .catch(e => testDiv.innerHTML += `<h2>Error in /score post method: ${e}</h2>`)
        .then(x => fetch(`${api}/scores/${testTakerEmail}/${quizId}`))
        .then(x => x.json())
        .then(x => testDiv.innerHTML += `<h2>Done:${x.done}. The test taker ${testTakerEmail} has ${x.result.length} submitted scores for quiz ${quizId}.</h2>`)
        .catch(e => testDiv.innerHTML += `<h2>Error in /scores get method: ${e}</h2>`)
        .then();
    let iframe = document.getElementById('myApplicationFrame');
    iframe.setAttribute('src', api);
}

