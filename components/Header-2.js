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
                display: flex;
                justify-content: space-between;
                align-items: center
            }
        `}</style>
    </header>
)