$(document).ready(function(){

  function getrandomquote(){

    var quotesarray = ["There are no facts, only interpretations.",
    "I was never capable of being an average pupil.",
    "My true religion is Kindness.",
    "The fault is in the one who blames. Spirit sees nothing to criticize.",
    "Peace at home, peace in the world.",
    "I Have a Dream."];
    var authorarray= ["-Friedrich Nietzsche", "-Salvador Dalí", "-Dalai Lama","-Rumi","-Mustafa Kemal Ataturk","-Martin Luther King, Jr"];

    var randomnumber = Math.floor((Math.random()*quotesarray.length));
    var randomquote = quotesarray[randomnumber];
    var randomauthor = authorarray[randomnumber];

    $(".quote").text(randomquote);
    $(".author").text(randomauthor);
                     }
  $(".btn").on("click", function(){
    getrandomquote();
  });
});
