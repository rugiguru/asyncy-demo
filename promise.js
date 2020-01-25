let promise = new Promise((resolve, reject) => {
    setTimeout(() =>{

        // resolve(1) //if async function is successfull
        reject(new Error('Promissed error'))
    }, 2000)
})

promise
    .then(res => console.log('promised Result', res))
    .catch(err => console.log('Promised error', err.message))