import "./Filter.css";

interface FilterOption {
  name: string;
  options: string[];
}

interface FilterProps {
  filters: FilterOption[];
}

function Filter({ filters }: FilterProps): JSX.Element {
  return (
    <div className="filter-container">
      {filters.map((filter, index) => (
        <select key={index} className="filter-item" name="slct" id="slct">
          <h3>{filter.name}</h3>
          {filter.options.map((option, optionIndex) => (
            <option key={optionIndex} className="filter-option">
              {option}
            </option>
          ))}
        </select>
      ))}
    </div>
  );
}

export default Filter;
