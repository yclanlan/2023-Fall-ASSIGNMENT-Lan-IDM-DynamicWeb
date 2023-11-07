import Link from './components/Link'
import Button from './components/Button'
import {MdFlutterDash} from 'react-icons/md'


export default function App() {
  return (
    <div>
      <div>
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


      <Button primary rounded outline >
        
        Buy Now
      </Button>

      {/* App Page Routes Coming SOON */}
    </div>
  )
}
