export default function Footer() {
    return (
        <div className="bg-chinese-black font-['roboto'] text-sm text-white">
            <div className="container m-auto pt-24 flex gap-24">
                <div>
                    <select
                        name="select"
                        id=""
                        className="bg-[#362F33] px-4 py-2"
                    >
                        <option>ENGLISH</option>
                        <option>SPANISH</option>
                    </select>
                </div>
                <div>
                    <ul>
                        <li>
                            <h1 className="text-base mb-[13px] font-['montserrat'] font-semibold">NAVIGATION</h1>
                        </li>
                        <li>
                            <h1>
                                <button>Home</button>
                            </h1>
                        </li>
                        <li>
                            <h1>
                                <button>FAQ</button>
                            </h1>
                        </li>
                        <li>
                            <h1>
                                <button>Investor Relations</button>
                            </h1>
                        </li>
                        <li>
                            <h1>
                                <button>Jobs</button>
                            </h1>
                        </li>
                        <li>
                            <h1>
                                <button>About us</button>
                            </h1>
                        </li>
                        <li>
                            <h1>
                                <button>Help Centre</button>
                            </h1>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <h1 className="text-base mb-[13px] font-['montserrat'] font-semibold">LEGAL</h1>
                        </li>
                        <li>
                            <button>Privacy Policy</button>
                        </li>
                        <li>
                            <button>Terms of Service</button>
                        </li>
                        <li>
                            <button>Cookie Preferences</button>
                        </li>
                        <li>
                            <button>Corporate information</button>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <h1 className="text-base mb-[13px] font-['montserrat'] font-semibold">TALK TO US</h1>
                        </li>
                        <li>
                            <button>support@ercom.com</button>
                        </li>
                        <li>
                            <button>+66 2399 1145</button>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-base mb-[13px] font-['montserrat'] font-semibold">FOLLOW US</h1>
                    <span className="w-[39px] h-p[39px] rounded-full"></span>
                </div>
            </div>
            <h1 className="w-full text-center pt-7 pb-10">© 2022 Dramatic. All Rights Reserved. </h1>
        </div>
    );
}
