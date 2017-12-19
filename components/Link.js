import Link from 'next/link'
import { colors } from './CoreStyle'

export default ({ children, href='Href here' }) => (
    <Link href={ href }>
        <a>
            { children }
            <style jsx>{`
                $ColorPrimary: ${ colors.primary };
                $ColorSecondary: ${ colors.secondary };
                a {
                    margin: 4px;
                    color: gray;
                    &:hover {
                        color: $ColorPrimary
                    }
                }
            `}</style>
        </a>
    </Link>
)
