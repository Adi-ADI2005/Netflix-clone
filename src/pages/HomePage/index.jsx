import Navbar from "../../Components/navbar";
import Footer from "../../Components/footer";
import HeroImage from "../../Assets/hero-img.png";
import StrangerImage from "../../Assets/stranger-sec-img.png";
import YouImage from "../../Assets/you-img.png";
import StrangerThings from "../../Assets/stranger-img.png";
import GameOfThrons from "../../Assets/game-of-thorns.png";
import ReasonWayImage from "../../Assets/reason-way.png";
import HeroVideo from "../../Assets/Videos/netflix-hero-video.mp4"
import "./style.css"

function HomePage() {
    return (
        <>
            <Navbar />
            <section className="hero-sec d-flex align-items-center justify-content-center">
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col-sm-6">
                            <div>
                                <h1 className="hero-title">WHAT BEST EXCLUSIVE MOVIES , TV SERIES AND TV SHOWS </h1>
                                <p className="hero-para">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                                <button className="hero-btn">Get Started</button>
                            </div>
                        </div>
                        <div className="col-sm-6" style={{ position: "relative" }}>
                            <div className="mt-5 mt-sm-0">
                                <img src={HeroImage} alt="" className="img-fluid" />
                                <video src={HeroVideo} autoPlay loop muted className="hero-video"></video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Stranger Things Start */}
            <section className="stranger-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 hide-desktop">

                            <div className="stranger-sec-RHS">
                                <img src={StrangerImage} alt="" className="img-fluid" />
                            </div>

                        </div>
                        <div className="col-md-6">
                            <div className="stranger-sec-LHS mt-1 mt-sm-5">
                                <p className="thriller-para">Thriller  | Horrror | Teen Program</p>
                                <h2>Stranger Things</h2>
                                <div className="d-flex gap-5 mt-3">
                                    <div>
                                        <p className="director-para"><b>2019 | DIRECTOR :</b> <span style={{ color: "#a6a6a6" }}>The Duffer Brothers</span></p>
                                    </div>
                                    <div>
                                        <p className="director-para"><b>SEASONS :</b> <span style={{ color: "#a6a6a6" }}>3 ( 25 Episodes)</span></p>
                                    </div>
                                </div>
                                <p className="stranger-para">In 1980s Indiana, a group of young friends witness supernatural
                                    forces and secret government exploits. As they search for answers,
                                    the children unravel a series of extraordinary mysteries.</p>
                                <div className="d-flex gap-5 mt-4">
                                    <button className="watch-btn">WATCH EPISODES &nbsp; &nbsp;<i class="bi bi-play-circle-fill"></i></button>
                                    <button className="season-btn">Season 1</button>
                                </div>
                                <h3>Popular This Weeks</h3>
                                <div className="row mt-5 pb-5">
                                    <div className="col-md-3 col-6 ">
                                        <div className="mb-3 mb-sm-0">
                                            <img src={YouImage} alt="" className="img-fluid w-100 " />
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        <div className="mb-3 mb-sm-0">
                                            <img src={StrangerThings} alt="" className="img-fluid w-100" />
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        <div className="mb-3 mb-sm-0">
                                            <img src={GameOfThrons} alt="" className="img-fluid w-100" />
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        <div className="mb-3 mb-sm-0">
                                            <img src={ReasonWayImage} alt="" className="img-fluid w-100" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 hide-mobile">

                            <div className="stranger-sec-RHS">
                                <img src={StrangerImage} alt="" className="img-fluid" style={{ position: "absolute", bottom: "0px" }} />
                            </div>

                        </div>
                    </div>
                </div>

            </section>

            <section className="download-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-3 mb-sm-0">
                            <div>
                                <div className="icon-bg">
                                    <i class="bi bi-cloud-download-fill"></i>
                                </div>
                                <h3>Download your shows to watch offline.</h3>
                                <p>Save your favourites easily and always have something to watch.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3 mb-sm-0">
                            <div>
                                <div className="icon-bg">
                                    <i class="bi bi-pc-display"></i>
                                </div>
                                <h3>Watch everywhere and Anytime</h3>
                                <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3 mb-sm-0">
                            <div>
                                <div className="icon-bg">
                                    <i class="bi bi-person-circle"></i>
                                </div>
                                <h3>Create profiles for  your children.</h3>
                                <p>Send children on adventures with their favourite just for them</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Stranger Things End */}


            {/* Table Section Start */}
            <section className="table-sec-bg">
                <div className="container">
                    <div className="table-responsive">
                        <table className="table table-borderless mb-0" style={{position:"relative"}} >
                            <thead>
                                <tr>
                                    <th className="pb-5">Advantage</th>
                                    <th className="pb-5">
                                        <div className="d-flex justify-content-center">
                                            <div className="mobile d-flex justify-content-center">
                                                <p className="mb-0">Mobile</p>
                                            </div>
                                        </div>
                                    </th>
                                    <th className="pb-5">
                                        <div className="d-flex justify-content-center">
                                            <div className="basic-disabled d-flex justify-content-center">
                                                <p className="mb-0">Basic</p>
                                            </div>
                                        </div>
                                    </th>
                                    <th className="pb-5">
                                        <div className="d-flex justify-content-center">
                                            <div className="basic-disabled d-flex justify-content-center">
                                                <p className="mb-0">Standard</p>
                                            </div>
                                        </div>
                                    </th>
                                    <th className="pb-5">
                                        <div className="d-flex justify-content-center">
                                            <div className="basic-disabled d-flex justify-content-center">
                                                <p className="mb-0">Premium</p>
                                            </div>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: "1px solid white" }}>
                                    <td className="text-start">Monthly Price</td>
                                    <td className="text-center" style={{ fontSize: "1.1rem", fontWeight: 700 }}>₹199</td>
                                    <td className="text-center" style={{ fontSize: "1.1rem", fontWeight: 700 }}>₹499</td>
                                    <td className="text-center" style={{ fontSize: "1.1rem", fontWeight: 700 }}>₹649</td>
                                    <td className="text-center" style={{ fontSize: "1.1rem", fontWeight: 700 }}>₹799</td>
                                </tr>
                                <tr style={{ borderBottom: "1px solid white" }}>
                                    <td>Video Quality</td>
                                    <td className="text-center" style={{ fontSize: "1.1rem", fontWeight: 700 }}>Good</td>
                                    <td className="text-center" style={{ fontSize: "1.1rem", fontWeight: 700 }}>Good</td>
                                    <td className="text-center" style={{ fontSize: "1.1rem", fontWeight: 700 }}>Better</td>
                                    <td className="text-center" style={{ fontSize: "1.1rem", fontWeight: 700 }}>Best</td>
                                </tr>
                                <tr style={{ borderBottom: "1px solid white" }}>
                                    <td>Resolution</td>
                                    <td className="text-center" style={{ fontSize: "1.1rem", fontWeight: 700 }}>480p</td>
                                    <td className="text-center" style={{ fontSize: "1.1rem", fontWeight: 700 }}>480p</td>
                                    <td className="text-center" style={{ fontSize: "1.1rem", fontWeight: 700 }}>1080p</td>
                                    <td className="text-center" style={{ fontSize: "1.1rem", fontWeight: 700 }}>1080p</td>
                                </tr>
                                <tr style={{ borderBottom: "1px solid white" }}>
                                    <td>Devices You Can Use</td>
                                    <td className="text-center" style={{ fontSize: "1.1rem", fontWeight: 700 }}>
                                        <i class="bi bi-phone-fill"></i>
                                    </td>
                                    <td className="text-center" style={{ fontSize: "1.1rem", fontWeight: 700 }}>
                                        <i class="bi bi-phone-fill"></i><br />
                                        <i class="bi bi-phone"></i>
                                    </td>
                                    <td className="text-center" style={{ fontSize: "1.1rem", fontWeight: 700 }}>
                                        <i class="bi bi-phone-fill"></i><br />
                                        <i class="bi bi-phone"></i><br />
                                        <i class="bi bi-laptop-fill"></i><br />
                                        <i class="bi bi-tv"></i>
                                    </td>
                                    <td className="text-center" style={{ fontSize: "1.1rem", fontWeight: 700 }}>
                                        <i class="bi bi-phone-fill"></i><br />
                                        <i class="bi bi-phone"></i><br />
                                        <i class="bi bi-laptop-fill"></i><br />
                                        <i class="bi bi-tv"></i>
                                    </td>
                                </tr>
                            </tbody>
                            <div style={{backgroundColor:"#000000", height:"20px", width:"100%", position:"absolute", top:"15%"}}>

                            </div>
                        </table>
                        <div className="table-para">
                            <p>content is available in all resolutions. See our Terms of Use for more details.
                                Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.</p>
                            <div className="d-flex justify-content-center">
                                <button className="table-para-btn">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Table Section End */}


            {/* Accodion section start */}
            <section className="accodion-sec">
                <div className="container">
                    <h2 className="text-center">Frequently Asked Questions</h2>
                    <div data-bs-toggle="collapse" data-bs-target="#collapse1" className="accod d-flex justify-content-between align-items-center mt-5">
                        <h3>What is Netflix ?</h3>
                        <i class="bi bi-plus-circle-fill"></i>
                    </div>
                    <div id="collapse1" class="collapse accod">
                        Hide content
                    </div>
                    <div data-bs-toggle="collapse" data-bs-target="#collapse2" className="accod d-flex justify-content-between align-items-center mt-3">
                        <h3>What is Netflix ?</h3>
                        <i class="bi bi-plus-circle-fill"></i>
                    </div>
                    <div id="collapse2" class="collapse accod">
                        Hide content
                    </div>
                    <div data-bs-toggle="collapse" data-bs-target="#collapse3" className="accod d-flex justify-content-between align-items-center mt-3">
                        <h3>What is Netflix ?</h3>
                        <i class="bi bi-plus-circle-fill"></i>
                    </div>
                    <div id="collapse3" class="collapse accod">
                        Hide content
                    </div>
                </div>
            </section>
            {/* Accodion section End */}




            {/* Unlimited Movies Section Start */}
            <section className="pt-5" style={{ backgroundColor: "#000000", paddingBottom: "6%" }}>
                <div className="unlimited-sec-bg">
                    <div className="container d-flex justify-content-center align-items-center text-center">
                        <div>
                            <h2>Unlimited movies, TV shows and more !!</h2>
                            <p>Watch anywhere. Cancel anytime.</p>
                            <button>Get Started</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* Unlimited Movies Section End */}




            <Footer />


        </>
    )
}


export default HomePage;