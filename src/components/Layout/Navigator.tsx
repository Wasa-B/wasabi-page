import { HouseIcon, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";


const elements = [
  "Intro",
  "About",
  "Skills",
  "Projects",
  "Contact",
]

const Navigator = ({ handleScroll }: { handleScroll: (index: number) => void }) => {
  const [visible, setVisible] = useState(true);
  const { theme, toggleTheme } = useTheme();

  // scroll up event
  // INSERT_YOUR_CODE
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      console.log(window.scrollY);
      // wheel up (negative deltaY): show
      if (e.deltaY < 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const handleClick = (index: number) => {
    handleScroll(index);
  }
  return (
    <div className={`fixed top-0 z-10 border-b border-neutral-600 w-full mx-auto p-2 bg-[var(--nav-bg)] ${visible ? '' : 'translate-y-[-100%]'} transition-all duration-300 ease-out`}>
      <div className="flex justify-between px-5 py-2 items-center">
        <div className="cursor-pointer" onClick={() => handleClick(0)} >
          <HouseIcon className="w-6 h-6" />
        </div>
        <div className="flex gap-5 text-lg text-[var(--primary-color)] items-center">
          {elements.map((element, index) => (
            <div key={element} className="cursor-pointer" onClick={() => handleClick(index)}>{element}</div>
          ))}
          <button onClick={toggleTheme} className="p-1 rounded-full hover:bg-neutral-200/20 transition-colors">
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navigator
