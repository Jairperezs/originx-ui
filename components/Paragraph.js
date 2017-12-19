export default ({ children }) => (
    <p>
      {children}
      <style jsx>{`
        p {
          font: 14px 'Roboto', sans-serif;
          margin: 10px 0;
        }
      `}</style>
    </p>
  )