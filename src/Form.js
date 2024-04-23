import "./Form.css";
import Moadal from "./Modal";
import { useState } from "react";

function Form() {
  const [form, setForm] = useState({
    name: "",
    phoneNumber: "",
    age: 0,
    isEmployee: false,
    salary: "",
  });

  const [showMoadal, setShowModal] = useState(false);

  const [errorMessage, setErrorMessage] = useState(null);

  function handleClick(event) {
    event.preventDefault();

    setErrorMessage(null);

    const { age, phoneNumber } = form;

    if (age < 18 || age > 100) {
      setErrorMessage("The Age is Not Allowed");
    } else if (Number(phoneNumber) !== NaN) {
      if (phoneNumber.length < 10 || phoneNumber.length > 12) {
        setErrorMessage(" Phone Number is Incorrect ");
      }
    }

    setShowModal(true);
  }

  function handleShowModal() {
    if (showMoadal) {
      setShowModal(false);
    }
  }

  return (
    <div className="content" onClick={handleShowModal}>
      <h1>Requesting a Loan</h1>
      <hr />
      <form>
        <div>
          <label>Name:</label>
          <br />
          <input
            autoFocus
            value={form.name}
            onChange={(event) => {
              setForm({ ...form, name: event.target.value });
            }}
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <br />
          <input
            type="phone"
            value={form.phoneNumber}
            onChange={(event) => {
              setForm({ ...form, phoneNumber: event.target.value });
            }}
          />
        </div>
        <div>
          <label>Age:</label>
          <br />
          <input
            type="number"
            min={0}
            max={100}
            value={form.age}
            onChange={(event) => {
              setForm({ ...form, age: event.target.value });
            }}
          />
        </div>
        <div>
          <label htmlFor="checkbox">Are You An Employee?</label>
          <br />
          <input
            type="checkbox"
            id="checkbox"
            value={form.isEmployee}
            onChange={(event) => {
              setForm({ ...form, isEmployee: event.target.checked });
            }}
          />
        </div>
        <div>
          <label>Salary</label>
          <br />
          <select
            value={form.salary}
            onChange={(event) => {
              setForm({ ...form, salary: event.target.value });
            }}
          >
            <option>less than 500$</option>
            <option>between 500$ And 2000$</option>
            <option>above 2000$</option>
          </select>
        </div>
        <button
          className={
            form.name.length > 1 && form.phoneNumber.length > 1 && form.age > 0
              ? ""
              : "disabled"
          }
          disabled={
            !(
              form.name.length > 1 &&
              form.phoneNumber.length > 1 &&
              form.age > 0
            )
          }
          onClick={handleClick}
        >
          Click
        </button>
      </form>
      <Moadal errorMessage={errorMessage} isVisible={showMoadal} />
    </div>
  );
}

export default Form;
