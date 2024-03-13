export default function Input(props) {
  const { uploadHandler } = props;
  return (
    <>
      <div className="label-wrapper">
        <label htmlFor="file" className="file-label btn">
          Додати
        </label>
      </div>
      <input type="file" id="file" onChange={(e) => uploadHandler(e.target.files[0])} />
    </>
  );
}
