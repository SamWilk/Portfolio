import { useEffect, useState } from "react";
import Image from "next/image";

function getWindow() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const BGImage = () => {
  const [width, setWidth] = useState<number>();
  const [height, setHeight] = useState<number>();

  useEffect(() => {
    const { width, height } = getWindow();
    setWidth(width);
    setHeight(height);
  }, []);

  useEffect(() => {
    function handleResize() {
      const { width, height } = getWindow();
      setWidth(width);
      setHeight(height);
    }

    window.addEventListener("rezise", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width && height) {
    return (
      <Image
        styles={"z-index = 0;"}
        src="/Marsh.jpeg"
        width={width}
        height={height}
      />
    );
  }

  return null;
};

export default BGImage;
