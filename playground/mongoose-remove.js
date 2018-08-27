const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// })

// Another way to remove documents
// Todo.findOneAndRemove
// Another way to remove documents
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5b80551a0a32361f1a00bc29'}).then((todo) => _{

});

Todo.findByIdAndRemove('5b80551a0a32361f1a00bc29').then((todo) => {
  console.log(todo);
});
