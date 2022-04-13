

window.onload = () => {
    console.log(window.location.href);
    let hostname = new URL(window.location.href).hostname;
    let username = hostname.split('.')[0];
    console.log(username);
    let iframe = document.getElementById('myApplicationFrame');
    iframe.setAttribute('src', `https://${username}.github.io/imagequiz/`);
    let div = document.createElement('div');
    let a = document.createElement('a');
    let linkText = document.createTextNode("My imagequiz front-end application");
    a.appendChild(linkText);
    a.title = "My imagequiz front-end application";
    a.href = `https://${username}.github.io/imagequiz/`;
    div.appendChild(a);
    document.body.insertBefore(div, document.body.lastElementChild);
}

