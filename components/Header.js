import Link from '../components/Link'

export default () => (
    <header>
        <section>
            <h1>Logo</h1>  
        </section>
        <nav>
            <Link href='/home'>Home</Link>
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