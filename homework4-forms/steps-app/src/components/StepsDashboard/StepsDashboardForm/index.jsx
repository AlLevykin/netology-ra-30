import { useState } from 'react';
import { stepsDashboardFields } from '../../StepsDashboard';
import StepsDashboardFormField from '../StepsDashboardFormField';

function StepsDashboardForm({ onSubmit }) {

    const [newStep, setForm] = useState({});

    const onChangeHandler = (field) => {
        return (value) => {
            setForm(prev => ({ ...prev, [field]: stepsDashboardFields[field].converter(value) }));
        }
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        (onSubmit && newStep.date && newStep.distance ) && onSubmit(newStep);
    };

    return (
        <form className="StepsDashboard-Form" onSubmit={onFormSubmit}>
            <div className="StepsDashboard-Row">
                {Object.keys(stepsDashboardFields).map(field => (
                    stepsDashboardFields[field].fieldType && (
                        <div className="StepsDashboard-Cell" key={`form-field-${field}`}>
                            <StepsDashboardFormField
                                type={stepsDashboardFields[field].fieldType}
                                label={stepsDashboardFields[field].caption}
                                onChange={onChangeHandler(field)}
                            />
                        </div>)
                ))}
                <div className="StepsDashboard-Cell">
                    <input type="submit" value="Ok" className="StepsDashboard-Button" />
                </div>
            </div>
        </form>
    );
}

export default StepsDashboardForm;