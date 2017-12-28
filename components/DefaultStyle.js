import { colors, width } from './CoreStyle'

export default () => (
    <div>
        <style jsx>{`
            $ColorPrimary: ${ colors.primary };
            $ColorSecondary: ${ colors.secondary };
            :global(body) {
                margin: 0;
                font-family: 'Roboto', sans-serif;
                color: '#333';
            }
            :global(a) {
                text-decoration: none;
                &:hover { text-decoration: underline }
            }
            :global(.content) {
                max-width: ${width.maxWidth};
                margin-left: auto;
                margin-right: auto
            }
        `}</style>
    </div>
)