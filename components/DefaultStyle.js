import { colors } from '../components/CoreStyle'

export default () => (
    <div>
        <style jsx>{`
            $ColorPrimary: ${ colors.primary };
            :global(body) {
                margin: auto;
                font-family: 'Roboto', sans-serif;
                color: '#333';
            }
            :global(a) {
                text-decoration: none;
                &:hover { text-decoration: underline }
            }
        `}</style>
    </div>
)