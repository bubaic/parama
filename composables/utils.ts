import { MediaType } from "@/types";

function useUtils() {
  const useMedia = (list: Array<MediaType>) => {
    const media = {
      currItem: {} as MediaType,
      set: (index: number) => (media.currItem = list[index]),
      get: () => media.currItem,
    };

    return { media };
  };

  return { useMedia };
}

export { useUtils };
