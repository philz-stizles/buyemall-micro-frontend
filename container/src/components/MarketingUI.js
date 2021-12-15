import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { mount } from 'marketing/MarketingUI';

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: location => {
        const { pathname: nextPathName } = location;
        const { pathname } = history.location;
        if (pathname !== nextPathName) {
          history.push(nextPathName);
        }
      }
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref}></div>;
};
