import Button from './Boton';
import './PanelDeBotones.css';

export default function PanelDeBotones({ clickHandle }) {
  const handleClick = (nombreDeBoton) => clickHandle(nombreDeBoton);

  return (
    <div className='component-button-panel'>
      <div>
        <Button name='AC' clickHandle={handleClick} gray />
        <Button name='+/-' clickHandle={handleClick} gray />
        <Button name='%' clickHandle={handleClick} gray />
        <Button name='/' clickHandle={handleClick} orange />
      </div>
      <div>
        <Button name='7' clickHandle={handleClick} gray />
        <Button name='8' clickHandle={handleClick} gray />
        <Button name='9' clickHandle={handleClick} gray />
        <Button name='x' clickHandle={handleClick} orange />
      </div>
      <div>
        <Button name='4' clickHandle={handleClick} gray />
        <Button name='5' clickHandle={handleClick} gray />
        <Button name='6' clickHandle={handleClick} gray />
        <Button name='-' clickHandle={handleClick} orange />
      </div>
      <div>
        <Button name='1' clickHandle={handleClick} gray />
        <Button name='2' clickHandle={handleClick} gray />
        <Button name='3' clickHandle={handleClick} gray />
        <Button name='+' clickHandle={handleClick} orange />
      </div>
      <div>
        <Button name='0' clickHandle={handleClick} wide />
        <Button name='.' clickHandle={handleClick} gray />
        <Button name='=' clickHandle={handleClick} green />
      </div>
    </div>
  );
}
