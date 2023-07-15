import { Flex } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import AllRoutes from '../Routing/AllRoutes';

function Navbar() {
    return (
        <div style={{ height: '100vh' }}>
            <header
                style={{
                    background: 'linear-gradient(to right, #3498db, #ff8c00)',
                    position: 'sticky',
                    top: 0,
                    zIndex: 100,
                }}
            >
                <Flex
                    align={'center'}
                    height={'80px'}
                    color={'white'}
                    justify={'space-evenly'}
                    fontWeight={"bold"}
                    boxShadow={'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px'}
                >
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/movies">Movies</Link>
                    <Link to="/to-do">Todo</Link>
                    <Link to="/product">Product</Link>
                    <Link to="/cart">Cart</Link>
                </Flex>
            </header>
            <AllRoutes />
        </div>
    );
}

export default Navbar;
