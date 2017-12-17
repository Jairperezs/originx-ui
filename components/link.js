import Link from 'next/link'

export default ({ children, href='Href here' }) => (
    <Link href={ href }>
        <a>
            { children }
        </a>
    </Link>
)