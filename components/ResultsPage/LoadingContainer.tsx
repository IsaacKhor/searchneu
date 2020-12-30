/*
 * This file is part of Search NEU and licensed under AGPL3.
 * See the license file in the root folder for details.
 */
import React, { ReactElement, useEffect, useState } from 'react';
import '../../css/_LoadingContainer.scss';

/**
 * Page that displays while results aren't ready
 */
export default function LoadingContainer(): ReactElement {
  const [doAnimation, setDoAnimation] = useState(true);
  const halfSecond = 500;

  useEffect(() => {
    const timer = setTimeout(() => setDoAnimation(false), halfSecond);
    return () => clearTimeout(timer);
  }, []);

  return doAnimation ? (
    <div style={{ visibility: 'hidden' }} />
  ) : (
    <div className="loader">
      <svg
        width="100"
        height="100"
        viewBox="0 0 30 30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="path"
          stroke="#d41b2c"
          strokeWidth=".75"
          d="M20.2641 14.3784L20.0517 14.6298L18.2233 13.2152L18.4357 12.9639L17.6998 12.3894L16.7287 13.5168L15.75 14.6441L16.4859 15.2186L16.7059 14.9672L18.5343 16.3818L18.3143 16.6331L19.0502 17.2076L20.0289 16.0802L21 14.9457L20.2641 14.3784Z"
          fill="none"
        />
        <path
          className="path"
          stroke="#d41b2c"
          strokeWidth=".75"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.0972 0.47725C15.3355 1.53937 17.6151 4.21614 17.9514 7.35144C18.0703 8.3873 17.9706 9.43444 17.6578 10.4358C17.5845 10.7122 17.4866 10.9512 17.3888 11.1827L17.2828 11.3993C17.2238 11.5312 17.1596 11.6535 17.0944 11.7778C17.0784 11.8083 17.0623 11.8389 17.0463 11.8698L16.8995 12.1162C16.818 12.2556 16.7283 12.395 16.6304 12.5344L16.4674 12.766L16.3777 12.8929L16.8587 13.2514L16.4755 13.6771L16.0923 14.1028L15.603 13.7368C13.507 15.9287 10.2935 16.93 7.17303 16.3634C4.05252 15.7968 1.49907 13.7484 0.474553 10.9899C-0.549965 8.23142 0.110093 5.18185 2.20609 2.98995C2.39635 2.78084 2.59748 2.57919 2.80948 2.38502C5.24237 0.158005 8.85897 -0.584869 12.0972 0.47725ZM11.3465 14.844C13.7917 14.1531 15.6962 12.3857 16.4184 10.1371H16.4591C17.4884 6.94626 15.9196 3.53312 12.7085 1.97736C9.49738 0.421604 5.53406 1.15442 3.2334 3.72931C4.00951 4.33658 4.65877 5.06789 5.14958 5.88765C6.07312 7.49644 6.27778 9.37103 5.72036 11.1155C5.39287 12.0057 4.89901 12.8371 4.2608 13.5725C6.2406 15.0576 8.90121 15.535 11.3465 14.844Z"
          fill="none"
        />
      </svg>
    </div>
  );
}
