import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { movieApi } from "../../api";
import { StackDefaultScreenProps } from "../../navigations/definitions";

export interface MovieContent {
  backdrop_path: string;
  poster_path: string;
  title: string;
  id: number;
  genreIds: number[];
  vote_average: number;
  vote_count: number;
}

export const MoviesScreen: React.FC<StackDefaultScreenProps<"Home">> = () => {
  const [nowPlaying, setNowPlaying] = useState<Array<MovieContent>>([]);
  const [upcoming, setUpcoming] = useState<Array<MovieContent>>([]);
  const [topRated, setTopRated] = useState<Array<MovieContent>>([]);
  const [popular, setPopular] = useState<Array<MovieContent>>([]);
  const [discover, setDiscover] = useState<Array<MovieContent>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getData = async () => {
    try {
      setLoading(true);

      const {
        data: { results: nowPlyaingResults },
        status: nowPlayingStatus,
      } = await movieApi.nowPlaying();
      const {
        data: { results: upcomingResults },
        status: upcomingStatus,
      } = await movieApi.upcoming();
      const {
        data: { results: topRatedResults },
        status: topRatedStatus,
      } = await movieApi.topRated();
      const {
        data: { results: popularResults },
        status: popularStatus,
      } = await movieApi.popular();
      const {
        data: { results: discoverResults },
        status: discoverStatus,
      } = await movieApi.discover();

      if (
        nowPlayingStatus === 200 &&
        upcomingStatus === 200 &&
        topRatedStatus === 200 &&
        popularStatus === 200 &&
        discoverStatus === 200
      ) {
        setNowPlaying(nowPlyaingResults);
        setUpcoming(upcomingResults);
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
