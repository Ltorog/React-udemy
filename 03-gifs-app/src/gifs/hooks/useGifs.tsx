import { useState, useRef } from 'react'
import { getGifsByQuery } from '../actions/get-gifs-by-query.action';
import type { Gif } from '../interfaces/Gif.interface';

export const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const gifsCache = useRef<Record<string, Gif[]>>({});
  

  const handleTermClicked = async (term: string) => {
    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term]);
      return;
    }

    const gifs = await getGifsByQuery(term);
    setGifs(gifs);
  }

  const handleSearch = async (query: string = '') => {
    console.log(query);
    if (query.length === 0) return;

    query = query.trim().toLowerCase();

    if (previousTerms.includes(query)) return;

    const currentTerms = previousTerms.slice(0, 7);
    currentTerms.unshift(query)

    setPreviousTerms(currentTerms);

    const gifs = await getGifsByQuery(query);
    gifsCache.current[query] = gifs;

    setGifs(gifs);
  }

  return {
    // Properties
    previousTerms,
    gifs,

    // Methods / Actions
    handleTermClicked,
    handleSearch,
  }
}
