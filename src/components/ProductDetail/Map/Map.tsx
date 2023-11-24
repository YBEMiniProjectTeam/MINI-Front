import { useEffect } from "react";
import { MapProps } from "./Map.types";
import { Box } from "@chakra-ui/react";

const Map = ({ lat, lng }: MapProps) => {
  const position = { lat, lng };

  useEffect(() => {
    let map: google.maps.Map;
    async function initMap(): Promise<void> {
      const { Map } = (await google.maps.importLibrary(
        "maps"
      )) as google.maps.MapsLibrary;
      const { Marker } = (await google.maps.importLibrary(
        "marker"
      )) as google.maps.MarkerLibrary;

      map = new Map(document.getElementById("map") as HTMLElement, {
        center: position,
        zoom: 15
      });

      const marker = new Marker({
        map: map,
        position: position
      });
    }

    initMap();
  }, []);

  return <Box id="map" w="100%" minH="300px" margin="10px 0 40px" />;
};

export default Map;
