import { BsLinkedin, BsFacebook, BsGithub } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="container mt-5">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <span className="mb-3 mb-md-0 text-body-secondary">&copy; 2023 Company, Inc</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3"><a className="text-body-secondary" href="#"><BsLinkedin size={30} /></a></li>
          <li className="ms-3"><a className="text-body-secondary" href="#"><BsFacebook size={30} /></a></li>
          <li className="ms-3"><a className="text-body-secondary" href="#"><BsGithub size={30} /></a></li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;

