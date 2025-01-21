
import { useEffect } from "react";


export default function Home() {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener, noreferrer');
        if (newWindow) newWindow.opener = null;
    }


    return (
        <>
            <h1 className="--bs-heading-color" style={{ color: "white" }}>
                Recent Book
            </h1>
            <div className="card text-bg-dark">

                <h2>
                    <em >Still Standing</em>
                </h2>
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
                            <img src="/images/Book-png/book_01.webp" className="d-block w-75" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_02.webp" className="d-block w-75" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_03.webp" className="d-block w-75" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_04.webp" className="d-block w-75" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_05.webp" className="d-block w-75" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_06.webp" className="d-block w-75" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_07.webp" className="d-block w-75" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_08.webp" className="d-block w-75" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_09.webp" className="d-block w-75" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_10.webp" className="d-block w-75" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_11.webp" className="d-block w-75" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_12.webp" className="d-block w-75" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_13.webp" className="d-block w-75" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_14.webp" className="d-block w-75" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_15.webp" className="d-block w-75" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_16.webp" className="d-block w-75" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_17.webp" className="d-block w-75" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_18.webp" className="d-block w-75" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_19.webp" className="d-block w-75" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_20.webp" className="d-block w-75" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_21.webp" className="d-block w-75" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_22.webp" className="d-block w-75" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_23.webp" className="d-block w-75" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_24.webp" className="d-block w-75" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_25.webp" className="d-block w-75" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_26.webp" className="d-block w-75" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_27.webp" className="d-block w-75" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_28.webp" className="d-block w-75" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_29.webp" className="d-block w-75" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_30.webp" className="d-block w-75" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_31.webp" className="d-block w-75" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_32.webp" className="d-block w-75" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_33.webp" className="d-block w-75" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_34.webp" className="d-block w-75" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_35.webp" className="d-block w-75" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_36.webp" className="d-block w-75" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_37.webp" className="d-block w-75" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_38.webp" className="d-block w-75" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_39.webp" className="d-block w-75" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_40.webp" className="d-block w-75" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_41.webp" className="d-block w-75" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_42.webp" className="d-block w-75" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_43.webp" className="d-block w-75" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_44.webp" className="d-block w-75" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_45.webp" className="d-block w-75" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Book-png/book_46.webp" className="d-block w-75"  alt="..."></img>
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

                <button type="button" className="btn btn-outline-info" onClick={() => openInNewTab("https://drive.google.com/file/d/1eK7iI_Vx5DMExYNytEoYeG-pVhs1gajO/view?usp=sharing")} style={{ width: "30%", marginLeft: "35%", marginTop: "0%", marginBottom:"10px", cursor: "pointer" }}>
                Download PDF For Your Phone
                </button>
            </div>
        </>

    )

}
