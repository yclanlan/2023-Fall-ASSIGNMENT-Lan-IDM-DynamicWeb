import { Outlet, Link } from "react-router-dom";
import Button from '../components/Button'
import Menu from '../components/Menu'
import {MdCoffee, MdDoorSliding} from 'react-icons/md'

const People1 = () => {

  
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
    <h3>Hi, what can I get for you?</h3>
    <br/>
    <div style={{ display:"flex" , gap: "10px", alignItems:"center", justifyContent:"center"  }}>


        <Link to="/finish">

          <Button primary rounded outline >
           <MdCoffee /> Latte
          </Button>
          
        </Link>



        <Link to="/finish">

        <Button primary rounded outline >
        <MdCoffee /> Americano
        </Button>

        </Link>

        <Link to="/finish">

        <Button primary rounded outline >
        <MdCoffee /> FlatWhite
        </Button>

</Link>
      </div>
      </div>
      </>
      )

  };
  
  export default People1;