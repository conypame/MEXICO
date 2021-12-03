var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Estados_1 = new ol.format.GeoJSON();
var features_Estados_1 = format_Estados_1.readFeatures(json_Estados_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estados_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estados_1.addFeatures(features_Estados_1);
var lyr_Estados_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Estados_1, 
                style: style_Estados_1,
                interactive: true,
    title: 'Estados<br />\
    <img src="styles/legend/Estados_1_0.png" /> 9 - 53<br />\
    <img src="styles/legend/Estados_1_1.png" /> 53 - 112<br />\
    <img src="styles/legend/Estados_1_2.png" /> 112 - 211<br />\
    <img src="styles/legend/Estados_1_3.png" /> 211 - 679<br />\
    <img src="styles/legend/Estados_1_4.png" /> 679 - 5922<br />'
        });
var format_ViasSecundarias_2 = new ol.format.GeoJSON();
var features_ViasSecundarias_2 = format_ViasSecundarias_2.readFeatures(json_ViasSecundarias_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViasSecundarias_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViasSecundarias_2.addFeatures(features_ViasSecundarias_2);
var lyr_ViasSecundarias_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ViasSecundarias_2, 
                style: style_ViasSecundarias_2,
                interactive: true,
                title: '<img src="styles/legend/ViasSecundarias_2.png" /> Vias Secundarias'
            });
var format_Autopistas_3 = new ol.format.GeoJSON();
var features_Autopistas_3 = format_Autopistas_3.readFeatures(json_Autopistas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Autopistas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Autopistas_3.addFeatures(features_Autopistas_3);
var lyr_Autopistas_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Autopistas_3, 
                style: style_Autopistas_3,
                interactive: true,
                title: '<img src="styles/legend/Autopistas_3.png" /> Autopistas'
            });
var format_FFCC_4 = new ol.format.GeoJSON();
var features_FFCC_4 = format_FFCC_4.readFeatures(json_FFCC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FFCC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FFCC_4.addFeatures(features_FFCC_4);
var lyr_FFCC_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FFCC_4, 
                style: style_FFCC_4,
                interactive: true,
                title: '<img src="styles/legend/FFCC_4.png" /> FFCC'
            });
var format_Lagos_5 = new ol.format.GeoJSON();
var features_Lagos_5 = format_Lagos_5.readFeatures(json_Lagos_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lagos_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lagos_5.addFeatures(features_Lagos_5);
var lyr_Lagos_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lagos_5, 
                style: style_Lagos_5,
                interactive: true,
                title: '<img src="styles/legend/Lagos_5.png" /> Lagos'
            });
var format_Ros_6 = new ol.format.GeoJSON();
var features_Ros_6 = format_Ros_6.readFeatures(json_Ros_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ros_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ros_6.addFeatures(features_Ros_6);
var lyr_Ros_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ros_6, 
                style: style_Ros_6,
                interactive: true,
                title: '<img src="styles/legend/Ros_6.png" /> Ríos'
            });
var format_Aeropuertos_7 = new ol.format.GeoJSON();
var features_Aeropuertos_7 = format_Aeropuertos_7.readFeatures(json_Aeropuertos_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aeropuertos_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aeropuertos_7.addFeatures(features_Aeropuertos_7);
var lyr_Aeropuertos_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Aeropuertos_7, 
                style: style_Aeropuertos_7,
                interactive: true,
                title: '<img src="styles/legend/Aeropuertos_7.png" /> Aeropuertos'
            });
var format_Capital_8 = new ol.format.GeoJSON();
var features_Capital_8 = format_Capital_8.readFeatures(json_Capital_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capital_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capital_8.addFeatures(features_Capital_8);
var lyr_Capital_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capital_8, 
                style: style_Capital_8,
                interactive: true,
                title: '<img src="styles/legend/Capital_8.png" /> Capital'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Estados_1.setVisible(true);lyr_ViasSecundarias_2.setVisible(true);lyr_Autopistas_3.setVisible(true);lyr_FFCC_4.setVisible(true);lyr_Lagos_5.setVisible(true);lyr_Ros_6.setVisible(true);lyr_Aeropuertos_7.setVisible(true);lyr_Capital_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Estados_1,lyr_ViasSecundarias_2,lyr_Autopistas_3,lyr_FFCC_4,lyr_Lagos_5,lyr_Ros_6,lyr_Aeropuertos_7,lyr_Capital_8];
