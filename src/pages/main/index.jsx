import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Импорт стилей карусели
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./style.css";
function Main() {
  const settings = {
    showArrows: true, // Показать стрелки
    infiniteLoop: true, // Бесконечный цикл
    showThumbs: false, // Не показывать миниатюры
    useKeyboardArrows: true, // Использовать клавиши клавиатуры для навигации
    autoPlay: true, // Автоматическое воспроизведение
    interval: 5000,
    stopOnHover: true, // Остановка автоматического воспроизведения при наведении мыши
    showStatus: false, // Показывать статус (номер текущего слайда)
    showIndicators: false, // Показывать индикаторы (точки)
    dynamicHeight: false, // Динамическая высота слайдов
    swipeable: true, // Включить свайп на мобильных устройствах
    emulateTouch: false, // Эмулировать касание для десктопных устройств
    showThumbs: false, // Не показывать миниатюры
    renderArrowPrev: (clickHandler, hasPrev, label) => (
      <div
        onClick={clickHandler}
        title={label}
        type="button"
        className="details-arrow-prev"
      >
        <AiOutlineArrowLeft />
      </div>
    ),
    renderArrowNext: (clickHandler, hasNext, label) => (
      <div
        onClick={clickHandler}
        title={label}
        type="button"
        className="details-arrow-next"
      >
        <AiOutlineArrowRight />
      </div>
    ),
  };

  return (
    <div className="wrapper">
      <div className=" carousel-container">
        <Carousel {...settings}>
          <div className="carousel_container">
            <img
              src="https://pbs.twimg.com/media/FhS_3luUAAMsoHK?format=jpg&name=4096x4096"
              alt="Image 1"
              className="image-carousel"
            />
            <img
              src="https://media.kg-portal.ru/anime/d/deathnote/posters/deathnote_13.jpg"
              alt="Image 1"
              className="image-carousel"
            />
            <img
              src="https://media.kg-portal.ru/anime/n/narutoshippuden/posters/narutoshippuden_1.jpg "
              alt="Image 1"
              className="image-carousel"
            />
            <img
              src="https://i.pinimg.com/originals/c6/d5/ae/c6d5ae8921aaf9cca0c2df4031e0dd74.jpg"
              alt="Image 1"
              className="image-carousel"
            />
          </div>
          <div className="carousel_container">
            <img
              src="https://ru-images-s.kinorium.com/movie/1080/2388029.jpg?1688677277"
              alt="Image 1"
              className="image-carousel"
            />
            <img
              src="https://www.goha.ru/s/A:CM/3W/pC80HaNZvl.jpg"
              alt="Image 1"
              className="image-carousel"
            />
            <img
              src="https://media.kg-portal.ru/anime/o/onepiecefilmred/posters/onepiecefilmred_16.jpg"
              alt="Image 1"
              className="image-carousel"
            />
            <img
              src="https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/48fbb614-7fe5-4c6f-8692-ecc1cf565d16/576x"
              alt="Image 1"
              className="image-carousel"
            />
          </div>

          {/* Добавьте больше изображений по аналогии */}
        </Carousel>
      </div>
    </div>
  );
}

export default Main;
