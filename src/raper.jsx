

function Raper({ children, color = "green" }) {

  return (
    <>
      <div
        style={{
          color: color,
          border: "2px solid green ",
          width: "300px",
          margin: "10px",
        }}
      >
        {children}
      </div>

    </>
  );
}
export default Raper;
