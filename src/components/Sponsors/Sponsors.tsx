import { useEffect, useLayoutEffect, useState, useRef } from 'react';
import '../../assets/sponsors/App.css';
import Card1 from './card';
import apl from "../../assets/sponsors/image/apl.png";
import oil from "../../assets/sponsors/image/oil.png";
import sbi from "../../assets/sponsors/image/image1.png";
import prag from "../../assets/sponsors/image/prag1.png";
import gplus from "../../assets/sponsors/image/gplus1.png";
import sponsors_heading from "../../assets/sponsors/image/sponsors.png"
import Navbar from "../Navbar/Navbar";
// import Image from "./image/cardBackground.avif";
// import firefly from "./image/firefly.png";
// import { gsap } from "gsap";



function useDebounce(func: Function, delay) {
    const [timer, setTimer] = useState<ReturnType<typeof setTimeout>>(); //Create timer state

    const debouncedFunction = ((...args) => {
        const newTimer = setTimeout(() => {
            func(...args);
        }, delay);
        clearTimeout(timer);
        setTimer(newTimer);
    }) as Function;

    return debouncedFunction;
}


function Sponsors() {

    const mount = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
    }

    useEffect(() => {
        window.addEventListener('resize', () => { useDebounce(handleResize, 300) })

        return () => {
            window.removeEventListener('resize', () => { useDebounce(handleResize, 300) })
        }
    }, []);

    useLayoutEffect(() => {
        if (dimensions.width <= 1280) {
            mount.current?.querySelectorAll(".card1")
        }
    }, [dimensions]);

    const styles = {
        cardContainer: {
            backgroundImage: `url(${Image})`
        }
    };

    return (
        <div>
            <Navbar />
            <div className="sponsors-wrapper" ref={mount}>
                <div className="sponsors-content">
                    <header className="sponsors-header">
                        <div className="sponsors-layers">
                            <div className="sponsors-layer-title">
                                <div className="sponsors-subtitle">Past Sponsors</div>
                            </div>
                            <div className="sponsors-layer sponsors-layer-base"></div>
                            <div className="sponsors-layer sponsors-layer-middle"></div>
                            <div className="sponsors-layer sponsors-layer-front"></div>
                        </div>
                    </header>
                    <div className='sponsor' >
                        <article className="sponsors-article">
                            <Card1 image={oil} imageAlt="Oil India Limited" title="Title Sponsor" class="sponsors-titleCard" />
                        </article>
                        <div className='sponsors-hex' >
                            <article className="sponsors-article">
                                <Card1 image={sbi} imageAlt="SBI" title="Banking Partner" class="sponsors-card" />
                                <Card1 image={prag} imageAlt="Prag News" title="Media Partner" class="sponsors-card" />
                                <Card1 image={gplus} imageAlt="gplus" title="Media Partner" class="sponsors-card" />
                                <Card1 image={apl} imageAlt="APL" title="Media Partner" class="sponsors-card" />
                            </article>
                            <article className="sponsors-article">
                                <Card1 image={sbi} imageAlt="SBI" title="Banking Partner" class="sponsors-card" />
                                <Card1 image={prag} imageAlt="Prag News" title="Media Partner" class="sponsors-card" />
                                <Card1 image={gplus} imageAlt="gplus" title="Media Partner" class="sponsors-card" />
                                <Card1 image={apl} imageAlt="APL" title="Media Partner" class="sponsors-card" />
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Sponsors;