import useSWR from "swr";

export default function usePokemon({
  offset,
  limit,
}: {
  offset: any;
  limit: any;
}) {
  return useSWR(
    `https://pokeapi.co/api/v2/pokemon/${
      offset && limit ? `?offset=${String(offset)}&limit=${String(limit)}` : ""
    }`
  );
}
