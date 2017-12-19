import { colors } from './CoreStyle'

export default ({ placeholder, name, label }) => (
    <div>
        <div>
            <label>{ label }</label>
        </div>
        <div>
            <input name={name} placeholder={placeholder ? placeholder : 'Text placeholder here'} />
        </div>
        <style jsx>{`
            $BorderColor: ${ colors.border };
            label {
                margin: 4px
            }
            input {
                padding: 8px;
                margin: 4px;
                border: 1px solid $BorderColor;
                border-radius: 4px
            }
        `}</style>
    </div>
)