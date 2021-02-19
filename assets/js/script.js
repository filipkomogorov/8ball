
const answers = [
    'Fo shizzle thy nyzzeth.',
    'Fo shizzle!',
    'Fo drizzle!',
    'As I see it, yes.',
    'Ask again later.',
    'Better not tell you now.',
    'Cannot predict now, need coffee.',
    'Don’t count on it.',
    'It is certain.',
    'Chizzle bizzle!',
    'Most likely.',
    'My reply is no.',
    'My sources say no.',
    'Outlook not so good.',
    'Outlook good.',
    'Reply hazy, try again.',
    'Signs point to yes.',
    'Very doubtful.',
    'You may rely on it.',
    'NOOOOO!'
]

let prompt;

document.querySelector('#btn').addEventListener('click', function () {
    let randomNum = Math.floor((Math.random() * 20));
    prompt = document.querySelector('#input').value;
    if (prompt) {
        document.querySelector('#answer').innerHTML = answers[randomNum];
    } else {
        alert('SAY SOMETHING *POKE*')
    }
});


/*
part of the answers provider by Snoop d-o-double gizzle

other part of the answers got from http://www.otcpas.com/advisor-blog/magic-8-ball-messages/
*/