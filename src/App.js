import './App.css';
import  StyledButton,{FancyButton ,Submitbutton} from './components/Button';
function App() {
  return (
   <div>
      <StyledButton>Button</StyledButton>
      <StyledButton variant='outline'>Outline Button</StyledButton>
      <FancyButton>Fancy Button</FancyButton>
      <Submitbutton>Submit</Submitbutton>
    </div>
  );
}

export default App;
