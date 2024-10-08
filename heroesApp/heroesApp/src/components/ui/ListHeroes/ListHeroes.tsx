import { FC } from "react";
import { IHeroes } from "../../../types/Heroes";
import styles from "./ListHeroes.module.css"
import { CardHeroes } from "../CardHeroes/CardHeroes";

interface IlistHeroes {
    heroes: IHeroes[];
    title: string;
}
export const ListHeroes: FC<IlistHeroes> = ({ heroes, title }) => {
    return (
        <div className={styles.containerPrincipalList}>
            <div className={styles.containerTitle}>
                <h2>{title}</h2>
            </div>

            <div className={styles.containerList}>
                {
                    heroes.map((hero) => (
                        <CardHeroes hero={hero} key={hero.id} />
                    ))
                }
            </div>
        </div>
    )
}
