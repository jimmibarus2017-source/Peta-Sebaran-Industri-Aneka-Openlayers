var wms_layers = [];


        var lyr_CartoLight_0 = new ol.layer.Tile({
            'title': 'Carto Light',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.pn'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Kacamata_2 = new ol.format.GeoJSON();
var features_Kacamata_2 = format_Kacamata_2.readFeatures(json_Kacamata_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kacamata_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kacamata_2.addFeatures(features_Kacamata_2);
var lyr_Kacamata_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kacamata_2, 
                style: style_Kacamata_2,
                popuplayertitle: 'Kacamata',
                interactive: true,
                title: '<img src="styles/legend/Kacamata_2.png" /> Kacamata'
            });
var format_FurnitureLainnya_3 = new ol.format.GeoJSON();
var features_FurnitureLainnya_3 = format_FurnitureLainnya_3.readFeatures(json_FurnitureLainnya_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FurnitureLainnya_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FurnitureLainnya_3.addFeatures(features_FurnitureLainnya_3);
var lyr_FurnitureLainnya_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FurnitureLainnya_3, 
                style: style_FurnitureLainnya_3,
                popuplayertitle: 'Furniture Lainnya',
                interactive: true,
                title: '<img src="styles/legend/FurnitureLainnya_3.png" /> Furniture Lainnya'
            });
var format_AnekaLainnya_4 = new ol.format.GeoJSON();
var features_AnekaLainnya_4 = format_AnekaLainnya_4.readFeatures(json_AnekaLainnya_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnekaLainnya_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnekaLainnya_4.addFeatures(features_AnekaLainnya_4);
var lyr_AnekaLainnya_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnekaLainnya_4, 
                style: style_AnekaLainnya_4,
                popuplayertitle: 'Aneka Lainnya',
                interactive: true,
                title: '<img src="styles/legend/AnekaLainnya_4.png" /> Aneka Lainnya'
            });
var format_AlatTulis_5 = new ol.format.GeoJSON();
var features_AlatTulis_5 = format_AlatTulis_5.readFeatures(json_AlatTulis_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlatTulis_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlatTulis_5.addFeatures(features_AlatTulis_5);
var lyr_AlatTulis_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlatTulis_5, 
                style: style_AlatTulis_5,
                popuplayertitle: 'Alat Tulis',
                interactive: true,
                title: '<img src="styles/legend/AlatTulis_5.png" /> Alat Tulis'
            });
var format_MainanAnakBesar_6 = new ol.format.GeoJSON();
var features_MainanAnakBesar_6 = format_MainanAnakBesar_6.readFeatures(json_MainanAnakBesar_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MainanAnakBesar_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MainanAnakBesar_6.addFeatures(features_MainanAnakBesar_6);
var lyr_MainanAnakBesar_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MainanAnakBesar_6, 
                style: style_MainanAnakBesar_6,
                popuplayertitle: 'Mainan Anak Besar',
                interactive: true,
                title: '<img src="styles/legend/MainanAnakBesar_6.png" /> Mainan Anak Besar'
            });
var format_MainanAnakMenengah_7 = new ol.format.GeoJSON();
var features_MainanAnakMenengah_7 = format_MainanAnakMenengah_7.readFeatures(json_MainanAnakMenengah_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MainanAnakMenengah_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MainanAnakMenengah_7.addFeatures(features_MainanAnakMenengah_7);
var lyr_MainanAnakMenengah_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MainanAnakMenengah_7, 
                style: style_MainanAnakMenengah_7,
                popuplayertitle: 'Mainan Anak Menengah',
                interactive: true,
                title: '<img src="styles/legend/MainanAnakMenengah_7.png" /> Mainan Anak Menengah'
            });
