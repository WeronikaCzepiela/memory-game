import { Tables } from "../Tables/Tables";
import "./Header.scss";
import { ResetButton } from "../ResetButton/ResetButton";

export const Header = () => {
  return (
    <div className={"header"}>
      <Tables text={"Score"} number={"5"} />
      <ResetButton />
      <Tables text={"Moves"} number={"7"} />
    </div>
  );
};
