import { useState } from "react";

export default function ServerLogin({ validResponses, serverName }) {
  const [step, setStep] = useState(1);
  const [storyName, setStoryName] = useState("");
  const [breach, setBreach] = useState("");
  const [message, setMessage] = useState("");

  const handleStep1 = () => {
    // vérifier si le storyName existe dans les bonnes réponses
    const storyExists = validResponses.some(
      (r) => r.storyName.toLowerCase() === storyName.toLowerCase()
    );

    if (!storyExists) {
      setMessage("❌ Wrong story name");
      return;
    }

    // continuer vers la deuxième étape
    setStep(2);
  };

  const handleLogin = () => {
    const isValid = validResponses.some(
      (r) =>
        r.storyName.toLowerCase() === storyName.toLowerCase() &&
        r.breach.toLowerCase() === breach.toLowerCase()
    );

    if (isValid) {
      setMessage(`✔️ Login success on ${serverName}!`);
    } else {
      setMessage("❌ Wrong breach");
    }
  };

  const showInputs = message === "";

  return (
    <div style={{ padding: 20 }}>
      <h2>{serverName}</h2>

      {showInputs && step === 1 && (
        <div>
          <label>Name of the story:</label>
          <input
            type="text"
            value={storyName}
            onChange={(e) => setStoryName(e.target.value)}
          />
          <button onClick={handleStep1}>Next</button>
        </div>
      )}

      {showInputs && step === 2 && (
        <div>
          <label>Breach you want to use:</label>
          <input
            type="text"
            value={breach}
            onChange={(e) => setBreach(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}

      {message && <p>{message}</p>}
    </div>
  );
}