var format_MainanAnakKecil_8 = new ol.format.GeoJSON();
var features_MainanAnakKecil_8 = format_MainanAnakKecil_8.readFeatures(json_MainanAnakKecil_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MainanAnakKecil_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MainanAnakKecil_8.addFeatures(features_MainanAnakKecil_8);
var lyr_MainanAnakKecil_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MainanAnakKecil_8, 
                style: style_MainanAnakKecil_8,
                popuplayertitle: 'Mainan Anak Kecil',
                interactive: true,
                title: '<img src="styles/legend/MainanAnakKecil_8.png" /> Mainan Anak Kecil'
            });
var format_AlatOlahragaBesar_9 = new ol.format.GeoJSON();
var features_AlatOlahragaBesar_9 = format_AlatOlahragaBesar_9.readFeatures(json_AlatOlahragaBesar_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlatOlahragaBesar_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlatOlahragaBesar_9.addFeatures(features_AlatOlahragaBesar_9);
var lyr_AlatOlahragaBesar_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlatOlahragaBesar_9, 
                style: style_AlatOlahragaBesar_9,
                popuplayertitle: 'Alat Olahraga Besar',
                interactive: true,
                title: '<img src="styles/legend/AlatOlahragaBesar_9.png" /> Alat Olahraga Besar'
            });
var format_AlatOlahragaMenengah_10 = new ol.format.GeoJSON();
var features_AlatOlahragaMenengah_10 = format_AlatOlahragaMenengah_10.readFeatures(json_AlatOlahragaMenengah_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlatOlahragaMenengah_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlatOlahragaMenengah_10.addFeatures(features_AlatOlahragaMenengah_10);
var lyr_AlatOlahragaMenengah_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlatOlahragaMenengah_10, 
                style: style_AlatOlahragaMenengah_10,
                popuplayertitle: 'Alat Olahraga Menengah',
                interactive: true,
                title: '<img src="styles/legend/AlatOlahragaMenengah_10.png" /> Alat Olahraga Menengah'
            });
var format_AlatOlahragaKecil_11 = new ol.format.GeoJSON();
var features_AlatOlahragaKecil_11 = format_AlatOlahragaKecil_11.readFeatures(json_AlatOlahragaKecil_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlatOlahragaKecil_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlatOlahragaKecil_11.addFeatures(features_AlatOlahragaKecil_11);
var lyr_AlatOlahragaKecil_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlatOlahragaKecil_11, 
                style: style_AlatOlahragaKecil_11,
                popuplayertitle: 'Alat Olahraga Kecil',
                interactive: true,
                title: '<img src="styles/legend/AlatOlahragaKecil_11.png" /> Alat Olahraga Kecil'
            });
var format_AlatMusikBesar_12 = new ol.format.GeoJSON();
var features_AlatMusikBesar_12 = format_AlatMusikBesar_12.readFeatures(json_AlatMusikBesar_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlatMusikBesar_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlatMusikBesar_12.addFeatures(features_AlatMusikBesar_12);
var lyr_AlatMusikBesar_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlatMusikBesar_12, 
                style: style_AlatMusikBesar_12,
                popuplayertitle: 'Alat Musik Besar',
                interactive: true,
                title: '<img src="styles/legend/AlatMusikBesar_12.png" /> Alat Musik Besar'
            });
var format_AlatMusikMenengah_13 = new ol.format.GeoJSON();
var features_AlatMusikMenengah_13 = format_AlatMusikMenengah_13.readFeatures(json_AlatMusikMenengah_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlatMusikMenengah_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlatMusikMenengah_13.addFeatures(features_AlatMusikMenengah_13);
var lyr_AlatMusikMenengah_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlatMusikMenengah_13, 
                style: style_AlatMusikMenengah_13,
                popuplayertitle: 'Alat Musik Menengah',
                interactive: true,
                title: '<img src="styles/legend/AlatMusikMenengah_13.png" /> Alat Musik Menengah'
            });
var format_AlatMusikKecil_14 = new ol.format.GeoJSON();
var features_AlatMusikKecil_14 = format_AlatMusikKecil_14.readFeatures(json_AlatMusikKecil_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlatMusikKecil_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlatMusikKecil_14.addFeatures(features_AlatMusikKecil_14);
var lyr_AlatMusikKecil_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlatMusikKecil_14, 
                style: style_AlatMusikKecil_14,
                popuplayertitle: 'Alat Musik Kecil',
                interactive: true,
                title: '<img src="styles/legend/AlatMusikKecil_14.png" /> Alat Musik Kecil'
            });
