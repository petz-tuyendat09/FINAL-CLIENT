import { MapSearchType } from "@/types/Map";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { useState } from "react";
import useSearchMap from "./_hooks/useSearchMap";

export default function AddressInput() {
  const [suggestions, setSuggestions] = useState<MapSearchType[]>([]);
  console.log(suggestions);

  const { handleAutoComplete } = useSearchMap();
  const handleKeyUp = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.currentTarget.value !== "") {
      const response = await handleAutoComplete(e.currentTarget.value);
      setSuggestions(response);
    }
  };

  console.log(suggestions);
  return (
    <Autocomplete
      defaultItems={suggestions}
      label="Nhập địa chỉ"
      className="w-full"
      onKeyUp={(e) => handleKeyUp(e)}
    >
      {(suggestion) => (
        <AutocompleteItem key={suggestion.id}>
          {suggestion.label}
        </AutocompleteItem>
      )}
    </Autocomplete>
  );
}
