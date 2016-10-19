import React, { PropTypes } from 'react';
import Header from './Header';

class Page extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

Page.propTypes = {
  children: PropTypes.object.isRequired
};

export default Page;
