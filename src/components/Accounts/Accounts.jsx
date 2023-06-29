import GitHub from "./images/GitHub.png";
import LinkdedIn from "./images/LinkedIn.png";
import "./Accounts.scss";
import { useTranslation } from "react-i18next";

export const Accounts = () => {
  const { t } = useTranslation();

  return (
    <div className={"accounts"}>
      <p>{t("accounts")}</p>
      <a target={"_blank"} href={"https://github.com/WeronikaCzepiela"}>
        {" "}
        <img src={GitHub} />{" "}
      </a>
      <a
        target={"_blank"}
        href={"https://www.linkedin.com/in/--weronika-czepiela/"}
      >
        {" "}
        <img src={LinkdedIn} />
      </a>
    </div>
  );
};
