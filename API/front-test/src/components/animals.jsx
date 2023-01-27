export const animals = () => {
    let animals = ['dog','lion','bird','fish'];
    let animalsRes = animals.map(animal => <li>{animal}</li>)
    return (
        <ul>
            {animalsRes}
        </ul>
    )
}
