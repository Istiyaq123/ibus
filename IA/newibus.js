function BusTerminatesHerenewIbus(){
  newIbusdisplayDes.innerHTML = topDestination+"Bus Terminates Here"+topDestination2;
}

function newOldStreetStation135btn(){
  newCrossharbourASDA135()
  newIbusdisplayRouteDesibus.innerHTML = "135 to Old Street, Provost Street";
  var audio = 1;
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
function nenCrossharbour135btn(){
  newOldStreetStation135()
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
  };
}


function newCrossharbourASDA135(){
  newIbusdisplayDes.innerHTML = topDestination+"Crossharbour ASDA"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
//   BackDestination.setAttribute( "onClick", "newBusTerminatesHere();" );
  NextDestination.setAttribute( "onClick", "newCrossharbourASDA135Audio();" );
}
function newCrossharbourASDA135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Crossharbour_Asda_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newCrossharbourASDA135();" );
  NextDestination.setAttribute( "onClick", "newCrossharbourStation135();" );
}
function newCrossharbourStation135(){
  newIbusdisplayDes.innerHTML = topDestination+"Crossharbour Station"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "block";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newCrossharbourStation135Audio();" );
  NextDestination.setAttribute( "onClick", "newCrossharbourStation135Audio();" );
}
function newIsleofDogsAsda135(){
  newIbusdisplayDes.innerHTML = topDestination+"Isle of Dogs Asda"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newIsleofDogsAsda135Audio();" );
  NextDestination.setAttribute( "onClick", "newCrossharbourStation135Audio();" );
}
function newIsleofDogsAsda135(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ISLE_OF_DOGS_ASDA_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "BusTerminatesHerenewIbus();" );
  NextDestination.setAttribute( "onClick", "newHarbourExchangeSquare135();" );
}
function newCrossharbourStation135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Crossharbour_Station_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newIsleofDogsAsda135();" );
  NextDestination.setAttribute( "onClick", "newHarbourExchangeSquare135();" );
}
function newHarbourExchangeSquare135(){
  newIbusdisplayDes.innerHTML = topDestination+"Harbour Exchange Square"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newHarbourExchangeSquare135Audio();" );
  NextDestination.setAttribute( "onClick", "newHarbourExchangeSquare135Audio();" );
}
function newHarbourExchangeSquare135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Harbour_Exchange_Square_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newEastFerryRoad135();" );
  NextDestination.setAttribute( "onClick", "newJackDashHouse135();" );
}
function newJackDashHouse135(){
  newIbusdisplayDes.innerHTML = topDestination+"Jack Dash House"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newJackDashHouse135Audio();" );
  NextDestination.setAttribute( "onClick", "newJackDashHouse135Audio();" );
}
function newJackDashHouse135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Jack_Dash_House_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newHarbourExchangeSquare135();" );
  NextDestination.setAttribute( "onClick", "newStewartStreet135();" );
}
function newStewartStreet135(){
  newIbusdisplayDes.innerHTML = topDestination+"Stewart Street"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newStewartStreet135Audio();" );
  NextDestination.setAttribute( "onClick", "newStewartStreet135Audio();" );
}
function newStewartStreet135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Stewart_street_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newJackDashHouse135();" );
  NextDestination.setAttribute( "onClick", "newStJohnsPark135();" );
}
function newStJohnsPark135(){
  newIbusdisplayDes.innerHTML = topDestination+"St John's Park"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newStJohnsPark135Audio();" );
  NextDestination.setAttribute( "onClick", "newStJohnsPark135Audio();" );
}
function newStJohnsPark135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ST_JOHNS_PARK_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newStewartStreet135();" );
  NextDestination.setAttribute( "onClick", "newCubittTownSchool135();" );
}
function newCubittTownSchool135(){
  newIbusdisplayDes.innerHTML = topDestination+"Cubbit Town School"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newCubittTownSchool135Audio();" );
  NextDestination.setAttribute( "onClick", "newCubittTownSchool135Audio();" );
}
function newCubittTownSchool135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Cubbit_Town_School_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newStJohnsPark135();" );
  NextDestination.setAttribute( "onClick", "newPierStreet135();" );
}
function newPierStreet135(){
  newIbusdisplayDes.innerHTML = topDestination+"Pier Street"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newPierStreet135Audio();" );
  NextDestination.setAttribute( "onClick", "newPierStreet135Audio();" );
}
function newPierStreet135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Pier_Street_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newCubittTownSchool135();" );
  NextDestination.setAttribute( "onClick", "newChrisChurchISleofDogs135();" );
}
function newChrisChurchISleofDogs135(){
  newIbusdisplayDes.innerHTML = topDestination+"Christ Church / Isle of Dogs"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newChrisChurchISleofDogs135Audio();" );
  NextDestination.setAttribute( "onClick", "newChrisChurchISleofDogs135Audio();" );
}
function newChrisChurchISleofDogs135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Isle_of_DOGS_POLICE_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newPierStreet135();" );
  NextDestination.setAttribute( "onClick", "newIslandGardensStation135();" );
}
function newIslandGardensStation135(){
  newIbusdisplayDes.innerHTML = topDestination+"Island Gardens Station"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "block";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newIslandGardensStation135Audio();" );
  NextDestination.setAttribute( "onClick", "newIslandGardensStation135Audio();" );
}
function newIslandGardensStation135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ISLAND_GARDENS_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newChrisChurchISleofDogs135();" );
  NextDestination.setAttribute( "onClick", "newEastFerryRoad135();" );
}
function newEastFerryRoad135(){
  newIbusdisplayDes.innerHTML = topDestination+"East Ferry Road"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newEastFerryRoad135Audio();" );
  NextDestination.setAttribute( "onClick", "newEastFerryRoad135Audio();" );
}
function newEastFerryRoad135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_EAST_FERRY_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newCrossharbourStation135();" );
  NextDestination.setAttribute( "onClick", "newMudchuteStationSpindriftAve135();" );
}
function newMudchuteStationSpindriftAve135(){
  newIbusdisplayDes.innerHTML = topDestination+"Mudchute Station / Spindrift Ave"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newEastFerryRoad135Audio();" );
  NextDestination.setAttribute( "onClick", "newMudchuteStationSpindriftAve135Audio();" );
}
function newMudchuteStationSpindriftAve135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MUDCHUTE_STATION_SPINDRIFT_AVENUE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newMudchuteStationSpindriftAve135();" );
  NextDestination.setAttribute( "onClick", "newTelegraphPlace135();" );
}
function newTelegraphPlace135(){
  newIbusdisplayDes.innerHTML = topDestination+"Telegraph Place"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newTelegraphPlace135Audio();" );
  NextDestination.setAttribute( "onClick", "newTelegraphPlace135Audio();" );
}
function newMudchuteStation135(){
  newIbusdisplayDes.innerHTML = topDestination+"Mudchute Station"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "block";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newMudchuteStation135Audio();" );
  NextDestination.setAttribute( "onClick", "newTelegraphPlace135Audio();" );
}
function newMillwallPark135(){
  newIbusdisplayDes.innerHTML = topDestination+"Millwall Park"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newMillwallPark135Audio();" );
  NextDestination.setAttribute( "onClick", "newTelegraphPlace135Audio();" );
}
function newMillwallPark135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MILLWALL_PARK_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newIslandGardensStation135();" );
  NextDestination.setAttribute( "onClick", "newStEdmundsSchool135();" );
}
function newMudchuteStation135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MUDCHUTE_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newMillwallPark135();" );
  NextDestination.setAttribute( "onClick", "newStEdmundsSchool135();" );
}
function newTelegraphPlace135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_TELEGRAPH_PLACE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newMudchuteStation135();" );
  NextDestination.setAttribute( "onClick", "newStEdmundsSchool135();" );
}
function newStEdmundsSchool135(){
  newIbusdisplayDes.innerHTML = topDestination+"St Edmund's School"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newStEdmundsSchool135Audio();" );
  NextDestination.setAttribute( "onClick", "newStEdmundsSchool135Audio();" );
}
function newStEdmundsSchool135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ST_EDMUNDS_SCHOOL_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newTelegraphPlace135();" );
  NextDestination.setAttribute( "onClick", "newCrewsStreet135();" );
}
function newCrewsStreet135(){
  newIbusdisplayDes.innerHTML = topDestination+"Crews Street"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newStEdmundsSchool135Audio();" );
  NextDestination.setAttribute( "onClick", "newCrewsStreet135Audio();" );
}
function newCrewsStreet135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CREWS_STREET_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newCrewsStreet135();" );
  NextDestination.setAttribute( "onClick", "newArnhemWharfPrimarySchool135();" );
}
function newArnhemWharfPrimarySchool135(){
  newIbusdisplayDes.innerHTML = topDestination+"Crews Street"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newArnhemWharfPrimarySchool135Audio();" );
  NextDestination.setAttribute( "onClick", "newArnhemWharfPrimarySchool135Audio();" );
}
function newCrewsStreettheSpaceTheatre135(){
  newIbusdisplayDes.innerHTML = topDestination+"Crews Street / the Space Theater"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newCrewsStreettheSpaceTheatre135Audio();" );
  NextDestination.setAttribute( "onClick", "newArnhemWharfPrimarySchool135Audio();" );
}
function newCrewsStreettheSpaceTheatre135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CREWS_STREET_THE_SPACE_THEATRE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newStEdmundsSchool135();" );
  NextDestination.setAttribute( "onClick", "newSirJohnMcdougallGardens135();" );
}
function newArnhemWharfPrimarySchool135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ARNHEM_WHARF_PRIMARY_SCHOOL_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newCrewsStreettheSpaceTheatre135();" );
  NextDestination.setAttribute( "onClick", "newSirJohnMcdougallGardens135();" );
}
function newSirJohnMcdougallGardens135(){
  newIbusdisplayDes.innerHTML = topDestination+"Sir John Mcdougall Gardens"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newSirJohnMcdougallGardens135Audio();" );
  NextDestination.setAttribute( "onClick", "newSirJohnMcdougallGardens135Audio();" );
}
function newSirJohnMcdougallGardens135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SIR_JOHN_MCDOUGAL_GARDENS_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newArnhemWharfPrimarySchool135();" );
  NextDestination.setAttribute( "onClick", "newBarkantineClinicHutchingsStreet135();" );
}
function newBarkantineClinicHutchingsStreet135(){
  newIbusdisplayDes.innerHTML = topDestination+"Barkantine Clinic / Hutchings Street"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newBarkantineClinicHutchingsStreet135Audio();" );
  NextDestination.setAttribute( "onClick", "newBarkantineClinicHutchingsStreet135Audio();" );
}
function newBarkantineClinicHutchingsStreet135Audio(){
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
  BackDestination.setAttribute( "onClick", "newSirJohnMcdougallGardens135();" );
  NextDestination.setAttribute( "onClick", "newByngStreet135();" );
}
function newByngStreet135(){
  newIbusdisplayDes.innerHTML = topDestination+"Byng Street"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newBarkantineClinicHutchingsStreet135Audio();" );
  NextDestination.setAttribute( "onClick", "newByngStreet135Audio();" );
}
function newByngStreet135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BYNG_STREET_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "ByngStreet135Audio();" );
  NextDestination.setAttribute( "onClick", "newMarshWallHeronQuay135();" );
}
function newMarshWallHeronQuay135(){
  newIbusdisplayDes.innerHTML = topDestination+"Marsh Wall / Heron Quay"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newMarshWallHeronQuay135Audio();" );
  NextDestination.setAttribute( "onClick", "newMarshWallHeronQuay135Audio();" );
}
function newCubaStreet135(){
  newIbusdisplayDes.innerHTML = topDestination+"Cuba Street"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newCubaStreet135Audio();" );
  NextDestination.setAttribute( "onClick", "newCanaryWharfStation135Audio();" );
}
function newCubaStreet135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CUBA_STREET_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newBarkantineClinicHutchingsStreet135();" );
  NextDestination.setAttribute( "onClick", "newCanadaSquareSouthCanaryWharfStn135();" );
}
function newMarshWallHeronQuay135Audio(){
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
  BackDestination.setAttribute( "onClick", "newCubaStreet135();" );
  NextDestination.setAttribute( "onClick", "newCanaryWharfStation135();" );
}
function newCanaryWharfStation135(){
  newIbusdisplayDes.innerHTML = topDestination+"Canary Wharf Station"+topDestination2;
  underground_Roundel.style.display = "block";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "block";
  elizabeth_line_Roundel.style.display = "block";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newCanaryWharfStation135Audio();" );
  NextDestination.setAttribute( "onClick", "newCanaryWharfStation135Audio();" );
}
function newCanaryWharfStation135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CANARY_WHARF_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newMarshWallHeronQuay135();" );
  NextDestination.setAttribute( "onClick", "newCanadaSquareSouthCanaryWharfStn135();" );
}
function newCanadaSquareSouthCanaryWharfStn135(){
  newIbusdisplayDes.innerHTML = topDestination+"Canada Square South / Canary Wharf Stn"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newMarshWallHeronQuay135Audio();" );
  NextDestination.setAttribute( "onClick", "newCanadaSquareSouthCanaryWharfStn135Audio();" );
}
function newCanadaSquareSouthCanaryWharfStn135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CANADA_SQUARE_SOUTH_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newCanadaSquareSouthCanaryWharfStn135();" );
  NextDestination.setAttribute( "onClick", "newCanaryWharfStationtwo135();" );
}
function newCanaryWharfStationtwo135(){
  newIbusdisplayDes.innerHTML = topDestination+"Canary Wharf Station"+topDestination2;
  underground_Roundel.style.display = "block";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "block";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "block";
  BackDestination.setAttribute( "onClick", "newCanaryWharfStationtwo135Audio();" );
  NextDestination.setAttribute( "onClick", "newCanaryWharfStationtwo135Audio();" );
}
function newCanaryWharfStationtwo135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CANARY_WHARF_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newCanaryWharfStation135();" );
  NextDestination.setAttribute( "onClick", "newWestIndiaAvenue135();" );
}
function newWestIndiaAvenue135(){
  newIbusdisplayDes.innerHTML = topDestination+"West India Avenue"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newWestIndiaAvenue135Audio();" );
  NextDestination.setAttribute( "onClick", "newWestIndiaAvenue135Audio();" );
}
function newWestIndiaAvenue135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_WEST_INDIA_AVENUE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newCanaryWharfStationtwo135();" );
  NextDestination.setAttribute( "onClick", "newWestferryCircusCanaryWharfPier135();" );
}
function newWestferryCircusCanaryWharfPier135(){
  newIbusdisplayDes.innerHTML = topDestination+"Westferry Circus / Canary Wharf Pier"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newWestIndiaAvenue135Audio();" );
  NextDestination.setAttribute( "onClick", "newWestferryCircusCanaryWharfPier135Audio();" );
}
function newWestferryCircusCanaryWharfPier135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_WESTFERRY_CIRCUS_CANARY_WHARF_PIER_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newWestferryCircusCanaryWharfPier135();" );
  NextDestination.setAttribute( "onClick", "newWestferryStation135();" );
}
function newWestferryStation135(){
  newIbusdisplayDes.innerHTML = topDestination+"Westferry Station"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newWestferryCircusCanaryWharfPier135Audio();" );
  NextDestination.setAttribute( "onClick", "newWestferryStation135Audio();" );
}
function newWestferryStation135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_WESTFERRY_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newWestferryStation135();" );
  NextDestination.setAttribute( "onClick", "newSalterStreet135();" );
}
function newSalterStreet135(){
  newIbusdisplayDes.innerHTML = topDestination+"Salter Street"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newWestferryStation135Audio();" );
  NextDestination.setAttribute( "onClick", "newSalterStreet135Audio();" );
}
function newSalterStreet135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SALTER_STREET_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newSalterStreet135();" );
  NextDestination.setAttribute( "onClick", "newLimehousePoliceStation135();" );
}
function newLimehousePoliceStation135(){
  newIbusdisplayDes.innerHTML = topDestination+"Limehouse Police Station"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newLimehousePoliceStation135Audio();" );
  NextDestination.setAttribute( "onClick", "newLimehousePoliceStation135Audio();" );
}
function newWestferryStationtwo135(){
  newIbusdisplayDes.innerHTML = topDestination+"Westferry Station"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "block";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newWestferryStationtwo135Audio();" );
  NextDestination.setAttribute( "onClick", "newLimehousePoliceStation135Audio();" );
}
function newWestferryStationtwo135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_WESTFERRY_CIRCUS_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newWestIndiaAvenue135();" );
  NextDestination.setAttribute( "onClick", "newLimehouseTownHall135();" );
}
function newLimehousePoliceStation135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_LIMEHOUSE_POLICE_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newWestferryStationtwo135();" );
  NextDestination.setAttribute( "onClick", "newLimehouseTownHall135();" );
}
function newLimehouseTownHall135(){
  newIbusdisplayDes.innerHTML = topDestination+"Limehouse Town Hall"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newSalterStreet135Audio();" );
  NextDestination.setAttribute( "onClick", "newLimehouseTownHall135Audio();" );
}
function newLimehouseTownHall135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_LIMEHOUSE_TOWN_HALL_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newLimehouseTownHall135();" );
  NextDestination.setAttribute( "onClick", "newLowellStreet135();" );
}
function newLowellStreet135(){
  newIbusdisplayDes.innerHTML = topDestination+"Lowell Street"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  DLR_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none":
  BackDestination.setAttribute( "onClick", "newLowellStreet135Audio();" );
  NextDestination.setAttribute( "onClick", "newLowellStreet135Audio();" );
}
function newSalmonLane135(){
  newIbusdisplayDes.innerHTML = topDestination+"Salmon Lane"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  DLR_Roundel.style.display = "none":
  National_Rail_logo.style.display = "none":
  BackDestination.setAttribute( "onClick", "newSalmonLane135Audio();" );
  NextDestination.setAttribute( "onClick", "newLowellStreet135Audio();" );
}
function newBurdettRoad135(){
  newIbusdisplayDes.innerHTML = topDestination+"Burdett Road"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  DLR_Roundel.style.display = "none":
  National_Rail_logo.style.display = "none":
  BackDestination.setAttribute( "onClick", "newBurdettRoad135Audio();" );
  NextDestination.setAttribute( "onClick", "newLowellStreet135Audio();" );
}
function newBurdettRoad135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BURDETT_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newLimehousePoliceStation135();" );
  NextDestination.setAttribute( "onClick", "newLimehouseStation135();" );
}
function newSalmonLane135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SALMON_LANE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newBurdettRoad135();" );
  NextDestination.setAttribute( "onClick", "newLimehouseStation135();" );
}
function newLowellStreet135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_LOWELL_STREET_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newSalmonLane135();" );
  NextDestination.setAttribute( "onClick", "newLimehouseStation135();" );
}
function newLimehouseStation135(){
  newIbusdisplayDes.innerHTML = topDestination+"Limehouse Station"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "block";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "block";
  BackDestination.setAttribute( "onClick", "newLimehouseStation135Audio();" );
  NextDestination.setAttribute( "onClick", "newLimehouseStation135Audio();" );
}
function newLimehouseStation135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_LIMEHOUSE_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newLowellStreet135();" );
  NextDestination.setAttribute( "onClick", "newStepneyMethodistChurch135();" );
}
function newStepneyMethodistChurch135(){
  newIbusdisplayDes.innerHTML = topDestination+"Stepney Methodist Church"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newStepneyMethodistChurch135Audio();" );
  NextDestination.setAttribute( "onClick", "newStepneyMethodistChurch135Audio();" );
}
function newStepneyMethodistChurch135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_STEPNEY_METHODIST_CHURCH_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newLimehouseStation135();" );
  NextDestination.setAttribute( "onClick", "newMarionRichardsonSchool135();" );
}
function newMarionRichardsonSchool135(){
  newIbusdisplayDes.innerHTML = topDestination+"Marion Richards School"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newStepneyMethodistChurch135Audio();" );
  NextDestination.setAttribute( "onClick", "newMarionRichardsonSchool135Audio();" );
}
function newMarionRichardsonSchool135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MARION_RICHARDS_SCHOOL_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newMarionRichardsonSchool135();" );
  NextDestination.setAttribute( "onClick", "newExmouthEstate135();" );
}
function newExmouthEstate135(){
  newIbusdisplayDes.innerHTML = topDestination+"Exmouth Estate"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newMarionRichardsonSchool135Audio();" );
  NextDestination.setAttribute( "onClick", "newExmouthEstate135Audio();" );
}
function newExmouthEstate135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_EXMOUTH_ESTATE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newExmouthEstate135();" );
  NextDestination.setAttribute( "onClick", "newStMarysStMichaelsChurch135();" );
}
function newStMarysStMichaelsChurch135(){
  newIbusdisplayDes.innerHTML = topDestination+"St Mary's & St Michael's Church"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newStMarysStMichaelsChurch135Audio();" );
  NextDestination.setAttribute( "onClick", "newStMarysStMichaelsChurch135Audio();" );
}
function newArbourSquare135(){
  newIbusdisplayDes.innerHTML = topDestination+"Arbour Square"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newArbourSquare135Audio();" );
  NextDestination.setAttribute( "onClick", "newStMarysStMichaelsChurch135Audio();" );
}
function newArbourSquare135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ARBOUR_SQUARE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newStepneyMethodistChurch135();" );
  NextDestination.setAttribute( "onClick", "newWatneyMarket135();" );
}
function newStMarysStMichaelsChurch135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ST_MARY_N_ST_MICHAEL_CHURCH_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newArbourSquare135();" );
  NextDestination.setAttribute( "onClick", "newWatneyMarket135();" );
}
function newWatneyMarket135(){
  newIbusdisplayDes.innerHTML = topDestination+"Watney Market"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newWatneyMarket135Audio();" );
  NextDestination.setAttribute( "onClick", "newWatneyMarket135Audio();" );
}
function newWatneyMarket135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_WATNEY_MARKET_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newStMarysStMichaelsChurch135();" );
  NextDestination.setAttribute( "onClick", "newNewRoad135();" );
}
function newNewRoad135(){
  newIbusdisplayDes.innerHTML = topDestination+"New Road"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newNewRoad135Audio();" );
  NextDestination.setAttribute( "onClick", "newNewRoad135Audio();" );
}
function newNewRoad135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_NEW_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newWatneyMarket135();" );
  NextDestination.setAttribute( "onClick", "newHenriquesStreet135();" );
}
function newHenriquesStreet135(){
  newIbusdisplayDes.innerHTML = topDestination+"Henriques Street"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newHenriquesStreet135Audio();" );
  NextDestination.setAttribute( "onClick", "newHenriquesStreet135Audio();" );
}
function newHenriquesStreet135(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HENRIQUES_STREET_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newNewRoad135();" );
  NextDestination.setAttribute( "onClick", "newAldgateEastStation135();" );
}
function newAldgateEastStation135(){
  newIbusdisplayDes.innerHTML = topDestination+"Aldgate East Station"+topDestination2;
  underground_Roundel.style.display = "block";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newAldgateEastStation135Audio();" );
  NextDestination.setAttribute( "onClick", "newAldgateEastStation135Audio();" );
}
function newAldgateEastStation135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ALDGATE_EAST_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newHenriquesStreet135();" );
  NextDestination.setAttribute( "onClick", "newDukesPlace135();" );
}
function newDukesPlace135(){
  newIbusdisplayDes.innerHTML = topDestination+"Duke's Place"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newAldgateEastStation135Audio();" );
  NextDestination.setAttribute( "onClick", "newDukesPlace135Audio();" );
}
function newDukesPlace135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_DUKES_PLACE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newDukesPlace135();" );
  NextDestination.setAttribute( "onClick", "newLiverpoolStreetStation135();" );
}
function newLiverpoolStreetStation135(){
  newIbusdisplayDes.innerHTML = topDestination+"Liverpool Street Station"+topDestination2;
  underground_Roundel.style.display = "block";
  overground_Roundel.style.display = "block";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "block";
  National_Rail_logo.style.display = "block";
  BackDestination.setAttribute( "onClick", "newLiverpoolStreetStation135Audio();" );
  NextDestination.setAttribute( "onClick", "newLiverpoolStreetStation135Audio();" );
}
function newStBotolphStreet135(){
  newIbusdisplayDes.innerHTML = topDestination+"St Botolph Street"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newStBotolphStreet135Audio();" );
  NextDestination.setAttribute( "onClick", "newLiverpoolStreetStation135Audio();" );
}
function newStBotolphStreet135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ST_BOTOLPH_STREET_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newAldgateEastStation135();" );
  NextDestination.setAttribute( "onClick", "newPrimroseStreet135();" );
}
function newLiverpoolStreetStation135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_LIVERPOOL_STREET_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newStBotolphStreet135();" );
  NextDestination.setAttribute( "onClick", "newPrimroseStreet135();" );
}
function newPrimroseStreet135(){
  newIbusdisplayDes.innerHTML = topDestination+"Primrose Street"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newPrimroseStreet135Audio();" );
  NextDestination.setAttribute( "onClick", "newPrimroseStreet135Audio();" );
}
function newPrimroseStreet135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_PRIMROSE_STREET_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newLiverpoolStreetStation135();" );
  NextDestination.setAttribute( "onClick", "newShoreditchHighStreetStation135();" );
}
function newShoreditchHighStreetStation135(){
  newIbusdisplayDes.innerHTML = topDestination+"Shoreditch High Street Station"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "block";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newShoreditchHighStreetStation135Audio();" );
  NextDestination.setAttribute( "onClick", "newShoreditchHighStreetStation135Audio();" );
}
function newCommercialStreetWorshipStreet135(){
  newIbusdisplayDes.innerHTML = topDestination+"Commercial Street / Worship Street"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newCommercialStreetWorshipStreet135Audio();" );
  NextDestination.setAttribute( "onClick", "newShoreditchHighStreetStation135Audio();" );
}
function newCommercialStreetWorshipStreet135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_COMMERCIAL_STREET_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_WORSHIP_STREET_001
.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
      }
    }
  }
  BackDestination.setAttribute( "onClick", "newPrimroseStreet135();" );
  NextDestination.setAttribute( "onClick", "newCurtainRoad135();" );
}
function newShoreditchHighStreetStation135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SHOREDITCH_HIGH_STREET_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newCommercialStreetWorshipStreet135();" );
  NextDestination.setAttribute( "onClick", "newCurtainRoad135();" );
}
function newCurtainRoad135(){
  newIbusdisplayDes.innerHTML = topDestination+"Curtain Road"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newCurtainRoad135Audio();" );
  NextDestination.setAttribute( "onClick", "newCurtainRoad135Audio();" );
}
function newCurtainRoad135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CURTAIN_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newCurtainRoad135();" );
  NextDestination.setAttribute( "onClick", "newRaveyStreet135();" );
}
function newRaveyStreet135(){
  newIbusdisplayDes.innerHTML = topDestination+"Ravey Street"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newRaveyStreet135Audio();" );
  NextDestination.setAttribute( "onClick", "newRaveyStreet135Audio();" );
}
function newRaveyStreet135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_RAVEY_STREET_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newRaveyStreet135();" );
  NextDestination.setAttribute( "onClick", "newOldStreetStation135();" );
}
function newOldStreetStation135(){
  newIbusdisplayDes.innerHTML = topDestination+"Old Street Station"+topDestination2;
  underground_Roundel.style.display = "block";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "block";
  BackDestination.setAttribute( "onClick", "newOldStreetStation135Audio();" );
  NextDestination.setAttribute( "onClick", "newOldStreetStation135Audio();" );
}
function newShoreditchFireStation135(){
  newIbusdisplayDes.innerHTML = topDestination+"Shoreditch Fire Station"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newShoreditchFireStation135Audio();" );
  NextDestination.setAttribute( "onClick", "newOldStreetStation135Audio();" );
}
function newPitfieldStreet135(){
  newIbusdisplayDes.innerHTML = topDestination+"Pitfield Street"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newPitfieldStreet135Audio();" );
  NextDestination.setAttribute( "onClick", "newOldStreetStation135Audio();" );
}
function newPitfieldStreet135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_PITFIELD_STREET_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newShoreditchHighStreetStation135();" );
  NextDestination.setAttribute( "onClick", "newOldStreetRoundabout135();" );
}
function newShoreditchFireStation135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SHOREDITCH_FIRE_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newPitfieldStreet135();" );
  NextDestination.setAttribute( "onClick", "newOldStreetRoundabout135();" );
}
function newOldStreetStation135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_OLD_STREET_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newShoreditchFireStation135();" );
  NextDestination.setAttribute( "onClick", "newOldStreetRoundabout135();" );
}
function newOldStreetRoundabout135(){
  newIbusdisplayDes.innerHTML = topDestination+"Old Street Roundabout"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newOldStreetRoundabout135Audio();" );
  NextDestination.setAttribute( "onClick", "newOldStreetRoundabout135Audio();" );
}
function newOldStreetRoundabout135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_OLD_STREET_ROUNDABOUT_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newOldStreetRoundabout135();" );
  NextDestination.setAttribute( "onClick", "newMoorfieldsEyeHospital135();" );
}
function newMoorfieldsEyeHospital135(){
  newIbusdisplayDes.innerHTML = topDestination+"Moorfields Eye Hospital"+topDestination2;
  underground_Roundel.style.display = "none";
  overground_Roundel.style.display = "none";
  DLR_Roundel.style.display = "none";
  elizabeth_line_Roundel.style.display = "none";
  National_Rail_logo.style.display = "none";
  BackDestination.setAttribute( "onClick", "newMoorfieldsEyeHospital135Audio();" );
  NextDestination.setAttribute( "onClick", "newMoorfieldsEyeHospital135Audio();" );
}
function newMoorfieldsEyeHospital135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MOORFIELDS_EYE_HOSPITAL_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newMoorfieldsEyeHospital135();" );
  NextDestination.setAttribute( "onClick", "BusTerminatesHerenewIbus();" );
}
