type TUseSlider<TStore, TCard> = {
  store: TStore;
  updateStore: (item: TStore) => void;
  cards: TCard[];
};

const useSlider = <TStore extends { id: number }, TCard>({
  store,
  updateStore,
  cards,
}: TUseSlider<TStore, TCard>) => {
  const handleChangeSlide = (toNextSlide: boolean) => {
    const currentId = store.id;

    console.log(currentId);
    console.log(toNextSlide);

    if (currentId === cards.length - 1 && toNextSlide) {
      updateStore(cards[0] as unknown as TStore);
      return;
    }

    if (currentId === 0 && !toNextSlide) {
      updateStore(cards[cards.length - 1] as unknown as TStore);
      return;
    }

    toNextSlide
      ? updateStore(cards[currentId + 1] as unknown as TStore)
      : updateStore(cards[currentId - 1] as unknown as TStore);
  };

  return { handleChangeSlide };
};

export default useSlider;
