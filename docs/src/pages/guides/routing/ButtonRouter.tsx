import * as React from 'react';
import { MemoryRouter as Router } from 'react-router';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import Button from '@mui/material/Button';

const LinkBehavior = React.forwardRef<any, Omit<RouterLinkProps, 'to'>>(
  (props, ref) => <RouterLink ref={ref} to="/" {...props} role={undefined} />,
);

export default function ButtonRouter() {
  return (
    <div>
      <Router>
        <Button component={RouterLink} to="/">
          With prop forwarding
        </Button>
        <br />
        <Button component={LinkBehavior}>With inlining</Button>
      </Router>
    </div>
  );
}
