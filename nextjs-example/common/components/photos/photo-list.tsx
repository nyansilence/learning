import { FC } from 'react';
import { ICoreUIBaseProps } from '@/common/types';
import Photo from './photo';

export interface IPhotoListProps extends ICoreUIBaseProps {
  items: IPhotoAttributes[];
}

const PhotoList: FC<IPhotoListProps> = ({ items }) => {
  return (
    <ol>
      {items.map((item) => (
        <Photo.Item item={item} key={item.id} />
      ))}
    </ol>
  );
}

PhotoList.displayName = 'Photo.List';

export default PhotoList;
