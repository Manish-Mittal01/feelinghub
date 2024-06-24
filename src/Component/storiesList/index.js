import React, { useState } from "react";
import StoryCard from "./components/storyCard";
import { defaultPage, limitOptions } from "../../utils/constants";
import MyPagination from "../common/pagination";
import MySelect from "../common/mySelect";

export default function StoriesList({ className, darkPagination = false }) {
  const [paginationDetails, setPaginationDetails] = useState(defaultPage);

  const handleLimit = (selected) => {
    setPaginationDetails((prev) => ({ ...prev, limit: selected.value }));
  };

  return (
    <>
      <section className="storiesListContainer">
        <div className={`homeBanner ${className} px-4 px-lg-5`}>
          {Array.from({ length: 3 }).map((_) => (
            <StoryCard />
          ))}
          <div className="d-flex justify-content-between mb-3">
            <div>
              <MySelect
                classNamePrefix={darkPagination ? "darkSelect" : "mySelect"}
                options={limitOptions}
                isSearchable={false}
                value={{ value: paginationDetails.limit, label: paginationDetails.limit }}
                onChange={(selected) => handleLimit(selected)}
              />
            </div>
            <MyPagination
              paginationDetails={paginationDetails}
              setPaginationDetails={setPaginationDetails}
              totalCount={12}
              darkPagination={darkPagination}
            />
          </div>
        </div>
      </section>
    </>
  );
}
