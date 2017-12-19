import Layout from '../components/layout'
import { weight } from '../components/CoreStyle'
import Header from '../components/Header'
import Form from '../components/Form'
import Input from '../components/Inputs'
import Button from '../components/Button'

function addPost() {
    return console.log('Hello Post!!')
}

export default () => (
    <Layout title='Inicio'>
        <Header />
        <main>
            <h1>Welcome to Originx UI</h1>
            <Form OnSubmit={addPost()}>
                <Input placeholder="Text here" />
                <Button value="Enviar" type="primary" />
            </Form>
        </main>
        <style jsx>{`
            h1 {
                font-weight: ${weight.light};
            }
        `}</style>
    </Layout>
)