const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/aarjavKart', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // console.log("We are connected");
});

const kittySchema = new mongoose.Schema({
  name: String
});

kittySchema.methods.speak = function () {
  const greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
}

const Kitten = mongoose.model('Kitten', kittySchema);

const aarjavKitty = new Kitten({ name: 'aarjavKitty' });
console.log(aarjavKitty.name);
aarjavKitty.speak();

// aarjavKitty.save(function (err, aarjavKitty) {
//   if (err) return console.error(err);
//   aarjavKitty.speak();
// });

Kitten.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
})