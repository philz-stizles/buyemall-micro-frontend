import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import { mount } from 'auth/AuthUI';

export default ({ onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory();
  // const navigate = useNavigate();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: location => {
        const { pathname: nextPathName } = location;
        const { pathname } = history.location;
        console.log('CONTAINER', pathname, nextPathName);
        if (pathname !== nextPathName) {
          history.push(nextPathName);
          // navigate(nextPathName);
        }
      },
      onSignIn
    });

    history.listen(onParentNavigate);
    // navigate(onParentNavigate);
  }, []);

  return <div ref={ref}></div>;
};
