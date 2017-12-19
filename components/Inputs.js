import { colors } from './CoreStyle'
export default ({ placeholder }) => (
    <div>
        <input placeholder={placeholder ? placeholder : 'Text placeholder here'} />
        <style jsx>{`
            $BorderColor: ${ colors.border };
            input {
                padding: 8px;
                margin: 4px;
                border: 1px solid $BorderColor;
                border-radius: 4px
            }
        `}</style>
    </div>
)