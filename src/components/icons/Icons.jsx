const CartIcon = ({ width = "16", height = "20", ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14 4H12C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4H2C0.9 4 0 4.9 0 6V18C0 19.1 0.9 20 2 20H14C15.1 20 16 19.1 16 18V6C16 4.9 15.1 4 14 4ZM8 2C9.1 2 10 2.9 10 4H6C6 2.9 6.9 2 8 2ZM14 18H2V6H4V8C4 8.55 4.45 9 5 9C5.55 9 6 8.55 6 8V6H10V8C10 8.55 10.45 9 11 9C11.55 9 12 8.55 12 8V6H14V18Z"
        fill="currentColor"
      />
    </svg>
  );
};

const SearchIcon = ({ width = "18", height = "18", ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
        fill="currentColor"
      />
    </svg>
  );
};

const AdidasIcon = ({ width = "16", height = "16", ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      {...props}
    >
      <title>adidas</title>
      <path
        fill="currentColor"
        d="m1.33 19l-.6-1.036l4.33-2.5L7.103 19zm13.856 0H9.412l-3.619-6.268l4.33-2.5zm8.083 0h-5.774l-6.64-11.5l4.33-2.5z"
      />
    </svg>
  );
};

const NikeIcon = ({ width = "1em", height = "1em", ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      {...props}
    >
      <title>nike</title>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.243 8.375c-1.168 1.334-2.785 2.828-3.173 4.692c-.612 2.938 2.962 2.858 4.697 2.141c5.105-2.11 10.155-4.353 15.233-6.53c-4.937 1.315-9.857 2.699-14.812 3.945c-3.545.892-2.855-2.272-1.945-4.248"
        clipRule="evenodd"
      />
    </svg>
  );
};

const ToyotaIcon = ({ width = "1em", height = "1em", ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      {...props}
    >
      <title>toyota</title>
      <path
        fill="currentColor"
        d="M12 3.848C5.223 3.848 0 7.298 0 12s5.224 8.152 12 8.152S24 16.702 24 12s-5.223-8.152-12-8.152m7.334 3.839c0 1.08-1.725 1.913-4.488 2.246c-.26-2.58-1.005-4.279-1.963-4.913c2.948.184 6.45 1.227 6.45 2.667zM12 16.401c-.96 0-1.746-1.5-1.808-4.389q.866.071 1.808.072q.942 0 1.807-.072c-.061 2.89-.847 4.389-1.807 4.389m0-6.308q-.886 0-1.69-.054c.261-1.728.92-3.15 1.69-3.15s1.428 1.422 1.689 3.15q-.803.053-1.689.054m-.882-5.075c-.956.633-1.706 2.333-1.964 4.915C6.391 9.6 4.665 8.767 4.665 7.687c0-1.44 3.504-2.49 6.453-2.669M2.037 11.68a5.27 5.27 0 0 1 1.048-3.164c.27 1.547 2.522 2.881 5.972 3.37V12c0 3.772.879 6.203 2.087 6.97c-5.107-.321-9.107-3.48-9.107-7.29m10.823 7.29c1.207-.767 2.087-3.198 2.087-6.97v-.115c3.447-.488 5.704-1.826 5.972-3.37a5.26 5.26 0 0 1 1.049 3.165c-.004 3.81-4.008 6.969-9.109 7.29z"
      />
    </svg>
  );
};

const NetworkBarsIcon = ({ width = "1em", height = "1em", ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 48 48"
      {...props}
    >
      <title>high-bars</title>
      <path
        fill="currentColor"
        d="M32 9a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3zM19 21a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3zM9 30a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3z"
      />
    </svg>
  );
};

const BusinessIcon = ({ width = "36", height = "36", ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 10.5V7.5C18 5.85 16.65 4.5 15 4.5H6C4.35 4.5 3 5.85 3 7.5V28.5C3 30.15 4.35 31.5 6 31.5H30C31.65 31.5 33 30.15 33 28.5V13.5C33 11.85 31.65 10.5 30 10.5H18ZM9 28.5H6V25.5H9V28.5ZM9 22.5H6V19.5H9V22.5ZM9 16.5H6V13.5H9V16.5ZM9 10.5H6V7.5H9V10.5ZM15 28.5H12V25.5H15V28.5ZM15 22.5H12V19.5H15V22.5ZM15 16.5H12V13.5H15V16.5ZM15 10.5H12V7.5H15V10.5ZM28.5 28.5H18V25.5H21V22.5H18V19.5H21V16.5H18V13.5H28.5C29.325 13.5 30 14.175 30 15V27C30 27.825 29.325 28.5 28.5 28.5ZM27 16.5H24V19.5H27V16.5ZM27 22.5H24V25.5H27V22.5Z"
        fill="#242528"
      />
    </svg>
  );
};

