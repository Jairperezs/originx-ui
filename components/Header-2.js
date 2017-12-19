import { colors } from './CoreStyle'
import Link from './Link'

export default ({ children }) => (
    <header>
        <section>
            <h1>Logo</h1>  
        </section>
        <nav>
            { children }
        </nav>
        <style jsx>{`
            header {
                $BorderColor: ${ colors.border };
                padding: 4px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid $BorderColor;
            }
        `}</style>
    </header>
)