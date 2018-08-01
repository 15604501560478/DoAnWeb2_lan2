import React from 'react';
class footer extends Component {
    render() {
      return (
  
        <footer className="main-footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6">
                <p>Your company © 2017-2019</p>
              </div>
              <div className="col-sm-6 text-right">
                <p>Design by <a href="https://bootstrapious.com" className="external">Bootstrapious</a></p>
                {/* Please do not remove the backlink to us unless you support further theme's development at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)*/}
              </div>
            </div>
          </div>
        </footer>
      );
    }
  }
  export default footer;