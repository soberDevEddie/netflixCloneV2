interface Movie {
  id: number;
  title?: string;
  backdrop_path: string | null;
  overview: string;
}

interface Genre {
  id: number;
  name: string;
}
