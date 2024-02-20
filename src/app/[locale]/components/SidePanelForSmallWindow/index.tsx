import './styles.css';

interface Props {
  children: React.JSX.Element;
}

export default function SidePanelForSmallWindow({ children }: Props): React.JSX.Element {
  return (
    <div className="side-panel">
      {children}
    </div>
  )
}
