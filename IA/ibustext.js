var firstAudio = "https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_";
var lastAudio = "_001.mp3";

function Astrick(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "*";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "*";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function Diversion(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="none";
        marquee.style.display = "block";
        marquee.innerHTML = "Bus on diversion. Please listen for further announcements";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.style.display = "none";
        newIbusDisplayDesTextMarquee.style.display = "block";
        newIbusDisplayDesTextMarquee.innerHTML = "Bus on diversion. Please listen for further announcements";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        newInfoNewIbus()
    }
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/DI_THIS_BUS_IS_ON_DIVERSION_%20PLEASE_LISTEN_FOR_FUTHER_ANNOUNCEMENTS_001.mp3";
    iBusAudio.play();
}
function DestinationChange(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="none";
        marquee.style.display = "block";
        marquee.innerHTML = "Destination Change - please listen for further instructions";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.style.display = "none";
        newIbusDisplayDesTextMarquee.style.display = "block";
        newIbusDisplayDesTextMarquee.innerHTML = "Destination Change - please listen for further instructions";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        newInfoNewIbus()
    }
    iBusAudio.src="https://istiyaq123.github.io/ibus/audio/Destination Change FOI Sept.mp3";
    iBusAudio.play();
}
function moveDown(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Please move down the bus";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Please move down the bus";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        newInfoNewIbus()
    }
    iBusAudio.src="https://istiyaq123.github.io/ibus/audio/Pls%20Mve%20Down%20Bus%20FOI%20Sept.mp3";
    iBusAudio.play();
}
function CCTV(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "CCTV in use";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "CCTV in use";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        newInfoNewIbus()
    }
    iBusAudio.src="https://istiyaq123.github.io/ibus/audio/CCTV%20FOI%20Sept.mp3";
    iBusAudio.play();
}
function Wait(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="none";
        marquee.style.display = "block";
        marquee.innerHTML = "Regulating service - please listen for further information";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.style.display = "none";
        newIbusDisplayDesTextMarquee.style.display = "block";
        newIbusDisplayDesTextMarquee.innerHTML = "Regulating service - please listen for further information";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        newInfoNewIbus()
    }
    iBusAudio.src="https://istiyaq123.github.io/ibus/audio/Even%20Out%20Service%20FOI%20Sept.mp3";
    iBusAudio.play();
}
function DriverChangenew(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Driver Change";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Driver Change";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        newInfoNewIbus()
    }
    iBusAudio.src="https://istiyaq123.github.io/ibus/audio/Driver%20Change%20FOI%20Sept.mp3";
    iBusAudio.play();
}
function Standing(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "No Standing on upper deck";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "No Standing on upper deck";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        newInfoNewIbus()
    }
    iBusAudio.src="https://istiyaq123.github.io/ibus/audio/No%20Standing%20FOI%20Sept.mp3";
    iBusAudio.play();
}
function seats(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Seats available upstairs";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Seats available upstairs";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        newInfoNewIbus()
    }
    iBusAudio.src="https://istiyaq123.github.io/ibus/audio/Seats%20Upstairs%20FOI%20Sept.mp3";
    iBusAudio.play();
}

function IslipManorRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Islip Manor Road";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function IslipManorRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ISLIP_MANOR_WAY_001.mp3";
    iBusAudio.play();
}
function ManorGate(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Manor Gate";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function ManorGateAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MANOR_GATE_001.mp3";
    iBusAudio.play();
}
function ArnoldRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Arnold Road";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function ArnoldRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Arnold_Road_001.mp3";
    iBusAudio.play();
}
function IslipManorPark(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Islip Manor Park";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function IslipManorParkAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/s_Islip_Manor_Park_001.mp3";
    iBusAudio.play();
}
function MoatFarmRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Moat Farm Road";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function MoatFarmRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Moat_Farm_Road_001.mp3";
    iBusAudio.play();
}
function BelvueRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Belvue Road";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function BelvueRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Belvue_Road_001.mp3";
    iBusAudio.play();
}
function FortRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Fort Road";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function FortRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/s_Fort_Road_001.mp3";
    iBusAudio.play();
}
function BelvueSchool(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Belvue School";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function BelvueSchoolAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Belvue_School_001.mp3";
    iBusAudio.play();
}
function HorseshoeCrescent(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Horseshoe Crescent";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function HorseshoeCrescentAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Horseshoe_Crescent_001.mp3";
    iBusAudio.play();
}
function HotspurRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Hotspur Road";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function HotspurRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Hotspur_Road_001.mp3";
    iBusAudio.play();
}
function ElmTreeClose(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Elm Tree Close";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function ElmTreeCloseAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Elm_Tree_Close_001.mp3";
    iBusAudio.play();
}
function KensingtonRoadRuislipRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Kensington Road / Ruislip Road";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function KensingtonRoadRuislipRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Elm_Tree_Close_001.mp3";
    iBusAudio.play();
}
function GoslingClose(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Gosling Close";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function GoslingCloseAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Gosling_Close_001.mp3";
    iBusAudio.play();
}
function MarleyClose(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Marley Close";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function MarleyCloseAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Marley_Close_001.mp3";
    iBusAudio.play();
}
function RosedeneAvenue(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Rosedene Avenue";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function RosedeneAvenueAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Rosedene_Avenue_001.mp3";
    iBusAudio.play();
}
function MarnhamCrescent(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Marnham Crescent";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function MarnhamCrescentAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Marnham_Crescent_001.mp3";
    iBusAudio.play();
}
function WestRidgeGardens(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "West Ridge Gardens";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function WestRidgeGardensAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_West_Ridge_Gardens_001.mp3";
    iBusAudio.play();
}
function EastClose(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "East Close";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function EastCloseAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_East_Close_001.mp3";
    iBusAudio.play();
}
function FarndaleCrescent(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Farndale Crescent";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function FarndaleCrescentAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Farndale_Crescent_001.mp3";
    iBusAudio.play();
}
function GreenfordPoliceStation(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Greenford Police Station";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function GreenfordPoliceStationAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Greenford_Police_Station_.mp3";
    iBusAudio.play();
}
function GreenfordBroadway(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Greenford Broadway";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function GreenfordBroadwayAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Greenford_Broadway_001.mp3";
    iBusAudio.play();
}
function CliftonRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Clifton Road";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function CliftonRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Clifton_Road_001.mp3";
    iBusAudio.play();
}
function GreenfordAvenue(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Greenford Avenue";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function GreenfordAvenueAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Greenford_Avenue_001.mp3";
    iBusAudio.play();
}
function CuckooAvenue(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Cuckoo Avenue";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function CuckooAvenueAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Cuckoo_Avenue_001.mp3";
    iBusAudio.play();
}
function GurnellLeisureCentre(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Gurnell Leisure Centre";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function GurnellLeisureCentreAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Gurnell_Leisure_Centre_001.mp3";
    iBusAudio.play();
}
function RuislipRoadEast(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Ruislip Road East";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function RuislipRoadEastAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Ruislip_Road_East_001.mp3";
    iBusAudio.play();
}
function ScotchCommon(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Scotch Common";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function ScotchCommonAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Scotch_Common_001.mp3";
    iBusAudio.play();
}
function HollingbourneGardens(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Hollingbourne Gardens";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function HollingbourneGardensAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Hollingbourne_Gardens_001.mp3";
    iBusAudio.play();
}
function KentGardens(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Kent Gardens";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function KentGardensAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Kent_Gardens_001.mp3";
    iBusAudio.play();
}
function TheKnoll(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "The Knoll";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function TheKnollAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_The_Knoll_001.mp3";
    iBusAudio.play();
}
function CharlburyGrove(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Charlbury Grove";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function CharlburyGroveAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Charlbury_Grove_001.mp3";
    iBusAudio.play();
}
function EatonRise(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Eaton Rise";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function EatonRiseAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Eaton_Rise_001.mp3";
    iBusAudio.play();
}
function EalingBroadwayStationHavenGreen(){
    topTextYes.style.display ="block";
    topTextNo.style.display ="none";
    topTextYes.innerHTML = "Eaton Rise";
    topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function EalingBroadwayStationHavenGreenAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Ealing_Broadway_Station_Haven_Green_001.mp3";
    iBusAudio.play();
}
function AmherstRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Amherst Road";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function AmherstRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Amherst_Road_001.mp3";
    iBusAudio.play();
}
function MountAvenue(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Mount Avenue";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function AmherstRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Mount_Avenue_001.mp3";
    iBusAudio.play();
}
function EdgehillRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Edgehill Road";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function EdgehillRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Edgehill_Road_001.mp3";
    iBusAudio.play();
}
function ClevelandRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Cleveland Road";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function ClevelandRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Cleveland_Road_001.mp3";
    iBusAudio.play();
}
function HenleyClose(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Henley Close";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function HenleyCloseAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Henley_Close_001.mp3";
    iBusAudio.play();
}
function FerrymeadDrive(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Ferrymead Drive";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function FerrymeadDriveAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Ferrymead_Drive_001.mp3";
    iBusAudio.play();
}
function GreenfordHighSchool(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Greenford High School";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function GreenfordHighSchoolAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Greenford_High_School_001.mp3";
    iBusAudio.play();
}
function SmithsFarm(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Smiths Farm";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function SmithsFarmAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Smiths_Farm_001.mp3";
    iBusAudio.play();
}
function GreenfordIndustrialEstate(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Greenford Industrial Estate";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function GreenfordIndustrialEstateAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Greenford_Industrial_Estate_001.mp3";
    iBusAudio.play();
}
function EastcoteLane(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Eastcote Lane";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function EastcoteLaneAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Eastcote_Lane_001.mp3";
    iBusAudio.play();
}
function TheCommonWarwickDene(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "The Common / Warwick Dene";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function TheCommonWarwickDeneAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_THE_COMMON_WARWICK_DENE_001.mp3";
    iBusAudio.play();
}
function EalingBroadwayStation(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Ealing Broadway Station";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function EalingBroadwayStationAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_EALING_BROADWAY_STATION_001.mp3";
    iBusAudio.play();
}
function EalingTownHall(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Ealing Town Hall";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function EalingTownHallAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_EALING_TOWN_HALL_001.mp3";
    iBusAudio.play();
}
function StLeonardsRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "St Leonards Road";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function StLeonardsRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ST_LEONARDS_ROAD_001.mp3";
    iBusAudio.play();
}
function DaneRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Dane Road";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function DaneRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Dane_Road_001.mp3";
    iBusAudio.play();
}
function DraytonGreenRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Drayton Green Road";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function DraytonGreenRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_DRAYTON_GREEN_ROAD_001.mp3";
    iBusAudio.play();
}
function WestEalingStation(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "West Ealing Station";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function WestEalingStationAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_WEST_eEALING_STATION_001.mp3";
    iBusAudio.play();
}
function ArgyleRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Argyle Road";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function ArgyleRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ARGYLE_ROAD_001.mp3";
    iBusAudio.play();
}
function DraytonGreen(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Drayton Green";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function DraytonGreenAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_DRAYTON_GREEN_001.mp3";
    iBusAudio.play();
}
function DraytonBridgeRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Drayton Bridge Road";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function DraytonBridgeRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_DRAYTON_BRIDGE_ROAD_001.mp3";
    iBusAudio.play();
}
function FramfieldRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Framfield Road";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function FramfieldRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_FRAMFIELD_ROAD_001.mp3";
    iBusAudio.play();
}
function StaffordCourt(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Stafford Court";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function StaffordCourtAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_STAFFORD_COURT_001.mp3";
    iBusAudio.play();
}
function RadnorCourt(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Radnor Court";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function RadnorCourtAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_RADNOR_COURT_001.mp3";
    iBusAudio.play();
}
function CastleBarParkStation(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Castle Bar Park Station";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function CastleBarParkStationAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CASTLE_BAR_PARK_STATION_001.mp3";
    iBusAudio.play();
}
function BordarsWalk(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Bordars Walk";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function BordarsWalkAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BORDARS_WALK_001.mp3";
    iBusAudio.play();
}
function KennedyRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Kennedy Road";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function KennedyRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_KENNEDY_ROAD_001.mp3";
    iBusAudio.play();
}
function BrentsideHighSchool(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Brentside High School";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function BrentsideHighSchoolAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BRENTSIDE_HIGH_SCHOOL_001.mp3";
    iBusAudio.play();
}
function CopleyClose(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Copley Close";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function CopleyCloseAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_COPLEY_CLOSE_001.mp3";
    iBusAudio.play();
}
function CastleBarPark(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Castle Bar Park";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function CastleBarParkAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CASTLE_BAR_PARK_001.mp3";
    iBusAudio.play();
}
function CheynePath(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Cheyne Path";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function CheynePathAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CHEYNE_PATH_001.mp3";
    iBusAudio.play();
}
function BrowningAvenue(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Browning Avenue";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function BrowningAvenueAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BROWNING_AVENUE_001.mp3";
    iBusAudio.play();
}
function SutherlandAvenue(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Sutherland Avenue";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function SutherlandAvenueAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SUTHERLAND_AVENUE_001.mp3";
    iBusAudio.play();
}
function BroughtonRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Broughton Road";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function BroughtonRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BROUGHTON_ROAD_001.mp3";
    iBusAudio.play();
}
function LongfieldAvenue(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Longfield Avenue";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function LongfieldAvenueAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_LONGFIELD_AVENUE_001.mp3";
    iBusAudio.play();
}
function BondStreet(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Bond Street";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function BondStreetAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BOND_STREET_001.mp3";
    iBusAudio.play();
}
function NorthCommonRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "North Common Road";
    // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function NorthCommonRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_NORTH_COMMON_ROAD_001.mp3";
    iBusAudio.play();
}
function LeytonstoneStnGroveGreenRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="none";
        marquee.style.display = "block";
        marquee.innerHTML = "Leytonstone Stn / Grove Green Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Leytonstone Stn / Grove Green Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LeytonstoneStnGroveGreenRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_LEYTONSTONE_STATION_GROVE_GREEN_ROAD_001.mp3";
    iBusAudio.play();
}
function HamptonRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Hampton Road";
    // topTextYes.style.animationName = "LeytonstoneStnGroveGreenRoad";
}
function HamptonRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HAMPTON_ROAD_001.mp3";
    iBusAudio.play();
}
function AshvilleRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Ashville Road";
    // topTextYes.style.animationName = "LeytonstoneStnGroveGreenRoad";
}
function AshvilleRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ASHVILLE_ROAD_001.mp3";
    iBusAudio.play();
}
function CentralAvenue(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Central Avenue";
    // topTextYes.style.animationName = "LeytonstoneStnGroveGreenRoad";
}
function CentralAvenueAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CENTRAL_AVENUE_001.mp3";
    iBusAudio.play();
}
function CathallLeisureCentre(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Cathall Lesiure Centre";
    // topTextYes.style.animationName = "LeytonstoneStnGroveGreenRoad";
}
function CathallLeisureCentreAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CATHALL_LEISURE_CENTRE_001.mp3";
    iBusAudio.play();
}
function HarrowGreen(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Harrow Green";
    // topTextYes.style.animationName = "LeytonstoneStnGroveGreenRoad";
}
function HarrowGreenAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HARROW_GREEN_001.mp3";
    iBusAudio.play();
}
function RanelaghRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Ranelagh Road";
    // topTextYes.style.animationName = "LeytonstoneStnGroveGreenRoad";
}
function RanelaghRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_RANELAGH_ROAD_001.mp3";
    iBusAudio.play();
}
function LeytonstoneHighRoadThatchedHouse(){
    topTextNo.style.display ="none";
    topTextYes.style.display ="block";
    topTextYes.innerHTML = "Leytonstone High Road / Thatched House";
    topTextYes.style.animationName = "LeytonstoneHighRoadThatchedHouse";
}
function LeytonstoneHighRoadThatchedHouseAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_LEYTONSTONE_HIGH_ROAD_THATCHED_HOUSE_001.mp3";
    iBusAudio.play();
}
function BurgessRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Burgess Road";
    // topTextYes.style.animationName = "LeytonstoneHighRoadThatchedHouse";
}
function BurgessRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BURGESS_ROAD_001.mp3";
    iBusAudio.play();
}
function EdithRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Edith Road";
    // topTextYes.style.animationName = "LeytonstoneHighRoadThatchedHouse";
}
function EdithRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_EDITH_ROAD_001.mp3";
    iBusAudio.play();
}
function SirLudwigGuttmannHealthCentre(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Sir Ludwig Guttmann Health Centre";
    // topTextYes.style.animationName = "LeytonstoneHighRoadThatchedHouse";
}
function SirLudwigGuttmannHealthCentreAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SIR_LUDGWIG_GUTTMANN_HEALTH_CENTRE_001.mp3";
    iBusAudio.play();
}
function SidingsStreet(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Sidings Street";
    // topTextYes.style.animationName = "LeytonstoneHighRoadThatchedHouse";
}
function SidingsStreetAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SIDINGS_STREET_001.mp3";
    iBusAudio.play();
}
function BobbyMooreAcademyPrimarySchool(){
    topTextNo.style.display ="none";
    topTextYes.style.display ="block";
    topTextYes.innerHTML = "Bobby Moore Academy Primary School";
    topTextYes.style.animationName = "BobbyMooreAcademyPrimarySchool";
}
function BobbyMooreAcademyPrimarySchoolAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BOBBY_MOORE_ACADEMY_PRIMARY_SCHOOL_001.mp3";
    iBusAudio.play();
}
function WhitePostLane(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "White Post Lane";
    // topTextYes.style.animationName = "BobbyMooreAcademyPrimarySchool";
}
function WhitePostLaneAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_WHITE_POST_LANE_001.mp3";
    iBusAudio.play();
}
function FishIsland(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Fish Island";
    // topTextYes.style.animationName = "RothburyRoad";
}
function FishIslandAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_FISH_ISLAND_001.mp3";
    iBusAudio.play();
}
function AutumnStreet(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Autumn Street";
    // topTextYes.style.animationName = "RothburyRoad";
}
function AutumnStreetAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_AUTUMN_STREET_001.mp3";
    iBusAudio.play();
}
function UsherRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Usher Road";
    // topTextYes.style.animationName = "RothburyRoad";
}
function UsherRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_USHER_ROAD_001.mp3";
    iBusAudio.play();
}
function ShetlandRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Shetland Road";
    // topTextYes.style.animationName = "RothburyRoad";
}
function ShetlandRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SHETLAND_ROAD_001.mp3";
    iBusAudio.play();
}
function FordRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Ford Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Ford Road ";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function FordRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_FORD_ROAD_001.mp3";
    iBusAudio.play();
}
function MedwayRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Medway Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Medway Road ";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function MedwayRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MEDWAY_ROAD_001.mp3";
    iBusAudio.play();
}
function StBarnabasChurch(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "St Barnabas Church";
    // topTextYes.style.animationName = "RothburyRoad";
}
function StBarnabasChurchAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ST_BARNABAS_CHURCH_001.mp3";
    iBusAudio.play();
}
function ArberyRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Arbery Road";
    // topTextYes.style.animationName = "RothburyRoad";
}
function ArberyRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ARBERY_ROAD_001.mp3";
    iBusAudio.play();
}
function LichfieldRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Litchfield Road";
    // topTextYes.style.animationName = "RothburyRoad";
}
function LichfieldRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_LITCHFIELD_ROAD.mp3";
    iBusAudio.play();
}
function MileEndStationBowRoad(){
    if (ibusView === "old"){
        console.log("hey yeah");
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Mile End Station / Bow Road";
        // topTextYes.style.animationName = "RothburyRoad";
    } else if (ibusView === "new"){
        console.log("Oh now");
        newIbusDisplayDesText.innerHTML = "Mile End Station / Bow Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function MileEndStationBowRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MILE_END_STATION_BOW_ROAD_001.mp3";
    iBusAudio.play();
}
function RegentsCanal(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Regents Canal";
    // topTextYes.style.animationName = "RothburyRoad";
}
function RegentsCanalAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_REGENTS_CANAL_001.mp3";
    iBusAudio.play();
}
function QueenMaryUniversityofLondon(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Queen Mary / University of London";
    // topTextYes.style.animationName = "RothburyRoad";
}
function QueenMaryUniversityofLondonAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_QUEEN_MARY_UNIVERSITY_OF_LONDON_001.mp3";
    iBusAudio.play();
}
function ErnestStreet(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Ernest Street";
    // topTextYes.style.animationName = "RothburyRoad";
}
function ErnestStreetAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_EARNEST_STREET_001.mp3";
    iBusAudio.play();
}
function DongolaRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Dongola Road";
    // topTextYes.style.animationName = "RothburyRoad";
}
function DongolaRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_DONGOLA_ROAD_001.mp3";
    iBusAudio.play();
}
function HarfordStreet(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Harford Street";
    // topTextYes.style.animationName = "RothburyRoad";
}
function HarfordStreetAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HARFORD_STREET_001.mp3";
    iBusAudio.play();
}
function StDunstansChurch(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "St Dunstan's Church";
    // topTextYes.style.animationName = "RothburyRoad";
}
function StDunstansChurchAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ST_DUNSTANS_CHURCH_001.mp3";
    iBusAudio.play();
}
function JamaicaStreet(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Jamaica Street";
    // topTextYes.style.animationName = "RothburyRoad";
}
function JamaicaStreetAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_JAMAICA_STREET_001.mp3";
    iBusAudio.play();
}
function MusburyStreet(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Musbury Street";
    // topTextYes.style.animationName = "RothburyRoad";
}
function MusburyStreetAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MUSBURY_STREET_001.mp3";
    iBusAudio.play();
}
function MarthaStreet(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Martha Street";
    // topTextYes.style.animationName = "RothburyRoad";
}
function MarthaStreetAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MARTHA_STREET_001.mp3";
    iBusAudio.play();
}
function ShadwellStation(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Shadwell Station";
    // topTextYes.style.animationName = "RothburyRoad";
}
function ShadwellStationAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SHADWELL_STATION_001.mp3";
    iBusAudio.play();
}
function SuttonStreet(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Sutton Street";
    // topTextYes.style.animationName = "RothburyRoad";
}
function SuttonStreetAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SUTTON_STREET_001.mp3";
    iBusAudio.play();
}
function MileEndStationMileEndRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Mile End Station / Mile End Road";
    // topTextYes.style.animationName = "RothburyRoad";
}
function MileEndStationMileEndRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MILE_END_STATION_MILE_END_ROAD_001.mp3";
    iBusAudio.play();
}
function RomanRoadGroveRoad()
    {if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Roman Road / Grove Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Roman Road / Grove Road ";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function RomanRoadGroveRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ROMAN_ROAD_GROVE_ROAD_001.mp3";
    iBusAudio.play();
}
function AntillRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Antill Road";
    // topTextYes.style.animationName = "RothburyRoad";
}
function AntillRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ANTILL_ROAD_001.mp3";
    iBusAudio.play();
}
function ChobhamRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Chobham Road";
    // topTextYes.style.animationName = "RothburyRoad";
}
function ChobhamRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CHOBHAM_ROAD_001.mp3";
    iBusAudio.play();
}
function ApolloPlace(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Apollo Place";
    // topTextYes.style.animationName = "RothburyRoad";
}
function ApolloPlaceAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_APOLLO_PLACE_001.mp3";
    iBusAudio.play();
}
function HollydownWay(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Hollydown Way";
    // topTextYes.style.animationName = "RothburyRoad";
}
function HollydownWayAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HOLLYDOWN_WAY_001.mp3";
    iBusAudio.play();
}
function DraytonRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Drayton Road";
    // topTextYes.style.animationName = "RothburyRoad";
}
function DraytonRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_DRAYTON_ROAD_001.mp3";
    iBusAudio.play();
}
function KingEdwardStreetStPaulsStation(){
    topTextNo.style.display ="none";
    topTextYes.style.display ="block";
    topTextYes.innerHTML = "King Edward Street / St Pauls Station";
    topTextYes.style.animationName = "KingEdwardStreetStPaulsStation";
}
function KingEdwardStreetStPaulsStationAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_KING_EDWARD_STREET_001.mp3";
    iBusAudio.play();
    iBusAudio.onended = function() {
        audio = 2;
        if (audio === 2){
            iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ST_PAULS_STATION_001.mp3";
            iBusAudio.play();
            iBusAudio.onended = function() {
                audio = 3;
                if (audio === 3){
                    iBusAudio.src="hhf.mp3";
                    iBusAudio.play();
                }
            }
        }
    }
}

