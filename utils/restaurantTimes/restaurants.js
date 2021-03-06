document.addEventListener("DOMContentLoaded", function() {
  var display = document.getElementById('display')
  console.log(display)
for (var i = 0; i < Object.keys(restaurants).length; i++) {
  var currentKey = Object.keys(restaurants)[i]
  var place = document.createElement('DIV')
  var title = document.createElement('H1')
  title.innerHTML = restaurants[currentKey].name
  place.appendChild(title)
  var timesList = document.createElement('UL')
  for (var j = 0; j < restaurants[currentKey].hours.weekday_text.length; j++) {
    var item = document.createElement('li')
    item.innerHTML = restaurants[currentKey].hours.weekday_text[j]
    timesList.append(item)
  }
  place.appendChild(timesList)
  display.appendChild(place)
}
})

var restaurants = {
    "Portillo's Hot Dogs": {
        "name": "Portillo's Hot Dogs",
        "hours": {
            "open_now": true,
            "periods": [
                {
                    "close": {
                        "day": 0,
                        "time": "2200"
                    },
                    "open": {
                        "day": 0,
                        "time": "1030"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "0000"
                    },
                    "open": {
                        "day": 1,
                        "time": "1030"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "0000"
                    },
                    "open": {
                        "day": 2,
                        "time": "1030"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "0000"
                    },
                    "open": {
                        "day": 3,
                        "time": "1030"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "0000"
                    },
                    "open": {
                        "day": 4,
                        "time": "1030"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "0000"
                    },
                    "open": {
                        "day": 5,
                        "time": "1030"
                    }
                },
                {
                    "close": {
                        "day": 0,
                        "time": "0000"
                    },
                    "open": {
                        "day": 6,
                        "time": "1030"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 10:30 AM – 12:00 AM",
                "Tuesday: 10:30 AM – 12:00 AM",
                "Wednesday: 10:30 AM – 12:00 AM",
                "Thursday: 10:30 AM – 12:00 AM",
                "Friday: 10:30 AM – 12:00 AM",
                "Saturday: 10:30 AM – 12:00 AM",
                "Sunday: 10:30 AM – 10:00 PM"
            ]
        },
        "address": "8390 La Palma Ave, Buena Park, CA 90620, USA",
        "phone": "(714) 220-6400",
        "coords": {
            "lat": 33.8463782,
            "lng": -117.9871491
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "photos": [
            {
                "height": 2658,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111041826300691548984/photos\">Eileen Tien</a>"
                ],
                "photo_reference": "CmRaAAAAdJiCHP-6Uv7I9rjDlWGnzl-79shY1_FDGkTsZ9L-__6qt2q1J50Xr6K-DmDhEhk1mBHa44ffvGJAybKY_gN8V6h6-_z5w6YNpV5KU8GcVxRGMMCQPQVFKKz7a47bzr1hEhCSuab8PnVkVW5yawz-DVNjGhRacYW6V2kCVheqRwisvlgDSzgNKQ",
                "width": 3544
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106902918906435841031/photos\">Vincent Minervini</a>"
                ],
                "photo_reference": "CmRaAAAA_jdFAyqfDX1x05qjMjFW1eWgcoIOkk1LVapyfSVvz93_zJ_uFVtnmPz1mdWs8FCGYzmbCb6HF9uChck8zfM8xI2XcDGntES3Kbmj2twoaLYMzsYYrZ2BcxQWLu93n4rHEhDAjwwgFhWODPaLfzDxg8-pGhQ11hvGE4LnG9g_jKNTc6tFnXWHEw",
                "width": 5312
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108301100983763148419/photos\">Darren Gaber</a>"
                ],
                "photo_reference": "CmRaAAAAVtkm3Dsz3fiYhBURsC15yJ94mWG2xGKoD7DBi2t7hKSOtzR_7VJgpuRYCStH4vsp5Ud06NuUBCCMxr9auGhs_AoUpvkX3Znz-fWlE1gk1-pTEjKricUcUyFPHzCKAgt8EhBiQYBRSkN_rBjZ_qwzscfJGhQfIKLA5XcyYacOC6WfFupoF8Lj1Q",
                "width": 5312
            },
            {
                "height": 5312,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108806414935649540369/photos\">Steve Wiideman</a>"
                ],
                "photo_reference": "CmRaAAAAiSDl1Y2Q05Ljt-XRRYVHbxLc1ayKRw0ipeD_XAV7A0p-yl2q6iXZCmVcz24rbxege4oxRHIt_vcLqvCMWH7q2MIcHLWbpXhvEFZKl494EiaUwnUi06BK7w1zWdsP81LrEhANFp84RUX1dKYZ75rNS5XEGhQLeecbMinG6VubyeBvTPQCnd9ASw",
                "width": 2988
            },
            {
                "height": 3006,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/102747879557730098009/photos\">Ernesto Gonzalez</a>"
                ],
                "photo_reference": "CmRaAAAA3MTTcWOIHtwHTJsu6tUbblfKTE_Rx1bFgGolAtv_w0aqnBcUrL3VmNEjghvVdOrE7TjNxi3-T8SGMyTzkgvx3w2TQdUCBQvSFjwIDxLhnF3A_f9xyaQNZf9Eifox_VifEhCoS8VJnCvvhSFDP0BcAenYGhS-9JPDJYyWyrqY8ukhqkjEf6hlwA",
                "width": 5344
            },
            {
                "height": 1836,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114625410771636418361/photos\">Jim Tucker</a>"
                ],
                "photo_reference": "CmRaAAAA_pFpLo8Vf7dSjLAZtviFUBdeT08HYYQ2MoDcbaoTUDhpDeSxLpZDaQldkqCHhAI2WM4lpWTgkK62LaeGb_o7gZeF4GogiRaLjcWDdoDYjvFevwS4opdbqiWQokucVDblEhAL_cJ8FOhGAjcmPph8G1vpGhSAW4Jhlh-C6c2LDY5IyVTcJaH-uw",
                "width": 3264
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/117271499374492542295/photos\">Erik Cox</a>"
                ],
                "photo_reference": "CmRaAAAAY5MMg9vlDnDkh87tMYyta4XVuZkWwdYEPs6RE6xJW6JGoFfEqErdWVTLVE8yLlhEwR-elthAWSnROYqYeAS9PyCr8Ha7OynBgHKXu3wiYmTBvkHCnmTeIRcioEzg1m9zEhDmeI_UMknvtMIlVrMnc2NvGhRq18ps6rpAreLz5i0c70XW4wGJxw",
                "width": 4032
            },
            {
                "height": 3000,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101183189993115226419/photos\">cmilton111</a>"
                ],
                "photo_reference": "CmRaAAAA_wtfCb1WsG7n4n55_SrZVwFPk6sINI5zJ5gKE5ydrIYy-TRzcS5ijkVPzaFfOYbp_Vd3ueojzye8YMBo5wXdImvtCOdcIH-ZF74KDrRJM-si_PijMjAHRgSec_jFik5UEhBIPRL8vDivzweHVaDUcIdVGhTR_psc-mGBxTq2c7tm84Q-kMVD8A",
                "width": 4000
            },
            {
                "height": 3096,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101079967254483676611/photos\">Michael Meitz</a>"
                ],
                "photo_reference": "CmRaAAAAGOZDB2tkqD7mzum1RQL2qsRv_LlwcOBuxsw4tJWOv-rlRKKSgYGmngHZKOvURhIL23J8axFHJq1YIBEdw3D66glK7gFD5hOnfQvDuXk5-LZZtzn9DXHUEY67SVUOLEEsEhCsy0PmQrcFDtw8BLK_kUuMGhThMUnzNCw6t0D7pl2eZZetPrN9IA",
                "width": 4128
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111852583291313602646/photos\">Joseph Gomez</a>"
                ],
                "photo_reference": "CmRaAAAA1MEclOdb9xRVUT-An1HsM0V5Co5ISz4J3AcT1nB6gKnf_8FOe0QEj481BaMMeB0GskvxsU2w8A5D-ZbsPYEuNaPPs0-oC096BGcIVOvsj_SWWX1FjolTYACkKsp948PKEhCrmzGGvDl3B2PcOEY8k9CMGhRUPPR9hhTG0jIPHnBTDKRs0wxeJQ",
                "width": 5312
            }
        ],
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "site": "http://www.portillos.com/",
        "place_id": "ChIJCWNdVNgr3YAR4pLlOt8CfEk"
    },
    "Kang Ho-Dong Baekjeong": {
        "name": "Kang Ho-Dong Baekjeong",
        "hours": {
            "open_now": true,
            "periods": [
                {
                    "close": {
                        "day": 1,
                        "time": "0200"
                    },
                    "open": {
                        "day": 0,
                        "time": "1130"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "0200"
                    },
                    "open": {
                        "day": 1,
                        "time": "1130"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "0200"
                    },
                    "open": {
                        "day": 2,
                        "time": "1130"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "0200"
                    },
                    "open": {
                        "day": 3,
                        "time": "1130"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "0200"
                    },
                    "open": {
                        "day": 4,
                        "time": "1130"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "0200"
                    },
                    "open": {
                        "day": 5,
                        "time": "1130"
                    }
                },
                {
                    "close": {
                        "day": 0,
                        "time": "0200"
                    },
                    "open": {
                        "day": 6,
                        "time": "1130"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 11:30 AM – 2:00 AM",
                "Tuesday: 11:30 AM – 2:00 AM",
                "Wednesday: 11:30 AM – 2:00 AM",
                "Thursday: 11:30 AM – 2:00 AM",
                "Friday: 11:30 AM – 2:00 AM",
                "Saturday: 11:30 AM – 2:00 AM",
                "Sunday: 11:30 AM – 2:00 AM"
            ]
        },
        "address": "3465 W 6th St, Los Angeles, CA 90020, USA",
        "phone": "(213) 384-9678",
        "coords": {
            "lat": 34.0637327,
            "lng": -118.2972823
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "photos": [
            {
                "height": 1153,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103770800223142180595/photos\">Richard L</a>"
                ],
                "photo_reference": "CmRaAAAA3caXSy33dqUqa-yInBWm9-GYrNfcBUa7WpgzDdSbWkzYAPWBldBgFjIizl3LWzY50jv3iQVfPvbwr4Ci0HMdGKIdN554gCvCWZ_My2cqvFLYEKTr3Eg2DrBc1ZpaXfjYEhDTYqhbbDKvfiehOZmF4317GhT_G-fp3fS75BgeIInWwlFsx1VR9Q",
                "width": 2048
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111589695721888238154/photos\">최정영</a>"
                ],
                "photo_reference": "CmRaAAAAvPx2aJb51ZNbDD8ns12oHrZoOairRc5idWfmRK_s3kLp9c-kx43vaGHlz3peEEmmlLCHVb2HA39zvCuiJKvPadMG0RMuktwtnPwxLCQ1svrnpLHCpRD1Ik_awTQn2TZAEhAIgZ07xm-B6Dw3V3kEh4frGhQDlr21AXbpXnk3HosQTIRF61h8sw",
                "width": 5312
            },
            {
                "height": 2944,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111041826300691548984/photos\">Eileen Tien</a>"
                ],
                "photo_reference": "CmRaAAAAiV969zSTXTHz-NTnyoi0Batp7XnUJpGcOhOysIIVNlO9agJGL6yr5K-Z-hgnL8FR8Pqv0DPMmxkM5EclhGSpRVUXZyX4WI67Q0Kr-TYY5Jbuvz_dq8LunURV3uLa0Az3EhCqVJx2caj4oMNR9NcCKA_8GhRkGwGs4-EOEDvFEuzpTCX3_Fwmfw",
                "width": 3926
            },
            {
                "height": 1562,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108850824828596402540/photos\">Victoriano Lopez</a>"
                ],
                "photo_reference": "CmRaAAAARl_c0M7PbF--3yZ4vUve7ooDfGqXlTWoCRAowSsyWe6hUucnz3I28NEJMioDFczZYBEbr2x-gcYCpviRBGfeqs6UVO6OZU7A8GjpYTfJXa6E0v6Iq6vkbIIpFAsyQ3g4EhBfAqA4SRCVSMhE98ueOGUqGhTRtWJ-OKMgrU1d_vuCAstRIkxJqg",
                "width": 3146
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116807793996990396457/photos\">Queenie Lu</a>"
                ],
                "photo_reference": "CmRaAAAAo9RXgShDCiwl8Faa5vv8ytcO1RuMjNidiq8hQA9DsxY1HanSjqe5fIGVxvoe7_fQCJdwPsQzypV1KlirFxWrZxZTDprOGDQSnP5Xv0X6vGOTCQc4c-3jRGz6ebvSuPP1EhB41MCFto7R3FJEimG-yyElGhRLIImTSLmUXD8WzUA1vbFnrNScJw",
                "width": 4032
            },
            {
                "height": 1080,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/112074654870959675879/photos\">林鴻儒</a>"
                ],
                "photo_reference": "CmRaAAAAEVjChjzoYzJEITXKsjxqFaNMCSwVg3J9MaDwRJRqCx8ddD_hHjRnOybcLr3PX30cxJNsZwzkl0SUQpWrIQBrEh_UV1lDLySHdnEqj3B7hW_V_iZbeX7VWdt6eJLoQ7eQEhDwhpsHhMZwm20DcYrDHcsBGhScdn2Y37lMLXSI8VWChuXplMO1rA",
                "width": 1920
            },
            {
                "height": 3036,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107345525537239890276/photos\">Stephen Kim</a>"
                ],
                "photo_reference": "CmRaAAAA79cE0kiZlb8q2NCh08BhLv4iD0qoA9MUBb_VJ1ZxAl0IU-dy1LJ3Mzq3wTt-thGZRssUrTGlGsIwtLiIV9Xi7Iv7NfyYDx1rtAE1EQPrAuu0q3xub5v8v-QtlwerCXCxEhAFUoDVhybymZXqIow89TspGhTxzLQu0zgjbOdZA93zNS4quBLDgQ",
                "width": 4048
            },
            {
                "height": 1080,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/112074654870959675879/photos\">林鴻儒</a>"
                ],
                "photo_reference": "CmRaAAAAv4mz_vUeterlL4qHcCqVV8i5LqEy6N0CopnNjdAhjxZNSyQQZZLjk5FX1yWdqdw2wthqeYbNvLR2SfpknmZ5QJU8Rfv6CbRN0kbY78Kbmv20NEcUl9o8pTmhuaclAVF1EhBv2FzddQFXh9fIcLhlXSlrGhT6AwD1dcYU4Vna-78zp_Lr0ZKghQ",
                "width": 1920
            },
            {
                "height": 3264,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111805560758043379130/photos\">calvin mok tuan min</a>"
                ],
                "photo_reference": "CmRaAAAAgIcfWHBlkZK9Xzg7hzNsJcqN4KNWYExtHWAWKOvztTDpMhGgxqJuCe60fGkoz2nhoCBAgmrBbHg4dWddna-N604X5v-8qwaLKg_tCbZY4hkWVgnunZaLuNMKnYAIdsagEhA2Lh1fgwoeOvNrqKmXsjPrGhTtUjATU8Rk60jGpAulpAW1AU_uJA",
                "width": 2448
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103538084282914271275/photos\">James Lindsey</a>"
                ],
                "photo_reference": "CmRaAAAAa1YVV2dqC8puOc9oi9rf-EVfuNIdn-0k1irFVMfUwlqFwR8GCnIwLkVo_rz5-ETOdLON_pSCbYRmGORO7BG_y8dcltasG1F9G0UmaWrFZR2qn3f9QGjK-1bGuxtLrlefEhAEh_MDB1MM69pYS6aOk5osGhTk2PTFschHOl-DAwe_udPtuCTRsw",
                "width": 5312
            }
        ],
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "site": "http://www.678us.com/",
        "place_id": "ChIJdVPAOX3HwoARBTPEsiVXppw"
    },
    "Pasta Sisters": {
        "name": "Pasta Sisters",
        "hours": {
            "open_now": false,
            "periods": [
                {
                    "close": {
                        "day": 1,
                        "time": "1930"
                    },
                    "open": {
                        "day": 1,
                        "time": "1130"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "1930"
                    },
                    "open": {
                        "day": 2,
                        "time": "1130"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "1930"
                    },
                    "open": {
                        "day": 3,
                        "time": "1130"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "1930"
                    },
                    "open": {
                        "day": 4,
                        "time": "1130"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "1930"
                    },
                    "open": {
                        "day": 5,
                        "time": "1130"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "1530"
                    },
                    "open": {
                        "day": 6,
                        "time": "1130"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 11:30 AM – 7:30 PM",
                "Tuesday: 11:30 AM – 7:30 PM",
                "Wednesday: 11:30 AM – 7:30 PM",
                "Thursday: 11:30 AM – 7:30 PM",
                "Friday: 11:30 AM – 7:30 PM",
                "Saturday: 11:30 AM – 3:30 PM",
                "Sunday: Closed"
            ]
        },
        "address": "3343 W Pico Blvd, Los Angeles, CA 90019, USA",
        "phone": "(323) 870-5271",
        "coords": {
            "lat": 34.047547,
            "lng": -118.317255
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "photos": [
            {
                "height": 398,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114451676038200929536/photos\">Pasta Sisters</a>"
                ],
                "photo_reference": "CmRaAAAA57xtQu8ch-cYfOycT5Pd4bw8vnuzYy1jHADsZ3QqpnSnuTUgF_ZXKKxUNHyo0HfbeBeivRB8sTvJ_uklqA0gv_veHgmgX3XMBLXeGQbWnO4mw4PkJ682U3hLwTR6G69EEhDNXBubLN6MMaIdrhv6LD3bGhTgS6DrCOzZRYFkTs_DZSFs4SU5ag",
                "width": 594
            },
            {
                "height": 640,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114451676038200929536/photos\">Pasta Sisters</a>"
                ],
                "photo_reference": "CmRaAAAAAR1npnEs8YCWrZZMuIkUqSCGIFQKAazhMpkR4eC6MBJnBO2yGqi8kb1WAVYKVM8xMtcQKyvSbb78-FkTG-kEgqO8zuaezxdFDKdZejecUFClhBThWbdDO47J9eVdG3h-EhB1lmXqeWi2gRcg4V9Nm8u5GhTsqnnG6UlJkJpKFHKAxWX9YqcRbA",
                "width": 640
            },
            {
                "height": 4048,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113044797729732094396/photos\">Jessica Gonzalez</a>"
                ],
                "photo_reference": "CmRaAAAA5DPmnZAbEJTlLLdS8EgsnP3XpEa6xC7ZI3ya7a6CfBQUlgDn1t_NHYsHJ9gwendqIHeJjLhUTeKWJ8jTXQamHuNAKjLwZFSJdsU7YaNVjM8Ow-McFeSG4I3MY_u1wwGtEhBhtclcjMTe5h44YUgGXnJ3GhQZMcUz_4Z-XRw-fOSvJycC3NcDAg",
                "width": 3036
            },
            {
                "height": 640,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114451676038200929536/photos\">Pasta Sisters</a>"
                ],
                "photo_reference": "CmRaAAAA6V3Tx4PB65kIpKVRGc8jSkUHPJ1BlroTZg8f7aXCE94PCm7ZHgRxjq8vg1s2JBKpj56ioKgH82FJ5KC9cEXp39CFi1uOrM6DJpfkIugl93zzMe5xAivJGCqq-LDq-T3_EhCyDcFNeuiBxw6T9sKxsqBfGhQQ_5P2QyeprZfMT-KrCvN85G-kvg",
                "width": 640
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/109637693792369364150/photos\">Tinna Huang</a>"
                ],
                "photo_reference": "CmRaAAAAuIG1QQaErdqjvWEPp-n3yja3EuZvHjwyaR0fPurlCAmAudf-67apdgs3-jsSQYLk-85LvSFotx-rezRxOgFvWCFK5U471m7c_idRe1N6uTjxuW8SXGGgFtQn1PAnAs3fEhCrl-1rfZgHj3Y21u9gxpLyGhTF8gGuTNsjfshDTkNLGM2x6kSW2g",
                "width": 3024
            },
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106987586928795953244/photos\">Alvin Chan</a>"
                ],
                "photo_reference": "CmRaAAAASiVsYEkfyHQb_w8RhKRnBOMDIA2LfxgnnAVLywYHUzwicFGo0d2-hZDg2Ado1DCiH8iqzplZ-SEJTiF9eml3GBj-adtUldQUseltc1K-h9tsjgsOPz0tNx2YA0WqIJyzEhD0u0SvzJr8Le0hU73Y6JVSGhRQx7P-70ycZdf_Ry7JwnGZ0BvbnA",
                "width": 3024
            },
            {
                "height": 640,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114451676038200929536/photos\">Pasta Sisters</a>"
                ],
                "photo_reference": "CmRaAAAAPVo4njqrpF5ooy9a4lYPAY1Q4XpVrE6k-woxmXifP6ny1ld8ZMZ9m2Ll7a7_JP_TADFeF07oBUwjtaQcLtppvKSYYqRqRWGk75h_W2k0Xswtu1JobNbFtBBlvHtXUDl7EhBdDjRf23XxWlVHWG_bREFLGhT9eCEuWdefzAuRl0N-irZpRNbQRw",
                "width": 640
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111102295140701794598/photos\">Warren Tjhia</a>"
                ],
                "photo_reference": "CmRaAAAAAleVghkWC06Le3LOf-7mwOUgctevJR-HTbVduWlmbKl-iSBndblVzdxW1AJHEk6-eZq6oa5c-KgJ_HyRq6bLqWRxSKUDkcE3E3uQzgArG9QsXeDHubWNDyfg4qrYeX5pEhDJNjBFiYP3096wQHetFIKeGhQ4RYlNoKi__lWK-DUzeKnbjTmndg",
                "width": 5312
            },
            {
                "height": 3036,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100664341647374197409/photos\">Victor Parra</a>"
                ],
                "photo_reference": "CmRaAAAAIeHSWU5L-EynPXkLQGfof1lL8Lm3czVQ6rpDS8-ySFQPxWzQUk0SQCImkNGjXGk96cdGaEnPSFysW8ILKgiCC_c7fz3B5d_8gHiHbk1AZk8uFqz1ET2jZxrYFVW9SL9cEhDau8jLG6VLPaaBTiFUGz3KGhRHcq04kMAhhAL_3C67QJ4AOUkVEw",
                "width": 4048
            },
            {
                "height": 4048,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104249231818243786362/photos\">Daniel Russell</a>"
                ],
                "photo_reference": "CmRaAAAASUO2nQgjFCDz8MUWZxH-R5wFzxGoFDesNZoYYvFVOVvLVb9u1tzjkQdvMauymEU87X4VMe5G-d-WHq25zxWg65GOkk8OSF5dUZfmCCy-InbnlL29vfMRm6oRKM5n4bZgEhBJqgBDMAy7TMh_uYSFjRkJGhQJzB0L6r6wCXQPFJIBHp4mW1Uzug",
                "width": 3036
            }
        ],
        "types": [
            "meal_takeaway",
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "site": "http://pastasisters.com/",
        "place_id": "ChIJm2xhhmG4woAR3vNYLM_QsCM"
    },
    "Honeymee Los Angeles": {
        "name": "Honeymee Los Angeles",
        "hours": {
            "open_now": true,
            "periods": [
                {
                    "close": {
                        "day": 1,
                        "time": "0000"
                    },
                    "open": {
                        "day": 0,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "0000"
                    },
                    "open": {
                        "day": 1,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "0000"
                    },
                    "open": {
                        "day": 2,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "0000"
                    },
                    "open": {
                        "day": 3,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "0000"
                    },
                    "open": {
                        "day": 4,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "0000"
                    },
                    "open": {
                        "day": 5,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 0,
                        "time": "0000"
                    },
                    "open": {
                        "day": 6,
                        "time": "1200"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 12:00 PM – 12:00 AM",
                "Tuesday: 12:00 PM – 12:00 AM",
                "Wednesday: 12:00 PM – 12:00 AM",
                "Thursday: 12:00 PM – 12:00 AM",
                "Friday: 12:00 PM – 12:00 AM",
                "Saturday: 12:00 PM – 12:00 AM",
                "Sunday: 12:00 PM – 12:00 AM"
            ]
        },
        "address": "3377 Wilshire Blvd Suite 116, Los Angeles, CA 90010, USA",
        "phone": "(213) 267-0020",
        "coords": {
            "lat": 34.0621489,
            "lng": -118.2975983
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
        "photos": [
            {
                "height": 500,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101537030438016613231/photos\">Honeymee Los Angeles</a>"
                ],
                "photo_reference": "CmRaAAAA8q3MOtYmlLoGtlG8AS-paf8_vsqDqWMDxR-vNmMovNNh2NOgrvsojeBQjV4BEisV99LfrL1uu-ToNaYRWvpV782KkaX0Q5lkmOryKHKmwDVfCtA9ZTjo9a2dX4LdxZKbEhCZHZCf3IUPSnBkQY5Yi6iyGhRRKo6IXuivyE6twGEtCfiJnmrI1g",
                "width": 750
            },
            {
                "height": 4160,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113655530087547894237/photos\">Tommy Zhou</a>"
                ],
                "photo_reference": "CmRaAAAAKDeqKGLIUIJX36ZfB9jUeMbX0KvB_41WtU4UjWG-p3f5F5chdGKtshgcaHRQreQ8gyO59wnqlHvMFGzZj1mOgHckjhfnn21vkMaujw1Nu4P7X6kz-ErKpgKaw4QUIB8ZEhC9Byyl8Xiqi3S6dnCK9_K0GhRPxedg3zRW1l5oXeiMaeZ-YKaGGA",
                "width": 3120
            },
            {
                "height": 1085,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101537030438016613231/photos\">Honeymee Los Angeles</a>"
                ],
                "photo_reference": "CmRaAAAAqaN0N7zBm6j7TcazamqKELC6Rl241PIkE2-bpvPxlsDYF9Q_2co0uxnGMHvZanP6CdqwDUtT8S73wtddg9gw4gB7D2-og_TRYveP1Ar2_PSUGZnYXMGIzqKfI3yIe_zUEhDlsXCN-pLScEVP4wcfgFhEGhQoun5-wIdr5X_vMrFoJ1KdNUFD8Q",
                "width": 1085
            },
            {
                "height": 4480,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101016266717837705675/photos\">J. Ejimofor</a>"
                ],
                "photo_reference": "CmRaAAAAxX4pW9A499CLsNtojiURDDyZ50InxlHuPML7JTP50hqo2d0yT4CEjZIK2aPIVXVPf41ORsrV3Q5ObPKtS_tMgZHeOcIaS9Golkpb_Z4vYzQv90FSknqEU91nJuCPBfaIEhDkCzUJJXIRqVT-H-u4drwUGhRnOtBoD1JOgVt4RZX6lYDvLAQ5_A",
                "width": 6720
            },
            {
                "height": 4480,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101016266717837705675/photos\">J. Ejimofor</a>"
                ],
                "photo_reference": "CmRaAAAAConA9GP0T-36EvwPVOyfvO2x-2QLMf5xYOKPkQbA9TlSjWACMn6ZjrLDZI9UoczkPidYddFw1c_4X5khbf2BufBYOOYqKKV_jKwJ5Xvh3OQ_rqQtl-w-wmYO-ka7MzneEhCDS4tUfxoB_voLaWm3_HOfGhSBfpVsl9PNSQtovyGwtXs-RVnnTw",
                "width": 6720
            },
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/110644802733363601464/photos\">Vanessa Arrojado</a>"
                ],
                "photo_reference": "CmRaAAAAjD-lakN5GbD7sH7YqnkLj0rt2SCvdyB-XwB2ex7seiMfWBSGuwJYFB2-VPWqhwVyuc79IlRPZo0x_NW3laNyd1ARf6oo2sXGTxV_f-OsPWgcXfYdmuDE3fI12RitlY9OEhBcGlAvII3O-vyR-l77AHuWGhR2-RNLi09IXUzv7d6vkRmo9qSPIg",
                "width": 3024
            },
            {
                "height": 540,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100188088167273189224/photos\">pureum kim</a>"
                ],
                "photo_reference": "CmRaAAAAiGSSY3rfHaVhV8G-OASprg3lA9wIr01LPLeKxE3iNJFliigw-8L2i29fhlDZ8_X2Lp7jKywv-juCAf83pAFkLbjMWPIs4DE5nRBcvEchFJi_2QKTHZK0vxQWrvrxt2DuEhD8NU5SX8XYkHcfz2sKrvvFGhTv0JI9IHvGfQNvJ5ieGBBC4KLIkA",
                "width": 960
            },
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/110331475602976691801/photos\">Ted Ngo</a>"
                ],
                "photo_reference": "CmRaAAAAoGSZVr32So-Q-oSrW-KYoJuu9ewC7mc5s7wZBBeTcy2WUPAcyV2f2q_dMdEdAqk2wgs2RVA67qlSzsWwhrRDma3FazIfsHNtnU8VKnSUuUe-Is2DNAVkjgjpPp3rmuGsEhCRbTTJOcw_thl7FrDpCnIIGhTSNXlLgcQwiE0oZk5iaKCQB9K9ng",
                "width": 3024
            },
            {
                "height": 1836,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100890089579568517214/photos\">247Eater</a>"
                ],
                "photo_reference": "CmRaAAAAzIbUfzd890JQlYAmrgntSt3T5iWKaK14ZhLko2JrtrSyoWQugbwVq84-jmGe4Kt-n7av_Q6bSZmvzJ_01J7PA8EfizjLoMng1z1hg1jBX84vylBvbTg1FEkgPNVO_zYEEhBFF0xq3hr7Wc9YajdDyLCPGhR2PjC4b4CXc5CCoS-4z6jNSwTDMg",
                "width": 3264
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114519646224337304311/photos\">Anthony Hoit</a>"
                ],
                "photo_reference": "CmRaAAAAFeadl4ldZOX4UojX-gTJFLdR5iA2aloebJLqCICOJBS-zWlcem_KLJuZFTYiCxT-TVtTTTZDiVnjtnQSw8gpmyupyWU56VgZR1DNZyVkV4Z8dJU1AB0LVdGB0Kmf8eciEhBLuA3VExcy48U_DOCkVUe-GhRuexubRrE7p3r_lHBqMDQpHk7ZhA",
                "width": 5312
            }
        ],
        "types": [
            "food",
            "store",
            "point_of_interest",
            "establishment"
        ],
        "site": "http://www.honeymee.com/",
        "place_id": "ChIJl_bLpn3HwoAR994afZvh5Co"
    },
    "Midori Matcha Cafe": {
        "name": "Midori Matcha Cafe",
        "hours": {
            "open_now": false,
            "periods": [
                {
                    "close": {
                        "day": 0,
                        "time": "2200"
                    },
                    "open": {
                        "day": 0,
                        "time": "1000"
                    }
                },
                {
                    "close": {
                        "day": 1,
                        "time": "2100"
                    },
                    "open": {
                        "day": 1,
                        "time": "1000"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "2100"
                    },
                    "open": {
                        "day": 2,
                        "time": "1000"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "2100"
                    },
                    "open": {
                        "day": 3,
                        "time": "1000"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "2100"
                    },
                    "open": {
                        "day": 4,
                        "time": "1000"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "2200"
                    },
                    "open": {
                        "day": 5,
                        "time": "1000"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "2300"
                    },
                    "open": {
                        "day": 6,
                        "time": "1000"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 10:00 AM – 9:00 PM",
                "Tuesday: 10:00 AM – 9:00 PM",
                "Wednesday: 10:00 AM – 9:00 PM",
                "Thursday: 10:00 AM – 9:00 PM",
                "Friday: 10:00 AM – 10:00 PM",
                "Saturday: 10:00 AM – 11:00 PM",
                "Sunday: 10:00 AM – 10:00 PM"
            ]
        },
        "address": "123 Astronaut E S Onizuka St #101-C, Los Angeles, CA 90012, USA",
        "coords": {
            "lat": 34.0499565,
            "lng": -118.2420697
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
        "photos": [
            {
                "height": 649,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/109803851192644925009/photos\">Midori Matcha Cafe</a>"
                ],
                "photo_reference": "CmRaAAAAGv5Zoduk-MjU6GZRUY-f0w7x_oYjlX4zzseFCx1dqAVPL6DcU7l3T3gtfDMhCudcfPNlm4wN5ipgmRnBFn6p492wMmoNkSIgdiF9c3JpOuEf7xeE3W4l7Q_JOtjD0BSqEhAO0snmfX1f1ReI8m-5dilxGhRx4BxHYibsKRD4NgE_x5ptgzRPOg",
                "width": 922
            },
            {
                "height": 2952,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108750117849687752384/photos\">Sharlyn Willkom</a>"
                ],
                "photo_reference": "CmRaAAAASmlMT5lbdMBwdtWX-KcOqYi85PqT7pdNOMdJXawArqqx0g9ZrkYNMlXGgahPxozpf4Aef3F-wf9hvqnNxV7XMzRCj50Kal7KYjJcP8LOixE4MJxqPoUyLpIK634IQPOmEhCBVjOUzuc8KoOiPeoLCJZXGhSs5QBXJARDo6PCuYRVTEFNLpskCA",
                "width": 3942
            },
            {
                "height": 2048,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114595125503780367072/photos\">Glenn A</a>"
                ],
                "photo_reference": "CmRaAAAAo7wM4-FzU0BRUxkWLa-T2Ty_0HbORAHvNTXhfur0RYAE5J_X6IWw3H8yGbKtQGoYREHF_JiGx1PWzGD4QcuyxX7QFIUKGVc5vJ28N0rTfmjdlH3C3IC6VzUprwuPG-LJEhDBOlkGJnvlt3A0eogM9AtfGhQ4K68OcfTvnRZ8eBLqxc9JJBl03g",
                "width": 1536
            },
            {
                "height": 1536,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114595125503780367072/photos\">Glenn A</a>"
                ],
                "photo_reference": "CmRaAAAAcGPNMCmXtNbVNCe-EVko2-MfPgjUildukSIJDY15cK7VQfDJfXT8HH-SHKYGqmaAaghVCAN-bVV6UG-D_c6k-ZAjnFnrXknbM0kxTrXelsAeYABrblbY-NhdsUO8mIN8EhBWUfrnnQT2JAzq2g-CudowGhRz5XwVpJ7pU7ak14PSkJP6bdsSMQ",
                "width": 2048
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113661765488771786715/photos\">Gwen Sanchez</a>"
                ],
                "photo_reference": "CmRaAAAAz69_EuZ-D0Wq5H8vhkKQkud7fPBuSCdB3zvckiYGAd34uHeoFLZvuJ5Q77Gx9LuzI6NYRlmERPLk8GERZJfA068xVSAp2nV1HHi2JYcsfQzkzohv2EBgacLcpeMdTSvpEhALWMgyGiH035uy4GoETsfrGhRgumj-1gNuxis-cVCjLEMySdjsng",
                "width": 2988
            },
            {
                "height": 1280,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/102096502204131321227/photos\">John Park</a>"
                ],
                "photo_reference": "CmRaAAAAhJxYqoY3EhpY-ZONYZ4unZ0BJS2K6ZWqjCIrL4Yb5ZewZ2e8b3V2wmU9w8HU_0EAKQe9AjdnW1nUki_wRrjcnB8Sjwfc3fsZvi2Rh-onN3ftgs6W1hBghmz5t2rzUtllEhBBjuxpkdgw-YUpymAItEc-GhRrG-6axi9_gFly6YRqh6DKQC2FpQ",
                "width": 720
            },
            {
                "height": 3264,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100873348276707347625/photos\">Cathleen Luu</a>"
                ],
                "photo_reference": "CmRaAAAAvsC7jiM6a-uPCHBWWIv-YXjYtwvR3Kj8LBSmVOTGWtdQHdjvsBUrMBqg3oMoANsiHJ0xx6kmyDUy2Mvg4EoDpa8LkdlUeR60LT_TAzFZufeA-76CSaHE-GRTWFnreMOmEhAxWcAimZeW8-xGqY4kY3_uGhTcrcSF-RZ0zYlBoi8GQms5Ag5kUA",
                "width": 1836
            },
            {
                "height": 3818,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108750117849687752384/photos\">Sharlyn Willkom</a>"
                ],
                "photo_reference": "CmRaAAAAnDVVHyas3h9nvJgazbqFMe-6pj4MhLLyUCXPgJZN3NSBGkXLK-rOG0nWzrFUbQ1qWZzvO6xn5GAjbqtBJG-l52_VTLELQNA6Q2GKWW_6FgjivnvOpXRH9R4_w0eH_VihEhD14Y7oxyAchjcJyjxqbIw6GhTAEaHni8Q_q1IBRjoHIU83k5dT_w",
                "width": 2668
            },
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105398615996784762542/photos\">董容伊</a>"
                ],
                "photo_reference": "CmRaAAAAeptu3sx47ihxrkwu1ONrO1qV9-bLk84T2xkt-iZbMjPjKOfFkxKwN0EWFG_icxqXK947BhTlN8tQaE276lv-0O2_mcpOGEw9Ip9DYjeZ_vvmmFS6xs21RuWHR_77K3BUEhAbZvICnINDtPvqe0YtwoPsGhQBysGUwMALrX5okTxFL8MU-8BDag",
                "width": 3024
            },
            {
                "height": 3724,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107441129845592448581/photos\">Corina Dow</a>"
                ],
                "photo_reference": "CmRaAAAAeEJpIbx4O33WANShVaLOufbqQQCb-7KuBDMdAivuCQZnQLHzoNru889AD90A4inczfXg3OvRooPOGxgmK4oGaesGgjr8qDf5HFBLlrQ2QDnu-7j_vd1xSzUWRnfR6wTMEhBNT2r_SXCL64AIjoRy6jASGhRo5XevDjpzOnXn5vPGPyn7kaEe-w",
                "width": 2096
            }
        ],
        "types": [
            "cafe",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "site": "http://midorimatchatea.com/",
        "place_id": "ChIJ-V9i9UjGwoARglbbGlqYwUc"
    },
    "Yuko Kitchen": {
        "name": "Yuko Kitchen",
        "hours": {
            "open_now": false,
            "periods": [
                {
                    "close": {
                        "day": 1,
                        "time": "2130"
                    },
                    "open": {
                        "day": 1,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "2130"
                    },
                    "open": {
                        "day": 2,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "2130"
                    },
                    "open": {
                        "day": 3,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "2130"
                    },
                    "open": {
                        "day": 4,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "2130"
                    },
                    "open": {
                        "day": 5,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "2130"
                    },
                    "open": {
                        "day": 6,
                        "time": "1100"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 11:00 AM – 9:30 PM",
                "Tuesday: 11:00 AM – 9:30 PM",
                "Wednesday: 11:00 AM – 9:30 PM",
                "Thursday: 11:00 AM – 9:30 PM",
                "Friday: 11:00 AM – 9:30 PM",
                "Saturday: 11:00 AM – 9:30 PM",
                "Sunday: Closed"
            ]
        },
        "address": "5484 Wilshire Blvd, Los Angeles, CA 90036, USA",
        "phone": "(323) 933-4020",
        "coords": {
            "lat": 34.0621327,
            "lng": -118.3482179
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "photos": [
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111021686130490741335/photos\">William Curtis</a>"
                ],
                "photo_reference": "CmRaAAAAYrHEM0vCfJqoybHEOZx_Qno4D_M3nAYRAWQx5GEDmoyyGrnAU6GCI7GetoV0CXLATpWQT0oXJA4TNRstc8ER5_oN39xiaG_I7yK-sDkixCW0hHVKrtUe0AmxvTymEzDgEhBDPpuw8MyPvN-xRUPiO2AqGhR7qQQVBiMZ_DMkqZYvaUrAlH4ATQ",
                "width": 5312
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106885632888153598408/photos\">Monica Cappiello</a>"
                ],
                "photo_reference": "CmRaAAAAwNz36dEgfW3QCdc6aYKOBZUUla7oaomUcDTvVWnoWjUlikA8Xwe-2JSU6ri72frBv22AWm6lajGmovyhhjpFLIN1FrxHweoUKReYt25OrAXK-JreA-1cjBfzxBQi0O6xEhCBTgZ__jZcHlXDWpRrW9_CGhSgi5iSpIxiRbCtEy029RzvXXOIow",
                "width": 5312
            },
            {
                "height": 1836,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/117973722476230172848/photos\">Far S.</a>"
                ],
                "photo_reference": "CmRaAAAAewvZUGzrANz6WJ0_jxRY1Y4JWUP9C7mie8UoSQ5i58bRvNt_O5US9nsZuKjk8hkdhdFDXPLFkZrJhiUzM67YgTdkGlPf6sZt89qcZ45HBPfEMXE1iSZKqWPW3Zr66fKkEhC_g1A-Bh-3B6wZhAf2Ao_uGhSf1Dl9BBQmNio7w1YT2s0rxot2kg",
                "width": 3264
            },
            {
                "height": 2048,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101753994635263704629/photos\">Soo Ahn</a>"
                ],
                "photo_reference": "CmRaAAAAd_tQlsCLjZJu6O260M-0e4AG64S-hry2dxt6kjSyaurMQKmWnPnKgzji0cKBw6PfCp6B9gzHArk-O52L0EC6Xn0Q56-UkYcHC3tCLjIx86vh7IutMlOv6i8D6khQpIlvEhALo36xfWiZF14HDPM5SC7aGhS89XE04MvQzlzS98TqAQy97LlCuQ",
                "width": 1536
            },
            {
                "height": 2268,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/110779630028591246487/photos\">Margie Valdez</a>"
                ],
                "photo_reference": "CmRaAAAARa0QuPj_KtYZlLxuwPtw9jFvNfw2p3jcgGMq6XnWnEVw-TFF8ZPneM5pIobCZjGs-SbqEuXdOobsuZL3qNTxImiEM6urh6O8g5tHuFZJ7bq0yCA5Vp5RpQ4npEMoRFlkEhB37eL7h5cmiyLN8kfERJySGhT-Vle_UMvOVRb31jPMvkSXjHaW9g",
                "width": 4032
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106885632888153598408/photos\">Monica Cappiello</a>"
                ],
                "photo_reference": "CmRaAAAAMgX4eye01G51X9B8wfETJps7Z0uzqVjLkQzqodLy4YKQT9dCmw1qaCMaQYX5_WhF6qniHmVsBWx_FcEMgCUfkjb6WmPRpQQ1YHO36Vl1Tht4dA68YQUHjyVdbtmreOu7EhC5aDQt1YIOdtSBbAeXYJ7eGhQCCD1asFqbcIbmEKsbw3hTSMT4aw",
                "width": 5312
            },
            {
                "height": 3264,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107318402843370675415/photos\">Ivan Z.</a>"
                ],
                "photo_reference": "CmRaAAAAxfvESO703JKHKGEnup8N7MFFf80zjU5zcRTA0q8Gz_dPSH0bUmYvBFK1D_de61ZlyfpaeA_Jv-fYDhLOy_vPMPW5CiUq3PXuE_joHeAO3PDu0R3zJdPfNG5ym4E317ggEhAInX27oEW7DfH5_9QnpEuGGhQerEuTBqM4RmNn2tzTt9GPbw9aXg",
                "width": 2448
            },
            {
                "height": 1280,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104083614640497189033/photos\">Marily Mitropoulou</a>"
                ],
                "photo_reference": "CmRaAAAAeCBEorKU9rhYTg-h-mED-xB1dTVxNbydugYJKOE9DwnFIXZNq9zY-xcwn39f359zJJcGJYQx8fG7tJMJO5AS1n7MWV9eZIBpc2knL2NLP6NIettDCC6F2KZv7zXD-P6_EhAaXUOkF-4etlN7U8QumZFVGhQfO4z2WdRRktfnwMBxszRGUF3yXQ",
                "width": 960
            },
            {
                "height": 3366,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106816414604236992707/photos\">Takashi</a>"
                ],
                "photo_reference": "CmRaAAAAILidue2pbxLMluiuIvwVEOYEAG689hrxcNqgfYFmDUVS0M25dv4FxyfzowZHAC8xbqqaAXiqyv7pyZO8Z4hqo1TRyaXZb7XBkOzfCqLy6_1Kq_COsYaWJtuirYh07HH3EhAfdq_jEkAmUvV6KwhrVbIyGhQOaUtVHniDfvAHMpGxU9p8cpAzQQ",
                "width": 5984
            },
            {
                "height": 2992,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100982166196917972934/photos\">Jorje Castillo</a>"
                ],
                "photo_reference": "CmRaAAAAhvluTO1eu92FF_TmmreQFWEjn-sTZ_e6k83VOsTQ9WA-BPb-NPWgOclHBGqH7Th-2zLfr1BcJfC1s0k1c4YAh7wNqSy-QU0e6RLdgG4ZhHlSSJmrrqoPzZx2qdP7L4bMEhD6fJLeaMH2ZNbOVgbjpezKGhTZnkkGVMtEPjuw2QkFl2MXGR5U7Q",
                "width": 4000
            }
        ],
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "site": "http://yukokitchen.com/",
        "place_id": "ChIJDd6ViR-5woAR3GM-wHwBmu4"
    },
    "Sushi4u": {
        "name": "Sushi4u",
        "hours": {
            "open_now": false,
            "periods": [
                {
                    "close": {
                        "day": 0,
                        "time": "2200"
                    },
                    "open": {
                        "day": 0,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 1,
                        "time": "2200"
                    },
                    "open": {
                        "day": 1,
                        "time": "1130"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "2200"
                    },
                    "open": {
                        "day": 2,
                        "time": "1130"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "2200"
                    },
                    "open": {
                        "day": 3,
                        "time": "1130"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "2200"
                    },
                    "open": {
                        "day": 4,
                        "time": "1130"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "2300"
                    },
                    "open": {
                        "day": 5,
                        "time": "1130"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "2300"
                    },
                    "open": {
                        "day": 6,
                        "time": "1200"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 11:30 AM – 10:00 PM",
                "Tuesday: 11:30 AM – 10:00 PM",
                "Wednesday: 11:30 AM – 10:00 PM",
                "Thursday: 11:30 AM – 10:00 PM",
                "Friday: 11:30 AM – 11:00 PM",
                "Saturday: 12:00 – 11:00 PM",
                "Sunday: 12:00 – 10:00 PM"
            ]
        },
        "address": "4090 N Harbor Blvd, Fullerton, CA 92835, USA",
        "phone": "(714) 449-1950",
        "coords": {
            "lat": 33.91852830000001,
            "lng": -117.9316771
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "photos": [
            {
                "height": 1836,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114689807278334913617/photos\">Andrew Fok</a>"
                ],
                "photo_reference": "CmRaAAAA679diHJj8NZ7EMevpOLT8v1oqNzJbMAQw6hZ0wLpF0j08lYnzGjEqyMvLmaeygtxb-0qhVuV8E41Oq9TMVATdPH3KRvoebrvqZfTg-DqSWqKjXQVLQtZZMn4zybZebxmEhBscTR56BjDENyVoW_FR_9kGhQh-XNSyzT00wX4hzFGvVnZO5jzQQ",
                "width": 3264
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101131884076151246626/photos\">Mike Blackwell</a>"
                ],
                "photo_reference": "CmRaAAAAuGQJlkMQg7-6JlAec4MK_tnIEM96nhy5P1RNPol4H5AfLFTGKjaxyONoNw_ARJw80iBlPCF-A9Cc3LLJ4cj0IAUEqEyPsx2ljxv3oRRlKUmhBtHXjZ-H7Xds6ct-TF2cEhCE_r4svucTnVVEDjhCnFc0GhQIASzTfhwyDpK1lbYlA4TfAFO3-w",
                "width": 4032
            },
            {
                "height": 2160,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104085153011227119815/photos\">Alex An</a>"
                ],
                "photo_reference": "CmRaAAAAIpwWI48Ijw6vP0XHDoyYB9JFsMOcVPnj4CxTpZrR7j-l6hbEneyIZMKZzxpJOdMFFxxiDyyaGK60VP_o9qv-ybG0p6GcuJQswuwa8QRlK0gnwkuCtu0fsliWJ06PWeXyEhD3GpmkyjWI2Ha8-4aJ54v6GhSj41bIzUy_zw_OGEohwXvDg5pVzA",
                "width": 2880
            },
            {
                "height": 1136,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103496955164507610292/photos\">Chris Hyun</a>"
                ],
                "photo_reference": "CmRaAAAA7S1mEhjCT85YAsHt84M3ddoRql1qvJAMmQzvRqvJ1xJNzvw90o9CNEnje_xaazarKHMeyq0-3-czNIPhG1VFxJAkk0iGheGt4aI_9g5WboymCEfI8unbbvUCqg2QgzPzEhAJ44qY7olguY0Lj1CPOQ68GhQoDgePszOebNHqTT_ZAHiFoahm-Q",
                "width": 1362
            },
            {
                "height": 1492,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103496955164507610292/photos\">Chris Hyun</a>"
                ],
                "photo_reference": "CmRaAAAAMyoUWOKFZeSYwABArSGyYrjUCRzh6lhJ_rPvykBh71p-lRwwuHkY-f2Unx5lIru442cZzH7V9EkC6E-jdvKwDPrOS5ILaOwFN3_72fVRxsLw_H1w2_WmaPvucR1Dg3I5EhBr0DmCwSf-2d6n7QJ_2IqBGhTPCzXf7qjOPu2d93UnJcKke4cVCQ",
                "width": 2277
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104014941339559320105/photos\">hey360 thornburg</a>"
                ],
                "photo_reference": "CmRaAAAA9M4cPXauP9NIfM1bR1Q20r-uVXBZL52u3DGVSsdQFnxUDwCcupc5dJfAgORb3FQ2DyanTADjBvimVePaYEjTa3zus5b2_Yua-tebG2DTt8QTEZCsS1ueIbPTAh8NCwUDEhB6AfCwZo3MohJLtWV2HYYkGhQDrrym5LlnbNK5Fv1yTidaRWZWcg",
                "width": 4032
            },
            {
                "height": 1336,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103496955164507610292/photos\">Chris Hyun</a>"
                ],
                "photo_reference": "CmRaAAAAGvOF48iF4IXGMue3gFRnfXxY1InQZb2R_8MS7Xulp4FdGk5PCkTcjTgVKFLl7dW2wvlAvjF01yBe5nTfhbYouQH0Ctw-BZPz_gOxN1_1_P84k6hP7hicNgK3MFYZwy68EhC92y2RhKH1FzG3H3fDraNdGhTWelP57f7Aeh0o9_UjXLzgcHlzYw",
                "width": 3019
            },
            {
                "height": 2560,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116084052656014008072/photos\">Jocelyn Perez</a>"
                ],
                "photo_reference": "CmRaAAAAIQNymjBueqFy9rPznS1uP3w0fhYRL0ULRNZZ4A_ktPDNxo17M8Qxc0m0S3HjKbRXPrFqgAQXr6QVsI1g0uVH5oGsVjYSG2u1C5cx6eHhK7opxh_7nKo36dKNeYhdt6qOEhCb8g7UrGuVsyBOMbet_eUTGhRtB2EfFAzNQzsDEnhaHU7Al36ufw",
                "width": 1920
            },
            {
                "height": 5312,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/110172100312591692883/photos\">Skyhigh Steve</a>"
                ],
                "photo_reference": "CmRaAAAA_EF6jLCehJL3b1lpKNhR2_Bj-0kKZt3bUGjbyOnRxX6EFVpwYo-_fOSULfQ2FY3hEGnx8w_4PgQhzp-Cw3lg_smyWM9EUBYVR_PVvU6cHuyoLIs6XPPIc6UW7MkXGWrpEhBNYteeElyCkl5PIXqVqZZ0GhQT4rOQoBesQvf35RapExk1UFrxdw",
                "width": 2988
            },
            {
                "height": 3264,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114689807278334913617/photos\">Andrew Fok</a>"
                ],
                "photo_reference": "CmRaAAAAyTL8N6NYCCfB8PtEOb9Lj6KvR78m_CY85Nq7JcihsNtQXZeCYmBqWZhD7iQUMt127TxYCh05nd-r3LZUUgQcpWpMPmG8Ejs8qX7xVJS571mZtjgURk1lNdejFEFw4vE3EhA65Ztk-6C-M7Cftdpb1soCGhTiv3xy5tZWPwFZ7A2TQs6uHo_qEQ",
                "width": 1836
            }
        ],
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "place_id": "ChIJqZalpJgq3YARwC_ghsywtZU"
    },
    "Wi Spa": {
        "name": "Wi Spa",
        "hours": {
            "open_now": true,
            "periods": [
                {
                    "open": {
                        "day": 0,
                        "time": "0000"
                    }
                }
            ],
            "weekday_text": [
                "Monday: Open 24 hours",
                "Tuesday: Open 24 hours",
                "Wednesday: Open 24 hours",
                "Thursday: Open 24 hours",
                "Friday: Open 24 hours",
                "Saturday: Open 24 hours",
                "Sunday: Open 24 hours"
            ]
        },
        "address": "2700 Wilshire Blvd, Los Angeles, CA 90057, USA",
        "phone": "(213) 487-2700",
        "coords": {
            "lat": 34.060692,
            "lng": -118.282764
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
        "photos": [
            {
                "height": 1365,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104908431756212890221/photos\">Jay E. Jenkins</a>"
                ],
                "photo_reference": "CmRaAAAAr4FYnuvWCJIZWJygREoTotefR56K84Xd5dN_q-R1jzVacdbttimT2K7o9o6b0mYw27krJtXvRyQEJM8uK-sDNqbdOvSi4_Sa9Uq27seuKHbBpe7h40yRik_qf-VP6ST8EhB4crWrwH05wuD6ccvH-I_CGhSj1IDCDGckWNOjsHxIjYusXyOi7A",
                "width": 2048
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105495391643309161167/photos\">David Lim</a>"
                ],
                "photo_reference": "CmRaAAAA1X0rnsXf2Wzzp6YIkUD9djIaAUYf62WgflrG2x8ytaOfZzTv5qkuHOb-qerwPhoEnkt9krljc7_LS4QTSGqWxDmIUgiaVvH1uTeF2VHWTL1q3-r_kArInB02tqBDOkLiEhD9CYtauAt1CE3k9KS9tN2HGhTq77a1tPBBrgsDtk2H9AloTaJFWw",
                "width": 3984
            },
            {
                "height": 1836,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113729120537983670015/photos\">Warren Chin</a>"
                ],
                "photo_reference": "CmRaAAAAl5L5PyTq_mzNE5PvpOI-3E6lCRPm4-_oPykIAXxRnxQEa-CfxPr3Oim_ARZ_j09ANH0Wiuz0Ra4GvWuyXBO-s-Xdh97yJwfa5-DPMbuqg8drPBi3TBlMug-7QIuvfu76EhCNqi7gXPcYyREKSr_KiJ0pGhTJ6hhy9PgF7twtYkBOQzGulGK3eg",
                "width": 3264
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107555442574382895033/photos\">Kinji linwood</a>"
                ],
                "photo_reference": "CmRaAAAAlaglgJaVxBaL-cQA3fE-61rA1ymGdL43zADLW_ji8o9s9Mq4H-y_rQYBEDm7uxAweEfqSyAXCmXZzyRMP_XpKRynFtSzEOFfdjjVTeOWwEcQTnzsk_vNU_9Hio66KKFBEhAzpM85Q3mDqfnvS1E8GqrdGhTb-kP1Vf-064vO8WHXTX90VfarNQ",
                "width": 4032
            },
            {
                "height": 1836,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/110676491919279546798/photos\">강주희</a>"
                ],
                "photo_reference": "CmRaAAAAvRoFh8HffbYuAJquH7aVIc1ywJQNN-1-PHyDyyS5T_YZZ9AgN6uv0AUJO7_fnMna9KZufvK-mfyjqV2cxdDKAnPPZOuCM739uH_xnrxt8oQDglS9sqKo11BiHLQGALVDEhApebNo4l6ztaudJgWZXsHcGhS_dj5S3G1enKlML61f7TjrzutK7w",
                "width": 3264
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104039275568198294042/photos\">Peter Chang</a>"
                ],
                "photo_reference": "CmRaAAAA0FRevSLqtX6a4R1o6JmCfqVfUBSpTBwrmOT8Bg2OIcfnK9lxjHQdL_4FGH3bBrjdmm6lsDZsDHJG_bOMpj1maA069NwVZJI_2W-HKZx6obx_mJcWmN4IpxQCgBzWPwdaEhDj4RV43I8pXqoyKfDxcVjJGhSBRsUjOq9LS_c07vBKYxZo93oceQ",
                "width": 5312
            },
            {
                "height": 1836,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113729120537983670015/photos\">Warren Chin</a>"
                ],
                "photo_reference": "CmRaAAAA1cvlAyrbOY6-KIJxKryGaKQYqhv7nJpQciegWa03SVBaUJAuSBI3VT1lK9g-xRzrA8Ir7SkMLD1J_b7q-zNg08z6L36Io5SEzmZNxV5qYQxqbjiULDijcVfSwAj0YHSrEhD0cd-etaTs5LjcmJpckianGhTy8GF36IzJfD-fiMYGfOn-1pvd_Q",
                "width": 3264
            },
            {
                "height": 2448,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116881546991254373432/photos\">Victor Mora</a>"
                ],
                "photo_reference": "CmRaAAAAA-FdLhSoTP61whwgkfoAsgssKL42RMoMcJOa9095i3wXf-vQEo10NOHqLvrO2JPUX8B9r_S95y1PG8L6XLsJwxNyhVLUCKXzcxogTqSL6YJzP1P5gi9LVyjyk0yiTkdbEhCAzuPnOVzAivqRI84sCUy9GhSHrrSYWSbpSdSIIMW7FGW1y8ajZg",
                "width": 3264
            },
            {
                "height": 3120,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108696523051586281623/photos\">JARRY ZHANG</a>"
                ],
                "photo_reference": "CmRaAAAAQr4pbT9FaB2mYaRXOgKQD_lBSreV5ytkk6v-pkiHMm3m65Il6iCYwI41iXAqD2Yzm8Kdhns6p9PVQvCui1kJ6FslLrjo3Tw5xM3pubZX7irxJpApAPAlQTj1h6NPbPQUEhCppef_QYZYbrDE9GnVxX78GhQk1w1csQQn2FZEfrJsfpRSe7RM2Q",
                "width": 4160
            },
            {
                "height": 1836,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113729120537983670015/photos\">Warren Chin</a>"
                ],
                "photo_reference": "CmRaAAAAlpq-yaNEL36JdszL22ZoM0YZfsIEKW0DkReZorrcaLaJ5sE8iJM_Wc2xbMG51alAvkfrNVn-sGhAt_Sz21EzAJm-AIOaZAWIh4u2zgqTj0d8ml7hK_myo7vKaMkUMk-IEhCagJL8zotCcN4OhLlFVAbXGhSEbUqX9n3_MReokwpbHpcJa68ENg",
                "width": 3264
            }
        ],
        "types": [
            "spa",
            "health",
            "point_of_interest",
            "establishment"
        ],
        "site": "http://www.wispausa.com/",
        "place_id": "ChIJ33ySYnbHwoARD9qfzHI_DzQ"
    },
    "Mister Bossam": {
        "name": "Mister Bossam",
        "hours": {
            "open_now": false,
            "periods": [
                {
                    "close": {
                        "day": 0,
                        "time": "2300"
                    },
                    "open": {
                        "day": 0,
                        "time": "1130"
                    }
                },
                {
                    "close": {
                        "day": 1,
                        "time": "2300"
                    },
                    "open": {
                        "day": 1,
                        "time": "1130"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "2300"
                    },
                    "open": {
                        "day": 2,
                        "time": "1130"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "2300"
                    },
                    "open": {
                        "day": 3,
                        "time": "1130"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "2300"
                    },
                    "open": {
                        "day": 4,
                        "time": "1130"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "2300"
                    },
                    "open": {
                        "day": 5,
                        "time": "1130"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "2300"
                    },
                    "open": {
                        "day": 6,
                        "time": "1130"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 11:30 AM – 11:00 PM",
                "Tuesday: 11:30 AM – 11:00 PM",
                "Wednesday: 11:30 AM – 11:00 PM",
                "Thursday: 11:30 AM – 11:00 PM",
                "Friday: 11:30 AM – 11:00 PM",
                "Saturday: 11:30 AM – 11:00 PM",
                "Sunday: 11:30 AM – 11:00 PM"
            ]
        },
        "address": "338 S Western Ave, Los Angeles, CA 90020, USA",
        "phone": "(213) 388-5379",
        "coords": {
            "lat": 34.0678224,
            "lng": -118.3089464
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "photos": [
            {
                "height": 1440,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/117110207853292629429/photos\">Jenny Koh-Lin</a>"
                ],
                "photo_reference": "CmRaAAAAyzl2UfsY_kab5yiX_oJOCvOAT4QdAM1lOzyoM4iGvHL1_S0HcWoeQ71zwXjYX6mSLVnXFIdMeTi7Z-4XpV2yAFtvy1PP9pg55zBvjNbIlKmlUzbtTh3AVxja1rYDxBxhEhAk4v_kb5rK7ZQyHpOXUapKGhQG8LdeHMTFfvr2OiAgurHmCw0EkQ",
                "width": 2560
            },
            {
                "height": 2997,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108282258411190556424/photos\">Jason Theophilus</a>"
                ],
                "photo_reference": "CmRaAAAAVDuI-Ka4UANjqqj3G3L8vVKk4Z8u9DZm6wutqLrMsAALqDmEFZYJht6uaObWDNv27g8VoAsVWQad0bftJsLojXD-mzZuTfgAY71RkHxTfrPlm9XVsP1_Af4ocxIAyCKyEhCGJZG06HCPhxlHRaVyd304GhROT2izaTNCmw68Xg46wRxttOIgzg",
                "width": 5337
            },
            {
                "height": 3001,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105645555299735468424/photos\">Huy Nguyen</a>"
                ],
                "photo_reference": "CmRaAAAAe8TDRCkUIdsgOpVmxw3NLvLj1RstW7kGzSoOcbfJivMpKm7uFNFUi4wS1Kkps8sXd6tW0C5v7IHgUHGoV99fX9QeQNu5zeHRNHkMW_wqgTgsvER4RkOdRSxo6XHx0b8LEhCL0gbn2GLYU5WBvNI06l5gGhQGUxOD1SjpwXHFfylDjFUyAAk2cQ",
                "width": 5331
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/118334556767804726750/photos\">Patryk Gl.</a>"
                ],
                "photo_reference": "CmRaAAAAIzxgC612Y_pwhMfM--S7rRnCC9cCQY4AGiuLVKbxHINj7CUoelaI3y52zx_rx5-3IskrYih5yPBrVWv6JKg0-tbTD4Fn5UyUEwj03b_RrAiAgnwf1iXjAg2CUNO12lgyEhC9mGGLNtitmlC_Nhcmae4oGhQmWK0DPEl0Umkz9zKd0BuDScrHLQ",
                "width": 5312
            },
            {
                "height": 3036,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104964580547176362631/photos\">Kelly Liu</a>"
                ],
                "photo_reference": "CmRaAAAAbrtNvf7NQ_8FbrOFh6eHmMsFuFqNjxME4WR2VN4RQjrkjrMHwjI7v9BHi05PnX7lnJRSsBxz2gXgtGJKAgL8G6HNUho0V9YBRqmBT-wZWjMgSp7cPIfx3wD0krqk41lXEhDmFBlD6QhLAHU8aTQ2XNGNGhQa5SbIRSp_a6bgkc3wwl5Kq2Kq6A",
                "width": 4048
            },
            {
                "height": 2976,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100688966090679539157/photos\">Kang Janee</a>"
                ],
                "photo_reference": "CmRaAAAAlj5nNCO4niEaYelikEanlvTIs1XH_VbchBu5Tj1eT2KP2QiMXAmB0bQmkskJW87Hq5Ia8GJXVKeZuWR_qzxUGFDsBgx-qtCq_QytTPPly7_vbqptCCa9Sagpggn5eR0tEhD7eStp9oNCFmoiDfVHV-i4GhQxkzwhLsIiYk2i1z0PFLyCRzAqnA",
                "width": 2976
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/118334556767804726750/photos\">Patryk Gl.</a>"
                ],
                "photo_reference": "CmRaAAAATL4A9-mDQBAYvlEIkRi4wih2lP_pgKMyN0fI4Z6UAITO-0sxARhsPUHDcoD4WyPOAeh4LnZgmX0mUhQg-TZxnSwX67bbYF8j4t_7HTKbuTuqMM28Ma9WLHjsN7NUzowyEhA7riByo5lEoeXvzlVpLtmIGhSfGe4bM_2L-aKDhkhd70JS9_erjw",
                "width": 5312
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114014067942375826454/photos\">Errol Dunlap</a>"
                ],
                "photo_reference": "CmRaAAAAKvPBSNn8SBCEFe58v-Qg0M0G7w5MaIMdm8w95de8w_mfqzTanXBj84zrKQYDfPP9ZOiTwQ5w27oKG6q6g7gDaqhv-bxdQBMLzFxXyKUGGRVmOp3Y-vCFmTrDXSp1XICFEhD2el65nA_CBk8tJ2r3HDnbGhSvxb7G6Xyyb3oqyopgofHy4jvD4w",
                "width": 4032
            },
            {
                "height": 1440,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/117110207853292629429/photos\">Jenny Koh-Lin</a>"
                ],
                "photo_reference": "CmRaAAAAsAMeWOOOVDEH2JD8k8NmS9wkMzS-OYw3RWs2uQJh0HNinvY2E2PPLU0fi41mcEy0OUoqIuEtLtuYeiIJfi6N59cSBYgqiXhOcMr-1v-5gcUkVeBxKfsxcS_qLVt6FfOOEhCNdMuDHuBzlSJwt6s8a8HNGhQdt1qmbWzmFJjJ1sjjisILTwnVHA",
                "width": 2560
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100181944291960418820/photos\">Brian Wong</a>"
                ],
                "photo_reference": "CmRaAAAARQqbJqd-yoDiQBmwwgz0bcvKoaz3kBOtDWFywHGYnIfSRZ6qq0SHlyY4gCfzubH0RHFUt4Gq1ruz1yNg02_0Bqjg6J4sBwgp1kY9_y5H4YJ6TtanmyY4MJAOQJeTNXXSEhD_dfKP4iOiavdxV3_aSJpEGhRWdUYrq5qdkx8FEtsx2lBoHk821Q",
                "width": 5312
            }
        ],
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "site": "http://www.mrbossamusa.com/",
        "place_id": "ChIJ9ZEZm5m4woARr_aHWJ2e0wI"
    },
    "Quarters Korean BBQ": {
        "name": "Quarters Korean BBQ",
        "hours": {
            "open_now": true,
            "periods": [
                {
                    "close": {
                        "day": 1,
                        "time": "0200"
                    },
                    "open": {
                        "day": 0,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "0200"
                    },
                    "open": {
                        "day": 1,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "0200"
                    },
                    "open": {
                        "day": 2,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "0200"
                    },
                    "open": {
                        "day": 3,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "0200"
                    },
                    "open": {
                        "day": 4,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "0200"
                    },
                    "open": {
                        "day": 5,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 0,
                        "time": "0200"
                    },
                    "open": {
                        "day": 6,
                        "time": "1100"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 11:00 AM – 2:00 AM",
                "Tuesday: 11:00 AM – 2:00 AM",
                "Wednesday: 11:00 AM – 2:00 AM",
                "Thursday: 11:00 AM – 2:00 AM",
                "Friday: 11:00 AM – 2:00 AM",
                "Saturday: 11:00 AM – 2:00 AM",
                "Sunday: 11:00 AM – 2:00 AM"
            ]
        },
        "address": "3465 W 6th St, Los Angeles, CA 90020, USA",
        "phone": "(213) 365-8111",
        "coords": {
            "lat": 34.064016,
            "lng": -118.297709
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "photos": [
            {
                "height": 4160,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116152467092866226223/photos\">Larry Hong</a>"
                ],
                "photo_reference": "CmRaAAAADg7lpQrRo2AwBBGtuZRKxHRelXktfuoANTielqR5CFi46PPbXDtJiMYlhNsu_XJ6eo4avw1H7LLpAMdK7lADri8RSANaeyXQG1_u1xUC4XmvMv7Frp8mfqN26LhhlN0-EhBaW7BaPOQkEO5oRrwi5vgoGhQmDNS868QUpf4dHGrvonISvDS_9Q",
                "width": 3120
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/112562787301432050279/photos\">Ashley Watterson</a>"
                ],
                "photo_reference": "CmRZAAAAFbCzFterQSTTNYe9LV605mrb0zt3m27Vp3vce0nrNxFO8JVHi7K3ufoV46d0LyTqvSNiUhnDF1CkPtMFyT0DZnVq6j0FIyo-RVj5eCsM5qO_El1_RaPhASUPT9U_yAN9EhDjToZ4pm4VY2Q6pu3dGn4bGhRrivBH5zbk3Xha72eHUf6TDfRAUg",
                "width": 5312
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/102521931289931729872/photos\">Dickson Kwan</a>"
                ],
                "photo_reference": "CmRaAAAAz_qXpArWsjLImOcqQVRf-syS9-kFI9rBOjqPa0yuu_gp1GD2DsG7VmJMl3Mcw7j_ZeY9X54uLYusEOpKTIR0ugqLQK61da6dUf1oyxek-s-qVXfLAgZCCwmTwygJXfNoEhAegDNo3rMZb1htqjhof67qGhTmi2nCkA0kOhNJRjptId4cm0XjIw",
                "width": 4032
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114216014213638055300/photos\">Joey Ngoy</a>"
                ],
                "photo_reference": "CmRaAAAA_WVhQEBByysIFr8iyTJf-BNRxAuM2bqXNB-O0JL-wUwkeWmvFXL7cPCwcapZaKtYj0I0soPmeOM7i68Kb1GyrldBLFZ0MX8fHoLi2Q29TK87DNsBVbOTOhoVxttFQ71ZEhCc488UmA7KmsdAICxVwH3tGhSnWIP_aQJG4utu-5HxCzVylS41hQ",
                "width": 5312
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100703662397554530082/photos\">Yulbright Yu</a>"
                ],
                "photo_reference": "CmRaAAAAmhLFZSRpLM4b-4cLNLOPJXPgnAJqqutPouB_Y-xNbtAE8Md4wGN4ylqJfkBlbCESepqStvnEg_t1Km_FAc6Yao54q2STzlaVA5zq0lH87AoQCr-w5qsRxOI0jT1YDbG-EhBQRPg_JKxD1s9ovzkq1LOPGhR-nyd8UKr120e_Wztn5hmzc3HdJA",
                "width": 4032
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107352308565788317243/photos\">고경진</a>"
                ],
                "photo_reference": "CmRaAAAAHropjKJZ4FmDHJrpVpYi3KMPAL2p602ZqX7Dsw3RMYSMp3cHFrtQVmtXPQLanEZV99St-rt-YADzNXHRN0quMjFjkTQeGPpQ0KhZQkayyFtLrN-aK1AZ5IMh-cNzltVjEhBUdjQevfBThXaYb5DhcyhUGhTXQarndcY1P87J4F8qly9t1yCOdA",
                "width": 5312
            },
            {
                "height": 2304,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/112511741853540878134/photos\">Yue Weng Mak</a>"
                ],
                "photo_reference": "CmRaAAAAuhDVdbRUjVaM2MRzZaDryxjoXhuNF9cwrW9KT7Ff9hvfw0BFn_CZ5XooXxGNyL5SK_nNAMpWcsuVg4IyBkxXKUZ5ysCDHf0wc6iCHZgFOg2f1qnim4CB4EDehxmhndPtEhBan066aMyuZII69QEQBbnJGhRamZbhPMLoHLhoGhZWppEAcuwsVA",
                "width": 3456
            },
            {
                "height": 3464,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101702575245681356098/photos\">ThoR RacHaN</a>"
                ],
                "photo_reference": "CmRaAAAAvCRN-yPe061HGhTFuIKc5rs0Ytl_jb-g8FezCMMSUFN_X0-FHo2H5exayZEsQasqMwE3eFtJ0ryqjlYNj7sbqzEnhw_XBTYVP5vYgjPIDBJtOv2KR-Ynk8lZls4TtGahEhDN9sSE66WUNreKz6A7OJSAGhRx7cMlcK2n9qboEV3UvibVmLqIbA",
                "width": 4618
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101727535964370040681/photos\">Justin Tsui</a>"
                ],
                "photo_reference": "CmRaAAAA15KmiPztE_AH-NDvIc_BO7XVjy5-X5aDGxDt8SExMfCLjHoaMOUMpD24edZuV6Z8QGSX9E4s3uF2FYbK27_LpgZ99BKYFdo6NchvRoyjydTUTnqWxTx1qCCYKNYqtZStEhBM82IcFULqsLyUL7yINAkYGhShbH2fpFx2zAwTWicC0CAkEW8yTg",
                "width": 5312
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101026057925070932651/photos\">Brian Choi</a>"
                ],
                "photo_reference": "CmRaAAAAojpdHAJjDuT1XoNCiom-MGBHrrl4U-OS_G_cYKrqE-fu667WTp3_IcpCPpZuiPa24T0Twj1NZvDG0Ic7av0gnHj0mhDKgoHvpytgBLiFu0Ae9U33oO7IRW1747Xp-Rg5EhCpbqF45B4zTmKWGK7D6de6GhTifv6iKoHxHknn9fCj6i4fQgD6fg",
                "width": 4032
            }
        ],
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "site": "http://quarterskbbq.com/",
        "place_id": "ChIJoz3QPH3HwoAR-eUJ2juVyzQ"
    },
    "Dunkin' Donuts": {
        "name": "Dunkin' Donuts",
        "hours": {
            "open_now": false,
            "periods": [
                {
                    "close": {
                        "day": 0,
                        "time": "2300"
                    },
                    "open": {
                        "day": 0,
                        "time": "0500"
                    }
                },
                {
                    "close": {
                        "day": 1,
                        "time": "2300"
                    },
                    "open": {
                        "day": 1,
                        "time": "0500"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "2300"
                    },
                    "open": {
                        "day": 2,
                        "time": "0500"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "2300"
                    },
                    "open": {
                        "day": 3,
                        "time": "0500"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "2300"
                    },
                    "open": {
                        "day": 4,
                        "time": "0500"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "2300"
                    },
                    "open": {
                        "day": 5,
                        "time": "0500"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "2300"
                    },
                    "open": {
                        "day": 6,
                        "time": "0500"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 5:00 AM – 11:00 PM",
                "Tuesday: 5:00 AM – 11:00 PM",
                "Wednesday: 5:00 AM – 11:00 PM",
                "Thursday: 5:00 AM – 11:00 PM",
                "Friday: 5:00 AM – 11:00 PM",
                "Saturday: 5:00 AM – 11:00 PM",
                "Sunday: 5:00 AM – 11:00 PM"
            ]
        },
        "address": "754 S Olive St, Los Angeles, CA 90014, USA",
        "phone": "(213) 532-5555",
        "coords": {
            "lat": 34.045177,
            "lng": -118.2566381
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "photos": [
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/115492257824292989446/photos\">Alex Brideau III</a>"
                ],
                "photo_reference": "CmRaAAAAhtz-GJ_ZKL3HQAEmdrnzczfAYY-PK_Xs_wDVHdDm9yDj3vZfYwhuo7Dw5aAtR39bLauCI4HASFMH2U1370egc8JQ4a5gjIJenIJCWQp4Qq7qqLIIh2lD3z4Wy7UEKUMjEhCK3vq4AZiyV991s_SsPi1bGhS7DAjn9sbZ_IwaBLfqCfjZLc7j2A",
                "width": 4032
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/109189691284414467151/photos\">Louie Estrada</a>"
                ],
                "photo_reference": "CmRaAAAAc1bh7fsZtw1oqbpacrXXq9RYEJgABLiF-JYNTanQznBRystSKjUPgdhNNVr0WXGoiT0YImY-CZODoPIdzSknWgkq5tXfe7gVS4azonPq5QTYLAirhrmbqDhVh2itQ3WMEhD4yIl00CNvAhMZYro7tuTfGhSVNmqZNAhFgoqyWby7CLxsTqadRA",
                "width": 5312
            },
            {
                "height": 2523,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111249694926348183141/photos\">Scott Taryle</a>"
                ],
                "photo_reference": "CmRaAAAAfAujqeK-2ukalZiCOp0uVDU-abkmqM7UrC7Avik5ccMp23kkdYU-_qXSvlY_35k7D69rOMWRvqc2kf8BQT0a5K5Za8aU8V-BhlS0gDlMXBy-kAcWjsQ0AdgwJznujePuEhB13qpO26e_9RsWMOzOEPQzGhQf1JLU2uhaNvN2kDf0KzPx86TgVA",
                "width": 3893
            },
            {
                "height": 3036,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105987117120140701722/photos\">william Quezada</a>"
                ],
                "photo_reference": "CmRaAAAAjD_gWGSdqgmabKj7lgQEE1daq0fC0QawJvyUSGLQRuTalaVToQLbjRRzSn3nEvkkfLCzkJk51fDhQ8GKqvZpDosSk-a0oVeFowmZU6HW_ei3FKhsBtQV6V_Yhpyv12s8EhBMuP_bX2T8g0eHm1NM9ZXnGhRnqfihgi_Je7jX05twNJ9fwa24ZA",
                "width": 4048
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/115798155042703135970/photos\">Javan Denton</a>"
                ],
                "photo_reference": "CmRaAAAAGYq2la5W6VW3Y5MVKO5kZyXMWyzlYussbFLFOvGxjKc1DRrVI6UdOesv4ONKMlmj5d_RJVWWm9wIs9KPnTOnFpFTfVAWPktdSvPOszpg8OYaJC60H6U0J0SuQvtzZ5lKEhCLJjadoCOg97YeHVpWNs1aGhQW-fpN3KHD_eoLssaOq5B0HKJZ4w",
                "width": 4032
            },
            {
                "height": 2448,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104349745448056891088/photos\">CHRISTOPHER CASTIEL</a>"
                ],
                "photo_reference": "CmRaAAAA75F6sRCdjqSrLRbj0QBL5cTgBrv8BoIo69y0Um5zzVuxcMVOhP7MUIn4VZWAZZBHBD1CM0-tq2licYOgtcNZxbOlsLqYZAh8ms4cf2WPev5NS6RfJ096XpjGq4kXeA60EhAVXtDS98bTG6yGVJXOGe5sGhQ3eMtAzMwO57qLz_4w33cgQeuoBg",
                "width": 3264
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/110128630778983023104/photos\">Lasse Hansen</a>"
                ],
                "photo_reference": "CmRaAAAAuAKQa7eZYX5LfdgnqaDNQyq2LNqCZdmZDpeO5UvhIU5xKx80SzjlhlvZPpQlC_cjP6bLc_sNnwjalmBJFe6hDPi-Tjbr4Z7C5aqFrmsL4-an73V3XEh4KOb3s4nN9WTIEhCB7fXOjaNwId1IPwXXPWekGhSpLm9Nws2coC-SjDnE5sWbnALbHw",
                "width": 4032
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107950583700804292887/photos\">Yuval Levy</a>"
                ],
                "photo_reference": "CmRZAAAAInBrtuT0eOM30lR-7k5v-BJTNvb3fkJskKeKjSB-gVHuio0FP0rR_6BWVp4Up4K9hij8r5p0TpC-hk_Fq8NafPhqvvQdn9oVlTqLpxTqrF9-5DcryqRggWo1OBN1qY0CEhA1BmLPdziStnF0LSmbnRgUGhQD8s16UpswyTTz9u2ZAHnKg95CcQ",
                "width": 5312
            },
            {
                "height": 3120,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105928426188405955991/photos\">Mic Palero</a>"
                ],
                "photo_reference": "CmRaAAAAnIYtPQ5eSd5iS5b0hyhj3zzMahFMZMdXqQakhJk5EraYFFaMwwm5u5e7MM2iHjCFOgps1IW2l2dPcjI_JLgKGSVNh1znVAcqpHj-6hB0vayY-w9mSigVuZW0N1BIGkwHEhDbWLFCv74SgLYQsKs7n2cBGhQBJUCI-fgS-JuL3s8RsgP-MCka2A",
                "width": 4160
            },
            {
                "height": 3072,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100728146466993796729/photos\">Jon H</a>"
                ],
                "photo_reference": "CmRaAAAAkgofJJFXlkR6eT2s8rb3iW58pqm6rS3t-GILtv4ObMNv4EdSo-agWKwui0k_8Fk6xjuXwXX5ndeigliYamiW5WVJ-uk7rqyn6CMWLRw3p8x7nJm5MS6eQsdqgUNOsXJMEhDO4-cAjZ3NMMROx1eBNvuDGhSZlq8UHDOcG1M-EjMJRi7l6dT3bg",
                "width": 4608
            }
        ],
        "types": [
            "bakery",
            "cafe",
            "restaurant",
            "food",
            "store",
            "point_of_interest",
            "establishment"
        ],
        "site": "https://www.dunkindonuts.com/?utm_source=google&utm_medium=local&utm_campaign=localmaps&utm_content=354452",
        "place_id": "ChIJj6AGlLXHwoARGi45hsYECKM"
    },
    "Eggslut": {
        "name": "Eggslut",
        "hours": {
            "open_now": false,
            "periods": [
                {
                    "close": {
                        "day": 0,
                        "time": "1600"
                    },
                    "open": {
                        "day": 0,
                        "time": "0800"
                    }
                },
                {
                    "close": {
                        "day": 1,
                        "time": "1600"
                    },
                    "open": {
                        "day": 1,
                        "time": "0800"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "1600"
                    },
                    "open": {
                        "day": 2,
                        "time": "0800"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "1600"
                    },
                    "open": {
                        "day": 3,
                        "time": "0800"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "1600"
                    },
                    "open": {
                        "day": 4,
                        "time": "0800"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "1600"
                    },
                    "open": {
                        "day": 5,
                        "time": "0800"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "1600"
                    },
                    "open": {
                        "day": 6,
                        "time": "0800"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 8:00 AM – 4:00 PM",
                "Tuesday: 8:00 AM – 4:00 PM",
                "Wednesday: 8:00 AM – 4:00 PM",
                "Thursday: 8:00 AM – 4:00 PM",
                "Friday: 8:00 AM – 4:00 PM",
                "Saturday: 8:00 AM – 4:00 PM",
                "Sunday: 8:00 AM – 4:00 PM"
            ]
        },
        "address": "317 S Broadway, Los Angeles, CA 90013, USA",
        "phone": "(213) 625-0292",
        "coords": {
            "lat": 34.0506752,
            "lng": -118.2485767
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "photos": [
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106786039169160215915/photos\">Ken Sullenger</a>"
                ],
                "photo_reference": "CmRaAAAASZQ0NeZ2SP6r8oeBwOR2yygIJ9HKIeX5-HMYvMkH9t2ZHrFnTMkIgYt6uE9zVgVLNr0B44yJmUP0kIpd00xR4Oo3Nz-vkTsuQKoaGflr0Q7NJUkGhDu66xPzSu-rDdyVEhDQ2vIsKQhvPjmRTtfNyv9CGhS5c3S3AyryuUXnt9VYF67m0zqTBg",
                "width": 4032
            },
            {
                "height": 4160,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107170851180839771462/photos\">David Chang</a>"
                ],
                "photo_reference": "CmRaAAAAJxDqoOfwViHAEeacaFH1Z756doAJQ9hQpAytXwIUsx1K1fDV_p-xCrFjanqmTmNne727WLgTW-_Z4SqHfEFJG1VcAcBrcv6N5Hd_CSMkFL6x21Tr8GqKAwznTOP6wOB8EhBS3wt2t30KeVZScd3X0hk9GhRcz0cgVvbrLS76e3urDTLNyrwOaw",
                "width": 3120
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101055097646230235633/photos\">Mohamed Farrag</a>"
                ],
                "photo_reference": "CmRaAAAArL_O2_fq1AMQsXtZzHy1vHHsyeRGgkNKjSwqjG8_D7LHVadrRzQRCu0H0lE6L6LlfqxkLmP3E9QDVbY1ThKg8PJYTqCQj9hZLwzrCzim9k30wVB_jbx0TKooucWb6tu_EhAgoej49e8QwfXSQeCRNUvJGhRqifvBq7yXY1E1X99QZwLwQ3WSkQ",
                "width": 4032
            },
            {
                "height": 3120,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111364413852311931661/photos\">Sidney Chu</a>"
                ],
                "photo_reference": "CmRaAAAAAm5COhfn8LhSF7iKs3SH-8nBpPZ_XKC7yLl1PnjfQhKOx6Uq_A6zY2DS60qVAgNWiH7pa11pCWdjcSSV3ZYl3s6YaTnXmx1v44Br3zc2g7zZmG1-Ek02oFj39llA4SAWEhDrzzrjZEch0p70M_LkBfIYGhTOgLdhww-vp8vyunYB6RsHDYlJUg",
                "width": 4208
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116669478452345740635/photos\">Russell Tom</a>"
                ],
                "photo_reference": "CmRaAAAAa14I0H-pXDusQe058HqfmDgGmarY_H3_-7sBQW_UQfvIQinoxKMZ62hZbfSX3w2MkLyF-qxPfQiRZhX21iMWs_Kuoj3DMmkkobZQb7de-EJjkUF3SzuPvyTwyZIs_VrXEhB_0PZ-G0-B9aTWm2kL9h1qGhTI2jLtaJDTvxavURYTXBFl65BbcA",
                "width": 5312
            },
            {
                "height": 2160,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/117687368578146591080/photos\">Birdy Kim</a>"
                ],
                "photo_reference": "CmRaAAAAexJr7TzL5dyQeblsC9J6KYbZKE1NXJIdzeV968xSpJHJvVJevo-ht7SJbP48EnFHT8I5fIM8HSxYjvpwkN8lnwtlTgpf0mIcx7YYu4bXIMKAGB4lOFJvBAGAhAhkTjplEhAuCwAZC7RvJsiwBWftPNLOGhRpc6FO8vDJ6vOSvkTsP7MuGWnVvw",
                "width": 2160
            },
            {
                "height": 3036,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114469118395545767440/photos\">Patanan Ariyakornwijit</a>"
                ],
                "photo_reference": "CmRaAAAALohVp7gq9AKAGXcuehlN414nR9XSqy4bJ-xYt5ZG4yQm0QFOoCxci6GZM36v_SjGN-OsYxarPGtftIYCtYkCQDhRTSeTL_DO3tZckR_si9BlkT7PJX8zWcVrcWNWWtMnEhDCWOA4HCEwNFC8Dmlb9rIwGhR1aUrig83UdupXyJViVcEysDx2BQ",
                "width": 4048
            },
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100786310053663245681/photos\">Samuel Araki</a>"
                ],
                "photo_reference": "CmRaAAAAH5UDb6fpmHSepBCjEakozlHy5F3NadTmp_BT6MCU7DyXUnALrI8LeAo37Aglz0lNTWwjYFuqoJUI-WZ191UNNOaoiukYCFKyF_hFVhL5xXCQnX4uVcPoYsK4yix1TcbBEhA_SGDWnbLLhabatR1m2F1dGhRvrSPqymsiOZDaZk1jdK7iWtvzPw",
                "width": 3024
            },
            {
                "height": 3264,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116765026401934159363/photos\">jisky rho</a>"
                ],
                "photo_reference": "CmRaAAAAjhFyaCTPPaeIU8KltQy4mS33j0BbZwFlGUwaO-hmXyMvaelQbFM1fBE6On7dEIv_SoYdAYNpC7WBh4QG0EYIJmdQZWlMNfMprijySQL2TenDKJwOE8fDGnG03tybklmnEhCNO1ID8m-cdjW-hINgqCU7GhSR9dtiwa2mjHlB2YoxxJZzDh4jlA",
                "width": 2448
            },
            {
                "height": 2952,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103851167403744245742/photos\">Oliver Chen</a>"
                ],
                "photo_reference": "CmRaAAAAyOczq0sHQrfMJ-Iokq7z-XpKd_FSh7dcEohbOyMbuFolPbU6_TlTY9610ThO2yftF3mqhOhm-oyWVaHgiYPfzkBcYwQXq0Bbba_qpHkSldDUqv-AnR5dbkp1jII_zBuBEhCiEpwajwxML0fzfaYe4izAGhTq4ilc3hHwPTh0Hgtmvsa7Bve5GA",
                "width": 5248
            }
        ],
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "site": "http://eggslut.com/",
        "place_id": "ChIJuQ5bj0vGwoAR8xOTMYQAboQ"
    },
    "Oo Kook Korean BBQ": {
        "name": "Oo Kook Korean BBQ",
        "hours": {
            "open_now": true,
            "periods": [
                {
                    "close": {
                        "day": 1,
                        "time": "0000"
                    },
                    "open": {
                        "day": 0,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "0000"
                    },
                    "open": {
                        "day": 1,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "0000"
                    },
                    "open": {
                        "day": 2,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "0000"
                    },
                    "open": {
                        "day": 3,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "0000"
                    },
                    "open": {
                        "day": 4,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "0000"
                    },
                    "open": {
                        "day": 5,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 0,
                        "time": "0000"
                    },
                    "open": {
                        "day": 6,
                        "time": "1100"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 11:00 AM – 12:00 AM",
                "Tuesday: 11:00 AM – 12:00 AM",
                "Wednesday: 11:00 AM – 12:00 AM",
                "Thursday: 11:00 AM – 12:00 AM",
                "Friday: 11:00 AM – 12:00 AM",
                "Saturday: 11:00 AM – 12:00 AM",
                "Sunday: 11:00 AM – 12:00 AM"
            ]
        },
        "address": "3385 W 8th St, Los Angeles, CA 90005, USA",
        "phone": "(213) 385-5665",
        "coords": {
            "lat": 34.0580039,
            "lng": -118.3028343
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "photos": [
            {
                "height": 1836,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107633171517465228443/photos\">Andy Sidik</a>"
                ],
                "photo_reference": "CmRaAAAAtRf9dbrLOvAx03Hp-4tHvqjNQL1TDBPa8qx50hvRZS59gZ9zFGhEoE1aSFQkbosztN2h014HVhLZJ8HMSTxYFWoYT8U4VTciHsEGzfQSVw6Cyg2b3oiLtWmoxTEusmaGEhBtQYgzctx1kDTRefUEk1S4GhQQ9a4oLtE3Nn9PKzdxwFN0uW3iBA",
                "width": 3264
            },
            {
                "height": 3036,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/109467926853496245646/photos\">Steve Ling</a>"
                ],
                "photo_reference": "CmRaAAAAomqyRB0GHjuqUroe9AOkxc6-__Uet_RvxW2-8z6CCheWFESh1L-PtlEn-98Y8GKaU7fuJdPchi0_JP4oexBGySaxpfIqRIDWlJfnN6yvAOscGWdFL2E6keh_m0LDnGSTEhD4tvm6BRNDRpL_DSzHtcxbGhRLT_qzVwpltqV8ZYG8jTvfkgZGiQ",
                "width": 4048
            },
            {
                "height": 1632,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107633171517465228443/photos\">Andy Sidik</a>"
                ],
                "photo_reference": "CmRaAAAAbqgCsYKGKoypoMZL1zWkqbBA7M_y3almmUeIs5Qfo0545Es3bSiE2tHxaY1A66UG3EWkxOiMejrYwtH2tHD1g0Ss7VPOSXlxH_CUlNx1Dk8ARQk9iG6EBHzJX6uNw4-qEhDNQywbh9lCpcdqKlF4Gk_vGhQ7veFygF0csld7Rqll9yD-rtUH9A",
                "width": 2901
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/115342931837031305624/photos\">Howell Yu</a>"
                ],
                "photo_reference": "CmRaAAAA0NvyIn3vtnOOOjcB7G6Y1ZbiA5jhBCc8J9uEsrUGGdSPOorx87STKyOP5Spr6U6yoBXfTUtd2l_olaxIhB6gl0mzMe4XWZJ2Q3ZQvf_BPntE6mosEbOr5Aup0VXUqt-iEhDA-DySRSV_SwcFa1fxesxAGhQIGczlzX9fmP3z9p5aLp0DYP3Aqg",
                "width": 5312
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116010778495713757519/photos\">Yooko Diaz</a>"
                ],
                "photo_reference": "CmRaAAAAzx_DkI85Qflg9ETXhACMLJLcZBwabkUl1UnL803474XjtMEHUa9JFKlT5MLV6zRNlrQcNwDyGF5DqGDoDhjZT23VFgzcSsdu7EvtM--4Fz3WVHdP8cnIbgWIMjyJfpfcEhCCw2ds4QICcmUHM8BaDpQDGhRUaZFK8mc5qrnFAaSG9zN9meFKPg",
                "width": 4032
            },
            {
                "height": 1158,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/110650970481073246381/photos\">Vincent Shen</a>"
                ],
                "photo_reference": "CmRaAAAAZaxdksNNaxdT84J4z1Mj43sI_WE6XCswoUceEiVie4MtP7oB_tX8lhwL-01ya5gbz9vrBvtVjfIMDZPCqqtP3fYgf9gbip-ADi4HENvPeAtOv9EAh4VHeZkA2W8Xx2R5EhCBpB04lSuwCQ54P6jBuYBIGhT61BvifKExL0XFjrPjAF5or9OtzQ",
                "width": 2048
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100075752895930986334/photos\">Ben Harounian</a>"
                ],
                "photo_reference": "CmRaAAAADfne3qiou4fXeFdiquw7YsK68Jb6IRGMlbYevp5eipGFB5Y0Uh9LqsQgj108tNCbAt0KneMdblS_CZGBkz7PGzAK9jo1JX8v3UuZO9W3gjEyNE7DWVFYIbkrNvfs3RZLEhBcnMO3QnzpnYkg_4RYsHdhGhQEKrJgFk5z5cqxy04mpdM1zeQUHg",
                "width": 4032
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106376058891414204701/photos\">Daniel Sagun</a>"
                ],
                "photo_reference": "CmRZAAAAi84V-ljQQi_5TQiy7OgmVhGK7_-ixyZQIsGZWWxG1wkx3vRr25SxXWgxLcu2zUH9cI37qKSMrfU7v0MdHk2H6YAR-eE6MUIlxLDtfNQeNbYF1d6Q5v1ncG4inWXxZI8-EhDthBf6ILkcfmriVJm0JWzsGhSAEnbVdmbfHv-5Vcyc2KTdZCjHTw",
                "width": 5312
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/102191382341499257392/photos\">Dj CLS</a>"
                ],
                "photo_reference": "CmRaAAAAcqHcn0d91ujeG7Opm01lDWkL4LcqPq3KVOoxKElXWh_MJyHjfsU66XrdINGf0O8BdeP5Amr6e5OdUSstQuTBCADi0qvSok9BgBszqH6JN1lWInpSRp_4PwsswcDuEo4QEhC4Wl1N-3xVcBOwchs34k5AGhRSlMQU8Xn_nbsxndqxjY8WOj6CAA",
                "width": 5376
            },
            {
                "height": 1152,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/112982246463144667810/photos\">Yarely Gonzalez</a>"
                ],
                "photo_reference": "CmRaAAAAEvqkXUk2hwN3iHysnbuM8IDbkxNtoujERdNcVy1nuGZaEkqlLkS79vsNL_ME667oTIat7ctVaghuDymw4G0a1WJa3JnsfO1JFx1OejoXmS2-fV6UTtl0Y8yDhEQQU-A_EhC9FSAANHov94f2e6piptBCGhQT79PkDeyAV0xlwyZr5-4nSwG8Jg",
                "width": 2048
            }
        ],
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "place_id": "ChIJOZrTe4G4woARlH2H9bL45L8"
    },
    "Copenhagen Pastry": {
        "name": "Copenhagen Pastry",
        "hours": {
            "open_now": false,
            "periods": [
                {
                    "close": {
                        "day": 0,
                        "time": "1600"
                    },
                    "open": {
                        "day": 0,
                        "time": "0800"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "1700"
                    },
                    "open": {
                        "day": 2,
                        "time": "0700"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "1700"
                    },
                    "open": {
                        "day": 3,
                        "time": "0700"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "1700"
                    },
                    "open": {
                        "day": 4,
                        "time": "0700"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "1700"
                    },
                    "open": {
                        "day": 5,
                        "time": "0700"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "1600"
                    },
                    "open": {
                        "day": 6,
                        "time": "0800"
                    }
                }
            ],
            "weekday_text": [
                "Monday: Closed",
                "Tuesday: 7:00 AM – 5:00 PM",
                "Wednesday: 7:00 AM – 5:00 PM",
                "Thursday: 7:00 AM – 5:00 PM",
                "Friday: 7:00 AM – 5:00 PM",
                "Saturday: 8:00 AM – 4:00 PM",
                "Sunday: 8:00 AM – 4:00 PM"
            ]
        },
        "address": "11113 Washington Blvd, Culver City, CA 90232, USA",
        "phone": "(310) 839-8900",
        "coords": {
            "lat": 34.009361,
            "lng": -118.4119778
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "photos": [
            {
                "height": 2368,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/115993360590881558586/photos\">Shachar Aylon</a>"
                ],
                "photo_reference": "CmRaAAAAwhpvg6HvOF3MFM5TEt8KloTHGs7Ri_D232ypgPJsxfMB54Qo6aKkbdIA-BvDirLXtFRb50-AaomE5kmAxYpJylMrZz1JOPRqmZpTUfQIyDC6h1c_zVwvurN8QbTLVUFaEhC4lSzDJDlpWh7bVPqPXTMaGhQM2t46W-XMJcj1sg92BmkmmXd5Lg",
                "width": 3200
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100255208270307388724/photos\">Andy Cheng</a>"
                ],
                "photo_reference": "CmRaAAAAiHC4CBZlgnfB3sXznPe0kFywiF7ss-dpyf9v_sYzEVaRQKkO5OFbOUs7zgWVEDjt5Ed6_t9ploBJYcVtX64eg3txImIAgSUCHqNDtEkO_CI_M7W4TZJ6TGp2KribafjrEhBrWQFLNC8hhx4r-P91KpyGGhSLetmZJmFoCn0NjAtIyuIITrqHzA",
                "width": 4032
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/118346847671167069838/photos\">C Handel</a>"
                ],
                "photo_reference": "CmRaAAAA-V3ELxhPX1TyL4fjMjMdvfiZGdpXdMnbMR2AgFCa2hu7eHfjyes3rxN6WFsAa6ojbOEIBFT1fDjdbgeabqWysIbnCgMWnf44tErvPfrne57NGRC9RLaHxxMfniK7vaasEhBN22mt8dqJrUpNOXfflXOCGhSOytQM0S9Ufag5yf3rXNCeagVpYg",
                "width": 4032
            },
            {
                "height": 3200,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/115993360590881558586/photos\">Shachar Aylon</a>"
                ],
                "photo_reference": "CmRaAAAAIjU0WexDBcuiqmlMSr_aDAWDVcinpq2flEh9GtByBxnVTrMrMmZH3XaPthVFx5Q7OLNFC0heu578iuoyfkjKo5dNvCs2hto-qkz1ovdylhHfE_XFkEiWPo_3zjM2pkGyEhAbR4SI21NXPJzrrACCQXEmGhSYptUUcHNYvCFjeLjjZck13M4btQ",
                "width": 2368
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113661940672426975427/photos\">Patrick Wolf</a>"
                ],
                "photo_reference": "CmRaAAAAcfM4FpbJBzYMiMeD2fXTn9-Wv6RMrAUg8DIV63yg4xkAcoO8GQlv9zxKMq155UiuUKQ31zkit8x6lBLL_7i9gk9p31BlA2Y5Wz775BlPPKCBQn1GpAanI4Busekz-5gqEhBBFsqi13j5BmrL97LHAqiIGhQN7HPD4pcikW66sBLEdxoG4RLMxg",
                "width": 4032
            },
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106987586928795953244/photos\">Alvin Chan</a>"
                ],
                "photo_reference": "CmRaAAAAQozAf_OgPJxEbAKY11tHqU5mLlRYkwMbySFelokHJpjs8loxFHN6RI37Me41dfr5LxK2bn1EHAmM-7D6wVNE7gcx7sz7ySfM-UHDR-D55awj8TJiuou8a8URTMWv-oUjEhBHEBt6rlvO6r6DBoq7oRa7GhQxocrXur79tdrL36tnEpn4cIGY4g",
                "width": 3024
            },
            {
                "height": 492,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104696038436881003393/photos\">Karen Hansen</a>"
                ],
                "photo_reference": "CmRaAAAAQ7ag454bPs8lJqSlYQCpbm0i7wMB5nHFaO-U8D5ny8dVAj8APDreepI3gyX35RnXq826yvdpAqYlirBRBTyvbTc1RMz7MfF2myX_iJHN1xLa4p8NZrgtRUuPdYhPtYW_EhDV6L-Lqe1Iy0ypkjqyMJfQGhQgMYCeYyBaj8_JE6_MWiEISAVERQ",
                "width": 758
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104259609673959491167/photos\">Mahesh Sugathadasa</a>"
                ],
                "photo_reference": "CmRaAAAAP8FlBnMcpWrtuZbFmjPBnkRNMz9xYuQYz4NuZBGJN9woM0vg7MitpiFuTLuCzCkYmsNrnDOCVyqLB4Fgu7L8d2LVe0Cmsk8LoKbRF9KO2HJNdXAYb1FsN1XSzroSLxKFEhC23gu05XbGOTl7nk1LMsUwGhQVJtW76BKH3SbjwnJMRazAJrPd-g",
                "width": 5312
            },
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106987586928795953244/photos\">Alvin Chan</a>"
                ],
                "photo_reference": "CmRaAAAAGK1KS9p0gV-COaxX-CWpj9sRCsT4QHgAX56o7fqrAM-N26jxqeb5hNdXGwVHvOEzqVfIBFB9TcYucTzLhIa0sy2CRybMuzvWCd-NuTCyhXxwc8IQVY-vtoyGhPxgb1HgEhCse7ahAymozMJOZEqVMVzWGhQwOm8bqYjEN0l-JrHGj1vxZU4XmA",
                "width": 3024
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100255208270307388724/photos\">Andy Cheng</a>"
                ],
                "photo_reference": "CmRaAAAAyIJTGD8O-0Rk_rokUQPnYg6mvXEghQuFeo7t0-Y5zpnDdxJeyY8_OvFORubV4AkTYIjRaA1-NUsCvbRA-9_Lw9G7pyGH6KxDqEzwdtA8IGAhjUtsSwxcpH7Ktuu2APCDEhD1HQYhV_e6Skl48OG43V6xGhQT3tGsY9bpYvWpv-Pj3JQuhjIOgQ",
                "width": 4032
            }
        ],
        "types": [
            "bakery",
            "cafe",
            "food",
            "store",
            "point_of_interest",
            "establishment"
        ],
        "site": "http://www.copenhagenpastry.com/",
        "place_id": "ChIJlXVxwD66woARSu1zTYo-aKc"
    },
    "SOMI SOMI": {
        "name": "SOMI SOMI",
        "hours": {
            "open_now": false,
            "periods": [
                {
                    "close": {
                        "day": 0,
                        "time": "2300"
                    },
                    "open": {
                        "day": 0,
                        "time": "1230"
                    }
                },
                {
                    "close": {
                        "day": 1,
                        "time": "2300"
                    },
                    "open": {
                        "day": 1,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "2300"
                    },
                    "open": {
                        "day": 2,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "2300"
                    },
                    "open": {
                        "day": 3,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "2300"
                    },
                    "open": {
                        "day": 4,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "2300"
                    },
                    "open": {
                        "day": 5,
                        "time": "1230"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "2300"
                    },
                    "open": {
                        "day": 6,
                        "time": "1230"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 12:00 – 11:00 PM",
                "Tuesday: 12:00 – 11:00 PM",
                "Wednesday: 12:00 – 11:00 PM",
                "Thursday: 12:00 – 11:00 PM",
                "Friday: 12:30 – 11:00 PM",
                "Saturday: 12:30 – 11:00 PM",
                "Sunday: 12:30 – 11:00 PM"
            ]
        },
        "address": "621 S Manhattan Pl #208-A, Los Angeles, CA 90005, USA",
        "phone": "(213) 568-3284",
        "coords": {
            "lat": 34.0629109,
            "lng": -118.3099781
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
        "photos": [
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111423227016360483793/photos\">David Cho</a>"
                ],
                "photo_reference": "CmRaAAAAnsWFzkayVuU24KyKUQwuFdLqC6iASb1wGnasNLkIJF-rpbZQNq8V8Comvg_F0HfP2P9rSp8IbIZMyJ76qqzMj47P3jqM3Xw49qDogWcoy7U1sURRu8QqbMPpZQYbSqfsEhDgF4RJ5moOAtfTgZEvuOGDGhR9hRHKMW1lchrZkY2uFjTlSUpZzQ",
                "width": 4032
            },
            {
                "height": 3036,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104048700741942538935/photos\">William Francke</a>"
                ],
                "photo_reference": "CmRaAAAA2eddv-69ZEx3QKj6c2uz09kPzCTSVfNIFh_kRzyRGOpVpOfTUQzvoMQ2fpCpB78rKmnu6MeX0IpbBw3ZjuLNB7ycEtK2hjBaR2CPqjetwq8w3o12GekIF4lu2g8pwTfbEhDKPmu8u3wF4_HUtVutxBwTGhQBVKmB9HO7Hg5MEGbQiss4zr7bsQ",
                "width": 4048
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116060233480693286110/photos\">T Yu</a>"
                ],
                "photo_reference": "CmRaAAAAYgeoMetTUIzgVObylObOGqYEZ11gsHrDqU1ZKL6BewoPq9r92xo_VV73T_oR06VOhP7uBElKRVaL7_LgdsalgtWVW9bvDIPXPWlThMulsgEAmEeyHfdapUlMHml4E0JJEhCAtGgZXvpKC87Ox9OHi62GGhS8iDgnDyYQccRkhUF-ztTXMj5LIw",
                "width": 4032
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114944671050810829286/photos\">Vincent Wong</a>"
                ],
                "photo_reference": "CmRaAAAAm8ESS_SvIUr-_jte6YR0ZOd427DYcQhFTxcYoun-nP3n187_1l5zb3NJ8nAtqcWQjxVPUmoCI1fgUPJj5a4KDKH-HiyNl0iqawO8wiXMY52Pq7Ix2IUChxfcCskhqGFnEhD2aP3gEJoqIodRRckkByHpGhRFPiI8CgmkmO-ut1d7uRp9lWe32w",
                "width": 5312
            },
            {
                "height": 3036,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101554626478043765660/photos\">Kalina Li</a>"
                ],
                "photo_reference": "CmRaAAAATL-ildZrtWqRl-CjWihip3vEDtIXG4y36CvgHDFxsCfdSWktcKFaKnQrPhtP9U3N9GjC4kzE38d00DKWost_MkTJGd2fOF8XEA1OdIDlym4EBuVwqShcyAxCuTY4XPYpEhCrUSEy_Nh7zMNwkzma6ZNRGhSptDTLbCSwfT054HH9jM0gIUSFYw",
                "width": 4048
            },
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116152467092866226223/photos\">Larry Hong</a>"
                ],
                "photo_reference": "CmRaAAAAeA8kvH_RclS7sRQ8BCVDNUAJxn0fffuQrcMv-1KwcwYofwIluBsHZFLLfP_gxBISbPTRaQ9PeuT49jBpOoT4WVmPNuhYeNB6irHNNNCDdO6GFXqSNwUIwwB7as054q0UEhCkvAm39y0H-xxn5hE47usXGhQGDp8Won97uu-LmZQhALcCjY0zYQ",
                "width": 3024
            },
            {
                "height": 3843,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/118021245040993268654/photos\">Food Shutterbug</a>"
                ],
                "photo_reference": "CmRaAAAAATxFQ-tt8gPi-Bw4KJXTJKq68dvgIdoEztluD7sSKIjRRgS9F-WJgkTb9a4OWKpaeCLTncmOLCUMg8QzVhgVErOFNYvs1cvRcjtQIrMu4C4JewAeqE00wwxbgrH1dFM-EhCijH6uGem_vsT4daNdwCsoGhSpa9-p0_IOQO1TijO2HtDIwOTgPw",
                "width": 3024
            },
            {
                "height": 2448,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/102096502204131321227/photos\">John Park</a>"
                ],
                "photo_reference": "CmRaAAAAhArXztGk12Wquo1lhSn8mJtT1G3LHvVafjVf6_nonr-6XNNbXo6yDucKoymIlNBjb1i-t74JbtAXsxxpupgX4wDQF6mRzCMDqhTtrIH_h7nXPUbZsL0vUk3VnmRR-ANnEhCV_drGn9GVt3hQHTL_fCENGhSxcR6_uqmcyoF0C4PgCbdnzsAB5Q",
                "width": 3264
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106202766945954416958/photos\">Hannah A. Song</a>"
                ],
                "photo_reference": "CmRaAAAA0uCgHzFN3AS9WQZKVVdoCDiGN3f99VV4H5XjZaQAh6iYagF1cD5HeRnDU_i4eXVBkf6W08MxDRgxnfjSL5FZHrjsddaVjJCbIoHI14KGEeW0xlRa3CXRetsIXHGO35FgEhB9yD7HbZ1Fo9dL46TcklB2GhTqXaTUUeulN4EbdVK4Xx1VTmrS_Q",
                "width": 5312
            },
            {
                "height": 2268,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108072047350367555994/photos\">Jason Kang</a>"
                ],
                "photo_reference": "CmRaAAAAQWtus5ueXmmcT2t2jUTVxx_g7OOp99CzIIaVoEIjM8TEeLj31KTg5jefp_D-RISgRt0BIVmwjPMHghwx9QsUEGWpC-wq4JpT3o-hB1DSGkOggI3CLv8j4eWWx73IumbGEhCTrnmrnhtOrxVgwy79jfOCGhT-gKdP2YGE2KmPi66YaTrbI0RWBw",
                "width": 4032
            }
        ],
        "types": [
            "food",
            "store",
            "point_of_interest",
            "establishment"
        ],
        "site": "https://m.facebook.com/somisomiicecream/#!/somisomiicecream/",
        "place_id": "ChIJH1mNvpq4woARJgxKjSz3HGo"
    },
    "Scoops": {
        "name": "Scoops",
        "hours": {
            "open_now": false,
            "periods": [
                {
                    "close": {
                        "day": 0,
                        "time": "1800"
                    },
                    "open": {
                        "day": 0,
                        "time": "1300"
                    }
                },
                {
                    "close": {
                        "day": 1,
                        "time": "2200"
                    },
                    "open": {
                        "day": 1,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "2200"
                    },
                    "open": {
                        "day": 2,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "2200"
                    },
                    "open": {
                        "day": 3,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "2200"
                    },
                    "open": {
                        "day": 4,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "2200"
                    },
                    "open": {
                        "day": 5,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "2200"
                    },
                    "open": {
                        "day": 6,
                        "time": "1200"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 12:00 – 10:00 PM",
                "Tuesday: 12:00 – 10:00 PM",
                "Wednesday: 12:00 – 10:00 PM",
                "Thursday: 12:00 – 10:00 PM",
                "Friday: 12:00 – 10:00 PM",
                "Saturday: 12:00 – 10:00 PM",
                "Sunday: 1:00 – 6:00 PM"
            ]
        },
        "address": "712 N Heliotrope Dr, Los Angeles, CA 90029, USA",
        "phone": "(323) 906-2649",
        "coords": {
            "lat": 34.0840399,
            "lng": -118.294817
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
        "photos": [
            {
                "height": 3088,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/115623616059859182708/photos\">Jeff</a>"
                ],
                "photo_reference": "CmRaAAAAFaKZyIPTL7VG-7CTbtS8s-rYR_b11sPZjLiFzlGbE-I9BnJbkinUr-OjNv45BWkR--_vnVjd4w34vmdWVmdJpxPHj6heTgZ0iwfU3BweNYGqkakg1oJuGtbl_OqbtRV9EhAaho0qdMoLcDSz05F6eIvHGhT4f7aSWsXV2rIjLWT6KLsO8MmCVg",
                "width": 4160
            },
            {
                "height": 3338,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100531492565256616099/photos\">Tatsuya Ouchi</a>"
                ],
                "photo_reference": "CmRaAAAAelwjRbJgOb7T-2bbCpxvbhoNrXWW8ImFeC7XEyVGoZI9hyH1uKxWcrRFEzjqy9h9xEWL5rS2ey_BJc7X9I8m6DgTQll20vY5Imoe1k3BebeO_AkvwjSZ-IqH5QHHTTHxEhAzDgCq1NAnIXOKYZyX0w25GhTgEBEGJpKmuBeSO5pby4IDpQhDUg",
                "width": 5009
            },
            {
                "height": 2168,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116789692419265580726/photos\">Paul Roth</a>"
                ],
                "photo_reference": "CmReAAAAUHjw6WNvAxapsTnhshhWZKXDQ3wHNFOgZUZ3RM6a1VJknPZmJzWEvbq7B01a5COb47QYrgOJJxMYruOtQSW4Z-rcNxRtJc8g6q89CqxMUojw62amLO78wJ_DdFH_Z-RQEhBwC8z4xWyqbtUXpwSR_uQLGhRO5LuORhRM_-ApR3rGH574yqIZjA",
                "width": 3824
            },
            {
                "height": 2992,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116789692419265580726/photos\">Paul Roth</a>"
                ],
                "photo_reference": "CmReAAAAZCG1ztP8CmIKzIjbjbhiUgHBajjWpQXETT5zVSKDehOrzn-dLZysUxY25D-eDvQ0TJW6ENEWCiR91ZOhJ9xMYYTSW4KrXOfryRTXoV0O1RaDJ4K4tUmgRx6gQ947_WvoEhD3lMX0LORrWAEIBYvaKoXxGhR-CVRzTdKk_rihW_xPzolbpJWH9w",
                "width": 4000
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105564713069844110350/photos\">Richard Schave</a>"
                ],
                "photo_reference": "CmRaAAAAcg3UzOHqTHBTx90O6oYc6VTiNhvT0w21q6SO9UmL3xZserlAk-tADcQ-YLjGiYHcoYmd2NqAI3wSuyzCaBeMYvQnT8bx4zWCBp01QeFEsrz7TKUuee_0WTzgqUuiZWJjEhCDgFRjTB65CUMDsciVBVChGhT_D716gfwuUJENquKVEfIX0e2EUg",
                "width": 4032
            },
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/117028208932932309488/photos\">Kirk Tsonos</a>"
                ],
                "photo_reference": "CmRaAAAAwBpSH69mxe90OghirO0SWFkiKlV1pq96UfhsL4TsvMNF9W43THnj0_k8QiZILkNa9l-QMSpkzhkTwnvxfDx60J4r3tV1fsduOEaST9xxKcEtXI-tdRlV3aP7A83g4aZtEhCnxBOBLd6SNuDR5InatOwwGhQASKMthquLkNzrqAepwmJDJAXd6g",
                "width": 3024
            },
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/117028208932932309488/photos\">Kirk Tsonos</a>"
                ],
                "photo_reference": "CmRaAAAA4i0w5Yf1VhLemS-vSigaMZrXaphubSFVP20IU1afWaVWM-W4l2DR-zz-bBWre8Mk2q2E8NFIoje9_r4WIe7WOCP4mEYB7h893fOhAxS6Sw6eMx9L38EaAXagvosftL-QEhCvXe6NJnJ3glP8V2c7ZeyWGhQwSL_RoQWugyMspXrLuI_-q5O99A",
                "width": 3024
            },
            {
                "height": 2448,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103254211878034006003/photos\">ezekiel gentle</a>"
                ],
                "photo_reference": "CmRaAAAAonvNCl7dG8zEaggl7g6LZ1Ey5z9pGiovI9j6emYEUOxpueLVEqdTtliK_uTzS6FMpCCb2xXjSdj61UFZUROTb39V9T3WS-5lpXlQAbpDztR6dW4l7dN4v6OhDAE2iHKJEhC4I0cyEW6ghNwmLuEY2736GhTqtixM3IOu8jz4hyXk4s8nJYhaSg",
                "width": 3264
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106730499149197870813/photos\">Eric Soldevilla</a>"
                ],
                "photo_reference": "CmRaAAAATwjo5xIlV0nHYmiQvYlRO0Kc6aIO9MDDXJEIG-nyBGTiuHeuCkxmN4r7f65LT3mUFntKhq4Kw-GM9jah402a2wpLPBoqtv7Pf2L4JbO475IBquzGlVBh0aov9laZ5dKCEhDzMw91D-w1FTDLYCNBXic4GhQfr3GdWwwHhpDjdaDjONtH2_21aw",
                "width": 5312
            },
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/117028208932932309488/photos\">Kirk Tsonos</a>"
                ],
                "photo_reference": "CmRaAAAA_i4lLqODhFU6A0bQCqnJwPrNQ3P6nyRihC1SkMrxpWtctQA1z3YGt2q3EQYHqha9pwb_FMzXnlbLPbwlWDuARemSjV32SmZS64peMer5kPBDzl3BCEhfhSZHhzsVYktvEhCGjn7jewuMlwRELudtbXO8GhRro3Bwc07AZkwPwSKm0nDi7Ri4gw",
                "width": 3024
            }
        ],
        "types": [
            "food",
            "store",
            "point_of_interest",
            "establishment"
        ],
        "place_id": "ChIJQVRyl1nHwoARKXxtq_4-13E"
    },
    "Cauldron Ice Cream": {
        "name": "Cauldron Ice Cream",
        "hours": {
            "open_now": false,
            "periods": [
                {
                    "close": {
                        "day": 0,
                        "time": "2200"
                    },
                    "open": {
                        "day": 0,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 1,
                        "time": "2200"
                    },
                    "open": {
                        "day": 1,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "2200"
                    },
                    "open": {
                        "day": 3,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "2200"
                    },
                    "open": {
                        "day": 4,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "2300"
                    },
                    "open": {
                        "day": 5,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "2300"
                    },
                    "open": {
                        "day": 6,
                        "time": "1200"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 12:00 – 10:00 PM",
                "Tuesday: Closed",
                "Wednesday: 12:00 – 10:00 PM",
                "Thursday: 12:00 – 10:00 PM",
                "Friday: 12:00 – 11:00 PM",
                "Saturday: 12:00 – 11:00 PM",
                "Sunday: 12:00 – 10:00 PM"
            ]
        },
        "address": "1421 W MacArthur Blvd F, Santa Ana, CA 92704, USA",
        "phone": "(657) 245-3442",
        "coords": {
            "lat": 33.7005444,
            "lng": -117.8876486
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
        "photos": [
            {
                "height": 2448,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/115141074583486494293/photos\">Shirley Doo</a>"
                ],
                "photo_reference": "CmRaAAAA4WgdQX4Msoa24HHUZ-w0OVIT1ZQVrwtd__9X1Ud5BccvweSJN29l67O1RCm0rYC2Fx5c3OZfMgghcGh8mt_O6ztSwESbcICZIq9P4cuwjksWCFDc_GOMAX22Qq7hFa7tEhBRJ-YJOCOcwVAVYY-5DHUaGhSzfzvKCRy5388ZiteaFAVZtTjlNg",
                "width": 3264
            },
            {
                "height": 3480,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116773984442199031040/photos\">Satya Patel</a>"
                ],
                "photo_reference": "CmRaAAAAJ_3WVjvCYjyeniAa2-X4ZQL3ZVqqZ-Jp3qVsZw5FR0ATjJX9ne0oQ479D-E2OGlYVg4Yaip4xBBKF7ioXEYEAhUFUahtMCuGL2POWxQKCxOnRl9rN2FjxsA5a9DVAsmYEhAr8Myzxst3btLrz08gLRsKGhQ-SOMtx-PlyXwoNnrCFyqwesJx0w",
                "width": 4640
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/109563745458864385727/photos\">Jonathan Bromley</a>"
                ],
                "photo_reference": "CmRaAAAA82XD-fHxLADxNZJXoe4bAaV2_hS1l0LRFUpadGvcbi8rb4R-SFDbQKvV-JJ4OTxweLYkZZKdULPrxyFhjkLHzdAIk6pZpBDP6F0TpzJs0Wobv91GcDrGD9HLI1-ycHe5EhB4GeaDEND70E6C5s2oywvdGhTCWTvblrMp23tmf-iGFbYJTmArvg",
                "width": 4032
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105122631460893829284/photos\">Mai Hoàng Anh</a>"
                ],
                "photo_reference": "CmRaAAAApEDQBjImPbghkSYDE_pTTkQI4P6Q60KTTJYsqWXw92WAqCWpLViSMxaQ-bl7blBvZZTQ3inYK-M318RunN8TNMQj-PCv5ZO0NIDlDg6uGAgVtAvxSM2po08AH90mgelVEhCc_vTAOL7D0Ulvj1xr8myLGhTIngNuH60z1CI6aUQPykSQUorHGQ",
                "width": 5312
            },
            {
                "height": 3480,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113154854110157528061/photos\">Christopher Chung</a>"
                ],
                "photo_reference": "CmRaAAAApyscyqbsqchsAvpcOmI1iXvHyQNYIL3qACAk_sFx3erJ55Ni-OARKeQ7_BA9-1RNIRSVABX70SXLfBCJUdBM0OSB6YQ5ldzYzkbtp5mdObYVsZq80LynsfUO2pVbISxcEhBhwkfr4jxzF7QdyfVAeyYJGhTfx-kzKt5ufhgQVTJia2zgyu2bgQ",
                "width": 4640
            },
            {
                "height": 1836,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/110912819161767915959/photos\">myung ji kim</a>"
                ],
                "photo_reference": "CmRaAAAARXOBfcvC_wdpArTRhthQRgqvHlyX6ByP_FKuCVvTmnHNYaU7IY0uLbZBCOe1DP7mDFut_28Ni-a-UrjaWf8niOOeHNs6GbBCnP1JKGbL3Ply--YoVJga_dyOZD9nTAbDEhCpJ88WIdSvsAUg9lvC6VsrGhS9Jl8G8dTagLhh1Glxwi9zIdRuVQ",
                "width": 3264
            },
            {
                "height": 1836,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105844100817715537329/photos\">Clarence Ho</a>"
                ],
                "photo_reference": "CmRaAAAAhEjN7lmCdhCGRt5ICJ9TD1IcY705pnbPEhSmCJsC6DfIwcKrIWygz6jWwD6Wb-q6g2n4MjlQRxFwu8KO1vvRg_iOAizusGvaCF-Y25qN6MjCVa4DIIrR4DMpHIyx2qBQEhCUGAfcfmref3-kvIiQX1EYGhQRDRD8d48xZl6IfS30fWRvENR8vw",
                "width": 3264
            },
            {
                "height": 3464,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/117029730103890669454/photos\">amy h</a>"
                ],
                "photo_reference": "CmRaAAAAYRzIFC9ZjgNh8SPmc4I5n9zbUc-mz7Kx0kCQTWPoun16CPw0FVHPwxgF5rZqUur3vjKQWty2K22Uj6dxySvm46MJi-3fs18Mw9KAXQ09WWizKM_ZWSMp6c26H6inLsgJEhBNdM3yCNbwNxipAv9PXFQhGhRHIotpC2ASfdXAE7wwny6pGTDohw",
                "width": 4618
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/109332782587919747840/photos\">Alejandro Avalos</a>"
                ],
                "photo_reference": "CmRaAAAAoyxvIuuS2ddfbM3sIhGCxvTvHuzq1JY5jZWAkeUQ6AQBVnu2ufoXnj72h9googliKBKfSgIJMnXokO6GRZxcaAd8lzDBuKA8ZNRqJWCYxrEGEIwJg95uA3YCLr-x6XVdEhCVBSd8Ybaa2Gcn2MrjikkiGhQ88WWWNJGXwhWuZ0CbkaDVw8QFJw",
                "width": 4032
            },
            {
                "height": 3120,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106108051987033257816/photos\">David Kern</a>"
                ],
                "photo_reference": "CmRaAAAA3ncNi7br0nGcY07rIiNWhL19aH_KjRB6x4DLVjG4tC9hNzF-oLlbUa-vRJWyPgT22FNwtGl7pAxN5PynbK3UOuj3g1hBAD50-V-bynIxx3bo3IGmycf55jFCDS1ZxbSXEhDnA4bv9MmX8ZBxVam9NzFjGhQCdYLTXbvqzxV-OycdbAbgIg3Fgw",
                "width": 4160
            }
        ],
        "types": [
            "food",
            "store",
            "point_of_interest",
            "establishment"
        ],
        "site": "http://www.cauldronicecream.com/",
        "place_id": "ChIJTZ0UpS3f3IARfEQhMp7guRU"
    },
    "Beau bar coffee & tea": {
        "name": "Beau bar coffee & tea",
        "hours": {
            "open_now": false,
            "periods": [
                {
                    "close": {
                        "day": 0,
                        "time": "2300"
                    },
                    "open": {
                        "day": 0,
                        "time": "1000"
                    }
                },
                {
                    "close": {
                        "day": 1,
                        "time": "2300"
                    },
                    "open": {
                        "day": 1,
                        "time": "0700"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "2300"
                    },
                    "open": {
                        "day": 2,
                        "time": "0700"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "2300"
                    },
                    "open": {
                        "day": 3,
                        "time": "0700"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "2300"
                    },
                    "open": {
                        "day": 4,
                        "time": "0700"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "2300"
                    },
                    "open": {
                        "day": 5,
                        "time": "0700"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "2300"
                    },
                    "open": {
                        "day": 6,
                        "time": "1000"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 7:00 AM – 11:00 PM",
                "Tuesday: 7:00 AM – 11:00 PM",
                "Wednesday: 7:00 AM – 11:00 PM",
                "Thursday: 7:00 AM – 11:00 PM",
                "Friday: 7:00 AM – 11:00 PM",
                "Saturday: 10:00 AM – 11:00 PM",
                "Sunday: 10:00 AM – 11:00 PM"
            ]
        },
        "address": "3300 W 6th St #4, Los Angeles, CA 90020, USA",
        "phone": "(213) 382-8482",
        "coords": {
            "lat": 34.06341099999999,
            "lng": -118.2943457
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
        "photos": [
            {
                "height": 4618,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/110893614992510701273/photos\">Robin Whang</a>"
                ],
                "photo_reference": "CmRaAAAABOMIVDZoYoJp3xGi-15Cy4DWoiinvB8YNDVu38O_1Y3H-R_AnC6L7scTALqDatHhDqxtQc2LYRtPIWG8tEeB_GbEpEYvdOXzYWFqaCydSeCgwzMxF8hgHQTNDM0y3lxPEhCokSGf-2FJaOZPv-UEuDAYGhTpFgGBWiOgrsx8GYpKw0HyzAZOQQ",
                "width": 3464
            },
            {
                "height": 5344,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/110893614992510701273/photos\">Robin Whang</a>"
                ],
                "photo_reference": "CmRaAAAALt9os9FeySD5W5Qs8ohotUI_Tmn57LKn4SHcrdq8Ul8Nls9lMHKdLnueuef7NCisK7ClS3t2NEHl_G1MOmWfFoQ2H0VAVVnY0zWfUCIETNp7mCWE7fn0XJSAFKMvo04GEhD4HoQL4nKK-dodpBHnUtIMGhRrKuVDP7rKRa6OP6--03UOOrDWvQ",
                "width": 4008
            },
            {
                "height": 5312,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/112121123976005545394/photos\">Kevin Hernandez</a>"
                ],
                "photo_reference": "CmRaAAAAEjTOhH5nM3TW9rAedQhmvww6bYwIdtjzveAbgvl5YIhrNSax4OuMnA99USRZf8kIE6yUeZi1OWv3JSagilnOp25g7VEGXNkQavJCXJjyd7w3_AcLCAWITZLIE0L3Ha9REhDqriDEzYPPY3jhBtmYW6tdGhRmsvqkBSZzlwSAt-07vZWtD7WkDQ",
                "width": 2988
            }
        ],
        "types": [
            "cafe",
            "food",
            "store",
            "point_of_interest",
            "establishment"
        ],
        "place_id": "ChIJMRtkj3zHwoARdjPGFzK864U"
    },
    "Native Foods Cafe": {
        "name": "Native Foods Cafe",
        "hours": {
            "open_now": false,
            "periods": [
                {
                    "close": {
                        "day": 0,
                        "time": "2200"
                    },
                    "open": {
                        "day": 0,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 1,
                        "time": "2200"
                    },
                    "open": {
                        "day": 1,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "2200"
                    },
                    "open": {
                        "day": 2,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "2200"
                    },
                    "open": {
                        "day": 3,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "2200"
                    },
                    "open": {
                        "day": 4,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "2200"
                    },
                    "open": {
                        "day": 5,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "2200"
                    },
                    "open": {
                        "day": 6,
                        "time": "1100"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 11:00 AM – 10:00 PM",
                "Tuesday: 11:00 AM – 10:00 PM",
                "Wednesday: 11:00 AM – 10:00 PM",
                "Thursday: 11:00 AM – 10:00 PM",
                "Friday: 11:00 AM – 10:00 PM",
                "Saturday: 11:00 AM – 10:00 PM",
                "Sunday: 11:00 AM – 10:00 PM"
            ]
        },
        "address": "1114 Gayley Ave, Los Angeles, CA 90024, USA",
        "phone": "(310) 209-1055",
        "coords": {
            "lat": 34.0598901,
            "lng": -118.4459704
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "photos": [
            {
                "height": 817,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108275009231839413289/photos\">Native Foods Cafe</a>"
                ],
                "photo_reference": "CmRaAAAAT56FMnIuZpfwTsmiTgrC-g72LaX0XgWLjnvgIihTbz_HGx52p96Dyk89JS1a4TNwl6E696AK0N67ou5TxV6WevPkHR4RXMqAdx0658645KKvYzIYgExnVCru_lfnM9npEhBVnD-u9JTlcbCTF6Ti08d5GhSB90SqeY8VfVY0Ak-2XjbjN95eZA",
                "width": 1072
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111965482529745116005/photos\">Jason San</a>"
                ],
                "photo_reference": "CmRaAAAA0tKehAG1nOzqF8g6pu-ApkLXvMz0VDIxtcLUFeTRFfChcrkeeBoXfUuG6o31wLhZM8AJuq5y19vmI5ZCnjJpk-BRp2oGW_0g9d14L9wLZ97e7LIibxD9Xe_0Tn23BNiqEhARY9Os0pUEHyTFaRNwU5EfGhSlp9IPoeXtkaBTGON6uJxGxP26Rw",
                "width": 4032
            },
            {
                "height": 3006,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114277958925458668798/photos\">Chris Sabre</a>"
                ],
                "photo_reference": "CmRaAAAAS-BXc3fIgtzGZ2ziJxQ2IHSIAFuaLJZMXDRKpSUVlhIaRs387pjSr4GXMn7ED2EHrVzHP6ofShSBByOdvypuXts4ihaLVbM15twcBy5tuoksMgzsaSmpFablnsaFaa0pEhB26Qe9-CgqK60B_fDPec4VGhQPb77DA5-QG-1TCDmfbEWy-_JCcg",
                "width": 5344
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108697868579889588060/photos\">Grecia Vargas</a>"
                ],
                "photo_reference": "CmRaAAAAUqg-TIOvuF8UOcZ7q1xN0P3Ot97LZ8GKRe8bfbWVEqsgGGpAehH_FJPrv3ntKnRfCb8KN_afaxMO57z-ZTLu0r-X7fL7lQyt3k_b0VLuEYfgYJxkBK5Zag93u950cyuLEhBioTLfpk-cdh-D1KPMn0UJGhQIxK5_h6Z6BbAxV-sFUhz1lxFZNg",
                "width": 5312
            },
            {
                "height": 3088,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101490775398737773772/photos\">Jacob Chow</a>"
                ],
                "photo_reference": "CmRaAAAA6NlEIqxwsQ55k-s8NRGnMHrwyQ6dV52_hMlR9xDK1CJVuhzyD7BjzUqrBRr0VRQo7KJOyzdIw0U6bmZP6UOTr1QTIvYn4m53a7-Pf3UPW3GP68EAADPDtSbjvgGjLhf8EhBwewhMjBGR178d0INthcaBGhSu0jvx6ULHLJsnL_PcG5B96M1AHA",
                "width": 4160
            },
            {
                "height": 2560,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113835816657896772197/photos\">Cecilia Marcial</a>"
                ],
                "photo_reference": "CmRaAAAAJGHH_4OsgVocL7mj_rU775z2Ol_TnwWsMdzxXtC10oHfgiuWI1VullJt7G7-len7WYzdnOV14NaK5_Shac8jDOcCT8VlbnG7TDmBZ0cw_W5rUXnzOF4JTUgq7D3EED_dEhBAbrA3SVoq_aa83ig1gWerGhRHWG_k155r74ulMCclA1ojp5b0-g",
                "width": 1440
            },
            {
                "height": 2160,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111461470171219117999/photos\">Ciarán McFadden</a>"
                ],
                "photo_reference": "CmRaAAAAovBEQ65Xtw6qkgJlMIuFC2Z26M8PvUEkYL31eR7ec0IKvp_JCc3D2G_v3bEYqvOK_5NbbgNednlAvzDOm46P3vsIvo0crofTsDFLLYpd704mkd32_0ALowowA6ybxfofEhB_ODsHClQGTN0DG7n95Hw2GhSMbpaG7u8JIcXmuhno3icexK1B5w",
                "width": 3840
            },
            {
                "height": 1365,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108275009231839413289/photos\">Native Foods Cafe</a>"
                ],
                "photo_reference": "CmRaAAAAXiy3gusj_Zg39_e-BADxhYpd0v4z5vuSzTqSZs8aZe2K2n3-aDK6jzjGCJZkJV5Yw6F4isCbqEdMv9KVUswyW2dZuiELqoe9j56WIpkVSRpULYgD3hzTzdK30b_HoyNKEhBsEUl21kP_lHtNcd14lzK5GhQejq8j7E8K6WdBZ1NEh61Q2oquIQ",
                "width": 2048
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/117809641592463046932/photos\">Jonathan Canter</a>"
                ],
                "photo_reference": "CmRaAAAAbcbpuYROjiPXl-jOz5X_VMCmyNi4djOt7txz7QWoDCQv5O30RtYOieUyxdayPB3-iaZFJbpeWa-2189lOZoisOVWPphfEIHUH0SR_xfbTtRQ9KTIGcQj-IRLaFcMPQX3EhAgh2aelHuMW8PLtHpizflnGhTxzbHYeneUj5AfUlbHcJ5IZHF2fg",
                "width": 4032
            },
            {
                "height": 1361,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108275009231839413289/photos\">Native Foods Cafe</a>"
                ],
                "photo_reference": "CmRaAAAAeH2F5kt-y02jNKA12ko3ePw0NoGXmJVfHW-3fttCvE8fQz0BV5IFjzWW6eM5C9FK0u0d9DiiOB2hAqLqdQvVKawGt_FETzgFLnk02FjHDbYDKIcEfzofgJ3WgRYScVhxEhCoAvNGaovTUSyYsfCLccskGhTwlp1ytF288pYJQN2WD_hWMt-mkw",
                "width": 2048
            }
        ],
        "types": [
            "meal_takeaway",
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "site": "https://www.nativefoods.com/",
        "place_id": "ChIJK3ByJIK8woAR5TgqOE-ON7I"
    },
    "Choice Music": {
        "name": "Choice Music",
        "hours": {
            "open_now": false,
            "periods": [
                {
                    "close": {
                        "day": 0,
                        "time": "2000"
                    },
                    "open": {
                        "day": 0,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 1,
                        "time": "2000"
                    },
                    "open": {
                        "day": 1,
                        "time": "1000"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "2000"
                    },
                    "open": {
                        "day": 2,
                        "time": "1000"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "2000"
                    },
                    "open": {
                        "day": 3,
                        "time": "1000"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "2000"
                    },
                    "open": {
                        "day": 4,
                        "time": "1000"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "2000"
                    },
                    "open": {
                        "day": 5,
                        "time": "1000"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "2000"
                    },
                    "open": {
                        "day": 6,
                        "time": "1000"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 10:00 AM – 8:00 PM",
                "Tuesday: 10:00 AM – 8:00 PM",
                "Wednesday: 10:00 AM – 8:00 PM",
                "Thursday: 10:00 AM – 8:00 PM",
                "Friday: 10:00 AM – 8:00 PM",
                "Saturday: 10:00 AM – 8:00 PM",
                "Sunday: 11:00 AM – 8:00 PM"
            ]
        },
        "address": "3250 W Olympic Blvd, Los Angeles, CA 90006, USA",
        "phone": "(323) 373-0008",
        "coords": {
            "lat": 34.0522327,
            "lng": -118.3085165
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
        "photos": [
            {
                "height": 1080,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103716430586875565850/photos\">Melissa Reyna</a>"
                ],
                "photo_reference": "CmRaAAAA2cCR4OLu44Vv2Rw_uxNmmyrpy_UdK47ykemD4DxXB2AVi91T95fFIbdzafJPbQSQEchM9CQxXZl3IxGErQVb3y0g2Xmb1yKZ-pgHv7UucU35udOQPHBuFHOrBroegme5EhCCrDNp59hZsquc_lIabHdhGhRD4vt8c5ZE2RabpZDR9fUA7PuelA",
                "width": 1080
            },
            {
                "height": 5312,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103716430586875565850/photos\">Melissa Reyna</a>"
                ],
                "photo_reference": "CmRaAAAA3OAl1VroHjkbJ0j5wVH1kidnG-sQ-6l7K1u9CYtvXoMmkdlE_plOtXKp3Y923AqdvWtFAfWW5b8psRR9eB_uPwnLJZzxzY7ObCmIWDzr6ZIqwZsdjDxE10nh3xGF59r3EhAnopnvYgo73ZU7KGNhCv5wGhTBkFRmPrbo1lN2Cb0MwdJNtB3VbA",
                "width": 2988
            },
            {
                "height": 5312,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103716430586875565850/photos\">Melissa Reyna</a>"
                ],
                "photo_reference": "CmRaAAAA4jD3pb4fcyNTlhL7ZUEtbIqPySSLHCkDjtfP-I0DnMM6S4rdtSrnZ6A8CfTmuzPpQJPxE7WCoVB7xsIsVZJCE18JkT0spARTzd5CbgVK4T2KNObqaiy5seanTniAdha7EhAKgoeIlAKW_qgiTaT5G2z1GhQR9QZZGP4Z11ADHcnbVsFjPml9yw",
                "width": 2988
            },
            {
                "height": 1136,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/117986454369770157175/photos\">ll DARK SUGAR ll</a>"
                ],
                "photo_reference": "CmRaAAAAVKMVXL0AGYIt3yIyTlMKVXbr1ryM45hlnNiTI4W1mfmU-wOE8n6XfI2Um1Zn9hcKaCehoIUTn4mOLuLDvCRrZbJUIRNw8H1gSenWWcppPQyLjIsDAO8xFZwrnLg9z6B4EhD7-bYYNpOyyVUxloHMhFBTGhQlzJRhy9x7bZL6V_NWh6mvIjhY3A",
                "width": 640
            },
            {
                "height": 5312,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103716430586875565850/photos\">Melissa Reyna</a>"
                ],
                "photo_reference": "CmRaAAAAjG2zyWsrd7rrgoJTBu8iGNWMZyLw5dkU_yciC5hWDYXRgKi_NgBY7gdIkggXNrk8saHu7iXL3yTjcgV0LVVFyYhJNU2hgQO9kblXCn2WNsN6pRCXzLIpvtPIn0eGkqEIEhA5aKUitKWAkjV_NsWGqcnVGhRDD8lyPIrOnWXkaUSeoUmgwnN0Mw",
                "width": 2988
            }
        ],
        "types": [
            "store",
            "point_of_interest",
            "establishment"
        ],
        "site": "http://www.choicemusicla.com/",
        "place_id": "ChIJKRRLeoe4woARfYnMclf5PSc"
    },
    "Red Castle Korean BBQ": {
        "name": "Red Castle Korean BBQ",
        "hours": {
            "open_now": false,
            "periods": [
                {
                    "close": {
                        "day": 0,
                        "time": "2300"
                    },
                    "open": {
                        "day": 0,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 1,
                        "time": "2300"
                    },
                    "open": {
                        "day": 1,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "2300"
                    },
                    "open": {
                        "day": 2,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "2300"
                    },
                    "open": {
                        "day": 3,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "2300"
                    },
                    "open": {
                        "day": 4,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "2300"
                    },
                    "open": {
                        "day": 5,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "2300"
                    },
                    "open": {
                        "day": 6,
                        "time": "1100"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 11:00 AM – 11:00 PM",
                "Tuesday: 11:00 AM – 11:00 PM",
                "Wednesday: 11:00 AM – 11:00 PM",
                "Thursday: 11:00 AM – 11:00 PM",
                "Friday: 11:00 AM – 11:00 PM",
                "Saturday: 11:00 AM – 11:00 PM",
                "Sunday: 11:00 AM – 11:00 PM"
            ]
        },
        "address": "18311 Colima Rd, Rowland Heights, CA 91748, USA",
        "phone": "(626) 964-9595",
        "coords": {
            "lat": 33.9895543,
            "lng": -117.9049569
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "photos": [
            {
                "height": 1920,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100288188787727204527/photos\">Tan Sudono</a>"
                ],
                "photo_reference": "CmRaAAAAN2f4AwLcgOULWCrSK8v6i-s_YKQT0IY07dw95H2DNo4hkLnMWQE_GW6nGerUdiFXwWL0rN2dLPEMClYn7v7KGNO3QxFzwpnZg9hk9UEDHoWdtVc0McqPsaHNlsVwbjNEEhBG1vWn7dYUEBG3U7FpFYxDGhQ_msDV5RgXn9skuaN52DRUpJlCAQ",
                "width": 2560
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111880574398596386118/photos\">Daniel Cevello</a>"
                ],
                "photo_reference": "CmRaAAAAjGH4mt1A7Jb3CLvQJR5ucoDicbiBao2jah1_baer9eK1a5BqZ1Pwpo-WXzyFddq2e0q_PpGkXc79rz7-VqMsL6dlKepcNqKqye_yEonqJ_rD6VbFdLT-xpjV_wwQRnkKEhCunnCgK3Oph1W4i4FP2393GhR576MNeE-3wJQLhZSxxLRrj5IPQw",
                "width": 4032
            },
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108633969370503579397/photos\">w0bzzy</a>"
                ],
                "photo_reference": "CmRaAAAAfSNxW7jkTHsuO6S2aCobBsrn-xG6eEoVvkgggSV8Z82gw30JHryt18Yhqh6x133amAS84BpGTAhunuxgNCwxFLJbdJG-vsst1njjwbtUllVxbeHCSyoZmUtWNKuVUzFYEhD5K8sIlkjhe81801f4qCvwGhR_Tuyiig4qjSe8JyX94ANbJKAMhw",
                "width": 3024
            },
            {
                "height": 3036,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/115506534614099817761/photos\">ppzzdg C</a>"
                ],
                "photo_reference": "CmRaAAAAqbdpQOs017Khu-siqiIY7_vDsFtFJnSdGNvsije2M_HPZA15HnneYQHRlJCGwRhH9MAOsoTaP7qJUBQvIVnXS2E8DJVnByaAPUff1NzN0sEP-q_iUk8pGdukUg0sqiOXEhD04esrG9gNfI1BCC0P-Uw6GhRey_MTRfpaeq-ZGyv5sis-rtigPA",
                "width": 4048
            },
            {
                "height": 2448,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100288188787727204527/photos\">Tan Sudono</a>"
                ],
                "photo_reference": "CmRaAAAAKkb0dAFHeQfNDyY4uuprC77vdIxI2syW_3uL_3aokRiGiO8kn96m8-rsNotHekdKiNIeG87IlCmOTUWRD3k_IFVop83uO15P37k84jgU2fzEVY4eQ7nX-1gYuQxMyMNlEhBtvA0GeHQtceV2QiLL3pu5GhQduONQ03ZEacMsr1SYMPzZiKiKog",
                "width": 3264
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111940947521652496730/photos\">sergio reyes</a>"
                ],
                "photo_reference": "CmRaAAAAqO9BN1PWvfOysPBqKsQJR3KDGpQo4WxKmJnyRaKjmznZcVQX8Z6E8iUEHB1MCvO9tLWk5eDlkBXdnWgq0L8JA3tuEJ7a9mq_uDB_d1GE4lpt4CAEWPd-LIke_Rhg1lAAEhAibHeXoKol5BA8yDhjTBZ5GhSbMKooEXv45o4zdrflajrfeomzBw",
                "width": 5312
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103917060746421096701/photos\">Joseph Lin</a>"
                ],
                "photo_reference": "CmRaAAAAJVYgG7YWuUu3YvUGxjVlYCDcmrHHUMyOeu4t7VVQ6WnWH0JHZnEiIxmsTPDfXn6WYnBaCVDELut-F50hJIFIUSdpGPMRVGUcMtdupTB2EE6o4JwvrSgcfqInhfqM8UgzEhB3kaUWTbxqzbSv6EqSCA_1GhQHxt2KqUatZQv8cAonW6MSiH0VvA",
                "width": 5312
            },
            {
                "height": 4608,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106904287781673496211/photos\">Scott Lu</a>"
                ],
                "photo_reference": "CmRaAAAA1KLBE4F6EldUul9LqRUfKW4DblTn27AvtFay8VfoGH4AnheMb6V-htudvRt0i_f3tth6NYgruxcA6d9TJOsfJBVkayOkxWUBcFod2pXV3s69Frb2fi6c_-7-S_qsmnv-EhCJxPEoj7slGe6CisU30wZPGhTvlTevIKVBnIBkt7xtHPbDdw1zeg",
                "width": 3456
            },
            {
                "height": 960,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/118342574036020965427/photos\">Josue Barragan</a>"
                ],
                "photo_reference": "CmRaAAAAOKnVYd5zecv_dKWMjhQDwk-9zu8vMU_Uw0HbAdlMH70bYrO30HG95N3FXZ3YJsTDDxu0ctzScb3itz7vxMOEPK5xzX41Fj4_8BWC-P6AHf_FZ-Ypd-8QAyEigjIUnoHZEhCvROoqzKNMjs7BIk4QNU_UGhSBQBqzQFePZhv_o1qBhDZl-P-iew",
                "width": 720
            },
            {
                "height": 3456,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105306129695761285398/photos\">Will Wang</a>"
                ],
                "photo_reference": "CmRaAAAAqX46DXGgjHFz3rUzoBvHCekq-gIW7vr4Psh_XHjuPAlxx_pp8Vs2-D5jIjyXu3gOxQ6d9stU-XbqeOw017XBWW2KasdkLguNb9UXlFHTm610ROcVKZ8Ls9FSbN3wiXm2EhBWPMzMw50uA0a-OcZ1zcOvGhQAmd1a2-zYXHmfpGssy9yiAwVxSg",
                "width": 4608
            }
        ],
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "site": "http://www.bulgogihousekoreanbbq.com/",
        "place_id": "ChIJP3HZxWEqw4ARPwqqBSzXVcM"
    },
    "Smorgasburg": {
        "name": "Smorgasburg",
        "hours": {
            "open_now": false,
            "periods": [
                {
                    "close": {
                        "day": 0,
                        "time": "1800"
                    },
                    "open": {
                        "day": 0,
                        "time": "1000"
                    }
                }
            ],
            "weekday_text": [
                "Monday: Closed",
                "Tuesday: Closed",
                "Wednesday: Closed",
                "Thursday: Closed",
                "Friday: Closed",
                "Saturday: Closed",
                "Sunday: 10:00 AM – 6:00 PM"
            ]
        },
        "address": "785 Bay St, Los Angeles, CA 90021, USA",
        "phone": "(718) 928-6603",
        "coords": {
            "lat": 34.0346143,
            "lng": -118.2417116
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
        "photos": [
            {
                "height": 1365,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/102902343590369366013/photos\">Smorgasburg</a>"
                ],
                "photo_reference": "CmRaAAAAl6bOFUJ4wQabvDL5Ts0SKufqF45XVrFCLNXPPDyCXP-Qt0O2h2fJLrJtRp2Qe5qdX1wr6vfWj4iqyYvsdkbkKwOUeRVIil3gQjWWk4jQK4-jBT_wWZCyEBvTjpyy9-2fEhCD-jJFP9aTiIq77LJDzau-GhR9XEEtUOH1IrpoJzgDVfysTsxJbw",
                "width": 1368
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108545421548667474445/photos\">Jerry Soer</a>"
                ],
                "photo_reference": "CmRaAAAA10CqYxwtVE2wpMsMQrS79ozDCW5Ki9m2jKM_lo3ZdyLmAxX0GHkimT1Yg-o5-S9QgwL8q1D_HVfurCOQk3Rf8M61gz-1-MCTLEvHnwTvxYQn8t93yhEZ-PPqD9hp8rebEhA2jfcAHZVHvhdCoPuBnM8RGhS0hfBRNCqUaV6-m6ZIWQtYLk3faA",
                "width": 4032
            },
            {
                "height": 2448,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114100470580666501932/photos\">Michael DiLauro</a>"
                ],
                "photo_reference": "CmRaAAAAaZylkYphvrNPi0jf_205uNhc-smVIqW3iu0FrJujgl2XO7uita_k8hDwlDP_288HuToFk6wRsynde-jCIU5S79hRUEZPqw7pdJiB81W_wAx7WO8zz7AgrZjt-VIdlMoCEhBQ9oU7B9i-NR9zXfpXXoO2GhQbnMboqoMzNxuxeVMn8O-6MG4xEg",
                "width": 3264
            },
            {
                "height": 1920,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106358105955048679104/photos\">Michal Jackson</a>"
                ],
                "photo_reference": "CmRaAAAAjhwneWSXaZRZV2dvvcjtLluBDYUHZB9a5NOgouk2r6x0CZyE7wPDAlYJKKSFEnEJgpz1TvQ6r5Ln3GgqdlgQWE2lc8sRtSJjwZicD99b7nmF6HwcDXWDA-5PircCb1GeEhDpH-j8uWJgFpKEIBI8hc1lGhSIVc0kXmj_aZTCYyxUm6yAmLCGYA",
                "width": 1920
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108545421548667474445/photos\">Jerry Soer</a>"
                ],
                "photo_reference": "CmRaAAAAbtmZSJhdmK9ZIcopYaj8gblOXBh9d9DiIh5pGBDpYcAley6dKQu-i5MpiiN_Eyp7idk6guyjGM1TDk351PqcFcRiZbEUvvTTfyHHMvU9vZ1O4HlMlm5q13HUKgSpXuXaEhB3JqDuWvxK00KWTqM661nsGhSG_6oMVSHlPAmwnwo2qV33NLWasw",
                "width": 4032
            },
            {
                "height": 1836,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105844100817715537329/photos\">Clarence Ho</a>"
                ],
                "photo_reference": "CmRaAAAAwcJKxn0_sttaCe36EnMIFDjFYyMPNOGRiOpdvcJ59WmH8wt4CKwEsFGML3tjuRI4czq5PsBXV5gzqxWiCXSFP6-0XZWiVTNbZ0qWKxMIUuHs_h2CLcBqXbvk2G11oU3DEhBlAKCjWUPfjexJVNdcEw2PGhRs5WpGzNa4FvTt47HaZN6PL_yEPw",
                "width": 3264
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108545421548667474445/photos\">Jerry Soer</a>"
                ],
                "photo_reference": "CmRaAAAAdHKMefczbov0m2ZPQynE18XZq3GZoDNKIvpwGp_cwOQrtz2gajfZURfrj1GXq41xWuEdhgd9oVa2IXAtk9UCIijZ3GE2BpBmerbypZ5P7TXmNI8AhgwcKs-SBciQkXaiEhDDfoQ6oxq1DHgO73lSws8ZGhQ8GrFkK_PFYAYC0fhKIiTRET5N-w",
                "width": 4032
            },
            {
                "height": 2400,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/102902343590369366013/photos\">Smorgasburg</a>"
                ],
                "photo_reference": "CmRaAAAAxYb9Pi75v6gnbIoDd_nO5f1vouUFPq8GXOBS_EQnWxtUcQzeT-d7hZviqvbIOh8ZKrbNj4hYnAj2KQPqtIlz3l6gplThVSOQ8zrG9MJnyv-S_GZtSgaUmA2lmaTiKt87EhCJnEOvMTYPGAOUKHrR3gxYGhSfRvJ40pNkQ4IdnruAUCw7ltlpPA",
                "width": 3600
            },
            {
                "height": 3096,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113228804706400234215/photos\">DAVID SCHANHALS</a>"
                ],
                "photo_reference": "CmRaAAAA9DLLt1gEHUO5abMxOoFOtyfCgey7DgxFzFv2mwK3lupjf082ZKO0cr1tZzcK3LfTazQxxLNn6nDTn2Ke6sa_Nyg_O1OvhvFGQLdfFAMyDD7-D8Nt16MdFUzJ4s4Nx9R2EhDTgtt2sR-gDMVPgMFb61mPGhRNhK_Iuv8Gyw46SgiaaPRf6CEXoA",
                "width": 4128
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108545421548667474445/photos\">Jerry Soer</a>"
                ],
                "photo_reference": "CmRaAAAAIxTQMVxpZq2rgjsdUSzGYBqHkuJpigjb6igyY2qx86GvYDEcEq2zlX9x4nO2Ii-jFM35IKOHM7vbhAVsXQYAy3-RuQHUFGLoCGvcueD25No_TOX7LHrTghDumwUgpZlEEhD_2TEIU6VAQpdc9WAC6RFcGhRVet422IxyxSvI2-y55HYhRFFAlQ",
                "width": 4032
            }
        ],
        "types": [
            "point_of_interest",
            "establishment"
        ],
        "site": "http://la.smorgasburg.com/",
        "place_id": "ChIJgXwEey_GwoAR3hBKbYGk-2U"
    },
    "Sul & Beans": {
        "name": "Sul & Beans",
        "hours": {
            "open_now": false,
            "periods": [
                {
                    "close": {
                        "day": 0,
                        "time": "2200"
                    },
                    "open": {
                        "day": 0,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 1,
                        "time": "2300"
                    },
                    "open": {
                        "day": 1,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "2300"
                    },
                    "open": {
                        "day": 2,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "2300"
                    },
                    "open": {
                        "day": 3,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "2300"
                    },
                    "open": {
                        "day": 4,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "2300"
                    },
                    "open": {
                        "day": 5,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "2300"
                    },
                    "open": {
                        "day": 6,
                        "time": "1200"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 12:00 – 11:00 PM",
                "Tuesday: 12:00 – 11:00 PM",
                "Wednesday: 12:00 – 11:00 PM",
                "Thursday: 12:00 – 11:00 PM",
                "Friday: 12:00 – 11:00 PM",
                "Saturday: 12:00 – 11:00 PM",
                "Sunday: 12:00 – 10:00 PM"
            ]
        },
        "address": "621 S Western Ave #208, Los Angeles, CA 90005, USA",
        "phone": "(213) 385-5510",
        "coords": {
            "lat": 34.0628982,
            "lng": -118.3100064
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "photos": [
            {
                "height": 1536,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114595125503780367072/photos\">Glenn A</a>"
                ],
                "photo_reference": "CmRaAAAAq9JBOqNFSF71HPPwn1iZarvXsBzU5ybIP0BoDFEt1W3X-16DCil4DHW_2Cdo7p6vj2BLFM628lo6sn3_g1A2DWgsVVNZ-4akUZUZzuF6Dq95nMGLHCijdHpkocBFIW_CEhDkbznFyaU6EocakqvMdFf_GhQeHIUUgMLteN6S75hW-eGApy5KgA",
                "width": 2048
            },
            {
                "height": 2412,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/118386707297852136607/photos\">Mary Ann Alejandro</a>"
                ],
                "photo_reference": "CmRaAAAAL5Olh8MzGMoXIUD-bfshiJ-chGL7AY_Qh4UBwpTfRHTSSbFCcHfpHVzRyaEmssFNkARY0TmldZgmWzEzruWIlvUZAJfq7tsaLpxWk4b5escyIix7d7T6ypHQKYltBbF2EhBYr4kTjpqE-Iem3QPPPzvLGhQMlVqVOqoiNh9AL3ejraX5S9DlXA",
                "width": 3024
            },
            {
                "height": 2169,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100531492565256616099/photos\">Tatsuya Ouchi</a>"
                ],
                "photo_reference": "CmRaAAAAMD231Dm640Yrv9O2QJpUVCrYFZUmGeD6gAVMnMf_ectqHN-oM9r24QsXarEqr8tZC0QjsRnOGV05HlVhDcPbJbZFDFdgFpogS4ZXGF43e42GERMTnz8Oypml3HQqgq50EhAi6Im1nIte9ccBOc_Nfs2oGhQONvushs6duHPpQu5UvIC-adWZ3Q",
                "width": 3213
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101682139773669898364/photos\">Abraham Lu</a>"
                ],
                "photo_reference": "CmRaAAAAWFgPgNEALx4WUa2MRAYv5vS-xo9AoI2KGKEZ5x4MoHys78W0w19Ylo8kGq95I6hDvV0awQ9TkWdXlH40Kt6IflFV9HTq41ppIvCHiPE_JElBUby80lqx9byqALx55H4CEhDH6YJh1bTGGFReWclC7F8CGhSgk4Oj33Lr90TmBVSPaIAsiY1mYw",
                "width": 4032
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100260868071605604576/photos\">Michael Gebis</a>"
                ],
                "photo_reference": "CmRaAAAAQhxXjaqdJAcTVqjsZo-hHKl_0lNPxALjtvEIL_JPje9miZhTIajeZxL3L4FxB_c7toRli4IZva9nZ6QTNR2O5CiEnZ53mkcCcblM8FzwL3htwkM5sCpAywEdT5oaBBh0EhAH3cLGjVzvWmWkf-rd8i_oGhTR42LgQwCS9AwONh5QPi-HB6d4ag",
                "width": 4032
            },
            {
                "height": 1000,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100180586174257009514/photos\">Julia Shin</a>"
                ],
                "photo_reference": "CmRaAAAAcipw9L4r0xSHnduCbvcVRQK5wyNgiyxBU73YNCt8DviN6dMlPiP0QVJt0kO-Y9eY1lZPr5frx9ijmejXtvPohFEAlPKmtTbYsJ5n5Vs113k72LqkTwefGdqf3mGuwut0EhCnQUa6ckgGfhGUOwW6-uiMGhRkazAuNhsOH1j0qBqvNGtYCjPEOw",
                "width": 1000
            },
            {
                "height": 3000,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105980249194933280483/photos\">Edward Shen</a>"
                ],
                "photo_reference": "CmRaAAAAUcrMDTeQrcW3MaLUZt-nE4UD7qYbrsgvZvEuwG2KEfI12cHvfbdtLQDCU8T8rNJtQLvBFMjMms_4D_IrOEYQGFo3lQhPHo26wutZPNH9CTWsOvMP_Zi-ibZ0e__0hM3rEhAI8-XGhhDhAYWLKuWdLqMuGhTzmQ1lumUdOsl0wJtXDMpckovKJg",
                "width": 4000
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104427612360349099074/photos\">iris montoya</a>"
                ],
                "photo_reference": "CmRaAAAAHwfBcYIbDRppgPCorVGfLzXuKQ-UCkugMRMEst3FU7FbPgPGJbx3i3bKOn55DBcWBuAERzg6Fr3vKgXbkftJY8ddy6foeBnk2hvU7YtvGBAl7pmxh9M6iKmU3OFaRkezEhC0a0YpX7Ej_Qmq3YCNuIuSGhSBzSobrIHyIoNo9vuneb5-31vCHw",
                "width": 4032
            },
            {
                "height": 2765,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105980249194933280483/photos\">Edward Shen</a>"
                ],
                "photo_reference": "CmRaAAAAZGFA2dTmGZVWDaDNgyDi_tab0qQll5_gMtrDUnqkODxFCqAt6j6ECQXJZ22IVQs7tVboqiq0XAsKrzUTPOVp-oW5AsJ74_Z9q83LRN_8eCOlpxnWOGZSv06Y0Yr5SDytEhAsvI_ppA97OfQg4Rdi8GUiGhSw37-JXSzxDiSoi2_Bo7RG1ZAG-w",
                "width": 3456
            },
            {
                "height": 4640,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/109274499606921160711/photos\">Musho Pea</a>"
                ],
                "photo_reference": "CmRaAAAARemy0DQJYnkSkbaYa-UPSROe6JKZvBfLFkL2vd1PYImFIOhExlErNWG9acZk8jgCW3eoGX50F_7ym76sL5dIHJKAP0yVVdZW4KPPoPqVX_ia5ld00YYGnZw73UpTEnYFEhB_jrlbCq-yxICjOik1N9s6GhSZrkEppzOTHXeShxmVcIyQyiI80g",
                "width": 3480
            }
        ],
        "types": [
            "food",
            "point_of_interest",
            "establishment"
        ],
        "site": "http://en.sulbing.com/",
        "place_id": "ChIJa1TWxpq4woARqCguoBjcSa0"
    },
    "Senor Baja": {
        "name": "Senor Baja",
        "hours": {
            "open_now": false,
            "periods": [
                {
                    "close": {
                        "day": 0,
                        "time": "2100"
                    },
                    "open": {
                        "day": 0,
                        "time": "0900"
                    }
                },
                {
                    "close": {
                        "day": 1,
                        "time": "2100"
                    },
                    "open": {
                        "day": 1,
                        "time": "0900"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "2100"
                    },
                    "open": {
                        "day": 2,
                        "time": "0900"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "2100"
                    },
                    "open": {
                        "day": 3,
                        "time": "0900"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "2100"
                    },
                    "open": {
                        "day": 4,
                        "time": "0900"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "2100"
                    },
                    "open": {
                        "day": 5,
                        "time": "0900"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "2100"
                    },
                    "open": {
                        "day": 6,
                        "time": "0900"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 9:00 AM – 9:00 PM",
                "Tuesday: 9:00 AM – 9:00 PM",
                "Wednesday: 9:00 AM – 9:00 PM",
                "Thursday: 9:00 AM – 9:00 PM",
                "Friday: 9:00 AM – 9:00 PM",
                "Saturday: 9:00 AM – 9:00 PM",
                "Sunday: 9:00 AM – 9:00 PM"
            ]
        },
        "address": "832 N Glendora Ave, Covina, CA 91724, USA",
        "phone": "(626) 332-0373",
        "coords": {
            "lat": 34.0951757,
            "lng": -117.8637617
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "photos": [
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108448990595457644994/photos\">laura hervé</a>"
                ],
                "photo_reference": "CmRaAAAAXmmsc61BkVKaIrdSF4dHQlDbl5vqJoIindoKcQm1VJucrQ_YSZElGcifZgX7vt5sbJM7dWVYIH0VMllc6irm26EHzapo9KT8ynp8IIPthOECgHiippfxpCyUGybvOb9KEhCVoPXDyeqemZodqrDcR5jUGhTIIqJWCsf47WFS5blwpsxvuwcrDA",
                "width": 3024
            },
            {
                "height": 2322,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116891380648586931132/photos\">Sonido Oaxaca</a>"
                ],
                "photo_reference": "CmRaAAAApeLJYUjfbJfcAreEoOW1tv8mCXG2cOsHi4Frz4iihdSA_zfgei3kolCY1WJcAw47rSyNpON38MXT7wABU9WU_NayS1pIhbgIZ5KRYHWGugDMiX0a8jjcgbQumtyDngvuEhD0KQMXOH8_aoKqLh1G01CsGhT6WbKQ24EYS0Uz9_J-y-J3lor8hQ",
                "width": 4128
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106788809290289646724/photos\">Neal Mc Clung</a>"
                ],
                "photo_reference": "CmRaAAAAiXDj3Hj8BqXIP6MpvTJ-MhDQVd-PDeMQRsVzj5HKkQbkKGBUZliyX93aEmsOXDyPfO_1_O_vWRbSCfCaojsDw_REuVRzCqBiiia09-ku82m1jpDNULoJu9GGJN7AbMvKEhBmAuNfop-4suEuRD_Q21QTGhRX1yG07u7F6R_eg5qYa5c_qol_jg",
                "width": 5312
            },
            {
                "height": 1944,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116435212571224703910/photos\">enrique alaniz vega</a>"
                ],
                "photo_reference": "CmRaAAAAccdZd_waPvl_G3cqBoxtl3bxyW3Ti53XzYXVpMXjn5d7LF9sROkLzRfnb32_zBa9kua8uNV_Kk-dH0MsQFHVUpuO5Qxka6ijgRHvtdRtt5Vx65P-J6p5fZD_8iZvNikoEhB6_aPVijieHCJ4JDr5CRsDGhT8Q6ZkfIUZc_sqsJ3vzogYVApVLw",
                "width": 2592
            },
            {
                "height": 1944,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116435212571224703910/photos\">enrique alaniz vega</a>"
                ],
                "photo_reference": "CmRaAAAA6MvNSS8Mxirn2Z_cdQhNj_VHBMN_ske5jJJ07xJg9W0WNP_42ea3baKelh1tSwS6J4v6V4NWoOZI3lByaI_z3bOA6Y4_mSkpqr_TU1XKkFP7rNptyUn9S6HTfLoxfQzeEhBz1F9n2_m7KisMOv0fYmYaGhSQzkzTmU3YZNdvQRe1ypWb0n1Khw",
                "width": 2592
            },
            {
                "height": 2592,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116435212571224703910/photos\">enrique alaniz vega</a>"
                ],
                "photo_reference": "CmRaAAAAfiWOQdTaERY8C3C4HgnUc6sHZHdjGvhi76ULTY4d_QR_MVsq7NuJQYBzWbgPzX9i_JW_YlbkMprrdpGfmUtrO18Owv47RFALppk4z99nv34SVWclGqDcB1Fvkf-ntB-LEhCqHP-ExsJuNEt-ffVIVE0ZGhQpHrWp9EcM20cBD-Q7VJ5URQzPhg",
                "width": 1944
            }
        ],
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "place_id": "ChIJTQrKeO4ow4AR_mUrmko1098"
    },
    "Golden Pouch": {
        "name": "Golden Pouch",
        "hours": {
            "open_now": true,
            "periods": [
                {
                    "close": {
                        "day": 6,
                        "time": "0200"
                    },
                    "open": {
                        "day": 5,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "0000"
                    },
                    "open": {
                        "day": 6,
                        "time": "1100"
                    }
                }
            ],
            "weekday_text": [
                "Monday: Open 24 hours",
                "Tuesday: Open 24 hours",
                "Wednesday: Open 24 hours",
                "Thursday: Open 24 hours",
                "Friday: 11:00 AM – 2:00 AM",
                "Saturday: 11:00 AM – 12:00 AM",
                "Sunday: Open 24 hours"
            ]
        },
        "address": "3324 W 6th St E-1, Los Angeles, CA 90020, USA",
        "phone": "(213) 263-2700",
        "coords": {
            "lat": 34.0632103,
            "lng": -118.2949821
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "photos": [
            {
                "height": 2448,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107259451420564938946/photos\">Andrew Gardiner</a>"
                ],
                "photo_reference": "CmRaAAAAx3PIDOYY6gfOdUOH_pCoAj2fZtJPGgZrEunQFH31lQ_qgKVPiTCnB-XprS8PAN1P1Z_yvml_4J0dkADqnDz3tme-AJZiACzj8QqkNV3HMzSOoumTYFyUv1k1nizwyQZwEhDWpoDsEjDjDMr7LpESyOhrGhRyfr7SY9ho3-hqFXfhx8CNiS9z2A",
                "width": 3264
            },
            {
                "height": 5984,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100315342732884611073/photos\">Jacqueline Campos</a>"
                ],
                "photo_reference": "CmRaAAAAkcNW8sfVHeR3VNQBr6cptn2vblIAjlOIZ0fTQDwbxpT1SBUWAf66iTGmFLvXWPBNB_OYoB0nhj3uK_CMsS4DDlb-4OTo2s9rIi4KCwAutILPsSbWpOq91yzvgARmBvOLEhCwEEq1xZyw1vf3Tapv1VIcGhSWjuTpom-J8TNs5jwBKkrXnJFOnw",
                "width": 3366
            },
            {
                "height": 1536,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114595125503780367072/photos\">Glenn A</a>"
                ],
                "photo_reference": "CmRaAAAAt3jlRA6Yseav9GcLWfjmlEAsFXl2hEh9MnNwROSefq6xcHyWmMEBBBBI-R8xkbZrjPKerTQg_eeZ9-OqE6db1myHaRgc0KReeep8j9_stijOD1zVX0cLWubyTvvi0atmEhBeBBRCq3YQDCEkZYWc8vv0GhRHfsj1ehZIEZ2v1_GTH5H9bmt57g",
                "width": 2048
            },
            {
                "height": 500,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/102248698323591290381/photos\">Vegas Food</a>"
                ],
                "photo_reference": "CmRaAAAA1nqy-_cTMRbagkvFwJF2rnRiGHGjtLKBBU4GIHqkuqxJLCR3YA6_1TDk8oR9KTtsvKG6nzoiouMvR_xfPNj3vLUV55D_fBh7yuTuMQ23DrIHyyKZWpUxsiEktBOfcKVGEhDzybN-oq9M5gact0AqQ_O9GhQagS3r8C-RiLun24eB3DzTwEqxaA",
                "width": 750
            },
            {
                "height": 3464,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113399451921129177252/photos\">Keith Del Mar</a>"
                ],
                "photo_reference": "CmRaAAAATMmBtq7bEMxJoow_S8u5w0eIs2qxIHSGecFwlp9rk5TIBYioNWvnAa6fW9HilypYroIQ57JnDqtvzXDxSOSIIlGBXnZzgp9nBgEQ4vT41nLJ6xEfQ2fKtE1LeGLowqBZEhDBkfdaiN5o3EtfgRi8hzr0GhT14nRZib1pdeMTW6TLL6JH4bLyiw",
                "width": 4618
            },
            {
                "height": 3088,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101858647529043551288/photos\">Kay Jay</a>"
                ],
                "photo_reference": "CmRaAAAA9uxRR6T05X7LhV7LYBNApDouzSEfppMOTgacwRaUBGrZ9bhTEpuxWdiAeX2AL7vDInlvHZ3EWd81BnK5xGXuTuxeSiBM_XRHg03WFfZ7QK9fiVdjPQNcYimENm8ohgvsEhDUb8XnjKIMbbSONYSV5tdDGhR-YkKS1hc1RfSPb3Gl4NX4DxhUnA",
                "width": 3088
            },
            {
                "height": 1080,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108575724488695695925/photos\">Warren Y</a>"
                ],
                "photo_reference": "CmRaAAAAkDpzKei5VZ96UIJ3uoN9NYBMFHwMzGI4DHGFqgoFsJFb3iRvmXJwbU667LsyqvnMB2RZULj4A0mijguV9OiPQg2ROghQzzLgrQj9dLCYGtTk6Xyqlu8acPMdaJeXYIUNEhDjeTUUW-6HGGoHrB1eb7epGhTWNXEQJqFwCR4YN5pdK-gxVMAPgA",
                "width": 1080
            },
            {
                "height": 1536,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114595125503780367072/photos\">Glenn A</a>"
                ],
                "photo_reference": "CmRaAAAAoVDYREzR_b5KaoQlXWWOmIlA0f5gZIjReSz19j20gE6hwbrbTuy2N-GX2cW0WEg4qlfVysMVD-gX1kGZdRzZvkEhXbTRxzXf_Yd-_KMGuhCpFoIn-2D76uinPoIqxY_dEhAUkvDmnmo18dp11kw34IVgGhTzzefhVNHi6-GR-Wz1G-gTxp80RQ",
                "width": 2048
            },
            {
                "height": 500,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/102248698323591290381/photos\">Vegas Food</a>"
                ],
                "photo_reference": "CmRaAAAAeFKpRDRWCzMB1LlpYJVEP4wovZuTgLKOqXJYVXgoCiVRp78rzoSWglJ28dtsIzr-PcC4KpGzRoOObxeaGJbCnqF4sAN8Dw7fcTRD7aeoJU8YikMFqOlYPzl9SYoM_RdDEhDWKqFGHORNwrGokPhrh0bBGhQcleKQCutk6Vf_zw-pzHX9BWgGrw",
                "width": 750
            },
            {
                "height": 3088,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101858647529043551288/photos\">Kay Jay</a>"
                ],
                "photo_reference": "CmRaAAAAzWx2JzbgpGar-djzlOYH2GuXCT4OmcLkQSs1zkl926iW-fvYekONIj5IvGOKI6KUPJV7Vr2GBXp-FGAFp_c5n6f_0Ji_xAUGXUI0ISykuac3r-CQqwOcQoL5ti22ixOPEhCOmNQAU0jkIlhggGV2gCiTGhTldIS0tVv4tax24Jv2rkHpKluoOA",
                "width": 4160
            }
        ],
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "place_id": "ChIJ43V07XzHwoARMiJ0890GY2U"
    },
    "Bottega Louie": {
        "name": "Bottega Louie",
        "hours": {
            "open_now": false,
            "periods": [
                {
                    "close": {
                        "day": 0,
                        "time": "2200"
                    },
                    "open": {
                        "day": 0,
                        "time": "0900"
                    }
                },
                {
                    "close": {
                        "day": 1,
                        "time": "2200"
                    },
                    "open": {
                        "day": 1,
                        "time": "0800"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "2200"
                    },
                    "open": {
                        "day": 2,
                        "time": "0800"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "2200"
                    },
                    "open": {
                        "day": 3,
                        "time": "0800"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "2200"
                    },
                    "open": {
                        "day": 4,
                        "time": "0800"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "2300"
                    },
                    "open": {
                        "day": 5,
                        "time": "0800"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "2300"
                    },
                    "open": {
                        "day": 6,
                        "time": "0900"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 8:00 AM – 10:00 PM",
                "Tuesday: 8:00 AM – 10:00 PM",
                "Wednesday: 8:00 AM – 10:00 PM",
                "Thursday: 8:00 AM – 10:00 PM",
                "Friday: 8:00 AM – 11:00 PM",
                "Saturday: 9:00 AM – 11:00 PM",
                "Sunday: 9:00 AM – 10:00 PM"
            ]
        },
        "address": "700 S Grand Ave, Los Angeles, CA 90017, USA",
        "phone": "(213) 802-1470",
        "coords": {
            "lat": 34.04702470000001,
            "lng": -118.2565689
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "photos": [
            {
                "height": 1022,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111847129364038020241/photos\">Bottega Louie</a>"
                ],
                "photo_reference": "CmRaAAAAmwtXtPm60qCzI3-pH4Sn-nu3jrrJMh1-bTFy5dw2k99OpcK7W6NxrrRADdjWD_4pnOHPBgHFwMysSIpWsDvTh80DdJY9cjbG2Y4Vm9MJb7cN2gikfhl3MCBtEAqJTdZTEhAAP-PVtBoZ6Zdm5iVHaYNBGhQzXePTACwIi-VH0jhrd4kYlDD5WA",
                "width": 1022
            },
            {
                "height": 2160,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103032991689055446791/photos\">George Ayoub</a>"
                ],
                "photo_reference": "CmRaAAAAvc4sM1akgJBdHd3ySVqMLFIZYpESowmAOlBqB27FTzbPc2nntA7PDhc8IWaUwWgbddUAn3nLB6djbCEyeAIyUGHFgYEWzuNEiD8C_cB7FwtUsTeBlDqQtP0dH3B7RaRvEhANSWZa6nQ5h-QJMEO_Kb9aGhTqFXOn_6RVQjBxKt8R179zgohZmw",
                "width": 3840
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105194067434337342143/photos\">Kevin Truong</a>"
                ],
                "photo_reference": "CmRaAAAAWC5urxNrYmumA2hXCvoAYZOGpKAQcTrVodTYwhT2qCQWzn6g5PX4UqC1_pY-Wlns0viAVxieC5cMrvVZgAVcWRWdkc2dyiErPAKwakjD4zzBZR-vpQ1SO4vXmIS91rhsEhAjbCHVSwcf0neGTf4LNX69GhR1HaK84GjqkPAEEGfjbloZi7qISA",
                "width": 4032
            },
            {
                "height": 2358,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101161180918255726390/photos\">Jon Lenvik</a>"
                ],
                "photo_reference": "CmRaAAAATBp3CKN5TDM8OwXNN8ayPyVCRosDJO55uSiKQZ8R4TNbCOeTtgaCb_oQpow0XReNrd1Su9cxxtYHCooOUIGu416OuPfIjMs987khjlui87hf291zK6Hy0C1Sfoer9sHeEhDNUItCoo-QpOUg39gDML6MGhTVpU4g75JxqtM5GF6HILvWq9FJ9Q",
                "width": 2357
            },
            {
                "height": 2204,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116813066930179426699/photos\">Moses Gavia</a>"
                ],
                "photo_reference": "CmRaAAAA_v_ufpJTQ6ZHYfQDvXuY5SIlnvbS1aZTSFI-YHqmqca1da0Ed2FZCuWernW2z_7FCxNB2TGf_9oCHYNd2Y6ipmQzn-LUII5udWim02GIFzCxf2mx3op9VV_2XLZESPuSEhBCEJhRjxJheL2w0df0Gj_RGhRyy6K6OmOJ8VcrEXAEaULxH1AozA",
                "width": 3920
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106109888470268226737/photos\">Austin Tierney</a>"
                ],
                "photo_reference": "CmRaAAAAPbA2o7Bl9p-_syx4lr3hRjHchZgIizaIkNl0rHNtOdhv_K1WuHXdEE0r0Cd5iVP001kRBUw65SZqCUia5w2wPAdn6eckpacoPexZ-xudZy-UfjQ7JsmlavAmV0l7N9qnEhBs29SoUP00MOaeT5VjPnBfGhSFIrGR4oQyJlv7JtUm6hKo6mPQWA",
                "width": 5312
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/109089263014102065845/photos\">Jerry Park</a>"
                ],
                "photo_reference": "CmRaAAAAw7R6waYdF95MmdLPr7uKnRhib_z6H-nZbU019WC3YNj1cCHs58hxOhBVuxp9MDf7h25n3bkRux-2yn9KFV3jGhXFCZczV_nUHTStQfhANJSDMhxv5sodro_MuQWNz2bGEhCzy2Rdnc6GTC60v7p4Fm9PGhRqpnf2V62l1Uueb2eleSv-ZkcRXA",
                "width": 4032
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100029109725029006695/photos\">huang luning</a>"
                ],
                "photo_reference": "CmRaAAAAYBKn_IKE8bom427v0EHnMnNZLMBQRsSaBjIJizwAfskD1Ai0xwgLE_roPSfbwp4t0aMeEE8oWd2ziK_1XpBuTuMxqU9FOckQkRzNxIsqNxCn99jWH4yVKNu99rj2KtPaEhAsvEXwX6z1us12vYbG-ZabGhR48tAT5Ug3sWPZ9vFW-d3grbSgYA",
                "width": 4032
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/117483142443006459153/photos\">Brian Tam</a>"
                ],
                "photo_reference": "CmRaAAAANHHV6V8bOBuaZmmjgR05DJPl2XQuJyshR4TyQnu1_mroSA2_TuCRkLBw6C2NkvVoSzfR1uTO4Kgv6fA7UvS1p-pLsE-PZkjX7RHBamTpemyHJVzD7fyKXuEf0j_nN3SxEhAd7H4EhCgBbtf8W9-XqDXhGhTH5TWqel8u7bG6iY0WGfwhkT9mXA",
                "width": 4032
            },
            {
                "height": 2448,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104612929758217906468/photos\">Mary Ang</a>"
                ],
                "photo_reference": "CmRaAAAA601tQoIUstPM_Qm5PQqzbtBIqjcm3pBUAYVNHpiDWR3Vq3YvuGuncdhOmTmUk_rt0mPIVl2ZyUC1n9Xcaie3p4A0OU7eiTnr1PDbz0qyYSSSR1tdqiegLcyLTZew6zECEhBCL_75ltXMOp-Pp9BNLeHDGhT1dQXy-TFU5h3ZFPyLTth-7ayVug",
                "width": 3264
            }
        ],
        "types": [
            "bakery",
            "cafe",
            "restaurant",
            "food",
            "store",
            "point_of_interest",
            "establishment"
        ],
        "site": "http://www.bottegalouie.com/",
        "place_id": "ChIJ_yXhTrTHwoARU36hVDFInhg"
    },
    "Drips & Swirls": {
        "name": "Drips & Swirls",
        "hours": {
            "open_now": false,
            "periods": [
                {
                    "close": {
                        "day": 0,
                        "time": "2100"
                    },
                    "open": {
                        "day": 0,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "2100"
                    },
                    "open": {
                        "day": 2,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "2100"
                    },
                    "open": {
                        "day": 3,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "2100"
                    },
                    "open": {
                        "day": 4,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "2200"
                    },
                    "open": {
                        "day": 5,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "2200"
                    },
                    "open": {
                        "day": 6,
                        "time": "1200"
                    }
                }
            ],
            "weekday_text": [
                "Monday: Closed",
                "Tuesday: 12:00 – 9:00 PM",
                "Wednesday: 12:00 – 9:00 PM",
                "Thursday: 12:00 – 9:00 PM",
                "Friday: 12:00 – 10:00 PM",
                "Saturday: 12:00 – 10:00 PM",
                "Sunday: 12:00 – 9:00 PM"
            ]
        },
        "address": "3076 W 8th St, Los Angeles, CA 90005, USA",
        "phone": "(213) 568-3021",
        "coords": {
            "lat": 34.0576094,
            "lng": -118.2938665
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
        "photos": [
            {
                "height": 5312,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101529679991924478152/photos\">Janice Lam</a>"
                ],
                "photo_reference": "CmRaAAAAY8YVDQebHK3RQgvoKEgfD-Qb1Tjb-lgub4SoZujt29VcfjHaOADlqOEROn-b4BaCG88EhoG83_ylhXnHrI8tgtPscOfw_H5vASH06Svh2fVFiUWc5W6-8DXFg8Fy72NOEhB8SwmN9Nv_iI8MeZJzwd-5GhRzW8WMYx0OF5URxEaWdFdYVa8mPg",
                "width": 2988
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/102521931289931729872/photos\">Dickson Kwan</a>"
                ],
                "photo_reference": "CmRaAAAAF0c1RYcZftrlfO2AJJqCF7EXUmhYXrhEqHcIafjGVGjEFN2P-bC-m3-pLrkhQq1fpuuOP1CnIHITHju-HyfwFeZgrxGj4rS_C7z9sdApJlHGKY5gfsqrN2BgnipWX-cOEhBAb4VZZilkrl-sp4d5ECduGhQmDKAzD6MfuHSFYs-kuRMw4nrPCA",
                "width": 4032
            },
            {
                "height": 2448,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/109737854337042252429/photos\">Julius Miguel</a>"
                ],
                "photo_reference": "CmRaAAAAgkVCC9-RpUnHnSLLDm4wuLRwx2RDqCxlzdf0pqA-sZBNFU9XjZwqRq0xuOnGG9tWGOO1ZOsh9biODBiiCmR0VIav9FZIIYHLcTQyfkR7QGGyAA1WnXLaib8l8CVxOdn_EhBmYdKlFK9NowGsqbrW8TFTGhRGEvWY4HQB2HygA40USvaVSv4jcQ",
                "width": 3264
            },
            {
                "height": 3036,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105565555994550454318/photos\">Carlos Medina</a>"
                ],
                "photo_reference": "CmRaAAAARR07XCCAZ34Fb97mx1iSbcMfqiHtpm76nFxAmNvPYTxH7CVyRtOaLmP33ISZiClTv-4IhYBLRo9yTYM0od6orpwpQx16TspRobxDnRF98uM-AKTiT8BpOq5ovmE1apUjEhBgSpD5xsu1Y9NFcingAGL7GhS1s3T54fuo9QguuNajEegFLg0tfA",
                "width": 4048
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101529679991924478152/photos\">Janice Lam</a>"
                ],
                "photo_reference": "CmRaAAAAPZu3hJnYXHE1_Yq_ME1nRIpvuDjv3fQg3KCBhxr6-YWzti0IaCGKQUoP6wOIqoBu5DqNhhs0MBMq5QToVqL4yhtB07zLOsrESP4OrxGfedbFx6BOsIsoia_VtkHTcdzbEhBZtiZ317JjA68QmM_MOg-CGhQB2nWfQ0mB3djYJg75BsDXs0h2Ow",
                "width": 5312
            },
            {
                "height": 3036,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/112415029962243514414/photos\">Trung Nguyen</a>"
                ],
                "photo_reference": "CmRZAAAAnli0CCwgtJqxKU3RxQsmkwfy7Jq6_l7TqcmGu2e2QH6E6vdEj_qcn7t57Vk1PuC47VfTPF24HU7IrLKjcrcapwJaBEaBX3SCF9PAcV1NDQg5rxPYLDA8LhMp5J6duwOuEhBIoQVYD-cWXKgJPDNLCuGeGhTdFdxJ8mc6_5_ohzgyPFHc7OtBwg",
                "width": 4048
            },
            {
                "height": 3036,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105565555994550454318/photos\">Carlos Medina</a>"
                ],
                "photo_reference": "CmRaAAAAdg4X-k1vkT9Z620hc4uTrCwj6tCO6gXlEDLfhiUrsL73CgvTTE9YIkTdiRllujZa0BzJ2RAWYe1lwFhG4S1YkAyEU2PCe3gJtAzsdX1NIuxozMj8laEXuHPxwVJtX-48EhDE6CJpHnzT4FjlEmsGlbY6GhSIuGiI1DkVwx78qD2YVoOSO-qvGw",
                "width": 4048
            },
            {
                "height": 3036,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105565555994550454318/photos\">Carlos Medina</a>"
                ],
                "photo_reference": "CmRaAAAAL2OFBCWpPOe1YxONAI2zEM-YzKNz0EvtVD5Vbqy9BvQuhIxzH0gw_HhuRrc0znJTVRSJodeljJRIoYc4gwNl6UlxV6R1jwLmCygHinVWUF1-QIVdhQfT_e8gsWa6HvhPEhAAkJsRSgc9TqSEE4NEWdKGGhTLgCuvsWJhjjXt0AOnKv78FAWRUg",
                "width": 4048
            },
            {
                "height": 3036,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116805523491028534652/photos\">Julie Tran</a>"
                ],
                "photo_reference": "CmRaAAAArqOo2JOuqPurQC9Z_QYvII1HLNNDjRkTerFSE2WwR3ZuN4-KDWNIWnkK89UGIsgagv8w7-CrOnWEn3IPOpB19XqC6sLUPN1OdnND5nv6uBYQ8Rmjtm8sCiYMw18Yt1BlEhDfAqFiDb3ehPKgEOkXdEQfGhTwv1okr-Li-8xuekqLPlTtCrXtsA",
                "width": 4048
            },
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/102521931289931729872/photos\">Dickson Kwan</a>"
                ],
                "photo_reference": "CmRaAAAASu7PUQNP0wWmgaPmeUKUf3BcNv87B8xmYDjqRa7RNM7FvLHOj0W37osctGmQdgh-4hDT_FTWZ0-iRa7KGLHdMyb_mIVL9LfBmNK00LBu5y8y0caqxPHMfu-AmuoDBEpSEhBb11UpDmV39Sqrlx7ox-5zGhRvfVg4SjKkaJEn_TX_LYYgULYaFg",
                "width": 3024
            }
        ],
        "types": [
            "food",
            "store",
            "point_of_interest",
            "establishment"
        ],
        "site": "http://www.dripsandswirls.com/",
        "place_id": "ChIJcb_LLX_HwoARr4zYW7lKaok"
    },
    "Hwa Sun Ji": {
        "name": "Hwa Sun Ji",
        "hours": {
            "open_now": true,
            "periods": [
                {
                    "close": {
                        "day": 0,
                        "time": "2300"
                    },
                    "open": {
                        "day": 0,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "0000"
                    },
                    "open": {
                        "day": 1,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "0000"
                    },
                    "open": {
                        "day": 2,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "0000"
                    },
                    "open": {
                        "day": 3,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "0000"
                    },
                    "open": {
                        "day": 4,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "0000"
                    },
                    "open": {
                        "day": 5,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 0,
                        "time": "0000"
                    },
                    "open": {
                        "day": 6,
                        "time": "1200"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 12:00 PM – 12:00 AM",
                "Tuesday: 12:00 PM – 12:00 AM",
                "Wednesday: 12:00 PM – 12:00 AM",
                "Thursday: 12:00 PM – 12:00 AM",
                "Friday: 12:00 PM – 12:00 AM",
                "Saturday: 12:00 PM – 12:00 AM",
                "Sunday: 12:00 – 11:00 PM"
            ]
        },
        "address": "3952 Wilshire Blvd, Los Angeles, CA 90010, USA",
        "phone": "(213) 382-5302",
        "coords": {
            "lat": 34.061534,
            "lng": -118.313194
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
        "photos": [
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100435880280656818067/photos\">Edna Banayat</a>"
                ],
                "photo_reference": "CmRaAAAA75X8sZ0yd9pS-7mZ4hQ5L2AQNY_QyB-yfyfa3XRajxQFSDnuBnWmNTFPp3BdHaK4ek3AFNl7I9Dsqk4uhDhvwQjxxJjerRt7PZQlHLksWHj9EtnTpVPGI7buVPKw6xzDEhDK4Q-JT9A3q8RiqNb6VgZZGhSgVZEx6YuKi_vXwqsRI26OJScc-A",
                "width": 5312
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100435880280656818067/photos\">Edna Banayat</a>"
                ],
                "photo_reference": "CmRaAAAASg7rFmC7mkaWAAqK9SPziFdhSqYOncYBwHwhcIZAEuFr6Lq2MVmUbcHS2SimRqR87fVpiL15z_cOk2PQ0Zp9TRm0ZlLJFk_r7XpCc-UistGJCEnGxvBk7Fbh1PGb7UvkEhA6vqc3LG35Vb53aBD7IS67GhQJKesTEz1nqPK42RgrYhkm5oFAjQ",
                "width": 5312
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100435880280656818067/photos\">Edna Banayat</a>"
                ],
                "photo_reference": "CmRaAAAAWy5f2jYBM3VCPXpOvjfRIfODHA2DxFuOnRuOXWe1YFH0XjtCrwXeFp0_W32YoP4H4DbfmO-Kp8gNVgb2UbNRPHVpPvoIE_GQt54KLLeAyW-WMsU5cGTNVaiH8xUV5vYpEhBTI_0WcdhE0f6Ww8HTMSxGGhR3TXfqlg6_YK9a8YAbUwf0Y5d1Kg",
                "width": 5312
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/118106354202460361453/photos\">John A</a>"
                ],
                "photo_reference": "CmRaAAAA4pT8j0EVUy5noztKOWmEjCeif6eUPPVzTIjG2xDBC-GrnuX5ZKmKrQTfi0MkEH5p5g9VpO7iWNIjzI6A_49IbbkqkTPQUoQPQXgoNrX-eY-NGC_IYkYmL-IbLeFmlQu2EhAMEycGcxrLI_YXcj5UQY08GhTc4y6_ymOmi_c2kagav6-B6WdIHw",
                "width": 4032
            },
            {
                "height": 2160,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101596901715455718515/photos\">Julius Klein</a>"
                ],
                "photo_reference": "CmRZAAAA-BierelWhBlQduEIgObXe8D3Z9wrS_GiEuXb-o1siwBCcKqD1kUy2Uh2Xs76Lew9xN58zkivRBsl2pD7kxnaV_dipaBneKCarwgUJrgWBCfZK3YBvLpzGtAxCvsvHwFrEhD70UaDM59V0Hcxmi5CVF5eGhQ_-GcpWypNdGZsEzecrN68T_szAQ",
                "width": 2880
            },
            {
                "height": 2160,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101596901715455718515/photos\">Julius Klein</a>"
                ],
                "photo_reference": "CmRZAAAAF1ofm_prlPOgfqipoMwFvSG3N_F7FeSL005CqzeRxsTrb9VUuEGPuWWvE6jA7jfUwCDyKhr1HrsxLEvAN0pGp0pMk7ryehg57KfjY3qXB3lmOCaraF3BD64tknr_NgJLEhBG1EJVOEp9AaGt5Ncq0NUkGhQdnhRyvnb7kmfR5zrKeDqhzwjF2Q",
                "width": 2880
            },
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101236743873898386994/photos\">Hanh Nguyen</a>"
                ],
                "photo_reference": "CmRaAAAA04LzzMuEZt317AwM0Z-LC2N7XTwOlEfQDnL9oyJB8an5HSBw4RSLDZEamWfNcTYXcSAb-PtNL0Ia7E5gJqYgbGxRp1EDl_CyXPTWQf2a4R14JL41yJjfm1hYCImwnIpfEhBImOrg7Fhc8EibSmkN7KXFGhTHK1r6VeifWp__Vlo_jMdhFL5mlw",
                "width": 3024
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100435880280656818067/photos\">Edna Banayat</a>"
                ],
                "photo_reference": "CmRaAAAAj6LDxdRK-EXP9_fM76miJWEp94SNioMlVvcvrb3JYrtY8Jz4Oa9RNGIsz3LDimiw5Ky0WNURs6wFEtYadAOCtrFcu6umjJOr51sLYFoVvwLtnWULDWwjU2_mflkd7ZhfEhDWufbvB2XSVFsrxKJ3HkcgGhRXnLbrxjoCCPD2_xd3CcJ2euAGhw",
                "width": 5312
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100435880280656818067/photos\">Edna Banayat</a>"
                ],
                "photo_reference": "CmRaAAAAwuVkwgPbV52gYbfv1MbkRJZRMZ5H5aNFBS0UwKCST-cqrKQOall9205hFMSB-tp2qi6PcXpVtEdZbNK1iZBdj8XYyfLwhFenSiAXs58T1XFkcmd2kQWS68vyUT7fHZR0EhDkXAXJtqL8cZW1qyBPJWSxGhRXFBy7wIz3i_RcA0ToVBps9uPiQw",
                "width": 5312
            },
            {
                "height": 2160,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101596901715455718515/photos\">Julius Klein</a>"
                ],
                "photo_reference": "CmRZAAAA4dSLNJIz9cRewRfAcWY_PEruq8YDzhBAYIZ1ze3DCD6PeHinZDsz1p894WnODGhamNxhj0LZnYOkUjZAnTbjG_iE-WDeNCQ_h81i64UYAMMpS-9Nf3cgatlIYk9USA4dEhArl7gS6ZFfJLX-YFHylZ4pGhRzq2anhoz_14jh84Pw4IqNerhNVA",
                "width": 2880
            }
        ],
        "types": [
            "cafe",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "place_id": "ChIJp17EOpC4woARI374aFtdGj8"
    },
    "Baker's Drive-Thru": {
        "name": "Baker's Drive-Thru",
        "hours": {
            "open_now": true,
            "periods": [
                {
                    "close": {
                        "day": 1,
                        "time": "0000"
                    },
                    "open": {
                        "day": 0,
                        "time": "0700"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "0000"
                    },
                    "open": {
                        "day": 1,
                        "time": "0600"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "0000"
                    },
                    "open": {
                        "day": 2,
                        "time": "0600"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "0000"
                    },
                    "open": {
                        "day": 3,
                        "time": "0600"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "0000"
                    },
                    "open": {
                        "day": 4,
                        "time": "0600"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "0000"
                    },
                    "open": {
                        "day": 5,
                        "time": "0600"
                    }
                },
                {
                    "close": {
                        "day": 0,
                        "time": "0000"
                    },
                    "open": {
                        "day": 6,
                        "time": "0600"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 6:00 AM – 12:00 AM",
                "Tuesday: 6:00 AM – 12:00 AM",
                "Wednesday: 6:00 AM – 12:00 AM",
                "Thursday: 6:00 AM – 12:00 AM",
                "Friday: 6:00 AM – 12:00 AM",
                "Saturday: 6:00 AM – 12:00 AM",
                "Sunday: 7:00 AM – 12:00 AM"
            ]
        },
        "address": "2416 W Arrow Route, Upland, CA 91786, USA",
        "phone": "(909) 624-4999",
        "coords": {
            "lat": 34.0989307,
            "lng": -117.6987726
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "photos": [
            {
                "height": 5312,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/115857795630206713280/photos\">Omar Ramirez</a>"
                ],
                "photo_reference": "CmRaAAAAurs80s4cCB7Ye8Ew0o_iFrkH479fX5LDxA1MAsxHy5FO2HpHuInl08hnSZiRvPU0Pta384tTs3i-BtcReDkizIPk1xJBO0dfIqvNL7fnx3VnxVK_foIdqRgjEFgAfLQnEhAwmWykM9o4VLypsF0SFwDjGhSyXfzLsVW3NzThIinpgVHx3Ql0PA",
                "width": 2988
            },
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106673606810199080946/photos\">Alexis Diaz</a>"
                ],
                "photo_reference": "CmRaAAAAF8s8CAEZCJpYj9qYPA9LtMZCWNb2o-G_6SuKNIwRDDrmEKV4pqlxftjFSof04leojYZRYtN0jhUxL9C6JyXOOxgzDj-RD047dfmke45YyZQN1c6rVIaaL5PZYbJYqTyKEhA_qdFEYQ5c5y_zMvCi4HamGhRXa6ogvAJcMZlCRnLOhClmOtE26g",
                "width": 3024
            },
            {
                "height": 5312,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101206261304737879200/photos\">J G</a>"
                ],
                "photo_reference": "CmRaAAAAtR176irY_s8Dcbc8PwI3V7bXXvePbP6DCFsHr1QL9bTP-XclWImjHExNhw10smqBeYwOy9iE64tppArQy0aTiBoZbbTHtmVg0UBGmeytyBH2nxLvfhKrvDWs3KKivlpbEhDm63Jwp-sG-DJ_nYEheClJGhQSYc64zlfcvYJ8tsphTi8uvGOfOw",
                "width": 2988
            },
            {
                "height": 2048,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/115289924656949927995/photos\">Steve Wylie</a>"
                ],
                "photo_reference": "CmReAAAAEExZRVML5r0siTsUmKioXA92E9IflqiEontFRQNGMQUUATixkcbLsnVcpuU-VHhkNoUmp3ov_2M0-D2zp8yZzekFqA-x5vGGc8vlFze_W4-I-TRft_PxX-DCfqZlFxq5EhDHUuHCYazxb_5-fBS00at-GhTiJv5RVo9gclXMRgxleilEb0GDaQ",
                "width": 1536
            },
            {
                "height": 2560,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114967287213292325929/photos\">Erik Lockridge</a>"
                ],
                "photo_reference": "CmRaAAAA9ivdiblaS5rsT1K1Dd6SY5O7QAfPKI-0IDHGwfrzkxrdHg9r6NxrliPT9bsE5lOVCWo5vLgUzwAW1F-vmHE5VdO0SUywPBMlfcgGgsx74s6yquOSWJsSzCzB1cNWf-pbEhCh9T34EoU7K1aW1oH29r-aGhR7WAEqg45-ahEpFQYCzfmPBWhhow",
                "width": 1440
            },
            {
                "height": 2048,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/115289924656949927995/photos\">Steve Wylie</a>"
                ],
                "photo_reference": "CmReAAAAtW_iYAGe52WT_mxxPRaTXId7Wjk7mGLzijQ6A30PL9qIFKNmPMUnJI9ML_QAmYsBVA1HLEQ4-TKMfECibe5Oq_JiYq-PU0XmOTk6P5LzMzRDpcweDbX4zaeuLKdc2ddCEhDeXDYkONt6IFUDsbP9XJsoGhQdEJPmO0c7lRh8nhkD4YH_kr2AzA",
                "width": 1536
            }
        ],
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "site": "http://www.bakersdrivethru.com/",
        "place_id": "ChIJyV44gJgxw4ARDtMrpuOtQvo"
    },
    "Sumo Dog": {
        "name": "Sumo Dog",
        "hours": {
            "open_now": true,
            "periods": [
                {
                    "close": {
                        "day": 0,
                        "time": "2200"
                    },
                    "open": {
                        "day": 0,
                        "time": "1130"
                    }
                },
                {
                    "close": {
                        "day": 1,
                        "time": "2200"
                    },
                    "open": {
                        "day": 1,
                        "time": "1130"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "2200"
                    },
                    "open": {
                        "day": 2,
                        "time": "1130"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "2200"
                    },
                    "open": {
                        "day": 3,
                        "time": "1130"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "0200"
                    },
                    "open": {
                        "day": 4,
                        "time": "1130"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "0200"
                    },
                    "open": {
                        "day": 5,
                        "time": "1130"
                    }
                },
                {
                    "close": {
                        "day": 0,
                        "time": "0200"
                    },
                    "open": {
                        "day": 6,
                        "time": "1130"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 11:30 AM – 10:00 PM",
                "Tuesday: 11:30 AM – 10:00 PM",
                "Wednesday: 11:30 AM – 10:00 PM",
                "Thursday: 11:30 AM – 2:00 AM",
                "Friday: 11:30 AM – 2:00 AM",
                "Saturday: 11:30 AM – 2:00 AM",
                "Sunday: 11:30 AM – 10:00 PM"
            ]
        },
        "address": "516 S Western Ave, Los Angeles, CA 90020, USA",
        "phone": "(213) 375-7755",
        "coords": {
            "lat": 34.0648848,
            "lng": -118.3088451
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "photos": [
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116789692419265580726/photos\">Paul Roth</a>"
                ],
                "photo_reference": "CmReAAAA65Nrh7Cw_Eh6yawgsMvor4M6E8my3KTV8zwz9p5ccPFYw0Vw6ZKcslayS2pXgHRcMNWQog9Q5cOHdqPBULHvVC73K5IFK-HPIoGihv1yUxlbGSKkW53GGuI4-QW8VzXOEhBwKO7_bPpARCT551cyxIfbGhRZn3wf8UvcDVGP4JIrhFub73os_Q",
                "width": 4032
            },
            {
                "height": 2592,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101753994635263704629/photos\">Soo Ahn</a>"
                ],
                "photo_reference": "CmRaAAAABW3ibp8QTPWhTh1x3Xd_blDc-EQAEU2xeFMkH_h_ElQlY5iJd7KkSNeVXrRoodV1y78ozf6g4Bw1RqtvEraYm8eoqKxSdGA30qf6tPhD5ak4E5jDtt7fZdxn0YPdrnVAEhCI4Z5P2Rm6EZN7mHqf0bQ2GhT1NnpXVsTrFtVKG8No3f0OI9FbfA",
                "width": 1944
            },
            {
                "height": 1836,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114223012160772741068/photos\">Jovan Rodriguez</a>"
                ],
                "photo_reference": "CmRaAAAABKqcW0dfwkMdew9_AlD3BSh249MZ2W1AWER9MH4cmChMlBaGXqueo12lamnyzo9XgB1hCuSAUF2HXkQpwYjhhF5dTogJQcwTPxPmJWac72vDCE8ILdCa0Rh4IeyWpjCeEhD5Mf3-I6EqwLtZiZjTUAryGhQRKsWMASQnos-XZi8XkRI4UIck9A",
                "width": 3264
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116789692419265580726/photos\">Paul Roth</a>"
                ],
                "photo_reference": "CmReAAAAFrUdEVlCDaNdv9Q-5Ew6b1-QEEpwF-MkRQ67OphntZlpVVyQW0knHhg9h89I17F6G9EcoxqQLp1cXnSZ2VugATsIKsfydmAgc2hpy-Ca-033V9K7xqrYRjgp6celBXlJEhB8hD5GEs6uuaKsdyW4V5z9GhSG94BHCYeNVANeG3_PqofH01m26w",
                "width": 4032
            },
            {
                "height": 1080,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101858647529043551288/photos\">Kay Jay</a>"
                ],
                "photo_reference": "CmRaAAAABYJf0Lxyvgc6bno8_ehMJRiV48_q_7Kl-if6XZIvLgGxAKGWdNX12JUTLUi6ULcZY5owpynIhcaQPB032nQNpLIe7GiDIbzmOiG2aLO8WALkIOAX37zzwN67sGPB1jwdEhAY13Ur_yxRYkKSYVoHbQmvGhTZW9t4RV2khXBHfNpQ2ojgAt5HMA",
                "width": 1080
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/112267321752700696769/photos\">eddie kim</a>"
                ],
                "photo_reference": "CmRaAAAADqBaTZ336VlpxHHjxNv_uH12yE0HxeE7N_J17JR_4EKC_w2I8cd39UYlVwI5GlcV6ySULd6KQgQGSUrUvzXuqxpTJzJrJUhAsavlwoutu-04qO8_smWnSy-YC1FvHSOFEhAc9Em9HLo9RfMkzu7s3I7xGhTuwDBhr6Qrejip06WUBpNKMrRvtA",
                "width": 5312
            },
            {
                "height": 3036,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116646218087790883950/photos\">Jimmy T</a>"
                ],
                "photo_reference": "CmRaAAAAEkVLqHyCiAjklLG1g-7igcpxZZegu62_RgT4DbqUGzkzTmlNhlh17grxQEhvde6JFPSQEhCLtu4y8PC-GFg-2aGqsyPT2j_GzdbJbKwTQR0n0mNP03FmBKn0p5wo9rwlEhD4sk1ZB5TmwlsDg2udAoGlGhQ91Uf7Bn7C3D4wdk3DbQvVcKXfYw",
                "width": 4048
            },
            {
                "height": 3036,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103926579013957734815/photos\">Ankur Lad</a>"
                ],
                "photo_reference": "CmRaAAAAEERdYy61i_yY9o4ffkONicuu0HPQoWIOCDmYmsK24WB-F9Y6_BnN31KXNVeJGEOY3TA2QssEHIgAuEYuhzBGBkhvfhkeZFsFnaKd2oFoUJig1QZ0smx4tCD-Vtirj_h_EhC1wQEjYQBYTeryquylxelqGhSlYk_2DU93j3dZkUBxH93T35wAXw",
                "width": 4048
            },
            {
                "height": 2592,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101753994635263704629/photos\">Soo Ahn</a>"
                ],
                "photo_reference": "CmRaAAAALTgBUD9dQckqO7gyikc7PszQu-fnAxkvmBEiSFExnYU9Pl9vAFHLmCLqJuGiOf0RHfIL2ltjz3I0zpiWbx6O75Mn-nzO6-u16FMQPsmvltMnqMq0oNzf1-wBUwvDRLGzEhAF2b7Z9cdD1Gn-_puHWQV-GhQLrqW0-5wu7IohgdEpzjGY2pXkTQ",
                "width": 1944
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116789692419265580726/photos\">Paul Roth</a>"
                ],
                "photo_reference": "CmReAAAAD8gVH9mwhwEsD44rvUPNa3nqiOaQk-N7DkVEX8OPRQ_7KJ2lMAJdMTypIFESpM2r2HzrM7kgiC4UE92808iAiTowqjnEqroZ2kqb7ly2WctTLSNfCq4N8MUVtZ-jUc5qEhCwGvf6JkkReNuZq6y5ocyJGhQtHkx1TUoU5yH20vwB_Dcj0EiuSg",
                "width": 4032
            }
        ],
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "site": "http://www.eatsumodog.com/",
        "place_id": "ChIJe_C_UJq4woARLZykYEcZ53E"
    },
    "Spread Mediterranean Kitchen": {
        "name": "Spread Mediterranean Kitchen",
        "hours": {
            "open_now": false,
            "periods": [
                {
                    "close": {
                        "day": 0,
                        "time": "2200"
                    },
                    "open": {
                        "day": 0,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 1,
                        "time": "2200"
                    },
                    "open": {
                        "day": 1,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "2200"
                    },
                    "open": {
                        "day": 2,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "2200"
                    },
                    "open": {
                        "day": 3,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "2300"
                    },
                    "open": {
                        "day": 4,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "2300"
                    },
                    "open": {
                        "day": 5,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "2300"
                    },
                    "open": {
                        "day": 6,
                        "time": "1100"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 11:00 AM – 10:00 PM",
                "Tuesday: 11:00 AM – 10:00 PM",
                "Wednesday: 11:00 AM – 10:00 PM",
                "Thursday: 11:00 AM – 11:00 PM",
                "Friday: 11:00 AM – 11:00 PM",
                "Saturday: 11:00 AM – 11:00 PM",
                "Sunday: 11:00 AM – 10:00 PM"
            ]
        },
        "address": "334 S Main St, Los Angeles, CA 90013, USA",
        "phone": "(213) 537-0284",
        "coords": {
            "lat": 34.04836689999999,
            "lng": -118.2466782
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "photos": [
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/115937929263560755792/photos\">Majken Kiyohara</a>"
                ],
                "photo_reference": "CmRaAAAAeukZdNE7X4y85B1WIrYsg0OyFmQkWrLg4rXp0ItJtIq3tq6XZkxjMWi8pd0YwzZ0JLwRgmSUBTHSjXzXwyF84SVkz-FmiN9G4KgP9bz2ocVEGN0DDlSE-NLqJnd8Yv1nEhA219S2sKk3DN-OXU-zYPtFGhSY5BQHYV1Gg7l46uYSDM3txSApTw",
                "width": 4032
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106603103679000140704/photos\">Karreno Alexanyan</a>"
                ],
                "photo_reference": "CmRaAAAAmsblsK4Cbk8Qn9Bzugb8Mi-EfH50opAbN8tazp35bCu3-WUoTzB0-JxJwqNPmE7WBPIUrv1jRp448-L9ZZPbX207_OruUkmgpDsNCD2F_D-q_uCPGunUoE4KEncEvBhcEhBL9bi48w3alVdNnVKIkJPQGhS92-GwJ6bKWxW_J8mTChliLYYsIQ",
                "width": 5312
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116079477448473821992/photos\">Jen Lu</a>"
                ],
                "photo_reference": "CmRaAAAAfBJJrcG1jDid_bd2jaH_wGJgDFkBxkXMC9v86_iuGXc1CQfQGOaPcNghw0FkEVEvv1Qn93tbKVaKM3pw43VxGxzfw7EJ8w41AAzLJ9q1wo3qTk_eVFygjwWK3g7XsavLEhALLP5u7m4um6UFoRAnDrRRGhRAYKfbKPTspjjY7IDDXu6T31DdZA",
                "width": 4032
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/112488567596866217452/photos\">Michael Lopez</a>"
                ],
                "photo_reference": "CmRaAAAALTtdoMTRHlEP_oDhjt2ybKsgR80pX_-rHDrZEw6ZXMaFjrnQnhUDPmLRizF5u2sZUiDe1F1JcXySnDzlZcikRfoZP0ziuYH3GJ_vsInhuMJ3F_VZlaK1PTX6HKeZvhoDEhCpmy77y7iwI45J9yFp4Z-bGhTuQnhxcM9XckZiqKMYRT64BUa0Zg",
                "width": 4032
            },
            {
                "height": 3744,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101044968915953396588/photos\">Spread Mediterranean Kitchen</a>"
                ],
                "photo_reference": "CmRaAAAAkkf8jVIYtvdIbJx5TtXYK3kii7pTw4bo-0ama1bVgNMaPVrTGNsGJzEb66XZ98Csc5-1e-4tYtYp-ch3EBuPGIFhbL-1I-Y5TwrRMZVJmut6GJJEdz_hGUINMSaSkxb9EhB9pSBbDHkZ5JL2xZeNtiSIGhReN4j0f2QRY53ooRuZtf-sQ4NkDw",
                "width": 5616
            },
            {
                "height": 3744,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101044968915953396588/photos\">Spread Mediterranean Kitchen</a>"
                ],
                "photo_reference": "CmRaAAAA-gxerfzca1ksxPwbo4vtJY7Rg0eFvviE1M5ht5vCjeBgpik8Iya29U7Rnq2dadjiMl9ZUi8GMUMRsTzyaxbDrihGHOwPsTj0U0YDHW23AoOod2YJbHtVVT_r4priSduVEhDnbLtFbKVZhrgz2pUQaPv_GhT-lum4mUVfBENE2xihNCzufY4b0A",
                "width": 5616
            },
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113175736970858682348/photos\">Jeffrey Lin</a>"
                ],
                "photo_reference": "CmRaAAAATMQ2OEiDmDN-jmwlBZaSkLDp4WxHNFQyjudP9gvhf4Ysh-_DqucAY2fMZlUhMndUzYOuxBDYw7DojWgdJEKhka9VvyXBhM6FUyL1fBYCrTTw_4CZfCyY_rlV7MNkYOLhEhAWQSKGN4psbMFgxRgLsU3VGhQJXmVb80vyDH6fkt2m1sod62Uk-w",
                "width": 3024
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113175736970858682348/photos\">Jeffrey Lin</a>"
                ],
                "photo_reference": "CmRaAAAAsVxyqhrFMDwb7BJd8ibuCKgZn-1WEd8RrY2si9_8TyiupWSysWEXQu-pMt_whvzJlRfF7eefQs24WZ0y4C6VBprU3U0QCriEHIICvrN8fGzl3JT-nVeIJDIj7MDbItNrEhDmZMXg_qnAXL_eu0LSD7cdGhQj-AlObzUXppyFCOMRrOw85b1Xlg",
                "width": 4032
            },
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113175736970858682348/photos\">Jeffrey Lin</a>"
                ],
                "photo_reference": "CmRaAAAAxvmnjqsrfB4oBgdzUeHSMBmRRqCHwafvXF2PNWPBCPExz3FM-o8HVIVdrwdTPxlAr3iesCRpa3Oyswx3LCjaav7Bqv__PIXS-GmLxDdFny79rR-mdCEnE08Fx31GLyS6EhAVdPqtTlt3Nh86HwN3COrxGhQEyHpfBbLjdnwhKpa46xFOuVhneg",
                "width": 3024
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106603103679000140704/photos\">Karreno Alexanyan</a>"
                ],
                "photo_reference": "CmRaAAAAvHwVeJxpQQ_YVHC7d9Royp_mozUJ2x4bxHu_UkbSw3JtlMFnCC39gJWjdlOw4OTgc0gumkwN-YTEGeHlt3AL_UXGAy39vaVpBjtUJnlZFf3v208-vt4tUCsgJosrQLcvEhArqL15i9TUFubfyrAW-MgpGhSGeAcAngOBw9zDbFJw7BfoixTySg",
                "width": 5312
            }
        ],
        "types": [
            "bar",
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "site": "http://spreadkitchen.com/",
        "place_id": "ChIJ0a0QiknGwoARRzLnXcQEcu4"
    },
    "The Springs": {
        "name": "The Springs",
        "hours": {
            "open_now": false,
            "periods": [
                {
                    "close": {
                        "day": 0,
                        "time": "1800"
                    },
                    "open": {
                        "day": 0,
                        "time": "0900"
                    }
                },
                {
                    "close": {
                        "day": 1,
                        "time": "2000"
                    },
                    "open": {
                        "day": 1,
                        "time": "0700"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "2000"
                    },
                    "open": {
                        "day": 2,
                        "time": "0700"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "2000"
                    },
                    "open": {
                        "day": 3,
                        "time": "0700"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "2000"
                    },
                    "open": {
                        "day": 4,
                        "time": "0700"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "2000"
                    },
                    "open": {
                        "day": 5,
                        "time": "0700"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "1800"
                    },
                    "open": {
                        "day": 6,
                        "time": "0900"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 7:00 AM – 8:00 PM",
                "Tuesday: 7:00 AM – 8:00 PM",
                "Wednesday: 7:00 AM – 8:00 PM",
                "Thursday: 7:00 AM – 8:00 PM",
                "Friday: 7:00 AM – 8:00 PM",
                "Saturday: 9:00 AM – 6:00 PM",
                "Sunday: 9:00 AM – 6:00 PM"
            ]
        },
        "address": "608 Mateo St, Los Angeles, CA 90021, USA",
        "phone": "(213) 223-6226",
        "coords": {
            "lat": 34.0377204,
            "lng": -118.2322358
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "photos": [
            {
                "height": 2268,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/110032790597973739473/photos\">Mashed Potato Cat</a>"
                ],
                "photo_reference": "CmRaAAAA3FSqoFE_cA3RJ1THrus-PgbB3qRQBLbMNCpvxbGWMWYJbWZuKe6XWf_UeI9itNbLuHAJMKzPgnmdClLKMSUDUNSVfxyls37JGafVD52b3EM97k5hoV3mKGHz0K8CPg9REhBSltr4fjPcLEwEzfEiL5g3GhR7zQSKEzcfuUFJ7zrpSlvfKGE8eA",
                "width": 4032
            },
            {
                "height": 1536,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/112062048876605985839/photos\">JR Curley</a>"
                ],
                "photo_reference": "CmRaAAAAa6Yy8wtffDsXxBINBIWY2MaaMPFsl2E_j0ph5aqX2Kt0dZKeytqeWM5D26bvIqeNqDN093qDDhk1I2uVb4EUzidW9VBWNOHDVD9ZHF6o2CDwZoRDkpQkcts0pNdRc_S2EhB_4O9-JYmUjunqS9S4GFtvGhT0yEdc0hakbeTPpj2HJniYSx4tZw",
                "width": 2048
            },
            {
                "height": 3456,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/118349023679703422948/photos\">Guo Shan</a>"
                ],
                "photo_reference": "CmRaAAAAJPkh3LFjpxDGr9KO_kqh6w02JZBaQJAUQprEKf0EDeQQevm1We7D5chtnXF0KaL2r4fioWdt4_LHGH01qmGWrwyRKKHt-s-cHPjS6mvdi7W6YssSHb45Q9QL-Nb0mu57EhBBSwGx893uZ-MGI4HBxOT8GhSuPdVlqQIO69l45JC4cXy92RxgNQ",
                "width": 4608
            },
            {
                "height": 3055,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105285131587058339092/photos\">The Springs</a>"
                ],
                "photo_reference": "CmRaAAAAbo_7qXdxoWuT1IN3F7Q-7qq0cx8pErkjd9Li-ZkEA8bOj54Og91JXosLOaOEAYrxUDluuiGTNppQXuBQcVRYrCFVwohH-O3KVN5UR0JWrlge1ILsRZXIbQWP7j5ZpcfcEhAB7W1x9yQwvFWDm6Ohcv2lGhR8teRQSICHotJt9tRCmSVe2Vty5Q",
                "width": 4582
            },
            {
                "height": 3456,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/118349023679703422948/photos\">Guo Shan</a>"
                ],
                "photo_reference": "CmRaAAAA4-sqWFhL2rOKT0nlIUaGkDEnZK7khMXcU7K1J78dG12VNpzEl-QSxVP-j7RCPDI_lWn8opBkSdZbkM8NH659Y0m4Grm_be_jCzP6b5dlJ713yUyOiL7_LC3mySmMZlYhEhBKaSVO7oW5vAgUttQ_ekTtGhTsQEF1Cwnai2IYJGimG4-Lx1YHrg",
                "width": 4608
            },
            {
                "height": 4582,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105285131587058339092/photos\">The Springs</a>"
                ],
                "photo_reference": "CmRaAAAAkackA87j4C5ZNMM407SzZCqU6XBYOGApI-tZ13iWhxPcGzbqxLcGuX8CcvLrHH9b4U8sY1wYq0mJAGJBLO4mz0URfNfUUW7NsPoUglIOVrdM24jVQbUw0_vJZurNBL49EhDJ3UlXZEPfmwZiOnxvJudPGhRDI_ogMewQpHydevo_T37nEJ5kWA",
                "width": 3055
            },
            {
                "height": 5312,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107954377444873559356/photos\">Pablo Cravacuore</a>"
                ],
                "photo_reference": "CmRaAAAAwxsOi9pmZZ-CJvbBajTLF-V6o73UlXNUU9af0SggGGT4Nfd6P4sJNJ1MFgrUfLcE4csFCthWAkD7sqYEHnFlBG4QePlI_lpDEEgH514Kp6JuWLjH1J9RqV5DGEJAk4X5EhBuZRus9VqkjfibVd2IORuKGhRer8tIfQBWAInrd1P8qC4Cw3OoZA",
                "width": 2988
            },
            {
                "height": 427,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107503835544759938729/photos\">Chloé Beaumont</a>"
                ],
                "photo_reference": "CmRaAAAA3N-cPo2qX0R7DREiFtlWux22WjYPwDcma96qPETVLKsfVltNfbESC4enasY85CEXcGFXzujA2M-d3IJCp5oMipUTZ6ArxobQ5YhwxFsgdghxrV2VNeOmEYgcFhKsEbBSEhDuC1jxEvB5R3R8L2S586g6GhTqealZlSUAGL90oNK5gNFm02GmDA",
                "width": 640
            },
            {
                "height": 5312,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107954377444873559356/photos\">Pablo Cravacuore</a>"
                ],
                "photo_reference": "CmRaAAAAaEr58uh2C5I9LnqnO1ljeWbF7Ozj_02E6oX_jzshPCL5EuGwKxdA108Mg9fMkhkCUYSSN9KcoBAnLsywuGX9ZcbQfJo8GWDi3GCiKzgtsgYUcj-d7P5MjKqY6AaYHoo-EhBYlh0g_XOnlZfbtjVcinnoGhSL7qs8ASrQWkBwGQc6X2DSZ-sIfQ",
                "width": 2988
            },
            {
                "height": 4535,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105285131587058339092/photos\">The Springs</a>"
                ],
                "photo_reference": "CmRaAAAAp7s34H6GhQCbkI7laSMzpxnb_9FBhwtMrFJ8LivYET4l0ecWu5BJVHLUzd2_vqzV_-pQWuBdZ_Jf_xhi28neb4O624ZJ5BaC1RCqF7bdE_FB-aNVCrLQwWtEWfulU6MeEhBMalfoa25ZBqg95mH3vLKuGhTyUPNj3H3YF9F-Pyi2z96_8JP-pg",
                "width": 3087
            }
        ],
        "types": [
            "restaurant",
            "gym",
            "bar",
            "health",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "site": "http://www.thespringsla.com/",
        "place_id": "ChIJEW3mASPGwoAR4c5ERwMfO4k"
    },
    "Gus’s World Famous Fried Chicken": {
        "name": "Gus’s World Famous Fried Chicken",
        "hours": {
            "open_now": false,
            "periods": [
                {
                    "close": {
                        "day": 0,
                        "time": "2100"
                    },
                    "open": {
                        "day": 0,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 1,
                        "time": "2100"
                    },
                    "open": {
                        "day": 1,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "2100"
                    },
                    "open": {
                        "day": 2,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "2100"
                    },
                    "open": {
                        "day": 3,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "2100"
                    },
                    "open": {
                        "day": 4,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "2200"
                    },
                    "open": {
                        "day": 5,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "2200"
                    },
                    "open": {
                        "day": 6,
                        "time": "1100"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 11:00 AM – 9:00 PM",
                "Tuesday: 11:00 AM – 9:00 PM",
                "Wednesday: 11:00 AM – 9:00 PM",
                "Thursday: 11:00 AM – 9:00 PM",
                "Friday: 11:00 AM – 10:00 PM",
                "Saturday: 11:00 AM – 10:00 PM",
                "Sunday: 11:00 AM – 9:00 PM"
            ]
        },
        "address": "1262 Crenshaw Blvd, Los Angeles, CA 90019, USA",
        "phone": "(323) 402-0232",
        "coords": {
            "lat": 34.0480944,
            "lng": -118.326348
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "photos": [
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/110205279137077398435/photos\">Sepulveda Blvd</a>"
                ],
                "photo_reference": "CmRaAAAApu0oURJbt1-X5DsJUZmSf15uDNJrWAIrNtNln5ADYVT5tGUf3op6ao9J4_VYD3ip6K-OB7uDMqbGyhX6PHxk9wPsJX7hnvrGS16HM0cb6qOS0JVmTLC-XRCrywSttESCEhDD1QRFYQzfiS3rCAgOtFGUGhRz46POh3uLaa8KvJIXRD2dymel1w",
                "width": 4032
            },
            {
                "height": 3464,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113399451921129177252/photos\">Keith Del Mar</a>"
                ],
                "photo_reference": "CmRaAAAAu7UEq_-njKd18Z2fO0QNhCZ85M42TcMaCPWUVm_U57Pg7_peR_9ZOOK6sFiArC9Wq88_Qig8w8fxi120zdTVG_Ble9tB4XlhAH14n2w4vJd4nasmyyvc6v8DG8chCMrJEhDi-zuBSG58nq4jPOX7vFEGGhS2D6wlz26j0T9aF2VBhtbFxN7RxQ",
                "width": 4618
            },
            {
                "height": 4128,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116833236719040303236/photos\">Nictaye Stephens</a>"
                ],
                "photo_reference": "CmRaAAAAzkDY9IPSnu-ihHN4tYTbt0o8LXMw70DhNrpTqdP5pH10H1Ss9IspGcmpPmDnx2BYYmrWeFGWlJCHV6uLKnoM_tdS3qpaIRBg-ySq1XB33t3IYl5ydjZG9Q_KkN2gw__aEhBEr9B1lECXoCnVNro-ksp7GhTNz3of9-AvpnlgkX_HUXvsR23QwQ",
                "width": 3096
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101537613029556277066/photos\">Arty Elias</a>"
                ],
                "photo_reference": "CmRaAAAA1X9jsm3bnnRjAxg5JVUlPppjWF13fwlZgkSD-3ChauYe8wAL571IbipVzKtuXBg9pIWkXfPV_fWSvsAUrYIOOf1gIEEQbNd0VxzwKtaiG25s4ybQTfORb14ojMJ8oxdSEhDDpL6_IGSdR0C4BHjQV2L2GhSyhC7lT-O0VQB4iB47OUOOrSGbTg",
                "width": 4032
            },
            {
                "height": 3036,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103461940104185098114/photos\">Charlie Seo</a>"
                ],
                "photo_reference": "CmRaAAAAA5WdAU5-L7VZvub39fr8z7SL61cNIlSeCWixg1s5TGhPNysiXPzk3WIjYGa6PuH0JDQMwYwr-hM4ByEFRPevFZaz3WxSAu6WHVWuDh46A_883CA65OjmX6xnqoSvlOrIEhB13Eb3s2SmRFN2TVgncQG7GhQlDHJ0sq3lsA2aaYuFkXPlXnJadg",
                "width": 4048
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113991917019270935627/photos\">Jackie Bacal</a>"
                ],
                "photo_reference": "CmRaAAAAJJcxG9e40W_i5qd-zHrmTfB4dPl_m66J2jt6qIWKDNa050m3TfP3p7LIs9zwIUm5mi3zT97TU9AjzHE9CNcQLuZNpIf02OXwqVqrdyaaTVJyWVrnN2m_PNAtpac6ZvfXEhDBChTeQHtRjGwz_HCoaSXUGhRjows-6a47qsT-wbvQsEN0o9OqaA",
                "width": 5312
            },
            {
                "height": 4160,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/109144285187016728862/photos\">Damien Ean Castillo</a>"
                ],
                "photo_reference": "CmRaAAAAMB4cR2N6W8_3JuPNAC7B8WdG8juBcdeUiBZUbJhwYDdS1rAYLQfDJ4luawqGEG0si1_nwLj765VURicexRhqnX66yGQ5p_qgrhHtffjuHbmwu98z09mCxFARdph9qnVzEhB6Hgzd0JxRXUPQhSL3uWhgGhQaVQAJ1RDRkVybkNQ00ZdmPacC0w",
                "width": 2340
            },
            {
                "height": 2400,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113455864806036853811/photos\">Christine Seng</a>"
                ],
                "photo_reference": "CmRaAAAAA9dBg8YJjv-v4x-dTTfaYYmr9_Sc0ztiTYBhgDBgP5zMKwrBF9TBl3FMVZVrQvWK_xSHYEg_hYU1BLqJN0PN3pJBTudxF-_cuavLisURfNz9duD8tEgB98d7RxIY0ySREhBNuGQrXnpQ0m11BKHd_lc8GhTt7qWv9dHs9lt1r8YlzNmgHmFGcQ",
                "width": 3200
            },
            {
                "height": 3036,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103461940104185098114/photos\">Charlie Seo</a>"
                ],
                "photo_reference": "CmRaAAAA3IKIF1__IbnSBmJcU8SgZ3GVDAFcRivkomLU9KP4G4JzsN2Wj4Z8OscIYbE9T4o4JVCwC97gRoNuMwORZncU0xtihX8pML3U0pvd6qKsrHjbmek6Gz8XgnH2uxSiV_-bEhAfpv7h9kEMq_21WqrrxDpZGhShpXVDGs3Ps6QsDcln74eRAVWH9g",
                "width": 4048
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107388029041786975873/photos\">jUAN wEISSENBERG</a>"
                ],
                "photo_reference": "CmRaAAAAeZDIEuJMHJ7LlYv4tv4YQU2klfEQCZqWxUZWn-2nwlj1dzWgFoMVD6jwHre4Huu27TAkCsOnXDDk_PEcWlS0LwLZGVPIj3_ZkuJz1GRqhkqlLBSpGKpzm6ePD5UxFHbPEhA5JFqsecCx3DtaG8apW_B8GhR9oQWngM614Wobw2ABy0_Q7LOr-Q",
                "width": 4032
            }
        ],
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "site": "http://gusfriedchicken.com/la-los-angeles-location/",
        "place_id": "ChIJE8L2mvW4woAR-Cc7WipCW4A"
    },
    "Best Western Plus LA Mid-Town Hotel": {
        "name": "Best Western Plus LA Mid-Town Hotel",
        "hours": {
            "open_now": true,
            "periods": [
                {
                    "open": {
                        "day": 0,
                        "time": "0000"
                    }
                }
            ],
            "weekday_text": [
                "Monday: Open 24 hours",
                "Tuesday: Open 24 hours",
                "Wednesday: Open 24 hours",
                "Thursday: Open 24 hours",
                "Friday: Open 24 hours",
                "Saturday: Open 24 hours",
                "Sunday: Open 24 hours"
            ]
        },
        "address": "603 S New Hampshire Ave, Los Angeles, CA 90005, USA",
        "phone": "(213) 385-4444",
        "coords": {
            "lat": 34.0633841,
            "lng": -118.2932426
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
        "photos": [
            {
                "height": 1365,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101241915903443108886/photos\">Best Western Plus LA Mid-Town Hotel</a>"
                ],
                "photo_reference": "CmRaAAAAjjtIFAoxrtXBGHt8b_yTodKAfYpKg10Y0xFQHDko171RiZJSe0K-pqpJ5ojS_381KzmsMHLkYdhW0LxrrYHuavdZKDnBkp9NAekEGFN4m7ueivkskFUEaKYhtjfc0ULaEhBmRFqLKHtEQUVrAjE9-JQHGhRdHWPgQSEpruKup92Bg8hzd1Fpdw",
                "width": 2048
            },
            {
                "height": 2558,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101241915903443108886/photos\">Best Western Plus LA Mid-Town Hotel</a>"
                ],
                "photo_reference": "CmRaAAAAJxchFgBQKM7oQ1AaW6k7Z-8R3b0Q2BdANinPwmNDmrrX_8sAKCOOD_URavV9m_TLehvu9iXEKh-eiY5SdQkXWYqNnFsZHsPEueO6jAm3s3DaKDSgVFknLOfzBevdhBjdEhBImx7AMLZtYPKT7oCBPIM6GhQcy0hlqMvZkLIo5T2ZA8liFzCBBg",
                "width": 2558
            },
            {
                "height": 4608,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/110299667888672163978/photos\">From a Google User</a>"
                ],
                "photo_reference": "CmRaAAAAhV5kcOPkuGie-TfDWH65QfoZIqqnMgN4O-svu9yE62n7GsLN8TF2W6R22GsAVH7R4qWj97OZ9NGoEvrwW3f0UVSiCV7WFIkTdbM_BOJDuyUh6YE-lo2QonlPrp010TrXEhCB9Cgcyi9D1GLaqzKz_pOXGhS1PWdoSK_HuiG6NE-Gu_aqdCBmKQ",
                "width": 3456
            }
        ],
        "types": [
            "lodging",
            "point_of_interest",
            "establishment"
        ],
        "site": "https://www.bestwestern.com/en_US/book/hotel-details.05724.html?iata=00171880&ssob=BLBWI0004G&cid=BLBWI0004G:google:gmb:05724",
        "place_id": "ChIJKbTZfnvHwoAR-pGNKdMyBM0"
    },
    "CAVA": {
        "name": "CAVA",
        "hours": {
            "open_now": false,
            "periods": [
                {
                    "close": {
                        "day": 0,
                        "time": "2200"
                    },
                    "open": {
                        "day": 0,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 1,
                        "time": "2200"
                    },
                    "open": {
                        "day": 1,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "2200"
                    },
                    "open": {
                        "day": 2,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "2200"
                    },
                    "open": {
                        "day": 3,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "2200"
                    },
                    "open": {
                        "day": 4,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "2200"
                    },
                    "open": {
                        "day": 5,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "2200"
                    },
                    "open": {
                        "day": 6,
                        "time": "1100"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 11:00 AM – 10:00 PM",
                "Tuesday: 11:00 AM – 10:00 PM",
                "Wednesday: 11:00 AM – 10:00 PM",
                "Thursday: 11:00 AM – 10:00 PM",
                "Friday: 11:00 AM – 10:00 PM",
                "Saturday: 11:00 AM – 10:00 PM",
                "Sunday: 11:00 AM – 10:00 PM"
            ]
        },
        "address": "6256 Topanga Canyon Blvd #1280, Woodland Hills, CA 91367, USA",
        "phone": "(818) 860-7670",
        "coords": {
            "lat": 34.184264,
            "lng": -118.6046308
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "photos": [
            {
                "height": 638,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/110068555979369293206/photos\">CAVA</a>"
                ],
                "photo_reference": "CmRaAAAAZ6qIMJosec8burn3vQ0FDOw7Ps4i6r-yigXsn4_CgSjKl74XF37gLs3lU9o8Fw6VOTNQOLtl5TXw9F0k95vrm_g2LKP72kFATxJYhttRBFp4uQG3HojNEu_eicpW7brAEhArRt_mwcsSlb5fiD4w4K9qGhRlt3EaxgC-twvuPXUK44HZLB35fw",
                "width": 1129
            },
            {
                "height": 638,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/110068555979369293206/photos\">CAVA</a>"
                ],
                "photo_reference": "CmRaAAAAfa5GG9pFHI_fU_sDCSEh9umeCrJzlkyilLU4gTdDF7MeU8GFKdq2hPyArpCrtV1zOH7BLb26oAHRL4bypveQ93gq2wRvpY59Bug2YjGEpkDIQcyALdY0UyhrftuKdNAVEhBK6h-VIu3nxZpf3o6gjb7yGhSScjaNLUWnIKe7hBONx045CxwnkA",
                "width": 1129
            },
            {
                "height": 3264,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105203972253195665967/photos\">vesko penev</a>"
                ],
                "photo_reference": "CmRaAAAA9x1t72H2SXtXAy7nYQq9XjmQV2uEz2fRQf73UF69TWZbhjqdn21E2VgDh312h90TAO2auyFkZrVlbypa_JMrwOxLKI0AVhj65pM4k3G1Jg0P_QpFf4EMt3NcHbvHFMp9EhAyDWT8DVCiDbYEEQjhOO5pGhS1pwgYwFMNVcCU_txRnKCcR4UFTQ",
                "width": 2448
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108545421548667474445/photos\">Jerry Soer</a>"
                ],
                "photo_reference": "CmRaAAAAwy2tw_6SN0P4X8iC1IRSjwS1VHa3cwCfYipyn9cpCAYfUV02eUbfQhdr4pXnuCb2eb22X_c8JSHE7tuY3iBKa9i2FrXfcBotvVYH908mUTPi0Jr4Vdrd8iDeBfLvE9owEhAz_tvpdLDafHUF_sQ3k5OzGhSWJcSKzqE9CuXicJVq56N_govsqA",
                "width": 4032
            },
            {
                "height": 638,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/110068555979369293206/photos\">CAVA</a>"
                ],
                "photo_reference": "CmRaAAAAhUvnmw_xsjaGx9BSVGNH-L-C2q-A5ZFgRZ_ugqfzRNBb6qDkhfHhX3g1QRV5ybd_m958qStM-h5t6sRv_Ovo5V_ucDWenOIh_23YlncGoCn3MS7LH4EWH1O1lJOGzFPaEhBVQSX2f_tyVQ4A4vkF1lgAGhSvVMaxanFcfkXHm3hnhfK_covOkw",
                "width": 1129
            },
            {
                "height": 1836,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114721612311460555337/photos\">Edward Dawson-Taylor</a>"
                ],
                "photo_reference": "CmRaAAAApcdRYHVWZBsLr4g6x4kkmvQlhQNEnAWJZUM9f0BFstpCB-3AhCS4waYgsQyMNqfcMsUGxWv8VLx5NE1OhPGmReJgdGcotZrvSDH5sT3qWbIozQra7sjBzNBFmFOsAaYkEhC2jn-mlPTD3E09R_OYJ177GhS6VwB67B3wqqTcw21N7kCi99z9Og",
                "width": 3264
            },
            {
                "height": 3120,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/102796247460041263196/photos\">Michael Henson</a>"
                ],
                "photo_reference": "CmRZAAAArMpCrHxO0gky2ffCqKG40DHpQFmhRgRfUVCLV1NNkhcdmpDVPJkozyQAXJEo6xC5ibsJ3jno4iE8Cf1I3FLa_bOSNHjtkN14oSuENk1Kk-H6D5E9YE1BV63B-I01wsRcEhDEpqYjkOuxpEsZ8XCbmK7VGhRojH1rRsX8eTau3miY2DrOt4EWiQ",
                "width": 4160
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105097655142435906392/photos\">Issa Khorrassany</a>"
                ],
                "photo_reference": "CmRaAAAAwFCBFOiFe2r-cwMrEFpsR1VXJNndWSOZNggRCuh5kMMeViCxHh_rK244_gTOEsiPqGl0lSzHau0gM8j6rKqhJ4u7TYRSvQJh36UDxym2Cz1HMa4nVhoqc2JXMtrjkXWDEhAfC-KYpInUBzczFnaDnco2GhS0OXX0NSxlVSCwjPy9V-XlZF_awA",
                "width": 4032
            },
            {
                "height": 3088,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/112649000593232548223/photos\">Bobby Liu</a>"
                ],
                "photo_reference": "CmRaAAAAlr05fQNdR_90c3l9D2o81GlqTXNnJMnV2v8WN6Nw2SPczLBPC9dhS3Ck7kzxLaKVkZwCjV-MVci0xKk_AoXiGEOkwEUpbl_y--uN6OfYNFpLWiYXgvUU3FHmtSpyGDBKEhDYzsc7aILFqoDKUEAIX7aHGhSudNuUeZ-IooxMQiI7irQ9Zv_ZDw",
                "width": 4160
            },
            {
                "height": 3036,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104486961162478390053/photos\">Nick Beswick</a>"
                ],
                "photo_reference": "CmRaAAAA1Hp6Voe_mFSIdLNa2Y5xBq4ezKOwKVn6ed69MWTahBVwVvrUKzVy4A5LcbpeBJA1fbQy0TyDrBZyisNl2HwnBN-ipTrVenlBQF3zmRmACtTrByKkAScDv2wSzIBZGTjpEhAoyydz3CAlX1UdeoVhM1CFGhS7BH-0tOaW6cIRe5v6LPD6xiYhvg",
                "width": 4048
            }
        ],
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "site": "http://cava.com/",
        "place_id": "ChIJT_axsiGcwoARBVLaLcfKqQc"
    },
    "M Pizza": {
        "name": "M Pizza",
        "hours": {
            "open_now": true,
            "periods": [
                {
                    "close": {
                        "day": 0,
                        "time": "2200"
                    },
                    "open": {
                        "day": 0,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 1,
                        "time": "2200"
                    },
                    "open": {
                        "day": 1,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "2200"
                    },
                    "open": {
                        "day": 2,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "2200"
                    },
                    "open": {
                        "day": 3,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "0000"
                    },
                    "open": {
                        "day": 4,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "0000"
                    },
                    "open": {
                        "day": 5,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 0,
                        "time": "0000"
                    },
                    "open": {
                        "day": 6,
                        "time": "1100"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 11:00 AM – 10:00 PM",
                "Tuesday: 11:00 AM – 10:00 PM",
                "Wednesday: 11:00 AM – 10:00 PM",
                "Thursday: 11:00 AM – 12:00 AM",
                "Friday: 11:00 AM – 12:00 AM",
                "Saturday: 11:00 AM – 12:00 AM",
                "Sunday: 11:00 AM – 10:00 PM"
            ]
        },
        "address": "3881 Wilshire Blvd, Los Angeles, CA 90010, USA",
        "phone": "(213) 738-0077",
        "coords": {
            "lat": 34.0618891,
            "lng": -118.3114708
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "photos": [
            {
                "height": 608,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100699501631522843825/photos\">M Pizza</a>"
                ],
                "photo_reference": "CmRaAAAAYnS7h81wwZ-UXnMW2esJJJ8m1DVbZdb7laaovlvHw8xW_mBX-o29PDV7Y5y8KVClqnv0G81s1fykH8526jCIZgT4922TIrNdNIKtqqyx58S_bnWOa6Px6w4fDds6XOjSEhDFLdG7F5hp7cK3iurQIL9rGhRSPRxKzt_a2mXyr7FVi8cU0-lD2Q",
                "width": 1080
            },
            {
                "height": 1000,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100699501631522843825/photos\">M Pizza</a>"
                ],
                "photo_reference": "CmRaAAAAlEmAax9s-7I_Fh9iN1UfgeNvzbkUaTjym0NRrGUUia4uCyWOxhQFoSPC8bM1-DU0VsrVwjxhjG5rz0g2PF4VVkJDXbXXseqa-w2I18CNzGFBe4WoZvIVJSLNPxqE-3M0EhDqTu6o0v22PCsvPnXJBgUFGhQMsAHOsC9KDK62rGF5Bjjzjf7fUw",
                "width": 1499
            },
            {
                "height": 2048,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100699501631522843825/photos\">M Pizza</a>"
                ],
                "photo_reference": "CmRaAAAAQXEktRH9YZXkt94vLkxwNMQNUXizsawMLYN2loqmaQ6LOPn8UF16DEzlTpuGpcfmFkCOZwffOlHSOD8RkMA6-KioS7eKJrG9lMK2T20d3vZ2jG_YfEkqt2HkXRL_9ywQEhDqgHUuKDrhXq8biZHbpZuTGhQKl8q35nmYDQPTDbm2XYU625HvdQ",
                "width": 1536
            },
            {
                "height": 1000,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100699501631522843825/photos\">M Pizza</a>"
                ],
                "photo_reference": "CmRaAAAAfx9PyWSjVdqN85RjIg74Y0V6hFPp94l2wv0LGqiikM7iN_cHcbvW1bTrxDcNb0eqQpBEvGDJbRMLnb_Dfue2TMz2tt2cPuLx_gDHZ4JRCE4LP82Eivjx-pdCLz2B4ykKEhAb799BXYlcV5d_gaE2jhpYGhTSegEcS_8LmJEoWLuuzHyEXarR5g",
                "width": 1499
            },
            {
                "height": 4608,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/117510042741314763162/photos\">Renee W</a>"
                ],
                "photo_reference": "CmRaAAAA6HiCzjKfOIX-erHMVxty3PODHsRU_m1w1dJcv4xms1eAa9HWaHgznWioXi_aBuJk4pzM8FkkO7Srbu9a2Wz_DNDGKauszCVoOzzGTQ8UGORu42qWYaP6TEnRzbx6WuOtEhA2Qb-aCO7ApSzm51Pw2OtVGhRXa23IDXqyETp4zElDRHeFVN7qkg",
                "width": 2592
            },
            {
                "height": 315,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100699501631522843825/photos\">M Pizza</a>"
                ],
                "photo_reference": "CmRaAAAALxHO1Zb8hgIG-Sbaj1zJuqpvO6ztcKt1dhh_93Nncnv7syc5sE4qMtQLVvFQMle1Y6BQej6vTYhaQVLqQ5LPGwl8skjLn5IkwWk4hcx_isSQyr9rx6JtLuZ6Fs7c9J_fEhCC7KnkAs7vKm2zqNDlxTO8GhSDKGLZsfwMXB-hycb5RdfQ9Mb9sw",
                "width": 851
            },
            {
                "height": 424,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100699501631522843825/photos\">M Pizza</a>"
                ],
                "photo_reference": "CmRaAAAA-GFMj8a7E_GuDlYrosIs4YHAD9YSRs5dGl7n5eE0z9iswEy9f7xmqdMDFS-74eTBtHCyl-_XnY0nQQjBRU4MEtEgzzHH1s84daoKy3ddCGgrkFPB_iMjm7NlmKmE7F_vEhDvuHMJWdWB_7cmLe57R4E4GhSg4jCrdjrle6ePcg8WMP1IM0Mifg",
                "width": 640
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/102277118431814231637/photos\">justin kim</a>"
                ],
                "photo_reference": "CmRaAAAA9UsvEWvH2Ic7Tox1nEIzx1Q7Ex8gNiVM8RO8S1YKI7g_B8c3cWxWSin2nnK1gS3mPROYTBy7WFWlp3uwQbY0zm6mIgMzGXtay7k-wfGi3XyNjKwK1Ac-8ThPNLgOu400EhDNpR47CLdnp4b3yR_xBzXxGhR9fhOmlMjszmXV71_v97tjvG6whw",
                "width": 5312
            },
            {
                "height": 4608,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/117510042741314763162/photos\">Renee W</a>"
                ],
                "photo_reference": "CmRaAAAAwdQp7vrML2sKO53pxkclgWGn69HLDyV2ucorgN2G49mewx5iGrb1iP2qgCixThv6peSqCpAbtXbjQH6Ynfjlvhdc_JbNyZgzVgW0EYHWTSjdkqOjflvzK4aLeDDT0vi2EhCYJyJ0T2wFf8YVjbVBEX1jGhTJVL99RMJP78FaNgn8E-QcpXKQ9g",
                "width": 2592
            },
            {
                "height": 2773,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/117627954130766996715/photos\">Jin Shin</a>"
                ],
                "photo_reference": "CmRaAAAA6u73CAl8UNYcQ-hpamLz1Mhdt3qp98U-Iw3Llvmn5syhID7SbaSaYDpSu3eRhfZk6e2xP5-saPFWM1JwKlIQ9ROPvkcABjGK43LU3wcCicFpudeEyW1PH9MCAiwdRs2REhCVXVxL5PJUF39cx1OnYYxJGhS9JaGAkWVJ2kcmVjKG7Fx9MeaxQA",
                "width": 1560
            }
        ],
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "site": "http://mrpizzawilshireca.com/10588",
        "place_id": "ChIJQUM6BpC4woARD3ewPW27xtU"
    },
    "Seoul Sausage Co.": {
        "name": "Seoul Sausage Co.",
        "hours": {
            "open_now": true,
            "periods": [
                {
                    "close": {
                        "day": 0,
                        "time": "2300"
                    },
                    "open": {
                        "day": 0,
                        "time": "1130"
                    }
                },
                {
                    "close": {
                        "day": 1,
                        "time": "2300"
                    },
                    "open": {
                        "day": 1,
                        "time": "1130"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "2300"
                    },
                    "open": {
                        "day": 2,
                        "time": "1130"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "2300"
                    },
                    "open": {
                        "day": 3,
                        "time": "1130"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "0030"
                    },
                    "open": {
                        "day": 4,
                        "time": "1130"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "0030"
                    },
                    "open": {
                        "day": 5,
                        "time": "1130"
                    }
                },
                {
                    "close": {
                        "day": 0,
                        "time": "0030"
                    },
                    "open": {
                        "day": 6,
                        "time": "1130"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 11:30 AM – 11:00 PM",
                "Tuesday: 11:30 AM – 11:00 PM",
                "Wednesday: 11:30 AM – 11:00 PM",
                "Thursday: 11:30 AM – 12:30 AM",
                "Friday: 11:30 AM – 12:30 AM",
                "Saturday: 11:30 AM – 12:30 AM",
                "Sunday: 11:30 AM – 11:00 PM"
            ]
        },
        "address": "236 S Los Angeles St, Los Angeles, CA 90012, USA",
        "phone": "(213) 935-8677",
        "coords": {
            "lat": 34.0490392,
            "lng": -118.243729
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "photos": [
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/109172398327003691838/photos\">Angie Harness</a>"
                ],
                "photo_reference": "CmRaAAAANjI12xDSxJxAD9zPTwk0f7ja-K7AY4SQEdS43Qly-3DZKK1jezahcHfRCd_xxhg7d_5b50yzQ9vqi6wWjHETT1ohtKvL8kbRADtR3AIHERBT-N_EoZRJKZFj62jm3DEPEhDBBOmQyEZTcRno61-jv_l9GhR3lWRALRHGOrOuy3UhyL87Tcy8gw",
                "width": 4032
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/115147283214395427265/photos\">JUSTiN FONG</a>"
                ],
                "photo_reference": "CmRaAAAAECQfLKKeNTiehuCpv0L4aj_x4-ieCWghl4scTUFpsQ1aCTQLieWsts12oFUVbFc3g0kduggqvi0q_7oB-CtoRJym--aeyv8OD7QVbThFADUAzZEL-h1odLKOJIOIy5gkEhBiEUnPrRMEU7alDyACeZbkGhRzvl0gr6bIgZClxLzFBx9der9EUw",
                "width": 5312
            },
            {
                "height": 1836,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104898340392295858285/photos\">vitaltraining</a>"
                ],
                "photo_reference": "CmRaAAAARQ7N6DrZS_qarSKJGcSRXvDfBk60D2j2aIZqhkoVvPyGJGNIx9i7GKJ0no6q6Qa3ANfogXPwhPeVdLIBTCzCBph7yv5atPRvWrEfJ1Mp3n-2h7vIou6LdTJAbnMdFeP6EhBc8kfl9ab7UdbKEawu0J1ZGhS1y_qRb4s0dDX0nSjBwva4RzltkQ",
                "width": 3264
            },
            {
                "height": 1440,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113955339273250582956/photos\">Lavena Lewis</a>"
                ],
                "photo_reference": "CmRaAAAAdYgRPEEQdupnhQ3ZswNo7Y0W7pUkMIm_lecJeDYBg0ff9f1P9-nIgMTkg2eZlEtJnMdcyD-NgEQR-iwrQGz7yU5sCG1Qi_eSG_BFY751DJp1hQzWUTaA7DKGG71zFbbjEhAY0YOR7gISkhe49nw6m7ZEGhRUBGHO5H_wwv47AWNFvFmbqsOrYA",
                "width": 2560
            },
            {
                "height": 3120,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105928426188405955991/photos\">Mic Palero</a>"
                ],
                "photo_reference": "CmRaAAAA0D-J-YsbB2nUYb5Y3JH3KrNcLMvB0EEApnoefjPB-leWXmuVf9Onw1c16stFkP-86ssbfwAW2YF5uKvVbplzEuY3ZAYofT-GSsqK5jW_tz2TFPyauYfARgIdehKMqBG8EhAB-8qmhTK8A7EfUHMrS52WGhSTZbwgRHtx8bG0qIPnXCX8RxHPeg",
                "width": 4160
            },
            {
                "height": 3096,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103399757832719340517/photos\">HydroKronic Vilchez</a>"
                ],
                "photo_reference": "CmRaAAAA3E0vckUHidmfP9zu7Ie3llQLQoH2aRMNjjyus-xcFL_e5_p_QkvXGa1KpgWMf8Hwmdm_J-KlUSKnK6utuuDp1QK6DtiMWdmdeQFjr-6rQjf8_aK2HVagRzWcc0XIfvCQEhAavP64_Xrdfjcx40kEiBUfGhS6U5lBlX7OKXRdZ__fO8e7rF73Wg",
                "width": 4128
            },
            {
                "height": 3120,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105928426188405955991/photos\">Mic Palero</a>"
                ],
                "photo_reference": "CmRaAAAA7ux4SXhkOYtEenbm2zDeiWGHhJXGoU759nTaSz62QnV_hPWObFFrPV7J6AvZceqOgTJRqQOaoK-zUe73SvqKSY6pakv9tH6B7-FcECbc0APY7B9IAy3EMazvdfrIjppZEhD5l64IPxxCml-CL2XxfhEDGhRj6FEr-ntSik50TJr1CLIcpXf5BA",
                "width": 4160
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113343723817594995267/photos\">Mark Boonyasampant</a>"
                ],
                "photo_reference": "CmRaAAAALcOGHnCRXJK8ez31m5Mn4NeD-8678M14udMTDOPQQXien4KPajUVu3nDAI-G3Vq5MiSMxUjRAT3wlBl5Si81LUvM2W1BeKnM-R_PBiwqAdQ7FEnsR_dz0mze4PSFPNaxEhBocl4IdspKgJzK1FOfjVr-GhTYDcaw2vinIX0I0L_R_wW9O4rtJA",
                "width": 4032
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108708752145279099093/photos\">Alice Fung</a>"
                ],
                "photo_reference": "CmRaAAAABwm1zUZuJ8e_WARLfJVrbgnKmlA6aWfFi7SLDCrZmn14gAcQoq9gpv_gw9q02oQ2J0EbrTN7tdCoGtvRfUCvEUy3dP_XynrNXjOAiarSA2XsMxzV_5dZCcr6SocChjt-EhCk6K4eo1CzpXSgXSBMcYnqGhQdTA6-WOJOCisV1QIvcmwXBvElpg",
                "width": 4032
            },
            {
                "height": 3120,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103324093563804070829/photos\">Ivonne Diaz</a>"
                ],
                "photo_reference": "CmRaAAAAKZfwGEXwDmLVAmTPD5Qh8rmQuxN_oN6VqvDQFEQES9XsG53zzlu1gfmBCbTRLjF9qkld1WkkxoqbFk9MA-lP0v4_gZU_iRRugDHWgIUwGaoW08pfg1Ut3k1OXAaTzhkKEhDzzvLA3Yeg50b6F7qTXec2GhR4fZof_t1zVWYJA_FDVbO59EgV4g",
                "width": 4160
            }
        ],
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "site": "http://www.seoulsausage.com/",
        "place_id": "ChIJtXN-S0jGwoARSsTp90P79SA"
    },
    "Gresescent Ice Cream": {
        "name": "Gresescent Ice Cream",
        "hours": {
            "open_now": false,
            "periods": [
                {
                    "close": {
                        "day": 0,
                        "time": "2100"
                    },
                    "open": {
                        "day": 0,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "2100"
                    },
                    "open": {
                        "day": 2,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "2100"
                    },
                    "open": {
                        "day": 3,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "2200"
                    },
                    "open": {
                        "day": 4,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "2200"
                    },
                    "open": {
                        "day": 5,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "2200"
                    },
                    "open": {
                        "day": 6,
                        "time": "1200"
                    }
                }
            ],
            "weekday_text": [
                "Monday: Closed",
                "Tuesday: 12:00 – 9:00 PM",
                "Wednesday: 12:00 – 9:00 PM",
                "Thursday: 12:00 – 10:00 PM",
                "Friday: 12:00 – 10:00 PM",
                "Saturday: 12:00 – 10:00 PM",
                "Sunday: 12:00 – 9:00 PM"
            ]
        },
        "address": "850 S Olive St, Los Angeles, CA 90014, USA",
        "phone": "(213) 278-0111",
        "coords": {
            "lat": 34.0439333,
            "lng": -118.2578095
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
        "photos": [
            {
                "height": 2952,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111949362620415989443/photos\">William Fox</a>"
                ],
                "photo_reference": "CmRaAAAAUvOM4SoLux4DsdItUvc9VomGAQCKOpJ3J0tmiFkfmWSUz0neYNuz4BdBHaePfCp8SC2AvN4fY4r3Xmu2dhgcs8UBySSCLJuKy_bJIUnFmGqkZaCGSsL4WMUtwvcHRE54EhAuGEiSxtsqqUU-mQhARVk5GhSt5dmA3NfjTlvWYfRqASMIsWTHxA",
                "width": 5248
            },
            {
                "height": 1080,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100573686391970169734/photos\">Biology Lee</a>"
                ],
                "photo_reference": "CmRaAAAARDf56Nv6VKzZVOtkcK1l06Ll6-9pUiRHnwKrYClP32MqtoflJz8m2WL5o6ImCfuSjLDp8mcO148g_yyugviIepPM0rp0RpHjmQz9FABRhme3M4eawZbkg8xiXsn1BaxEEhCqvr_C0AoSM65Ynz3V8MVQGhRnJZrb9u8S0gVqJspksymL7S2TCQ",
                "width": 1080
            },
            {
                "height": 2952,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111949362620415989443/photos\">William Fox</a>"
                ],
                "photo_reference": "CmRaAAAAbKG5dXSKE3FAMRYolq93y9aP956p8vlbvBGdu42e1K-vqBmg8jrTbnRcyLfh-jVUvthTFcp1DDLyx4DJl9Nn8ZQmRWW5e1oXRZHgHhYk-179tuzlPbTAv-qIhhV9jGu-EhBk8N2DwVznntgGIZJA6POWGhTqGiNvpbPlQGwLWudEpMFIcyNRuw",
                "width": 5248
            },
            {
                "height": 3492,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103796897497664882519/photos\">Shawn Lee</a>"
                ],
                "photo_reference": "CmRaAAAAqA7gjGPenthscitgf5VBX-A66R_Q40PNoz6AEr6E3ovsglyYii7UjXCVmNZeqVap3Ii2MZPFmmj047c6NoWay4S6SKaij6Jtrj_cQ2P0krO675wLqeTs4i-yfADKfULWEhDBcgP5vfpiFUpF-9K5aKcIGhTQ0gIntX6iFRsXwYyfqs5UY7TTAQ",
                "width": 4656
            },
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108930921920917120864/photos\">Bobbi Vie</a>"
                ],
                "photo_reference": "CmRaAAAAaRdXeyJL1Yx0iZAiT83BsckKIzxZ7G3Uo8rSJAlT5t-IAibasm045BlT955JMgmQiO3uC369EsWKyVWnk2nk7tylYBF2vlkzSRXt-8H6XEf524aVzpOR9U85RyBf67uWEhBcUrZUwYIJYdhaiY5sBnxmGhS60jN5w3Eq8nXXJnHdLx5hbiN9Aw",
                "width": 3024
            },
            {
                "height": 3492,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103796897497664882519/photos\">Shawn Lee</a>"
                ],
                "photo_reference": "CmRaAAAACrnZo8t2_bYykfiM4ZFmTwiqoqnnnjK6YKF1GH_0x7zYyDTXiuyVOpQUva_DsPR9F_MZt4mjxFwtTYlw1nA1hhM1_iaBlR9ZMKxn10fKoW-zciT97GdXdOKP7zzH2FPZEhDCFAkBXMDFU2KcGi0nEObuGhRGrP2Mhl6bZjcclWVyyyXY2uLJ-w",
                "width": 4656
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113175736970858682348/photos\">Jeffrey Lin</a>"
                ],
                "photo_reference": "CmRaAAAATqEIVmbkZ-kooorLvwp4ZcAbIyKC3XT9f8wma1QHKo7vbMvoN-SyYqPePDoLFEWcpICyR6rjz2VLz_Ta8CpYQwXV7Ey5LVgxXV5P5mPf4XXej8PkRPl3kSURGzORx9C2EhAeLfpZMg8i09GMuBzx0UYDGhT25LtgJzw-gn2Swtac5XLAznowkQ",
                "width": 5312
            },
            {
                "height": 2907,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103498257091646067043/photos\">Asim Bharwani</a>"
                ],
                "photo_reference": "CmRaAAAAGLTRIS1qvAtFmqR_Nwr6FwkkCwp7shcUBDZuPmWXP932q9FRsjRRdoPeIASZ9Ox1KuU2pXpZBI1eJDUgohzIIOJU_p-06AvIt3n3mAnpg3hKRJP99oNce6O-qi6DbhNHEhA6d44b5voM6-g97tla44vIGhTfHy1epXcOlSOcS2CSk8KFzo286A",
                "width": 3886
            },
            {
                "height": 1080,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100573686391970169734/photos\">Biology Lee</a>"
                ],
                "photo_reference": "CmRaAAAAEMMh9tedT00xx9RfofQPz4EgoWC6ll0KEEN-12XKpHNGRSYmI6RjOmoKept5o-1rGoR69yqxYgrCRJEV3j4hrSHNwzotEB6L5LmW97io1CdttnALndfjnFRZm8_DFD4IEhBFDNFrWcDfWeNzEHOEHKNDGhR2Fz1YwHkRkiITEAV0SAEkDelb5Q",
                "width": 1080
            },
            {
                "height": 1080,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100573686391970169734/photos\">Biology Lee</a>"
                ],
                "photo_reference": "CmRaAAAAE01rdpL7rowvDZDPTNpMi5alPf2xtGzPHcVgbnmGy7id-Quge-ga2kDtGcAiCqQN_a3sP3qUecRjhnf1DBAsr_-T3Abmys2YRQP9fGSKlM3UkYy4bI96WILbvT9baO9XEhBJdpfUDD1990UpS7Kd5dSlGhRh_K4kp_PpElOR3Q_Gg8HfAc_G9g",
                "width": 1080
            }
        ],
        "types": [
            "food",
            "store",
            "point_of_interest",
            "establishment"
        ],
        "site": "http://www.gresescent.com/",
        "place_id": "ChIJoS7f-bXHwoARp4Z2oLgKanY"
    },
    "Howlin' Ray's": {
        "name": "Howlin' Ray's",
        "hours": {
            "open_now": false,
            "periods": [
                {
                    "close": {
                        "day": 0,
                        "time": "1600"
                    },
                    "open": {
                        "day": 0,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "1600"
                    },
                    "open": {
                        "day": 3,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "1600"
                    },
                    "open": {
                        "day": 4,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "1600"
                    },
                    "open": {
                        "day": 5,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "1600"
                    },
                    "open": {
                        "day": 6,
                        "time": "1100"
                    }
                }
            ],
            "weekday_text": [
                "Monday: Closed",
                "Tuesday: Closed",
                "Wednesday: 11:00 AM – 4:00 PM",
                "Thursday: 11:00 AM – 4:00 PM",
                "Friday: 11:00 AM – 4:00 PM",
                "Saturday: 11:00 AM – 4:00 PM",
                "Sunday: 11:00 AM – 4:00 PM"
            ]
        },
        "address": "727 N Broadway #128, Los Angeles, CA 90012, USA",
        "phone": "(213) 935-8399",
        "coords": {
            "lat": 34.061498,
            "lng": -118.2396493
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "photos": [
            {
                "height": 1365,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100312093844135278205/photos\">Howlin&#39; Ray&#39;s</a>"
                ],
                "photo_reference": "CmRaAAAAq3cbdtRIBmtL5_DNhRbzkNsOPJZlAZfBI8KvtQrdquOhyobWE0uFEkJc7n7T2yjMbPlCMEE4clmkxZ0sMp1bVYZdoP3wh8OLRjI0wkE5b9l0MACVfciWnu4rTC4LPPuTEhCFj8vIWUw9KDPByGD0BZPeGhRLkazBaSL3yh0emXlnIMBlQfkxyg",
                "width": 1367
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107868369789283389887/photos\">Jose Valencia</a>"
                ],
                "photo_reference": "CmRaAAAADSc1YevaIGUpE4k72krd-QY4KSGFfD3ZxqaY-GKn5mD_mDJM8ouKbnCUKv-KBxj6F6mXpSQ5_5F_1t9CRhBcBCmhEImxcGE0yyuxGikIu3zAVRDfG2bRFtzh3v96WiniEhBBEsCUZn9GJb8QlgRje63JGhRJVVQ5PGnhnP8vTNE5Cryd4WxPPA",
                "width": 4032
            },
            {
                "height": 1365,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100312093844135278205/photos\">Howlin&#39; Ray&#39;s</a>"
                ],
                "photo_reference": "CmRaAAAAGTRJhwSC7DanW2A3BqgGV7ebEH6P9D7SgAbulF_AYgdqAxpqifr44SxzEd6nGViG1kDSPGEOe4yX0JnP-O_B0-jF4MLmQLFTOX4ltKPi9k7QZwCDuSL_rDu9ic4pYvAkEhBpCGecFveC7WQadeDsVpK5GhSkEPofkGRPPveQ_GOkTDTQARPreg",
                "width": 2048
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116103138336615103347/photos\">Terry Carter</a>"
                ],
                "photo_reference": "CmRaAAAAoSKkFB6KsE03mc65CT90_VAjFtex6Z40FAZGn4QVEHZIttSwWOrgrdKQLVtGUmaOvbjy5qLEy1co-7ZvOyG6X0XPafWSVTPe2RyUJ5Rjz1ZiurEQpBGsyPN7hywyWvrhEhAjWyWOtG76TbUY2Ljy8YWwGhRQsGFEjWYOvDNRqmpX4ZqY7PKAUQ",
                "width": 5312
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/109231764359736623387/photos\">Farooq Mela</a>"
                ],
                "photo_reference": "CmRaAAAAFcbX4RMJcUxsIlUZSZT5Ad77lxBjU9d6dMcsC8-hmxXGgjBitxMyxYBOdiWvvdaIoHVHlS5MHsL-oJfT_kAmiA2n4EeAGlHpm87EV0tpjZrulYp0Rab_UA6oUCNVNf1cEhAIG3jDpojiHSaTttw7o4uvGhRnM12lf2Ir9FSvmVHaKQzaLIer7A",
                "width": 4032
            },
            {
                "height": 2160,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/110495553042075517699/photos\">Roberto Mejia</a>"
                ],
                "photo_reference": "CmRaAAAAYQfpGjGbZ1ePKvZQiR23WvVZ7OfTcr8B0-RRa4rj2wqIuBZHgrVu9e4tEhzuIDxU7PDk2vRXkUGw9r2xLt0u1ofSV1v4wri_7ftbUsM_dYve8MtwKWLXBUUveDXYkct8EhC2UAWdygMfXN3TvV9F6nWTGhQ2n51kDmSUeUCqsQNtVWEqVb5qbw",
                "width": 3840
            },
            {
                "height": 3023,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/112062048876605985839/photos\">JR Curley</a>"
                ],
                "photo_reference": "CmRaAAAAHAtlEY16MQ0dTKi3MXmicqwhLN350tdqMxnrPk1dMnUBswJlbx445Nod92Q6GFJMmWYZk3J-GTGn_kDH_E0DWtvTJ-Oj9b7l59chVO1VCnC1DY3IdKySLi5o-fJRvJvvEhBXEV46mZxt2Zo1_9ojsHYBGhRIf1bPYnTJGlusZ-uP3ThJmWOORw",
                "width": 3900
            },
            {
                "height": 1365,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100312093844135278205/photos\">Howlin&#39; Ray&#39;s</a>"
                ],
                "photo_reference": "CmRaAAAAOWzWMgtOvE6XpR3tXdgyM5unrv9Yx_4EZNuz4wPVRcz4x60G15s-PWJjnItNOaZ8dyax2s5yAPIsS_o4jxObY6RLZSPSRHQteh7Y9VWNkeWcg2WZOW66woR2coJmzJT7EhD-tJld86lVICL9WFyr7IrlGhRxR_2QXZtgRYrmt4qHq-XbQBlxDA",
                "width": 2048
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100873348276707347625/photos\">Cathleen Luu</a>"
                ],
                "photo_reference": "CmRaAAAAGWljZ8-5HBKCST1HOh5S3Lq586TdZAyMlY5k0rLBkb0toXi9z5SAaoqCIXD2hxV1CkcYjtNyoGloV_sLqH8kNDvJ5WUJN3dCD8EjymVa9f3U-MxeKZ9ACiZjLl5Ecz0iEhC_yQpwCqhSb91KUF7ByddFGhT7X7zm-d6dS71Pcc8hpvT_s_RfKw",
                "width": 5312
            },
            {
                "height": 1365,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100312093844135278205/photos\">Howlin&#39; Ray&#39;s</a>"
                ],
                "photo_reference": "CmRaAAAAOoyKnUXyNkfsmj__AoyZzpKZagTf2LBzlkAebSIX60-DuSvuiLz3dhI6mksVISMUhrGZ2Uh7wsMMlRbut6DIHUwf_KwzygQr_Ws71Xh76ZWkbchGRF7NGFbwifpuSKVFEhDxK3633FwOlxgth9mrJvawGhQP7_QLuSB23qj2B1WF-GcQY8JaCw",
                "width": 2048
            }
        ],
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "site": "http://www.howlinrays.com/",
        "place_id": "ChIJsTjh9VrGwoAR0AENjgs5swY"
    },
    "Jazz Cat Restaurant": {
        "name": "Jazz Cat Restaurant",
        "hours": {
            "open_now": true,
            "periods": [
                {
                    "close": {
                        "day": 1,
                        "time": "0000"
                    },
                    "open": {
                        "day": 0,
                        "time": "1130"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "0000"
                    },
                    "open": {
                        "day": 1,
                        "time": "1130"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "0000"
                    },
                    "open": {
                        "day": 2,
                        "time": "1130"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "0000"
                    },
                    "open": {
                        "day": 3,
                        "time": "1130"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "0000"
                    },
                    "open": {
                        "day": 4,
                        "time": "1130"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "0030"
                    },
                    "open": {
                        "day": 5,
                        "time": "1130"
                    }
                },
                {
                    "close": {
                        "day": 0,
                        "time": "0030"
                    },
                    "open": {
                        "day": 6,
                        "time": "1130"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 11:30 AM – 12:00 AM",
                "Tuesday: 11:30 AM – 12:00 AM",
                "Wednesday: 11:30 AM – 12:00 AM",
                "Thursday: 11:30 AM – 12:00 AM",
                "Friday: 11:30 AM – 12:30 AM",
                "Saturday: 11:30 AM – 12:30 AM",
                "Sunday: 11:30 AM – 12:00 AM"
            ]
        },
        "address": "121 Valley Blvd, San Gabriel, CA 91776, USA",
        "phone": "(626) 288-5200",
        "coords": {
            "lat": 34.0801015,
            "lng": -118.0988887
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "photos": [
            {
                "height": 720,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/112824307976888809674/photos\">kim jii</a>"
                ],
                "photo_reference": "CmRaAAAAce6ttzgKA50CuPr02FmZNHuSY8Ifng1V2xkCY4C0KEerR6JjBHky0W8zQFquOrHlx_RfRwQA-zLDQ1oQcLvFZhcLO2ZeJntBRw9ruxt4QDbruDRdPkybRK5Mi0Cg0GrBEhBvOGM9Os2oXbcjyJze5Tm9GhTkzJ50HWVrszsV7ClHJ9tH8b9zKA",
                "width": 960
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111295482860562927625/photos\">Thanh Nguyen</a>"
                ],
                "photo_reference": "CmRaAAAABH5A1ngT3k3Ht3Jp2Jf1JEsQGTAlylc6nGS50L5U4OL45ryAdAlnK1UrDaLzouFn8xqXDkrBe1g5SeEf20Nlw_7IKmgWl9vzASAtVqPGgPSvGGByFUcYgZ7n2JcmwvEYEhDOUijuqZUat_1neX1_IGdeGhT3u3D8-5ofx0t3uotWUuyRvABINw",
                "width": 4032
            },
            {
                "height": 3000,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106674466935702817600/photos\">Hung voong</a>"
                ],
                "photo_reference": "CmRaAAAAoMUE6G4DUdMRWBVgRtFxiyLEMoSOIeGgjcSwCXKk656KrMsxhQ-fYDBpSQwNtxvnUnjC5DViTz0hcBp2iu9fX3ZjwyfyKP1HQxXLMuwbTv4raeakOClEMYwqLfv_Nsv5EhA-VSNKiLXWxTkWp1QAsNjGGhT8Rrm0Pyei45qoCfqrVV5XRXB8gw",
                "width": 4000
            },
            {
                "height": 4048,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104130496012591713611/photos\">adnan albeitawi</a>"
                ],
                "photo_reference": "CmRaAAAA-LWNm59_5qOcqcq3e9F3ZHw0d0MF64Jk7R6wpPLdBaz8hvd1C5mE5w8AZGkWfTGt0ZpKNRhdUOe-3qPlj0NU7Zepqizz14hKfSLdIbaS3E3j46m5D0_yYNhyD-OEcc_1EhAAsX3K7za_lctrNbD_j0HoGhQl21RI_a0-nrcZPDCSfxXhZ5mEvw",
                "width": 3036
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106505075703733604009/photos\">Ryan goog varin</a>"
                ],
                "photo_reference": "CmRaAAAAonCf29R4CJiITHJDddQeK-Jl2zgcijcZvcGi2qquovpjcDol_5Q66Qt4MZRv_Fz-NJ9reT5UqSmMAPyRgOFcecKTBw2RQZaZIjRKMjU8xjB99a9Ebxyzmf-V6IvLXe2qEhCJPUuxcaIHMIvig3hQlQQjGhTsXNbG3BCErZdw4FFicg2_F4Z_DQ",
                "width": 5312
            },
            {
                "height": 4048,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100744260048023523678/photos\">Loc Le</a>"
                ],
                "photo_reference": "CmRaAAAAo-P1vFsQgJpOXzIX1aYjc2tk5VYhiPZyh22anZ0lphO9ejq2pmY0jwwtOXqS5NN0omj7pwVhhLkpQXO_TbcKgpiPE2ylO3ppeBJT6X60CluzoBBmpM3ugONpzGCqnVlqEhBjgRVuXWMJkU6U9FYs7O2yGhQdTAlFyx5EJYqJozZa6a-C0fY8DA",
                "width": 3036
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107189617178720114884/photos\">Sarah Phoon</a>"
                ],
                "photo_reference": "CmRaAAAAt2QBBR-xSV1xscSHP8dl31ZzSMJHEVlhh7h-lPplJw1xMotNGb3WT5uYVlXqcc4aAZP4VBBVxwlzJ64pnOMiK5ePv9ORGAJoU7ZWCdm5-Lm8Q7NiPZdxY0NLCc6gmbQ9EhCLwZ4umaMCtSWK5j7GK9Q6GhQhB3kxR2nbiZRdn-Ts-CMbWNaleQ",
                "width": 4032
            },
            {
                "height": 2340,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107560454249035707927/photos\">Judy Chiang</a>"
                ],
                "photo_reference": "CmRaAAAANhtl0Hwm6zX5UhUbhPoZIcnVHVHW5eT-djRFg8gt6gQXpAaRpCNzgAYn-I5u7btgRjJw3h0z8lypK95Rh4kgDo-jjKS4ORZBZ67QqHFLUWxY8gA-SsUu7w0cegk1zi-zEhDVyhc2A3rJUAznorZkF1t-GhQrziMWBSHkHzZKHv63UvnFWNWNtQ",
                "width": 4160
            },
            {
                "height": 2992,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108775277805398081924/photos\">Kenny Ong</a>"
                ],
                "photo_reference": "CmRaAAAAtpKGRUGpKDBldDkstghVNGtn12MixzughEigL9jcn-SAEF8YT1Q5JVAaDnAnvf4Hvfzm60Vrale724Ve3yQVee8wA1TdvyniZDo1NMLM1ezZizayPgOsEYDgs-_0J7ttEhDrhHNWjLHGSnD6uRZsnHo5GhQqFWguHPqIEt2OzMaHgi1Td_kYPw",
                "width": 4000
            },
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/112824307976888809674/photos\">kim jii</a>"
                ],
                "photo_reference": "CmRaAAAAasnqPm5Cw3NopIxGS8Citn4LFvvtJH8dGAkweqvrzT4YX-7fgt4MDoN7BOgY_CAloPI5cL8Q_t2ytBIKwZNR7q27nxPjsPomC63a92iMzf_dEsInFhXspADF9_Wt9taHEhDoR8qzj8XT5Lg4mslq2M7GGhRtb-5MRCw95GU2w2fAk9ScXgvWVg",
                "width": 3024
            }
        ],
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "place_id": "ChIJ--EyvbnawoARJJBZVDgXfF4"
    },
    "Porto's Bakery & Cafe": {
        "name": "Porto's Bakery & Cafe",
        "hours": {
            "open_now": false,
            "periods": [
                {
                    "close": {
                        "day": 0,
                        "time": "1800"
                    },
                    "open": {
                        "day": 0,
                        "time": "0700"
                    }
                },
                {
                    "close": {
                        "day": 1,
                        "time": "2000"
                    },
                    "open": {
                        "day": 1,
                        "time": "0630"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "2000"
                    },
                    "open": {
                        "day": 2,
                        "time": "0630"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "2000"
                    },
                    "open": {
                        "day": 3,
                        "time": "0630"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "2000"
                    },
                    "open": {
                        "day": 4,
                        "time": "0630"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "2000"
                    },
                    "open": {
                        "day": 5,
                        "time": "0630"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "2000"
                    },
                    "open": {
                        "day": 6,
                        "time": "0630"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 6:30 AM – 8:00 PM",
                "Tuesday: 6:30 AM – 8:00 PM",
                "Wednesday: 6:30 AM – 8:00 PM",
                "Thursday: 6:30 AM – 8:00 PM",
                "Friday: 6:30 AM – 8:00 PM",
                "Saturday: 6:30 AM – 8:00 PM",
                "Sunday: 7:00 AM – 6:00 PM"
            ]
        },
        "address": "315 N Brand Blvd, Glendale, CA 91203, USA",
        "phone": "(818) 956-5996",
        "coords": {
            "lat": 34.1504211,
            "lng": -118.2554535
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "photos": [
            {
                "height": 1360,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/117591544990941385418/photos\">Adriano Gonella</a>"
                ],
                "photo_reference": "CmRaAAAAFVt17FjxRi-ECHtQnnkIHESyTOOQ12i1rZ2kGY2BgC0KDAJNhpVb_86yMkmQcvlGu0H2bxrktaY4d19-nPUhOe_LjViM25XD6cdBNyIrAsnQe4_Q9k2xUlyqBcS_gq3TEhBzCBbNIbShErsk9_zIFe7nGhTkQQLfMP_e6RRemUW-2liR5GA4yg",
                "width": 2048
            },
            {
                "height": 2992,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/115018702469225860863/photos\">Aryan G</a>"
                ],
                "photo_reference": "CmRaAAAA9ivWnJZEuShUWRNSWJA3VhN_9IPHZLdi-VSHCGYnrx95Sk-q46BYMY3aqDjuE8U8ekunseSB5F7vDdWx_85N75d3qJBxkjhj50M1hY5MdOkDIIuZ61l2RMdXFYTcR7rREhAXVqrCvRGMsDB3FAgKTEzmGhSLbhYiukqgkFs0UP3bTVR6yMXKMA",
                "width": 4000
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/110838754522679954436/photos\">Reyna Brito</a>"
                ],
                "photo_reference": "CmRaAAAAnuTaKiEX2d0uzHHq-kPbicZL393oTjkEeUwTSB5WMeRDJ8U3GOyYgQNwFitqMYIpRsjnKp0n9Ma-wO_UW2efGWqaI-xGV-N_4Sdw6fUXuaZnUln--UiJozFBrqwI7jBxEhAm7w_T5CjLm5qAwKi-j4KSGhRJA_NZQfDZJ-uw6osaefsEh1FeVA",
                "width": 4032
            },
            {
                "height": 2610,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108682777833869404066/photos\">Geoffrey Gabinete</a>"
                ],
                "photo_reference": "CmRaAAAA3eAVO3jZ_kVZHvFaM_su9kusp22E3AXx_dz8Za6JW_eSS1Cd3SRRmfD5aYxGoxU9ILzviJLgdfvOahF41iHEy6qESVXqBASEjvCqcYnyASwtHoEFBjkm0fBkWdy5-gEXEhCxzxlZvVzpnFRKSpYDklrsGhT8I2ta-g4hoysASFDe5ENb6jpoTg",
                "width": 4640
            },
            {
                "height": 1836,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111650207378289662973/photos\">Juan E.</a>"
                ],
                "photo_reference": "CmRaAAAA6l0M-amIQUFsOfg8fMx1kIkxG8v4KwBP0ivTjXfoAhh65cMwjhJID6IE-ilAiYtggFIWgYDjQFduU8m5GI8roj-s_8thX-ndkEyEvbTUC5RTo3jWMIGjhMWRSCCq5Yg7EhDir0BW1HxQ3vFC5e63i1BiGhT-wOMrsaHi1IKmLdnoyw2R3YYtSA",
                "width": 3264
            },
            {
                "height": 3120,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/117806518920761852131/photos\">Darryl Ford</a>"
                ],
                "photo_reference": "CmRaAAAAgLaIELCRBMZPs8M0OMTRrYI9wIUGZ_CbAxXrvhX7ggDsUtPn_xN0D09wSCXo8MwwsMfMyp9YPUkRy5RmF639UvBYNGdoZZPiVlBl8cqUJsI9UUEh7-19S6hoAiT_k_FLEhALypAtZZiR6d0P9UgKv6skGhS2tRll_HS2msqO2n7JJnnJAPvXRg",
                "width": 4160
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113522731200068395620/photos\">Carlos Urquieta</a>"
                ],
                "photo_reference": "CmRaAAAArvFwoPBCrbVO79ki6IgWLbR0MzquU0GwgF6tBozX6Na-mMgYuM_mtvLoYEJp0joYVg2CWwoLJCAxKnOw6nYejgST9JNUUevfAuiPSzrUARSRVpNC3xg83EwylV4UNfF5EhDHhcbLhphApkXqwgV_eg8hGhTLWcHW3tki3u3tnAibuCYmFGI0sA",
                "width": 5312
            },
            {
                "height": 1360,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/117591544990941385418/photos\">Adriano Gonella</a>"
                ],
                "photo_reference": "CmRaAAAAetB4sLtgQ2iISpB6fouh58o-zDWP0ueSiEzyAsiOpsAeYGGJa8cDVsekCxjp5_LazvQFhj_yVeClycJnUNhzMBvvpX3bwypwEhbJFPq5OcEjkwG8SOJsEUOe9YjeDXyEEhA20MuTYJ79zSsNG373WUNPGhTsgasxhJ_VOh74kXVOOR2TsLkjtA",
                "width": 2048
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100523343240334321408/photos\">Alfredo Teutla</a>"
                ],
                "photo_reference": "CmRaAAAAQGxy-5JWTiBK5FnBn_GIXj-EMhpAiOIn0Qr5MvhQl_7n83MXt6dvX4yIb2v9EZe8y6SfCS5_SynWtTRWrg7EhStHtW2N6Iifvjwa9nXy1l76jCKdJ2nqBWRbFGkxiSljEhAQ7bJspIclgZVGYuvBAG3iGhTigHhHzImxxFGg9hCcLjajj3yqQw",
                "width": 5312
            },
            {
                "height": 2992,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/115018702469225860863/photos\">Aryan G</a>"
                ],
                "photo_reference": "CmRaAAAAhEYS7b3Mp_U35whgaIFUOPdbOQSHhtIWuKWUE9rdWD60ZyEFENiYWGHZJtF43Tc8DfUiCYullIhgHY3ag1Bnk0gHq9iUZo5HF5TX264Q_c6Rhvc0XLVJ6PHfYjfHYqpsEhBT_cix3dOFePsvxGtzxujQGhQ_lZXP8DgdBL0zWEjn8IP0us5rVg",
                "width": 4000
            }
        ],
        "types": [
            "bakery",
            "cafe",
            "food",
            "store",
            "point_of_interest",
            "establishment"
        ],
        "site": "http://www.portosbakery.com/",
        "place_id": "ChIJXYCo9lTAwoARV6lX-L_cIeY"
    },
    "Blockheads Shavery": {
        "name": "Blockheads Shavery",
        "hours": {
            "open_now": false,
            "periods": [
                {
                    "close": {
                        "day": 0,
                        "time": "2200"
                    },
                    "open": {
                        "day": 0,
                        "time": "1230"
                    }
                },
                {
                    "close": {
                        "day": 1,
                        "time": "2230"
                    },
                    "open": {
                        "day": 1,
                        "time": "1230"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "2230"
                    },
                    "open": {
                        "day": 2,
                        "time": "1230"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "2230"
                    },
                    "open": {
                        "day": 3,
                        "time": "1230"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "2230"
                    },
                    "open": {
                        "day": 4,
                        "time": "1230"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "2300"
                    },
                    "open": {
                        "day": 5,
                        "time": "1230"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "2300"
                    },
                    "open": {
                        "day": 6,
                        "time": "1230"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 12:30 – 10:30 PM",
                "Tuesday: 12:30 – 10:30 PM",
                "Wednesday: 12:30 – 10:30 PM",
                "Thursday: 12:30 – 10:30 PM",
                "Friday: 12:30 – 11:00 PM",
                "Saturday: 12:30 – 11:00 PM",
                "Sunday: 12:30 – 10:00 PM"
            ]
        },
        "address": "11311 Mississippi Ave, Los Angeles, CA 90025, USA",
        "phone": "(310) 445-8725",
        "coords": {
            "lat": 34.0394469,
            "lng": -118.4429043
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
        "photos": [
            {
                "height": 2992,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/115222410220774291674/photos\">Josh King</a>"
                ],
                "photo_reference": "CmRaAAAABlEwHxDC2I2N0L_Gj3sOwZnpaQ0fWha7frLcCB4yPoRx0mlsN9QgbIGKLEi_sZ1d3VbChjMSR4cklGV5t5xX57_UzIHOkfTzzG2JBjnWNsdXW3u7RC6Nw0oQ_uXNb-KiEhD08Rd85WZTSMInP5REGeTlGhTpXt17IvS8FDdwKx9qVLemJ9wIwA",
                "width": 4000
            },
            {
                "height": 3264,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107562421024144606832/photos\">David f</a>"
                ],
                "photo_reference": "CmRaAAAAF-ymOb6gyhOvb9pBdSmgOvl9t9-QnQG6ZfofNR1tZNQWzia9gBvAqCM4nPkCE6JX8qZJG0m9_XAhiJIyGEWN5KlxT58WUBKDuSf6L98VOLQahzLhlwOSqHSQp0T7uqFcEhANWcuVLYynRRP6KfBE_wCVGhR6ebMrJnEJ6SxUuLHH48Wn9KWv4A",
                "width": 2448
            },
            {
                "height": 3000,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104743363196119334696/photos\">Masaru Kamikura</a>"
                ],
                "photo_reference": "CmRaAAAAcxs8VWO1N5tSl9K2St9DzMcNUI0rf-uL4EKnfd8M9MiGhvzI8Y-NOMQUkcIS_dNWNtPkS3a5Banno9xlJD86kUHgIfqxU-k9jZ6ak5Gn-yJJZxKcvwPnSGkMiiGShcy-EhDkMwUM92xxoPITkaMLWjB7GhQCw0A-9QvEDsUFrfmxaYD_bx-IjA",
                "width": 4000
            },
            {
                "height": 3000,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104743363196119334696/photos\">Masaru Kamikura</a>"
                ],
                "photo_reference": "CmRaAAAAtRG7kXv9QmwpUEp9y29_qS86Iozj0B685SSwDpLrn-IdcVEQqtJ-WS8UzKGTOnHJURv9QRVAs6RC_EAFnzIbfUQnSoui7eKA62ZPJtAUYhsRgWCgNM5FaltSJBQlKgD8EhAESyPbNWEzOx1K8phSP6YYGhSf4rsOFfy0Nbx2gijIENIsDHI_WA",
                "width": 4000
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107940178291552978269/photos\">Phoebe Lau</a>"
                ],
                "photo_reference": "CmRaAAAAaWQH1yJHI9rrdOXTJONAkMMkYpMKQSkwdTKmlUadP1C39Wu70Jndwi2bK7GtTnwOACEBfyVP2ZTJ6yrWq4yWYMu-RcVBOPBsBZSI5wLOqlbvhOdubAIAq_-pCuXfFsknEhC9ZUI5mA_E5w8txqIE3sSxGhQWPSqrJjsPnPtO-bVcdsdLarF3Bw",
                "width": 4032
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/112822310780031289311/photos\">Jeanie Conner</a>"
                ],
                "photo_reference": "CmRaAAAAHrl3-kszanjJtVNLT9sy4KXQmq4bIGATAQ2c4lmKv0178XkEwBypSvy2Jpi2tlSQrwaoZWif1gDc376lh_5myFtL4_VgJMVcyd2AWnRzj7NWeaJsJDycXUYAPVmtmw3KEhDJCJHCdohKTIf17M43w_CaGhQRHiVoz8yBRG3lwVa6l-vN5TQIPw",
                "width": 3024
            },
            {
                "height": 2432,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113301666419596661460/photos\">Jefferey Tejero</a>"
                ],
                "photo_reference": "CmRaAAAAeKRcMrOdRqTAtD_m3ICoi3fLh26pP3KDf9EihGwCAn9YCc1lkBg6a2HVM57EckCSWpH0sWwrFeNwVfX2QEyhJN_wLOq8xX2NiKHfsulfuNA2TZZzwU4OzCuSrFOqh0lhEhDoQFmyf3i05hmTq6lOZcMkGhSbskXE3RVbWfdGsRWqGXGLVPutRA",
                "width": 4320
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/115580060424270600036/photos\">Zack Lovatt</a>"
                ],
                "photo_reference": "CmRaAAAAtITNdnkiUW7l0eSYOK4ICoi7pOS6XZsHaBxbFSvnd6LRhEGdKTegwURCVbeuIUpbXk4cjxTLoLYPdzMNpCSGwtqt_iFnL9i9k1Z0_tai9FIODPdWUnh86QuRQ9HvtThnEhBIIhzt6caTwIdXwcQDie5uGhQuKsjbM9CGnwz8Mt34TpNOM4Q7Dg",
                "width": 4032
            },
            {
                "height": 4160,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/110666276668911381081/photos\">Jon Domingo</a>"
                ],
                "photo_reference": "CmRaAAAAQNzk5C9YEx7MKoIJe-J1smfR5RIry3URkHtV6YIgI_WDQ0LOfNcV2IS8h5MvGbPp18oLO-p0QEvtalNdEldAUEVW49voDf15OXmIphr7QrF2cX8Mjq8ygQuU6lay_TiNEhDgUDJDFncV0h44DshlLpk0GhRkSIqBaj7QjLifC0ZgS_QbUKwdsg",
                "width": 3120
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/109576004423159034524/photos\">Jan Bornholdt</a>"
                ],
                "photo_reference": "CmRaAAAASXYII6qyuqZQ3-jG3ucSpCj9suMu5Pmei9xrzvg0o9ToULaQLiV1lyNyWr4YhMLq1cLMKWjJExmdcgP2w9gtpWbtFacrCQRdcy8h0lZpI9Etyu3o77qVkmGRoj9i2JtdEhCxlZ-FpC1IfLvpjsMBnMbcGhR00OSjIW_SrrdmUndTSY1kxdSWUQ",
                "width": 4032
            }
        ],
        "types": [
            "food",
            "store",
            "point_of_interest",
            "establishment"
        ],
        "site": "http://www.blockheadsshavery.com/",
        "place_id": "ChIJsU-S2XS7woARxNdMwfnE1ow"
    },
    "RING Baked Tofu Donuts": {
        "name": "RING Baked Tofu Donuts",
        "hours": {
            "open_now": false,
            "periods": [
                {
                    "close": {
                        "day": 0,
                        "time": "1800"
                    },
                    "open": {
                        "day": 0,
                        "time": "1000"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "1500"
                    },
                    "open": {
                        "day": 2,
                        "time": "0700"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "1500"
                    },
                    "open": {
                        "day": 3,
                        "time": "0700"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "1500"
                    },
                    "open": {
                        "day": 4,
                        "time": "0700"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "1500"
                    },
                    "open": {
                        "day": 5,
                        "time": "0700"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "1800"
                    },
                    "open": {
                        "day": 6,
                        "time": "1000"
                    }
                }
            ],
            "weekday_text": [
                "Monday: Closed",
                "Tuesday: 7:00 AM – 3:00 PM",
                "Wednesday: 7:00 AM – 3:00 PM",
                "Thursday: 7:00 AM – 3:00 PM",
                "Friday: 7:00 AM – 3:00 PM",
                "Saturday: 10:00 AM – 6:00 PM",
                "Sunday: 10:00 AM – 6:00 PM"
            ]
        },
        "address": "6800 Owensmonth Ave #130, Canoga Park, CA 91303, USA",
        "phone": "(323) 963-3881",
        "coords": {
            "lat": 34.1941167,
            "lng": -118.6012779
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "photos": [
            {
                "height": 4000,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/112734262381136437884/photos\">Mitsu Kagei</a>"
                ],
                "photo_reference": "CmRZAAAAmlLCx5yjFJgSSC5-aNaDZFaJUtWAG_dgE4Wk6AYJ-DSXX4QloyERzUuy5kw6S_waJg4v3vC_-71IzHjZ6ev4PmvQjdCQ6KncLhn2CnSU1mS5iGe4n8REd5RYzQWl6D2-EhCBZ6kSXZNUTHrmUBvKlSyqGhReV654lRAiEzBhbZ6ZOFkHvfd5MA",
                "width": 6016
            },
            {
                "height": 664,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/109973940467080674631/photos\">RING Baked Tofu Donuts</a>"
                ],
                "photo_reference": "CmRaAAAAiaUCI4M6zhMeQZ9QCTnITdiJ2OzCQzhd7R7MyNfEqQ-kVkcFfgQamVVm9hS04-DXtNAX4juD6Fxa1BzXPpO5BPLEPihIuvoOR4h5ftk3c4S65I5KJ3Xjhl0a262yLqmoEhDIOzqEO_aSLygOw0iJBlKwGhTOG7nmKAAzQoL1pgOSyhSSrss5tw",
                "width": 1000
            },
            {
                "height": 3264,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/118189044741547727146/photos\">Rose Aronson</a>"
                ],
                "photo_reference": "CmRaAAAA6xHpugFex1AAg5G9QXwfxcX_XT1jbVJi_TES0TAMqmlfv-MDSdsB8hdvdv8pudXwQNthaLae1ZLYIGV-kPjt17cVHzDtMgwTM_3lERrDlxRXvEWojSy_EIA8LIOwJLYvEhAAs979APAlXdpgaOByuEbLGhTeaYTMpKy_Oq4lefj2efrHB6cRKQ",
                "width": 1836
            },
            {
                "height": 2296,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101688419839485697199/photos\">Mitsu Kagei</a>"
                ],
                "photo_reference": "CmRaAAAAhIHCv5cADetagHHdbVy4ug2Uleu0t1cx90csHGDc0SBTri5pHZ5na0ZrfBr_lIP6tEuS6KWFAomo0Ejnl1GnGB8GKglXedmpFLCepb4orbK9Oh9dr_aASqU64NFpLjIGEhAkhY3DkmVKZOMdCGfQGAmxGhQsE0Y0Y27gphARQx7cldJI-JZw4g",
                "width": 2724
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/112817649629803165358/photos\">Daryl Sterling, Jr.</a>"
                ],
                "photo_reference": "CmRaAAAAuopafJDNvCJ1-PezZqfVZ1i8efNEnULvyIayHl-2EvxecbQMQ9NCbBtmnkRW650_bRb_NhV5xno1w2UKLx2G_nJK0AJ1AB-5SN0khNB6CA1gNUp8opwMhqTBdHEa8seNEhASdiPjHXShKz6R80QaLHEBGhTbMvPPrTY_UafaaSM9CKf1DPgDgA",
                "width": 4032
            },
            {
                "height": 640,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/112734262381136437884/photos\">Mitsu Kagei</a>"
                ],
                "photo_reference": "CmRZAAAAlJshpOA4ZpwvW5oOcc_SFU_NPLM6bOgIrODEoxAcVCuQPuzhW4v2zlic2ChZ74NlgmBHgliBk-nSQYIAV-7IhV43wo99_hUbG3C4mrkSiumjq6cKGp9wiAfUBbpY8Dh0EhBhVb2gLoLoLeugW1ekm2ybGhSkqh3Lyf4FgVYCK1AC6CpweA-n9A",
                "width": 640
            },
            {
                "height": 4000,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/112734262381136437884/photos\">Mitsu Kagei</a>"
                ],
                "photo_reference": "CmRZAAAAwF-4hOC5wAE38X_m8ntURACYqhGb9TzsTEcmIoWvWWvBwcrlk-hP6dom4RYTRk-vGbgKmvN9eZooFRpO0Fi3pK7XVfOPg54Gtpp1A-Y4y_iEGzctkeQ_AVF6Y93bp6lsEhDQATtHcCIR2A8rCz037oZ7GhRf5weB94efTAS9bXtVZg5lix5DXw",
                "width": 6016
            },
            {
                "height": 3036,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111402221677602397629/photos\">Tim Dumire</a>"
                ],
                "photo_reference": "CmRaAAAAGdrhvwbohr_tQOS55swR914O6bZ2UV1pl2MpfKmDqG5buAXLlpjzNmtUuILB0TyZ-HeEfa9nXsZ8gj0Ph0ee8nOJGstcq-iSjNltj_K7GNBjf-hnwWAOauBOouY-1weyEhBnIAJbwazquZgbDrZDiarkGhSwttpT3J2jP6juwKvvwcYc2DUPOQ",
                "width": 4048
            },
            {
                "height": 640,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/112734262381136437884/photos\">Mitsu Kagei</a>"
                ],
                "photo_reference": "CmRZAAAAC9bJKjFhrGV2YPIL7ISDW8G6gyMBf6i3Im9qUOpv-QZKdytIw7TJOWLBs8lJA4Wuf89ei_KyztTJDlWBhmrMY6Zvb270Fw5fx6cJb3MxMB5Qgl0oYbXZpS7iFbhJceHOEhCq4gPA_bL8rsisjjnuIcf1GhSkO3ycqO2QN3s2WABs95KD0ccRqQ",
                "width": 640
            },
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/112149549349068270611/photos\">Gaby M</a>"
                ],
                "photo_reference": "CmRaAAAA2Vh5W0SNh_XhMK8Y4HeE3DGwTJ5PlZvIVw8sApPwDGM_VposkTAeuAPCMSNER_WGoHHncCAMHeLzUHZZwr1fM2hQf2EBcNCvU2bzPJs_kXvyDD33LvD-wyqO1CwCaE2uEhACFxD0D1Kk3zMWEvRYcruvGhSHHWjZ3CoSwK50xh2dj2f9RTSWoQ",
                "width": 3024
            }
        ],
        "types": [
            "bakery",
            "cafe",
            "food",
            "store",
            "point_of_interest",
            "establishment"
        ],
        "site": "http://ringdonuts.com/",
        "place_id": "ChIJJ03nvRecwoARVivnlCgCZVE"
    },
    "Vicious Dogs": {
        "name": "Vicious Dogs",
        "hours": {
            "open_now": false,
            "periods": [
                {
                    "close": {
                        "day": 0,
                        "time": "1800"
                    },
                    "open": {
                        "day": 0,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 1,
                        "time": "2000"
                    },
                    "open": {
                        "day": 1,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "2000"
                    },
                    "open": {
                        "day": 2,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "2000"
                    },
                    "open": {
                        "day": 3,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "2000"
                    },
                    "open": {
                        "day": 4,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "2000"
                    },
                    "open": {
                        "day": 5,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "2000"
                    },
                    "open": {
                        "day": 6,
                        "time": "1100"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 11:00 AM – 8:00 PM",
                "Tuesday: 11:00 AM – 8:00 PM",
                "Wednesday: 11:00 AM – 8:00 PM",
                "Thursday: 11:00 AM – 8:00 PM",
                "Friday: 11:00 AM – 8:00 PM",
                "Saturday: 11:00 AM – 8:00 PM",
                "Sunday: 12:00 – 6:00 PM"
            ]
        },
        "address": "5231 Lankershim Blvd, North Hollywood, CA 91601, USA",
        "phone": "(818) 985-3647",
        "coords": {
            "lat": 34.1657556,
            "lng": -118.3754405
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "photos": [
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106603156502859737139/photos\">Adan Hernandez</a>"
                ],
                "photo_reference": "CmRaAAAA_l0SiMNIvTs1GOmBQPZEGt9p5rlWOgGLmucFXEbuPsTFrvDPQDJv0k6NHYMiBy2FtjMm6NMsoADDZvQC_IjoDfO37rt3RaPgaGc_eMvE6vEPfutiVrXs3vEfzPsFsQbaEhCWoQVITFiE7RfO7MgXVo1gGhSQsl9kAci8m4ZRyxKg6zj-mFqKtQ",
                "width": 4032
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/110475145014106241583/photos\">Matt Harding</a>"
                ],
                "photo_reference": "CmRaAAAAoGoryiffFyaSJ4lp8QjEGINbYkBZExfgkU3scEUxZ4Zh-DYJkRJ5nCNJ1ujLc2v_9UmNm1_WRN-O2lAyI2lGxTIysFfPjhFOB2cLEikG3QOeGFAuDH-bfqBBO7qezaJ9EhBGy-cGlHOIh9ISSQME66dgGhTw3io4ng5ENgrqvtWYjC3riQrtGw",
                "width": 5312
            },
            {
                "height": 2048,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/112425238354019941341/photos\">Doran Barons</a>"
                ],
                "photo_reference": "CmRaAAAA5v7UqlazNepPVodE5iCUbjCVHJS5iK593aI1-wMuUFUu0dKZUGz6vO4p6y3MYRC2pCMmU_Sakt3VU_-hyCNxoqgkxxp16DJ3smyRlj_1wZp6wiTMKA97xNgiAyaZ8WjBEhCnRDmCxlA316p5iQv0GO7tGhTIbx81t2EBC6L46Mh6qFkwde-Bkw",
                "width": 1536
            },
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106786039169160215915/photos\">Ken Sullenger</a>"
                ],
                "photo_reference": "CmRaAAAAXKxtMa3K-vDF5rfRMwZINNodRpvU9F3d7UtS-8mgk805Wtqrly3OhMjB252juJDSEBcIl90emP6AdzHLKmigc33xV6Y3HwU9zIvMYeEtl2wWHU1KDOk5S_D0snySF6tREhATIQwoEvtlmi1H6IClu51sGhSLBSG19pv7AUFnJdKVk03CHjrnow",
                "width": 3024
            },
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106786039169160215915/photos\">Ken Sullenger</a>"
                ],
                "photo_reference": "CmRaAAAAkp9IvlUxN4GUFBi3VAu5H5Jc_B1Oap9qHr-2ZfiwbL7BrvVOLTrIdzO5xsmIZQjRXzQsuxtanME0frBj5dOoJH2abEnwpWoPPmI2bdHUDGGPRVP_PHn39GVXkgrwtrb_EhC62KTfbXsVp9oyambAw31eGhR3dLMSkyFtyAK6lLHwoEVSeS8t8g",
                "width": 3024
            },
            {
                "height": 3120,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/109107544173293632503/photos\">Carl Aalto</a>"
                ],
                "photo_reference": "CmRaAAAAx1WdvBpJVXA5ND_EspAf17KmheM7DOPHhyBMQKM9XA5reiz6VxAwdlyYEOAZZEjQEkHdXvNU0mGeKXqhvrnueKLnkLjMMxwF9mLBo-oE8Buj49tZ00Zrn-Ar6GxXTMP_EhDnFsnj1Qa3QtMkA_fGQQopGhRQU3Lp95UxoxKXDdjmoVncFti0cA",
                "width": 4160
            },
            {
                "height": 2048,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116232985403307567973/photos\">karen zaragoza</a>"
                ],
                "photo_reference": "CmRaAAAAchxVHXq-Rns2eTO365GYgRrRuAa1pe6PWeBusdOvj3w5wuaUgMCt0a5mQUhge3lh8SfEk3PrkslexYiM-ESxN0HvWCTMM-OqvzGFqClCu09pwtM2qTMaHbIInX03jpGJEhA8V5J-CosNS8ZfBC9aK_vnGhQnErT4nZLgTctR3N3JBHvMyGUs4g",
                "width": 2048
            },
            {
                "height": 1536,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/112425238354019941341/photos\">Doran Barons</a>"
                ],
                "photo_reference": "CmRaAAAAihPzvCqROb9xAW8sKTVv_fFHMJJiVQL4aytmpt9UHUUlvxRF4SlVCvCD_wbISGmKk89eTMx9hLEEZEEh802vcUj3eBYrcV-lw7AddIsJJGxcWLhFC6ZX0GllkaXfpHFqEhCGU4xkjV0Kyn9UCOx5_aQZGhQ3xxIeiCuW9VGsRMhYuV6XTWPIxg",
                "width": 2048
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107095974833531774060/photos\">Sterling Archer</a>"
                ],
                "photo_reference": "CmRaAAAA7JPJ0LtimTvEpW16MUpSyxf1zCppyiiRmzgVeFJpDKXJyv5XqeYCeP339YI1UxGHhj0FQ6mPr9f4dGG0xlWTbMyVSuEOsrTcnw0LfH-4g5k40t--PpP4WrD9ZLMzuEwSEhA27ZSSMOF83F5qda41YUCGGhSDLMR-wtzzoRQD5GvJNhdA89oO4w",
                "width": 5312
            },
            {
                "height": 2048,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/112425238354019941341/photos\">Doran Barons</a>"
                ],
                "photo_reference": "CmRaAAAAUqhyGArw1yG4zzlRm2UnpXJzI25BwQ2QPDyP1036vNlITOHH-ewse4avIB0VuxTILmB0q2beOxb6xqbMlZ98HQm6E6H3iK-AMZDFAIVORXMoUWLs3yV4oTjBkUzU4x0JEhChUIvhjzG8jY1gfZsvcCwjGhSGAGIyRPrhEFVJKxaSBiAF6taxUw",
                "width": 1536
            }
        ],
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "site": "http://www.viciousdogs.com/",
        "place_id": "ChIJ6drNgPGVwoARE0w1r0-S4EY"
    },
    "Grand Central Market": {
        "name": "Grand Central Market",
        "hours": {
            "open_now": false,
            "periods": [
                {
                    "close": {
                        "day": 0,
                        "time": "2200"
                    },
                    "open": {
                        "day": 0,
                        "time": "0800"
                    }
                },
                {
                    "close": {
                        "day": 1,
                        "time": "2200"
                    },
                    "open": {
                        "day": 1,
                        "time": "0800"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "2200"
                    },
                    "open": {
                        "day": 2,
                        "time": "0800"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "2200"
                    },
                    "open": {
                        "day": 3,
                        "time": "0800"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "2200"
                    },
                    "open": {
                        "day": 4,
                        "time": "0800"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "2200"
                    },
                    "open": {
                        "day": 5,
                        "time": "0800"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "2200"
                    },
                    "open": {
                        "day": 6,
                        "time": "0800"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 8:00 AM – 10:00 PM",
                "Tuesday: 8:00 AM – 10:00 PM",
                "Wednesday: 8:00 AM – 10:00 PM",
                "Thursday: 8:00 AM – 10:00 PM",
                "Friday: 8:00 AM – 10:00 PM",
                "Saturday: 8:00 AM – 10:00 PM",
                "Sunday: 8:00 AM – 10:00 PM"
            ]
        },
        "address": "317 S Broadway, Los Angeles, CA 90013, USA",
        "phone": "(213) 624-2378",
        "coords": {
            "lat": 34.0508806,
            "lng": -118.2490251
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
        "photos": [
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103893649516863510093/photos\">Timothy Harmon</a>"
                ],
                "photo_reference": "CmRaAAAAUoLBm7j3MWTXBgufhdbyfS1Ja5mtrDxs37Iu2EEBDT0XAyAN7sm9Lw29yBsFQOhW4eFqbvBa_uqfnDNFDmBSae9I_CmnSc_5tyc_IP7YBxzXZGNiGF44jTZ9hqcJKWnnEhCgtoAdediO5GkVmkpJkTKfGhRRJIN5xfYV0yPeCRQ1dRW-_Ytn-Q",
                "width": 4032
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108473707469424321860/photos\">Arian Talehakimi</a>"
                ],
                "photo_reference": "CmRaAAAAi9NOWOkMwjy9BXCykrssUt3ixqOh0B3QUdSWeJ_km88BlWGruHhCaoC9DaKArpzwJ0iOvj1IbrqOC3lIaF6Sbr5H5QJDRmOV5MXZmprOefrNa9AXZKpJQ78sboQ1pwcfEhDVgzcw6Zwy_spmr_Vv1u1yGhS13N8xOcR7A39PTDKK5H-1lpFYxw",
                "width": 5312
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/109613465205069082296/photos\">Esperanza Gutierrez</a>"
                ],
                "photo_reference": "CmRaAAAAMDhtPAeiHb4PEjcs65A5q_FI0Y6XUSW1rm5GhufUgO97lPlyvi1G5bQ9-oO4NI1FOGiLcxKG57ZDk9s4LWMfzcWh6DQXiKzViznVArrvUyyq4Fxue3n6uF-v3_okV6pZEhDnT2CG0ID6dZNMlPFuS4IiGhRqBXv0d0lXtj2vyr-B1d0QWcxc4g",
                "width": 5312
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107782671235267847205/photos\">Gloria Artavia</a>"
                ],
                "photo_reference": "CmRaAAAAvy1-pEkjUjgiBdfw_uEY_hCxP6FsurMQAwDm6MTGSf7biz-qXxlvqI-sMnWs48UAzwI_fa4aajaX9dR89Ri7i9mEM5rphf6a-TK8SyWjDZGW4pGETzp_qq8UlBM4F3OoEhBbVoVOiHWQbO_Rs7oTCwFZGhRiOaw-vUZ0eLGN52muslP2RRflsA",
                "width": 5312
            },
            {
                "height": 1456,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113258591684397341648/photos\">Paola E</a>"
                ],
                "photo_reference": "CmRaAAAAXQ_rUw-d-Xgooyc8NbfVegZOvr9odsj-xttdecUJNNqQuLE6Q2doSWdaWp0S37Gwl-YaXiZqwRTa5F6V3FJPCvEpy8y3v-sBTNcjOMEf2Y96tAQTSfUfxo-Y_kS77WkYEhA9T5dWggzW-60dbdKlcab0GhSzCsiAEhAr1YUkEwoOYzkFmI4zzw",
                "width": 2592
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108233498188376852033/photos\">Rickey Moody</a>"
                ],
                "photo_reference": "CmRaAAAARrBq74avhqFTZuGL76IO7hwHyyht5zBBbD_Elw_k6HxW4mThfwWIT22wqoEHw0dXgFOiGo0FUXg2Hj9gEyYW5KoA8-9jssBp4U5UVozRxL5F4SqbuEEIxlV6Tz8iOA-cEhCQ4nICGr1C9ViXuQ3TG9L5GhRYTqS5uf1hITs2m3EVp7l8jgCdGQ",
                "width": 4032
            },
            {
                "height": 3265,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/110854164034814697389/photos\">Aaron Johnson</a>"
                ],
                "photo_reference": "CmRaAAAAW5z9qsSsgXynRebdRIvKs6op6yYfDfOhP5bg5ibEu3u8rF4vL0MW_NO931riqrIEQGC9RuT_sLRpr5Q6n-99FlIGuk_8GELkGJP76njYgxl0eHyV90fEfaTt9sn0ZLLwEhA02rppLD4OvsHstQwcpCmhGhSs7gE97Sw3HkVmaVS6NYpVk-R-dQ",
                "width": 4898
            },
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/117681326592303732635/photos\">nellie kim</a>"
                ],
                "photo_reference": "CmRaAAAAsl_6OjqHdqAvmyoR1bdpgNzcC7Tmnmqqm6onnS5cofqGOswC4t8WMrqFvV54D_JqYpNLTmm6eYBSNem02KJjjqWQgJCUZUAKyPu5zJBG0dK6PKRgamvfvXFQTOVj901dEhBjxDd8yGHoYpbSNvGdmaFZGhStgFv5Jfm-K1qZllpp3upODwSVoQ",
                "width": 3024
            },
            {
                "height": 2448,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101325382214909830934/photos\">Marco Castro</a>"
                ],
                "photo_reference": "CmRaAAAAhG4xh3hkGo4Ybxi5ZMu1wPA-mI3TYn-i5_bsOpK3P2WWKzsPQq4fh4-xhbx0hh1-U_zpJm5Wc8GG5MABXcau0zlmgaqxkgRNTG6YNpVK8F__tx-X99xNmdXqoiWAF5_gEhBYbe3UY9-UxbGaW_UZorBkGhTh9PlF6JBtXPao4vm-M89xE_bacw",
                "width": 3264
            },
            {
                "height": 2514,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106683553009115076336/photos\">Robert Downs</a>"
                ],
                "photo_reference": "CmRaAAAA8FBAiK6EZvyC_-Od4XGiu_gMTWGFkoWlOEm7xDiqWtIT7AzAIhaoZwt3Lp2XIl7_rg_9ZNFzSC3LKJNu3NyoL8_htlwhs64iSJ5Q7IiHOlEOfvtTo4__Cxyo3IWUKHZ4EhDt2L5z6HzXNwVZ3AgyqrF7GhTGu6xo24T3CBqidgvDytVNriHpRw",
                "width": 1989
            }
        ],
        "types": [
            "food",
            "store",
            "point_of_interest",
            "establishment"
        ],
        "site": "http://www.grandcentralmarket.com/",
        "place_id": "ChIJ53JDjkvGwoAR2NMG6_1OnUg"
    },
    "Sushi Stop Hollywood": {
        "name": "Sushi Stop Hollywood",
        "hours": {
            "open_now": true,
            "periods": [
                {
                    "close": {
                        "day": 1,
                        "time": "0000"
                    },
                    "open": {
                        "day": 0,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "0000"
                    },
                    "open": {
                        "day": 1,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "0000"
                    },
                    "open": {
                        "day": 2,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "0000"
                    },
                    "open": {
                        "day": 3,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "0000"
                    },
                    "open": {
                        "day": 4,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "0000"
                    },
                    "open": {
                        "day": 5,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 0,
                        "time": "0000"
                    },
                    "open": {
                        "day": 6,
                        "time": "1200"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 12:00 PM – 12:00 AM",
                "Tuesday: 12:00 PM – 12:00 AM",
                "Wednesday: 12:00 PM – 12:00 AM",
                "Thursday: 12:00 PM – 12:00 AM",
                "Friday: 12:00 PM – 12:00 AM",
                "Saturday: 12:00 PM – 12:00 AM",
                "Sunday: 12:00 PM – 12:00 AM"
            ]
        },
        "address": "5917 Franklin Ave, Los Angeles, CA 90068, USA",
        "phone": "(323) 468-2496",
        "coords": {
            "lat": 34.1053873,
            "lng": -118.3186367
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "photos": [
            {
                "height": 1836,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113729120537983670015/photos\">Warren Chin</a>"
                ],
                "photo_reference": "CmRaAAAAsVDWNJGoS_YEnmbqKzjfkaB6HP9SUnIA5i6FsqcfblHBVtH5SzDR7WfUjXd-wQyWYknXCN0S250pAqIz-ZuBeIOnPJ2-yTDl3eHbUXyP8uVkXp-wZo9Pu-QZmAqc9Jl-EhD7_e3ddvGBbElNhyGy_I3nGhSXTTJpEHoYMBib5KLd_56_YMfEnA",
                "width": 3264
            },
            {
                "height": 1836,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113729120537983670015/photos\">Warren Chin</a>"
                ],
                "photo_reference": "CmRaAAAAzQxA0RQzNQ4GAf6pe7Vj3uundvJoh5qZv8eSKR_Rkt713uQzjr1jV9XXXz_CMakdPJK3dVg4AqesraANp6lXnLdKl50TDnWlwUj_BzamlLPMwEArRwbeYVrBZclH1X0sEhAq8xLKKoLT8K0HvcXEDq2EGhS4oMYrGFMy2QVdDzJm6hDGqK8whg",
                "width": 3264
            },
            {
                "height": 4048,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/102154080344062247308/photos\">Louie Verse</a>"
                ],
                "photo_reference": "CmRaAAAAcjbRzD7lO5yzOc3U6hntCJ6tst0Re5s0dbY1inEA0YkoJNEGn0VeVAQKwqgw8F7ZcLnZvF7aBv3ltAxmf80fck8i2mPkgEeJfKSnoK-Dsi6j-IJM-qE_CLo3DeXykfBBEhBqdDXFHTMxzZh_VqNpQi-8GhRIyflx831zjBpuf_hXDAY2Un9kYw",
                "width": 3036
            },
            {
                "height": 2048,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106397331472507310431/photos\">SushiStop</a>"
                ],
                "photo_reference": "CmRaAAAAIIJAM4XPWLbgp93Jieg7CcItx3MK3v2ZdK5-qtsM6D9Y2GDmal2n9qb-mmPNm_fE6Evo0uoD1EqGT91gacW2OH5t7EBOs_BrMQSdryymhWr-7JKIBU0t9jHosGCk9Vb6EhB1ztGOwrUvIJziJIXI7ZN6GhR1WGow2SMqMJdeQToX4vm1OJ_GdQ",
                "width": 2048
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106356937175759708661/photos\">Daniel Miranda</a>"
                ],
                "photo_reference": "CmRaAAAAg6xbioiEBKiHdRyDGxmh8ViG41WpirxIiAxTgnZbMmldNexTXg57LPaJTlg51YuqGIh8pCDHXtOjpeu2JdUmp4lkvi5ohbKFgEOp1mBK9kLsHLnOIpD4FpQgJCM3Ut08EhA1mkzmlkmJgVX3LRv3R7VyGhQii3CvEXknw4zEvdhRpSZedamOMg",
                "width": 5312
            },
            {
                "height": 1440,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106973639119317591851/photos\">George Anton</a>"
                ],
                "photo_reference": "CmRaAAAAUfJHARGPaJ-Fthay8Wq9jraGQadzdrn8oH9Z0q0yyk1WgDpo10ug7ySkZgB3owmPk-NVmBJhBt3YjcU_QrZsR12WTe2hTF5nu_z3RBXha_E3BOFaRi5_y6hBZyUI5Be8EhBT2AmW1jguySZ_5OsjK5y3GhRNANsERalPBle8eJJnqgRbSt-rAw",
                "width": 2560
            },
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/109637693792369364150/photos\">Tinna Huang</a>"
                ],
                "photo_reference": "CmRaAAAAUE1YJ-FUXhV6eSLnmVY--e29q5_3JugZdTK4KYH6bLm2LC-hqVo2dUnQJDnGhgY4xk-rBY6L7aXj2qOMACGdQBJKOhR2MAs99MlgMhyM7aZXReS2WG9hfwP_fy3D1ccSEhDlNkC8Efu85LAmPmbJHim7GhTrNVgySPqmhStCzBTy1p-xEakXsg",
                "width": 3024
            },
            {
                "height": 5312,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103830935556709469159/photos\">David Bonilla</a>"
                ],
                "photo_reference": "CmRaAAAAtGzqfv9yudANDJzRSiorONis0ipZkJR3ocnrejoYd9v47xjrs6EBw4zWDA5zJquTzY-NJ_xxZj_wIQRckZmS3shbr605ZW2k7-mk-xHcZpyXyGDxTUHpdxJx9iFBiy1qEhAYaU1r57Tj-Yu9LW1cJ7CHGhS_GjQ-T9gKjF1-e2Ud2_S3FkN9lw",
                "width": 2988
            },
            {
                "height": 3120,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/115234894221113262460/photos\">Darrell Uding</a>"
                ],
                "photo_reference": "CmRaAAAAGfXlHoU2-U3HTD9zMk822mEK8peQsfaEXZhPLZeWya_Ls44kDCf_nwkSjvMziLgG-28WvtmN6enRFK10kWO5aD5uQERqDug2m5L7s4pyPSx4wfQNie2vmJ5bzZwglBiZEhAFfRcDHAJtJlJDDKf1DdgTGhRAU1R-YhIaUWery6EL9ox5RH-NcA",
                "width": 4160
            },
            {
                "height": 5312,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105769783335966789478/photos\">Brandy Schrader</a>"
                ],
                "photo_reference": "CmRaAAAATmjl7vDZm8y7x8Endap1dTJDffRbRFgOnj59zPa6LrRRgcQZwv4kJD5ZFtJX_vYynZHFRnzNmy5pph7uPwd8Io--2780rJU8Y5oE9ILRdLfK2NIcTctSFPo9TfKLd73GEhCtGdaqOlTX0reWWnjiWfwIGhQw_xTjUiAvGpeUpos1Yi2BqEGVpw",
                "width": 2988
            }
        ],
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "site": "http://www.sushistop.com/",
        "place_id": "ChIJPdKmy0a_woAR4rzPHGegdkE"
    },
    "Avenue 26 Tacos": {
        "name": "Avenue 26 Tacos",
        "hours": {
            "open_now": true,
            "periods": [
                {
                    "close": {
                        "day": 1,
                        "time": "0030"
                    },
                    "open": {
                        "day": 0,
                        "time": "1730"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "0030"
                    },
                    "open": {
                        "day": 1,
                        "time": "1730"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "0030"
                    },
                    "open": {
                        "day": 2,
                        "time": "1730"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "0030"
                    },
                    "open": {
                        "day": 3,
                        "time": "1730"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "0030"
                    },
                    "open": {
                        "day": 4,
                        "time": "1730"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "0200"
                    },
                    "open": {
                        "day": 5,
                        "time": "1730"
                    }
                },
                {
                    "close": {
                        "day": 0,
                        "time": "0200"
                    },
                    "open": {
                        "day": 6,
                        "time": "1730"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 5:30 PM – 12:30 AM",
                "Tuesday: 5:30 PM – 12:30 AM",
                "Wednesday: 5:30 PM – 12:30 AM",
                "Thursday: 5:30 PM – 12:30 AM",
                "Friday: 5:30 PM – 2:00 AM",
                "Saturday: 5:30 PM – 2:00 AM",
                "Sunday: 5:30 PM – 12:30 AM"
            ]
        },
        "address": "2601-2629 Humboldt St, Los Angeles, CA 90031, USA",
        "coords": {
            "lat": 34.0801217,
            "lng": -118.2179328
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "photos": [
            {
                "height": 2268,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100997398598935276153/photos\">Jason Ng</a>"
                ],
                "photo_reference": "CmRaAAAAtHKKpUJU9PNs7i5QRIwlSUZJZWWjpPADm7mhb7TDyZGUGTvdV6SehcAOi2qloPo3D1nRx5plKKKXbC4usAYHnkBdPqLi4n-hu7ecgFsO2V57vdbRGfxDCX1n6rwspBBvEhBK7P8ZZCNrOPn8SIVtdS6VGhQb45z_qnq45AugxC1LfLg2Fx-qZw",
                "width": 4032
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/109866568932417573766/photos\">Brandon Tam</a>"
                ],
                "photo_reference": "CmRaAAAAtmMLwSmnnboQiJcEaYDwQzk9zCceA1_lwz52wHdsLfcD1mlLyMk0MandwwRGOGeZledBU2J2yvOKbBZwyTjnhNVJr_xQg-RFUW612oBvz1qAsqqWCqV7VMc5q7bu7Yp_EhA65QmjGqV71BSvWDr1rBpXGhTCpJz2gCPu_e39F8gJc1mlpuB99A",
                "width": 5312
            },
            {
                "height": 2340,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106155388896677484030/photos\">Silvia Rodriguez</a>"
                ],
                "photo_reference": "CmRaAAAAmLXtVIlv7HOs6hO01ghEdnBKnWMoWIb9Kwd2epizQF_h8T_yTw6vDSZ9II2zog4D3WiDeWoBw3Sgfuah-za_6u-mpEnNyl_-_dTqK78MgVhOt9fpwLtDfOhi6zum3obbEhB05I-XGC4vbqCZIH69dPxpGhS-dGa9JplJFUjD_VCVahJTp5ED3Q",
                "width": 4160
            },
            {
                "height": 3480,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103373635549237621741/photos\">Wayne Tam</a>"
                ],
                "photo_reference": "CmRaAAAAApNaxsMp6udO8Y1JJw9erd45W2bZJigG1FLcpqu2wZ8oY3HhyYK-sjRq-UQuVUz-Tk6b_Z-HXCPyBPQ067BBi05oEgsP0NA5hPJhfrlFi1jBZgHxU1NUdDTpe2QAA98WEhDT9s2qUNRva0w5tj1OpM-FGhSrdOzbkQ91D9HxykBY0jBeINx7eg",
                "width": 4640
            },
            {
                "height": 3036,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105634591037787513733/photos\">Tony Vandal</a>"
                ],
                "photo_reference": "CmRaAAAAyA4_fLe6Hs3qGjolh9m0vr5-AYI9w_2We7UAIQwys8HtXoFXVIUwNDDHSVgEPlTi8CO5WJWGi0BNBBPg9wtMPlK9qCyi8Vl7Ce-tnTwuOtE3TwJZExuesf8jiLp4oXDbEhAhOmaxkyevO0I2VyKk0KO3GhQAAnmDM0SDhOcMh0_YLggV6QOrSw",
                "width": 3036
            },
            {
                "height": 3264,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104925126875053223661/photos\">Tim Peysar</a>"
                ],
                "photo_reference": "CmRaAAAAsJl2fO9cHhGLR4E1ATQ4cWH3BdQAjgH2MpPXy_XJr9dy7jfbEhnq0UfTi7fieQYjjWFSZLUuYv8dW9V2rIy1K0foE2HojNtg5p4yUYsbeZYOP9ZrTjfcn52nO5Igdm7OEhCEvqqO53h3AQ4hERhyu5HbGhSW9Mdng1jzHIA4CKfyrMdsHKO9mw",
                "width": 1836
            },
            {
                "height": 5312,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/109866568932417573766/photos\">Brandon Tam</a>"
                ],
                "photo_reference": "CmRaAAAACFGrc7xr4JBY7HLcnqnR0PW_Ncz2Txmh5YNOFIxWiYOqViKDlvG5eG361jDY6NSGaGnXhdW8jxb0JbDVJzfL4wk8aeMa08UqrtqjeOF0_xK4WDJYRWmU-7leLWy4fIFZEhAsoJd0FOhRDh7zaTZ-anEKGhSOO20AqvrGpytHhJW0P9MDDdgaZA",
                "width": 2988
            },
            {
                "height": 1836,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/109674222697760896050/photos\">christina palumbo</a>"
                ],
                "photo_reference": "CmRaAAAA49NIZHOzq3irqRVwmvcYu1fG37Z6FjWcPs2WzbR206CpuD_XXd-QVCd7Mnjwsuaa_izIzbqmFVNkONvJAbnqP-R4WsGeIyQzQ-0GKrX4lG5IO9cjDT8-oLMQ-wW3REi7EhBWi8G198GX1TlmlvMq0ps5GhQxe36EDigth080WPdqIEyqGrqDHQ",
                "width": 3264
            },
            {
                "height": 5312,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/109866568932417573766/photos\">Brandon Tam</a>"
                ],
                "photo_reference": "CmRaAAAAOvExbhyXrUIkYHjA5OW_ifDCUazQNhC5BnIK3TtBXXXH42uVTZ3j48Yq3oF8FI5HRnMZkB0LkkobH6KpkK3N14OVKqLQwPoGMJ2L_Di89HgSW52b1j_MdPYIRsvjeD5TEhC7XxOMuWgO81qON1ucH8p9GhSt96BnvX1u-d3dq7kcjscVXAnGiA",
                "width": 2988
            },
            {
                "height": 5312,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/110729557307795331738/photos\">antonio rivera</a>"
                ],
                "photo_reference": "CmRaAAAAL67FfKq_nxE-nIteM4-jrxA1E5uXJ0oKvNeqvhnNMVOJ8LMgKI5nyixsqNrxQ3R12RBMf0Tv4ZYvNqmwZI4gEle1gu9kXAjyll2WGrSZmLU4pULHMDRbtXx4CFJM1gl_EhDMFuxRms4TM886511sfMkiGhSb2ewF_o6sbogjhDK8h8h0bx-O9w",
                "width": 2988
            }
        ],
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "place_id": "ChIJVWtVV4_GwoARB2yVRDdTW8g"
    },
    "스쿨푸드 School Food Enterprises": {
        "name": "스쿨푸드 School Food Enterprises",
        "hours": {
            "open_now": false,
            "periods": [
                {
                    "close": {
                        "day": 0,
                        "time": "2200"
                    },
                    "open": {
                        "day": 0,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 1,
                        "time": "2200"
                    },
                    "open": {
                        "day": 1,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "2200"
                    },
                    "open": {
                        "day": 2,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "2200"
                    },
                    "open": {
                        "day": 3,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "2200"
                    },
                    "open": {
                        "day": 4,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "2200"
                    },
                    "open": {
                        "day": 5,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "2200"
                    },
                    "open": {
                        "day": 6,
                        "time": "1100"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 11:00 AM – 10:00 PM",
                "Tuesday: 11:00 AM – 10:00 PM",
                "Wednesday: 11:00 AM – 10:00 PM",
                "Thursday: 11:00 AM – 10:00 PM",
                "Friday: 11:00 AM – 10:00 PM",
                "Saturday: 11:00 AM – 10:00 PM",
                "Sunday: 11:00 AM – 10:00 PM"
            ]
        },
        "address": "621 S Western Ave #301, Los Angeles, CA 90005, USA",
        "phone": "(213) 380-3663",
        "coords": {
            "lat": 34.06276920000001,
            "lng": -118.3093674
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "photos": [
            {
                "height": 1536,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116597530187474038643/photos\">Scott Leavitt</a>"
                ],
                "photo_reference": "CmRaAAAAUxhIHh_VGsISoCDLqf-qu7-E7GKA6kLlFAZymGeYElmGCl3Oj0FZB9WGcFDp6wBNUMooPLYdx7q33s755pV-4ZIRLvJ-9Li8ovwSGKsrwYtqsmQAFWRDW2cv8VbPt1eaEhCQPGtXbhq6MuBNzQtjpiOJGhQAx6pEyy_TEJydxUVsyf6TW4lVLA",
                "width": 2048
            },
            {
                "height": 3456,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100531492565256616099/photos\">Tatsuya Ouchi</a>"
                ],
                "photo_reference": "CmRaAAAAh_hKysPkaf1nwI0d_4sBZhNQlRatINTESj78jipgIxLvADPMW_lajJsQcLkwsmiDeTrMK4054M8DHtaZyofXRoTIxEFpbHtHGvEze4eJaL0gI0XjEWUWLosS8-yLE_oVEhBj3csm6gVXll8LR0GopwRQGhQTc8WsVfNGYckegCXqPkgZZnOswg",
                "width": 2304
            },
            {
                "height": 1080,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/102233255611951717058/photos\">최태희</a>"
                ],
                "photo_reference": "CmRZAAAAz5a-NMDkSlOa1TALk9GWNQXMlCo99AjSl2Nf1AhIqaCiQE5KcDQxQP4DVpvXrOVxvoV7uao-MpMKYALY6JsMUdf257487p07ogS7_88WDMOefrLcUarYm9PmZfGMFfTWEhCx_SBDHfoHFpzHRvAq0J_YGhTWRl-zgCk69O26hn7YNhgbWo1Q1g",
                "width": 1080
            },
            {
                "height": 1080,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/102233255611951717058/photos\">최태희</a>"
                ],
                "photo_reference": "CmRZAAAAZDbIqFiXutd-oQn2z4SgAjsc_gxfBPg-U4kTsn7luN26TrY7Wl2uhoKsKBPuqhoBaRwn8Mho-itnPNKVJ8Z7S6JXhRt4emRR7tLuwXfVPu-qHOiW3ZBJW6i-0qV_i9Q_EhDLSi7sSdnEzh4o-UQ-nEUJGhSEC8fMZBOhg0J_XRke831Rot95aA",
                "width": 1080
            },
            {
                "height": 1080,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/102233255611951717058/photos\">최태희</a>"
                ],
                "photo_reference": "CmRZAAAAHIVqXT6DXRYi_BzWDVxM_7P61GWTd91dhs5bcS2DE9wqhUpzYnUJdtutb9_03vQ_nrJeawoztELXEPAvy3IS6gqxdqhkQhwQnZnmNgxs0OJ9JWwyVLQ7NVDJfZuWNHVREhDTzlsatwA33OZZNT1l2bFzGhTbyqu2ICDgU3pfuNshOYDs7L4iqw",
                "width": 1080
            },
            {
                "height": 3264,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116597530187474038643/photos\">Scott Leavitt</a>"
                ],
                "photo_reference": "CmRaAAAARBodx2uRiFmRPkARBtPVLgeIz9bSwkcktLI6AEBSW0GXr4wJKD6ApMaNLJbnNr41NRSSxIswWb5tVKJZnaxVgIvvYGJLG0ubAIQ7y6OtHM1mRR3ej1HMD4hXnsxrey5TEhA0aOrDdrewhaY7wn2T9bj5GhRAgEES0CADfRBROjQeuBIqmYqr5w",
                "width": 2448
            },
            {
                "height": 4048,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103639919177037503667/photos\">Charles Boyd</a>"
                ],
                "photo_reference": "CmRaAAAAFBy9yamOHLm8avhZQz1Os04GtmEa61BT88a29oSU0iSQSLxGvJTN30LzeV1mdbkd8lCvBkUXhO1oWKpLmy0FPoKu03C5Qtnd6ba4sNAmyAEZA__caF5fbsNYLW685gQ9EhBPGLAuyG4EYpDN5voTkLclGhT1aDwqAzXWD5UVn_wB9B3bTyN7Mw",
                "width": 3036
            },
            {
                "height": 2448,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116597530187474038643/photos\">Scott Leavitt</a>"
                ],
                "photo_reference": "CmRaAAAAbtmUKJziK4g34PeVhGg4TWW-qMTZ9TLrPmk9BSKPHPoWkc1CaIM-10EC9M34_-bSKKW5jCA3xMzudtFN0uUIBY8og5W7NIwyRw1WBrRP0rKdRz6x_cf-qvqwjXDXnY1CEhAJ_ipdm2ZRoRSFrZNpMoUrGhT51P39QKeWCaCzu22Sf1Lo3VczVQ",
                "width": 3264
            },
            {
                "height": 4048,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116835659901192303083/photos\">Jonathan Cheon</a>"
                ],
                "photo_reference": "CmRaAAAAEYMDDvGpg3hfLMd8KXAfhdRa0hETSfdw3nhY0q-ZZc0zHocHfUku8o2Yay6UEIxJWwsl9A2-R1fVoA6PQ6yyFQVS2_0KqR5J9lgxp3SKai0dCZJr5ebX0-KIKojkjanMEhDXwQWbWNopgoGU5NWIiporGhRqkULeo0fQgF-McVylng6MFQZfuQ",
                "width": 3036
            },
            {
                "height": 5312,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/115999882320851647232/photos\">Esther Lee</a>"
                ],
                "photo_reference": "CmRaAAAAGmv55JO0RbWOELo0nEtusMTDP-QyyqNpbhPfJzktOKKBgyStw7YFLp8GpfL3GDYX9cbzyXrkJdIQYouSHQkH-YX8-zMBjhjjKZHHT1Py182i1L0eV-O__ydBuoamwP6DEhCVa_lYmMHYmSk1LOnW1ecfGhTurDz0pKpFgBNFGqtAyH_VUcrA0Q",
                "width": 2988
            }
        ],
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "site": "http://www.schoolfood.co.kr/",
        "place_id": "ChIJJRT2w5q4woARblXIl9kWvOc"
    },
    "626 Night Market": {
        "name": "626 Night Market",
        "address": "285 Huntington Dr, Arcadia, CA 91007, USA",
        "phone": "(626) 765-5166",
        "coords": {
            "lat": 34.137337,
            "lng": -118.045173
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
        "photos": [
            {
                "height": 1932,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/110340075549299863993/photos\">Chavon D. Walker</a>"
                ],
                "photo_reference": "CmRaAAAA3Yw-IzenqFFiB9SMW1NayheIZwbcg8OCntRkD0W6gEnhgWVpw1edFx3IKFWJ6kv2kHsjMKrLaVvWmApa4KdnNzxRkxmk_OadFvNeybbWh-I01JWKUIaLDNy0BZwrOT2REhBW4ECOmah6gcXGofqRXM0aGhRRywbatxijEzPoPGOAQaj_AfXPhw",
                "width": 2576
            },
            {
                "height": 2387,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113490734827493928010/photos\">Patrick</a>"
                ],
                "photo_reference": "CmRaAAAAa4c3jYU8qA1KNZGuwO7dNKFhdxoUb4-HayZLwcWrDmL8iDHBw7C8T7dZ2FxHQ2Z8z7rLB9WuN7KtdtxzCoPbMnr30ZDHUgwpXIsRTd8Rm5sHZAgzlfKM3GYq2E34Ae2GEhA-6mO684tiXESiA7MtjoQnGhRrZuk4SgNDiRFTmpO-VinFa5Tupw",
                "width": 6703
            },
            {
                "height": 3006,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111523694960334213979/photos\">Lenny Perez</a>"
                ],
                "photo_reference": "CmRZAAAAyqmgiLLNcNi4MhfkPl2Y2CEWKEVN1jWRBjz2MF7q24flrL3aDmwEua40NdK8CzRO7trY2hPS1pKaA2AHF5JKi1znDsJXOutB5qIIdslcpHGgD7I643Zu67CF3A6XE9uCEhCTI19elMIHY6BfqqjEJjtoGhSz2XSRsF-UwM79jElMh_x1hrYVUA",
                "width": 5344
            },
            {
                "height": 2160,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111949997448881774668/photos\">Marcela Salgado</a>"
                ],
                "photo_reference": "CmRaAAAAsVAnq-d8ECvpYZNHn6us2Hq_KuzJ4o6JMwUuHJQ8vI-VjHVvUVVQ1HHIKuo8ZDg4bWda_Cxm-XWncsHRfe0p_kG5iql4N6v5q8W9ymjFpfnIO2FE9ODWwsPG-iNUOkzIEhAZhmX95xLRE__yfpAZR2afGhTGyanSgE3rM9PiM6cFYuuksAh4bw",
                "width": 2880
            },
            {
                "height": 1932,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/110340075549299863993/photos\">Chavon D. Walker</a>"
                ],
                "photo_reference": "CmRaAAAA6--yB5dfSc8OI1LfzxR6jkPdxTnYONq6OdnGbinnRaLbFoE5SzV5FzYT-AB-6gI_i2eRIQqraHnE_77A22BEGDhfxGIKWCWoWLjNPJhRE_ldW2c-WZL1gXQK4zAFw7ypEhBm07a2eif98VGfGjjSJzHVGhS5ZFRYpA5wiSUqO2OQSFHLw-kKuA",
                "width": 2576
            },
            {
                "height": 1440,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107882338272962327477/photos\">R.A. Grimes</a>"
                ],
                "photo_reference": "CmRaAAAAx02QSsWeuH5aDvGXGcTRcYFLRHoKeVjWtthzfEi0gGyO2ATM2qnPyDQxGirTrxchtnX_ZS4DR_5HJkt2FgavpkILoP4t97owJ8fzMXCQXwwkCnBhQ46bHINXaU_VkAkeEhDpJi7nhVPjtmUxQc1IOIDJGhTvvLmYge1xt91IDkDJqvD6gjtK8w",
                "width": 2560
            },
            {
                "height": 1836,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111576253737933968748/photos\">Niranda Wanthivanond</a>"
                ],
                "photo_reference": "CmRaAAAAOdfNxT--2spfrJmbKCde4w6IT-MEf62NVYsqhRCsDmO2ZuhGjXgqScRgDE-eBSimZ-D7vBdbXAk3Qi8_m8u-RJbz02oDt9ckH88xf1LR5jeMqqc-SbRhKZjTw8U8JEh-EhBUtHk1h36OBeqywGVcUI3CGhRiOjGfH5MjZTpfX5vdTkT3kCG_PA",
                "width": 3264
            },
            {
                "height": 1080,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108602534545907028201/photos\">Paul Chan</a>"
                ],
                "photo_reference": "CmRaAAAA6t44kioP9yk5J_VPCsLkwzPVxtiEzUCue3_Vn5_MuPe2OESXoVW4ghyx3oSCa6CoMAxRLinaBq1nAu33UQ2XymFjJisqHfImHU_3O-rU1SCLqpAlOcsRmmFnfp7Pez8jEhAG5k3zOgKK5ABXywPf1k57GhQEMZ2PPf4gFCp8Ex5bayi3cRdNmg",
                "width": 1920
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/109770455507879479188/photos\">Adrian M. Ortiz</a>"
                ],
                "photo_reference": "CmRaAAAAS7YOWRGZ1kahN2tAEljIfw9FSCEVgC9AaexIBueG-jANmtjItlth4E_VkxRgoxbjca42ETWLSdLe0LHA7vVEZq6M_kWjPrqCmRZHpZVjvDfgIhVldsv9-wspNvG3cO9zEhDtj67F9De_wK98rm94fJKIGhTYJGb9I3KjYmyu4Nv7FzmJ5p5Fig",
                "width": 4032
            },
            {
                "height": 3088,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104441196896810733011/photos\">Emma Chan</a>"
                ],
                "photo_reference": "CmRaAAAAYg2yXbYeQ64L4NafQL8jRfTjtT6BEIaUKiglz3zU1q5S7VD7CJrKfdAeFBkhSEooMjopZe-falE46Bi8yB0D6yb8MgMn0_EkgPV4rRfBqeuUzynfGM_WzMv0e1aZbP8MEhDUoQj6aNILov3W9YF40PvBGhSkGy-wPR9aediLt9SkjO26_lg6gA",
                "width": 4160
            }
        ],
        "types": [
            "point_of_interest",
            "establishment"
        ],
        "site": "http://www.626nightmarket.com/",
        "place_id": "ChIJE7jOdpXbwoARWx1tqIs_QXM"
    },
    "TANCCA": {
        "name": "TANCCA",
        "hours": {
            "open_now": false,
            "periods": [
                {
                    "close": {
                        "day": 1,
                        "time": "0000"
                    },
                    "open": {
                        "day": 0,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 1,
                        "time": "2300"
                    },
                    "open": {
                        "day": 1,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "2300"
                    },
                    "open": {
                        "day": 2,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "2300"
                    },
                    "open": {
                        "day": 3,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "2300"
                    },
                    "open": {
                        "day": 4,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "2300"
                    },
                    "open": {
                        "day": 5,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 0,
                        "time": "0000"
                    },
                    "open": {
                        "day": 6,
                        "time": "1100"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 11:00 AM – 11:00 PM",
                "Tuesday: 11:00 AM – 11:00 PM",
                "Wednesday: 11:00 AM – 11:00 PM",
                "Thursday: 11:00 AM – 11:00 PM",
                "Friday: 11:00 AM – 11:00 PM",
                "Saturday: 11:00 AM – 12:00 AM",
                "Sunday: 11:00 AM – 12:00 AM"
            ]
        },
        "address": "18423 Colima Rd, Rowland Heights, CA 91748, USA",
        "phone": "(626) 723-4306",
        "coords": {
            "lat": 33.98873329999999,
            "lng": -117.9033421
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
        "photos": [
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104561203609412349733/photos\">Landy</a>"
                ],
                "photo_reference": "CmRaAAAA6Mwg7hvxc1KEqzDjR6ZfD9Lcvaxwzp3DghGYalc_xKTXRVzZu_Gp7ti_t1inQWnj0ErpAGvM48xvpTNkzVPeADgHCRVh8zhqkkC7LYdK39p2NVcKgvil_07NxL70PWWlEhA4RzRmY9GhGm2i0Gsj-qdTGhTSyTquBkRgMwXTa_JvtTDWgO9ZfA",
                "width": 4032
            },
            {
                "height": 2592,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111041391461270283955/photos\">Joshua S.</a>"
                ],
                "photo_reference": "CmRaAAAAQUq4JHjGgcuNEQCOMr2M_375UMlk1rJ_v3y2tHCXIPBBmoPvcqdNUesg9Jb4bs2s1nNdLcvlwvlaqfdSAPwyfDcGWbQekCZcc0zJVsUa0dbqhbxcLTlpOtBNBbBdLaPkEhA3-m_6l1_VCq9ejNHrFaxdGhTgp2LQWBAqBSSxVF6zf4xCdWZ8Sg",
                "width": 1944
            },
            {
                "height": 2860,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111041391461270283955/photos\">Joshua S.</a>"
                ],
                "photo_reference": "CmRaAAAAp0vxrY7A4e4f_6OKEn0bpNHVuzSuQq82XHbGEMjsD8SLHyEKAZpviPEDUzgF8_xUKBELfk0lwIK_W_HTk9TxjOpbhg20Y6VKvteJHOVVigelRifbtiEZJAqpLcxaHPEaEhDKmGRnAkNU6Em6d8bo8yeVGhRCWNuRA2B1e-43tmQN3nIuAtNxSQ",
                "width": 2193
            },
            {
                "height": 2688,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111550551454247595582/photos\">David KinderTeacher</a>"
                ],
                "photo_reference": "CmRaAAAAejlE6Jm0cM3hCXrmd9HguEjlhOdwzHTmaLp4gXVZMA8xY_BgUlrC4js1phWEWHN5sPXv6igsQFV8ihUkCxhEo3Q8Bre6end3hp5sIbSFXzmaY-xuJov1bEVSmK1DLbz0EhDN7li92s14JZ6axYRuGqm1GhR9ygYwFP0OqpBTN6iU13oeTY15gw",
                "width": 1520
            },
            {
                "height": 3264,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111786517743281339317/photos\">Tiffany Cheung</a>"
                ],
                "photo_reference": "CmRaAAAAmyblrzEcvQYCzdxsMmJvEXITZ78VKv-l-FwhqMiNoP12otyfsGFPfPQvHJOAbc7MMHYGZY1idZDyMixNHJaLMZCqZRdtGZYxJzWdX38zcuVVey4G8o1LOT_LSEIkzmDpEhBT3bhmrktzQ7JITGiYtSCqGhR_hPb3JEPix5uKOadtzI13auQXLw",
                "width": 2448
            },
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103467563382393687053/photos\">Kaung Tin</a>"
                ],
                "photo_reference": "CmRaAAAAuj3LeqJQBLcL8Qwhmyyzo8qEhxCbr_h1yeiHsOHbN6LlYrKX3v7wkcd-hBoGVfSHzm_54YZY6x6fKU0BwhwR0POf2LZeepzxUx8boiC5miOH0wZidU-G1ZFb7ofE279MEhDFOeMKwE8UFrooBRQzSCryGhSn75PKG_OnX8pj0xWP_x_xjSqDSA",
                "width": 3024
            },
            {
                "height": 2448,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111786517743281339317/photos\">Tiffany Cheung</a>"
                ],
                "photo_reference": "CmRaAAAAyaH2-bD5Ts60OiWI_u7LUmH7jFCqyklhD_3Jk3xrmDRw60aT2XVZK2F3FOd5dudJnW_9AEUc5R0ajuQd_3VLNCX_7iIW7Yxey4gAnmK53-eD04ewsro559LquR20KVCiEhDcSUH57eSCykW1FsDQM-wSGhS0BPijK50WoOHH1jTmznGFbaTqEA",
                "width": 2448
            },
            {
                "height": 2448,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113255786150866076177/photos\">Ting Hsuan Chin</a>"
                ],
                "photo_reference": "CmRaAAAAsDYDRQABse8vNF4DlF3ypXi_PR0aw1tpAJZpilvpiZwUuH4wYAjdOvntU1tepZhmfXBjdsMlZX04n58T1dYKA7_MD-j-iBpJOgPjhCtSrG7x7Itusmv9Gd5Q89Wvph82EhDMMksQYB8YUjWFrWNXUQaNGhRWWKRCOMQO7lgNQdMMpU7Qplp-nQ",
                "width": 3264
            },
            {
                "height": 3264,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111786517743281339317/photos\">Tiffany Cheung</a>"
                ],
                "photo_reference": "CmRaAAAAfHGVhqDBhDmN0ArFANNFbz1Ywjm9S_r8un0rnq1gekYoO16eDkvwOP_G42jOjl9LIImDKZjziIq6ckawbn-IAcs6ChPIfWcrXgQZ0h-7q92zpoF32tywoTLnQ3v7w5DjEhD-ozhxUHrA3sctiIPDQcDPGhSKHDwCrNZ09MY4eKAJZAWSTX72YQ",
                "width": 2448
            },
            {
                "height": 3264,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111786517743281339317/photos\">Tiffany Cheung</a>"
                ],
                "photo_reference": "CmRaAAAAbD0_bXsbWA8v1anosQYea92T8OlFKyl2ThLZRlXKlgmBJdPvmRkh-EsaWARt8Hl26fcjdA7hSpz9EbUy03orimPuI9f1C23cBhUSRSWh0UDsdgc_IP9ZX-ora4BVfDhSEhAioYkTQ2eOAlo2GJPlx3IQGhQ4qtVI18y0oCB1d51FSIdtSYHllA",
                "width": 2448
            }
        ],
        "types": [
            "cafe",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "place_id": "ChIJC7iZPGAqw4ARkZl9Z9L9NhE"
    },
    "Cafe Dulce": {
        "name": "Cafe Dulce",
        "hours": {
            "open_now": false,
            "periods": [
                {
                    "close": {
                        "day": 0,
                        "time": "2200"
                    },
                    "open": {
                        "day": 0,
                        "time": "0800"
                    }
                },
                {
                    "close": {
                        "day": 1,
                        "time": "2200"
                    },
                    "open": {
                        "day": 1,
                        "time": "0800"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "2200"
                    },
                    "open": {
                        "day": 2,
                        "time": "0800"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "2200"
                    },
                    "open": {
                        "day": 3,
                        "time": "0800"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "2200"
                    },
                    "open": {
                        "day": 4,
                        "time": "0800"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "2200"
                    },
                    "open": {
                        "day": 5,
                        "time": "0800"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "2200"
                    },
                    "open": {
                        "day": 6,
                        "time": "0800"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 8:00 AM – 10:00 PM",
                "Tuesday: 8:00 AM – 10:00 PM",
                "Wednesday: 8:00 AM – 10:00 PM",
                "Thursday: 8:00 AM – 10:00 PM",
                "Friday: 8:00 AM – 10:00 PM",
                "Saturday: 8:00 AM – 10:00 PM",
                "Sunday: 8:00 AM – 10:00 PM"
            ]
        },
        "address": "134 Japanese Village Plaza Mall, Los Angeles, CA 90012, USA",
        "phone": "(213) 346-9910",
        "coords": {
            "lat": 34.04884790000001,
            "lng": -118.2404543
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
        "photos": [
            {
                "height": 732,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/102709486610693063951/photos\">Tim Gideon</a>"
                ],
                "photo_reference": "CmRaAAAAwk6DGEdW4O-klz7DOKSxC5qCj9Fx6nX4GEc2k6vBcjy7unwsUejpd5WAeD2dXTF62jLtKKshqi8W1g9uZHtncdmjHpA90oZjTrOoyl0zB_iNRvk2iZ5tJSIeAhuzOQgXEhAqdCOSDnl2vKLEoCEtmQRjGhTCXKIJNp5vnmFTZv3Wx9wq0FhOQA",
                "width": 749
            },
            {
                "height": 1367,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105116009763675971843/photos\">Queenie Ma</a>"
                ],
                "photo_reference": "CmRaAAAAn3o99KcYWMT8ZT2qVutfZ987c0XzM5QLzTDw4Tir6n2c8vA_VvpP5-GIclez8Oo5uktj4SPPOORltLYNhip8I7TTKvEkommU6CUpCbfEDEuR_Kk0CyPl3Os0vQZ0ApowEhCj_AinmuMdXeq7oCpmKK3JGhQ1DEGuiH0kU05sp7tbxv44B4w4OQ",
                "width": 2048
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108220621462697761769/photos\">Luis Evolved</a>"
                ],
                "photo_reference": "CmRaAAAAh0IUH6EW8OckwhD9D94i1nxPSg1zkbOx5w2y9UXOOR9Ye_ETdwawicxk3av5Kd45y3kMU3g4ETvpnm8LqvhN7DQc_eYx94Q5uC1_GDeFI9UOQQc5CgUUa5ES9bpmzMq4EhB4UAclbbmEPKw7h9_pjNGrGhR5XBI-YgfmHFtw74HSl-Nc0tuk0Q",
                "width": 3024
            },
            {
                "height": 4160,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100937178676721631795/photos\">Saul Prado</a>"
                ],
                "photo_reference": "CmRaAAAAcJ1tasvw5B5YF2k_1ghgRytCZh2PZJzCr3IFYzsuKOOO2FjSga2rKp6a4_6Qm8rAYJX27fmB61C9hnP9aqiW4H1LDgEP22zrnabCrPQNvTJZFo2IiCqSB7SDnJ2ku6gwEhBotSqRaFOreVBfwnaXwh2KGhThHHAbJ2EgA5Zi8SsF_JNRqSm7lA",
                "width": 2340
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114595125503780367072/photos\">Glenn A</a>"
                ],
                "photo_reference": "CmRaAAAALZjsTC6oNUszlyO5x7Ych-8oZsiofsb7tt2i7IgNE9LE80CLx528ij3gLNbqR_SU6T8HKSynmhCg0T2jYkr15rRApkls84tkiHDvjeL0goqKynthUZbx1pav-uZNyBtdEhD_nE2RzbDPVJ9EwfKCeOnuGhS25npIHn3EjMLVhL3Q3ECAxWXJdw",
                "width": 4032
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105834713343502765092/photos\">Joseph Egbule</a>"
                ],
                "photo_reference": "CmRaAAAApZmJ9JiAgnOmRp3yxP7AiXjhr53y47ETrVG3sfiZbnBy2gEMFD7ha_WXARcTMgnccesD7RXXRyl4-R772D1ZRUS24reQg2OJqNpkq0qsJZQSsWlxwZ-ZAQRn1zlUgVOAEhBDe2PDLuADNTKbJPbiQK1GGhQzKowtxUTpUdNtMMYhQoLnIZN7zA",
                "width": 4032
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108220621462697761769/photos\">Luis Evolved</a>"
                ],
                "photo_reference": "CmRaAAAAzxo8ALS28-TC_w6fhZmQIeB2oug7-Oimyb2EidMFP0NnPNjaZ9A_VNdnJvh8Gim9XlJgAdre-9V1NuaMttjjxYMYclFHIQgpXJ3GcokN6m9vqjvbfnhAT7Mqnd0h66LfEhDj3BD28F3q_kLF3z_0yTqKGhRk8Sq5TR9d-5MrMddaPF1SROHDPw",
                "width": 3024
            },
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103356349830684248545/photos\">Phillip Gastelum</a>"
                ],
                "photo_reference": "CmRaAAAACF747X0qJO7qE6T9K0JUf_BC06g5GGOAmylqxoam2NCK8GvEssmCBmFL82fuosPkaX_g0kHSXyj4HaJyuZfUWpQk7tIOMT46UIuICMpXIPqJ7z21CPfV-NafKgZtkPzwEhA7Vk5iHGktOR_TOaXD2TmFGhRqZx4i4b9af12N2_cqsxZhp1Zi5A",
                "width": 3024
            },
            {
                "height": 1920,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114171615946772249156/photos\">chris corona</a>"
                ],
                "photo_reference": "CmRaAAAASHeAnVqvcYajd6pSy8nibvoxHFdz6ZPspFi4YR5CWp7rlONhFDr6tSeyKzWB-OpEPN3U_Nh2SWH0WB09bn2AuTm58Vn6J8J3_WhRtvCGisbWP45yfVW_ZRw8zokQIUpXEhCxUeaRVFMwsH4B9Km74s_aGhS2JRIvYX_o_s-Tu5kzQ0ol3XCNDg",
                "width": 2560
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105547921127798024656/photos\">Melissa Mok</a>"
                ],
                "photo_reference": "CmRaAAAA2ZfAMoz0TjfMTQ8siZhWdeZjj9SCH9EnsEOk2d9pMJG15V5tnuEdTjvySOX-rYCm74IILyqrtdWzsKvTjvN46sE2T2tLEjeMMvfNtX2_OamEkwBwJu8cVlyyrRy1KBVrEhBiKuIbF5zrTrcZrnJWy1bUGhSg9DHDwowysWcUpvXnxu1OId71Ag",
                "width": 5312
            }
        ],
        "types": [
            "cafe",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "site": "http://cafedulce.co/",
        "place_id": "ChIJCfsD7kfGwoARTf0tjYY4J74"
    },
    "Button Mash": {
        "name": "Button Mash",
        "hours": {
            "open_now": true,
            "periods": [
                {
                    "close": {
                        "day": 1,
                        "time": "0000"
                    },
                    "open": {
                        "day": 0,
                        "time": "1600"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "0000"
                    },
                    "open": {
                        "day": 2,
                        "time": "1700"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "0000"
                    },
                    "open": {
                        "day": 3,
                        "time": "1700"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "0000"
                    },
                    "open": {
                        "day": 4,
                        "time": "1700"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "0200"
                    },
                    "open": {
                        "day": 5,
                        "time": "1700"
                    }
                },
                {
                    "close": {
                        "day": 0,
                        "time": "0200"
                    },
                    "open": {
                        "day": 6,
                        "time": "1600"
                    }
                }
            ],
            "weekday_text": [
                "Monday: Closed",
                "Tuesday: 5:00 PM – 12:00 AM",
                "Wednesday: 5:00 PM – 12:00 AM",
                "Thursday: 5:00 PM – 12:00 AM",
                "Friday: 5:00 PM – 2:00 AM",
                "Saturday: 4:00 PM – 2:00 AM",
                "Sunday: 4:00 PM – 12:00 AM"
            ]
        },
        "address": "1391 Sunset Blvd, Los Angeles, CA 90026, USA",
        "phone": "(213) 250-9903",
        "coords": {
            "lat": 34.0739963,
            "lng": -118.2515224
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "photos": [
            {
                "height": 3036,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108032645260513646547/photos\">luel tajanlangit</a>"
                ],
                "photo_reference": "CmRaAAAAE_SvuE1TEucbyVqwNaAXeJqUoDnZol7qawjeSIqhDrLU8y0fyj9qYCNKtFzOx-NA09HVKQV-DCpYSQnXZbME2qDVNcGPZRQFL-LYMjADHegZUsXhz-BMMjqHFXWwjNsuEhCuS3u11IgmHHYyXEamzwxFGhQ_1jMNEBr5sHzuyXEe4-ywAogWNw",
                "width": 4048
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100260868071605604576/photos\">Michael Gebis</a>"
                ],
                "photo_reference": "CmRaAAAA3s3CWbtPKvmlyUR7XOXaagOLTjiJwFOscA9HVDJVyNJl8H8H97FqSn-Dwdu3Gd8-c43fLTQU8Fvixbin3Q2UntCOACSY_8mxMaDNuSyA43YC_6PZk70isMKJWMYEqv93EhBDMbWvEgfNOdkzH637qXwUGhTTZyuFQbx2toDYcZSYECUU7RhNVg",
                "width": 3024
            },
            {
                "height": 3036,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103026126911076117047/photos\">Aaron Pulkka</a>"
                ],
                "photo_reference": "CmRaAAAAVlJPAmc4t4skW4OQT7SjVDkjWV0jubUAEkjIxLPVl7_HXER8v7T8fTk4--w46u9pYUUMy8O7OgiTVnaM5FPYq9KbOAsmxMtzy56cFE2kzl7vh_7n505rgAZ-Hi_GepgmEhDATmdPi7SA5Cc4PWy0WqwcGhQu_XpHVyY-7WJP_E6MGP34-A7T6g",
                "width": 4048
            },
            {
                "height": 3264,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106237810539275833111/photos\">Zachary Welch</a>"
                ],
                "photo_reference": "CmRaAAAAuH3dfraIkgCSgeV75CgD6WyH3EvP4SnkIrrttuUVb_cU8f_d0mMY-G9eJAjEdqnWqQ81hNWRCccdhptWfMOJ2II0o0D6XrxPk4Fwfl6NzCESnBjRsmUzJ58Y0r5Q3lrrEhBbhB1_Fw6sIgU-DXLCdALkGhScXmXLwb2ALOkeeAIewxJmRkpigw",
                "width": 2448
            },
            {
                "height": 1536,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/109762661387310408225/photos\">Sandra Waring</a>"
                ],
                "photo_reference": "CmRaAAAApjIlZPre1kulxUJN0eB9GXZo_xwj47KV1fNLebAEt20RVtfDTnEVbpHxyIp8cDDRwZJTYtgxtl6-jOassa9n65_YRYn-di7eQqhjS25m-EF5uGcLrJTC4bUmZN7496XoEhBPmyLFzrkHnTQU9X3DODdUGhRr1eDiZIueb9eeYQsmUY8vw_TUPA",
                "width": 2048
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100435880280656818067/photos\">Edna Banayat</a>"
                ],
                "photo_reference": "CmRaAAAAa-lMlA1Tv-EtQM-vA8Rqmg9H4WaEp4RaGc4juyS6LcBHsYO8d2LhrLiNYURXWYCz10Z5xfkFN74-BvKGAbk2QxfB0ZQ5VKIkecco4aKcTleCYtlCxC8sV4lZuPAQac84EhAQc_jDUw8i2xoHYR4B-gcjGhTSI6U3ffsZt_v9y2ZNSUw9KzvUjw",
                "width": 5312
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114498976989137334346/photos\">Keith Mayoral</a>"
                ],
                "photo_reference": "CmRaAAAAkrNJWP5z2lCj-Xd8LkNfcKGLn1az0dZSgmrdhNg3NzWxShlTEw3qt8cWM3bTcyeYLegap-nxj3hQFL_elKgnzAEb-EiGH-6mD_7efLknACRk3rZ1JOzq0w4jbmodBHCmEhCSdP26_0BZF9-42rIXp5Z2GhSPmhmwV6J0KT3Uqaic_p9E-4c2aw",
                "width": 4032
            },
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104109958407526329399/photos\">Wen-Hsin Jiang</a>"
                ],
                "photo_reference": "CmRaAAAAPQE1DzoJ23UK9LuLBR8LioIeYKE2jUnuPft1q4By7h6wZTYzJ2PHrrjs6YYXbv-FTgaG3qpbEMR_NS7uj_5sg6lO5XXLOYaJRxHZkKNylxKnUbbNlHS0n3pwsHmw3LpDEhAy6pxWgmfj5df9eSF6igjyGhSzNybcA6RvIdxjwXRN1sSJsQdYrQ",
                "width": 3024
            },
            {
                "height": 5312,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/112500754352602582032/photos\">Antoine Leduy</a>"
                ],
                "photo_reference": "CmRaAAAAGcbEoPch3adtYQSf-8683oGayVcU7QRspgbxnRu-R1734YM8co2lBGVXhtWeZXsZWUK4T-w1hXX9Lib8h3vSGA0bWoJwyeowtnaEvMSQKUwVoOCbYyyz-lrsi59n3U10EhAIpZKYOymboHO-K0bqS2kCGhRwLNoHQbaL1kDWT10kKRXaRANQrw",
                "width": 2988
            },
            {
                "height": 1836,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101818390101510020800/photos\">Jason Lee</a>"
                ],
                "photo_reference": "CmRaAAAA1qlGjUoAGrLZcRclHZvwNirQkUhk-Un2y5wDJq70n2xganPil4pp_DYfPhPBpLaK-CgCwvl53DIjiSumygFm0hOM_786Tb7G_PUDIzu-Q2SOkA5RRJS5ptb_09skaxOSEhA31y6ZwyDvK338RVMCuGLJGhRMCx13Bc1Iefwmfk1feoezE_k3Vw",
                "width": 3264
            }
        ],
        "types": [
            "bar",
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "site": "http://buttonmashla.com/",
        "place_id": "ChIJq_kHdP3GwoARNCJ8hw3EXDU"
    },
    "YUP DDUK LA": {
        "name": "YUP DDUK LA",
        "hours": {
            "open_now": false,
            "periods": [
                {
                    "close": {
                        "day": 0,
                        "time": "2200"
                    },
                    "open": {
                        "day": 0,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 1,
                        "time": "2200"
                    },
                    "open": {
                        "day": 1,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "2200"
                    },
                    "open": {
                        "day": 2,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "2200"
                    },
                    "open": {
                        "day": 3,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "2200"
                    },
                    "open": {
                        "day": 4,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "2200"
                    },
                    "open": {
                        "day": 5,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "2200"
                    },
                    "open": {
                        "day": 6,
                        "time": "1100"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 11:00 AM – 10:00 PM",
                "Tuesday: 11:00 AM – 10:00 PM",
                "Wednesday: 11:00 AM – 10:00 PM",
                "Thursday: 11:00 AM – 10:00 PM",
                "Friday: 11:00 AM – 10:00 PM",
                "Saturday: 11:00 AM – 10:00 PM",
                "Sunday: 11:00 AM – 10:00 PM"
            ]
        },
        "address": "3603 W 6th St, Los Angeles, CA 90020, USA",
        "phone": "(213) 263-2355",
        "coords": {
            "lat": 34.0640051,
            "lng": -118.3007013
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "photos": [
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100549999313683312924/photos\">Alan Gray</a>"
                ],
                "photo_reference": "CmRaAAAAatb_OHH1kTolOKTyY7dpyDHbmf6y8NCilQA0DFscHJ3UKhZMJyGpfb7gnVRjLWCH1EbiIm-UW64dhIG7H7COFGGa1IbErpGvjgrIxxRLmIzW_sZlDsJ5GUNc0ExrtRPgEhD_e4x8NH2IMB7eik6PN21FGhT39X6xrxADnI4Eht5KWc5Ryxp_EA",
                "width": 4032
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/110051400847870391148/photos\">Atanu Acharya</a>"
                ],
                "photo_reference": "CmRaAAAAhRZFmBDXV0rHR_EZT2_ANT75LVxHf3xiORGo_Va4D-RLtg9UVmRXvkXebzQSDodetXxcC6nOAkRsjRWT58BP4rBHujEAd4gejHFdP-x9QlxgzaFqMSLGXXG9sOTKVQdAEhBJ5ipaLhgrmpDp5uoi6Z71GhTlH_b4qIkZIn4OICIjdMBkoISPlA",
                "width": 5312
            },
            {
                "height": 960,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100338068057103976685/photos\">YUP DDUK LA</a>"
                ],
                "photo_reference": "CmRaAAAA9NQBPxiFwIsGcr6aUlhuRxVUCC-D39n8fiVLUGjhs7xZooa4FYMmiumIGD6AWEIuDnzhQ-7b1BAuMTH-XYTSguwgtfxPGY6dmGKDQ0ZofD7u87mYYyiKAvp0UR4B3-jvEhAdArIkYN4ac1-ZDPymy7UbGhTT-ywukUAarOe3uSncC9nbG15VkQ",
                "width": 960
            },
            {
                "height": 4048,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/110889110177319842873/photos\">Robin Liao</a>"
                ],
                "photo_reference": "CmRaAAAAC41bGe3oF4JuC_YaWyQK24w_hq8ThDSPERbm1XX3CVO6HXBP_7z1k21XG2eGg0ZAeJGxKr7k7r_MUpg1vMmn1Ovup6TqN2jjIcUM-bae2-q3I4QNtEcT6j9SZD-QuLiFEhDz6EOqJ2sgj-q_58ZFRQ30GhRyRpKboN51K5h3CyemVm2INLk3xg",
                "width": 3036
            },
            {
                "height": 719,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100338068057103976685/photos\">YUP DDUK LA</a>"
                ],
                "photo_reference": "CmRaAAAAs8qQa1Iiw-U07OX830KM1JaD9lbUdgMvg4MtmiFMGJ9qLHoeWsES61m3iHE_Z764MU8t5YmB6XOAmkrlcqd_oKvec7i7EkXzB_lfl7wXbHcNQ1YfI-AcMEeTy6sXBkFJEhDo9AbavR4T0IufH3QQ-cO1GhRsgFJhA6nm8seYJEWB-2Ejb3Xmrg",
                "width": 719
            },
            {
                "height": 3264,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116232246696601023708/photos\">annie hwang</a>"
                ],
                "photo_reference": "CmRaAAAA0D0T565liAPI2cAd6YTHevGSffi4RgdobzufyjmR2TBMNQ33A2urOv9nkO8xKnVnYuCfEulUSIHDwfswqpPChIcuQV5zBRLuG-dyYWmHGJHZmE7woQGPHLRV1PecFllREhCITur1Ox6lRS4BvUxXNHHkGhSM0cwU86C3KfN1mX6AkB8-YUFajw",
                "width": 2448
            },
            {
                "height": 2992,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101945934985068514271/photos\">dae ho lee</a>"
                ],
                "photo_reference": "CmRaAAAA9VZg0Nnvux57Geu4CrQMKxuAKdEW9iv1RajOg1iNrWqjBykMbybVn4vlm_0A_mZVLrGdbOs_9aTmAiIQrIwtrv9janOuLdpj6ZaOvPOO1YZNcdeINEU2D-RYhgL4ZnmhEhBggzXhUiZ57o_d9r9aBQfgGhSl89ZHvC337KJ6QX007bOvxczkMQ",
                "width": 4000
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/102907671539150828728/photos\">Raymond Wu</a>"
                ],
                "photo_reference": "CmRaAAAAy9MD8zMpQxLIakIZA0I8RehSdoPSa-0AbtGGVvVaGQ3oAOJsvdIvssGBxeUk5_NTyIHq88c9Ab1_OFAtv2fZVWzf46VTPkno1drI6SjBOuJOzbiFGUCYLDoeYiHCBlp7EhCJ0wHWSslGCChfIR9tqP18GhT6Lof2NI6fjaFEa8_Fp4lK_gkUYA",
                "width": 5312
            },
            {
                "height": 2322,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100035554883712780951/photos\">Stephan Sun Oh Hwang</a>"
                ],
                "photo_reference": "CmRaAAAAFTakqiKlzaPke--VvSLk3gk2NwotB26WZSTiLqVDFfh3ZNIV23mgtknQzbLb5xu_cMSUOjtd0Af5aiIwkQ-CjLDiHbwbQf_bfuq5u9RuWsPYSVD5bZrUkKaJQ6r2-ZYhEhCiu7P06cR0gexIUDdlhmF0GhRg06zTV0nizkGtotiaGwe7OPaf4A",
                "width": 4128
            },
            {
                "height": 500,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/102248698323591290381/photos\">Vegas Food</a>"
                ],
                "photo_reference": "CmRaAAAAw2ZT3n3D_XK45Ka6LgVexyo6E2w-KX8zug-MNuWlobF0jKos_Qrc9cxLrVv8q1BjxICCFA9xYwI4H-LUaaKGLwUToSLbTekm4-d_oGuX50PIQjfJYdsVw9rRD182sCfqEhDYN1WOo1l9GyDMLnpajfOqGhTty99v-fQEfdenbjujLU6RbLD2kQ",
                "width": 750
            }
        ],
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "site": "http://yupddukla.com/",
        "place_id": "ChIJSzImS524woARyPHri-JA_do"
    },
    "Class 302": {
        "name": "Class 302",
        "hours": {
            "open_now": false,
            "periods": [
                {
                    "close": {
                        "day": 0,
                        "time": "2330"
                    },
                    "open": {
                        "day": 0,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 1,
                        "time": "2330"
                    },
                    "open": {
                        "day": 1,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "2330"
                    },
                    "open": {
                        "day": 2,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "2330"
                    },
                    "open": {
                        "day": 3,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "2330"
                    },
                    "open": {
                        "day": 4,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "2330"
                    },
                    "open": {
                        "day": 5,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "2330"
                    },
                    "open": {
                        "day": 6,
                        "time": "1100"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 11:00 AM – 11:30 PM",
                "Tuesday: 11:00 AM – 11:30 PM",
                "Wednesday: 11:00 AM – 11:30 PM",
                "Thursday: 11:00 AM – 11:30 PM",
                "Friday: 11:00 AM – 11:30 PM",
                "Saturday: 11:00 AM – 11:30 PM",
                "Sunday: 11:00 AM – 11:30 PM"
            ]
        },
        "address": "1015 Nogales St #125, Rowland Heights, CA 91748, USA",
        "phone": "(626) 965-5809",
        "coords": {
            "lat": 33.99637930000001,
            "lng": -117.8900665
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "photos": [
            {
                "height": 3264,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113211832604856649637/photos\">6erson</a>"
                ],
                "photo_reference": "CmRaAAAAuDgR9U-pWg24ZxLFaYEE07MtlRXTV-nAIykETnxBBnw_dCmaExkDYrTotLTIs7X4ZvoTfcpRJ3Q0dc7Xe9RCdH4JlPJ2bA3TrpvifEPcNr-aqRCoGx57TiVhIyC0Knc7EhB1AbwFQJMNKEbIeY_lKHDkGhSa9OtEsS9pNcgOyswGAqL0Y-YhPQ",
                "width": 2448
            },
            {
                "height": 5312,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114774783870664352418/photos\">王晓琪</a>"
                ],
                "photo_reference": "CmRaAAAAUHkJalgx0rG2Lh7fSni2gboPr2L64rg0siy-gZ-9F3nYwbb6b1r9STBXEtahUFXQ7yXQC8QrSGkclU_ZflMtactnfAkjL5Yj7fdMYnEdCgWOzRhGCkY2MOs_GTfITSXjEhA_D991DMu0Ixdtd1j4gsqKGhShwvsD8nB5em3q-zG1a8BfsZsWhQ",
                "width": 2988
            },
            {
                "height": 3120,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107521435868779245151/photos\">Phish Chiang</a>"
                ],
                "photo_reference": "CmRaAAAAAPPwvvpxSMdCkryATNmsJQhcuuMeMgtVUeQNQNqx3-eyiYDNRdHx2ATF01lzfgu057TAEmDBecYSmh7woyz2EVE4IOWFFKqk-pm9vJK-BEDfvRCX-nZK3HPZanwjX83qEhCwCMr1d4qvSYRdgjTjXLg-GhSS2PmC13qDcOczSjqTPkmf-TCuzA",
                "width": 4160
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105924973797374506805/photos\">Jason Chen</a>"
                ],
                "photo_reference": "CmRaAAAAUXiaCDPLPiCxTta8XicjvGY3uyji29dqkJEACGx35q8YbVfc8vYomNzgrQucfrjyDsN9NzxEqIjqAXKm2fG1u9FbzvYS9UeZill0pWziMcaN99N_kD3ITbf7ZiGJ7v2tEhDHJWomYmX9L7_BKifPSKDEGhRCvmetAh6ZElTDAs30aq0ruNbErg",
                "width": 5312
            },
            {
                "height": 3036,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/115320011267355156453/photos\">Alex Lam</a>"
                ],
                "photo_reference": "CmRaAAAATm_8FwLlg8tGSbByr9uX3gtIcA_epetoPQcQuISVgqB3UwHh3iVHT4upx0l2vpp_kL9j_sdSBjFVqbUmD9EHcika87PyA1myAAgF4A0q_3TzqIb4ukKSoGdz5RKMpwWUEhALaC3nPuH-jN2XQopstfF-GhRqR-FyBYrjr2iiB75mK7DYsrE5xw",
                "width": 4048
            },
            {
                "height": 1130,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/109361078087413411619/photos\">Jillian Z</a>"
                ],
                "photo_reference": "CmRaAAAAfuu-jwTSQ5dmZGuH9ilBGYG_plj9_07psVS2y-Sxr7u3tspNWwn4Q07VhDfNppWzFEJj8Ro_egkbGreRhb0yT3aQgpwbbD1SC_zBTH89fPLe9cdlsgnbbAAQNHLX2m_VEhBwPh8Z-wG614PFQDUphaZOGhTzIGlORdFNkBFmaj44XdyXNkmGBg",
                "width": 1539
            },
            {
                "height": 2340,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116755302472760391979/photos\">Minda Posadas</a>"
                ],
                "photo_reference": "CmRaAAAAum0PPdJUwd5SlgmBNt354XvYFTpfvttaNHbVwZBMhuHHoHWn7VZKHQX1ge5RRaPura3jf4FNq-Sg_T5sc7DTcTSIIvs-xqHjwPJG2Z4BuEgo-BiuHj8dvuBnOSz6f0UlEhBRxs18Qw9yPfCDZmuFnYr-GhTHBdHIbfqwjW-4agCGkUugStnbzA",
                "width": 4160
            },
            {
                "height": 5312,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/112050732730451558050/photos\">Ling Moulton</a>"
                ],
                "photo_reference": "CmRaAAAAQYMdr60Gruoic6S4Agky-ofyclH0qop_L_8uCD16flx7kmEvgoyhRlQrXkPWPH97PoRmh-2YZBhDqAmUPmI6xmkqHJkQqufVEyQ-LG4MRmqUKbOZi3oGkhoP_HXI1DC4EhD-DJHuVRaIsJkcTYDsEE4QGhR100_5d2X1jkt3L3FyLsuuCzQ8jA",
                "width": 2988
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104561203609412349733/photos\">Landy</a>"
                ],
                "photo_reference": "CmRaAAAAkNiTQIjNt5pPLy_qxEv2sIxG4IVKDw4vYEylXzscnM8t-Taf0gV908iszqLQUPcYgitiKQ8jpxAmdQFuPvzT9F5rjcHufgLHnjRjdrc6vFJUGjJNJ-axOUUqwcvTE4WbEhB21nKNb3NqvKQ4ChEatI6DGhSxZh6wcPYU5eNobXmGj2ATYRuHRA",
                "width": 4032
            },
            {
                "height": 5312,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103498748441162350411/photos\">Kevin Chen</a>"
                ],
                "photo_reference": "CmRaAAAAnfotRkIBgApWEAIxzL5xuXwB0cUY6qxrzI-Ut_zEGQ6b8ZwKrr9ZsDzGdiEedYEckK50ve7sF2t9dFPurccEyCtyZPdrxBmqsSdOBZPwxVFySKClmc1HgG_TejqgDJ0CEhDtg8-GGdfwiHP0akFGayKYGhSqCsv_KRbkOaPHIetc5a4Ic5cLyw",
                "width": 2988
            }
        ],
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "place_id": "ChIJb5oTGloqw4AROPdsQWvN6ok"
    },
    "Uncle John's Cafe": {
        "name": "Uncle John's Cafe",
        "hours": {
            "open_now": false,
            "periods": [
                {
                    "close": {
                        "day": 1,
                        "time": "1500"
                    },
                    "open": {
                        "day": 1,
                        "time": "0630"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "1500"
                    },
                    "open": {
                        "day": 2,
                        "time": "0630"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "1500"
                    },
                    "open": {
                        "day": 3,
                        "time": "0630"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "1500"
                    },
                    "open": {
                        "day": 4,
                        "time": "0630"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "1500"
                    },
                    "open": {
                        "day": 5,
                        "time": "0630"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "1500"
                    },
                    "open": {
                        "day": 6,
                        "time": "0700"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 6:30 AM – 3:00 PM",
                "Tuesday: 6:30 AM – 3:00 PM",
                "Wednesday: 6:30 AM – 3:00 PM",
                "Thursday: 6:30 AM – 3:00 PM",
                "Friday: 6:30 AM – 3:00 PM",
                "Saturday: 7:00 AM – 3:00 PM",
                "Sunday: Closed"
            ]
        },
        "address": "834 S Grand Ave, Los Angeles, CA 90017, USA",
        "phone": "(213) 623-3555",
        "coords": {
            "lat": 34.0448979,
            "lng": -118.2586531
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "photos": [
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103830935556709469159/photos\">David Bonilla</a>"
                ],
                "photo_reference": "CmRaAAAA7V69f4RYgsc4SsMjfTdwEHj4uozL4i4S2nZS7vzWKCb3NdXhcYQDy4almPhv7txhcN2n_F6mLCfkWqBqDWeVS9S5d2m5oiDSpqMBwRTnNNP3t9JapFSqDP2zKFGt3EVsEhB-zeiGDAQtB4ytZB-5Ud8GGhTzUYQ-fnk_USxRtFFktH-xi0H-_A",
                "width": 5312
            },
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/109256684622629910272/photos\">Roslyn Lewis</a>"
                ],
                "photo_reference": "CmRaAAAADFj3x9Es36AZLvkQ9gDrjG4j-MlK8grz0-NVhoEHYmkNCefjuyJOdeROX1h0kBiVKkbgng-Xzh98_59wlXG8qRc4Q62H0KL0lFcNj7jGedrJPJMdSRzXwWgp8mnhP0bmEhAirDqbPYEI2e3jqqjaXYjxGhT1IswqVZaPVRiwVqKYUCdQ9WUypw",
                "width": 3024
            },
            {
                "height": 3264,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100775381107234933824/photos\">Cornelio Furlan</a>"
                ],
                "photo_reference": "CmRaAAAATcLfbkafl7ISKC2mQTlCYmWe8_0_AjTdFsNuf1xcqM1c2d9h6_jXEPc4TRaBtlRlu4tIiBwoLsKsfH0GiOzPgbVFaVsKM4zdY9VBXMcaZSPO53fLbA2XIBtOVKN5biKGEhAyUdTMuazuEkiKmP0JDHI7GhSVFbd2wWfK0__LNmvUjqHRe88e9w",
                "width": 2448
            },
            {
                "height": 3464,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113946886802931481418/photos\">Michael Chacon</a>"
                ],
                "photo_reference": "CmRaAAAA9280d540BXwEq6uGf8A1ETp8YPnt4-v2O7t3uh-Ed0xaXKTMmarRQXQu3EOow9Fz_RmXvZeNcUHFmiKonSnpoIfiPdNQmZs4RJ9q7AlyYLYz3XEyZ2Y68J4voW-DqZ3OEhDrzJg59a4S4nUdHjlqfi2XGhRVZIG_8xOUvX2ZQ4DM1c-VJHmZhg",
                "width": 4618
            },
            {
                "height": 3120,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105928426188405955991/photos\">Mic Palero</a>"
                ],
                "photo_reference": "CmRaAAAAWql-BcbtAMoYzO6xw33quIsUQodr7PweMYnrWwl8d3kHDJILGfnErHFi-GbfgTPIrnkjyY19yrlZSB5ENRzBkmRkAVmLwoUf8X0Esybmwu0p3qLJ9462N2JhIuAZ4cePEhD6-q2BRl-E89YLCsj3B7iIGhQSlXsv3o_PHrsM5OU4vjuJr60M0Q",
                "width": 4160
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107667915472625730039/photos\">Richard Wade</a>"
                ],
                "photo_reference": "CmRaAAAAgKmpu7nUAnMlu7Pa2yBrEIJ5RmIm9uzr2wz1tRm1csAN_zXjyS0FONImE_9p5fYjN0Xco6MACkMh-wjm2NW1C1BCRtzwpoa0lVEbkc1duisP58DvThlyuxNvIKpUrATnEhAwC3qpOXhuSa2bqD9PGNs_GhSorWfVP2zTG1ZGx0FZhgeXmXsiCA",
                "width": 4032
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107667915472625730039/photos\">Richard Wade</a>"
                ],
                "photo_reference": "CmRaAAAAy334J2-AbnBxJVrGtWkDROv1GpLECedBAg-sPddkv94kwwONkLNDHkWPI7bOz3pohJGA4bpGFuePDEXJPhEYcw4Eac2i43wUQVqPxQ-Ik32y3ZZK6Qg_0VE-KRvtncmMEhBBy11_8X9mQHlWGxw1BV_rGhSTleS8oinOmbJ4dTbSVSWZskGAEA",
                "width": 4032
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103318841845450341180/photos\">Kevin Killian</a>"
                ],
                "photo_reference": "CmRaAAAAuWqDGWhzP2rSsvtF2ci9rmtUlsq-Hl5caP4OmExUgi2dELk4UkHiGeX83ZVdgCUhdJD0I43mLZekhl1wrHDaztbyKnXyR2uunjauOsY9Ch3-zr8cc5AQdheG7S8cuoT7EhCZLXDG1AizGkQJ1gs7AbILGhSu-inF_b_pTwIKc3SYsWfTIwTISw",
                "width": 4032
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103830935556709469159/photos\">David Bonilla</a>"
                ],
                "photo_reference": "CmRaAAAA6oOG1jNXIhoXd6r7hO94a7wmwQ-v39xJ8UkYfl6VUsZyMQvFJCsLOzJ5qHzeqZetOeq0PwllOozpKLN10VZILTCym0S-yOe5o32CXSf41LsEbPCk-RJRv08Tujxz2oGBEhBbvmfCUe5ZAdBvIoHxih7yGhSpr62Vz1noFxArIsXfrtKIkv8reQ",
                "width": 5312
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105548409624322153238/photos\">King Choi</a>"
                ],
                "photo_reference": "CmRaAAAA_d2jBv6qvLvnd3q-tFSbWFk_wj-bXlOlvWKvxmXgoP9XL82YfVVvQi2aeFpN-9dPa7B2v0vdJNYsQy5l9xZTR8bvpWOCxGCequMiOKvAIuHpEGILM5me9ikMQStycgahEhCeM1PFXFcmabfXwpMFJrGhGhRS9tUid3qb91VdmhMYPd87vRLmQQ",
                "width": 4032
            }
        ],
        "types": [
            "restaurant",
            "cafe",
            "food",
            "store",
            "point_of_interest",
            "establishment"
        ],
        "site": "http://ujcafe.com/",
        "place_id": "ChIJZX3WdLbHwoARXgQYRyTmkic"
    },
    "Sugarfish By Sushi Nozawa": {
        "name": "Sugarfish By Sushi Nozawa",
        "hours": {
            "open_now": false,
            "periods": [
                {
                    "close": {
                        "day": 0,
                        "time": "2100"
                    },
                    "open": {
                        "day": 0,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 1,
                        "time": "2200"
                    },
                    "open": {
                        "day": 1,
                        "time": "1130"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "2200"
                    },
                    "open": {
                        "day": 2,
                        "time": "1130"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "2200"
                    },
                    "open": {
                        "day": 3,
                        "time": "1130"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "2200"
                    },
                    "open": {
                        "day": 4,
                        "time": "1130"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "2200"
                    },
                    "open": {
                        "day": 5,
                        "time": "1130"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "2200"
                    },
                    "open": {
                        "day": 6,
                        "time": "1130"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 11:30 AM – 10:00 PM",
                "Tuesday: 11:30 AM – 10:00 PM",
                "Wednesday: 11:30 AM – 10:00 PM",
                "Thursday: 11:30 AM – 10:00 PM",
                "Friday: 11:30 AM – 10:00 PM",
                "Saturday: 11:30 AM – 10:00 PM",
                "Sunday: 12:00 – 9:00 PM"
            ]
        },
        "address": "600 W 7th St #150, Los Angeles, CA 90017, USA",
        "phone": "(213) 627-3000",
        "coords": {
            "lat": 34.047409,
            "lng": -118.257171
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "photos": [
            {
                "height": 2848,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113719639442868633401/photos\">Ashley Hughes</a>"
                ],
                "photo_reference": "CmRaAAAAsgXdoySAFoqf-8yC5h8zXxAmGLUwJA0z6DND12h2V1mVyg7YazZDi4xfhUIt_0OhFJNWOpxlGK-RtuVqvylA_IxOQxXy6WxZUlHeRXZP1LC7fRj7mS9riWeenDkvgSnIEhCyDBFnIGjtstwVLbkfEyH2GhRDCcFbReiITpARzYWtAMgb_LcYZQ",
                "width": 4288
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108220621462697761769/photos\">Luis Evolved</a>"
                ],
                "photo_reference": "CmRaAAAAx0RGTRbtXHGOuviHeLdy88IfybXruaQrnIqMNsMJwbJXC5k6U0MtAOkWjUcmmxU7AljthFGWQxdaQ_AApp-ExJvlZK-J7gULZRaiKrs8zitRsSHO33dG_QdowRdS5fQpEhDYUYNvzT_xzeTQEMRL6pusGhTF4LR1K_dKmRhdTFEvc-tkBAoGRw",
                "width": 4032
            },
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114979940814794329252/photos\">marissa D</a>"
                ],
                "photo_reference": "CmRaAAAAc3_i0stE5d5FPciCzzmmxZn4W_2oaiWkaW0B1eMWu_-fgA6K06QpGRuSe9uOjpJ5ZNMxFnEybptx_L40vblZFloCbypk7Eih2_MWgTVBWbggoQPxMis36iSVyg4QFfcgEhCtGPzCgLbvhwc6LsOLPa3AGhSdzPx7xnzCvuztN1Lr859_t8escQ",
                "width": 3024
            },
            {
                "height": 2448,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/117933718800995484882/photos\">jeR D&#39;wayan</a>"
                ],
                "photo_reference": "CmRaAAAA-PgmQgm6orDmwWno9uTZTmZdo1xQqFb1B6c8VwQpfVgiFrVd1Ag2WeOLCMhaW3kywRksXACcW2ULJOThcFH72zkgqFbFCW4eUEPi4kZvyuVizOQ1t06XwYUAN9J309LEEhAJ1rZ1jlioYhMcTn1Yu4SqGhQCrymctsNiHneqCCH4PsXCgaYilQ",
                "width": 3264
            },
            {
                "height": 2560,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113719639442868633401/photos\">Ashley Hughes</a>"
                ],
                "photo_reference": "CmRaAAAAob28FXUBsXywKgKBHEsW0Gzwd1iQ_b_YCBqpaP5u5_21-8sZNc9FOg2YO-5GZOYtScN6e2KFNS5vnbj_1Y-XQd0Ja33pBX1FGcVk0UE0ga3R4NIo4cnODGcxMgeT10CyEhCyBLp_OS5koG8UEoe1Z3VxGhSLP0Ld3EjignrOrRNEpQ75pMuiAg",
                "width": 3840
            },
            {
                "height": 3088,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107868369789283389887/photos\">Jose Valencia</a>"
                ],
                "photo_reference": "CmRaAAAA3bpTVsZomLMWr0RyMw-TzI0UaYEcfK5ti-rMzG_wD9GyHljQ2AmgWAcHHElJys4q1IL5dLxKU23RmXEGCYYWAY1Syv72ef9mQE0Z-acQIF4eEjx8eH3tPVXgc2h1J2kaEhCA2Rq1Crs0nnHERa8yeeNzGhQ9bI7bjYYN22lASJXN5vTapUhZLQ",
                "width": 4160
            },
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103501730018244589434/photos\">Vuong Family Values</a>"
                ],
                "photo_reference": "CmRaAAAAXBwCKPW90qwGihdUPPJU_pdwFVZVnr43jGrLjSrqVxQN4ADq7jH7h2KB0G3YV12zzHBGE6yGGSInLUjNiDTW7JAElV4Vg6J2gjgPDQ805bFb1HcER_nFddgIK7el5KIIEhAOOT-G5wqUe3wxtp0A6aveGhSajnwN3Nrkk1V-lZZplNVnsLdBsg",
                "width": 3024
            },
            {
                "height": 1394,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/102940239300324391877/photos\">Sugarfish By Sushi Nozawa</a>"
                ],
                "photo_reference": "CmRaAAAA5fDC5jZpFPVPaVH79I33KPDd2iokoQ7MDct_YLXi1u7Mb_Bt88fAUKQ2sF_gj5WtVT3mBGX8W482lS0OR8TbHThB40RFuDhWNOdsEAO6B3O33nVZbUckOTQKn5PKkZr2EhBT6DSF7hKde8nG_b4wVtI3GhTNe9H1HqnU0SFGQmFdJ9MRZBvxTA",
                "width": 2048
            },
            {
                "height": 2880,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/115352491038714715088/photos\">Harlan Chang</a>"
                ],
                "photo_reference": "CmRaAAAA9p7Uthw3Z_PqfaQS5nFaJPJTF0u7w6o3byX9w6l3nHn8xkH8jMbYiZQhTBKINHKm8EJPSUJSVfldiNA7jIbKkcJKP3OIWDJAjDfehrG1SoPPkEvsa9Apb1HlHTYhKdfeEhBSEUwMZQPOEoRToH66D-0VGhSKBr9s5YpuJOhmjHcY_LNiAMVYeA",
                "width": 2160
            },
            {
                "height": 3264,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100890089579568517214/photos\">247Eater</a>"
                ],
                "photo_reference": "CmRaAAAAGEsEcXxmjm-ltbBP7pAQ4I5qAKcU19-M2iLj5hQEydMPF9U5KpsyVE_yRvbGIND5MVWZyBR0vQJMPQNKGgiLQnxA1hjgY9HHHH9QXKI7DFIaZm9qP3XSGZWE50QeB4eNEhBuHTZEtU4EDpaxgqdy4vRgGhQKOo0X6szeHFzOCYKR5dACBY3gNg",
                "width": 1836
            }
        ],
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "site": "http://sugarfishsushi.com/",
        "place_id": "ChIJqWzcR7THwoARg7eO0wui4tM"
    },
    "Cafe Maji": {
        "name": "Cafe Maji",
        "hours": {
            "open_now": false,
            "periods": [
                {
                    "close": {
                        "day": 0,
                        "time": "1700"
                    },
                    "open": {
                        "day": 0,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 1,
                        "time": "2200"
                    },
                    "open": {
                        "day": 1,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "2200"
                    },
                    "open": {
                        "day": 2,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "2200"
                    },
                    "open": {
                        "day": 3,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "2200"
                    },
                    "open": {
                        "day": 4,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "2200"
                    },
                    "open": {
                        "day": 5,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "2200"
                    },
                    "open": {
                        "day": 6,
                        "time": "1100"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 11:00 AM – 10:00 PM",
                "Tuesday: 11:00 AM – 10:00 PM",
                "Wednesday: 11:00 AM – 10:00 PM",
                "Thursday: 11:00 AM – 10:00 PM",
                "Friday: 11:00 AM – 10:00 PM",
                "Saturday: 11:00 AM – 10:00 PM",
                "Sunday: 12:00 – 5:00 PM"
            ]
        },
        "address": "E, 12232 Artesia Blvd, Artesia, CA 90701, USA",
        "phone": "(562) 281-9511",
        "coords": {
            "lat": 33.872686,
            "lng": -118.071322
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
        "photos": [
            {
                "height": 741,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111238191554033782636/photos\">Cafe Maji</a>"
                ],
                "photo_reference": "CmRZAAAAPUqOJDP-GWaXsBmlpBodeqnSVAGEWjIhBE9GAoq9Wmt3OqlPFtZ0jBLXuKZDl8ESnfEgshATs9uDQPIPd5dYmXOoX7KJl3OmZUIhWqfXZkvDEEUBYDXRdQXXTVX8dxTLEhBtFgprdt3-NIUd4--7tmFSGhQxJLbu0SP5W_lI0uQgMXzP5GCfPA",
                "width": 740
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106771782885311251070/photos\">Alexis Rubalcava</a>"
                ],
                "photo_reference": "CmRaAAAAXgW2vY6gvtvnX_tTToVkl7MbusoQPf5BMueJUq1rXAxmBsoyeUbBhdteRGAOCKR74gyYYxs3PCTyen0rG5qzUqBDmRsYI2DRBKe3I38ZqU3lU4DgyJGHkjS0pniknxyXEhBGR80-3ia9ykxK1exxx4swGhTA8-K_C8TSGrCYEmlE5c6vC-77-g",
                "width": 5312
            },
            {
                "height": 1536,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107131553454626318937/photos\">Edward De Jesus</a>"
                ],
                "photo_reference": "CmRaAAAAdBBNtMkQUxj-CK41M6mpXmmdpccyouArCgENfJCsE-1bxdozJhfczmnTKpvTCnmP6t2w_2uNZbGwQIDWY0pHsJNv06BOm1CkQan9Kch_mQyhVmmGvRGdmUeXBnqmgH5gEhDC2yBaLhQ6WFpAm2CcdIwWGhTKcXDjxtEWxGzlJplp5He7e6bTOQ",
                "width": 1536
            },
            {
                "height": 3096,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/118305814851831494126/photos\">墨瑟</a>"
                ],
                "photo_reference": "CmRaAAAAXR_sjvQpjBUq5WtS6siKh-yYTXWMn-vUFS6MoJWeSKYqUXzjVkpANCpK01bRkOh5jvcYLm4hRrBOb8V_oM8cZNcE_gjY0kRfaRW1gLcvCgWJJrY_1tUuWVscNuGWhiN3EhDRnLbELPtesYqMX-boe5-IGhREPrsbmFO_g2UTs4Y39WNczd0jWA",
                "width": 3096
            },
            {
                "height": 3120,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111709768042168226606/photos\">Mai Anh Tran</a>"
                ],
                "photo_reference": "CmRaAAAAKmnzAUv9Ur8LtDd37Fckq5UpDQpMTmtQeS7zY7iGXqNoDygvAQtmRTsTReSXgPNrdTWCdodttzDbRsfNRUFd-MVjNpxTcKfS9Y5492N_ufDh8RN4vhQSCgfugS8-D5XKEhCIKmG172W1AHEiLHdnWCXMGhREqZ9dhzqfgCdw20rdnbCN_TMnnA",
                "width": 4160
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/102751960711415279790/photos\">Aali Gabi</a>"
                ],
                "photo_reference": "CmRaAAAADFd9mDGJV2EINeTCaQJBk3M4CId-zXF3bD39HBvPOjLuif2W5BncahcIuwDT5zYx0c-oSTA4DQb6OcRvR2dlol8Zfntq-TuuMHy0MKeHHbZYSykbzH5VK2-cGI6BRYgCEhCN2nNONKF2EkDTwKI18wouGhQ3iXJSxd6Vo1TqKnct3yJYCj55AA",
                "width": 4032
            },
            {
                "height": 5312,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/102159526491636693373/photos\">Noelle Blas</a>"
                ],
                "photo_reference": "CmRaAAAAP16HobLpDOho5Mn84Ir80Euy48kqE-K4HdOJHPEmLhrje-vrYYmlBeQKJ2Ze6m2MmmHJKpnudpsils71BRud1D7jSSdQXtG45d-K076DbmC3iiEC6wVKhaNXp50_7AALEhDSMOOJQBqm-QedkBxE_reqGhR-t4KRQrN__E7hsCQMkQWk6jktuA",
                "width": 2988
            },
            {
                "height": 1093,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111238191554033782636/photos\">Cafe Maji</a>"
                ],
                "photo_reference": "CmRZAAAAtRnVZbSNz5_ky8vHVV5qgPZVUnUtm5oQL0bdBKJe1bCC05MhhbwYzYZHon0hIRHPVKQBXY3wa2wVKVqyZjZ-TfEqUznkbVub9-9KGmnOOdy1IOQXAXNZ6wfbOrRYTzyaEhDAmWKtNyovXMruBgJL32dNGhQHA7mor5HLcJDP8Wc0E1o1Wa_ylQ",
                "width": 1120
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103070585821434210242/photos\">teresita ramirez</a>"
                ],
                "photo_reference": "CmRaAAAAA8jVow0nHQUKS_XtGI7xa_f8mtoBKz8wSIgCpLlEnsL_7s6hnGRkfkCBVcEO7chsOxaWHmRMULBMNYso4VybOzLO1-paBXx1lDX6g1w-6eSLb9Op48Hm5HEDO5QAwvFLEhC6Q2yfjhmm9v1WBxFYLzGfGhS5oXEyH0ipieq8G_dJfYNeXDGRMA",
                "width": 4032
            },
            {
                "height": 1836,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116803164030337561653/photos\">Tom Vu</a>"
                ],
                "photo_reference": "CmRaAAAAZnRBjpZ8c1fOI9x_-lPtDgmrsG7k5Dl1MknnCwdRoL0bp2bgKd82hDYilVtY5OcwLwkVudqhOs_x4cpP0YbfeiMiPouVj415TCP__8phNoQZLZtjfvtrFt-muzU3efuzEhDEcNpBTP0uD-dpuDnzGe4DGhTXjO_N-oK1FBpfaIrBtzV_x6pXLQ",
                "width": 3264
            }
        ],
        "types": [
            "cafe",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "place_id": "ChIJMUfaggQt3YARKJNfU7_WM4k"
    },
    "The Hat": {
        "name": "The Hat",
        "hours": {
            "open_now": true,
            "periods": [
                {
                    "close": {
                        "day": 1,
                        "time": "0100"
                    },
                    "open": {
                        "day": 0,
                        "time": "1000"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "0100"
                    },
                    "open": {
                        "day": 1,
                        "time": "1000"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "0100"
                    },
                    "open": {
                        "day": 2,
                        "time": "1000"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "0100"
                    },
                    "open": {
                        "day": 3,
                        "time": "1000"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "0100"
                    },
                    "open": {
                        "day": 4,
                        "time": "1000"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "0100"
                    },
                    "open": {
                        "day": 5,
                        "time": "1000"
                    }
                },
                {
                    "close": {
                        "day": 0,
                        "time": "0100"
                    },
                    "open": {
                        "day": 6,
                        "time": "1000"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 10:00 AM – 1:00 AM",
                "Tuesday: 10:00 AM – 1:00 AM",
                "Wednesday: 10:00 AM – 1:00 AM",
                "Thursday: 10:00 AM – 1:00 AM",
                "Friday: 10:00 AM – 1:00 AM",
                "Saturday: 10:00 AM – 1:00 AM",
                "Sunday: 10:00 AM – 1:00 AM"
            ]
        },
        "address": "857 N Central Ave, Upland, CA 91786, USA",
        "phone": "(909) 949-4607",
        "coords": {
            "lat": 34.1041561,
            "lng": -117.6899832
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "photos": [
            {
                "height": 3264,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104344497919435255532/photos\">Crystal Mata</a>"
                ],
                "photo_reference": "CmRaAAAAJDub3kPvW8ifYWbqZ0-bW7xhz_DPWmizcV-QLiykKoynOPOhclLlS-gUbhO2S8pBK0ILGUajBUeCfTwvEvfcnRlBNW1RNvNjiV0FPYln_QEhnd8gJvZRKfsTs7Z3Hn6BEhBjWoFsLW5wqJ98L1rwM_6MGhRMFy8tbjW6j-zIyZ_znEmMnrILyg",
                "width": 2448
            },
            {
                "height": 1152,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/102446016534509160128/photos\">Isabel Austin</a>"
                ],
                "photo_reference": "CmRaAAAABjfjwB0dMb9VZkaqGIEB_AmP4cEJCu1PXnTGSQwO28qA7uOOXcJRXJnaeVs3aJfbpaDYEcK9buWOWlzH0M_GOOMuQDrK0yXB2H6ZKRf3gKC1ni60aJoy3PH9X2P7JeIHEhDoG3UU1-f3kqfR5cRkDpMhGhTBalNeV7t5P4QX-i0QN6qVYktz9Q",
                "width": 2048
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108431644798687917537/photos\">Patricia Carpenter</a>"
                ],
                "photo_reference": "CmRaAAAAA3M0eSPu2TFPqhf3c8wZNiGcDSqcbboqnZpxjvOH4L3SN0SQL9V37x19sVEaq6L9qKwZB0UBpdVGQaLNQwu16wuMeRIbUKK6OvT0A8oi3RbWvbneZioffC33q5xi0L0lEhCFpFxmmSCA7noj44M2yLkfGhQmgeKrzS3NFWlDNbxgPOu4rR6IZg",
                "width": 5312
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114223687078003000419/photos\">Mafalda Gueta</a>"
                ],
                "photo_reference": "CmRaAAAAhrs6qg4jU5rYtgw74l38-X5wmi1EKFqaecfxYb6CKAzL5J5awPCfcxijXfzjkhVPF43Y0M82tr5wCHVDgiwo2ZInhgffsHEHH00UjLgL-ruEPjiGLVqenhJraMLdNhcEEhCu40AhqOEokIrRyfc02Dc6GhTJSe1sVd3bEYIOjmFScOvFybBW8A",
                "width": 4032
            },
            {
                "height": 1403,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/102038492033783017359/photos\">Rock80schick</a>"
                ],
                "photo_reference": "CmRaAAAAHJ1GXA_qVp00rjI8Q9rmEncAAVg623Az4_3uzxrI4VrULNQIjbV_bah_HOUaGa740eZVo_a9QiJ8xcroAHRHrrZpG6l_fgztu78kstjW5xAA6PkFIdcvrPOsh95f7aJuEhB4xafgcZEntOcTT9bGGqaxGhSlPPtvfdbCGny1ua1rniiM7Gs-5Q",
                "width": 1439
            },
            {
                "height": 1371,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/102038492033783017359/photos\">Rock80schick</a>"
                ],
                "photo_reference": "CmRaAAAASs_oRdqG5eakZ_8SwpsruQMaec-Qwgy2kC5tdWevP6bM3pcboW5vxEK1DP0Q5Qlt6ZOhrCj9FkArzKabbqX_QSJ9k2o_k1TBjipTIfvd4LcpfP57FLJWD39JjmezAnJnEhAXsmSmSP6ZOsWzbSJevtd9GhTz4qYvD1A6fnrjaYJfeeeMCvQDWQ",
                "width": 1439
            },
            {
                "height": 1880,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105487371551711471638/photos\">Don Frasco</a>"
                ],
                "photo_reference": "CmRaAAAADGKeozaqJ0hR5_Bp0-TZI28Nh9PsfH1mnl0g_oIkAM-8esgOedIjk9fXdgWem-ZRz0BwpihqOaUxmoQp4WZ3NnI63eHUUj8sgkV4xGp7fnA8jlnb7gTTuIJSevF4W-SOEhCHm9Xmc2o_gNWfDU55TJJ2GhTu0FOoSHvCBtKIvKHTc1AY7d16DQ",
                "width": 3317
            },
            {
                "height": 2048,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/109230008367784534591/photos\">Marcus Walls</a>"
                ],
                "photo_reference": "CmRaAAAAw0Zq7VMUgIkJQzpJ-Vh0obgDOHMpJs9iJxCX-vMGTiURRrX7dDLE81xf21GhnuebxYtWXq-suumCOp4kx2A1_rO4CYt8JHC6WijMHgaAyMslo4JMecvDBM5VoQ5XnUiLEhDvZXlFnt4-ZD4oxnuoymLSGhQxJQe10qUE32_buI2V2qXH8BMfiA",
                "width": 1152
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105487371551711471638/photos\">Don Frasco</a>"
                ],
                "photo_reference": "CmRaAAAASlGAZBOP5IPLoZ12T2i45fcpi8etdaKf7X81SYcO7Gx6Nnqcxon55uC_aD4kBSn7IpL6ZDu7KXHhRTMvP3Uup9clRJosMnt9GKc66l7D7etFb71Kma4dZoCqmzQ7o0cuEhDrkaQr_EovkdWErq_Ou31xGhRB6JW0DoDLow-z0xsxPEpIls3iDw",
                "width": 5312
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114895346891159599945/photos\">Francisco De Santiago</a>"
                ],
                "photo_reference": "CmRaAAAAHa8_yTo66cfe19OGEliZq7SeIPdLGQDdHanEMpy63rtyhlgdu7IkYchDbAtjyup9Jbte6IwTeG9VQgqcdXyu1IZUFMCSorPVjpr35XkXkdAsMdRXzr2cxfpJbLmnQmiaEhCa7AD6BlFaPIrW7SPoKubuGhTwrPaA-Gj0OyAVtFNzuL5fwpuAQg",
                "width": 4032
            }
        ],
        "types": [
            "restaurant",
            "meal_takeaway",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "site": "http://www.thehat.com/",
        "place_id": "ChIJsfd5gQoxw4AR7n7JCUCYyVc"
    },
    "Sydney": {
        "name": "Sydney",
        "address": "Sydney NSW, Australia",
        "coords": {
            "lat": -33.8688197,
            "lng": 151.2092955
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/geocode-71.png",
        "photos": [
            {
                "height": 1706,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105626480791646825054/photos\">Toshio Matsui</a>"
                ],
                "photo_reference": "CmRaAAAA88lFOWZByMTS9mfL7DTH26gsBz1fHk8lx4dyGfYbcy3ZGSkBsOx5njUGdELVni6yUZDVmErG0wvr3cuNGeTQin4k8bkowvkkfy4Rpul5t2rdA2-NV22v_brWq3GnXfgFEhBH-mG5PquicX7g6POLm8S0GhRh4PiUHOYWrqS0B3k1Rav6mn6dXw",
                "width": 2560
            },
            {
                "height": 3456,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/109945875280256866987/photos\">Chris Rui</a>"
                ],
                "photo_reference": "CmRaAAAA-InZSZKExyEloroHiQ5ftyGNLnqLYjHOIk4UyWoPT1R1DZYVym_v2oACYtS9jgxVwQ1LpmviaqhkiyyosI0Z07CojV6jzSDcRKQDZMFfrIsx_r1DFONCZ7K5mBKIolFbEhC4sHYObdSgzxs6uVgKHUoMGhRgveowVVJs28nXvnWuRYmbNern1g",
                "width": 5184
            },
            {
                "height": 2160,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114398811922472418341/photos\">Carlos Romero</a>"
                ],
                "photo_reference": "CmRaAAAAqt4aM1kCO32tXcUWPTYtZFx2QRN4ZPBACMrzwF_3Hlq6WI8iC9aGs6t0zWGYbnuOKGTIJjKT2FLNDSo9eUdr86miMantwdf1S3Y_N3io7q-A6--qVUEuWqM_fem9LXtKEhBFFAM7Wzl77AelI3yEP3AIGhTmxgR2i-Pa7hbkjwCIP4ALqnTEWQ",
                "width": 3840
            },
            {
                "height": 2250,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105462039266179835152/photos\">SkyPhoenix</a>"
                ],
                "photo_reference": "CmRaAAAAjHpvwxhDNHk3lJIE9Nasyu_lcYaeGaSAcK47hZ2PsDu0V8GVvJrG8316KbK0KG5Q2ngXmOUTpU0MLX3s_OBwWCuu4VC29ADxutp7fO9HcNKcQ-YiRqmRZV9W6bS9ay-4EhCMYO6WoyHXGWuxUbAei_qbGhT38oaVcuNwponzLxVqX7CUEBQLMg",
                "width": 4000
            },
            {
                "height": 1152,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108251105783076122083/photos\">Quach Van Duc</a>"
                ],
                "photo_reference": "CmRaAAAAvrQbCOErSdHprhc9vC0CnJB6kbqnGg3m0WQ2QWeGK_onFyII9QcI5gPlQboMAQc-w8KgG2XmoNUcjV1_ov3bs6kRDgaQet3wU7VgenNArX42h1DyMPWdsTXwYanJ6Bd4EhAxatLZM1m2acgtxJKNcFk8GhRHZf3ocnlEk8f8aNvHnZK945N5_A",
                "width": 2048
            },
            {
                "height": 1836,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103404902868768457465/photos\">Bernd Gottfried</a>"
                ],
                "photo_reference": "CmRaAAAAU4C23UPG3WZAGKYelm_g_SmFbDQmNNzOTrZLC2p3RXaaW9PeCxdaSfDfIVUMoaCC_Y_PLS6drM_p6N8odu1BTJvIVx1yKyxLK8DH8qvAqgrOFheVRdVCrGkwRoYIyrOIEhA0IIGWGg1ZSTSj-VYDZoV5GhRW9Zs_i0SmgXAB9Oh9KDFWcgyCFA",
                "width": 3264
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100721029946969914556/photos\">Sita Eberle</a>"
                ],
                "photo_reference": "CmRaAAAAwNyCJOjaKz4QtmMIFdrbsqtswX40o_fgxlesB3ZSZ_KqpEIGjTswfPo0ryRm7oRGxAOoyS0kIjgghk8Onzu4eH3AHZA_s2rpPq-eGfsPBdHr5qWERBmuI9tPtU-JonRXEhAEpJRlXIYuL57XpmtunZATGhSKoyf_YWQnI8i7jx-LvvcGaVgW2A",
                "width": 5312
            },
            {
                "height": 2520,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/112457306249644635945/photos\">NatnZin NatnZin</a>"
                ],
                "photo_reference": "CmRaAAAAwVHT0066hOwyT5GHGPDgR4MjmXPuIrOJn2EZvG-QjgctADqi_wB2q4HVnLAfnCC5ngpjWZICMc0Mw0VUImo0olpgJq0A5qUMVesnmFGtYEmR7h5tST7HRkrLtUHcmrwNEhCFJn3XQ3vRbzAgVe3CbrKyGhRrUHlaUxzs0I8B8m4hpKIQm9c2nA",
                "width": 4000
            },
            {
                "height": 2000,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/110695692027679160966/photos\">Deepesh Shrestha</a>"
                ],
                "photo_reference": "CmRaAAAA1gPp_3dFvGMaw3uGl4DepcO8pCGkSJcDiXvZBWnhrdC5q1TRx-fAEIsT4vyvjLFoaBS7193tROAqZ9OzyJHmCg3BOoctY6PMVz5h1hEpF-W6YRowUy74nSI1VGxbEFPGEhB4dYM46Pwmxd2maI56FRyzGhRifoKwAOjjD1EhMafFHIVCOcV1Og",
                "width": 3000
            },
            {
                "height": 2322,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103404902868768457465/photos\">Bernd Gottfried</a>"
                ],
                "photo_reference": "CmRaAAAATUzx9JgxO06_mE5t6QoJNMzVLTANB-LR9dletuAKzdBy2d26vR1cWsEYLqnsAeAlZjZ1oyTbE10q4ZprAbCm6r21uIYcY4dwkjoxyUt9xE71xwjksw1U9I6kRoeqI_FtEhAuIkGK9yCv05S98MzBeRSkGhQSM0seSq2qF3QwSQGPp9n2BYVcjA",
                "width": 4128
            }
        ],
        "types": [
            "colloquial_area",
            "locality",
            "political"
        ],
        "place_id": "ChIJP3Sa8ziYEmsRUKgyFmh9AQM"
    },
    "Bia Coffee": {
        "name": "Bia Coffee",
        "hours": {
            "open_now": false,
            "periods": [
                {
                    "close": {
                        "day": 0,
                        "time": "1900"
                    },
                    "open": {
                        "day": 0,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "2000"
                    },
                    "open": {
                        "day": 2,
                        "time": "1000"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "2000"
                    },
                    "open": {
                        "day": 3,
                        "time": "1000"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "2000"
                    },
                    "open": {
                        "day": 4,
                        "time": "1000"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "2000"
                    },
                    "open": {
                        "day": 5,
                        "time": "1000"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "2000"
                    },
                    "open": {
                        "day": 6,
                        "time": "1100"
                    }
                }
            ],
            "weekday_text": [
                "Monday: Closed",
                "Tuesday: 10:00 AM – 8:00 PM",
                "Wednesday: 10:00 AM – 8:00 PM",
                "Thursday: 10:00 AM – 8:00 PM",
                "Friday: 10:00 AM – 8:00 PM",
                "Saturday: 11:00 AM – 8:00 PM",
                "Sunday: 11:00 AM – 7:00 PM"
            ]
        },
        "address": "3907 W 6th St, Los Angeles, CA 90020, USA",
        "phone": "(213) 568-3007",
        "coords": {
            "lat": 34.0637024,
            "lng": -118.3082836
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
        "photos": [
            {
                "height": 2048,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107183614327710058379/photos\">Bryce Shawcross</a>"
                ],
                "photo_reference": "CmRaAAAAIGWHneeJCt8GJaT3S55gYIzcrCqqYlogCaPdLM64o2iYSeUqBnFGwLI-BPiw8MytXqY14senvbnfp6ZjTcYgasm8Mbndnq43JwCr_c294oESrwbJPe3lGJSCRguao9YyEhC0wsC4BgCEBOdVPD416F_IGhReOLjqLFIGSJWs5f_7uQ18-tpIug",
                "width": 1536
            },
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105184268266720806108/photos\">Beth C</a>"
                ],
                "photo_reference": "CmRaAAAA3keZLJLBLBtWIkCcq9R4YMlSTwIKwquPCUjhTl-GVSQ2UI2-TDfrQqXaRVbgPF_9BSWdEGaZVkZUseLsJW4rxOO1q1ZCNG2CIxeh19oFL9L-AYiUlPgjxRVBFc87UgAOEhAbUqCrAdnYdEPDfWh-32hTGhR69juqw46Y2ciRqAjxDWC9G-dhTQ",
                "width": 3024
            },
            {
                "height": 750,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/102248698323591290381/photos\">Vegas Food</a>"
                ],
                "photo_reference": "CmRaAAAAEuaei9e8HVThouHF5_zU94p2k-w-zAdKgLhhnO6vH0Fadg5NPE68Wbz3MWk-KvhsFuBa813jbtLnDWu_UlzC3_wQOFB0BdEgbZQMRO5HxjVQ3fZNBdMrx-OQv6DUSe3YEhCND0e-wKwfyX8BHQScfk8oGhRvztyX4r9Q2mrtc4evYneA7BJm5Q",
                "width": 500
            },
            {
                "height": 3214,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/118184185446419138172/photos\">Derrick Castaneda</a>"
                ],
                "photo_reference": "CmRaAAAAsnWHwSBhk0OXaFHf81SzXWeEbi6hUiYxpOc5TP_5slwuradgH_Ny3Bwyq2qvZ7M9eC9YZUs1hJXsKrqM2R2YinOrsT2b1cG-pGw2qimgA8j9VHOcFQSDYhaPhDdmbieKEhDabsBbl5BuZZZvvKtQk_xEGhQmcRorxnbvd4YCA8GhgE8M532Lkw",
                "width": 3120
            },
            {
                "height": 2340,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104627480182851843044/photos\">Anton Kentjana</a>"
                ],
                "photo_reference": "CmRaAAAAaS8_C6yps0NhFsXyWophyUR10QZ9oSPCnJ3GxsWIU4M9YOYizZwXQKgo9jlAKvrqNN3iCaZhkzgrF_j3-QT3WMji3VhAiB_uIIXP96c0a62vsb9S7eQo7-ai3gn-yWtlEhC2LVcVTd8PG6fgLW5anL86GhRgWVqZJuvtxr6yHDap47inq7k_Aw",
                "width": 4160
            },
            {
                "height": 2879,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/118184185446419138172/photos\">Derrick Castaneda</a>"
                ],
                "photo_reference": "CmRaAAAAB-ZTqBuz6FIIox-irCb4QZW5ZiW53pmRzy3KzF8g-oa3qTr2kOn2FKCF7WTcbAZyJpNBMLp9AbuG7DaYLMcl2TNKHkDBP7rxmGccW55_8IUwVUcq5U3HVwbKCmKWoQHHEhARGnfgn5uFkwy_0s2Bs0WiGhQ-VwFjrFzbBIxJ9U47pmzeRYPJSg",
                "width": 3110
            },
            {
                "height": 4160,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/110911417096698604788/photos\">Beatriz Carranza</a>"
                ],
                "photo_reference": "CmRaAAAA1seNvHi6p23SMYhw6lZHI6YrOWrH6ZPb8JAKjPKu7QQSG2XccNlppeDAvhnQMblL9m7mDJeQggoSL6h2-T4PbGkzHapXWMJ-CELE1-JZGXArOWCM4wsxFx6v0h1ASkNdEhBcxCShRHKAwUBkp7wtqZRiGhRAN8SHDftWibm1mWus61fcicnSUA",
                "width": 3120
            },
            {
                "height": 4048,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/109700607296368824997/photos\">Tiffany Taylor</a>"
                ],
                "photo_reference": "CmRaAAAA68NVxGY6_ZxUjrVXoTD5kRJZ_Dh0CcFXwLqcVOUpWAb5Cj1scLZ4Cg1E0rKemoRqaEF0sVCljWsT6wyR0KCy_qcn2BYpgypppCCj4VOFbXA_YcfjP2BPUVSyopllYDHQEhCCjLTTcoJCbQ5cox_C8-IWGhS3kvo8OeIhs1oreOg0_OZxqg76aA",
                "width": 3036
            },
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101434276012294742937/photos\">Laura Lampley</a>"
                ],
                "photo_reference": "CmRaAAAA5xTg3S-f1G9n7y6ThTO0D1A7kxXzL5zfgfEB10SuFsoE0LXNt_v_XR4AW8SutGNEp-cnAB4ICQ6gk93-5dbj0ZzD9JUHqIEZpJ9rArUAkkIzJnohRj7rV37dc1SbNiFJEhB47zo4Brv9oj3bI_n-MlERGhQOb5AkNp3ddgLasqb6Mu5Mj7P0lg",
                "width": 3024
            },
            {
                "height": 2592,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101143512841266078252/photos\">L Zhong</a>"
                ],
                "photo_reference": "CmRaAAAAdkP9Wj_C9KHE6JIXwCsn3jIjEA6FLt-O1TcnWZn6m8pjLh8tESA_Jpm5SGg7mtk0u7d2nP64rmVhC6t1H9SOeU7XA2V1BgjBw3nYMIlnKXqXoG6k3KgcqtyTPN9d-lvdEhBLVsJEaOH1VlPi2N77k9BZGhQCRf-qgVrCPhV8rb6g3Q7AMasK8A",
                "width": 1944
            }
        ],
        "types": [
            "cafe",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "place_id": "ChIJu0oY4pq4woARwPPV3xmAifw"
    },
    "Mr. Holmes Bakehouse": {
        "name": "Mr. Holmes Bakehouse",
        "hours": {
            "open_now": false,
            "periods": [
                {
                    "close": {
                        "day": 0,
                        "time": "1500"
                    },
                    "open": {
                        "day": 0,
                        "time": "0800"
                    }
                },
                {
                    "close": {
                        "day": 1,
                        "time": "1430"
                    },
                    "open": {
                        "day": 1,
                        "time": "0700"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "1430"
                    },
                    "open": {
                        "day": 2,
                        "time": "0700"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "1430"
                    },
                    "open": {
                        "day": 3,
                        "time": "0700"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "1430"
                    },
                    "open": {
                        "day": 4,
                        "time": "0700"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "1430"
                    },
                    "open": {
                        "day": 5,
                        "time": "0700"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "1500"
                    },
                    "open": {
                        "day": 6,
                        "time": "0800"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 7:00 AM – 2:30 PM",
                "Tuesday: 7:00 AM – 2:30 PM",
                "Wednesday: 7:00 AM – 2:30 PM",
                "Thursday: 7:00 AM – 2:30 PM",
                "Friday: 7:00 AM – 2:30 PM",
                "Saturday: 8:00 AM – 3:00 PM",
                "Sunday: 8:00 AM – 3:00 PM"
            ]
        },
        "address": "111 S Ave 59, Los Angeles, CA 90042, USA",
        "phone": "(323) 739-0473",
        "coords": {
            "lat": 34.1101662,
            "lng": -118.1905076
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "photos": [
            {
                "height": 1152,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116418254005302142023/photos\">Winnie S</a>"
                ],
                "photo_reference": "CmRaAAAAuXeVjXcd2enMonR19WBa2UJVX_A89uRmmuEww90lc7f0zZ3BQNKDsq7ygdsCSwm__fR3EhX93MWIGtnC0NQk4hbB4k-bwGJpQKvHrfGT4spjrfeWs3jxkhCVZ5R2pgSeEhBOIN9Kh_SpeumzMCG7s4XsGhRFEOMIFN8PzS9rXnRHOMctnVNQDw",
                "width": 2048
            },
            {
                "height": 3120,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/109337514451247023352/photos\">Ron Quan</a>"
                ],
                "photo_reference": "CmRaAAAA-0_ERm8fOdOve-yyJybR15mXoAKhpESo8OIkCRxYclePc-Eg7ywQPfUd33whT4wTRzECOsPRKHRYBPSWxPWrgmNQS5BtiNd4s0uUE0TjtgrN34KmrIrKhyUXvVaEJTXjEhCqxdYBQ3CdVmaoxKVBRm2EGhScmI6y-cRgKzk4HhFWWzEDTQzEkg",
                "width": 4160
            },
            {
                "height": 1365,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108919314768356572102/photos\">Mr. Holmes Bakehouse</a>"
                ],
                "photo_reference": "CmRaAAAAUcb4WkiU8dMQnUwss-pChmE0el_phaPaL2uSPoObTBJjIq8NFYEAjfmueR6Sq-NvJDsUH3n3OvVmfbLpl3w3J-8sPyWAyOha8sjPWy6EmmdsJrbKpKOAA0jr-Gga7dg2EhA4iQ59taKX7SgH7apbBi1dGhSTdlqEx9n6L99uyPVTzUfhS79sIg",
                "width": 1367
            },
            {
                "height": 666,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/115027286096822577705/photos\">Zed star</a>"
                ],
                "photo_reference": "CmRaAAAAPXRDIhovo-7WrLrGLYJ0C7c-jJ4_L02xAHRGUCD9ca0px0nOzlEPYWXzT7K6pT65yeteAHjwQbWdMbVVZHxVeI-M3yaiW5Pe9vbvZfm_DM-1A0BxkuLmN7-uWRct-j5dEhA8E14P3rWvDD2j8_QI0SOkGhQ01q3isLmx6t4-JHQan_UfUYl8Vw",
                "width": 1000
            },
            {
                "height": 2952,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100312284124871647627/photos\">James Castañeda</a>"
                ],
                "photo_reference": "CmRaAAAAbcoJ_lsoR5y7G5jGZJ7jQTgxnTURLW7QmUryYDp8tqTGL668pWsw3z_JuoUyG_cewMBndSEk2IX0a7sZR3HnopjCNns4-A0sVKYDApCbMSQCELP2aRylxG8mqWfLg3SCEhDJK82jLY_4DmJU8PoS7JsOGhRSNMYZVlxi-XgQMRAn2xLPWTRcPA",
                "width": 5248
            },
            {
                "height": 1152,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116418254005302142023/photos\">Winnie S</a>"
                ],
                "photo_reference": "CmRaAAAAsow8xzbfj6kRo2m4boSod9LAuF6h1z5Yf8re-RyOyZJdFoJBpYGF_BHABMP6mmxs2m4EIHhM0VsiJY33jtLj2LgEGUH1On7M9PlUFguXiteIN9lnePx6WpfQppcSagFsEhA0EEokRAZggy80qntDbFO4GhQLCgIfqjMUCt9_wzEZOLZPEomf4A",
                "width": 2048
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/102537325325569949354/photos\">Christian Harrie</a>"
                ],
                "photo_reference": "CmRaAAAAcdcv3aPYwAm8p3qRTSe1LFnTArsm2TOCa7GBoe1l-dyMg5rxlCsO-YDA2vgvGChD5hm_ThLWK_xaaBKQZ7yPvRwGwlGJcwLK-Kp8RBJUaxkSB3E4Nf30oF_FDK2dpHGDEhATt1l-MQ6Ep3IzYVG34QQyGhQ9Ntk5xeihcy8ZmPODZwq96-oo5A",
                "width": 4032
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114616178952471804573/photos\">Alysa Ho</a>"
                ],
                "photo_reference": "CmRaAAAA24zQR4JuA-dI1f3Xx2WKA-I2gieUgUW_Hw6SRndqPctRVhrKA9SashOdvvuLyXHTMmct4BO8B22UzxvgUrjkt07y8ErrjP8VaK-tqwjW3vybbqS8JaG6SKvbNpTQDvjaEhA3oGzBWK_L2r1hFg5ZyLuxGhQ-RrTGEzcHlzAXS5nEe9I3H90MWQ",
                "width": 5312
            },
            {
                "height": 1152,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116418254005302142023/photos\">Winnie S</a>"
                ],
                "photo_reference": "CmRaAAAA5uc-59XQHKo7wZisFrtZhhbhbDVXy7OUkQN84BFYDiO7NxMpERhfhH0E-jlIxibLc0KyCYcCuvewLgv58_7c6i-pyzV9PCo98uwuUtj6p3X1Gnzn9hY2oakcgGGZV70WEhAFN3rAhHowHlPJ71cMCNcQGhQEsIqsWpwutEuKI7GSQbj0HgPNGg",
                "width": 2048
            },
            {
                "height": 5312,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114616178952471804573/photos\">Alysa Ho</a>"
                ],
                "photo_reference": "CmRaAAAAUP9QcOOfyswYHCSf0hMPedpeKWPg-RTUKjzmCtI5JGSLnVTfcAvQPE1k21FgKaMCaAWvt1wVom_jRRt7hYZ9VoQlDqLe32t0jcUnoDQKY0rSw-xbdxPA6BboVb1xr59HEhBQbPXu1VLfRxJyXkraxIxiGhTYzn4hpv7YHoWp3AmsXkfSEHad4A",
                "width": 2988
            }
        ],
        "types": [
            "bakery",
            "food",
            "store",
            "point_of_interest",
            "establishment"
        ],
        "site": "http://www.mrholmesbakehouse.com/LA",
        "place_id": "ChIJhb17sBHEwoARRutNSZcyn5w"
    },
    "SLAPFISH": {
        "name": "SLAPFISH",
        "hours": {
            "open_now": false,
            "periods": [
                {
                    "close": {
                        "day": 0,
                        "time": "2100"
                    },
                    "open": {
                        "day": 0,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 1,
                        "time": "2100"
                    },
                    "open": {
                        "day": 1,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "2100"
                    },
                    "open": {
                        "day": 2,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "2100"
                    },
                    "open": {
                        "day": 3,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "2100"
                    },
                    "open": {
                        "day": 4,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "2100"
                    },
                    "open": {
                        "day": 5,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "2100"
                    },
                    "open": {
                        "day": 6,
                        "time": "1100"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 11:00 AM – 9:00 PM",
                "Tuesday: 11:00 AM – 9:00 PM",
                "Wednesday: 11:00 AM – 9:00 PM",
                "Thursday: 11:00 AM – 9:00 PM",
                "Friday: 11:00 AM – 9:00 PM",
                "Saturday: 11:00 AM – 9:00 PM",
                "Sunday: 11:00 AM – 9:00 PM"
            ]
        },
        "address": "3405 E Imperial Hwy, Brea, CA 92823, USA",
        "phone": "(657) 444-2291",
        "coords": {
            "lat": 33.9091909,
            "lng": -117.8499943
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "photos": [
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/112036647371141543122/photos\">Russell Boydston</a>"
                ],
                "photo_reference": "CmRaAAAAHhMQ4M-p5PkqaALnkXxAhA_MypJ6hgy7kK27QnIzIjNyAiqwM2OH_CduRW3Z2xhBr1xwO9lLgZ98eSls97TxqkQbPMb-q-9onlTjTxLvETojFmP4zX6eGB53ZfTbJOSiEhAp87wUwO9DhrNydsNQv5VBGhSfazINujvNiOMb9yXWeDNkeySYjQ",
                "width": 4032
            },
            {
                "height": 1836,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/115982369683370815197/photos\">Michael Kim</a>"
                ],
                "photo_reference": "CmRaAAAAKHnktsMbXbym8ahGfNMhvWUXWd3v3a1ftzbNwJIgUaBO5nd6JQmaTwsyZm09ZqeYIfSsiY6EMtZn7Zz8gHaCJ0MXXUy9FuKFqLbxZnOdRZbB6VVKozpQUAiYax2sd_IFEhAF_gS-UfRG4Ca3w-u4jajyGhSGBvgQYv9IWACrQiASIbgi7OsiOg",
                "width": 1836
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100906477417289550713/photos\">Steve Clark</a>"
                ],
                "photo_reference": "CmRaAAAAKOuuouFWKE4JQ5hQGSGGm5tqodFLM8m8n_96fnwaIawxFKe_tLXF6XXCRVHh0uKCLtOuJdz0f6i1BLa-3xDvSLHbWBVXACLe054SPg3SkTIMeJFkcLBMAuerOowHt7eLEhAM3qKEnFYLjX0soAne4lFfGhQ5UeswJmWQB8qoveIaZ7_voxQiEw",
                "width": 5312
            },
            {
                "height": 2358,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103496955164507610292/photos\">Chris Hyun</a>"
                ],
                "photo_reference": "CmRaAAAA1IWUOqdFVd1PXwDLlCyiSKTo3IUocgQ0FC0HG_zmYvZ3lkyP8U-NnuWnHeB-80FsD-wNDiA5HR2WzGoL3owV9l_HFDCEgN1t2CevLXU1rjUVsvcJhmV8-rpfSOvNvlqaEhDq1K5CipwgJIhG56qpOu4vGhTdksFmsHmTJmLKej6_E3dTqr7z0Q",
                "width": 4190
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106637258784291969063/photos\">Ivan Portillo</a>"
                ],
                "photo_reference": "CmRaAAAAaFV_KtbI4YnhnpBSfrYSK9grEoPMCMcmb3Lrx5C4kAfXTJerxNfPkkK96yQwD6qs4AsM_BN_7igcA1OkghpsOam4m8KV8v89KtMirwmHSTOk6dx_28dwVwELn3rChgobEhDEsNGj2t8CQ29VYqh2cE-AGhTZp35eHtggYbFA3Rn5BffaXgI46A",
                "width": 4032
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/117361041402506259223/photos\">Maurice Perkins</a>"
                ],
                "photo_reference": "CmRaAAAA_kFnkHY0nzKUGRZo0DT101EDcX7b1rNLyYCLrOqPF1FQSZqNWehm-gy1LLyrbRXLgMtClH2rDxdL1CywZjvHgSZjWWmIkhVdUeoNvJl-duZ0HyCEH7SCq-VwtovczCMKEhC2BJAvRexwyOf0TVnfJOldGhT_4is4JdsuEXBMKr2CZemXJAsd0g",
                "width": 4032
            },
            {
                "height": 2448,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/118281557800896336091/photos\">Anne Sanchez</a>"
                ],
                "photo_reference": "CmRaAAAA8jmU-12yQ-9uwxZ7LCG1zacebnGJISgm_ysnHQNzdDqTI0GJGjS9TUNZVkrzpTm7wIQXQ_I1nFCDOcUhAfeKapQ74r8gTVMSkummYeXnGc7gecb1vQ3fWyGs7te2qBdKEhDKtv2g8UjumXe9fLNbp6OTGhQmTdKPK6gM9EDIjoYoI2S13v0NFg",
                "width": 2448
            },
            {
                "height": 2358,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103496955164507610292/photos\">Chris Hyun</a>"
                ],
                "photo_reference": "CmRaAAAAWy_ECYHU1UuEWJtLd3YI3IxxgMyvtvGhly1ZoKrSPYR8V9ojvd8v2DQnD8khsNPMs-aYj7zSQ2zhuhcvY0S8d291xS848UtDVxxCXcVCd0Bp5oYpT9HiKtzxZ_scn7nCEhD_4ilgsm6jqEgVsyhaCDfqGhSAj6uglJaApldu2PcmPyT-dv8SRQ",
                "width": 4190
            },
            {
                "height": 2358,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103496955164507610292/photos\">Chris Hyun</a>"
                ],
                "photo_reference": "CmRaAAAABRpdZTdRZ1NJlcLUlTDMpyfYughKOHRxO58x8FWSSFpTREqD7W0W_UdoCp6DDmaDyUkhg8cjTEMemHyRzp3rFvZwZ2lFm5LR_S_zaZfG3fUQ3qoqkTR2qWsAy0jMZJ97EhC4ldHW2fnQikm-gAqTJDD3GhQ9vViLrVx8LVvyA8_9ZfCk_8307w",
                "width": 4190
            },
            {
                "height": 2358,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103496955164507610292/photos\">Chris Hyun</a>"
                ],
                "photo_reference": "CmRaAAAA7D3XlObcyVeY0O795r6cwVnhXW53DjDPVaMTvvKk8bmhTzQfZDo0E8KO5Rxb7SYS9KwdUvHDh3y3qcrrlpLlHs80Tf7tKP4PZ3T4TwR2VUGpviX-GSglSyhKJ7gdyUPrEhC4HEt78EUZMbXcK32pFty-GhQCAQmCS39I38C6XCVMvPdpc4fmMA",
                "width": 4190
            }
        ],
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "place_id": "ChIJE75jJmbU3IARn3XN2F_2A70"
    },
    "Fatburger": {
        "name": "Fatburger",
        "hours": {
            "open_now": true,
            "periods": [
                {
                    "close": {
                        "day": 1,
                        "time": "0000"
                    },
                    "open": {
                        "day": 0,
                        "time": "1000"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "0000"
                    },
                    "open": {
                        "day": 1,
                        "time": "1000"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "0000"
                    },
                    "open": {
                        "day": 2,
                        "time": "1000"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "0000"
                    },
                    "open": {
                        "day": 3,
                        "time": "1000"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "0200"
                    },
                    "open": {
                        "day": 4,
                        "time": "1000"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "0200"
                    },
                    "open": {
                        "day": 5,
                        "time": "1000"
                    }
                },
                {
                    "close": {
                        "day": 0,
                        "time": "0200"
                    },
                    "open": {
                        "day": 6,
                        "time": "1000"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 10:00 AM – 12:00 AM",
                "Tuesday: 10:00 AM – 12:00 AM",
                "Wednesday: 10:00 AM – 12:00 AM",
                "Thursday: 10:00 AM – 2:00 AM",
                "Friday: 10:00 AM – 2:00 AM",
                "Saturday: 10:00 AM – 2:00 AM",
                "Sunday: 10:00 AM – 12:00 AM"
            ]
        },
        "address": "888 S Figueroa St, Los Angeles, CA 90017, USA",
        "phone": "(213) 891-0899",
        "coords": {
            "lat": 34.04658809999999,
            "lng": -118.261957
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "photos": [
            {
                "height": 496,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108030048981557609600/photos\">Fatburger</a>"
                ],
                "photo_reference": "CmRaAAAAD0E_kH1KtAT_cABjxGnRFO5NZ_zr2gAlwyKCw-bFfm5bjPqE2ejQJJurzoGErF5vrFxGD5egnbovPE4HKDK-sg3ARH1jhyo_f9Q3GiwThydVy6hMgNLSUXeCF0Yaaz1ZEhBTw1c_ogHiRK_VRR-qJ-g0GhTFJei2KMQRvoj6No9D_d4dWaPUqA",
                "width": 497
            },
            {
                "height": 546,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108030048981557609600/photos\">Fatburger</a>"
                ],
                "photo_reference": "CmRaAAAA9kZ1KR6r48j4J5q74CQSv8Hks6MAfKR1tU3pc2viu8q5g2gAm4J4UNob3SIO2rETTs0DMg7OyG4ZkympSJeOImbYgkoKPZQigmCvwvyZXvkj3PRpJAE8dKNGT6fWQ3ofEhByySDvDZu5cqSPAn8VE3bWGhTcomMAufI9bpJ1OT7muUO_jlAUmA",
                "width": 1000
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106403577314328450015/photos\">Thomas Wallace</a>"
                ],
                "photo_reference": "CmRaAAAAIAM_j61ZLlaXE9kEPqSMNjT-6M-HCKBwYNMyqvagf4GH33tIHxXc4vMxTKEzVMDuhh4x5QRBigWpuwb8eVBCBxzQmL6ba83vsq4GPeHifHfW93rvIvnZ_GX5JBtnU_J5EhBJ9cTO00MZSZXiS7C5NhJkGhQwTKNWc53SpxGue7-v3MFPckgQXw",
                "width": 5312
            },
            {
                "height": 1000,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108030048981557609600/photos\">Fatburger</a>"
                ],
                "photo_reference": "CmRaAAAAQ-AQHHDYV_76n8MDCFmA7u-gm88yuzoYFMw87iMh7Kz3cQSQBrKyIIlz0gyjFh2Gq2kjDDch94wFwwszIlnqjFMHHoOub7IaeY5ONCZCWPXgCV4ou88bLLMlhSMo50eZEhDqqNcG2kw1EjHk3H9NNLZNGhSVILkoTbjMIxG9bMTisUHxd3bHAg",
                "width": 1500
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108617173832324461298/photos\">Speeding in progress</a>"
                ],
                "photo_reference": "CmRaAAAAY52e2S9omzoGENmrGYDo_0odm1d-AlH6ADi6a7qyWNWsE-4hv9ijEIOGy0KynkmHQI-klmIJWzZ-ifPAmP9rwDHa2o1ZUQirIh3Y0LUbigo63ep8Gb4itc685NVELTJGEhBEw77hfK1Znjyx_Ix69GPHGhTn30Efq1PGySRBBpomIIaNGuJ4SQ",
                "width": 4032
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113529024608391254495/photos\">Kyungjun Song</a>"
                ],
                "photo_reference": "CmRaAAAAv27VXC9b1BHmlwFb-dlh_JhVv2xmOh1SwA02qYBiOAVJSVuT6v_IHJr8fm6CWeKxfoQq76HaKk94wbjacewtpIImkUDlJlrDaHPUaZwvodM9OdxZU3A2Su29L6FUlNWAEhDsDMPLd2zElfKTuHl-HDfdGhTguZXovBcmo0orPF7fhbpa2QQO6A",
                "width": 4032
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106403577314328450015/photos\">Thomas Wallace</a>"
                ],
                "photo_reference": "CmRaAAAADGlH1wDyLQbCG2m6g92hHuhDwTyvSvf8fFh4zuFXHa7K_i_SIJ8sklJNl8eFWenbcQ-qiawT2rG_mgiaY-9gAJ6xr_VPqdi0LKUqWWRPVijKV9WdMbi6gMCe0X4Y8bn5EhCXYc1i670jkFZhbfapfHaDGhQtoUmu5O7E_cPWTC4XC8a-EyLp-A",
                "width": 5312
            },
            {
                "height": 1000,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108030048981557609600/photos\">Fatburger</a>"
                ],
                "photo_reference": "CmRaAAAAoyh-Ukp85GzjjVDVJN8RVMbNkSfYhyUZnylDDFujF9HZZHVgkdMAo68DN2fa1gV0O6mvBVHQKMiLzj0m6mJUn5PGHj_T5IO_GTeGfDQ134_ZUE1PN6J8JItdTtn5RILwEhDWc5VHCZCI4pBLFqbmT91WGhRlcxF-AyE0bZiCGVb2qqQrutWE8A",
                "width": 1500
            },
            {
                "height": 440,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103461518282149745280/photos\">sridhar sambangi</a>"
                ],
                "photo_reference": "CmRaAAAAZ6nPhA2IhjYaZbtiaCMBR0u-FmQjwwwezJj5l2RxRODgfoqWqJYVzg51sX8cuPLfTKJnBy-1-Cxp2l5dvt8DZ9TE9x0DYQjhDFzb7cVgK0l0hCmIgsmpyRnmIH4jxWupEhBa-689mjp5b1asOWB4BYztGhQvSDZU9u3K4dEKBqMtxW7F7K49fw",
                "width": 550
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106403577314328450015/photos\">Thomas Wallace</a>"
                ],
                "photo_reference": "CmRaAAAAVBmRIesvXIsOdRcXvCpBu4NFqHSGbyZSbRMJeo2DoRTXHADl912QpuyLxzqwbPwSoXRk5DR8iHNSmGjyxOe2CDVxMoPfUrr3wwaTGyBrCNEK7JIXzaZ4QS-L8xrAhZlBEhAxFRiST3CAs6f6AuNk7Gt0GhRwERaWFJ1nNQJ_BOik-1BC9r7BjQ",
                "width": 5312
            }
        ],
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "site": "http://www.fatburger.com/",
        "place_id": "ChIJE-yFIbfHwoARKF0cL7wsBUY"
    },
    "By Chloe": {
        "name": "By Chloe",
        "hours": {
            "open_now": false,
            "periods": [
                {
                    "close": {
                        "day": 0,
                        "time": "2200"
                    },
                    "open": {
                        "day": 0,
                        "time": "1000"
                    }
                },
                {
                    "close": {
                        "day": 1,
                        "time": "2200"
                    },
                    "open": {
                        "day": 1,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "2200"
                    },
                    "open": {
                        "day": 2,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "2300"
                    },
                    "open": {
                        "day": 3,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "2300"
                    },
                    "open": {
                        "day": 4,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "2300"
                    },
                    "open": {
                        "day": 5,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "2300"
                    },
                    "open": {
                        "day": 6,
                        "time": "1000"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 11:00 AM – 10:00 PM",
                "Tuesday: 11:00 AM – 10:00 PM",
                "Wednesday: 11:00 AM – 11:00 PM",
                "Thursday: 11:00 AM – 11:00 PM",
                "Friday: 11:00 AM – 11:00 PM",
                "Saturday: 10:00 AM – 11:00 PM",
                "Sunday: 10:00 AM – 10:00 PM"
            ]
        },
        "address": "2520 Glendale Blvd, Los Angeles, CA 90039, USA",
        "phone": "(424) 675-7618",
        "coords": {
            "lat": 34.1031997,
            "lng": -118.2586152
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "photos": [
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104636687373132435944/photos\">Jeannette G.</a>"
                ],
                "photo_reference": "CmRaAAAAN3j3ubuvWmIo4ctepF-jUBIRyoMYFQh6eaBbViITHhXLNCZ7pm7hMLvN0mnur0dZ4mSIEinFQ6U_57vcb0UbjWRGhBNjozNeIhm_xTjmkdwxp0jrJSi5xNsrv-noYzzFEhCdRHWb1uPiGXS1svu79KFOGhRuC2VPT0DZiGWyyqhv-0wE8DVeuw",
                "width": 5312
            },
            {
                "height": 3264,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116707004964480633182/photos\">Noemi Francisco</a>"
                ],
                "photo_reference": "CmRaAAAAViMifkcv0j-5aMscWfLWeLfjwMofNT4xm6Zg0IoewX179mASJ5XA7g7Iu3K26RO2Ok4RmngVUigVCMMd5F3N0tb2LqdlQco7ng5l3lnesvZtVQ3EQTVkfeDsz5Cq7b1gEhAqjsBXtRfCjr8F37CupVOUGhQK8M-QQilMqpeFQMhustpSzWVRrg",
                "width": 1836
            },
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111286824747386749848/photos\">Phillip Vong</a>"
                ],
                "photo_reference": "CmRaAAAA-gc-lwEh8GQhX1j1Ftey0HqRtIIP5LbAEII8_naDIFEuhyrtb9sHVzwfgeu0KJmr_nZuUmX5pCxqx-EKqMKucAiL8sjWD1uC1112zFXHcQdoRq-sDHSZCbr3qtDrYqudEhCNjCmMZUiLr--heHTmROU_GhTcr8T9VwAMpKmRj7oMTmscCQOR4A",
                "width": 3024
            },
            {
                "height": 4160,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106276621704611889895/photos\">Matthew Bezkrovny</a>"
                ],
                "photo_reference": "CmRaAAAADAsc2R4Hi7cMdNf-vUhU1OpdLdNpVV7lGK0FVWb1b1aO3Hg3_ddIvnO3QDgK1pwr8rE9GaBiwNaUKWLR0yn2gg08T64Jr_8cwVfvlcjIdc-0Qfus5GpeE5pGl3cGTyDIEhC6Dl9LnHsw2GcEOqYSD-_XGhR8CjyYcGr8yi6JWgUEh5UN4pXzyQ",
                "width": 3120
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104875321164736402993/photos\">Matthew Knox</a>"
                ],
                "photo_reference": "CmRaAAAA9gXik6Nxnbtcl0SY7I3u8tYeEWg_0DX8Sy67X6OWZQIq_X6QwfNVddEQKIN7myLTtBzxdDecdaFF9Y6gkRQ4-ldFSbui3KitN1g0qZZbXeW41EhiUbH1ZXGqCkG1SNv5EhDQBj874sBTsy9B_UFI-9-vGhSuldroarOWXtrfUN9xj5GBmLd9YA",
                "width": 4032
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/115444640669908461789/photos\">Michael Wilt</a>"
                ],
                "photo_reference": "CmRaAAAAO2ozY1ozOmAqqwiCEeMZcPOHi9paZcbgEZcSVmJ7kjec2WLvdmwRGd9jdqJ3StPzFEXWduD_fWf-rXw3ygpDvRhhojHc8alLJNI7_TggAMjuwBoxBw58nRSiKGBjaPVKEhCb8wvY5ZsVvBGsJknOI4zYGhRFzvNypAPVwwsbE2VGwQ7mwqQMTA",
                "width": 4032
            },
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111286824747386749848/photos\">Phillip Vong</a>"
                ],
                "photo_reference": "CmRaAAAAoyBu9rI1aigwyX3jb7_kFSUvUdWs21jOovxu-U1CFXPSODoK8BUvtJSRaopvb-DUM0a7eCVFsZ-q51KVozULKT5RddUBPcJmAMB_wuSBtlcshEwWjabFHIphLG0HAGFUEhDGKJrTKIPNsA-T7aPliaQiGhTr73euwZ1ATMGvwS7ToDyd6t_OUA",
                "width": 3024
            },
            {
                "height": 1836,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103009714215191593109/photos\">aaron harris</a>"
                ],
                "photo_reference": "CmRaAAAAJFbasdAQqJ6ZY5vWWemA4gisxfgaeZMnwJG_LAqwTojmose9XTWeGOtgbAeb-ogiw5HqMRl_MNC-P67sAqmU3ENso6Ozve5UKlPGJrmLz9DqGHkU6iyWos49blJk8rISEhAfEI6G_IhNsDzjorTSMLbUGhQi5u3--QnFi2jJ_nNXeoy8Lf-0_Q",
                "width": 3264
            },
            {
                "height": 2592,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111929312983100053580/photos\">Maria B. Cabrera-Carreto</a>"
                ],
                "photo_reference": "CmRaAAAA3VVmrfEj12ISvCt3exaV0mkXYx0ElbsvpXOjv4y79fjbydLFupDTw1GPk6BOvJt3pzbUcNN2Lun48LTgTR8ml8W1lL6zjwsDSKxViN_Zj8ITqe6uqfQ5buHLyjHtNxKBEhBRtbM4SAy3bwAxQhFqcSOFGhRPSg_25pFeQwvPDyptOqQQ01qnzg",
                "width": 1944
            },
            {
                "height": 3036,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/110988846190105825560/photos\">Frank Bagheri</a>"
                ],
                "photo_reference": "CmRaAAAAtL0RT8cecP514DYfWDCpxcJlIvNuca5cHJOkxxuYQqkDJd85Lo1SgNmseIFub_Jr4Qo0FHy7IjGnXsvVTiT5kxtuQ5GLfK2IqrK6l6Etg5eBnw2iLlFmTg_b64CY8AWREhAOcdA43_W5cfGiYHm1wP0oGhQa5UZqn5ufUHfPA86vqA4JymEEDg",
                "width": 4048
            }
        ],
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "site": "http://eatbychloe.com/",
        "place_id": "ChIJ4fYRfivHwoAR_2DlpZxO5_8"
    },
    "Zzamong": {
        "name": "Zzamong",
        "hours": {
            "open_now": true,
            "periods": [
                {
                    "close": {
                        "day": 0,
                        "time": "2130"
                    },
                    "open": {
                        "day": 0,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "0300"
                    },
                    "open": {
                        "day": 1,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "0300"
                    },
                    "open": {
                        "day": 2,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "0300"
                    },
                    "open": {
                        "day": 3,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "0300"
                    },
                    "open": {
                        "day": 4,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "0300"
                    },
                    "open": {
                        "day": 5,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 0,
                        "time": "0300"
                    },
                    "open": {
                        "day": 6,
                        "time": "1100"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 11:00 AM – 3:00 AM",
                "Tuesday: 11:00 AM – 3:00 AM",
                "Wednesday: 11:00 AM – 3:00 AM",
                "Thursday: 11:00 AM – 3:00 AM",
                "Friday: 11:00 AM – 3:00 AM",
                "Saturday: 11:00 AM – 3:00 AM",
                "Sunday: 11:00 AM – 9:30 PM"
            ]
        },
        "address": "4255 W 3rd St, Los Angeles, CA 90020, USA",
        "phone": "(213) 739-2747",
        "coords": {
            "lat": 34.0693095,
            "lng": -118.3071786
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "photos": [
            {
                "height": 5312,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/112346817567754740425/photos\">Kevin Yi</a>"
                ],
                "photo_reference": "CmRaAAAAQ2Sz6_W2H6K07DjPW8V11dK5Oh3ATCfKUQFil2midvZqBMG9qMhWYb8jzRabRYryx2C82jSh5ZIPVrA-a5OXSyb1Usief1Z9pLpJjSOvIyFqRZIdip98AzniZoXW-W3qEhCn7bnEWBzc7Z4mY23MMoyjGhTvJzDL4KGIo_uD5jFrRZO1ETyMSA",
                "width": 2988
            },
            {
                "height": 1836,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107450246746126519961/photos\">Anne Kim</a>"
                ],
                "photo_reference": "CmRaAAAAjTPDotbXiUGhWUKkElKxdtX5_fPk6x0IKBtxndAdr8JxOl-RQGqYBnBM-IsEnig-YC7ADqSva0N1uAv-YJ6Sipgazomg6BmrtlXgNxYWebuJcx8pck4ICDxDyo839yYZEhBHQt_J90DOE2asfZMweAG7GhT6hBSMKXr_R5gXwG-mIrgyTE85hA",
                "width": 3264
            },
            {
                "height": 2268,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100188088167273189224/photos\">pureum kim</a>"
                ],
                "photo_reference": "CmRaAAAA0kk6SwLvtTM78MgHFocsyY3ykX6Mm5pu4DrzSBeviGivSD5slkrRktzwythnp_LBTG6gEBM1fxxBF2eY3MOOCjlA8xXrycSYDTe3tZ_jLpHsJnJWc2Mk7srcKVNlASWqEhBp7ND0AkkponIk2L2byeo7GhTy9OCUYLxsWADAEPcxhc9DUDLG8g",
                "width": 4032
            },
            {
                "height": 2048,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/109385847154059119286/photos\">Arthur Rodriguez</a>"
                ],
                "photo_reference": "CmRaAAAA2noexMkmn2wmVYE-s4ee9uptGn7sr4hplEREzDdNBTol-PfoJqqW3PFSBETXQAR0UhUicMCssK8v0IThG5Pe29l9pG0JSOVhMsCiHHtfSVdB-mOWkGGYE8qdbgejFTQaEhCniMXxL8a2BMrmJHgRFrh4GhRTcHuGwa8kmJz_S5wG1yuEsaV9yA",
                "width": 1536
            },
            {
                "height": 3036,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101554626478043765660/photos\">Kalina Li</a>"
                ],
                "photo_reference": "CmRaAAAAh1NHLy6Mvgbzq5D0hReanAls52DsYYWNjP5C19Hape5Kiy-LFxEXE9HixYvcqa9TUE_0oyWlzmLefAHGkd7XMiFvkeF0CAVsMNpUnSSm6lYgGJSHrhqDajLtjIj02ejuEhDJ6PdFTibxVzAvlA3I-3ipGhTla2iUC7hqLrXq46pu41MhAoYQFA",
                "width": 4048
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106517321853315333352/photos\">Michelle Lam</a>"
                ],
                "photo_reference": "CmRaAAAA9rMhjKlR5ku7ULAYf0tPB3BGNeYJHwuMEAgZ6R64ZYDe_d86SoPJcyc2VBu_rg9YOXkdSWgb23bV81H6dZCG5rlmgZsBB2ySvZJDwJLbNVErjfeo_hdDp7W4OMyakKh3EhA4ctcI8_g_Flh9Mb1wU-PXGhTy2Wu26p5Ntkt3cm0JvtOe5nlbVQ",
                "width": 4032
            },
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108979508406760432638/photos\">MINJEONG LEE</a>"
                ],
                "photo_reference": "CmRaAAAAwyttlJ3ZmN348McVe-pAQbxl_uioX3zle6x5_yfKr_L2JySOis6j0ADt_VzprjxDPJpAHplu2B8Pgwh8T_IEGS4kPtyhzl_n0nMzDPshLwOts496IFuYwfMdkvF5gp8jEhBe_J-k9h6UgSjifGuiSlKWGhRazA3w1Sb59yZVE1Jax0FsVklJqw",
                "width": 3024
            },
            {
                "height": 1536,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/109385847154059119286/photos\">Arthur Rodriguez</a>"
                ],
                "photo_reference": "CmRaAAAAqBo7yT7gNQoKXzRNOZO0-KbpNQCtAEaXPwOC9hsF0eVQl5LzHf7C1po_NBLAGxEeQOT5gJSBUPRGt3Hlduo7T8xs31lXsXOeR_d3aDDHEF5s2-efq835Wqr4Phpp6OoLEhA4LYdUDe7cDA_ufk7Tj3IiGhShGBOMSTI-s98eH4I3aGRfGVwvsA",
                "width": 2048
            },
            {
                "height": 3036,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101554626478043765660/photos\">Kalina Li</a>"
                ],
                "photo_reference": "CmRaAAAAbOFuRWpSWshKJHXI3Jp6RWYITGDhZX69WhvCHgqRisxVWP-0eq68ENNSZs1yAzit_90j3FTVCaQckGxqg51wKL9ius67LMAAjQndlBk4zaR2LYw4r2i0njBoB76cbCLiEhDw5pGx4i34cmM7Fk_0vrrjGhQb8PEv0P9mIOjbSNRi8cNv8M05tA",
                "width": 4048
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106517321853315333352/photos\">Michelle Lam</a>"
                ],
                "photo_reference": "CmRaAAAA1ZrkVsIaaFqQT2djEf7924k1PcUu5gYGNH8_jFBJGhpph9eVNsgGkxE1j4RIJ1kdsrmczjM7qA8r8t9b0n2Pc9DLQjLhFKijGQEIXghKmRFAYafq9EoTb1z7SpFhS96oEhDH2xHUROKGM4gBcbbrsVhqGhR6TRM8pBuzovFW8KCUS2NZexoicg",
                "width": 4032
            }
        ],
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "site": "http://www.zzamongrestaurant.com/",
        "place_id": "ChIJYXSKE5m4woARXRHhC1kUb-8"
    },
    "Shake Shack - Glendale": {
        "name": "Shake Shack - Glendale",
        "hours": {
            "open_now": false,
            "periods": [
                {
                    "close": {
                        "day": 0,
                        "time": "2300"
                    },
                    "open": {
                        "day": 0,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 1,
                        "time": "2300"
                    },
                    "open": {
                        "day": 1,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "2300"
                    },
                    "open": {
                        "day": 2,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "2300"
                    },
                    "open": {
                        "day": 3,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "2300"
                    },
                    "open": {
                        "day": 4,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "2300"
                    },
                    "open": {
                        "day": 5,
                        "time": "1100"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "2300"
                    },
                    "open": {
                        "day": 6,
                        "time": "1100"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 11:00 AM – 11:00 PM",
                "Tuesday: 11:00 AM – 11:00 PM",
                "Wednesday: 11:00 AM – 11:00 PM",
                "Thursday: 11:00 AM – 11:00 PM",
                "Friday: 11:00 AM – 11:00 PM",
                "Saturday: 11:00 AM – 11:00 PM",
                "Sunday: 11:00 AM – 11:00 PM"
            ]
        },
        "address": "252 S Brand Blvd, Glendale, CA 91204, USA",
        "phone": "(818) 858-1612",
        "coords": {
            "lat": 34.14276270000001,
            "lng": -118.2547597
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "photos": [
            {
                "height": 2992,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/110206117326703896657/photos\">Timothy Yip</a>"
                ],
                "photo_reference": "CmRaAAAA6JJMsUWp6Jai317wv3K9cTOYRxRSw_m74r6ydno_wbSuySg671F9xYhZrKONrdgDUbfA2NhgVD6iELJGXmbtSYOjOLXeioK7ZAW9V3OXpZF_vkpEF6XjiF15ejDLFTjwEhBDw_CkDwCGc8kCYVnL0Y7BGhTsgcS56s4esBqljUyJ2nt-HZRMJw",
                "width": 4000
            },
            {
                "height": 3036,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104279556841257923228/photos\">Paul Wong</a>"
                ],
                "photo_reference": "CmRaAAAAaGtUeTqBYTpldNr6ej_m-nBkfakrcGBhivYdlGYJYCNaGQdnQEpwWYvHHiJZdxCh1Xc_Z8G_rmmgPUFUhFPKZ8poLBoXF5129ZuK7a5FbWbdA8HfeQ2hVfdHiX8Mh0IPEhDx5S0cIGizrkhl5tXOfMHeGhSGgfj4602RT5Izp_sEt9Dd4UMLNg",
                "width": 4048
            },
            {
                "height": 3006,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/102046385214554961345/photos\">Dane T</a>"
                ],
                "photo_reference": "CmRaAAAAZmVbTCYzbwdi9llKpYXwsqXRoyMRTUnmusRf3c7p3GtCJu4W89noYGU4ZIgcikWLDXqZIIHtOQ5byyCUBVhQ03ZB0vEKcj1ADv-fh-77skKaZRdHaOPjzRAatQIr8ug0EhDp8M9iQmhYBd9bHopuv4S8GhSFUsh5bD42d8NXCzXEr0WSUd0UOg",
                "width": 5344
            },
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108876195313175769370/photos\">Kristine Cruz</a>"
                ],
                "photo_reference": "CmRaAAAApcznVWKR-7J5YUg4G-I-P6q6inRr5SUNW6WICwvb4ujQSMPPZjqGt9I70qgKtCOzs0w3ZXHHhRUN5l-vjI3yM4vBagJY01UImFqSvHhld_5yqxeqiZxJeoaiMJU8ktqUEhDnbU5iji6Ei3msWMDOD9EbGhS7CqQbY5Ay-NVsTc7eNlTG5DeaOg",
                "width": 3024
            },
            {
                "height": 1536,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114595125503780367072/photos\">Glenn A</a>"
                ],
                "photo_reference": "CmRaAAAACJzj2MjMHGlaE7MJjU4G6ecto0PB3QMuB09KEQMWqz0gM1z1J63yfldZ3WQsQ52HItO4YB1EmteaLnKtuRjKCK7B5ZDI5knu5nYbkDCgx2ChnL_FlkPrFfbu5B895qYNEhBxvphVB5PUqJfs12GC61wvGhQTXML4HVVPmVhpUEjOCmAfLRlLGw",
                "width": 2048
            },
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108299070201781899607/photos\">Yohan Yeo</a>"
                ],
                "photo_reference": "CmRaAAAARUVkGE1RVm8pwaL-aO6ZsCZMhj22Wf48LTNhvRpfxbJyML_8Ogla4nI0_j32ocQPIf6bkZlDKYHBdTUItUvZ-ZcHjzj1qvLsRpXtAhZgp4FGxnZYcz5h7phrHBYM84AIEhBsbdm-EWyfFgCuopJP1h5DGhSJ6QbBD9OGb0mD09qU4SdEKczgRQ",
                "width": 3024
            },
            {
                "height": 1836,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116547727384013060176/photos\">Allan Jay Garcia</a>"
                ],
                "photo_reference": "CmRaAAAApxTvAKwg5aSbHSPL2_yOSPrVJ_foQpHfor6RS36FVTGLUza556_3yruyLTiOz0aN7jSXcoadZhbOrBMLuqUKx7uUh0q-1cVBvUX4Xvx4PdtR-kiqRvcSfUnF_iJAQXyAEhAVxSpW423GPl_TTSZgn1hMGhT2poka47iPSyhbgKzNzzEVk74J3A",
                "width": 3264
            },
            {
                "height": 2222,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/102096502204131321227/photos\">John Park</a>"
                ],
                "photo_reference": "CmRaAAAAUMMwQqXEdQB3N_OxVgjkiJbEL-6v8dLiVv1-8lelJMsheBJQ2nAQvWEVFrQhbGVVDtAtD8-Z4ir4lZ_dqSIo8IZM9BZ1KubY6NidJWL8mCPnjnRygVrbrhawD7YGuZBvEhAAzlDYrV6KWnbzzVzcW4VQGhTpqK8MFydxiiDo_RodREZNq_3Trw",
                "width": 2222
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114944671050810829286/photos\">Vincent Wong</a>"
                ],
                "photo_reference": "CmRaAAAAx1-gG8UBVHlc0A8mIGib7OdLlFEkLQ0x9QmhzXt9afp3qI9ADTiOHIpLIgWBxSf1Kkuygd6xeHaX_m0-9gDsFlqseoeDgLlYW5TVNM0GQkuBNpGWnCPZT3uEVCZhKaiyEhChx13hoQqe3lGpqBPH7LJuGhRWvPzDnOCrhLPDy0cqZL1mmb5qeg",
                "width": 5312
            },
            {
                "height": 3036,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113343723817594995267/photos\">Mark Boonyasampant</a>"
                ],
                "photo_reference": "CmRaAAAACFZvmxSNwD5KQHBLmoYaI_kA2Ty3uOp58M5BSkzbLmD___qY4m98j69hho5uzslg8newB0kA7lOaMxzKsR1s57fl0KQzCzutqqnIXpXSN1yZE5zkAr9qkBGr7vuWJA3cEhDQopxw_W16pw-caKaX81hQGhQAcf1HIW6YZ7awR6Do315PEFQz8w",
                "width": 4048
            }
        ],
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "site": "http://shakeshack.com/",
        "place_id": "ChIJ_12ob_7AwoARN1xSDJHzBaA"
    },
    "Guisados": {
        "name": "Guisados",
        "hours": {
            "open_now": false,
            "periods": [
                {
                    "close": {
                        "day": 0,
                        "time": "1700"
                    },
                    "open": {
                        "day": 0,
                        "time": "0900"
                    }
                },
                {
                    "close": {
                        "day": 1,
                        "time": "2000"
                    },
                    "open": {
                        "day": 1,
                        "time": "1030"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "2000"
                    },
                    "open": {
                        "day": 2,
                        "time": "1030"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "2000"
                    },
                    "open": {
                        "day": 3,
                        "time": "1030"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "2000"
                    },
                    "open": {
                        "day": 4,
                        "time": "1030"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "2000"
                    },
                    "open": {
                        "day": 5,
                        "time": "1030"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "2000"
                    },
                    "open": {
                        "day": 6,
                        "time": "1030"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 10:30 AM – 8:00 PM",
                "Tuesday: 10:30 AM – 8:00 PM",
                "Wednesday: 10:30 AM – 8:00 PM",
                "Thursday: 10:30 AM – 8:00 PM",
                "Friday: 10:30 AM – 8:00 PM",
                "Saturday: 10:30 AM – 8:00 PM",
                "Sunday: 9:00 AM – 5:00 PM"
            ]
        },
        "address": "2100 East Cesar E Chavez Avenue, Los Angeles, CA 90033, USA",
        "phone": "(323) 264-7201",
        "coords": {
            "lat": 34.0482592,
            "lng": -118.2114677
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "photos": [
            {
                "height": 2962,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/117505826512614168416/photos\">Owen Renn</a>"
                ],
                "photo_reference": "CmRaAAAAX-xXL8Pw9e8dmhba1opggBHA_WSK5S1XcKlFKQ2A0RMpDQ7Guva9ylBruQXs-33dpywOxL1nq8fIrKdiyTcjmGC-OefxROiz9CQrEprNx64vhVFl9h3xQYIXnThzFUAkEhCzQd0_qUOaRRePSyhCy-aEGhS9JMU0_TAaakClpn_SODjQTuTiPQ",
                "width": 3949
            },
            {
                "height": 2358,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/102353614994687727453/photos\">Anthony Berber</a>"
                ],
                "photo_reference": "CmRaAAAAspnWRsSmrzeBr4y4_ejZj5TgYgsbmMyCxw7O4zutjMa-eya_Kt97DX1_Sg53gk7ZIW01DGWA8mz6Fg6fZMRzdA2QfntqYal1i_9nvu-DmppeP4le8DBwZtYme0c3JWBfEhBdV4TjFyUbaSOz-BXFZTxCGhRa-uSwLTeUJTeGrCAfpTvjehyADQ",
                "width": 4191
            },
            {
                "height": 4048,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108733945488587218086/photos\">Gerso Guillen</a>"
                ],
                "photo_reference": "CmRaAAAAxJv8Yef4DzoHLEMvv78JEK540UqpCn4HykiMZ1exRAzmD8coWStfTKO85iYowoICv7z9I-EC0S_vvIOdCWB4o8PfLs9d_ttE8Jam3NucXpA89Z1clqz3l35tM7HUCU3UEhBy9g7yQvhPnsP21ryjPJdJGhQgt7h1K1FF65NCYjgSSHNFV5hfJA",
                "width": 3036
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/115687630651700366595/photos\">RiiO Rio</a>"
                ],
                "photo_reference": "CmRaAAAACCdTQ2FzUBwkHHmcItx7CsQ_wXkjv1wu_anVDY0oow94k3TH4YVW8wStXemVfIDS7TA51Q120shJBLeeCc15wa8B3KkhiHczEG77bI2u2P9jVU39EWa-iBD1RbNrtRt_EhDARfxQdUjKDKBKTZp2_cBjGhSKjVhckEZweYDtUrLzik5E1ZLpJA",
                "width": 5312
            },
            {
                "height": 1836,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106603103679000140704/photos\">Karreno Alexanyan</a>"
                ],
                "photo_reference": "CmRaAAAARK-4d_asb-zrArS_f7CxXaLGQTmhN-OWPeYHqtuFcDSE435redActFYDW4agAtSNZ2i5TzSWEjPSR5C9MBcRCQzBYgID13HhCKj7_7ZjVFrDIhqTzxnH1q3v48MDq3zREhBOdp_mAqhqCnGR7V9h0NekGhSTNtWYVcfhTQc2sfdHio0pn-76ww",
                "width": 3264
            },
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/112900858636653303122/photos\">Gustavo Pineda</a>"
                ],
                "photo_reference": "CmRaAAAAjPTMbJq-LtWLYroqway1-cXFk35FsRkf8m7ZPDcHsou9RPLQ0JIgfhfmeSMmyGeo4B5isotmbyrLn-4PnrjTFerGbROWeotSmXhwTEiX4s8MANSvjWDB1H-ESr8NWS8bEhAD_HmD0SnlQHHzgFo8fXReGhRuNmHuzGJxKP4CI0Uv5vXaIcUgdg",
                "width": 2268
            },
            {
                "height": 2448,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/109567934813548027137/photos\">Joel puebla</a>"
                ],
                "photo_reference": "CmRaAAAAPPesn-0hEDBbR7k0tgbSUIgiUHU2g4HkR4WY5oYVCLr1wrd1yGx8ZwNHdPktknJ9L72iAdoup2oaGG2nrknoZuUdOheZXXtIPGLHEOUV0g_oNdr_0ecmis1WsSHzFUTDEhAV1O-Dr4gqyIREK49LYvf1GhSsFsqTK1lDjc8j4fmB7TqK5bFBMw",
                "width": 3264
            },
            {
                "height": 2727,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/117505826512614168416/photos\">Owen Renn</a>"
                ],
                "photo_reference": "CmRaAAAArwjVNzBR_ce7TJcoIpmBTqKvgV5Cmdzpjrn3uXrgokoCoPZI62vKLVwzt-A0ThRA_MSANWxM0DZduhwke-zv77Lqb1VAJ-RheEpPMzU6zPuZu2aFQBkp1y1qUS81jm_MEhCwL8uf0_kI0GhTkVXuabymGhSDVfDWjHg9jL6i2RV2bSTEKv-zMg",
                "width": 4000
            },
            {
                "height": 2952,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/112491352415810074241/photos\">Jairo Rojas</a>"
                ],
                "photo_reference": "CmRaAAAA7j6A2uyNi3vEzUHeUtKHCS7EKiAfDy6NNp3SgHxfF8Q4_7s5D__LdkCMzZx7jdtFPcZjFtqbA18MmVVIi_EEYx4bCoMNobovvXQO-xLoyOEOx0wLesP2HkwtbXkRgX3NEhAcF76hSWb4h9AkvCsCdZKwGhSxYYqRw4J78Neb0O57ZTcv4oDEBg",
                "width": 5248
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/112796353773113089193/photos\">Chen Zaks</a>"
                ],
                "photo_reference": "CmRZAAAAp6r5Ml4AH-6bCtPcou08ZdhV9xw7CHV3VjkxMO6Wg_wNIMw5ISm8u2LQwhXrW1EU5-yK5LHLcdscENoyHe26n45wEKwQgLMfrl-LBM2sCryrJ0Y6Qh8VZdHIPZlqbJy0EhCLWOfK3QWt_IGk2j359MwpGhTr_OpdX9tFsHFpr8g-To_8AvY2KQ",
                "width": 5312
            }
        ],
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "site": "http://www.guisados.co/",
        "place_id": "ChIJJa92LAnGwoARwH4CYPv5T6k"
    },
    "Pitchoun Bakery & Café": {
        "name": "Pitchoun Bakery & Café",
        "hours": {
            "open_now": false,
            "periods": [
                {
                    "close": {
                        "day": 0,
                        "time": "1600"
                    },
                    "open": {
                        "day": 0,
                        "time": "0800"
                    }
                },
                {
                    "close": {
                        "day": 1,
                        "time": "1700"
                    },
                    "open": {
                        "day": 1,
                        "time": "0700"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "1700"
                    },
                    "open": {
                        "day": 2,
                        "time": "0700"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "1700"
                    },
                    "open": {
                        "day": 3,
                        "time": "0700"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "1700"
                    },
                    "open": {
                        "day": 4,
                        "time": "0700"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "1700"
                    },
                    "open": {
                        "day": 5,
                        "time": "0700"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "1700"
                    },
                    "open": {
                        "day": 6,
                        "time": "0800"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 7:00 AM – 5:00 PM",
                "Tuesday: 7:00 AM – 5:00 PM",
                "Wednesday: 7:00 AM – 5:00 PM",
                "Thursday: 7:00 AM – 5:00 PM",
                "Friday: 7:00 AM – 5:00 PM",
                "Saturday: 8:00 AM – 5:00 PM",
                "Sunday: 8:00 AM – 4:00 PM"
            ]
        },
        "address": "545 S Olive St, Los Angeles, CA 90013, USA",
        "phone": "(213) 689-3240",
        "coords": {
            "lat": 34.0485154,
            "lng": -118.2540584
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "photos": [
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/117483142443006459153/photos\">Brian Tam</a>"
                ],
                "photo_reference": "CmRaAAAAfVc9LzL6BmgxYIrDkgu11LOvTPCHkmJUZ1l3aKhyt1QI_DuoOq3FXoyO0yHKKR_spEQ8RNKr11ZoLT8kduzTDvenkQHiyo30uVYlTdTE70MZl8ukWzQ9FLE_ILhjhy2VEhDWFM-H6OSu9TeaFmkCD4kvGhTxYCbkMYomT1pA62POHY3DnwJ0kg",
                "width": 4032
            },
            {
                "height": 3000,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105980249194933280483/photos\">Edward Shen</a>"
                ],
                "photo_reference": "CmRaAAAA6gPPil4oBaEcnYLQaqHZf7EvD1p_PG47tnR3FEJndxQKte09Suvz6uBBYn8xtMltwNSMpw4OnAUJvML-9PXMjV3k-asWwv7zlewnLg55EUu4kNZU_PzgcGnuXtCMZN7WEhCsKcnvlUpNWh2GhK62S5CYGhTK6nliLIL9-nDuCIXbSQOTkpoEzQ",
                "width": 4000
            },
            {
                "height": 362,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104582141386158531398/photos\">Pitchoun Bakery &amp; Café</a>"
                ],
                "photo_reference": "CmRaAAAAlWJP84c8h7ew-HMWC5QE9PcfuYfftIz9nr2vkJtnWbcpZVFxYJUg1-vMNJ6bCtUv0goGO72Meovggmx7nx0hefoTLSW6_2W-4K-3EVfMXR0MiwattDlDj1OTkXXrZgq9EhDkDjawB6VxKRwzPzDoLkWqGhTddkV0fRRSMo2lk2HfdoabkN2JOA",
                "width": 768
            },
            {
                "height": 3022,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108220621462697761769/photos\">Luis Evolved</a>"
                ],
                "photo_reference": "CmRaAAAAftMn20gVdEIHYO1uinWotm7AX-3D28DI1bedVidJXOItXmQ9BwKdMBD2AoDtW_FX2uX-F0lzdLE2Mgqb_u2sXEdHKw25N4uQHlicCGn_egmNJ7_ZnzZIFtQghzAQqn9-EhA7r-7VfglOGG3GVwnhVxvvGhSZrYyo6U1rvIyWVMY1sRq-1fs32g",
                "width": 3035
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/117483142443006459153/photos\">Brian Tam</a>"
                ],
                "photo_reference": "CmRaAAAAWYBv7AdFz9KYpy_iFfxUvqItyeRqZGULO2AXUQQCPJxTvbCPoK3jrc4a4y0TNF0I0nyDI6SGMzj2Srrzm14ETVc3qXpIl-X-jE9a3xIllutN3sSCPWpFrYdKXblz1LC3EhBASoiTOJu1OE33n12pWjb5GhSL_8knPg79O0VFtrL-GnYHmzt2XA",
                "width": 4032
            },
            {
                "height": 2358,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/115167791509064907883/photos\">Nila Sweeney</a>"
                ],
                "photo_reference": "CmRaAAAAubPE1vfWT6cE49qqtnQ5mzJ7ss0wIOqbmjmjmB8FHb_ga7PhMyxV-jxbB32dbFYtzGKQCK7xN7luOVWPeiU7Tf0gYL9rMbis5J1lWeYkjQ_0wsEetQJ7id852GIv1e2QEhCux_p_z-FF1efILV-2SWLEGhT1D3qvmzOIaFL6EBOihARDQ2lojw",
                "width": 4087
            },
            {
                "height": 1440,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104582141386158531398/photos\">Pitchoun Bakery &amp; Café</a>"
                ],
                "photo_reference": "CmRaAAAASiQfcRxzRuxRcUZDFdWbO_dNz_Ls4R4gI98ny9DsFlf3AZdoEvhBifbEmRNMbvYoSz2xts711y3udSPtZlQFkP2Fb0zTCg88jiaI8lguQhHI66nhMPAAvC5iPcdbSYUbEhCJaG4FnSFT9qRd36438VTxGhQPS50tlN-vNVRPFfkupHP9Lck4Ig",
                "width": 2160
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113298000652921837308/photos\">Garo Nazarian</a>"
                ],
                "photo_reference": "CmRaAAAAzHN6-Ck4ZKmlu3M47DuWAU1qlSC50nVqnTuu_BGzQ8aMVZYbN2oRBCTpz5TyKieXWRzh-yW5QNrdD5_S8LkC9ye8QosBmbX_ZGhr72pgN6nwarf8r5V_ZAZ0ftRVOkePEhC6DNTqnHjrqMWhuFCnCeoBGhS2VmE0Mnw0XXhT94qN0dtCUt0ovg",
                "width": 4032
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114869760961064592783/photos\">Ceci LaPeti</a>"
                ],
                "photo_reference": "CmRaAAAAUyugenNOk4cp6faWHiF5AcZj51ASwOk132dUfNyGu5y4LzNq_IoxqntV5eBCfjfFBdeM2eHdrStPxiVcpDJJp41LLMMUM5U6pSQsLHujoGNoC3m-p1S3KXEo3ZfLk2ApEhBhg9xfCULnrZrxxI4iSXtEGhSTI4OJskdzmjZ7hnnWEqsvZ9sJsg",
                "width": 4032
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/118409518316378414314/photos\">Justin Ordoveza</a>"
                ],
                "photo_reference": "CmRaAAAAVKJWklFBx_eZEYaJDDWhHGRkMQYI10UiL41Ml_4bw4O2W_Z_6ztXiDIUrHeCJTTe2jvZALA7_LGijFe4KVcUrMwDk12F5445osA7SThaEOb0M3PLVXoWa8XYcgKFlvxiEhDWOeUoz1I30JLq0JLnrFiGGhTFLBL25LVA9akKxJuZwysT-cqzvA",
                "width": 4032
            }
        ],
        "types": [
            "bakery",
            "cafe",
            "bar",
            "liquor_store",
            "grocery_or_supermarket",
            "restaurant",
            "food",
            "store",
            "point_of_interest",
            "establishment"
        ],
        "site": "http://www.pitchounbakery.com/",
        "place_id": "ChIJUZymwbTHwoAR1RJIniCE5vw"
    },
    "Blue Star Donuts": {
        "name": "Blue Star Donuts",
        "hours": {
            "open_now": false,
            "periods": [
                {
                    "close": {
                        "day": 0,
                        "time": "2000"
                    },
                    "open": {
                        "day": 0,
                        "time": "0700"
                    }
                },
                {
                    "close": {
                        "day": 1,
                        "time": "2000"
                    },
                    "open": {
                        "day": 1,
                        "time": "0700"
                    }
                },
                {
                    "close": {
                        "day": 2,
                        "time": "2000"
                    },
                    "open": {
                        "day": 2,
                        "time": "0700"
                    }
                },
                {
                    "close": {
                        "day": 3,
                        "time": "2000"
                    },
                    "open": {
                        "day": 3,
                        "time": "0700"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "2000"
                    },
                    "open": {
                        "day": 4,
                        "time": "0700"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "2000"
                    },
                    "open": {
                        "day": 5,
                        "time": "0700"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "2000"
                    },
                    "open": {
                        "day": 6,
                        "time": "0700"
                    }
                }
            ],
            "weekday_text": [
                "Monday: 7:00 AM – 8:00 PM",
                "Tuesday: 7:00 AM – 8:00 PM",
                "Wednesday: 7:00 AM – 8:00 PM",
                "Thursday: 7:00 AM – 8:00 PM",
                "Friday: 7:00 AM – 8:00 PM",
                "Saturday: 7:00 AM – 8:00 PM",
                "Sunday: 7:00 AM – 8:00 PM"
            ]
        },
        "address": "1142 Abbot Kinney Blvd, Venice, CA 90291, USA",
        "phone": "(310) 450-5630",
        "coords": {
            "lat": 33.9913488,
            "lng": -118.4693296
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "photos": [
            {
                "height": 2583,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105072855211422973105/photos\">Tony Yeung</a>"
                ],
                "photo_reference": "CmRaAAAA90RcXoR4Ok1V-kOgkABt5atnTGCaTZfg5NuWnEFd63dbR9_m-Yck1zm4atnQ6NRa_eEvH2HBtHc_UG2T6Nu72ojARVDzCMjK0OxZFeSVFJiXeHCfqONKQGn9SGl59CLNEhBDYQJR2BYSsktAFv2H555TGhQEBq-oLwT5f6w5gl7S5zgyKZjrmQ",
                "width": 3454
            },
            {
                "height": 2160,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103832587633873437424/photos\">Sendhil Kolandaivel</a>"
                ],
                "photo_reference": "CmRaAAAA4EjV3QtJ0tJIpk8XI7TmHDx0sOECmqhZxubwWVJspezJZPVTOVsdM12h66JchGWdDNDxU_Var9YeJQ-OpwU5FoEsMWsLvd6iAelvOs65brqF9vMlmqBuoRWCJg08Rc-nEhCzErfeT0P7fS47odnRRmvOGhSz-5nXaozCfnPPNcDZlZLD-XQWog",
                "width": 3840
            },
            {
                "height": 2448,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/117433956572313561808/photos\">Andrew Tee</a>"
                ],
                "photo_reference": "CmRaAAAAv6GtCeq9ETEo5T3IT6i48NQfE1jgvhSEy_31tufbMQhAXfDZGAyTyn1PtxmEL1a1WoT0VSZHZ5J3GEs6UR_8z6LUk46c7kBCSZHKrHMr2co4xLu36efFEC1LeSnse9jGEhCbr5LppnyFTJg0ENjbA77GGhQBMo4HIgehOfDR30q-kJucZW1sOA",
                "width": 3264
            },
            {
                "height": 1802,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106485761787835634460/photos\">Brendan Cross</a>"
                ],
                "photo_reference": "CmRZAAAAqGJ3s5MLzdyIfDupqklCZ00oSWiwMNZZXgKTfKI02hi1xITabW_f_HMLFnnVemsEyrRNsUBSrDWm30XAzcQz5L8U7V1Yi5HuF9OEJ7hiklYDmO2ySBTEUSKFyqycf5QUEhBza-MyakjUm9xP018dPD3rGhRagM75d_tTfa-QWumrEkECjTIdCg",
                "width": 3726
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100868976479304203098/photos\">Matthew Bonari</a>"
                ],
                "photo_reference": "CmRaAAAArLoOjSBGz2dBcdzLc-RJX8TBlo76ipARZLoqeuQsCVZqMV3Az_kxZJnMaWQzSRThDLiOP1Eocj5PdROyioppVx0OlCNi5dhkzRCZixPg_Qkx-1E_ARNJNmdgCql_1OvkEhDC8wf9B93R5lxS_Mq_6FwfGhSAQJbfB6Nv4gClNRONegsfnX-gyw",
                "width": 4032
            },
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100907063581788554617/photos\">Laura Siahaan</a>"
                ],
                "photo_reference": "CmRaAAAAkIRaz3_m6QBkmmFAPvA_-S-LP55bHNvy2X4GowoUcYCpicqvVuQmwGjrIproBsfOjwcHWkQwh53zEl8utGbRiG_-cUdCSWXLU4Rl3PZxlQ64F1m4mYUnLXT_zGA_Y22vEhAtt0rlVOI8SIDxVovlT8jNGhR05qIPJ7Yzh97XBVD9Y6wp73husw",
                "width": 5312
            },
            {
                "height": 3120,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105589780937119329897/photos\">Lex Segura</a>"
                ],
                "photo_reference": "CmRZAAAACxaZNkjrzJE2GTEWyW-MD2kVdO0s02z5DamLCiiiw9NxAhamtILL9MeP6gGrzYpx8Xxl-ncKStqiSVdVLDgqMURPjX60MGu33Wvz55MMD96-8x_DcovfNxvTvFl-qhcUEhAuXSsHuTdzcb7rt_-qVCHkGhQhhTMl6wOX_2oLuPW086gmYhLIlA",
                "width": 4160
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/115217081136639273987/photos\">Kevin Patel</a>"
                ],
                "photo_reference": "CmRaAAAAj5H0KsetjqsSpqNO6rvHZ33zMlXhby_vqDeg2Du9u7Nyk42ZoaCMuyKHi4oZAkxOgzdeHIk5yQbBoQlDfVZKshNHaMQiLbFGPl8xOstyiaEutmDHEf_luW8is8OSBojHEhBzUlzvBU0HLST42OdVn3onGhSS7W4CNAInjwS18sQkpbWG9XO5eA",
                "width": 4032
            },
            {
                "height": 1786,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101975038419640683967/photos\">X T</a>"
                ],
                "photo_reference": "CmRaAAAA_aqawOBgFYETmtHx0XiTiPpp14vr3dczqQgQfcZnjMee1vLHUzwN2feYDodppTodNxhd0YCvo9rxb8dyP4icSVdy_Qt1mZKX3x_0G5nnM_vdTgIg7CTJ-ZOjGuvC5xB0EhC-INf1WuUowa86tJ-Myt07GhQbrG8e8ftV4ujvCmfLMgdCEQq5nw",
                "width": 4470
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104655578174077973900/photos\">Charlie Pinsook</a>"
                ],
                "photo_reference": "CmRaAAAAPThesahdDxTMIckM8yToRP1OF0piC9CjSoPpc8Mu33wiE26WMHCzZy1OBf4fes0tCwYTpj2wZ1k3oS4Iw_TlumDWl-55P4mgdNYesjqXz7iyjddOZo2AOCp3GsbdQbOrEhBedObkhQajE2DTncRCpi20GhTFdBdPhVanDQCIgEdSYXNiHjY1pA",
                "width": 4032
            }
        ],
        "types": [
            "bakery",
            "food",
            "store",
            "point_of_interest",
            "establishment"
        ],
        "site": "http://www.bluestardonuts.com/",
        "place_id": "ChIJAZpHUce6woARMFiF_GkAA90"
    },
    "Museum of Neon Art": {
        "name": "Museum of Neon Art",
        "hours": {
            "open_now": false,
            "periods": [
                {
                    "close": {
                        "day": 0,
                        "time": "1700"
                    },
                    "open": {
                        "day": 0,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 4,
                        "time": "1900"
                    },
                    "open": {
                        "day": 4,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 5,
                        "time": "1900"
                    },
                    "open": {
                        "day": 5,
                        "time": "1200"
                    }
                },
                {
                    "close": {
                        "day": 6,
                        "time": "1900"
                    },
                    "open": {
                        "day": 6,
                        "time": "1200"
                    }
                }
            ],
            "weekday_text": [
                "Monday: Closed",
                "Tuesday: Closed",
                "Wednesday: Closed",
                "Thursday: 12:00 – 7:00 PM",
                "Friday: 12:00 – 7:00 PM",
                "Saturday: 12:00 – 7:00 PM",
                "Sunday: 12:00 – 5:00 PM"
            ]
        },
        "address": "216 S Brand Blvd, Glendale, CA 91204, USA",
        "phone": "(818) 696-2149",
        "coords": {
            "lat": 34.1437608,
            "lng": -118.2545011
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png",
        "photos": [
            {
                "height": 2000,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/118034175575301029315/photos\">Museum of Neon Art</a>"
                ],
                "photo_reference": "CmRaAAAAJeuVFZIuJKrcHMJTswDFUEnaoU2KReCaCTnkwmojbf_rO0LnkQCU6_GoPP78JazaC07Aj7rkQgM9F1X6_VEiUp71RvizuWEhl97es-DT7xPK_9xBRvNPg8ur7iKdpxUSEhAfh8sKmWNjvTGuv5BDroQPGhQiHxVSif6m4w0wXXTRs_XDFb2eBQ",
                "width": 1471
            },
            {
                "height": 540,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/118034175575301029315/photos\">Museum of Neon Art</a>"
                ],
                "photo_reference": "CmRaAAAAkezZnKo7jt2PJbx6GkWbv6s0cvnyUmNSQvdbuvJj3_PSmZ2m0J0QddotKdwAh6YsKJQs5mpktjRmq5txmm6ZtJ0OQ8w0lRuxShadeshSyVspKSXvq1rapjZ0IEMEqyyQEhAcwxgKmfcZHgu-mBleYJMxGhRLGoJvk_F8PN31VT7pgU91Fmdixg",
                "width": 960
            },
            {
                "height": 2340,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101617516279409508633/photos\">Laura Gutierrez</a>"
                ],
                "photo_reference": "CmRaAAAAEDhUv5IFl16yt9bVHwYW7qRZxxkApPct1VsWzET0yhSuigP2yhHqut7sQASyKhq99jfAnSXc6WV053vJomIPnaQX9Pk95LcOzEZnq0OixmqblR33KTpU0jpi8RnFB6O2EhCJIBQCm7ySC4HmyDVO6W9_GhR-sjc9_V9nrI6J-L8TOqcv4S-Obg",
                "width": 4160
            },
            {
                "height": 1000,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/118034175575301029315/photos\">Museum of Neon Art</a>"
                ],
                "photo_reference": "CmRaAAAAkccQPnBV_agKZMYm8_rfnflUI7SLHnYwVZNRssxZtb5-oc2D791L_EqOECqmbbI99qvj0UlkD4Q2V47gYn_P3nNC5M5Ngsdx0v9hRsUKxvpN9LECWnz-J5rRNIYIVOxuEhBkAXxxPLYVx6X0I3HfJS96GhSsJg66LqwlzsUv23bGqHlwe51M9Q",
                "width": 1920
            },
            {
                "height": 3088,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/117806518920761852131/photos\">Darryl Ford</a>"
                ],
                "photo_reference": "CmRaAAAAmQl1GgEEgNNKLqOcQIwrKbFUCqDXUvwBTr0c6KaYRL_51YjZCh0LL0ghh-RpSQEl-BcB6KIeGI9choIhiq9F85E4skB0CLQyq4TMwWR5pG02AW6Dm9dSx_KO3NfjDYHkEhDjKUnaxb5DCZAM6KsTGkGLGhSwGY6RwiC_EfayZLOmHpsokbDBpQ",
                "width": 4160
            },
            {
                "height": 2800,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114837912879531363312/photos\">Hrant shahinian</a>"
                ],
                "photo_reference": "CmRaAAAAZnLwtfXAvq-OwevekvmDPK3Z_uW0LQ1B1a67Quc2VwljKUqka8vpIvOgKfBjkyV6vPBRAsoCOL8B7OGGzwHXy9G4-T3WDxLVwjxD4it8O2AYQM1B4QsWcOGy6fh4zNaXEhCusCOUwqjqq7h1MsuI5mi1GhSkyJXuwiR1wfp6fsFAlwcriHhM-g",
                "width": 4195
            },
            {
                "height": 768,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/118034175575301029315/photos\">Museum of Neon Art</a>"
                ],
                "photo_reference": "CmRaAAAAPYfCxwko-B2vmuipDt59V0F0LvUSK2fS95AnJu3mMoAvqhg_4LBEHuXC06GBVprwW_UoOVq6NKoymDVghfYk-lVpUifHVuhZkrmHBUQjA4mRH_l2vRi_kcZK8w7FmATGEhDTYzNTqcMW6xY01NXAD4gxGhQr_zN9vNymQIH0kzaPd54u_whgBg",
                "width": 1024
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106860483123460834834/photos\">Inna Baglayeva</a>"
                ],
                "photo_reference": "CmRaAAAAfdSzqSZakx_eWmcofoS1ZWbKl1Lam5DI1-RzyuE1EcmXtfaX9lu7xeJuyZXR-LMA2c2HtHksACXkUfntwfby8CdlNlIp9CDSZmikMxbV8S4HsfAhCK9T6thoOhpTpAynEhB8argpao2VltTcnB_StJ_rGhRlMtyvqqKw3yg8U4DXxdxot2bhtw",
                "width": 4032
            },
            {
                "height": 1936,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/118034175575301029315/photos\">Museum of Neon Art</a>"
                ],
                "photo_reference": "CmRaAAAAqqngZD561YeKIDTf3dnfJchIyAcJ4DamfPpDGu0VM-2joyrQlSXs0R5q3fa2y-c3CP5QtyxJQlIYgdoWuQLF5aQp_SiOGIrZ8wz9wwo_5vEv3ekRcTdOduiqv0QopOQLEhD5R6Jn08lIvaaxSXJaKc9ZGhQeArJdMBE0SrMTzgY89KdWNYBbgw",
                "width": 1936
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104956372002420975351/photos\">Jacquelyn Egger</a>"
                ],
                "photo_reference": "CmRaAAAA4T6fZ8-BxzessV7EGail4c-IGLRic72lgiv3nQhDxuNyCFbXjrXZc6kTMLA5xHlBeig4fZVD0yCbART34nGYU3r4F9__IP_lBe7RJZh2GTH1-rxGTGiaes6CBDD7ccYhEhCokk5Le-wvpPYivQ0VT-MdGhR1eebX8_wE_cC7LrHE-EbLDjHtPQ",
                "width": 4032
            }
        ],
        "types": [
            "museum",
            "point_of_interest",
            "establishment"
        ],
        "site": "http://www.neonmona.org/",
        "place_id": "ChIJc08iRf7AwoARbuhdP6GYUIg"
    }
}
