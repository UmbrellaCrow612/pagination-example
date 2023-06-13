import usePokemon from "@/hooks/usePokemon";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const offset = searchParams.get("offset");
  const limit = searchParams.get("limit");
  const { data, error, isLoading, isValidating, mutate } = usePokemon({
    offset: offset,
    limit: limit,
  });

  // On render of page and or when there is not / has been alerted url to set offset and limit to base 20 always = middleware
  return (
    <>
      {JSON.stringify(data)}
      <div className="flex items-center gap-4">
        <button>Next</button>
        <button>Previous</button>
      </div>
    </>
  );
}
