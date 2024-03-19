import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="50"
      height="35"
      viewBox="0 0 50 35"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path d="M43.9609 12.3203C43.9609 11.1484 43.7969 10.125 43.4688 9.25C43.1562 8.35938 42.7344 7.64844 42.2031 7.11719C41.6875 6.57031 41.0391 6.13281 40.2578 5.80469C39.4766 5.46094 38.6719 5.22656 37.8438 5.10156C37.0312 4.97656 36.1172 4.91406 35.1016 4.91406H29.5234C29.3203 4.91406 29.1562 4.90625 29.0312 4.89062C28.9219 4.875 28.8203 4.82812 28.7266 4.75C28.6484 4.65625 28.6094 4.53125 28.6094 4.375C28.6094 3.70312 29.0547 3 29.9453 2.26562C30.8359 1.53125 31.7344 1.14844 32.6406 1.11719L37.0938 1.04688C37.7344 1.04688 38.3438 1.07031 38.9219 1.11719C39.5 1.14844 40.2031 1.25 41.0312 1.42188C41.8594 1.57812 42.6172 1.78906 43.3047 2.05469C43.9922 2.32031 44.6953 2.71094 45.4141 3.22656C46.1484 3.72656 46.7578 4.32031 47.2422 5.00781C47.7422 5.69531 48.1484 6.5625 48.4609 7.60938C48.7891 8.65625 48.9531 9.82031 48.9531 11.1016C48.9531 14.4453 47.2891 17.2656 43.9609 19.5625C43.4766 19.9062 43.2344 20.2656 43.2344 20.6406C43.2344 20.9219 43.3672 21.2656 43.6328 21.6719L49.1172 30.4844C49.4609 31.0469 49.6328 31.5312 49.6328 31.9375C49.6328 32.5625 49.2188 33.1172 48.3906 33.6016C47.7188 34.0234 47.1016 34.2344 46.5391 34.2344C46.0234 34.2344 45.5703 33.8984 45.1797 33.2266L38.6875 21.8594C38.5 21.5781 38.4062 21.3047 38.4062 21.0391C38.4062 20.6016 38.7031 20.2109 39.2969 19.8672C40.8281 19.0078 41.9844 17.9219 42.7656 16.6094C43.5625 15.2969 43.9609 13.8672 43.9609 12.3203ZM28.6094 18.9062V7.65625C28.6094 7.09375 28.7969 6.72656 29.1719 6.55469C29.5625 6.36719 30.1562 6.27344 30.9531 6.27344C31.8281 6.27344 32.4375 6.36719 32.7812 6.55469C33.1406 6.72656 33.3203 7.09375 33.3203 7.65625V16.1875C33.3203 16.8594 33.6172 17.1953 34.2109 17.1953H38.3125C38.9844 17.1953 39.3203 17.3906 39.3203 17.7812C39.3203 18.1562 38.9531 18.5938 38.2188 19.0938C37.4844 19.5781 36.5781 19.9844 35.5 20.3125C34.8438 20.5156 33.2188 20.6172 30.625 20.6172C29.8281 20.6172 29.2891 20.4766 29.0078 20.1953C28.7422 19.9141 28.6094 19.4844 28.6094 18.9062ZM33.3203 23.4766V30.7422C33.3203 31.5078 33.1562 32.0781 32.8281 32.4531C32.4375 32.9219 31.8828 33.3359 31.1641 33.6953C30.4609 34.0547 29.8828 34.2344 29.4297 34.2344C28.8828 34.2344 28.6094 33.8984 28.6094 33.2266V23.4766C28.6094 22.9141 28.8047 22.5312 29.1953 22.3281C29.6016 22.125 30.2031 22.0234 31 22.0234C31.8594 22.0234 32.4609 22.125 32.8047 22.3281C33.1484 22.5156 33.3203 22.8984 33.3203 23.4766Z" />
          <path d="M7.60938 26.7812L6.29688 30.7422C5.96875 31.7422 5.39844 32.5781 4.58594 33.25C3.77344 33.9062 2.85938 34.2344 1.84375 34.2344C1.59375 34.2344 1.38281 34.1641 1.21094 34.0234C1.05469 33.8984 0.976562 33.7109 0.976562 33.4609C0.976562 33.3672 1.00781 33.2266 1.07031 33.0391L3.32031 26.5938C3.42969 26.2656 3.54688 26.0156 3.67188 25.8438C3.79688 25.6562 3.96875 25.5234 4.1875 25.4453C4.42188 25.3672 4.625 25.3203 4.79688 25.3047C4.98438 25.2891 5.29688 25.2812 5.73438 25.2812C6.09375 25.2812 6.35938 25.2891 6.53125 25.3047C6.70312 25.3047 6.89844 25.3281 7.11719 25.375C7.35156 25.4219 7.51562 25.5078 7.60938 25.6328C7.70312 25.7422 7.75 25.8984 7.75 26.1016C7.75 26.2422 7.70312 26.4688 7.60938 26.7812ZM15.3203 1.39844L25.3047 30.4375C25.4141 30.9375 25.4688 31.2188 25.4688 31.2812C25.4688 31.9531 25.0781 32.6172 24.2969 33.2734C23.5156 33.9141 22.8281 34.2344 22.2344 34.2344C21.7188 34.2344 21.3203 33.8359 21.0391 33.0391L11.2891 4.58594C11.1328 3.88281 11.0547 3.50781 11.0547 3.46094C11.0547 2.77344 11.4844 2.09375 12.3438 1.42188C13.2188 0.734375 13.8906 0.390625 14.3594 0.390625C14.625 0.390625 14.8125 0.460938 14.9219 0.601562C15.0469 0.726562 15.1797 0.992188 15.3203 1.39844ZM14.8984 23.875H5.38281C4.78906 23.875 4.49219 23.6172 4.49219 23.1016C4.49219 22.9609 4.52344 22.8047 4.58594 22.6328L9.39062 8.26562C9.60938 7.65625 9.85938 7.35156 10.1406 7.35156C10.3906 7.35156 10.6094 7.50781 10.7969 7.82031C10.9844 8.11719 11.1875 8.60156 11.4062 9.27344C11.8125 10.5391 12.0156 11.4844 12.0156 12.1094C12.0156 12.5469 11.9375 13.0078 11.7812 13.4922L9.95312 19.0703C9.92188 19.1484 9.90625 19.2578 9.90625 19.3984C9.90625 19.8203 10.1484 20.0312 10.6328 20.0312H13.0703C13.8672 20.0312 14.4062 20.0703 14.6875 20.1484C14.9688 20.2266 15.1953 20.4453 15.3672 20.8047C15.5234 21.1172 15.6484 21.5234 15.7422 22.0234C15.8516 22.5078 15.9062 22.8672 15.9062 23.1016C15.9062 23.6172 15.5703 23.875 14.8984 23.875Z" />
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
