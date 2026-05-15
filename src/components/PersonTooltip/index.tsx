import { useEffect, useMemo, useState, type FC } from "react";
import styles from "./styles.module.css";
import type { ICity, IPerson } from "../../types";
import PersonInfo from "./PersonInfo";
import clsx from "clsx";
import { useMap } from "react-leaflet";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic-light-dark.css";

type Props = {
    persons: IPerson[];
    activeCity: ICity | null;
};

const PERSONS_ON_PAGE = 10;

const PersonTooltip: FC<Props> = (props) => {
    const { persons, activeCity } = props;
    const map = useMap();

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
        return persons.slice((currentPage - 1) * 10, (currentPage - 1) * 10 + 10);
    }, [currentPage, persons]);

    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className={clsx(styles.tooltip, { [styles.active]: !!activeCity })}
        >
            <h3 className={styles.title}>{activeCity?.title}</h3>

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
