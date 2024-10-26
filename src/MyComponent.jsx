import React from "react";
import {
  Circle,
  GoogleMap,
  HeatmapLayer,
  Marker,
  Polygon,
  Polyline,
  useJsApiLoader,
} from "@react-google-maps/api";
import { tiaongPolygonCoordinates } from "./polygon";
import { Box } from "@mui/material";
import { PageContainer } from "./components/layout/PageContainer";
import { BRGY_COOR, TIAONG_BRGY } from "./utils/constant";
import { setLocFormat } from "./utils/helper";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 13.954276367408628,
  lng: 121.33907651130149,
};

const allowedBounds = {
  north: center.lat + 0.07, // Upper bound (slightly north of center)
  south: center.lat - 0.12, // Lower bound (slightly south of center)
  west: center.lng - 0.08, // Left bound (slightly west of center)
  east: center.lng + 0.065, // Right bound (slightly east of center)
};
const G_MAP_LIB = ["visualization"];
function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_MAP_API_KEY,
    libraries: G_MAP_LIB,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    map.setZoom(12.5);
    map.setCenter(center);

    // Optionally restrict the draggable area
    map.setOptions({
      restriction: {
        latLngBounds: allowedBounds,
        strictBounds: false, // If true, prevents dragging outside bounds
      },
    });

    setMap(map);
  }, []);
  console.log(Math.random());
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  // React.useEffect(() => {
  //   if (map) {
  //     const marker = new window.google.maps.Marker({
  //       position: center,
  //       map: map,
  //       title: "Hello World!",
  //     });
  //   }
  // }, [map]);

  return isLoaded ? (
    <PageContainer
      titleText="Livestock Tiaong Heatmap"
      subText="Livestock Tiaong Heatmap"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12.5}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Polygon
          paths={tiaongPolygonCoordinates}
          options={{
            strokeColor: "#1976D2",
            strokeOpacity: 0.8,
            strokeWeight: 1,
            //   fillColor: "#FF0000",
            fillOpacity: 0,
          }}
        />
        <HeatmapLayer
          data={TIAONG_BRGY.map((brgy) => ({
            location: setLocFormat(BRGY_COOR[brgy].lat, BRGY_COOR[brgy].lng),
            weight: Math.random(),
          }))}
          options={{
            radius: 20,
            opacity: 0.6,
          }}
        />
        {/* {TIAONG_BRGY.map((brgy) => (
          <Marker
            label={brgy}
            position={setLocFormat(BRGY_COOR[brgy].lat, BRGY_COOR[brgy].lng)}
            
          />
        ))} */}
      </GoogleMap>
    </PageContainer>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
