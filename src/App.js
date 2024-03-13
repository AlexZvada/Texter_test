import { readFile } from "./helpers/readFile";
import "./App.css";
import { searchHelper } from "./helpers/search";
import { useState, useEffect } from "react";
import List from "./components/list";
import Button from "./components/button";
import Input from "./components/input";
import MyDropzone from "./components/dropzone";
function App() {
  const [data, setData] = useState([]);
  const [uploaded, setUploaded] = useState(false);
  const [currentElement, setCurrentElement] = useState();
  const [active, setActive] = useState(false);
  const uploadHandler = (file) => {
    if (file.name.split(".").pop() === "cer") {
      const reader = new FileReader();
      reader.readAsBinaryString(file);
      reader.onload = function () {
        const obj = readFile(reader, searchHelper);
        if (obj) {
          setData([...data, obj]);
          setUploaded(true);
        }
      };
    }
  };
  useEffect(() => {
    if (localStorage.key("sert")) {
      const json = localStorage.getItem("sert");
      const data = JSON.parse(json);
      setData(data);
      setCurrentElement(data[0]);
      setActive(true);
    }
  }, []);
  useEffect(() => {
    if (uploaded) {
      localStorage.setItem("sert", JSON.stringify(data));
      setCurrentElement(data[data.length - 1]);
    }
    setUploaded(false);
  }, [uploaded, data]);
  return (
    <div className="App">
      <div className="list-wrapper">
        <div className="btn-wrapper">
          {data && data[0] ? (
            <Input uploadHandler={uploadHandler} />
          ) : (
            <Button data={data} active={active} setActive={setActive} />
          )}
        </div>

        <div className="list-wtapper">
          <List
            data={data}
            currentElement={currentElement}
            setCurrentElement={setCurrentElement}
          />
        </div>
      </div>

      <div className={active ? "info active" : "info"}>
        <MyDropzone
          uploadHandler={uploadHandler}
          data={data}
          currentElement={currentElement}
          active={active}
        />
      </div>
    </div>
  );
}

export default App;
