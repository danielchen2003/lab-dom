let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload = function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector("#quote-of-the-day").textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
  const mainTitle = document.querySelector("#main-title");
  mainTitle.textContent = "Welcome to my homepage.";

  // Part 2
  const body = document.querySelector("body");
  body.style.background = "green";
  // Part 3
  const lastList = document.querySelector("#favorite-things");
  lastList.removeChild(lastList.lastElementChild);
  // Part 4
  // Select all `.special-title` class elements and change their `font-size` to `2rem`. Remember you might have to iterate through the list of elements
  const specialTitle = document.querySelectorAll(".special-title");
  console.log(specialTitle.length);
  for (var i = 0; i < specialTitle.length; i++) {
    specialTitle[i].style.fontSize = "2rem";
    // specialTitle[i].style.background = "red";
  }
  // Part 5

  const pastrace = document.querySelector("#past-races");
  pastrace.removeChild(pastrace.children[3]);
  // Part 6
  const newcity = document.createElement("li");
  newcity.textContent = "SHANGHAI";
  pastrace.appendChild(newcity);
  // Part 7
  const main = document.querySelector(".main");
  const Shanghai = document.createElement("div");

  main.appendChild(Shanghai);
  const Shanghaih1 = document.createElement("h1");
  Shanghaih1.textContent = "SHANGHAI";
  Shanghai.appendChild(Shanghaih1);
  const ShanghaiP = document.createElement("p");
  ShanghaiP.textContent = "I DROVE MY CAR THROUGH AN AIRPLANE!";
  Shanghai.appendChild(ShanghaiP);

  Shanghai.classList.add("blog-post", "purple");
};

//

// {
/* <div class="blog-post purple">
  <h1>Los Angeles</h1>
  <p>I RACED PAUL WALKER AND WON HIS CAR WITH MY CAR!</p>
</div>; */
// }
