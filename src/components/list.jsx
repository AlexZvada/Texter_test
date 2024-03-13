// import { FileUploader } from "react-drag-drop-files";

export default function List(props) {
  const { data, currentElement, setCurrentElement } = props;
  return (
    <div>
      {data && data[0] ? (
        <ul className="list">
          {data.map((el, i) => (
            <li
              key={i}
              onClick={() => {
                setCurrentElement(data[i]);
              }}
              className={
                currentElement === data[i] ? "active list-item" : "list-item"
              }
            >
              {el.common}
            </li>
          ))}
        </ul>
      ) : (
        "No results yet"
      )}
    </div>
  );
}
