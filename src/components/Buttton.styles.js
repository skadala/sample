import styled from 'styled-components';
export const StyledButton=styled.button`
background-color:${(props)=>props.variant==='outline'?'#fff':'#4caf50'};
color:${(props)=>props.variant==='outline'?'#4caf50':'#fff'};
border:2px solid ${(props)=>props.variant==='outline'?'#4caf50':'#fff'};
padding: 15px 32px;
transition:0.5s all ease-out ;
`
export const FancyButton=styled(StyledButton)`
background-image:linear-gradient(to right ,#f6d365 0%,#fda085 100%);
border:2px solid white;`

export const Submitbutton=styled(StyledButton).attrs({type:'submit'})`
box-shadow:0px 5px #666`