
# GoogleMapJS

A easy script to implement Google Maps into your website

### 1. Installation

This script need Mootools to work. (jQuery like).

First, clone this repo :

```sh
git clone https://github.com/fsalber/GoogleMapsJs.git
```

Import the "maps.js" file

```html 
<script type="text/javascript" src="YOURPATH/maps.js"></script>
```

Then, you have to call the "Google Map" from your HTML file

```html 
<div class="google-map" data-marker="TRUE/FALSE" data-marker-icon="MARKER FILE" data-center-lat="XX.XXXX" data-center-lng="XX.XXXX" data-zoom="XX"></div>
```

Parameters :
*   <kbd>bool</kbd> **data-marker** : Allow to use a custom marker icon <kbd>option : true / false</kbd>.
*   <kbd>string</kbd> **data-marker-icon** : If <kbd>data-marker="true"</kbd>, put the marker icon path.
*   <kbd>float</kbd> **data-center-lat** : Put the Lat. of your position
*   <kbd>float</kbd> **data-center-lng** : Put the Lng. of your position
*   <kbd>float</kbd> **data-zoom** : Define the zoom.

You have to define a custom height to display the map. In my example the height is define into the "google-map" css class.

**BONUS** You can edit the map color. Feel free to take a look at the following code :

```js

window.mapStyleData = [
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
        {
            "visibility": "on"
        },
        {
            "saturation": -100
        },
        {
            "lightness": 20
        }]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
        {
            "visibility": "on"
        },
        {
            "saturation": -100
        },
        {
            "lightness": 40
        }]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
        {
            "visibility": "on"
        },
        {
            "saturation": -10
        },
        {
            "lightness": 30
        }]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "all",
        "stylers": [
        {
            "visibility": "simplified"
        },
        {
            "saturation": -60
        },
        {
            "lightness": 10
        }]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "all",
        "stylers": [
        {
            "visibility": "simplified"
        },
        {
            "saturation": -60
        },
        {
            "lightness": 60
        }]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
        {
            "visibility": "off"
        },
        {
            "saturation": -100
        },
        {
            "lightness": 60
        }]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
        {
            "visibility": "off"
        },
        {
            "saturation": -100
        },
        {
            "lightness": 60
        }]
    }];

```