import { Listbox } from '@headlessui/react';
import { Check, DotsThreeVertical } from 'phosphor-react';

interface ListBoxProps {
  options: string[];
  genderSelected: string;
  setGenderSelected(arg: string): void;
}

export const ListBox = ({ options, genderSelected, setGenderSelected }: ListBoxProps) => {
  return (
    <Listbox value={genderSelected} onChange={setGenderSelected}>
      <Listbox.Button className={'flex items-center gap-2 justify-center relative font-bold w-full'}>
        <span className="text-center">Gender</span>
        <DotsThreeVertical size={16} weight="duotone" className="absolute right-0" />
      </Listbox.Button>
      <Listbox.Options className={'absolute w-full md:w-3/4 right-0 md:right-1 text-right'}>
        {options.map((gender, index) => (
          <Listbox.Option key={index} value={gender} className={'cursor-pointer border-[1px]'}>
            {({ active, selected }) => (
              <li
                className={`${
                  active
                    ? 'bg-blue-500 text-white flex items-center  py-1 px-2'
                    : 'bg-white text-black flex items-center  py-1 px-2'
                } flex items-center gap-1`}
              >
                {selected && <Check size={10} weight={'bold'} />}
                {gender}
              </li>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};
