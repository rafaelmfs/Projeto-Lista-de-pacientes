import { useContext, useEffect, useState } from 'react';
import { api } from '../../api/api';
import { UsersContext } from '../../Contexts/UsersProvider';
import { User } from '../../type/User';
import { Patient } from '../../type/Patient';
import { ListBox } from './ListBox';
import { ModalInfoPatients } from '../ModalInfoPatients';
import { formatDate } from '../../util/formatDate';

interface TablePatientsProps {
  patientsFiltered: User[];
  setPatientsFiltered(args: User[]): void;
}

export const TablePatients = ({ patientsFiltered, setPatientsFiltered }: TablePatientsProps) => {
  const userContext = useContext(UsersContext);
  const [filterGender, setFilterGender] = useState<string>('');
  const { usersList, setUsersList } = userContext;

  useEffect(() => {
    async function getUser() {
      const user = await api.get(`?page=1&results=50&seed=abc`);
      const list = user.data.results as User[];
      list.forEach((patient) => (patient.dob.date = formatDate(patient.dob.date)));
      setUsersList(list);
    }
    getUser();
  }, []);

  useEffect(() => {
    if (filterGender !== 'All' && usersList) {
      const patientsFilteredGender = usersList.filter((user) => {
        if (user.gender.toLowerCase() === filterGender) return user;
      });
      setPatientsFiltered([...patientsFilteredGender]);
    }
  }, [filterGender, setPatientsFiltered, usersList]);

  return (
    <>
      <table className=" w-full overflow-auto">
        <thead className="bg-zinc-300">
          <tr>
            <th>Name</th>
            <th className={'relative'}>
              <ListBox
                options={['male', 'female', 'all']}
                setGenderSelected={setFilterGender}
                genderSelected={filterGender}
              />
            </th>
            <th>Birth</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {usersList && patientsFiltered.length >= 1
            ? patientsFiltered.map((user: User, index) => {
                return (
                  <tr key={`${'F' + user.login.salt + index}`}>
                    <td className="border-[1px] px-4">{`${user.name.first} ${user.name.last}`}</td>
                    <td className="border-[1px] text-center">{user.gender}</td>
                    <td className="border-[1px] text-center">{user.dob.date}</td>
                    <td className="border-[1px] text-center w-32 py-2">
                      <ModalInfoPatients patient={user as Patient} />
                    </td>
                  </tr>
                );
              })
            : usersList &&
              usersList.map((user: User, index) => {
                return (
                  <tr key={`${user.login.salt + index}`}>
                    <td className="border-[1px] px-4">{`${user.name.first} ${user.name.last}`}</td>
                    <td className="border-[1px] text-center">{user.gender}</td>
                    <td className="border-[1px] text-center">{user.dob.date}</td>
                    <td className="border-[1px] text-center w-32 py-2">
                      <ModalInfoPatients patient={user as Patient} />
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </>
  );
};
