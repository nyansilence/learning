import { ICoreUIBaseProps } from '@/common/types';
import React, { FC } from 'react';



export interface IPhotoItemProps extends ICoreUIBaseProps {
  item: IPhotoAttributes
}

const PhotoItem: FC<IPhotoItemProps> =({ item }) => {
  return (
    <li>
      {item.name}
    </li>
  )
}

PhotoItem.displayName = 'Photo.Item';

export default PhotoItem;
