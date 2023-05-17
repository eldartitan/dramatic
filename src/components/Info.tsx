import Button from "./Button";
import imdbLogo from "../assets/imdb.png";
import { ReactComponent as PlayIcon } from "../assets/play.svg";
import { ReactComponent as PlusIcon } from "../assets/plus.svg";
import { IMovie } from "../types/movie";
import { ITv } from "../types/tv";

const IMG_URL = process.env.REACT_APP_IMG_URL;

export default function Info(props: {
    movie: IMovie | null | void;
    tv: ITv | null | void;
    logo_path: string | null | void;
}) {
    return (
        <>
            <div className="flex justify-start">
                {props.logo_path ? (
                    <img
                        src={IMG_URL + "original" + props.logo_path}
                        alt="Logo"
                        height={180}
                        width={424}
                        className="h-[180px] max-w-[424px] pr-auto clear-left object-left object-contain w-full"
                    />
                ) : (
                    <h1 className="text-4xl font-montserrat max-w-[724px]">{props.tv?.name || props.movie?.title}</h1>
                )}
            </div>

            <p className="max-w-[560px] mt-8">
                {props.movie?.overview || props.tv?.overview}
            </p>

            <div className="text-lg mt-4 text-ferrari-red">
                GENRES <br />
                <span className="text-white">
                    {props.movie
                        ? props.movie?.genres.map((m) => m.name).join(", ")
                        : props.tv?.genres.map((m) => m.name).join(", ")}
                </span>
            </div>

            <div className="flex gap-5 items-center mt-[18px]">
                <Button size="lg" variant="info">
                    WATCH <PlayIcon className="ml-5" />
                </Button>
                <Button size="lg">
                    MY LIST <PlusIcon className="ml-2" />
                </Button>
            </div>

            <div className="mt-8 flex items-center">
                <img src={imdbLogo} alt="Imdb Logo" width={54} height={27} />
                <span className="text-metallic-yellow text-xl font-bold ml-[11px]">
                    {props.movie?.vote_average.toFixed(1) ||
                        props.tv?.vote_average.toFixed(1)}
                </span>
                <span className="font-medium border-[1px] rounded-[5px] ml-[13px] px-1">
                    {props.movie?.adult || props.tv?.adult ? "R" : "PG"}
                </span>
                <span className="font-medium border-[1px] rounded-[5px] ml-[13px] px-1">
                    4K
                </span>
                <span className="font-bold text-spanish-gray text-xl ml-[17px]">
                    {props.movie?.release_date?.slice(0, 4) ||
                        props.tv?.first_air_date?.slice(0, 4)}
                </span>
            </div>

            <div className="text-lg mt-4 text-ferrari-red">
                AUDIO <br />
                <span className="text-white">
                    {props.movie
                        ? props.movie?.spoken_languages
                              .map((m) => m.english_name)
                              .join(", ")
                        : props.tv?.spoken_languages
                              .map((m) => m.english_name)
                              .join(", ")}
                </span>
            </div>
        </>
    );
}
