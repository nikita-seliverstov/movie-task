import { Movie } from './movie';

export class MovieResponse {
  Search: Movie[];
  Response: boolean;
  TotalResults: number;
}
