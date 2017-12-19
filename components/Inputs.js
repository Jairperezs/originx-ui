export default ({ placeholder }) => (
    <div>
        <input placeholder={placeholder ? placeholder : 'Text placeholder here'} />
        <style jsx>{`
            input {
                padding: 8px;
                margin: 4px;
                border: 1px solid gray;
                border-radius: 4px
            }
        `}</style>
    </div>
)