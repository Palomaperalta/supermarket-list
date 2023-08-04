import * as React from "react";
import "./App.css";
import Modal from "./components/Modal/Modal";

const App = () => {
  const [show, setShow] = React.useState(false);
  const [lista, setLista] = React.useState([]);

  const handleDelete = (index) => {
    const copialista = [...lista];
    copialista.splice(index, 1);
    setLista(copialista);
  };

  return (
    <main className="container">
      <h1>Supermarket list</h1>
      <div className="items">
        <span>{lista.length} item(s)</span>
        {lista.map((item, index) => {
          return (
            <div key={item} className="divitem">
              <span className="spanitem">{item}</span>
              <button
                onClick={() => handleDelete(index)}
                className="buttondelete"
              >
                delete
              </button>
            </div>
          );
        })}
      </div>
      <button className="additem" onClick={() => setShow(true)}>
        Add item
      </button>
      <Modal
        show={show}
        onClose={() => setShow(false)}
        onSubmit={(item) => {
          console.log(item);
          setLista([...lista, item]);
          setShow(false);
        }}
        title="Add item"
      ></Modal>
    </main>
  );
};

export default App;
