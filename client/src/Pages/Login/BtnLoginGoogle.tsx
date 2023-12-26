// import React from "react";
// type Props = {};

// const ButtonGoogle = (props: Props) => {
//   const handleClick = () => {
//     const width = window.screen.width / 2;
//     const height = window.screen.height / 2;
//     const left = window.screen.width / 4;
//     const top = window.screen.height / 4;

//     window.open(
//       "http://localhost:4000/auth/api/v1/google",
//       "mywindow",
//       `width=${width},height=${height},top=${top},left=${left},location=no,menubar=no,scrollbars=yes,status=no,titlebar=no`
//     );
//   };

//   return (
//     <div className="w-2/12  mt-3 m-auto max-w-full px-1 mr-auto flex-0">
//       <a
//         title="Login with Google"
//         onClick={handleClick}
//         className="inline-block w-full px-5 py-2  mb-4 font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75"
//       >
//         <svg
//           xmlnsXlink="http://www.w3.org/1999/xlink"
//           xmlns="http://www.w3.org/2000/svg"
//           version="1.1"
//           viewBox="0 0 64 64"
//           height="32px"
//           width="24px"
//         >
//           <g fillRule="evenodd" fill="none" strokeWidth={1} stroke="none">
//             <g fillRule="nonzero" transform="translate(3.000000, 2.000000)">
//               <path
//                 fill="#4285F4"
//                 d="M57.8123233,30.1515267 C57.8123233,27.7263183 57.6155321,25.9565533 57.1896408,24.1212666 L29.4960833,24.1212666 L29.4960833,35.0674653 L45.7515771,35.0674653 C45.4239683,37.7877475 43.6542033,41.8844383 39.7213169,44.6372555 L39.6661883,45.0037254 L48.4223791,51.7870338 L49.0290201,51.8475849 C54.6004021,46.7020943 57.8123233,39.1313952 57.8123233,30.1515267"
//               />
//               <path
//                 fill="#34A853"
//                 d="M29.4960833,58.9921667 C37.4599129,58.9921667 44.1456164,56.3701671 49.0290201,51.8475849 L39.7213169,44.6372555 C37.2305867,46.3742596 33.887622,47.5868638 29.4960833,47.5868638 C21.6960582,47.5868638 15.0758763,42.4415991 12.7159637,35.3297782 L12.3700541,35.3591501 L3.26524241,42.4054492 L3.14617358,42.736447 C7.9965904,52.3717589 17.959737,58.9921667 29.4960833,58.9921667"
//               />
//               <path
//                 fill="#FBBC05"
//                 d="M12.7159637,35.3297782 C12.0932812,33.4944915 11.7329116,31.5279353 11.7329116,29.4960833 C11.7329116,27.4640054 12.0932812,25.4976752 12.6832029,23.6623884 L12.6667095,23.2715173 L3.44779955,16.1120237 L3.14617358,16.2554937 C1.14708246,20.2539019 0,24.7439491 0,29.4960833 C0,34.2482175 1.14708246,38.7380388 3.14617358,42.736447 L12.7159637,35.3297782"
//               />
//               <path
//                 fill="#EB4335"
//                 d="M29.4960833,11.4050769 C35.0347044,11.4050769 38.7707997,13.7975244 40.9011602,15.7968415 L49.2255853,7.66898166 C44.1130815,2.91684746 37.4599129,0 29.4960833,0 C17.959737,0 7.9965904,6.62018183 3.14617358,16.2554937 L12.6832029,23.6623884 C15.0758763,16.5505675 21.6960582,11.4050769 29.4960833,11.4050769"
//               />
//             </g>
//           </g>
//         </svg>
//       </a>
//     </div>
//   );
// };

// export default ButtonGoogle;

import React from "react";

export const IconGoogle = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 24">
      <g fill="none" fillRule="evenodd">
        <path
          fill="#4285F4"
          d="M22.984 12.273c0-.851-.075-1.67-.213-2.455H11.726v4.642h6.311a5.53 5.53 0 0 1-2.34 3.622v3.01h3.79c2.218-2.088 3.497-5.165 3.497-8.82z"
        ></path>
        <path
          fill="#34A853"
          d="M11.726 24c3.167 0 5.821-1.075 7.761-2.907l-3.79-3.011c-1.05.72-2.393 1.145-3.97 1.145-3.055 0-5.64-2.11-6.562-4.947H1.247v3.11C3.177 21.31 7.143 24 11.727 24z"
        ></path>
        <path
          fill="#FBBC05"
          d="M5.165 14.28A7.366 7.366 0 0 1 4.797 12c0-.79.133-1.56.368-2.28V6.61H1.247A12.224 12.224 0 0 0 0 12c0 1.936.453 3.77 1.247 5.39l3.918-3.11z"
        ></path>
        <path
          fill="#EA4335"
          d="M11.726 4.773c1.722 0 3.268.605 4.483 1.794l3.364-3.442C17.542 1.19 14.887 0 11.726 0 7.143 0 3.176 2.69 1.247 6.61l3.918 3.11c.922-2.836 3.507-4.947 6.561-4.947z"
        ></path>
      </g>
    </svg>
  );
};
