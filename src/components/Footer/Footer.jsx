import Container from '../Container/Container';
import styles from './Footer.module.css';

const Footer = () => {
	return (
		<Container>
			<p className={styles.footerContent}>© Yacht ape 2024 all rights reserved</p>
		</Container>
	)
}

export default Footer