import { useEffect, useState } from "react";


const elements = [
  "Intro",
  "About",
  "Skills",
  "Projects",
  "Contact",
]

const Navigator = () => {
  const [visible, setVisible] = useState(true);
  // scroll up event
  // INSERT_YOUR_CODE
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleWheel = (e: WheelEvent) => {
      console.log(window.scrollY);
      // wheel up (negative deltaY): show
      if (e.deltaY < 0) {
        setVisible(true);
      }else{
        setVisible(false);
      }
    };
    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const isVisible = () => {
    return visible || window.scrollY < 100;
  }

  return (
    <div className={`fixed top-0 z-10 border-b w-full mx-auto bg-[#02061890] ${isVisible() ? '' : 'translate-y-[-100%]'} transition-all duration-200 ease-out`}>
      <div className="flex justify-between px-5 py-2">
        <div className="cursor-pointer">Top</div>
        <div className="flex gap-5 text-lg text-[var(--primary-color)]">
          {elements.map((element) => (
            <div key={element} className="cursor-pointer">{element}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navigator
