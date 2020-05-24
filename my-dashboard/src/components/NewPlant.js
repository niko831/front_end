import React from 'react';

const NewPlant = () => {

    return (
        <div className='newPlant'>
            <h4>Add a New Plant</h4>
            <form>
                <label>
                <p>Plant Name</p>
                <input type='text'/>
                </label>
                <label>
                <p>Species (optional)</p>
                <input type='text'/>
                </label>
            </form>
        </div>
    )
}

export default NewPlant;