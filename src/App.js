import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <div className="box">
        <h1 className="title">
          <a href="https://www.npmjs.com/package/strong-password-check">🔗 Strong-Password-check</a>
        </h1>
        <div>
          <label>
            <input type="checkbox" id="lowercaseCheckbox" /> Lowercase
          </label>
          <br />
          <label>
            <input type="checkbox" id="uppercaseCheckbox" /> Uppercase
          </label>
          <br />
          <label>
            <input type="checkbox" id="digitsCheckbox" /> Digits
          </label>
          <br />
          <label>
            <input type="checkbox" id="specialCharsCheckbox" /> Special
            Characters
          </label>
          <br />
          <label>
            Minimum Length:
            <input type="number" id="minLengthInput" defaultValue={8} min={1} />
          </label>
          <br />
          <label htmlFor="">
            Test :
            <input
              type="text"
              id="password"
              placeholder="Enter your password"
            />
          </label>
          <button onclick="handleCheckPasswordStrength()">
            Check Password Strength
          </button>
          <p id="passwordStrengthResult" />
        </div>
      </div>
    </div>
  );
}

export default App;
