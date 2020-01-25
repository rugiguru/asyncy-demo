console.log('Before');
// getUser(1, (user) => {
//   getRepositories(user.gitHubUsername, (repos) => {
//     getCommits(repos[0], (commits) => {
//       console.log(commits);
//     })
//   })
// });

// Promised based approach
//  getUser(1)
//   .then(user => getRepositories(user.gitHubUsername))
//   .then(repoRes => getCommits(repoRes[0]))
//   .then(commits => console.log('Commits', commits))


// async await approach 
async function display() {
try {
 
    const user = await getUser(1)
    const repos = await getRepositories(user.gitHubUsername)
    const commits = await getCommits(repos[0])
    console.log(commits)
    
} catch (error) {
  console.log('Error', error.message)
}
}

display();
console.log('After');

function getUser(id) {
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      console.log('Reading a user from a database...');
      resolve({ id: id, gitHubUsername: 'mosh' });
      // reject('rejected')
    }, 2000);
  })
 
}

function getRepositories(username) {

  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      console.log('Calling GitHub API...');
      resolve(['repo1', 'repo2', 'repo3']);
    }, 2000);
  })
  
}

function getCommits(repo) {
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      console.log('Calling GitHub API...');
      resolve(['commit']);
    }, 2000);
  })
 
}