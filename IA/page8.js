var smallSpace = '<span class="invisible">.</span>'
var bigSpace = '<span class="invisible">...</span>'
var sSpace = '<span class="invisible">.</span>'
var bSpace = '<span class="invisible">...</span>'

var topTextYes = document.getElementById("topTextYes");
var topTextNo = document.getElementById("topTextNo");

var firstAudio = "https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_";
var lastAudio = "_001.mp3";

function ClaphamCommon417btn(){
  routeDestination = "ClaphamCommon417";
  CrystalPalaceBusStation417()
  showDestination.setAttribute( "onClick", "ClaphamCommon417ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "417 to Clapham Common";
}
function CrystalPalace417btn(){
  routeDestination = "CrystalPalace417";
  WingateSquare417()
  showDestination.setAttribute( "onClick", "CrystalPalace417ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "417 to Crystal Palace";
}
function NoakHill294btn(){
  routeDestination = "NoakHill294";
  HaveringPark294()
  showDestination.setAttribute( "onClick", "NoakHill294ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "294 to Noak Hill";
}
function HaveringPark294btn(){
  routeDestination = "HaveringPark294";
  WincantonRoad294()
  showDestination.setAttribute( "onClick", "HaveringPark294ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "294 to Havering Park";
}
function Aldgate343btn(){
  routeDestination = "Aldgate343";
  NewCrossJerninghamRoad343()
  showDestination.setAttribute( "onClick", "Aldgate343ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "343 to Aldgate";
}
function NewCrossGate343btn(){
  routeDestination = "NewCrossGate343";
  AldgateStation343()
  showDestination.setAttribute( "onClick", "NewCrossGate343ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "343 to New Cross Gate";
}
function SouthHarrow258btn(){
  routeDestination = "SouthHarrow258";
  WatfordJunctionStation258()
  showDestination.setAttribute( "onClick", "SouthHarrow258ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "258 to South Harrow";
}
function WatfordJunction258btn(){
  routeDestination = "WatfordJunction258";
  SouthHarrowBusStation258()
  showDestination.setAttribute( "onClick", "WatfordJunction258ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "258 to Watford Junction";
}

function ClaphamCommon417ibus(){
  if (ibusView === "new"){
    shownewibusdestination();
  }
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "417 to Clapham Junction";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/R_147_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_CLAPHAM_JUNCTION_001.mp3";
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
function CrystalPalace417ibus(){
  if (ibusView === "new"){
    shownewibusdestination();
  }
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "417 to Crystal Palace";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/R_147_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_CRYSTAL_PALACE_001.mp3";
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
function NoakHill294ibus(){
  if (ibusView === "new"){
    shownewibusdestination();
  }
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "294 to Noak Hill";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/R_294_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_NOAK_HILL_001.mp3";
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
function HaveringPark294ibus(){
  if (ibusView === "new"){
    shownewibusdestination();
  }
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "294 to Havering Park";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/R_294_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_Havering_Park_001.mp3";
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
function Aldgate343ibus(){
  if (ibusView === "new"){
    shownewibusdestination();
  }
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "343 to Aldgate";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/R_343_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_ALDGATE_001.mp3";
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
function NewCrossGate343ibus(){
  if (ibusView === "new"){
    shownewibusdestination();
  }
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "343 to New Cross Gate";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/R_343_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_NEW_CROSS_GATE_001.mp3";
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

function CrystalPalaceBusStation417(){
  getRidOfDestination()
  CrystalPalaceBusStation()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "CrystalPalaceBusStation417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "CrystalPalaceBusStation417Audio();" );
  }
}
function CrystalPalaceBusStation417Audio(){
  CrystalPalaceBusStationAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "WestowHill417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function CrystalPalaceParade417(){
  getRidOfDestination()
  CrystalPalaceParade()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "CrystalPalaceParade417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "CrystalPalaceParade417Audio();" );
  }
}
function CrystalPalaceParade417Audio(){
  CrystalPalaceParadeAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  }
}
function WestowHill417(){
  getRidOfDestination()
  WestowHill()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "WestowHill417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "WestowHill417Audio();" );
  }
}
function WestowHill417Audio(){
  WestowHillAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "WestowStreet417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "CrystalPalaceParade417();" );
  }
}
function WestowStreet417(){
  getRidOfDestination()
  WestowStreet()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "WestowStreet417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "WestowStreet417Audio();" );
  }
}
function WestowStreet417Audio(){
  WestowStreetAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "GipsyHillPoliceStation417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function GipsyHillPoliceStation417(){
  getRidOfDestination()
  GipsyHillPoliceStation()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "GipsyHillPoliceStation417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "GipsyHillPoliceStation417Audio();" );
  }
}
function GipsyHillPoliceStation417Audio(){
  GipsyHillPoliceStationAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "RockmountRoad417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function RockmountRoad417(){
  getRidOfDestination()
  RockmountRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "RockmountRoad417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "RockmountRoad417Audio();" );
  }
}
function RockmountRoad417Audio(){
  RockmountRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "HermitageRoad417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "WestowHill417();" );
  }
}
function HermitageRoad417(){
  getRidOfDestination()
  HermitageRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "HermitageRoad417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "HermitageRoad417Audio();" );
  }
}
function HermitageRoad417Audio(){
  HermitageRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "SaltersHill417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "RockmountRoad417();" );
  }
}
function SaltersHill417(){
  getRidOfDestination()
  SaltersHill()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "SaltersHill417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "SaltersHill417Audio();" );
  }
}
function SaltersHill417Audio(){
  SaltersHillAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "TivoliRoad417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "HermitageRoad417();" );
  }
}
function NorwoodSchool417(){
  getRidOfDestination()
  NorwoodSchool()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "NorwoodSchool417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "NorwoodSchool417Audio();" );
  }
}
function NorwoodSchool417Audio(){
  NorwoodSchoolAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "SaltersHill417();" );
  }
}
function TivoliRoad417(){
  getRidOfDestination()
  TivoliRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "TivoliRoad417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "TivoliRoad417Audio();" );
  }
}
function TivoliRoad417Audio(){
  TivoliRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "CrownPoint417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "NorwoodSchool417();" );
  }
}
function CrownPoint417(){
  getRidOfDestination()
  CrownPoint()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "CrownPoint417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "CrownPoint417Audio();" );
  }
}
function CrownPoint417Audio(){
  CrownPointAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "RyecroftRoad417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function CrownLaneCrownPoint417(){
  getRidOfDestination()
  CrownLaneCrownPointd()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "CrownLaneCrownPoint417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "CrownLaneCrownPoint417Audio();" );
  }
}
function CrownLaneCrownPoint417Audio(){
  CrownLaneCrownPointAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "TivoliRoad417();" );
  }
}
function RyecroftRoad417(){
  getRidOfDestination()
  RyecroftRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "RyecroftRoad417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "RyecroftRoad417Audio();" );
  }
}
function RyecroftRoad417Audio(){
  RyecroftRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "StreathamCommonNorthLeighamCrtRd417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "CrownLaneCrownPoint417();" );
  }
}
function StreathamCommonNorthLeighamCrtRd417(){
  getRidOfDestination()
  StreathamCommonNorthLeighamCrtRd()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "StreathamCommonNorthLeighamCrtRd417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "StreathamCommonNorthLeighamCrtRd417Audio();" );
  }
}
function StreathamCommonNorthLeighamCrtRd417Audio(){
  StreathamCommonNorthLeighamCrtRdAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "LeighamCourtRoadStreathamCommon417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function LeighamCourtRoadStreathamCommon417(){
  getRidOfDestination()
  LeighamCourtRoadStreathamCommon()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "LeighamCourtRoadStreathamCommon417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "LeighamCourtRoadStreathamCommon417Audio();" );
  }
}
function LeighamCourtRoadStreathamCommon417Audio(){
  LeighamCourtRoadStreathamCommonAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "JuliansPrimarySchool417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "RyecroftRoad417();" );
  }
}
function LeafGrove417(){
  getRidOfDestination()
  LeafGrove()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "LeafGrove417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "LeafGrove417Audio();" );
  }
}
function LeafGrove417Audio(){
  LeafGroveAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "LeighamCourtRoadStreathamCommon417();" );
  }
}
function JuliansPrimarySchool417(){
  getRidOfDestination()
  JuliansPrimarySchool()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "JuliansPrimarySchool417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "JuliansPrimarySchool417Audio();" );
  }
}
function JuliansPrimarySchool417Audio(){
  JuliansPrimarySchoolAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "RockhamptonRoad417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "LeafGrove417();" );
  }
}
function RockhamptonRoad417(){
  getRidOfDestination()
  RockhamptonRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "RockhamptonRoad417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "RockhamptonRoad417Audio();" );
  }
}
function RockhamptonRoad417Audio(){
  RockhamptonRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "StPetersChurch417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function StPetersChurch417(){
  getRidOfDestination()
  StPetersChurch()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "StPetersChurch417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "StPetersChurch417Audio();" );
  }
}
function StPetersChurch417Audio(){
  StPetersChurchAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "ValleyRoad417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "JuliansPrimarySchool417();" );
  }
}
function ValleyRoad417(){
  getRidOfDestination()
  ValleyRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "ValleyRoad417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "ValleyRoad417Audio();" );
  }
}
function ValleyRoad417Audio(){
  ValleyRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "DunravenSchool417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function LeighamCourtRoadValleyRoad417(){
  getRidOfDestination()
  LeighamCourtRoadValleyRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "LeighamCourtRoadValleyRoad417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "LeighamCourtRoadValleyRoad417Audio();" );
  }
}
function LeighamCourtRoadValleyRoad417Audio(){
  LeighamCourtRoadValleyRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "StPetersChurch417();" );
  }
}
function DunravenSchool417(){
  getRidOfDestination()
  DunravenSchool()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "DunravenSchool417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "DunravenSchool417Audio();" );
  }
}
function DunravenSchool417Audio(){
  DunravenSchoolAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "MountearlGardens417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "LeighamCourtRoadValleyRoad417();" );
  }
}
function MountearlGardens417(){
  getRidOfDestination()
  MountearlGardens()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "MountearlGardens417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "MountearlGardens417Audio();" );
  }
}
function MountearlGardens417Audio(){
  MountearlGardensAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "LeighamCourtRdStreathamHillStn417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function StreathamClose417(){
  getRidOfDestination()
  StreathamClose()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "StreathamClose417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "StreathamClose417Audio();" );
  }
}
function StreathamClose417Audio(){
  StreathamCloseAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "DunravenSchool417();" );
  }
}
function LeighamCourtRdStreathamHillStn417(){
  getRidOfDestination()
  LeighamCourtRdStreathamHillStn()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "LeighamCourtRdStreathamHillStn417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "LeighamCourtRdStreathamHillStn417Audio();" );
  }
}
function LeighamCourtRdStreathamHillStn417Audio(){
  LeighamCourtRdStreathamHillStnAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "StreathamHillStnStreathamHill417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "StreathamClose417();" );
  }
}
function StreathamHillStnStreathamHill417(){
  getRidOfDestination()
  StreathamHillStnStreathamHill()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "StreathamHillStnStreathamHill417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "StreathamHillStnStreathamHill417Audio();" );
  }
}
function StreathamHillStnStreathamHill417Audio(){
  StreathamHillStnStreathamHillAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "BarrhillRoad417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "LeighamCourtRdStreathamHillStn417();" );
  }
}
function BarrhillRoad417(){
  getRidOfDestination()
  BarrhillRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "BarrhillRoad417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "BarrhillRoad417Audio();" );
  }
}
function BarrhillRoad417Audio(){
  BarrhillRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "TelfordAvenue417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function TelfordAvenue417(){
  getRidOfDestination()
  TelfordAvenue()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "TelfordAvenue417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "TelfordAvenue417Audio();" );
  }
}
function TelfordAvenue417Audio(){
  TelfordAvenueAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "ChristchurchRoad417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "StreathamHillStnStreathamHill417();" );
  }
}
function ChristchurchRoad417(){
  getRidOfDestination()
  ChristchurchRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "ChristchurchRoad417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "ChristchurchRoad417Audio();" );
  }
}
function ChristchurchRoad417Audio(){
  ChristchurchRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "StreathamPlace417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function StreathamHillChristchurchRoad417(){
  getRidOfDestination()
  StreathamHillChristchurchRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "StreathamHillChristchurchRoad417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "StreathamHillChristchurchRoad417Audio();" );
  }
}
function StreathamHillChristchurchRoad417Audio(){
  StreathamHillChristchurchRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "TelfordAvenue417();" );
  }
}
function StreathamPlace417(){
  getRidOfDestination()
  StreathamPlace()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "StreathamPlace417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "StreathamPlace417Audio();" );
  }
}
function StreathamPlace417Audio(){
  StreathamPlaceAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "AtkinsRoadNewParkRoad417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "StreathamHillChristchurchRoad417();" );
  }
}
function AtkinsRoadNewParkRoad417(){
  getRidOfDestination()
  AtkinsRoadNewParkRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "AtkinsRoadNewParkRoad417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "AtkinsRoadNewParkRoad417Audio();" );
  }
}
function AtkinsRoadNewParkRoad417Audio(){
  AtkinsRoadNewParkRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "KingsAvenueAtkinsRoad417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "StreathamPlace417();" );
  }
}
function KingsAvenueAtkinsRoad417(){
  getRidOfDestination()
  KingsAvenueAtkinsRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "KingsAvenueAtkinsRoad417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "KingsAvenueAtkinsRoad417Audio();" );
  }
}
function KingsAvenueAtkinsRoad417Audio(){
  KingsAvenueAtkinsRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "ThorncliffeRoad417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "AtkinsRoadNewParkRoad417();" );
  }
}
function ThorncliffeRoad417(){
  getRidOfDestination()
  ThorncliffeRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "ThorncliffeRoad417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "ThorncliffeRoad417Audio();" );
  }
}
function ThorncliffeRoad417Audio(){
  ThorncliffeRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "ClarenceAvenue417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "KingsAvenueAtkinsRoad417();" );
  }
}
function RoseberyRoad417(){
  getRidOfDestination()
  RoseberyRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "RoseberyRoad417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "RoseberyRoad417Audio();" );
  }
}
function RoseberyRoad417Audio(){
  RoseberyRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "ThorncliffeRoad417();" );
  }
}
function ClarenceAvenue417(){
  getRidOfDestination()
  ClarenceAvenue()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "ClarenceAvenue417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "ClarenceAvenue417Audio();" );
  }
}
function ClarenceAvenue417Audio(){
  ClarenceAvenueAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "LyhamRoad417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "RoseberyRoad417();" );
  }
}
function LyhamRoad417(){
  getRidOfDestination()
  LyhamRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "LyhamRoad417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "LyhamRoad417Audio();" );
  }
}
function LyhamRoad417Audio(){
  LyhamRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "BedfordRoad417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "ClarenceAvenue417();" );
  }
}
function BedfordRoad417(){
  getRidOfDestination()
  BedfordRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "BedfordRoad417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "BedfordRoad417Audio();" );
  }
}
function BedfordRoad417Audio(){
  BedfordRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "ParkHill417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "LyhamRoad417();" );
  }
}
function ParkHill417(){
  getRidOfDestination()
  ParkHill()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "ParkHill417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "ParkHill417Audio();" );
  }
}
function ParkHill417Audio(){
  ParkHillAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "ClaphamCommonStation417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "BedfordRoad417();" );
  }
}
function ClaphamCommonStation417(){
  getRidOfDestination()
  ClaphamCommonStation()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "ClaphamCommonStation417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "ClaphamCommonStation417Audio();" );
  }
}
function ClaphamCommonStation417Audio(){
  ClaphamCommonStationAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "LongRoadClaphamCommon417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "ParkHill417();" );
  }
}
function LongRoadClaphamCommon417(){
  getRidOfDestination()
  LongRoadClaphamCommon()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "LongRoadClaphamCommon417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "LongRoadClaphamCommon417Audio();" );
  }
}
function LongRoadClaphamCommon417Audio(){
  LongRoadClaphamCommonAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "OmnibusClapham417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function WingateSquare417(){
  getRidOfDestination()
  WingateSquare()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "WingateSquare417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "WingateSquare417Audio();" );
  }
}
function WingateSquare417Audio(){
  WingateSquareAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "ClaphamCommonStation417();" );
  }
}
function OmnibusClapham417(){
  getRidOfDestination()
  OmnibusClapham()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "OmnibusClapham417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "OmnibusClapham417Audio();" );
  }
}
function OmnibusClapham417Audio(){
  OmnibusClaphamAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}

