import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import YouTube from "react-youtube";
import {
    getCredits,
    getDetail,
    getImages,
    getSimilar,
    getVideos,
} from "../api";
import "../App.css";
import Info from "../components/Info";
import Credits from "../components/Credits";
import { IMovie } from "../types/movie";
import { IImages } from "../types/images";
import { ITv } from "../types/tv";
import { ICredits } from "../types/credits";
import { IVideos } from "../types/videos";
import { ISimilar } from "../types/similar";

const IMG_URL = process.env.REACT_APP_IMG_URL;

export default function DetailPage() {
    const location = useLocation();
    const { id, category } = useParams();

    const [movie, setMovie] = useState<IMovie | null | void>(null);
    const [tv, setTv] = useState<ITv | null | void>(null);
    const [images, setImages] = useState<IImages | null | void>(null);
    const [credits, setCredits] = useState<ICredits | null | void>(null);
    const [similar, setSimilar] = useState<ISimilar | null | void>(null);
    const [videos, setVideos] = useState<IVideos | null | void>(null);
    const [trailerOpen, setTrailerOpen] = useState<boolean>(false);

    useEffect(() => {
        setImages()
        getImages(id, category).then((response) => setImages(response));
        getDetail(id, category).then((response) =>
            category === "movie" ? setMovie(response) : setTv(response)
        );
        getCredits(id, category).then((response) => setCredits(response));
        getSimilar(id, category).then((response) => setSimilar(response));
        getVideos(id, category).then((response) => setVideos(response));
    }, [id, category, location]);

    const bg = `url(${IMG_URL + "original" + images?.backdrops[0].file_path})`;

    const video_id = videos?.results.find(
        (f) => f.name.toLocaleLowerCase().includes("trailer" || "teaser")
    )?.key;

    const similar_filtered = similar?.results
        .filter((f) => f.backdrop_path)
        .slice(0, 5);

    return (
        <>
            {trailerOpen && video_id && (
                <div
                    onClick={() => setTrailerOpen(false)}
                    className="youtube-container fixed w-[100vw] h-[100vh] top-0 left-0 z-30 bg-black bg-opacity-70 flex items-center justify-center"
                >
                    <YouTube className="" videoId={video_id} />
                </div>
            )}
            <div
                className="font-montserrat"
                style={{
                    backgroundImage: bg,
                    backgroundSize: "cover",
                    backgroundPosition: "124px 0",
                    backgroundRepeat: "no-repeat",
                    height: "908px",
                }}
            >
                <div className="w-full h-full pl-32 pr-4 header-background pt-[138px] font-semibold text-sm">
                    <Info
                        movie={movie}
                        tv={tv}
                        logo_path={
                            images?.logos.find((f) => f.iso_639_1 == "en")
                                ?.file_path
                        }
                    />
                    <div className="must-watch-block rounded-3xl px-6 pt-7 pb-[30px] mt-11">
                        <div className="flex items-center gap-28 pr-5 pb-4">
                            <div className="relative mb-auto">
                                <div className="text-lg font-bold">TRAILER</div>
                                <button
                                    onClick={() => setTrailerOpen(!trailerOpen)}
                                >
                                    <img
                                        src={`https://img.youtube.com/vi/${video_id}/maxresdefault.jpg`}
                                        alt="Trailer"
                                        width={307}
                                        height={170}
                                        className="rounded-lg mt-[10px] min-w-[307px]"
                                    />
                                </button>
                            </div>
                            <div className="flex flex-col w-full">
                                <div className="text-lg font-bold">
                                    CAST AND CREW INFO
                                </div>
                                <Credits credits={credits} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-blur h-[348px] w-full mt-[-192px]"></div>
            <div className="flex flex-col px-6 pt-7 pr-5 pb-[30px] mt-20 ml-32">
                <h1 className="text-lg font-bold mb-[14px]">MORE LIKE THIS</h1>
                <div className="flex justify-between">
                    {similar_filtered?.map((s) => (
                        <Link to={`/${category}/${s.id}`} key={s.id}>
                            <img
                                src={IMG_URL + "w500" + s.backdrop_path}
                                alt="Similar"
                                width={320}
                                height={172}
                                className="rounded-lg"
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
