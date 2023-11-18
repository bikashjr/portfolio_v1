import { BsLinkedin, BsFacebook, BsGithub } from 'react-icons/bs'

const About =()=>{
    return(
        <>
        <h1 className="mt-4 pb-5 text-center">About Me</h1>
        <div className="container">
            <div className="row">
        <div className="col-md-6">
            <img src="" alt="" />
        </div>
        <div className="col-md-6">
            <h3 className="text-success">Get to know Me</h3>
            <p className='fw-4 '>Skilled in HTML, CSS, JavaScript, and  in React. Passionate about creating dynamic and engaging web experiences. Constantly expanding knowledge to build innovative and user-friendly interfaces. Personal development is very important to me and I'm constantly improving my skills and knowledge to get the best results from every campaign. Self-driven frontend developer eager to learn and expand skills in HTML, CSS, JavaScript, and React.</p>
            <ul className="nav col-md-4  d-flex">
          <li className=""><a className="text-body-secondary" href="#"><BsLinkedin size={30} /></a></li>
          <li className="ms-2"><a className="text-body-secondary" href="#"><BsFacebook size={30} /></a></li>
          <li className="ms-2"><a className="text-body-secondary" href="#"><BsGithub size={30} /></a></li>
        </ul>
        </div>

            </div>
        </div>
        </>
    )
}
export default About;