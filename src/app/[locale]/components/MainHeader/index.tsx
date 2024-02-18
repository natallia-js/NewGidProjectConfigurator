import { useLocale, useTranslations } from 'next-intl';
import DarkLightModeSwitcher from '@/localeApp/components/DarkLightModeSwitcher/index';
import LocaleSwitcher from '@/localeApp/components/LocaleSwitcher/index';
import RouteBtn from '@/localeApp/components/RouteBtn/index';
import MainPageTransferrer from '@/localeApp/components/MainPageTransferrer/index';
import { RealPathnames, supportedLocalesArray } from '@/constants';
import './styles.css';

export default function MainHeader(): React.JSX.Element {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div
      className="main-header">
      <div
        className="main-header__main-page-transferrer-container">
        <MainPageTransferrer
          appName={t('app_name')}
          currentLocale={locale}
          mainPageHref={RealPathnames.Main}/>
      </div>
      <div
        className="main-header__actions-container">
        <div className="mr-2">
          <RouteBtn
            title={t('help.btn_title')}
            currentLocale={locale}
            href={RealPathnames.Help}/>
        </div>
        <div className="main-header__locale-switcher-container">
          <LocaleSwitcher
            supportedLocalesArray={supportedLocalesArray}
            selectedtLocale={locale}/>
        </div>
        <div>
          <DarkLightModeSwitcher />
        </div>
      </div>
    </div>
  )
}
