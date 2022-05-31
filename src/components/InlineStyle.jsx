export const InlineStyle = () => {
  const container = {
    border: "2px solid #333"
  };
  const title = {};
  const button = {};

  return (
    <div style={container}>
      <p style={title}>Inline Style</p>
      <button style={button}>FIGHT!</button>
    </div>
  );
};
