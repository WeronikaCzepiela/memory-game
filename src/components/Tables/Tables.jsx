import "./Tables.scss";
export const Tables = ({ text, number }) => {
  return (
    <div className={"tables"}>
      <p className={"text"}>{text}</p>
      <p className={"number"}>{number}</p>
    </div>
  );
};
