import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import raw from "./assets/russia.geojson?raw";
import { useEffect, useMemo, useState } from "react";
import { type IPerson, type ICity } from "./types";
import { persons, cities } from "./mocks";
import { CityMarker, PersonTooltip } from "./components";
import * as turf from "@turf/turf";

const data = JSON.parse(raw);

export default function App() {
   

    const [activeCity, setActiveCity] = useState<ICity | null>(null);

    const onChangeCity = (city: ICity) => {
        if (!activeCity || activeCity.id !== city.id)
            return setActiveCity(city);
        setActiveCity(null);
    };

    const currentPersons = useMemo<IPerson[]>(() => {
        if (!activeCity) return [];
        return persons.filter((el) => el.city === activeCity.title);
    }, [activeCity]);

    const mapClickHandler = () => {
        setActiveCity(null);
    };

    useEffect(() => {
        document.addEventListener("click", mapClickHandler);
        return () => document.removeEventListener("click", mapClickHandler);
    }, []);

    const activeRegions = useMemo(() => {
        return cities.reduce((acc: string[], cur: ICity) => {
            if (acc.includes(cur.latin_name)) return acc;
            const point = turf.point([cur.xCoor, cur.yCoor]);
            const currentRegion = data.features.find((el: any) =>
                turf.booleanPointInPolygon(point, el),
            );
            if (!currentRegion) return acc;
            return acc.concat(currentRegion.properties.name_latin);
        }, []);
    }, []);


    console.log(data)
    return (
        <>
            {" "}
            <MapContainer
                center={[55, 50] as [number, number]}
                zoom={5}
                minZoom={5}
                dragging={false}
                maxZoom={7}
                preferCanvas
                style={{ height: "100vh", background: "#111" }}
            >
                <GeoJSON
                    data={data}
                    style={(feature: any) => {
                        const hasPersons = activeRegions.includes(
                            feature.properties.name_latin,
                        );

                        return {
                            fillColor: hasPersons ? "#ff5500" : "#444",
                            fillOpacity: hasPersons ? 1 : 0.3,
                            color: "#111",
                            weight: hasPersons ? 2 : 1,
                        };
                    }}
                />

                {cities.map((el) => (
                    <CityMarker onPick={onChangeCity} key={el.id} city={el} />
                ))}
                <PersonTooltip
                    persons={currentPersons}
                    activeCity={activeCity}
                />
            </MapContainer>
        </>
    );
}
