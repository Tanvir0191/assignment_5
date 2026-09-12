import logo from '../assets/logo-text.png'

const Footer = () => {
    return (
        <footer>
            <section className="bg-white text-black flex justify-between p-8">
                <div>
                    <img src={logo} alt="Logo" />
                    <p>
                        Curated tools, technologies, and resources <br /> for developers building
                        modern software.
                    </p>

                    <div className="flex gap-4 mt-4">
                        <h5>GitHub</h5>
                        <h5>Twitter</h5>
                        <h5>LinkedIn</h5>
                    </div>
                </div>
                <div>
                    <h2 className="text-lg font-bold">PRODUCT</h2>
                    <p>Home</p>
                    <p>Technology</p>
                    <p>Projects</p>
                </div>
                <div>
                    <h2 className="text-lg font-bold">COMPANY</h2>
                    <p>About</p>
                    <p>Contract</p>
                    <p>Careers</p>
                </div>
                <div>
                    <h2 className="text-lg font-bold">LEGAL</h2>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </div>
            </section>
            <div className=" flex justify-between p-8">
                <p>@ 2026 Your Company. All rights reserved.</p>
                <div className="flex gap-4">
                    <p>Privacy</p>
                    <p>Terms</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;