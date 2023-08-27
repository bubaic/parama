const useStore = () => {
  const defaultSiteTitle = "| Parama's Parlour";
  const openingStats = {
    days: { from: "monday", to: "sunday" },
    time: { from: "10:00", to: "07:30" },
  };
  const serviceList = [
    {
      name: "Nail arts & polishing",
      imgSrc: "/images/services/nail-art.svg",
    },
    {
      name: "hair-cutting & dressing",
      imgSrc: "/images/services/hair-cutting.svg",
    },
    {
      name: "bridal makeover",
      imgSrc: "/images/services/bridal-makeover.svg",
    },
    {
      name: "spa & massage",
      imgSrc: "/images/services/spa.svg",
    },
    {
      name: "threading & waxing",
      imgSrc: "/images/services/waxing.svg",
    },
    {
      name: "manicure",
      imgSrc: "/images/services/manicure.svg",
    },
    {
      name: "skincare & treatments",
      imgSrc: "/images/services/skin-treatments.svg",
    },
    {
      name: "pedicure",
      imgSrc: "/images/services/pedicure.svg",
    },
    {
      name: "make-up essentials",
      imgSrc: "/images/services/makeup.svg",
    },
    {
      name: "hair treatments & coloring",
      imgSrc: "/images/services/hair-color.svg",
    },
    {
      name: "grooming & makeover",
      imgSrc: "/images/services/makeover.svg",
    },
  ];

  return {
    defaultSiteTitle,
    openingStats,
    serviceList,
  };
};

export { useStore };
