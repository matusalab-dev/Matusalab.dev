import Link from "next/link";

export const SocialIcons = ({ styleIcons }) => {
  // change shape of github icons into rectangular
  return (
    <div
      className={`max-w-40 sm:h-max xs:self-end gap-6 justify-between items-center mx-auto xs:mx-0 ${styleIcons}`}
    >
      <Link
        href="mailto:www.mtslabrh97@gmail.com"
        target="_blank"
        title="Email"
      >
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 15 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.75 0H14.25C14.6642 0 15 0.348227 15 0.777778V13.2222C15 13.6518 14.6642 14 14.25 14H0.75C0.33579 14 0 13.6518 0 13.2222V0.777778C0 0.348227 0.33579 0 0.75 0ZM13.5 3.29616L7.55385 8.81844L1.5 3.27906V12.4444H13.5V3.29616ZM1.88359 1.55556L7.54643 6.73711L13.1257 1.55556H1.88359Z"
            fill="currentColor"
          ></path>
        </svg>
      </Link>
      <Link
        href="https://github.com/matusalab-dev"
        target="_blank"
        title="Github"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.3em"
          height="1.3em"
          viewBox="0 -2 24 24"
          fill="currentColor"
        >
          <path d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"></path>
        </svg>
      </Link>
      <Link href="http://twitter.com/matusalab" target="_blank" title="Twitter">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 15 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.77273 0H0L5.6324 7.71015L0.306784 13.9999H2.11362L6.4693 8.8557L10.2273 14H15L9.1307 5.96561L14.1819 0H12.3751L8.29384 4.82005L4.77273 0ZM10.9091 12.6L2.72727 1.4H4.09091L12.2727 12.6H10.9091Z"
            fill="currentColor"
          ></path>
        </svg>
      </Link>
      <Link
        href="http://instagram.com/matusalab"
        target="_blank"
        title="Instagram"
      >
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 15 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.50001 5.6C6.25696 5.6 5.25 6.67448 5.25 8C5.25 9.32584 6.25733 10.4 7.50001 10.4C8.74298 10.4 9.75001 9.32552 9.75001 8C9.75001 6.67416 8.74268 5.6 7.50001 5.6ZM7.50001 4C9.57031 4 11.25 5.78968 11.25 8C11.25 10.2084 9.57218 12 7.50001 12C5.42964 12 3.75 10.2103 3.75 8C3.75 5.79162 5.42782 4 7.50001 4ZM12.375 3.79932C12.375 4.35141 11.9544 4.79934 11.4375 4.79934C10.9199 4.79934 10.5 4.35072 10.5 3.79932C10.5 3.24792 10.9205 2.8 11.4375 2.8C11.9537 2.7993 12.375 3.24792 12.375 3.79932ZM7.50001 1.6C5.64414 1.6 5.34165 1.60524 4.47846 1.64624C3.89037 1.67569 3.49616 1.76006 3.12988 1.91174C2.80438 2.04639 2.56958 2.20718 2.3194 2.47404C2.06827 2.74192 1.91779 2.9917 1.79206 3.33906C1.64953 3.73066 1.57046 4.15049 1.54335 4.77692C1.50454 5.66016 1.5 5.96884 1.5 8C1.5 9.9796 1.50491 10.3022 1.54334 11.2229C1.57096 11.8499 1.65016 12.271 1.79202 12.6608C1.91859 13.0085 2.06964 13.2595 2.31861 13.5251C2.57074 13.7937 2.80561 13.9547 3.12816 14.0875C3.4989 14.2404 3.89287 14.3249 4.47835 14.3538C5.30639 14.3951 5.59578 14.4 7.50001 14.4C9.35588 14.4 9.65836 14.3947 10.5215 14.3538C11.108 14.3244 11.5031 14.2397 11.8695 14.0885C12.1946 13.9538 12.4307 13.7922 12.6798 13.5268C12.932 13.2574 13.0826 13.0075 13.2073 12.6626C13.3502 12.2686 13.4296 11.8478 13.4567 11.2231C13.4954 10.3398 13.5 10.0311 13.5 8C13.5 6.02042 13.4951 5.69777 13.4567 4.7771C13.4291 4.15125 13.3496 3.72919 13.2077 3.33854C13.0818 2.9923 12.9305 2.74108 12.6806 2.47404C12.429 2.20572 12.1955 2.04554 11.8696 1.91154C11.5028 1.75963 11.1086 1.67517 10.5216 1.64625C9.69361 1.60484 9.40418 1.6 7.50001 1.6ZM7.50001 0C9.53746 0 9.79186 0.00799995 10.5919 0.048C11.39 0.087336 11.9344 0.222 12.4125 0.42C12.9068 0.623336 13.3244 0.898 13.7412 1.34266C14.1575 1.78734 14.415 2.234 14.6063 2.76C14.7912 3.26934 14.9175 3.85066 14.955 4.702C14.9906 5.55534 15 5.82666 15 8C15 10.1734 14.9925 10.4446 14.955 11.298C14.9181 12.1494 14.7912 12.73 14.6063 13.24C14.4156 13.7674 14.1575 14.2126 13.7412 14.6574C13.3244 15.1014 12.905 15.376 12.4125 15.58C11.9344 15.7774 11.39 15.912 10.5919 15.952C9.79186 15.99 9.53746 16 7.50001 16C5.46249 16 5.20812 15.992 4.40812 15.952C3.60999 15.9126 3.06624 15.7774 2.5875 15.58C2.09374 15.3766 1.67562 15.1014 1.25875 14.6574C0.841874 14.2126 0.585 13.7654 0.39375 13.24C0.208125 12.73 0.0825001 12.1494 0.0450001 11.298C0.00937513 10.4446 0 10.1734 0 8C0 5.82666 0.00750013 5.55534 0.0450001 4.702C0.0818701 3.85 0.208125 3.27 0.39375 2.76C0.58437 2.23334 0.841874 1.78734 1.25875 1.34266C1.67562 0.898 2.09437 0.624 2.5875 0.42C3.06562 0.222 3.60937 0.088 4.40812 0.048C5.20812 0.00999995 5.46249 0 7.50001 0Z"
            fill="currentColor"
          ></path>
        </svg>
      </Link>
    </div>
  );
};