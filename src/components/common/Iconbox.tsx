const Iconbox = ({ icon }: { icon: string }) => {
  return (
    <div>
      <div className="w-23 h-23 flex rounded-lg items-center justify-center bg-[var(--icon-bg)] ">
        <div className="w-20 h-20 rounded-lg bg-slate-50 flex items-center justify-center">
          <div className="w-15 h-15">
            <img src={`icons/${icon}.svg`} alt={`${icon} icon`} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Iconbox
