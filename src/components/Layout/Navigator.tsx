import { HouseIcon } from "lucide-react";
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

  return (
    <div className={`fixed top-0 z-10 border-b w-full mx-auto p-2 bg-[#02061890] ${visible ? '' : 'translate-y-[-100%]'} transition-all duration-300 ease-out`}>
      <div className="flex justify-between px-5 py-2 items-center">
        <div className="cursor-pointer">
          <HouseIcon className="w-6 h-6"/>
        </div>
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
