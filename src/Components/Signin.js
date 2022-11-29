import '../App.css'
import { Form,Button } from 'react-bootstrap';
import amazonNavLogo  from '../Pics/amazonNavLogo.png';
import { Link } from 'react-router-dom';

function Signin() {
    return (

        <div>
            <nav className='signinNav'>
                <ul>
                    <Link to={'/'}><li><img src={amazonNavLogo}></img></li></Link>
                </ul>
            </nav>
            <div style={{width:"50%",display:"flex",justifyContent:"center",marginTop:"15%",marginLeft:"25%"}}>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"  required/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required/>
            </Form.Group>
            <Button variant="dark" type="submit">
                Submit
            </Button>
        </Form>
        </div>
        </div>
        
        
    )
}

export default Signin;