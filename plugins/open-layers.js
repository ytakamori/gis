import Map from 'ol/Map';
import View from 'ol/View';

export default (context, inject) => {
    const ol = {
        Map, View,
    };
    inject('ol', ol);
};