const RadioGroup = ({
  radioGroupName,
  elements,
  onChange,
  unselectValue = null,
}) => {
  const renderUnselectValue = () => {
    if (!unselectValue) return;

    return (
      <div className="form-check">
        <input
          type="radio"
          className="form-check-input"
          id={radioGroupName + "unselect"}
          name={radioGroupName}
          onClick={() => onChange(null)}
        />
        <label
          className="form-check-label"
          htmlFor={radioGroupName + "unselect"}
        >
          {unselectValue}
        </label>
      </div>
    );
  };

  return (
    <div>
      {renderUnselectValue()}
      {elements.map((element, index) => {
        return (
          <div key={radioGroupName + index} className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id={radioGroupName + index}
              name={radioGroupName}
              onClick={() => onChange(element)}
            />
            <label
              className="form-check-label"
              htmlFor={radioGroupName + index}
            >
              {element}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default RadioGroup;
