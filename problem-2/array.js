// Part 1
fetch('http://jsonplaceholder.typicode.com/posts')  // Request the posts information
  .then(res => res.json())
  .then(posts => posts.map(post => post.title))     // Get the post titles
  .then(titles => titles.filter(title => title.split(" ").length > 6))  // If the post titles have more than 6 words keep them
  .then(titles => console.log(titles))

// Part 2
var freqMap = {};   // Used to store the word frequency map

fetch('https://jsonplaceholder.typicode.com/posts?')  // Request the posts information again
  .then(res => res.json())
  .then(data => data.forEach(json => ComputeFreq(json.body))) // Process the words in the body of each post
  .then(() => console.log(freqMap))   // Display the frequency map at the end

  // Fill the word frequency map
  function ComputeFreq(bodyText) {
    var words = bodyText.split(/\s/);   // Split the text into words based on white space characters encountered.
    // Check if a map entry for the given word exists and increment the corresponding value. If not, create a new map entry.
    words.forEach(word => {   
        if (!freqMap[word]) {
            freqMap[word] = 0;
        }
        freqMap[word] += 1;
    });
  }