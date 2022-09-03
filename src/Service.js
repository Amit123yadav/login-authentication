import React from 'react'
import { BrowserRouter as Router,Link, Route } from 'react-router-dom';
import NavBar from './NavBar';
import User from './User';

const Service = () => {
    const users = [
        {
            id: 1,
            name: "amit",
            email: "amit@gmail.com",
        },
        {
            id: 2,
            name: "anil",
            email: "anil@gmail.com",
        }, {
            id: 3,
            name: "sunil",
            email: "sunil@gmail.com",
        }, {
            id: 4,
            name: "arun",
            email: "arun@gmail.com",
        }, {
            id: 5,
            name: "ashok",
            email: "ashok@gmail.com",
        },
    ]
    return (
        <>
            <NavBar />
            <div className='container-fluid d-flex align-items-center justify-content-center flex-column '>
                <Router>
                <h1>This is service page</h1>
                {users.map((item) => {
                    return (
                        <><Link to={`/service/users/${item.id}/${item.name}/${item.email}`}><h3>{item.name}</h3></Link ></>
                    )
                })}
                <Route path={'/service/users/:id/:name/:email'} component={User} />
                </Router>
            </div>
        </>
    )
}

export default Service;