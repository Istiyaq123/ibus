// var topDestination = '<div style="font-family: JohnBig;font-weight: bolder;font-size: 150%;color: white;transform: translate(5px, 5px);">';
// var topDestination2 = '</div>';
// var topDestinationimgpos = '<img width="40px"style=" position: absolute; top: 3.5px; right: ';
// var topDestinationiumg = '; " src="';
// var topDestinationimgend = '">';

var underground = document.getElementById("tfl_underground_Roundel");
var overground = document.getElementById("tfl_overground_Roundel");
var DLR = document.getElementById("tfl_DLR_Roundel");
var ElizabethLine = document.getElementById("tfl_elizabeth_line_Roundel");
var tfl_National_Rail_logo = document.getElementById("tfl_National_Rail_logo");

function BusTerminatesHerenewAudio(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Bus Terminates Here, Please take your belongings.";
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/DI_This_Bus_Terminates_Here_Please_Take_Your_Belongings_With_You_001.mp3";
  iBusAudio.play();
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
}

function getRidOfDestination(){
  if (newIbusdisplayrouteDes.style.display == "block"){
    newIbusdisplayrouteDes.style.display = "none";
    newbottom.style.display = "block";
  }
}

function OldStreetStation135btnNew(){
  CrossharbourASDA135new()
  newIbusdisplayRouteDesibus.innerHTML = "135 to Old Street, Povost Street";
  showDestination.setAttribute( "onClick", "OldStreetProvostStreet135new();" );
}
function Crossharbour135btnnew(){
  OldStreetStation135new()
  newIbusdisplayRouteDesibus.innerHTML = "135 to Crossharbour, Asda";
  showDestination.setAttribute( "onClick", "Crossharbour135new();" );
}
function BethnalGreen702btnNew(){
  routeDestination = "BethnalGreen702";
  MileEndStationBowRoad702new()
  newIbusdisplayRouteDesibus.innerHTML = "702 to Bethnal Green, Bonner Road";
  showDestination.setAttribute( "onClick", "BethnalGreenBonnerRoad702new();" );
}
function MileEnd702btnnew(){
  routeDestination = "MileEnd702";
  BonnerRoad702new()
  newIbusdisplayRouteDesibus.innerHTML = "135 to Crossharbour, Asda";
  showDestination.setAttribute( "onClick", "Crossharbour135new();" );
}

function OldStreetProvostStreet135new(){
  shownewibusdestination();
  if (newIbusdisplayrouteDes.style.display === "block"){
    var audio = 1;
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/R_135_001.mp3";
    iBusAudio.play();
    iBusAudio.onended = function() {
      audio = 2;
      if (audio === 2){
        iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/SA_To_001_V03.mp3";
        iBusAudio.play();
        iBusAudio.onended = function() {
          audio = 3;
          if (audio == 3){
            iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_OLD_STREET_001.mp3";
            iBusAudio.play();
            iBusAudio.onended = function() {
              audio = 4;
              if (audio == 4){
                iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_PROVOST_STREET_001.mp3";
                iBusAudio.play();
                iBusAudio.onended = function() {
                  iBusAudio.src="hhjff.mp3";
                  iBusAudio.play();
                }
              }
            }
          }
        } 
      }
    }
  }
};
function Crossharbour135new(){
  shownewibusdestination();
  if (newIbusdisplayrouteDes.style.display === "block"){
    var audio = 1;
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/R_135_001.mp3";
    iBusAudio.play();
    iBusAudio.onended = function() {
      audio = 2;
      if (audio === 2){
        iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/SA_To_001_V03.mp3";
        iBusAudio.play();
        iBusAudio.onended = function() {
          audio = 3;
          if (audio == 3){
            iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_CROSSHARBOUR_ASDA_001.mp3";
            iBusAudio.play();
            iBusAudio.onended = function() {
              iBusAudio.src="hhjff.mp3";
              iBusAudio.play();
            }
          }
        } 
      }
    }
  }
};
function BethnalGreenBonnerRoad702New(){
  shownewibusdestination();
  if (newIbusdisplayrouteDes.style.display === "block"){
    var audio = 1;
    iBusAudio.src="https://istiyaq123.github.io/ibus/audio/702.mp3";
    iBusAudio.play();
    iBusAudio.onended = function() {
      audio = 2;
      if (audio === 2){
        iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/SA_To_001_V03.mp3";
        iBusAudio.play();
        iBusAudio.onended = function() {
          audio = 3;
          if (audio == 3){
            iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_BETHNAL_GREEN_001.mp3";
            iBusAudio.play();
            iBusAudio.onended = function() {
              audio = 4;
              if (audio == 4){
                iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BONNER_ROAD_001.mp3";
                iBusAudio.play();
                iBusAudio.onended = function() {
                  iBusAudio.src="hhjff.mp3";
                  iBusAudio.play();
                }
              }
            }
          }
        } 
      }
    }
  }
};

