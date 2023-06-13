import useSWR from "swr";

export default function usePokemon() {
  return useSWR("https://pokeapi.co/api/v2/pokemon/");
}
