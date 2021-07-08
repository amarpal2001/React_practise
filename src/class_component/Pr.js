import React from 'react';
import './project.css'

function Pr(props) {
    return (
        <div>
            <span className='text'>
                Nature includes living and non-living components that together make life on Earth possible. Some forms of nature can be seen through the lush green forests, the vast sky above us, the oceans without an end,the mountains standing tall and so on.<br/> Nature nourishes the survival needs of plants, animals and humans alike
                Nature includes living and non-living components that together make life on Earth possible. Some forms of nature can be seen through the lush green forests, the vast sky above us, the oceans without an end, the mountains standing tall and so on.<br/> Nature nourishes the survival needs of plants, animals and humans alike
                
            </span>
            <p className="texts">
                The Moon classified as a planetary-mass object and a differentiated rocky body.<br/> It lacks any significant atmosphere, hydrosphere, or magnetic field, and its surface gravity is about one-sixth of Earth's..<br/>The Moon is classified as a planetary-mass object and a differentiated rocky body.<br/> It lacks any significant atmosphere, hydrosphere, or magnetic field, and its surface gravity is about one-sixth of Earth's..
            </p>
            <p className="text1">
                The Moon is classified as a planetary-mass object and a differentiated rocky body.<br/> It lacks any significant atmosphere, hydrosphere, or magnetic field, and its surface gravity is about one-sixth of Earth's..<br/>The Moon is classified as a planetary-mass object and a differentiated rocky body.<br/> It lacks any significant atmosphere, hydrosphere, or magnetic field, and its surface gravity is about one-sixth of Earth's..
                
            </p>
            {props.children}
            <h4 className="text">
            </h4>
        </div>
    )
}

export default Pr;
