import clsx from "clsx";
import React, { useLayoutEffect } from "react";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.css";
import Cursor from "./Cursor.tsx";

type elementInfo = {
  left: number;
  right: number;
  top: number;
  bottom: number;
  x: number;
  y: number;
};

const ImageContainer = ({
  list,
  color = "yellow",
  index,
  globalOrder,
  setGlobalOrder
}) => {
  const [order, setOrder] = useState(index);
  let [prevPosition, setPrevPosition] = useState({ x: 200, y: 150 });
  const [coords, setCoords] = useState({ x: 200, y: 150 });
  const [canMove, setCanMove] = useState(false);

  // Set initial position of elements
  useEffect(() => {
    if (list[`element${index}`]) {
      setCoords({
        x: list[`element${index}`].x,
        y: list[`element${index}`].y,
      });
    }
  }, [list]);

  // set the order.changed to the new Position where the element was moved
  useEffect(() => {
    let newGlobalOrder = globalOrder
    newGlobalOrder.changed = index
    setGlobalOrder(newGlobalOrder)
  }, [canMove])

  const handleMouseMove = (event) => {
    // Detect mouse above the element
    // It's broken rn because we cant modify the style of the component since we dont have the ref
    // Object.values(list).map(
    //   ({ left, right, top, bottom, x, y }: elementInfo, index: number) => {
    //   if (
    //     left < coords.x &&
    //     coords.x < right &&
    //     top < coords.y &&
    //     coords.y < bottom
    //   ) {
    //     element.style.backgroundColor = "pink";
    //   } else {
    //     element.style.backgroundColor = "purple";
    //   }
    //   console.dir(element)
    // });

    setCoords({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleMouseUp = () => {
    let isPosValid = false;
    setCanMove(false);

    // Checks if the position matches a element and if true, set the "image" position to the near container
    Object.values(list).map(
      ({ left, right, top, bottom, x, y }: elementInfo, index: number) => {
        if (
          left < coords.x &&
          coords.x < right &&
          top < coords.y &&
          coords.y < bottom
        ) {
          setCoords({
            x: x,
            y: y,
          });

          setOrder(index);

          isPosValid = true;
          return;
        }
      }
    );
    
    // if no container is matched, it returns the old position
    if (!isPosValid)
      setCoords({
        ...prevPosition,
      });
  };

  return (
    <>
      <div
        className={clsx(styles["image-container"], {
          [styles.selected]: canMove,
        })}
        style={{
          left: coords.x - 200,
          top: coords.y - 150,
          cursor: canMove ? "none" : "pointer",
          zIndex: canMove ? 2000 : index,
          backgroundColor: color,
          order,
        }}
        onMouseDown={(event) => {
          setCanMove(true);
          setPrevPosition({ x: event.clientX, y: event.clientY });
        }}
        onMouseUp={handleMouseUp}
        onMouseMove={canMove ? handleMouseMove : null}
      >
        Order: {order} <br />
        global: {globalOrder[`element${index}`]} <br />
        Div Index: {index}
      </div>

      <Cursor
        className={styles.icon}
        style={{
          position: "absolute",
          left: coords.x - 15,
          top: coords.y - 15,
          visibility: canMove ? "visible" : "hidden",
        }}
      />
    </>
  );
};

export default ImageContainer;
