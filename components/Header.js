import { colors } from './CoreStyle'
import Link from './Link'

export default () => (
    <header>
        <div className="content">
            <section>
                <h1>Logo</h1>  
            </section>
            <nav>
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
            </nav>
        </div>
        <style jsx>{`
            $PrimaryColor: ${ colors.primary };
            $BorderColor: ${ colors.border };
            header {
                border-bottom: 1px solid $BorderColor;
            }
            .content {
                padding: 4px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
        `}</style>
    </header>
)