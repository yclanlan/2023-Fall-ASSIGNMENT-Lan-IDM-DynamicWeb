import { Outlet, Link } from "react-router-dom";
import Button from '../components/Button'
import {MdFlutterDash} from 'react-icons/md'

const Leave = () => {

  
    return (    
      <>
   <div style={{ width:"50%" , margin: "auto" , alignItems:"center", textAlign:"center" }}>
   <br/><br/>
    <h3>Ok! See you next time</h3>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

    <div style={{ display:"flex" , gap: "10px", alignItems:"center", justifyContent:"center" }}>
        <Link to="/">

          <Button primary rounded outline >
           <MdFlutterDash /> changed your mind?
          </Button>
          
        </Link>
    </div>
        </div>
        </>
        )

  };
  
  export default Leave;