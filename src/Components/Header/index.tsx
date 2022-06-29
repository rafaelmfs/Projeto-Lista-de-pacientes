import { User, UserCircle } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { api } from '../../api/api';
import { User as UserType } from '../../type/User';

export const Header = () => {
  const [user, setUser] = useState<UserType | null>();

  useEffect(() => {
    const getUser = async () => {
      const userData = await api.get('');
      const result = userData.data.results[0] as UserType;
      setUser(result);
    };

    getUser();
  }, []);

  return (
    <header className="p-2 bg-white flex justify-between">
      <div className="flex items-center gap-2 ">
        <User size={32} weight="bold" />
        {user ? <span>{`${user?.name.title}. ${user?.name.first} ${user?.name.last}`}</span> : <span>User</span>}
      </div>
      {user ? (
        <img src={user?.picture.thumbnail} alt="User picture" className="rounded-full w-8" />
      ) : (
        <UserCircle size={32} weight="duotone" />
      )}
    </header>
  );
};
