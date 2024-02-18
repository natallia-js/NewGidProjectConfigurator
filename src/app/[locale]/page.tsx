import StationsPanel from '@/localeApp/components/StationsPanel/index';
//import GridExample from '@/localeApp/components/GridExample';
import Spinner from '@/localeApp/components/Spinner';

export default function Home() {
  return (
    <div data-testid="main-div"
      className="grow flex flex-col sm:flex-row">
      <div
        className="w-full sm:w-80 h-80 sm:h-full">
        <StationsPanel stationsList={['станция 1','станция 2','станция 3']} />
      </div>
      <div
        className="w-full h-full bg-page">
        {/*<GridExample/>*/}
      </div>
    </div>
  )
}
