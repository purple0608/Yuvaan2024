
import { useEffect, useLayoutEffect, useState, useRef } from "react";
import useScreenSize from "./useScreenSize.jsx";
import "../../assets/sponsors/App.css";
import Card1 from "./card";
import oil from "../../assets/sponsors/image/indianoil.webp";
import sbi from "../../assets/sponsors/image/SBI1.jpg";
import indianBank from "../../assets/sponsors/image/Indian Bank.jpg";
import kuber from "../../assets/sponsors/image/Kuber Techno Craft.jpg";
import assamTribune from "../../assets/sponsors/image/The Assam Tribune logo.jpg";
import bharatBass from "../../assets/sponsors/image/Bharat Bass Festival Logo.png";
import happyJourney from "../../assets/sponsors/image/Happy Journey logo.jpg";
import shantanu from "../../assets/sponsors/image/shantanu.jpg";
import surjoy from "../../assets/sponsors/image/surjoy.jpg";
import pragnews from "../../assets/sponsors/image/pragNews1.png";
import derio from "../../assets/sponsors/image/DeroiTealogo.png";
import royal from "../../assets/sponsors/image/enfield.jpg";
import downline from "/src/assets/utils/decorator-hr-lg.png";
import sponsors_heading from "../../assets/sponsors/image/sponsors.png";
import sponsors_pdf from "./sponsors_pdf.tsx";
import brochure from "./../../assets/sponsors/image/sponsors-pdf/Yuvaan 2024 Sponsor Brochure Single Page (4).pdf";
import ImageSlider from "./Sponsors_ImageSlider.tsx";
import add from "../../assets/sponsors/image/Add.png"
import bhag from "../../assets/sponsors/image/Bhagwati.jpg";
import puba from "../../assets/sponsors/image/purbashree.png";
import stuborn from "../../assets/sponsors/image/stuborn.jpeg";
import scratch from "../../assets/sponsors/image/scratch.jpg";
import rngdhali from "../../assets/sponsors/image/rngdhali.jpeg";
import gautam from "../../assets/sponsors/image/gautam.jpeg";
import freestyle from "../../assets/sponsors/image/freestyle.png";
import canara from "../../assets/sponsors/image/canarabank.jpg";

import { debounce } from "./../../assets/utils/Debounce.ts";

