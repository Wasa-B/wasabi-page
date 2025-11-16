import ContentHeader from "../common/ContentHeader"
const Contact = () => {
  return (
    <>
    <ContentHeader index={4} title="Contact" />
    <div className="w-full h-[200px] flex items-center justify-center">
      <a href="mailto:ghd1876@gmail.com" className="w-[300px] h-[50px] border-2 border-[var(--primary-color)] rounded-sm flex items-center justify-center">
        <div className="w-full h-full flex items-center justify-center px-5">
          <span className="text-lg font-bold">ghd1876@gmail.com</span>
        </div>
      </a>
    </div>
    </>    
  )
}

export default Contact