function HaveringPark294(){
  getRidOfDestination()
  HaveringPark()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "HaveringPark294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "HaveringPark294Audio();" );
  }
}
function HaveringPark294Audio(){
  HaveringParkAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "HaveringParktwo294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  }
}
function HaveringParktwo294(){
  getRidOfDestination()
  HaveringPark()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "HaveringParktwo294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "HaveringParktwo294Audio();" );
  }
}
function HaveringParktwo294Audio(){
  HaveringParkAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "CharlotteGardens294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function CharlotteGardens294(){
  getRidOfDestination()
  CharlotteGardens()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "CharlotteGardens294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "CharlotteGardens294Audio();" );
  }
}
function CharlotteGardens294Audio(){
  CharlotteGardensAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "PortmoreGardens294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function CarterDrive294(){
  getRidOfDestination()
  CarterDrive()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "CarterDrive294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "CarterDrive294Audio();" );
  }
}
function CarterDrive294Audio(){
  CarterDriveAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "StaplefordGardens294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "HaveringPark294();" );
  }
}
function PortmoreGardens294(){
  getRidOfDestination()
  PortmoreGardens()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "PortmoreGardens294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "PortmoreGardens294Audio();" );
  }
}
function PortmoreGardens294Audio(){
  PortmoreGardensAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "StaplefordGardens294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "CarterDrive294();" );
  }
}
function StaplefordGardens294(){
  getRidOfDestination()
  StaplefordGardens()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "StaplefordGardens294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "StaplefordGardens294Audio();" );
  }
}
function StaplefordGardens294Audio(){
  StaplefordGardensAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "FrintonRoad294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "PortmoreGardens294();" );
  }
}
function FrintonRoad294(){
  getRidOfDestination()
  FrintonRoad()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "FrintonRoad294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "FrintonRoad294Audio();" );
  }
}
function FrintonRoad294Audio(){
  FrintonRoadAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "GobionsFarm294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "StaplefordGardens294();" );
  }
}
function GobionsFarm294(){
  getRidOfDestination()
  GobionsFarm()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "GobionsFarm294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "GobionsFarm294Audio();" );
  }
}
function GobionsFarm294Audio(){
  GobionsFarmAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "WhiteHartLane294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function HogHillRoad294(){
  getRidOfDestination()
  HogHillRoad()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "HogHillRoad294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "HogHillRoad294Audio();" );
  }
}
function HogHillRoad294Audio(){
  HogHillRoadAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "CollierRowClockhouseLane294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "FrintonRoad294();" );
  }
}
function WhiteHartLane294(){
  getRidOfDestination()
  WhiteHartLane()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "WhiteHartLane294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "WhiteHartLane294Audio();" );
  }
}
function WhiteHartLane294Audio(){
  WhiteHartLaneAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "CollierRowClockhouseLane294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "HogHillRoad294();" );
  }
}
function CollierRowClockhouseLane294(){
  getRidOfDestination()
  CollierRowClockhouseLane()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "CollierRowClockhouseLane294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "CollierRowClockhouseLane294Audio();" );
  }
}
function CollierRowClockhouseLane294Audio(){
  CollierRowClockhouseLaneAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "CollierRowRoundaboutRexClose294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function CollierRowRoundaboutRexClose294(){
  getRidOfDestination()
  CollierRowRoundaboutRexClose()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "CollierRowRoundaboutRexClose294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "CollierRowRoundaboutRexClose294Audio();" );
  }
}
function CollierRowRoundaboutRexClose294Audio(){
  CollierRowRoundaboutRexCloseAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "HulseAvenue294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function HulseAvenue294(){
  getRidOfDestination()
  HulseAvenue()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "HulseAvenue294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "HulseAvenue294Audio();" );
  }
}
function HulseAvenue294Audio(){
  HulseAvenueAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "MowbraysRoad294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function MowbraysRoad294(){
  getRidOfDestination()
  MowbraysRoad()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "MowbraysRoad294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "MowbraysRoad294Audio();" );
  }
}
function MowbraysRoad294Audio(){
  MowbraysRoadAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "HainaultRoad294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function MelvilleRoad294(){
  getRidOfDestination()
  MelvilleRoad()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "MelvilleRoad294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "MelvilleRoad294Audio();" );
  }
}
function MelvilleRoad294Audio(){
  MelvilleRoadAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "ParklandsSchool294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "WhiteHartLane294();" );
  }
}
function CollierRowLibrary294(){
  getRidOfDestination()
  CollierRowLibrary()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "LowshoeLane294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "CollierRowLibrary294Audio();" );
  }
}
function CollierRowLibrary294Audio(){
  CollierRowLibraryAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "ParklandsSchool294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "MelvilleRoad294();" );
  }
}
function LowshoeLane294(){
  getRidOfDestination()
  LowshoeLane()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "LowshoeLane294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "LowshoeLane294Audio();" );
  }
}
function LowshoeLane294Audio(){
  LowshoeLaneAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "ParklandsSchool294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "CollierRowLibrary294();" );
  }
}
function HillfootRoad294(){
  getRidOfDestination()
  HillfootRoad()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "HillfootRoad294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "HillfootRoad294Audio();" );
  }
}
function HillfootRoad294Audio(){
  HillfootRoadAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "ParklandsSchool294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "LowshoeLane294();" );
  }
}
function HainaultRoad294(){
  getRidOfDestination()
  HainaultRoad()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "HainaultRoad294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "HainaultRoad294Audio();" );
  }
}
function HainaultRoad294Audio(){
  HainaultRoadAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "ParklandsSchool294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "HillfootRoad294();" );
  }
}
function ParklandsSchool294(){
  getRidOfDestination()
  ParklandsSchool()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "ParklandsSchool294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "ParklandsSchool294Audio();" );
  }
}
function ParklandsSchool294Audio(){
  ParklandsSchoolAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "RomfordBusGarage294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "HainaultRoad294();" );
  }
}
function CedarRoad294(){
  getRidOfDestination()
  CedarRoad()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "CedarRoad294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "CedarRoad294Audio();" );
  }
}
function CedarRoad294Audio(){
  CedarRoadAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "TheAvenue294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "ParklandsSchool294();" );
  }
}
function RomfordBusGarage294(){
  getRidOfDestination()
  RomfordBusGarage()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "RomfordBusGarage294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "RomfordBusGarage294Audio();" );
  }
}
function RomfordBusGarage294Audio(){
  RomfordBusGarageAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "TheAvenue294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "CedarRoad294();" );
  }
}
function TheAvenue294(){
  getRidOfDestination()
  TheAvenue()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "TheAvenue294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "TheAvenue294Audio();" );
  }
}
function TheAvenue294Audio(){
  TheAvenueAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "RomfordMarket294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "RomfordBusGarage294();" );
  }
}
function RomfordMarket294(){
  getRidOfDestination()
  RomfordMarket()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "RomfordMarket294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "RomfordMarket294Audio();" );
  }
}
function RomfordMarket294Audio(){
  RomfordMarketAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "MercuryGardens294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "TheAvenue294();" );
  }
}
function MercuryGardens294(){
  getRidOfDestination()
  MercuryGardens()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "MercuryGardens294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "MercuryGardens294Audio();" );
  }
}
function MercuryGardens294Audio(){
  MercuryGardensAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "WesternRoad294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function WesternRoad294(){
  getRidOfDestination()
  WesternRoad()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "WesternRoad294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "WesternRoad294Audio();" );
  }
}
function WesternRoad294Audio(){
  WesternRoadAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "RomfordStation294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "RomfordMarket294();" );
  }
}
function RomfordStation294(){
  getRidOfDestination()
  RomfordStation()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "RomfordStation294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "RomfordStation294Audio();" );
  }
}
function RomfordStation294Audio(){
  RomfordStationAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "ThurloeGardens294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "WesternRoad294();" );
  }
}
function ThurloeGardens294(){
  getRidOfDestination()
  ThurloeGardens()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "ThurloeGardens294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "ThurloeGardens294Audio();" );
  }
}
function ThurloeGardens294Audio(){
  ThurloeGardensAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "SouthStreet294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function BrentwoodRoad294(){
  getRidOfDestination()
  BrentwoodRoad()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "BrentwoodRoad294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "BrentwoodRoad294Audio();" );
  }
}
function BrentwoodRoad294Audio(){
  BrentwoodRoadAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "AlbertRoad294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "RomfordStation294();" );
  }
}
function SouthStreet294(){
  getRidOfDestination()
  SouthStreet()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "SouthStreet294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "SouthStreet294Audio();" );
  }
}
function SouthStreet294Audio(){
  SouthStreetAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "AlbertRoad294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "BrentwoodRoad294();" );
  }
}
function AlbertRoad294(){
  getRidOfDestination()
  AlbertRoad()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "AlbertRoad294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "AlbertRoad294Audio();" );
  }
}
function AlbertRoad294Audio(){
  AlbertRoadAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "PrincesRoad294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "SouthStreet294();" );
  }
}
function PrincesRoad294(){
  getRidOfDestination()
  PrincesRoad()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "PrincesRoad294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "PrincesRoad294Audio();" );
  }
}
function PrincesRoad294Audio(){
  PrincesRoadAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "FrancesBardsleyAcademy294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "AlbertRoad294();" );
  }
}
function FrancesBardsleyAcademy294(){
  getRidOfDestination()
  FrancesBardsleyAcademy()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "FrancesBardsleyAcademy294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "FrancesBardsleyAcademy294Audio();" );
  }
}
function FrancesBardsleyAcademy294Audio(){
  FrancesBardsleyAcademyAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "CranhamRoad294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "PrincesRoad294();" );
  }
}
function CranhamRoad294(){
  getRidOfDestination()
  CranhamRoad()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "CranhamRoad294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "CranhamRoad294Audio();" );
  }
}
function CranhamRoad294Audio(){
  CranhamRoadAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "SalisburyRoad294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "FrancesBardsleyAcademy294();" );
  }
}
function SalisburyRoad294(){
  getRidOfDestination()
  SalisburyRoad()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "SalisburyRoad294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "SalisburyRoad294Audio();" );
  }
}
function SalisburyRoad294Audio(){
  SalisburyRoadAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "TheDrillRoundabout294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "CranhamRoad294();" );
  }
}
function TheDrillRoundabout294(){
  getRidOfDestination()
  TheDrillRoundabout()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "TheDrillRoundabout294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "TheDrillRoundabout294Audio();" );
  }
}
function TheDrillRoundabout294Audio(){
  TheDrillRoundaboutAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "GideaParkStation294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "SalisburyRoad294();" );
  }
}
function GideaParkStation294(){
  getRidOfDestination()
  GideaParkStation()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "GideaParkStation294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "GideaParkStation294Audio();" );
  }
}
function GideaParkStation294Audio(){
  GideaParkStationAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "UpperBrentwoodRoad294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "TheDrillRoundabout294();" );
  }
}
function UpperBrentwoodRoad294(){
  getRidOfDestination()
  UpperBrentwoodRoad()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "UpperBrentwoodRoad294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "UpperBrentwoodRoad294Audio();" );
  }
}
function UpperBrentwoodRoad294Audio(){
  UpperBrentwoodRoadAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "NorthumberlandAvenue294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function NorthumberlandAvenue294(){
  getRidOfDestination()
  NorthumberlandAvenue()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "NorthumberlandAvenue294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "NorthumberlandAvenue294Audio();" );
  }
}
function NorthumberlandAvenue294Audio(){
  NorthumberlandAvenueAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "HardleyCrescent294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function WestmorelandAvenue294(){
  getRidOfDestination()
  WestmorelandAvenue()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "WestmorelandAvenue294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "WestmorelandAvenue294Audio();" );
  }
}
function WestmorelandAvenue294Audio(){
  WestmorelandAvenueAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "ArdleighGreenSchool294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "GideaParkStation294();" );
  }
}
function HardleyCrescent294(){
  getRidOfDestination()
  HardleyCrescent()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "HardleyCrescent294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "HardleyCrescent294Audio();" );
  }
}
function HardleyCrescent294Audio(){
  HardleyCrescentAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "ArdleighGreenSchool294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "WestmorelandAvenue294();" );
  }
}
function ArdleighGreenSchool294(){
  getRidOfDestination()
  ArdleighGreenSchool()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "ArdleighGreenSchool294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "ArdleighGreenSchool294Audio();" );
  }
}
function ArdleighGreenSchool294Audio(){
  ArdleighGreenSchoolAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "SouthendArterialRoad294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "HardleyCrescent294();" );
  }
}
function SouthendArterialRoad294(){
  getRidOfDestination()
  SouthendArterialRoad()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "SouthendArterialRoad294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "SouthendArterialRoad294Audio();" );
  }
}
function SouthendArterialRoad294Audio(){
  SouthendArterialRoadAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "RosslynAvenue294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "ArdleighGreenSchool294();" );
  }
}
function RosslynAvenue294(){
  getRidOfDestination()
  RosslynAvenue()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "RosslynAvenue294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "RosslynAvenue294Audio();" );
  }
}
function RosslynAvenue294Audio(){
  RosslynAvenueAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "StPetersChurch294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "SouthendArterialRoad294();" );
  }
}
function RecreationAvenue294(){
  getRidOfDestination()
  RecreationAvenue()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "RecreationAvenue294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "RecreationAvenue294Audio();" );
  }
}
function RecreationAvenue294Audio(){
  RecreationAvenueAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "HaroldWoodStation294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "RosslynAvenue294();" );
  }
}
function StPetersChurch294(){
  getRidOfDestination()
  StPetersChurch()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "StPetersChurch294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "StPetersChurch294Audio();" );
  }
}
function StPetersChurch294Audio(){
  StPetersChurchAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "HaroldWoodStation294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "RecreationAvenue294();" );
  }
}
function HaroldWoodStation294(){
  getRidOfDestination()
  HaroldWoodStation()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "HaroldWoodStation294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "HaroldWoodStation294Audio();" );
  }
}
function HaroldWoodStation294Audio(){
  HaroldWoodStationAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "ArundelRoad294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "StPetersChurch294();" );
  }
}
function ArundelRoad294(){
  getRidOfDestination()
  ArundelRoad()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "ArundelRoad294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "ArundelRoad294Audio();" );
  }
}
function ArundelRoad294Audio(){
  ArundelRoadAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "StNeotsRoad294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "HaroldWoodStation294();" );
  }
}
function StNeotsRoad294(){
  getRidOfDestination()
  StNeotsRoad()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "StNeotsRoad294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "StNeotsRoad294Audio();" );
  }
}
function StNeotsRoad294Audio(){
  StNeotsRoadAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "CamborneAvenue294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function CamborneAvenue294(){
  getRidOfDestination()
  CamborneAvenue()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "CamborneAvenue294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "CamborneAvenue294Audio();" );
  }
}
function CamborneAvenue294Audio(){
  CamborneAvenueAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "KingsbridgeRoad294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "ArundelRoad294();" );
  }
}
function KingsbridgeRoad294(){
  getRidOfDestination()
  KingsbridgeRoad()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "KingsbridgeRoad294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "KingsbridgeRoad294Audio();" );
  }
}
function KingsbridgeRoad294Audio(){
  KingsbridgeRoadAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "HaroldHillCommunityCentre294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "CamborneAvenue294();" );
  }
}
function HaroldHillCommunityCentre294(){
  getRidOfDestination()
  HaroldHillCommunityCentre()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "HaroldHillCommunityCentre294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "HaroldHillCommunityCentre294Audio();" );
  }
}
function HaroldHillCommunityCentre294Audio(){
  HaroldHillCommunityCentreAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "CentralParkLeisureCentre294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "KingsbridgeRoad294();" );
  }
}
function CentralParkLeisureCentre294(){
  getRidOfDestination()
  CentralParkLeisureCentre()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "CentralParkLeisureCentre294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "CentralParkLeisureCentre294Audio();" );
  }
}
function CentralParkLeisureCentre294Audio(){
  CentralParkLeisureCentreAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "BrooksideSchool294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "HaroldHillCommunityCentre294();" );
  }
}
function BrooksideSchool294(){
  getRidOfDestination()
  BrooksideSchool()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "BrooksideSchool294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "BrooksideSchool294Audio();" );
  }
}
function BrooksideSchool294Audio(){
  BrooksideSchoolAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "LindfieldRoad294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "CentralParkLeisureCentre294();" );
  }
}
function LindfieldRoad294(){
  getRidOfDestination()
  LindfieldRoad()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "LindfieldRoad294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "LindfieldRoad294Audio();" );
  }
}
function LindfieldRoad294Audio(){
  LindfieldRoadAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "WigtonWay294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function HarknessClose294(){
  getRidOfDestination()
  HarknessClose()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "WigtonWay294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "HarknessClose294Audio();" );
  }
}
function HarknessClose294Audio(){
  HarknessCloseAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "WhitchurchRoad294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "BrooksideSchool294();" );
  }
}
function WigtonWay294(){
  getRidOfDestination()
  WigtonWay()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "WigtonWay294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "WigtonWay294Audio();" );
  }
}
function WigtonWay294Audio(){
  WigtonWayAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "WhitchurchRoad294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "HarknessClose294();" );
  }
}
function WhitchurchRoad294(){
  getRidOfDestination()
  WhitchurchRoad()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "WhitchurchRoad294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "WhitchurchRoad294Audio();" );
  }
}
function WhitchurchRoad294Audio(){
  WigtonWayAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "PrioryRoad294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function PrioryRoad294(){
  getRidOfDestination()
  PrioryRoad()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "PrioryRoad294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "PrioryRoad294Audio();" );
  }
}
function PrioryRoad294Audio(){
  PrioryRoadAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "WincantonRoad294();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function TeesDrive294(){
  getRidOfDestination()
  TeesDrive()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "TeesDrive294Audio();" );
  }
}
function TeesDrive294Audio(){
  TeesDriveAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "WigtonWay294();" );
  }
}
function TroopersDrive294(){
  getRidOfDestination()
  TroopersDrive()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "TroopersDrive294Audio();" );
  }
}
function TroopersDrive294Audio(){
  TroopersDriveAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "TeesDrive294();" );
  }
}
function AshbourneRoad294(){
  getRidOfDestination()
  AshbourneRoad()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "AshbourneRoad294Audio();" );
  }
}
function AshbourneRoad294Audio(){
  AshbourneRoadAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "TroopersDrive294();" );
  }
}
function WincantonRoadtwo294(){
  getRidOfDestination()
  WincantonRoad()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "WincantonRoadtwo294Audio();" );
  }
}
function WincantonRoadtwo294Audio(){
  WincantonRoadAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "AshbourneRoad294();" );
  }
}
function CummingsHallLane294(){
  getRidOfDestination()
  CummingsHallLane()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "CummingsHallLane294Audio();" );
  }
}
function CummingsHallLane294Audio(){
  CummingsHallLaneAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "WincantonRoadtwo294();" );
  }
}
function WincantonRoad294(){
  getRidOfDestination()
  WincantonRoad()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "WincantonRoad294Audio();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "WincantonRoad294Audio();" );
  }
}
function WincantonRoad294Audio(){
  WincantonRoadAudio()
  if (routeDestination === "NoakHill294"){
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  } else if (routeDestination === "HaveringPark294") {
    NextDestination.setAttribute( "onClick", "CummingsHallLane294();" );
  }
}

