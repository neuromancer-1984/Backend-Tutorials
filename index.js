require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000
const githubData = {
    "login": "neuromancer-1984",
    "id": 72512174,
    "node_id": "MDQ6VXNlcjcyNTEyMTc0",
    "avatar_url": "https://avatars.githubusercontent.com/u/72512174?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/neuromancer-1984",
    "html_url": "https://github.com/neuromancer-1984",
    "followers_url": "https://api.github.com/users/neuromancer-1984/followers",
    "following_url": "https://api.github.com/users/neuromancer-1984/following{/other_user}",
    "gists_url": "https://api.github.com/users/neuromancer-1984/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/neuromancer-1984/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/neuromancer-1984/subscriptions",
    "organizations_url": "https://api.github.com/users/neuromancer-1984/orgs",
    "repos_url": "https://api.github.com/users/neuromancer-1984/repos",
    "events_url": "https://api.github.com/users/neuromancer-1984/events{/privacy}",
    "received_events_url": "https://api.github.com/users/neuromancer-1984/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "M.R",
    "company": null,
    "blog": "",
    "location": "Mumbai",
    "email": null,
    "hireable": null,
    "bio": "I love to build cool projects",
    "twitter_username": "neuromancer1Q84",
    "public_repos": 36,
    "public_gists": 1,
    "followers": 0,
    "following": 0,
    "created_at": "2020-10-07T15:09:12Z",
    "updated_at": "2025-02-25T15:32:08Z"
  }

app.get('/',(req, res)=>{
    res.send("Hello World")
})

app.get('/home', (req,res)=>{
    res.send("This is HOME")
})

app.get('/login',(req,res)=>{
    res.send('<h1>PLEASE LOGIN</h1>')
})

app.get('/chai',(req,res)=>{
    res.send('<nav>Chai peelo</nav>')
})

app.get('/github', (req,res)=>{
    res.json(githubData)
})

app.listen(process.env.PORT, ()=>{
    console.log(`Event listening at PORT: ${port}`)
})