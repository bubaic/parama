import { MediaItem } from "types";

const useStore = () => {
  const defaultSiteTitle = "| Parama's Parlour";

  const openingStats = {
    days: { from: "monday", to: "sunday" },
    time: { from: "10:00", to: "07:30" },
  };

  const serviceList: Array<MediaItem> = [
    {
      title: "manicure",
      src: "/images/services/nail-art.svg",
      details: {
        text: "Get ready to flaunt your beautiful hands with our expert manicure services! Our skilled beauticians will pamper your hands and leave them looking gorgeous. Say goodbye to dull, tired-looking nails and hello to perfectly polished fingers that are sure to make heads turn!",
        video: "/videos/vid-001.mp4",
      },
    },
    {
      title: "hair treatments & coloring",
      src: "/images/services/hair-color.svg",
      details: {
        text: "Say goodbye to bad hair days & old fashioned black hair with Hair Treatments & fun Coloring by Parama! Our expertly trained hair gurus are here to solve all your hair woes, leaving you with luscious locks with gorgeous colors that will turn heads. Trust us, we've got this.",
        video: "/videos/vid-002.mp4",
      },
    },
    {
      title: "skincare & treatments",
      src: "/images/services/skin-treatments.svg",
      details: {
        text: `
          At Parama's Parlour, we offer a range of skin care and 
          treatments to help you look and feel your best. Our services
          include: Facials, Chemical Peels, body wraps, body scrubs,
          and body masks.
        `,
        video: "/videos/vid-003.mp4",
      },
    },
    {
      title: "make-up essentials",
      src: "/images/services/makeup.svg",
      details: {
        text: `
          Get ready to slay every look with Parama Parlour's expert makeup
          artists! From subtle glow-ups to bold transformations, trust us to
          elevate your beauty game like never before. Let our skilled
          professionals work their magic and leave you feeling confident and
          gorgeous!
        `,
        video: "/videos/vid-004.mp4",
      },
    },
    {
      title: "pedicure",
      src: "/images/services/pedicure.svg",
      details: {
        text: `
          Step into bliss with our luxurious pedicure services at Parama
          parlour. Our expert beauticians will pamper your feet, leaving
          them feeling soft, smooth and revitalized. Give yourself the
          treat you deserve
        `,
        video: "/videos/vid-005.mp4",
      },
    },
    {
      title: "threading & waxing",
      src: "/images/services/waxing.svg",
      details: {
        text: `
          Unleash your confidence with flawless, hair-free skin! Our expert
          beauticians at Parama Parlour have got you covered for all your
          threading and waxing needs. Say goodbye to unwanted hairs & hello
          to a new level of self-assurance.
        `,
        video: "/videos/vid-006.mp4",
      },
    },
    {
      title: "hair-cutting & dressing",
      src: "/images/services/hair-cutting.svg",
      details: {
        text: "At Parama parlor, we take hair care seriously. Our trained experts know exactly how to give you the perfect haircut and style that will make heads turn wherever you go. Whether it's a trendy bob or glamorous curls, we've got you covered. Trust us to transform your locks into an enviable mane that exudes confidence and beauty",
        video: "/videos/vid-007.mp4",
      },
    },
    {
      title: "spa & massage",
      src: "/images/services/spa.svg",
      details: {
        text: "Indulge in ultimate relaxation with our unrivaled spa and massage services at Parama. Our expert beauticians are dedicated to providing you with a rejuvenating experience that will leave you feeling confident and refreshed.",
        video: "/videos/vid-008.mp4",
      },
    },
    {
      title: "grooming & makeover",
      src: "/images/services/makeover.svg",
      details: {
        text: `
          Get ready to slay every look with Parama Parlour's expert makeup
          artists! From subtle glow-ups to bold transformations, trust us to
          elevate your beauty game like never before. Let our skilled
          professionals work their magic and leave you feeling confident and
          gorgeous!
        `,
        video: "/videos/vid-009.mp4",
      },
    },
    {
      title: "bridal makeover",
      src: "/images/services/bridal-makeover.svg",
      details: {
        text: "Ladies, your wedding day is the most important day of your life! You deserve to look and feel like royalty on this special occasion. our beauty experts have mastered the art of bridal makeup and are eager to make you feel like a million bucks on your big day. Trust us, with our expert touch, all eyes will be on you as you walk down that aisle. Trust us to make you shine on your big day!",
        video: "/videos/vid-010.mp4",
      },
    },
  ];

  return {
    defaultSiteTitle,
    openingStats,
    serviceList,
  };
};

export { useStore };
