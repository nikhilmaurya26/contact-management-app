import axios from "axios";
import "leaflet/dist/leaflet.css";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";

import { MapContainer, TileLayer } from "react-leaflet";

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    fill: boolean;
    borderColor: string;
    tension: number;
  }[];
}

const Charts = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    axios("https://disease.sh/v3/covid-19/countries").then((res) => {
      const data = res.data;
      setCountriesData(data);
    });
  }, []);

  useEffect(() => {
    axios
      .get("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
      .then((res) => {
        const data = res.data;

        const newChartData: ChartData = {
          labels: Object.keys(data.cases),
          datasets: [
            {
              label: "Cases",
              data: Object.values(data.cases),
              fill: false,
              borderColor: "#007bff", // Change to blue color
              tension: 0.2,
            },
          ],
        };

        setChartData(newChartData);
      });

    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
    );
  }, []);

  return (
    <div className="w-11/12 m-auto">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">Corona Cases Chart</h1>
      <div className="w-11/12 m-auto">
        {chartData.datasets.length ? (
          <Line data={chartData} />
        ) : (
          <h1 className="text-blue-600 mb-4 font-bold text-2xl">Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default Charts;
