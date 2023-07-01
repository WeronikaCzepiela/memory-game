import "./ResetButton.scss";

const handleReset = () => {};
export const ResetButton = () => {
  return (
    <button className={"restart-button"} onClick={handleReset}>
      <p>Restart</p>
    </button>
  );
};
