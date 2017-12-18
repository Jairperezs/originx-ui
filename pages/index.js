import Layout from '../components/layout'
import { weight } from '../components/CoreStyle'
import Header from '../components/Header'
import Button from '../components/Button'

export default () => (
    <Layout title='Inicio'>
        <Header />
        <main>
            <h1>Welcome to Originx UI</h1>
            <Button value="Enviar" type="primary" />
        </main>
        <style jsx>{`
            h1 {
                font-weight: ${weight.light};
            }
        `}</style>
    </Layout>
)