export {};

declare global {
    interface Window {
        ENV: {
            CURRENT_YEAR: number;
        };
    }
}
