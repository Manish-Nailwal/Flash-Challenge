function Color({btnPress, randIdx}) {
  return (
    <>
      <div className="color-box mt-8">
        <div className="line1">
          <div
            onClick={btnPress}
            className={`red color ${randIdx == 0 ? "flash" : ""}`}
            id="0"
          ></div>
          <div
            onClick={btnPress}
            className={`yellow color ${randIdx == 1 ? "flash" : ""}`}
            id="1"
          ></div>
        </div>
        <div className="line2">
          <div
            onClick={btnPress}
            className={`green color ${randIdx == 2 ? "flash" : ""}`}
            id="2"
          ></div>
          <div
            onClick={btnPress}
            className={`blue color ${randIdx == 3 ? "flash" : ""}`}
            id="3"
          ></div>
        </div>
      </div>
    </>
  );
}

export default Color;
