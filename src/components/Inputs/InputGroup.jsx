function InputGroup({ label, type, dataKey, value, onChange }) {
  return (
    <>
      <label>{label}</label>
      <input onChange={onChange} type={type} data-key={dataKey} value={value} />
    </>
  );
}

export default InputGroup;
