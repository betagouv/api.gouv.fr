import React, { useEffect, useState, useCallback, useRef } from "react";
import Router from "next/router";
import { find, throttle } from "lodash";

import Menu from "../menu";

export const ScrollableMenuContext = React.createContext();

const ScrollableMenu = ({ detail, children }) => {
  const refContainer = useRef();
  const [refs, setRefs] = useState({});
  const [currentSection, setCurrentSection] = useState(null);

  const addRef = useCallback(
    ref => {
      const { id, offsetTop, offsetHeight } = ref;
      const offsetTopMarge = offsetTop + refContainer.current.offsetTop;

      refs[id] = {
        id,
        offsetTop: offsetTopMarge,
        offsetBottom: offsetHeight + offsetTopMarge
      };

      setRefs(refs);
    },
    [refs]
  );

  const handleHashChange = () => {
    const { hash } = window.location;

    if (hash) {
      const selected = hash.substr(1);
      setCurrentSection(selected);
    }
  };

  const getSection = useCallback(() => {
    const { scrollY } = window;
    const scrollView = scrollY + refContainer.current.offsetTop + 40;

    return find(
      refs,
      ({ id, offsetTop, offsetBottom }) =>
        id !== currentSection &&
        scrollView > offsetTop &&
        scrollView < offsetBottom
    );
  }, [refs, currentSection]);

  const handleScroll = throttle(() => {
    const currentSection = getSection();
    if (currentSection) {
      setCurrentSection(currentSection.id);
    }
  }, 100);

  useEffect(() => {
    if (currentSection) {
      const hash = window.location.hash ? window.location.hash.substr(1) : null;

      if (hash !== currentSection) {
        window.history.replaceState(undefined, undefined, `#${currentSection}`);
      }
    }
  }, [currentSection]);

  useEffect(() => {
    handleHashChange();
    window.addEventListener("scroll", handleScroll);
    Router.events.on("hashChangeComplete", handleHashChange);

    return () => {
      handleScroll.cancel();
      window.removeEventListener("scroll", handleScroll);
      Router.events.off("hashChangeComplete", handleHashChange);
    };
  }, []);

  return (
    <div className="ui equal width grid padded" ref={refContainer}>
      <div className="four wide column computer only">
        <Menu detail={detail} selected={currentSection} />
      </div>
      <div className="column">
        <ScrollableMenuContext.Provider value={{ addRef }}>
          {children}
        </ScrollableMenuContext.Provider>
      </div>
    </div>
  );
};

export default ScrollableMenu;
