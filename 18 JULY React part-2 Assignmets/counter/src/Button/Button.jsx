import "../Button/Button.css";

function Button({ isIncrement, text, click }) {
  return (
    <>
      <button className="btn" onClick={() => click(isIncrement)}>{text}</button>
    </>
  );
}

export default Button;
