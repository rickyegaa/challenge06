import Carousel from "react-bootstrap/Carousel";
import img from "../assets/image/strange.jpg";
import React, { useState } from "react";

function CarouselNavbar() {
  const [selectedMovie, setSelectedMovie] = useState({});
  const [showTrailer, setShowTrailer] = useState(false);

  return (
    <>
      {showTrailer && (
        <div
          onClick={() => setShowTrailer(false)}
          className="d-flex justify-content-center align-items-center"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,.5)",
            zIndex: "9999",
            color: "white",
          }}
        >
          <div
            onClick={(e) => e.preventDefault()}
            style={{
              width: "800px",
              height: "500px",
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube-nocookie.com/embed/${selectedMovie.trailerKey}?version=3&enablejsapi=1`}
              title="Bos Laknat"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      )}

      <div style={{ position: "relative" }}>
        <Carousel fade controls={false} interval={2000}>
          <Carousel.Item>
            <div style={{ position: "relative", height: "100vh" }}>
              <div
                style={{
                  position: "absolute",
                  left: "40px",
                  top: "190px",
                  zIndex: "20",
                  width: "600px",
                }}
              >
                <h1
                  style={{
                    color: "white",
                    fontSize: "61px",
                    fontWeight: "600",
                  }}
                >
                  Doctor Strange in the Multiverse of Madness (2022)
                </h1>
                <p
                  style={{
                    color: "white",
                    fontSize: "18px",
                    marginTop: "15px",
                  }}
                >
                  America Chavez and Defender Strange are being chased by demons
                  in interuniverse space while searching for the Book of
                  Vishanti . Strange is killed and Chavez accidentally creates a
                  portal that takes him and Strange's corpse to Earth-616.
                </p>
                <button
                  onClick={() => {
                    setShowTrailer(true);
                    setSelectedMovie({ trailerKey: "aWzlQ2N6qqg" });
                  }}
                  className=" bg-danger"
                  style={{
                    marginTop: "15px",
                    color: "white",
                    border: "50px",
                    borderRadius: "500px",
                    width: "170px",
                    height: "40px",
                    fontWeight: "700",
                  }}
                >
                  Watch Trailer
                </button>
                <img
                  alt=""
                  src="/icons/circle-play-regular.svg"
                  style={{
                    position: "relative",
                    right: "160px",
                    width: "15px",
                  }}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  left: "0",
                  top: "0",
                  width: "100%",
                  height: "100%",
                  background: "rgba(0,0,0,.5)",
                }}
              ></div>
              <img className="d-block w-100" src={img} alt="First slide" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div style={{ position: "relative", height: "100vh" }}>
              <div
                style={{
                  position: "absolute",
                  left: "40px",
                  top: "190px",
                  zIndex: "20",
                  width: "600px",
                }}
              >
                <h1
                  style={{
                    color: "white",
                    fontSize: "61px",
                    fontWeight: "600",
                    marginTop: "70px",
                  }}
                >
                  The Amazing Spiderman (2012)
                </h1>
                <p
                  style={{
                    color: "white",
                    fontSize: "18px",
                    marginTop: "15px",
                  }}
                >
                  Peter Parker Andrew Garfield always remembers his father
                  Richard Parker Campbell Scott, a mysterious scientist who
                  suddenly says goodbye and disappears one day. Peter has been
                  raised by his Uncle Ben Martin Sheen and Aunt May Sally Field
                  since the death of his parents.
                </p>
                <button
                  onClick={() => {
                    setShowTrailer(true);
                    setSelectedMovie({ trailerKey: "-tnxzJ0SSOw" });
                  }}
                  className=" bg-danger"
                  style={{
                    marginTop: "15px",
                    color: "white",
                    border: "50px",
                    borderRadius: "500px",
                    width: "170px",
                    height: "40px",
                    fontWeight: "700",
                  }}
                >
                  Watch Trailer
                </button>
                <img
                  alt=""
                  src="/icons/circle-play-regular.svg"
                  style={{
                    position: "relative",
                    right: "160px",
                    width: "15px",
                  }}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  left: "0",
                  top: "0",
                  width: "100%",
                  height: "100%",
                  background: "rgba(0,0,0,.5)",
                }}
              ></div>
              <img
                className="d-block w-100"
                src={"https://images7.alphacoders.com/115/1158478.jpg"}
                alt="First slide"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div style={{ position: "relative", height: "100vh" }}>
              <div>
                <div
                  style={{
                    position: "absolute",
                    left: "40px",
                    top: "190px",
                    zIndex: "20",
                    width: "600px",
                  }}
                >
                  <h1
                    style={{
                      color: "white",
                      fontSize: "61px",
                      fontWeight: "600",
                    }}
                  >
                    The Avengers (2012)
                  </h1>
                  <p
                    style={{
                      color: "white",
                      fontSize: "18px",
                      marginTop: "15px",
                    }}
                  >
                    Loki Tom Hiddleston meets the Other, the leader of the
                    extraterrestrial army known as the Chitauri. In exchange for
                    retrieving the Tesseract a powerful source of energy the
                    Other promises Loki an army of Chitauri that he can lead to
                    subdue Earth.
                  </p>
                  <button
                    onClick={() => {
                      setShowTrailer(true);
                      setSelectedMovie({ trailerKey: "hIR8Ar-Z4hw" });
                    }}
                    className=" bg-danger"
                    style={{
                      marginTop: "15px",
                      color: "white",
                      border: "50px",
                      borderRadius: "500px",
                      width: "170px",
                      height: "40px",
                      fontWeight: "700",
                    }}
                  >
                    Watch Trailer
                  </button>
                  <img
                    alt=""
                    src="/icons/circle-play-regular.svg"
                    style={{
                      position: "relative",
                      right: "160px",
                      width: "15px",
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  left: "0",
                  top: "0",
                  width: "100%",
                  height: "100%",
                  background: "rgba(0,0,0,.5)",
                }}
              ></div>
              <img
                className="d-block w-100"
                src={"https://wallpaperaccess.com/full/247129.jpg"}
                alt="First slide"
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default CarouselNavbar;
