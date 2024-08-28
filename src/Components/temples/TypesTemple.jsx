import { useEffect, useState } from "react";
import Loading from "../elements/Loading";
import CardTemple from "./CardTemple";
import apiUrl from "../utils/GetApiUrl";

const baseURL = `${apiUrl}/temples`;

export default function TypesTemple() {
  return (
    <>
      <h1>Types temple</h1>
    </>
  );
}

export function CaveTemple() {
  const [temples, setTemples] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Cave Temples";
    const fetchData = async () => {
      try {
        const response = await fetch(baseURL);
        const data = await response.json();
        const filteredTemples = data.temples.filter(
          (temple) => temple.type.toLowerCase() === "cave"
        );
        setTemples(filteredTemples);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1 className="center-title">Cave Temples</h1>
      {loading ? (
        <Loading />
      ) : (
        <ul className="flex-wrap">
          {temples.map((temple) => {
            const location = `${temple.location.city}, ${temple.location.district}, ${temple.location.state}, ${temple.location.country}`;
            return (
              <CardTemple
                name={temple.templeName}
                id={temple._id}
                img={temple.img}
                location={location}
                description={temple.introduction}
              />
            );
          })}
        </ul>
      )}
    </>
  );
}

export function AncientTemple() {
  const [temples, setTemples] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Ancient Temples";

    const fetchData = async () => {
      try {
        const response = await fetch(baseURL);
        const data = await response.json();
        const filteredTemples = data.temples.filter(
          (temple) => temple.type.toLowerCase() === "ancient"
        );
        setTemples(filteredTemples);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className="center-title">Ancient Temples</h1>
      {loading ? (
        <Loading />
      ) : (
        <ul className="flex-wrap">
          {temples.map((temple) => {
            const location = `${temple.location.city}, ${temple.location.district}, ${temple.location.state}, ${temple.location.country}`;
            return (
              <CardTemple
                name={temple.templeName}
                id={temple._id}
                img={temple.img}
                location={location}
                description={temple.introduction}
              />
            );
          })}
        </ul>
      )}
    </>
  );
}
export function MainTemple() {
  const [temples, setTemples] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Main Temples";

    const fetchData = async () => {
      try {
        const response = await fetch(baseURL);
        const data = await response.json();
        const filteredTemples = data.temples.filter(
          (temple) => temple.type.toLowerCase() === "main"
        );
        setTemples(filteredTemples);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className="center-title">Main Temples</h1>
      {loading ? (
        <Loading />
      ) : (
        <ul className="flex-wrap">
          {temples.map((temple) => {
            const location = `${temple.location.city}, ${temple.location.district}, ${temple.location.state}, ${temple.location.country}`;
            return (
              <CardTemple
                name={temple.templeName}
                id={temple._id}
                img={temple.img}
                location={location}
                description={temple.introduction}
              />
            );
          })}
        </ul>
      )}
    </>
  );
}

export function WorldTemple() {
  const [temples, setTemples] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Around the world Temples";

    const fetchData = async () => {
      try {
        const response = await fetch(baseURL);
        const data = await response.json();
        const filteredTemples = data.temples.filter(
          (temple) =>
            temple.country.toLowerCase() !== "india" &&
            temple.country.toLowerCase() !== "pakistan"
        );
        setTemples(filteredTemples);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <h1 className="center-title">World Temples</h1>
      {loading ? (
        <Loading />
      ) : (
        <ul className="flex-wrap">
          {temples.map((temple) => {
            const location = `${temple.location.city}, ${temple.location.district}, ${temple.location.state}, ${temple.location.country}`;
            return (
              <CardTemple
                name={temple.templeName}
                id={temple._id}
                img={temple.img}
                location={location}
                description={temple.introduction}
              />
            );
          })}
        </ul>
      )}
    </>
  );
}
export function IndianTemple() {
  const [temples, setTemples] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Indian Temples";

    const fetchData = async () => {
      try {
        const response = await fetch(baseURL);
        const data = await response.json();
        const filteredTemples = data.temples.filter(
          (temple) => temple.country.toLowerCase() === "india"
        );
        setTemples(filteredTemples);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className="center-title">Indian Temples</h1>
      {loading ? (
        <Loading />
      ) : (
        <ul className="flex-wrap">
          {temples.map((temple) => {
            const location = `${temple.location.city}, ${temple.location.district}, ${temple.location.state}, ${temple.location.country}`;
            return (
              <CardTemple
                name={temple.templeName}
                id={temple._id}
                img={temple.img}
                location={location}
                description={temple.introduction}
              />
            );
          })}
        </ul>
      )}
    </>
  );
}
export function PakistanTemple() {
  document.title = "Pakistan Temples";

  const [temples, setTemples] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(baseURL);
        const data = await response.json();
        const filteredTemples = data.temples.filter(
          (temple) => temple.country.toLowerCase() === "pakistan"
        );
        setTemples(filteredTemples);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className="center-title">Pakistan Temples</h1>
      {loading ? (
        <Loading />
      ) : (
        <ul className="flex-wrap">
          {temples.map((temple) => {
            const location = `${temple.location.city}, ${temple.location.district}, ${temple.location.state}, ${temple.location.country}`;
            return (
              <CardTemple
                name={temple.templeName}
                id={temple._id}
                img={temple.img}
                location={location}
                description={temple.introduction}
              />
            );
          })}
        </ul>
      )}
    </>
  );
}
