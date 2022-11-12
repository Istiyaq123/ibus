function newOldStreetStation135btn(){
  CrossharbourASDA135()
  newIbusdisplayRouteDesibus.innerHTML = "135 to Old Street, Provost Street";
}


function newCrossharbourASDA135(){
  newIbusdisplayDes.innerHTML = topDestination+"Crossharbour ASDA"+topDestination2;
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
  newIbusdisplayDes.innerHTML = topDestination+"Crossharbour Station"+topDestination2+topDestinationimgpos+"3.5px"+topDestinationiumg+"https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/DLR_roundel.svg/1200px-DLR_roundel.svg.png"+topDestinationimgend;
  BackDestination.setAttribute( "onClick", "newCrossharbourASDA135();" );
  NextDestination.setAttribute( "onClick", "newCrossharbourStation135Audio();" );
}
function newCrossharbourStation135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Crossharbour_Station_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newCrossharbourStation135();" );
  NextDestination.setAttribute( "onClick", "newHarbourExchangeSquare135();" );
}
function newHarbourExchangeSquare135(){
  newIbusdisplayDes.innerHTML = topDestination+"Harbour Exchange Square"+topDestination2;
  BackDestination.setAttribute( "onClick", "newCrossharbourStation135Audio();" );
  NextDestination.setAttribute( "onClick", "newHarbourExchangeSquare135Audio();" );
}
function newHarbourExchangeSquare135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Harbour_Exchange_Square_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newHarbourExchangeSquare135();" );
  NextDestination.setAttribute( "onClick", "newJackDashHouse135();" );
}
function newJackDashHouse135(){
  newIbusdisplayDes.innerHTML = topDestination+"Jack Dash House"+topDestination2;
  BackDestination.setAttribute( "onClick", "newHarbourExchangeSquare135Audio();" );
  NextDestination.setAttribute( "onClick", "newJackDashHouse135Audio();" );
}
function newJackDashHouse135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Jack_Dash_House_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newJackDashHouse135();" );
  NextDestination.setAttribute( "onClick", "newStewartStreet135();" );
}
function newStewartStreet135(){
  newIbusdisplayDes.innerHTML = topDestination+"Stewart Street"+topDestination2;
  BackDestination.setAttribute( "onClick", "newJackDashHouse135Audio();" );
  NextDestination.setAttribute( "onClick", "newStewartStreet135Audio();" );
}
function newStewartStreet135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Stewart_street_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newStewartStreet135();" );
  NextDestination.setAttribute( "onClick", "newStJohnsPark135();" );
}
function newStJohnsPark135(){
  newIbusdisplayDes.innerHTML = topDestination+"St John's Park"+topDestination2;
  BackDestination.setAttribute( "onClick", "newStewartStreet135Audio();" );
  NextDestination.setAttribute( "onClick", "newStJohnsPark135Audio();" );
}
function newStJohnsPark135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ST_JOHNS_PARK_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newStJohnsPark135();" );
  NextDestination.setAttribute( "onClick", "newCubittTownSchool135();" );
}
function newCubittTownSchool135(){
  newIbusdisplayDes.innerHTML = topDestination+"Cubbit Town School"+topDestination2;
  BackDestination.setAttribute( "onClick", "newStJohnsPark135Audio();" );
  NextDestination.setAttribute( "onClick", "newCubittTownSchool135Audio();" );
}
function newCubittTownSchool135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Cubbit_Town_School_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newCubittTownSchool135();" );
  NextDestination.setAttribute( "onClick", "newPierStreet135();" );
}
function newPierStreet135(){
  newIbusdisplayDes.innerHTML = topDestination+"Pier Street"+topDestination2;
  BackDestination.setAttribute( "onClick", "newCubittTownSchool135Audio();" );
  NextDestination.setAttribute( "onClick", "newPierStreet135Audio();" );
}
function newPierStreet135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Pier_Street_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newPierStreet135();" );
  NextDestination.setAttribute( "onClick", "newChrisChurchISleofDogs135();" );
}
function newChrisChurchISleofDogs135(){
  newIbusdisplayDes.innerHTML = topDestination+"Christ Church / Isle of Dogs"+topDestination2;
  BackDestination.setAttribute( "onClick", "newPierStreet135Audio();" );
  NextDestination.setAttribute( "onClick", "newChrisChurchISleofDogs135Audio();" );
}
function newChrisChurchISleofDogs135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Isle_of_DOGS_POLICE_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newChrisChurchISleofDogs135();" );
  NextDestination.setAttribute( "onClick", "newIslandGardensStation135();" );
}
function newIslandGardensStation135(){
  newIbusdisplayDes.innerHTML = topDestination+"Island Gardens Station"+topDestination2+topDestinationimgpos+"3.5px"+topDestinationiumg+"https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/DLR_roundel.svg/1200px-DLR_roundel.svg.png"+topDestinationimgend;
  BackDestination.setAttribute( "onClick", "newChrisChurchISleofDogs135Audio();" );
  NextDestination.setAttribute( "onClick", "newIslandGardensStation135Audio();" );
}
function newIslandGardensStation135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ISLAND_GARDENS_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newIslandGardensStation135();" );
  NextDestination.setAttribute( "onClick", "newEastFerryRoad135();" );
}
function newEastFerryRoad135(){
  newIbusdisplayDes.innerHTML = topDestination+"East Ferry Road"+topDestination2;
  BackDestination.setAttribute( "onClick", "newIslandGardensStation135Audio();" );
  NextDestination.setAttribute( "onClick", "newEastFerryRoad135Audio();" );
}
function newEastFerryRoad135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_EAST_FERRY_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newEastFerryRoad135();" );
  NextDestination.setAttribute( "onClick", "newMudchuteStationSpindriftAve135();" );
}
function newMudchuteStationSpindriftAve135(){
  newIbusdisplayDes.innerHTML = topDestination+"Mudchute Station / Spindrift Ave"+topDestination2;
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
  BackDestination.setAttribute( "onClick", "newMudchuteStationSpindriftAve135Audio();" );
  NextDestination.setAttribute( "onClick", "newTelegraphPlace135Audio();" );
}
function newTelegraphPlace135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_TELEGRAPH_PLACE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newTelegraphPlace135();" );
  NextDestination.setAttribute( "onClick", "newStEdmundsSchool135();" );
}
function newStEdmundsSchool135(){
  newIbusdisplayDes.innerHTML = topDestination+"St Edmund's School"+topDestination2;
  BackDestination.setAttribute( "onClick", "newTelegraphPlace135Audio();" );
  NextDestination.setAttribute( "onClick", "newStEdmundsSchool135Audio();" );
}
function newStEdmundsSchool135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ST_EDMUNDS_SCHOOL_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newStEdmundsSchool135();" );
  NextDestination.setAttribute( "onClick", "newCrewsStreet135();" );
}
function newCrewsStreet135(){
  newIbusdisplayDes.innerHTML = topDestination+"Crews Street"+topDestination2;
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
  BackDestination.setAttribute( "onClick", "newCrewsStreet135Audio();" );
  NextDestination.setAttribute( "onClick", "newArnhemWharfPrimarySchool135Audio();" );
}
function newArnhemWharfPrimarySchool135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ARNHEM_WHARF_PRIMARY_SCHOOL_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newArnhemWharfPrimarySchool135();" );
  NextDestination.setAttribute( "onClick", "newSirJohnMcdougallGardens135();" );
}
function newSirJohnMcdougallGardens135(){
  newIbusdisplayDes.innerHTML = topDestination+"Sir John Mcdougall Gardens"+topDestination2;
  BackDestination.setAttribute( "onClick", "newArnhemWharfPrimarySchool135Audio();" );
  NextDestination.setAttribute( "onClick", "newSirJohnMcdougallGardens135Audio();" );
}
function newSirJohnMcdougallGardens135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SIR_JOHN_MCDOUGAL_GARDENS_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newSirJohnMcdougallGardens135();" );
  NextDestination.setAttribute( "onClick", "newBarkantineClinicHutchingsStreet135();" );
}
function newBarkantineClinicHutchingsStreet135(){
  newIbusdisplayDes.innerHTML = topDestination+"Barkantine Clinic / Hutchings Street"+topDestination2;
  BackDestination.setAttribute( "onClick", "newSirJohnMcdougallGardens135Audio();" );
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
  BackDestination.setAttribute( "onClick", "newBarkantineClinicHutchingsStreet135();" );
  NextDestination.setAttribute( "onClick", "newByngStreet135();" );
}
function newByngStreet135(){
  newIbusdisplayDes.innerHTML = topDestination+"Byng Street"+topDestination2;
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
  BackDestination.setAttribute( "onClick", "newByngStreet135Audio();" );
  NextDestination.setAttribute( "onClick", "newMarshWallHeronQuay135Audio();" );
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
  BackDestination.setAttribute( "onClick", "newMarshWallHeronQuay135();" );
  NextDestination.setAttribute( "onClick", "newCanaryWharfStation135();" );
}
function newCanaryWharfStation135(){
  newIbusdisplayDes.innerHTML = topDestination+"Canary Wharf Station"+topDestination2+topDestinationimgpos+"83.5px"+topDestinationiumg+"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Underground.svg/1200px-Underground.svg.png"+topDestinationimgend+topDestinationimgpos+"43.5px"+topDestinationiumg+"https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/DLR_roundel.svg/1200px-DLR_roundel.svg.png"+topDestinationimgend+topDestinationimgpos+"3.5px"+topDestinationiumg+"https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Elizabeth_line_roundel.svg/1920px-Elizabeth_line_roundel.svg.png"+topDestinationimgend;
  BackDestination.setAttribute( "onClick", "newMarshWallHeronQuay135Audio();" );
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
  newIbusdisplayDes.innerHTML = topDestination+"Canary Wharf Station"+topDestination2+topDestinationimgpos+"83.5px"+topDestinationiumg+"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Underground.svg/1200px-Underground.svg.png"+topDestinationimgend+topDestinationimgpos+"43.5px"+topDestinationiumg+"https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/DLR_roundel.svg/1200px-DLR_roundel.svg.png"+topDestinationimgend+topDestinationimgpos+"3.5px"+topDestinationiumg+"https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Elizabeth_line_roundel.svg/1920px-Elizabeth_line_roundel.svg.png"+topDestinationimgend;
  BackDestination.setAttribute( "onClick", "newCanadaSquareSouthCanaryWharfStn135Audio();" );
  NextDestination.setAttribute( "onClick", "newCanaryWharfStationtwo135Audio();" );
}
function newCanaryWharfStationtwo135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CANARY_WHARF_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newCanaryWharfStationtwo135();" );
  NextDestination.setAttribute( "onClick", "newWestIndiaAvenue135();" );
}
function newWestIndiaAvenue135(){
  newIbusdisplayDes.innerHTML = topDestination+"West India Avenue"+topDestination2;
  BackDestination.setAttribute( "onClick", "newCanaryWharfStationtwo135Audio();" );
  NextDestination.setAttribute( "onClick", "newWestIndiaAvenue135Audio();" );
}
function newWestIndiaAvenue135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_WEST_INDIA_AVENUE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newWestIndiaAvenue135();" );
  NextDestination.setAttribute( "onClick", "newWestferryCircusCanaryWharfPier135();" );
}
function newWestferryCircusCanaryWharfPier135(){
  newIbusdisplayDes.innerHTML = topDestination+"Westferry Circus / Canary Wharf Pier"+topDestination2;
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
  BackDestination.setAttribute( "onClick", "newSalterStreet135Audio();" );
  NextDestination.setAttribute( "onClick", "newSalterStreet135Audio();" );
}
function newLimehousePoliceStation135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_LIMEHOUSE_POLICE_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newLimehousePoliceStation135();" );
  NextDestination.setAttribute( "onClick", "newLimehouseTownHall135();" );
}
function newLimehouseTownHall135(){
  newIbusdisplayDes.innerHTML = topDestination+"Limehouse Town Hall"+topDestination2;
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
  BackDestination.setAttribute( "onClick", "newLimehouseTownHall135Audio();" );
  NextDestination.setAttribute( "onClick", "newLowellStreet135Audio();" );
}
function newLowellStreet135Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_LOWELL_STREET_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "newLowellStreet135();" );
  NextDestination.setAttribute( "onClick", "newLimehouseStation135();" );
}
function newLimehouseStation135(){
  newIbusdisplayDes.innerHTML = topDestination+"Limehouse Station"+topDestination2;
  BackDestination.setAttribute( "onClick", "newLowellStreet135Audio();" );
  NextDestination.setAttribute( "onClick", "newLimehouseStation135Audio();" );
}
