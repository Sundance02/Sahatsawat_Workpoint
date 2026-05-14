import React from 'react';
import Svg, { Defs, LinearGradient, Stop, Text as SVGText } from 'react-native-svg';

export default function SvgTxt({ text }: { text: string }) {
    return (
        <>
            <Svg height="100" width="120">
                <Defs>
                    <LinearGradient id="strokeGrad" x1="0%" y1="90%" x2="0%" y2="10%">
                        <Stop offset="0%" stopColor="#c9df51" />
                        <Stop offset="25%" stopColor="#7dc1cb" />
                        <Stop offset="50%" stopColor="#76bb41" />
                        <Stop offset="75%" stopColor="#b587df" />
                        <Stop offset="100%" stopColor="red" />
                    </LinearGradient>
                </Defs>
                <SVGText
                    fill="white"
                    stroke="url(#strokeGrad)"
                    strokeWidth="2.5"
                    fontSize="70"
                    fontWeight="bold"
                    x="10"
                    y="85"
                >
                    {text}
                </SVGText>
            </Svg>
        </>
    )
}