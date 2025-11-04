import Iconbox from "./Iconbox"

const SkillContent = ({title, text, icon}:{title:string, text:string, icon:string}) => {
  return (
    <div className="flex items-start">
      <Iconbox icon={icon} />
      <div className="flex flex-col text-xl pl-5">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-[var(--sub-font-color)]">{text}</p>
      </div>
    </div>
  )
}

export default SkillContent
