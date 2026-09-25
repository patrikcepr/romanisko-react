/* eslint-disable max-len -- SVG path data */
import { ReactNode } from "react";

import styles from "./Terapie.module.scss";

const PETALS = [0, 60, 120, 180, 240, 300];

// Hand-drawn looking line marks (decorative only). All drawn inside a 48 × 48 box with a safe margin.
const MARKS: Record<string, ReactNode> = {
    orbit: (
        <>
            <path d="M24.6 13.2c6.1.2 10.6 5.1 10.3 11.1-.3 6-5.4 10.6-11.4 10.2-5.8-.3-10.2-5.2-9.9-11 .3-5.9 5.1-10.5 11-10.3Z" />
            <path d="M6.2 39.6C3.8 36.9 11 27.6 22.4 19c11.2-8.4 21.4-12.4 23.4-9.9 2 2.5-5.2 11.4-16.2 19.6C18 37 8.4 42 6.2 39.6Z" />
            <path d="M17.2 18.8c3.7 1.4 9.1 6.5 12.4 11.6" />
            <path d="M15 24.2c3.2 1.2 7 4.6 9.3 8.6" />
        </>
    ),
    flower: (
        <>
            {PETALS.map((angle) => (
                <path
                    key={angle}
                    d="M24 20.4c-4-3.6-5.6-9.6-3.6-13.2 1.7-2.9 5.5-2.9 7.2 0 2 3.6.4 9.6-3.6 13.2Z"
                    transform={`rotate(${angle} 24 24)`}
                />
            ))}
            <circle cx="24" cy="24" r="2.8" />
        </>
    ),
    rings: (
        <>
            <path d="M24.4 5.6c10.4-.2 18.3 7.8 18.1 18.3-.2 10.2-8.3 18.3-18.6 18.5C13.7 42.6 5.5 34.5 5.5 24.2 5.5 14 13.8 5.8 24.4 5.6Z" />
            <path d="M24.6 11.6c7-.1 12.3 5.2 12.2 12.3-.1 6.9-5.6 12.3-12.6 12.4-6.9.1-12.3-5.3-12.3-12.2 0-6.9 5.6-12.4 12.7-12.5Z" />
            <path d="M24.5 17.6c3.6 0 6.3 2.8 6.3 6.4-.1 3.5-2.9 6.3-6.5 6.3-3.5 0-6.2-2.8-6.2-6.3 0-3.6 2.8-6.4 6.4-6.4Z" />
        </>
    ),
    wave: (
        <>
            <path d="M4 20.5c3.7-4.2 6.7-3.9 9.9-.5 3.3 3.5 6.3 3.6 9.5.1 3.2-3.5 6.2-3.7 9.6-.2 3.1 3.3 6 3.2 9-.2" />
            <path d="M4 29c3.6-4 6.8-3.8 10-.4 3.2 3.4 6.2 3.5 9.4.1 3.3-3.5 6.2-3.5 9.6-.1 3.1 3.2 6 3.2 9-.1" />
        </>
    ),
    polygon: <path d="M15.8 6.8 33 6.4l9.4 16.2-8.3 17.2-18.2 1L5.6 23.3Z" />,
    arc: <path d="M6.8 34.5c-.4-10.8 7.4-19.6 17.4-19.9 10-.3 17.5 8 17.1 19.9-11.4.5-23 .5-34.5 0Z" />,
};

const TOPICS = [
    {
        mark: "orbit",
        title: "Stres a náročné situace",
        text: "značný stres, problémy ve vztazích, v práci nebo jiných oblastech života",
    },
    { mark: "flower", title: "Deprese, úzkost", text: "duševní problémy jako deprese, úzkost, pocity méněcennosti a viny" },
    { mark: "rings", title: "Hledání vlastní identity", text: "nejasný pocit vlastní identity" },
    { mark: "wave", title: "Sebevražedné myšlenky", text: "myšlenky na sebevraždu, sebevražedné chování" },
    { mark: "polygon", title: "Využití vlastního potenciálu", text: "objevování a využití vlastního potenciálu" },
    { mark: "arc", title: "Smysl, nadhled, humor", text: "nalézání smyslu bytí, moudrosti, nadhledu i humoru" },
];

/** Short dry-brush stroke in the ochre accent. */
const BrushStroke = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 -8 130 50" aria-hidden="true" focusable="false">
        <defs>
            <filter id="brush-dry" x="-10%" y="-60%" width="120%" height="220%">
                <feTurbulence type="fractalNoise" baseFrequency="0.035 0.9" numOctaves="2" seed="11" result="streaks" />
                <feColorMatrix
                    in="streaks"
                    type="matrix"
                    values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -1.9 1.95"
                    result="gaps"
                />
                <feComposite in="SourceGraphic" in2="gaps" operator="in" result="dry" />
                <feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="2" seed="4" result="edge" />
                <feDisplacementMap in="dry" in2="edge" scale="3.5" />
            </filter>
        </defs>
        <g filter="url(#brush-dry)" transform="rotate(-10 65 17)">
            <path
                d="M4 22.5c10-3.6 24-6.8 41-8.6 23-2.4 46-3.6 71-3.8 5.6 0 9.6 2.4 10 5.8.4 3.8-3.2 6.8-9 7.6-24 3.2-48 4.8-71 5.6-14 .5-27 .6-38 .1-4.4-.2-6.6-4.8-4-6.7Z"
                fill="currentColor"
            />
        </g>
    </svg>
);

export const Terapie = () => (
    <section id="terapie" className={`section ${styles.terapie}`} aria-labelledby="terapie-title">
        <div className={`container ${styles.grid}`}>
            <h2 id="terapie-title" className={`section-title ${styles.title}`} data-reveal>
                S čím za mnou lidé nejčastěji přicházejí
            </h2>

            <ul className={styles.list} data-reveal>
                {TOPICS.map((topic) => (
                    <li key={topic.mark} className={styles.item}>
                        <svg
                            className={styles.mark}
                            viewBox="0 0 48 48"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.9"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                            focusable="false"
                        >
                            {MARKS[topic.mark]}
                        </svg>
                        <div>
                            <h3 className={styles["item-title"]}>{topic.title}</h3>
                            <p className={styles["item-text"]}>{topic.text}</p>
                        </div>
                    </li>
                ))}
            </ul>

            <div className={styles.statement}>
                <div className={styles["statement-body"]} data-reveal>
                    <p className={styles["statement-text"]}>
                        Cílem našich sezení je převzít plnou odpovědnost za&nbsp;svůj život a hlásit se ke své důstojnosti.
                    </p>
                    <BrushStroke className={styles.stroke} />
                </div>
            </div>
        </div>
    </section>
);
