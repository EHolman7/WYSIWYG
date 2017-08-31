var famousPeople = [
  {
    position: "Pitcher",
    name: "George Herman Ruth",
    bio: "Baseball player Babe Ruth was born in Baltimore, Maryland. Over the course of his career, Ruth went on to break baseball's most important slugging records, including most years leading a league in home runs, most total bases in a season, and highest slugging percentage for a season. In all, Ruth hit 714 home runs—a mark that stood until 1974.",
    image: "http://mlb.mlb.com/mlb/images/players/head_shot/121578.jpg",
    lifespan: {
      birth: "February 6, 1895",
      death: "February 16, 1948"
    }
  },
  {
    position: "Center Field",
    name: "Willie Howard Mays Jr.",
    bio: 'Nicknamed "The Say Hey Kid", is an American former Major League Baseball (MLB) center fielder who spent almost all of his 22-season career playing for the New York and San Francisco Giants, before finishing with the New York Mets.',
    image: "https://upload.wikimedia.org/wikipedia/commons/8/80/Willie_Mays_cropped.jpg",
    lifespan: {
      birth: "May 6, 1931",
      death: "Still Swinging"
    }
  },
  {
    position: "Right Field",
    name: 'Henry Louis "Hank" Aaron',
    bio: "Hank Aaron is a former major league baseball player who played for 23 seasons who started out in the Negro Leagues in the 1950s. Aaron was inducted into the Baseball Hall of Fame in 1982.",
    image: "https://cdn.thinglink.me/api/image/654728547889315841/1240/10/scaletowidth",
    lifespan: {
      birth: "February 5, 1934",
      death: "Still Swining"
    }
  },
  {
    position: "First Base",
    name: 'Henry Louis "Buster" Gehrig',
    bio: "Hall of Fame first baseman Lou Gehrig played for the New York Yankees in the 1920s and 1930s, setting the mark for consecutive games played. He was diagnosed with ALS in 1939 and retired from baseball.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/GehrigCU.jpg/200px-GehrigCU.jpg",
    lifespan: {
      birth: "June 19, 1903",
      death: "June 2, 1942"
    }
  },
  {
    position: "Center Field / Manager",
    name: "Tyrus Raymond Cobb",
    bio: "Ty Cobb overcame family tragedy to forge one of the greatest careers in big-league baseball history. He established records with his 12 batting titles and .366 career average, but also developed a reputation for his fierce play and terrible temper. Voted into the Baseball Hall of Fame in the inaugural election of 1936.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2a/1913_Ty_Cobb_portrait_photo.png",
    lifespan: {
      birth: "December 18, 1886",
      death: "July 17, 1961"
    }
  },
  {
    position: "Left Field",
    name: "Barry Lamar Bonds",
    bio: "Barry Lamar Bonds was born on July 24, 1964, in Riverside, California, to baseball player Bobby Bonds. He made history by setting the single-season and career records for home runs, though he was accused of using performance-enhancing drugs. Bonds was convicted of lying to a federal grand jury during the notorious BALCO investigation, but the conviction was overturned in 2015.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/BarryBonds1993.jpg/220px-BarryBonds1993.jpg",
    lifespan: {
      birth: "July 24, 1964",
      death: "Still Swinging"
    }
  }
];
var userInput = document.getElementById("user-input");
var peopleContainer = document.getElementById("people-container");
var peopleCard = document.getElementsByClassName("allStars");
var peopleBio = '';
for (var i = 0; i < famousPeople.length; i++) {
  peopleContainer.innerHTML +=
    `<div class="allStars" id="famous-${i}">
      <img src="${famousPeople[i].image}" class="resize">
      <p>Position: ${famousPeople[i].position}</p>
      <p>Name: ${famousPeople[i].name}</p>
      <p>Born: ${famousPeople[i].lifespan.birth} | Died: ${famousPeople[i].lifespan.death}</p>
      <p>Bio: <span id="bio-${i}">${famousPeople[i].bio}</span></p>
    </div>`;
}
function editBiosFocus() {
  console.log("Sup");
  for (var i = 0; i < peopleCard.length; i++) {
    if (peopleCard.item(i).classList.contains("selected")) {
      peopleCard.item(i).classList.remove("selected");
    }
  }
  var currentStar = document.getElementById(this.id);
  currentStar.classList.add("selected");
  peopleBio = this.id.replace("famous-", "bio-");
  userInput.focus();
  userInput.value = '';
}

for (var i = 0; i < peopleCard.length; i++) {
  peopleCard.item(i).addEventListener("click", editBiosFocus);
}

function editBios (userInput) {
  console.log(peopleBio);
  document.getElementById(peopleBio).innerHTML = userInput;
  console.log(peopleBio);
}

userInput.addEventListener("keyup", function() {
  editBios(userInput.value);
});