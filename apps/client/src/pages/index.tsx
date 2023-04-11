import styles from './index.module.css';
import { vi } from 'date-fns/locale';
import { format, parseISO } from 'date-fns';

export const formatDateVN = (date: string) => {
  return format(parseISO(date), 'dd/MM/yyyy');
};

export function Index(props: { date: string }) {
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          {formatDateVN('2023-04-11T02:20:51.332Z')}
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome client 👋
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
export const getServerSideProps = async () => {
  return {
    props: { date: Date.now() },
  };
};

export default Index;
