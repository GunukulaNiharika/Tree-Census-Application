import { useState, useEffect } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import './home.css';
// import backgroundImage from '../assets/images/'

function Home () {
    const [TreeName, setTreeName] = useState("");
    const [TreeType, setTreeType] = useState("");
    const [Time, setTime] = useState("");
    const [date, setDate] = useState("");
    const [Height, setHeight] = useState("");
    const [Girth, setGirth] = useState("");
    const [CrownSpread, setCrownSpread] = useState("");
    const [Volume, setVolume] = useState("");
    const [Latitude, setLatitude] = useState("");
    const [Longitude, setLongitude] = useState("");
    const [Other, setOther] = useState("");

    const styles = {
        container: {
            backgroundImage: `url("/src/")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh'
        }
    };

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition( (position) =>{
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);

        });
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return(
        <div style={styles}>
            <Card className='center-card card'>
                <Card.Title className='center' id='head'>Tree Census</Card.Title>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className='value'>
                            <Form.Label className='label'>Tree Name</Form.Label>
                            <Form.Control
                                className='input'
                                placeholder='Enter Tree Name'
                                value={TreeName}
                                type='text' 
                                size='md'
                                onChange={(e)=>setTreeName(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className='value'>
                            <Form.Label className='label'>Tree Type</Form.Label>
                            <Form.Select
                            className='input select'
                            placeholder='Tree Type'
                            value={TreeType}                            
                            onChange={(e)=>setTreeType(e.target.value)}>
                                    <option className='option' value='1'>Deciduous</option>
                                    <option value='2'>Coniferous</option>
                                    <option value='3'>Other</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className='value'>
                            <Form.Label className='label'>Time of Recording </Form.Label>
                            <Form.Control
                                className='input'
                                placeholder='Enter Time'
                                value={Time}
                                type='time' 
                                size='md'
                                onChange={(e)=>setTime(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className='value'>
                            <Form.Label className='label'>Date of Recording </Form.Label>
                            <Form.Control
                                className='input'
                                placeholder='Enter Date'
                                value={date}
                                type='date' 
                                size='md'
                                onChange={(e)=>setDate(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className='value'>
                            <Form.Label className='label'>Tree Dimensions </Form.Label>
                            <Form.Group className='value'>
                            <Form.Label className='label'>Tree Height </Form.Label>
                            <Form.Control
                                className='input'
                                placeholder='Enter Tree height in feet'
                                value={Height}
                                type='number' 
                                size='md'
                                onChange={(e)=>setHeight(e.target.value)}
                                required
                            />
                            </Form.Group>
                            <Form.Group className='value'>
                                <Form.Label className='label'>Girth </Form.Label>
                                <Form.Control
                                    className='input'
                                    placeholder='Girth'
                                    value={Girth}
                                    type='number' 
                                    size='md'
                                    onChange={(e)=>setGirth(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className='value'>
                                <Form.Label className='label'>Volume </Form.Label>
                                <Form.Control
                                    className='input'
                                    placeholder=' Volume'
                                    value={Volume}
                                    type='number' 
                                    size='md'
                                    onChange={(e)=>setVolume(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className='value'>
                                <Form.Label className='label'>Crown spread </Form.Label>
                                <Form.Control
                                    className='input'
                                    placeholder='Crown Spread'
                                    value={CrownSpread}
                                    type='number' 
                                    size='md'
                                    onChange={(e)=>setCrownSpread(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            
                        </Form.Group>
                        <Form.Group className='value'>
                            <Form.Label className='label'>Tree Location </Form.Label>
                            <Form.Group className='value'>
                            <Form.Label className='label'>Latitude </Form.Label>
                            <Form.Control
                                className='input'
                                placeholder='Enter Tree height in feet'
                                value={Latitude}
                                type='number' 
                                size='md'
                                onChange={(e)=>setLatitude(e.target.value)}
                                required
                            />
                            </Form.Group>
                            <Form.Group className='value'>
                                <Form.Label className='label'>Longitude </Form.Label>
                                <Form.Control
                                    className='input'
                                    placeholder='Enter Tree Diameter in cm'
                                    value={Longitude}
                                    type='number' 
                                    size='md'
                                    onChange={(e)=>setLongitude(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            
                        </Form.Group>
                        <Form.Group className='value'>
                                <Form.Label className='label'>Other Data (optional)</Form.Label>
                                <Form.Control
                                    className='input'
                                    placeholder='Any other observations'
                                    value={Other}
                                    as='textarea'
                                    rows={4}
                                    onChange={(e)=>setOther(e.target.value)}
                                    
                                />
                            </Form.Group>
                        <Button className='button value input'  type='submit'>Submit</Button>
                    </Form>
                </Card.Body>

            </Card>
        </div>
    );
}
export default Home;