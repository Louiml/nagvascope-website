import './Top_bar.css';

function top_bar() {
  return (
    <header className="header">
      <snap className="credit">Made with <snap className="heart">♥</snap> by <snap className="nameteam">Louiml Team</snap></snap>
      <button className='btn'>About</button>
      <button className='btn'>Store</button>
      <button className='btn'>Login</button>
      <button className='btn'>Software</button>
      <button className='btn'>Hardware</button>
    <h1 className='title'>Nagvascope</h1>
  </header>
  );
}

export default top_bar;
