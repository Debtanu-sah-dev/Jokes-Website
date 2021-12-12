// Jokes In Preset

let jokes = [
`Q: What does a spider’s bride wear?
A: A webbing dress.`,
`Q: Where do cows go for entertainment?
A: The mooooo-vies!`,
`Q: What did one firefly say to the other?
A: You glow, girl!`,
`Q: What kind of dinosaur loves to sleep?
A: A stega-snore-us.`,
`Q: Why couldn't the pony sing?
A: Because she was a little hoarse.`,
`Q: What creature is smarter than a talking parrot?
A: A spelling bee.`,
`Q: Where does the chicken like to eat?
A: At a rooster-ant!`,
`Q: Where do you learn to make banana splits?
A: At sundae school.`,
`Q: Why did the melon jump into the lake?
A: It wanted to be a water-melon.`,
`Q: Why did the cookie go to the doctor?
A: It was feeling crumb-y.`,
`Q: Why did the banana go to the hospital?
A: He was peeling really bad.`,
`Q: Where do hamburgers go to dance?
A: They go to the meat-ball.`,
`Q: How does the ocean say hello?
A: It waves.`,`Q: What did the tree say to the wind?
A: Leaf me alone!`,`Q: What's the worst thing about throwing a party in space?
A: You have to planet.`,`Q: How do you know when the moon has had enough to eat?
A: When it’s full!`,
`Q: Why did the policeman go to the baseball game?
A: He'd heard that someone had stolen a base!`,`Q: Why did the golfer wear two pairs of pants?
A: In case he got a hole in one.`,`Q: What kind of shoes do all spies wear?
A: Sneak-ers.`,`Q: What do you call two guys hanging on a curtain?
A: Kurt and Rod!`,
`Q: Why was the math book sad?
A: Because it had so many problems.`,`Q: What's a snake's favorite subject?
A: Hisstory.`,`Q: Why did the student eat his homework?
A: Because his teacher told him it was a piece of cake!`,`Q: What time would it be if Godzilla came to school?
A: Time to run!`,`Q: Why did the dog do so well in school?
A: Because he was the teacher’s pet!`,`Q: Why did the egg get thrown out of class?
A:  Because he kept telling yolks!`,
`Q: What did one penny say to another penny?
A: We make cents`,`Q: Why was the belt arrested?
A: It was holding up some pants!`,`Q: Why did the computer go to the doctor?
A: It had a virus.`,`Q: What musical instrument is found in the bathroom?
A: A tube-a toothpaste.`,`Q: What did one eye say to the other?
A: Don’t look now, but something between us smells.`,
`Q: What are the strongest days of the week?
A: Saturday and Sunday. The rest are weak days.`,`Q:  What animal can you always find at a baseball game?
A: A bat!`,`Q: What can you catch, but never throw?
A: A cold!`,`Q: Which letter of the alphabet has the most water?
A: The “C”!`,`Q: What gets wet while it’s drying?
A: A towel!`,`Q: Why can’t your head be 12 inches long?
A: Because then it would be a foot!`,
`Q: Why did the superhero flush the toilet?
A: Because it was his doody.`,`Q: How do you get a tissue to dance?
A: You put a little boogie into it.`,`Q: What did one toilet say to the other?
A: You look a bit flushed!`,`Q: Who did the zombie take to the prom?
A: His ghoul-friend!`,
`Q: What is big, green and plays a lot of tricks?
A: Prank-enstein!`,
`Q: Why did the ghost blow his nose?
A: Because it was full of booo-gers!`
]

let joketxt = document.querySelector("h1:not(nav > h1)")

function newJoke(){
    joketxt.innerText = jokes[Math.floor(Math.random() * jokes.length)]
}

newJoke()