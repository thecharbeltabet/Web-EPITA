import React, { StrictMode } from 'react'

export const App = ({name, age}) => {
  return (
    <div>
    <h1>{name} is {age} years old !</h1>
    {age > 12 ? "I go to college" : "I wont go to college"}
    </div>
  )
}



export const Animals = () => {
    let animals = ['dog','lion','bird','fish'];
    return (
        <ul>
            {animals.map(animal => <li>{animal}</li>)}
        </ul>
    )
}

