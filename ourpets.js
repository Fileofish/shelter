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
  if (event.target === document.querySelector("#sladePet1")) return;
  if (event.target === document.querySelector("#sladePet1 > img")) return;
  if (event.target === document.querySelector("#sladePet1 > p")) return;
  if (event.target === document.querySelector("#sladePet1 > button")) return;
  if (event.target === document.querySelector("#sladePet2")) return;
  if (event.target === document.querySelector("#sladePet2 > img")) return;
  if (event.target === document.querySelector("#sladePet2 > p")) return;
  if (event.target === document.querySelector("#sladePet2 > button")) return;
  if (event.target === document.querySelector("#sladePet3")) return;
  if (event.target === document.querySelector("#sladePet3 > img")) return;
  if (event.target === document.querySelector("#sladePet3 > p")) return;
  if (event.target === document.querySelector("#sladePet3 > button")) return;
  if (event.target === document.querySelector("#sladePet4 > img")) return;
  if (event.target === document.querySelector("#sladePet4 > p")) return;
  if (event.target === document.querySelector("#sladePet4 > button")) return;
  if (event.target === document.querySelector("#sladePet5 > img")) return;
  if (event.target === document.querySelector("#sladePet5 > p")) return;
  if (event.target === document.querySelector("#sladePet5 > button")) return;
  if (event.target === document.querySelector("#sladePet6 > img")) return;
  if (event.target === document.querySelector("#sladePet6 > p")) return;
  if (event.target === document.querySelector("#sladePet6 > button")) return;
  if (event.target === document.querySelector("#sladePet7 > img")) return;
  if (event.target === document.querySelector("#sladePet7 > p")) return;
  if (event.target === document.querySelector("#sladePet7 > button")) return;
  if (event.target === document.querySelector("#sladePet8 > img")) return;
  if (event.target === document.querySelector("#sladePet8 > p")) return;
  if (event.target === document.querySelector("#sladePet8 > button")) return;
  if (event.target === document.querySelector("#popup")) return;
  if (event.target === document.querySelector("#popup > div.wrapper > div > h3")) return;
  if (event.target === document.querySelector("#popup > div.wrapper > div > h4")) return;
  if (event.target === document.querySelector("#popup > div.wrapper")) return;
  if (event.target === document.querySelector("#popup > div.wrapper > div")) return;
  if (event.target === document.querySelector("#petDescription")) return;
  if (event.target === document.querySelector("#popup > div.wrapper > img")) return;
  document.querySelector("#popup").classList.remove('active');
  document.getElementById('burgerMenuButton').classList.remove('active');
  document.getElementById('navigation').classList.remove('active');
  document.getElementById('burgerMenuButtonClose').classList.remove('active');
  document.querySelector('body').style.overflow = "";
  document.getElementById('background').classList.remove('active');
});
// plagination
const slide1 = document.getElementById('sladePet1');
const slide2 = document.getElementById('sladePet2');
const slide3 = document.getElementById('sladePet3');
const slide4 = document.getElementById('sladePet4');
const slide5 = document.getElementById('sladePet5');
const slide6 = document.getElementById('sladePet6');
const slide7 = document.getElementById('sladePet7');
const slide8 = document.getElementById('sladePet8');

let windowWidth = window.innerWidth;
window.addEventListener('resize',() => {
  windowWidth = window.innerWidth;
});

let petsArray = [];
for (let i = 0; i < 6; i++) {
  (shuffle([0, 1, 2, 3, 4, 5, 6, 7])).forEach(function(item) {
    petsArray.push(item);
  });
}

