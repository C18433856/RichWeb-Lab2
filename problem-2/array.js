// Part 1
fetch('http://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(posts => posts.map(post => post.title))
  .then(titles => titles.filter(title => title.split(" ").length > 6))
  .then(titles => console.log(titles))

// Part 2
var freqMap = {};

fetch('https://jsonplaceholder.typicode.com/posts?')
  .then(res => res.json())
  .then(data => data.forEach(json => ComputeFreq(json.body)))
  .then(() => console.log(freqMap))

  function ComputeFreq(bodyText) {
    var words = bodyText.split(/\s/);
    words.forEach(word => {
        if (!freqMap[word]) {
            freqMap[word] = 0;
        }
        freqMap[word] += 1;
    });
  }