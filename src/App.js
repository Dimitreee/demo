import logo from './logo.svg';
import {Avatar, Badge, Button, Cell} from "@xelene/tgui";
import './App.css';

function App() {
  return (
      <Cell
          after={<Button onClick={() => {alert("Hello world")}} mode={"filled"}>Click Me</Button>}
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
