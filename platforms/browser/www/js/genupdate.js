var titles = ['Exciting News!', 'A Minor Setback', 'A Quick Update'];
var intros = ['Greeting Backers!', 'Hello Supporters.', 'Dear Beloved Fans.'];
var adj = ['productive', 'hectic'];
var pivot = ['frontend', 'database'];
var users = ['mobile users', 'client health employees', 'web users'];


function generator() {
  $('.updateTitle').text(titles[Math.floor(Math.random() * titles.length)]);
  var intro = intros[Math.floor(Math.random() * intros.length)] + ' ';
  var firstLine = "Things have been very " + adj[Math.floor(Math.random() * adj.length)] + '. ';
  var secondLine = "We recently decided to pivot to a new " + pivot[Math.floor(Math.random() * pivot.length)] +
    ', but rest assured, this was but a minor setback! ';
  var thirdLine = "This change will go a long way to provide an optimal user experience for our " +
    users[Math.floor(Math.random() * users.length)] + '. ';
  var ending = "Overall, we've been hard at work to provide adhere to your standards of quality." +
    " See you soon, The Team.";

  $('.updateBody').text(intro + firstLine + secondLine + thirdLine + ending);
}
