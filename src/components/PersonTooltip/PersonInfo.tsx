import React, { type FC } from "react";
import type { IPerson } from "../../types";
import styles from "./styles.module.css";

type Props = {
    person: IPerson;
};

const PersonInfo: FC<Props> = ({ person }) => {
    const { name, deathYear, birthYear } = person;

    return (
        <span className={styles.personInfo}>
            {name} {`(${birthYear ?? "н/д"} - ${deathYear ?? "н/д"})`}
        </span>
    );
};

export default PersonInfo;
