import { MediaItem } from "@/types";

function useUtils() {
  const useMedia = (list: Array<MediaItem>) => {
    const media = {
      currItem: {} as MediaItem,
      set: (index: number) => (media.currItem = list[index]),
      get: () => media.currItem,
    };

    return { media };
  };

  return { useMedia };
}

export { useUtils };
