import { type FC } from "react";
import type { IPerson } from "../../types";
import styles from "./styles.module.css";

type Props = {
    person: IPerson;
};

const PersonInfo: FC<Props> = ({ person }) => {
    const { name, deathYear, birthYear, post } = person;

    return (
        <div className={styles.personInfo}>
            <span>{name} {`(${birthYear ?? "н/д"} - ${deathYear ?? "н/д"})`}</span>
            <strong>{post}</strong>
        </div>
    );
};

export default PersonInfo;
