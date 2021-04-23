import React, { useEffect, useState } from "react";
import { ActivityIndicator, Dimensions } from "react-native";
import Swiper from "react-native-web-swiper";
import styled from "styled-components/native";
import { movieApi } from "../../api";
import { MovieContent, MovieItem } from "../../components/MovieItem";
import { StackDefaultScreenProps } from "../../navigations/definitions";

const Container = styled.View`
  flex: 1;
  background-color: black;
`;

const Header = styled.View`
  width: 100%;
  height: ${Dimensions.get("screen").height / 3}px;
`;

const Section = styled.View`
  height: 100%;
  background-color: red;
`;

const Text = styled.Text`
  color: white;
`;

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
    getData();
  }, []);

  return (
    <Container>
      {loading && <ActivityIndicator />}
      {!loading && (
        <Header>
          <Text>Now Playing..</Text>
          <Swiper controlsEnabled={false} loop timeout={3}>
            {nowPlaying.map((movie) => (
              <MovieItem key={movie.id} movie={movie} />
            ))}
          </Swiper>
        </Header>
      )}
    </Container>
  );
};
