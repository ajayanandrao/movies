import React, { useEffect, useState } from 'react'
import Flickity from 'react-flickity-component';
import "./../Styles/flikity.scss";
import { Link } from 'react-router-dom';
const Movie = ({ propsData }) => {

    const apiKey = process.env.REACT_APP_MOVIES_API_KEY;
    const [movieData, setMovieData] = useState([]);
    const getMovieApi = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`);
            const data = await response.json();
            setMovieData(data.results);
            console.log(data.results);
        } catch (error) {
            console.error('Error fetching movie data:', error);
        }
    }

    useEffect(() => {
        getMovieApi();
    }, []);

    var flickityOptions = {
        initialIndex: 3,
        accessibility: true,
        accessibility: true,
        pageDots: true,
        wrapAround: true,
        autoPlay: false
    }
    const imageUrlBase = "https://image.tmdb.org/t/p/w500/";

    const DataF = movieData && movieData.map((item) => {
        return (
            <div key={item.id}>
                <div className="sliderBoxes">
                    <Link className='link' to={`/${item.id}`}>
                        <div className="card-div" style={{ backgroundImage: `url(${imageUrlBase + item.poster_path})` }}>
                            <div className="card-detail-div">
                                <div className='movie-name'>{item.title}</div>
                                <div className='movie-sub-name'>{item.overview}</div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        )
    })


    return (
        <Flickity
            className={'carousel-group-cell'}
            elementType={'div'}
            options={flickityOptions}
            disableImagesLoaded={false}
        >
            {DataF}
        </Flickity>
    )
}

export default Movie