import "./styles/Terminal.css";

export default function Rules() {
    return (
        <div style={{ padding: "20px" }}>
            <div className="rules-container">
                <h1 className="rules-title">Rules</h1>
                <h1>Game Rules</h1>

                <h2>Game Context</h2>
                <p>
                    A major corporation believes its system is unbreakable… but you and other young hackers are determined to prove otherwise.
                    To perform the perfect hack, you’ll have to question your underground contacts: 8 expert hackers, each a master of a specific domain.
                </p>
                <p>
                    They will provide clues to help you discover which breach you must exploit to infiltrate the system.
                    But be careful: some of them may lie.
                    Only one also holds the clue revealing which server contains the active vulnerability.
                    Only Big Brother (the logging system) knows who tells the truth.
                    And among the corporation’s critical servers, only one contains the exploitable breach.
                </p>
                <p>
                    👉 The first young hacker to discover the correct breach + the correct target server wins the game.
                </p>

                <h2>Components</h2>
                <ul>
                    <li>1 “Motherboard” game board</li>
                    <li>8 Hacker pawns (players)</li>
                    <li>8 Hacker Allies</li>
                    <li>80 Question Cards</li>
                    <li>40 Allies Cards</li>
                    <li>24 Update Cards</li>
                    <li>Investigation Book</li>
                    <li>4 lists of the 12 breaches</li>
                    <li>4 Server Tokens</li>
                    <li>1 die</li>
                    <li>Investigation Sheets</li>
                    <li>Smartphone for QR validation</li>
                </ul>

                <h2>Setup</h2>
                <p>Each player chooses a pawn, place decks, draw scenario, place allies and servers, give each player a sheet.</p>

                <h2>Turn Structure</h2>
                <ul>
                    <li>Roll the die</li>
                    <li>Move your pawn</li>
                    <li>Depending on your location:
                        <ul>
                            <li>Hacker Ally → draw card, answer question, get clue</li>
                            <li>Big Brother → learn who lies</li>
                            <li>Clue Space → draw Update Card</li>
                        </ul>
                    </li>
                </ul>

                <h2>Final Accusation</h2>
                <p>
                    When a player believes they found the breach + server, they move onto the server and declare their final accusation.
                    They scan the QR code:
                </p>
                <ul>
                    <li>✔️ Correct → they win</li>
                    <li>❌ Incorrect → they are eliminated</li>
                </ul>
            </div>
        </div>
    );
}
