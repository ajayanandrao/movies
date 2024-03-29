import React, { Fragment, useEffect, useState } from 'react'
import "./MoviePage.scss";
import { useParams } from 'react-router-dom';
import avatar from "./../../img/avatar.jpeg";
import { MdMovie } from "react-icons/md";

const MoviePage = () => {
    const { id } = useParams();

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Function to be executed after a delay
        const delayedFunction = () => {
            setIsVisible(true); // Set your state or perform any action after the delay
        };

        const delayTimeout = setTimeout(delayedFunction, 500);

        return () => clearTimeout(delayTimeout);
    }, []);
    const [movieData, setMovieData] = useState(null);


    const apiKey = process.env.REACT_APP_MOVIES_API_KEY;
    const getMovieApi = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`);
            const data = await response.json();
            // setMovieData(data.results.find((item) => String(item.id) === id));
        } catch (error) {
            console.error('Error fetching movie data:', error);
        }
    }

    useEffect(() => {
        getMovieApi();
    }, []);
    const imageUrlBase = "https://image.tmdb.org/t/p/w500/";

    return (
        <div className=''>
            {isVisible ?
                <Fragment>

                    <div className="movie-cover-div" style={{
                        backgroundImage: `url(https://lumiere-a.akamaihd.net/v1/images/pp_20cs_avatarwayofwater_herobanner_1710_0e197eab.jpeg)`
                    }}>
                        <div className="name-img">
                            <img src="https://img10.hotstar.com/image/upload/f_auto,h_156/sources/r1/cms/prod/218/1530218-t-2650980402fc" alt="" className='name-image' />
                        </div>
                        {/* <h5>The way of water</h5> */}
                        <p className='name-overview'>The Way of Water Forever 2022 Hindi 720p HDRip: Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na’vi race to protect their home</p>
                        {/* <h1 style={{ position: "relative", zIndex: "1" }}>Avatar</h1> */}

                    </div>

                    <div className="movie-main">
                        <div className="about-movie">
                            <div><MdMovie style={{ fontSize: "28px" }} className='me-2' /></div>
                            <h5>
                                Avatar The Way of Water
                            </h5>
                            {/* <h5>
                                Avatar: The Way of Water (2022) iMAX WEB-DL [Hindi (ORG 5.1) & English] 1080p 720p & 480p Dual Audio [x264/10Bit HEVC] | Full Movie
                            </h5> */}
                        </div>
                        <div className="about-movie-two">
                            <hr className='w-100' />
                            <h5>Download Avatar: The Way of Water (2022) iMAX WEB-DL [Hindi (ORG 5.1) & English] 1080p 720p & 480p Dual Audio [x264/10Bit HEVC] | Full Movie</h5>
                        </div>
                        <hr className='hr' />
                        <div className="movie-about-div">


                            <img className='movie-photo' src={`https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_streamingupdate_2096_0908fa1b.jpeg?region=0%2C0%2C540%2C810`} alt="" />
                            <div className='movie-about-detail'>
                                <h1> Avatar The Way of Water</h1>
                                <p style={{ color: "#909090", width: "100%", maxWidth: "500px" }}>
                                    Avatar: The Way of Water (2022) iMAX WEB-DL [Hindi (ORG 5.1) & English] 1080p 720p & 480p Dual Audio [x264/10Bit HEVC] | Full Movie
                                </p>
                                <h5 style={{ color: "#909090" }}>Action | Adventur | Sci-Fi</h5>

                                <div style={{ color: "#909090", display: "flex" }}>
                                    <h5 className='me-2'> Director: </h5>
                                    <div style={{ fontSize: "18px" }}>James Cameron</div>
                                </div>
                                <div style={{ color: "#909090", display: "flex" }}>
                                    <h5 className='me-2'> Language: </h5>
                                    <div style={{ fontSize: "18px" }}>Hindi, English</div>
                                </div>
                                <div style={{ color: "#909090", display: "flex" }}>
                                    <h5 className='me-2'> Qulity:</h5>
                                    <div style={{ fontSize: "18px" }}>1080p 720p & 480px</div>
                                </div>
                            </div>
                        </div>
                        <hr className='hr' />

                        <div className="screenShot-center">
                            <h2 className='py-4'>ScreenShots:</h2>
                            <div className="screenShot-grid">
                                <img className='screenshot' src="https://variety.com/wp-content/uploads/2022/12/MCDAVTH_WD060.jpg?w=1000&h=563&crop=1" alt="" />
                                <img className='screenshot' src="https://www.koimoi.com/wp-content/new-galleries/2022/12/avatar-2-box-office-day-4-early-trends-heading-for-around-60-drop-after-blockbuster-sunday-still-brings-in-strong-total-read-on-001.jpg" alt="" />
                                <img className='screenshot' src="https://www.cnet.com/a/img/resize/d6719163ce18960e8d4a51ffde595442901704df/hub/2022/12/07/7f9105e5-ded1-475a-af51-1e2d9d99c3ed/avatar-way-water-spider-kid-1.jpg?auto=webp&fit=crop&height=675&width=1200" alt="" />
                                <img className='screenshot' src="https://assets-prd.ignimgs.com/2023/03/22/avatarbonusclip-ign-blogroll-1679513879075.jpg" alt="" />
                            </div>
                        </div>

                        <hr className='hr' />

                        <div className="downoad-div">
                            <h3>Avatar: The way of water</h3>
                            <h3 style={{ textAlign: "center", color: "#909090" }}>: Download :</h3>
                            <h5 style={{ textAlign: "center", color: "blue", cursor: "pointer" }}>720p [3.3GB]</h5>
                            <h5 style={{ textAlign: "center", color: "blue", cursor: "pointer" }}>1080p [6.4GB]</h5>
                            <h5 style={{ textAlign: "center", color: "blue", cursor: "pointer" }}>480p [654MB]</h5>
                        </div>

                        <hr className='hr' />

                        <iframe className='youtube-trailer' src="https://www.youtube.com/embed/d6xdV8VAqBY?si=OqqlOlB0yiBdrwwI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                        <h3>Storyline:</h3>
                        <hr className='hr' />
                        <h5 className='hr' style={{ color: "#909090" }}>Avatar: The Way of Water: The Way of Water Forever 2022 Hindi 720p HDRip: Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na’vi race to protect their home.</h5>
                    </div>
                </Fragment>
                :
                <div className="movie-div-loading">

                </div>
            }
        </div>
    )
}

export default MoviePage