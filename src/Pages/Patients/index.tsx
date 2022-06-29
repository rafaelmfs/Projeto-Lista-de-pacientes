import { useContext, useEffect, useState } from 'react';

import { Header } from '../../Components/Header';
import { Pagination } from '../../Components/Pagination';
import { SearchInput } from '../../Components/SearchInput';
import { TablePatients } from '../../Components/TablePatients';
import { UsersContext } from '../../Contexts/UsersProvider';
import { User } from '../../type/User';

export const Patients = () => {
  const [patientsFiltered, setPatientsFiltered] = useState<User[]>([]);
  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const userContext = useContext(UsersContext);
  const { usersList } = userContext;

  const filterPatients = () => {
    if (searchInputValue && usersList) {
      const patientsFilteredArray = usersList.filter((user) => {
        const nameUser = `${user.name.first} ${user.name.last}`;
        if (nameUser.toLocaleLowerCase().includes(searchInputValue)) {
          return user;
        }
      });
      setPatientsFiltered([...patientsFilteredArray]);
    }
  };

  useEffect(() => {
    filterPatients();

    !searchInputValue && setPatientsFiltered([]);
  }, [searchInputValue]);

  return (
    <div className="bg-slate-200 h-max">
      <Header />
      <main className="flex items-center justify-center">
        <div className="w-5/6 md:w-3/4 lg:1/2 mt-4 flex flex-col items-center">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsam iure quos omnis repellat eius
            reiciendis dolorum aperiam unde laboriosam. Sit, in consequuntur reprehenderit voluptatem repellat doloribus
            porro suscipit numquam?
          </p>

          <SearchInput onChange={setSearchInputValue} />
          <TablePatients patientsFiltered={patientsFiltered} setPatientsFiltered={setPatientsFiltered} />

          <Pagination />
        </div>
      </main>
    </div>
  );
};
