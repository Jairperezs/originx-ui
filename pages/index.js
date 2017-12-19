import Layout from '../components/layout'
import { weight } from '../components/CoreStyle'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Input from '../components/Inputs'
import Button from '../components/Button'

function addPost(e) {
    e.preventDefault()
    console.log('Hello post!!')
}

function PostForm() {
    return (
        <form onSubmit={addPost}>
            <Input placeholder="text here" />
            <Button value="addPost" type="primary" /> 
        </form>
    )
}

export default () => (
    <Layout title='Inicio'>
        <Header />
        <main>
            <div className="content">
                <h1>Welcome to Originx UI</h1>
                <PostForm />
            </div>
        </main>
        <Footer />
        <style jsx>{`
            h1 {
                font-weight: ${weight.light};
            }
        `}</style>
    </Layout>
)