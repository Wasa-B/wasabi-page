import { Github, MailIcon } from "lucide-react"


const Footer = () => {
  return (
    <div className="h-[400px]">
      <div className='fixed bottom-0 left-0 px-5 flex flex-col items-center justify-center'>
          <a href="https://github.com/Wasa-B" target="_blank">
            <Github className="w-12 h-12 text-[var(--primary-color)]"/>
          </a>
          <div className="flex flex-col items-center justify-center border-4 border-[var(--primary-color)] rounded-t-2xl p-2">
            <a href="mailto:ghd1876@gmail.com" target="_blank">
              <MailIcon className="w-10 h-10 text-[var(--primary-color)]"/>
            </a>
          </div>
          <div className="border-x-4 border-[var(--primary-color)] w-4 h-10"/>
      </div>
    </div>
  )
}

export default Footer
