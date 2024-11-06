var wms_layers = [];

var format_boundarydesa_0 = new ol.format.GeoJSON();
var features_boundarydesa_0 = format_boundarydesa_0.readFeatures(json_boundarydesa_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_boundarydesa_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_boundarydesa_0.addFeatures(features_boundarydesa_0);
var lyr_boundarydesa_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_boundarydesa_0, 
                style: style_boundarydesa_0,
                popuplayertitle: "boundary desa",
                interactive: true,
                title: '<img src="styles/legend/boundarydesa_0.png" /> boundary desa'
            });
var format_Tambakreja_point_1 = new ol.format.GeoJSON();
var features_Tambakreja_point_1 = format_Tambakreja_point_1.readFeatures(json_Tambakreja_point_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tambakreja_point_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tambakreja_point_1.addFeatures(features_Tambakreja_point_1);
var lyr_Tambakreja_point_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tambakreja_point_1, 
                style: style_Tambakreja_point_1,
                popuplayertitle: "Tambakreja_point",
                interactive: true,
                title: '<img src="styles/legend/Tambakreja_point_1.png" /> Tambakreja_point'
            });
var format_rt_2 = new ol.format.GeoJSON();
var features_rt_2 = format_rt_2.readFeatures(json_rt_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_2.addFeatures(features_rt_2);
var lyr_rt_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_2, 
                style: style_rt_2,
                popuplayertitle: "rt",
                interactive: true,
    title: 'rt<br />\
    <img src="styles/legend/rt_2_0.png" /> Rt 001 Rw 1<br />\
    <img src="styles/legend/rt_2_1.png" /> Rt 002 Rw 1<br />\
    <img src="styles/legend/rt_2_2.png" /> Rt 003 Rw 1<br />\
    <img src="styles/legend/rt_2_3.png" /> Rt 004 Rw 1<br />\
    <img src="styles/legend/rt_2_4.png" /> Rt 005 Rw 2<br />\
    <img src="styles/legend/rt_2_5.png" /> Rt 006 Rw 2<br />\
    <img src="styles/legend/rt_2_6.png" /> Rt 007 Rw 2<br />\
    <img src="styles/legend/rt_2_7.png" /> Rt 008 Rw 3<br />\
    <img src="styles/legend/rt_2_8.png" /> Rt 009 Rw 3<br />\
    <img src="styles/legend/rt_2_9.png" /> Rt 010 Rw 3<br />\
    <img src="styles/legend/rt_2_10.png" /> Rt 011 Rw 4<br />\
    <img src="styles/legend/rt_2_11.png" /> Rt 012 Rw 4<br />\
    <img src="styles/legend/rt_2_12.png" /> Rt 013 Rw 4<br />\
    <img src="styles/legend/rt_2_13.png" /> Rt 014 Rw 4<br />\
    <img src="styles/legend/rt_2_14.png" /> Rt 015 Rw 4<br />\
    <img src="styles/legend/rt_2_15.png" /> <br />'
        });
var format_sawah_3 = new ol.format.GeoJSON();
var features_sawah_3 = format_sawah_3.readFeatures(json_sawah_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sawah_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sawah_3.addFeatures(features_sawah_3);
var lyr_sawah_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sawah_3, 
                style: style_sawah_3,
                popuplayertitle: "sawah",
                interactive: true,
                title: '<img src="styles/legend/sawah_3.png" /> sawah'
            });
var format_hutan_4 = new ol.format.GeoJSON();
var features_hutan_4 = format_hutan_4.readFeatures(json_hutan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hutan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hutan_4.addFeatures(features_hutan_4);
var lyr_hutan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hutan_4, 
                style: style_hutan_4,
                popuplayertitle: "hutan",
                interactive: true,
                title: '<img src="styles/legend/hutan_4.png" /> hutan'
            });
var format_jalanpathtambakreja_line_5 = new ol.format.GeoJSON();
var features_jalanpathtambakreja_line_5 = format_jalanpathtambakreja_line_5.readFeatures(json_jalanpathtambakreja_line_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalanpathtambakreja_line_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalanpathtambakreja_line_5.addFeatures(features_jalanpathtambakreja_line_5);
var lyr_jalanpathtambakreja_line_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalanpathtambakreja_line_5, 
                style: style_jalanpathtambakreja_line_5,
                popuplayertitle: "jalan path — tambakreja_line",
                interactive: true,
                title: '<img src="styles/legend/jalanpathtambakreja_line_5.png" /> jalan path — tambakreja_line'
            });
