import { ChangeEventHandler, FC } from 'react';

export interface IPhotoFilterProps {
  value?: string;
  onTextChange?: ChangeEventHandler<HTMLInputElement>;
}

 const PhotoFilter: FC<IPhotoFilterProps>=({ value, onTextChange }, ref) => {

  return (
    <>
      <label htmlFor="search">Search</label>
      <div>
      <input
        type="text"
        value={value}
        onChange={onTextChange}
        placeholder="Search photos..."
      />
      </div>
    </>
  )
}

PhotoFilter.displayName = 'Photo.Filter'

export default PhotoFilter;