function StBotolphStreet(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "St Botolph Street";
    // topTextYes.style.animationName = "KingEdwardStreetStPaulsStation";
}
function StBotolphStreetAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ST_BOTOLPH_STREET_001.mp3";
    iBusAudio.play();
}
function StKatharineDocks(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "St Katharine Docks";
    // topTextYes.style.animationName = "TowerHillTowerGatewayStation";
}
function StKatharineDocksAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ST_KATHARINE_DOCKS_001.mp3";
    iBusAudio.play();
}
function TheHighway(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "The Highway";
    // topTextYes.style.animationName = "TowerHillTowerGatewayStation";
}
function TheHighwayAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_THE_HIGHWAY_001.mp3";
    iBusAudio.play();
}
function NeshamStreet(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Nesham Street";
    // topTextYes.style.animationName = "TowerHillTowerGatewayStation";
}
function NeshamStreetAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_NESHAM_STREET_001.mp3";
    iBusAudio.play();
}
function HermitageWall(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Hermitage Wall";
    // topTextYes.style.animationName = "TowerHillTowerGatewayStation";
}
function HermitageWallAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HERMITAGE_WALL_001.mp3";
    iBusAudio.play();
}
function SampsonStreet(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Sampson Street";
    // topTextYes.style.animationName = "TowerHillTowerGatewayStation";
}
function SampsonStreetAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SAMPSON_STREET_001.mp3";
    iBusAudio.play();
}
function DundeeStreet(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Dundee Street";
    // topTextYes.style.animationName = "TowerHillTowerGatewayStation";
}
function DundeeStreetAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_DUNDEE_STREET_001.mp3";
    iBusAudio.play();
}
function WappingStation(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Wapping Station";
    // topTextYes.style.animationName = "TowerHillTowerGatewayStation";
}
function WappingStationAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_WAPPING_STATION_001.mp3";
    iBusAudio.play();
}
function WappingHealthCentre(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Wapping Health Centre";
    // topTextYes.style.animationName = "TowerHillTowerGatewayStation";
}
function WappingHealthCentreAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_WAPPING_HEALTH_CENTRE_001.mp3";
    iBusAudio.play();
}
function TobaccoDock(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Tobacco Dock";
    // topTextYes.style.animationName = "TowerHillTowerGatewayStation";
}
function TobaccoDockAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_TOBACCO_DOCK_001.mp3";
    iBusAudio.play();
}
function GlamisPlace(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Glamis Place";
    // topTextYes.style.animationName = "TowerHillTowerGatewayStation";
}
function GlamisPlaceAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_GLAMIS_PLACE_001.mp3";
    iBusAudio.play();
}
function KingDavidLane(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "King David Lane";
    // topTextYes.style.animationName = "TowerHillTowerGatewayStation";
}
function KingDavidLaneAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_KING_DAVID_LANE_001.mp3";
    iBusAudio.play();
}
function StGeorgesTownHallShadwellStn(){
    topTextNo.style.display ="none";
    topTextYes.style.display ="block";
    topTextYes.innerHTML = "St George's Town Hall / Shadwell Stn";
    topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function StGeorgesTownHallShadwellStnAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ST_GEORGES_TOWN_HALL_SHADWELL_STATION_001.mp3";
    iBusAudio.play();
}
function CleggStreet(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Clegg Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function CleggStreetAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CLEGG_STREET_001.mp3";
    iBusAudio.play();
}
function GarnetStreet(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Garnet Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function GarnetStreetAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_GARNET_STREET_001.mp3";
    iBusAudio.play();
}
function WappingWall(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Wapping Wall";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function WappingWallAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_WAPPING_WALL_001.mp3";
    iBusAudio.play();
}
function StockholmWay(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Stockholm Way";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function StockholmWayAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_STOCKHOLM_WAY_001.mp3";
    iBusAudio.play();
}
function DukesPlace(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Duke's Place";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function DukesPlaceAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_DUKES_PLACE_001.mp3";
    iBusAudio.play();
}
function Bishopsgate(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Bishopsgate";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function BishopsgateAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BISHOPSGATE_001.mp3";
    iBusAudio.play();
}
function MoorgateStation(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Moorgate Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function MoorgateStationAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MOORGATE_STATION_001.mp3";
    iBusAudio.play();
}
function PoplarAllSaintsChurch(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Poplar / All Saints Church";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function PoplarAllSaintsChurchAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_POPLAR_ALL_SAINTS_CHURCH_001.mp3";
    iBusAudio.play();
}
function PoplarHighStreetBlackwall(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Poplar High Street / Blackwall";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function PoplarHighStreetBlackwallAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_POPLAR_HIGH_STREET_BLACKWALL_001.mp3";
    iBusAudio.play();
}
function AspenWay(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Aspen Way";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function AspenWayAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ASPEN_wAY_001.mp3";
    iBusAudio.play();
}
function Coldharbour(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Coldharbour";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function ColdharbourAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_COLDHARBOUR_001.mp3";
    iBusAudio.play();
}
function StewartStreet(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Stewart Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function StewartStreetAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_STEWART_STREET_001.mp3";
    iBusAudio.play();
}
function StJohnsPark(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "St John's Park";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function StJohnsParkAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ST_JOHNS_PARK_001.mp3";
    iBusAudio.play();
}
function CubittTownSchool(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Cubitt Town School";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function CubittTownSchoolAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CUBITT_TOWN_sCHOOL_001.mp3";
    iBusAudio.play();
}
function PierStreet(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Pier Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function PierStreetAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_PIER_STREET_001.mp3";
    iBusAudio.play();
}
function LangbournePlace(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Langbourne Place";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function LangbournePlaceAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_LANGBOURNE_PLACE_001.mp3";
    iBusAudio.play();
}
function HarbingerSchoolMasthouseTerPier(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="none";
    marquee.style.display = "block";
    marquee.start();
    marquee.innerHTML = "Harbinger School / Masthouse Ter. Pier";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function HarbingerSchoolMasthouseTerPierAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HARBINGER_SCHOOL_MASTHOUSE_TERRANCE_PIER_001.mp3";
    iBusAudio.play();
}
function StEdmundsSchool(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "St Edmund's School";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function StEdmundsSchoolAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ST_EDMUNDS_SCHOOL_001.mp3";
    iBusAudio.play();
}
function CrewsStreet(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Crews Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function CrewsStreetAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CREWS_STREET_001.mp3";
    iBusAudio.play();
}
function ArnhemWharfPrimarySchool(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Arnhem Wharf Primary School";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function ArnhemWharfPrimarySchoolAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ARNHEM_WHARF_PRIMARY_SCHOOL_001.mp3";
    iBusAudio.play();
}
function SirJohnMcdougallGardens(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Sir John Mcdougall Gardens";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function SirJohnMcdougallGardensAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SIR_JOHN_MCDOUGAL_GARDENS_001.mp3";
    iBusAudio.play();
}
function BarkantineClinicHutchingsStreet(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="none";
    marquee.style.display = "block";
    marquee.start();
    marquee.innerHTML = "Barkantine Clinic / Hutchings Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function BarkantineClinicHutchingsStreetAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BARKANTINE_CLINIC_001.mp3";
    iBusAudio.play();
    iBusAudio.onended = function() {
        audio = 2;
        if (audio == 2){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HUTCHINGS_STREET_001.mp3";
          iBusAudio.play();
          iBusAudio.onended = function() {
            iBusAudio.src="hhjff.mp3";
            iBusAudio.play();
          }
        }
      }
}
function ByngStreet(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Byng Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function ByngStreetAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BYNG_STREET_001.mp3";
    iBusAudio.play();
}
function MarshWallHeronQuay(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Marsh Wall / Heron Quay";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function MarshWallHeronQuayAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MARSH_WALL_HERON_QUAYS_001.mp3";
    iBusAudio.play();
}
function EastIndiaDockRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "East India Dock Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function EastIndiaDockRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_EAST_INDIA_DOCK_ROAD_001.mp3";
    iBusAudio.play();
}
function PixleyStreet(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Pixley Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function PixleyStreetAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_PIXLEY_STREET_001.mp3";
    iBusAudio.play();
}
function StPaulsWay(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "St Paul's Way";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function StPaulsWayAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ST_PAULS_WAY_001.mp3";
    iBusAudio.play();
}
function AckroydDrive(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Ackroyd Drive";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function AckroydDriveAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ACKROYD_DRIVE_001.mp3";
    iBusAudio.play();
}
function EricStreet(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Eric Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function EricStreetAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ERIC_STREET_001.mp3";
    iBusAudio.play();
}
function MileEndStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Mile End Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Mile End Station";
        underground.style.display = "inline";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function MileEndStationAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MILE_END_STATION_001.mp3";
    iBusAudio.play();
}
function MileEndParkLeisureCentre(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Mile End Park Leisure Centre";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function MileEndParkLeisureCentreAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MILE_END_PARK_LEISURE_CENTRE_001.mp3";
    iBusAudio.play();
}
function CubaStreet(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Cuba Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function CubaStreetAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CUBA_STREET_001.mp3";
    iBusAudio.play();
}
function CrewsStreettheSpaceTheatre(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Crews Street / the Space Theatre";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function CrewsStreettheSpaceTheatreAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CREWS_STREET_THE_SPACE_THEATRE_001.mp3";
    iBusAudio.play();
}
function MaconochiesRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Maconochies Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function MaconochiesRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MACONOCHIES_ROAD_001.mp3";
    iBusAudio.play();
}
function TheBlueBridge(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "The Blue Bridge";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function TheBlueBridgeAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_THE_BLUE_BRIDGE_001.mp3";
    iBusAudio.play();
}
function WalthamstowBusStation(){
    topTextYes.style.display ="none";
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Walthamstow Bus Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Walthamstow Bus Station ";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WalthamstowBusStationAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_WALTHAMSTOW_BUS_STATION_001.mp3";
    iBusAudio.play();
}
function GrosvenorParkRoad(){
    topTextYes.style.display ="none";
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Grosvenor Park Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Grosvenor Park Road ";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function GrosvenorParkRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_GROSVENOR_PARK_ROAD_001.mp3";
    iBusAudio.play();
}
function GroveRoad(){
    topTextYes.style.display ="none";
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Grove Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Grove Road ";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function GroveRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_GROVE_ROAD_001.mp3";
    iBusAudio.play();
}
function BakersAvenue(){
    topTextYes.style.display ="none";
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Bakers Avenue";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Bakers Avenue ";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BakersAvenueAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BAKERS_AVENUE_001.mp3";
    iBusAudio.play();
}
function LeytonGreen(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Leyton Green";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function LeytonGreenAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_LEYTON_GREEN_001.mp3";
    iBusAudio.play();
}
function ColchesterRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Colchester Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function ColchesterRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_COLCHESTER_ROAD_001.mp3";
    iBusAudio.play();
}
function LeytonMidlandRoadStation(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Leyton Midland Road Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function LeytonMidlandRoadStationAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_LEYTON_MIDLAND_ROAD_STATON_001.mp3";
    iBusAudio.play();
}
function LeytonSportsGround(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Leyton Sports Ground";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function LeytonSportsGroundAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Leyton_Sports_Ground_001.mp3";
    iBusAudio.play();
}
function VicarageRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Vicarage Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function VicarageRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_VICARAGE_ROAD_001.mp3";
    iBusAudio.play();
}
function GrangeParkRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Grange Park Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function GrangeParkRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_GRANGE_PARK_ROAD_001.mp3";
    iBusAudio.play();
}
function BuckinghamRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Buckingham Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function BuckinghamRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BUCKINGHAM_ROAD_001.mp3";
    iBusAudio.play();
}
function LeytonLibrary(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Leyton Library";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function LeytonLibraryAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_LEYTON_LIBRARY_001.mp3";
    iBusAudio.play();
}
function LeytonStation(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Leyton Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function LeytonStationAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_LEYTON_STATION_001.mp3";
    iBusAudio.play();
}
function MillaisRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Millais Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function MillaisRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MILLAIS_ROAD_001.mp3";
    iBusAudio.play();
}
function DrapersField(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Drapers Field";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function DrapersFieldAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_DRAPERS_FIELD_001.mp3";
    iBusAudio.play();
}
function JansonRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Janson Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function JansonRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_JANSON_ROAD_001.mp3";
    iBusAudio.play();
}
function MarylandStation(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Maryland Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function MarylandStationAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MARYLAND_STATION_001.mp3";
    iBusAudio.play();
}
function ManbeyGrove(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Manbey Grove";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function ManbeyGroveAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MANBEY_GROVE_001.mp3";
    iBusAudio.play();
}
function StratfordLibrary(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Stratford Library";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function StratfordLibraryAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_STRATFORD_LIBRARY_001.mp3";
    iBusAudio.play();
}
function StratfordCentre(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Stratford Centre";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function StratfordCentreAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_STRATFORD_CENTRE_001.mp3";
    iBusAudio.play();
}
function PlaistowGrove(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Plaistow Grove";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function PlaistowGroveAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_PLAISTOW_GROVE_001.mp3";
    iBusAudio.play();
}
function MorleyRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Morley Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function MorleyRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MORLEY_ROAD_001.mp3";
    iBusAudio.play();
}
function PlaistowStation(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Plaistow Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function PlaistowStationAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_PLAISTOW_STATION_001.mp3";
    iBusAudio.play();
}
function HighStreetPlaistow(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "High Street Plaistow";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function HighStreetPlaistowAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HIGH_STREET_PLAISTOW_001.mp3";
    iBusAudio.play();
}
function FlorenceRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Florence Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function FlorenceRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_FLORENCE_ROAD_001.mp3";
    iBusAudio.play();
}
function UpperRoadGrangeRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Upper Road / Grange Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function UpperRoadGrangeRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_UPPER_ROAD_GRANGE_ROAD_001.mp3";
    iBusAudio.play();
}
function EastLondonCemetery(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "East London Cemetery";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function EastLondonCemeteryAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_EAST_LONDON_CEMETERY_001.mp3";
    iBusAudio.play();
}
function StephensCourt(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Stephens Court";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function StephensCourtAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_STEPHENS_COURT_001.mp3";
    iBusAudio.play();
}
function BlakeRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Blake Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function BlakeRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BLAKE_ROAD_001.mp3";
    iBusAudio.play();
}
function StarLane(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Star Lane";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function StarLaneAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_STAR_LANE_001.mp3";
    iBusAudio.play();
}
function RathboneMarket(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Rathbone Market";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function RathboneMarketAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_RATHBONE_MARKET_001.mp3";
    iBusAudio.play();
}
function SuffolkRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Suffolk Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function SuffolkRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SUFFOLK_ROAD_001.mp3";
    iBusAudio.play();
}
function TheGrove(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "The Grove";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function TheGroveAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_THE_GROVE_001.mp3";
    iBusAudio.play();
}
function MarylandStationManbeyGrove(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Maryland Station / Manbey Grove";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function MarylandStationManbeyGroveAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Maryland_Station_Manbey_Grove_001.mp3";
    iBusAudio.play();
}
function LeaBridgeRoadBakersArms(){
    topTextYes.style.display ="none";
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Lea Bridge Road / Bakers Arms";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Lea Bridge Road / Bakers Arms ";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LeaBridgeRoadBakersArmsAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_LEA_BRIDGE_ROAD_BAKERS_ARMS_001.mp3";
    iBusAudio.play();
}
function HoeStreetBakersArms(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Hoe Street / Bakers Arms";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Hoe Street / Bakers Arms";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HoeStreetBakersArmsAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HOE_STREET_BAKERS_ARMS_001.mp3";
    iBusAudio.play();
}
function QueensRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Queen's Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Queen's Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function QueensRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_QUEENS_ROAD_001.mp3";
    iBusAudio.play();
}
function RichmondRoadMartelloStreet(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Richmond Road / Martello Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function RichmondRoadMartelloStreetAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_RICHMOND_ROAD_MARTELLO_STREET_001.mp3";
    iBusAudio.play();
}
function NavarinoRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Navarino Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function NavarinoRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_NARVARINO_ROAD_001.mp3";
    iBusAudio.play();
}
function GreenwoodRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Greenwood Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function GreenwoodRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_GREENWOOD_ROAD_001.mp3";
    iBusAudio.play();
}
function MiddletonRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Middleton Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function MiddletonRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MIDDLETON_ROAD_001.mp3";
    iBusAudio.play();
}
function BroadwayMarket(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Broadway Market";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function BroadwayMarketAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BROADWAY_MARKET_001.mp3";
    iBusAudio.play();
}
function SheepLane(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Sheep Lane";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function SheepLaneAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SHEEP_LANE_001.mp3";
    iBusAudio.play();
}
function PritchardsRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Pritchard's Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function PritchardsRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_PRITCHARDS_ROAD_001.mp3";
    iBusAudio.play();
}
function NichollStreet(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Nicholl Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function NichollStreetAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_NICHOLL_STREET_001.mp3";
    iBusAudio.play();
}
function HaggerstonPark(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Haggerston Park";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function HaggerstonParkAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HAGGERSTON_PARK_001.mp3";
    iBusAudio.play();
}
function ThurtleRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Thurtle Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function ThurtleRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_THURTLE_ROAD_001.mp3";
    iBusAudio.play();
}
function KingslandRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Kingsland Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function KingslandRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_KINGSLAND_ROAD_001.mp3";
    iBusAudio.play();
}
function StLeonardsHospital(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "St Leonard's Hospital";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function StLeonardsHospitalAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ST_LEONARDS_HOSPITAL_001.mp3";
    iBusAudio.play();
}
function HoxtonStationMuseumoftheHome(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="none";
    marquee.style.display = "block";
    marquee.start();
    marquee.innerHTML = "Hoxton Station / Museum of the Home";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function HoxtonStationMuseumoftheHomeAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HOXTON_STATION_MUSEUM_OF_THE_HOME_001.mp3";
    iBusAudio.play();
}
function FalkirkStHackneyCommunityCollege(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="none";
    marquee.style.display = "block";
    marquee.start();
    marquee.innerHTML = "Falkirk St / Hackney Community College";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function FalkirkStHackneyCommunityCollegeAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_FALKIRK_ST_HACKNEY_COMMUNITY_COLLEGE_001.mp3";
    iBusAudio.play();
}
function CrondallStreetHoxtonStreetMarket(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="none";
    marquee.style.display = "block";
    marquee.start();
    marquee.innerHTML = "Crondall Street / Hoxton Street Market";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function CrondallStreetHoxtonStreetMarketAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CRONDALL_STREET_HOXTON_STREET_MARKET_001.mp3";
    iBusAudio.play();
}
function PitfieldStreet(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Pitfield Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function PitfieldStreetAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_PITFIELD_STREET_001.mp3";
    iBusAudio.play();
}
function BucklandStreet(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Buckland Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function BucklandStreetAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BUCKLAND_STREET_001.mp3";
    iBusAudio.play();
}
function NewNorthRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "New North Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function NewNorthRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_NEW_NORTH_ROAD_001.mp3";
    iBusAudio.play();
}
function MurrayGroveProvostEstate(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Murray Grove / Provost Estate";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function MurrayGroveProvostEstateAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MURRAY_GROVE_PROVOST_ESTATE_001.mp3";
    iBusAudio.play();
}
function BletchleyStreet(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Bletchley Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function BletchleyStreetAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BLETCHLEY_STREET_001.mp3";
    iBusAudio.play();
}
function ShoreditchPoliceStation(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Shoreditch Police Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function ShoreditchPoliceStationAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SHOREDITCH_POLICE_STATION_001.mp3";
    iBusAudio.play();
}
function WindsorTerrace(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Windsor Terrace";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function WindsorTerraceAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_WINDSOR_TERRACE_001.mp3";
    iBusAudio.play();
}
function CentralStreet(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Central Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function CentralStreetAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CENTRAL_STREET_001.mp3";
    iBusAudio.play();
}
function AngelIslington(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Angel Islington";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function AngelIslingtonAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ANGEL_ISLINGTON_001.mp3";
    iBusAudio.play();
}
function PentonvilleRoadBaronStreet(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Pentonville Road / Baron Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function PentonvilleRoadBaronStreetAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_PENTONVILLE_ROAD_BARON_STREET_001.mp3";
    iBusAudio.play();
}
function TolpuddleStIslingtonPoliceStation(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Tolpuddle St / Islington Police Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function TolpuddleStIslingtonPoliceStationAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_TOLPUDDLE_ST_ISLINGTON_POLICE_STATION_001.mp3";
    iBusAudio.play();
}
function AngelIslingtonCityRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Angel Islington / City Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function AngelIslingtonCityRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ANGEL_ISLINGTON_CITY_ROAD_001.mp3";
    iBusAudio.play();
}
function LiverpoolRoadChapelMarket(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Liverpool Road / Chapel Market";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function LiverpoolRoadChapelMarketAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_LIVERPOOL_ROAD_CHAPEL_MARKET_001.mp3";
    iBusAudio.play();
}
function MurrayGrove(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Murray Grove";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function MurrayGroveAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MURRAY_GROVE_001.mp3";
    iBusAudio.play();
}
function CropleyStreet(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Cropley Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function CropleyStreetAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CROPLEY_STREET_001.mp3";
    iBusAudio.play();
}
function MinternStreet(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Mintern Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function MinternStreetAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MINTERN_STREET_001.mp3";
    iBusAudio.play();
}
function FalkirkStreetHoxtonStation(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Falkirk Street / Hoxton Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function FalkirkStreetHoxtonStationAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_FALKIRK_STREET_HOXTON_STATION_001.mp3";
    iBusAudio.play();
}
function MuseumoftheHome(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Museum of the Home";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function MuseumoftheHomeAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MUSEUM_OF_THE_HOME_001.mp3";
    iBusAudio.play();
}
function WhistonRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Whiston Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function WhistonRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_WHISTON_ROAD_001.mp3";
    iBusAudio.play();
}
function AdaStreet(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Ada Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function AdaStreetAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ADA_STREET_001.mp3";
    iBusAudio.play();
}
function RichmondRoadGreenwoodRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Richmond Road / Greenwood Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function RichmondRoadGreenwoodRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_RICHMOND_ROAD_GREENWOOD_ROAD_001.mp3";
    iBusAudio.play();
}
function MartelloStreet(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Martello Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function MartelloStreetAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MARTELLO_STREET_001.mp3";
    iBusAudio.play();
}
function HarringaySainsburys(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Harringay Sainsbury's";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function HarringaySainsburysAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HARRINGAY_SAINSBURY_001.mp3";
    iBusAudio.play();
}
function EndymionRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Endymion Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function EndymionRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ENDYMION_ROAD_001.mp3";
    iBusAudio.play();
}
function FinsburyParkEndymionGate(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Finsbury Park Endymion Gate";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function FinsburyParkEndymionGateAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_FINSBURY_PARK_ENDYMION_GATE_001.mp3";
    iBusAudio.play();
}
function FinsburyParkHornseyGate(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Finsbury Park Hornsey Gate";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function FinsburyParkHornseyGateAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_FINSBURY_PARK_HORNSEY_GATE_001.mp3";
    iBusAudio.play();
}
function OakfieldRoadStroudGreen(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Oakfield Road Stroud Green";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function OakfieldRoadStroudGreenAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_OAKFIELD_ROAD_STROUD_GREEN_001.mp3";
    iBusAudio.play();
}
function MountViewRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Mount View Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function MountViewRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MOUNT_VIEW_ROAD_001.mp3";
    iBusAudio.play();
}
function HarringayStation(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Harringay Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function HarringayStationAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HARRINGAY_STATION_001.mp3";
    iBusAudio.play();
}
function StapletonHallRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Stapleton Hall Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function StapletonHallRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_STAPLETON_HALL_ROAD_001.mp3";
    iBusAudio.play();
}
function RidgeRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Ridge Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function RidgeRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_RIDGE_ROAD_001.mp3";
    iBusAudio.play();
}
function UplandsRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Uplands Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function UplandsRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_UPLANDS_ROAD_001.mp3";
    iBusAudio.play();
}
function WestonParkPrimarySchool(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Weston Park Primary School";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function WestonParkPrimarySchoolAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_WESTON_PARK_PRIMARY_SCHOOL_001.mp3";
    iBusAudio.play();
}
function WestonPark(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Weston Park";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function WestonParkAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_WESTON_PARK_001.mp3";
    iBusAudio.play();
}
function BourneRoadCrouchEnd(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Bourne Road Crouch End";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function BourneRoadCrouchEndAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BOURNE_ROAD_CROUCH_END_001.mp3";
    iBusAudio.play();
}
function HornseyLibrary(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Hornsey Library";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function HornseyLibraryAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HORNSEY_LOBRARY_001.mp3";
    iBusAudio.play();
}
function CrouchEndBroadway(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Crouch End Broadway";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function CrouchEndBroadwayAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CROUCH_END_BROADWAY_001.mp3";
    iBusAudio.play();
}
function WolseleyRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Wolseley Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function WolseleyRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_WOLSELEY_ROAD_001.mp3";
    iBusAudio.play();
}
function CoolhurstRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Coolhurst Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function CoolhurstRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_COOLHURST_ROAD_001.mp3";
    iBusAudio.play();
}
function LondonRoadNorthShepherdsHill(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="none";
    marquee.style.display = "block";
    marquee.start();
    marquee.innerHTML = "London Road North / Shepherds Hill";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function LondonRoadNorthShepherdsHillAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_LONDON_ROAD_NORTH_SHEPHERD_HILL_001.mp3";
    iBusAudio.play();
}
function StanhopeRoadCrouchEnd(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Stanhope Road Crouch End";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function StanhopeRoadCrouchEndAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_STANHOPE_ROAD_CROUCH_END_001.mp3";
    iBusAudio.play();
}
function MayburyMews(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Maybury Mews";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function MayburyMewsAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MAYBURY_MEWS_001.mp3";
    iBusAudio.play();
}
function HornseyLane(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Hornsey Lane";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function HornseyLaneAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HORNSEY_LANE_001.mp3";
    iBusAudio.play();
}
function FitzwarrenGardens(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Fitzwarren Gardens";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function FitzwarrenGardensAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_FLITZWARREN_GARDENS_001.mp3";
    iBusAudio.play();
}
function ArchwayBridge(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Archway Bridge";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function ArchwayBridgeAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ARCHWAY_BRIDGE_001.mp3";
    iBusAudio.play();
}
function CromwellAvenue(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Cromwell Avenue";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function CromwellAvenueAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CROMWELL_AVENUE_001.mp3";
    iBusAudio.play();
}
function HighgateHillHornseyLane(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Highgate Hill / Hornsey Lane";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function HighgateHillHornseyLaneAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HIGHGATE_HILL_HORNSEY_LANE_001.mp3";
    iBusAudio.play();
}
function WhittingtonHospitalMagdalaAvenue(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="none";
    marquee.style.display = "block";
    marquee.start();
    marquee.innerHTML = "Whittington Hospital / Magdala Avenue";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function WhittingtonHospitalMagdalaAvenueAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_WHITTINGTON_HOSPITAL_MAGDALA_AVENUE_001.mp3";
    iBusAudio.play();
}
function ArchwayStation(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Archway Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function ArchwayStationAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ARCHWAY_STATION_001.mp3";
    iBusAudio.play();
}
function AlfordHouse(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Alford House";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function AlfordHouseAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ALFORD_HOUSE_001.mp3";
    iBusAudio.play();
}
function TivoliRoadCrouchEnd(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Tivoli Road Crouch End";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function TivoliRoadCrouchEndAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_TIVOLI_ROAD_CROUCH_END_001.mp3";
    iBusAudio.play();
}
function TottenhamLaneYMCA(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Tottenham Lane Y M C A";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function TottenhamLaneYMCAAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_TOTTENHAM_LANE_YMCA_001.mp3";
    iBusAudio.play();
}
function MayfieldRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Mayfield Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function MayfieldRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MAYFIELD_ROAD_001.mp3";
    iBusAudio.play();
}
function StationersPark(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Stationers Park";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function StationersParkAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_STATIONERS_PARK_001.mp3";
    iBusAudio.play();
}
function GreenLanesHarringay(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Green Lanes Harringay";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function GreenLanesHarringayAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_GREEN_LANES_HARRINGAY_001.mp3";
    iBusAudio.play();
}
function LeytonstoneStation(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Leytonstone Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function LeytonstoneStationAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_LEYTONSTONE_STATION_001.mp3";
    iBusAudio.play();
}
function KirkdaleRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Kirkdale Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function KirkdaleRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_KIRKDALE_ROAD_001.mp3";
    iBusAudio.play();
}
function GreenManRoundabout(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Green Man Roundabout";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Green Man Roundabout";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function GreenManRoundaboutAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_GREEN_MAN_ROUNDABOUT_001.mp3";
    iBusAudio.play();
}
function CambridgeRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Cambridge Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function CambridgeRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CAMBRIDGE_ROAD_001.mp3";
    iBusAudio.play();
}
function BlakeHallRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Blake Hall Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function BlakeHallRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BLAKE_HALL_ROAD_001.mp3";
    iBusAudio.play();
}
function WansteadPlace(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Wanstead Place";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function WansteadPlaceAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_WANSTEAD_PLACE_001.mp3";
    iBusAudio.play();
}
function NewWanstead(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "New Wanstead";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function NewWansteadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_NEW_WANSTEAD_001.mp3";
    iBusAudio.play();
}
function SylvanRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Sylvan Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function SylvanRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SYLVAN_ROAD_001.mp3";
    iBusAudio.play();
}
function HeronwoodHospital(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Heronwood Hospital";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function HeronwoodHospitalAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Heronwood_Hospital_001.mp3";
    iBusAudio.play();
}
function CharnwoodDrive(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Charnwood Drive";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function CharnwoodDriveAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CHARNWOOD_DRIVE_001.mp3";
    iBusAudio.play();
}
function GeorgeLaneChigwellRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "George Lane / Chigwell Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function GeorgeLaneChigwellRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_George_Lane_Chigwell_Road_001.mp3";
    iBusAudio.play();
}
function SouthWoodfordStation(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "South Woodford Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function SouthWoodfordStationAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SOUTH_WOODFORD_STATION_001.mp3";
    iBusAudio.play();
}
function GeorgeLaneShoppingCentre(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "George Lane Shopping Centre";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function GeorgeLaneShoppingCentreAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_GEORGE_LANE_SHOPPING_CENTRE_001.mp3";
    iBusAudio.play();
}
function SouthendRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Southend Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function SouthendRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SOUTHEND_ROAD_001.mp3";
    iBusAudio.play();
}
function ChelmsfordRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Chelmsford Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function ChelmsfordRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Chelmsford_Road_001.mp3";
    iBusAudio.play();
}
function EmpressAvenue(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Empress Avenue";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Empress Avenue";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function EmpressAvenueAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_EMPRESS_AVENUE_001.mp3";
    iBusAudio.play();
}
function ChurchillMemorial(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Churchill Memorial";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function ChurchillMemorialAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CHURCHILL_MEMORIAL_001.mp3";
    iBusAudio.play();
}
function ChingfordLane(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Chingford Lane";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function ChingfordLaneAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CHINGFORD_LANE_001.mp3";
    iBusAudio.play();
}
function WoodfordGreenBroadmeadRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Woodford Green / Broadmead Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function WoodfordGreenBroadmeadRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Woodford_Green_Broadmead_Road_001.mp3";
    iBusAudio.play();
}
function MonkhamsLane(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Monkhams Lane";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function MonkhamsLaneAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MONKHAMS_LANE_001.mp3";
    iBusAudio.play();
}
function StThomasofCanterburyChurch(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "St Thomas of Canterbury Church";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function StThomasofCanterburyChurchAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_STTHOMAS_OF_CANTERBURY_CHURCH_001.mp3";
    iBusAudio.play();
}
function StAlbansRoad(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "St Albans Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function StAlbansRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ST_ALBANS_ROAD_001.mp3";
    iBusAudio.play();
}
function Churchfields(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Churchfields";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function ChurchfieldsAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CHURCHFIELDS_001.mp3";
    iBusAudio.play();
}
function HighStreetHermonHill(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "High Street / Hermon Hill";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function HighStreetHermonHillAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HIGH_STREET_HERMON_HILL_001.mp3";
    iBusAudio.play();
}
function HighstoneAvenue(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    marquee.style.display = "none";
    topTextNo.innerHTML = "Highstone Avenue";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
}
function HighstoneAvenueAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HIGHSTONE_AVENUE_001.mp3";
    iBusAudio.play();
}
function CobornRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Coborn Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Coborn Road ";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CobornRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_COBORN_ROAD_001.mp3";
    iBusAudio.play();
}
function BowRoadStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Bow Road Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Bow Road Station ";
        underground.style.display = "inline";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BowRoadStationAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BOW_ROAD_STATION_001.mp3";
    iBusAudio.play();
}
function BowChurchStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Bow Church Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Bow Church Station ";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "inline";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BowChurchStationAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BOW_CHURCH_STATION_001.mp3";
    iBusAudio.play();
}
function BowBusGarage(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Bow Bus Garage";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Bow Bus Garage ";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BowBusGarageAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BOW_BUS_GARAGE_001.mp3";
    iBusAudio.play();
}
function TredegarRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Tredegar Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Tredegar Road ";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function TredegarRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_TREDEGAR_ROAD_001.mp3";
    iBusAudio.play();
}
function RomanRoadMarket(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Roman Road Market";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Roman Road Market ";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function RomanRoadMarketAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ROMAN_ROAD_MARKET_001.mp3";
    iBusAudio.play();
}
function OldFordRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Old Ford Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Old Ford Road ";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function OldFordRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_OLD_FORD_ROAD_001.mp3";
    iBusAudio.play();
}
function ParnellRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Parnell Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Parnell Road ";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ParnellRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_PARNELL_ROAD_001.mp3";
    iBusAudio.play();
}
function AliceLane(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Alice Lane";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Alice Lane ";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function AliceLaneAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ALICE_LANE_001.mp3";
    iBusAudio.play();
}
function HaverfieldGreenGroveRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Haverfield Green / Grove Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Haverfield Green / Grove Road ";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HaverfieldGreenGroveRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HAVERFIELD_GREEN_GROVE_ROAD_001.mp3";
    iBusAudio.play();
}
function BonnerStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Bonner Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Bonner Street ";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BonnerStreetAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BONNER_STREET_001.mp3";
    iBusAudio.play();
}
function CyprusStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Cyprus Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Cyprus Street ";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CyprusStreetAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CYPRUS_STREET_001.mp3";
    iBusAudio.play();
}
function BonnerRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Bonner Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Bonner Road ";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BonnerRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BONNER_ROAD_001.mp3";
    iBusAudio.play();
}
function PeelGrove(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Peel Grove";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Peel Grove ";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function PeelGroveAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_PEEL_GROVE_001.mp3";
    iBusAudio.play();
}
function BethnalGreenStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Bethnal Green Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Bethnal Green Station ";
        underground.style.display = "inline";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BethnalGreenStationAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BETHNAL_GREEN_STATON_001.mp3";
    iBusAudio.play();
}
function BurnhamStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Burnham Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Burnham Street ";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BurnhamStreetAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BURNHAM_STREET_001.mp3";
    iBusAudio.play();
}
function SmartStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Smart Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Smart Street ";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function SmartStreetAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SMART_STREET_001.mp3";
    iBusAudio.play();
}
function BowChurch(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Bow Church";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Bow Church ";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BowChurchAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BOW_CHURCH_001.mp3";
    iBusAudio.play();
}
function StaffaRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Staffa Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Staffa Road ";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StaffaRoadAudio(){
    iBusAudio.src=firstAudio+"STAFFA_ROAD"+lastAudio;
    iBusAudio.play();
}
function ArgallAvenueIndustrialEstate(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Argall Avenue Industrial Estate";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Argall Avenue Industrial Estate ";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ArgallAvenueIndustrialEstateAudio(){
    iBusAudio.src=firstAudio+"ARGALL_AVENUE_INDUSTRIAL_ESTATE"+lastAudio;
    iBusAudio.play();
}
function BarnCroftPrimarySchool(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Barn Croft Primary School";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Barn Croft Primary School ";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BarnCroftPrimarySchoolAudio(){
    iBusAudio.src=firstAudio+"BARN_CROFT_PRIMARY_SCHOOL"+lastAudio;
    iBusAudio.play();
}
function MarkhouseAvenue(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Markhouse Avenue";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Markhouse Avenue ";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function MarkhouseAvenueAudio(){
    iBusAudio.src=firstAudio+"MARKHOUSE_AVENUE"+lastAudio;
    iBusAudio.play();
}
function SouthGrove(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "South Grove";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "South Grove ";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function SouthGroveAudio(){
    iBusAudio.src=firstAudio+"SOUTH_GROVE"+lastAudio;
    iBusAudio.play();
}
function SelborneWalkVernonRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Selborne Walk / Vernon Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Selborne Walk / Vernon Road ";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function SelborneWalkVernonRoadAudio(){
    iBusAudio.src=firstAudio+"SELBORNE_WALK_VERNON_ROAD"+lastAudio;
    iBusAudio.play();
}
function SelborneWalk(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Selborne Walk";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Selborne Walk ";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function SelborneWalkAudio(){
    iBusAudio.src=firstAudio+"Selborne_Walk"+lastAudio;
    iBusAudio.play();
}
function WalthamstowCentralStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Walthamstow Central Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Walthamstow Central Station ";
        underground.style.display = "inline";
        overground.style.display = "inline";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WalthamstowCentralStationAudio(){
    iBusAudio.src=firstAudio+"Walthamstow_Central_Station"+lastAudio;
    iBusAudio.play();
}
function LeytonGreenRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Leyton Green Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Leyton Green Road ";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LeytonGreenRoadAudio(){
    iBusAudio.src=firstAudio+"LEYTON_GREEN_ROAD"+lastAudio;
    iBusAudio.play();
}
function ShernhallStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Shernhall Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Shernhall Street ";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ShernhallStreetAudio(){
    iBusAudio.src=firstAudio+"Shernhall_Street"+lastAudio;
    iBusAudio.play();
}
function PeterboroughRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Peterborough Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Peterborough Road ";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function PeterboroughRoadAudio(){
    iBusAudio.src=firstAudio+"Peterborough_Road"+lastAudio;
    iBusAudio.play();
}
function WhippsCrossWoodStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Whipps Cross / Wood Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Whipps Cross / Wood Street ";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WhippsCrossWoodStreetAudio(){
    iBusAudio.src=firstAudio+"Whipps_Cross_Wood_Street"+lastAudio;
    iBusAudio.play();
}
function WhippsCrossBusStand(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Whipps Cross Bus Stand";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Whipps Cross Bus Stand ";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WhippsCrossBusStandAudio(){
    iBusAudio.src=firstAudio+"WHIPPS_CROSS_BUS_STAND"+lastAudio;
    iBusAudio.play();
}
function WhippsCrossHospitalMainEntrance(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="none";
        marquee.style.display = "block";
        marquee.innerHTML = "Whipps Cross Hospital / Main Entrance";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Whipps Cross Hospital / Main Entrance ";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WhippsCrossHospitalMainEntranceAudio(){
    iBusAudio.src=firstAudio+"Whipps_Cross_Hospital_Main_Entrance"+lastAudio;
    iBusAudio.play();
}
function WhippsCrossHospitalAE(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Whipps Cross Hospital / A & E";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Whipps Cross Hospital / A & E ";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WhippsCrossHospitalAEAudio(){
    iBusAudio.src=firstAudio+"WHIPPS_CROSS_HOSPITAL_AE"+lastAudio;
    iBusAudio.play();
}
function ClareRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Clare Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Clare Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ClareRoadAudio(){
    iBusAudio.src=firstAudio+"Clare_Road"+lastAudio;
    iBusAudio.play();
}
function EssexRoadSouth(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Essex Road South";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Essex Road South";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function EssexRoadSouthAudio(){
    iBusAudio.src=firstAudio+"Essex_Road_South"+lastAudio;
    iBusAudio.play();
}
function ElimPentecostalChurch(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Elim Pentecostal Church";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Elim Pentecostal Church";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ElimPentecostalChurchAudio(){
    iBusAudio.src=firstAudio+"Elim_Pentecostal_Church"+lastAudio;
    iBusAudio.play();
}
function ClarendonRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Clarendon Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Clarendon Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ClarendonRoadAudio(){
    iBusAudio.src=firstAudio+"Clarendon_Road"+lastAudio;
    iBusAudio.play();
}
function GainsboroughRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Gainsborough Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Gainsborough Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function GainsboroughRoadAudio(){
    iBusAudio.src=firstAudio+"GAINSBOROUGH_ROAD"+lastAudio;
    iBusAudio.play();
}
function BushRoadGreenManRoundabout(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="none";
        marquee.style.display = "block";
        marquee.innerHTML = "Bush Road / Green Man Roundabout";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Bush Road / Green Man Roundabout";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BushRoadGreenManRoundaboutAudio(){
    iBusAudio.src=firstAudio+"Bush_Road_Green_Man_Roundabout"+lastAudio;
    iBusAudio.play();
}
function BlakeHallCrescent(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Blake Hall Crescent";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Blake Hall Crescent";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BlakeHallCrescentAudio(){
    iBusAudio.src=firstAudio+"BLAKE_HALL_CRESCENT"+lastAudio;
    iBusAudio.play();
}
function QueenswoodGardens(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Queenswood Gardens";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Queenswood Gardens";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function QueenswoodGardensAudio(){
    iBusAudio.src=firstAudio+"QUEENSWOOD_GARDENS"+lastAudio;
    iBusAudio.play();
}
function ParkRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Park Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Park Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ParkRoadAudio(){
    iBusAudio.src=firstAudio+"Park_Road"+lastAudio;
    iBusAudio.play();
}
function HerongateRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Herongate Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Herongate Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HerongateRoadAudio(){
    iBusAudio.src=firstAudio+"HERONGATE_ROAD"+lastAudio;
    iBusAudio.play();
}
function MerlinRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Merlin Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Merlin Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function MerlinRoadAudio(){
    iBusAudio.src=firstAudio+"MERLIN_ROAD"+lastAudio;
    iBusAudio.play();
}
function CityofLondonCemetery(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "City of London Cemetery";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "City of London Cemetery";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CityofLondonCemeteryAudio(){
    iBusAudio.src=firstAudio+"CITY_OF_LONDON_CEMETERY"+lastAudio;
    iBusAudio.play();
}
function CapelRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Capel Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Capel Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CapelRoadAudio(){
    iBusAudio.src=firstAudio+"Capel_Road"+lastAudio;
    iBusAudio.play();
}
function ManorParkStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Manor Park Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Manor Park Station";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "inline";
        tfl_National_Rail_logo.style.display = "inline";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ManorParkStationAudio(){
    iBusAudio.src=firstAudio+"MANOR_PARK_STATION"+lastAudio;
    iBusAudio.play();
}
function RomfordRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Romford Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Romford Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function RomfordRoadAudio(){
    iBusAudio.src=firstAudio+"ROMFORD_ROAD"+lastAudio;
    iBusAudio.play();
}
function FirstAvenue(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "First Avenue";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "First Avenue";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function FirstAvenueAudio(){
    iBusAudio.src=firstAudio+"FIRST_AVENUE"+lastAudio;
    iBusAudio.play();
}
function RabbitsRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Rabbits Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Rabbits Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function RabbitsRoadAudio(){
    iBusAudio.src=firstAudio+"RABBITS_ROAD"+lastAudio;
    iBusAudio.play();
}
function SeventhAvenue(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Seventh Avenue";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Seventh Avenue";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function SeventhAvenueAudio(){
    iBusAudio.src=firstAudio+"SEVENTH_AVENUE"+lastAudio;
    iBusAudio.play();
}
function LittleIlfordLane(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Little Ilford Lane";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Little Ilford Lane";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LittleIlfordLaneAudio(){
    iBusAudio.src=firstAudio+"LITTLE_ILFORD_LANE"+lastAudio;
    iBusAudio.play();
}
function NorthCircularRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "North Circular Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "North Circular Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function NorthCircularRoadAudio(){
    iBusAudio.src=firstAudio+"NORTH_CIRCULAR_ROAD"+lastAudio;
    iBusAudio.play();
}
function IlfordHill(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Ilford Hill";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Ilford Hill";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function IlfordHillAudio(){
    iBusAudio.src=firstAudio+"ILFORD_HILL"+lastAudio;
    iBusAudio.play();
}
function ChapelRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Chapel Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Chapel Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ChapelRoadAudio(){
    iBusAudio.src=firstAudio+"CHAPEL_ROAD"+lastAudio;
    iBusAudio.play();
}
function RedbridgeCentralLibrary(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Redbridge Central Library";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Redbridge Central Library";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function RedbridgeCentralLibraryAudio(){
    iBusAudio.src=firstAudio+"Redbridge_Central_Library"+lastAudio;
    iBusAudio.play();
}
function HainaultStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Hainault Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Hainault Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HainaultStreetAudio(){
    iBusAudio.src=firstAudio+"Hainault_Street"+lastAudio;
    iBusAudio.play();
}
function IlfordBroadway(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Ilford Broadway";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Ilford Broadway";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function IlfordBroadwayAudio(){
    iBusAudio.src=firstAudio+"Ilford_Broadway"+lastAudio;
    iBusAudio.play();
}
function DersinghamAvenue(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Dersingham Avenue";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Dersingham Avenue";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function DersinghamAvenueAudio(){
    iBusAudio.src=firstAudio+"Dersingham_Avenue"+lastAudio;
    iBusAudio.play();
}
function HighStreetNorth(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "High Street North";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "High Street North";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HighStreetNorthAudio(){
    iBusAudio.src=firstAudio+"HIGH_STREET_NORTH"+lastAudio;
    iBusAudio.play();
}
function WansteadParkAvenue(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Wanstead Park Avenue";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Wanstead Park Avenue";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WansteadParkAvenueAudio(){
    iBusAudio.src=firstAudio+"WANSTEAD_PARK_AVENUE"+lastAudio;
    iBusAudio.play();
}
function DoverRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Dover Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Dover Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function DoverRoadAudio(){
    iBusAudio.src=firstAudio+"Dover_Road"+lastAudio;
    iBusAudio.play();
}
function EssexRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Essex Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Essex Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function EssexRoadAudio(){
    iBusAudio.src=firstAudio+"ESSEX_ROAD"+lastAudio;
    iBusAudio.play();
}
function EdmontonGreenBusStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Edmonton Green Bus Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Edmonton Green Bus Station";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function EdmontonGreenBusStationAudio(){
    iBusAudio.src=firstAudio+"EDMONTON_GREEN_BUS_STATION"+lastAudio;
    iBusAudio.play();
}
function MonmouthRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Monmouth Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Monmouth Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function MonmouthRoadAudio(){
    iBusAudio.src=firstAudio+"Monmouth_Road"+lastAudio;
    iBusAudio.play();
}
function BouncesRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Bounces Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Bounces Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BouncesRoadAudio(){
    iBusAudio.src=firstAudio+"Bounces_Road"+lastAudio;
    iBusAudio.play();
}
function StEdmundsCatholicPrimarySchool(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="none";
        marquee.style.display = "block";
        marquee.innerHTML = "St Edmunds Catholic Primary School";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "St Edmunds Catholic Primary School";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StEdmundsCatholicPrimarySchoolAudio(){
    iBusAudio.src=firstAudio+"St_Edmunds_Catholic_Primary_School"+lastAudio;
    iBusAudio.play();
}
function ChesterRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Chester Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Chester Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ChesterRoadAudio(){
    iBusAudio.src=firstAudio+"Chester_Road"+lastAudio;
    iBusAudio.play();
}
function ExeterRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Exeter Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Exeter Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ExeterRoadAudio(){
    iBusAudio.src=firstAudio+"Exeter_Road"+lastAudio;
    iBusAudio.play();
}
function MontaguRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Montagu Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Montagu Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function MontaguRoadAudio(){
    iBusAudio.src=firstAudio+"Montagu_Road"+lastAudio;
    iBusAudio.play();
}
function StMarysRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "St Mary's Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "St Mary's Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StMarysRoadAudio(){
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ST_MARYS_ROAD_001_v02.mp3";
    iBusAudio.play();
}
function ShirleyGrove(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Shirley Grove";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Shirley Grove";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ShirleyGroveAudio(){
    iBusAudio.src=firstAudio+"Shirley_Grove"+lastAudio;
    iBusAudio.play();
}
function ScarboroughRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Scarborough Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Scarborough Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ScarboroughRoadAudio(){
    iBusAudio.src=firstAudio+"Scarborough_Road"+lastAudio;
    iBusAudio.play();
}
function NightingaleRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Nightingale Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Nightingale Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function NightingaleRoadAudio(){
    iBusAudio.src=firstAudio+"Nightingale_Road"+lastAudio;
    iBusAudio.play();
}
function OrchardRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Orchard Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Orchard Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function OrchardRoadAudio(){
    iBusAudio.src=firstAudio+"Orchard_Road"+lastAudio;
    iBusAudio.play();
}
function FalconRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Falcon Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Falcon Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function FalconRoadAudio(){
    iBusAudio.src=firstAudio+"Falcon_Road"+lastAudio;
    iBusAudio.play();
}
function PondersEndStnOasisAcademyHadley(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="none";
        marquee.style.display = "block";
        marquee.innerHTML = "Ponders End Stn / Oasis Academy Hadley";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Ponders End Stn / Oasis Academy Hadley";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "inline";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function PondersEndStnOasisAcademyHadleyAudio(){
    iBusAudio.src=firstAudio+"Ponders_End_Station_Oasis_Academy_Hadley"+lastAudio;
    iBusAudio.play();
}
function ScotlandGreenRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Scotland Green Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Scotland Green Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ScotlandGreenRoadAudio(){
    iBusAudio.src=firstAudio+"Scotland_Green_Road"+lastAudio;
    iBusAudio.play();
}
function AlexandraRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Alexandra Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Alexandra Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function AlexandraRoadAudio(){
    iBusAudio.src=firstAudio+"Alexandra_Road"+lastAudio;
    iBusAudio.play();
}
function PondersEndHighStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Ponders End High Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Ponders End High Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function PondersEndHighStreetAudio(){
    iBusAudio.src=firstAudio+"PONDERS_END_HIGH_STREET"+lastAudio;
    iBusAudio.play();
}
function GlynRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Glyn Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Glyn Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function GlynRoadAudio(){
    iBusAudio.src=firstAudio+"Glyn_Road"+lastAudio;
    iBusAudio.play();
}
function EnfieldBusGarageSouthburyStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="none";
        marquee.style.display = "block";
        marquee.innerHTML = "Enfield Bus Garage / Southbury Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Enfield Bus Garage / Southbury Station";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function EnfieldBusGarageSouthburyStationAudio(){
    iBusAudio.src=firstAudio+"ENFIELD_BUS_GARAGE_SOUTHBURY_STATION"+lastAudio;
    iBusAudio.play();
}
function CrownRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Crown Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Crown Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CrownRoadAudio(){
    iBusAudio.src=firstAudio+"CROWN_ROAD"+lastAudio;
    iBusAudio.play();
}
function BairdRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Baird Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Baird Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BairdRoadAudio(){
    iBusAudio.src=firstAudio+"BAIRD_ROAD"+lastAudio;
    iBusAudio.play();
}
function GreatCambridgeRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Great Cambridge Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Great Cambridge Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function GreatCambridgeRoadAudio(){
    iBusAudio.src=firstAudio+"GREAT_CAMBRIDGE_ROAD"+lastAudio;
    iBusAudio.play();
}
function PercivalRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Percival Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Percival Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function PercivalRoadAudio(){
    iBusAudio.src=firstAudio+"Percival_Road"+lastAudio;
    iBusAudio.play();
}
function CecilAvenue(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Cecil Avenue";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Cecil Avenue";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CecilAvenueAudio(){
    iBusAudio.src=firstAudio+"Cecil_Avenue"+lastAudio;
    iBusAudio.play();
}
function LadysmithRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Ladysmith Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Ladysmith Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LadysmithRoadAudio(){
    iBusAudio.src=firstAudio+"Ladysmith_Road"+lastAudio;
    iBusAudio.play();
}
function EnfieldTownStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Enfield Town Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Enfield Town Station";
        underground.style.display = "none";
        overground.style.display = "inline";
        DLR.style.display = "inline";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function EnfieldTownStationAudio(){
    iBusAudio.src=firstAudio+"Enfield_Town_Station"+lastAudio;
    iBusAudio.play();
}
function EnfieldTownCecilRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Enfield Town / Cecil Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Enfield Town / Cecil Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function EnfieldTownCecilRoadAudio(){
    iBusAudio.src=firstAudio+"Enfield_Town_Cecil_Road"+lastAudio;
    iBusAudio.play();
}
function WindmillHillEnfieldWarMemorial(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Windmill Hill / Enfield War Memorial";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Windmill Hill / Enfield War Memorial";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WindmillHillEnfieldWarMemorialAudio(){
    iBusAudio.src=firstAudio+"Windmill_Hill_Enfield_War_Memorial"+lastAudio;
    iBusAudio.play();
}
function ParsonageLane(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Parsonage Lane";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Parsonage Lane";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ParsonageLaneAudio(){
    iBusAudio.src=firstAudio+"Parsonage_Lane"+lastAudio;
    iBusAudio.play();
}
function GordonHill(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Gordon Hill";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Gordon Hill";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function GordonHillAudio(){
    iBusAudio.src=firstAudio+"Gordon_Hill"+lastAudio;
    iBusAudio.play();
}
function LavenderHill(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Lavender Hill";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Lavender Hill";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LavenderHillAudio(){
    iBusAudio.src=firstAudio+"Lavender_Hill"+lastAudio;
    iBusAudio.play();
}
function BrowningRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Browning Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Browning Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BrowningRoadAudio(){
    iBusAudio.src=firstAudio+"Browning_Road"+lastAudio;
    iBusAudio.play();
}
function BakerStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Baker Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Baker Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BakerStreetAudio(){
    iBusAudio.src=firstAudio+"Baker_Street"+lastAudio;
    iBusAudio.play();
}
function KenilworthCrescent(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Kenilworth Crescent";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Kenilworth Crescent";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function KenilworthCrescentAudio(){
    iBusAudio.src=firstAudio+"Kenilworth_Crescent"+lastAudio;
    iBusAudio.play();
}
function FortyHill(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Forty Hill";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Forty Hill";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function FortyHillAudio(){
    iBusAudio.src=firstAudio+"Forty_Hill"+lastAudio;
    iBusAudio.play();
}
function WillowRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Willow Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Willow Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WillowRoadAudio(){
    iBusAudio.src=firstAudio+"Willow_Road"+lastAudio;
    iBusAudio.play();
}
function LinwoodCrescent(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Linwood Crescent";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Linwood Crescent";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LinwoodCrescentAudio(){
    iBusAudio.src=firstAudio+"LINWOOD_CRESCENT"+lastAudio;
    iBusAudio.play();
}
function BaynesClose(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Baynes Close";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Baynes Close";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BaynesCloseAudio(){
    iBusAudio.src=firstAudio+"Baynes_Close"+lastAudio;
    iBusAudio.play();
}
function LarksfieldGrove(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Larksfield Grove";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Larksfield Grove";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LarksfieldGroveAudio(){
    iBusAudio.src=firstAudio+"LARKSFIELD_GROVE"+lastAudio;
    iBusAudio.play();
}
function SherborneAvenue(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Sherborne Avenue";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Sherborne Avenue";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function SherborneAvenueAudio(){
    iBusAudio.src=firstAudio+"Sherborne_Avenue"+lastAudio;
    iBusAudio.play();
}
function OatlandsRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Oatlands Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Oatlands Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function OatlandsRoadAudio(){
    iBusAudio.src=firstAudio+"Oatlands_Road"+lastAudio;
    iBusAudio.play();
}
function DurantsSchool(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Durants School";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Durants School";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function DurantsSchoolAudio(){
    iBusAudio.src=firstAudio+"Durants_School"+lastAudio;
    iBusAudio.play();
}
function IngersollRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Ingersoll Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Ingersoll Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function IngersollRoadAudio(){
    iBusAudio.src=firstAudio+"Ingersoll_Road"+lastAudio;
    iBusAudio.play();
}
function HertfordRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Hertford Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Hertford Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HertfordRoadAudio(){
    iBusAudio.src=firstAudio+"Hertford_Road"+lastAudio;
    iBusAudio.play();
}
function AlbanyParkAvenue(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Albany Park Avenue";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Albany Park Avenue";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function AlbanyParkAvenueAudio(){
    iBusAudio.src=firstAudio+"Albany_Park_Avenue"+lastAudio;
    iBusAudio.play();
}
function CastleRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Castle Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Castle Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CastleRoadAudio(){
    iBusAudio.src=firstAudio+"Castle_Road"+lastAudio;
    iBusAudio.play();
}
function LeysRoadEast(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Leys Road East";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Leys Road East";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LeysRoadEastAudio(){
    iBusAudio.src=firstAudio+"Leys_Road_East"+lastAudio;
    iBusAudio.play();
}
function Fouracres(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Fouracres";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Fouracres";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function FouracresAudio(){
    iBusAudio.src=firstAudio+"Fouracres"+lastAudio;
    iBusAudio.play();
}
function BrimsdownStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Brimsdown Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Brimsdown Station";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "inline";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BrimsdownStationAudio(){
    iBusAudio.src=firstAudio+"Brimsdown_Station"+lastAudio;
    iBusAudio.play();
}
function CarterhatchLane(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Carterhatch Lane";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Carterhatch Lane";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CarterhatchLaneAudio(){
    iBusAudio.src=firstAudio+"Carterhatch_Lane"+lastAudio;
    iBusAudio.play();
}
function LaurelBankRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Laurel Bank Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Laurel Bank Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LaurelBankRoadAudio(){
    iBusAudio.src=firstAudio+"Laurel_Bank_Road"+lastAudio;
    iBusAudio.play();
}
function EnfieldTownChurchStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Enfield Town / Church Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Enfield Town / Church Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function EnfieldTownChurchStreetAudio(){
    iBusAudio.src=firstAudio+"Enfield_Town_Church_Street"+lastAudio;
    iBusAudio.play();
}
function CrownRoadSouthburyStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Crown Road / Southbury Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Crown Road / Southbury Station";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CrownRoadSouthburyStationAudio(){
    iBusAudio.src=firstAudio+"Crown_Road_Southbury_Station"+lastAudio;
    iBusAudio.play();
}
function RoyalBritishLegion(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Royal British Legion";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Royal British Legion";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function RoyalBritishLegionAudio(){
    iBusAudio.src=firstAudio+"Royal_British_Legion"+lastAudio;
    iBusAudio.play();
}
function DurantsRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Durants Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Durants Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function DurantsRoadAudio(){
    iBusAudio.src=firstAudio+"Durants_Road"+lastAudio;
    iBusAudio.play();
}
function PondersEndStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Ponders End Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Ponders End Station";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "inline";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function PondersEndStationAudio(){
    iBusAudio.src=firstAudio+"Ponders_End_Station"+lastAudio;
    iBusAudio.play();
}
function OasisAcademyHadley(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Oasis Academy Hadley";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Oasis Academy Hadley";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function OasisAcademyHadleyAudio(){
    iBusAudio.src=firstAudio+"Oasis_Academy_Hadley"+lastAudio;
    iBusAudio.play();
}
function StMatthewsChurch(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "St Matthew's Church";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "St Matthew's Church";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StMatthewsChurchAudio(){
    iBusAudio.src=firstAudio+"St_Matthew_s_Church"+lastAudio;
    iBusAudio.play();
}
function WarleyRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Warley Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Warley Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WarleyRoadAudio(){
    iBusAudio.src=firstAudio+"Warley_Road"+lastAudio;
    iBusAudio.play();
}
function CrystalPalaceBusStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Crystal Palace Bus Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Crystal Palace Bus Station";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CrystalPalaceBusStationAudio(){
    iBusAudio.src=firstAudio+"Crystal_Palace_Bus_Station"+lastAudio;
    iBusAudio.play();
}
function WestowHill(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Westow Hill";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Westow Hill";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WestowHillAudio(){
    iBusAudio.src=firstAudio+"WESTOW_HILL"+lastAudio;
    iBusAudio.play();
}
function WestowStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Westow Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Westow Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WestowStreetAudio(){
    iBusAudio.src=firstAudio+"WESTOW_STREET"+lastAudio;
    iBusAudio.play();
}
function GipsyHillPoliceStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Gipsy Hill Police Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Gipsy Hill Police Station";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function GipsyHillPoliceStationAudio(){
    iBusAudio.src=firstAudio+"GIPSY_HILL_POLICE_STATION"+lastAudio;
    iBusAudio.play();
}
function RockmountRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Rockmount Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Rockmount Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function RockmountRoadAudio(){
    iBusAudio.src=firstAudio+"Rockmount_Road"+lastAudio;
    iBusAudio.play();
}
function HermitageRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Hermitage Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Hermitage Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HermitageRoadAudio(){
    iBusAudio.src=firstAudio+"Hermitage_Road"+lastAudio;
    iBusAudio.play();
}
function SaltersHill(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Salter's Hill";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Salter's Hill";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function SaltersHillAudio(){
    iBusAudio.src=firstAudio+"SALTERS_HILL"+lastAudio;
    iBusAudio.play();
}
function TivoliRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Tivoli Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Tivoli Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function TivoliRoadAudio(){
    iBusAudio.src=firstAudio+"TIVOLI_ROAD"+lastAudio;
    iBusAudio.play();
}
function CrownPoint(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Crown Point";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Crown Point";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CrownPointAudio(){
    iBusAudio.src=firstAudio+"CROWN_POINT"+lastAudio;
    iBusAudio.play();
}
function RyecroftRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Ryecroft Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Ryecroft Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function RyecroftRoadAudio(){
    iBusAudio.src=firstAudio+"Ryecroft_Road"+lastAudio;
    iBusAudio.play();
}
function StreathamCommonNorthLeighamCrtRd(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="none";
        marquee.style.display = "block";
        marquee.innerHTML = "Streatham Common North / Leigham Crt Rd";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Streatham Common North / Leigham Crt Rd";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StreathamCommonNorthLeighamCrtRdAudio(){
    iBusAudio.src=firstAudio+"Streatham_Common_North_Leigham_Crt_Rd"+lastAudio;
    iBusAudio.play();
}
function LeighamCourtRoadStreathamCommon(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="none";
        marquee.style.display = "block";
        marquee.innerHTML = "Leigham Court Road / Streatham Common";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Leigham Court Road / Streatham Common";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LeighamCourtRoadStreathamCommonAudio(){
    iBusAudio.src=firstAudio+"Leigham_Court_Road_Streatham_Common"+lastAudio;
    iBusAudio.play();
}
function JuliansPrimarySchool(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Julian's Primary School";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Julian's Primary School";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function JuliansPrimarySchoolAudio(){
    iBusAudio.src=firstAudio+"Julians_Primary_School"+lastAudio;
    iBusAudio.play();
}
function RockhamptonRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Rockhampton Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Rockhampton Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function RockhamptonRoadAudio(){
    iBusAudio.src=firstAudio+"Rockhampton_Road"+lastAudio;
    iBusAudio.play();
}
function StPetersChurch(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "St Peters Church";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "St Peters Church";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StPetersChurchAudio(){
    iBusAudio.src=firstAudio+"ST_PETERS_CHURCH"+lastAudio;
    iBusAudio.play();
}
function ValleyRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Valley Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Valley Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ValleyRoadAudio(){
    iBusAudio.src=firstAudio+"Valley_Road"+lastAudio;
    iBusAudio.play();
}
function DunravenSchool(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Dunraven School";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Dunraven School";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function DunravenSchoolAudio(){
    iBusAudio.src=firstAudio+"Dunraven_School"+lastAudio;
    iBusAudio.play();
}
function MountearlGardens(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Mountearl Gardens";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Mountearl Gardens";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function MountearlGardensAudio(){
    iBusAudio.src=firstAudio+"Mountearl_Gardens"+lastAudio;
    iBusAudio.play();
}
function LeighamCourtRdStreathamHillStn(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="none";
        marquee.style.display = "block";
        marquee.innerHTML = "Leigham Court Rd / Streatham Hill Stn";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Leigham Court Rd / Streatham Hill Stn";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LeighamCourtRdStreathamHillStnAudio(){
    iBusAudio.src=firstAudio+"Leigham_Court_Rd_Streatham_Hill_Stn"+lastAudio;
    iBusAudio.play();
}
function StreathamHillStnStreathamHill(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Streatham Hill Stn / Streatham Hill";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Streatham Hill Stn / Streatham Hill";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StreathamHillStnStreathamHillAudio(){
    iBusAudio.src=firstAudio+"Streatham_Hill_Stn_Streatham_Hill"+lastAudio;
    iBusAudio.play();
}
function BarrhillRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Barrhill Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Barrhill Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BarrhillRoadAudio(){
    iBusAudio.src=firstAudio+"Barrhill_Road"+lastAudio;
    iBusAudio.play();
}
function TelfordAvenue(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Telford Avenue";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Telford Avenue";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function TelfordAvenueAudio(){
    iBusAudio.src=firstAudio+"Telford_Avenue"+lastAudio;
    iBusAudio.play();
}
function ChristchurchRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Christchurch Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Christchurch Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ChristchurchRoadAudio(){
    iBusAudio.src=firstAudio+"Christchurch_Road"+lastAudio;
    iBusAudio.play();
}
function StreathamPlace(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Streatham Place";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Streatham Place";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StreathamPlaceAudio(){
    iBusAudio.src=firstAudio+"Streatham_Place"+lastAudio;
    iBusAudio.play();
}
function AtkinsRoadNewParkRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Atkins Road / New Park Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Atkins Road / New Park Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function AtkinsRoadNewParkRoadAudio(){
    iBusAudio.src=firstAudio+"Atkins_Road_New_Park_Road"+lastAudio;
    iBusAudio.play();
}
function KingsAvenueAtkinsRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Kings Avenue / Atkins Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Kings Avenue / Atkins Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function KingsAvenueAtkinsRoadAudio(){
    iBusAudio.src=firstAudio+"Kings_Avenue_Atkins_Road"+lastAudio;
    iBusAudio.play();
}
function ThorncliffeRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Thorncliffe Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Thorncliffe Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ThorncliffeRoadAudio(){
    iBusAudio.src=firstAudio+"Thorncliffe_Road"+lastAudio;
    iBusAudio.play();
}
function ClarenceAvenue(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Clarence Avenue";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Clarence Avenue";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ClarenceAvenueAudio(){
    iBusAudio.src=firstAudio+"Clarence_Avenue"+lastAudio;
    iBusAudio.play();
}
function LyhamRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Lyham Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Lyham Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LyhamRoadAudio(){
    iBusAudio.src=firstAudio+"Lyham_Road"+lastAudio;
    iBusAudio.play();
}
function BedfordRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Bedford Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Bedford Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BedfordRoadAudio(){
    iBusAudio.src=firstAudio+"Bedford_Road"+lastAudio;
    iBusAudio.play();
}
function ParkHill(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Park Hill";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Park Hill";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ParkHillAudio(){
    iBusAudio.src=firstAudio+"Park_Hill"+lastAudio;
    iBusAudio.play();
}
function ClaphamCommonStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Clapham Common Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Clapham Common Station";
        underground.style.display = "inline";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ClaphamCommonStationAudio(){
    iBusAudio.src=firstAudio+"Clapham_Common_Station"+lastAudio;
    iBusAudio.play();
}
function LongRoadClaphamCommon(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Long Road / Clapham Common";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Long Road / Clapham Common";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LongRoadClaphamCommonAudio(){
    iBusAudio.src=firstAudio+"Long_Road_Clapham_Common"+lastAudio;
    iBusAudio.play();
}
function OmnibusClapham(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Omnibus Clapham";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Omnibus Clapham";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function OmnibusClaphamAudio(){
    iBusAudio.src=firstAudio+"OMNIBUS_CLAPHAM"+lastAudio;
    iBusAudio.play();
}
function WingateSquare(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Wingate Square";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Wingate Square";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WingateSquareAudio(){
    iBusAudio.src=firstAudio+"WINGATE_SQUARE"+lastAudio;
    iBusAudio.play();
}
function RoseberyRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Rosebery Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Rosebery Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function RoseberyRoadAudio(){
    iBusAudio.src=firstAudio+"ROSEBRY_ROAD"+lastAudio;
    iBusAudio.play();
}
function StreathamHillChristchurchRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Streatham Hill / Christchurch Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Streatham Hill / Christchurch Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StreathamHillChristchurchRoadAudio(){
    iBusAudio.src=firstAudio+"Streatham_Hill_Christchurch_Road"+lastAudio;
    iBusAudio.play();
}
function StreathamClose(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Streatham Close";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Streatham Close";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StreathamCloseAudio(){
    iBusAudio.src=firstAudio+"Streatham_Close"+lastAudio;
    iBusAudio.play();
}
function LeighamCourtRoadValleyRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Leigham Court Road / Valley Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Leigham Court Road / Valley Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LeighamCourtRoadValleyRoadAudio(){
    iBusAudio.src=firstAudio+"LEIGHAM_COURT_ROAD_VALLEY_ROAD"+lastAudio;
    iBusAudio.play();
}
function LeafGrove(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Leaf Grove";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Leaf Grove";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LeafGroveAudio(){
    iBusAudio.src=firstAudio+"LEAF_GROVE"+lastAudio;
    iBusAudio.play();
}
function CrownLaneCrownPoint(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Crown Lane / Crown Point";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Crown Lane / Crown Point";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CrownLaneCrownPointAudio(){
    iBusAudio.src=firstAudio+"Crown_Lane_Crown_Point"+lastAudio;
    iBusAudio.play();
}
function NorwoodSchool(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Norwood School";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Norwood School";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function NorwoodSchoolAudio(){
    iBusAudio.src=firstAudio+"Norwood_School"+lastAudio;
    iBusAudio.play();
}
function CrystalPalaceParade(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Crystal Palace Parade";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Crystal Palace Parade";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CrystalPalaceParadeAudio(){
    iBusAudio.src=firstAudio+"CRYSTAL_PALACE_PARADE"+lastAudio;
    iBusAudio.play();
}
function CrownLaneCrownPoint(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Crown Lane / Crown Point";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Crown Lane / Crown Point";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CrownLaneCrownPointAudio(){
    iBusAudio.src=firstAudio+"Crown_Lane_Crown_Point"+lastAudio;
    iBusAudio.play();
}
function HaveringPark(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Havering Park";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Havering Park";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HaveringParkAudio(){
    iBusAudio.src=firstAudio+"Havering_Park"+lastAudio;
    iBusAudio.play();
}
function CharlotteGardens(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Charlotte Gardens";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Charlotte Gardens";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CharlotteGardensAudio(){
    iBusAudio.src=firstAudio+"Charlotte_Gardens"+lastAudio;
    iBusAudio.play();
}
function PortmoreGardens(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Portmore Gardens";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Portmore Gardens";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function PortmoreGardensAudio(){
    iBusAudio.src=firstAudio+"Portmore_Gardens"+lastAudio;
    iBusAudio.play();
}
function StaplefordGardens(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Stapleford Gardens";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Stapleford Gardens";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StaplefordGardensAudio(){
    iBusAudio.src=firstAudio+"Stapleford_Gardens"+lastAudio;
    iBusAudio.play();
}
function FrintonRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Frinton Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Frinton Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function FrintonRoadAudio(){
    iBusAudio.src=firstAudio+"Frinton_Road"+lastAudio;
    iBusAudio.play();
}
function GobionsFarm(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Gobions Farm";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Gobions Farm";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function GobionsFarmAudio(){
    iBusAudio.src=firstAudio+"Gobions_Farm"+lastAudio;
    iBusAudio.play();
}
function WhiteHartLane(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "White Hart Lane";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "White Hart Lane";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WhiteHartLaneAudio(){
    iBusAudio.src=firstAudio+"White_Hart_Lane"+lastAudio;
    iBusAudio.play();
}
function CollierRowClockhouseLane(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Collier Row / Clockhouse Lane";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Collier Row / Clockhouse Lane";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CollierRowClockhouseLaneAudio(){
    iBusAudio.src=firstAudio+"Collier_Row_Clockhouse_Lane"+lastAudio;
    iBusAudio.play();
}
function CollierRowRoundaboutRexClose(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="none";
        marquee.style.display = "block";
        marquee.innerHTML = "Collier Row Roundabout / Rex Close";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Collier Row Roundabout / Rex Close";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CollierRowRoundaboutRexCloseAudio(){
    iBusAudio.src=firstAudio+"Collier_Row_Roundabout_Rex_Close"+lastAudio;
    iBusAudio.play();
}
function HulseAvenue(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Hulse Avenue";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Hulse Avenue";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HulseAvenueAudio(){
    iBusAudio.src=firstAudio+"Hulse_Avenue"+lastAudio;
    iBusAudio.play();
}
function MowbraysRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Mowbrays Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Mowbrays Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function MowbraysRoadAudio(){
    iBusAudio.src=firstAudio+"Mowbrays_Road"+lastAudio;
    iBusAudio.play();
}
function HainaultRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Hainault Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Hainault Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HainaultRoadAudio(){
    iBusAudio.src=firstAudio+"Hainault_Road"+lastAudio;
    iBusAudio.play();
}
function ParklandsSchool(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Parklands School";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Parklands School";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ParklandsSchoolAudio(){
    iBusAudio.src=firstAudio+"Parklands_School"+lastAudio;
    iBusAudio.play();
}
function RomfordBusGarage(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Romford Bus Garage";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Romford Bus Garage";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function RomfordBusGarageAudio(){
    iBusAudio.src=firstAudio+"Romford_Bus_Garage"+lastAudio;
    iBusAudio.play();
}
function TheAvenue(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "The Avenue";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "The Avenue";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function TheAvenueAudio(){
    iBusAudio.src=firstAudio+"The_Avenue"+lastAudio;
    iBusAudio.play();
}
function RomfordMarket(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Romford Market";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Romford Market";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function RomfordMarketAudio(){
    iBusAudio.src=firstAudio+"Romford_Market"+lastAudio;
    iBusAudio.play();
}
function MercuryGardens(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Mercury Gardens";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Mercury Gardens";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function MercuryGardensAudio(){
    iBusAudio.src=firstAudio+"Mercury_Gardens"+lastAudio;
    iBusAudio.play();
}
function WesternRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Western Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Western Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WesternRoadAudio(){
    iBusAudio.src=firstAudio+"Western_Road"+lastAudio;
    iBusAudio.play();
}
function RomfordStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Romford Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Romford Station";
        underground.style.display = "none";
        overground.style.display = "inline";
        DLR.style.display = "none";
        ElizabethLine.style.display = "inline";
        tfl_National_Rail_logo.style.display = "inline";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function RomfordStationAudio(){
    iBusAudio.src=firstAudio+"Romford_Station"+lastAudio;
    iBusAudio.play();
}
function ThurloeGardens(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Thurloe Gardens";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Thurloe Gardens";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ThurloeGardensAudio(){
    iBusAudio.src=firstAudio+"Thurloe_Gardens"+lastAudio;
    iBusAudio.play();
}
function SouthStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "South Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "South Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function SouthStreetAudio(){
    iBusAudio.src=firstAudio+"South_Street"+lastAudio;
    iBusAudio.play();
}
function AlbertRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Albert Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Albert Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function AlbertRoadAudio(){
    iBusAudio.src=firstAudio+"Albert_Road"+lastAudio;
    iBusAudio.play();
}
function PrincesRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Princes Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Princes Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function PrincesRoadAudio(){
    iBusAudio.src=firstAudio+"Princes_Road"+lastAudio;
    iBusAudio.play();
}
function FrancesBardsleyAcademy(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Frances Bardsley Academy";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Frances Bardsley Academy";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function FrancesBardsleyAcademyAudio(){
    iBusAudio.src=firstAudio+"Frances_Bardsley_Academy"+lastAudio;
    iBusAudio.play();
}
function CranhamRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Cranham Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Cranham Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CranhamRoadAudio(){
    iBusAudio.src=firstAudio+"Cranham_Road"+lastAudio;
    iBusAudio.play();
}
function SalisburyRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Salisbury Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Salisbury Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function SalisburyRoadAudio(){
    iBusAudio.src=firstAudio+"Salisbury_Road"+lastAudio;
    iBusAudio.play();
}
function TheDrillRoundabout(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "The Drill Roundabout";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "The Drill Roundabout";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function TheDrillRoundaboutAudio(){
    iBusAudio.src=firstAudio+"The_Drill_Roundabout"+lastAudio;
    iBusAudio.play();
}
function GideaParkStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Gidea Park Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Gidea Park Station";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "inline";
        tfl_National_Rail_logo.style.display = "inline";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function GideaParkStationAudio(){
    iBusAudio.src=firstAudio+"Gidea_Park_Station"+lastAudio;
    iBusAudio.play();
}
function UpperBrentwoodRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Upper Brentwood Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Upper Brentwood Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function UpperBrentwoodRoadAudio(){
    iBusAudio.src=firstAudio+"Upper_Brentwood_Road"+lastAudio;
    iBusAudio.play();
}
function NorthumberlandAvenue(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Northumberland Avenue";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Northumberland Avenue";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function NorthumberlandAvenueAudio(){
    iBusAudio.src=firstAudio+"Northumberland_Avenue"+lastAudio;
    iBusAudio.play();
}
function HardleyCrescent(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Hardley Crescent";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Hardley Crescent";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HardleyCrescentAudio(){
    iBusAudio.src=firstAudio+"Hardley_Crescent"+lastAudio;
    iBusAudio.play();
}
function ArdleighGreenSchool(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Ardleigh Green School";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Ardleigh Green School";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ArdleighGreenSchoolAudio(){
    iBusAudio.src=firstAudio+"Ardleigh_Green_School"+lastAudio;
    iBusAudio.play();
}
function SouthendArterialRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Southend Arterial Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Southend Arterial Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function SouthendArterialRoadAudio(){
    iBusAudio.src=firstAudio+"Southend_Arterial_Road"+lastAudio;
    iBusAudio.play();
}
function RosslynAvenue(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Rosslyn Avenue";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Rosslyn Avenue";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function RosslynAvenueAudio(){
    iBusAudio.src=firstAudio+"Rosslyn_Avenue"+lastAudio;
    iBusAudio.play();
}
function StPetersChurch(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "St Peter's Church";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "St Peter's Church";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StPetersChurchAudio(){
    iBusAudio.src=firstAudio+"St_Peters_Church"+lastAudio;
    iBusAudio.play();
}
function HaroldWoodStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Harold Wood Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Harold Wood Station";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "inline";
        tfl_National_Rail_logo.style.display = "inline";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HaroldWoodStationAudio(){
    iBusAudio.src=firstAudio+"Harold_Wood_Station"+lastAudio;
    iBusAudio.play();
}
function ArundelRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Arundel Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Arundel Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ArundelRoadAudio(){
    iBusAudio.src=firstAudio+"Arundel_Road"+lastAudio;
    iBusAudio.play();
}
function StNeotsRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "St Neot's Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "St Neot's Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StNeotsRoadAudio(){
    iBusAudio.src=firstAudio+"St_Neots_Road"+lastAudio;
    iBusAudio.play();
}
function CamborneAvenue(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Camborne Avenue";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Camborne Avenue";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CamborneAvenueAudio(){
    iBusAudio.src=firstAudio+"Camborne_Avenue"+lastAudio;
    iBusAudio.play();
}
function KingsbridgeRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Kingsbridge Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Kingsbridge Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function KingsbridgeRoadAudio(){
    iBusAudio.src=firstAudio+"Kingsbridge_Road"+lastAudio;
    iBusAudio.play();
}
function HaroldHillCommunityCentre(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Harold Hill Community Centre";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Harold Hill Community Centre";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HaroldHillCommunityCentreAudio(){
    iBusAudio.src=firstAudio+"Harold_Hill_Community_Centre"+lastAudio;
    iBusAudio.play();
}
function CentralParkLeisureCentre(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Central Park Leisure Centre";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Central Park Leisure Centre";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CentralParkLeisureCentreAudio(){
    iBusAudio.src=firstAudio+"Central_Park_Leisure_Centre"+lastAudio;
    iBusAudio.play();
}
function BrooksideSchool(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Brookside School";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Brookside School";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BrooksideSchoolAudio(){
    iBusAudio.src=firstAudio+"Brookside_School"+lastAudio;
    iBusAudio.play();
}
function LindfieldRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Lindfield Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Lindfield Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LindfieldRoadAudio(){
    iBusAudio.src=firstAudio+"Lindfield_Road"+lastAudio;
    iBusAudio.play();
}
function WigtonWay(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Wigton Way";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Wigton Way";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WigtonWayAudio(){
    iBusAudio.src=firstAudio+"Wigton_Way"+lastAudio;
    iBusAudio.play();
}
function WhitchurchRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Whitchurch Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Whitchurch Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WhitchurchRoadAudio(){
    iBusAudio.src=firstAudio+"Whitchurch_Road"+lastAudio;
    iBusAudio.play();
}
function PrioryRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Priory Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Priory Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function PrioryRoadAudio(){
    iBusAudio.src=firstAudio+"Priory_Road"+lastAudio;
    iBusAudio.play();
}
function WincantonRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Wincanton Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Wincanton Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WincantonRoadAudio(){
    iBusAudio.src=firstAudio+"Wincanton_Road"+lastAudio;
    iBusAudio.play();
}
function CummingsHallLane(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Cummings Hall Lane";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Cummings Hall Lane";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CummingsHallLaneAudio(){
    iBusAudio.src=firstAudio+"Cummings_Hall_Lane"+lastAudio;
    iBusAudio.play();
}
function AshbourneRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Ashbourne Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Ashbourne Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function AshbourneRoadAudio(){
    iBusAudio.src=firstAudio+"Ashbourne_Road"+lastAudio;
    iBusAudio.play();
}
function TroopersDrive(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Troopers Drive";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Troopers Drive";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function TroopersDriveAudio(){
    iBusAudio.src=firstAudio+"Troopers_Drive"+lastAudio;
    iBusAudio.play();
}
function TeesDrive(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Tees Drive";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Tees Drive";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function TeesDriveAudio(){
    iBusAudio.src=firstAudio+"Tees_Drive"+lastAudio;
    iBusAudio.play();
}
function HarknessClose(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Harkness Close";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Harkness Close";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HarknessCloseAudio(){
    iBusAudio.src=firstAudio+"Harkness_Close"+lastAudio;
    iBusAudio.play();
}
function RecreationAvenue(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Recreation Avenue";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Recreation Avenue";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function RecreationAvenueAudio(){
    iBusAudio.src=firstAudio+"Recreation_Avenue"+lastAudio;
    iBusAudio.play();
}
function WestmorelandAvenue(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Westmoreland Avenue";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Westmoreland Avenue";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WestmorelandAvenueAudio(){
    iBusAudio.src=firstAudio+"Westmoreland_Avenue"+lastAudio;
    iBusAudio.play();
}
function BrentwoodRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Brentwood Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Brentwood Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BrentwoodRoadAudio(){
    iBusAudio.src=firstAudio+"Brentwood_Road"+lastAudio;
    iBusAudio.play();
}
function CedarRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Cedar Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Cedar Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CedarRoadAudio(){
    iBusAudio.src=firstAudio+"Cedar_Road"+lastAudio;
    iBusAudio.play();
}
function HillfootRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Hillfoot Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Hillfoot Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HillfootRoadAudio(){
    iBusAudio.src=firstAudio+"Hillfoot_Road"+lastAudio;
    iBusAudio.play();
}
function LowshoeLane(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Lowshoe Lane";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Lowshoe Lane";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LowshoeLaneAudio(){
    iBusAudio.src=firstAudio+"Lowshoe_Lane"+lastAudio;
    iBusAudio.play();
}
function CollierRowLibrary(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Collier Row Library";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Collier Row Library";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CollierRowLibraryAudio(){
    iBusAudio.src=firstAudio+"Collier_Row_Library"+lastAudio;
    iBusAudio.play();
}
function MelvilleRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Melville Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Melville Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function MelvilleRoadAudio(){
    iBusAudio.src=firstAudio+"Melville_Road"+lastAudio;
    iBusAudio.play();
}
function HogHillRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Hog Hill Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Hog Hill Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HogHillRoadAudio(){
    iBusAudio.src=firstAudio+"Hog_Hill_Road"+lastAudio;
    iBusAudio.play();
}
function CarterDrive(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Carter Drive";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Carter Drive";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CarterDriveAudio(){
    iBusAudio.src=firstAudio+"Carter_Drive"+lastAudio;
    iBusAudio.play();
}
function AldgateStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Aldgate Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Aldgate Station";
        underground.style.display = "inline";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function AldgateStationAudio(){
    iBusAudio.src=firstAudio+"Aldgate_Station"+lastAudio;
    iBusAudio.play();
}
function Minories(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Minories";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Minories";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function MinoriesAudio(){
    iBusAudio.src=firstAudio+"Minories"+lastAudio;
    iBusAudio.play();
}
function TowerHillTowerGatewayStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Tower Hill / Tower Gateway Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Tower Hill / Tower Gateway Station";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "inline";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function TowerHillTowerGatewayStationAudio(){
    iBusAudio.src=firstAudio+"Tower_Hill_Tower_Gateway_Station"+lastAudio;
    iBusAudio.play();
}
function TowerBridge(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Tower Bridge";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Tower Bridge";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function TowerBridgeAudio(){
    iBusAudio.src=firstAudio+"Tower_Bridge"+lastAudio;
    iBusAudio.play();
}
function UnicornTheatre(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Unicorn Theatre";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Unicorn Theatre";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function UnicornTheatreAudio(){
    iBusAudio.src=firstAudio+"Unicorn_Theatre"+lastAudio;
    iBusAudio.play();
}
function LondonBridgeStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "London Bridge Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "London Bridge Station";
        underground.style.display = "inline";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "inline";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LondonBridgeStationAudio(){
    iBusAudio.src=firstAudio+"London_Bridge_Station"+lastAudio;
    iBusAudio.play();
}
function SouthwarkStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Southwark Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Southwark Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function SouthwarkStreetAudio(){
    iBusAudio.src=firstAudio+"Southwark_Street"+lastAudio;
    iBusAudio.play();
}
function UnionStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Union Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Union Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function UnionStreetAudio(){
    iBusAudio.src=firstAudio+"Union_Street"+lastAudio;
    iBusAudio.play();
}
function BoroughStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Borough Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Borough Station";
        underground.style.display = "inline";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BoroughStationAudio(){
    iBusAudio.src=firstAudio+"Borough_Station"+lastAudio;
    iBusAudio.play();
}
function InnerLondonCrownCourt(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Inner London Crown Court";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Inner London Crown Court";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function InnerLondonCrownCourtAudio(){
    iBusAudio.src=firstAudio+"Inner_London_Crown_Court"+lastAudio;
    iBusAudio.play();
}
function ElephantCastleNewingtonCauseway(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="none";
        marquee.style.display = "block";
        marquee.innerHTML = "Elephant & Castle / Newington Causeway";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Elephant & Castle / Newington Causeway";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ElephantCastleNewingtonCausewayAudio(){
    iBusAudio.src=firstAudio+"ELEPHANT_N_CASTLE__NEWINGTON_CAUSEWAY"+lastAudio;
    iBusAudio.play();
}
function ElephantCastleStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Elephant & Castle Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Elephant & Castle Station";
        underground.style.display = "inline";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "inline";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ElephantCastleStationAudio(){
    iBusAudio.src=firstAudio+"Elephant_N_Castle_Station"+lastAudio;
    iBusAudio.play();
}
function ElephantPark(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Elephant Park";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Elephant Park";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ElephantParkAudio(){
    iBusAudio.src=firstAudio+"Elephant_Park"+lastAudio;
    iBusAudio.play();
}
function LarcomStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Larcom Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Larcom Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LarcomStreetAudio(){
    iBusAudio.src=firstAudio+"Larcom_Street"+lastAudio;
    iBusAudio.play();
}
function BalfourStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Balfour Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Balfour Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BalfourStreetAudio(){
    iBusAudio.src=firstAudio+"Balfour_Street"+lastAudio;
    iBusAudio.play();
}
function EastStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "East Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "East Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function EastStreetAudio(){
    iBusAudio.src=firstAudio+"East_Street"+lastAudio;
    iBusAudio.play();
}
function AlsaceRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Alsace Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Alsace Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function AlsaceRoadAudio(){
    iBusAudio.src=firstAudio+"Alsace_Road"+lastAudio;
    iBusAudio.play();
}
function AlbanyRoadWellsWay(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Albany Road / Wells Way";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Albany Road / Wells Way";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function AlbanyRoadWellsWayAudio(){
    iBusAudio.src=firstAudio+"Albany_Road_Wells_Way"+lastAudio;
    iBusAudio.play();
}
function StGeorgesWayBurgessPark(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "St George's Way / Burgess Park";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "St George's Way / Burgess Park";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StGeorgesWayBurgessParkAudio(){
    iBusAudio.src=firstAudio+"St_Georges_Way_Burgess_Park"+lastAudio;
    iBusAudio.play();
}
function SedgmoorPlace(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Sedgmoor Place";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Sedgmoor Place";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function SedgmoorPlaceAudio(){
    iBusAudio.src=firstAudio+"Sedgmoor_Place"+lastAudio;
    iBusAudio.play();
}
function SouthamptonWayEstate(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Southampton Way Estate";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Southampton Way Estate";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function SouthamptonWayEstateAudio(){
    iBusAudio.src=firstAudio+"Southampton_Way_Estate"+lastAudio;
    iBusAudio.play();
}
function SouthamptonWayPeckhamRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Southampton Way / Peckham Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Southampton Way / Peckham Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function SouthamptonWayPeckhamRoadAudio(){
    iBusAudio.src=firstAudio+"Southampton_Way_Peckham_Road"+lastAudio;
    iBusAudio.play();
}
function HarrisAcademy(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Harris Academy";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Harris Academy";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HarrisAcademyAudio(){
    iBusAudio.src=firstAudio+"Harris_Academy"+lastAudio;
    iBusAudio.play();
}
function PeckhamLibrary(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Peckham Library";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Peckham Library";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function PeckhamLibraryAudio(){
    iBusAudio.src=firstAudio+"Peckham_Library"+lastAudio;
    iBusAudio.play();
}
function ClaytonRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Clayton Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Clayton Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ClaytonRoadAudio(){
    iBusAudio.src=firstAudio+"Clayton_Road"+lastAudio;
    iBusAudio.play();
}
function TheAyleshamCentre(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "The Aylesham Centre";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "The Aylesham Centre";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function TheAyleshamCentreAudio(){
    iBusAudio.src=firstAudio+"The_Aylesham_Centre"+lastAudio;
    iBusAudio.play();
}
function PeckhamRyeStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Peckham Rye Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Peckham Rye Station";
        underground.style.display = "none";
        overground.style.display = "inline";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "inline";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function PeckhamRyeStationAudio(){
    iBusAudio.src=firstAudio+"Peckham_Rye_Station"+lastAudio;
    iBusAudio.play();
}
function NigelRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Nigel Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Nigel Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function NigelRoadAudio(){
    iBusAudio.src=firstAudio+"Nigel_Road"+lastAudio;
    iBusAudio.play();
}
function PeckhamRyeNunheadLane(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Peckham Rye / Nunhead Lane";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Peckham Rye / Nunhead Lane";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function PeckhamRyeNunheadLaneAudio(){
    iBusAudio.src=firstAudio+"Peckham_Rye_Nunhead_Lane"+lastAudio;
    iBusAudio.play();
}
function SolomonsPassage(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Solomon's Passage";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Solomon's Passage";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function SolomonsPassageAudio(){
    iBusAudio.src=firstAudio+"Solomons_Passage"+lastAudio;
    iBusAudio.play();
}
function RyeHillPark(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Rye Hill Park";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Rye Hill Park";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function RyeHillParkAudio(){
    iBusAudio.src=firstAudio+"Rye_Hill_Park"+lastAudio;
    iBusAudio.play();
}
function StuartRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Stuart Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Stuart Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StuartRoadAudio(){
    iBusAudio.src=firstAudio+"Stuart_Road"+lastAudio;
    iBusAudio.play();
}
function SurreyRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Surrey Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Surrey Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function SurreyRoadAudio(){
    iBusAudio.src=firstAudio+"SURREY_ROAD"+lastAudio;
    iBusAudio.play();
}
function MerttinsRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Merttins Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Merttins Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function MerttinsRoadAudio(){
    iBusAudio.src=firstAudio+"Merttins_Road"+lastAudio;
    iBusAudio.play();
}
function StNorbertRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "St Norbert Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "St Norbert Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StNorbertRoadAudio(){
    iBusAudio.src=firstAudio+"St_Norbert_Road"+lastAudio;
    iBusAudio.play();
}
function TurnhamRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Turnham Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Turnham Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function TurnhamRoadAudio(){
    iBusAudio.src=firstAudio+"Turnham_Road"+lastAudio;
    iBusAudio.play();
}
function BrockillCrescent(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Brockill Crescent";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Brockill Crescent";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BrockillCrescentAudio(){
    iBusAudio.src=firstAudio+"Brockill_Crescent"+lastAudio;
    iBusAudio.play();
}
function StAsaphRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "St Asaph Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "St Asaph Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StAsaphRoadAudio(){
    iBusAudio.src=firstAudio+"St_Asaph_Road"+lastAudio;
    iBusAudio.play();
}
function AvignonRoadDrakefellRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Avignon Road / Drakefell Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Avignon Road / Drakefell Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function AvignonRoadDrakefellRoadAudio(){
    iBusAudio.src=firstAudio+"Avignon_Road_Drakefell_Road"+lastAudio;
    iBusAudio.play();
}
function KittoRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Kitto Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Kitto Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function KittoRoadAudio(){
    iBusAudio.src=firstAudio+"Kitto_Road"+lastAudio;
    iBusAudio.play();
}
function ArbuthnotRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Arbuthnot Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Arbuthnot Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ArbuthnotRoadAudio(){
    iBusAudio.src=firstAudio+"Arbuthnot_Road"+lastAudio;
    iBusAudio.play();
}
function OmmaneyRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Ommaney Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Ommaney Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function OmmaneyRoadAudio(){
    iBusAudio.src=firstAudio+"Ommaney_Road"+lastAudio;
    iBusAudio.play();
}
function NewCrossJerninghamRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "New Cross / Jerningham Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "New Cross / Jerningham Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function NewCrossJerninghamRoadAudio(){
    iBusAudio.src=firstAudio+"New_Cross_Jerningham_Road"+lastAudio;
    iBusAudio.play();
}
function NewCrossBusGarage(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "New Cross Bus Garage";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "New Cross Bus Garage";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function NewCrossBusGarageAudio(){
    iBusAudio.src=firstAudio+"New_Cross_Bus_Garage"+lastAudio;
    iBusAudio.play();
}
function DrakefellRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Drakefell Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Drakefell Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function DrakefellRoadAudio(){
    iBusAudio.src=firstAudio+"Drakefell_Road"+lastAudio;
    iBusAudio.play();
}
function InvertonRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Inverton Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Inverton Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function InvertonRoadAudio(){
    iBusAudio.src=firstAudio+"Inverton_Road"+lastAudio;
    iBusAudio.play();
}
function PeckhamRyeEastDulwichRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Peckham Rye / East Dulwich Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Peckham Rye / East Dulwich Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function PeckhamRyeEastDulwichRoadAudio(){
    iBusAudio.src=firstAudio+"Peckham_Rye_East_Dulwich_Road"+lastAudio;
    iBusAudio.play();
}
function HeatonRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Heaton Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Heaton Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HeatonRoadAudio(){
    iBusAudio.src=firstAudio+"Heaton_Road"+lastAudio;
    iBusAudio.play();
}
function HanoverPark(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Hanover Park";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Hanover Park";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HanoverParkAudio(){
    iBusAudio.src=firstAudio+"Hanover_Park"+lastAudio;
    iBusAudio.play();
}
function PeckhamRoadSouthamptonWay(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Peckham Road / Southampton Way";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Peckham Road / Southampton Way";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function PeckhamRoadSouthamptonWayAudio(){
    iBusAudio.src=firstAudio+"Peckham_Road_Southampton_Way"+lastAudio;
    iBusAudio.play();
}
function CottageGreen(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Cottage Green";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Cottage Green";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CottageGreenAudio(){
    iBusAudio.src=firstAudio+"Cottage_Green"+lastAudio;
    iBusAudio.play();
}
function HamptonStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Hampton Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Hampton Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HamptonStreetAudio(){
    iBusAudio.src=firstAudio+"Hampton_Street"+lastAudio;
    iBusAudio.play();
}
function HaysGalleria(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Hay's Galleria";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Hay's Galleria";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HaysGalleriaAudio(){
    iBusAudio.src=firstAudio+"Hays_Galleria"+lastAudio;
    iBusAudio.play();
}
function AbbotsLane(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Abbots Lane";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Abbots Lane";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function AbbotsLaneAudio(){
    iBusAudio.src=firstAudio+"Abbots_Lane"+lastAudio;
    iBusAudio.play();
}
function TowerGatewayStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Tower Gateway Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Tower Gateway Station";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "inline";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function TowerGatewayStationAudio(){
    iBusAudio.src=firstAudio+"Tower_Gateway_Station"+lastAudio;
    iBusAudio.play();
}
function WatfordJunctionStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Watford Junction Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Watford Junction Station";
        underground.style.display = "none";
        overground.style.display = "inline";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "inline";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WatfordJunctionStationAudio(){
    iBusAudio.src=firstAudio+"Watford_Junction_Station"+lastAudio;
    iBusAudio.play();
}
function BeechenGrove(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Beechen Grove";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Beechen Grove";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BeechenGroveAudio(){
    iBusAudio.src=firstAudio+"Beechen_Grove"+lastAudio;
    iBusAudio.play();
}
function WaterLane(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Water Lane";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Water Lane";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WaterLaneAudio(){
    iBusAudio.src=firstAudio+"Water_Lane"+lastAudio;
    iBusAudio.play();
}
function WatfordHighStreetStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Watford High Street Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Watford High Street Station";
        underground.style.display = "none";
        overground.style.display = "inline";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WatfordHighStreetStationAudio(){
    iBusAudio.src=firstAudio+"Watford_High_Street_Station"+lastAudio;
    iBusAudio.play();
}
function WatfordFieldRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Watford Field Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Watford Field Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WatfordFieldRoadAudio(){
    iBusAudio.src=firstAudio+"Watford_Field_Road"+lastAudio;
    iBusAudio.play();
}
function WaterfieldsWay(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Waterfields Way";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Waterfields Way";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WaterfieldsWayAudio(){
    iBusAudio.src=firstAudio+"Waterfields_Way"+lastAudio;
    iBusAudio.play();
}
function BusheyArches(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Bushey Arches";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Bushey Arches";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BusheyArchesAudio(){
    iBusAudio.src=firstAudio+"Bushey_Arches"+lastAudio;
    iBusAudio.play();
}
function BusheyStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Bushey Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Bushey Station";
        underground.style.display = "none";
        overground.style.display = "inline";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "inline";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BusheyStationAudio(){
    iBusAudio.src=firstAudio+"Bushey_Station"+lastAudio;
    iBusAudio.play();
}
function GrangeRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Grange Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Grange Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function GrangeRoadAudio(){
    iBusAudio.src=firstAudio+"Grange_Road"+lastAudio;
    iBusAudio.play();
}
function GrangeAcademy(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Grange Academy";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Grange Academy";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function GrangeAcademyAudio(){
    iBusAudio.src=firstAudio+"Grange_Academy"+lastAudio;
    iBusAudio.play();
}
function TheRedLionPublicHouse(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "The Red Lion Public House";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "The Red Lion Public House";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function TheRedLionPublicHouseAudio(){
    iBusAudio.src=firstAudio+"The_Red_Lion_Public_House"+lastAudio;
    iBusAudio.play();
}
function BournehallRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Bournehall Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Bournehall Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BournehallRoadAudio(){
    iBusAudio.src=firstAudio+"Bournehall_Road"+lastAudio;
    iBusAudio.play();
}
function MelbourneRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Melbourne Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Melbourne Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function MelbourneRoadAudio(){
    iBusAudio.src=firstAudio+"Melbourne_Road"+lastAudio;
    iBusAudio.play();
}
function Steeplands(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Steeplands";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Steeplands";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function SteeplandsAudio(){
    iBusAudio.src=firstAudio+"Steeplands"+lastAudio;
    iBusAudio.play();
}
function TheRoyalOakPublicHouse(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "The Royal Oak Public House";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "The Royal Oak Public House";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function TheRoyalOakPublicHouseAudio(){
    iBusAudio.src=firstAudio+"The_Royal_Oak_Public_House"+lastAudio;
    iBusAudio.play();
}
function MerryHillRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Merry Hill Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Merry Hill Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function MerryHillRoadAudio(){
    iBusAudio.src=firstAudio+"Merry_Hill_Road"+lastAudio;
    iBusAudio.play();
}
function StPetersClose(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "St Peter's Close";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "St Peter's Close";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StPetersCloseAudio(){
    iBusAudio.src=firstAudio+"St_Peters_Close"+lastAudio;
    iBusAudio.play();
}
function WindmillLane(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Windmill Lane";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Windmill Lane";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WindmillLaneAudio(){
    iBusAudio.src=firstAudio+"Windmill_Lane"+lastAudio;
    iBusAudio.play();
}
function CommonRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Common Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Common Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CommonRoadAudio(){
    iBusAudio.src=firstAudio+"Common_Road"+lastAudio;
    iBusAudio.play();
}
function HiveRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Hive Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Hive Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HiveRoadAudio(){
    iBusAudio.src=firstAudio+"Hive_Road"+lastAudio;
    iBusAudio.play();
}
function AvantiHousePrimarySchool(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Avanti House Primary School";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Avanti House Primary School";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function AvantiHousePrimarySchoolAudio(){
    iBusAudio.src=firstAudio+"Avanti_House_Primary_School"+lastAudio;
    iBusAudio.play();
}
function Sandringham(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Sandringham";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Sandringham";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function SandringhamAudio(){
    iBusAudio.src=firstAudio+"Sandringham"+lastAudio;
    iBusAudio.play();
}
function ClampHill(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Clamp Hill";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Clamp Hill";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ClampHillAudio(){
    iBusAudio.src=firstAudio+"Clamp_Hill"+lastAudio;
    iBusAudio.play();
}
function BrookshillGate(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Brookshill Gate";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Brookshill Gate";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BrookshillGateAudio(){
    iBusAudio.src=firstAudio+"Brookshill_Gate"+lastAudio;
    iBusAudio.play();
}
function HarrowCollege(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Harrow College";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Harrow College";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HarrowCollegeAudio(){
    iBusAudio.src=firstAudio+"Harrow_College"+lastAudio;
    iBusAudio.play();
}
function UxbridgeRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Uxbridge Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Uxbridge Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function UxbridgeRoadAudio(){
    iBusAudio.src=firstAudio+"Uxbridge_Road"+lastAudio;
    iBusAudio.play();
}
function HarrowWealdBusGarage(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Harrow Weald Bus Garage";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Harrow Weald Bus Garage";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HarrowWealdBusGarageAudio(){
    iBusAudio.src=firstAudio+"Harrow_Weald_Bus_Garage"+lastAudio;
    iBusAudio.play();
}
function WealdLane(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Weald Lane";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Weald Lane";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WealdLaneAudio(){
    iBusAudio.src=firstAudio+"Weald_Lane"+lastAudio;
    iBusAudio.play();
}
function SalvatorianCollegeStJosephsChurch(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="none";
        marquee.style.display = "block";
        marquee.innerHTML = "Salvatorian College / St Joseph's Church";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Salvatorian College / St Joseph's Church";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function SalvatorianCollegeStJosephsChurchAudio(){
    iBusAudio.src=firstAudio+"Salvatorian_College_St_Josephs_Church"+lastAudio;
    iBusAudio.play();
}
function WealdstoneBaptistChurch(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Wealdstone Baptist Church";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Wealdstone Baptist Church";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WealdstoneBaptistChurchAudio(){
    iBusAudio.src=firstAudio+"Wealdstone_Baptist_Church"+lastAudio;
    iBusAudio.play();
}
function TheWealdstoneCentre(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "The Wealdstone Centre";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "The Wealdstone Centre";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function TheWealdstoneCentreAudio(){
    iBusAudio.src=firstAudio+"The_Wealdstone_Centre"+lastAudio;
    iBusAudio.play();
}
function HarrowWealdstoneStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Harrow & Wealdstone Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Harrow & Wealdstone Station";
        underground.style.display = "inline";
        overground.style.display = "inline";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "inline";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HarrowWealdstoneStationAudio(){
    iBusAudio.src=firstAudio+"Harrow_N_Wealdstone_Station"+lastAudio;
    iBusAudio.play();
}
function HarrowCivicCentreHarrowMosque(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="none";
        marquee.style.display = "block";
        marquee.innerHTML = "Harrow Civic Centre / Harrow Mosque";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Harrow Civic Centre / Harrow Mosque";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HarrowCivicCentreHarrowMosqueAudio(){
    iBusAudio.src=firstAudio+"Harrow_Civic_Centre_Harrow_Mosque"+lastAudio;
    iBusAudio.play();
}
function HindesRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Hindes Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Hindes Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HindesRoadAudio(){
    iBusAudio.src=firstAudio+"Hindes_Road"+lastAudio;
    iBusAudio.play();
}
function HarrowTownCentreStJohnsRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="none";
        marquee.style.display = "block";
        marquee.innerHTML = "Harrow Town Centre / St John's Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Harrow Town Centre / St John's Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HarrowTownCentreStJohnsRoadAudio(){
    iBusAudio.src=firstAudio+"Harrow_Town_Centre_St_Johns_Road"+lastAudio;
    iBusAudio.play();
}
function HarrowTownCentre(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Harrow Town Centre";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Harrow Town Centre";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HarrowTownCentreAudio(){
    iBusAudio.src=firstAudio+"Harrow_Town_Centre"+lastAudio;
    iBusAudio.play();
}
function HarrowBusStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Harrow Bus Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Harrow Bus Station";
        underground.style.display = "inline";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "inline";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HarrowBusStationAudio(){
    iBusAudio.src=firstAudio+"Harrow_Bus_Station"+lastAudio;
    iBusAudio.play();
}
function TyburnLane(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Tyburn Lane";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Tyburn Lane";
        underground.style.display = "inline";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "inline";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function TyburnLaneAudio(){
    iBusAudio.src=firstAudio+"Tyburn_Lane"+lastAudio;
    iBusAudio.play();
}
function KentonRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Kenton Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Kenton Road";
        underground.style.display = "inline";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "inline";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function KentonRoadAudio(){
    iBusAudio.src=firstAudio+"Kenton_Road"+lastAudio;
    iBusAudio.play();
}
function HarrowSchool(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Harrow School";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Harrow School";
        underground.style.display = "inline";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "inline";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HarrowSchoolAudio(){
    iBusAudio.src=firstAudio+"Harrow_School"+lastAudio;
    iBusAudio.play();
}
function HarrowPark(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Harrow Park";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Harrow Park";
        underground.style.display = "inline";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "inline";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HarrowParkAudio(){
    iBusAudio.src=firstAudio+"Harrow_Park"+lastAudio;
    iBusAudio.play();
}
function RoxethHill(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Roxeth Hill";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Roxeth Hill";
        underground.style.display = "inline";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "inline";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function RoxethHillAudio(){
    iBusAudio.src=firstAudio+"Roxeth_Hill"+lastAudio;
    iBusAudio.play();
}
function SouthHarrowBusStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "South Harrow Bus Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "South Harrow Bus Station";
        underground.style.display = "inline";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "inline";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function SouthHarrowBusStationAudio(){
    iBusAudio.src=firstAudio+"South_Harrow_Bus_Station"+lastAudio;
    iBusAudio.play();
}
function HarrowTownCentreSheepcoteRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="none";
        marquee.style.display = "block";
        marquee.innerHTML = "Harrow Town Centre / Sheepcote Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Harrow Town Centre / Sheepcote Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HarrowTownCentreSheepcoteRoadAudio(){
    iBusAudio.src=firstAudio+"Harrow_Town_Centre_Sheepcote_Road"+lastAudio;
    iBusAudio.play();
}
function SafariCinema(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Safari Cinema";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Safari Cinema";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function SafariCinemaAudio(){
    iBusAudio.src=firstAudio+"Safari_Cinema"+lastAudio;
    iBusAudio.play();
}
function LongElmes(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Long Elmes";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Long Elmes";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LongElmesAudio(){
    iBusAudio.src=firstAudio+"Long_Elmes"+lastAudio;
    iBusAudio.play();
}
function MonroGardens(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Monro Gardens";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Monro Gardens";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function MonroGardensAudio(){
    iBusAudio.src=firstAudio+"Monro_Gardens"+lastAudio;
    iBusAudio.play();
}
function BusheyHeathThreeCrowns(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Bushey Heath Three Crowns";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Bushey Heath Three Crowns";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BusheyHeathThreeCrownsAudio(){
    iBusAudio.src=firstAudio+"Bushey_Heath_Three_Crowns"+lastAudio;
    iBusAudio.play();
}
function DaltonWay(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Dalton Way";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Dalton Way";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function DaltonWayAudio(){
    iBusAudio.src=firstAudio+"Dalton_Way"+lastAudio;
    iBusAudio.play();
}
function KingStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "King Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "King Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function KingStreetAudio(){
    iBusAudio.src=firstAudio+"King_Street"+lastAudio;
    iBusAudio.play();
}
function StJohnsRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "St John's Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "St John's Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StJohnsRoadAudio(){
    iBusAudio.src=firstAudio+"St_Johns_Road"+lastAudio;
    iBusAudio.play();
}
function WatfordJunctionRailwayStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Watford Junction Railway Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Watford Junction Railway Station";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WatfordJunctionRailwayStationAudio(){
    iBusAudio.src=firstAudio+"Watford_Junction_Railway_Station"+lastAudio;
    iBusAudio.play();
}
function ManorRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Manor Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Manor Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ManorRoadAudio(){
    iBusAudio.src=firstAudio+"Manor_Road"+lastAudio;
    iBusAudio.play();
}
function FairholmeAvenue(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Fairholme Avenue";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Fairholme Avenue";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function FairholmeAvenueAudio(){
    iBusAudio.src=firstAudio+"Fairholme_Avenue"+lastAudio;
    iBusAudio.play();
}
function MargaretRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Margaret Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Margaret Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function MargaretRoadAudio(){
    iBusAudio.src=firstAudio+"Margaret_Road"+lastAudio;
    iBusAudio.play();
}
function BrooklandsGardens(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Brooklands Gardens";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Brooklands Gardens";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BrooklandsGardensAudio(){
    iBusAudio.src=firstAudio+"Brooklands_Gardens"+lastAudio;
    iBusAudio.play();
}
function WaldenWay(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Walden Way";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Walden Way";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WaldenWayAudio(){
    iBusAudio.src=firstAudio+"Walden_Way"+lastAudio;
    iBusAudio.play();
}
function BurntwoodAvenue(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Burntwood Avenue";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Burntwood Avenue";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BurntwoodAvenueAudio(){
    iBusAudio.src=firstAudio+"Burntwood_Avenue"+lastAudio;
    iBusAudio.play();
}
function ButtsGreenRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Butts Green Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Butts Green Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ButtsGreenRoadAudio(){
    iBusAudio.src=firstAudio+"Butts_Green_Road"+lastAudio;
    iBusAudio.play();
}
function NelmesRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Nelmes Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Nelmes Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function NelmesRoadAudio(){
    iBusAudio.src=firstAudio+"Nelmes_Road"+lastAudio;
    iBusAudio.play();
}
function WingletyeLane(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Wingletye Lane";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Wingletye Lane";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WingletyeLaneAudio(){
    iBusAudio.src=firstAudio+"Wingletye_Lane"+lastAudio;
    iBusAudio.play();
}
function EmersonParkAcademy(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Emerson Park Academy";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Emerson Park Academy";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function EmersonParkAcademyAudio(){
    iBusAudio.src=firstAudio+"Emerson_Park_Academy"+lastAudio;
    iBusAudio.play();
}
function WykehamAvenue(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Wykeham Avenue";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Wykeham Avenue";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WykehamAvenueAudio(){
    iBusAudio.src=firstAudio+"Wykeham_Avenue"+lastAudio;
    iBusAudio.play();
}
function KinfaunsAvenue(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Kinfauns Avenue";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Kinfauns Avenue";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function KinfaunsAvenueAudio(){
    iBusAudio.src=firstAudio+"Kinfauns_Avenue"+lastAudio;
    iBusAudio.play();
}
function WithamRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Witham Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Witham Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WithamRoadAudio(){
    iBusAudio.src=firstAudio+"Witham_Road"+lastAudio;
    iBusAudio.play();
}
function SouthLodgeAvenueYorkshireRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="none";
        marquee.style.display = "block";
        marquee.innerHTML = "South Lodge Avenue / Yorkshire Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "South Lodge Avenue / Yorkshire Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function SouthLodgeAvenueYorkshireRoadAudio(){
    iBusAudio.src=firstAudio+"South_Lodge_Avenue_Yorkshire_Road"+lastAudio;
    iBusAudio.play();
}
function LeicesterAvenue(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Leicester Avenue";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Leicester Avenue";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LeicesterAvenueAudio(){
    iBusAudio.src=firstAudio+"Leicester_Avenue"+lastAudio;
    iBusAudio.play();
}
function NorthumberlandGardens(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Northumberland Gardens";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Northumberland Gardens";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function NorthumberlandGardensAudio(){
    iBusAudio.src=firstAudio+"Northumberland_Gardens"+lastAudio;
    iBusAudio.play();
}
function WestmorlandWay(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Westmorland Way";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Westmorland Way";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WestmorlandWayAudio(){
    iBusAudio.src=firstAudio+"Westmorland_Way"+lastAudio;
    iBusAudio.play();
}
function CarisbrookeRoadHertfordWay(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Carisbrooke Road / Hertford Way";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Carisbrooke Road / Hertford Way";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CarisbrookeRoadHertfordWayAudio(){
    iBusAudio.src=firstAudio+"Carisbrooke_Road_Hertford_Way"+lastAudio;
    iBusAudio.play();
}
function PollardsHillLibrary(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Pollards Hill Library";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Pollards Hill Library";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function PollardsHillLibraryAudio(){
    iBusAudio.src=firstAudio+"Pollards_Hill_Library"+lastAudio;
    iBusAudio.play();
}
function IvyGardens(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Ivy Gardens";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Ivy Gardens";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function IvyGardensAudio(){
    iBusAudio.src=firstAudio+"Ivy_Gardens"+lastAudio;
    iBusAudio.play();
}
function NorthboroughRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Northborough Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Northborough Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function NorthboroughRoadAudio(){
    iBusAudio.src=firstAudio+"Northborough_Road"+lastAudio;
    iBusAudio.play();
}
function StanfordWay(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Stanford Way";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Stanford Way";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StanfordWayAudio(){
    iBusAudio.src=firstAudio+"Stanford_Way"+lastAudio;
    iBusAudio.play();
}
function MeophamRoadWoodstockWay(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Meopham Road / Woodstock Way";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Meopham Road / Woodstock Way";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function MeophamRoadWoodstockWayAudio(){
    iBusAudio.src=firstAudio+"Meopham_Road_Woodstock_Way"+lastAudio;
    iBusAudio.play();
}
function ClayAvenue(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Clay Avenue";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Clay Avenue";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ClayAvenueAudio(){
    iBusAudio.src=firstAudio+"Clay_Avenue"+lastAudio;
    iBusAudio.play();
}
function StMarksCofEAcademyPlayingFields(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="none";
        marquee.style.display = "block";
        marquee.innerHTML = "St Mark's C of E Academy Playing Fields";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "St Mark's C of E Academy Playing Fields";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StMarksCofEAcademyPlayingFieldsAudio(){
    iBusAudio.src=firstAudio+"St_Marks_C_of_E_Academy_Playing_Fields"+lastAudio;
    iBusAudio.play();
}
function MitchamEastfieldsStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Mitcham Eastfields Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Mitcham Eastfields Station";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "inline";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function MitchamEastfieldsStationAudio(){
    iBusAudio.src=firstAudio+"Mitcham_Eastfields_Station"+lastAudio;
    iBusAudio.play();
}
function EastfieldsRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Eastfields Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Eastfields Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function EastfieldsRoadAudio(){
    iBusAudio.src=firstAudio+"Eastfields_Road"+lastAudio;
    iBusAudio.play();
}
function LocksLane(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Locks Lane";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Locks Lane";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LocksLaneAudio(){
    iBusAudio.src=firstAudio+"Locks_Lane"+lastAudio;
    iBusAudio.play();
}
function DowneRoadMitchamLibrary(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Downe Road / Mitcham Library";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Downe Road / Mitcham Library";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function DowneRoadMitchamLibraryAudio(){
    iBusAudio.src=firstAudio+"Downe_Road_Mitcham_Library"+lastAudio;
    iBusAudio.play();
}
function MitchamFairGreen(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Mitcham Fair Green";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Mitcham Fair Green";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function MitchamFairGreenAudio(){
    iBusAudio.src=firstAudio+"Mitcham_Fair_Green"+lastAudio;
    iBusAudio.play();
}
function LoveLane(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Love Lane";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Love Lane";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LoveLaneAudio(){
    iBusAudio.src=firstAudio+"Love_Lane"+lastAudio;
    iBusAudio.play();
}
function SadlerClose(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Sadler Close";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Sadler Close";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function SadlerCloseAudio(){
    iBusAudio.src=firstAudio+"Sadler_Close"+lastAudio;
    iBusAudio.play();
}
function LewisRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Lewis Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Lewis Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LewisRoadAudio(){
    iBusAudio.src=firstAudio+"Lewis_Road"+lastAudio;
    iBusAudio.play();
}
function LavenderAvenue(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Lavender Avenue";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Lavender Avenue";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LavenderAvenueAudio(){
    iBusAudio.src=firstAudio+"Lavender_Avenue"+lastAudio;
    iBusAudio.play();
}
function ChelseaFields(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Chelsea Fields";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Chelsea Fields";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ChelseaFieldsAudio(){
    iBusAudio.src=firstAudio+"Chelsea_Fields"+lastAudio;
    iBusAudio.play();
}
function Runnymede(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Runnymede";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Runnymede";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function RunnymedeAudio(){
    iBusAudio.src=firstAudio+"Runnymede"+lastAudio;
    iBusAudio.play();
}
function ColliersWoodStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Colliers Wood Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Colliers Wood Station";
        underground.style.display = "inline";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ColliersWoodStationAudio(){
    iBusAudio.src=firstAudio+"Colliers_Wood_Station"+lastAudio;
    iBusAudio.play();
}
function MertonAbbey(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Merton Abbey";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Merton Abbey";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function MertonAbbeyAudio(){
    iBusAudio.src=firstAudio+"Merton_Abbey"+lastAudio;
    iBusAudio.play();
}
function AbbeyRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Abbey Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Abbey Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function AbbeyRoadAudio(){
    iBusAudio.src=firstAudio+"Abbey_Road"+lastAudio;
    iBusAudio.play();
}
function SouthWimbledonStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "South Wimbledon Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "South Wimbledon Station";
        underground.style.display = "inline";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function SouthWimbledonStationAudio(){
    iBusAudio.src=firstAudio+"South_Wimbledon_Station"+lastAudio;
    iBusAudio.play();
}
function MordenRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Morden Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Morden Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function MordenRoadAudio(){
    iBusAudio.src=firstAudio+"Morden_Road"+lastAudio;
    iBusAudio.play();
}
function WimbledonFireStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Wimbledon Fire Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Wimbledon Fire Station";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WimbledonFireStationAudio(){
    iBusAudio.src=firstAudio+"Wimbledon_Fire_Station"+lastAudio;
    iBusAudio.play();
}
function MertonParkTramStop(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Merton Park Tram Stop";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Merton Park Tram Stop";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "inline";
    }
}
function MertonParkTramStopAudio(){
    iBusAudio.src=firstAudio+"Merton_Park_Tram_Stop"+lastAudio;
    iBusAudio.play();
}
function WiltonCrescent(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Wilton Crescent";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Wilton Crescent";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WiltonCrescentAudio(){
    iBusAudio.src=firstAudio+"Wilton_Crescent"+lastAudio;
    iBusAudio.play();
}
function TheNelsonHealthCentre(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "The Nelson Health Centre";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "The Nelson Health Centre";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function TheNelsonHealthCentreAudio(){
    iBusAudio.src=firstAudio+"The_Nelson_Health_Centre"+lastAudio;
    iBusAudio.play();
}
function WimbledonChaseStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Wimbledon Chase Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Wimbledon Chase Station";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "inline";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WimbledonChaseStationAudio(){
    iBusAudio.src=firstAudio+"Wimbledon_Chase_Station"+lastAudio;
    iBusAudio.play();
}
function LowerDownsRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Lower Downs Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Lower Downs Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LowerDownsRoadAudio(){
    iBusAudio.src=firstAudio+"Lower_Downs_Road"+lastAudio;
    iBusAudio.play();
}
function SydneyRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Sydney Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Sydney Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function SydneyRoadAudio(){
    iBusAudio.src=firstAudio+"Sydney_Road"+lastAudio;
    iBusAudio.play();
}
function RaynesParkLibrary(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Raynes Park Library";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Raynes Park Library";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function RaynesParkLibraryAudio(){
    iBusAudio.src=firstAudio+"Raynes_Park_Library"+lastAudio;
    iBusAudio.play();
}
function RaynesParkStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Raynes Park Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Raynes Park Station";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "inline";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function RaynesParkStationAudio(){
    iBusAudio.src=firstAudio+"Raynes_Park_STATION"+lastAudio;
    iBusAudio.play();
}
function BusheyRoadGrandDrive(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Bushey Road / Grand Drive";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Bushey Road / Grand Drive";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BusheyRoadGrandDriveAudio(){
    iBusAudio.src=firstAudio+"Bushey_Road_Grand_Drive"+lastAudio;
    iBusAudio.play();
}
function CartersBridge(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Carters Bridge";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Carters Bridge";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CartersBridgeAudio(){
    iBusAudio.src=firstAudio+"Carters_Bridge"+lastAudio;
    iBusAudio.play();
}
function RaynesParkHighSchool(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Raynes Park High School";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Raynes Park High School";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function RaynesParkHighSchoolAudio(){
    iBusAudio.src=firstAudio+"Raynes_Park_High_School"+lastAudio;
    iBusAudio.play();
}
function ShannonCornerSuperstores(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Shannon Corner Superstores";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Shannon Corner Superstores";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ShannonCornerSuperstoresAudio(){
    iBusAudio.src=firstAudio+"Shannon_Corner_Superstores"+lastAudio;
    iBusAudio.play();
}
function ShannonCornerBeverleyWay(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Shannon Corner / Beverley Way";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Shannon Corner / Beverley Way";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ShannonCornerBeverleyWayAudio(){
    iBusAudio.src=firstAudio+"Shannon_Corner_Beverley_Way"+lastAudio;
    iBusAudio.play();
}
function ShannonCornerRookwoodAvenue(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="none";
        marquee.style.display = "block";
        marquee.innerHTML = "Shannon Corner / Rookwood Avenue";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Shannon Corner / Rookwood Avenue";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ShannonCornerRookwoodAvenueAudio(){
    iBusAudio.src=firstAudio+"Shannon_Corner_Rookwood_Avenue"+lastAudio;
    iBusAudio.play();
}
function QueensRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Queens Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Queens Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function QueensRoadAudio(){
    iBusAudio.src=firstAudio+"Queens_Road"+lastAudio;
    iBusAudio.play();
}
function WaltonAvenue(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Walton Avenue";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Walton Avenue";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WaltonAvenueAudio(){
    iBusAudio.src=firstAudio+"Walton_Avenue"+lastAudio;
    iBusAudio.play();
}
function ChristChurch(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Christ Church";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Christ Church";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ChristChurchAudio(){
    iBusAudio.src=firstAudio+"Christ_Church"+lastAudio;
    iBusAudio.play();
}
function EvelineRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Eveline Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Eveline Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function EvelineRoadAudio(){
    iBusAudio.src=firstAudio+"Eveline_Road"+lastAudio;
    iBusAudio.play();
}
function EastfieldsRdMitchamEastfieldsStn(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="none";
        marquee.style.display = "block";
        marquee.innerHTML = "Eastfields Rd / Mitcham Eastfields Stn";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Eastfields Rd / Mitcham Eastfields Stn";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function EastfieldsRdMitchamEastfieldsStnAudio(){
    iBusAudio.src=firstAudio+"Eastfields_Rd_Mitcham_Eastfields_Stn"+lastAudio;
    iBusAudio.play();
}
function WarminsterWay(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Warminster Way";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Warminster Way";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WarminsterWayAudio(){
    iBusAudio.src=firstAudio+"Warminster_Way"+lastAudio;
    iBusAudio.play();
}
function StreathamParkCemetery(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Streatham Park Cemetery";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Streatham Park Cemetery";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StreathamParkCemeteryAudio(){
    iBusAudio.src=firstAudio+"Streatham_Park_Cemetery"+lastAudio;
    iBusAudio.play();
}
function RosemeadAvenue(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Rosemead Avenue";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Rosemead Avenue";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function RosemeadAvenueAudio(){
    iBusAudio.src=firstAudio+"Rosemead_Avenue"+lastAudio;
    iBusAudio.play();
}
function StratfordInternationalStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Stratford International Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Stratford International Station";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "inline";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "inline";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StratfordInternationalStationAudio(){
    iBusAudio.src=firstAudio+"Stratford_International_Station"+lastAudio;
    iBusAudio.play();
}
function StratfordCityBusStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Stratford City Bus Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Stratford City Bus Station";
        underground.style.display = "inline";
        overground.style.display = "inline";
        DLR.style.display = "inline";
        ElizabethLine.style.display = "inline";
        tfl_National_Rail_logo.style.display = "inline";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StratfordCityBusStationAudio(){
    iBusAudio.src=firstAudio+"Stratford_City_Bus_Station"+lastAudio;
    iBusAudio.play();
}
function LondonAquaticsCentre(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "London Aquatics Centre";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "London Aquatics Centre";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LondonAquaticsCentreAudio(){
    iBusAudio.src=firstAudio+"London_Aquatics_Centre"+lastAudio;
    iBusAudio.play();
}
function CarpentersPrimarySchool(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Carpenters Primary School";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Carpenters Primary School";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CarpentersPrimarySchoolAudio(){
    iBusAudio.src=firstAudio+"Carpenters_Primary_School"+lastAudio;
    iBusAudio.play();
}
function WartonRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Warton Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Warton Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WartonRoadAudio(){
    iBusAudio.src=firstAudio+"Warton_Road"+lastAudio;
    iBusAudio.play();
}
function AbbeyLane(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Abbey Lane";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Abbey Lane";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function AbbeyLaneAudio(){
    iBusAudio.src=firstAudio+"Abbey_Lane"+lastAudio;
    iBusAudio.play();
}
function BowFlyover(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Bow Flyover";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Bow Flyover";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BowFlyoverAudio(){
    iBusAudio.src=firstAudio+"Bow_Flyover"+lastAudio;
    iBusAudio.play();
}
function RountonRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Rounton Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Rounton Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function RountonRoadAudio(){
    iBusAudio.src=firstAudio+"Rounton_Road"+lastAudio;
    iBusAudio.play();
}
function DevonsRoadStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Devons Road Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Devons Road Station";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "inline";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function DevonsRoadStationAudio(){
    iBusAudio.src=firstAudio+"Devons_Road_Station"+lastAudio;
    iBusAudio.play();
}
function CranwellClose(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Cranwell Close";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Cranwell Close";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CranwellCloseAudio(){
    iBusAudio.src=firstAudio+"Cranwell_Close"+lastAudio;
    iBusAudio.play();
}
function FaweStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Fawe Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Fawe Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function FaweStreetAudio(){
    iBusAudio.src=firstAudio+"Fawe_Street"+lastAudio;
    iBusAudio.play();
}
function LangdonParkStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Langdon Park Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Langdon Park Station";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "inline";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LangdonParkStationAudio(){
    iBusAudio.src=firstAudio+"Langdon_Park_Station"+lastAudio;
    iBusAudio.play();
}
function ChrispStreetMarket(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Chrisp Street Market";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Chrisp Street Market";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ChrispStreetMarketAudio(){
    iBusAudio.src=firstAudio+"Chrisp_Street_Market"+lastAudio;
    iBusAudio.play();
}
function BazelyStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Bazely Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Bazely Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BazelyStreetAudio(){
    iBusAudio.src=firstAudio+"Bazely_Street"+lastAudio;
    iBusAudio.play();
}
function BrunswickRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Brunswick Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Brunswick Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BrunswickRoadAudio(){
    iBusAudio.src=firstAudio+"Brunswick_Road"+lastAudio;
    iBusAudio.play();
}
function NutmegLane(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Nutmeg Lane";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Nutmeg Lane";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function NutmegLaneAudio(){
    iBusAudio.src=firstAudio+"Nutmeg_Lane"+lastAudio;
    iBusAudio.play();
}
function AbbottRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Abbott Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Abbott Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function AbbottRoadAudio(){
    iBusAudio.src=firstAudio+"Abbott_Road"+lastAudio;
    iBusAudio.play();
}
function StephensonStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Stephenson Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Stephenson Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StephensonStreetAudio(){
    iBusAudio.src=firstAudio+"Stephenson_Street"+lastAudio;
    iBusAudio.play();
}
function CanningTownStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Canning Town Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Canning Town Station";
        underground.style.display = "inline";
        overground.style.display = "none";
        DLR.style.display = "inline";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CanningTownStationAudio(){
    iBusAudio.src=firstAudio+"Canning_Town_Station"+lastAudio;
    iBusAudio.play();
}
function BlackwallTunnelEastIndiaDockRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="none";
        marquee.style.display = "block";
        marquee.innerHTML = "Blackwall Tunnel / East India Dock Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Blackwall Tunnel / East India Dock Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BlackwallTunnelEastIndiaDockRoadAudio(){
    iBusAudio.src=firstAudio+"Blackwall_Tunnel_East_India_Dock_Road"+lastAudio;
    iBusAudio.play();
}
function BoordStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Boord Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Boord Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BoordStreetAudio(){
    iBusAudio.src=firstAudio+"Boord_Street"+lastAudio;
    iBusAudio.play();
}
function NorthGreenwichStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "North Greenwich Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "North Greenwich Station";
        underground.style.display = "inline";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function NorthGreenwichStationAudio(){
    iBusAudio.src=firstAudio+"North_Greenwich_Station"+lastAudio;
    iBusAudio.play();
}
function MillenniumVillageOvalSquare(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Millennium Village / Oval Square";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Millennium Village / Oval Square";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function MillenniumVillageOvalSquareAudio(){
    iBusAudio.src=firstAudio+"Millennium_Village_Oval_Square"+lastAudio;
    iBusAudio.play();
}
function MillenniumVillageSouth(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Millennium Village South";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Millennium Village South";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function MillenniumVillageSouthAudio(){
    iBusAudio.src=firstAudio+"Millennium_Village_South"+lastAudio;
    iBusAudio.play();
}
function MillenniumLeisureParkWest(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Millennium Leisure Park West";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Millennium Leisure Park West";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function MillenniumLeisureParkWestAudio(){
    iBusAudio.src=firstAudio+"Millennium_Leisure_Park_West"+lastAudio;
    iBusAudio.play();
}
function MillenniumLeisureParkEast(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Millennium Leisure Park East";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Millennium Leisure Park East";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function MillenniumLeisureParkEastAudio(){
    iBusAudio.src=firstAudio+"Millennium_Leisure_Park_East"+lastAudio;
    iBusAudio.play();
}
function CombedaleRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Combedale Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Combedale Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CombedaleRoadAudio(){
    iBusAudio.src=firstAudio+"Combedale_Road"+lastAudio;
    iBusAudio.play();
}
function WestcombeParkStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Westcombe Park Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Westcombe Park Station";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "inline";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WestcombeParkStationAudio(){
    iBusAudio.src=firstAudio+"Westcombe_Park_Station"+lastAudio;
    iBusAudio.play();
}
function KirksideRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Kirkside Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Kirkside Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function KirksideRoadAudio(){
    iBusAudio.src=firstAudio+"Kirkside_Road"+lastAudio;
    iBusAudio.play();
}
function BlackheathRoyalStandard(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Blackheath / Royal Standard";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Blackheath / Royal Standard";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BlackheathRoyalStandardAudio(){
    iBusAudio.src=firstAudio+"Blackheath_Royal_Standard"+lastAudio;
    iBusAudio.play();
}
function StrathedenParade(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Stratheden Parade";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Stratheden Parade";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StrathedenParadeAudio(){
    iBusAudio.src=firstAudio+"Stratheden_Parade"+lastAudio;
    iBusAudio.play();
}
function StrathedenRoadShootersHillRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="none";
        marquee.style.display = "block";
        marquee.innerHTML = "Stratheden Road / Shooters Hill Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Stratheden Road / Shooters Hill Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StrathedenRoadShootersHillRoadAudio(){
    iBusAudio.src=firstAudio+"Stratheden_Road_Shooters_Hill_Road"+lastAudio;
    iBusAudio.play();
}
function StGermansPlace(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "St Germans Place";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "St Germans Place";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StGermansPlaceAudio(){
    iBusAudio.src=firstAudio+"St_Germans_Place"+lastAudio;
    iBusAudio.play();
}
function MontpelierRow(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Montpelier Row";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Montpelier Row";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function MontpelierRowAudio(){
    iBusAudio.src=firstAudio+"Montpelier_Row"+lastAudio;
    iBusAudio.play();
}
function BlackheathStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Blackheath Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Blackheath Station";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "inline";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BlackheathStationAudio(){
    iBusAudio.src=firstAudio+"Blackheath_Station"+lastAudio;
    iBusAudio.play();
}
function BlackheathHospital(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Blackheath Hospital";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Blackheath Hospital";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BlackheathHospitalAudio(){
    iBusAudio.src=firstAudio+"Blackheath_Hospital"+lastAudio;
    iBusAudio.play();
}
function StMargaretsChurchBrandramRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="none";
        marquee.style.display = "block";
        marquee.innerHTML = "St Margaret's Church / Brandram Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "St Margaret's Church / Brandram Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StMargaretsChurchBrandramRoadAudio(){
    iBusAudio.src=firstAudio+"St_Margarets_Church_Brandram_Road"+lastAudio;
    iBusAudio.play();
}
function TheSquirrels(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "The Squirrels";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "The Squirrels";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function TheSquirrelsAudio(){
    iBusAudio.src=firstAudio+"The_Squirrels"+lastAudio;
    iBusAudio.play();
}
function LockmeadRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Lockmead Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Lockmead Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LockmeadRoadAudio(){
    iBusAudio.src=firstAudio+"Lockmead_Road"+lastAudio;
    iBusAudio.play();
}
function LewishamClockTower(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Lewisham Clock Tower";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Lewisham Clock Tower";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LewishamClockTowerAudio(){
    iBusAudio.src=firstAudio+"Lewisham_Clock_Tower"+lastAudio;
    iBusAudio.play();
}
function LewishamStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Lewisham Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Lewisham Station";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "inline";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "inline";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LewishamStationAudio(){
    iBusAudio.src=firstAudio+"Lewisham_Station"+lastAudio;
    iBusAudio.play();
}
function RoyalParade(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Royal Parade";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Royal Parade";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function RoyalParadeAudio(){
    iBusAudio.src=firstAudio+"Royal_Parade"+lastAudio;
    iBusAudio.play();
}
function WesterdaleRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Westerdale Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Westerdale Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WesterdaleRoadAudio(){
    iBusAudio.src=firstAudio+"Westerdale_Road"+lastAudio;
    iBusAudio.play();
}
function KemsingRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Kemsing Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Kemsing Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function KemsingRoadAudio(){
    iBusAudio.src=firstAudio+"Kemsing_Road"+lastAudio;
    iBusAudio.play();
}
function BlackwallLane(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Blackwall Lane";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Blackwall Lane";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BlackwallLaneAudio(){
    iBusAudio.src=firstAudio+"Blackwall_Lane"+lastAudio;
    iBusAudio.play();
}
function MordenWharfRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Morden Wharf Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Morden Wharf Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function MordenWharfRoadAudio(){
    iBusAudio.src=firstAudio+"Morden_Wharf_Road"+lastAudio;
    iBusAudio.play();
}
function CanningTownBusStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Canning Town Bus Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Canning Town Bus Station";
        underground.style.display = "inline";
        overground.style.display = "none";
        DLR.style.display = "inline";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CanningTownBusStationAudio(){
    iBusAudio.src=firstAudio+"Canning_Town_Bus_Station"+lastAudio;
    iBusAudio.play();
}
function BlackwallTunnel(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Blackwall Tunnel";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Blackwall Tunnel";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BlackwallTunnelAudio(){
    iBusAudio.src=firstAudio+"Blackwall_Tunnel"+lastAudio;
    iBusAudio.play();
}
function BowRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Bow Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Bow Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BowRoadAudio(){
    iBusAudio.src=firstAudio+"Bow_Road"+lastAudio;
    iBusAudio.play();
}
function MarshgateLane(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Marshgate Lane";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Marshgate Lane";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function MarshgateLaneAudio(){
    iBusAudio.src=firstAudio+"Marshgate_Lane"+lastAudio;
    iBusAudio.play();
}
function GibbinsRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Gibbins Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Gibbins Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function GibbinsRoadAudio(){
    iBusAudio.src=firstAudio+"Gibbins_Road"+lastAudio;
    iBusAudio.play();
}
function LewishamCentre(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Lewisham Centre";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Lewisham Centre";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LewishamCentreAudio(){
    iBusAudio.src=firstAudio+"Lewisham_Centre"+lastAudio;
    iBusAudio.play();
}
function IsleofDogsPoliceStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Isle of Dogs Police Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Isle of Dogs Police Station";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function IsleofDogsPoliceStationAudio(){
    iBusAudio.src=firstAudio+"Isle_of_Dogs_Police_Station"+lastAudio;
    iBusAudio.play();
}
function IslandGardensStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Island Gardens Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Island Gardens Station";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "inline";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function IslandGardensStationAudio(){
    iBusAudio.src=firstAudio+"Island_Gardens_Station"+lastAudio;
    iBusAudio.play();
}
function EastFerryRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "East Ferry Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "East Ferry Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function EastFerryRoadAudio(){
    iBusAudio.src=firstAudio+"East_Ferry_Road"+lastAudio;
    iBusAudio.play();
}
function MudchuteStationSpindriftAve(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Mudchute Station / Spindrift Ave";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Mudchute Station / Spindrift Ave";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function MudchuteStationSpindriftAveAudio(){
    iBusAudio.src=firstAudio+"Mudchute_Station_Spindrift_Ave"+lastAudio;
    iBusAudio.play();
}
function MudchuteStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Mudchute Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Mudchute Station";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "inline";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function MudchuteStationAudio(){
    iBusAudio.src=firstAudio+"Mudchute_Station"+lastAudio;
    iBusAudio.play();
}
function CrossharbourAsda(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Crossharbour Asda";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Crossharbour Asda";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CrossharbourAsdaAudio(){
    iBusAudio.src=firstAudio+"Crossharbour_Asda"+lastAudio;
    iBusAudio.play();
}
function CrossharbourStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Crossharbour Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Crossharbour Station";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "inline";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CrossharbourStationAudio(){
    iBusAudio.src=firstAudio+"Crossharbour_Station"+lastAudio;
    iBusAudio.play();
}
function HarbourExchangeSquare(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Harbour Exchange Square";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Harbour Exchange Square";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "inline";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HarbourExchangeSquareAudio(){
    iBusAudio.src=firstAudio+"Harbour_Exchange_Square"+lastAudio;
    iBusAudio.play();
}
function SouthQuayStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "South Quay Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "South Quay Station";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "inline";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function SouthQuayStationAudio(){
    iBusAudio.src=firstAudio+"South_Quay_Station"+lastAudio;
    iBusAudio.play();
}
function AdmiralsWay(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Admirals Way";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Admirals Way";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function AdmiralsWayAudio(){
    iBusAudio.src=firstAudio+"Admirals_Way"+lastAudio;
    iBusAudio.play();
}
function MastmakersRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Mastmakers Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Mastmakers Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function MastmakersRoadAudio(){
    iBusAudio.src=firstAudio+"Mastmakers_Road"+lastAudio;
    iBusAudio.play();
}
function HeronQuays(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Heron Quays";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Heron Quays";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HeronQuaysAudio(){
    iBusAudio.src=firstAudio+"Heron_Quays"+lastAudio;
    iBusAudio.play();
}
function CanaryWharfStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Canary Wharf Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Canary Wharf Station";
        underground.style.display = "inline";
        overground.style.display = "none";
        DLR.style.display = "inline";
        ElizabethLine.style.display = "inline";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CanaryWharfStationAudio(){
    iBusAudio.src=firstAudio+"Canary_Wharf_Station"+lastAudio;
    iBusAudio.play();
}
function CanadaSquareSouthCanaryWharfStn(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="none";
        marquee.style.display = "block";
        marquee.innerHTML = "Canada Square South / Canary Wharf Stn";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Canada Square South / Canary Wharf Stn";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CanadaSquareSouthCanaryWharfStnAudio(){
    iBusAudio.src=firstAudio+"Canada_Square_South_Canary_Wharf_Stn"+lastAudio;
    iBusAudio.play();
}
function WestIndiaAvenue(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "West India Avenue";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "West India Avenue";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WestIndiaAvenueAudio(){
    iBusAudio.src=firstAudio+"West_India_Avenue"+lastAudio;
    iBusAudio.play();
}
function WestferryCircusCanaryWharfPier(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="none";
        marquee.style.display = "block";
        marquee.innerHTML = "Westferry Circus / Canary Wharf Pier";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Westferry Circus / Canary Wharf Pier";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WestferryCircusCanaryWharfPierAudio(){
    iBusAudio.src=firstAudio+"Westferry_Circus_Canary_Wharf_Pier"+lastAudio;
    iBusAudio.play();
}
function WestferryStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Westferry Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Westferry Station";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "inline";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WestferryStationAudio(){
    iBusAudio.src=firstAudio+"Westferry_Station"+lastAudio;
    iBusAudio.play();
}
function SalterStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Salter Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Salter Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function SalterStreetAudio(){
    iBusAudio.src=firstAudio+"Salter_Street"+lastAudio;
    iBusAudio.play();
}
function LimehousePoliceStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Limehouse Police Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Limehouse Police Station";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LimehousePoliceStationAudio(){
    iBusAudio.src=firstAudio+"Limehouse_Police_Station"+lastAudio;
    iBusAudio.play();
}
function LimehouseTownHall(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Limehouse Town Hall";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Limehouse Town Hall";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LimehouseTownHallAudio(){
    iBusAudio.src=firstAudio+"Limehouse_Town_Hall"+lastAudio;
    iBusAudio.play();
}
function LowellStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Lowell Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Lowell Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LowellStreetAudio(){
    iBusAudio.src=firstAudio+"Lowell_Street"+lastAudio;
    iBusAudio.play();
}
function LimehouseStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Limehouse Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Limehouse Station";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "inline";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "inline";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LimehouseStationAudio(){
    iBusAudio.src=firstAudio+"Limehouse_Station"+lastAudio;
    iBusAudio.play();
}
function StepneyMethodistChurch(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Stepney Methodist Church";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Stepney Methodist Church";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StepneyMethodistChurchAudio(){
    iBusAudio.src=firstAudio+"Stepney_Methodist_Church"+lastAudio;
    iBusAudio.play();
}
function MarionRichardsonSchool(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Marion Richardson School";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Marion Richardson School";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function MarionRichardsonSchoolAudio(){
    iBusAudio.src=firstAudio+"Marion_Richardson_School"+lastAudio;
    iBusAudio.play();
}
function ExmouthEstate(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Exmouth Estate";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Exmouth Estate";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ExmouthEstateAudio(){
    iBusAudio.src=firstAudio+"Exmouth_Estate"+lastAudio;
    iBusAudio.play();
}
function StMarysStMichaelsChurch(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "St Mary's & St Michael's Church";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "St Mary's & St Michael's Church";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StMarysStMichaelsChurchAudio(){
    iBusAudio.src=firstAudio+"ST_MARY_N_ST_MICHAEL_CHURCH"+lastAudio;
    iBusAudio.play();
}
function WatneyMarket(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Watney Market";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Watney Market";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WatneyMarketAudio(){
    iBusAudio.src=firstAudio+"Watney_Market"+lastAudio;
    iBusAudio.play();
}
function NewRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "New Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "New Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function NewRoadAudio(){
    iBusAudio.src=firstAudio+"New_Road"+lastAudio;
    iBusAudio.play();
}
function HenriquesStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Henriques Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Henriques Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HenriquesStreetAudio(){
    iBusAudio.src=firstAudio+"Henriques_Street"+lastAudio;
    iBusAudio.play();
}
function AldgateEastStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Aldgate East Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Aldgate East Station";
        underground.style.display = "inline";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function AldgateEastStationAudio(){
    iBusAudio.src=firstAudio+"Aldgate_East_Station"+lastAudio;
    iBusAudio.play();
}
function DruidStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Druid Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Druid Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function DruidStreetAudio(){
    iBusAudio.src=firstAudio+"Druid_Street"+lastAudio;
    iBusAudio.play();
}
function AbbeyStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Abbey Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Abbey Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function AbbeyStreetAudio(){
    iBusAudio.src=firstAudio+"Abbey_Street"+lastAudio;
    iBusAudio.play();
}
function GrangeRoadCaledonianMarket(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Grange Road / Caledonian Market";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Grange Road / Caledonian Market";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function GrangeRoadCaledonianMarketAudio(){
    iBusAudio.src=firstAudio+"Grange_Road_Caledonian_Market"+lastAudio;
    iBusAudio.play();
}
function BricklayersArmsTowerBridgeRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="none";
        marquee.style.display = "block";
        marquee.innerHTML = "Bricklayer's Arms / Tower Bridge Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Bricklayer's Arms / Tower Bridge Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BricklayersArmsTowerBridgeRoadAudio(){
    iBusAudio.src=firstAudio+"Bricklayers_Arms_Tower_Bridge_Road"+lastAudio;
    iBusAudio.play();
}
function BricklayersArmsNewKentRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Bricklayer's Arms / New Kent Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Bricklayer's Arms / New Kent Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BricklayersArmsNewKentRoadAudio(){
    iBusAudio.src=firstAudio+"Bricklayers_Arms_New_Kent_Road"+lastAudio;
    iBusAudio.play();
}
function RodneyPlace(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Rodney Place";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Rodney Place";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function RodneyPlaceAudio(){
    iBusAudio.src=firstAudio+"Rodney_Place"+lastAudio;
    iBusAudio.play();
}
function ElephantCastleNewKentRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="none";
        marquee.style.display = "block";
        marquee.innerHTML = "Elephant & Castle / New Kent Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Elephant & Castle / New Kent Road";
        underground.style.display = "inline";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "inline";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ElephantCastleNewKentRoadAudio(){
    iBusAudio.src=firstAudio+"Elephant_N_Castle_New_Kent_Road"+lastAudio;
    iBusAudio.play();
}
function WestmorelandRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Westmoreland Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Westmoreland Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WestmorelandRoadAudio(){
    iBusAudio.src=firstAudio+"Westmoreland_Road"+lastAudio;
    iBusAudio.play();
}
function CamberwellRoadAlbanyRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Camberwell Road / Albany Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Camberwell Road / Albany Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CamberwellRoadAlbanyRoadAudio(){
    iBusAudio.src=firstAudio+"Camberwell_Road_Albany_Road"+lastAudio;
    iBusAudio.play();
}
function BowyerPlace(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Bowyer Place";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Bowyer Place";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BowyerPlaceAudio(){
    iBusAudio.src=firstAudio+"Bowyer_Place"+lastAudio;
    iBusAudio.play();
}
function MedlarStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Medlar Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Medlar Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function MedlarStreetAudio(){
    iBusAudio.src=firstAudio+"Medlar_Street"+lastAudio;
    iBusAudio.play();
}
function DenmarkHillCamberwellGreen(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Denmark Hill / Camberwell Green";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Denmark Hill / Camberwell Green";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function DenmarkHillCamberwellGreenAudio(){
    iBusAudio.src=firstAudio+"Denmark_Hill_Camberwell_Green"+lastAudio;
    iBusAudio.play();
}
function ValmarRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Valmar Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Valmar Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ValmarRoadAudio(){
    iBusAudio.src=firstAudio+"Valmar_Road"+lastAudio;
    iBusAudio.play();
}
function CaldecotRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Caldecot Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Caldecot Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CaldecotRoadAudio(){
    iBusAudio.src=firstAudio+"Caldecot_Road"+lastAudio;
    iBusAudio.play();
}
function LilfordRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Lilford Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Lilford Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LilfordRoadAudio(){
    iBusAudio.src=firstAudio+"Lilford_Road"+lastAudio;
    iBusAudio.play();
}
function LoughboroughJunctionStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Loughborough Junction Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Loughborough Junction Station";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "inline";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LoughboroughJunctionStationAudio(){
    iBusAudio.src=firstAudio+"Loughborough_Junction_Station"+lastAudio;
    iBusAudio.play();
}
function ShakespeareRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Shakespeare Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Shakespeare Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ShakespeareRoadAudio(){
    iBusAudio.src=firstAudio+"Shakespeare_Road"+lastAudio;
    iBusAudio.play();
}
function MoorlandRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Moorland Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Moorland Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function MoorlandRoadAudio(){
    iBusAudio.src=firstAudio+"Moorland_Road"+lastAudio;
    iBusAudio.play();
}
function ElectricLane(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Electric Lane";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Electric Lane";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ElectricLaneAudio(){
    iBusAudio.src=firstAudio+"Electric_Lane"+lastAudio;
    iBusAudio.play();
}
function LambethTownHall(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Lambeth Town Hall";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Lambeth Town Hall";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LambethTownHallAudio(){
    iBusAudio.src=firstAudio+"Lambeth_Town_Hall"+lastAudio;
    iBusAudio.play();
}
function BrixtonStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Brixton Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Brixton Station";
        underground.style.display = "inline";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BrixtonStationAudio(){
    iBusAudio.src=firstAudio+"Brixton_Station"+lastAudio;
    iBusAudio.play();
}
function BrixtonStationNR(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Brixton Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Brixton Station";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "inline";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BrixtonStationNRAudio(){
    iBusAudio.src=firstAudio+"Brixton_Station"+lastAudio;
    iBusAudio.play();
}
function PomfretRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Pomfret Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Pomfret Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function PomfretRoadAudio(){
    iBusAudio.src=firstAudio+"Pomfret_Road"+lastAudio;
    iBusAudio.play();
}
function CamberwellGreen(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Camberwell Green";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Camberwell Green";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CamberwellGreenAudio(){
    iBusAudio.src=firstAudio+"Camberwell_Green"+lastAudio;
    iBusAudio.play();
}
function WyndhamRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Wyndham Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Wyndham Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WyndhamRoadAudio(){
    iBusAudio.src=firstAudio+"Wyndham_Road"+lastAudio;
    iBusAudio.play();
}
function MansellStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Mansell Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Mansell Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function MansellStreetAudio(){
    iBusAudio.src=firstAudio+"Mansell_Street"+lastAudio;
    iBusAudio.play();
}
function ArbourSquare(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Arbour Square";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Arbour Square";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ArbourSquareAudio(){
    iBusAudio.src=firstAudio+"Arbour_Square"+lastAudio;
    iBusAudio.play();
}
function SalmonLane(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Salmon Lane";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Salmon Lane";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function SalmonLaneAudio(){
    iBusAudio.src=firstAudio+"Salmon_Lane"+lastAudio;
    iBusAudio.play();
}
function BurdettRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Burdett Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Burdett Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BurdettRoadAudio(){
    iBusAudio.src=firstAudio+"Burdett_Road"+lastAudio;
    iBusAudio.play();
}
function MillwallPark(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Millwall Park";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Millwall Park";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function MillwallParkAudio(){
    iBusAudio.src=firstAudio+"Millwall_Park"+lastAudio;
    iBusAudio.play();
}
function GeorgeGreensSchool(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "George Green's School";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "George Green's School";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function GeorgeGreensSchoolAudio(){
    iBusAudio.src=firstAudio+"George_Greens_School"+lastAudio;
    iBusAudio.play();
}
function SchoolRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "School Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "School Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function SchoolRoadAudio(){
    iBusAudio.src=firstAudio+"School_Road"+lastAudio;
    iBusAudio.play();
}
function FairfieldsRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Fairfields Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Fairfields Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function FairfieldsRoadAudio(){
    iBusAudio.src=firstAudio+"Fairfields_Road"+lastAudio;
    iBusAudio.play();
}
function TreatyCentre(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Treaty Centre";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Treaty Centre";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function TreatyCentreAudio(){
    iBusAudio.src=firstAudio+"Treaty_Centre"+lastAudio;
    iBusAudio.play();
}
function BellCornerHounslowCivicCentre(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="none";
        marquee.style.display = "block";
        marquee.innerHTML = "Bell Corner / Hounslow Civic Centre";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Bell Corner / Hounslow Civic Centre";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BellCornerHounslowCivicCentreAudio(){
    iBusAudio.src=firstAudio+"Bell_Corner_Hounslow_Civic_Centre"+lastAudio;
    iBusAudio.play();
}
function StMichaelStMartinChurch(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "St Michael & St Martin Church";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "St Michael & St Martin Church";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StMichaelStMartinChurchAudio(){
    iBusAudio.src=firstAudio+"St_Michael_and_St_Martin_Church"+lastAudio;
    iBusAudio.play();
}
function WellingtonRoadNorth(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Wellington Road North";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Wellington Road North";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WellingtonRoadNorthAudio(){
    iBusAudio.src=firstAudio+"Wellington_Road_North"+lastAudio;
    iBusAudio.play();
}
function StPaulsChurch(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "St Paul's Church";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "St Paul's Church";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StPaulsChurchAudio(){
    iBusAudio.src=firstAudio+"St_Pauls_Church"+lastAudio;
    iBusAudio.play();
}
function HounslowWestStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Hounslow West Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Hounslow West Station";
        underground.style.display = "inline";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HounslowWestStationAudio(){
    iBusAudio.src=firstAudio+"Hounslow_West_Station"+lastAudio;
    iBusAudio.play();
}
function GreatWestRoadBasildeneRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Great West Road / Basildene Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Great West Road / Basildene Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function GreatWestRoadBasildeneRoadAudio(){
    iBusAudio.src=firstAudio+"Great_West_Road_Basildene_Road"+lastAudio;
    iBusAudio.play();
}
function HenlysRoundabout(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Henlys Roundabout";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Henlys Roundabout";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HenlysRoundaboutAudio(){
    iBusAudio.src=firstAudio+"Henlys_Roundabout"+lastAudio;
    iBusAudio.play();
}
function GrantleyRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Grantley Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Grantley Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function GrantleyRoadAudio(){
    iBusAudio.src=firstAudio+"Grantley_Road"+lastAudio;
    iBusAudio.play();
}
function TheParkway(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "The Parkway";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "The Parkway";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function TheParkwayAudio(){
    iBusAudio.src=firstAudio+"The_Parkway"+lastAudio;
    iBusAudio.play();
}
function GirlingWay(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Girling Way";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Girling Way";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function GirlingWayAudio(){
    iBusAudio.src=firstAudio+"Girling_Way"+lastAudio;
    iBusAudio.play();
}
function GreatSouthWestRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Great South West Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Great South West Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function GreatSouthWestRoadAudio(){
    iBusAudio.src=firstAudio+"Great_South_West_Road"+lastAudio;
    iBusAudio.play();
}
function HattonCrossStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Hatton Cross Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Hatton Cross Station";
        underground.style.display = "inline";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HattonCrossStationAudio(){
    iBusAudio.src=firstAudio+"Hatton_Cross_Station"+lastAudio;
    iBusAudio.play();
}
function MyrtleAvenue(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Myrtle Avenue";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Myrtle Avenue";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function MyrtleAvenueAudio(){
    iBusAudio.src=firstAudio+"Myrtle_Avenue"+lastAudio;
    iBusAudio.play();
}
function CainsLane(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Cains Lane";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Cains Lane";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CainsLaneAudio(){
    iBusAudio.src=firstAudio+"Cains_Lane"+lastAudio;
    iBusAudio.play();
}
function HazelmereClose(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Hazelmere Close";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Hazelmere Close";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HazelmereCloseAudio(){
    iBusAudio.src=firstAudio+"Hazelmere_Close"+lastAudio;
    iBusAudio.play();
}
function WestRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "West Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "West Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WestRoadAudio(){
    iBusAudio.src=firstAudio+"West_Road"+lastAudio;
    iBusAudio.play();
}
function BedfontClose(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Bedfont Close";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Bedfont Close";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BedfontCloseAudio(){
    iBusAudio.src=firstAudio+"Bedfont_Close"+lastAudio;
    iBusAudio.play();
}
function SpinneyDrive(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Spinney Drive";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Spinney Drive";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function SpinneyDriveAudio(){
    iBusAudio.src=firstAudio+"Spinney_Drive"+lastAudio;
    iBusAudio.play();
}
function BeaconRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Beacon Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Beacon Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BeaconRoadAudio(){
    iBusAudio.src=firstAudio+"Beacon_Road"+lastAudio;
    iBusAudio.play();
}
function LongLane(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Long Lane";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Long Lane";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LongLaneAudio(){
    iBusAudio.src=firstAudio+"Long_Lane"+lastAudio;
    iBusAudio.play();
}
function BedfontRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Bedfont Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Bedfont Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BedfontRoadAudio(){
    iBusAudio.src=firstAudio+"Bedfont_Road"+lastAudio;
    iBusAudio.play();
}
function EverestRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Everest Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Everest Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function EverestRoadAudio(){
    iBusAudio.src=firstAudio+"Everest_Road"+lastAudio;
    iBusAudio.play();
}
function CordeliaRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Cordelia Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Cordelia Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CordeliaRoadAudio(){
    iBusAudio.src=firstAudio+"Cordelia_Road"+lastAudio;
    iBusAudio.play();
}
function ViscountRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Viscount Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Viscount Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ViscountRoadAudio(){
    iBusAudio.src=firstAudio+"Viscount_Road"+lastAudio;
    iBusAudio.play();
}
function StAnnesAvenue(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "St Anne's Avenue";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "St Anne's Avenue";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StAnnesAvenueAudio(){
    iBusAudio.src=firstAudio+"St_Annes_Avenue"+lastAudio;
    iBusAudio.play();
}
function ScotsClose(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Scots Close";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Scots Close";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ScotsCloseAudio(){
    iBusAudio.src=firstAudio+"Scots_Close"+lastAudio;
    iBusAudio.play();
}
function AshfordHospital(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Ashford Hospital";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Ashford Hospital";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function AshfordHospitalAudio(){
    iBusAudio.src=firstAudio+"Ashford_Hospital"+lastAudio;
    iBusAudio.play();
}
function TownLane(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Town Lane";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Town Lane";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function TownLaneAudio(){
    iBusAudio.src=firstAudio+"Town_Lane"+lastAudio;
    iBusAudio.play();
}
function KenilworthRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Kenilworth Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Kenilworth Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function KenilworthRoadAudio(){
    iBusAudio.src=firstAudio+"Kenilworth_Road"+lastAudio;
    iBusAudio.play();
}
function ShortwoodAvenue(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Shortwood Avenue";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Shortwood Avenue";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ShortwoodAvenueAudio(){
    iBusAudio.src=firstAudio+"Shortwood_Avenue"+lastAudio;
    iBusAudio.play();
}
function CrookedBilletRoundabout(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Crooked Billet Roundabout";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Crooked Billet Roundabout";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CrookedBilletRoundaboutAudio(){
    iBusAudio.src=firstAudio+"Crooked_Billet_Roundabout"+lastAudio;
    iBusAudio.play();
}
function KingstonRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Kingston Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Kingston Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function KingstonRoadAudio(){
    iBusAudio.src=firstAudio+"Kingston_Road"+lastAudio;
    iBusAudio.play();
}
function StainesBusStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Staines Bus Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Staines Bus Station";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StainesBusStationAudio(){
    iBusAudio.src=firstAudio+"Staines_Bus_Station"+lastAudio;
    iBusAudio.play();
}
function GatewaySurgicalCentre(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Gateway Surgical Centre";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Gateway Surgical Centre";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function GatewaySurgicalCentreAudio(){
    iBusAudio.src=firstAudio+"Gateway_Surgical_Centre"+lastAudio;
    iBusAudio.play();
}
function NewhamUniversityHospMainReception(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="none";
        marquee.style.display = "block";
        marquee.innerHTML = "Newham University Hosp Main Reception";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Newham University Hosp Main Reception";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function NewhamUniversityHospMainReceptionAudio(){
    iBusAudio.src=firstAudio+"Newham_University_Hosp_Main_Reception"+lastAudio;
    iBusAudio.play();
}
function NewhamUniversityHospEmergencyDept(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="none";
        marquee.style.display = "block";
        marquee.innerHTML = "Newham University Hosp Emergency Dept";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Newham University Hosp Emergency Dept";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function NewhamUniversityHospEmergencyDeptAudio(){
    iBusAudio.src=firstAudio+"Newham_University_Hosp_Emergency_Dept"+lastAudio;
    iBusAudio.play();
}
function NewhamUniversityHospNewVicCollege(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="none";
        marquee.style.display = "block";
        marquee.innerHTML = "Newham University Hosp / New Vic College";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Newham University Hosp / New Vic College";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function NewhamUniversityHospNewVicCollegeAudio(){
    iBusAudio.src=firstAudio+"Newham_University_Hosp_New_Vic_College"+lastAudio;
    iBusAudio.play();
}
function WigstonRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Wigston Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Wigston Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WigstonRoadAudio(){
    iBusAudio.src=firstAudio+"Wigston_Road"+lastAudio;
    iBusAudio.play();
}
function PlaistowPrinceRegentLane(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Plaistow / Prince Regent Lane";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Plaistow / Prince Regent Lane";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function PlaistowPrinceRegentLaneAudio(){
    iBusAudio.src=firstAudio+"Plaistow_Prince_Regent_Lane"+lastAudio;
    iBusAudio.play();
}
function PlaistowPoliceStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Plaistow Police Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Plaistow Police Station";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function PlaistowPoliceStationAudio(){
    iBusAudio.src=firstAudio+"Plaistow_Police_Station"+lastAudio;
    iBusAudio.play();
}
function BalaamStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Balaam Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Balaam Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BalaamStreetAudio(){
    iBusAudio.src=firstAudio+"Balaam_Street"+lastAudio;
    iBusAudio.play();
}
function ChargeableLane(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Chargeable Lane";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Chargeable Lane";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ChargeableLaneAudio(){
    iBusAudio.src=firstAudio+"Chargeable_Lane"+lastAudio;
    iBusAudio.play();
}
function CroydonRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Croydon Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Croydon Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CroydonRoadAudio(){
    iBusAudio.src=firstAudio+"Croydon_Road"+lastAudio;
    iBusAudio.play();
}
function RokebySchool(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Rokeby School";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Rokeby School";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function RokebySchoolAudio(){
    iBusAudio.src=firstAudio+"Rokeby_School"+lastAudio;
    iBusAudio.play();
}
function HermitRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Hermit Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Hermit Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HermitRoadAudio(){
    iBusAudio.src=firstAudio+"Rokeby_School"+lastAudio;
    iBusAudio.play();
}
function MalmesburyTerrace(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Malmesbury Terrace";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Malmesbury Terrace";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function MalmesburyTerraceAudio(){
    iBusAudio.src=firstAudio+"Malmesbury_Terrace"+lastAudio;
    iBusAudio.play();
}
function StarPrimarySchool(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Star Primary School";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Star Primary School";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StarPrimarySchoolAudio(){
    iBusAudio.src=firstAudio+"Star_Primary_School"+lastAudio;
    iBusAudio.play();
}
function StarLaneStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Star Lane Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Star Lane Station";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "inline";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StarLaneStationAudio(){
    iBusAudio.src=firstAudio+"Star_Primary_School"+lastAudio;
    iBusAudio.play();
}
function GodboldRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Godbold Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Godbold Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function GodboldRoadAudio(){
    iBusAudio.src=firstAudio+"Godbold_Road"+lastAudio;
    iBusAudio.play();
}
function WestHamStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "West Ham Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "West Ham Station";
        underground.style.display = "inline";
        overground.style.display = "none";
        DLR.style.display = "inline";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "inline";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WestHamStationAudio(){
    iBusAudio.src=firstAudio+"West_Ham_Station"+lastAudio;
    iBusAudio.play();
}
function LeywickStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Leywick Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Leywick Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LeywickStreetAudio(){
    iBusAudio.src=firstAudio+"Leywick_Street"+lastAudio;
    iBusAudio.play();
}
function MitreRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Mitre Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Mitre Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function MitreRoadAudio(){
    iBusAudio.src=firstAudio+"Mitre_Road"+lastAudio;
    iBusAudio.play();
}
function ChurchStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Church Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Church Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ChurchStreetAudio(){
    iBusAudio.src=firstAudio+"Church_Street"+lastAudio;
    iBusAudio.play();
}
function PaulStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Paul Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Paul Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function PaulStreetAudio(){
    iBusAudio.src=firstAudio+"Paul_Street"+lastAudio;
    iBusAudio.play();
}
function StratfordBusStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Stratford Bus Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Stratford Bus Station";
        underground.style.display = "inline";
        overground.style.display = "inline";
        DLR.style.display = "inline";
        ElizabethLine.style.display = "inline";
        tfl_National_Rail_logo.style.display = "inline";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StratfordBusStationAudio(){
    iBusAudio.src=firstAudio+"Stratford_Bus_Station"+lastAudio;
    iBusAudio.play();
}
function StratfordHighStCarpentersRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="none";
        marquee.style.display = "block";
        marquee.innerHTML = "Stratford High St / Carpenters Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Stratford High St / Carpenters Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StratfordHighStCarpentersRoadAudio(){
    iBusAudio.src=firstAudio+"Stratford_High_St_Carpenters_Road"+lastAudio;
    iBusAudio.play();
}
function WatersideClose(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Waterside Close";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Waterside Close";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WatersideCloseAudio(){
    iBusAudio.src=firstAudio+"Waterside_Close"+lastAudio;
    iBusAudio.play();
}
function WickLane(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Wick Lane";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Wick Lane";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WickLaneAudio(){
    iBusAudio.src=firstAudio+"Wick_Lane"+lastAudio;
    iBusAudio.play();
}
function WansbeckRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Wansbeck Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Wansbeck Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WansbeckRoadAudio(){
    iBusAudio.src=firstAudio+"Wansbeck_Road"+lastAudio;
    iBusAudio.play();
}
function RothburyRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Rothbury Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Rothbury Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function RothburyRoadAudio(){
    iBusAudio.src=firstAudio+"Rothbury_Road"+lastAudio;
    iBusAudio.play();
}
function HackneyWickStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Hackney Wick Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Hackney Wick Station";
        underground.style.display = "none";
        overground.style.display = "inline";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HackneyWickStationAudio(){
    iBusAudio.src=firstAudio+"Hackney_Wick_Station"+lastAudio;
    iBusAudio.play();
}
function BerkshireRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Berkshire Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Berkshire Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BerkshireRoadAudio(){
    iBusAudio.src=firstAudio+"Berkshire_Road"+lastAudio;
    iBusAudio.play();
}
function OsborneRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Osborne Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Osborne Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function OsborneRoadAudio(){
    iBusAudio.src=firstAudio+"Osborne_Road"+lastAudio;
    iBusAudio.play();
}
function TrowbridgeEstate(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Trowbridge Estate";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Trowbridge Estate";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function TrowbridgeEstateAudio(){
    iBusAudio.src=firstAudio+"Trowbridge_Estate"+lastAudio;
    iBusAudio.play();
}
function CrowfootClose(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Crowfoot Close";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Crowfoot Close";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CrowfootCloseAudio(){
    iBusAudio.src=firstAudio+"Crowfoot_Close"+lastAudio;
    iBusAudio.play();
}
function PoplarClose(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Poplar Close";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Poplar Close";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function PoplarCloseAudio(){
    iBusAudio.src=firstAudio+"Poplar_Close"+lastAudio;
    iBusAudio.play();
}
function KingsmeadEstate(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Kingsmead Estate";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Kingsmead Estate";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function KingsmeadEstateAudio(){
    iBusAudio.src=firstAudio+"Kingsmead_Estate"+lastAudio;
    iBusAudio.play();
}
function MarshHill(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Marsh Hill";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Marsh Hill";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function MarshHillAudio(){
    iBusAudio.src=firstAudio+"Marsh_Hill"+lastAudio;
    iBusAudio.play();
}
function BrooksbysWalkHomertonStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="none";
        marquee.style.display = "block";
        marquee.innerHTML = "Brooksby's Walk / Homerton Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Brooksby's Walk / Homerton Station";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BrooksbysWalkHomertonStationAudio(){
    iBusAudio.src=firstAudio+"Brooksbys_Walk_Homerton_Station"+lastAudio;
    iBusAudio.play();
}
function HomertonHospital(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Homerton Hospital";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Homerton Hospital";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HomertonHospitalAudio(){
    iBusAudio.src=firstAudio+"Homerton_Hospital"+lastAudio;
    iBusAudio.play();
}
function BanisterHouse(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Banister House";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Banister House";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BanisterHouseAudio(){
    iBusAudio.src=firstAudio+"Banister_House"+lastAudio;
    iBusAudio.play();
}
function PonsfordStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Ponsford Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Ponsford Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function PonsfordStreetAudio(){
    iBusAudio.src=firstAudio+"Ponsford_Street"+lastAudio;
    iBusAudio.play();
}
function TrelawneyEstate(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Trelawney Estate";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Trelawney Estate";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function TrelawneyEstateAudio(){
    iBusAudio.src=firstAudio+"Trelawney_Estate"+lastAudio;
    iBusAudio.play();
}
function HackneyTownHall(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Hackney Town Hall";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Hackney Town Hall";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HackneyTownHallAudio(){
    iBusAudio.src=firstAudio+"Hackney_Town_Hall"+lastAudio;
    iBusAudio.play();
}
function HackneyCentralStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Hackney Central Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Hackney Central Station";
        underground.style.display = "none";
        overground.style.display = "inline";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HackneyCentralStationAudio(){
    iBusAudio.src=firstAudio+"Hackney_Central_Station"+lastAudio;
    iBusAudio.play();
}
function AmhurstRoadHackneyDownsStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="none";
        marquee.style.display = "block";
        marquee.innerHTML = "Amhurst Road / Hackney Downs Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Amhurst Road / Hackney Downs Station";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function AmhurstRoadHackneyDownsStationAudio(){
    iBusAudio.src=firstAudio+"Amhurst_Road_Hackney_Downs_Station"+lastAudio;
    iBusAudio.play();
}
function AmhurstRoadDalstonLane(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Amhurst Road / Dalston Lane";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Amhurst Road / Dalston Lane";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function AmhurstRoadDalstonLaneAudio(){
    iBusAudio.src=firstAudio+"Amhurst_Road_Dalston_Lane"+lastAudio;
    iBusAudio.play();
}
function SandringhamRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Sandringham Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Sandringham Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function SandringhamRoadAudio(){
    iBusAudio.src=firstAudio+"Sandringham_Road"+lastAudio;
    iBusAudio.play();
}
function DownsParkRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Downs Park Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Downs Park Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function DownsParkRoadAudio(){
    iBusAudio.src=firstAudio+"Downs_Park_Road"+lastAudio;
    iBusAudio.play();
}
function ShacklewellLane(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Shacklewell Lane";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Shacklewell Lane";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ShacklewellLaneAudio(){
    iBusAudio.src=firstAudio+"Shacklewell_Lane"+lastAudio;
    iBusAudio.play();
}
function RectoryRoadDownsRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Rectory Road / Downs Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Rectory Road / Downs Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function RectoryRoadDownsRoadAudio(){
    iBusAudio.src=firstAudio+"Rectory_Road_Downs_Road"+lastAudio;
    iBusAudio.play();
}
function ManseRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Manse Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Manse Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ManseRoadAudio(){
    iBusAudio.src=firstAudio+"Manse_Road"+lastAudio;
    iBusAudio.play();
}
function StokeNewingtonPoliceStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Stoke Newington Police Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Stoke Newington Police Station";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StokeNewingtonPoliceStationAudio(){
    iBusAudio.src=firstAudio+"Stoke_Newington_Police_Station"+lastAudio;
    iBusAudio.play();
}
function BrookeRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Brooke Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Brooke Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BrookeRoadAudio(){
    iBusAudio.src=firstAudio+"Brooke_Road"+lastAudio;
    iBusAudio.play();
}
function StokeNewingtonHighStGarnhamStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="none";
        marquee.style.display = "block";
        marquee.innerHTML = "Stoke Newington High St / Garnham Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Stoke Newington High St / Garnham Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StokeNewingtonHighStGarnhamStreetAudio(){
    iBusAudio.src=firstAudio+"Stoke_Newington_High_St_Garnham_Street"+lastAudio;
    iBusAudio.play();
}
function NorthwoldRoadStokeNewingtonCommon(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="none";
        marquee.style.display = "block";
        marquee.innerHTML = "Northwold Road / Stoke Newington Common";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Northwold Road / Stoke Newington Common";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function NorthwoldRoadStokeNewingtonCommonAudio(){
    iBusAudio.src=firstAudio+"Northwold_Road_Stoke_Newington_Common"+lastAudio;
    iBusAudio.play();
}
function StokeNewingtonCommon(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Stoke Newington Common";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Stoke Newington Common";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StokeNewingtonCommonAudio(){
    iBusAudio.src=firstAudio+"Stoke_Newington_Common"+lastAudio;
    iBusAudio.play();
}
function RectoryRoadBrookeRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Rectory Road / Brooke Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Rectory Road / Brooke Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function RectoryRoadBrookeRoadAudio(){
    iBusAudio.src=firstAudio+"Rectory_Road_Brooke_Road"+lastAudio;
    iBusAudio.play();
}
function DownsRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Downs Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Downs Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function DownsRoadAudio(){
    iBusAudio.src=firstAudio+"Downs_Road"+lastAudio;
    iBusAudio.play();
}
function HackneyDownsStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Hackney Downs Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Hackney Downs Station";
        underground.style.display = "none";
        overground.style.display = "inline";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "inline";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HackneyDownsStationAudio(){
    iBusAudio.src=firstAudio+"Hackney_Downs_Station"+lastAudio;
    iBusAudio.play();
}
function MorningLaneTrelawneyEstate(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Morning Lane / Trelawney Estate";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Morning Lane / Trelawney Estate";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function MorningLaneTrelawneyEstateAudio(){
    iBusAudio.src=firstAudio+"Morning_Lane_Trelawney_Estate"+lastAudio;
    iBusAudio.play();
}
function HomertonTerrace(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Homerton Terrace";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Homerton Terrace";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HomertonTerraceAudio(){
    iBusAudio.src=firstAudio+"Homerton_Terrace"+lastAudio;
    iBusAudio.play();
}
function FennStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Fenn Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Fenn Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function FennStreetAudio(){
    iBusAudio.src=firstAudio+"Fenn_Street"+lastAudio;
    iBusAudio.play();
}
function HomertonHospitalHomertonRow(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Homerton Hospital / Homerton Row";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Homerton Hospital / Homerton Row";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HomertonHospitalHomertonRowAudio(){
    iBusAudio.src=firstAudio+"Homerton_Hospital_Homerton_Row"+lastAudio;
    iBusAudio.play();
}
function HomertonHospitalWardleStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Homerton Hospital / Wardle Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Homerton Hospital / Wardle Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HomertonHospitalWardleStreetAudio(){
    iBusAudio.src=firstAudio+"Homerton_Hospital_Wardle_Street"+lastAudio;
    iBusAudio.play();
}
function AdleyStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Adley Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Adley Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function AdleyStreetAudio(){
    iBusAudio.src=firstAudio+"Adley_Street"+lastAudio;
    iBusAudio.play();
}
function LeeConservancyRoadPoplarClose(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="none";
        marquee.style.display = "block";
        marquee.innerHTML = "Lee Conservancy Road / Poplar Close";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Lee Conservancy Road / Poplar Close";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LeeConservancyRoadPoplarCloseAudio(){
    iBusAudio.src=firstAudio+"Lee_Conservancy_Road_Poplar_Close"+lastAudio;
    iBusAudio.play();
}
function MonierRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Monier Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Monier Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function MonierRoadAudio(){
    iBusAudio.src=firstAudio+"Monier_Road"+lastAudio;
    iBusAudio.play();
}
function StratfordBroadway(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Stratford Broadway";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Stratford Broadway";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StratfordBroadwayAudio(){
    iBusAudio.src=firstAudio+"Stratford_Broadway"+lastAudio;
    iBusAudio.play();
}
function BarnbyStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Barnby Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Barnby Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BarnbyStreetAudio(){
    iBusAudio.src=firstAudio+"Barnby_Street"+lastAudio;
    iBusAudio.play();
}
function CorporationStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Corporation Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Corporation Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CorporationStreetAudio(){
    iBusAudio.src=firstAudio+"Corporation_Street"+lastAudio;
    iBusAudio.play();
}
function StarLaneStnStarPrimarySch(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Star Lane Stn / Star Primary Sch";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Star Lane Stn / Star Primary Sch";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StarLaneStnStarPrimarySchAudio(){
    iBusAudio.src=firstAudio+"Star_Lane_Station_Star_Primary_School"+lastAudio;
    iBusAudio.play();
}
function ExningRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Exning Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Exning Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ExningRoadAudio(){
    iBusAudio.src=firstAudio+"Exning_Road"+lastAudio;
    iBusAudio.play();
}
function KhartoumRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Khartoum Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Khartoum Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function KhartoumRoadAudio(){
    iBusAudio.src=firstAudio+"Khartoum_Road"+lastAudio;
    iBusAudio.play();
}
function BeaumontRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Beaumont Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Beaumont Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BeaumontRoadAudio(){
    iBusAudio.src=firstAudio+"Beaumont_Road"+lastAudio;
    iBusAudio.play();
}
function MilnerRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Milner Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Milner Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function MilnerRoadAudio(){
    iBusAudio.src=firstAudio+"Milner_Road"+lastAudio;
    iBusAudio.play();
}
function WoodbinePlace(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Woodbine Place";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Woodbine Place";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WoodbinePlaceAudio(){
    iBusAudio.src=firstAudio+"Woodbine_Place"+lastAudio;
    iBusAudio.play();
}
function WansteadHighStWansteadStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="none";
        marquee.style.display = "block";
        marquee.innerHTML = "Wanstead High St / Wanstead Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Wanstead High St / Wanstead Station";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WansteadHighStWansteadStationAudio(){
    iBusAudio.src=firstAudio+"Wanstead_High_Street_Wanstead_Station"+lastAudio;
    iBusAudio.play();
}
function WansteadStationGeorgeGreen(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Wanstead Station / George Green";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Wanstead Station / George Green";
        underground.style.display = "inline";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WansteadStationGeorgeGreenAudio(){
    iBusAudio.src=firstAudio+"Wanstead_Station_George_Green"+lastAudio;
    iBusAudio.play();
}
function FelsteadRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Felstead Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Felstead Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function FelsteadRoadAudio(){
    iBusAudio.src=firstAudio+"Felstead_Road"+lastAudio;
    iBusAudio.play();
}
function BushRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Bush Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Bush Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BushRoadAudio(){
    iBusAudio.src=firstAudio+"Bush_Road"+lastAudio;
    iBusAudio.play();
}
function CranbourneRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Cranbourne Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Cranbourne Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CranbourneRoadAudio(){
    iBusAudio.src=firstAudio+"Cranbourne_Road"+lastAudio;
    iBusAudio.play();
}
function BerkeleyRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Berkeley Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Berkeley Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BerkeleyRoadAudio(){
    iBusAudio.src=firstAudio+"Berkeley_Road"+lastAudio;
    iBusAudio.play();
}
function RuskinAvenue(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Ruskin Avenue";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Ruskin Avenue";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function RuskinAvenueAudio(){
    iBusAudio.src=firstAudio+"Ruskin_Avenue"+lastAudio;
    iBusAudio.play();
}
function ShelleyAvenue(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Shelley Avenue";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Shelley Avenue";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ShelleyAvenueAudio(){
    iBusAudio.src=firstAudio+"Shelley_Avenue"+lastAudio;
    iBusAudio.play();
}
function GladstoneAvenue(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Gladstone Avenue";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Gladstone Avenue";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function GladstoneAvenueAudio(){
    iBusAudio.src=firstAudio+"Gladstone_Avenue"+lastAudio;
    iBusAudio.play();
}
function EastHamStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "East Ham Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "East Ham Station";
        underground.style.display = "inline";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function EastHamStationAudio(){
    iBusAudio.src=firstAudio+"East_Ham_Station"+lastAudio;
    iBusAudio.play();
}
function BendishRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Bendish Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Bendish Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BendishRoadAudio(){
    iBusAudio.src=firstAudio+"Bendish_Road"+lastAudio;
    iBusAudio.play();
}
function RonLeightonWay(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Ron Leighton Way";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Ron Leighton Way";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function RonLeightonWayAudio(){
    iBusAudio.src=firstAudio+"Ron_Leighton_Way"+lastAudio;
    iBusAudio.play();
}
function NewhamTownHall(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Newham Town Hall";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Newham Town Hall";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function NewhamTownHallAudio(){
    iBusAudio.src=firstAudio+"Newham_Town_Hall"+lastAudio;
    iBusAudio.play();
}
function MarketStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Market Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Market Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function MarketStreetAudio(){
    iBusAudio.src=firstAudio+"Market_Street"+lastAudio;
    iBusAudio.play();
}
function EastHamCentralPark(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "East Ham / Central Park";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "East Ham / Central Park";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function EastHamCentralParkAudio(){
    iBusAudio.src=firstAudio+"East_Ham_Central_Park"+lastAudio;
    iBusAudio.play();
}
function VicarageLane(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Vicarage Lane";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Vicarage Lane";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function VicarageLaneAudio(){
    iBusAudio.src=firstAudio+"Vicarage_Lane"+lastAudio;
    iBusAudio.play();
}
function EastHamFireStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "East Ham Fire Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "East Ham Fire Station";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function EastHamFireStationAudio(){
    iBusAudio.src=firstAudio+"East_Ham_Fire_Station"+lastAudio;
    iBusAudio.play();
}
function LonsdaleAvenue(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Lonsdale Avenue";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Lonsdale Avenue";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LonsdaleAvenueAudio(){
    iBusAudio.src=firstAudio+"Lonsdale_Avenue"+lastAudio;
    iBusAudio.play();
}
function AlbatrossClose(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Albatross Close";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Albatross Close";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function AlbatrossCloseAudio(){
    iBusAudio.src=firstAudio+"Albatross_Close"+lastAudio;
    iBusAudio.play();
}
function TollgateRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Tollgate Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Tollgate Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function TollgateRoadAudio(){
    iBusAudio.src=firstAudio+"Tollgate_Road"+lastAudio;
    iBusAudio.play();
}
function BecktonBusStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Beckton Bus Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Beckton Bus Station";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BecktonBusStationAudio(){
    iBusAudio.src=firstAudio+"Beckton_Bus_Station"+lastAudio;
    iBusAudio.play();
}
function MortimerRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Mortimer Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Mortimer Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function MortimerRoadAudio(){
    iBusAudio.src=firstAudio+"Mortimer_Road"+lastAudio;
    iBusAudio.play();
}
function MarlowRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Marlow Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Marlow Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function MarlowRoadAudio(){
    iBusAudio.src=firstAudio+"Marlow_Road"+lastAudio;
    iBusAudio.play();
}
function TilburyRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Tilbury Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Tilbury Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function TilburyRoadAudio(){
    iBusAudio.src=firstAudio+"Tilbury_Road"+lastAudio;
    iBusAudio.play();
}
function KemptonRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Kempton Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Kempton Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function KemptonRoadAudio(){
    iBusAudio.src=firstAudio+"Kempton_Road"+lastAudio;
    iBusAudio.play();
}
function CaledonRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Caledon Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Caledon Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CaledonRoadAudio(){
    iBusAudio.src=firstAudio+"Caledon_Road"+lastAudio;
    iBusAudio.play();
}
function CambridgePark(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Cambridge Park";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Cambridge Park";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CambridgeParkAudio(){
    iBusAudio.src=firstAudio+"Cambridge_Park"+lastAudio;
    iBusAudio.play();
}
function WansteadStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Wanstead Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Wanstead Station";
        underground.style.display = "inline";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WansteadStationAudio(){
    iBusAudio.src=firstAudio+"Wanstead_Station"+lastAudio;
    iBusAudio.play();
}
function CoveleesWall(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Covelees Wall";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Covelees Wall";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CoveleesWallAudio(){
    iBusAudio.src=firstAudio+"Covelees_Wall"+lastAudio;
    iBusAudio.play();
}
function WinsorParkEstate(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Winsor Park Estate";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Winsor Park Estate";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WinsorParkEstateAudio(){
    iBusAudio.src=firstAudio+"Winsor_Park_Estate"+lastAudio;
    iBusAudio.play();
}
function HorseLeaze(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Horse Leaze";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Horse Leaze";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HorseLeazeAudio(){
    iBusAudio.src=firstAudio+"Horse_Leaze"+lastAudio;
    iBusAudio.play();
}
function DevallsClose(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Devalls Close";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Devalls Close";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function DevallsCloseAudio(){
    iBusAudio.src=firstAudio+"Devalls_Close"+lastAudio;
    iBusAudio.play();
}
function CyprusStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Cyprus Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Cyprus Station";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "inline";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CyprusStationAudio(){
    iBusAudio.src=firstAudio+"Cyprus_Station"+lastAudio;
    iBusAudio.play();
}
function StraitRoadEastHamManorWay(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Strait Road / East Ham Manor Way";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Strait Road / East Ham Manor Way";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StraitRoadEastHamManorWayAudio(){
    iBusAudio.src=firstAudio+"Strait_Road_East_Ham_Manor_Way"+lastAudio;
    iBusAudio.play();
}
function RenfrewClose(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Renfrew Close";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Renfrew Close";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function RenfrewCloseAudio(){
    iBusAudio.src=firstAudio+"Renfrew_Close"+lastAudio;
    iBusAudio.play();
}
function BecktonParkStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Beckton Park Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Beckton Park Station";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "inline";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BecktonParkStationAudio(){
    iBusAudio.src=firstAudio+"Beckton_Park_Station"+lastAudio;
    iBusAudio.play();
}
function StraitRoadStansfeldRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Strait Road / Stansfeld Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Strait Road / Stansfeld Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StraitRoadStansfeldRoadAudio(){
    iBusAudio.src=firstAudio+"Strait_Road_Stansfeld_Road"+lastAudio;
    iBusAudio.play();
}
function JakeRussellWalk(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Jake Russell Walk";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Jake Russell Walk";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function JakeRussellWalkAudio(){
    iBusAudio.src=firstAudio+"Jake_Russell_Walk"+lastAudio;
    iBusAudio.play();
}
function WillThornePavilion(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Will Thorne Pavilion";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Will Thorne Pavilion";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WillThornePavilionAudio(){
    iBusAudio.src=firstAudio+"Will_Thorne_Pavilion"+lastAudio;
    iBusAudio.play();
}
function FulmerRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Fulmer Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Fulmer Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function FulmerRoadAudio(){
    iBusAudio.src=firstAudio+"Fulmer_Road"+lastAudio;
    iBusAudio.play();
}
function SullivanAvenue(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Sullivan Avenue";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Sullivan Avenue";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function SullivanAvenueAudio(){
    iBusAudio.src=firstAudio+"Sullivan_Avenue"+lastAudio;
    iBusAudio.play();
}
function ColmanRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Colman Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Colman Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ColmanRoadAudio(){
    iBusAudio.src=firstAudio+"Colman_Road"+lastAudio;
    iBusAudio.play();
}
function BennettRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Bennett Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Bennett Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BennettRoadAudio(){
    iBusAudio.src=firstAudio+"Bennett_Road"+lastAudio;
    iBusAudio.play();
}
function BramptonManorSchool(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Brampton Manor School";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Brampton Manor School";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BramptonManorSchoolAudio(){
    iBusAudio.src=firstAudio+"Brampton_Manor_School"+lastAudio;
    iBusAudio.play();
}
function NewCityRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "New City Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "New City Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function NewCityRoadAudio(){
    iBusAudio.src=firstAudio+"New_City_Road"+lastAudio;
    iBusAudio.play();
}
function WilsonRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Wilson Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Wilson Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WilsonRoadAudio(){
    iBusAudio.src=firstAudio+"Wilson_Road"+lastAudio;
    iBusAudio.play();
}
function BarkingRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Barking Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Barking Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BarkingRoadAudio(){
    iBusAudio.src=firstAudio+"Barking_Road"+lastAudio;
    iBusAudio.play();
}
function UptonParkBoleyn(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Upton Park / Boleyn";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Upton Park / Boleyn";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function UptonParkBoleynAudio(){
    iBusAudio.src=firstAudio+"Upton_Park_Boleyn"+lastAudio;
    iBusAudio.play();
}
function TudorRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Tudor Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Tudor Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function TudorRoadAudio(){
    iBusAudio.src=firstAudio+"Tudor_Road"+lastAudio;
    iBusAudio.play();
}
function UptonParkStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Upton Park Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Upton Park Station";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function UptonParkStationAudio(){
    iBusAudio.src=firstAudio+"Upton_Park_Station"+lastAudio;
    iBusAudio.play();
}
function PlashetRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Plashet Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Plashet Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function PlashetRoadAudio(){
    iBusAudio.src=firstAudio+"Plashet_Road"+lastAudio;
    iBusAudio.play();
}
function WashingtonRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Washington Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Washington Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WashingtonRoadAudio(){
    iBusAudio.src=firstAudio+"Washington_Road"+lastAudio;
    iBusAudio.play();
}
function WalpoleRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Walpole Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Walpole Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WalpoleRoadAudio(){
    iBusAudio.src=firstAudio+"Walpole_Road"+lastAudio;
    iBusAudio.play();
}
function KatherineRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Katherine Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Katherine Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function KatherineRoadAudio(){
    iBusAudio.src=firstAudio+"Katherine_Road"+lastAudio;
    iBusAudio.play();
}
function ShrewsburyRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Shrewsbury Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Shrewsbury Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ShrewsburyRoadAudio(){
    iBusAudio.src=firstAudio+"Shrewsbury_Road"+lastAudio;
    iBusAudio.play();
}
function PlashetSchool(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Plashet School";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Plashet School";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function PlashetSchoolAudio(){
    iBusAudio.src=firstAudio+"Plashet_School"+lastAudio;
    iBusAudio.play();
}
function WhitfieldRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Whitfield Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Whitfield Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WhitfieldRoadAudio(){
    iBusAudio.src=firstAudio+"Whitfield_Road"+lastAudio;
    iBusAudio.play();
}
function GreenStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Green Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Green Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function GreenStreetAudio(){
    iBusAudio.src=firstAudio+"Green_Street"+lastAudio;
    iBusAudio.play();
}
function QueensMarket(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Queens Market";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Queens Market";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function QueensMarketAudio(){
    iBusAudio.src=firstAudio+"Queens_Market"+lastAudio;
    iBusAudio.play();
}
function BensonAvenue(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Benson Avenue";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Benson Avenue";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BensonAvenueAudio(){
    iBusAudio.src=firstAudio+"Benson_Avenue"+lastAudio;
    iBusAudio.play();
}
function BecktonOrPrinceRegent(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Beckton Or Prince Regent";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Beckton Or Prince Regent";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BecktonOrPrinceRegentAudio(){
    iBusAudio.src=firstAudio+"Beckton_Or_Prince_Regent"+lastAudio;
    iBusAudio.play();
}
function NewhamLeisureCentre(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Newham Leisure Centre";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Newham Leisure Centre";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function NewhamLeisureCentreAudio(){
    iBusAudio.src=firstAudio+"Newham_Leisure_Centre"+lastAudio;
    iBusAudio.play();
}
function CampionClose(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Campion Close";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Campion Close";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CampionCloseAudio(){
    iBusAudio.src=firstAudio+"Campion_Close"+lastAudio;
    iBusAudio.play();
}
function FerndaleStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Ferndale Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Ferndale Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function FerndaleStreetAudio(){
    iBusAudio.src=firstAudio+"Ferndale_Street"+lastAudio;
    iBusAudio.play();
}
function EastHamManorWay(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "East Ham Manor Way";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "East Ham Manor Way";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function EastHamManorWayAudio(){
    iBusAudio.src=firstAudio+"East_Ham_Manor_Way"+lastAudio;
    iBusAudio.play();
}
function CrystalPalaceParadeCollegeRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="none";
        marquee.style.display = "block";
        marquee.innerHTML = "Crystal Palace Parade / College Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Crystal Palace Parade / College Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CrystalPalaceParadeCollegeRoadAudio(){
    iBusAudio.src=firstAudio+"Crystal_Palace_Parade_College_Road"+lastAudio;
    iBusAudio.play();
}
function WestwoodHill(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Westwood Hill";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Westwood Hill";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WestwoodHillAudio(){
    iBusAudio.src=firstAudio+"Westwood_Hill"+lastAudio;
    iBusAudio.play();
}
function DomeHillPark(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Dome Hill Park";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Dome Hill Park";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function DomeHillParkAudio(){
    iBusAudio.src=firstAudio+"Dome_Hill_Park"+lastAudio;
    iBusAudio.play();
}
function WellsParkRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Wells Park Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Wells Park Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WellsParkRoadAudio(){
    iBusAudio.src=firstAudio+"Wells_Park_Road"+lastAudio;
    iBusAudio.play();
}
function DroitwichClose(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Droitwich Close";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Droitwich Close";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function DroitwichCloseAudio(){
    iBusAudio.src=firstAudio+"Droitwich_Close"+lastAudio;
    iBusAudio.play();
}
function CrescentWoodRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Crescent Wood Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Crescent Wood Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CrescentWoodRoadAudio(){
    iBusAudio.src=firstAudio+"Crescent_Wood_Road"+lastAudio;
    iBusAudio.play();
}
function SydenhamHillKirkdale(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Sydenham Hill / Kirkdale";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Sydenham Hill / Kirkdale";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function SydenhamHillKirkdaleAudio(){
    iBusAudio.src=firstAudio+"Sydenham_Hill_Kirkdale"+lastAudio;
    iBusAudio.play();
}
function HornimanPark(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Horniman Park";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Horniman Park";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HornimanParkAudio(){
    iBusAudio.src=firstAudio+"Horniman_Park"+lastAudio;
    iBusAudio.play();
}
function LordshipLaneWoodVale(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Lordship Lane / Wood Vale";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Lordship Lane / Wood Vale";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LordshipLaneWoodValeAudio(){
    iBusAudio.src=firstAudio+"Lordship_Lane_Wood_Vale"+lastAudio;
    iBusAudio.play();
}
function UnderhillRoadMelfordRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Underhill Road / Melford Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Underhill Road / Melford Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function UnderhillRoadMelfordRoadAudio(){
    iBusAudio.src=firstAudio+"Underhill_Road_Melford_Road"+lastAudio;
    iBusAudio.play();
}
function MelfordRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Melford Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Melford Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function MelfordRoadAudio(){
    iBusAudio.src=firstAudio+"Melford_Road"+lastAudio;
    iBusAudio.play();
}
function LangtonRise(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Langton Rise";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Langton Rise";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LangtonRiseAudio(){
    iBusAudio.src=firstAudio+"Langton_Rise"+lastAudio;
    iBusAudio.play();
}
function WoodValeForestHillRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Wood Vale / Forest Hill Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Wood Vale / Forest Hill Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WoodValeForestHillRoadAudio(){
    iBusAudio.src=firstAudio+"Wood_Vale_Forest_Hill_Road"+lastAudio;
    iBusAudio.play();
}
function TherapiaRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Therapia Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Therapia Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function TherapiaRoadAudio(){
    iBusAudio.src=firstAudio+"Therapia_Road"+lastAudio;
    iBusAudio.play();
}
function DunstansRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Dunstans Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Dunstans Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function DunstansRoadAudio(){
    iBusAudio.src=firstAudio+"Dunstans_Road"+lastAudio;
    iBusAudio.play();
}
function FriernRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Friern Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Friern Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function FriernRoadAudio(){
    iBusAudio.src=firstAudio+"Friern_Road"+lastAudio;
    iBusAudio.play();
}
function PeckhamRyeBarryRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Friern Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Friern Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function PeckhamRyeBarryRoadAudio(){
    iBusAudio.src=firstAudio+"Peckham_Rye_Barry_Road"+lastAudio;
    iBusAudio.play();
}
function TheGardens(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "The Gardens";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "The Gardens";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function TheGardensAudio(){
    iBusAudio.src=firstAudio+"The_Gardens"+lastAudio;
    iBusAudio.play();
}
function BonarRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Bonar Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Bonar Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BonarRoadAudio(){
    iBusAudio.src=firstAudio+"Bonar_Road"+lastAudio;
    iBusAudio.play();
}
function CommercialWay(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Commercial Way";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Commercial Way";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CommercialWayAudio(){
    iBusAudio.src=firstAudio+"Commercial_Way"+lastAudio;
    iBusAudio.play();
}
function BirdInBushRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Bird In Bush Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Bird In Bush Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BirdInBushRoadAudio(){
    iBusAudio.src=firstAudio+"Bird_In_Bush_Road"+lastAudio;
    iBusAudio.play();
}
function StGeorgesWay(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "St George's Way";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "St George's Way";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StGeorgesWayAudio(){
    iBusAudio.src=firstAudio+"St_Georges_Way"+lastAudio;
    iBusAudio.play();
}
function WaiteStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Waite Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Waite Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WaiteStreetAudio(){
    iBusAudio.src=firstAudio+"Waite_Street"+lastAudio;
    iBusAudio.play();
}
function NileTerrace(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Nile Terrace";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Nile Terrace";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function NileTerraceAudio(){
    iBusAudio.src=firstAudio+"Nile_Terrace"+lastAudio;
    iBusAudio.play();
}
function DuntonRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Dunton Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Dunton Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function DuntonRoadAudio(){
    iBusAudio.src=firstAudio+"Dunton_Road"+lastAudio;
    iBusAudio.play();
}
function OldKentRoadEastStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Old Kent Road / East Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Old Kent Road / East Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function OldKentRoadEastStreetAudio(){
    iBusAudio.src=firstAudio+"Old_Kent_Road_East_Street"+lastAudio;
    iBusAudio.play();
}
function BricklayersArms(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Bricklayer's Arms";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Bricklayer's Arms";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BricklayersArmsAudio(){
    iBusAudio.src=firstAudio+"Bricklayers_Arms"+lastAudio;
    iBusAudio.play();
}
function ElephantCastleLondonRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Elephant & Castle / London Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Elephant & Castle / London Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ElephantCastleLondonRoadAudio(){
    iBusAudio.src=firstAudio+"ELEPHANT_N_CASTLE__LONDON_ROAD"+lastAudio;
    iBusAudio.play();
}
function LambethRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Lambeth Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Lambeth Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LambethRoadAudio(){
    iBusAudio.src=firstAudio+"Lambeth_Road"+lastAudio;
    iBusAudio.play();
}
function PeckhamPostOffice(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Peckham Post Office";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Peckham Post Office";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function PeckhamPostOfficeAudio(){
    iBusAudio.src=firstAudio+"Peckham_Post_Office"+lastAudio;
    iBusAudio.play();
}
function UnderhillRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Underhill Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Underhill Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function UnderhillRoadAudio(){
    iBusAudio.src=firstAudio+"Underhill_Road"+lastAudio;
    iBusAudio.play();
}
function SydenhamHillBluebellClose(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Sydenham Hill / Bluebell Close";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Sydenham Hill / Bluebell Close";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function SydenhamHillBluebellCloseAudio(){
    iBusAudio.src=firstAudio+"Sydenham_Hill_Bluebell_Close"+lastAudio;
    iBusAudio.play();
}
function CrystalPalaceParadeFountainDrive(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="none";
        marquee.style.display = "block";
        marquee.innerHTML = "Crystal Palace Parade / Fountain Drive";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Crystal Palace Parade / Fountain Drive";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CrystalPalaceParadeFountainDriveAudio(){
    iBusAudio.src=firstAudio+"Crystal_Palace_Parade_Fountain_Drive"+lastAudio;
    iBusAudio.play();
}
function PrimroseStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Primrose Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Primrose Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function PrimroseStreetAudio(){
    iBusAudio.src=firstAudio+"Primrose_Street"+lastAudio;
    iBusAudio.play();
}
function LiverpoolStreetStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Liverpool Street Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Liverpool Street Station";
        underground.style.display = "inline";
        overground.style.display = "inline";
        DLR.style.display = "none";
        ElizabethLine.style.display = "inline";
        tfl_National_Rail_logo.style.display = "inline";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LiverpoolStreetStationAudio(){
    iBusAudio.src=firstAudio+"Liverpool_Street_Station"+lastAudio;
    iBusAudio.play();
}
function CamomileStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Camomile Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Camomile Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CamomileStreetAudio(){
    iBusAudio.src=firstAudio+"Camomile_Street"+lastAudio;
    iBusAudio.play();
}
function OldBroadStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Old Broad Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Old Broad Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function OldBroadStreetAudio(){
    iBusAudio.src=firstAudio+"Old_Broad_Street"+lastAudio;
    iBusAudio.play();
}
function PoultryBankStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Poultry / Bank Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Poultry / Bank Station";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function PoultryBankStationAudio(){
    iBusAudio.src=firstAudio+"Poultry_Bank_Station"+lastAudio;
    iBusAudio.play();
}
function BreadStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Bread Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Bread Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BreadStreetAudio(){
    iBusAudio.src=firstAudio+"Bread_Street"+lastAudio;
    iBusAudio.play();
}
function NewChangeCannonStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "New Change / Cannon Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "New Change / Cannon Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function NewChangeCannonStreetAudio(){
    iBusAudio.src=firstAudio+"New_Change_Cannon_Street"+lastAudio;
    iBusAudio.play();
}
function StPaulsChurchyard(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "St Paul's Churchyard";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "St Paul's Churchyard";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StPaulsChurchyardAudio(){
    iBusAudio.src=firstAudio+"St_Pauls_Churchyard"+lastAudio;
    iBusAudio.play();
}
function StPaulsCathedral(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "St Paul's Cathedral";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "St Paul's Cathedral";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StPaulsCathedralAudio(){
    iBusAudio.src=firstAudio+"St_Pauls_Cathedral"+lastAudio;
    iBusAudio.play();
}
function CityThameslinkStnLudgateCircus(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="none";
        marquee.style.display = "block";
        marquee.innerHTML = "City Thameslink Stn / Ludgate Circus";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "City Thameslink Stn / Ludgate Circus";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CityThameslinkStnLudgateCircusAudio(){
    iBusAudio.src=firstAudio+"City_Thameslink_Station_Ludgate_Circus"+lastAudio;
    iBusAudio.play();
}
function ShoeLane(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Shoe Lane";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Shoe Lane";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ShoeLaneAudio(){
    iBusAudio.src=firstAudio+"Shoe_Lane"+lastAudio;
    iBusAudio.play();
}
function FetterLane(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Fetter Lane";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Fetter Lane";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function FetterLaneAudio(){
    iBusAudio.src=firstAudio+"Fetter_Lane"+lastAudio;
    iBusAudio.play();
}
function ChanceryLane(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Chancery Lane";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Chancery Lane";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ChanceryLaneAudio(){
    iBusAudio.src=firstAudio+"Chancery_Lane"+lastAudio;
    iBusAudio.play();
}
function TheRoyalCourtsofJustice(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "The Royal Courts of Justice";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "The Royal Courts of Justice";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function TheRoyalCourtsofJusticeAudio(){
    iBusAudio.src=firstAudio+"The_Royal_Courts_of_Justice"+lastAudio;
    iBusAudio.play();
}
function AldwychAustraliaHouse(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Aldwych / Australia House";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Aldwych / Australia House";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function AldwychAustraliaHouseAudio(){
    iBusAudio.src=firstAudio+"Aldwych_Australia_House"+lastAudio;
    iBusAudio.play();
}
function AldwychDruryLane(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Aldwych / Drury Lane";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Aldwych / Drury Lane";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function AldwychDruryLaneAudio(){
    iBusAudio.src=firstAudio+"Aldwych_Drury_Lane"+lastAudio;
    iBusAudio.play();
}
function SavoyStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Savoy Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Savoy Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function SavoyStreetAudio(){
    iBusAudio.src=firstAudio+"Savoy_Street"+lastAudio;
    iBusAudio.play();
}
function BedfordStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Bedford Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Bedford Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BedfordStreetAudio(){
    iBusAudio.src=firstAudio+"Bedford_Street"+lastAudio;
    iBusAudio.play();
}
function TrafalgarSquareCharingCrossStn(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="none";
        marquee.style.display = "block";
        marquee.innerHTML = "Trafalgar Square / Charing Cross Stn";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Trafalgar Square / Charing Cross Stn";
        underground.style.display = "inline";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "inline";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function TrafalgarSquareCharingCrossStnAudio(){
    iBusAudio.src=firstAudio+"Trafalgar_Square_Charing_Cross_Station"+lastAudio;
    iBusAudio.play();
}
function WhitehallTrafalgarSquare(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Whitehall / Trafalgar Square";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Whitehall / Trafalgar Square";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WhitehallTrafalgarSquareAudio(){
    iBusAudio.src=firstAudio+"Whitehall_Trafalgar_Square"+lastAudio;
    iBusAudio.play();
}
function HorseGuardsParade(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Horse Guards Parade";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Horse Guards Parade";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HorseGuardsParadeAudio(){
    iBusAudio.src=firstAudio+"Horse_Guards_Parade"+lastAudio;
    iBusAudio.play();
}
function WestminsterStnParliamentSquare(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="none";
        marquee.style.display = "block";
        marquee.innerHTML = "Westminster Stn / Parliament Square";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Westminster Stn / Parliament Square";
        underground.style.display = "inline";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WestminsterStnParliamentSquareAudio(){
    iBusAudio.src=firstAudio+"Westminster_Station_Parliament_Square"+lastAudio;
    iBusAudio.play();
}
function GreatSmithStreetWestminsterAbbey(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="none";
        marquee.style.display = "block";
        marquee.innerHTML = "Great Smith Street / Westminster Abbey";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Great Smith Street / Westminster Abbey";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function GreatSmithStreetWestminsterAbbeyAudio(){
    iBusAudio.src=firstAudio+"Great_Smith_Street_Westminster_Abbey"+lastAudio;
    iBusAudio.play();
}
function StJamessParkStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "St James's Park Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "St James's Park Station";
        underground.style.display = "inline";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StJamessParkStationAudio(){
    iBusAudio.src=firstAudio+"St_Jamess_Park_Station"+lastAudio;
    iBusAudio.play();
}
function WestminsterCityHall(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Westminster City Hall";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Westminster City Hall";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WestminsterCityHallAudio(){
    iBusAudio.src=firstAudio+"Westminster_City_Hall"+lastAudio;
    iBusAudio.play();
}
function WestminsterCathedralVictoriaStn(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="none";
        marquee.style.display = "block";
        marquee.innerHTML = "Westminster Cathedral / Victoria Stn";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Westminster Cathedral / Victoria Stn";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WestminsterCathedralVictoriaStnAudio(){
    iBusAudio.src=firstAudio+"Westminster_Cathedral_Victoria_Station"+lastAudio;
    iBusAudio.play();
}
function VictoriaStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Victoria Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Victoria Station";
        underground.style.display = "inline";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "inline";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function VictoriaStationAudio(){
    iBusAudio.src=firstAudio+"Victoria_Station"+lastAudio;
    iBusAudio.play();
}
function VictoriaCoachStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Victoria Coach Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Victoria Coach Station";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function VictoriaCoachStationAudio(){
    iBusAudio.src=firstAudio+"Victoria_Coach_Station"+lastAudio;
    iBusAudio.play();
}
function PimlicoRoadEburyBridgeRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Pimlico Road / Ebury Bridge Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Pimlico Road / Ebury Bridge Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function PimlicoRoadEburyBridgeRoadAudio(){
    iBusAudio.src=firstAudio+"Pimlico_Road_Ebury_Bridge_Road"+lastAudio;
    iBusAudio.play();
}
function RoyalHospitalRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Royal Hospital Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Royal Hospital Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function RoyalHospitalRoadAudio(){
    iBusAudio.src=firstAudio+"Royal_Hospital_Road"+lastAudio;
    iBusAudio.play();
}
function SloaneSquareStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Sloane Square Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Sloane Square Station";
        underground.style.display = "inline";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function SloaneSquareStationAudio(){
    iBusAudio.src=firstAudio+"Sloane_Square_Station"+lastAudio;
    iBusAudio.play();
}
function DukeofYorkSquare(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Duke of York Square";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Duke of York Square";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function DukeofYorkSquareAudio(){
    iBusAudio.src=firstAudio+"Duke_of_York_Square"+lastAudio;
    iBusAudio.play();
}
function WalpoleStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Walpole Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Walpole Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WalpoleStreetAudio(){
    iBusAudio.src=firstAudio+"Walpole_Street"+lastAudio;
    iBusAudio.play();
}
function MarkhamStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Markham Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Markham Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function MarkhamStreetAudio(){
    iBusAudio.src=firstAudio+"MARKHAM_STREET"+lastAudio;
    iBusAudio.play();
}
function ChelseaOldTownHall(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Chelsea Old Town Hall";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Chelsea Old Town Hall";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ChelseaOldTownHallAudio(){
    iBusAudio.src=firstAudio+"CHELSEA_OLD_TOWN_HALL"+lastAudio;
    iBusAudio.play();
}
function CarlyleSquare(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Carlyle Square";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Carlyle Square";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CarlyleSquareAudio(){
    iBusAudio.src=firstAudio+"CARLYLE_SQUARE"+lastAudio;
    iBusAudio.play();
}
function BeaufortStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Beaufort Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Beaufort Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function BeaufortStreetAudio(){
    iBusAudio.src=firstAudio+"Beaufort_Street"+lastAudio;
    iBusAudio.play();
}
function EdithGroveWorldsEnd(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Edith Grove / Worlds End";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Edith Grove / Worlds End";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function EdithGroveWorldsEndAudio(){
    iBusAudio.src=firstAudio+"Edith_Grove_Worlds_End"+lastAudio;
    iBusAudio.play();
}
function WorldsEndHealthCentre(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Worlds End Health Centre";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Worlds End Health Centre";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WorldsEndHealthCentreAudio(){
    iBusAudio.src=firstAudio+"Worlds_End_Health_Centre"+lastAudio;
    iBusAudio.play();
}
function RumboldRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Rumbold Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Rumbold Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function RumboldRoadAudio(){
    iBusAudio.src=firstAudio+"Rumbold_Road"+lastAudio;
    iBusAudio.play();
}
function TyrawleyRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Tyrawley Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Tyrawley Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function TyrawleyRoadAudio(){
    iBusAudio.src=firstAudio+"Tyrawley_Road"+lastAudio;
    iBusAudio.play();
}
function FulhamTownHall(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Fulham Town Hall";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Fulham Town Hall";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function FulhamTownHallAudio(){
    iBusAudio.src=firstAudio+"Fulham_Town_Hall"+lastAudio;
    iBusAudio.play();
}
function HoburyStreetWorldsEnd(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Hobury Street / Worlds End";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Hobury Street / Worlds End";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function HoburyStreetWorldsEndAudio(){
    iBusAudio.src=firstAudio+"Hobury_Street_Worlds_End"+lastAudio;
    iBusAudio.play();
}
function OldChurchStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Old Church Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Old Church Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function OldChurchStreetAudio(){
    iBusAudio.src=firstAudio+"Old_Church_Street"+lastAudio;
    iBusAudio.play();
}
function CadoganGardensSloaneSquare(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Cadogan Gardens / Sloane Square";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Cadogan Gardens / Sloane Square";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CadoganGardensSloaneSquareAudio(){
    iBusAudio.src=firstAudio+"Cadogan_Gardens_Sloane_Square"+lastAudio;
    iBusAudio.play();
}
function SloaneSquareStnLowerSloaneSt(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="none";
        marquee.style.display = "block";
        marquee.innerHTML = "Sloane Square Stn / Lower Sloane St";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Sloane Square Stn / Lower Sloane St";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function SloaneSquareStnLowerSloaneStAudio(){
    iBusAudio.src=firstAudio+"Sloane_Square_Station_Lower_Sloane_Street"+lastAudio;
    iBusAudio.play();
}
function ChelseaBridgeRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Chelsea Bridge Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Chelsea Bridge Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function ChelseaBridgeRoadAudio(){
    iBusAudio.src=firstAudio+"Chelsea_Bridge_Road"+lastAudio;
    iBusAudio.play();
}
function EcclestonBridge(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Eccleston Bridge";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Eccleston Bridge";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function EcclestonBridgeAudio(){
    iBusAudio.src=firstAudio+"Eccleston_Bridge"+lastAudio;
    iBusAudio.play();
}
function EburyBridgeRoad(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Ebury Bridge Road";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Ebury Bridge Road";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function EburyBridgeRoadAudio(){
    iBusAudio.src=firstAudio+"Ebury_Bridge_Road"+lastAudio;
    iBusAudio.play();
}
function WestminsterCathedral(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Westminster Cathedral";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Westminster Cathedral";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WestminsterCathedralAudio(){
    iBusAudio.src=firstAudio+"Westminster_Cathedral"+lastAudio;
    iBusAudio.play();
}
function WestminsterAbbey(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Westminster Abbey";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Westminster Abbey";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WestminsterAbbeyAudio(){
    iBusAudio.src=firstAudio+"Westminster_Abbey"+lastAudio;
    iBusAudio.play();
}
function CharingCrossStnTrafalgarSquare(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="none";
        marquee.style.display = "block";
        marquee.innerHTML = "Charing Cross Stn / Trafalgar Square";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Charing Cross Stn / Trafalgar Square";
        underground.style.display = "inline";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "inline";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function CharingCrossStnTrafalgarSquareAudio(){
    iBusAudio.src=firstAudio+"Charing_Cross_Stn_Trafalgar_Square"+lastAudio;
    iBusAudio.play();
}
function SouthamptonStreetCoventGarden(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="none";
        marquee.style.display = "block";
        marquee.innerHTML = "Southampton Street / Covent Garden";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Southampton Street / Covent Garden";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function SouthamptonStreetCoventGardenAudio(){
    iBusAudio.src=firstAudio+"Southampton_Street_Covent_Garden"+lastAudio;
    iBusAudio.play();
}
function Aldwych(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Aldwych";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Aldwych";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function AldwychAudio(){
    iBusAudio.src=firstAudio+"Aldwych"+lastAudio;
    iBusAudio.play();
}
function LudgateCircus(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Ludgate Circus";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Ludgate Circus";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LudgateCircusAudio(){
    iBusAudio.src=firstAudio+"Ludgate_Circus"+lastAudio;
    iBusAudio.play();
}
function LudgateHillOldBailey(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Ludgate Hill / Old Bailey";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Ludgate Hill / Old Bailey";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LudgateHillOldBaileyAudio(){
    iBusAudio.src=firstAudio+"Ludgate_Hill_Old_Bailey"+lastAudio;
    iBusAudio.play();
}
function StPaulsStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "St Paul's Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "St Paul's Station";
        underground.style.display = "inline";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function StPaulsStationAudio(){
    iBusAudio.src=firstAudio+"St_Pauls_Station"+lastAudio;
    iBusAudio.play();
}
function LittleBritain(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Little Britain";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Little Britain";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LittleBritainAudio(){
    iBusAudio.src=firstAudio+"Little_Britain"+lastAudio;
    iBusAudio.play();
}
function LondonWallMuseumofLondon(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "London Wall / Museum of London";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "London Wall / Museum of London";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LondonWallMuseumofLondonAudio(){
    iBusAudio.src=firstAudio+"London_Wall_Museum_of_London"+lastAudio;
    iBusAudio.play();
}
function LondonWallMoorgateStation(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "London Wall / Moorgate Station";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "London Wall / Moorgate Station";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function LondonWallMoorgateStationAudio(){
    iBusAudio.src=firstAudio+"London_Wall_Moorgate_Station"+lastAudio;
    iBusAudio.play();
}
function AllHallowsChurch(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "All Hallows Church";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "All Hallows Church";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function AllHallowsChurchAudio(){
    iBusAudio.src=firstAudio+"All_Hallows_Church"+lastAudio;
    iBusAudio.play();
}
function WormwoodStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Wormwood Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Wormwood Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function WormwoodStreetAudio(){
    iBusAudio.src=firstAudio+"Wormwood_Street"+lastAudio;
    iBusAudio.play();
}
function AppoldStreet(){
    if (ibusView === "old"){
        topTextYes.style.display ="none";
        topTextNo.style.display ="block";
        marquee.style.display = "none";
        topTextNo.innerHTML = "Appold Street";
    // topTextYes.style.animationName = "StGeorgesTownHallShadwellStn";
    } else if (ibusView === "new"){
        newIbusDisplayDesText.innerHTML = "Appold Street";
        underground.style.display = "none";
        overground.style.display = "none";
        DLR.style.display = "none";
        ElizabethLine.style.display = "none";
        tfl_National_Rail_logo.style.display = "none";
        tfl_trams_Roundel.style.display = "none";
        nextDestinationNewIbus()
    }
}
function AppoldStreetAudio(){
    iBusAudio.src=firstAudio+"Appold_Street"+lastAudio;
    iBusAudio.play();
}