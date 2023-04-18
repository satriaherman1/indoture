import { gsap } from "gsap";
import { useEffect } from "react";

export interface IGsapNavbar {
  deps?: string[];
  smallNavBgRef: React.MutableRefObject<null>;
  smallNavRef: React.MutableRefObject<null>;
  openNav: boolean;
}

export default function useGsapNavbar({ deps, smallNavBgRef, smallNavRef, openNav }: IGsapNavbar) {
  useEffect(() => {
    if (openNav) {
      gsap.fromTo(smallNavBgRef.current, { opacity: 0 }, { borderRadius: 0, opacity: 1, width: "100vw", height: "calc(100vh - 69px)", top: "69px" });
      gsap.fromTo(
        smallNavRef.current,
        { width: 0, height: 0 },
        {
          width: "100vw",
          height: "90vh",
        },
      );
      gsap.fromTo(
        ".nav-list-small-gsap-active",
        {
          opacity: 0,
          marginTop: "20px",
        },
        {
          duration: 0.3,
          opacity: 1,
          marginTop: 0,
        },
      );
      gsap.fromTo(
        ".nav-list-small-gsap-0",
        {
          opacity: 0,
          marginTop: "20px",
        },
        {
          duration: 0.3,
          opacity: 1,
          marginTop: 0,
        },
      );
      gsap.fromTo(
        ".nav-list-small-gsap-1",
        {
          opacity: 0,
          marginTop: "20px",
        },
        {
          duration: 0.3,
          opacity: 1,
          marginTop: 0,
        },
      );
      gsap.fromTo(
        ".nav-list-small-gsap-2",
        {
          opacity: 0,
          marginTop: "20px",
        },
        {
          duration: 0.3,
          opacity: 1,
          marginTop: 0,
        },
      );
    } else {
      gsap.to(smallNavRef.current, {
        delay: 0.2,
        width: 0,
        height: 0,
      });
      gsap.to(smallNavBgRef.current, {
        delay: 0.2,
        opacity: 0,
        height: 0,
        top: 0,
      });

      // nav list
      gsap.to(".nav-list-small-gsap-active", 0.2, {
        duration: 0.2,
        opacity: 0,
        marginTop: "20px",
      });
      gsap.to(".nav-list-small-gsap-0", 0.2, {
        opacity: 0,
        marginTop: "20px",
      });

      gsap.to(".nav-list-small-gsap-1", 0.2, {
        opacity: 0,
        marginTop: "20px",
      });

      gsap.to(".nav-list-small-gsap-2", 0.2, {
        opacity: 0,
        marginTop: "20px",
      });
    }
  }, [openNav]);
}
