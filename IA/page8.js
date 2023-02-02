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