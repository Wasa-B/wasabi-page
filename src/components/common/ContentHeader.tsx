const ContentHeader = ({ index, title }: { index: number, title: string }) => {
  // index를 00형식으로 변환
  return (
    <div className="flex text-3xl pb-10 items-end ">
      <span className="text-2xl font-bold pr-2 text-[var(--primary-color)]">{index.toString().padStart(2, '0')}.</span>
      <h1 className="font-bold">{title}</h1>
    </div>
  )
}

export default ContentHeader
