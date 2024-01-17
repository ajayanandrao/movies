import React from 'react'
import "./PageOne.scss";
// import 'react-alice-carousel/lib/alice-carousel.css';
// import Navbar from '../../Navbar/Navbar';



const PageOne = () => {

    return (
        <div className='page-one-main'>
            {/* <Navbar /> */}
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">

                <div class="carousel-inner">

                    <div class="carousel-item active">
                        <div className="image-div" style={{ backgroundImage: `url("https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/7033/1607033-i-d6f937c102ac")` }}>
                            <div className="image-data">
                                <div className='text-2xl'></div>
                                <img className='tiel-img' src="https://img10.hotstar.com/image/upload/f_auto,h_156/sources/r1/cms/prod/7032/1607032-t-73a2c8df16e9" alt="" />
                                <div style={{ fontWeight: 500 }} className='title-margin'>2023. 2 Seasons. 4 Language</div>
                                <div className='title-des'>the mercurial villain Loki resumes his role as the god of mischif in a new series that takes place after the events of "Avengers: Endgame".</div>
                                <div style={{ fontWeight: 500 }} className='title-margin'>
                                    Superheros,Science Fiction,Action, Fantasy
                                </div>
                                <div style={{ fontWeight: 500 }}>
                                    English, Hindi , Telagu, Tamil
                                </div>
                                <div className='d-flex'>
                                    <div className="watch-btn">
                                        Watch
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item" >
                        <div className="image-div" style={{ backgroundImage: `url("https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/219/1530219-i-898c101fb615")` }}>
                            <div className="image-data">
                                <div className='text-2xl'></div>
                                <img className='tiel-img' src="https://img10.hotstar.com/image/upload/f_auto,h_156/sources/r1/cms/prod/218/1530218-t-2650980402fc" alt="" />
                                <div style={{ fontWeight: 500 }} className='title-margin'>2022. 3h, 12m. 6 Language</div>
                                <div className='title-des'>set more than a decade after the first film, dive into the story of the sully family</div>
                                <div style={{ fontWeight: 500 }} className='title-margin'>
                                    Action, Superheros, Adventures, Comedy
                                </div>
                                <div style={{ fontWeight: 500 }}>
                                    English, Hindi , Telagu, Tamil
                                </div>
                                <div className='d-flex'>
                                    <div className="watch-btn">
                                        Watch
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <div className="image-div" style={{ backgroundImage: `url("https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/7475/1557475-i-e371b3e8fdb4")` }}>
                            <div className="image-data">
                                <div className='text-2xl'></div>
                                <img className='tiel-img' src="https://img10.hotstar.com/image/upload/f_auto,h_156/sources/r1/cms/prod/7474/1557474-t-c7f82f7f99df" alt="" />
                                <div style={{ fontWeight: 500 }} className='title-margin'>2023. 2h, 29m. 5 Language</div>
                                <div className='title-des'>The band of heroic renegades embark on an action packed mission to protect one of their own. and a new force threatens to bring the guardians down for good.</div>
                                <div style={{ fontWeight: 500 }} className='title-margin'>
                                    Action, Superheros, Adventures, Comedy
                                </div>
                                <div style={{ fontWeight: 500 }}>
                                    English, Hindi , Telagu, Tamil
                                </div>
                                <div className='d-flex'>
                                    <div className="watch-btn">
                                        Watch
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default PageOne