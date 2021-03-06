import PropTypes from 'prop-types';
import React from 'react';
import Svg, { Path } from 'svgs';
import { colors } from '../../../styles';

const SendIcon = ({ color, ...props }) => (
  <Svg height="19" width="20" viewBox="0 0 20 19" {...props}>
    <Path
      d="M19.4626166,17.2313127 C20.1105528,18.4839892 19.5314411,19.2439093 18.1657255,18.9278526 L12.5633573,17.6313414 C11.8806757,17.4733539 11.2644126,16.7898989 11.1843627,16.0824209 L10.293693,8.21071355 C10.0568144,6.11718934 9.67684923,6.10980024 9.44318126,8.21071355 L8.56767366,16.0824209 C8.49010096,16.7798786 7.87131702,17.4735837 7.18780545,17.6313414 L1.57045328,18.9278526 C0.202615344,19.2435561 -0.386727543,18.4951005 0.266955837,17.2313127 L8.69159405,0.94367885 C9.33953012,-0.308997838 10.3842951,-0.32010913 11.0379784,0.94367885 L19.4626166,17.2313127 Z"
      fill={color}
      fillRule="nonzero"
    />
  </Svg>
);

SendIcon.propTypes = {
  color: PropTypes.string,
};

SendIcon.defaultProps = {
  color: colors.white,
};

export default SendIcon;
