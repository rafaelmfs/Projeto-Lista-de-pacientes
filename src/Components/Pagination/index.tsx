import { ArrowClockwise } from 'phosphor-react';
import { useContext, useState } from 'react';
import { api } from '../../api/api';
import { UsersContext } from '../../Contexts/UsersProvider';
import { User } from '../../type/User';
import { formatDate } from '../../util/formatDate';

export const Pagination = () => {
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const userContext = useContext(UsersContext);
  const { usersList, setUsersList } = userContext;

  const handleLoadingMore = async () => {
    setLoading(true);

    const user = await api.get(`?page=${page + 1}&results=50&seed=abc`);
    const list = user.data.results as User[];
    list.forEach((patient) => (patient.dob.date = formatDate(patient.dob.date)));

    if (Array.isArray(usersList)) {
      setUsersList([...usersList, ...list]);
    }

    setPage(page + 1);
    setLoading(false);
  };

  return (
    <button className="flex items-center gap-2 my-8 disabled:opacity-70" onClick={handleLoadingMore} disabled={loading}>
      {!loading ? (
        <ArrowClockwise size={32} weight="bold" className="rotate-180" />
      ) : (
        <ArrowClockwise size={32} weight="bold" className="animate-spin" />
      )}
      <span>Loading more...</span>
    </button>
  );
};
