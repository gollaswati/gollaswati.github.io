const joke = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

getJokes();

jokeBtn.addEventListener("click", getJokes);

async function getJokes() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com/", config);
  // console.log(res);
  const data = await res.json();
  joke.innerText = data.joke;
}
