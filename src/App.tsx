import { MapContainer, GeoJSON, useMapEvents, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import raw from "./assets/russia.geojson?raw";
import { useEffect, useMemo, useState } from "react";
import { renderToString } from "react-dom/server";
import L from "leaflet";
import { type IPerson, type ICity } from "./types";
import { persons, cities } from "./mocks";
import { CityMarker, PersonTooltip } from "./components";

const data = JSON.parse(raw);

export default function App() {
    function MapClickHandler({ onClick }: { onClick: (e: any) => void }) {
        useMapEvents({
            click: onClick,
        });

        return null;
    }

    const [activeCity, setActiveCity] = useState<ICity | null>(null);

    const onChangeCity = (city: ICity) => {
        console.log(city, activeCity);
        if (!activeCity || activeCity.id !== city.id)
            return setActiveCity(city);
        setActiveCity(null);
    };

    const currentPersons = useMemo<IPerson[]>(() => {
        if (!activeCity) return [];
        return persons.filter((el) => el.city === activeCity.title);
    }, [activeCity]);

    const mapClickHandler = () => {
        setActiveCity(null)
    }

    useEffect(() => {
        document.addEventListener('click', mapClickHandler);
        return () => document.removeEventListener('click', mapClickHandler)
    }, [])

    return (
        <>
            {" "}
            <MapContainer
                center={[55, 50] as [number, number]}
                zoom={5}
                minZoom={5}
                dragging={false}
                maxZoom={7}
                style={{ height: "100vh", background: "#111" }}
            >
                <MapClickHandler
                    onClick={(e) => {
                        console.log(e);
                    }}
                />
                <GeoJSON
                    data={data}
                    style={(feature: any) => {
                        const volgaRegions = [
                            "Samara Oblast",
                            "Tatarstan",
                            "Nizhny Novgorod Oblast",
                        ];

                        const isVolga = volgaRegions.includes(
                            feature.properties.name_latin,
                        );

                        return {
                            fillColor: isVolga ? "#ff5500" : "#444",
                            fillOpacity: isVolga ? 1 : 0.3,
                            color: "#111",
                            weight: isVolga ? 2 : 1,
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
