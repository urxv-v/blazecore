import React, { useState } from 'react';
import { createExperimentItemCall } from "../api/create";

interface CreateExperimentProps {
  passBackResponse: () => void; // changed: no parameter
}

export const CreateExperiment: React.FC<CreateExperimentProps> = ({ passBackResponse }) => {
  const [name, setName] = useState<string>("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const createItem = async () => {
    try {
      const response = await createExperimentItemCall(name);
      setName("");
      if (response.data) {
        passBackResponse(); // trigger refetch
      } else if (response.error) {
        console.error(`Error ${response.status}: ${response.error}`);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <div className="inputContainer">
      <input type="text" id="name" placeholder="create experiment" value={name} onChange={handleNameChange} />
      <button className="actionButton" id="create-button" onClick={createItem}>
        Create
      </button>
    </div>
  );
};