var format_PerhiasanBesar_15 = new ol.format.GeoJSON();
var features_PerhiasanBesar_15 = format_PerhiasanBesar_15.readFeatures(json_PerhiasanBesar_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PerhiasanBesar_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PerhiasanBesar_15.addFeatures(features_PerhiasanBesar_15);
var lyr_PerhiasanBesar_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PerhiasanBesar_15, 
                style: style_PerhiasanBesar_15,
                popuplayertitle: 'Perhiasan Besar',
                interactive: true,
                title: '<img src="styles/legend/PerhiasanBesar_15.png" /> Perhiasan Besar'
            });
var format_PerhiasanKecil_16 = new ol.format.GeoJSON();
var features_PerhiasanKecil_16 = format_PerhiasanKecil_16.readFeatures(json_PerhiasanKecil_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PerhiasanKecil_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PerhiasanKecil_16.addFeatures(features_PerhiasanKecil_16);
var lyr_PerhiasanKecil_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PerhiasanKecil_16, 
                style: style_PerhiasanKecil_16,
                popuplayertitle: 'Perhiasan Kecil',
                interactive: true,
                title: '<img src="styles/legend/PerhiasanKecil_16.png" /> Perhiasan Kecil'
            });
var group_AlatMusikdanPerhiasan = new ol.layer.Group({
                                layers: [lyr_AlatMusikBesar_12,lyr_AlatMusikMenengah_13,lyr_AlatMusikKecil_14,lyr_PerhiasanBesar_15,lyr_PerhiasanKecil_16,],
                                fold: 'open',
                                title: ' Alat Musik dan Perhiasan'});
var group_MainanAnakdanAlatOlahraga = new ol.layer.Group({
                                layers: [lyr_MainanAnakBesar_6,lyr_MainanAnakMenengah_7,lyr_MainanAnakKecil_8,lyr_AlatOlahragaBesar_9,lyr_AlatOlahragaMenengah_10,lyr_AlatOlahragaKecil_11,],
                                fold: 'open',
                                title: 'Mainan Anak dan Alat Olahraga'});
var group_AnekaLainnya = new ol.layer.Group({
                                layers: [lyr_Kacamata_2,lyr_FurnitureLainnya_3,lyr_AnekaLainnya_4,lyr_AlatTulis_5,],
                                fold: 'open',
                                title: 'Aneka Lainnya'});

