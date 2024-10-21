import { MapSearchType } from "@/types/Map";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { useState } from "react";
import useSearchMap from "./_hooks/useSearchMap";

export default function AddressInput() {
  const [suggestions, setSuggestions] = useState<MapSearchType[]>([]);

  const { handleAutoComplete } = useSearchMap();
  const handleKeyUp = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.currentTarget.value !== "") {
      const response = await handleAutoComplete(e.currentTarget.value);
      setSuggestions(response);
    }
  };

  return (
    <Autocomplete
      defaultItems={suggestions}
      label="Nhập địa chỉ"
      className="w-full"
      onKeyUp={(e) => handleKeyUp(e)}
      onSelectionChange={(value) => {
        console.log(value);
      }}
    >
      {(suggestion) => (
        <AutocompleteItem key={suggestion.label}>
          {suggestion.label}
        </AutocompleteItem>
      )}
    </Autocomplete>
  );
}
