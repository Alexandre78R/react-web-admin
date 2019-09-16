//Import de React
import React from 'react';

import {
  Row,
} from 'reactstrap';

class Footer extends React.Component {
  render() {
    return (
      <div>
          {/* <footer className="sticky-footer"> */}
          <footer class="page-footer sticky-footer">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright © ... (En développement)</span>
              </div>
            </div>
          </footer>
      </div>
    );
  }
}

export default Footer;