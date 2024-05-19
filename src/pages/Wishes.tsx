import profiles from '../data/profiles.json'
import { Card, Flex, Image, Typography } from 'antd';


const Wishes = () => {
    return (
        <Flex vertical gap={'2vh'}>
            {profiles.map(profile => (
                <Flex key={profile.id} align='center' justify='center' flex={""}>
                    <Card>
                        <Flex style={{width: '50vw'}} gap={'large'}>
                            <div style={{maxWidth: '20vw'}}>
                                <Image src={profile.url} style={{objectFit: 'cover'}} preview={profile.type === "video" ? {
                                        destroyOnClose: true,
                                        imageRender: () => (
                                            <video 
                                            controls
                                            autoPlay
                                            style={{maxWidth: "800px", maxHeight: '600px'}}
                                            src={require(`../assets/wishes/${profile.data}.mp4`)}/>
                                        ),
                                        toolbarRender: () => null,
                                    } : {
                                        src: require(`../assets/wishes/${profile.data}.jpg`) 
                                    }}/>
                            </div>
                            
                            <Flex align='center'>
                                <Typography.Title level={3}>{profile.name}</Typography.Title>
                            </Flex>
                            
                        </Flex>
                    </Card>
                </Flex>
            ))}
        </Flex>
    );
};

export default Wishes;