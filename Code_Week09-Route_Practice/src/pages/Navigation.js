import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      {/* <nav style={{ display:"flex" , gap: "10px" }}>
            
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
           
      </nav> */}

      <Outlet />
    </>
  )
};

export default Navigation;