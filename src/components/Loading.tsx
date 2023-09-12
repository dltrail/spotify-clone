import loader from "../assets/loader.svg"
type Props = {
    title?: string
}

function Loading({ title }: Props) {
    return (
        <div className="flex items-center flex-col text-[--lightest-blue] uppercase">
            <img src={loader} alt={title} className='object-contain ' />
            <h2>{title}</h2>
        </div>
    )
}

export default Loading