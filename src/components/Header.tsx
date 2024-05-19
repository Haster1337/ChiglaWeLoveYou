import { Button, Flex } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Flex className='header' justify={'flex-end'} gap={'middle'} style={{marginRight: '10vw'}}>
            <Button><Link to={'/'}>Home</Link></Button>
            <Button><Link to={'/memes'}>The memes master</Link></Button>
            <Button><Link to={'/wishes'}>Why do we love you?</Link ></Button>
            <Button><Link to={'/present'}>Present</Link ></Button>
        </Flex>
    );
};

export default Header;