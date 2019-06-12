import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../vendor/bootstrap/css/bootstrap.min.css';

import '../vendor/fontawesome-free/css/all.min.css';

import '../vendor/datatables/dataTables.bootstrap4.css';

import '../css/sb-admin.css';
// import './App.css';

class Footer extends React.Component {
  render() {
    return (
    <div>
                <footer class="sticky-footer">
          <div class="container my-auto">
            <div class="copyright text-center my-auto">
              <span>Copyright © ... (En développement)</span>
            </div>
          </div>
        </footer>
    </div>
    );
  }
}

export default Footer;