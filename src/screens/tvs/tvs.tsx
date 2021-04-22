import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { movieApi, tvApi } from "../../api";
import { StackDefaultScreenProps } from "../../navigations/definitions";

export interface TvContent {
  backdrop_path: string;
  poster_path: string;
  name: string;
  id: number;
  genres: Array<{ id: number; name: string }>;
  vote_average: number;
  vote_count: number;
}

export const TvsScreen: React.FC<StackDefaultScreenProps<"Home">> = () => {
  const [nowPlaying, setNowPlaying] = useState<Array<TvContent>>([]);
  const [topRated, setTopRated] = useState<Array<TvContent>>([]);
  const [popular, setPopular] = useState<Array<TvContent>>([]);
  const [discover, setDiscover] = useState<Array<TvContent>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getData = async () => {
    try {
      setLoading(true);

      const {
        data: { results: nowPlyaingResults },
        status: nowPlayingStatus,
      } = await tvApi.airingToday();

      const {
        data: { results: topRatedResults },
        status: topRatedStatus,
      } = await tvApi.topRated();
      const {
        data: { results: popularResults },
        status: popularStatus,
      } = await tvApi.popular();
      const {
        data: { results: discoverResults },
        status: discoverStatus,
      } = await tvApi.onTheAir();

      if (
        nowPlayingStatus === 200 &&
        topRatedStatus === 200 &&
        popularStatus === 200 &&
        discoverStatus === 200
      ) {
        setNowPlaying(nowPlyaingResults);
        setTopRated(topRatedResults);
        setPopular(popularResults);
        setDiscover(discoverResults);
      } else {
        throw Error("Fetching Error");
      }
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
      console.log(discover);
    }
  };

  useEffect(() => {
    //getData();
  }, []);

  return (
    <View>
      <Text>Movies</Text>
    </View>
  );
};
