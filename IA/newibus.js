function mewOldStreetStation135btn(){
  mewCrossharbourASDA135()
  newIbusdisplayRouteDesibus.innerHTML = "135 to Old Street, Provost Street";
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
};
function nenCrossharbour135btn(){
  mewOldStreetStation135()
  newIbusdisplayRouteDesibus.innerHTML = "135 to Crossharbour, Asda";
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
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_Crossharbour_Asda_001.mp3";
          iBusAudio.play();
          iBusAudio.onended = function() {
            iBusAudio.src="hhjff.mp3";
            iBusAudio.play();
          }
        }
      }
    } 
  }
};

function mewCrossharbourASDA135(){
  newIbusdisplayDes.innerHTML = topDestination+"Crossharbour ASDA"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
//   BackDestination.setAttribute( "onClick", "mewBusTerminatesHere();" );
  NextDestination.setAttribute( "onClick", "mewCrossharbourASDA135Audio();" );
}
function mewCrossharbourASDA135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Crossharbour_Asda_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewCrossharbourASDA135();" );
  NextDestination.setAttribute( "onClick", "mewCrossharbourStation135();" );
}
function mewCrossharbourStation135(){
  newIbusdisplayDes.innerHTML = topDestination+"Crossharbour Station"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "block";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewCrossharbourStation135Audio();" );
  NextDestination.setAttribute( "onClick", "mewCrossharbourStation135Audio();" );
}
function mewIsleofDogsAsda135(){
  newIbusdisplayDes.innerHTML = topDestination+"Isle of Dogs Asda"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewIsleofDogsAsda135Audio();" );
  NextDestination.setAttribute( "onClick", "mewCrossharbourStation135Audio();" );
}
function mewIsleofDogsAsda135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ISLE_OF_DOGS_ASDA_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "BusTerminatesHerenewIbus();" );
  NextDestination.setAttribute( "onClick", "mewHarbourExchangeSquare135();" );
}
function mewCrossharbourStation135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Crossharbour_Station_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewIsleofDogsAsda135();" );
  NextDestination.setAttribute( "onClick", "mewHarbourExchangeSquare135();" );
}
function mewHarbourExchangeSquare135(){
  newIbusdisplayDes.innerHTML = topDestination+"Harbour Exchange Square"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewHarbourExchangeSquare135Audio();" );
  NextDestination.setAttribute( "onClick", "mewHarbourExchangeSquare135Audio();" );
}
function mewHarbourExchangeSquare135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Harbour_Exchange_Square_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewEastFerryRoad135();" );
  NextDestination.setAttribute( "onClick", "mewJackDashHouse135();" );
}
function mewJackDashHouse135(){
  newIbusdisplayDes.innerHTML = topDestination+"Jack Dash House"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewJackDashHouse135Audio();" );
  NextDestination.setAttribute( "onClick", "mewJackDashHouse135Audio();" );
}
function mewJackDashHouse135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Jack_Dash_House_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewHarbourExchangeSquare135();" );
  NextDestination.setAttribute( "onClick", "mewStewartStreet135();" );
}
function mewStewartStreet135(){
  newIbusdisplayDes.innerHTML = topDestination+"Stewart Street"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewStewartStreet135Audio();" );
  NextDestination.setAttribute( "onClick", "mewStewartStreet135Audio();" );
}
function mewStewartStreet135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Stewart_street_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewJackDashHouse135();" );
  NextDestination.setAttribute( "onClick", "mewStJohnsPark135();" );
}
function mewStJohnsPark135(){
  newIbusdisplayDes.innerHTML = topDestination+"St John's Park"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewStJohnsPark135Audio();" );
  NextDestination.setAttribute( "onClick", "mewStJohnsPark135Audio();" );
}
function mewStJohnsPark135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ST_JOHNS_PARK_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewStewartStreet135();" );
  NextDestination.setAttribute( "onClick", "mewCubittTownSchool135();" );
}
function mewCubittTownSchool135(){
  newIbusdisplayDes.innerHTML = topDestination+"Cubbit Town School"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewCubittTownSchool135Audio();" );
  NextDestination.setAttribute( "onClick", "mewCubittTownSchool135Audio();" );
}
function mewCubittTownSchool135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Cubbit_Town_School_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewStJohnsPark135();" );
  NextDestination.setAttribute( "onClick", "mewPierStreet135();" );
}
function mewPierStreet135(){
  newIbusdisplayDes.innerHTML = topDestination+"Pier Street"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewPierStreet135Audio();" );
  NextDestination.setAttribute( "onClick", "mewPierStreet135Audio();" );
}
function mewPierStreet135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Pier_Street_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewCubittTownSchool135();" );
  NextDestination.setAttribute( "onClick", "mewChrisChurchISleofDogs135();" );
}
function mewChrisChurchISleofDogs135(){
  newIbusdisplayDes.innerHTML = topDestination+"Christ Church / Isle of Dogs"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewChrisChurchISleofDogs135Audio();" );
  NextDestination.setAttribute( "onClick", "mewChrisChurchISleofDogs135Audio();" );
}
function mewChrisChurchISleofDogs135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Isle_of_DOGS_POLICE_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewPierStreet135();" );
  NextDestination.setAttribute( "onClick", "mewIslandGardensStation135();" );
}
function mewIslandGardensStation135(){
  newIbusdisplayDes.innerHTML = topDestination+"Island Gardens Station"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "block";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewIslandGardensStation135Audio();" );
  NextDestination.setAttribute( "onClick", "mewIslandGardensStation135Audio();" );
}
function mewIslandGardensStation135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ISLAND_GARDENS_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewChrisChurchISleofDogs135();" );
  NextDestination.setAttribute( "onClick", "mewEastFerryRoad135();" );
}
function mewEastFerryRoad135(){
  newIbusdisplayDes.innerHTML = topDestination+"East Ferry Road"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewEastFerryRoad135Audio();" );
  NextDestination.setAttribute( "onClick", "mewEastFerryRoad135Audio();" );
}
function mewEastFerryRoad135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_EAST_FERRY_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewCrossharbourStation135();" );
  NextDestination.setAttribute( "onClick", "mewMudchuteStationSpindriftAve135();" );
}
function mewMudchuteStationSpindriftAve135(){
  newIbusdisplayDes.innerHTML = topDestination+"Mudchute Station / Spindrift Ave"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewEastFerryRoad135Audio();" );
  NextDestination.setAttribute( "onClick", "mewMudchuteStationSpindriftAve135Audio();" );
}
function mewMudchuteStationSpindriftAve135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MUDCHUTE_STATION_SPINDRIFT_AVENUE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewMudchuteStationSpindriftAve135();" );
  NextDestination.setAttribute( "onClick", "mewTelegraphPlace135();" );
}
function mewTelegraphPlace135(){
  newIbusdisplayDes.innerHTML = topDestination+"Telegraph Place"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewTelegraphPlace135Audio();" );
  NextDestination.setAttribute( "onClick", "mewTelegraphPlace135Audio();" );
}
function mewMudchuteStation135(){
  newIbusdisplayDes.innerHTML = topDestination+"Mudchute Station"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "block";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewMudchuteStation135Audio();" );
  NextDestination.setAttribute( "onClick", "mewTelegraphPlace135Audio();" );
}
function mewMillwallPark135(){
  newIbusdisplayDes.innerHTML = topDestination+"Millwall Park"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewMillwallPark135Audio();" );
  NextDestination.setAttribute( "onClick", "mewTelegraphPlace135Audio();" );
}
function mewMillwallPark135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MILLWALL_PARK_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewIslandGardensStation135();" );
  NextDestination.setAttribute( "onClick", "mewStEdmundsSchool135();" );
}
function mewMudchuteStation135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MUDCHUTE_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewMillwallPark135();" );
  NextDestination.setAttribute( "onClick", "mewStEdmundsSchool135();" );
}
function mewTelegraphPlace135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_TELEGRAPH_PLACE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewMudchuteStation135();" );
  NextDestination.setAttribute( "onClick", "mewStEdmundsSchool135();" );
}
function mewStEdmundsSchool135(){
  newIbusdisplayDes.innerHTML = topDestination+"St Edmund's School"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewStEdmundsSchool135Audio();" );
  NextDestination.setAttribute( "onClick", "mewStEdmundsSchool135Audio();" );
}
function mewStEdmundsSchool135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ST_EDMUNDS_SCHOOL_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewTelegraphPlace135();" );
  NextDestination.setAttribute( "onClick", "mewCrewsStreet135();" );
}
function mewCrewsStreet135(){
  newIbusdisplayDes.innerHTML = topDestination+"Crews Street"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewStEdmundsSchool135Audio();" );
  NextDestination.setAttribute( "onClick", "mewCrewsStreet135Audio();" );
}
function mewCrewsStreet135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CREWS_STREET_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewCrewsStreet135();" );
  NextDestination.setAttribute( "onClick", "mewArnhemWharfPrimarySchool135();" );
}
function mewArnhemWharfPrimarySchool135(){
  newIbusdisplayDes.innerHTML = topDestination+"Crews Street"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewArnhemWharfPrimarySchool135Audio();" );
  NextDestination.setAttribute( "onClick", "mewArnhemWharfPrimarySchool135Audio();" );
}
function mewCrewsStreettheSpaceTheatre135(){
  newIbusdisplayDes.innerHTML = topDestination+"Crews Street / the Space Theater"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewCrewsStreettheSpaceTheatre135Audio();" );
  NextDestination.setAttribute( "onClick", "mewArnhemWharfPrimarySchool135Audio();" );
}
function mewCrewsStreettheSpaceTheatre135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CREWS_STREET_THE_SPACE_THEATRE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewStEdmundsSchool135();" );
  NextDestination.setAttribute( "onClick", "mewSirJohnMcdougallGardens135();" );
}
function mewArnhemWharfPrimarySchool135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ARNHEM_WHARF_PRIMARY_SCHOOL_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewCrewsStreettheSpaceTheatre135();" );
  NextDestination.setAttribute( "onClick", "mewSirJohnMcdougallGardens135();" );
}
function mewSirJohnMcdougallGardens135(){
  newIbusdisplayDes.innerHTML = topDestination+"Sir John Mcdougall Gardens"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewSirJohnMcdougallGardens135Audio();" );
  NextDestination.setAttribute( "onClick", "mewSirJohnMcdougallGardens135Audio();" );
}
function mewSirJohnMcdougallGardens135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SIR_JOHN_MCDOUGAL_GARDENS_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewArnhemWharfPrimarySchool135();" );
  NextDestination.setAttribute( "onClick", "mewBarkantineClinicHutchingsStreet135();" );
}
function mewBarkantineClinicHutchingsStreet135(){
  newIbusdisplayDes.innerHTML = topDestination+"Barkantine Clinic / Hutchings Street"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewBarkantineClinicHutchingsStreet135Audio();" );
  NextDestination.setAttribute( "onClick", "mewBarkantineClinicHutchingsStreet135Audio();" );
}
function mewBarkantineClinicHutchingsStreet135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BARKANTINE_CLINIC_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HUTCHINGS_STREET_001.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
      }
    }
  }
  BackDestination.setAttribute( "onClick", "mewSirJohnMcdougallGardens135();" );
  NextDestination.setAttribute( "onClick", "mewByngStreet135();" );
}
function mewByngStreet135(){
  newIbusdisplayDes.innerHTML = topDestination+"Byng Street"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewBarkantineClinicHutchingsStreet135Audio();" );
  NextDestination.setAttribute( "onClick", "mewByngStreet135Audio();" );
}
function mewByngStreet135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BYNG_STREET_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "ByngStreet135Audio();" );
  NextDestination.setAttribute( "onClick", "mewMarshWallHeronQuay135();" );
}
function mewMarshWallHeronQuay135(){
  newIbusdisplayDes.innerHTML = topDestination+"Marsh Wall / Heron Quay"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewMarshWallHeronQuay135Audio();" );
  NextDestination.setAttribute( "onClick", "mewMarshWallHeronQuay135Audio();" );
}
function mewCubaStreet135(){
  newIbusdisplayDes.innerHTML = topDestination+"Cuba Street"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewCubaStreet135Audio();" );
  NextDestination.setAttribute( "onClick", "mewCanaryWharfStation135Audio();" );
}
function mewCubaStreet135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CUBA_STREET_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewBarkantineClinicHutchingsStreet135();" );
  NextDestination.setAttribute( "onClick", "mewCanadaSquareSouthCanaryWharfStn135();" );
}
function mewMarshWallHeronQuay135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MARSH_WALL_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HERON_QUAYS_001.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
      }
    }
  }
  BackDestination.setAttribute( "onClick", "mewCubaStreet135();" );
  NextDestination.setAttribute( "onClick", "mewCanaryWharfStation135();" );
}
function mewCanaryWharfStation135(){
  newIbusdisplayDes.innerHTML = topDestination+"Canary Wharf Station"+topDestination2;
  underground_Roundel.style.display = "block";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "block";
  elizabeth_line_Roundel.style.display = "block";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewCanaryWharfStation135Audio();" );
  NextDestination.setAttribute( "onClick", "mewCanaryWharfStation135Audio();" );
}
function mewCanaryWharfStation135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CANARY_WHARF_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewMarshWallHeronQuay135();" );
  NextDestination.setAttribute( "onClick", "mewCanadaSquareSouthCanaryWharfStn135();" );
}
function mewCanadaSquareSouthCanaryWharfStn135(){
  newIbusdisplayDes.innerHTML = topDestination+"Canada Square South / Canary Wharf Stn"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewMarshWallHeronQuay135Audio();" );
  NextDestination.setAttribute( "onClick", "mewCanadaSquareSouthCanaryWharfStn135Audio();" );
}
function mewCanadaSquareSouthCanaryWharfStn135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CANADA_SQUARE_SOUTH_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewCanadaSquareSouthCanaryWharfStn135();" );
  NextDestination.setAttribute( "onClick", "mewCanaryWharfStationtwo135();" );
}
function mewCanaryWharfStationtwo135(){
  newIbusdisplayDes.innerHTML = topDestination+"Canary Wharf Station"+topDestination2;
  underground_Roundel.style.display = "block";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "block";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "block";
  BackDestination.setAttribute( "onClick", "mewCanaryWharfStationtwo135Audio();" );
  NextDestination.setAttribute( "onClick", "mewCanaryWharfStationtwo135Audio();" );
}
function mewCanaryWharfStationtwo135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CANARY_WHARF_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewCanaryWharfStation135();" );
  NextDestination.setAttribute( "onClick", "mewWestIndiaAvenue135();" );
}
function mewWestIndiaAvenue135(){
  newIbusdisplayDes.innerHTML = topDestination+"West India Avenue"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewWestIndiaAvenue135Audio();" );
  NextDestination.setAttribute( "onClick", "mewWestIndiaAvenue135Audio();" );
}
function mewWestIndiaAvenue135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_WEST_INDIA_AVENUE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewCanaryWharfStationtwo135();" );
  NextDestination.setAttribute( "onClick", "mewWestferryCircusCanaryWharfPier135();" );
}
function mewWestferryCircusCanaryWharfPier135(){
  newIbusdisplayDes.innerHTML = topDestination+"Westferry Circus / Canary Wharf Pier"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewWestIndiaAvenue135Audio();" );
  NextDestination.setAttribute( "onClick", "mewWestferryCircusCanaryWharfPier135Audio();" );
}
function mewWestferryCircusCanaryWharfPier135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_WESTFERRY_CIRCUS_CANARY_WHARF_PIER_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewWestferryCircusCanaryWharfPier135();" );
  NextDestination.setAttribute( "onClick", "mewWestferryStation135();" );
}
function mewWestferryStation135(){
  newIbusdisplayDes.innerHTML = topDestination+"Westferry Station"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewWestferryCircusCanaryWharfPier135Audio();" );
  NextDestination.setAttribute( "onClick", "mewWestferryStation135Audio();" );
}
function mewWestferryStation135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_WESTFERRY_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewWestferryStation135();" );
  NextDestination.setAttribute( "onClick", "mewSalterStreet135();" );
}
function mewSalterStreet135(){
  newIbusdisplayDes.innerHTML = topDestination+"Salter Street"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewWestferryStation135Audio();" );
  NextDestination.setAttribute( "onClick", "mewSalterStreet135Audio();" );
}
function mewSalterStreet135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SALTER_STREET_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewSalterStreet135();" );
  NextDestination.setAttribute( "onClick", "mewLimehousePoliceStation135();" );
}
function mewLimehousePoliceStation135(){
  newIbusdisplayDes.innerHTML = topDestination+"Limehouse Police Station"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewLimehousePoliceStation135Audio();" );
  NextDestination.setAttribute( "onClick", "mewLimehousePoliceStation135Audio();" );
}
function mewWestferryStationtwo135(){
  newIbusdisplayDes.innerHTML = topDestination+"Westferry Station"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "block";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewWestferryStationtwo135Audio();" );
  NextDestination.setAttribute( "onClick", "mewLimehousePoliceStation135Audio();" );
}
function mewWestferryStationtwo135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_WESTFERRY_CIRCUS_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewWestIndiaAvenue135();" );
  NextDestination.setAttribute( "onClick", "mewLimehouseTownHall135();" );
}
function mewLimehousePoliceStation135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_LIMEHOUSE_POLICE_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewWestferryStationtwo135();" );
  NextDestination.setAttribute( "onClick", "mewLimehouseTownHall135();" );
}
function mewLimehouseTownHall135(){
  newIbusdisplayDes.innerHTML = topDestination+"Limehouse Town Hall"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewSalterStreet135Audio();" );
  NextDestination.setAttribute( "onClick", "mewLimehouseTownHall135Audio();" );
}
function mewLimehouseTownHall135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_LIMEHOUSE_TOWN_HALL_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewLimehouseTownHall135();" );
  NextDestination.setAttribute( "onClick", "mewLowellStreet135();" );
}
function mewLowellStreet135(){
  newIbusdisplayDes.innerHTML = topDestination+"Lowell Street"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  DLR_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewLowellStreet135Audio();" );
  NextDestination.setAttribute( "onClick", "mewLowellStreet135Audio();" );
}
function mewSalmonLane135(){
  newIbusdisplayDes.innerHTML = topDestination+"Salmon Lane"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  DLR_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewSalmonLane135Audio();" );
  NextDestination.setAttribute( "onClick", "mewLowellStreet135Audio();" );
}
function mewBurdettRoad135(){
  newIbusdisplayDes.innerHTML = topDestination+"Burdett Road"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  DLR_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewBurdettRoad135Audio();" );
  NextDestination.setAttribute( "onClick", "mewLowellStreet135Audio();" );
}
function mewBurdettRoad135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BURDETT_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewLimehousePoliceStation135();" );
  NextDestination.setAttribute( "onClick", "mewLimehouseStation135();" );
}
function mewSalmonLane135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SALMON_LANE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewBurdettRoad135();" );
  NextDestination.setAttribute( "onClick", "mewLimehouseStation135();" );
}
function mewLowellStreet135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_LOWELL_STREET_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewSalmonLane135();" );
  NextDestination.setAttribute( "onClick", "mewLimehouseStation135();" );
}
function mewLimehouseStation135(){
  newIbusdisplayDes.innerHTML = topDestination+"Limehouse Station"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "block";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "block";
  BackDestination.setAttribute( "onClick", "mewLimehouseStation135Audio();" );
  NextDestination.setAttribute( "onClick", "mewLimehouseStation135Audio();" );
}
function mewLimehouseStation135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_LIMEHOUSE_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewLowellStreet135();" );
  NextDestination.setAttribute( "onClick", "mewStepneyMethodistChurch135();" );
}
function mewStepneyMethodistChurch135(){
  newIbusdisplayDes.innerHTML = topDestination+"Stepney Methodist Church"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewStepneyMethodistChurch135Audio();" );
  NextDestination.setAttribute( "onClick", "mewStepneyMethodistChurch135Audio();" );
}
function mewStepneyMethodistChurch135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_STEPNEY_METHODIST_CHURCH_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewLimehouseStation135();" );
  NextDestination.setAttribute( "onClick", "mewMarionRichardsonSchool135();" );
}
function mewMarionRichardsonSchool135(){
  newIbusdisplayDes.innerHTML = topDestination+"Marion Richards School"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewStepneyMethodistChurch135Audio();" );
  NextDestination.setAttribute( "onClick", "mewMarionRichardsonSchool135Audio();" );
}
function mewMarionRichardsonSchool135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MARION_RICHARDS_SCHOOL_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewMarionRichardsonSchool135();" );
  NextDestination.setAttribute( "onClick", "mewExmouthEstate135();" );
}
function mewExmouthEstate135(){
  newIbusdisplayDes.innerHTML = topDestination+"Exmouth Estate"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewMarionRichardsonSchool135Audio();" );
  NextDestination.setAttribute( "onClick", "mewExmouthEstate135Audio();" );
}
function mewExmouthEstate135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_EXMOUTH_ESTATE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewExmouthEstate135();" );
  NextDestination.setAttribute( "onClick", "mewStMarysStMichaelsChurch135();" );
}
function mewStMarysStMichaelsChurch135(){
  newIbusdisplayDes.innerHTML = topDestination+"St Mary's & St Michael's Church"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewStMarysStMichaelsChurch135Audio();" );
  NextDestination.setAttribute( "onClick", "mewStMarysStMichaelsChurch135Audio();" );
}
function mewArbourSquare135(){
  newIbusdisplayDes.innerHTML = topDestination+"Arbour Square"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewArbourSquare135Audio();" );
  NextDestination.setAttribute( "onClick", "mewStMarysStMichaelsChurch135Audio();" );
}
function mewArbourSquare135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ARBOUR_SQUARE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewStepneyMethodistChurch135();" );
  NextDestination.setAttribute( "onClick", "mewWatneyMarket135();" );
}
function mewStMarysStMichaelsChurch135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ST_MARY_N_ST_MICHAEL_CHURCH_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewArbourSquare135();" );
  NextDestination.setAttribute( "onClick", "mewWatneyMarket135();" );
}
function mewWatneyMarket135(){
  newIbusdisplayDes.innerHTML = topDestination+"Watney Market"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewWatneyMarket135Audio();" );
  NextDestination.setAttribute( "onClick", "mewWatneyMarket135Audio();" );
}
function mewWatneyMarket135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_WATNEY_MARKET_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewStMarysStMichaelsChurch135();" );
  NextDestination.setAttribute( "onClick", "mewNewRoad135();" );
}
function mewNewRoad135(){
  newIbusdisplayDes.innerHTML = topDestination+"New Road"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewNewRoad135Audio();" );
  NextDestination.setAttribute( "onClick", "mewNewRoad135Audio();" );
}
function mewNewRoad135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_NEW_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewWatneyMarket135();" );
  NextDestination.setAttribute( "onClick", "mewHenriquesStreet135();" );
}
function mewHenriquesStreet135(){
  newIbusdisplayDes.innerHTML = topDestination+"Henriques Street"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewHenriquesStreet135Audio();" );
  NextDestination.setAttribute( "onClick", "mewHenriquesStreet135Audio();" );
}
function mewHenriquesStreet135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HENRIQUES_STREET_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewNewRoad135();" );
  NextDestination.setAttribute( "onClick", "mewAldgateEastStation135();" );
}
function mewAldgateEastStation135(){
  newIbusdisplayDes.innerHTML = topDestination+"Aldgate East Station"+topDestination2;
  underground_Roundel.style.display = "block";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewAldgateEastStation135Audio();" );
  NextDestination.setAttribute( "onClick", "mewAldgateEastStation135Audio();" );
}
function mewAldgateEastStation135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ALDGATE_EAST_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewHenriquesStreet135();" );
  NextDestination.setAttribute( "onClick", "mewDukesPlace135();" );
}
function mewDukesPlace135(){
  newIbusdisplayDes.innerHTML = topDestination+"Duke's Place"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewAldgateEastStation135Audio();" );
  NextDestination.setAttribute( "onClick", "mewDukesPlace135Audio();" );
}
function mewDukesPlace135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_DUKES_PLACE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewDukesPlace135();" );
  NextDestination.setAttribute( "onClick", "mewLiverpoolStreetStation135();" );
}
function mewLiverpoolStreetStation135(){
  newIbusdisplayDes.innerHTML = topDestination+"Liverpool Street Station"+topDestination2;
  underground_Roundel.style.display = "block";
  overground_Roundel.style.display = "block";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "block";
  National_Rail_logo.style.display = "block";
  BackDestination.setAttribute( "onClick", "mewLiverpoolStreetStation135Audio();" );
  NextDestination.setAttribute( "onClick", "mewLiverpoolStreetStation135Audio();" );
}
function mewStBotolphStreet135(){
  newIbusdisplayDes.innerHTML = topDestination+"St Botolph Street"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewStBotolphStreet135Audio();" );
  NextDestination.setAttribute( "onClick", "mewLiverpoolStreetStation135Audio();" );
}
function mewStBotolphStreet135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ST_BOTOLPH_STREET_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewAldgateEastStation135();" );
  NextDestination.setAttribute( "onClick", "mewPrimroseStreet135();" );
}
function mewLiverpoolStreetStation135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_LIVERPOOL_STREET_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewStBotolphStreet135();" );
  NextDestination.setAttribute( "onClick", "mewPrimroseStreet135();" );
}
function mewPrimroseStreet135(){
  newIbusdisplayDes.innerHTML = topDestination+"Primrose Street"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewPrimroseStreet135Audio();" );
  NextDestination.setAttribute( "onClick", "mewPrimroseStreet135Audio();" );
}
function mewPrimroseStreet135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_PRIMROSE_STREET_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewLiverpoolStreetStation135();" );
  NextDestination.setAttribute( "onClick", "mewShoreditchHighStreetStation135();" );
}
function mewShoreditchHighStreetStation135(){
  newIbusdisplayDes.innerHTML = topDestination+"Shoreditch High Street Station"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "block";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewShoreditchHighStreetStation135Audio();" );
  NextDestination.setAttribute( "onClick", "mewShoreditchHighStreetStation135Audio();" );
}
function mewCommercialStreetWorshipStreet135(){
  newIbusdisplayDes.innerHTML = topDestination+"Commercial Street / Worship Street"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewCommercialStreetWorshipStreet135Audio();" );
  NextDestination.setAttribute( "onClick", "mewShoreditchHighStreetStation135Audio();" );
}
function mewCommercialStreetWorshipStreet135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_COMMERCIAL_STREET_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_WORSHIP_STREET_001.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
      }
    }
  }
  BackDestination.setAttribute( "onClick", "mewPrimroseStreet135();" );
  NextDestination.setAttribute( "onClick", "mewCurtainRoad135();" );
}
function mewShoreditchHighStreetStation135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SHOREDITCH_HIGH_STREET_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewCommercialStreetWorshipStreet135();" );
  NextDestination.setAttribute( "onClick", "mewCurtainRoad135();" );
}
function mewCurtainRoad135(){
  newIbusdisplayDes.innerHTML = topDestination+"Curtain Road"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewCurtainRoad135Audio();" );
  NextDestination.setAttribute( "onClick", "mewCurtainRoad135Audio();" );
}
function mewCurtainRoad135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CURTAIN_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewCurtainRoad135();" );
  NextDestination.setAttribute( "onClick", "mewRaveyStreet135();" );
}
function mewRaveyStreet135(){
  newIbusdisplayDes.innerHTML = topDestination+"Ravey Street"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewRaveyStreet135Audio();" );
  NextDestination.setAttribute( "onClick", "mewRaveyStreet135Audio();" );
}
function mewRaveyStreet135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_RAVEY_STREET_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewRaveyStreet135();" );
  NextDestination.setAttribute( "onClick", "mewOldStreetStation135();" );
}
function mewOldStreetStation135(){
  newIbusdisplayDes.innerHTML = topDestination+"Old Street Station"+topDestination2;
  underground_Roundel.style.display = "block";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "block";
  BackDestination.setAttribute( "onClick", "mewOldStreetStation135Audio();" );
  NextDestination.setAttribute( "onClick", "mewOldStreetStation135Audio();" );
}
function mewShoreditchFireStation135(){
  newIbusdisplayDes.innerHTML = topDestination+"Shoreditch Fire Station"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewShoreditchFireStation135Audio();" );
  NextDestination.setAttribute( "onClick", "mewOldStreetStation135Audio();" );
}
function mewPitfieldStreet135(){
  newIbusdisplayDes.innerHTML = topDestination+"Pitfield Street"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewPitfieldStreet135Audio();" );
  NextDestination.setAttribute( "onClick", "mewOldStreetStation135Audio();" );
}
function mewPitfieldStreet135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_PITFIELD_STREET_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewShoreditchHighStreetStation135();" );
  NextDestination.setAttribute( "onClick", "mewOldStreetRoundabout135();" );
}
function mewShoreditchFireStation135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SHOREDITCH_FIRE_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewPitfieldStreet135();" );
  NextDestination.setAttribute( "onClick", "mewOldStreetRoundabout135();" );
}
function mewOldStreetStation135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_OLD_STREET_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewShoreditchFireStation135();" );
  NextDestination.setAttribute( "onClick", "mewOldStreetRoundabout135();" );
}
function mewOldStreetRoundabout135(){
  newIbusdisplayDes.innerHTML = topDestination+"Old Street Roundabout"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewOldStreetRoundabout135Audio();" );
  NextDestination.setAttribute( "onClick", "mewOldStreetRoundabout135Audio();" );
}
function mewOldStreetRoundabout135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_OLD_STREET_ROUNDABOUT_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewOldStreetRoundabout135();" );
  NextDestination.setAttribute( "onClick", "mewMoorfieldsEyeHospital135();" );
}
function mewMoorfieldsEyeHospital135(){
  newIbusdisplayDes.innerHTML = topDestination+"Moorfields Eye Hospital"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "mewMoorfieldsEyeHospital135Audio();" );
  NextDestination.setAttribute( "onClick", "mewMoorfieldsEyeHospital135Audio();" );
}
function mewMoorfieldsEyeHospital135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MOORFIELDS_EYE_HOSPITAL_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "mewMoorfieldsEyeHospital135();" );
  NextDestination.setAttribute( "onClick", "BusTerminatesHerenewIbus();" );
}
