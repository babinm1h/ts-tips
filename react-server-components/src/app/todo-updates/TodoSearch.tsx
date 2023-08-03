"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";

const QUERY_KEY = "query";

export function TodoSearch() {
  const [isTransition, startTransition] = useTransition();
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    const newSearchParams = new URLSearchParams(
      searchParams as unknown as URLSearchParams
    );
    newSearchParams.set(QUERY_KEY, value);

    startTransition(() => {
      router.push(`${pathname}?${newSearchParams.toString()}`);
    });
  };

  const defaultInputValue = searchParams.get(QUERY_KEY) || "";

  return (
    <div>
      <input
        type="text"
        defaultValue={defaultInputValue}
        onChange={handleChange}
      />
      {isTransition && <div>Loading...</div>}
    </div>
  );
}