let counter = 0;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); 
    let t = array[i]; array[i] = array[j]; array[j] = t
  }
  return array;
}
function showPlaginationList () {
    slide1.querySelector('img').src = petBase[petsArray[0 + counter]]["img"];
    slide2.querySelector('img').src = petBase[petsArray[1 + counter]]["img"];
    slide3.querySelector('img').src = petBase[petsArray[2 + counter]]["img"];
    slide4.querySelector('img').src = petBase[petsArray[3 + counter]]["img"];
    slide5.querySelector('img').src = petBase[petsArray[4 + counter]]["img"];
    slide6.querySelector('img').src = petBase[petsArray[5 + counter]]["img"];
    slide7.querySelector('img').src = petBase[petsArray[6 + counter]]["img"];
    slide8.querySelector('img').src = petBase[petsArray[7 + counter]]["img"];

    slide1.querySelector('p').innerHTML = petBase[petsArray[0 + counter]]["name"];
    slide2.querySelector('p').innerHTML = petBase[petsArray[1 + counter]]["name"];
    slide3.querySelector('p').innerHTML = petBase[petsArray[2 + counter]]["name"];
    slide4.querySelector('p').innerHTML = petBase[petsArray[3 + counter]]["name"];
    slide5.querySelector('p').innerHTML = petBase[petsArray[4 + counter]]["name"];
    slide6.querySelector('p').innerHTML = petBase[petsArray[5 + counter]]["name"];
    slide7.querySelector('p').innerHTML = petBase[petsArray[6 + counter]]["name"];
    slide8.querySelector('p').innerHTML = petBase[petsArray[7 + counter]]["name"];
}

document.getElementById('arrowRight').addEventListener('click', (event) => {
  document.getElementById('doubleArrowLeft').classList.remove('disable');
  document.getElementById('arrowLeft').classList.remove('disable');
  if (windowWidth > 1200) {

    if (counter == 32) {
      document.getElementById('arrowRight').classList.add('disable');
      document.getElementById('doubleArrowRight').classList.add('disable');
      counter += 8;
      showPlaginationList();
      document.getElementById('sliderNum').innerHTML = `${counter/8 + 1}`;
    } else if (counter < 32) {
      counter += 8;
      showPlaginationList();
      document.getElementById('sliderNum').innerHTML = `${counter/8 + 1}`;
    }
  } else if (windowWidth <= 1200 && windowWidth > 640) {
    if (counter == 36) {
      document.getElementById('arrowRight').classList.add('disable');
      document.getElementById('doubleArrowRight').classList.add('disable');
      counter += 6;
      document.getElementById('sliderNum').innerHTML = `${counter/6 + 1}`;
      showPlaginationList();
    } else if (counter < 36) {
      counter += 6;
      showPlaginationList();
      document.getElementById('sliderNum').innerHTML = `${counter/6 + 1}`;
    }
  } else if (windowWidth <= 640) {
    if (counter == 42) {
      document.getElementById('arrowRight').classList.add('disable');
      document.getElementById('doubleArrowRight').classList.add('disable');
      counter += 3;
      document.getElementById('sliderNum').innerHTML = `${counter/3 + 1}`;
      showPlaginationList();
    } else if (counter < 42) {
      counter += 3;
      document.getElementById('sliderNum').innerHTML = `${counter/3 + 1}`;
      showPlaginationList();
    }
  }
});
document.getElementById('arrowLeft').addEventListener('click', (event) => {
  document.getElementById('doubleArrowRight').classList.remove('disable');
  document.getElementById('arrowRight').classList.remove('disable');
  if (windowWidth > 1200) {
    if (counter == 8) {
      document.getElementById('arrowLeft').classList.add('disable');
      document.getElementById('doubleArrowLeft').classList.add('disable');
      counter -= 8;
      showPlaginationList();
      document.getElementById('sliderNum').innerHTML = `${counter/8 + 1}`;
    } else if (counter > 8) {
      counter -= 8;
      showPlaginationList();
      document.getElementById('sliderNum').innerHTML = `${counter/8 + 1}`;
    }
  } else if (windowWidth <= 1200 && windowWidth > 640) {
    if (counter == 6) {
      document.getElementById('arrowLeft').classList.add('disable');
      document.getElementById('doubleArrowLeft').classList.add('disable');
      counter -= 6;
      document.getElementById('sliderNum').innerHTML = `${counter/6 + 1}`;
      showPlaginationList();
    } else if (counter > 6) {
      counter -= 6;
      showPlaginationList();
      document.getElementById('sliderNum').innerHTML = `${counter/6 + 1}`;
    }
  } else if (windowWidth <= 640) {
    if (counter == 3) {
      document.getElementById('arrowLeft').classList.add('disable');
      document.getElementById('doubleArrowLeft').classList.add('disable');
      counter -= 3;
      document.getElementById('sliderNum').innerHTML = `${counter/3 + 1}`;
      showPlaginationList();
    } else if (counter > 3) {
      counter -= 3;
      document.getElementById('sliderNum').innerHTML = `${counter/3 + 1}`;
      showPlaginationList();
    }
  }
});
document.getElementById('doubleArrowLeft').addEventListener('click', (event) => {
  document.getElementById('doubleArrowRight').classList.remove('disable');
  document.getElementById('arrowRight').classList.remove('disable');
  document.getElementById('arrowLeft').classList.add('disable');
  document.getElementById('doubleArrowLeft').classList.add('disable');
  counter = 0;
  showPlaginationList();
  document.getElementById('sliderNum').innerHTML = `${1}`;
});
document.getElementById('doubleArrowRight').addEventListener('click', (event) => {
  document.getElementById('doubleArrowLeft').classList.remove('disable');
  document.getElementById('arrowLeft').classList.remove('disable');
  if (windowWidth > 1200) {
    document.getElementById('arrowRight').classList.add('disable');
    document.getElementById('doubleArrowRight').classList.add('disable');
    counter = 40;
    showPlaginationList();
    document.getElementById('sliderNum').innerHTML = `${counter/8 + 1}`;
  } else if (windowWidth <= 1200 && windowWidth > 640) {
      document.getElementById('arrowRight').classList.add('disable');
      document.getElementById('doubleArrowRight').classList.add('disable');
      counter = 42;
      document.getElementById('sliderNum').innerHTML = `${counter/6 + 1}`;
      showPlaginationList();
  } else if (windowWidth <= 640) {
      document.getElementById('arrowRight').classList.add('disable');
      document.getElementById('doubleArrowRight').classList.add('disable');
      counter = 45;
      document.getElementById('sliderNum').innerHTML = `${counter/3 + 1}`;
      showPlaginationList();
  }
});

