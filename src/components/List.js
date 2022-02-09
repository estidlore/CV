import {Fragment} from 'react';
import Text from './Text';

const defRenderItem = el => (
  <Text>{el}</Text>
);

const List = ({data, renderItem = defRenderItem}) => (
  <>
    {
      data.map((el, i) => (
        <Fragment key={i}>
          {renderItem(el)}
        </Fragment>
      ))
    }
  </>
);

export default List;
