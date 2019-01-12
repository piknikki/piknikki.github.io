// when quoteButton is clicked
$("#quoteButton").on("click", function() {
    var number = Math.floor((Math.random() * quoteFacts.length));
    $("#quoteText").text(quoteFacts[number])
})

// Array of quotes
var quoteFacts = ["If you spend too much time thinking about a thing, you will never get it done.", "Absorb what is useful, discard what is useless and add what is specifically your own.", "Do not pray for an easy life, pray for the strength to endure a difficult one.", "I am not in this world to live up to your expectations and you are not in this world to live up to mine.", "Mistakes are always forgivable, if one has the courage to admit them."]