showPlaginationList();

// popup
document.querySelector("#sladePet1").addEventListener('click', (event) => {
  document.querySelector("#popup").classList.add('active');
  document.querySelector("#background").classList.add('active');
  document.querySelector("body").style.overflow = 'hidden';
  document.querySelector("#popup > div.wrapper > img").src = petBase[petsArray[0 + counter]]["img"];
  document.querySelector("#popup > div.wrapper > div > h3").innerHTML = petBase[petsArray[0 + counter]]["name"];
  document.querySelector("#popup > div.wrapper > div > h4").innerHTML = `${petBase[petsArray[0 + counter]]["type"]} - ${petBase[petsArray[0 + counter]]["breed"]}`;
  document.querySelector("#petDescription").innerHTML = petBase[petsArray[0 + counter]]["description"];
  document.querySelector("#petAge").innerHTML = petBase[petsArray[0 + counter]]["age"];
  document.querySelector("#petInoculations").innerHTML = petBase[petsArray[0 + counter]]["inoculations"];
  document.querySelector("#petDiseases").innerHTML = petBase[petsArray[0 + counter]]["diseases"];
  document.querySelector("#petParasites").innerHTML = petBase[petsArray[0 + counter]]["parasites"];
});
document.querySelector("#sladePet2").addEventListener('click', (event) => {
  document.querySelector("#popup").classList.add('active');
  document.querySelector("#background").classList.add('active');
  document.querySelector("body").style.overflow = 'hidden';
  document.querySelector("#popup > div.wrapper > img").src = petBase[petsArray[1 + counter]]["img"];
  document.querySelector("#popup > div.wrapper > div > h3").innerHTML = petBase[petsArray[1 + counter]]["name"];
  document.querySelector("#popup > div.wrapper > div > h4").innerHTML = `${petBase[petsArray[1 + counter]]["type"]} - ${petBase[petsArray[1 + counter]]["breed"]}`;
  document.querySelector("#petDescription").innerHTML = petBase[petsArray[1 + counter]]["description"];
  document.querySelector("#petAge").innerHTML = petBase[petsArray[1 + counter]]["age"];
  document.querySelector("#petInoculations").innerHTML = petBase[petsArray[1 + counter]]["inoculations"];
  document.querySelector("#petDiseases").innerHTML = petBase[petsArray[1 + counter]]["diseases"];
  document.querySelector("#petParasites").innerHTML = petBase[petsArray[1 + counter]]["parasites"];
});
document.querySelector("#sladePet3").addEventListener('click', (event) => {
  document.querySelector("#popup").classList.add('active');
  document.querySelector("#background").classList.add('active');
  document.querySelector("body").style.overflow = 'hidden';
  document.querySelector("#popup > div.wrapper > img").src = petBase[petsArray[2 + counter]]["img"];
  document.querySelector("#popup > div.wrapper > div > h3").innerHTML = petBase[petsArray[2 + counter]]["name"];
  document.querySelector("#popup > div.wrapper > div > h4").innerHTML = `${petBase[petsArray[2 + counter]]["type"]} - ${petBase[petsArray[2 + counter]]["breed"]}`;
  document.querySelector("#petDescription").innerHTML = petBase[petsArray[2 + counter]]["description"];
  document.querySelector("#petAge").innerHTML = petBase[petsArray[2 + counter]]["age"];
  document.querySelector("#petInoculations").innerHTML = petBase[petsArray[2 + counter]]["inoculations"];
  document.querySelector("#petDiseases").innerHTML = petBase[petsArray[2 + counter]]["diseases"];
  document.querySelector("#petParasites").innerHTML = petBase[petsArray[2 + counter]]["parasites"];
});
document.querySelector("#sladePet4").addEventListener('click', (event) => {
  document.querySelector("#popup").classList.add('active');
  document.querySelector("#background").classList.add('active');
  document.querySelector("body").style.overflow = 'hidden';
  document.querySelector("#popup > div.wrapper > img").src = petBase[petsArray[3 + counter]]["img"];
  document.querySelector("#popup > div.wrapper > div > h3").innerHTML = petBase[petsArray[3 + counter]]["name"];
  document.querySelector("#popup > div.wrapper > div > h4").innerHTML = `${petBase[petsArray[3 + counter]]["type"]} - ${petBase[petsArray[3 + counter]]["breed"]}`;
  document.querySelector("#petDescription").innerHTML = petBase[petsArray[3 + counter]]["description"];
  document.querySelector("#petAge").innerHTML = petBase[petsArray[3 + counter]]["age"];
  document.querySelector("#petInoculations").innerHTML = petBase[petsArray[3 + counter]]["inoculations"];
  document.querySelector("#petDiseases").innerHTML = petBase[petsArray[3 + counter]]["diseases"];
  document.querySelector("#petParasites").innerHTML = petBase[petsArray[3 + counter]]["parasites"];
});
document.querySelector("#sladePet5").addEventListener('click', (event) => {
  document.querySelector("#popup").classList.add('active');
  document.querySelector("#background").classList.add('active');
  document.querySelector("body").style.overflow = 'hidden';
  document.querySelector("#popup > div.wrapper > img").src = petBase[petsArray[4 + counter]]["img"];
  document.querySelector("#popup > div.wrapper > div > h3").innerHTML = petBase[petsArray[4 + counter]]["name"];
  document.querySelector("#popup > div.wrapper > div > h4").innerHTML = `${petBase[petsArray[4 + counter]]["type"]} - ${petBase[petsArray[4 + counter]]["breed"]}`;
  document.querySelector("#petDescription").innerHTML = petBase[petsArray[4 + counter]]["description"];
  document.querySelector("#petAge").innerHTML = petBase[petsArray[4 + counter]]["age"];
  document.querySelector("#petInoculations").innerHTML = petBase[petsArray[4 + counter]]["inoculations"];
  document.querySelector("#petDiseases").innerHTML = petBase[petsArray[4 + counter]]["diseases"];
  document.querySelector("#petParasites").innerHTML = petBase[petsArray[4 + counter]]["parasites"];
});
document.querySelector("#sladePet6").addEventListener('click', (event) => {
  document.querySelector("#popup").classList.add('active');
  document.querySelector("#background").classList.add('active');
  document.querySelector("body").style.overflow = 'hidden';
  document.querySelector("#popup > div.wrapper > img").src = petBase[petsArray[5 + counter]]["img"];
  document.querySelector("#popup > div.wrapper > div > h3").innerHTML = petBase[petsArray[5 + counter]]["name"];
  document.querySelector("#popup > div.wrapper > div > h4").innerHTML = `${petBase[petsArray[5 + counter]]["type"]} - ${petBase[petsArray[5 + counter]]["breed"]}`;
  document.querySelector("#petDescription").innerHTML = petBase[petsArray[5 + counter]]["description"];
  document.querySelector("#petAge").innerHTML = petBase[petsArray[5 + counter]]["age"];
  document.querySelector("#petInoculations").innerHTML = petBase[petsArray[5 + counter]]["inoculations"];
  document.querySelector("#petDiseases").innerHTML = petBase[petsArray[5 + counter]]["diseases"];
  document.querySelector("#petParasites").innerHTML = petBase[petsArray[5 + counter]]["parasites"];
});
document.querySelector("#sladePet7").addEventListener('click', (event) => {
  document.querySelector("#popup").classList.add('active');
  document.querySelector("#background").classList.add('active');
  document.querySelector("body").style.overflow = 'hidden';
  document.querySelector("#popup > div.wrapper > img").src = petBase[petsArray[6 + counter]]["img"];
  document.querySelector("#popup > div.wrapper > div > h3").innerHTML = petBase[petsArray[6 + counter]]["name"];
  document.querySelector("#popup > div.wrapper > div > h4").innerHTML = `${petBase[petsArray[6 + counter]]["type"]} - ${petBase[petsArray[6 + counter]]["breed"]}`;
  document.querySelector("#petDescription").innerHTML = petBase[petsArray[6 + counter]]["description"];
  document.querySelector("#petAge").innerHTML = petBase[petsArray[6 + counter]]["age"];
  document.querySelector("#petInoculations").innerHTML = petBase[petsArray[6 + counter]]["inoculations"];
  document.querySelector("#petDiseases").innerHTML = petBase[petsArray[6 + counter]]["diseases"];
  document.querySelector("#petParasites").innerHTML = petBase[petsArray[6 + counter]]["parasites"];
});
document.querySelector("#sladePet8").addEventListener('click', (event) => {
  document.querySelector("#popup").classList.add('active');
  document.querySelector("#background").classList.add('active');
  document.querySelector("body").style.overflow = 'hidden';
  document.querySelector("#popup > div.wrapper > img").src = petBase[petsArray[7 + counter]]["img"];
  document.querySelector("#popup > div.wrapper > div > h3").innerHTML = petBase[petsArray[7 + counter]]["name"];
  document.querySelector("#popup > div.wrapper > div > h4").innerHTML = `${petBase[petsArray[7 + counter]]["type"]} - ${petBase[petsArray[7 + counter]]["breed"]}`;
  document.querySelector("#petDescription").innerHTML = petBase[petsArray[7 + counter]]["description"];
  document.querySelector("#petAge").innerHTML = petBase[petsArray[7 + counter]]["age"];
  document.querySelector("#petInoculations").innerHTML = petBase[petsArray[7 + counter]]["inoculations"];
  document.querySelector("#petDiseases").innerHTML = petBase[petsArray[7 + counter]]["diseases"];
  document.querySelector("#petParasites").innerHTML = petBase[petsArray[7 + counter]]["parasites"];
});