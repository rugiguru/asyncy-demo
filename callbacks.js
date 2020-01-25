const getUser = (id, callback) =>{
    setTimeout(() =>{
        console.log('Get the user data from db')
        callback({id:id, githubUser:'Guru'})
    }, 2000)
}

const getUserRepo = (user, callback) => {
    setTimeout(() =>{
        console.log('Getting the repos')
        callback(['repo1', 'repo2', 'repo3'])
    }, 2000)
}

const getRepoComments = (repo, callback) =>{
    setTimeout(() =>{
        console.log('getting comments for ' + repo)
        callback(['comment1', 'comment2'])
    },2000)
}



console.log('Before');

getUser(1, (user) =>{
    getUserRepo(user, (repos) =>{
        console.log('user repos', repos)
    })
        getRepoComments('Gurus repo', (comments) =>{
            console.log('comments', comments)
        })
})

console.log('after');


