export const InlineStyle = () => {
  const container = {
    border: '2px solid #333',
    borderRadius: '8px',
    padding: '8px',
    margin: '8px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  };
  const title = {
    margin: '0',
    color: '#333',
    fontWeight: 'bold'
  };
  const button = {
    border: '0',
    borderRadius: '8px',
    backgroundColor: 'blue',
    padding: '8px',
    color: '#fff'
  };

  return (
    <div style={container}>
      <p style={title}>- Inline Style -</p>
      <button style={button}>FIGHT!</button>
    </div>
  );
};
