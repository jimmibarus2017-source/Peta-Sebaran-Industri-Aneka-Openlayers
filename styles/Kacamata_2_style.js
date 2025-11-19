var size = 0;
var placement = 'point';

var style_Kacamata_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "7.800000000000001px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("Industri") !== null) {
        labelText = String(feature.get("Industri"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [42.007, 42.007],
                  scale: 0.5237222367700621,
                  anchor: [21.0035, 21.0035],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/embedded.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
