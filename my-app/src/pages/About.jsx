import { BsLinkedin, BsFacebook, BsGithub } from 'react-icons/bs';
import { MainLayout } from '../Components/MainLayout';
import { Container, Row } from 'react-bootstrap';

const Title = ({ title }) => {
    return <h1 className="mt-5  text-center">{title}</h1>
}

const About = () => {
    return (
        <>
            <MainLayout>
                <Title title='About Me' />
                <Container>
                    <Row>
                        <div className=" col-md-6">
                            <b>image here</b>
                            {/* <img src="" alt="" /> */}
                        </div>
                        <div className="col-md-6">
                            <h3 className="text-success">Get to know Me</h3>
                            <p className='fw-4 '>Skilled in HTML, CSS, JavaScript, and  in React. Passionate about creating dynamic and engaging web experiences. Constantly expanding knowledge to build innovative and user-friendly interfaces. Personal development is very important to me and I'm constantly improving my skills and knowledge to get the best results from every campaign. Self-driven frontend developer eager to learn and expand skills in HTML, CSS, JavaScript, and React.</p>
                            <ul className="nav col-md-4  d-flex">
                                <li className=""><a href='https://www.aedin.com/in/bikash-ghimire-730b33279/' className="text-body-secondary"><BsLinkedin size={30} /></a></li>
                                <li className="ms-2"><a className="text-body-secondary" href='https://www.facebook.com/bikash.ghimire.566148/'><BsFacebook size={30} /></a></li>
                                <li className="ms-2"><a className="text-body-secondary" href='https://github.com/bikashjr'><BsGithub size={30} /></a></li>
                            </ul>
                        </div>
                    </Row>
                </Container>
            </MainLayout>
        </>
    )
}
export default About;