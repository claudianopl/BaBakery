import React from 'react';

import { motion } from 'framer-motion';

const pathVariantsBaBakery = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

const pathVariantsCakeStudio = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      delay: 0.3,
      ease: 'easeInOut',
    },
  },
};

const pathVariantsRollingPin = {
  hidden: {
    opacity: 0,
    pathSpacing: 0,
  },
  visible: {
    opacity: 1,
    pathSpacing: 1,
    transition: {
      delay: 0.6,
      ease: 'easeInOut',
    },
  },
};

const pathVariantsHeart = {
  hidden: {
    opacity: 0,
    pathSpacing: 0,
  },
  visible: {
    opacity: 1,
    pathSpacing: 1,
    transition: {
      delay: 0.9,
      ease: 'easeInOut',
    },
  },
};

const SvgLogo: React.FC = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="154.615"
      height="110.507"
      viewBox="0 0 154.615 110.507"
      initial="hidden"
      animate="visible"
    >
      <defs>
        <style>{'.a{fill:#ff4936;}.b{fill:#303030;}.c{fill:#fff;}'}</style>
      </defs>
      <g transform="translate(-337.829 -318.891)">
        <g transform="translate(337.829 361.357)">
          <motion.path
            className="a"
            d="M337.829,375.872v-.347l.621-.24a1.919,1.919,0,0,0,.951-.691,2.088,2.088,0,0,0,.258-1.106V355.462a2.16,2.16,0,0,0-.258-1.14,1.752,1.752,0,0,0-.951-.657l-.621-.241v-.345h9.912q4.213,0,6.079,1.536a4.826,4.826,0,0,1,1.864,3.887,4.53,4.53,0,0,1-1.363,3.194,8.409,8.409,0,0,1-4.68,2.02A9.886,9.886,0,0,1,355.2,365.7a4.936,4.936,0,0,1,1.761,3.817,5.6,5.6,0,0,1-.484,2.227,5.431,5.431,0,0,1-1.64,2.055,8.9,8.9,0,0,1-3.16,1.5,18.927,18.927,0,0,1-5.077.57Zm6.942-12.192h1.486a4.43,4.43,0,0,0,3.331-1.071,5.37,5.37,0,0,0,1.019-3.729,6.425,6.425,0,0,0-.932-3.938,3.657,3.657,0,0,0-3.04-1.174h-1.865Zm0,11.5H346.5a4.966,4.966,0,0,0,3.851-1.381,6.267,6.267,0,0,0,1.259-4.318,5.336,5.336,0,0,0-1.208-3.937,5.577,5.577,0,0,0-3.973-1.174h-1.657Z"
            transform="translate(-337.829 -351.662)"
            variants={pathVariantsBaBakery}
          />
          <motion.path
            className="a"
            d="M358.84,375.138A5.082,5.082,0,0,1,355.471,374a4.032,4.032,0,0,1-1.364-3.281,3.884,3.884,0,0,1,1.657-2.988,11.866,11.866,0,0,1,5.217-2.055c.367-.069.782-.142,1.244-.225s.943-.166,1.45-.259v-2.728a6.85,6.85,0,0,0-.571-3.3,1.927,1.927,0,0,0-1.779-.95,1.675,1.675,0,0,0-1.312.535,3.294,3.294,0,0,0-.621,1.847l-.069.38a3.314,3.314,0,0,1-.725,2.176,2.141,2.141,0,0,1-1.622.691,2.077,2.077,0,0,1-1.485-.552,1.942,1.942,0,0,1-.587-1.485,3.206,3.206,0,0,1,.983-2.384,6.157,6.157,0,0,1,2.607-1.45,12.3,12.3,0,0,1,3.523-.484,6.877,6.877,0,0,1,4.749,1.5q1.673,1.5,1.674,4.887v7.632q0,1.556,1.45,1.554h.76l.311.277a5.1,5.1,0,0,1-1.432,1.277,4.44,4.44,0,0,1-2.194.449,3.726,3.726,0,0,1-2.4-.709,3.308,3.308,0,0,1-1.157-1.882,14.365,14.365,0,0,1-2.124,1.882A4.727,4.727,0,0,1,358.84,375.138Zm2.106-2.105a2.659,2.659,0,0,0,1.294-.329,9.161,9.161,0,0,0,1.435-1.019v-5.8l-.692.14c-.23.046-.494.091-.795.137a5.277,5.277,0,0,0-2.538,1.4,3.644,3.644,0,0,0-.95,2.642,3.025,3.025,0,0,0,.656,2.124A2.086,2.086,0,0,0,360.946,373.033Z"
            transform="translate(-333.213 -350.411)"
            variants={pathVariantsBaBakery}
          />
          <motion.path
            className="a"
            d="M373.721,375.872v-.347l.621-.24a1.916,1.916,0,0,0,.95-.691,2.076,2.076,0,0,0,.258-1.106V355.462a2.148,2.148,0,0,0-.258-1.14,1.748,1.748,0,0,0-.95-.657l-.621-.241v-.345h9.911q4.215,0,6.08,1.536a4.83,4.83,0,0,1,1.864,3.887,4.531,4.531,0,0,1-1.364,3.194,8.4,8.4,0,0,1-4.679,2.02,9.886,9.886,0,0,1,5.561,1.986,4.936,4.936,0,0,1,1.761,3.817,5.6,5.6,0,0,1-.484,2.227,5.444,5.444,0,0,1-1.64,2.055,8.9,8.9,0,0,1-3.16,1.5,18.933,18.933,0,0,1-5.077.57Zm6.942-12.192h1.485a4.434,4.434,0,0,0,3.332-1.071,5.376,5.376,0,0,0,1.019-3.729,6.416,6.416,0,0,0-.933-3.938,3.653,3.653,0,0,0-3.038-1.174h-1.865Zm0,11.5h1.728a4.969,4.969,0,0,0,3.851-1.381,6.267,6.267,0,0,0,1.259-4.318,5.336,5.336,0,0,0-1.208-3.937,5.579,5.579,0,0,0-3.973-1.174h-1.657Z"
            transform="translate(-327.65 -351.662)"
            variants={pathVariantsBaBakery}
          />
          <motion.path
            className="a"
            d="M394.732,375.138A5.082,5.082,0,0,1,391.363,374,4.033,4.033,0,0,1,390,370.719a3.884,3.884,0,0,1,1.657-2.988,11.859,11.859,0,0,1,5.217-2.055c.367-.069.782-.142,1.243-.225s.945-.166,1.45-.259v-2.728a6.853,6.853,0,0,0-.57-3.3,1.927,1.927,0,0,0-1.779-.95,1.674,1.674,0,0,0-1.312.535,3.294,3.294,0,0,0-.623,1.847l-.068.38a3.321,3.321,0,0,1-.725,2.176,2.145,2.145,0,0,1-1.624.691,2.081,2.081,0,0,1-1.485-.552,1.947,1.947,0,0,1-.587-1.485,3.207,3.207,0,0,1,.985-2.384,6.149,6.149,0,0,1,2.607-1.45,12.3,12.3,0,0,1,3.522-.484,6.875,6.875,0,0,1,4.749,1.5q1.673,1.5,1.675,4.887v7.632q0,1.556,1.45,1.554h.76l.311.277a5.1,5.1,0,0,1-1.432,1.277,4.443,4.443,0,0,1-2.194.449,3.726,3.726,0,0,1-2.4-.709,3.316,3.316,0,0,1-1.158-1.882,14.424,14.424,0,0,1-2.123,1.882A4.729,4.729,0,0,1,394.732,375.138Zm2.105-2.105a2.664,2.664,0,0,0,1.3-.329,9.22,9.22,0,0,0,1.434-1.019v-5.8l-.691.14c-.231.046-.5.091-.795.137a5.287,5.287,0,0,0-2.539,1.4,3.644,3.644,0,0,0-.95,2.642,3.025,3.025,0,0,0,.657,2.124A2.086,2.086,0,0,0,396.837,373.033Z"
            transform="translate(-323.034 -350.411)"
            variants={pathVariantsBaBakery}
          />
          <motion.path
            className="a"
            d="M403.747,376.185v-.347l.517-.171a1.6,1.6,0,0,0,1.174-1.693V355.5a1.643,1.643,0,0,0-.275-1.037,1.927,1.927,0,0,0-.968-.553l-.449-.1v-.345l6.32-1.485.415.311-.1,4.835v16.854a1.592,1.592,0,0,0,1.14,1.726l.484.137v.347Zm12.813,0-6.147-8.635,6.39-5.9a1.629,1.629,0,0,0,.535-.882c.056-.311-.144-.535-.6-.673l-.588-.173v-.344h5.146v.344l-1.036.277a4.537,4.537,0,0,0-1.226.569,13.047,13.047,0,0,0-1.123.915l-3.866,3.626,6.18,8.6a6.856,6.856,0,0,0,1.037,1.173,3.967,3.967,0,0,0,1.242.691l.139.068v.347Z"
            transform="translate(-319.135 -351.975)"
            variants={pathVariantsBaBakery}
          />
          <motion.path
            className="a"
            d="M427.451,357.49a7.573,7.573,0,0,1,3.835.917,6.243,6.243,0,0,1,2.434,2.486,7.413,7.413,0,0,1,.846,3.575c0,.253-.01.512-.033.777a3.243,3.243,0,0,1-.139.709H424.1q.035,3.729,1.33,5.371a4.611,4.611,0,0,0,3.851,1.64,6.1,6.1,0,0,0,2.8-.553,6.853,6.853,0,0,0,2-1.622l.347.311a7.942,7.942,0,0,1-2.85,2.969,8.12,8.12,0,0,1-4.265,1.071,8.826,8.826,0,0,1-4.351-1.053,7.429,7.429,0,0,1-2.97-3.023,9.693,9.693,0,0,1-1.07-4.7,8.9,8.9,0,0,1,1.244-4.817,8.354,8.354,0,0,1,3.195-3.022A8.6,8.6,0,0,1,427.451,357.49Zm-.1.691a2.544,2.544,0,0,0-1.71.606,4.122,4.122,0,0,0-1.105,2.141,19.239,19.239,0,0,0-.431,4.335h5.906a13.4,13.4,0,0,0-.276-5.423A2.347,2.347,0,0,0,427.349,358.181Z"
            transform="translate(-314.831 -350.411)"
            variants={pathVariantsBaBakery}
          />
          <motion.path
            className="a"
            d="M432.455,374.621v-.347l.517-.137a1.6,1.6,0,0,0,.951-.621,2,2,0,0,0,.259-1.071V361.636a1.952,1.952,0,0,0-.259-1.123,1.462,1.462,0,0,0-.951-.5l-.517-.139v-.345l5.94-2,.345.344.311,2.972v.275a7.286,7.286,0,0,1,1.26-1.778,7.022,7.022,0,0,1,1.728-1.329,3.891,3.891,0,0,1,1.882-.52,2.634,2.634,0,0,1,2,.727,2.546,2.546,0,0,1,.691,1.829,2.381,2.381,0,0,1-.673,1.815,2.252,2.252,0,0,1-1.606.638,3.177,3.177,0,0,1-2.556-1.45l-.069-.069a1.152,1.152,0,0,0-.795-.535.921.921,0,0,0-.829.431,2.623,2.623,0,0,0-.57.743,9.3,9.3,0,0,0-.431.985v9.635a1.6,1.6,0,0,0,1.208,1.728l1.106.309v.347Z"
            transform="translate(-310.993 -350.411)"
            variants={pathVariantsBaBakery}
          />
          <motion.path
            className="a"
            d="M448.028,382.794a3.27,3.27,0,0,1-2.194-.691,2.21,2.21,0,0,1-.811-1.761,1.937,1.937,0,0,1,.691-1.554,2.334,2.334,0,0,1,1.554-.587,2.72,2.72,0,0,1,1.451.362,3.37,3.37,0,0,1,1.035,1.054l.243.276q.759,1.036,1.518-.035a15.251,15.251,0,0,0,.709-1.364q.4-.845.915-2.26l-6.7-16.026a4.681,4.681,0,0,0-.517-1.054,2.1,2.1,0,0,0-.9-.673l-.622-.243v-.344H453v.311l-.692.276c-.506.162-.765.42-.777.777a3.845,3.845,0,0,0,.259,1.33l3.591,9.325,3.419-9.429a2.99,2.99,0,0,0,.207-1.33c-.046-.356-.334-.6-.864-.742l-.724-.173v-.344h4.8v.344l-.76.243a2,2,0,0,0-1.1.691,5.25,5.25,0,0,0-.588,1.243l-5.559,15.162a22.172,22.172,0,0,1-2.7,5.423A4.169,4.169,0,0,1,448.028,382.794Z"
            transform="translate(-307.606 -350.296)"
            variants={pathVariantsBaBakery}
          />
        </g>
        <g transform="translate(374.435 402.984)">
          <motion.path
            className="b"
            d="M366.976,389.7a3.756,3.756,0,0,1-.61-1.644,2.905,2.905,0,0,1,.3-1.643,4.114,4.114,0,0,1,2.7-1.964,3.038,3.038,0,0,1,1.3.048,3.132,3.132,0,0,1,1.135.565,4.031,4.031,0,0,1,.893.983,3.818,3.818,0,0,1,.634,1.854l-.983.687-.053-.08.388-.834a2.4,2.4,0,0,0,.166-.365.786.786,0,0,0,.033-.37,1.339,1.339,0,0,0-.236-.615,1.853,1.853,0,0,0-.815-.7,2.045,2.045,0,0,0-1.241-.076,5.227,5.227,0,0,0-1.751.8,5.511,5.511,0,0,0-1.447,1.254,1.984,1.984,0,0,0-.445,1.142,1.832,1.832,0,0,0,.307,1.017,2.243,2.243,0,0,0,.308.394,1.845,1.845,0,0,0,.312.237.608.608,0,0,0,.347.113,2.313,2.313,0,0,0,.37-.031l1.033-.16.054.082-1.185.734a4.524,4.524,0,0,1-.795-.578A4.188,4.188,0,0,1,366.976,389.7Z"
            transform="translate(-366.348 -384.405)"
            variants={pathVariantsCakeStudio}
          />
        </g>
        <g transform="translate(378.815 410.485)">
          <motion.path
            className="b"
            d="M369.76,392.843l.068-.069.235.112a.839.839,0,0,0,.348.081.855.855,0,0,0,.349-.1l5.51-2.622.583.589-2.737,5.486a1.085,1.085,0,0,0-.109.356.762.762,0,0,0,.077.347l.056.112-.069.069-1.741-1.761.068-.069.137.069a.367.367,0,0,0,.331.023.577.577,0,0,0,.228-.248l.678-1.312-1.522-1.542-1.305.635a.706.706,0,0,0-.275.208.313.313,0,0,0,.015.307l.089.214-.069.069Zm2.679-.564,1.433,1.449,1.465-2.832Z"
            transform="translate(-369.76 -390.248)"
            variants={pathVariantsCakeStudio}
          />
        </g>
        <g transform="translate(386.393 414.687)">
          <motion.path
            className="b"
            d="M375.663,398.925l.053-.081.216.046a.417.417,0,0,0,.313-.018.7.7,0,0,0,.213-.222l2.77-4.282a.7.7,0,0,0,.122-.294.427.427,0,0,0-.112-.293l-.13-.177.053-.082,2.038,1.32-.053.081-.227-.042a.381.381,0,0,0-.285.026.738.738,0,0,0-.223.239l-2.771,4.282a.589.589,0,0,0-.112.288.466.466,0,0,0,.113.282l.113.166-.053.082Zm3.022,1.956.053-.082.127.037c.131.037.223.018.279-.054a.5.5,0,0,0,.072-.325l-.126-3.253,3.44-.771a.475.475,0,0,0,.268-.139c.054-.067.036-.154-.054-.268l-.107-.139.053-.081,1.2.773-.053.082-.255-.073a1.166,1.166,0,0,0-.376-.046,3.128,3.128,0,0,0-.39.063l-2.434.551.107,4.052a2.791,2.791,0,0,0,.042.445.887.887,0,0,0,.2.384l.094.107-.053.082Z"
            transform="translate(-375.663 -393.522)"
            variants={pathVariantsCakeStudio}
          />
        </g>
        <g transform="translate(395.194 419.221)">
          <motion.path
            className="b"
            d="M382.52,403.074l.035-.09.24,0a.435.435,0,0,0,.279-.087.594.594,0,0,0,.168-.266l1.8-4.761a.762.762,0,0,0,.06-.307.413.413,0,0,0-.16-.253l-.18-.162.035-.091,4.369,1.652-.476,1.425-.09-.035-.071-1.005a1.153,1.153,0,0,0-.072-.33.378.378,0,0,0-.236-.2l-1.642-.621-1,2.637.976.368a.4.4,0,0,0,.313.01.887.887,0,0,0,.268-.2l.321-.3.09.033-.621,1.642-.09-.035-.039-.451a1.062,1.062,0,0,0-.074-.326.379.379,0,0,0-.236-.2l-.977-.368-1.07,2.835,1.842.7a.412.412,0,0,0,.318.01.735.735,0,0,0,.266-.207l.7-.716.092.036-.587,1.384Z"
            transform="translate(-382.52 -397.054)"
            variants={pathVariantsCakeStudio}
          />
        </g>
        <g transform="translate(408.932 422.639)">
          <motion.path
            className="b"
            d="M395.191,406.456a4.733,4.733,0,0,1-1.076-.231,3.4,3.4,0,0,1-.892-.429l.169-1.316.1.009.243.657a3.346,3.346,0,0,0,.248.508,1.03,1.03,0,0,0,.4.365,1.451,1.451,0,0,0,.361.166,2.434,2.434,0,0,0,.4.071,1.331,1.331,0,0,0,.965-.235,1.1,1.1,0,0,0,.421-.795,1.115,1.115,0,0,0-.166-.764,2.41,2.41,0,0,0-.7-.588l-.381-.212a4.16,4.16,0,0,1-1.231-.969,1.758,1.758,0,0,1-.353-1.32,1.662,1.662,0,0,1,.386-.963,1.9,1.9,0,0,1,.884-.567,3.21,3.21,0,0,1,1.258-.11,3.43,3.43,0,0,1,.963.226,2.788,2.788,0,0,1,.768.443l-.166,1.159-.1-.009-.331-.764a1.469,1.469,0,0,0-.288-.511.963.963,0,0,0-.359-.234,1.472,1.472,0,0,0-.227-.076,2.207,2.207,0,0,0-.271-.039,1.255,1.255,0,0,0-.863.211.951.951,0,0,0-.409.741,1.152,1.152,0,0,0,.189.815,2.31,2.31,0,0,0,.716.6l.431.235a3.89,3.89,0,0,1,1.262.992,1.887,1.887,0,0,1-.474,2.562A2.8,2.8,0,0,1,395.191,406.456Z"
            transform="translate(-393.223 -399.717)"
            variants={pathVariantsCakeStudio}
          />
        </g>
        <g transform="translate(416.821 422.597)">
          <motion.path
            className="b"
            d="M401.2,406.473l-.01-.1.391-.13a.458.458,0,0,0,.356-.521l-.481-5.539-.824.073a.628.628,0,0,0-.5.234,3.2,3.2,0,0,0-.286.548l-.29.711-.1.009-.087-1.589,5.605-.487.176,1.58-.095.009-.409-.65a2.988,2.988,0,0,0-.366-.493.632.632,0,0,0-.531-.144l-.827.072.481,5.537a.457.457,0,0,0,.439.452l.408.062.008.1Z"
            transform="translate(-399.369 -399.684)"
            variants={pathVariantsCakeStudio}
          />
        </g>
        <g transform="translate(425.233 420.395)">
          <motion.path
            className="b"
            d="M410.783,405.111a3.089,3.089,0,0,1-1.334.121,1.918,1.918,0,0,1-1.086-.548,3.082,3.082,0,0,1-.732-1.353l-.958-3.226a.477.477,0,0,0-.5-.361l-.223.005-.027-.094,2.589-.766.028.092-.25.155a.445.445,0,0,0-.207.569l1.023,3.452a2,2,0,0,0,.744,1.177,1.379,1.379,0,0,0,1.172.105,1.552,1.552,0,0,0,1-.774,1.83,1.83,0,0,0,.047-1.366l-1.018-3.431a.864.864,0,0,0-.16-.315.352.352,0,0,0-.3-.119l-.252.015-.03-.094,1.308-.388.031.092-.234.14a.309.309,0,0,0-.18.248.889.889,0,0,0,.04.343l1.015,3.422a2.6,2.6,0,0,1,.082,1.273,2.011,2.011,0,0,1-.526,1.01A2.373,2.373,0,0,1,410.783,405.111Z"
            transform="translate(-405.922 -397.969)"
            variants={pathVariantsCakeStudio}
          />
        </g>
        <g transform="translate(433.416 417.688)">
          <motion.path
            className="b"
            d="M415.285,403.241l-.045-.086.145-.164a.488.488,0,0,0,.045-.585l-2.364-4.508a.463.463,0,0,0-.506-.3l-.218.024-.045-.085,2.278-1.2a3.863,3.863,0,0,1,1.757-.485,2.731,2.731,0,0,1,1.53.442,3.467,3.467,0,0,1,1.158,1.337,3.284,3.284,0,0,1,.421,1.75,2.859,2.859,0,0,1-.571,1.545,4.2,4.2,0,0,1-1.462,1.193Zm1.662-1.091.371-.2a2.056,2.056,0,0,0,.873-.77,1.6,1.6,0,0,0,.122-1.121,8.209,8.209,0,0,0-1.679-3.205,1.64,1.64,0,0,0-.983-.543,1.967,1.967,0,0,0-1.105.266l-.407.213Z"
            transform="translate(-412.297 -395.86)"
            variants={pathVariantsCakeStudio}
          />
        </g>
        <g transform="translate(440.796 413.479)">
          <motion.path
            className="b"
            d="M422.106,399.157l-.06-.076.1-.184a.463.463,0,0,0,.083-.307.637.637,0,0,0-.149-.282l-3.209-3.95a.719.719,0,0,0-.243-.207.422.422,0,0,0-.321.023l-.2.062-.063-.074,1.945-1.581.063.076-.1.184a.434.434,0,0,0-.082.305.63.63,0,0,0,.145.284l3.212,3.95a.613.613,0,0,0,.243.2.485.485,0,0,0,.321-.015l.2-.063.06.077Z"
            transform="translate(-418.047 -392.581)"
            variants={pathVariantsCakeStudio}
          />
        </g>
        <g transform="translate(445.952 408.32)">
          <motion.path
            className="b"
            d="M427.867,394.156a3.154,3.154,0,0,1-.934.7,2.885,2.885,0,0,1-1.136.294,3.044,3.044,0,0,1-1.244-.209,4,4,0,0,1-1.263-.815,3.91,3.91,0,0,1-.913-1.182,3,3,0,0,1-.313-1.226,3.058,3.058,0,0,1,.8-2.15,3.173,3.173,0,0,1,.929-.7,2.867,2.867,0,0,1,1.135-.3,3.048,3.048,0,0,1,1.248.212,4.013,4.013,0,0,1,1.267.819,3.958,3.958,0,0,1,.91,1.18,3.033,3.033,0,0,1,.317,1.226,2.958,2.958,0,0,1-.193,1.162A3.07,3.07,0,0,1,427.867,394.156Zm-.151-.137a1.288,1.288,0,0,0,.376-.837,1.77,1.77,0,0,0-.4-1.02,12.289,12.289,0,0,0-2.83-2.6,1.76,1.76,0,0,0-1.05-.311,1.277,1.277,0,0,0-.8.444,1.256,1.256,0,0,0-.367.828,1.761,1.761,0,0,0,.4,1.02,9.54,9.54,0,0,0,1.317,1.413,9.323,9.323,0,0,0,1.513,1.185,1.758,1.758,0,0,0,1.053.311A1.254,1.254,0,0,0,427.716,394.019Z"
            transform="translate(-422.063 -388.562)"
            variants={pathVariantsCakeStudio}
          />
        </g>
        <g transform="translate(357.367 318.891)">
          <g transform="translate(0 16.284)">
            <g transform="translate(13.219 1.261)">
              <motion.path
                className="b"
                d="M375.211,334.566c-1.83-.626-3.677-1.305-5.546-1.821a4.968,4.968,0,0,0-6.315,4.771h0a4.969,4.969,0,0,0,6.315,4.771c1.869-.517,3.716-1.2,5.546-1.823,3.859-1.321,8.048-2.431,11.968-1.307v-3.285C383.259,337,379.069,335.887,375.211,334.566Z"
                transform="translate(-363.349 -332.56)"
                variants={pathVariantsRollingPin}
              />
              <g transform="translate(66.62)">
                <motion.path
                  className="b"
                  d="M427.218,340.464c1.83.626,3.677,1.305,5.546,1.823a4.969,4.969,0,0,0,6.315-4.771h0a4.968,4.968,0,0,0-6.315-4.771c-1.869.516-3.716,1.2-5.546,1.821-3.859,1.321-8.048,2.431-11.968,1.307v3.285C419.17,338.033,423.36,339.143,427.218,340.464Z"
                  transform="translate(-415.25 -332.56)"
                  variants={pathVariantsRollingPin}
                />
              </g>
              <motion.rect
                className="b"
                width="52.201"
                height="8.574"
                rx="0.566"
                transform="translate(19.124 0.668)"
                variants={pathVariantsRollingPin}
              />
            </g>
            <motion.circle
              className="c"
              cx="1.11"
              cy="1.11"
              r="1.11"
              transform="translate(6.147)"
            />
            <motion.circle
              className="c"
              cx="0.869"
              cy="0.869"
              r="0.869"
              transform="translate(0 2.835)"
            />
            <motion.circle
              className="c"
              cx="1.709"
              cy="1.709"
              r="1.709"
              transform="translate(5.131 7.773)"
            />
            <g transform="translate(108.34 0.001)">
              <motion.circle
                className="c"
                cx="1.11"
                cy="1.11"
                r="1.11"
                transform="translate(0.181 8.97)"
              />
              <motion.circle
                className="c"
                cx="0.869"
                cy="0.869"
                r="0.869"
                transform="translate(6.81 6.616)"
              />
              <motion.path
                className="c"
                d="M437.454,333.286a1.708,1.708,0,1,1,1.708,1.708A1.709,1.709,0,0,1,437.454,333.286Z"
                transform="translate(-437.454 -331.578)"
              />
            </g>
          </g>
          <motion.path
            className="a"
            d="M399.984,321.013a3.418,3.418,0,0,1,3.131-2.122,3.614,3.614,0,0,1,3.413,3.536,3.491,3.491,0,0,1-.109,1.336,5.916,5.916,0,0,1-1.8,3l-4.634,4.133-4.554-4.133a5.917,5.917,0,0,1-1.8-3,3.513,3.513,0,0,1-.11-1.336,3.615,3.615,0,0,1,3.414-3.536,3.309,3.309,0,0,1,3.051,2.122Zm0,0"
            transform="translate(-341.58 -318.891)"
            variants={pathVariantsHeart}
          />
        </g>
      </g>
    </motion.svg>
  );
};

export default SvgLogo;
