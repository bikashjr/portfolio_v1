import { BsLinkedin, BsFacebook, BsGithub } from 'react-icons/bs'


const Contacts = () => {
    return (
        <div>
            <h1 className="text-center pt-5">Contact Me </h1>
            <div className="border-contact mx-auto">
                <div className="content-contact d-flex col-md-12  ">
                    <div className="px-2">
                        <p>Full Name</p>
                        <input type="text" placeholder="Enter your Full Name" />
                        <p>E-mail</p>
                        <input type="text" placeholder="Enter your Email" />
                        <p>Message</p>
                        <textarea placeholder="Enter your  Message"></textarea>
                        <button className="bg-primary text-white border-0 mx-2 mb-2 px-2 py-2 ">Contact Us</button>
                    </div>
                    <div className="col-md-12 px-5 ">
                        <h5>Contact</h5>
                        <p>ghimrebikash41@gmail.com</p>
                        <ul className="nav  list-unstyled d-flex">
          <li className="ms-3"><a className="text-body-secondary" href="#"><BsLinkedin size={20} /></a></li>
          <li className="ms-3"><a className="text-body-secondary" href="#"><BsFacebook size={20} /></a></li>
          <li className="ms-3"><a className="text-body-secondary" href="#"><BsGithub size={20} /></a></li>
        </ul>
                    </div>
                </div>

            </div>

        </div>

    )
}
export default Contacts;