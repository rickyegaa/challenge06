import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../style/detailPage.css";
import Youtube from "react-youtube";


function Detail() {
  const [item, setItem] = useState({});
  const params = useParams();
  const [movieData, setMovieData] = useState([]);
  const [trailer, setTrailer] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getDetail = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=57b75fd3bb7f3e28a2362d6568184208`
      );
      setItem(response.data);
    };
    getDetail();
  }, [params]);

  useEffect(() => {
    const fetchData = async () => {
      axios.get(
          `https://api.themoviedb.org/3/movie/${params.id}?api_key=57b75fd3bb7f3e28a2362d6568184208&append_to_response=videos`
        )
        .then((response) => {
          setMovieData(response.data);
          const trailerid = response.data.videos.results.find(
            (vid) => vid.name === "Official Trailer"
          );
          setTrailer(trailerid ? trailerid : response.data.videos.results[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, [params]);
  console.log(movieData)
 
  return (
    <>
    {showModal ? (
            <>
              <div className="modal">
                <div className="modal-content">
                  <div className="modal-header">
                    <div className="modal-body">
                      <button
                        className="modal-body-button"
                        onClick={() => setShowModal(false)}
                        >
                        <span className="modal-body-span">
                          ×
                        </span>
                      </button>
                    </div>
                    <>
                      <Youtube
                        videoId={trailer.key}
                        className="youtube"
                        opts={{
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </>
                  </div>
                </div>
              </div>
              <div className="modal-end"></div>
            </>
          ) : null}
          
      <div className="content">
        <div className="banner">
          <img
            src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
            alt="img-banner"
            className="img-fluid"
          />
        </div>
        <div className="mb-3 movie-content container">
          <div className="movie-info">
            <h1 className="title">{item.title || item.name}</h1>
            <div className="genres">
                {item.genres &&
                  item.genres.slice(0, 5).map((genre, i) => (
                    <span key={i} className="genres-item">
                      {genre.name}
                    </span>
                  ))}
            </div>
            <h6>{"Release: " + item.release_date}</h6>
            <p className="overview">{item.overview}</p>
            <p className="rating">⭐ {(item.vote_average / 2).toFixed(1)} / 5 </p>
            <button onClick={() => setShowModal(true)} className="button-trailer">Watch Trailer</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
