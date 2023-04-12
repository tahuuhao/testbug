import styles from './index.module.css';
import {formatDateTimeVN, formatDateVN, formatDateVNLocalTimeStamp, greetingMessage} from '@client/utils/date'
import { useEffect, useState } from 'react';
import { GreetingMessage } from '@client/components/GreetingMessage';
import { TimeRender } from '@client/components/TimeRender';

export function Index(props: { date: string }) {
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          {formatDateVN('2023-04-11T02:20:51.332Z')}
          <p>
            <GreetingMessage/>
          </p>
          <p>
            {formatDateVNLocalTimeStamp(new Date('2023-04-11T03:10:29.208Z'))}
          </p>
          <TimeRender time='2023-04-12T02:32:54.697Z'/>
          {/* <p>
            {formatDateTimeVN('2023-04-12T02:32:54.697Z')}
          </p> */}
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
