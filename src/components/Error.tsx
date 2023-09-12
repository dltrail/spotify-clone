
type Props = {
    title?: string
}

function Error({ title }: Props) {
    return (
        <div><h2>{title}</h2></div>
    )
}

export default Error