import SidePanel from '@/localeApp/components/SidePanel/index';
import SidePanelTop from '@/localeApp/components/SidePanelTop/index';
import TreeList from '@/localeApp/components/TreeList/index';
//import GridExample from '@/localeApp/components/GridExample';
import './styles.css';

export default function Home() {
  return (
    <div className="home-page">
      <div className="home-page__side-panel-left">
        <SidePanel>
          <TreeList dataArray={['station1', 'station2', 'station3']}/>
        </SidePanel>
      </div>
      <div className="home-page__side-panel-top">
        <SidePanelTop>
          <TreeList dataArray={['station1', 'station2', 'station3']}/>
        </SidePanelTop>
      </div>
      <div className="home-page__main-block">
        {/*<GridExample/>*/}
        Hello
      </div>
    </div>
  )
}