function CrossharbourASDA135new(){
  getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Crossharbour ASDA";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  // BackDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  NextDestination.setAttribute( "onClick", "CrossharbourASDA135newAudio();" );
}
function CrossharbourASDA135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CROSSHARBOUR_ASDA_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "CrossharbourASDA135new();" );
  NextDestination.setAttribute( "onClick", "CrossharbourStation135new();" );
}
function CrossharbourStation135new(){
  getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Crossharbour Station";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "inline";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "CrossharbourStation135newAudio();" );
  NextDestination.setAttribute( "onClick", "CrossharbourStation135newAudio();" );
}
function IsleofDogsAsda135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Isle of Dogs Asda";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "IsleofDogsAsda135newAudio();" );
  NextDestination.setAttribute( "onClick", "CrossharbourStation135newAudio();" );
}
function IsleofDogsAsda135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ISLE_OF_DOGS_ASDA_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "BusTerminatesHerenewAudio();" );
  NextDestination.setAttribute( "onClick", "HarbourExchangeSquare135new();" );
}
function CrossharbourStation135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CROSSHARBOUR_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "IsleofDogsAsda135new();" );
  NextDestination.setAttribute( "onClick", "HarbourExchangeSquare135new();" );
}
function HarbourExchangeSquare135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Harbour Exchange Square";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "HarbourExchangeSquare135newAudio();" );
  NextDestination.setAttribute( "onClick", "HarbourExchangeSquare135newAudio();" );
}
function HarbourExchangeSquare135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HARBOUR_EXCHANGE_SQUARE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "EastFerryRoad135new();" );
  NextDestination.setAttribute( "onClick", "JackDashHoue135new();" );
}
function JackDashHoue135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Jack Dash House";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "JackDashHoue135newAudio();" );
  NextDestination.setAttribute( "onClick", "JackDashHoue135newAudio();" );
}
function JackDashHoue135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_JACK_DASH_HOUSE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "HarbourExchangeSquare135new();" );
  NextDestination.setAttribute( "onClick", "StewartStreet135new();" );
}
function StewartStreet135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Stewart Street";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "StewartStreet135newAudio();" );
  NextDestination.setAttribute( "onClick", "StewartStreet135newAudio();" );
}
function StewartStreet135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_STEWART_STREET_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "JackDashHoue135new();" );
  NextDestination.setAttribute( "onClick", "StJohnsPark135new();" );
}
function StJohnsPark135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "St John's Park";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "StJohnsPark135newAudio();" );
  NextDestination.setAttribute( "onClick", "StJohnsPark135newAudio();" );
}
function StJohnsPark135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ST_JOHNS_PARK_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "StewartStreet135new();" );
  NextDestination.setAttribute( "onClick", "CubbitTownSchool135new();" );
}
function CubbitTownSchool135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Cubitt Town School";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "CubbitTownSchool135newAudio();" );
  NextDestination.setAttribute( "onClick", "CubbitTownSchool135newAudio();" );
}
function CubbitTownSchool135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CUBITT_TOWN_SCHOOL_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "StJohnsPark135new();" );
  NextDestination.setAttribute( "onClick", "PierStreet135new();" );
}
function PierStreet135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Pier Street";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "PierStreet135newAudio();" );
  NextDestination.setAttribute( "onClick", "PierStreet135newAudio();" );
}
function PierStreet135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_PIER_STREET_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "CubbitTownSchool135new();" );
  NextDestination.setAttribute( "onClick", "IsleofDogsPoliceStation135new();" );
}
function IsleofDogsPoliceStation135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Isle of Dogs Police Station";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "IsleofDogsPoliceStation135newAudio();" );
  NextDestination.setAttribute( "onClick", "IsleofDogsPoliceStation135newAudio();" );
}
function IsleofDogsPoliceStation135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ISLE_OF_DOGS_POLICE_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "PierStreet135new();" );
  NextDestination.setAttribute( "onClick", "IslandGardensStation135new();" );
}
function IslandGardensStation135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Island Gardens Station";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "inline";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "IslandGardensStation135newAudio();" );
  NextDestination.setAttribute( "onClick", "IslandGardensStation135newAudio();" );
}
function IslandGardensStation135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ISLAND_GARDENS_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "IsleofDogsPoliceStation135new();" );
  NextDestination.setAttribute( "onClick", "EastFerryRoad135new();" );
}
function EastFerryRoad135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "East Ferry Road";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "EastFerryRoad135newAudio();" );
  NextDestination.setAttribute( "onClick", "EastFerryRoad135newAudio();" );
}
function EastFerryRoad135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_EAST_FERRY_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "CrossharbourStation135new();" );
  NextDestination.setAttribute( "onClick", "MudchuteStationSpindriftAvenue135new();" );
}
function MudchuteStationSpindriftAvenue135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Mudchute Station / Spindrift Avenue";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "MudchuteStationSpindriftAvenue135newAudio();" );
  NextDestination.setAttribute( "onClick", "MudchuteStationSpindriftAvenue135newAudio();" );
}
function MudchuteStationSpindriftAvenue135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MUDCHUTE_STATION_SPINDRIFT_AVENUE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "MudchuteStationSpindriftAvenue135new();" );
  NextDestination.setAttribute( "onClick", "TelegraphPlace135new();" );
}
function TelegraphPlace135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Telegraph Place";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "TelegraphPlace135newAudio();" );
  NextDestination.setAttribute( "onClick", "TelegraphPlace135newAudio();" );
}
function MudchuteStation135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Mudchute Station";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "inline";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "MudchuteStation135newAudio();" );
  NextDestination.setAttribute( "onClick", "TelegraphPlace135newAudio();" );
}
function MillwallPark135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Millwall Park";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "MillwallPark135newAudio();" );
  NextDestination.setAttribute( "onClick", "TelegraphPlace135newAudio();" );
}
function MillwallPark135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MILLWALL_PARK_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "IslandGardensStation135new();" );
  NextDestination.setAttribute( "onClick", "StEdmundsSchool135new();" );
}
function MudchuteStation135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MUDCHUTE_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "MillwallPark135new();" );
  NextDestination.setAttribute( "onClick", "StEdmundsSchool135new();" );
}
function TelegraphPlace135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_TELEGRAPH_PLACE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "MudchuteStation135new();" );
  NextDestination.setAttribute( "onClick", "StEdmundsSchool135new();" );
}
function StEdmundsSchool135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "St Edmund's School";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "StEdmundsSchool135newAudio();" );
  NextDestination.setAttribute( "onClick", "StEdmundsSchool135newAudio();" );
}
function StEdmundsSchool135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ST_EDMUNDS_SCHOOL_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "TelegraphPlace135new();" );
  NextDestination.setAttribute( "onClick", "CrewsStreet135new();" );
}
function CrewsStreet135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Crews Street";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "CrewsStreet135newAudio();" );
  NextDestination.setAttribute( "onClick", "CrewsStreet135newAudio();" );
}
function CrewsStreet135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CREWS_STREET_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "CrewsStreet135new();" );
  NextDestination.setAttribute( "onClick", "ArnhemWharfPrimarySchool135new();" );
}
function ArnhemWharfPrimarySchool135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Arnhem Wharf Primary School";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "ArnhemWharfPrimarySchool135newAudio();" );
  NextDestination.setAttribute( "onClick", "ArnhemWharfPrimarySchool135newAudio();" );
}
function CrewsStreettheSpaceTheatre135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Crews Street / the Space Theatre";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "CrewsStreettheSpaceTheatre135newAudio();" );
  NextDestination.setAttribute( "onClick", "ArnhemWharfPrimarySchool135newAudio();" );
}
function CrewsStreettheSpaceTheatre135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CREWS_STREET_THE_SPACE_THEATRE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "StEdmundsSchool135new();" );
  NextDestination.setAttribute( "onClick", "SirJohnMcdougallGardens135new();" );
}
function ArnhemWharfPrimarySchool135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ARNHEM_WHARF_PRIMARY_SCHOOL_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "CrewsStreettheSpaceTheatre135new();" );
  NextDestination.setAttribute( "onClick", "SirJohnMcdougallGardens135new();" );
}
function SirJohnMcdougallGardens135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Sir John Mcdougall Gardens";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "SirJohnMcdougallGardens135newAudio();" );
  NextDestination.setAttribute( "onClick", "SirJohnMcdougallGardens135newAudio();" );
}
function SirJohnMcdougallGardens135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SIR_JOHN_MCDOUGAL_GARDENS_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "ArnhemWharfPrimarySchool135new();" );
  NextDestination.setAttribute( "onClick", "BarkentineClincHutchingsStreet135new();" );
}
function BarkentineClincHutchingsStreet135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Barkantine Clinic / Hutchings Street";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "BarkentineClincHutchingsStreet135newAudio();" );
  NextDestination.setAttribute( "onClick", "BarkentineClincHutchingsStreet135newAudio();" );
}
function BarkentineClincHutchingsStreet135newAudio(){
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
  BackDestination.setAttribute( "onClick", "SirJohnMcdougallGardens135new();" );
  NextDestination.setAttribute( "onClick", "ByngStreet135new();" );
}
function ByngStreet135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Byng Street";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "ByngStreet135newAudio();" );
  NextDestination.setAttribute( "onClick", "ByngStreet135newAudio();" );
}
function ByngStreet135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BYNG_STREET_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "BarkentineClincHutchingsStreet135new();" );
  NextDestination.setAttribute( "onClick", "MarshWallHeronQuay135new();" );
}
function MarshWallHeronQuay135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Marsh Wall / Heron Quay";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "MarshWallHeronQuay135newAudio();" );
  NextDestination.setAttribute( "onClick", "MarshWallHeronQuay135newAudio();" );
}
function CubaStreet135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Cuba Street";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "CubaStreet135newAudio();" );
  NextDestination.setAttribute( "onClick", "MarshWallHeronQuay135newAudio();" );
}
function CubaStreet135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CUBA_STREET_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "BarkentineClincHutchingsStreet135new();" );
  NextDestination.setAttribute( "onClick", "CanaryWharfStation135new();" );
}
function MarshWallHeronQuay135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MARSH_WALL_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio == 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HERON_QUAYS_001.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        iBusAudio.src="hhjff.mp3";
        iBusAudio.play();
      }
    }
  }
  BackDestination.setAttribute( "onClick", "CubaStreet135new();" );
  NextDestination.setAttribute( "onClick", "CanaryWharfStation135new();" );
}
function CanaryWharfStation135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Canary Wharf Station";
  underground.style.display = "inline";
  overground.style.display = "none";
  DLR.style.display = "inline";
  ElizabethLine.style.display = "inline";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "CanaryWharfStation135newAudio();" );
  NextDestination.setAttribute( "onClick", "CanaryWharfStation135newAudio();" );
}
function CanaryWharfStation135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CANARY_WHARF_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "MarshWallHeronQuay135new();" );
  NextDestination.setAttribute( "onClick", "CanadaSquareSouthCanaryWharfStn135new();" );
}
function CanadaSquareSouthCanaryWharfStn135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Canada Square South / Canary Wharf Stn";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "CanadaSquareSouthCanaryWharfStn135newAudio();" );
  NextDestination.setAttribute( "onClick", "CanadaSquareSouthCanaryWharfStn135newAudio();" );
}
function CanadaSquareSouthCanaryWharfStn135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CANADA_SQUARE_SOUTH_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "BarkentineClincHutchingsStreet135new();" );
  NextDestination.setAttribute( "onClick", "CanaryWharfStationtwo135new();" );
}
function CanaryWharfStationtwo135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Canary Wharf Station";
  underground.style.display = "inline";
  overground.style.display = "none";
  DLR.style.display = "inline";
  ElizabethLine.style.display = "inline";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "CanaryWharfStationtwo135newAudio();" );
  NextDestination.setAttribute( "onClick", "CanaryWharfStationtwo135newAudio();" );
}
function CanaryWharfStationtwo135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CANARY_WHARF_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "CanaryWharfStation135new();" );
  NextDestination.setAttribute( "onClick", "WestIndiaAvenue135new();" );
}
function WestIndiaAvenue135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "West India Avenue";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "WestIndiaAvenue135newAudio();" );
  NextDestination.setAttribute( "onClick", "WestIndiaAvenue135newAudio();" );
}
function WestIndiaAvenue135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_WEST_INDIA_AVENUE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "CanaryWharfStationtwo135new();" );
  NextDestination.setAttribute( "onClick", "WestferryCircusCanaryWharfPier135new();" );
}
function WestferryCircusCanaryWharfPier135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Westferry Circus / Canary Wharf Pier";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "WestferryCircusCanaryWharfPier135newAudio();" );
  NextDestination.setAttribute( "onClick", "WestferryCircusCanaryWharfPier135newAudio();" );
}
function WestferryCircusCanaryWharfPier135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_WESTFERRY_CIRCUS_CANARY_WHARF_PIER_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "BarkentineClincHutchingsStreet135new();" );
  NextDestination.setAttribute( "onClick", "WestferryStation135new();" );
}
function WestferryStation135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Westferry Station";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "WestferryStation135newAudio();" );
  NextDestination.setAttribute( "onClick", "WestferryStation135newAudio();" );
}
function WestferryStation135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_WESTFERRY_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "BarkentineClincHutchingsStreet135new();" );
  NextDestination.setAttribute( "onClick", "SalterStreet135new();" );
}
function SalterStreet135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Salter Street";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "SalterStreet135newAudio();" );
  NextDestination.setAttribute( "onClick", "SalterStreet135newAudio();" );
}
function SalterStreet135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SALTER_STREET_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "BarkentineClincHutchingsStreet135new();" );
  NextDestination.setAttribute( "onClick", "LimehousePoliceStation135new();" );
}
function LimehousePoliceStation135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Limehouse Police Station";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "LimehousePoliceStation135newAudio();" );
  NextDestination.setAttribute( "onClick", "LimehousePoliceStation135newAudio();" );
}
function WestferryStationtwo135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Westferry Station";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "inline";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "WestferryStationtwo135newAudio();" );
  NextDestination.setAttribute( "onClick", "LimehousePoliceStation135newAudio();" );
}
function WestferryStationtwo135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_WESTFERRY_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "WestIndiaAvenue135new();" );
  NextDestination.setAttribute( "onClick", "LimehouseTownHall135new();" );
}
function LimehousePoliceStation135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_LIMEHOUSE_POLICE_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "WestferryStationtwo135new();" );
  NextDestination.setAttribute( "onClick", "LimehouseTownHall135new();" );
}
function LimehouseTownHall135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Limehouse Town Hall";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "LimehouseTownHall135newAudio();" );
  NextDestination.setAttribute( "onClick", "LimehouseTownHall135newAudio();" );
}
function LimehouseTownHall135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_LIMEHOUSE_TOWN_HALL_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "BarkentineClincHutchingsStreet135new();" );
  NextDestination.setAttribute( "onClick", "LowellStreet135new();" );
}
function LowellStreet135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Lowell Street";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "LowellStreet135newAudio();" );
  NextDestination.setAttribute( "onClick", "LowellStreet135newAudio();" );
}
function SalmonLane135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Salmon Lane";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "SalmonLane135newAudio();" );
  NextDestination.setAttribute( "onClick", "LowellStreet135newAudio();" );
}
function BurdettRoad135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Burdett Road";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "BurdettRoad135newAudio();" );
  NextDestination.setAttribute( "onClick", "LowellStreet135newAudio();" );
}
function BurdettRoad135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BURDETT_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "LimehousePoliceStation135new();" );
  NextDestination.setAttribute( "onClick", "LimehouseStation135new();" );
}
function SalmonLane135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SALMON_LANE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "BurdettRoad135new();" );
  NextDestination.setAttribute( "onClick", "LimehouseStation135new();" );
}
function LowellStreet135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_LOWELL_STREET_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "SalmonLane135new();" );
  NextDestination.setAttribute( "onClick", "LimehouseStation135new();" );
}
function LimehouseStation135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Limehouse Station";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "inline";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "inline";
  BackDestination.setAttribute( "onClick", "LimehouseStation135newAudio();" );
  NextDestination.setAttribute( "onClick", "LimehouseStation135newAudio();" );
}
function LimehouseStation135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_LIMEHOUSE_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "LowellStreet135new();" );
  NextDestination.setAttribute( "onClick", "StepneyMethodistChurch135new();" );
}
function StepneyMethodistChurch135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Stepney Methodist Church";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "StepneyMethodistChurch135newAudio();" );
  NextDestination.setAttribute( "onClick", "StepneyMethodistChurch135newAudio();" );
}
function StepneyMethodistChurch135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_STEPNEY_METHODIST_CHURCH_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "LimehouseStation135new();" );
  NextDestination.setAttribute( "onClick", "MarionRichardsonSchool135new();" );
}
function MarionRichardsonSchool135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Marion Richardson School";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "MarionRichardsonSchool135newAudio();" );
  NextDestination.setAttribute( "onClick", "MarionRichardsonSchool135newAudio();" );
}
function MarionRichardsonSchool135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MARION_RICHARDSON_SCHOOL_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "BarkentineClincHutchingsStreet135new();" );
  NextDestination.setAttribute( "onClick", "ExmouthEstate135new();" );
}
function ExmouthEstate135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Exmouth Estate";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "ExmouthEstate135newAudio();" );
  NextDestination.setAttribute( "onClick", "ExmouthEstate135newAudio();" );
}
function ExmouthEstate135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_EXMOUTH_ESTATE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "BarkentineClincHutchingsStreet135new();" );
  NextDestination.setAttribute( "onClick", "StMaryStMichaelsChurch135new();" );
}
function StMaryStMichaelsChurch135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "St Mary's & St Michael's Church";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "StMaryStMichaelsChurch135newAudio();" );
  NextDestination.setAttribute( "onClick", "StMaryStMichaelsChurch135newAudio();" );
}
function ArbourSquare135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Arbour Square";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "ArbourSquare135newAudio();" );
  NextDestination.setAttribute( "onClick", "StMaryStMichaelsChurch135newAudio();" );
}
function ArbourSquare135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ARBOUR_SQUARE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "StepneyMethodistChurch135new();" );
  NextDestination.setAttribute( "onClick", "WatneyMarket135new();" );
}
function StMaryStMichaelsChurch135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ST_MARYS_AND_ST_MICHAELS_CHURCH_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "ArbourSquare135new();" );
  NextDestination.setAttribute( "onClick", "WatneyMarket135new();" );
}
function WatneyMarket135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Watney Market";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "WatneyMarket135newAudio();" );
  NextDestination.setAttribute( "onClick", "WatneyMarket135newAudio();" );
}
function WatneyMarket135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_WATNEY_MARKET_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "StMaryStMichaelsChurch135new();" );
  NextDestination.setAttribute( "onClick", "NewRoad135new();" );
}
function NewRoad135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "New Road";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "NewRoad135newAudio();" );
  NextDestination.setAttribute( "onClick", "NewRoad135newAudio();" );
}
function NewRoad135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_NEW_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "WatneyMarket135new();" );
  NextDestination.setAttribute( "onClick", "HenriquesStreet135new();" );
}
function HenriquesStreet135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Henriques Street";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "HenriquesStreet135newAudio();" );
  NextDestination.setAttribute( "onClick", "HenriquesStreet135newAudio();" );
}
function HenriquesStreet135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HENRIQUES_STREET_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "NewRoad135new();" );
  NextDestination.setAttribute( "onClick", "AldgateEastStation135new();" );
}
function AldgateEastStation135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Aldgate East Station";
  underground.style.display = "inline";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "AldgateEastStation135newAudio();" );
  NextDestination.setAttribute( "onClick", "AldgateEastStation135newAudio();" );
}
function AldgateEastStation135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ALDGATE_EAST_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "HenriquesStreet135new();" );
  NextDestination.setAttribute( "onClick", "DukesPlace135new();" );
}
function DukesPlace135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Duke's Place";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "DukesPlace135newAudio();" );
  NextDestination.setAttribute( "onClick", "DukesPlace135newAudio();" );
}
function DukesPlace135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_DUKES_PLACE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "BarkentineClincHutchingsStreet135new();" );
  NextDestination.setAttribute( "onClick", "LiverpoolStreetStation135new();" );
}
function LiverpoolStreetStation135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Liverpool Street Station";
  underground.style.display = "inline";
  overground.style.display = "inline";
  DLR.style.display = "none";
  ElizabethLine.style.display = "inline";
  tfl_National_Rail_logo.style.display = "inline";
  BackDestination.setAttribute( "onClick", "LiverpoolStreetStation135newAudio();" );
  NextDestination.setAttribute( "onClick", "LiverpoolStreetStation135newAudio();" );
}
function StBotolphStreet135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "St Botolph Street";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "StBotolphStreet135newAudio();" );
  NextDestination.setAttribute( "onClick", "LiverpoolStreetStation135newAudio();" );
}
function StBotolphStreet135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ST_BOTOLPH_STREET_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "AldgateEastStation135new();" );
  NextDestination.setAttribute( "onClick", "PrimroseStreet135new();" );
}
function LiverpoolStreetStation135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_LIVERPOOL_STREET_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "StBotolphStreet135new();" );
  NextDestination.setAttribute( "onClick", "PrimroseStreet135new();" );
}
function PrimroseStreet135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Primrose Street";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "PrimroseStreet135newAudio();" );
  NextDestination.setAttribute( "onClick", "PrimroseStreet135newAudio();" );
}
function PrimroseStreet135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_PRIMROSE_STREET_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "LiverpoolStreetStation135new();" );
  NextDestination.setAttribute( "onClick", "ShoreditchHighStreetStation135new();" );
}
function ShoreditchHighStreetStation135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Shoreditch High Street Station";
  underground.style.display = "none";
  overground.style.display = "inline";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "ShoreditchHighStreetStation135newAudio();" );
  NextDestination.setAttribute( "onClick", "ShoreditchHighStreetStation135newAudio();" );
}
function CommercialStreetWorshipStreet135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Commercial Street / Worship Street";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "CommercialStreetWorshipStreet135newAudio();" );
  NextDestination.setAttribute( "onClick", "ShoreditchHighStreetStation135newAudio();" );
}
function CommercialStreetWorshipStreet135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_COMMERCIAL_STREET_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio == 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_WORSHIP_STREET_001.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        iBusAudio.src="hhjff.mp3";
        iBusAudio.play();
      }
    }
  }
  BackDestination.setAttribute( "onClick", "PrimroseStreet135new();" );
  NextDestination.setAttribute( "onClick", "CurtainRoad135new();" );
}
function ShoreditchHighStreetStation135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SHOREDITCH_HIGH_STREET_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "CommercialStreetWorshipStreet135new();" );
  NextDestination.setAttribute( "onClick", "CurtainRoad135new();" );
}
function CurtainRoad135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Curtain Road";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "CurtainRoad135newAudio();" );
  NextDestination.setAttribute( "onClick", "CurtainRoad135newAudio();" );
}
function CurtainRoad135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CURTAIN_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "BarkentineClincHutchingsStreet135new();" );
  NextDestination.setAttribute( "onClick", "RaveyStreet135new();" );
}
function RaveyStreet135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Ravey Street";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "RaveyStreet135newAudio();" );
  NextDestination.setAttribute( "onClick", "RaveyStreet135newAudio();" );
}
function RaveyStreet135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_RAVEY_STREET_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "BarkentineClincHutchingsStreet135new();" );
  NextDestination.setAttribute( "onClick", "OldStreetStation135new();" );
}
function OldStreetStation135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Old Street Station";
  underground.style.display = "inline";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "inline";
  BackDestination.setAttribute( "onClick", "OldStreetStation135newAudio();" );
  NextDestination.setAttribute( "onClick", "OldStreetStation135newAudio();" );
}
function ShoreditchFireStation135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Shoreditch Fire Station";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "ShoreditchFireStation135newAudio();" );
  NextDestination.setAttribute( "onClick", "OldStreetStation135newAudio();" );
}
function PitfieldStreet135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Pitfield Street";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "PitfieldStreet135newAudio();" );
  NextDestination.setAttribute( "onClick", "OldStreetStation135newAudio();" );
}
function PitfieldStreet135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_PITFIELD_STREET_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "ShoreditchHighStreetStation135new();" );
  NextDestination.setAttribute( "onClick", "OldStreetRoundabout135new();" );
}
function ShoreditchFireStation135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SHOREDITCH_FIRE_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "PitfieldStreet135new();" );
  NextDestination.setAttribute( "onClick", "OldStreetRoundabout135new();" );
}
function OldStreetStation135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_OLD_STREET_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "ShoreditchFireStation135new();" );
  NextDestination.setAttribute( "onClick", "OldStreetRoundabout135new();" );
}
function OldStreetRoundabout135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Old Street Roundabout";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "OldStreetRoundabout135newAudio();" );
  NextDestination.setAttribute( "onClick", "OldStreetRoundabout135newAudio();" );
}
function OldStreetRoundabout135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_OLD_STREET_ROUNDABOUT_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "BarkentineClincHutchingsStreet135new();" );
  NextDestination.setAttribute( "onClick", "MoorfieldsEyeHospital135new();" );
}
function MoorfieldsEyeHospital135new(){getRidOfDestination()
  newIbusDisplayDesText.innerHTML = "Moorfields Eye Hospital";
  underground.style.display = "none";
  overground.style.display = "none";
  DLR.style.display = "none";
  ElizabethLine.style.display = "none";
  tfl_National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "MoorfieldsEyeHospital135newAudio();" );
  NextDestination.setAttribute( "onClick", "MoorfieldsEyeHospital135newAudio();" );
}
function MoorfieldsEyeHospital135newAudio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MOORFIELDS_EYE_HOSPITAL_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "BarkentineClincHutchingsStreet135new();" );
  NextDestination.setAttribute( "onClick", "BusTerminatesHerenewAudio();" );
}

