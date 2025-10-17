import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        className="raw_logo"
        width="50%"
        height="40%"
        viewBox="0 0 440 305"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <style>
            {`
              @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
            `}
          </style>
          {/* Gradient definitions for more attractive look */}
          <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={theme.body} stopOpacity="0.4" />
            <stop offset="50%" stopColor={theme.body} stopOpacity="0.8" />
            <stop offset="100%" stopColor={theme.body} stopOpacity="0.4" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <style
            dangerouslySetInnerHTML={{
              __html: `
        /* Container wrapper animation */
        .raw_logo {
          animation: containerFadeIn 0.5s ease-out;
        }
        
        @keyframes containerFadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        /* Signature text animations - enhanced */
        .signature-text {
          opacity: 0;
          transform-origin: center;
          animation: 
            textFadeIn 1.5s ease-out forwards 2.5s,
            textScale 1s ease-out forwards 2.5s,
            textGlow 2s ease-in-out infinite 4s;
        }
        
        @keyframes textFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes textScale {
          0% {
            transform: scale(0.5);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
        
        @keyframes textGlow {
          0%, 100% {
            opacity: 1;
            filter: brightness(1);
          }
          50% {
            opacity: 0.85;
            filter: brightness(1.2);
          }
        }
        /* Hexagon animations - enhanced with multiple effects */
        .myHexagon {
          stroke-dasharray: 800;
          stroke-dashoffset: 800;
          transform-origin: center;
        }
        
        .outer-hex {
          animation: 
            hexDraw 3s ease-out forwards 0.3s,
            hexRotate 3s ease-in-out forwards 0.3s,
            hexPulse 4s ease-in-out infinite 3.5s;
        }
        
        .inner-hex {
          animation: 
            hexDraw 3s ease-out forwards 0.7s,
            hexRotateReverse 3s ease-in-out forwards 0.7s,
            hexPulse 4s ease-in-out infinite 3.8s;
        }
        
        @keyframes hexDraw {
          from {
            stroke-dashoffset: 800;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        
        @keyframes hexRotate {
          0% {
            transform: rotate(-5deg) scale(0.8);
            opacity: 0;
          }
          100% {
            transform: rotate(0deg) scale(1);
            opacity: 1;
          }
        }
        
        @keyframes hexRotateReverse {
          0% {
            transform: rotate(5deg) scale(0.8);
            opacity: 0;
          }
          100% {
            transform: rotate(0deg) scale(1);
            opacity: 1;
          }
        }
        
        @keyframes hexPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.02);
            opacity: 0.9;
          }
        }
        /* Webkit prefixes for better browser support */
        @-webkit-keyframes containerFadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @-webkit-keyframes textFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @-webkit-keyframes textScale {
          0% { transform: scale(0.5); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        
        @-webkit-keyframes textGlow {
          0%, 100% {
            opacity: 1;
            filter: brightness(1);
          }
          50% {
            opacity: 0.85;
            filter: brightness(1.2);
          }
        }
        
        @-webkit-keyframes hexDraw {
          from { stroke-dashoffset: 800; }
          to { stroke-dashoffset: 0; }
        }
        
        @-webkit-keyframes hexRotate {
          0% {
            transform: rotate(-5deg) scale(0.8);
            opacity: 0;
          }
          100% {
            transform: rotate(0deg) scale(1);
            opacity: 1;
          }
        }
        
        @-webkit-keyframes hexRotateReverse {
          0% {
            transform: rotate(5deg) scale(0.8);
            opacity: 0;
          }
          100% {
            transform: rotate(0deg) scale(1);
            opacity: 1;
          }
        }
        
        @-webkit-keyframes hexPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.02);
            opacity: 0.9;
          }
        }
      `,
            }}
          />
        </defs>
        {/* Outer hexagon with enhanced animations */}
        <path
          className="myHexagon outer-hex"
          d="M293.545 167.405L229.5 204.381C227.025 205.81 223.975 205.81 221.5 204.381L157.455 167.405C154.98 165.976 153.455 163.335 153.455 160.476L153.455 86.5234C153.455 83.6653 154.98 81.0243 157.455 79.5952L221.5 42.6187C223.975 41.1896 227.025 41.1897 229.5 42.6187L293.545 79.5952C296.02 81.0243 297.545 83.6653 297.545 86.5234L297.545 160.476C297.545 163.335 296.02 165.976 293.545 167.405Z"
          stroke={theme.body}
          strokeWidth="4"
          filter="url(#glow)"
        />
        {/* Inner hexagon with enhanced animations */}
        <path
          className="myHexagon inner-hex"
          d="M147.455 73.5953L211.5 36.6188C213.975 35.1898 217.025 35.1898 219.5 36.6188L283.545 73.5953C286.02 75.0244 287.545 77.6654 287.545 80.5235L287.545 154.477C287.545 157.335 286.02 159.976 283.545 161.405L219.5 198.381C217.025 199.81 213.975 199.81 211.5 198.381L147.455 161.405C144.98 159.976 143.455 157.335 143.455 154.477L143.455 80.5235C143.455 77.6654 144.98 75.0244 147.455 73.5953Z"
          stroke={theme.body}
          strokeWidth="4"
          filter="url(#glow)"
        />
        {/* Signature text with enhanced styling */}
        <text
          className="signature-text"
          x="220"
          y="138"
          textAnchor="middle"
          fontFamily="'Pacifico', cursive"
          fontSize="36"
          fontWeight="bold"
          fill={theme.body}
          filter="url(#glow)"
          style={{
            textShadow: '0 0 10px rgba(0,0,0,0.5), 0 0 20px rgba(0,0,0,0.3)',
          }}
        >
          Shakti Mishra
        </text>
      </svg>
    );
  }
}

export default LogoLoader;
