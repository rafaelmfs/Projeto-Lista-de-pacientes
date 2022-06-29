import { MagnifyingGlass } from 'phosphor-react';

interface SearchInputProps {
  onChange(arg: string): void;
}

export const SearchInput = ({ onChange }: SearchInputProps) => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        className="w-full h-full rounded-[4px] my-6"
        placeholder="Searching"
        onChange={(e) => onChange(e.target.value.toLowerCase())}
      />
      <MagnifyingGlass size={20} weight="bold" className="absolute top-8 right-2" />
    </div>
  );
};
