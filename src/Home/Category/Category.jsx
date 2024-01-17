import React from 'react'
import "./Category.scss";
import desney from './video/disney.mp4';
import pixar from './video/pixar.mp4';
import marval from './video/marval.mp4';
import star from './video/star.mp4';

const Category = () => {

    const videoImg1 = {

        backgroundImage: `url(https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/6347/746347-h)`
    }
    const videoImg2 = {
        backgroundImage: `url(https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/6348/746348-h)`
    }
    const videoImg3 = {
        backgroundImage: `url(https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/6349/746349-h)`
    }
    const videoImg4 = {
        backgroundImage: `url(https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/6357/746357-h)`
    }
    const videoImg5 = {
        backgroundImage: `url(https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/6355/746355-h)`
    }

    return (
        <div className='category-div'>

            <div className="category-grid-centr">

                <div className="category-card-grid">
                    <div className="category-card-img" style={videoImg1}>
                        <video className='category-card-video' src={desney} autoPlay loop muted />
                    </div>

                    <div className="category-card-img" style={videoImg3}>
                        <video className='category-card-video' src={marval} autoPlay loop muted />
                    </div>
                    <div className="category-card-img" style={videoImg4}>
                        <video className='category-card-video' src={star} autoPlay loop muted />
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default Category