const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {User} = require('./../server/models/user');

// var id = '5b7b29688748e04b0fe38546';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not Valid');
// }
//
// // Todo.find({
// //   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

// var id = '5b7aec7bfec62efe0447c8be';

User.findById('5b7aec7bfec62efe0447c8be').then((user) => {
  if (!user) {
    return console.log('Id not found');
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));
