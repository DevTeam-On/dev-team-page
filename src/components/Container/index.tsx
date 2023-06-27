export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="ml-auto mr-auto max-w-[130rem] pl-2 pr-2">{children}</div>
    </>
  )
}
