import React from 'react';
import MList from '@material-ui/core/List';
import { arrayOf, any, func } from 'prop-types';

const List = ({ data, renderItem, ...others }) => (
  <MList {...others}>{data.map(renderItem)}</MList>
);

List.defaultProps = {
  data: [],
};

List.propTypes = {
  data: arrayOf(any),
  renderItem: func.isRequired,
};

export default List;