lyr_Estados_1.set('fieldAliases', {'fid': 'fid', 'cat': 'cat', 'gid': 'gid', 'cvegeoedo': 'cvegeoedo', 'area_km2': 'Area Km2', 'densidad': 'Habitantes/Km2', 'nombre_Fie': 'Nombre', });
lyr_ViasSecundarias_2.set('fieldAliases', {'gid': 'gid', 'tipo': 'tipo', 'admn': 'admn', 'ruta': 'Ruta Nombre', });
lyr_Autopistas_3.set('fieldAliases', {'gid': 'gid', 'tipo': 'tipo', 'admn': 'admn', 'ruta': 'ruta', });
lyr_FFCC_4.set('fieldAliases', {'gid': 'gid', '__gid': '__gid', 'nom_corr': 'nom_corr', 'nom_tram': 'Nombre del Tramo', 'lon_km': 'lon_km', });
lyr_Lagos_5.set('fieldAliases', {'gid': 'gid', 'nombre': 'Nombre', 'area2': 'area2', 'tabla_lago': 'Área - m2', });
lyr_Ros_6.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'CUENCA': 'CUENCA', });
lyr_Aeropuertos_7.set('fieldAliases', {'gid': 'gid', 'tipo': 'tipo', 'eleva_pies': 'eleva_pies', 'log_pista': 'log_pista', 'num_pistas': 'num_pistas', });
lyr_Capital_8.set('fieldAliases', {'CIUDAD': 'Estado', 'CAPITAL': 'CAPITAL', 'ESTADO': 'ESTADO', 'capital_id': 'Idioma', 'capital_mo': 'Moneda', 'capital_a�': 'Fundación', 'capital_po': 'Población Año 2010', });
lyr_Estados_1.set('fieldImages', {'fid': 'Hidden', 'cat': 'Hidden', 'gid': 'Hidden', 'cvegeoedo': 'Hidden', 'area_km2': 'TextEdit', 'densidad': 'TextEdit', 'nombre_Fie': 'TextEdit', });
lyr_ViasSecundarias_2.set('fieldImages', {'gid': 'Hidden', 'tipo': 'Hidden', 'admn': 'Hidden', 'ruta': 'TextEdit', });
lyr_Autopistas_3.set('fieldImages', {'gid': 'Hidden', 'tipo': 'TextEdit', 'admn': 'Hidden', 'ruta': 'Hidden', });
lyr_FFCC_4.set('fieldImages', {'gid': 'Hidden', '__gid': 'Hidden', 'nom_corr': 'Hidden', 'nom_tram': 'TextEdit', 'lon_km': 'Hidden', });
lyr_Lagos_5.set('fieldImages', {'gid': 'Hidden', 'nombre': 'TextEdit', 'area2': 'Hidden', 'tabla_lago': 'TextEdit', });
lyr_Ros_6.set('fieldImages', {'NOMBRE': 'TextEdit', 'CUENCA': 'Hidden', });
lyr_Aeropuertos_7.set('fieldImages', {'gid': 'Hidden', 'tipo': 'TextEdit', 'eleva_pies': 'Hidden', 'log_pista': 'Hidden', 'num_pistas': 'Hidden', });
lyr_Capital_8.set('fieldImages', {'CIUDAD': 'TextEdit', 'CAPITAL': 'Hidden', 'ESTADO': 'TextEdit', 'capital_id': 'TextEdit', 'capital_mo': 'TextEdit', 'capital_a�': 'TextEdit', 'capital_po': 'TextEdit', });
lyr_Estados_1.set('fieldLabels', {'area_km2': 'inline label', 'densidad': 'inline label', 'nombre_Fie': 'inline label', });
lyr_ViasSecundarias_2.set('fieldLabels', {'ruta': 'inline label', });
lyr_Autopistas_3.set('fieldLabels', {'tipo': 'inline label', });
lyr_FFCC_4.set('fieldLabels', {'nom_tram': 'inline label', });
lyr_Lagos_5.set('fieldLabels', {'nombre': 'inline label', 'tabla_lago': 'inline label', });
lyr_Ros_6.set('fieldLabels', {'NOMBRE': 'inline label', });
lyr_Aeropuertos_7.set('fieldLabels', {'tipo': 'header label', });
lyr_Capital_8.set('fieldLabels', {'CIUDAD': 'no label', 'ESTADO': 'inline label', 'capital_id': 'inline label', 'capital_mo': 'inline label', 'capital_a�': 'inline label', 'capital_po': 'inline label', });
lyr_Capital_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});