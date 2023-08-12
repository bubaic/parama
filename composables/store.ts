const useStore = () => {
  const defaultSiteTitle = "| Parama's Parlour",
    openingStats = {
      days: { from: "monday", to: "sunday" },
      time: { from: "10:00", to: "07:30" },
    };

  return { defaultSiteTitle, openingStats };
};

export { useStore };
