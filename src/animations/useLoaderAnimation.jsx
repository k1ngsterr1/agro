import { useRef, useEffect } from "react";
import gsap from "gsap";

export const useLoaderAnimation = () => {
  const loaderRef = useRef < HTMLDivElement > null;

  useEffect(() => {
    if (loaderRef.current) {
      const tl = gsap.timeline();

      const isLoading = ({ loader }) => loader.isLoading;

      if (isLoading) {
        tl.to(loaderRef.current, {
          y: 0,
          duration: 0.5,
          ease: "power3.inOut",
        });
      } else {
        tl.to(loaderRef.current, {
          y: 1500,
          duration: 0.5,
          ease: "power3.inOut",
        });
      }
    }
  }, [loaderRef]);

  return { loaderRef };
};

const LoaderComponent = () => {
  const { loaderRef } = useLoaderAnimation();

  return <div ref={loaderRef}></div>;
};

export default LoaderComponent;
