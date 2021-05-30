import React from 'react';
import { Container } from 'react-bootstrap';

const Header = () => {
    return (
        <Container>
            <div className="bg-dark text-center text-white mt-4 p-3 rounded">
                <h3>Smart Diary</h3>
            </div>
        </Container>
    );
};

export default Header;