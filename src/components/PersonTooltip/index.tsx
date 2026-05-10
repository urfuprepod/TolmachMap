import { useMemo, type FC } from "react";
import styles from "./styles.module.css";
import type { ICity, IPerson } from "../../types";
import PersonInfo from "./PersonInfo";
import clsx from "clsx";
import L from "leaflet";
import { useMap } from "react-leaflet";

type Props = {
    persons: IPerson[];
    activeCity: ICity | null;
};

const PersonTooltip: FC<Props> = (props) => {
    const { persons, activeCity } = props;
    const map = useMap();

    const pixelPoint = useMemo(() => {
        if (!activeCity) return undefined;
        return map.latLngToContainerPoint([activeCity.yCoor, activeCity.xCoor]);
    }, [map, activeCity, activeCity]);

    const xCoor = pixelPoint?.x ? pixelPoint.x - 20 : -1;
    const yCoor = pixelPoint?.y ? pixelPoint.y + 20 : - 1

    return (
        <div
            onClick={e => e.stopPropagation()}
            className={clsx(styles.tooltip, { [styles.active]: !!activeCity })}
            style={{
                left: xCoor,
                top: yCoor,
            }}
        >
            <h3 className={styles.title}>{activeCity?.title}</h3>

            <div className={styles.personContainer}>
                {persons.map((person) => (
                    <PersonInfo person={person} key={person.id} />
                ))}
            </div>
        </div>
    );
};

export default PersonTooltip;
