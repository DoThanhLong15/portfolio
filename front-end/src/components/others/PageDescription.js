import styles from './style/PageDescription.module.css';


const PageDescription = ({ description }) => {
    return <>
        <p className={styles.description}>{description}</p>
    </>
}

export default PageDescription;