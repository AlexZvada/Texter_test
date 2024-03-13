export default function Info(props) {
  const { data, currentElement,  actionHandler } = props;
  return (
    <div>
      <div onDrop={actionHandler}>
        {data && currentElement ? (
          <div>
            <p className="info-text">
              <span className="strong">Common Name:</span>{" "}
              {currentElement.common}
            </p>
            <p className="info-text">
              <span className="strong">Isuer:</span> {currentElement.isuer}
            </p>
            <p className="info-text">
              <span className="strong">Valid From:</span>{" "}
              {currentElement.validFrom}
            </p>
            <p className="info-text">
              <span className="strong">Valid To:</span> {currentElement.validTo}
            </p>
          </div>
        ) : (
          "Drag and drop certificate here... Or click on this field..."
        )}
      </div>
    </div>
  );
}
