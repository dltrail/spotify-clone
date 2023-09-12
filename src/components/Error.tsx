
type Props = {
    title?: string
}

function Error({ title }: Props) {
    return (
        <h2 className="text-lightest-blue">{title}</h2>
    )
}

export default Error