$(document).ready(function () {
    $(this).scrollTop(0);
    var FE = $(".Fbutton");
    var BE = $(".Bbutton");
    var DE = $(".Dbutton");
    //Variables for Skill Queue
    var HT = $(".skillContainer1");
    var CS = $(".skillContainer2");
    var JS = $(".skillContainer3");
    var PP = $(".skillContainer4");
    var MS = $(".skillContainer5");
    var JV = $(".skillContainer6");
    var CP = $(".skillContainer7");
    var PY = $(".skillContainer8");
    var PS = $(".skillContainer9");
    var AC = $(".skillContainer10");
    var IL = $(".skillContainer11");
    PP.hide();
    MS.hide();
    JV.hide();
    CP.hide();
    PY.hide();
    PS.hide();
    AC.hide();
    IL.hide();

    //Changing to FrontEnd
    function change1() {
        FE.addClass("active");
        BE.removeClass("active");
        DE.removeClass("active");
        PY.fadeOut(500, function () {
            CP.fadeOut(500, function () {
                JV.fadeOut(500, function () {
                    MS.fadeOut(500, function () {
                        PP.fadeOut(500, function () {
                            IL.fadeOut(500, function () {
                                AC.fadeOut(500, function () {
                                    PS.fadeOut(500, function () {
                                        HT.fadeIn(500, function () {
                                            CS.fadeIn(500, function () {
                                                JS.fadeIn(500, function () {})
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    }

    //Changing to BackEnd
    function change2() {
        BE.addClass("active");
        FE.removeClass("active");
        DE.removeClass("active");
        IL.fadeOut(500, function () {
            AC.fadeOut(500, function () {
                PS.fadeOut(500, function () {
                    JS.fadeOut(500, function () {
                        CS.fadeOut(500, function () {
                            HT.fadeOut(500, function () {
                                PP.fadeIn(500, function () {
                                    MS.fadeIn(500, function () {
                                        JV.fadeIn(500, function () {
                                            CP.fadeIn(500, function () {
                                                PY.fadeIn(500);
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    }

    //Changing to Design
    function change3() {
        DE.addClass("active");
        BE.removeClass("active");
        FE.removeClass("active");
        PY.fadeOut(500, function () {
            CP.fadeOut(500, function () {
                JV.fadeOut(500, function () {
                    MS.fadeOut(500, function () {
                        PP.fadeOut(500, function () {
                            JS.fadeOut(500, function () {
                                CS.fadeOut(500, function () {
                                    HT.fadeOut(500, function () {
                                        PS.fadeIn(500, function () {
                                            AC.fadeIn(500, function () {
                                                IL.fadeIn(500, function () {})
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    }
    FE.on("click", change1);
    BE.on("click", change2);
    DE.on("click", change3);
    var MediaFooter = $('.MediaFooter');
    var Hide = $('.HideButton');
    var Show = $('.ShowButton');
    var M1 = $('.media1');
    var M2 = $('.media2');
    var M3 = $('.media3');
    Hide.on('click', HideBar);
    Show.on('click', ShowBar)

    function HideBar() {
        MediaFooter.animate({
            width: "160px",
            borderRadius: "21px",
            marginLeft: "15px",
            marginBottom: "15px"
        }, 1500, 'linear');
        M1.fadeOut(1000);
        M2.fadeOut(1000);
        M3.fadeOut(1000);
        Hide.fadeOut(500);
        Show.fadeIn(1000);
    }

    function ShowBar() {
        MediaFooter.animate({
            width: "100%",
            borderRadius: "0",
            marginLeft: "0",
            marginBottom: "0"
        }, 1000, 'linear');
        M1.fadeIn(1000);
        M2.fadeIn(1000);
        M3.fadeIn(1000);
        Hide.fadeIn(500);
        Show.fadeOut(1000);
    }
});
