import memesList from '../data/memes.json'
import { Card, Image, Row, Col } from "antd";
import '../styles/memes.css'

const Memes = () => {

    const memes = memesList;
    
    const gridMemes = [];
    for (let i = 0; i < memes.length; i += 3) {
        gridMemes.push(memes.slice(i, i + 3));
    }

    
    return (
        <div>
            {gridMemes.map(row => (
                <Row key={row[1].url} justify={'center'} align={'middle'} gutter={20}> 
                    {row.map(meme => (
                        <Col>
                            <Card key={meme.url} >
                                <Image src={meme.url} style={{height: '35vh', width: '20vw'}} id="meme" preview={typeof meme.video === 'number' ? {
                                    destroyOnClose: true,
                                    imageRender: () => (
                                        <video 
                                        controls
                                        autoPlay
                                        src={require(`../assets/memes/${meme.video}.mp4`)}/>
                                    ),
                                    toolbarRender: () => null,
                                } : {
                                    src: require(`../assets/memes/${meme.image ? meme.image : 21}.jpg`) 
                                }
                                
                                }/>
                            </Card>
                        </Col>
                    ))}
                </Row>
            ))} 

        </div>
    );
};

export default Memes;