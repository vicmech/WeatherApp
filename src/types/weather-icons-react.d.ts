declare module 'weather-icons-react' {
  import * as React from 'react';

  export interface IconProps {
    size?: number;
    color?: string;
    className?: string;
  }

  export const WiDaySunny: React.FC<IconProps>;
  export const WiDayCloudy: React.FC<IconProps>;
  export const WiCloudy: React.FC<IconProps>;
  export const WiRain: React.FC<IconProps>;
  export const WiSprinkle: React.FC<IconProps>;
  export const WiRainWind: React.FC<IconProps>;
  export const WiShowers: React.FC<IconProps>;
  export const WiThunderstorm: React.FC<IconProps>;
  export const WiStormShowers: React.FC<IconProps>;
  export const WiSnow: React.FC<IconProps>;
  export const WiSnowflakeCold: React.FC<IconProps>;
  export const WiSnowWind: React.FC<IconProps>;
  export const WiFog: React.FC<IconProps>;
  export const WiHail: React.FC<IconProps>;
  export const WiRainMix: React.FC<IconProps>;
  export const WiDust: React.FC<IconProps>;
  export const WiSmoke: React.FC<IconProps>;
  export const WiTornado: React.FC<IconProps>;
  export const WiLightning: React.FC<IconProps>;
}
