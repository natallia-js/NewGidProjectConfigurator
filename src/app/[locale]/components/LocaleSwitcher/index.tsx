import LocaleSwitcherSelect from './LocaleSwitcherSelect';

interface Props {
  supportedLocalesArray: string[];
  selectedtLocale: string;
}

export default function LocaleSwitcher({ supportedLocalesArray, selectedtLocale }: Props): React.JSX.Element {
  return (
    <LocaleSwitcherSelect defaultValue={selectedtLocale}>
      {(supportedLocalesArray || []).map((cur) => (
        <option key={cur} value={cur}>
          {cur}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
