import '../Field/Field.css'

function Field({type, placeholder}) {
  return (
    <>
      <input className="field" type={type} placeholder={placeholder} />
    </>
  );
}

export default Field;
