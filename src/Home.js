import React from 'react'
import Header from './Header'
import NavBar from './NavBar';
// import { useHistory } from 'react-router-dom';
const Home = () => {
  // const history = useHistory();
  // history.push("/login");
  return (
    <div>
      <NavBar />
      <Header />
    </div>
  )
}

export default Home;