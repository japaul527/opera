import React, { useState, useEffect } from 'react'
import axios from 'axios'

const USER_URL = 'https://jsonplaceholder.typicode.com/users'
const POST_URL = 'https://jsonplaceholder.typicode.com/posts'
const Table = () => {
    const [posts, setPosts] = useState([])
    const [users,setUsers]=useState([])
    const [userId,setUserId]=useState()
    const [id,setId]=useState()
    const [table,setTable]=useState(true)
    useEffect(() => {
        getPostData()
        getUserData()
    }, [])

    const getPostData = async () => {

        const response = await axios.get(POST_URL)
        setPosts(response.data)
    }
    const getUserData=async()=>{
        const response = await axios.get(USER_URL)
        setUsers(response.data)
    }


    const renderHeader = () => {
        let headerElement = ['id', 'userid', 'title']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }
    const clickRow=(id,userId)=>{
        setTable(false)
        setUserId(userId-1)
        setId(id-1)
    }
    const clickButton=()=>{
        setTable(true)
    }
    const renderBody = () => {
        return posts && posts.map(({ id, userId, title }) => {
            return (
                <tr key={id} onClick={()=>clickRow(id,userId)}>
                    <td>{id}</td>
                    <td>{userId}</td>
                    <td>{title}</td>
                </tr>
            )
        })
    }
    const renderPostDetails=()=>{
        // return posts && posts[id-1].map(({id,userId,title,body})=>{
            return(
                <>
                <div class="row">
                    <div class="col-sm">ID</div> 
                    <div class="col-sm">{posts[id].id}</div>
                </div>
                <div class="row">
                    <div class="col-sm">userId</div> 
                    <div class="col-sm">{posts[id].userId}</div>
                </div>
                <div class="row">
                    <div class="col-sm">title</div> 
                    <div class="col-sm">{posts[id].title}</div>
                </div>
                <div class="row">
                    <div class="col-sm">Body</div> 
                    <div class="col-sm">{posts[id].body}</div>
                </div>               
                </>
            )
        // })

    }
    const renderUserDetails=()=>{
        // return users && users.map(({id,name,username,email,address,phone,website,company})=>{
            return(
                <>
                <div class="row">
                    <div class="col-sm">name</div> 
                    <div class="col-sm">{users[userId].name}</div>
                </div>
                <div class="row">
                    <div class="col-sm">username</div> 
                    <div class="col-sm">{users[userId].username}</div>
                </div>
                <div class="row">
                    <div class="col-sm">email</div> 
                    <div class="col-sm">{users[userId].email}</div>
                </div>
                <div class="row">
                    <div class="col-sm">street</div> 
                    <div class="col-sm">{users[userId].address.street}</div>
                </div>
                <div class="row">
                    <div class="col-sm">suite</div> 
                    <div class="col-sm">{users[userId].address.suite}</div>
                </div>
                <div class="row">
                    <div class="col-sm">city</div> 
                    <div class="col-sm">{users[userId].address.city}</div>
                </div>
                <div class="row">
                    <div class="col-sm">lat</div> 
                    <div class="col-sm">{users[userId].address.geo.lat}</div>
                </div>
                <div class="row">
                    <div class="col-sm">lng</div> 
                    <div class="col-sm">{users[userId].address.geo.lng}</div>
                </div>
                <div class="row">
                    <div class="col-sm">phone</div> 
                    <div class="col-sm">{users[userId].phone}</div>
                </div>
                <div class="row">
                    <div class="col-sm">website</div> 
                    <div class="col-sm">{users[userId].website}</div>
                </div>
                <div class="row">
                    <div class="col-sm">company name</div> 
                    <div class="col-sm">{users[userId].company.name}</div>
                </div>
                <div class="row">
                    <div class="col-sm">company catchphrase</div> 
                    <div class="col-sm">{users[userId].company.catchPhrase}</div>
                </div>
                <div class="row">
                    <div class="col-sm">company bs</div> 
                    <div class="col-sm">{users[userId].company.bs}</div>
                </div>
               
                </>
            )
        // })

    }

    const renderDetails = () =>{
        return(
            <>
            <div class="container">
            <h2 class="second_title"> Details 
             <button class="backButton" onClick={()=>clickButton()}>Go back</button></h2>
             {renderPostDetails()}
             {renderUserDetails()}
             </div>
            </>
        )
    }
    const renderTable=()=>{
        return (
            <>
                <h1 id='title'>Table</h1>
                <table id='employee'>
                    <thead>
                        <tr>{renderHeader()}</tr>
                    </thead>
                    <tbody>
                        {renderBody()}
                    </tbody>
                </table>
            </>
        )
    }
    return(
        <>
        {table?renderTable():renderDetails()}
        </>
    )
}


export default Table
