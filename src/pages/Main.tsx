import { Button, Card, Flex, Image, Input, Typography } from 'antd';
import React, { useState } from 'react';

const Main = () => {

    const [name, setName] = useState('')

    const onChangeHandler = (e: React.SyntheticEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }

    const onSubmitHandler = (e: React.SyntheticEvent<HTMLElement>) => {
        e.preventDefault()
        if(name !== 'Chigla'){
            return
        }
        alert(`Happy Birthday ${name}!`)
        setName('')
    }

    return (
        <Flex vertical>
            <Flex justify={'center'} style={{ marginTop: '3vh' }}>
                <form onSubmit={onSubmitHandler}>
                    <Card>
                        <Flex vertical style={{ width: '50vw' }} gap={'1vw'}>
                            <Typography.Title level={3} style={{ textAlign: 'left' }}>Input your name:</Typography.Title>
                            <Input type="text" onChange={onChangeHandler} value={name} />
                            <Button onClick={onSubmitHandler} style={{ width: '10vw', margin: '0 auto' }}>Submit</Button>
                        </Flex>
                    </Card>
                </form>

            </Flex>
            <Flex justify={'center'} style={{marginTop: '3vh'}}>
                <Image src='https://i.mycdn.me/i?r=BDHsYJQ9nKW8WSbKUwTOyh4oTMlClINxCCGTLl0SCwzcnzj8xcG6rjN-uQFNkBbA8Nw' />
            </Flex>
        </Flex>
    );
};

export default Main;