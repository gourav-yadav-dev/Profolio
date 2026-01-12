import "./Hero.css"

export function Hero() {
    return (
        <>
            <div className="HeroContainer">
                <div className="HeroContainerFirstBlock">

                </div>
                <div className="HeroContainerSecondBlock">

                    <div className="subSecondBlock">
                        <div className="test">
                            <div className="LogoAndCv">
                                <div className="ForLogo">
                                    <span>G</span>
                                </div>
                                <div className="Cv">
                                    <a href="../../../public/Gourav9111773835.pdf" download> Download My Resume</a>
                                </div>
                            </div>

                        </div>
                        <div>
                            <div>
                                <div>
                                    <span  className="NameTitle">I'm Gourav</span>
                                    <span></span>
                                </div>
                                <div className="DegTitle">
                                    Software Developer
                                </div>
                            </div>
                            <div className="description"> 
                                Software Developer passionate about building scalable web applications using modern technologies. Focused on clean code, performance, and continuous learning.

                            </div>
                        </div>
                    </div>
                </div>
                <div className="HeroContainerThirdBlock">
                    Hello gusy
                </div>
            </div>
        </>
    )
}