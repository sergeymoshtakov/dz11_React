import React from 'react';

function Map() {
    const arr = [
        {
            name: 'Dmitro',
            age: 22,
        },
        {
            name: 'Svetl',
            age: 25,
        },
        {
            name: 'Ruslan',
            age: 20,
        },
    ];
    let content = arr.map(item => <>
        <p>{item.name}</p>
        <p>{item.age}</p>
    </>);
    return (
        <>
            {content}
        </>
    );
}

export default Map;