import { useState, useRef } from 'react';

// export const PauseButton = () => {
//     const [isPlaying, setIsPlaying] = useState(false);
//     const audio = useRef<HTMLAudioElement>(null);
    
//     const togglePlay = () => {
//         if (isPlaying) {
//         audio.current?.pause();
//         } else {
//         audio.current?.play();
//         }
//         setIsPlaying(!isPlaying);
//     };
    
//     return (
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86 86">
//             <defs>
//                 {/* <linearGradient id="playButton__gradient17" x1="0%" y1="0%" x2="0%" y2="100%" spreadMethod="pad">
//                 <stop offset="0%" stop-color="#ff5500" stop-opacity="1"></stop>
//                 <stop offset="100%" stop-color="#ff2200" stop-opacity="1"></stop>
//                 </linearGradient> */}
//             </defs>
//             <circle fill="fill-secondary" cx="21.5" cy="21.5" r="18"></circle>
//             <circle className="playButton__overlay" fill="#000" fill-opacity="0.08" cx="21.5" cy="21.5" r="18"></circle>
//             {/* <path className="playButton__play" fill="#fff" d="M31,21.5L17,33l2.5-11.5L17,10L31,21.5z"></path> */}
//             <g fill="#fff" className="playButton__pause" transform="">
//                 <rect x="15" y="12" width="5" height="19"></rect>
//                 <rect x="23" y="12" width="5" height="19"></rect>
//             </g>
//         </svg>
//     );
// }

// export const PlayButton = () => {
//     return (
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 43">
//             <defs>
//                 {/* <linearGradient id="playButton__gradient17" x1="0%" y1="0%" x2="0%" y2="100%" spreadMethod="pad">
//                 <stop offset="0%" stop-color="#ff5500" stop-opacity="1"></stop>
//                 <stop offset="100%" stop-color="#ff2200" stop-opacity="1"></stop>
//                 </linearGradient> */}
//             </defs>
//             <circle className="fill-secondary" cx="21.5" cy="21.5" r="18"></circle>
//             <circle className="playButton__overlay" fill="#000" fill-opacity="0.08" cx="21.5" cy="21.5" r="9"></circle>
//             <path className="playButton__play" fill="#fff" d="M31,21.5L17,33l2.5,-11.5L17,10L31,21.5z" transform=""></path>
//             {/* <g fill="#fff" className="playButton__play">
//                 <rect x="15" y="12" width="5" height="19"></rect>
//                 <rect x="23" y="12" width="5" height="19"></rect>
//             </g> */}
//         </svg>
//     )

// }

export const PauseButton = () => {
    return (
        <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.04995 2.74998C6.04995 2.44623 5.80371 2.19998 5.49995 2.19998C5.19619 2.19998 4.94995 2.44623 4.94995 2.74998V12.25C4.94995 12.5537 5.19619 12.8 5.49995 12.8C5.80371 12.8 6.04995 12.5537 6.04995 12.25V2.74998ZM10.05 2.74998C10.05 2.44623 9.80371 2.19998 9.49995 2.19998C9.19619 2.19998 8.94995 2.44623 8.94995 2.74998V12.25C8.94995 12.5537 9.19619 12.8 9.49995 12.8C9.80371 12.8 10.05 12.5537 10.05 12.25V2.74998Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
    );
}

export const PlayButton = () => {
    return (
        <svg width="30" height="30" viewBox="0 0 15 15" fill="currentColor" fillRule="evenodd" clipRule="evenodd" xmlns="http://www.w3.org/2000/svg"><path d="M3.24182 2.32181C3.3919 2.23132 3.5784 2.22601 3.73338 2.30781L12.7334 7.05781C12.8974 7.14436 13 7.31457 13 7.5C13 7.68543 12.8974 7.85564 12.7334 7.94219L3.73338 12.6922C3.5784 12.774 3.3919 12.7687 3.24182 12.6782C3.09175 12.5877 3 12.4252 3 12.25V2.75C3 2.57476 3.09175 2.4123 3.24182 2.32181ZM4 3.57925V11.4207L11.4288 7.5L4 3.57925Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
    )

}