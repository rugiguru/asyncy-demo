
const p = Promise.resolve({id:'1'});

p.then(res => console.log(res))

const f = Promise.reject(new Error('reason for rejection ....'));

f.catch(err => console.log(err));

