import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

interface Article {
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  publishedAt: string;
  source: {
    name: string;
    url: string;
  };
}

const token: string = process.env.API_TOKEN!;

export const news = async () => {
  try {
    const { data } = await axios.get<Article[]>(
      `https://gnews.io/api/v4/top-headlines`,
      {
        params: { token },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const search = async (query: string, searchIn: string, language: string) => {
  try {
    const { data } = await axios.get<Article[]>(
      `https://gnews.io/api/v4/search`,
      {
        params: { token, q: query, in: searchIn, lang: language },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
