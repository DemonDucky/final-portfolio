export default function FullScreen(
  props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
) {
  return (
    <div
      {...props}
      className={`py-16 px-6 w-full h-screen bg-background flex justify-center items-center flex-col relative snap-start ${
        props.className ?? ''
      }`}
    >
      {props.children}
    </div>
  )
}
