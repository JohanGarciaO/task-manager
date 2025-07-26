import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-700 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Type your task`s name"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Type your task`s description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim()) {
            return alert("You must fill in at least the name");
          }

          setTitle("");
          setDescription("");
          onAddTaskSubmit({ title, description });
        }}
        className="bg-slate-950 text-white px-4 py-2 rounded-md font-medium border border-slate-950 active:border-slate-100 hover:bg-gray-950"
      >
        Add
      </button>
    </div>
  );
}

export default AddTask;
