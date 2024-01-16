import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class FootSteps extends PureComponent {
  render() {
    const { name } = this.props;
    const { number } = this.props;
    const cls = `fp-footsteps fp-footsteps-${number}`;
    return (
      <div className={cls}>
        <div className="fp-footstep left" />
        <div className="fp-footstep right" />
        <div className="fp-scroll-name">
          <p>{name}</p>
        </div>
      </div>
    );
  }
}

FootSteps.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired
};