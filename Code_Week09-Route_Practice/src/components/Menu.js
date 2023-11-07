import cx from 'classnames'
import {twMerge} from 'tailwind-merge'


export default function Menu({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...otherProps
}) {
  const classes = twMerge(
    cx(otherProps.className, 
      'flex items-center px-8 py-3 border', 
      {
      'border-blue-500 bg-blue-600 text-white': primary,
      'border-gray-900 bg-gray-800 text-white': secondary,
      'border-green-500 bg-green-600 text-white': success,
      'border-orange-400 bg-orange-500 text-white': warning,
      'border-red-600 bg-red-700 text-white': danger,

      // rounded
      'rounded-full': rounded,
      'bg-white': outline,
      // outline variation
      'text-blue-500': outline && primary,
      'text-gray-900': outline && secondary,
      'text-green-500': outline && success,
      'text-orange-400': outline && warning,
      'text-red-600': outline && danger,
      
    })
  )

  return (
    <div {...otherProps} className={classes}>
      {children}
    </div>
  )
}
