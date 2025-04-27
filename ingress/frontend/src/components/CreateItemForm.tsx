import React, { useState } from 'react';
import { createExperimentItemCall } from "../api/create";

interface createExperimentProps {
  passBackResponse: (response: any) => void;
}

export const CreateExperiment: React.FC<createExperimentProps> = (
	{ passBackResponse }
) => {
  const [name, setName] = useState<string>("");
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const createItem = async () => {
    await createExperimentItemCall(name).then(response => {
      setName("");
      if (response.data) {
        passBackResponse(response.data);
      } else if (response.error) {
        console.log(response);
        console.log(`Error ${response.status}: ${response.error}`);
      }
    });
  };

  return (
    <div className="inputContainer">
      <input type="text" id="name" placeholder="create experiment" value={name} onChange={handleNameChange} />
      <button className="actionButton" id="create-button" onClick={createItem}> Create </button>
    </div>
  );
};
