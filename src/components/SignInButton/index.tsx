import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { useSession, signIn, signOut } from "next-auth/client";
import styles from "./styles.module.scss";

export function SignInButton() {

    const [session] = useSession();

    return session ? (
        <button
            type="button"
            onClick={() => signOut()}
            className={styles.SignInButton}
        >
            <FaGithub color="#04b361" />
            <p>{session.user.name}</p>
            <FiX className={styles.closeIcon} color="#737380" />
        </button>
    ) : (
        <button onClick={() => signIn('github')} className={styles.SignInButton}>
            <FaGithub color="#f179aa" />
            <p>Sign In with Github</p>
        </button>
    );
}
