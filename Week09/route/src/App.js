import Link from './components/Link'
import Button from './components/Button'
import {MdFlutterDash} from 'react-icons/md'


export default function App() {
  return (
    <>


{/* <div style={{ display:"flex" , gap: "10px" }} > */}
<div className=" container mx-auto grid grid-cols-6 gap-4 mt-4" >

        <Link to="/button">
          <Button primary rounded outline >
           <MdFlutterDash /> Go to Button Page
          </Button>
          
        </Link>

        <Link to="/accordion">
          <Button primary rounded outline >
          Go to Accordion Page
          </Button>
          
        </Link>

      </div>
      <br/> 
      <Button primary rounded outline >
        
        Buy Now
      </Button>




      <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> 
      <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> 
















    <div className='ml-4'>
      <br/>

      <br/>

      <p className='text-2xl font-medium'> Button.js code:</p>
      <br/>
      <p className='font-bold'>// cx to mix all the classes into one</p>
     
     <p>cx（otherProps.className,</p>
     <p className='font-bold'> // apply to all </p>

      'flex items-center px-8 py-3 border', <br/>
      <br/><br/>
      『
      <p className='font-bold'> // different basic versions </p>
      'border-blue-500 bg-blue-600 text-white': primary,<br/>
      'border-gray-900 bg-gray-800 text-white': secondary,<br/>
      'border-green-500 bg-green-600 text-white': success,<br/>
      'bg-orange-400 bg-orange-500 text-white': warning,<br/>
      'border-red-600 bg-red-700 text-white': danger,<br/>
      <br/>

      <p className='font-bold'> // rounded </p>
      
      'rounded-full': rounded,<br/>
      'bg-white': outline,<br/>
      <br/>

      <p className='font-bold'> // outline variation </p> 
      
      'text-blue-500': outline && primary,<br/>
      'text-gray-900': outline && secondary,<br/>
      'text-green-500': outline && success,<br/>
      'text-orange-400': outline && warning,<br/>
      'text-red-600': outline && danger,<br/>
      』
    ）
    

      <br/><br/><hr className='border-1 border-black'/> <br/>
      Button style test
      <br/>
      <div style={{ display:"flex" , gap: "10px" }} >
        <Button primary >
        primary
        </Button>

        <Button secondary>
        secondary
        </Button>

        <Button success >
        success
        </Button>

        <Button warning >
        warning
        </Button>

        <Button danger >
        danger
        </Button>

        </div>

        <br/>


        outline & rounded
        <div style={{ display:"flex" , gap: "10px" }} >
        <Button rounded >
        rounded
        </Button>

        <Button outline>
        outline
        </Button>
        </div>

        <br/>


        outline Mix
        <div style={{ display:"flex" , gap: "10px" }} >

        <Button outline primary>
        outline && primary
        </Button>

        <Button outline secondary >
        outline && secondary
        </Button>

        <Button outline  success >
        outline && success
        </Button>

        <Button outline  warning >
        outline && warning
        </Button>

        <Button outline  danger >
        outline && danger
        </Button>

        </div>

        <br/>

        rounded Mix
        <div style={{ display:"flex" , gap: "10px" }} >

        <Button rounded primary>
        rounded && primary
        </Button>

        <Button rounded  secondary >
        rounded && secondary
        </Button>

        <Button rounded  success >
        rounded && success
        </Button>

        <Button rounded  warning >
        orounded && warning
        </Button>

        <Button rounded  danger >
        rounded && danger
        </Button>

        </div>


  <br/>  <br/> <hr className='border-1 border-black'/>  <br/>





      {/* App Page Routes Coming SOON */}
    </div>
    </>
  )
}
