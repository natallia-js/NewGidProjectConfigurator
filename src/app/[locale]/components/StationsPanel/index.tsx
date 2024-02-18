import { useTranslations } from 'next-intl';
import TreeList from '@/localeApp/components/TreeList/index';
import './styles.css';

type Props = {
  stationsList: string[];
}

export default function StationsPanel({ stationsList }: Props): React.JSX.Element {
  const t = useTranslations();

  return (
    <div
      className="stations-panel">
      <div className="stations-panel__title">
        {t('stations')}:
      </div>
      <div>
        <TreeList dataArray={stationsList}/>
      </div>
    </div>
  )
}