function AldgateStation343(){
  getRidOfDestination()
  AldgateStation()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "AldgateStation343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "AldgateStation343Audio();" );
  }
}
function AldgateStation343Audio(){
  AldgateStationAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "Minories343();" );
  }
}
function Minories343(){
  getRidOfDestination()
  Minories()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "Minories343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "Minories343Audio();" );
  }
}
function Minories343Audio(){
  MinoriesAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "TowerHillTowerGatewayStation343();" );
  }
}
function TowerHillTowerGatewayStation343(){
  getRidOfDestination()
  TowerHillTowerGatewayStation()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "TowerHillTowerGatewayStation343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "TowerHillTowerGatewayStation343Audio();" );
  }
}
function TowerHillTowerGatewayStation343Audio(){
  TowerHillTowerGatewayStationAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "TowerBridge343();" );
  }
}
function TowerGatewayStation343(){
  getRidOfDestination()
  TowerGatewayStation()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "TowerGatewayStation343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "TowerGatewayStation343Audio();" );
  }
}
function TowerGatewayStation343Audio(){
  TowerGatewayStationAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "AldgateStation343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "UnicornTheatre343();" );
  }
}
function TowerBridge343(){
  getRidOfDestination()
  TowerBridge()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "TowerBridge343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "TowerBridge343Audio();" );
  }
}
function TowerBridge343Audio(){
  TowerBridgeAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "TowerGatewayStation343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "UnicornTheatre343();" );
  }
}
function UnicornTheatre343(){
  getRidOfDestination()
  UnicornTheatre()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "UnicornTheatre343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "UnicornTheatre343Audio();" );
  }
}
function UnicornTheatre343Audio(){
  UnicornTheatreAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "TowerBridge343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "LondonBridgeStation343();" );
  }
}
function AbbotsLane343(){
  getRidOfDestination()
  AbbotsLane()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "AbbotsLane343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "AbbotsLane343Audio();" );
  }
}
function AbbotsLane343Audio(){
  AbbotsLaneAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "UnicornTheatre343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function HaysGalleria343(){
  getRidOfDestination()
  HaysGalleria()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "HaysGalleria343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "HaysGalleria343Audio();" );
  }
}
function HaysGalleria343Audio(){
  HaysGalleriaAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "AbbotsLane343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "SouthwarkStreet343();" );
  }
}
function LondonBridgeStation343(){
  getRidOfDestination()
  LondonBridgeStation()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "LondonBridgeStation343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "LondonBridgeStation343Audio();" );
  }
}
function LondonBridgeStation343Audio(){
  LondonBridgeStationAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "HaysGalleria343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "SouthwarkStreet343();" );
  }
}
function SouthwarkStreet343(){
  getRidOfDestination()
  SouthwarkStreet()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "SouthwarkStreet343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "SouthwarkStreet343Audio();" );
  }
}
function SouthwarkStreet343Audio(){
  SouthwarkStreetAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "UnionStreet343();" );
  }
}
function UnionStreet343(){
  getRidOfDestination()
  UnionStreet()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "UnionStreet343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "UnionStreet343Audio();" );
  }
}
function UnionStreet343Audio(){
  UnionStreetAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "LondonBridgeStation343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "BoroughStation343();" );
  }
}
function BoroughStation343(){
  getRidOfDestination()
  BoroughStation()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "BoroughStation343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "BoroughStation343Audio();" );
  }
}
function BoroughStation343Audio(){
  BoroughStationAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "UnionStreet343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "InnerLondonCrownCourt343();" );
  }
}
function InnerLondonCrownCourt343(){
  getRidOfDestination()
  InnerLondonCrownCourt()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "InnerLondonCrownCourt343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "InnerLondonCrownCourt343Audio();" );
  }
}
function InnerLondonCrownCourt343Audio(){
  InnerLondonCrownCourtAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "BoroughStation343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "ElephantCastleNewingtonCauseway343();" );
  }
}
function ElephantCastleNewingtonCauseway343(){
  getRidOfDestination()
  ElephantCastleNewingtonCauseway()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "ElephantCastleNewingtonCauseway343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "ElephantCastleNewingtonCauseway343Audio();" );
  }
}
function ElephantCastleNewingtonCauseway343Audio(){
  ElephantCastleNewingtonCausewayAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "InnerLondonCrownCourt343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "ElephantCastleStation343();" );
  }
}
function ElephantCastleStation343(){
  getRidOfDestination()
  ElephantCastleStation()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "ElephantCastleStation343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "ElephantCastleStation343Audio();" );
  }
}
function ElephantCastleStation343Audio(){
  ElephantCastleStationAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "ElephantCastleNewingtonCauseway343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "ElephantPark343();" );
  }
}
function HamptonStreet343(){
  getRidOfDestination()
  HamptonStreet()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "HamptonStreet343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "HamptonStreet343Audio();" );
  }
}
function HamptonStreet343Audio(){
  HamptonStreetAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "ElephantCastleStation343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "LarcomStreet343();" );
  }
}
function ElephantPark343(){
  getRidOfDestination()
  ElephantPark()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "ElephantPark343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "ElephantPark343Audio();" );
  }
}
function ElephantPark343Audio(){
  ElephantParkAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "HamptonStreet343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "LarcomStreet343();" );
  }
}
function LarcomStreet343(){
  getRidOfDestination()
  LarcomStreet()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "LarcomStreet343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "LarcomStreet343Audio();" );
  }
}
function LarcomStreet343Audio(){
  LarcomStreetAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "ElephantPark343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "BalfourStreet343();" );
  }
}
function BalfourStreet343(){
  getRidOfDestination()
  BalfourStreet()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "BalfourStreet343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "BalfourStreet343Audio();" );
  }
}
function BalfourStreet343Audio(){
  BalfourStreetAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "LarcomStreet343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "EastStreet343();" );
  }
}
function EastStreet343(){
  getRidOfDestination()
  EastStreet()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "EastStreet343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "EastStreet343Audio();" );
  }
}
function EastStreet343Audio(){
  EastStreetAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "BalfourStreet343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "AlsaceRoad343();" );
  }
}
function AlsaceRoad343(){
  getRidOfDestination()
  AlsaceRoad()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "AlsaceRoad343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "AlsaceRoad343Audio();" );
  }
}
function AlsaceRoad343Audio(){
  AlsaceRoadAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "EastStreet343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "AlbanyRoadWellsWay343();" );
  }
}
function AlbanyRoadWellsWay343(){
  getRidOfDestination()
  AlbanyRoadWellsWay()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "AlbanyRoadWellsWay343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "AlbanyRoadWellsWay343Audio();" );
  }
}
function AlbanyRoadWellsWay343Audio(){
  AlbanyRoadWellsWayAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "AlsaceRoad343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "StGeorgesWayBurgessPark343();" );
  }
}
function StGeorgesWayBurgessPark343(){
  getRidOfDestination()
  StGeorgesWayBurgessPark()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "StGeorgesWayBurgessPark343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "StGeorgesWayBurgessPark343Audio();" );
  }
}
function StGeorgesWayBurgessPark343Audio(){
  StGeorgesWayBurgessParkAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "AlbanyRoadWellsWay343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "SedgmoorPlace343();" );
  }
}
function CottageGreen343(){
  getRidOfDestination()
  CottageGreen()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "CottageGreen343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "CottageGreen343Audio();" );
  }
}
function CottageGreen343Audio(){
  CottageGreenAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "StGeorgesWayBurgessPark343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "SouthamptonWayEstate343();" );
  }
}
function SedgmoorPlace343(){
  getRidOfDestination()
  SedgmoorPlace()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "SedgmoorPlace343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "SedgmoorPlace343Audio();" );
  }
}
function SedgmoorPlace343Audio(){
  SedgmoorPlaceAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "CottageGreen343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "SouthamptonWayEstate343();" );
  }
}
function SouthamptonWayEstate343(){
  getRidOfDestination()
  SouthamptonWayEstate()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "SouthamptonWayEstate343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "SouthamptonWayEstate343Audio();" );
  }
}
function SouthamptonWayEstate343Audio(){
  SouthamptonWayEstateAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "SedgmoorPlace343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "SouthamptonWayPeckhamRoad343();" );
  }
}
function SouthamptonWayPeckhamRoad343(){
  getRidOfDestination()
  SouthamptonWayPeckhamRoad()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "SouthamptonWayPeckhamRoad343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "SouthamptonWayPeckhamRoad343Audio();" );
  }
}
function SouthamptonWayPeckhamRoad343Audio(){
  SouthamptonWayPeckhamRoadAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "HarrisAcademy343();" );
  }
}
function PeckhamRoadSouthamptonWay343(){
  getRidOfDestination()
  PeckhamRoadSouthamptonWay()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "PeckhamRoadSouthamptonWay343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "PeckhamRoadSouthamptonWay343Audio();" );
  }
}
function PeckhamRoadSouthamptonWay343Audio(){
  PeckhamRoadSouthamptonWayAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "SouthamptonWayEstate343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "PeckhamLibrary343();" );
  }
}
function HarrisAcademy343(){
  getRidOfDestination()
  HarrisAcademy()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "HarrisAcademy343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "HarrisAcademy343Audio();" );
  }
}
function HarrisAcademy343Audio(){
  HarrisAcademyAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "PeckhamRoadSouthamptonWay343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "PeckhamLibrary343();" );
  }
}
function PeckhamLibrary343(){
  getRidOfDestination()
  PeckhamLibrary()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "PeckhamLibrary343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "PeckhamLibrary343Audio();" );
  }
}
function PeckhamLibrary343Audio(){
  PeckhamLibraryAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "ClaytonRoad343();" );
  }
}
function ClaytonRoad343(){
  getRidOfDestination()
  ClaytonRoad()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "ClaytonRoad343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "ClaytonRoad343Audio();" );
  }
}
function ClaytonRoad343Audio(){
  ClaytonRoadAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "TheAyleshamCentre343();" );
  }
}
function TheAyleshamCentre343(){
  getRidOfDestination()
  TheAyleshamCentre()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "TheAyleshamCentre343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "TheAyleshamCentre343Audio();" );
  }
}
function TheAyleshamCentre343Audio(){
  TheAyleshamCentreAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "PeckhamRyeStation343();" );
  }
}
function HanoverPark343(){
  getRidOfDestination()
  HanoverPark()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "HanoverPark343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "HanoverPark343Audio();" );
  }
}
function HanoverPark343Audio(){
  HanoverParkAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "HarrisAcademy343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "NigelRoad343();" );
  }
}
function PeckhamRyeStation343(){
  getRidOfDestination()
  PeckhamRyeStation()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "PeckhamRyeStation343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "PeckhamRyeStation343Audio();" );
  }
}
function PeckhamRyeStation343Audio(){
  PeckhamRyeStationAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "HanoverPark343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "NigelRoad343();" );
  }
}
function HeatonRoad343(){
  getRidOfDestination()
  HeatonRoad()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "HeatonRoad343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "HeatonRoad343Audio();" );
  }
}
function HeatonRoad343Audio(){
  HeatonRoadAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "PeckhamRyeStation343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function NigelRoad343(){
  getRidOfDestination()
  NigelRoad()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "NigelRoad343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "NigelRoad343Audio();" );
  }
}
function NigelRoad343Audio(){
  NigelRoadAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "HeatonRoad343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "PeckhamRyeNunheadLane343();" );
  }
}
function PeckhamRyeEastDulwichRoad343(){
  getRidOfDestination()
  PeckhamRyeEastDulwichRoad()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "PeckhamRyeEastDulwichRoad343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "PeckhamRyeEastDulwichRoad343Audio();" );
  }
}
function PeckhamRyeEastDulwichRoad343Audio(){
  PeckhamRyeEastDulwichRoadAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "NigelRoad343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "SolomonsPassage343();" );
  }
}
function PeckhamRyeNunheadLane343(){
  getRidOfDestination()
  PeckhamRyeNunheadLane()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "PeckhamRyeNunheadLane343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "PeckhamRyeNunheadLane343Audio();" );
  }
}
function PeckhamRyeNunheadLane343Audio(){
  PeckhamRyeNunheadLaneAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "PeckhamRyeEastDulwichRoad343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "SolomonsPassage343();" );
  }
}
function SolomonsPassage343(){
  getRidOfDestination()
  SolomonsPassage()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "SolomonsPassage343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "SolomonsPassage343Audio();" );
  }
}
function SolomonsPassage343Audio(){
  SolomonsPassageAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "PeckhamRyeNunheadLane343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "RyeHillPark343();" );
  }
}
function RyeHillPark343(){
  getRidOfDestination()
  RyeHillPark()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "RyeHillPark343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "RyeHillPark343Audio();" );
  }
}
function RyeHillPark343Audio(){
  RyeHillParkAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "SolomonsPassage343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "StuartRoad343();" );
  }
}
function StuartRoad343(){
  getRidOfDestination()
  StuartRoad()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "StuartRoad343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "StuartRoad343Audio();" );
  }
}
function StuartRoad343Audio(){
  StuartRoadAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "RyeHillPark343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "SurreyRoad343();" );
  }
}
function SurreyRoad343(){
  getRidOfDestination()
  SurreyRoad()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "SurreyRoad343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "SurreyRoad343Audio();" );
  }
}
function SurreyRoad343Audio(){
  SurreyRoadAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "StuartRoad343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "MerttinsRoad343();" );
  }
}
function MerttinsRoad343(){
  getRidOfDestination()
  MerttinsRoad()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "MerttinsRoad343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "MerttinsRoad343Audio();" );
  }
}
function MerttinsRoad343Audio(){
  MerttinsRoadAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "StNorbertRoad343();" );
  }
}
function InvertonRoad343(){
  getRidOfDestination()
  InvertonRoad()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "InvertonRoad343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "InvertonRoad343Audio();" );
  }
}
function InvertonRoad343Audio(){
  InvertonRoadAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "SurreyRoad343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function StNorbertRoad343(){
  getRidOfDestination()
  StNorbertRoad()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "StNorbertRoad343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "StNorbertRoad343Audio();" );
  }
}
function StNorbertRoad343Audio(){
  StNorbertRoadAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "InvertonRoad343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "TurnhamRoad343();" );
  }
}
function TurnhamRoad343(){
  getRidOfDestination()
  TurnhamRoad()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "TurnhamRoad343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "TurnhamRoad343Audio();" );
  }
}
function TurnhamRoad343Audio(){
  TurnhamRoadAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "StNorbertRoad343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "BrockillCrescent343();" );
  }
}
function BrockillCrescent343(){
  getRidOfDestination()
  BrockillCrescent()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "BrockillCrescent343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "BrockillCrescent343Audio();" );
  }
}
function BrockillCrescent343Audio(){
  BrockillCrescentAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "TurnhamRoad343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "StAsaphRoad343();" );
  }
}
function StAsaphRoad343(){
  getRidOfDestination()
  StAsaphRoad()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "StAsaphRoad343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "StAsaphRoad343Audio();" );
  }
}
function StAsaphRoad343Audio(){
  StAsaphRoadAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "BrockillCrescent343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "AvignonRoadDrakefellRoad343();" );
  }
}
function AvignonRoadDrakefellRoad343(){
  getRidOfDestination()
  AvignonRoadDrakefellRoad()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "AvignonRoadDrakefellRoad343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "AvignonRoadDrakefellRoad343Audio();" );
  }
}
function AvignonRoadDrakefellRoad343Audio(){
  AvignonRoadDrakefellRoadAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "KittoRoad343();" );
  }
}
function DrakefellRoad343(){
  getRidOfDestination()
  DrakefellRoad()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "DrakefellRoad343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "DrakefellRoad343Audio();" );
  }
}
function DrakefellRoad343Audio(){
  DrakefellRoadAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "StAsaphRoad343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function KittoRoad343(){
  getRidOfDestination()
  KittoRoad()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "KittoRoad343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "KittoRoad343Audio();" );
  }
}
function KittoRoad343Audio(){
  KittoRoadAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "DrakefellRoad343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "ArbuthnotRoad343();" );
  }
}
function ArbuthnotRoad343(){
  getRidOfDestination()
  ArbuthnotRoad()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "ArbuthnotRoad343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "ArbuthnotRoad343Audio();" );
  }
}
function ArbuthnotRoad343Audio(){
  ArbuthnotRoadAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "OmmaneyRoad343();" );
  }
}
function OmmaneyRoad343(){
  getRidOfDestination()
  OmmaneyRoad()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "OmmaneyRoad343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "OmmaneyRoad343Audio();" );
  }
}
function OmmaneyRoad343Audio(){
  OmmaneyRoadAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "KittoRoad343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "NewCrossJerninghamRoad343();" );
  }
}
function NewCrossBusGarage343(){
  getRidOfDestination()
  NewCrossBusGarage()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "NewCrossBusGarage343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "NewCrossBusGarage343Audio();" );
  }
}
function NewCrossBusGarage343Audio(){
  NewCrossBusGarageAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "OmmaneyRoad343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function NewCrossJerninghamRoad343(){
  getRidOfDestination()
  NewCrossJerninghamRoad()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "NewCrossJerninghamRoad343Audio();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "NewCrossJerninghamRoad343Audio();" );
  }
}
function NewCrossJerninghamRoad343Audio(){
  NewCrossJerninghamRoadAudio()
  if (routeDestination === "Aldgate343"){
    NextDestination.setAttribute( "onClick", "NewCrossBusGarage343();" );
  } else if (routeDestination === "NewCrossGate343") {
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  }
}

