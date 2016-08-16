var wallpaper = {
  rez: function() {
    var w = window.screen.width,
      h = window.screen.height;
    var rez;
    if (w <= 360) {
      rez = "360x480";
    } else if (w <= 480) {
      if (h <= 640) {
        rez = "480x640";
      } else {
        rez = "480x800";
      }
    } else if (w <= 768) {
      if (h <= 1024) {
        rez = "768x1024";
      } else {
        rez = "768x1366";
      }
    } else if (w <= 1366) {
      rez = "1366x768";
    } else {
      rez = "1920x1080";
    }
    return rez;
  },
  filename: [
    "AdelaideFrog_ZH-CN11037278287",
    "AzoresPortugal_ZH-CN12684313303",
    "AzureWindow_ZH-CN8863680074",
    "BaconCreek_ZH-CN8128739634",
    "BledSnow_ZH-CN8899741731",
    "DallolEthiopia_ZH-CN11253814939",
    "DragonHeadsRaising_ZH-CN9424180768",
    "DyjandiFalls_ZH-CN11254212344",
    "FireEscapes_ZH-CN9251582421",
    "FishParkCorsica_ZH-CN11289010888",
    "FiveColoredPool_ZH-CN12673763949",
    "FrogTadpole_ZH-CN10186824604",
    "Gaztelugatxe_ZH-CN11078922437",
    "GermanyHoli_ZH-CN11395323110",
    "GlowWorms_ZH-CN10708592012",
    "GlobeSculpture_ZH-CN14987283809",
    "GreatBearRainforest_ZH-CN9137026528",
    "HeartHoleDivers_ZH-CN12875142412",
    "IzmirFaceWall_ZH-CN8661261728",
    "JinliStreetView_ZH-CN10751235981",
    "LaurelMoss_ZH-CN9578543974",
    "MesseHall_ZH-CN8032841463",
    "MountHuaSnow_ZH-CN10489400024",
    "NLIReadingRoom_ZH-CN13259592233",
    "Pluto_ZH-CN12044921779",
    "PiandiGembro_ZH-CN12053478103",
    "PineWarbler_ZH-CN8925328026",
    "RabbitIsland_ZH-CN10320047201",
    "SaffrondropBonnet_ZH-CN11415710429",
    "SnubNosedMonkey_ZH-CN11146495688",
    "SquirrelBowl_ZH-CN6988757053",
    "TallGrass_ZH-CN12379752699",
    "TokamichiBeechForest_ZH-CN9795569723",
    "TraditionalBanners_ZH-CN8428576502",
    "UnderwaterWalrus_ZH-CN9352535771",
    "VernalEquinoxOrchid_ZH-CN10226406786",
    "WestBow_ZH-CN11767628474",
    "WhiteNightMelb_ZH-CN9705829579",
    "WhitePocket_ZH-CN12539562230",
    "WinthropBalloon_ZH-CN12962779974",
    "CaCO3_ZH-CN8070420833",
    "YunqiPagoda_ZH-CN8617576614",
    "Selenite_ZH-CN9667731332",
    "HistoricOlympics_ZH-CN7402465348",
    "Kestrel_ZH-CN10242518763",
    "Plumeria_ZH-CN10955138144",
    "Taghit_ZH-CN10846599174",
    "LongTailedGlossy_ZH-CN13193173719",
    "VolcanoesNP_ZH-CN11778388181",
    "BlackSea_ZH-CN9772885358",
    "TorontoJoggers_ZH-CN13754389918",
    "BigHornSheep_ZH-CN6358178150"
  ],
  url: function() {
    return "url(images/wallpaper/" + this.filename[Math.round(Math.random() * (this.filename.length - 1))] + "_" + this.rez() + ".jpg)";
  },
  set: function() {
    var today = Date().slice(0, 15);
    var url;
    if (localStorage.date === today && localStorage.url) {
      url = localStorage.url;
    } else {
      url = this.url();
      localStorage.date = today;
      localStorage.url = url;
    }
    get("#wallpaper").style.background = url;
  },
  change: function() {
    var url = this.url();
    get("#wallpaper").style.background = url;
    localStorage.url = url;
  }
};