const DesignIcon = ({ width = "36", height = "36", ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M24.36 17.2633L26.715 14.9083L21.09 9.28334L18.735 11.6383L12.525 5.44334C11.355 4.27334 9.45 4.27334 8.28 5.44334L5.43 8.29334C4.26 9.46334 4.26 11.3683 5.43 12.5383L11.625 18.7333L4.5 25.8733V31.4983H10.125L17.265 24.3583L23.46 30.5533C24.885 31.9783 26.805 31.4533 27.705 30.5533L30.555 27.7033C31.725 26.5333 31.725 24.6283 30.555 23.4583L24.36 17.2633ZM13.77 16.6033L7.56 10.4083L10.395 7.55834L12.3 9.46334L10.53 11.2483L12.645 13.3633L14.43 11.5783L16.605 13.7533L13.77 16.6033ZM25.59 28.4383L19.395 22.2433L22.245 19.3933L24.42 21.5683L22.635 23.3533L24.75 25.4683L26.535 23.6833L28.44 25.5883L25.59 28.4383Z"
        fill="#242528"
      />
      <path
        d="M31.065 10.5583C31.65 9.97334 31.65 9.02834 31.065 8.44334L27.555 4.93334C26.85 4.22834 25.875 4.49834 25.44 4.93334L22.695 7.67834L28.32 13.3033L31.065 10.5583Z"
        fill="#242528"
      />
      <path
        d="M31.065 10.5583C31.65 9.97334 31.65 9.02834 31.065 8.44334L27.555 4.93334C26.85 4.22834 25.875 4.49834 25.44 4.93334L22.695 7.67834L28.32 13.3033L31.065 10.5583Z"
        fill="#242528"
      />
    </svg>
  );
};

const DevelopmentIcon = ({ width = `36`, height = `36`, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.5 7.5H25.5V10.5H28.5V4.5C28.5 2.85 27.15 1.515 25.5 1.515L10.5 1.5C8.85 1.5 7.5 2.85 7.5 4.5V10.5H10.5V7.5ZM23.115 24.885L30 18L23.115 11.115L21 13.245L25.755 18L21 22.755L23.115 24.885ZM15 22.755L10.245 18L15 13.245L12.885 11.115L6 18L12.885 24.885L15 22.755ZM25.5 28.5H10.5V25.5H7.5V31.5C7.5 33.15 8.85 34.5 10.5 34.5H25.5C27.15 34.5 28.5 33.15 28.5 31.5V25.5H25.5V28.5Z"
        fill="#242528"
      />
    </svg>
  );
};

const ItIcon = ({ width = `36`, height = `36`, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      {...props}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 27C31.65 27 32.985 25.65 32.985 24L33 9C33 7.35 31.65 6 30 6H6C4.35 6 3 7.35 3 9V24C3 25.65 4.35 27 6 27H0L0 30H36V27H30ZM6 9H30V24H6V9Z"
        fill="#242528"
      />
    </svg>
  );
};

const MarketIcon = ({ width = `36`, height = `36`, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      {...props}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5 21H13.5C13.5 13.545 19.545 7.5 27 7.5V10.5C21.195 10.5 16.5 15.195 16.5 21ZM27 16.5V13.5C22.86 13.5 19.5 16.86 19.5 21H22.5C22.5 18.51 24.51 16.5 27 16.5ZM10.5 6C10.5 4.335 9.165 3 7.5 3C5.835 3 4.5 4.335 4.5 6C4.5 7.665 5.835 9 7.5 9C9.165 9 10.5 7.665 10.5 6ZM17.175 6.75H14.175C13.815 8.88 11.985 10.5 9.75 10.5H5.25C4.005 10.5 3 11.505 3 12.75V16.5H12V13.11C14.79 12.225 16.875 9.765 17.175 6.75ZM28.5 25.5C30.165 25.5 31.5 24.165 31.5 22.5C31.5 20.835 30.165 19.5 28.5 19.5C26.835 19.5 25.5 20.835 25.5 22.5C25.5 24.165 26.835 25.5 28.5 25.5ZM30.75 27H26.25C24.015 27 22.185 25.38 21.825 23.25H18.825C19.125 26.265 21.21 28.725 24 29.61V33H33V29.25C33 28.005 31.995 27 30.75 27Z"
        fill="#242528"
      />
    </svg>
  );
};

