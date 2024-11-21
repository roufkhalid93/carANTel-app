import { useEffect } from 'react';

export default function MapComponent() {
    useEffect(() => {
        const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

        // Load Google Maps script
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);

        script.addEventListener('load', () => {
            const map = new window.google.maps.Map(document.getElementById('map'), {
                center: { lat: 2.942, lng: 101.588 },
                zoom: 8,
            });
            map.addListener('click', (e) => {
                console.log('Map clicked at', e.latLng.toString());
            });
        });
    }, []);

    return (
        <div id="map" style={{ height: '400px', width: '100%', marginBottom: '15px' }}></div>
    );
}