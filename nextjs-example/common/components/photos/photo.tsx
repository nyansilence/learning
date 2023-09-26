'use client'
import React, { FC, ForwardRefExoticComponent, RefAttributes, forwardRef, useEffect, useState } from "react";
import PhotoList, { IPhotoListProps } from './photo-list';
import Pagination from '../pagination';
import PhotoFilter, { IPhotoFilterProps } from './photo-filter';
import PhotoItem, { IPhotoItemProps } from './photo-item';
interface IPhotoComposition {
  Filter: FC<IPhotoFilterProps>;
  List: FC<IPhotoListProps>;
  Item: FC<IPhotoItemProps>
}

interface IPhotoProps {
  items?: IPhotoAttributes[];
  itemPerPage?: number;
}

const Photo: FC<IPhotoProps> & IPhotoComposition = ({items, itemPerPage = 2}) => {
  const [filterItemName, setFilterItemName] = useState<string>('')
  const [filteredItems, setFilteredItems] = useState<IPhotoAttributes[]>(items as IPhotoAttributes[])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalItems, setTotalItems] = useState<number>(0)

  useEffect(()=>{
    if (filterItemName === '' && items) {
      setFilteredItems(items)
    }
    if(filterItemName && items) {
      const filteredItems = items.filter(item=>item.name === `${filterItemName}`)
      setFilteredItems(filteredItems)
    }
  },[filterItemName])

  useEffect(()=>{
    if(items) {
      setFilteredItems(items)
      setTotalItems(items.length)
    }
  },[items])

  if (!items) return null
  return (
    <>
      <Photo.Filter value={filterItemName} onTextChange={event => setFilterItemName(  event.target.value )} />
      <Photo.List items={filteredItems}/>
      <Pagination
        currentPage={currentPage}
        itemPerPage={itemPerPage}
        // onChange={page => setFilterState({ ...filterState, page })}
        totalItems={totalItems}
      />
    </>
  );
}

Photo.List = PhotoList;
Photo.Filter = PhotoFilter;
Photo.Item = PhotoItem;
Photo.displayName = 'Photo';
export default Photo;
