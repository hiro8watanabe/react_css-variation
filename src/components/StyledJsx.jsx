//nest.jsにデフォルト搭載

export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">- Styled Jsx</p>
        <button className="button">FIGHT!</button>
      </div>
      <style jsx="true">{`
        .container {
          border: 2px solid #333;
          border-radius: 8px;
          padding: 8px;
          margin: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .title {
          margin: 0;
          color: #333;
          font-weight: bold;
        }

        .button {
          border: 0;
          border-radius: 8px;
          background-color: blue;
          padding: 8px;
          color: #fff;
          transition: 0.3s;
        }
      `}</style>
    </>
  );
};
