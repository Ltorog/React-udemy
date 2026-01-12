import type { GiphyGif, GiphyResponse } from '../interfaces/giphy.response';
import type { Gif } from '../interfaces/Gif.interface';
import { giphyApi } from '../api/giphy.api';


export const getGifsByQuery = async (query: string): Promise<Gif[]> => {
  const response = await giphyApi<GiphyResponse>('/search',
    {
      params: {
        q: query,
        limit: 25
      }
    }
  );

  const responseData: GiphyGif[] = response.data.data;

  return responseData.map((gif: GiphyGif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.original.url,
    width: Number(gif.images.original.width),
    height: Number(gif.images.original.height)
  }))
}