const PhotographyIcon = ({ width = `36`, height = `36`, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      {...props}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 7.5H25.245L22.5 4.5H13.5L10.755 7.5H6C4.35 7.5 3 8.85 3 10.5V28.5C3 30.15 4.35 31.5 6 31.5H30C31.65 31.5 33 30.15 33 28.5V10.5C33 8.85 31.65 7.5 30 7.5ZM30 28.5H6V10.5H12.075L14.82 7.5H21.18L23.925 10.5H30V28.5Z"
        fill="#242528"
      />
      <path
        d="M18 19.5C19.6569 19.5 21 18.1569 21 16.5C21 14.8431 19.6569 13.5 18 13.5C16.3431 13.5 15 14.8431 15 16.5C15 18.1569 16.3431 19.5 18 19.5Z"
        fill="#242528"
      />
      <path
        d="M22.17 21.87C20.895 21.315 19.485 21 18 21C16.515 21 15.105 21.315 13.83 21.87C12.72 22.35 12 23.43 12 24.645V25.5H24V24.645C24 23.43 23.28 22.35 22.17 21.87Z"
        fill="#242528"
      />
    </svg>
  );
};

const CheckmarkCircleIcon = ({ width = `20`, height = `20`, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      {...props}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z"
        fill="currentColor"
      />
    </svg>
  );
};

const FacebookIcon = ({ width = `1em`, height = `1em`, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 256 256"
      {...props}
    >
      <title>facebook</title>
      <path
        fill="#1877f2"
        d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
      />
      <path
        fill="#fff"
        d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"
      />
    </svg>
  );
};

const GoogleIcon = ({ width = `1em`, height = `1em`, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      {...props}
      viewBox="0 0 128 128"
    >
      <title>google</title>
      <path
        fill="#fff"
        d="M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.3 74.3 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.2 36.2 0 0 1-13.93 5.5a41.3 41.3 0 0 1-15.1 0A37.2 37.2 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.3 38.3 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.3 34.3 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.2 61.2 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38"
      />
      <path
        fill="#e33629"
        d="M44.59 4.21a64 64 0 0 1 42.61.37a61.2 61.2 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.3 34.3 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21"
      />
      <path
        fill="#f8bd00"
        d="M3.26 51.5a63 63 0 0 1 5.5-15.9l20.73 16.09a38.3 38.3 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9"
      />
      <path
        fill="#587dbd"
        d="M65.27 52.15h59.52a74.3 74.3 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68"
      />
      <path
        fill="#319f43"
        d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.2 37.2 0 0 0 14.08 6.08a41.3 41.3 0 0 0 15.1 0a36.2 36.2 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.7 63.7 0 0 1 8.75 92.4"
      />
    </svg>
  );
};

