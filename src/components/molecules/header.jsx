import React from 'react';
import '../../css/atoms/header.css';
import CustomText from '../atoms/text';

function Header() {
    return (
        <header className='header'>
            <CustomText
                fontSize='30px'
                color='#000000'
                type='b'
                content='Stylo'
            />
        </header>
    );
}

export default Header;