lyr_CartoLight_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_Kacamata_2.setVisible(true);lyr_FurnitureLainnya_3.setVisible(true);lyr_AnekaLainnya_4.setVisible(true);lyr_AlatTulis_5.setVisible(true);lyr_MainanAnakBesar_6.setVisible(true);lyr_MainanAnakMenengah_7.setVisible(true);lyr_MainanAnakKecil_8.setVisible(true);lyr_AlatOlahragaBesar_9.setVisible(true);lyr_AlatOlahragaMenengah_10.setVisible(true);lyr_AlatOlahragaKecil_11.setVisible(true);lyr_AlatMusikBesar_12.setVisible(true);lyr_AlatMusikMenengah_13.setVisible(true);lyr_AlatMusikKecil_14.setVisible(true);lyr_PerhiasanBesar_15.setVisible(true);lyr_PerhiasanKecil_16.setVisible(true);
var layersList = [lyr_CartoLight_0,lyr_GoogleMaps_1,group_AnekaLainnya,group_MainanAnakdanAlatOlahraga,group_AlatMusikdanPerhiasan];
lyr_Kacamata_2.set('fieldAliases', {'id': 'id', 'Industri': 'Industri', 'KBLi': 'KBLi', 'Produk': 'Produk', 'Alamat': 'Alamat', 'CP': 'CP', });
lyr_FurnitureLainnya_3.set('fieldAliases', {'id': 'id', 'Industri': 'Industri', 'KBLI': 'KBLI', 'Produk': 'Produk', 'Alamat': 'Alamat', 'CP': 'CP', });
lyr_AnekaLainnya_4.set('fieldAliases', {'id': 'id', 'Industri': 'Industri', 'KBLI': 'KBLI', 'Produk': 'Produk', 'Alamat': 'Alamat', 'CP': 'CP', });
lyr_AlatTulis_5.set('fieldAliases', {'id': 'id', 'Industri': 'Industri', 'KBLI': 'KBLI', 'Alamat': 'Alamat', 'CP': 'CP', 'Produk': 'Produk', });
lyr_MainanAnakBesar_6.set('fieldAliases', {'id': 'id', 'Industri': 'Industri', 'KBLI': 'KBLI', 'Produk': 'Produk', 'Alamat': 'Alamat', 'CP': 'CP', });
lyr_MainanAnakMenengah_7.set('fieldAliases', {'id': 'id', 'Industri': 'Industri', 'KBLI': 'KBLI', 'Produk': 'Produk', 'Alamat': 'Alamat', 'CP': 'CP', });
lyr_MainanAnakKecil_8.set('fieldAliases', {'id': 'id', 'Industri': 'Industri', 'KBLI': 'KBLI', 'Produk': 'Produk', 'Alamat': 'Alamat', 'CP': 'CP', });
lyr_AlatOlahragaBesar_9.set('fieldAliases', {'id': 'id', 'Industri': 'Industri', 'KBLI': 'KBLI', 'Produk': 'Produk', 'Alamat': 'Alamat', 'CP': 'CP', });
lyr_AlatOlahragaMenengah_10.set('fieldAliases', {'id': 'id', 'Industri': 'Industri', 'KBLI': 'KBLI', 'Produk': 'Produk', 'Alamat': 'Alamat', 'CP': 'CP', });
lyr_AlatOlahragaKecil_11.set('fieldAliases', {'id': 'id', 'Industri': 'Industri', 'KBLI': 'KBLI', 'Produk': 'Produk', 'Alamat': 'Alamat', 'CP': 'CP', });
lyr_AlatMusikBesar_12.set('fieldAliases', {'id': 'id', 'Industri': 'Industri', 'KBLI': 'KBLI', 'Produk': 'Produk', 'Alamat': 'Alamat', 'CP': 'CP', });
lyr_AlatMusikMenengah_13.set('fieldAliases', {'id': 'id', 'Industri': 'Industri', 'KBLI': 'KBLI', 'Produk': 'Produk', 'Alamat': 'Alamat', 'CP': 'CP', });
lyr_AlatMusikKecil_14.set('fieldAliases', {'id': 'id', 'Industri': 'Industri', 'KBLI': 'KBLI', 'Produk': 'Produk', 'Alamat': 'Alamat', 'CP': 'CP', });
lyr_PerhiasanBesar_15.set('fieldAliases', {'id': 'id', 'Industri': 'Industri', 'KBLI': 'KBLI', 'Produk': 'Produk', 'Alamat': 'Alamat', 'CP': 'CP', });
lyr_PerhiasanKecil_16.set('fieldAliases', {'id': 'id', 'Industri': 'Industri', 'KBLI': 'KBLI', 'Produk': 'Produk', 'Alamat': 'Alamat', 'CP': 'CP', });
lyr_Kacamata_2.set('fieldImages', {'id': 'TextEdit', 'Industri': 'TextEdit', 'KBLi': 'TextEdit', 'Produk': 'TextEdit', 'Alamat': 'TextEdit', 'CP': 'TextEdit', });
lyr_FurnitureLainnya_3.set('fieldImages', {'id': 'TextEdit', 'Industri': 'TextEdit', 'KBLI': 'TextEdit', 'Produk': 'TextEdit', 'Alamat': 'TextEdit', 'CP': 'TextEdit', });
lyr_AnekaLainnya_4.set('fieldImages', {'id': 'TextEdit', 'Industri': 'TextEdit', 'KBLI': 'TextEdit', 'Produk': 'TextEdit', 'Alamat': 'TextEdit', 'CP': 'TextEdit', });
lyr_AlatTulis_5.set('fieldImages', {'id': 'TextEdit', 'Industri': 'TextEdit', 'KBLI': 'TextEdit', 'Alamat': 'TextEdit', 'CP': 'TextEdit', 'Produk': 'TextEdit', });
lyr_MainanAnakBesar_6.set('fieldImages', {'id': 'TextEdit', 'Industri': 'TextEdit', 'KBLI': 'TextEdit', 'Produk': 'TextEdit', 'Alamat': 'TextEdit', 'CP': 'TextEdit', });
lyr_MainanAnakMenengah_7.set('fieldImages', {'id': 'TextEdit', 'Industri': 'TextEdit', 'KBLI': 'TextEdit', 'Produk': 'TextEdit', 'Alamat': 'TextEdit', 'CP': 'TextEdit', });
lyr_MainanAnakKecil_8.set('fieldImages', {'id': 'TextEdit', 'Industri': 'TextEdit', 'KBLI': 'TextEdit', 'Produk': 'TextEdit', 'Alamat': 'TextEdit', 'CP': 'TextEdit', });
lyr_AlatOlahragaBesar_9.set('fieldImages', {'id': 'TextEdit', 'Industri': 'TextEdit', 'KBLI': 'TextEdit', 'Produk': 'TextEdit', 'Alamat': 'TextEdit', 'CP': 'TextEdit', });
lyr_AlatOlahragaMenengah_10.set('fieldImages', {'id': 'TextEdit', 'Industri': 'TextEdit', 'KBLI': 'TextEdit', 'Produk': 'TextEdit', 'Alamat': 'TextEdit', 'CP': 'TextEdit', });
lyr_AlatOlahragaKecil_11.set('fieldImages', {'id': 'TextEdit', 'Industri': 'TextEdit', 'KBLI': 'TextEdit', 'Produk': 'TextEdit', 'Alamat': 'TextEdit', 'CP': 'TextEdit', });
lyr_AlatMusikBesar_12.set('fieldImages', {'id': 'TextEdit', 'Industri': 'TextEdit', 'KBLI': 'TextEdit', 'Produk': 'TextEdit', 'Alamat': 'TextEdit', 'CP': 'TextEdit', });
lyr_AlatMusikMenengah_13.set('fieldImages', {'id': 'TextEdit', 'Industri': 'TextEdit', 'KBLI': 'TextEdit', 'Produk': 'TextEdit', 'Alamat': 'TextEdit', 'CP': 'TextEdit', });
lyr_AlatMusikKecil_14.set('fieldImages', {'id': 'TextEdit', 'Industri': 'TextEdit', 'KBLI': 'TextEdit', 'Produk': 'TextEdit', 'Alamat': 'TextEdit', 'CP': 'TextEdit', });
lyr_PerhiasanBesar_15.set('fieldImages', {'id': 'TextEdit', 'Industri': 'TextEdit', 'KBLI': 'TextEdit', 'Produk': 'TextEdit', 'Alamat': 'TextEdit', 'CP': 'TextEdit', });
lyr_PerhiasanKecil_16.set('fieldImages', {'id': 'TextEdit', 'Industri': 'TextEdit', 'KBLI': 'TextEdit', 'Produk': 'TextEdit', 'Alamat': 'TextEdit', 'CP': 'TextEdit', });
lyr_Kacamata_2.set('fieldLabels', {'id': 'hidden field', 'Industri': 'inline label - always visible', 'KBLi': 'inline label - always visible', 'Produk': 'inline label - always visible', 'Alamat': 'inline label - always visible', 'CP': 'inline label - always visible', });
lyr_FurnitureLainnya_3.set('fieldLabels', {'id': 'hidden field', 'Industri': 'inline label - always visible', 'KBLI': 'inline label - always visible', 'Produk': 'inline label - always visible', 'Alamat': 'inline label - always visible', 'CP': 'inline label - always visible', });
lyr_AnekaLainnya_4.set('fieldLabels', {'id': 'hidden field', 'Industri': 'inline label - always visible', 'KBLI': 'inline label - always visible', 'Produk': 'inline label - always visible', 'Alamat': 'inline label - always visible', 'CP': 'inline label - always visible', });
lyr_AlatTulis_5.set('fieldLabels', {'id': 'hidden field', 'Industri': 'inline label - always visible', 'KBLI': 'inline label - always visible', 'Alamat': 'inline label - always visible', 'CP': 'inline label - always visible', 'Produk': 'inline label - always visible', });
lyr_MainanAnakBesar_6.set('fieldLabels', {'id': 'hidden field', 'Industri': 'inline label - always visible', 'KBLI': 'inline label - always visible', 'Produk': 'inline label - always visible', 'Alamat': 'inline label - always visible', 'CP': 'inline label - always visible', });
lyr_MainanAnakMenengah_7.set('fieldLabels', {'id': 'hidden field', 'Industri': 'inline label - always visible', 'KBLI': 'inline label - always visible', 'Produk': 'inline label - always visible', 'Alamat': 'inline label - always visible', 'CP': 'inline label - always visible', });
lyr_MainanAnakKecil_8.set('fieldLabels', {'id': 'hidden field', 'Industri': 'inline label - always visible', 'KBLI': 'inline label - always visible', 'Produk': 'inline label - always visible', 'Alamat': 'inline label - always visible', 'CP': 'inline label - always visible', });
lyr_AlatOlahragaBesar_9.set('fieldLabels', {'id': 'hidden field', 'Industri': 'inline label - always visible', 'KBLI': 'inline label - always visible', 'Produk': 'inline label - always visible', 'Alamat': 'inline label - always visible', 'CP': 'inline label - always visible', });
lyr_AlatOlahragaMenengah_10.set('fieldLabels', {'id': 'hidden field', 'Industri': 'inline label - always visible', 'KBLI': 'inline label - always visible', 'Produk': 'inline label - always visible', 'Alamat': 'inline label - always visible', 'CP': 'inline label - always visible', });
lyr_AlatOlahragaKecil_11.set('fieldLabels', {'id': 'hidden field', 'Industri': 'inline label - always visible', 'KBLI': 'inline label - always visible', 'Produk': 'inline label - always visible', 'Alamat': 'inline label - always visible', 'CP': 'inline label - always visible', });
lyr_AlatMusikBesar_12.set('fieldLabels', {'id': 'hidden field', 'Industri': 'inline label - always visible', 'KBLI': 'inline label - always visible', 'Produk': 'inline label - always visible', 'Alamat': 'inline label - always visible', 'CP': 'inline label - always visible', });
lyr_AlatMusikMenengah_13.set('fieldLabels', {'id': 'hidden field', 'Industri': 'inline label - always visible', 'KBLI': 'inline label - always visible', 'Produk': 'inline label - always visible', 'Alamat': 'inline label - always visible', 'CP': 'inline label - always visible', });
lyr_AlatMusikKecil_14.set('fieldLabels', {'id': 'hidden field', 'Industri': 'inline label - always visible', 'KBLI': 'inline label - always visible', 'Produk': 'inline label - always visible', 'Alamat': 'inline label - always visible', 'CP': 'inline label - always visible', });
lyr_PerhiasanBesar_15.set('fieldLabels', {'id': 'hidden field', 'Industri': 'inline label - always visible', 'KBLI': 'inline label - always visible', 'Produk': 'inline label - always visible', 'Alamat': 'inline label - always visible', 'CP': 'inline label - always visible', });
lyr_PerhiasanKecil_16.set('fieldLabels', {'id': 'hidden field', 'Industri': 'inline label - always visible', 'KBLI': 'inline label - always visible', 'Produk': 'inline label - always visible', 'Alamat': 'inline label - always visible', 'CP': 'inline label - always visible', });
lyr_PerhiasanKecil_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});