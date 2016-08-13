window.isMobile = !1,
(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) && (window.isMobile = !0),
window.requestAnimFrame = function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
        window.setTimeout(e, 1e3 / 60)
    }
}();
var Pokemon = function() {
    function e(e) {
        return a[i[e]]
    }
    for (var a = [{
        id: "0",
        name: "All"
    }, {
        id: "63",
        name: "Abra"
    }, {
        id: "142",
        name: "Aerodactyl"
    }, {
        id: "65",
        name: "Alakazam"
    }, {
        id: "24",
        name: "Arbok"
    }, {
        id: "59",
        name: "Arcanine"
    }, {
        id: "144",
        name: "Articuno"
    }, {
        id: "15",
        name: "Beedrill"
    }, {
        id: "69",
        name: "Bellsprout"
    }, {
        id: "9",
        name: "Blastoise"
    }, {
        id: "1",
        name: "Bulbasaur"
    }, {
        id: "12",
        name: "Butterfree"
    }, {
        id: "10",
        name: "Caterpie"
    }, {
        id: "113",
        name: "Chansey"
    }, {
        id: "6",
        name: "Charizard"
    }, {
        id: "4",
        name: "Charmander"
    }, {
        id: "5",
        name: "Charmeleon"
    }, {
        id: "36",
        name: "Clefable"
    }, {
        id: "35",
        name: "Clefairy"
    }, {
        id: "91",
        name: "Cloyster"
    }, {
        id: "104",
        name: "Cubone"
    }, {
        id: "87",
        name: "Dewgong"
    }, {
        id: "50",
        name: "Diglett"
    }, {
        id: "132",
        name: "Ditto"
    }, {
        id: "85",
        name: "Dodrio"
    }, {
        id: "84",
        name: "Doduo"
    }, {
        id: "148",
        name: "Dragonair"
    }, {
        id: "149",
        name: "Dragonite"
    }, {
        id: "147",
        name: "Dratini"
    }, {
        id: "96",
        name: "Drowzee"
    }, {
        id: "51",
        name: "Dugtrio"
    }, {
        id: "133",
        name: "Eevee"
    }, {
        id: "23",
        name: "Ekans"
    }, {
        id: "125",
        name: "Electabuzz"
    }, {
        id: "101",
        name: "Electrode"
    }, {
        id: "102",
        name: "Exeggcute"
    }, {
        id: "103",
        name: "Exeggutor"
    }, {
        id: "83",
        name: "Farfetch'd"
    }, {
        id: "22",
        name: "Fearow"
    }, {
        id: "136",
        name: "Flareon"
    }, {
        id: "92",
        name: "Gastly"
    }, {
        id: "94",
        name: "Gengar"
    }, {
        id: "74",
        name: "Geodude"
    }, {
        id: "44",
        name: "Gloom"
    }, {
        id: "42",
        name: "Golbat"
    }, {
        id: "118",
        name: "Goldeen"
    }, {
        id: "55",
        name: "Golduck"
    }, {
        id: "76",
        name: "Golem"
    }, {
        id: "75",
        name: "Graveler"
    }, {
        id: "88",
        name: "Grimer"
    }, {
        id: "58",
        name: "Growlithe"
    }, {
        id: "130",
        name: "Gyarados"
    }, {
        id: "93",
        name: "Haunter"
    }, {
        id: "107",
        name: "Hitmonchan"
    }, {
        id: "106",
        name: "Hitmonlee"
    }, {
        id: "116",
        name: "Horsea"
    }, {
        id: "97",
        name: "Hypno"
    }, {
        id: "2",
        name: "Ivysaur"
    }, {
        id: "39",
        name: "Jigglypuff"
    }, {
        id: "135",
        name: "Jolteon"
    }, {
        id: "124",
        name: "Jynx"
    }, {
        id: "140",
        name: "Kabuto"
    }, {
        id: "141",
        name: "Kabutops"
    }, {
        id: "64",
        name: "Kadabra"
    }, {
        id: "14",
        name: "Kakuna"
    }, {
        id: "115",
        name: "Kangaskhan"
    }, {
        id: "99",
        name: "Kingler"
    }, {
        id: "109",
        name: "Koffing"
    }, {
        id: "98",
        name: "Krabby"
    }, {
        id: "131",
        name: "Lapras"
    }, {
        id: "108",
        name: "Lickitung"
    }, {
        id: "68",
        name: "Machamp"
    }, {
        id: "67",
        name: "Machoke"
    }, {
        id: "66",
        name: "Machop"
    }, {
        id: "129",
        name: "Magikarp"
    }, {
        id: "126",
        name: "Magmar"
    }, {
        id: "81",
        name: "Magnemite"
    }, {
        id: "82",
        name: "Magneton"
    }, {
        id: "56",
        name: "Mankey"
    }, {
        id: "105",
        name: "Marowak"
    }, {
        id: "52",
        name: "Meowth"
    }, {
        id: "11",
        name: "Metapod"
    }, {
        id: "151",
        name: "Mew"
    }, {
        id: "150",
        name: "Mewtwo"
    }, {
        id: "146",
        name: "Moltres"
    }, {
        id: "122",
        name: "Mr. Mime"
    }, {
        id: "89",
        name: "Muk"
    }, {
        id: "34",
        name: "Nidoking"
    }, {
        id: "31",
        name: "Nidoqueen"
    }, {
        id: "29",
        name: "Nidoran♀"
    }, {
        id: "32",
        name: "Nidoran♂"
    }, {
        id: "30",
        name: "Nidorina"
    }, {
        id: "33",
        name: "Nidorino"
    }, {
        id: "38",
        name: "Ninetales"
    }, {
        id: "43",
        name: "Oddish"
    }, {
        id: "138",
        name: "Omanyte"
    }, {
        id: "139",
        name: "Omastar"
    }, {
        id: "95",
        name: "Onix"
    }, {
        id: "46",
        name: "Paras"
    }, {
        id: "47",
        name: "Parasect"
    }, {
        id: "53",
        name: "Persian"
    }, {
        id: "18",
        name: "Pidgeot"
    }, {
        id: "17",
        name: "Pidgeotto"
    }, {
        id: "16",
        name: "Pidgey"
    }, {
        id: "25",
        name: "Pikachu"
    }, {
        id: "127",
        name: "Pinsir"
    }, {
        id: "60",
        name: "Poliwag"
    }, {
        id: "61",
        name: "Poliwhirl"
    }, {
        id: "62",
        name: "Poliwrath"
    }, {
        id: "77",
        name: "Ponyta"
    }, {
        id: "137",
        name: "Porygon"
    }, {
        id: "57",
        name: "Primeape"
    }, {
        id: "54",
        name: "Psyduck"
    }, {
        id: "26",
        name: "Raichu"
    }, {
        id: "78",
        name: "Rapidash"
    }, {
        id: "20",
        name: "Raticate"
    }, {
        id: "19",
        name: "Rattata"
    }, {
        id: "112",
        name: "Rhydon"
    }, {
        id: "111",
        name: "Rhyhorn"
    }, {
        id: "27",
        name: "Sandshrew"
    }, {
        id: "28",
        name: "Sandslash"
    }, {
        id: "123",
        name: "Scyther"
    }, {
        id: "117",
        name: "Seadra"
    }, {
        id: "119",
        name: "Seaking"
    }, {
        id: "86",
        name: "Seel"
    }, {
        id: "90",
        name: "Shellder"
    }, {
        id: "80",
        name: "Slowbro"
    }, {
        id: "79",
        name: "Slowpoke"
    }, {
        id: "143",
        name: "Snorlax"
    }, {
        id: "21",
        name: "Spearow"
    }, {
        id: "7",
        name: "Squirtle"
    }, {
        id: "121",
        name: "Starmie"
    }, {
        id: "120",
        name: "Staryu"
    }, {
        id: "114",
        name: "Tangela"
    }, {
        id: "128",
        name: "Tauros"
    }, {
        id: "72",
        name: "Tentacool"
    }, {
        id: "73",
        name: "Tentacruel"
    }, {
        id: "134",
        name: "Vaporeon"
    }, {
        id: "49",
        name: "Venomoth"
    }, {
        id: "48",
        name: "Venonat"
    }, {
        id: "3",
        name: "Venusaur"
    }, {
        id: "71",
        name: "Victreebel"
    }, {
        id: "45",
        name: "Vileplume"
    }, {
        id: "100",
        name: "Voltorb"
    }, {
        id: "37",
        name: "Vulpix"
    }, {
        id: "8",
        name: "Wartortle"
    }, {
        id: "13",
        name: "Weedle"
    }, {
        id: "70",
        name: "Weepinbell"
    }, {
        id: "110",
        name: "Weezing"
    }, {
        id: "40",
        name: "Wigglytuff"
    }, {
        id: "145",
        name: "Zapdos"
    }, {
        id: "41",
        name: "Zubat"
    }], i = {}, n = 0, o = a.length; n < o; n++)
        i[a[n].id] = n;
    return {
        all: a,
        getById: e
    }
}()
  , API = function() {
    function e(e) {
        o(),
        t(),
        r ? e() : d(e)
    }
    function a(e) {
        u = e,
        ga("send", "event", "Pokemon", "search", Pokemon.getById(e).name)
    }
    function i(e, a, i, n, o) {
        p.fadeIn(250),
        clearTimeout(l),
        l = setTimeout(function() {
            var t = m + "submissions";
            c && c.abort(),
            c = $.get(t, {
                deviceId: r,
                minLatitude: e,
                maxLatitude: a,
                minLongitude: i,
                maxLongitude: n,
                pokemonId: u
            }, function(e) {
                o(e.data),
                p.fadeOut(250)
            }, "json").fail(function(e) {
                console.log("Server error", e),
                p.fadeOut(250)
            })
        }, 750)
    }
    function n(e, a) {
        var i = m + "submissions/" + e + "/ratings?deviceId=" + r;
        $.post(i, {
            rating: a
        }, function() {}, "json"),
        1 == a ? ga("send", "event", "Pokemon", "vote up", e) : a == -1 && ga("send", "event", "Pokemon", "vote down", e)
    }
    function o() {
        $(".map").on("click", ".submission-vote-up, .submission-vote-down", function(e) {
            e.preventDefault();
            var a = $(this).data("rating")
              , i = $(this).data("id");
            n(i, a);
            var o = parseInt($(this).closest(".vote-wrap").find(".submission-vote-up").attr("data-count"));
            o = $(this).hasClass("submission-vote-up") ? o + 1 : o;
            var t = parseInt($(this).closest(".vote-wrap").find(".submission-vote-down").attr("data-count"));
            t = $(this).hasClass("submission-vote-down") ? t + 1 : t,
            $(this).closest(".vote-wrap").siblings(".help-percent").text((o / (o + t) * 100).toFixed(2)),
            $(this).closest(".vote-wrap").siblings(".vote-count").text(o + t),
            $(this).closest(".vote-wrap").html("<b>Vote Received, Thanks!</b>")
        })
    }
    function t() {
        $("#pokemon-search-list").on("click", "a", function() {
            a($(this).data("pokemon-id")),
            $("#search-indicator").text(": " + Pokemon.getById(u).name),
            Map.updatePokemon()
        })
    }
    function d(e) {
        var a = m + "users";
        $.post(a, {}, function(a) {
            r = a.data.deviceId,
            Cookies.set("deviceId", r, {
                expires: 365
            }),
            e()
        }, "json")
    }
    var r = Cookies.get("deviceId")
      , m = "https://www.pokeradar.io/api/v1/"
      , s = ["pokeradar-staging.s3.amazonaws.com", "localhost", "d32gxdkw4f5o4o.cloudfront.net"];
    s.indexOf(window.location.hostname) != -1;
    var l, c, u = 0, p = $(".loading-bar");
    return {
        init: e,
        setPokemonId: a,
        getSubmissions: i
    }
}()
  , Map = function() {
    function e() {
        u = L.map("main-map", {
            worldCopyJump: !0
        }),
        L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoicG9rZWdvcmFkYXIiLCJhIjoiY2lxdGdzOW1uMDA0d2ZzajZnMnc4cWtqbyJ9.CXtekby2cmqUGOBJiFl53w", {
            maxZoom: 21,
            maxNativeZoom: 19,
            attribution: "© <a href='https://www.mapbox.com/map-feedback/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
            id: "pokegoradar.109neo3g"
        }).addTo(u),
        p = L.markerClusterGroup({
            spiderfyDistanceMultiplier: 1.6,
            maxClusterRadius: function(e) {
                return e >= 13 ? 3 : 80
            }
        }),
        u.addLayer(p),
        u.on("locationfound", i),
        u.on("locationerror", n),
        u.setView([39.8282, -98.5795], 4),
        o(),
        a(),
        c(),
        u.on("moveend", t)
    }
    function a() {
        u.locate({
            setView: !0,
            maxZoom: 16
        })
    }
    function i(e) {
        var a = e.accuracy / 2;
        L.circle(e.latlng, a, {
            fillColor: "#00cdff",
            color: "#00cdff",
            opacity: .3,
            fillOpacity: .3
        }).addTo(u),
        L.circleMarker(e.latlng, {
            radius: 10,
            fillColor: "#4185fa",
            weight: 3,
            color: "#ffffff",
            opacity: 1,
            fillOpacity: 1
        }).addTo(u),
        t()
    }
    function n(e) {
        t(),
        console.log("Could not find location", e)
    }
    function o() {
        var e = L.DivIcon.extend({
            options: {
                iconSize: [76, 76],
                iconAnchor: [38, 38],
                popupAnchor: [0, -15],
                className: "https://df48mbt4ll5mz.cloudfront.net/ poke-icon"
            }
        })
          , a = "";
        a += '<li><a href="#" data-pokemon-id="0">All</a></li>';
        for (var i = 1, n = Pokemon.all.length; i < n; i++) {
            var o = Pokemon.all[i]
              , t = h + "images/pokemon/" + o.id + ".png"
              , d = '<img src="' + t + '" title="' + o.name + '"/><div class="poke-timer">...</div>';
            v[o.id] = new e({
                html: d
            }),
            a += '<li><a href="#" data-pokemon-id="' + o.id + '"><img src="' + t + '" class="icon"/>' + o.name + "</a></li>"
        }
        $("#pokemon-search-list").html(a)
    }
    function t() {
        clearTimeout(f),
        f = setTimeout(t, k);
        var e = u.getBounds();
        API.getSubmissions(e.getSouth(), e.getNorth(), e.getWest(), e.getEast(), function(e) {
            for (var a = new Date, i = [], n = 0, o = e.length; n < o; n++) {
                var t = d(e[n], a);
                t && i.push(t)
            }
            s(a),
            p.addLayers(i),
            p.refreshClusters()
        })
    }
    function d(e, a) {
        var i = 1e3 * e.created < Date.now() - w
          , n = [e.created.toString().slice(0, -1), e.pokemonId, parseFloat(e.latitude).toFixed(3), parseFloat(e.longitude).toFixed(3)]
          , o = n.join("_");
        if (!b[o]) {
            if (i && u.getZoom() >= 13)
                return;
            var t = l(e.created);
            return b[o] = {
                marker: L.marker([e.latitude, e.longitude], {
                    icon: v[e.pokemonId],
                    opacity: t,
                    riseOnHover: !0
                }),
                data: e,
                updatedAt: a
            },
            b[o].marker.submissionId = e.id,
            b[o].marker.submissionKey = o,
            b[o].marker.on("click", r),
            b[o].marker.on("add", function(e) {
                b[o].timerDiv = e.target._icon.querySelector(".poke-timer"),
                i && b[o].timerDiv && (b[o].timerDiv.remove(),
                b[o].timerDiv = !1)
            }),
            b[o].marker
        }
        (!i || u.getZoom() <= 13) && (b[o].updatedAt = a)
    }
    function r(e) {
        var a = m(e.target.submissionKey);
        e.target.bindPopup(a).openPopup().on("popupclose", function() {
            e.target.unbindPopup()
        })
    }
    function m(e) {
        var a = b[e].data
          , i = a.id
          , n = Pokemon.getById(a.pokemonId).name
          , o = new Date(1e3 * a.created).toLocaleTimeString().replace(/:\d\d /, "")
          , t = parseInt(a.upvotes)
          , d = parseInt(a.downvotes)
          , r = (t / (t + d) * 100).toFixed(2)
          , m = "Pokemon: <b>" + n + "</b><br />Found By Trainer: <b>" + a.trainerName + "</b><br />Time Found: <b>" + o + "</b><br />Lat/Lon: <b>" + a.latitude + ", " + a.longitude + '</b><br /><a href="http://maps.google.com/maps?q=' + a.latitude + "," + a.longitude + '"><b>Get Directions</b></a><br /><br /><span class="help-percent">' + r + '</span>% Helpful | <span class="vote-count">' + (t + d) + '</span> Vote(s)<br /><span class="vote-wrap"><a href="#" class="submission-vote-up" data-rating="1" data-count="' + t + '" data-id="' + i + '"><b>Vote Up</b></a> | <a href="#" class="submission-vote-down" data-rating="-1" data-count="' + d + '" data-id="' + i + '"><b>Vote Down</b></a></span>';
        return ga("send", "event", "Pokemon", "clicked", i),
        m
    }
    function s(e) {
        for (var a in b)
            b[a].updatedAt != e && (p.removeLayer(b[a].marker),
            delete b[a])
    }
    function l(e) {
        e = 1e3 * e;
        var a = Date.now()
          , i = 1
          , n = e + w - a;
        return n < 0 && (i = 0),
        i
    }
    function c() {
        var e = Date.now();
        if (e - g < 1e3)
            return setTimeout(function() {
                window.requestAnimationFrame(c)
            }, 200);
        for (var a in b) {
            var i = b[a];
            if (i.timerDiv) {
                var n = 1e3 * i.data.created
                  , o = n + w - e;
                if (o < 0)
                    p.removeLayer(i.marker),
                    delete b[a];
                else {
                    var t = parseInt(o / 6e4 % 60)
                      , d = parseInt(o / 1e3 % 60);
                    d = d < 10 ? "0" + d : d,
                    i.timerDiv.textContent = t + ":" + d
                }
            }
        }
        g = Date.now(),
        setTimeout(function() {
            window.requestAnimationFrame(c)
        }, 200)
    }
    var u, p, g, f, v = {}, b = {}, h = "https://df48mbt4ll5mz.cloudfront.net/", w = 9e5, k = 18e4;
    return {
        init: e,
        updatePokemon: t
    }
}();
!function() {
    API.init(function() {}),
    Map.init();
    var e = Cookies.get("disclaimerShown");
    e || ($("#disclaimer-modal").modal("show"),
    Cookies.set("disclaimerShown", !0, {
        expires: 365
    })),
    $("#help-button").click(function() {
        ga("send", "event", "Help", "button clicked")
    }),
    $(".modal-dialog a, .sidebar a").attr("target", "_blank").click(function() {
        ga("send", "event", "Outgoing Links", $(this).attr("href"))
    }),
    $(".navbar").click(function() {
        $("body").scrollTop(0)
    });
    var a = navigator.userAgent.toLowerCase()
      , i = a.indexOf("android") > -1
      , n = Cookies.get("perfectThrowShown");
    !n && i && setTimeout(function() {
        Cookies.set("perfectThrowShown", !0, {
            expires: 365
        }),
        $("#android-perfect-throw-modal").modal("show")
    }, 5e3)
}();
var Ads = function() {
    function e() {
        googletag.cmd.push(function() {
            googletag.defineSlot("/262329542/banner_320x50", [320, 50], "div-gpt-ad-1470771380958-0").addService(googletag.pubads()),
            googletag.defineSlot("/262329542/banner_728x90", [728, 90], "div-gpt-ad-1470771380958-1").addService(googletag.pubads()),
            googletag.defineSlot("/262329542/rectangle_300x250", [300, 250], "div-gpt-ad-1470771380958-2").addService(googletag.pubads()),
            googletag.defineSlot("/262329542/rectangle_bottom_300x250", [300, 250], "div-gpt-ad-1470771380958-3").addService(googletag.pubads()),
            googletag.pubads().collapseEmptyDivs(),
            googletag.enableServices()
        }),
        googletag.cmd.push(function() {
            googletag.display("div-gpt-ad-1470771380958-0")
        }),
        googletag.cmd.push(function() {
            googletag.display("div-gpt-ad-1470771380958-1")
        }),
        googletag.cmd.push(function() {
            googletag.display("div-gpt-ad-1470771380958-2")
        }),
        googletag.cmd.push(function() {
            googletag.display("div-gpt-ad-1470771380958-3")
        })
    }
    e()
}();
