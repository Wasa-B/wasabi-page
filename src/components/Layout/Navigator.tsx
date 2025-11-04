

const elements = [
  "Intro",
  "About",
  "Skills",
  "Projects",
  "Contact",
]

const Navigator = () => {
  return (
    <div className='sticky top-0 z-10 border w-full'>
      <div className="flex justify-between px-5 py-2">
        <div className="cursor-pointer">Top</div>
        <div className="flex gap-5">
          {elements.map((element) => (
            <div key={element} className="cursor-pointer">{element}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navigator
