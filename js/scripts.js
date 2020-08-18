$(document).ready(function() {
  let suits = ["Hearts", "Clubs",  "Diamonds", "Spades"];
  let values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]
  let card;

  $("#show-cards").click(function(event) {
    suits.forEach(function(suit) {
      values.forEach(function(value) {
        card = value + " of " + suit;
        $("#" + suit).append("<li>" + card + "</li>");
      });
    });

    $(".playing-cards").show();

    event.preventDefault();
  })
});