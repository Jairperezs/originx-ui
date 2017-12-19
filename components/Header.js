import { colors } from './CoreStyle'
import Link from './Link'

export default () => (
    <header>
        <section>
            <h1>Logo</h1>  
        </section>
        <nav>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
        </nav>
        <style jsx>{`
            $BorderColor: ${ colors.border };
            header {
                padding: 4px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid $BorderColor;
            }
        `}</style>
    </header>
)