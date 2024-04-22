interface MatchGameDataProps {
  winner: boolean; // Assume winner is a string representing the winning team or null if there's no winner
}

function MatchGameData({ winner }: MatchGameDataProps): JSX.Element {
  return (
    <div>
      <div> is the WINNER</div>
      <div>
        <div>BANS</div>
        <div>PICK</div>
        <div>PICK</div>
        <div>BANS</div>
      </div>
      <div> is the WINNER</div>
    </div>
  );
}

export default MatchGameData;
