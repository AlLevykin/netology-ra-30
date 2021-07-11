import { useState } from 'react';
import "./ColorConverter.css";

const HEXtoRGB = (input) => {

  const darken = (color) => Math.floor(color * 0.7);

  let hex = input.replace(/#/g, '');
  if (hex.length === 3) {
    hex = hex.split('').map(function (hex) {
      return hex + hex;
    }).join('');
  }
  let result = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})[\da-z]{0,0}$/i.exec(hex);
  if (result) {
    let red = parseInt(result[1], 16);
    let green = parseInt(result[2], 16);
    let blue = parseInt(result[3], 16);

    return { valid: true, rgb: `rgb(${red}, ${green}, ${blue})`, darken: `rgb(${darken(red)}, ${darken(green)}, ${darken(blue)})`, hex: input };
  } else {
    return { valid: false, rgb: 'rgb(255,0,0)', darken: 'rgb(178,0,0)', hex: input };
  }
}

function ColorConverter() {
  const [color, setColor] = useState(HEXtoRGB('#ffffff'));

  const onInput = (e) => setColor(HEXtoRGB(e.target.value));

  return (
    <div className="ColorConverter-Container" style={{ background: color.rgb }}>
      <div className="ColorConverter-Form">
        <input onChange={onInput} value={color.hex} />
        <div className="ColorConverter-Label" style={{ background: color.darken }}>
          {color.valid ? color.rgb : 'Ошибка!'}
        </div>
      </div>
    </div>
  );
}

export default ColorConverter;
