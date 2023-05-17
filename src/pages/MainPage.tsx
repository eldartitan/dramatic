import { useEffect, useState } from "react";
import { getDetail, getImages, getMoviePopular, getTrending } from "../api";
import "../App.css";
import Button from "../components/Button";
import Slider from "../components/Slider";
import Info from "../components/Info";
import { ReactComponent as DownIcon } from "../assets/down.svg";
import { IMoviePopular } from "../types/moviePopular";
import { ITrending } from "../types/movieTrending";
import { IImages } from "../types/images";
import { IMovie } from "../types/movie";

const IMG_URL = import.meta.env.VITE_IMG_URL;

export default function MainPage() {
    const [movie, setMovie] = useState<IMovie | null | void>(null);
    const [popularMovies, setPopularMovies] =
        useState<IMoviePopular | null | void>(null);
    const [trending, setTrending] = useState<ITrending | null | void>(null);
    const [images, setMovieImage] = useState<IImages | null | void>(null);

    useEffect(() => {
        getDetail(680, "movie").then((response) => setMovie(response));
        getImages(680, "movie").then((response) => setMovieImage(response));
        getMoviePopular().then((response) => setPopularMovies(response));
        getTrending().then((response) => setTrending(response));
    }, []);

    return (
        <>
            <div
                className="font-montserrat "
                style={{
                    backgroundImage: `url(${
                        IMG_URL + "original" + movie?.backdrop_path
                    })`,
                    backgroundSize: "cover",
                    backgroundPosition: "",
                    backgroundRepeat: "no-repeat",
                    height: "908px",
                }}
            >
                <div className="header-background">
                    <div className="w-full h-full pl-32 pt-36 font-semibold text-sm">
                        <Info
                            movie={movie}
                            tv={null}
                            logo_path={
                                images?.logos.find((f) => f.iso_639_1 == "en")
                                    ?.file_path
                            }
                        />
                        <div className="must-watch-block pl-6 pt-7 pb-[30px] mt-11 overflow-hidden">
                            <div className="flex items-center justify-between pr-5 pb-4">
                                <div className="text-lg font-bold">
                                    MOVIES YOU MUST WATCH
                                </div>
                                <Button>
                                    FILTERS <DownIcon className="ml-3" />
                                </Button>
                            </div>
                            <Slider movies={popularMovies} trending={null} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-blur h-[347px] w-full mt-[-122px] xl:mb-0 2xl:mb-28"></div>
            <div className="pl-32 ml-6 mb-11 mt-32 flex flex-col text-lg font-bold">
                <div>RECOMMENDED FOR YOU</div>
                <div className="flex gap-[23px] mt-[19px] mb-[22px]">
                    <Button>Hindi</Button>
                    <Button variant="secondary">Bengali</Button>
                </div>
                <Slider trending={trending} movies={null} />
                <div className="flex justify-center mt-9">
                    <Button variant="info">
                        Show More <DownIcon className="ml-2" />
                    </Button>
                </div>
            </div>
        </>
    );
}
