import Head from 'next/head'
import DefaultStyle from '../components/DefaultStyle'

export default ({ children, title='Title here' }) => (
    <div>
        <Head>
            <title>{ title }</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" /> 
        </Head>
        {children}
        <DefaultStyle />
    </div>
)