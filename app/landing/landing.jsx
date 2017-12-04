import React, {PropTypes} from 'react';

export default class Landing extends React.Component {
  constructor(props) {
    const i=[1,2,3,4];
    const j=[1,2,3];
    super(props);
    this.state=({
      top:i
    });
  }

  render() {
    return (
      <div>
        <div>Home
        </div>
      </div>
    )
  }
}

Landing.propTypes = {
};
