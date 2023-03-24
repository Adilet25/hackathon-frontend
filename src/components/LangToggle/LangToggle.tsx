import dropdownStyled from "../LangToggle/LangToggle.module.scss";

const LangToggle = () => {
  return (
    <div className={dropdownStyled.Dropdown}>
      <div className="dropdown-element" data-lang-code="ru">
        RU
      </div>

      <div className="dropdown-element" data-lang-code="en">
        EN
      </div>

      <div className="dropdown-element" data-lang-code="kg">
        KG
      </div>
    </div>
  );
};

export default LangToggle;