function WatfordJunctionStation258(){
  getRidOfDestination()
  WatfordJunctionStation()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "WatfordJunctionStation258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "WatfordJunctionStation258Audio();" );
  }
}
function WatfordJunctionStation258Audio(){
  WatfordJunctionStationAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "ClarendonRoad258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function ClarendonRoad258(){
  getRidOfDestination()
  ClarendonRoad()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "ClarendonRoad258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "ClarendonRoad258Audio();" );
  }
}
function ClarendonRoad258Audio(){
  ClarendonRoadAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "BeechenGrove258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function BeechenGrove258(){
  getRidOfDestination()
  BeechenGrove()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "BeechenGrove258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "BeechenGrove258Audio();" );
  }
}
function BeechenGrove258Audio(){
  BeechenGroveAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "WaterLane258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function WaterLane258(){
  getRidOfDestination()
  WaterLane()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "WaterLane258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "WaterLane258Audio();" );
  }
}
function WaterLane258Audio(){
  WaterLaneAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "WatfordHighStreetStation258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function WatfordJunctionRailwayStation258(){
  getRidOfDestination()
  WatfordJunctionRailwayStation()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "WatfordJunctionRailwayStation258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "WatfordJunctionRailwayStation258Audio();" );
  }
}
function WatfordJunctionRailwayStation258Audio(){
  WatfordJunctionRailwayStationAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "WatfordFieldRoad258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  }
}
function StJohnsRoad258(){
  getRidOfDestination()
  StJohnsRoad()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "StJohnsRoad258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "StJohnsRoad258Audio();" );
  }
}
function StJohnsRoad258Audio(){
  StJohnsRoadAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "WatfordFieldRoad258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "WatfordJunctionRailwayStation258();" );
  }
}
function StMarysRoad258(){
  getRidOfDestination()
  StMarysRoad()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "StMarysRoad258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "StMarysRoad258Audio();" );
  }
}
function KingStreet258Audio(){
  StMarysRoadAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "WatfordFieldRoad258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "StJohnsRoad258();" );
  }
}
function KingStreet258(){
  getRidOfDestination()
  KingStreet()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "KingStreet258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "KingStreet258Audio();" );
  }
}
function KingStreet258Audio(){
  KingStreetAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "WatfordFieldRoad258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "StMarysRoad258();" );
  }
}
function WatfordHighStreetStation258(){
  getRidOfDestination()
  WatfordHighStreetStation()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "WatfordHighStreetStation258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "WatfordHighStreetStation258Audio();" );
  }
}
function WatfordHighStreetStation258Audio(){
  WatfordHighStreetStationAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "WatfordFieldRoad258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "KingStreet258();" );
  }
}
function WatfordFieldRoad258(){
  getRidOfDestination()
  WatfordFieldRoad()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "WatfordFieldRoad258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "WatfordFieldRoad258Audio();" );
  }
}
function WatfordFieldRoad258Audio(){
  WatfordFieldRoadAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "WaterfieldsWay258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function WaterfieldsWay258(){
  getRidOfDestination()
  WaterfieldsWay()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "WaterfieldsWay258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "WaterfieldsWay258Audio();" );
  }
}
function WaterfieldsWay258Audio(){
  WaterfieldsWayAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "BusheyArches258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function DaltonWay258(){
  getRidOfDestination()
  DaltonWay()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "DaltonWay258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "DaltonWay258Audio();" );
  }
}
function DaltonWay258Audio(){
  DaltonWayAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "BusheyStation258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "WatfordHighStreetStation258();" );
  }
}
function BusheyArches258(){
  getRidOfDestination()
  BusheyArches()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "BusheyArches258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "BusheyArches258Audio();" );
  }
}
function BusheyArches258Audio(){
  BusheyArchesAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "BusheyStation258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "DaltonWay258();" );
  }
}
function BusheyStation258(){
  getRidOfDestination()
  BusheyStation()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "BusheyStation258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "BusheyStation258Audio();" );
  }
}
function BusheyStation258Audio(){
  BusheyStationAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "GrangeRoad258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "BusheyArches258();" );
  }
}
function GrangeRoad258(){
  getRidOfDestination()
  GrangeRoad()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "GrangeRoad258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "GrangeRoad258Audio();" );
  }
}
function GrangeRoad258Audio(){
  GrangeRoadAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "GrangeAcademy258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "BusheyStation258();" );
  }
}
function GrangeAcademy258(){
  getRidOfDestination()
  GrangeAcademy()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "GrangeAcademy258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "GrangeAcademy258Audio();" );
  }
}
function GrangeAcademy258Audio(){
  GrangeAcademyAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "TheRedLionPublicHouse258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "GrangeRoad258();" );
  }
}
function TheRedLionPublicHouse258(){
  getRidOfDestination()
  TheRedLionPublicHouse()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "TheRedLionPublicHouse258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "TheRedLionPublicHouse258Audio();" );
  }
}
function TheRedLionPublicHouse258Audio(){
  TheRedLionPublicHouseAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "BournehallRoad258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "GrangeAcademy258();" );
  }
}
function BournehallRoad258(){
  getRidOfDestination()
  BournehallRoad()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "BournehallRoad258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "BournehallRoad258Audio();" );
  }
}
function BournehallRoad258Audio(){
  BournehallRoadAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "MelbourneRoad258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "TheRedLionPublicHouse258();" );
  }
}
function MelbourneRoad258(){
  getRidOfDestination()
  MelbourneRoad()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "MelbourneRoad258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "MelbourneRoad258Audio();" );
  }
}
function MelbourneRoad258Audio(){
  MelbourneRoadAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "Steeplands258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "BournehallRoad258();" );
  }
}
function Steeplands258(){
  getRidOfDestination()
  Steeplands()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "Steeplands258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "Steeplands258Audio();" );
  }
}
function Steeplands258Audio(){
  SteeplandsAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "TheRoyalOakPublicHouse258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "MelbourneRoad258();" );
  }
}
function TheRoyalOakPublicHouse258(){
  getRidOfDestination()
  TheRoyalOakPublicHouse()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "TheRoyalOakPublicHouse258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "TheRoyalOakPublicHouse258Audio();" );
  }
}
function TheRoyalOakPublicHouse258Audio(){
  TheRoyalOakPublicHouseAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "MerryHillRoad258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "Steeplands258();" );
  }
}
function MerryHillRoad258(){
  getRidOfDestination()
  MerryHillRoad()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "MerryHillRoad258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "MerryHillRoad258Audio();" );
  }
}
function MerryHillRoad258Audio(){
  MerryHillRoadAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "StPetersClose258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "TheRoyalOakPublicHouse258();" );
  }
}
function StPetersClose258(){
  getRidOfDestination()
  StPetersClose()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "StPetersClose258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "StPetersClose258Audio();" );
  }
}
function StPetersClose258Audio(){
  StPetersCloseAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "WindmillLane258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function BusheyHeathThreeCrowns258(){
  getRidOfDestination()
  BusheyHeathThreeCrowns()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "BusheyHeathThreeCrowns258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "BusheyHeathThreeCrowns258Audio();" );
  }
}
function BusheyHeathThreeCrowns258Audio(){
  BusheyHeathThreeCrownsAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "CommonRoad258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "MerryHillRoad258();" );
  }
}
function WindmillLane258(){
  getRidOfDestination()
  WindmillLane()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "WindmillLane258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "WindmillLane258Audio();" );
  }
}
function WindmillLane258Audio(){
  WindmillLaneAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "CommonRoad258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "BusheyHeathThreeCrowns258();" );
  }
}
function CommonRoad258(){
  getRidOfDestination()
  CommonRoad()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "CommonRoad258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "CommonRoad258Audio();" );
  }
}
function CommonRoad258Audio(){
  CommonRoadAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HiveRoad258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "WindmillLane258();" );
  }
}
function HiveRoad258(){
  getRidOfDestination()
  HiveRoad()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HiveRoad258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "HiveRoad258Audio();" );
  }
}
function HiveRoad258Audio(){
  HiveRoadAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "AvantiHousePrimarySchool258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "CommonRoad258();" );
  }
}
function AvantiHousePrimarySchool258(){
  getRidOfDestination()
  AvantiHousePrimarySchool()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "AvantiHousePrimarySchool258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "AvantiHousePrimarySchool258Audio();" );
  }
}
function AvantiHousePrimarySchool258Audio(){
  AvantiHousePrimarySchoolAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "Sandringham258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "HiveRoad258();" );
  }
}
function Sandringham258(){
  getRidOfDestination()
  Sandringham()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "Sandringham258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "Sandringham258Audio();" );
  }
}
function Sandringham258Audio(){
  SandringhamAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "ClampHill258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "AvantiHousePrimarySchool258();" );
  }
}
function ClampHill258(){
  getRidOfDestination()
  ClampHill()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "ClampHill258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "ClampHill258Audio();" );
  }
}
function ClampHill258Audio(){
  ClampHillAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "BrookshillGate258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "Sandringham258();" );
  }
}
function BrookshillGate258(){
  getRidOfDestination()
  BrookshillGate()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "BrookshillGate258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "BrookshillGate258Audio();" );
  }
}
function BrookshillGate258Audio(){
  BrookshillGateAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HarrowCollege258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "ClampHill258();" );
  }
}
function HarrowCollege258(){
  getRidOfDestination()
  HarrowCollege()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HarrowCollege258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "HarrowCollege258Audio();" );
  }
}
function HarrowCollege258Audio(){
  HarrowCollegeAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "UxbridgeRoad258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "BrookshillGate258();" );
  }
}
function UxbridgeRoad258(){
  getRidOfDestination()
  UxbridgeRoad()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "UxbridgeRoad258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "UxbridgeRoad258Audio();" );
  }
}
function UxbridgeRoad258Audio(){
  UxbridgeRoadAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HarrowWealdBusGarage258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "HarrowCollege258();" );
  }
}
function MonroGardens258(){
  getRidOfDestination()
  MonroGardens()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "MonroGardens258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "MonroGardens258Audio();" );
  }
}
function MonroGardens258Audio(){
  MonroGardensAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "WealdLane258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "UxbridgeRoad258();" );
  }
}
function HarrowWealdBusGarage258(){
  getRidOfDestination()
  HarrowWealdBusGarage()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HarrowWealdBusGarage258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "HarrowWealdBusGarage258Audio();" );
  }
}
function HarrowWealdBusGarage258Audio(){
  HarrowWealdBusGarageAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "WealdLane258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "MonroGardens258();" );
  }
}
function WealdLane258(){
  getRidOfDestination()
  WealdLane()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "WealdLane258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "WealdLane258Audio();" );
  }
}
function WealdLane258Audio(){
  WealdLaneAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "SalvatorianCollegeStJosephsChurch258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function LongElmes258(){
  getRidOfDestination()
  LongElmes()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "LongElmes258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "LongElmes258Audio();" );
  }
}
function LongElmes258Audio(){
  LongElmesAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "WealdstoneBaptistChurch258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "HarrowWealdBusGarage258();" );
  }
}
function SalvatorianCollegeStJosephsChurch258(){
  getRidOfDestination()
  SalvatorianCollegeStJosephsChurch()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "SalvatorianCollegeStJosephsChurch258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "SalvatorianCollegeStJosephsChurch258Audio();" );
  }
}
function SalvatorianCollegeStJosephsChurch258Audio(){
  SalvatorianCollegeStJosephsChurchAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "WealdstoneBaptistChurch258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "LongElmes258();" );
  }
}
function WealdstoneBaptistChurch258(){
  getRidOfDestination()
  WealdstoneBaptistChurch()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "WealdstoneBaptistChurch258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "WealdstoneBaptistChurch258Audio();" );
  }
}
function WealdstoneBaptistChurch258Audio(){
  WealdstoneBaptistChurchAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "TheWealdstoneCentre258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "SalvatorianCollegeStJosephsChurch258();" );
  }
}
function TheWealdstoneCentre258(){
  getRidOfDestination()
  TheWealdstoneCentre()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "TheWealdstoneCentre258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "TheWealdstoneCentre258Audio();" );
  }
}
function TheWealdstoneCentre258Audio(){
  TheWealdstoneCentreAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HarrowWealdstoneStation258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "WealdstoneBaptistChurch258();" );
  }
}
function HarrowWealdstoneStation258(){
  getRidOfDestination()
  HarrowWealdstoneStation()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HarrowWealdstoneStation258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "HarrowWealdstoneStation258Audio();" );
  }
}
function HarrowWealdstoneStation258Audio(){
  HarrowWealdstoneStationAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HarrowCivicCentreHarrowMosque258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "TheWealdstoneCentre258();" );
  }
}
function HarrowCivicCentreHarrowMosque258(){
  getRidOfDestination()
  HarrowCivicCentreHarrowMosque()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HarrowCivicCentreHarrowMosque258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "HarrowCivicCentreHarrowMosque258Audio();" );
  }
}
function HarrowCivicCentreHarrowMosque258Audio(){
  HarrowCivicCentreHarrowMosqueAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HindesRoad258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "HarrowWealdstoneStation258();" );
  }
}
function HindesRoad258(){
  getRidOfDestination()
  HindesRoad()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HindesRoad258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "HindesRoad258Audio();" );
  }
}
function HindesRoad258Audio(){
  HindesRoadAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HarrowTownCentreJohnsRoad258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function HarrowTownCentreJohnsRoad258(){
  getRidOfDestination()
  HarrowTownCentreJohnsRoad()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HarrowTownCentreJohnsRoad258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "HarrowTownCentreJohnsRoad258Audio();" );
  }
}
function HarrowTownCentreJohnsRoad258Audio(){
  HarrowTownCentreJohnsRoadAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HarrowTownCentre258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function SafariCinema258(){
  getRidOfDestination()
  SafariCinema()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "SafariCinema258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "SafariCinema258Audio();" );
  }
}
function SafariCinema258Audio(){
  SafariCinemaAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HarrowBusStation258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "HarrowCivicCentreHarrowMosque258();" );
  }
}
function HarrowTownCentreSheepcoteRoad258(){
  getRidOfDestination()
  HarrowTownCentreSheepcoteRoad()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HarrowTownCentreSheepcoteRoad258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "HarrowTownCentreSheepcoteRoad258Audio();" );
  }
}
function HarrowTownCentreSheepcoteRoad258Audio(){
  HarrowTownCentreSheepcoteRoadAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HarrowBusStation258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "SafariCinema258();" );
  }
}
function HarrowTownCentre258(){
  getRidOfDestination()
  HarrowTownCentre()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HarrowTownCentre258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "HarrowTownCentre258Audio();" );
  }
}
function HarrowTownCentre258Audio(){
  HarrowTownCentreAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HarrowBusStation258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "HarrowTownCentreSheepcoteRoad258();" );
  }
}
function HarrowBusStation258(){
  getRidOfDestination()
  HarrowBusStation()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HarrowBusStation258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "HarrowBusStation258Audio();" );
  }
}
function HarrowBusStation258Audio(){
  HarrowBusStationAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HarrowTownCentre2258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "HarrowTownCentre258();" );
  }
}
function HarrowTownCentre2258(){
  getRidOfDestination()
  HarrowTownCentre()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HarrowTownCentre2258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "HarrowTownCentre2258Audio();" );
  }
}
function HarrowTownCentre2258Audio(){
  HarrowTownCentreAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "TyburnLane258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "HarrowBusStation258();" );
  }
}
function TyburnLane258(){
  getRidOfDestination()
  TyburnLane()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "TyburnLane258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "TyburnLane258Audio();" );
  }
}
function TyburnLane258Audio(){
  TyburnLaneAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "KentonRoad258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "HarrowTownCentre2258();" );
  }
}
function KentonRoad258(){
  getRidOfDestination()
  KentonRoad()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "KentonRoad258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "KentonRoad258Audio();" );
  }
}
function KentonRoad258Audio(){
  KentonRoadAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HarrowSchool258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function HarrowSchool258(){
  getRidOfDestination()
  HarrowSchool()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HarrowSchool258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "HarrowSchool258Audio();" );
  }
}
function HarrowSchool258Audio(){
  HarrowSchoolAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HarrowPark258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "TyburnLane258();" );
  }
}
function HarrowPark258(){
  getRidOfDestination()
  HarrowPark()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "HarrowPark258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "HarrowPark258Audio();" );
  }
}
function HarrowPark258Audio(){
  HarrowParkAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "RoxethHill258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "HarrowSchool258();" );
  }
}
function RoxethHill258(){
  getRidOfDestination()
  RoxethHill()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "RoxethHill258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "RoxethHill258Audio();" );
  }
}
function RoxethHill258Audio(){
  RoxethHillAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "GrangeRoad2258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "HarrowPark258();" );
  }
}
function GrangeRoad2258(){
  getRidOfDestination()
  GrangeRoad()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "GrangeRoad2258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "GrangeRoad2258Audio();" );
  }
}
function GrangeRoad2258Audio(){
  GrangeRoadAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "SouthHarrowBusStation258();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "RoxethHill258();" );
  }
}
function SouthHarrowBusStation258(){
  getRidOfDestination()
  SouthHarrowBusStation()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "SouthHarrowBusStation258Audio();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "SouthHarrowBusStation258Audio();" );
  }
}
function SouthHarrowBusStation258Audio(){
  SouthHarrowBusStationAudio()
  if (routeDestination === "SouthHarrow258"){
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  } else if (routeDestination === "WatfordJunction258") {
    NextDestination.setAttribute( "onClick", "GrangeRoad2258();" );
  }
}