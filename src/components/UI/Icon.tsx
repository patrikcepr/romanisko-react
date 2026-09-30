/* eslint-disable max-len -- SVG path data */
import { ReactNode, SVGProps } from "react";

const PATHS = {
    clock: (
        <>
            <circle cx="12" cy="12" r="8.5" />
            <path d="M12 7.5V12l3 2" />
        </>
    ),
    pin: (
        <>
            <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
            <circle cx="12" cy="10" r="2.3" />
        </>
    ),
    coins: (
        <>
            <ellipse cx="12" cy="5.5" rx="6.5" ry="2.25" />
            <path d="M5.5 5.5v13c0 1.24 2.91 2.25 6.5 2.25s6.5-1.01 6.5-2.25v-13" />
            <path d="M5.5 9.75c0 1.24 2.91 2.25 6.5 2.25s6.5-1.01 6.5-2.25" />
            <path d="M5.5 14c0 1.24 2.91 2.25 6.5 2.25s6.5-1.01 6.5-2.25" />
        </>
    ),
    phone: (
        <path d="M6.6 3.5h2.6l1.4 4-1.9 1.3a11 11 0 0 0 6.5 6.5l1.3-1.9 4 1.4v2.6a2 2 0 0 1-2.2 2A15.5 15.5 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z" />
    ),
    mail: (
        <>
            <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
            <path d="m4 6.5 8 6.5 8-6.5" />
        </>
    ),
    video: (
        <>
            <rect x="3.5" y="6.5" width="12" height="11" rx="1.5" />
            <path d="m15.5 10.5 5-3v9l-5-3" />
        </>
    ),
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    external: (
        <path d="M14 4.5h5.5V10M19.5 4.5 11 13M17.5 14v4a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 18V8A1.5 1.5 0 0 1 6 6.5h4" />
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="M6 6l12 12M18 6 6 18" />,
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof PATHS;

type Props = SVGProps<SVGSVGElement> & { name: IconName; size?: number };

/** Simple line icon; always decorative – label the surrounding control instead. */
export const Icon = ({ name, size = 24, ...rest }: Props) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
        {...rest}
    >
        {PATHS[name]}
    </svg>
);
