import React from "react";
import { ComposableMap, Geographies, Geography, GeographyProps } from "react-simple-maps";

const IndiaMap: React.FC = () => (
  <ComposableMap projection="geoMercator" width={400} height={400}>
    <Geographies geography="/india-topo.json">
      {({ geographies }) =>
        geographies.map((geo) => (
          <Geography
            key={geo.rsmKey}
            geography={geo}
            style={{
              default: { fill: "#111", outline: "none" },
              hover: { fill: "#444", outline: "none" },
            }}
          />
        ))
      }
    </Geographies>
  </ComposableMap>
);

export default IndiaMap;
