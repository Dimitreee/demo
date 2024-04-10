import logo from './logo.svg';
import './App.css';
import {Avatar, Badge, Cell} from "@xelene/tgui";

function App() {
  return (
      <Cell
          after={<Badge type="number">99</Badge>}
          before={<Avatar size={48} />}
          description="Description"
          subhead="Subhead"
          subtitle="Subtitle"
          titleBadge={<Badge type="dot" />}
      >
          Title
      </Cell>
  );
}

export default App;
