import styles from './index.module.css';
import { formatDateVN, formatDateVNLocal } from '@client/utils/date';
import { GreetingMessage } from '@client/components/GreetingMessage';
import { RenderDateTimeVN } from '@client/components/RenderDateTimeVN';
import { RenderDateVNLocalTimeStamp } from '@client/components/RenderDateVNLocalTimeStamp';

export function Index(props: { date: string }) {
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          {formatDateVN('2023-04-11T02:20:51.332Z')}
          <p>
            <GreetingMessage />
          </p>
          <p>
            <RenderDateVNLocalTimeStamp time="2023-04-12T02:32:54.697Z" />
          </p>
          <RenderDateTimeVN time="2023-04-12T02:32:54.697Z" />
          <p>{formatDateVNLocal(new Date('2023-04-12T02:32:54.697Z'))}</p>
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
