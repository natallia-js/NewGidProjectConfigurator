import './styles.css';

interface Props {
  children: React.JSX.Element;
}

export default function SidePanelTop({ children }: Props): React.JSX.Element {
  return (
    <div className="side-panel-top">
      {children}
    </div>
  )
}
