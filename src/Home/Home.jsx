import React, { Fragment, useState, useEffect, useRef } from 'react';
import "./Home.scss";
import Flickity from 'react-flickity-component';
import imgLink from "./../Json/imgLink.json";
import starwar from "./../Json/starwar.json";
import nature from "./../Json/nature.json";
import twist from "./../Json/twist.json";

import { Link } from 'react-router-dom';
import GroupCell from './GroupCell/GroupCell';
import PageOne from './PageOne/PageOne';
import Category from './Category/Category';

const Home = () => {
    const [timeLoading, setTimeLoading] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setTimeLoading(false);
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, []);

    const renderCarousel = (data) => (
        data.map((item) => (
            <Fragment key={item.id}>
                <div className="sliderBoxes">
                    <Link className='link' to={`/${item.id}`}>
                        <div className="card-div" style={{ backgroundImage: `url(${item.img})` }}>
                            <div className="card-detail-div">
                                <div className='movie-name'>{item.name}</div>
                                <div className='movie-sub-name'>{item.subName}</div>
                            </div>
                        </div>
                    </Link>
                </div>
            </Fragment>
        ))
    );

    const carouselImgLink = renderCarousel(imgLink);
    const carouselStarwar = renderCarousel(starwar);
    const carouselNature = renderCarousel(nature);
    const carouselTwist = renderCarousel(twist);

    const videoRef = useRef(null);
    const [showPoster, setShowPoster] = useState(false);

    const handleVideoEnd = () => {
        setShowPoster(true);
        videoRef.current.style.display = 'none';
    };

    return (
        <div>

            <PageOne />
            <Category />

            <div className='trailer-Div'>
                <video ref={videoRef} src="https://firebasestorage.googleapis.com/v0/b/hosting-c26ea.appspot.com/o/Trailer%2FMarvel%20Studios%E2%80%99%20Loki%20Season%202%20_%20October%206%20on%20Disney%2B.mp4?alt=media&token=d34c3c64-9b88-45ed-898f-cf0f0f5c5386"
                    className='trailer-Video' playsinline
                    autoPlay muted poster="https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/7033/1607033-i-d6f937c102ac" onEnded={handleVideoEnd}></video>
                {showPoster && (
                    <img className='trailer-img'
                        src="https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/7033/1607033-i-d6f937c102ac"
                        alt="Poster Image"
                    />
                )}
            </div>

            <div className="group-bg-one"></div>

            <div className='group-bg'>

                {timeLoading ? <div className='placeholder-glow w-100'><div className='loading-div placeholder'></div></div> :
                    <>
                        <div className='d-flex mb-3'>
                            <h5 className='text-2xl group-title '>
                                Recommended For You
                            </h5>
                            <div className='ms-4' style={{ fontWeight: 500, color: "#5caceb" }}>See More</div>
                        </div>
                        <GroupCell propsData={carouselImgLink} />
                    </>
                }

                {timeLoading ? <div className='placeholder-glow w-100'><div className='loading-div placeholder'></div></div> :
                    <>
                        <div className='d-flex align-items-center mt-5 mb-3'>
                            <h5 className='text-2xl group-title '>Disney+ Originals</h5>
                            <div className='ms-4' style={{ fontWeight: 500, color: "#5caceb" }}>See More</div>
                        </div>
                        <GroupCell propsData={carouselTwist} />
                    </>
                }

                {timeLoading ? <div className='placeholder-glow w-100'><div className='loading-div placeholder'></div></div> :
                    <>
                        <div className='d-flex mt-5 mb-3'>
                            <h5 className='text-2xl group-title mt-5'>Best of Star Wars</h5>
                            <div className='ms-4' style={{ fontWeight: 500, color: "#5caceb" }}>See More</div>
                        </div>
                        <GroupCell propsData={carouselStarwar} />
                    </>
                }

                {timeLoading ? <div className='placeholder-glow w-100'><div className='loading-div placeholder'></div></div> :

                    <>
                        <div className='d-flex mt-5 mb-3'>
                            <h5 className='text-2xl group-title '>Nature & Wildlife</h5>
                            <div className='ms-4' style={{ fontWeight: 500, color: "#5caceb" }}>See More</div>
                        </div>
                        <GroupCell propsData={carouselNature} />
                    </>
                }

            </div>
        </div>
    );
}

export default Home;
