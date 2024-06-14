window.onload = function() {
  //Create a vector of 4 excuses
  let excuses = [
    "I have a headache because I got hit by lightning yesterday.",
    "I can't go to work because my dog ate my key.",
    "I feel very tired because I walked 100 kilometers yesterday.",
    "I can't go to work because my cat turned into a dog and is distracting me."
  ];

  //Create a function that returns a vector element randomly
  function randomMessage() {
    // Generate a random number between 0 and 3 (the size of the vector)
    var randomindex = Math.floor(Math.random() * excuses.length);
    // Return the vector element at the generated index
    return excuses[randomindex];
  }

  // Call the function and save the result in a variable
  var randomWord = randomMessage();

  // Show the message when refreshing the page
  document.querySelector("#excuse").innerHTML = randomWord;

  //Show the message when you click the button
  document.getElementById("btn").addEventListener("click", () => {
    var randomNumber = Math.floor(Math.random() * 4);
    document.getElementById("excuse").innerHTML = excuses[randomNumber];
  });
};