var format_jalanresidentialtambakreja_linecopy_6 = new ol.format.GeoJSON();
var features_jalanresidentialtambakreja_linecopy_6 = format_jalanresidentialtambakreja_linecopy_6.readFeatures(json_jalanresidentialtambakreja_linecopy_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalanresidentialtambakreja_linecopy_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalanresidentialtambakreja_linecopy_6.addFeatures(features_jalanresidentialtambakreja_linecopy_6);
var lyr_jalanresidentialtambakreja_linecopy_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalanresidentialtambakreja_linecopy_6, 
                style: style_jalanresidentialtambakreja_linecopy_6,
                popuplayertitle: "jalan residential — tambakreja_line copy",
                interactive: true,
                title: '<img src="styles/legend/jalanresidentialtambakreja_linecopy_6.png" /> jalan residential — tambakreja_line copy'
            });
var format_jalantertiarytambakreja_line_7 = new ol.format.GeoJSON();
var features_jalantertiarytambakreja_line_7 = format_jalantertiarytambakreja_line_7.readFeatures(json_jalantertiarytambakreja_line_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalantertiarytambakreja_line_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalantertiarytambakreja_line_7.addFeatures(features_jalantertiarytambakreja_line_7);
var lyr_jalantertiarytambakreja_line_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalantertiarytambakreja_line_7, 
                style: style_jalantertiarytambakreja_line_7,
                popuplayertitle: "jalan tertiary — tambakreja_line",
                interactive: true,
                title: '<img src="styles/legend/jalantertiarytambakreja_line_7.png" /> jalan tertiary — tambakreja_line'
            });
var format_batasdesa_8 = new ol.format.GeoJSON();
var features_batasdesa_8 = format_batasdesa_8.readFeatures(json_batasdesa_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batasdesa_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batasdesa_8.addFeatures(features_batasdesa_8);
var lyr_batasdesa_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batasdesa_8, 
                style: style_batasdesa_8,
                popuplayertitle: "batas desa",
                interactive: true,
    title: 'batas desa<br />\
    <img src="styles/legend/batasdesa_8_0.png" /> Dusun Sidamulya<br />\
    <img src="styles/legend/batasdesa_8_1.png" /> Dusun Sidodadi<br />\
    <img src="styles/legend/batasdesa_8_2.png" /> <br />'
        });
var format_sungaitambakreja_line_9 = new ol.format.GeoJSON();
var features_sungaitambakreja_line_9 = format_sungaitambakreja_line_9.readFeatures(json_sungaitambakreja_line_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sungaitambakreja_line_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sungaitambakreja_line_9.addFeatures(features_sungaitambakreja_line_9);
var lyr_sungaitambakreja_line_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sungaitambakreja_line_9, 
                style: style_sungaitambakreja_line_9,
                popuplayertitle: "sungai — tambakreja_line",
                interactive: true,
                title: '<img src="styles/legend/sungaitambakreja_line_9.png" /> sungai — tambakreja_line'
            });
var format_Tambakreja_poly_10 = new ol.format.GeoJSON();
var features_Tambakreja_poly_10 = format_Tambakreja_poly_10.readFeatures(json_Tambakreja_poly_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tambakreja_poly_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tambakreja_poly_10.addFeatures(features_Tambakreja_poly_10);
var lyr_Tambakreja_poly_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tambakreja_poly_10, 
                style: style_Tambakreja_poly_10,
                popuplayertitle: "Tambakreja_poly",
                interactive: true,
                title: '<img src="styles/legend/Tambakreja_poly_10.png" /> Tambakreja_poly'
            });
var format_tambakrejapoint_11 = new ol.format.GeoJSON();
var features_tambakrejapoint_11 = format_tambakrejapoint_11.readFeatures(json_tambakrejapoint_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tambakrejapoint_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tambakrejapoint_11.addFeatures(features_tambakrejapoint_11);
var lyr_tambakrejapoint_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tambakrejapoint_11, 
                style: style_tambakrejapoint_11,
                popuplayertitle: "tambakreja point",
                interactive: true,
                title: '<img src="styles/legend/tambakrejapoint_11.png" /> tambakreja point'
            });

