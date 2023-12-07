export function UserInput({onChange, userInput}) {


  return (
      <section id="user-input">
        <div className="input-group">
          <p>
            <label>Initial Investment</label>
            <input
                onChange={(e) => onChange('initialInvestment', e.target.value)}
                required type="number"
                value={userInput.initialInvestment}
            />
          </p>
          <p>
            <label>Annual Investment</label>
            <input
                onChange={(e) => onChange('annualInvestment', e.target.value)}
                required
                value={userInput.annualInvestment}
                type="number"
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>Expected Return</label>
            <input
                onChange={(e) => onChange('expectedReturn', e.target.value)}
                value={userInput.expectedReturn}
                required
                type="number"/>
          </p>
          <p>
            <label>Duration</label>
            <input
                onChange={(e) => onChange('duration', e.target.value)}
                value={userInput.duration}
                required
                type="number"/>
          </p>
        </div>
      </section>
  )
}