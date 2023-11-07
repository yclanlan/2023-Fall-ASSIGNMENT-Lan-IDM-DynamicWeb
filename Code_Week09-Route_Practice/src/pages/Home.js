import { Outlet, Link } from "react-router-dom";
import Button from '../components/Button'
import Menu from '../components/Menu'
import {MdCoffee, MdDoorSliding} from 'react-icons/md'

const Home = () => {
    return (
    <>
    <div style={{ width:"50%" , margin: "auto" , alignItems:"center", textAlign:"center" }}>

    <br/> 
    <h1 className="text-3xl font-bold no-underline">Welcome to LanLan's coffee shop </h1>
    <br/>
    <hr className='border-1 border-black'/><br/>

    <h1 className="text-3xl font-bold no-underline">   MENU </h1>
    <br/>
    <div style={{ display:"flex" , gap: "10px", alignItems:"center", justifyContent:"center" }}>
    <br/>
    <Menu secondary> Latte</Menu>
    <Menu secondary> Americano</Menu>
    <Menu secondary> FlatWhite</Menu>
    </div>

    <br/>
    <p>2 people on queue ahead, do you want to wait in line?</p>
    <br/>
        <div style={{  display:"flex" , gap: "10px", alignItems:"center", justifyContent:"center" }}>
            <Link to="/people2">

            <Button primary rounded outline >
            <MdCoffee /> Yes
            </Button>

            </Link>

            <Link to="/leave">

            <Button primary rounded outline >
            <MdDoorSliding /> No
            </Button>

            </Link>
        </div>
  
        </div>
     </>
     
     
     )

  };
  
  export default Home;