import { Outlet, Link } from "react-router-dom";
import Button from '../components/Button'
import Menu from '../components/Menu'
import {MdCoffee, MdDoorSliding} from 'react-icons/md'

const People2 = () => {

  
    return (    
      <>
       <div style={{ width:"50%" , margin: "auto" , alignItems:"center", textAlign:"center" }}>
        <br/>
        <h1 className="text-3xl font-bold no-underline">   MENU </h1>
    <br/>
    <div style={{ display:"flex" , gap: "10px", alignItems:"center", justifyContent:"center" }}>
    <Menu secondary> Latte</Menu>
    <Menu secondary> Americano</Menu>
    <Menu secondary> FlatWhite</Menu>
    </div>
    <br/>
    <h3>Now, only 1 people in front of you!</h3>
    <br/>
    <div style={{display:"flex" , gap: "10px", alignItems:"center", justifyContent:"center" }}>
        <Link to="/people1">

          <Button primary rounded outline >
           <MdCoffee /> Almost There!
          </Button>
          
        </Link>



        <Link to="/leave">

        <Button primary rounded outline >
        <MdDoorSliding /> Leave
        </Button>

        </Link>
      </div>
      </div>
      </>
      )

  };
  
  export default People2;