import { Link, useLocation } from "react-router-dom"
import { useAtom } from "jotai";
import { bannerActive, dataActive, articleActive } from "../../stores/accordion";
import { BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs'
import BannerIcon from '../../assets/icons/material-symbols_full-coverage-rounded.svg'
import { GoDotFill } from 'react-icons/go'

const Accordion = () => {
    const [activeBanner, setActiveBanner] = useAtom(bannerActive);
    const [activeData, setActiveData] = useAtom(dataActive);
    const [activeArticle, setActiveArticle] = useAtom(articleActive);

    const { pathname } = useLocation();

    return (
        <div>
            <div className="min-w-[272px]">
                <div
                    className="flex flex-row justify-between items-center text-black text-lg font-normal p-4"
                    onClick={() => setActiveData(!activeData)}
                >
                    <div className="flex flex-row items-center space-x-2">
                        <img src={BannerIcon} alt="banner icon" />
                        <p>Data Management</p>
                    </div>
                    {activeData ?
                        (<div>
                            <BsFillCaretUpFill />
                        </div>)
                        :
                        (<div>
                            <BsFillCaretDownFill />
                        </div>)
                    }
                </div>
                <div className="">
                    {activeData ?
                        (<div className="flex flex-col text-lg text-black">
                            <Link to='/summary' className={`py-4 px-8 flex flex-row items-center space-x-2 ${pathname === "/summary" ? 'bg-gray text-white' : ''}`}>
                                <GoDotFill />
                                <p>Summary</p>
                            </Link>
                        </div>)
                        :
                        (<div>

                        </div>)
                    }
                </div>
            </div>
            <div className="min-w-[272px]">
                <div
                    className="flex flex-row justify-between items-center text-black text-lg font-normal p-4"
                    onClick={() => setActiveBanner(!activeBanner)}
                >
                    <div className="flex flex-row items-center space-x-2">
                        <img src={BannerIcon} alt="banner icon" />
                        <p>Banner</p>
                    </div>
                    {activeBanner ?
                        (<div>
                            <BsFillCaretUpFill />
                        </div>)
                        :
                        (<div>
                            <BsFillCaretDownFill />
                        </div>)
                    }
                </div>
                <div className="">
                    {activeBanner ?
                        (<div className="flex flex-col text-lg text-black">
                            <Link to='/bannerlist' className={`py-4 px-8 flex flex-row items-center space-x-2 ${pathname === "/bannerlist" ? 'bg-gray text-white' : ''}`}>
                                <GoDotFill />
                                <p>Banner List</p>
                            </Link>
                            <Link to='/bannersetlist' className={`py-4 px-8 flex flex-row items-center space-x-2 ${pathname === "/bannersetlist" ? 'bg-gray text-white' : ''}`}>
                                <GoDotFill />
                                <p>Banner Set List</p>
                            </Link>
                            <Link to='/bannergrouplist' className={`py-4 px-8 flex flex-row items-center space-x-2 ${pathname === "/bannergrouplist" ? 'bg-gray text-white' : ''}`}>
                                <GoDotFill />
                                <p>Banner Group List</p>
                            </Link>
                        </div>)
                        :
                        (<div>

                        </div>)
                    }
                </div>
            </div>
            <div className="min-w-[272px]">
                <div
                    className="flex flex-row justify-between items-center text-black text-lg font-normal p-4"
                    onClick={() => setActiveArticle(!activeArticle)}
                >
                    <div className="flex flex-row items-center space-x-2">
                        <img src={BannerIcon} alt="banner icon" />
                        <p>Article</p>
                    </div>
                    {activeArticle ?
                        (<div>
                            <BsFillCaretUpFill />
                        </div>)
                        :
                        (<div>
                            <BsFillCaretDownFill />
                        </div>)
                    }
                </div>
                <div className="">
                    {activeArticle ?
                        (<div className="flex flex-col text-lg text-black">
                            <Link to='/articlelist' className={`py-4 px-8 flex flex-row items-center space-x-2 ${pathname === "/articlelist" ? 'bg-gray text-white' : ''}`}>
                                <GoDotFill />
                                <p>Article List</p>
                            </Link>
                            <Link to='/articlecategory' className={`py-4 px-8 flex flex-row items-center space-x-2 ${pathname === "/articlecategory" ? 'bg-gray text-white' : ''}`}>
                                <GoDotFill />
                                <p>Article Category</p>
                            </Link>
                        </div>)
                        :
                        (<div>

                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Accordion