import { ICredits } from "../types/credits";
const IMG_URL = import.meta.env.VITE_IMG_URL;

export default function Credits(props: {credits: ICredits | null | void}) {
    return (
        <div className="flex justify-between mt-[10px]">
            {props.credits?.crew.map(
                (credit) =>
                    credit.job == "Director" && (
                        <div key={credit.id} className="flex flex-col gap-2 max-w-[132px] truncate">
                            <img
                                src={IMG_URL + "w300" + credit?.profile_path}
                                alt="Photo"
                                width={110}
                                height={145}
                                className="min-w-[110px] rounded-lg"
                            />
                            <div>
                                {credit.name}
                                <br />
                                <span className="text-spanish-gray">
                                    {credit.job}
                                </span>
                            </div>
                        </div>
                    )
            )}
            {props.credits?.cast.slice(0, 6).map((credit) => (
                <div
                    key={credit.id}
                    className="flex flex-col gap-2 max-w-[132px] truncate"
                >
                    <img
                        src={IMG_URL + "w300" + credit?.profile_path}
                        alt="Photo"
                        width={110}
                        height={145}
                        className=" rounded-lg"
                    />
                    <div>
                        {credit.name}
                        <br />
                        <div className="text-spanish-gray truncate">
                            {credit.character}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
