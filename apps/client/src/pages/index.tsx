import styles from './index.module.css';
import { vi } from 'date-fns/locale';
import { format, parseISO } from 'date-fns';
import { greetingMessage } from '@client/utils/date';

export const formatDateVN = (date: string) => {
  return format(parseISO(date), 'dd/MM/yyyy');
};

export function Index(props: { date: string }) {
  return (
    <div className={styles.page}>
      {/* <p>{greetingMessage(new Date())},</p> */}
      <div className="wrapper">
        <div className="container">
          <p>{format(new Date(props.date), 'do MMMM', { locale: vi })}</p>
          <p>{new Date(props.date).toString()}</p>
          {new Date().toLocaleDateString()}
          <br />
          {+parseISO('2023-04-11T02:20:51.332Z')}
          <br />
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
