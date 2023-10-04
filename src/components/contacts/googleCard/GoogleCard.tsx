import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import React from "react";

const containerStyle = {
	width: "100%",
	height: "100%",
};
const center = {
	lat: -3.745,
	lng: -38.523,
};

export const GoogleCard = () => {
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: "AIzaSyDWC0vKSbB2RYtHeVczxk45So0K4tU7uz4",
	});
	const mapRef: any = React.useRef(undefined);

	const onLoad = React.useCallback(function callback(map: any) {
		mapRef.current = map;
	}, []);

	const onUnmount = React.useCallback(function callback(map: any) {
		mapRef.current = undefined;
	}, []);
	return isLoaded ? (
		<GoogleMap
			mapContainerStyle={containerStyle}
			center={center}
			zoom={10}
			onLoad={onLoad}
			onUnmount={onUnmount}
		>
			{/* Child components, such as markers, info windows, etc. */}
			<></>
		</GoogleMap>
	) : (
		<></>
	);
};
