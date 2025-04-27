import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import getAll from './api/read';
import { ExperimentItem } from './interfaces/experiments';

const App: React.FC = () => {
  const [data, setData] = useState<ExperimentItem[] | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await getAll();
      setData(response.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <div>Data loaded: {JSON.stringify(data)}</div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
