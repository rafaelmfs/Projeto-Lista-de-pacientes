import { format } from 'date-fns/esm';
import { ptBR } from 'date-fns/locale';

export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  const dateFormated = format(date, "dd ' 'MMM ' 'y", {
    locale: ptBR,
  });
  return dateFormated;
};
