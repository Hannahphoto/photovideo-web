
import { useEffect } from "react";


export default function Home() {

    return (
        <>
            <div className="card text-bg-dark">
                <h1 className="--bs-heading-color" style={{ color: "white" }}>
                    Recent Book "Still Standing"
                </h1>
                <div id="carouselBook" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className="active" aria-current="true" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" className="active" aria-current="true" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" className="active" aria-current="true" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" className="active" aria-current="true" aria-label="Slide 5"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" className="active" aria-current="true" aria-label="Slide 6"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" className="active" aria-current="true" aria-label="Slide 7"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" className="active" aria-current="true" aria-label="Slide 8"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8" className="active" aria-current="true" aria-label="Slide 9"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="9" className="active" aria-current="true" aria-label="Slide 10"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="10" className="active" aria-current="true" aria-label="Slide 11"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="11" className="active" aria-current="true" aria-label="Slide 12"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="12" className="active" aria-current="true" aria-label="Slide 13"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="13" className="active" aria-current="true" aria-label="Slide 14"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="14" className="active" aria-current="true" aria-label="Slide 15"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="15" className="active" aria-current="true" aria-label="Slide 16"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="16" className="active" aria-current="true" aria-label="Slide 17"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="17" className="active" aria-current="true" aria-label="Slide 18"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="18" className="active" aria-current="true" aria-label="Slide 19"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="19" className="active" aria-current="true" aria-label="Slide 20"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="20" className="active" aria-current="true" aria-label="Slide 21"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="21" className="active" aria-current="true" aria-label="Slide 22"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="22" className="active" aria-current="true" aria-label="Slide 23"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="23" className="active" aria-current="true" aria-label="Slide 24"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="24" className="active" aria-current="true" aria-label="Slide 25"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="25" className="active" aria-current="true" aria-label="Slide 26"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="26" className="active" aria-current="true" aria-label="Slide 27"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="27" className="active" aria-current="true" aria-label="Slide 28"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="28" className="active" aria-current="true" aria-label="Slide 29"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="29" className="active" aria-current="true" aria-label="Slide 30"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="30" className="active" aria-current="true" aria-label="Slide 31"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="31" className="active" aria-current="true" aria-label="Slide 32"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="32" className="active" aria-current="true" aria-label="Slide 33"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="33" className="active" aria-current="true" aria-label="Slide 34"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="34" className="active" aria-current="true" aria-label="Slide 35"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="35" className="active" aria-current="true" aria-label="Slide 36"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="36" className="active" aria-current="true" aria-label="Slide 37"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="37" className="active" aria-current="true" aria-label="Slide 38"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="38" className="active" aria-current="true" aria-label="Slide 39"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="39" className="active" aria-current="true" aria-label="Slide 40"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="40" className="active" aria-current="true" aria-label="Slide 41"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="42" className="active" aria-current="true" aria-label="Slide 42"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="43" className="active" aria-current="true" aria-label="Slide 43"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="44" className="active" aria-current="true" aria-label="Slide 44"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="45" className="active" aria-current="true" aria-label="Slide 45"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="46" className="active" aria-current="true" aria-label="Slide 46"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="47" className="active" aria-current="true" aria-label="Slide 47"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/images/Book-png/book_01.png" className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_02.png" className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_03.png" className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_04.png" className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_05.png" className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_06.png" className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_07.png" className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_08.png" className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_09.png" className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_10.png" className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_11.png" className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_12.png" className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_13.png" className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_14.png" className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_15.png" className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_16.png" className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_17.png" className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_18.png" className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_19.png" className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_20.png" className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_21.png" className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_22.png" className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_23.png" className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_24.png" className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_25.png" className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_26.png" className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_27.png" className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_28.png" className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_29.png" className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_30.png" className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_31.png" className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_32.png" className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_33.png" className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_34.png" className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_35.png" className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_36.png" className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_37.png" className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_38.png" className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_39.png" className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_40.png" className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_41.png" className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_42.png" className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_43.png" className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_44.png" className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_45.png" className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_46.png" className="d-block w-100" alt="..."></img>
                        </div>

                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselBook" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselBook" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>

    )

}
