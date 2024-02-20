import SidePanel from '@/localeApp/components/SidePanel/index';
import TreeList from '@/localeApp/components/TreeList/index';
//import GridExample from '@/localeApp/components/GridExample';

export default function Home() {
  return (
    <div className="home-page">
      <div className="w-full sm:w-80 h-80 sm:h-full">
        <SidePanel>
          <TreeList dataArray={['station1', 'station2', 'station3']}/>
        </SidePanel>
      </div>
      <div
        className="w-full h-full bg-page">
        {/*<GridExample/>*/}
      </div>
    </div>
  )
}
