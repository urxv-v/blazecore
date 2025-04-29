import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom/client";
import getAll from './api/read';
import { Experiments, TaskStatus } from './interfaces/experiments';
import { CreateExperiment } from './components/CreateItemForm';

const App: React.FC = () => {
  const [data, setData] = useState<Experiments | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchExperiments = async () => {
    setLoading(true);
    try {
      const response = await getAll<Experiments>();
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error("Failed to fetch experiments", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExperiments();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div className="App">
      <div className="mainContainer">
        <div className="header">
          <p>Complete tasks: {data.done}</p>
          <p>Pending tasks: {data.pending}</p>
        </div>
        <CreateExperiment passBackResponse={fetchExperiments} />
      </div>
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} else {
  console.error('Root element not found');
}
