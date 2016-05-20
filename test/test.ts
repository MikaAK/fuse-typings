import test = require('blue-tape');
import Fuse = require('fuse.js');

test('default example', (t) => {
  t.plan(2);

  let books = [{
    title: "Old Man's War",
    author: {
      firstName: 'John',
      lastName: 'Scalzi',
    },
  }];
  let fuse = new Fuse(books, { keys: ['title', 'author.firstName'] });
  t.equal(fuse.options.keys[0], 'title');
  t.equal(fuse.options.keys[1], 'author.firstName');
});
