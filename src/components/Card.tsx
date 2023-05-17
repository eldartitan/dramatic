import { FC } from "react";
import { Link } from "react-router-dom";
import imdbLogo from "../assets/imdb.png";
import liked from "../assets/liked.png";
import { ReactComponent as EyeIcon } from "../assets/eye.svg";
import ResultPopular from "../types/moviePopular";
import ResultTrending from "../types/movieTrending";

const IMG_URL = process.env.REACT_APP_IMG_URL;

const Card: FC<{
    movies: ResultPopular | null;
    trending: ResultTrending | null;
}> = (props) => {
    const poster_src = props.movies
        ? IMG_URL + "w500" + props.movies?.poster_path
        : IMG_URL + "w500" + props.trending?.poster_path;

    const to_link = `/${props.trending?.media_type || "movie"}/${
        props?.movies?.id || props.trending?.id
    }`;

    return (
        <Link
            to={to_link}
            preventScrollReset={true}
            className="shrink-0 max-w-[168px] min-w-[100px] h-full"
        >
            <img
                src={poster_src}
                alt="Poster"
                className="rounded-[7px] drop-shadow-lg"
            />
            <div className="flex flex-col gap-1">
                <span className="mt-[10px] truncate">
                    {props.trending?.title ||
                        props.trending?.name ||
                        props.movies?.title}
                </span>
                <span className="text-spanish-gray font-bold">
                    {props.movies?.release_date?.slice(0, 4) ||
                        props.trending?.first_air_date?.slice(0, 4) ||
                        props.trending?.release_date?.slice(0, 4)}
                </span>
                <div className="flex justify-between">
                    <div className="flex">
                        <img
                            src={imdbLogo}
                            alt="Imdb Logo"
                            width={28}
                            height={14}
                        />
                        <span className="text-metallic-yellow text-xs font-bold ml-[11px]">
                            {props.movies?.vote_average.toFixed(1) ||
                                props.trending?.vote_average.toFixed(1)}
                        </span>
                    </div>

                    <div className="flex gap-[6px] items-center">
                        <EyeIcon />
                        <img src={liked} alt="Like" width={14} height={14} />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Card;
