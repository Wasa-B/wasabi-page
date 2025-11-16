import { GithubIcon } from "lucide-react"

const Intro = () => {
  return (
    <div className="pt-15">
      <p className="text-2xl text-[var(--primary-color)]">안녕하세요. 개발자</p>
      <p className="text-6xl font-bold text-lightest-slate pt-2 pb-2">홍원섭 입니다.</p>
      <p className="text-6xl font-bold text-lightest-slate text-[var(--sub-font-color)] pb-5">
        공부하며 <br/> 문제를 해결하는 것을 좋아합니다.
      </p>
      <p className="text-xl text-[var(--sub-font-color)]">
        방문해 주셔서 감사합니다.
      </p>
      <div className="links flex gap-2 pt-5 text-[var(--primary-color)]">
        <a href="https://github.com/Wasa-B" target="_blank">
          <div className="w-10 h-10 border-2 border-[var(--primary-color)] rounded-lg flex items-center justify-center">
            <GithubIcon className="w-7 h-7" />
          </div>
        </a>
      </div>
    </div>
  )
}

export default Intro
