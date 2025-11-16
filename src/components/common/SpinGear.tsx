import { useEffect } from "react";
import { useState } from "react";

const Gear = ({baseLotation, lotation, size, posX, posY}: {baseLotation: number, lotation: number, size: number, posX: number, posY: number}) => {
    return (
        <div style={{ position: 'absolute', left: posX, top: posY }}>
            <div className={`w-${size} h-${size} flex items-center justify-center`}>
                <div className="w-full h-full">
                    <img src="images/gear.svg" alt="gear" style={{ transform: `rotate(${baseLotation + lotation}deg)` }} className="duration-300 ease-out"/>
                </div>
            </div>
        </div>
    )
}

const SpinGear = () => {
    const [lotation, setLotation] = useState(0);
    // scroll 에 따라 lotation 을 변경
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const lotation = scrollY/15;
            setLotation(lotation);
        }
        window.addEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className="relative">
            <Gear baseLotation={0} lotation={lotation} size={20} posX={0} posY={0} />
            <Gear baseLotation={10} lotation={-lotation * 3} size={10} posX={-17} posY={65} />
            <Gear baseLotation={10} lotation={lotation * 2} size={15} posX={-8} posY={100} />
        </div>
    )
}

export default SpinGear