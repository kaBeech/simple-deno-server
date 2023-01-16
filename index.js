const url = "http://hn.algolia.com/api/v1/search?query=javascript";

console.log("Hello Deno");

fetch(url)
  .then((result) => result.json())
  .then((result) => console.log(result.hits));
