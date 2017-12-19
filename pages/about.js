import Layout from '../components/layout'
import Header from '../components/Header-2'
import Link from '../components/Link'
import P from '../components/Paragraph'
import Post from '../components/Post'

export default () => (
    <Layout title="About page">
        <Header>
            <Link href="/">Home</Link>
            <Link href="/">Link here</Link>
        </Header>
        <main>
            <div className="content">
                <Post title="About content">
                    <P>
                        Text here
                    </P>
                </Post>
            </div>
        </main>
    </Layout>
)