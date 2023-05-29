// Constants
const petBase = [
    {
      "name": "Jennifer",
      "img": "./assets/images/our-friends/jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "./assets/images/our-friends/sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "./assets/images/our-friends/woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "./assets/images/our-friends/scarlett.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "./assets/images/our-friends/katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "./assets/images/our-friends/timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "./assets/images/our-friends/freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "./assets/images/our-friends/charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    },
    {
      "name": "Charly",
      "img": "./assets/images/our-friends/charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ]

// Functions

// Burger-menu on
document.getElementById('burgerMenuButton').addEventListener('click', (event) => {
    document.getElementById('burgerMenuButton').classList.add('active');
    document.getElementById('navigation').classList.add('active');
    document.getElementById('burgerMenuButtonClose').classList.add('active');
    document.getElementById('background').classList.add('active');
    document.querySelector('body').style.overflow = 'hidden';
});
// Burger-menu off
document.querySelector('body').addEventListener('click', (event) => {
    if (event.target === burgerMenuButton) return;
    if (event.target === navigation) return;
    document.getElementById('burgerMenuButton').classList.remove('active');
    document.getElementById('navigation').classList.remove('active');
    document.getElementById('burgerMenuButtonClose').classList.remove('active');
    document.querySelector('body').style.overflow = "";
    document.getElementById('background').classList.remove('active');
});
// Slider сarousel
const slide1 = document.getElementById('slideMainPets1');
const slide2 = document.getElementById('slideMainPets2');
const slide3 = document.getElementById('slideMainPets3');

let currentSlides = [0,1,2];
let previousSlide = [];

function randomSlideNumber () {
  return Math.floor(Math.random() * 8);
}

function showNextSliders() {  
  previousSlide.length = 0;
  previousSlide = currentSlides.slice(0);;
  currentSlides.length = 0;

  for (let i = 0; i <= previousSlide.length - 1; i++) {
    let randomNumber;
    do {
      randomNumber = randomSlideNumber();
    } while (previousSlide.includes(randomNumber) || currentSlides.includes(randomNumber))
    currentSlides.push(randomNumber);
  }
  slide1.querySelector('p').innerHTML = petBase[currentSlides[0]]["name"];
  slide2.querySelector('p').innerHTML = petBase[currentSlides[1]]["name"];
  slide3.querySelector('p').innerHTML = petBase[currentSlides[2]]["name"];

  slide1.querySelector('img').src = petBase[currentSlides[0]]["img"];
  slide2.querySelector('img').src = petBase[currentSlides[1]]["img"];
  slide3.querySelector('img').src = petBase[currentSlides[2]]["img"];
}
function showPreviousSliders () {
  if (previousSlide[0] == undefined) {
    showNextSliders();
    previousSlide.length = 0;
  } else {
    slide1.querySelector('p').innerHTML = petBase[previousSlide[0]]["name"];
    slide2.querySelector('p').innerHTML = petBase[previousSlide[1]]["name"];
    slide3.querySelector('p').innerHTML = petBase[previousSlide[2]]["name"];
  
    slide1.querySelector('img').src = petBase[previousSlide[0]]["img"];
    slide2.querySelector('img').src = petBase[previousSlide[1]]["img"];
    slide3.querySelector('img').src = petBase[previousSlide[2]]["img"];
  
    previousSlide.length = 0;
  }
}
document.getElementById('arrowRight').addEventListener('click', () => {
  showNextSliders();
})
document.getElementById('arrowLeft').addEventListener('click', () => {
  showPreviousSliders();
})
showNextSliders();