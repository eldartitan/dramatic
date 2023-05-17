import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Card from "./Card";
import { IMoviePopular } from "../types/moviePopular";
import { ITrending } from "../types/movieTrending";

const Slider: FC<{
    movies: IMoviePopular | null | void;
    trending: ITrending | null | void;
}> = (props) => {
    return (
        <Swiper
            slidesPerView={8.5}
            spaceBetween={30}
            freeMode={true}
            pagination={{
                clickable: true,
            }}
            className="mySwiper"
        >
            {props.movies
                ? props.movies.results.map((m) => (
                      <SwiperSlide key={m.id}>
                          <Card movies={m} trending={null} />
                      </SwiperSlide>
                  ))
                : props.trending?.results.map((m) => (
                      <SwiperSlide key={m.id}>
                          <Card movies={null} trending={m} />
                      </SwiperSlide>
                  ))}
        </Swiper>
    );
};
export default Slider;
