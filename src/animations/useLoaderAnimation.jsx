import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

const useLoaderAnimation = () => {
  const loaderRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (loaderRef.current) {
      const tl = gsap.timeline();

      if (isLoading) {
        tl.to(loaderRef.current, {
          width: "100%", // Assuming loaderRef refers to the loader element
          duration: 0.5,
          ease: "power3.inOut",
        });
      }
    }
  }, [isLoading]);

  return {
    loaderRef,
    setIsLoading,
  };
};

export default useLoaderAnimation;
