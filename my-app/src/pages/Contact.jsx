import { useState } from 'react';
import Projects from './Projects';

import { Container, Row, Form } from 'react-bootstrap';
import { MainLayout } from '../Components/MainLayout';

const Contacts = () => {
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    // for Err validation
    const [userErr, setUserErr] = useState(false)
    const [emailErr, setEmailErr] = useState(false)

    //for successful validation
    const [validationSuccess, setValidationSuccess] = useState(false);

    // to prevent from re render the component
    const loginHandel = (e) => {
        e.preventDefault()
        if (user.length < 4 || email.length < 4) {
            setUserErr(true);
            setEmailErr(true)
        } else {
            setValidationSuccess(true);
        }
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
    const Title = (props) => {
        return (
            <h1 className='mt-5 text-center'>{props.title}</h1>
        )
    }

    return (
        <div>
            <MainLayout>
                {validationSuccess ? (
                    <Projects />
                ) : (
                    <div>
                        <Title title='Contact Me' />
                        <hr />
                        <Form onSubmit={loginHandel}>
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
                                                value={user}
                                            />
                                            {userErr && <span className="text-danger">Invalid Name</span>}
                                            <h5 className='pt-3'> Email * </h5>
                                            <input type="text" placeholder='name@example.com' value={email} className='p-2' onChange={emailHandel} />
                                            {emailErr && <span className="text-danger">Invalid email</span>}
                                            <h5 className='pt-3'>Subject  </h5>
                                            <input type="text" placeholder='Write about subject ' className='p-2' />
                                            <textarea name="" id="" cols="30" className='w-100 mt-4 p-2'>Write a message </textarea>
                                            <button className='w-100 text-center mt-2 bg-secondary border-0  p-2 text-white pb-2 btn-form'>Click Me</button>
                                        </div>
                                    </div>
                                </Row>
                            </Container>
                        </Form>
                    </div>
                )}
            </MainLayout>
        </div>
    );
};

export default Contacts;