function Sponsors() {
    const mount = useRef(null);
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const handleResize = debounce(() => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
    }, 300);

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [handleResize]);

    useLayoutEffect(() => {
        const sponsorHex = mount.current?.querySelector(".sponsors-hex");

        if (dimensions.width <= 1280) {
            // Add your specific responsive adjustments here
            sponsorHex?.classList.add("responsive-hex");
        } else {
            sponsorHex?.classList.remove("responsive-hex");
        }
    }, [dimensions]);

    const screenSize = useScreenSize();

    let check = 0;
    if (screenSize.width <= 768) {
        check = 1;
    }



    return (
        <div>
            <div className="sponsors-wrapper" ref={mount}>
                <div className="sponsors-content">
                    <header className="sponsors-header">
                        <div className="sponsors-layers">
                            <div className="sponsors-layer-title">
                                <div className="sponsors-subtitle">
                                    <img src={sponsors_heading} alt="sponsors heading" className='sponsors_heading' />
                                    <img src={downline} alt="downline" className='sponsors_downline' />

                                </div>
                                {check ? null :
                                    <div className='sponsors-hex1' >
                                        <article className="sponsors-article">
                                            <h3 className="sponsors-article-title">Gold Sponsor</h3>
                                            <div className='sponsors-image' >
                                                <Card1
                                                    image={oil}
                                                    imageAlt="Oil India Limited"
                                                    title="Title Sponsor"
                                                    class="sponsors-Titlecard"
                                                    url="https://iocl.com/"
                                                    head="1"
                                                    insta="https://www.instagram.com/indianoilcorp/"
                                                    twitter="https://twitter.com/indianOilcl"
                                                    facebook="https://www.facebook.com/IndianOilCorpLimited"
                                                />
                                                <Card1
                                                    image={sbi}
                                                    imageAlt="SBI"
                                                    title="Title Sponsor"
                                                    class="sponsors-Titlecard"
                                                    url="https://www.onlinesbi.sbi/"
                                                    head="1"
                                                    insta="https://www.instagram.com/theofficialsbi/"
                                                    facebook="https://www.facebook.com/StateBankOfIndia/"
                                                    twitter="https://twitter.com/TheOfficialSBI"
                                                />
                                                <Card1
                                                    image={indianBank}
                                                    imageAlt="Oil India Limited"
                                                    title="Title Sponsor"
                                                    class="sponsors-Titlecard"
                                                    url="https://indianbank.in/"
                                                    head="1"
                                                    insta="https://www.instagram.com/myIndianbank/"
                                                    facebook="https://www.facebook.com/MyIndianBank"
                                                    twitter="https://twitter.com/myindianbank"
                                                />
                                                <Card1
                                                    image={kuber}
                                                    imageAlt="Oil India Limited"
                                                    title="Title Sponsor"
                                                    class="sponsors-Titlecard"
                                                    url="https://www.kubertechnocraft.com/"
                                                    head="1"


                                                />
                                            </div>
                                        </article>
                                    </div>
                                }
                            </div>
                            <div className="sponsors-layer sponsors-layer-base"></div>
                            <div className="sponsors-layer sponsors-layer-middle"></div>
                            <div className="sponsors-layer sponsors-layer-front"></div>
                        </div>
                    </header>
                    <div className='sponsor'>
                        <div className='sponsors-hex' >
                            {check ?
                                <div className='sponsors-hex1' >
                                    <article className="sponsors-article">
                                        <h3 className="sponsors-article-title">Gold Sponsor</h3>
                                        <div className='sponsors-image' >
                                            <Card1
                                                image={oil}
                                                imageAlt="Oil India Limited"
                                                title="Title Sponsor"
                                                class="sponsors-Titlecard"
                                                url="https://iocl.com/"
                                                head="1"
                                                insta="https://www.instagram.com/indianoilcorp/"
                                                twitter="https://twitter.com/indianOilcl"
                                                facebook="https://www.facebook.com/IndianOilCorpLimited"
                                            />
                                            <Card1
                                                image={sbi}
                                                imageAlt="SBI"
                                                title="Title Sponsor"
                                                class="sponsors-Titlecard"
                                                url="https://www.onlinesbi.sbi/"
                                                head="1"
                                                insta="https://www.instagram.com/theofficialsbi/"
                                                facebook="https://www.facebook.com/StateBankOfIndia/"
                                                twitter="https://twitter.com/TheOfficialSBI"
                                            />
                                            <Card1
                                                image={indianBank}
                                                imageAlt="Oil India Limited"
                                                title="Title Sponsor"
                                                class="sponsors-Titlecard"
                                                url="https://indianbank.in/"
                                                head="1"
                                                insta="https://www.instagram.com/myIndianbank/"
                                                facebook="https://www.facebook.com/MyIndianBank"
                                                twitter="https://twitter.com/myindianbank"
                                            />
                                            <Card1
                                                image={kuber}
                                                imageAlt="Oil India Limited"
                                                title="Title Sponsor"
                                                class="sponsors-Titlecard"
                                                url="https://www.kubertechnocraft.com/"
                                                head="1"


                                            />
                                        </div>
                                    </article>
                                </div>
                                : null}
                            <article className="sponsors-article">
                                <h3 className="sponsors-article-title">Television Media Partner</h3>
                                <div className='sponsors-image' >
                                    <Card1
                                        image={pragnews}
                                        imageAlt="SBI"
                                        title="Banking Partner" class="sponsors-card"
                                        url="https://pragnews.com/" />
                                </div>
                            </article>
                            <article className="sponsors-article">
                                <h3 className="sponsors-article-title">Digital Marketing Partner</h3>
                                <div className='sponsors-image' >
                                    <Card1
                                        image={assamTribune}
                                        imageAlt="Assam Tribunes"
                                        title="Digital Media Partner"
                                        class="sponsors-card"
                                        url="https://assamtribune.com/" />
                                </div>
                            </article>

                            <article className="sponsors-article">
                                <h3 className="sponsors-article-title">Pronite Partner</h3>
                                <div className='sponsors-image' >
                                    <Card1
                                        image={bharatBass}
                                        imageAlt="Bharat Bass Festival"
                                        title="Pronite Partner"
                                        class="sponsors-card"
                                        url="https://sites.google.com/bharatbassfestival.in/bharatbassfestival/home" />
                                </div>
                            </article>
                            <article className="sponsors-article">
                                <h3 className="sponsors-article-title">Travel Partner</h3>
                                <div className='sponsors-image' >
                                    <Card1
                                        image={happyJourney}
                                        imageAlt="Happy Journey"
                                        title="Travel Partner"
                                        class="sponsors-card" />
                                </div>
                            </article>
                            <article className="sponsors-article">
                                <h3 className="sponsors-article-title">Gifting Partner</h3>
                                <div className='sponsors-image' >
                                    <Card1
                                        image={puba}
                                        imageAlt="Purbashree"
                                        title="Gifting Partner"
                                        class="sponsors-card"
                                        url="https://purbashree.com/" />
                                </div>
                            </article>
                            <article className="sponsors-article">
                                <h3 className="sponsors-article-title">Merchandise Partner</h3>
                                <div className='sponsors-image' >
                                    <Card1
                                        image={stuborn}
                                        imageAlt="Stuborn Factory"
                                        title="Media Partner"
                                        class="sponsors-card" />
                                    <Card1
                                        image={scratch}
                                        imageAlt="gplus"
                                        title="Media Partner"
                                        class="sponsors-card"
                                        url="https://aniwatch.to/watch/mob-psycho-100-101?ep=3094" />
                                </div>
                            </article>
                            <article className="sponsors-article">
                                <h3 className="sponsors-article-title">Bronze Sponsor</h3>
                                <div className='sponsors-image' >
                                    <Card1
                                        image={royal}
                                        imageAlt="Royal Enfield"
                                        title="Bronze Sponsors"
                                        class="sponsors-card"
                                        url="https://www.royalenfield.com/in/en/home/" />
                                    <Card1
                                        image={canara}
                                        imageAlt="Canara Bank"
                                        title="Bronze Sponsors"
                                        class="sponsors-card"
                                        url="https://canarabank.com/" />
                                </div>
                            </article>
                            <article className="sponsors-article">
                                <h3 className="sponsors-article-title">Branding Partner</h3>
                                <div className='sponsors-image' >
                                    <Card1
                                        image={rngdhali}
                                        imageAlt="Rangdhali - Dressing Desires, Bijoynagar "
                                        title="Media Partner"
                                        class="sponsors-card" />
                                    <Card1
                                        image={bhag}
                                        imageAlt="Prag News"
                                        title="Media Partner"
                                        class="sponsors-card" />
                                    <Card1
                                        image={derio}
                                        imageAlt="SBI"
                                        title="Banking Partner"
                                        class="sponsors-card"
                                        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
                                    <Card1
                                        image={add}
                                        imageAlt="Prag News"
                                        title="Media Partner"
                                        class="sponsors-card" />
                                    <Card1
                                        image={gautam}
                                        imageAlt="Shree Gautam Construction"
                                        title="Media Partner"
                                        class="sponsors-card" />
                                </div>
                            </article>
                            <article className="sponsors-article">
                                <h3 className="sponsors-article-title">Workshop Sponsors</h3>
                                <div className='sponsors-image' >
                                    <Card1
                                        image={freestyle}
                                        imageAlt="Freestyle Dance Academy"
                                        title="Banking Partner"
                                        class="sponsors-card" />
                                </div>
                            </article>
                            <article className="sponsors-article">
                                <h3 className="sponsors-article-title">Alumni</h3>
                                <div className='sponsors-image' >
                                    <Card1
                                        image={shantanu}
                                        imageAlt="Shantanu Singh"
                                        title="Banking Partner"
                                        class="sponsors-card"
                                        url="https://www.linkedin.com/in/shantanu-singh-51365b193/?originalSubdomain=in"
                                        name="Shantanu Singh" />
                                    <Card1
                                        image={surjoy}
                                        imageAlt="Surjoy prakash borthakur"
                                        title="Media Partner"
                                        class="sponsors-card"
                                        url="https://www.linkedin.com/in/surjya-prakash-borthakur-b82757130/?originalSubdomain=in"
                                        name="Surjoy Borthakur" />
                                </div>
                            </article>

                        </div>
                        <ImageSlider images={sponsors_pdf} />
                        <div className='sponsors-button'>
                            <a href={brochure} target="_blank" rel="noopener noreferrer" className="sponsors-register-button">
                                Brochure
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Sponsors;
