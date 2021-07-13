import { useState } from "react";

function StepsDashboardFormField({ label, type, onChange }) {

    const [value, setValue] = useState('');

    const onInput = (event) => {
        const val = event.target.value;

        onChange && onChange(val);
        setValue(val);
    }

    return (
        <div className="StepsDashboard-Field">
            <label>
                {label}
                <input type={type} onChange={onInput} value={value} min="0" step="0.1" required />
            </label>
        </div>
    );
}

export default StepsDashboardFormField;