import Link from 'next/link'

export default ({ children, href='Href here' }) => (
    <Link href={ href }>
        <a>
            { children }
            <style jsx>{`
                a {
                    text-decoration: none
                }
            `}</style>
        </a>
    </Link>
)