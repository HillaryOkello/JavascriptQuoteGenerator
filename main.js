let quotes = [
    'The best thing about a boolean is even if you are wrong, you are only off by a bit.',
    'Without requirements or design, programming is the art of adding bugs to an empty text file.',
    'Before software can be reusable it first has to be usable.',
    'The best method for accelerating a computer is the one that boosts it by 9.8 m/s2.',
    'I think Microsoft named .Net so it wouldn’t show up in a Unix directory listing.',
    'If builders built buildings the way programmers wrote programs, then the first woodpecker that came along would destroy civilization.',
    'There are two ways to write error-free programs; only the third one works.',
    'Ready, fire, aim: the fast approach to software development. Ready, aim, aim, aim, aim: the slow approach to software development.',
    'It’s not a bug – it’s an undocumented feature.',
    'One man’s crappy software is another man’s full-time job.',
    'A good programmer is someone who always looks both ways before crossing a one-way street.',
    'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.',
    'Programming is like sex. One mistake and you have to support it for the rest of your life.',
    'Deleted code is debugged code.',
    'Walking on water and developing software from a specification are easy if both are frozen.',
    'If debugging is the process of removing software bugs, then programming must be the process of putting them in.',
    'Software undergoes beta testing shortly before it’s released. Beta is Latin for “still doesn’t work.',
    'Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the universe trying to produce bigger and better idiots. So far, the universe is winning.',
    'It’s a curious thing about our industry: not only do we not learn from our mistakes, but we also don’t learn from our successes.',
    'There are only two kinds of programming languages: those people always bitch about and those nobody uses.',
    'In order to understand recursion, one must first understand recursion.',
    'The cheapest, fastest, and most reliable components are those that aren’t there.',
    'The best performance improvement is the transition from the nonworking state to the working state.',
    'The trouble with programmers is that you can never tell what a programmer is doing until it’s too late.',
    'Don’t worry if it doesn’t work right. If everything did, you’d be out of a job.'
];

let author = [
    "Anonymous",
    "Louis Srygley",
    "Ralph Johnson",
    "Anonymous",
    "Oktal",
    "Gerald Weinberg",
    "Alan J.Perlis",
    "Anonymous",
    "Anonymous",
    "Doug Linder",
    "Jessica Gaston",
    "Edward V Berard",
    "Edsger Dijkstra",
    "Anonymous",
    "Rick Cook",
    "Keith Braithwaite",
    "Bjarne Stroustrup",
    "Anonymous",
    "Gordon Bell",
    "J. Osterhout",
    "Seymour Cray",
    "Martin Golding",
    "Michael Sinz",
    "Jeff Sickel",
    "Mosher’s Law of Software Engineering"
];

function displayAuthor() {
    const index = Math.floor(Math.random() * author.length)
    const auth = document.querySelector('#author')
    const write = `<span>${author[index]}</span>`

    auth.innerHTML = write;
}

function displayQuote() {
    const index = Math.floor(Math.random() * quotes.length)
    const div = document.querySelector('#text')
    const text = `<i class="fa fa-quote-left randomTxtColor"></i> <span>${quotes[index]}</span>`

    div.innerHTML = text;
}

const btn = document.querySelector('.button');
btn.addEventListener('click', displayQuote, displayAuthor)