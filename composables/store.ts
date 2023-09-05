const useStore = () => {
  const defaultSiteTitle = "| Parama's Parlour";
  const openingStats = {
    days: { from: "monday", to: "sunday" },
    time: { from: "10:00", to: "07:30" },
  };
  const serviceList = [
    {
      name: "Nail arts & polishing",
      src: "/images/services/nail-art.svg",
    },
    {
      name: "hair-cutting & dressing",
      src: "/images/services/hair-cutting.svg",
    },
    {
      name: "bridal makeover",
      src: "/images/services/bridal-makeover.svg",
    },
    {
      name: "spa & massage",
      src: "/images/services/spa.svg",
    },
    {
      name: "threading & waxing",
      src: "/images/services/waxing.svg",
    },
    {
      name: "manicure",
      src: "/images/services/manicure.svg",
    },
    {
      name: "skincare & treatments",
      src: "/images/services/skin-treatments.svg",
    },
    {
      name: "pedicure",
      src: "/images/services/pedicure.svg",
    },
    {
      name: "make-up essentials",
      src: "/images/services/makeup.svg",
    },
    {
      name: "hair treatments & coloring",
      src: "/images/services/hair-color.svg",
    },
    {
      name: "grooming & makeover",
      src: "/images/services/makeover.svg",
    },
  ];

  return {
    defaultSiteTitle,
    openingStats,
    serviceList,
  };
};

export { useStore };
