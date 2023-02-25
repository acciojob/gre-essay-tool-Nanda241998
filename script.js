//your code here
var evaluatedText = document.getElementById("evaluatedText");
var wordCount = document.getElementById("wordCount");

// Update the word count in real-time as the user types
evaluatedText.addEventListener("input", function() {
  var text = evaluatedText.value;
  var count = text.trim().split(/\s+/).length;
  wordCount.innerText = count;
});