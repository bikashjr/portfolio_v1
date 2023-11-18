import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Projects from './Projects';

const Contacts = () => {

    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [userErr, setUserErr] = useState(false)
    const [emailErr, setEmailErr] = useState(false)
    const [validationSuccess, setValidationSuccess] = useState(false);


    // to prevent from re render the component
    const loginHandle = (e) => {
        if (user.length < 4 || email.length < 4) {
            alert('Please enter valid user or email')
        } else {
            setValidationSuccess(true);
        }

        e.preventDefault()

    }
    // name validation 
    const userHandel = (e) => {
        let item = e.target.value;
        if (item.length < 4) {
            setUserErr(true)
        }
        else {
            setUserErr(false)
        }
        setUser(item)
    }

    // email validation
    const emailHandel = (e) => {
        let item = e.target.value;
        if (item.length < 4 || !item.includes('@')) {
            setEmailErr(true)
        }
        else {
            setEmailErr(false)
        }
        setEmail(item)
    }



    return (

        <div>
            {validationSuccess ? (
                <Projects />
            ) : (
                <div>
                    <h1 className="text-center pt-5">Contact Me </h1>
                    <hr></hr>
                    <form onSubmit={loginHandle}>
                        <Container>
                            <Row>
                                <div className="border-black">
                                    <div className="login-informations">
                                        <h5 className='pt-3'>Full Name * </h5>
                                        <input
                                            type="text"
                                            placeholder='Enter Your Full Name'
                                            className='p-2'
                                            onChange={userHandel}
                                        />
                                        {userErr && <span className="text-danger">Invalid Name</span>}
                                        <h5 className='pt-3'> Email * </h5>
                                        <input type="text" placeholder='name@example.com' className='p-2' onChange={emailHandel} />
                                        {emailErr && <span className="text-danger">Invalid email</span>}
                                        <h5 className='pt-3'>Subject  </h5>
                                        <input type="text" placeholder='Write about subject ' className='p-2' />
                                        <textarea name="" id="" cols="30" className='w-100 mt-4 p-2'>Write a message </textarea>
                                        <button className='w-100 text-center mt-2 bg-secondary border-0  p-2 text-white pb-2 btn-form'>Click Me</button>
                                    </div>
                                </div>
                            </Row>
                        </Container>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Contacts;


