import { useEffect, useState } from "react";

const Shutter = () => {
    const [open, setOpen] = useState(false);
    const [removed, setRemoved] = useState(false);
    const [progress, setProgress] = useState(0);
    const [loadingComplete, setLoadingComplete] = useState(false);

    useEffect(() => {
        // Fake loading effect
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setLoadingComplete(true);
                    // Wait a bit after 100% before opening
                    setTimeout(() => setOpen(true), 500);

                    // Remove from DOM after opening animation
                    setTimeout(() => setRemoved(true), 1500);
                    return 100;
                }
                return prev + 1;
            });
        }, 15); // Adjust speed here (approx 1.5s total)

        return () => clearInterval(interval);
    }, []);

    if (removed) return null;

    // Circle configuration
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <div className="fixed inset-0 z-50 pointer-events-none flex flex-col items-center justify-center">
            {/* Top Panel */}
            <div
                className={`absolute top-0 left-0 w-full h-[50vh] bg-[var(--background-color)] transition-transform duration-1000 ease-in-out ${open ? '-translate-y-full' : 'translate-y-0'} border-b border-[var(--primary-color)] z-10`}
            />

            {/* Bottom Panel */}
            <div
                className={`absolute bottom-0 left-0 w-full h-[50vh] bg-[var(--background-color)] transition-transform duration-1000 ease-in-out ${open ? 'translate-y-full' : 'translate-y-0'} border-t border-[var(--primary-color)] z-10`}
            />

            {/* Loading Gauge - displayed on top of panels */}
            <div className={`z-20 flex flex-col items-center justify-center transition-opacity duration-300 ${loadingComplete ? 'opacity-0' : 'opacity-100'}`}>
                <div className="relative w-32 h-32 bg-[var(--background-color)] rounded-full">
                    {/* Background Circle */}
                    <svg className="w-full h-full transform -rotate-90">
                        <circle
                            cx="64"
                            cy="64"
                            r={radius}
                            stroke="var(--sub-font-color)"
                            strokeWidth="4"
                            fill="transparent"
                            className="opacity-20"
                        />
                        {/* Progress Circle */}
                        <circle
                            cx="64"
                            cy="64"
                            r={radius}
                            stroke="var(--primary-color)"
                            strokeWidth="4"
                            fill="transparent"
                            strokeDasharray={circumference}
                            strokeDashoffset={strokeDashoffset}
                            strokeLinecap="round"
                            className="transition-all duration-75 ease-linear"
                        />
                    </svg>
                    {/* Percentage Text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xl font-bold text-[var(--primary-color)]">{progress}%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shutter;
