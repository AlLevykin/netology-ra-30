import React, { useState, useEffect } from "react";
import CardGroup from "../CardGroup";
import Card from "../Card";
import CardHeader from "../Card/CardHeader";
import CardBody from "../Card/CardBody";
import CardFooter from "../Card/CardFooter";
import './App.css';

function App() {

  const [notes, setData] = useState(null);
  const [content, setContent] = useState("");
  const [lastUpdate, update] = useState(Date.now());

  useEffect(() => {
    fetch("/notes")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [lastUpdate]);

  const addHandler = () => {
    content &&
    fetch(`/notes`, { 
      method: "POST",
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({content: content}) 
    }).then(() => {
      setContent("");
      update(Date.now());
    });
  }

  const deleteHandler = (id) => {
    fetch(`/notes/${id}`, { method: "DELETE" })
      .then(update(Date.now()));
  }

  const updateHandler = () => update(Date.now());

  const NoteDate = ({ valueAsNumber }) => {
    const d = new Date(valueAsNumber);
    return d.toLocaleString();
  }

  return (
    <div className="container-fluid">
        <div className="sidebar p-3 border-end border-secondary">
          <div className="row">
            <div className="col">
              <h1 className="text-secondary">Notes</h1>
            </div>
            <div className="col d-flex align-items-center">
              <button type="button" className="btn btn-success btn-sm w-100" onClick={updateHandler}>Обновить</button>
            </div>
          </div>
          <div className="row">
            <form onSubmit={(e) => {
              e.preventDefault();
              addHandler()
            }
            }>
              <label htmlFor="content" className="form-label">Введите текст заметки</label>
              <textarea id="content" className="form-control mb-2" rows="10" value={content} onChange={(e) => setContent(e.target.value)} />
              <button type="submit" className="btn btn-secondary btn-sm w-100">Сохранить</button>
            </form>
          </div>
        </div>
        <div className="content py-3">
          <CardGroup>
            {
              !notes ?
                <p>Loading...</p> :
                notes.map((note) =>
                  <Card key={note.id}>
                    <CardHeader>
                      <NoteDate valueAsNumber={note.date} />
                    </CardHeader>
                    <CardBody>
                      {note.content}
                    </CardBody>
                    <CardFooter className="text-end">
                      <button type="button" className="btn btn-danger btn-sm" onClick={() => deleteHandler(note.id)}>Удалить</button>
                    </CardFooter>
                  </Card>
                )
            }
          </CardGroup>
        </div>
      </div>
  );
}

export default App;
