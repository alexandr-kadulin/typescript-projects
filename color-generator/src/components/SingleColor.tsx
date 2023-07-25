import { useState, useEffect } from 'react';

interface ISingleColor {
  rgb: number[];
  alpha: number;
  type: string;
  weight: number;
  index: number;
  hexColor: string;
}

export const SingleColor = ({ rgb, weight, index, hexColor }: ISingleColor) => {
  const [alert, setAlert] = useState(false);

  const bcg = rgb.join(',');
  const hexValue = `#${hexColor}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};
