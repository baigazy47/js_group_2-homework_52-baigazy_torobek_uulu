import React from 'react';

const RandomNumbers = (num) => {
    return (
        <div className="numbers">
            <button>{num.name}</button>
            <p>{Math.floor(Math.random() * 36) + 1}</p>
        </div>
    )
}

export default Person;

// import React from 'react';
//
// const Person = props => {
//     return (
//         <div className="person">
//             <h1>{props.name}</h1>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// }
//
// export default Person;