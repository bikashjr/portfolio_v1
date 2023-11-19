import { MainLayout } from '../Components/MainLayout'

const Home = () => {
    return (
        <MainLayout>
            <div className="d-flex">
                <div className=" home-information col-md-6">
                    <h4 className="pt-5">Hi, I am </h4>
                    <h1 className="px-5">Bikash Ghimire</h1>
                    <h2 className="text-primary">Frontend Developer</h2>
                    <p className="fw-medium text-secondary">Aspiring frontend developer with a passion for crafting visually appealing <br />and user-friendly websites. Eager to learn and grow in the industry.</p>
                </div>
                <div className="col-md-6 home-information">
                    <div className=" image-left">
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
export default Home;