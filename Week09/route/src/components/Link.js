import {useContext} from 'react'
// import cx from 'classNames'
import NavigationContext from '../context/navigation'

export default function Link({to, children}) {
  const {navigate} = useContext(NavigationContext)
  console.log(children);

  const handleClick = (event) => {
    event.preventDefault()
    navigate(to)
  }

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
    
  )
}
