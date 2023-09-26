import Photo from '@/common/components/photos/photo'

export default function Home() {
  const items: IPhotoAttributes[] = [{
    id: 'one',
    url: 'url.com',
    name: 'one'
  },
  {
    id: 'two',
    url: 'url.com',
    name: 'two'
  },
  {
    id: 'three',
    url: 'url.com',
    name: 'three'
  }]
  return (
    <Photo items={items}/>
  )
}
