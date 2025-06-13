import React, { useState } from "react";

function DynamicInputForm() {
  const [inputs, setInputs] = useState([{ value: "" }]);
  const [sum, setSum] = useState(0);
  const [average, setAverage] = useState(0);

  // Add a new input field
  const handleAddInput = () => {
    const updatedInputs = inputs.slice();
    updatedInputs.push({ value: "" });
    setInputs(updatedInputs);
  };

  // Remove an input field by index
  const handleRemoveInput = (index) => {
    const updatedInputs = inputs.slice();
    updatedInputs.splice(index, 1);
    setInputs(updatedInputs);
    calculateSumAndAverage(updatedInputs);
  };

  // Handle input change
  const handleChange = (index, event) => {
    const updatedInputs = inputs.slice();
    updatedInputs[index].value = event.target.value;
    setInputs(updatedInputs);
    calculateSumAndAverage(updatedInputs);
  };

  // Calculate sum and average
  const calculateSumAndAverage = (inputArray) => {
    const values = inputArray
      .map((input) => parseFloat(input.value))
      .filter((val) => !isNaN(val));
    const total = values.reduce((a, b) => a + b, 0);
    const avg = values.length > 0 ? (total / values.length).toFixed(2) : 0;
    setSum(total);
    setAverage(avg);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Values:", inputs.map((input) => input.value));
    alert(`Sum: ${sum}, Average: ${average}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Enter Marks</h2>
      <form onSubmit={handleSubmit}>
        {inputs.map((input, index) => (
          <div key={index}>
            <input
              type="number"
              placeholder={`Enter mark ${index + 1}`}
              value={input.value}
              onChange={(event) => handleChange(index, event)}
              required
            />
            <button type="button" onClick={() => handleRemoveInput(index)}>
              Remove
            </button>
            <br />
          </div>
        ))}
        <button type="button" onClick={handleAddInput}>
          Add Input Field
        </button>
        &nbsp;
        <button type="submit">Submit</button>
      </form>

      <div style={{ marginTop: "20px" }}>
        <p><strong>Sum:</strong> {sum}</p>
        <p><strong>Average:</strong> {average}</p>
      </div>
    </div>
  );
}

export default DynamicInputForm;
