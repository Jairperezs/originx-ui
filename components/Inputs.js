export default ({ placeholder }) => (
    <div>
        <input placeholder={placeholder} />
        <style jsx>{`
            input {
                padding: .4em;
                border: 1px solid gray;
                border-radius: 4px
            }
        `}</style>
    </div>
)