const SpinnerIcon = ({ width = `1em`, height = `1em`, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      {...props}
      viewBox="0 0 24 24"
    >
      <title>12-dots-scale-rotate</title>
      <g>
        <circle cx="12" cy="3" r="1" fill="currentColor">
          <animate
            id="SVGelgoqhuA"
            attributeName="r"
            begin="0;SVGSRzJybSJ.end-0.5s"
            calcMode="spline"
            dur="0.6s"
            keySplines=".27,.42,.37,.99;.53,0,.61,.73"
            values="1;2;1"
          />
        </circle>
        <circle cx="16.5" cy="4.21" r="1" fill="currentColor">
          <animate
            id="SVGBcQu6cCi"
            attributeName="r"
            begin="SVGelgoqhuA.begin+0.1s"
            calcMode="spline"
            dur="0.6s"
            keySplines=".27,.42,.37,.99;.53,0,.61,.73"
            values="1;2;1"
          />
        </circle>
        <circle cx="7.5" cy="4.21" r="1" fill="currentColor">
          <animate
            id="SVGSRzJybSJ"
            attributeName="r"
            begin="SVGeZGzNdVZ.begin+0.1s"
            calcMode="spline"
            dur="0.6s"
            keySplines=".27,.42,.37,.99;.53,0,.61,.73"
            values="1;2;1"
          />
        </circle>
        <circle cx="19.79" cy="7.5" r="1" fill="currentColor">
          <animate
            id="SVGG5Q0fe0M"
            attributeName="r"
            begin="SVGBcQu6cCi.begin+0.1s"
            calcMode="spline"
            dur="0.6s"
            keySplines=".27,.42,.37,.99;.53,0,.61,.73"
            values="1;2;1"
          />
        </circle>
        <circle cx="4.21" cy="7.5" r="1" fill="currentColor">
          <animate
            id="SVGeZGzNdVZ"
            attributeName="r"
            begin="SVGUTnihcal.begin+0.1s"
            calcMode="spline"
            dur="0.6s"
            keySplines=".27,.42,.37,.99;.53,0,.61,.73"
            values="1;2;1"
          />
        </circle>
        <circle cx="21" cy="12" r="1" fill="currentColor">
          <animate
            id="SVG8aQG8dpc"
            attributeName="r"
            begin="SVGG5Q0fe0M.begin+0.1s"
            calcMode="spline"
            dur="0.6s"
            keySplines=".27,.42,.37,.99;.53,0,.61,.73"
            values="1;2;1"
          />
        </circle>
        <circle cx="3" cy="12" r="1" fill="currentColor">
          <animate
            id="SVGUTnihcal"
            attributeName="r"
            begin="SVGHktsvT5Q.begin+0.1s"
            calcMode="spline"
            dur="0.6s"
            keySplines=".27,.42,.37,.99;.53,0,.61,.73"
            values="1;2;1"
          />
        </circle>
        <circle cx="19.79" cy="16.5" r="1" fill="currentColor">
          <animate
            id="SVGqCF3Scrd"
            attributeName="r"
            begin="SVG8aQG8dpc.begin+0.1s"
            calcMode="spline"
            dur="0.6s"
            keySplines=".27,.42,.37,.99;.53,0,.61,.73"
            values="1;2;1"
          />
        </circle>
        <circle cx="4.21" cy="16.5" r="1" fill="currentColor">
          <animate
            id="SVGHktsvT5Q"
            attributeName="r"
            begin="SVGSFNCBbxb.begin+0.1s"
            calcMode="spline"
            dur="0.6s"
            keySplines=".27,.42,.37,.99;.53,0,.61,.73"
            values="1;2;1"
          />
        </circle>
        <circle cx="16.5" cy="19.79" r="1" fill="currentColor">
          <animate
            id="SVGMFYo1cJN"
            attributeName="r"
            begin="SVGqCF3Scrd.begin+0.1s"
            calcMode="spline"
            dur="0.6s"
            keySplines=".27,.42,.37,.99;.53,0,.61,.73"
            values="1;2;1"
          />
        </circle>
        <circle cx="7.5" cy="19.79" r="1" fill="currentColor">
          <animate
            id="SVGSFNCBbxb"
            attributeName="r"
            begin="SVGLSoLpdOI.begin+0.1s"
            calcMode="spline"
            dur="0.6s"
            keySplines=".27,.42,.37,.99;.53,0,.61,.73"
            values="1;2;1"
          />
        </circle>
        <circle cx="12" cy="21" r="1" fill="currentColor">
          <animate
            id="SVGLSoLpdOI"
            attributeName="r"
            begin="SVGMFYo1cJN.begin+0.1s"
            calcMode="spline"
            dur="0.6s"
            keySplines=".27,.42,.37,.99;.53,0,.61,.73"
            values="1;2;1"
          />
        </circle>
        <animateTransform
          attributeName="transform"
          dur="6s"
          repeatCount="indefinite"
          type="rotate"
          values="360 12 12;0 12 12"
        />
      </g>
    </svg>
  );
};

const UserIcon = ({ width = `1em`, height = `1em`, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      {...props}
    >
      <title>user-line</title>
      <path
        fill="currentColor"
        d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 0 0-12 0zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4"
      />
    </svg>
  );
};

export {
  CartIcon,
  SearchIcon,
  AdidasIcon,
  NikeIcon,
  ToyotaIcon,
  NetworkBarsIcon,
  BusinessIcon,
  DesignIcon,
  DevelopmentIcon,
  ItIcon,
  MarketIcon,
  PhotographyIcon,
  CheckmarkCircleIcon,
  FacebookIcon,
  GoogleIcon,
  SpinnerIcon,
  UserIcon,
};