function MileEndStationBowRoad702new(){getRidOfDestination()
  MileEndStationBowRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "MileEnd702"){
    NextDestination.setAttribute( "onClick", "MileEndStationBowRoad702newAudio();" );
  } else if (routeDestination === "BethnalGreen702") {
    NextDestination.setAttribute( "onClick", "MileEndStationBowRoad702newAudio();" );
  }
}
function MileEndStationBowRoad702newAudio(){
  MileEndStationBowRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "MileEnd702"){
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  } else if (routeDestination === "BethnalGreen702") {
    NextDestination.setAttribute( "onClick", "MileEndStation702new();" );
  }
}
function MileEndStation702new(){getRidOfDestination()
  MileEndStation()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "MileEnd702"){
    NextDestination.setAttribute( "onClick", "MileEndStation702newAudio();" );
  } else if (routeDestination === "BethnalGreen702") {
    NextDestination.setAttribute( "onClick", "MileEndStation702newAudio();" );
  }
}
function MileEndStation702newAudio(){
  MileEndStationAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "MileEnd702"){
    NextDestination.setAttribute( "onClick", "BusTerminatesHerenewAudio();" );
  } else if (routeDestination === "BethnalGreen702") {
    NextDestination.setAttribute( "onClick", "CobornRoad702new();" );
  }
}
function CobornRoad702new(){getRidOfDestination()
  CobornRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "MileEnd702"){
    NextDestination.setAttribute( "onClick", "CobornRoad702newAudio();" );
  } else if (routeDestination === "BethnalGreen702") {
    NextDestination.setAttribute( "onClick", "CobornRoad702newAudio();" );
  }
}
function CobornRoad702newAudio(){
  CobornRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "MileEnd702"){
    NextDestination.setAttribute( "onClick", "MileEndStation702new();" );
  } else if (routeDestination === "BethnalGreen702") {
    NextDestination.setAttribute( "onClick", "BowRoadStation702new();" );
  }
}
function BowRoadStation702new(){getRidOfDestination()
  BowRoadStation()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "MileEnd702"){
    NextDestination.setAttribute( "onClick", "BowRoadStation702newAudio();" );
  } else if (routeDestination === "BethnalGreen702") {
    NextDestination.setAttribute( "onClick", "BowRoadStation702newAudio();" );
  }
}
function BowRoadStation702newAudio(){
  BowRoadStationAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "MileEnd702"){
    NextDestination.setAttribute( "onClick", "CobornRoad702new();" );
  } else if (routeDestination === "BethnalGreen702") {
    NextDestination.setAttribute( "onClick", "BowChurchStation702new();" );
  }
}
function BowChurchStation702new(){getRidOfDestination()
  BowChurchStation()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "MileEnd702"){
    NextDestination.setAttribute( "onClick", "BowChurchStation702newAudio();" );
  } else if (routeDestination === "BethnalGreen702") {
    NextDestination.setAttribute( "onClick", "BowChurchStation702newAudio();" );
  }
}
function BowChurchStation702newAudio(){
  BowChurchStationAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "MileEnd702"){
    NextDestination.setAttribute( "onClick", "BowRoadStation702new();" );
  } else if (routeDestination === "BethnalGreen702") {
    NextDestination.setAttribute( "onClick", "BowBusGarage702new();" );
  }
}
function BowChurch702new(){getRidOfDestination()
  BowChurch()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "MileEnd702"){
    NextDestination.setAttribute( "onClick", "BowChurch702newAudio();" );
  } else if (routeDestination === "BethnalGreen702") {
    NextDestination.setAttribute( "onClick", "BowChurch702newAudio();" );
  }
}
function BowChurch702newAudio(){
  BowChurchAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "MileEnd702"){
    NextDestination.setAttribute( "onClick", "BowChurchStation702new();" );
  } else if (routeDestination === "BethnalGreen702") {
    NextDestination.setAttribute( "onClick", "TredegarRoad702new();" );
  }
}
function BowBusGarage702new(){getRidOfDestination()
  BowChurchStation()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "MileEnd702"){
    NextDestination.setAttribute( "onClick", "BowBusGarage702newAudio();" );
  } else if (routeDestination === "BethnalGreen702") {
    NextDestination.setAttribute( "onClick", "BowBusGarage702newAudio();" );
  }
}
function BowBusGarage702newAudio(){
  BowBusGarageAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "MileEnd702"){
    NextDestination.setAttribute( "onClick", "BowChurch702new();" );
  } else if (routeDestination === "BethnalGreen702") {
    NextDestination.setAttribute( "onClick", "TredegarRoad702new();" );
  }
}
function TredegarRoad702new(){getRidOfDestination()
  TredegarRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "MileEnd702"){
    NextDestination.setAttribute( "onClick", "TredegarRoad702newAudio();" );
  } else if (routeDestination === "BethnalGreen702") {
    NextDestination.setAttribute( "onClick", "TredegarRoad702newAudio();" );
  }
}
function TredegarRoad702newAudio(){
  TredegarRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "MileEnd702"){
    NextDestination.setAttribute( "onClick", "BowBusGarage702new();" );
  } else if (routeDestination === "BethnalGreen702") {
    NextDestination.setAttribute( "onClick", "RomanRoadMarket702new();" );
  }
}
function RomanRoadMarket702new(){getRidOfDestination()
  RomanRoadMarket()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "MileEnd702"){
    NextDestination.setAttribute( "onClick", "RomanRoadMarket702newAudio();" );
  } else if (routeDestination === "BethnalGreen702") {
    NextDestination.setAttribute( "onClick", "RomanRoadMarket702newAudio();" );
  }
}
function RomanRoadMarket702newAudio(){
  RomanRoadMarketAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "MileEnd702"){
    NextDestination.setAttribute( "onClick", "TredegarRoad702new();" );
  } else if (routeDestination === "BethnalGreen702") {
    NextDestination.setAttribute( "onClick", "OldFordRoad702new();" );
  }
}
function OldFordRoad702new(){getRidOfDestination()
  OldFordRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "MileEnd702"){
    NextDestination.setAttribute( "onClick", "OldFordRoad702newAudio();" );
  } else if (routeDestination === "BethnalGreen702") {
    NextDestination.setAttribute( "onClick", "OldFordRoad702newAudio();" );
  }
}
function OldFordRoad702newAudio(){
  OldFordRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "MileEnd702"){
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  } else if (routeDestination === "BethnalGreen702") {
    NextDestination.setAttribute( "onClick", "ParnellRoad702new();" );
  }
}
function ParnellRoad702new(){getRidOfDestination()
  ParnellRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "MileEnd702"){
    NextDestination.setAttribute( "onClick", "ParnellRoad702newAudio();" );
  } else if (routeDestination === "BethnalGreen702") {
    NextDestination.setAttribute( "onClick", "ParnellRoad702newAudio();" );
  }
}
function ParnellRoad702newAudio(){
  ParnellRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "MileEnd702"){
    NextDestination.setAttribute( "onClick", "RomanRoadMarket702new();" );
  } else if (routeDestination === "BethnalGreen702") {
    NextDestination.setAttribute( "onClick", "AliceLane702new();" );
  }
}
function AliceLane702new(){getRidOfDestination()
  AliceLane()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "MileEnd702"){
    NextDestination.setAttribute( "onClick", "AliceLane702newAudio();" );
  } else if (routeDestination === "BethnalGreen702") {
    NextDestination.setAttribute( "onClick", "AliceLane702newAudio();" );
  }
}
function AliceLane702newAudio(){
  AliceLaneAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "MileEnd702"){
    NextDestination.setAttribute( "onClick", "ParnellRoad702new();" );
  } else if (routeDestination === "BethnalGreen702") {
    NextDestination.setAttribute( "onClick", "FordRoad702new();" );
  }
}
function FordRoad702new(){getRidOfDestination()
  FordRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "MileEnd702"){
    NextDestination.setAttribute( "onClick", "FordRoad702newAudio();" );
  } else if (routeDestination === "BethnalGreen702") {
    NextDestination.setAttribute( "onClick", "FordRoad702newAudio();" );
  }
}
function FordRoad702newAudio(){
  FordRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "MileEnd702"){
    NextDestination.setAttribute( "onClick", "AliceLane702new();" );
  } else if (routeDestination === "BethnalGreen702") {
    NextDestination.setAttribute( "onClick", "MedwayRoad702new();" );
  }
}
function MedwayRoad702new(){getRidOfDestination()
  MedwayRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "MileEnd702"){
    NextDestination.setAttribute( "onClick", "MedwayRoad702newAudio();" );
  } else if (routeDestination === "BethnalGreen702") {
    NextDestination.setAttribute( "onClick", "MedwayRoad702newAudio();" );
  }
}
function MedwayRoad702newAudio(){
  MedwayRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "MileEnd702"){
    NextDestination.setAttribute( "onClick", "FordRoad702new();" );
  } else if (routeDestination === "BethnalGreen702") {
    NextDestination.setAttribute( "onClick", "HaverfieldGreenGroveRoad702new();" );
  }
}
function HaverfieldGreenGroveRoad702new(){getRidOfDestination()
  HaverfieldGreenGroveRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "MileEnd702"){
    NextDestination.setAttribute( "onClick", "HaverfieldGreenGroveRoad702newAudio();" );
  } else if (routeDestination === "BethnalGreen702") {
    NextDestination.setAttribute( "onClick", "HaverfieldGreenGroveRoad702newAudio();" );
  }
}
function HaverfieldGreenGroveRoad702newAudio(){
  HaverfieldGreenGroveRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "MileEnd702"){
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  } else if (routeDestination === "BethnalGreen702") {
    NextDestination.setAttribute( "onClick", "BonnerStreet702new();" );
  }
}
function RomanRoadGroveRoad702new(){getRidOfDestination()
  RomanRoadGroveRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "MileEnd702"){
    NextDestination.setAttribute( "onClick", "RomanRoadGroveRoad702newAudio();" );
  } else if (routeDestination === "BethnalGreen702") {
    NextDestination.setAttribute( "onClick", "BonnerStreet702newAudio();" );
  }
}
function RomanRoadGroveRoad702newAudio(){
  RomanRoadGroveRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "MileEnd702"){
    NextDestination.setAttribute( "onClick", "MedwayRoad702new();" );
  } else if (routeDestination === "BethnalGreen702") {
    NextDestination.setAttribute( "onClick", "CyprusStreet702new();" );
  }
}
function SmartStreet702new(){getRidOfDestination()
  SmartStreet()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "MileEnd702"){
    NextDestination.setAttribute( "onClick", "SmartStreet702newAudio();" );
  } else if (routeDestination === "BethnalGreen702") {
    NextDestination.setAttribute( "onClick", "BonnerStreet702newAudio();" );
  }
}
function SmartStreet702newAudio(){
  SmartStreetAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "MileEnd702"){
    NextDestination.setAttribute( "onClick", "RomanRoadGroveRoad702new();" );
  } else if (routeDestination === "BethnalGreen702") {
    NextDestination.setAttribute( "onClick", "CyprusStreet702new();" );
  }
}
function BonnerStreet702new(){getRidOfDestination()
  BonnerStreet()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "MileEnd702"){
    NextDestination.setAttribute( "onClick", "BonnerStreet702newAudio();" );
  } else if (routeDestination === "BethnalGreen702") {
    NextDestination.setAttribute( "onClick", "BonnerStreet702newAudio();" );
  }
}
function BonnerStreet702newAudio(){
  BonnerStreetAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "MileEnd702"){
    NextDestination.setAttribute( "onClick", "SmartStreet702new();" );
  } else if (routeDestination === "BethnalGreen702") {
    NextDestination.setAttribute( "onClick", "CyprusStreet702new();" );
  }
}
function CyprusStreet702new(){getRidOfDestination()
  CyprusStreet()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "MileEnd702"){
    NextDestination.setAttribute( "onClick", "CyprusStreet702newAudio();" );
  } else if (routeDestination === "BethnalGreen702") {
    NextDestination.setAttribute( "onClick", "CyprusStreet702newAudio();" );
  }
}
function CyprusStreet702newAudio(){
  CyprusStreetAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "MileEnd702"){
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  } else if (routeDestination === "BethnalGreen702") {
    NextDestination.setAttribute( "onClick", "BonnerRoad702new();" );
  }
}
function BurnhamStreet702new(){getRidOfDestination()
  BurnhamStreet()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "MileEnd702"){
    NextDestination.setAttribute( "onClick", "BurnhamStreet702newAudio();" );
  } else if (routeDestination === "BethnalGreen702") {
    NextDestination.setAttribute( "onClick", "BurnhamStreet702newAudio();" );
  }
}
function BurnhamStreet702newAudio(){
  BurnhamStreetAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "MileEnd702"){
    NextDestination.setAttribute( "onClick", "BonnerStreet702new();" );
  } else if (routeDestination === "BethnalGreen702") {
    NextDestination.setAttribute( "onClick", "BusTerminatesHerenewAudio();" );
  }
}
function BethnalGreenStation702new(){getRidOfDestination()
  BethnalGreenStation()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "MileEnd702"){
    NextDestination.setAttribute( "onClick", "BethnalGreenStation702newAudio();" );
  } else if (routeDestination === "BethnalGreen702") {
    NextDestination.setAttribute( "onClick", "BethnalGreenStation702newAudio();" );
  }
}
function BethnalGreenStation702newAudio(){
  BethnalGreenStationAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "MileEnd702"){
    NextDestination.setAttribute( "onClick", "BurnhamStreet702new();" );
  } else if (routeDestination === "BethnalGreen702") {
    NextDestination.setAttribute( "onClick", "BusTerminatesHerenewAudio();" );
  }
}
function PeelGrove702new(){getRidOfDestination()
  PeelGrove()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "MileEnd702"){
    NextDestination.setAttribute( "onClick", "PeelGrove702newAudio();" );
  } else if (routeDestination === "BethnalGreen702") {
    NextDestination.setAttribute( "onClick", "PeelGrove702newAudio();" );
  }
}
function PeelGrove702newAudio(){
  PeelGroveAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "MileEnd702"){
    NextDestination.setAttribute( "onClick", "BethnalGreenStation702new();" );
  } else if (routeDestination === "BethnalGreen702") {
    NextDestination.setAttribute( "onClick", "BusTerminatesHerenewAudio();" );
  }
}
function BonnerRoad702new(){getRidOfDestination()
  BonnerRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "MileEnd702"){
    NextDestination.setAttribute( "onClick", "BonnerRoad702newAudio();" );
  } else if (routeDestination === "BethnalGreen702") {
    NextDestination.setAttribute( "onClick", "BonnerRoad702newAudio();" );
  }
}
function BonnerRoad702newAudio(){
  BonnerRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "MileEnd702"){
    NextDestination.setAttribute( "onClick", "PeelGrove702new();" );
  } else if (routeDestination === "BethnalGreen702") {
    NextDestination.setAttribute( "onClick", "BusTerminatesHerenewAudio();" );
  }
}