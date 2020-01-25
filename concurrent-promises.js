
const p1 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        console.log('Executing promise 1')
        resolve(1)
        // reject(new Error('some thing not correct'))
    }, 3000)
});

const p2 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        console.log('Executing promise 2')
        resolve(2)
    }, 3000)
});

Promise.race([p1,p2])
    .then((res) => console.log(res))
    // .catch(err => console.log(err)) 