import './boton.css';

export default function Boton({ clickHandle, name, gray, orange, wide, green }) {
  const className = [
    'component-button',
    orange ? 'orange' : '',
    wide ? 'wide' : '',
    green ? 'green' : '',
    gray ? 'gray' : '',
  ];

  return (
    <div className={className.join(' ').trim()}>
      <button className='btn' onClick={() => clickHandle(name)}>
        {name}
      </button>
    </div>
  );
}
