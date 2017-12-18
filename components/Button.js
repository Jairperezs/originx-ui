import { colors } from '../components/CoreStyle'
export default ({value, type}) => (
    <div>
        <button type="button">{ value }</button>
        <style jsx>{`
            $white: #fff;
            button {
                padding: 1em;
                background: ${ type === 'primary' || type === 'secondary' ? colors[type] : 'gray' };
                cursor: pointer;
                border: none;
                border-radius: 4px;
                color: $white
            }
        `}</style>
    </div>
)