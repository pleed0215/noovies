import React from "react";
import { Dimensions, Image } from "react-native";
import styled from "styled-components/native";
import { apiImageUrl } from "../api";

export interface MovieContent {
  backdrop_path: string;
  poster_path: string;
  title: string;
  id: number;
  genreIds: number[];
  vote_average: number;
  vote_count: number;
}

export interface MovieItemProps {
  movie: MovieContent;
}

const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: red;
`;

export const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
  return (
    <Container>
      <Image
        source={{ uri: apiImageUrl(movie.backdrop_path) }}
        style={{ width: "100%", height: "100%" }}
      />
    </Container>
  );
};
