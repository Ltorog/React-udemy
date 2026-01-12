import { GifList } from "./gifs/components/GifList";
import { SearchBar } from "./shared/components/SearchBar";
import { CustomHeader } from "./shared/components/CustomHeader";
import { PreviousSearches } from "./gifs/components/PreviousSearches";

import { useGifs } from "./gifs/hooks/useGifs";

export const GifsApp = () => {
  const { previousTerms, gifs, handleSearch, handleTermClicked } = useGifs()

  return (
    <>
      <CustomHeader title="Mis Gifs" description="Descubre y comparte el gif perfecto"/>

      <SearchBar placeholder="Buscar gifs" onQuery={handleSearch}/>

      <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked} />

      <GifList gifs={gifs} />
    </>
  );
};
