import React, { useEffect, useRef, useState } from "react";
import { LeftIcon, RightIcon } from "./components/icons";
import { isArray, numberOnly } from "../../utils/formatersAndParsers";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export default function MyCrousel({
  children,
  leftIconClassName = "",
  rightIconClassName = "",
  countPerRow = 1,
  responsive = [],
}) {
  const windowSize = useWindowDimensions();
  const crouselListRef = useRef(null);
  const [rowStartIndex, setRowStartIndex] = useState(0);
  const [itemsPerRow, setItemsPerRow] = useState(countPerRow || 0);
  const [itemSize, setItemSize] = useState({});
  const [crouselItems, setCrouselItems] = useState(children || {});

  const getElementWidth = () => {
    if (crouselListRef.current) {
      const computedStyle = window.getComputedStyle(crouselListRef.current);
      const itemSpace = computedStyle.getPropertyValue("gap");
      const listContainerWidth = crouselListRef.current.offsetWidth;

      const myItemWidth =
        (listContainerWidth - numberOnly(itemSpace) * (itemsPerRow - 1)) / itemsPerRow;

      const scrollWidth = myItemWidth + Number(numberOnly(itemSpace));

      setItemSize({ width: myItemWidth, transform: scrollWidth });
    }
  };

  const handleRowIndex = (action, index) => {
    const maxIndex = crouselItems?.length;
    let startIndex = 0;

    if (action === "increase") {
      if (rowStartIndex === maxIndex - itemsPerRow) {
        startIndex = maxIndex - itemsPerRow;
      } else {
        startIndex = rowStartIndex + 1;
      }
    } else if (action === "decrease") {
      if (rowStartIndex === 0) {
        startIndex = 0;
      } else {
        startIndex = rowStartIndex - 1;
      }
    }

    setRowStartIndex(startIndex);

    if (crouselListRef.current) {
      crouselListRef.current.style.transform = `translateX(-${itemSize.transform * startIndex}px)`;
    }
  };

  useEffect(() => {
    if (responsive && windowSize.width) {
      for (let response of isArray(responsive)) {
        if (response.breakPoint <= windowSize.width) {
          setItemsPerRow(response.countPerRow);
        }
      }
    }
  }, [responsive, windowSize.width]);

  useEffect(() => {
    getElementWidth();
  }, [crouselListRef, itemsPerRow]);

  useEffect(() => {
    setCrouselItems(children);
  }, children);

  return (
    <div className="myCrousel">
      {Array.isArray(crouselItems) && crouselItems?.length > 0 && (
        <LeftIcon
          className={leftIconClassName}
          onClick={() => {
            handleRowIndex("decrease");
          }}
        />
      )}
      <div className="myCrouselItemsContainer">
        {Array.isArray(crouselItems) && crouselItems?.length > 0 ? (
          <div className="myCrouselItemList" ref={crouselListRef}>
            {crouselItems.map((child, i) => (
              <div className="myCrouselItem" style={{ width: itemSize?.width || 0 }}>
                {child}
              </div>
            ))}
          </div>
        ) : (
          crouselItems
        )}
      </div>

      {Array.isArray(crouselItems) && crouselItems?.length > 0 && (
        <RightIcon
          className={rightIconClassName}
          onClick={() => {
            handleRowIndex("increase");
          }}
        />
      )}
    </div>
  );
}