lyr_boundarydesa_0.setVisible(true);lyr_Tambakreja_point_1.setVisible(true);lyr_rt_2.setVisible(true);lyr_sawah_3.setVisible(true);lyr_hutan_4.setVisible(true);lyr_jalanpathtambakreja_line_5.setVisible(true);lyr_jalanresidentialtambakreja_linecopy_6.setVisible(true);lyr_jalantertiarytambakreja_line_7.setVisible(true);lyr_batasdesa_8.setVisible(true);lyr_sungaitambakreja_line_9.setVisible(true);lyr_Tambakreja_poly_10.setVisible(true);lyr_tambakrejapoint_11.setVisible(true);
var layersList = [lyr_boundarydesa_0,lyr_Tambakreja_point_1,lyr_rt_2,lyr_sawah_3,lyr_hutan_4,lyr_jalanpathtambakreja_line_5,lyr_jalanresidentialtambakreja_linecopy_6,lyr_jalantertiarytambakreja_line_7,lyr_batasdesa_8,lyr_sungaitambakreja_line_9,lyr_Tambakreja_poly_10,lyr_tambakrejapoint_11];
lyr_boundarydesa_0.set('fieldAliases', {'fid': 'fid', 'GID_4': 'GID_4', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', });
lyr_Tambakreja_point_1.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'railway': 'railway', 'blockage': 'blockage', 'roof_mater': 'roof_mater', 'amenity': 'amenity', 'name': 'name', 'width': 'width', 'public_tra': 'public_tra', 'bridge': 'bridge', 'smoothness': 'smoothness', 'landuse': 'landuse', 'covered': 'covered', 'diameter': 'diameter', 'access_roo': 'access_roo', 'building_m': 'building_m', 'isced_leve': 'isced_leve', 'aeroway': 'aeroway', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'water': 'water', 'highway': 'highway', 'surface': 'surface', 'pump': 'pump', 'natural': 'natural', 'oneway': 'oneway', 'addr_stree': 'addr_stree', 'layer': 'layer', 'addr_house': 'addr_house', });
lyr_rt_2.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'dusun': 'dusun', 'rw': 'rw', });
lyr_sawah_3.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_hutan_4.set('fieldAliases', {'id': 'id', });
lyr_jalanpathtambakreja_line_5.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'railway': 'railway', 'blockage': 'blockage', 'amenity': 'amenity', 'name': 'name', 'width': 'width', 'public_tra': 'public_tra', 'bridge': 'bridge', 'smoothness': 'smoothness', 'landuse': 'landuse', 'covered': 'covered', 'diameter': 'diameter', 'aeroway': 'aeroway', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'water': 'water', 'highway': 'highway', 'surface': 'surface', 'pump': 'pump', 'oneway': 'oneway', 'layer': 'layer', 'natural': 'natural', });
lyr_jalanresidentialtambakreja_linecopy_6.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'railway': 'railway', 'blockage': 'blockage', 'amenity': 'amenity', 'name': 'name', 'width': 'width', 'public_tra': 'public_tra', 'bridge': 'bridge', 'smoothness': 'smoothness', 'landuse': 'landuse', 'covered': 'covered', 'diameter': 'diameter', 'aeroway': 'aeroway', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'water': 'water', 'highway': 'highway', 'surface': 'surface', 'pump': 'pump', 'oneway': 'oneway', 'layer': 'layer', 'natural': 'natural', });
lyr_jalantertiarytambakreja_line_7.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'railway': 'railway', 'blockage': 'blockage', 'amenity': 'amenity', 'name': 'name', 'width': 'width', 'public_tra': 'public_tra', 'bridge': 'bridge', 'smoothness': 'smoothness', 'landuse': 'landuse', 'covered': 'covered', 'diameter': 'diameter', 'aeroway': 'aeroway', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'water': 'water', 'highway': 'highway', 'surface': 'surface', 'pump': 'pump', 'oneway': 'oneway', 'layer': 'layer', 'natural': 'natural', });
lyr_batasdesa_8.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'jenis': 'jenis', });
lyr_sungaitambakreja_line_9.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'railway': 'railway', 'blockage': 'blockage', 'amenity': 'amenity', 'name': 'name', 'width': 'width', 'public_tra': 'public_tra', 'bridge': 'bridge', 'smoothness': 'smoothness', 'landuse': 'landuse', 'covered': 'covered', 'diameter': 'diameter', 'aeroway': 'aeroway', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'water': 'water', 'highway': 'highway', 'surface': 'surface', 'pump': 'pump', 'oneway': 'oneway', 'layer': 'layer', 'natural': 'natural', });
lyr_Tambakreja_poly_10.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'railway': 'railway', 'blockage': 'blockage', 'roof_mater': 'roof_mater', 'amenity': 'amenity', 'name': 'name', 'width': 'width', 'public_tra': 'public_tra', 'bridge': 'bridge', 'smoothness': 'smoothness', 'landuse': 'landuse', 'covered': 'covered', 'diameter': 'diameter', 'access_roo': 'access_roo', 'building_m': 'building_m', 'isced_leve': 'isced_leve', 'aeroway': 'aeroway', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'water': 'water', 'highway': 'highway', 'surface': 'surface', 'pump': 'pump', 'natural': 'natural', 'oneway': 'oneway', 'addr_stree': 'addr_stree', 'layer': 'layer', 'addr_house': 'addr_house', });
lyr_tambakrejapoint_11.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'jenis': 'jenis', });
lyr_boundarydesa_0.set('fieldImages', {'fid': 'TextEdit', 'GID_4': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'GID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'NAME_4': 'TextEdit', 'VARNAME_4': 'TextEdit', 'TYPE_4': 'TextEdit', 'ENGTYPE_4': 'TextEdit', 'CC_4': 'TextEdit', });
lyr_Tambakreja_point_1.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'railway': 'TextEdit', 'blockage': 'TextEdit', 'roof_mater': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'width': 'TextEdit', 'public_tra': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'landuse': 'TextEdit', 'covered': 'TextEdit', 'diameter': 'TextEdit', 'access_roo': 'TextEdit', 'building_m': 'TextEdit', 'isced_leve': 'TextEdit', 'aeroway': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'water': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'pump': 'TextEdit', 'natural': 'TextEdit', 'oneway': 'TextEdit', 'addr_stree': 'TextEdit', 'layer': 'TextEdit', 'addr_house': 'TextEdit', });
lyr_rt_2.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'dusun': 'TextEdit', 'rw': 'TextEdit', });
lyr_sawah_3.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_hutan_4.set('fieldImages', {'id': 'TextEdit', });
lyr_jalanpathtambakreja_line_5.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'railway': 'TextEdit', 'blockage': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'width': 'TextEdit', 'public_tra': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'landuse': 'TextEdit', 'covered': 'TextEdit', 'diameter': 'TextEdit', 'aeroway': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'water': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'pump': 'TextEdit', 'oneway': 'TextEdit', 'layer': 'TextEdit', 'natural': 'TextEdit', });
lyr_jalanresidentialtambakreja_linecopy_6.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'railway': 'TextEdit', 'blockage': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'width': 'TextEdit', 'public_tra': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'landuse': 'TextEdit', 'covered': 'TextEdit', 'diameter': 'TextEdit', 'aeroway': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'water': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'pump': 'TextEdit', 'oneway': 'TextEdit', 'layer': 'TextEdit', 'natural': 'TextEdit', });
lyr_jalantertiarytambakreja_line_7.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'railway': 'TextEdit', 'blockage': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'width': 'TextEdit', 'public_tra': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'landuse': 'TextEdit', 'covered': 'TextEdit', 'diameter': 'TextEdit', 'aeroway': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'water': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'pump': 'TextEdit', 'oneway': 'TextEdit', 'layer': 'TextEdit', 'natural': 'TextEdit', });
lyr_batasdesa_8.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'jenis': 'TextEdit', });
lyr_sungaitambakreja_line_9.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'railway': 'TextEdit', 'blockage': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'width': 'TextEdit', 'public_tra': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'landuse': 'TextEdit', 'covered': 'TextEdit', 'diameter': 'TextEdit', 'aeroway': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'water': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'pump': 'TextEdit', 'oneway': 'TextEdit', 'layer': 'TextEdit', 'natural': 'TextEdit', });
lyr_Tambakreja_poly_10.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'railway': 'TextEdit', 'blockage': 'TextEdit', 'roof_mater': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'width': 'TextEdit', 'public_tra': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'landuse': 'TextEdit', 'covered': 'TextEdit', 'diameter': 'TextEdit', 'access_roo': 'TextEdit', 'building_m': 'TextEdit', 'isced_leve': 'TextEdit', 'aeroway': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'water': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'pump': 'TextEdit', 'natural': 'TextEdit', 'oneway': 'TextEdit', 'addr_stree': 'TextEdit', 'layer': 'TextEdit', 'addr_house': 'TextEdit', });
lyr_tambakrejapoint_11.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'jenis': 'TextEdit', });
lyr_boundarydesa_0.set('fieldLabels', {'fid': 'no label', 'GID_4': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'NAME_4': 'no label', 'VARNAME_4': 'no label', 'TYPE_4': 'no label', 'ENGTYPE_4': 'no label', 'CC_4': 'no label', });
lyr_Tambakreja_point_1.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'depth': 'no label', 'railway': 'no label', 'blockage': 'no label', 'roof_mater': 'no label', 'amenity': 'no label', 'name': 'inline label - visible with data', 'width': 'no label', 'public_tra': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'landuse': 'no label', 'covered': 'no label', 'diameter': 'no label', 'access_roo': 'no label', 'building_m': 'no label', 'isced_leve': 'no label', 'aeroway': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'water': 'no label', 'highway': 'no label', 'surface': 'no label', 'pump': 'no label', 'natural': 'no label', 'oneway': 'no label', 'addr_stree': 'no label', 'layer': 'no label', 'addr_house': 'no label', });
lyr_rt_2.set('fieldLabels', {'id': 'no label', 'nama': 'inline label - always visible', 'dusun': 'no label', 'rw': 'no label', });
lyr_sawah_3.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_hutan_4.set('fieldLabels', {'id': 'no label', });
lyr_jalanpathtambakreja_line_5.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'depth': 'no label', 'railway': 'no label', 'blockage': 'no label', 'amenity': 'no label', 'name': 'no label', 'width': 'no label', 'public_tra': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'landuse': 'no label', 'covered': 'no label', 'diameter': 'no label', 'aeroway': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'water': 'no label', 'highway': 'no label', 'surface': 'no label', 'pump': 'no label', 'oneway': 'no label', 'layer': 'no label', 'natural': 'no label', });
lyr_jalanresidentialtambakreja_linecopy_6.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'depth': 'no label', 'railway': 'no label', 'blockage': 'no label', 'amenity': 'no label', 'name': 'inline label - always visible', 'width': 'inline label - always visible', 'public_tra': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'landuse': 'no label', 'covered': 'no label', 'diameter': 'no label', 'aeroway': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'water': 'no label', 'highway': 'inline label - always visible', 'surface': 'no label', 'pump': 'no label', 'oneway': 'no label', 'layer': 'no label', 'natural': 'no label', });
lyr_jalantertiarytambakreja_line_7.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'depth': 'no label', 'railway': 'no label', 'blockage': 'no label', 'amenity': 'no label', 'name': 'inline label - visible with data', 'width': 'inline label - visible with data', 'public_tra': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'landuse': 'no label', 'covered': 'no label', 'diameter': 'no label', 'aeroway': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'water': 'no label', 'highway': 'no label', 'surface': 'no label', 'pump': 'no label', 'oneway': 'no label', 'layer': 'no label', 'natural': 'no label', });
lyr_batasdesa_8.set('fieldLabels', {'id': 'no label', 'nama': 'inline label - always visible', 'jenis': 'no label', });
lyr_sungaitambakreja_line_9.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'depth': 'no label', 'railway': 'no label', 'blockage': 'no label', 'amenity': 'no label', 'name': 'inline label - always visible', 'width': 'inline label - always visible', 'public_tra': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'landuse': 'no label', 'covered': 'no label', 'diameter': 'no label', 'aeroway': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'water': 'no label', 'highway': 'no label', 'surface': 'no label', 'pump': 'no label', 'oneway': 'no label', 'layer': 'no label', 'natural': 'no label', });
lyr_Tambakreja_poly_10.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'depth': 'no label', 'railway': 'no label', 'blockage': 'no label', 'roof_mater': 'no label', 'amenity': 'no label', 'name': 'inline label - always visible', 'width': 'no label', 'public_tra': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'landuse': 'no label', 'covered': 'no label', 'diameter': 'no label', 'access_roo': 'no label', 'building_m': 'no label', 'isced_leve': 'no label', 'aeroway': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'water': 'no label', 'highway': 'no label', 'surface': 'no label', 'pump': 'no label', 'natural': 'no label', 'oneway': 'no label', 'addr_stree': 'no label', 'layer': 'no label', 'addr_house': 'no label', });
lyr_tambakrejapoint_11.set('fieldLabels', {'id': 'no label', 'nama': 'inline label - always visible', 'jenis': 'inline label - always visible', });
lyr_tambakrejapoint_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});