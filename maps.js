(function(root)
{
    'use strict';
    var each = function(array, callback, scope)
    {
        for (var i = 0; i < array.length; i++)
        {
            callback.call(scope, array[i], i)
        }
    };
    var centerMap = function(gmap)
    {
        var bounds = new google.maps.LatLngBounds();
        gmap.data.addListener('addfeature', function(e)
        {
            processPoints(e.feature.getGeometry(), bounds.extend, bounds);
            gmap.fitBounds(bounds)
        })
    };
    var processPoints = function(geometry, callback, thisArg)
    {
        if (geometry instanceof google.maps.LatLng)
        {
            callback.call(thisArg, geometry)
        }
        else if (geometry instanceof google.maps.Data.Point)
        {
            callback.call(thisArg, geometry.get())
        }
        else
        {
            geometry.getArray().forEach(function(g)
            {
                processPoints(g, callback, thisArg)
            })
        }
    };
    var maps = document.querySelectorAll('.google-map');
    if (maps.length > 0)
    {
        root.on_map_api_init = function()
        {
            var styledMap;
            if (typeof root.mapStyleData === 'object')
            {
                styledMap = new google.maps.StyledMapType(root.mapStyleData,
                {
                    name: "Styled Map"
                })
            }
            var markerIcon;
            if (typeof root.mapMarkerIcon === 'object')
            {
                var icon = root.mapMarkerIcon;
                markerIcon = {
                    url: icon.url,
                    size: new google.maps.Size(icon.size.x, icon.size.y),
                    anchor: new google.maps.Point(icon.anchor.x || 0, icon.anchor.y || 0)
                }
            }
            each(maps, function(map)
            {
                var mapCenterLatLng = new google.maps.LatLng(Number(map.getAttribute('data-center-lat')), Number(map.getAttribute(
                    'data-center-lng')));
                var mapMarkerLatLng = new google.maps.LatLng(Number(map.getAttribute('data-marker-lat')), Number(map.getAttribute(
                    'data-marker-lng')));
                var mapScroll = map.getAttribute('data-scrollwheel') === 'true';
                var mapHasMarker = map.getAttribute('data-marker') === 'true';
                var mapShowTransit = map.getAttribute('data-transit') === 'true';
                var mapDefaultZoom = Number(map.getAttribute('data-zoom'));
                var mapMarkerIcon = map.getAttribute('data-marker-icon');
                if (mapMarkerIcon)
                {
                    markerIcon = mapMarkerIcon
                }
                var mapMarkerTitle = map.getAttribute('data-marker-title');
                var mapGeoJsonUrl = map.getAttribute('data-geojson-url');
                if ((!mapCenterLatLng.lat() || !mapCenterLatLng.lng()) && (mapMarkerLatLng.lat() && mapMarkerLatLng.lng()))
                {
                    mapCenterLatLng = mapMarkerLatLng
                }
                if ((!mapMarkerLatLng.lat() || !mapMarkerLatLng.lng()) && (mapCenterLatLng.lat() && mapCenterLatLng.lng()))
                {
                    mapMarkerLatLng = mapCenterLatLng
                }
                var gmap = new google.maps.Map(map,
                {
                    center: mapCenterLatLng,
                    zoom: mapDefaultZoom,
                    scrollwheel: mapScroll
                });
                if (mapGeoJsonUrl)
                {
                    centerMap(gmap);
                    gmap.data.loadGeoJson(mapGeoJsonUrl);
                    gmap.data.setStyle(
                    {
                        icon: markerIcon
                    })
                }
                if (styledMap)
                {
                    gmap.mapTypes.set('map_style', styledMap);
                    gmap.setMapTypeId('map_style')
                }
                var clickHandler = function()
                {
                    window.open("https://www.google.fr/maps/place//@" + gmap.getCenter().toUrlValue() + "," + gmap.getZoom() + "z",
                        '_blank')
                };
                gmap.addListener('dblclick', clickHandler);
                if (mapShowTransit)
                {
                    var transitLayer = new google.maps.TransitLayer();
                    transitLayer.setMap(gmap)
                }
                if (mapHasMarker)
                {
                    var markerOptions = {
                        position: mapMarkerLatLng,
                        map: gmap,
                        animation: google.maps.Animation.DROP,
                        title: mapMarkerTitle
                    };
                    if (markerIcon)
                    {
                        markerOptions.icon = markerIcon
                    }
                    var marker = new google.maps.Marker(markerOptions);
                    marker.addListener('click', clickHandler)
                }
            }, this)
        };
        var script = document.createElement("script");
        script.async = !0;
        document.getElementsByTagName("head")[0].appendChild(script);
        script.src = 'https://maps.googleapis.com/maps/api/js?callback=on_map_api_init&key=AIzaSyCtumb-uXxeU4O33lEEiheQScCgFK0NFHU';
    }
})(window)