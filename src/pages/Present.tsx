import { Flex, Typography } from 'antd';
import React from 'react';

const Present = () => {
    return (
        <Flex justify={'center'} style={{ marginTop: '2vh' }}>
            <Flex vertical gap={'2vh'}>
                <Typography.Title level={3} style={{ textAlign: 'center' }}>პატარა საჩუქარი ჩვენგან :)</Typography.Title>
                <div>
                    <iframe style={{width: '45vw', height: '70vh'}} src="https://www.youtube.com/embed/Ov9xvHNze-Y?si=6PxNqtbVABLrV38t" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowFullScreen={true}></iframe>
                </div>
            </Flex>
        </Flex>


    );
};

export default Present;