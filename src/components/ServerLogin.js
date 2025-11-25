import { useState } from "react";
import "../styles/Terminal.css";

export default function ServerLogin({ validResponses, serverName }) {
  const [step, setStep] = useState(1);
  const [currentInput, setCurrentInput] = useState("");
  const [history, setHistory] = useState([]);
  const [isHacking, setIsHacking] = useState(false);
  const [finished, setFinished] = useState(false);
  const [validatedStory, setValidatedStory] = useState("");


  const pushHistory = (text) => {
    setHistory((prev) => [...prev, text]);
  };

  const handleEnter = () => {
    if (finished) return;

    pushHistory(`> ${currentInput}`);

    if (step === 1) {
      const storyExists = validResponses.some(
        (r) => r.storyName.toLowerCase() === currentInput.toLowerCase()
      );

      if (!storyExists) {
        pushHistory("❌ Wrong story name");
        setFinished(true);
        return;
      }

      pushHistory("Story accepted. Enter breach:");
      setValidatedStory(currentInput); // <-- stocke le storyName
      setStep(2);
      setCurrentInput("");
      return;
    }


    if (step === 2) {
      const match = validResponses.find(
        (r) =>
          r.storyName.toLowerCase() === validatedStory.toLowerCase() &&
          r.breach.toLowerCase() === currentInput.toLowerCase()
      );

      if (!match) {
        pushHistory("❌ Wrong breach");
        setFinished(true);
        return;
      }

      // valid → hacking animation
      setIsHacking(true);
      pushHistory("hacking");

      setTimeout(() => {
        pushHistory(match.successMessage);
        setIsHacking(false);
        setFinished(true);
      }, 2500);

      return;
    }

  };

  return (
    <div className="terminal-window">
      <div className="terminal-header">
        secure-shell://{serverName.replace(" ", "").toLowerCase()}.192.168.0.21
      </div>

      <div className="terminal-output">
        {history.map((line, i) => (
          <div key={i} className={line === "hacking" ? "hacking-dots" : ""}>
            {line}
          </div>
        ))}
      </div>

      {!finished && !isHacking && (
        <div className="terminal-input-line">
          <span>&gt;</span>
          <input
            className="terminal-input"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleEnter()}
            autoFocus
          />
        </div>
      )}
    </div>
  );
}
