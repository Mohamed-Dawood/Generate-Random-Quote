const quote = document.querySelector("#quote");
const name = document.querySelector("#name");
const quotes = [
  { quote: "wear your failure as a badge of honor", name: "Sundar pichai" },
  { quote: "think twice code once", name: "Programmer" },
  { quote: "you should choice your fights", name: "Mohamed Ramadan Dawood" },
  {
    quote:
      "When Action Grows Unprofitable, Gather Information; When Information Grows Unprofitable, Sleep.",
    name: "Ursula K. Le Guin, The Left Hand of Darkness",
  },
  {
    quote: "in the end, we'll all become a stories",
    name: "Margaret atwood",
  },
  {
    quote: "above all, don't lie to yourself.",
    name: "fyodor dostoyevsky",
  },
  {
    quote:
      "Don't let the noise of others' opinions drown out your own inner voice.",
    name: "Steve Jobs",
  },
  {
    quote: "to win big, you sometimes have to take big risks.",
    name: "bill gates",
  },
  {
    quote: "the biggest risk in not taking any risk,",
    name: "mark zuckerberg",
  },
  {
    quote:
      "your times is limited, so don't waste it living someone else's life ",
    name: "Steve Jobs",
  },
  {
    quote: "life is to short for long-term grudges",
    name: "Elon Musk",
  },
  {
    quote: "Your most unhappy customers are your greatest source of learning",
    name: "bill gates",
  },
  {
    quote: "No matter what you choose, build stuff and be around smart people.",
    name: "sam altman",
  },
];
function generateQuotes() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomIndex];

  quote.innerHTML = randomQuote.quote;
  name.innerHTML = randomQuote.name;
}
