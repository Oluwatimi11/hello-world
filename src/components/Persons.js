import React from 'react'

function Persons({person}) {
    return (
        <div>
            <h2>
                I am {person.name}, i am {person.age} years old, I know {person.skill}. Thank you.
            </h2>
        </div>
    )
}

export default Persons
