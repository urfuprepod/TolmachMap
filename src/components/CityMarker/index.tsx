import React, { type FC } from "react";
import styles from "./styles.module.css";
import type { ICity } from "../../types";
import { Star } from "lucide-react";
import L from "leaflet";
import { renderToString } from "react-dom/server";
import { Marker } from "react-leaflet";

const cityStyles: Record<number, { background: string; diameter: number }> = {
    1000: { background: "white", diameter: 10 },
    10000: { background: "black", diameter: 14 },
};

type Props = {
    city: ICity;
    onPick: (item: ICity) => void;
};

const CAPITAL_NAME = "Москва";

const CityMarker: FC<Props> = ({ city, onPick }) => {
    const entries = Object.entries(cityStyles);
    const { population, title } = city;

    const currentMarkerStyles =
        entries.find(([maxPopulation]) => population <= +maxPopulation)?.[1] ??
        entries.at(-1)?.[1];

    if (!currentMarkerStyles) return null;

    const icon = L.divIcon({
        className: "",
        html: renderToString(
            <div className={styles.marker}>
                {title === CAPITAL_NAME ? (
                    <Star size={16} color="#000000" />
                ) : (
                    <div
                        className={styles.cityPoint}
                        style={{
                            background: currentMarkerStyles.background,
                            flexBasis: currentMarkerStyles.diameter,
                            height: currentMarkerStyles.diameter,
                        }}
                    />
                )}

                <span>{title}</span>
            </div>,
        ),
    });

    return (
        <Marker
            position={[city.yCoor, city.xCoor]}
            icon={icon}
            eventHandlers={{
                click: (e) => {
                    e.originalEvent.stopPropagation();
                    onPick(city);
                },
            }}
        />
    );
};

export default CityMarker;
