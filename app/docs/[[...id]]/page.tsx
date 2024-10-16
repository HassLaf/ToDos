import styles from './style.module.css';
const DocsPage = ({params}) => {
    return (
        console.log(params),
        <div>
        <h1 className={styles.title} >Docs ID {params.id} </h1>
        <p>Documentation goes here</p>
        </div>
    );
    };

export default DocsPage;