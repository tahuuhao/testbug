import styles from './index.module.css';
import {formatDateVN, greetingMessage} from '@client/utils/date'
import { useEffect, useState } from 'react';

export function Index(props: { date: string }) {
  const [hourse, setHourse] = useState(0)
  useEffect(()=>{
    const date = new Date()
    setHourse(date.getHours())
  },[])
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          {formatDateVN('2023-04-11T02:20:51.332Z')}
          <p>
            {hourse&&greetingMessage(hourse)}
          </p>
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
