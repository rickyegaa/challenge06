import "../App.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "../components/Carousel";
import Trending from "../components/Trending";
import "../style/landingPage.css";

// // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
import "swiper/css";

function Home() {
  const [Movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=57b75fd3bb7f3e28a2362d6568184208"
    )
      .then((Response) => Response.json())
      .then((results) => {
        setMovies(results);
      });
  }, []);

  const navigate = useNavigate();

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100vh",
        }}
      ></div>
      <div>
        <Carousel />
      </div>

      <div className="trending">
        <Trending />
        <Swiper
          style={{ marginLeft: "30px" }}
          slidesPerView={5}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {Movies?.results?.map((film) => (
            <SwiperSlide>
              <span onClick={() => navigate("/detail/" + film.id)}>
                <div
                  className="card"
                  style={{
                    borderRadius: "10px",
                    background: "black",
                    height: "400px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <div
                    className="card-info"
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      color: "white",
                    }}
                  >
                    <h5
                      style={{
                        marginLeft: "25px",
                        color: "white",
                      }}
                    >
                      {film.title}
                    </h5>
                    <p style={{ marginLeft: "25px", color: "white" }}>
                      ⭐ {(film.vote_average / 2).toFixed(1)} / 5
                    </p>
                  </div>
                  <img
                    className="cardimage"
                    src={"https://image.tmdb.org/t/p/w500" + film.poster_path}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div style={{ background: "#f1f5f9" }}>
        <footer>
          <div></div>
          <div>
            <p>© 2023 Team 2 Binar. All Right Reserved</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;
