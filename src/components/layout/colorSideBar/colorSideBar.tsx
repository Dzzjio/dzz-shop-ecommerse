import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ColorSidebarContainer } from "./styled";
import { faMagnifyingGlass, faSliders } from "@fortawesome/free-solid-svg-icons";
import RangeSlider from "./rangeSlider/rangeSlider";
import ChooseColor from "./chooseColor/chooseColor";
import ChooseSize from "./chooseSize/chooseSize";
import Categories from "./categories/categories";
import Tags from "./tags/tags";
import { useEffect, useState } from "react";

interface IFilter {
  search: string;
  color: string;
  size: string;
  category: string;
  tags: string;
}

const ColorSidebar = () => {
  const initialFilters: IFilter = {
    search: "",
    color: "",
    size: "",
    category: "",
    tags: "",
  };

  const [filters, setFilters] = useState<IFilter>(initialFilters);

  useEffect(() => {
    // api send back filters
    console.log(filters);
  }, [filters]);

  const updateFilter = (key: keyof IFilter, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  };

  const resetFilters = () => {
    setFilters(initialFilters);
    window.history.replaceState({}, document.title, window.location.pathname);
  };

  return (
    <ColorSidebarContainer>
      <div className="filters">
        <FontAwesomeIcon icon={faSliders} className="filter-icon" />
        <span>Filters</span>
      </div>

      <form className="search-form">
        <input
          value={filters.search}
          onChange={(e) => updateFilter("search", e.target.value)}
          type="text"
          placeholder="Search product"
        />
        <div className="search-icon-div">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </form>

      <RangeSlider />
      <ChooseColor onChange={(value: string) => updateFilter("color", value)} />
      <ChooseSize onChange={(value: string) => updateFilter("size", value)} />
      <Categories onChange={(value: string) => updateFilter("category", value)} />
      <Tags onChange={(value: string) => updateFilter("tags", value)}/>

      <button className="reset-button" onClick={resetFilters}>Reset</button>
    </ColorSidebarContainer>
  );
};

export default ColorSidebar;