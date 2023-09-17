import { TypeAnimation } from 'react-type-animation'

function TypedPosition () {
  return (
    <TypeAnimation
      sequence={[
        'Ingeniero de Software', // Types 'One'
        2000, // Waits 2s
        'Desarrollador Frontend', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Programador', // Types 'Three' without deleting 'Two'
        2000// Wait 2s
      ]}
      wrapper='span'
      cursor
      repeat={Infinity}
      className='text-myaquamarine font-bold'
    />
  )
}
export default TypedPosition
