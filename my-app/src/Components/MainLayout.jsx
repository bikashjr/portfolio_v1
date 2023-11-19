import Nav from "./Navbar";
import Footer from "./Footer";

export const MainLayout = ({ children }) => (
    <div className="d-flex flex-column h-100">
        <Nav />
        <main className=" container flex-shrink-0 vh-100 mt-5">
            {children}
        </main>
        <div className="container">
            <Footer/>
        </div>
    </div>
)