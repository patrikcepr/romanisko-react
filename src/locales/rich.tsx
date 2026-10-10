import { Fragment, ReactNode } from "react";

type TagRenderer = (children?: ReactNode) => ReactNode;

const TAG = /<(\w+)\s*\/>|<(\w+)>([\s\S]*?)<\/\2>/g;

/**
 * Renders a catalogue text with inline tags, e.g. `"kontaktovat <phone>telefonicky</phone>"` or `"Terapie <br/>jako …"`.
 * Tags are not nested; an unknown tag throws so a typo in cs.json fails the prerender instead of shipping raw markup.
 */
export const rich = (text: string, tags: Record<string, TagRenderer> = {}): ReactNode => {
    const parts: ReactNode[] = [];
    let last = 0;

    for (const match of text.matchAll(TAG)) {
        const [whole, selfClosing, name, inner] = match;
        const tag = selfClosing ?? name;
        const render = tags[tag];
        if (!render) throw new Error(`rich(): unknown tag <${tag}> in "${text}"`);

        if (match.index > last) parts.push(text.slice(last, match.index));
        parts.push(<Fragment key={match.index}>{selfClosing ? render() : render(inner)}</Fragment>);
        last = match.index + whole.length;
    }
    if (last < text.length) parts.push(text.slice(last));

    return parts;
};
