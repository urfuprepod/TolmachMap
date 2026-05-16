import { useEffect, useMemo, useState, type FC } from "react";
import styles from "./styles.module.css";
import type { ICity, IPerson } from "../../types";
import PersonInfo from "./PersonInfo";
import clsx from "clsx";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic-light-dark.css";
import { X } from "lucide-react";

type Props = {
    persons: IPerson[];
    activeCity: ICity | null;
    onClose: () => void;
};

const PERSONS_ON_PAGE = 10;

const PersonTooltip: FC<Props> = (props) => {
    const { persons, activeCity, onClose } = props;

    const pageCount = useMemo(() => {
        if (persons.length <= PERSONS_ON_PAGE) return 0;
        console.log(persons.length);
        return Math.ceil(persons.length / PERSONS_ON_PAGE);
    }, [persons]);

    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setCurrentPage(1);
    }, [persons]);

    const actualPersons = useMemo(() => {
        return persons.slice(
            (currentPage - 1) * 10,
            (currentPage - 1) * 10 + 10,
        );
    }, [currentPage, persons]);

    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className={clsx(styles.tooltip, { [styles.active]: !!activeCity })}
        >
            <div className={styles.titleContainer}>
                <h3 className={styles.title}>{activeCity?.title}</h3>
                <button onClick={onClose}>
                    <X color="#000" size={16} />
                </button>
            </div>{" "}
            <div className={styles.personContainer}>
                <div className={styles.persons}>
                    {actualPersons.map((person) => (
                        <PersonInfo person={person} key={person.id} />
                    ))}
                </div>

                <ResponsivePagination
                    current={currentPage}
                    total={pageCount}
                    onPageChange={setCurrentPage}
                />
            </div>
        </div>
    );
};

export default PersonTooltip;
