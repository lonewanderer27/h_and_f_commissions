import { Link} from 'react-router-dom'

export default function ButtonLink({text, to}) {
    return (
        <>
            <Link to={to}>
                <button className="button m-3">
                    <span className="m-2">{text}</span>
                </button>
            </Link>
        </>
    )
}