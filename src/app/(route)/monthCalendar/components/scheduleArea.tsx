export default function Schedule() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col items-center w-full text-sm text-primary">
        <h4 className="w-full py-2 border-b border-primary text-center">회사</h4>
        <p className="flex justify-between w-full py-2.5 border-b-2 border-primary font-bold">
          <span className="px-7">이름</span>
          <span className="px-7">구분</span>
        </p>
      </div>
      <div className="flex flex-col items-center w-full text-sm text-label">
        <h4 className="w-full py-2 border-b border-label text-center">바인드인</h4>
        <p className="flex justify-between w-full py-2.5 border-b-2 border-label font-bold">
          <span className="px-7">이름</span>
          <span className="px-7">구분</span>
        </p>
      </div>
    </div>
  );
}
