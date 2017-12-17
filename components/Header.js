import Link from '../components/link'

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
                border: 1px solid black
            }
        `}</style>
    </header>
)