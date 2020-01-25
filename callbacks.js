const getUser = (id, callback) =>{
    setTimeout(() =>{
        console.log('Get the user data from db')
        callback({id:id, githubUser:'Guru`'})
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

const displayComments = (comments) =>{
    console.log(comments)
}

const displayUserRepos = (repos) =>{
    getRepoComments('Gurus repo', displayComments)
}

const displayUsers = (user) =>{
    getUserRepo(user, displayUserRepos)
}

console.log('Before');

getUser(1, displayUsers)

console.log('after');


