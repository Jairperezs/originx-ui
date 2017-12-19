import { colors, weight } from '../components/CoreStyle'
export default ({value, type}) => (
    <div>
        <button>{ value }</button>
        <style jsx>{`
            $white: #fff;
            button {
                padding: 8px;
                margin: 4px;
                background: ${ type === 'primary' || type === 'secondary' ? colors[type] : 'gray' };
                color: $white;
                font-weight: ${weight.normal};
                cursor: pointer;
                border: none;
                border-radius: 4px;
                transition: .3s all;
                &:hover {
                    opacity: .8;
                }
            }
        `}</style>
    </div>
)