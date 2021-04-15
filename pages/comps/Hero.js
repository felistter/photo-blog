const Hero = () => {
  return (
    <div className="hero">
      <div className="content">
        <h1>My Travel Experience in Pictures</h1>
        <div className="meet">
          <p>Join my Jorney</p>
        </div>

        <svg width="42" height="77" viewBox="0 0 42 77">
          <g id="scroll" transform="translate(-218 -628)">
            <g
              id="rectangle"
              transform="translate(218 628)"
              fill="none"
              stroke="#fff"
              strokeWidth="5"
            >
              <rect width="42" height="77" rx="21" stroke="none" />
              <rect
                x="2.5"
                y="2.5"
                width="37"
                height="72"
                rx="18.5"
                fill="none"
              />
            </g>
            <circle
              id="ellipse"
              cx="9.5"
              cy="9.5"
              r="9.5"
              transform="translate(230 640)"
              fill="#fff"
            />
          </g>
        </svg>
      </div>
      <img src="images/girl.svg" alt="girl" />
    </div>
  );
};

export default Hero;
