import {useState} from 'react'
import {ReactComponent as Heart} from '@material-design-icons/svg/filled/favorite.svg'
import {ReactComponent as Bookmark} from '@material-design-icons/svg/outlined/bookmark.svg'
import styles from './RecipeCard.module.css'

export default function UserRating() {
  // array destructuring, this is a nice way to access a piece of state and its setting
  // count is out piece of state
  // setCounter is our setter for count
  // useState(0) defines the initial count at 0, aka our default state for when the component loads
  const [count, setCount] = useState(0)

  const handlePlusClick = () => {
    if (count < 5) {
      setCount(count + 1)
    }
    return
  }
  const handleMinusClick = () => {
    if (count > 0) {
      setCount(count - 1)
    }
    return
  }

  return (
    <div className={styles.ratings_wrapper}>
      <div className={styles.ratings_title}>Rating </div>

      
        <button className={styles.button} onClick={handleMinusClick}>
          -
        </button>
  
      


      <div className={styles.heartArea}>
        {/* Mapping over an array witgh count num
      of slots and render a span with an HTML heart for each */}
      {[...Array(count)].map((heart, i) => {
        return (
          <span className={styles.heart} key={i}>
            <Heart />
          </span>
        )
      })}

      </div>
      

      {/* if  ( count<5 )  ?aaaa :bbbbb   */}
      {count < 5 ? (
        <button className={styles.button} onClick={handlePlusClick}>
          +
        </button>
      ) : (
        <button className={styles.button} style={{ display: 'none' }}>
          +
        </button>
      )}
      
    </div>
  )
}



