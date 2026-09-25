import { IconName } from "components/UI/Icon";

const ADDRESS_QUERY = "Letenské náměstí 1, 170 00 Praha 7";

export const CONTACT = {
    name: "Roman Arpáš",
    street: "Letenské náměstí 1",
    city: "Praha 7",
    phone: "+420 773 242 200",
    phoneHref: "tel:+420773242200",
    email: "roman.arpas1@gmail.com",
    emailHref: "mailto:roman.arpas1@gmail.com",
    mapsHref: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_QUERY)}`,
    mapEmbedSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d639.812932241724!2d14.42240872926363!3d50.100295058960135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94c536401c7f%3A0x7cf0521a90c39527!2sLetensk%C3%A9%20n%C3%A1m.%201%2C%20170%2000%20Praha%207-Hole%C5%A1ovice!5e0!3m2!1sen!2scz!4v1664530760051!5m2!1sen!2scz",
    /** Set to `null` to hide Skype everywhere on the site. */
    skype: { label: "Roman Arpáš", href: "skype:Roman Arpáš" } as { label: string; href: string } | null,
};

export const FACTS: { icon: IconName; value: string; label: string }[] = [
    { icon: "clock", value: "55 minut", label: "délka setkání" },
    { icon: "pin", value: "Praha 7 / online", label: "osobně nebo videohovor" },
    { icon: "coins", value: "1 000 Kč", label: "jedno sezení" },
];
