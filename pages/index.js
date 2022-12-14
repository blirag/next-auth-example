import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Home() {
	const { data: session } = useSession();

	return (
		<div className={styles.container}>
			<Head>
				<title>Authentication Example</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<h1>Login Social - Exemplo</h1>

				<div className={styles.wrapper}>
					<button className={styles.button} onClick={() => signIn('github')}>
						Logar com Github
					</button>
					{/* <p>ou</p>
					<button className={styles.button} onClick={() => signIn('facebook')}>
						Logar com Facebook
					</button> */}
				</div>

				<div className={styles.session}>
					<span>Status: {session ? 'Logado' : 'Não logado'}</span>
					{session?.user?.name && <span>User: {session.user.name}</span>}
					{session && (
						<button className={styles.button} onClick={() => signOut()}>
							Logout
						</button>
					)}
				</div>
			</main>
		</div>
	);
}
