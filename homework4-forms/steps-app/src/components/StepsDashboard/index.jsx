import { useState } from 'react';
import './StepsDashboard.css';
import StepsDashboardForm from './StepsDashboardForm';

export const stepsDashboardFields = {
  date: { caption: 'Дата (дд.мм.гггг)', fieldType: 'date', converter: (value) => value.split('-').reverse().join('.') },
  distance: { caption: 'Пройдено км', fieldType: 'number', converter: (value) => Number.parseFloat(value) },
  actions: { caption: 'Действия' }
};

function StepsDashboard() {

  const [steps, setSteps] = useState({});

  const onStepAdd = (step) => {
    setSteps(prev => ({
      ...prev,
      [step.date]: prev[step.date] ? prev[step.date] + step.distance : step.distance
    }));
  }

  const onStepRemove = (step) => {
    setSteps(prev => {
      let next = { ...prev };
      delete next[step]
      return next;
    });
  }

  return (
    <div className="StepsDashboard">
      <header className="StepsDashboard-Header">
        <StepsDashboardForm onSubmit={onStepAdd} />
        <div className="StepsDashboard-Row">
          {Object.keys(stepsDashboardFields).map(field => (
            <div className="StepsDashboard-Cell" key={`table-header-${field}`}>
              {stepsDashboardFields[field].caption}
            </div>
          ))}
        </div>
      </header>
      <main className="StepsDashboard-Main">
        {
          Object.keys(steps).sort(
            (s1, s2) => (s1.split('.').reverse().join('')).localeCompare(s2.split('.').reverse().join(''))
          ).map(
            step => (
              <div className="StepsDashboard-Row" key={`step-${step}`}>
                <div className="StepsDashboard-Cell">{step}</div>
                <div className="StepsDashboard-Cell">{steps[step].toFixed(1)}</div>
                <div className="StepsDashboard-Cell">
                  <button className="StepsDashboard-Action" onClick={() => onStepRemove(step)}><span className="material-icons">clear</span></button>
                </div>
              </div>
            ))
        }
      </main>
    </div>
  );
}

export default StepsDashboard;