import styles from './index.module.css';

export function Index(props: { date: string }) {
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
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
