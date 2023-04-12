import styles from './index.module.css';
import {formatDateTimeVN, formatDateVN, formatDateVNLocal, formatDateVNLocalTimeStamp, formatHourMinuteVN, greetingMessage} from '@client/utils/date'
import { useEffect, useState } from 'react';
import { GreetingMessage } from '@client/components/GreetingMessage';
import { TimeRender } from '@client/components/TimeRender';
import { TimeRenderLocalTimeStamp } from '@client/components/TimeRenderLocalTimeStamp';

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
            <TimeRenderLocalTimeStamp time='2023-04-12T02:32:54.697Z'/>
          </p>
          <TimeRender time='2023-04-12T02:32:54.697Z'/>
          <p>
            {formatDateVNLocal(new Date('2023-04-12T02:32:54.697Z'))}
          </p>
          {/* <p>
            {formatHourMinuteVN('2023-04-12T02:32:54.697Z')}
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
