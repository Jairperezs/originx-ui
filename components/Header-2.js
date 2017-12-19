import { colors } from './CoreStyle'
import Link from './Link'

export default ({ children }) => (
    <header>
        <div className="content">
            <section>
                <h1>Logo</h1>  
            </section>
            <nav>
                { children }
            </nav>
        </div>
        <style jsx>{`
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