import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { getSearch } from "../api";
import useDebounce from "../utils/useDebounce";
import useOutsideAlerter from "../utils/useOutsideAlerter";
import { ReactComponent as SearchIcon } from "../assets/search.svg";
import { ISearch } from "../types/search";

export default function Search() {
    const location = useLocation();

    const inputRef = useRef(null);
    const selectRef = useRef(null);
    useOutsideAlerter([inputRef, selectRef], (s) => setOpen(s));

    const [inputText, setInputText] = useState<string>("");
    const debouncedValue = useDebounce<string>(inputText, 1000);

    const [options, setOptions] = useState<ISearch>();
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        if (inputText?.length) {
            setOpen(true);
        }
        if (debouncedValue?.length) {
            setOptions(undefined);
        }
    }, [inputText]);

    useEffect(() => {
        if (debouncedValue?.length) {
            getSearch(debouncedValue).then((response) => setOptions(response));
        }
    }, [debouncedValue]);

    useEffect(() => {
        setOpen(false);
        setOptions(undefined);
        setInputText("");
    }, [location]);

    const handlerChange = (e: React.FormEvent<HTMLInputElement>) => {
        if (e.currentTarget.value !== inputText) {
            setInputText(e.currentTarget.value);
        }
    };

    return (
        <div className="relative text-slate-600">
            <div className="bg-metallic-blue rounded-3xl w-[324px] h-9 pl-[19px] flex items-center">
                <input
                    ref={inputRef}
                    type="text"
                    value={inputText}
                    placeholder="SEARCH"
                    className="bg-transparent border-none outline-none w-full text-white"
                    onChange={handlerChange}
                />
                <div className="pr-[17px] pl-2">
                    <SearchIcon />
                </div>
            </div>
            {open && inputText.length > 0 && inputText !== debouncedValue ? (
                <div
                    ref={selectRef}
                    className="absolute top-11 rounded-md w-[324px] bg-white border-[1px] shadow-md flex flex-col text-center"
                >
                    <div className="text-metallic-blue p-1 px-2">
                        Loading...
                    </div>
                </div>
            ) : open && inputText.length > 0 && options ? (
                options.total_results > 0 ? (
                    <div
                        ref={selectRef}
                        className="absolute top-11 py-1 rounded-md w-[324px] bg-white border-[1px] shadow-md flex flex-col"
                    >
                        {options.results
                            .filter((f) =>
                                ["movie", "tv"].includes(f.media_type)
                            )
                            .slice(0, 8)
                            .map((m) => (
                                <Link
                                    key={m.id}
                                    to={`/${m.media_type}/${m.id}`}
                                    className="hover:bg-metallic-blue hover:text-white p-1 px-2"
                                >
                                    {m.name || m.title}
                                    {", "}
                                    {m.first_air_date?.slice(0, 4) ||
                                        m.release_date?.slice(0, 4)}
                                </Link>
                            ))}
                    </div>
                ) : (
                    open && (
                        <div
                            ref={selectRef}
                            className="absolute top-11 rounded-md w-[324px] bg-white border-[1px] shadow-md flex flex-col text-center"
                        >
                            <div className="text-metallic-blue p-1 px-2  text-center">
                                No results.
                            </div>
                        </div>
                    )
                )
            ) : null}
        </div>
    );
}
