/* MahaCollege real CAP cutoff dataset
   Academic year: 2026-27
   Sources: Maharashtra State CET Cell CAP Round-I, CAP Round-II, CAP Round-III and CAP Round-IV MH Cut Off PDFs.
   Percentiles are the values in parentheses in the official PDFs.
   Cutoff row format: [branch, category, seatPool, CAP4, CAP3, CAP2, CAP1].
   "H/O/State/AI" identifies Home-University / Other-than-Home-University / State-Level / All-India seat pools.
*/
const COLLEGES = [
  {
    "id": "03175",
    "name": "M.G.M.'s College of Engineering and Technology",
    "shortName": "MGM College of Engineering & Technology",
    "city": "Navi Mumbai",
    "region": "Mumbai",
    "district": "Raigad",
    "status": "Un-Aided",
    "university": "Mumbai University",
    "branches": [
      "Civil Engineering",
      "Computer Engineering",
      "Information Technology",
      "Electrical Engineering",
      "Electronics and Telecommunication Engg",
      "Bio Medical Engineering",
      "Chemical Engineering",
      "Mechanical Engineering",
      "Computer Science and Engineering (AI & ML)",
      "Computer Science and Engineering (Data Science)",
      "Automation and Robotics"
    ],
    "cutoffs": [
      [
        "Civil Engineering",
        "OPEN",
        "H",
        78.8724264,
        77.3511663,
        75.2153333,
        77.3511663
      ],
      [
        "Civil Engineering",
        "SEBC",
        "H",
        79.3794141,
        75.6051641,
        null,
        57.8685189
      ],
      [
        "Civil Engineering",
        "OPEN",
        "O",
        81.9381769,
        null,
        null,
        78.1913582
      ],
      [
        "Civil Engineering",
        "NT-C",
        "O",
        73.676029,
        null,
        null,
        69.4641016
      ],
      [
        "Civil Engineering",
        "OBC",
        "O",
        71.4864246,
        83.8560469,
        null,
        73.0844718
      ],
      [
        "Computer Engineering",
        "OPEN",
        "H",
        86.5951005,
        87.921673,
        86.9330662,
        87.921673
      ],
      [
        "Computer Engineering",
        "ST",
        "H",
        86.3032893,
        44.5569356,
        68.4225402,
        19.4285936
      ],
      [
        "Computer Engineering",
        "OBC",
        "H",
        84.3396689,
        83.0532651,
        80.2298047,
        85.9003507
      ],
      [
        "Computer Engineering",
        "SEBC",
        "H",
        80.2462012,
        80.2298047,
        76.4503291,
        82.4850758
      ],
      [
        "Computer Engineering",
        "SC",
        "H",
        86.564971,
        78.7121389,
        79.4793202,
        81.6656822
      ],
      [
        "Computer Engineering",
        "OPEN",
        "O",
        85.239357,
        85.0971341,
        null,
        87.2379152
      ],
      [
        "Computer Engineering",
        "ST",
        "O",
        83.7431799,
        null,
        null,
        43.6823105
      ],
      [
        "Computer Engineering",
        "SEBC",
        "O",
        83.4251983,
        72.1871837,
        null,
        85.791852
      ],
      [
        "Computer Engineering",
        "NT-A",
        "O",
        80.7004831,
        80.7004831,
        null,
        null
      ],
      [
        "Computer Engineering",
        "EWS",
        "State",
        54.9986599,
        13.1846958,
        null,
        null
      ],
      [
        "Information Technology",
        "OPEN",
        "O",
        84.9389417,
        85.0971341,
        null,
        85.0971341
      ],
      [
        "Information Technology",
        "ST",
        "O",
        76.3286018,
        null,
        null,
        null
      ],
      [
        "Information Technology",
        "NT-B",
        "O",
        81.2187812,
        null,
        null,
        80.7004831
      ],
      [
        "Information Technology",
        "OBC",
        "O",
        80.1708014,
        83.8560469,
        null,
        83.8560469
      ],
      [
        "Information Technology",
        "EWS",
        "State",
        41.7943409,
        13.1846958,
        null,
        null
      ],
      [
        "Electrical Engineering",
        "OPEN",
        "H",
        82.5741649,
        78.4082225,
        77.8612083,
        78.4082225
      ],
      [
        "Electrical Engineering",
        "SC",
        "H",
        74.4163823,
        71.0421393,
        70.8903389,
        71.0421393
      ],
      [
        "Electrical Engineering",
        "OPEN",
        "O",
        80.0260591,
        null,
        null,
        79.6966406
      ],
      [
        "Electrical Engineering",
        "SC",
        "O",
        63.5901214,
        null,
        null,
        76.099588
      ],
      [
        "Electrical Engineering",
        "ST",
        "O",
        44.5569356,
        null,
        null,
        null
      ],
      [
        "Electrical Engineering",
        "OBC",
        "O",
        23.9884494,
        null,
        null,
        77.4501436
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "H",
        84.207639,
        84.4852349,
        83.1821207,
        84.4852349
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC",
        "H",
        78.8724264,
        81.5923479,
        76.6875679,
        81.5923479
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "O",
        87.8605935,
        87.6469672,
        87.2593857,
        87.6469672
      ],
      [
        "Electronics and Telecommunication Engg",
        "ST",
        "O",
        82.9247643,
        28.7221654,
        80.7883659,
        28.7221654
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC",
        "O",
        83.0532651,
        82.9708753,
        76.3172626,
        82.9708753
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC",
        "O",
        81.9221888,
        75.9743237,
        87.6469672,
        75.9743237
      ],
      [
        "Electronics and Telecommunication Engg",
        "EWS",
        "State",
        60.6803919,
        37.1881218,
        27.2730752,
        null
      ],
      [
        "Bio Medical Engineering",
        "OPEN",
        "H",
        85.3954204,
        90.7025504,
        82.9459739,
        90.7025504
      ],
      [
        "Bio Medical Engineering",
        "OPEN",
        "O",
        81.7199,
        91.3216011,
        88.1968791,
        91.3216011
      ],
      [
        "Bio Medical Engineering",
        "EWS",
        "State",
        39.9385666,
        65.4837825,
        61.8012422,
        null
      ],
      [
        "Chemical Engineering",
        "OPEN",
        "H",
        90.8237951,
        84.539834,
        80.2462012,
        84.539834
      ],
      [
        "Chemical Engineering",
        "SC",
        "H",
        82.9464759,
        69.1748413,
        65.4837825,
        69.1748413
      ],
      [
        "Chemical Engineering",
        "SEBC",
        "H",
        68.6031011,
        null,
        null,
        74.0786749
      ],
      [
        "Chemical Engineering",
        "OPEN",
        "O",
        74.7351841,
        null,
        null,
        80.4293972
      ],
      [
        "Chemical Engineering",
        "ST",
        "O",
        64.1499185,
        null,
        null,
        null
      ],
      [
        "Chemical Engineering",
        "SEBC",
        "O",
        74.0786749,
        null,
        null,
        78.9956692
      ],
      [
        "Chemical Engineering",
        "EWS",
        "State",
        17.200127,
        null,
        null,
        null
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "H",
        83.769652,
        85.9241674,
        78.1913582,
        85.9241674
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "O",
        78.9492107,
        null,
        null,
        84.3808448
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "O",
        78.9492107,
        null,
        null,
        78.2850242
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "SC",
        "H",
        81.2737812,
        81.2365306,
        79.3692556,
        81.2365306
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "OPEN",
        "H",
        86.564971,
        87.3221306,
        85.65358,
        87.3221306
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "OBC",
        "H",
        85.0307561,
        84.5857013,
        83.6630885,
        84.5857013
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "OPEN",
        "O",
        81.2524249,
        79.5538038,
        null,
        86.3482671
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "ST",
        "O",
        76.099588,
        null,
        null,
        40.6688911
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "NT-C",
        "O",
        80.1708014,
        null,
        null,
        null
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "OBC",
        "O",
        76.6993653,
        null,
        null,
        84.4852349
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "SEBC",
        "O",
        80.2313072,
        null,
        null,
        79.4793202
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "EWS",
        "State",
        78.9492107,
        null,
        null,
        null
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "OPEN",
        "H",
        86.0314842,
        86.2020083,
        84.4137833,
        86.2020083
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "OPEN",
        "O",
        80.5595655,
        null,
        null,
        85.225256
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "ST",
        "H",
        16.8210201,
        null,
        null,
        43.0034494
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "EWS",
        "State",
        65.3107562,
        null,
        null,
        null
      ],
      [
        "Automation and Robotics",
        "OPEN",
        "H",
        80.78157,
        81.2737812,
        80.7883659,
        81.2737812
      ],
      [
        "Automation and Robotics",
        "OBC",
        "H",
        79.7046663,
        70.6970324,
        73.9721817,
        77.9303712
      ],
      [
        "Automation and Robotics",
        "SEBC",
        "H",
        73.5651108,
        77.1955616,
        71.2894525,
        70.6970324
      ],
      [
        "Automation and Robotics",
        "OPEN",
        "O",
        67.931377,
        79.5538038,
        null,
        79.5538038
      ],
      [
        "Civil Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        63.9397326
      ],
      [
        "Civil Engineering",
        "ST",
        "H",
        null,
        null,
        null,
        44.5569356
      ],
      [
        "Civil Engineering",
        "NT-A",
        "H",
        null,
        null,
        null,
        67.2980865
      ],
      [
        "Civil Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        66.0913492
      ],
      [
        "Civil Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        71.5294662
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        80.0260591
      ],
      [
        "Civil Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        61.7346759
      ],
      [
        "Civil Engineering",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        54.9733848
      ],
      [
        "Civil Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        64.2926156
      ],
      [
        "Civil Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        75.6051641
      ],
      [
        "Civil Engineering",
        "VJ/DT-Ladies",
        "H",
        null,
        null,
        null,
        31.2469386
      ],
      [
        "Civil Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        72.5022286
      ],
      [
        "Civil Engineering",
        "NT-A",
        "O",
        null,
        null,
        null,
        66.0913492
      ],
      [
        "Civil Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        72.9906413
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        72.0579403
      ],
      [
        "Civil Engineering",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        60.268127
      ],
      [
        "Civil Engineering",
        "ST-Ladies",
        "O",
        null,
        null,
        null,
        13.1538992
      ],
      [
        "Civil Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        59.3625359
      ],
      [
        "Computer Engineering",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        75.406809
      ],
      [
        "Computer Engineering",
        "NT-A",
        "H",
        null,
        null,
        null,
        83.8560469
      ],
      [
        "Computer Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        84.4790806
      ],
      [
        "Computer Engineering",
        "NT-C",
        "H",
        null,
        null,
        null,
        78.1871974
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        88.7627999
      ],
      [
        "Computer Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        79.4793202
      ],
      [
        "Computer Engineering",
        "ST-Ladies",
        "H",
        null,
        null,
        null,
        27.2730752
      ],
      [
        "Computer Engineering",
        "NT-A-Ladies",
        "H",
        null,
        null,
        null,
        79.4663048
      ],
      [
        "Computer Engineering",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        76.6993653
      ],
      [
        "Computer Engineering",
        "NT-C-Ladies",
        "H",
        null,
        null,
        null,
        84.1149833
      ],
      [
        "Computer Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        86.713982
      ],
      [
        "Computer Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        84.0343736
      ],
      [
        "Computer Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        82.6530612
      ],
      [
        "Computer Engineering",
        "VJ/DT",
        "O",
        null,
        null,
        null,
        75.6280193
      ],
      [
        "Computer Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        85.9106165
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        87.2196787
      ],
      [
        "Computer Engineering",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        85.0853734
      ],
      [
        "Computer Engineering",
        "NT-A-Ladies",
        "O",
        null,
        null,
        null,
        39.4647165
      ],
      [
        "Computer Engineering",
        "NT-B-Ladies",
        "O",
        null,
        null,
        null,
        82.9247643
      ],
      [
        "Computer Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        83.3956241
      ],
      [
        "Computer Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        63.5901214
      ],
      [
        "Information Technology",
        "OPEN",
        "H",
        null,
        null,
        null,
        85.819156
      ],
      [
        "Information Technology",
        "SC",
        "H",
        null,
        null,
        null,
        78.7121389
      ],
      [
        "Information Technology",
        "ST",
        "H",
        null,
        null,
        null,
        17.9468599
      ],
      [
        "Information Technology",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        71.1330463
      ],
      [
        "Information Technology",
        "NT-A",
        "H",
        null,
        null,
        null,
        80.7004831
      ],
      [
        "Information Technology",
        "NT-B",
        "H",
        null,
        null,
        null,
        77.9303712
      ],
      [
        "Information Technology",
        "NT-C",
        "H",
        null,
        null,
        null,
        83.0532651
      ],
      [
        "Information Technology",
        "OBC",
        "H",
        null,
        null,
        null,
        83.8560469
      ],
      [
        "Information Technology",
        "SEBC",
        "H",
        null,
        null,
        null,
        82.3548238
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        85.9212092
      ],
      [
        "Information Technology",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        79.379989
      ],
      [
        "Information Technology",
        "VJ/DT-Ladies",
        "H",
        null,
        null,
        null,
        49.6322266
      ],
      [
        "Information Technology",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        84.3204501
      ],
      [
        "Information Technology",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        80.3167508
      ],
      [
        "Information Technology",
        "SC",
        "O",
        null,
        null,
        null,
        77.9589871
      ],
      [
        "Information Technology",
        "SEBC",
        "O",
        null,
        null,
        null,
        80.2298047
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        84.3204501
      ],
      [
        "Information Technology",
        "NT-C-Ladies",
        "O",
        null,
        null,
        null,
        79.5928226
      ],
      [
        "Information Technology",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        83.988979
      ],
      [
        "Information Technology",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        72.1871837
      ],
      [
        "Information Technology",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        64.087617
      ],
      [
        "Electrical Engineering",
        "ST",
        "H",
        null,
        null,
        null,
        0.9528933
      ],
      [
        "Electrical Engineering",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        65.6970807
      ],
      [
        "Electrical Engineering",
        "NT-A",
        "H",
        null,
        null,
        null,
        49.7711098
      ],
      [
        "Electrical Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        76.4503291
      ],
      [
        "Electrical Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        63.9397326
      ],
      [
        "Electrical Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        77.8612083
      ],
      [
        "Electrical Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        72.3814647
      ],
      [
        "Electrical Engineering",
        "NT-C-Ladies",
        "H",
        null,
        null,
        null,
        76.6993653
      ],
      [
        "Electrical Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        68.78733
      ],
      [
        "Electrical Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        65.4076693
      ],
      [
        "Electrical Engineering",
        "NT-A",
        "O",
        null,
        null,
        null,
        55.6597249
      ],
      [
        "Electrical Engineering",
        "NT-B",
        "O",
        null,
        null,
        null,
        73.6510161
      ],
      [
        "Electrical Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        74.5525612
      ],
      [
        "Electrical Engineering",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        70.9390112
      ],
      [
        "Electrical Engineering",
        "VJ/DT-Ladies",
        "O",
        null,
        null,
        null,
        54.96898
      ],
      [
        "Electrical Engineering",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        64.2198294
      ],
      [
        "Electrical Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        49.8699585
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC",
        "H",
        null,
        null,
        null,
        74.8088122
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        64.4305882
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B",
        "H",
        null,
        null,
        null,
        76.3286018
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC",
        "H",
        null,
        null,
        null,
        78.685137
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        85.65358
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        75.110975
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-A-Ladies",
        "H",
        null,
        null,
        null,
        52.8560653
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        69.8303637
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        82.7777778
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC",
        "O",
        null,
        null,
        null,
        76.3286018
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        93.8884805
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        81.9221888
      ],
      [
        "Electronics and Telecommunication Engg",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        77.2289819
      ],
      [
        "Bio Medical Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        65.4076693
      ],
      [
        "Bio Medical Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        66.4794206
      ],
      [
        "Bio Medical Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        73.9021728
      ],
      [
        "Bio Medical Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        77.937978
      ],
      [
        "Bio Medical Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        92.5689146
      ],
      [
        "Bio Medical Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        68.6254044
      ],
      [
        "Bio Medical Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        80.7035589
      ],
      [
        "Bio Medical Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        77.937978
      ],
      [
        "Bio Medical Engineering",
        "ST-Ladies",
        "H",
        null,
        null,
        null,
        43.2064159
      ],
      [
        "Bio Medical Engineering",
        "NT-C",
        "O",
        null,
        null,
        null,
        60.9157012
      ],
      [
        "Bio Medical Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        86.8427506
      ],
      [
        "Bio Medical Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        94.6694641
      ],
      [
        "Bio Medical Engineering",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        85.1182895
      ],
      [
        "Chemical Engineering",
        "NT-A",
        "H",
        null,
        null,
        null,
        54.7674174
      ],
      [
        "Chemical Engineering",
        "NT-C",
        "H",
        null,
        null,
        null,
        68.6498934
      ],
      [
        "Chemical Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        77.7384664
      ],
      [
        "Chemical Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        83.0532651
      ],
      [
        "Chemical Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        66.3432235
      ],
      [
        "Chemical Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        77.3511663
      ],
      [
        "Chemical Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        76.3324995
      ],
      [
        "Chemical Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        78.4082225
      ],
      [
        "Chemical Engineering",
        "VJ/DT",
        "O",
        null,
        null,
        null,
        77.540946
      ],
      [
        "Chemical Engineering",
        "NT-A",
        "O",
        null,
        null,
        null,
        71.4864246
      ],
      [
        "Chemical Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        72.5793422
      ],
      [
        "Chemical Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        80.7055032
      ],
      [
        "Chemical Engineering",
        "NT-B-Ladies",
        "O",
        null,
        null,
        null,
        33.4150899
      ],
      [
        "Chemical Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        77.9589871
      ],
      [
        "Chemical Engineering",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        70.6987601
      ],
      [
        "Mechanical Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        78.1913582
      ],
      [
        "Mechanical Engineering",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        62.965955
      ],
      [
        "Mechanical Engineering",
        "NT-A",
        "H",
        null,
        null,
        null,
        43.6669107
      ],
      [
        "Mechanical Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        67.9621973
      ],
      [
        "Mechanical Engineering",
        "NT-C",
        "H",
        null,
        null,
        null,
        78.9956692
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        80.7035589
      ],
      [
        "Mechanical Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        60.268127
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        75.9743237
      ],
      [
        "Mechanical Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        63.5303851
      ],
      [
        "Mechanical Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        69.8418157
      ],
      [
        "Mechanical Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        63.4876968
      ],
      [
        "Mechanical Engineering",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        68.063194
      ],
      [
        "Mechanical Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        63.5303851
      ],
      [
        "Mechanical Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        74.2209832
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        73.6510161
      ],
      [
        "Mechanical Engineering",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        54.873582
      ],
      [
        "Mechanical Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        66.0913492
      ],
      [
        "Mechanical Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        72.5330927
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        70.4858678
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "NT-B",
        "H",
        null,
        null,
        null,
        79.5076004
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "SEBC",
        "H",
        null,
        null,
        null,
        83.7431799
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        88.1060139
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        77.7384664
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "VJ/DT-Ladies",
        "H",
        null,
        null,
        null,
        53.1039032
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "NT-A-Ladies",
        "H",
        null,
        null,
        null,
        78.8262695
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        75.6280193
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "NT-C-Ladies",
        "H",
        null,
        null,
        null,
        76.4503291
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        86.6485431
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        81.5923479
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "SC",
        "O",
        null,
        null,
        null,
        83.1030453
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "VJ/DT",
        "O",
        null,
        null,
        null,
        73.9021728
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "NT-B",
        "O",
        null,
        null,
        null,
        81.9221888
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        85.65358
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        82.9247643
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        49.3545528
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "SC",
        "H",
        null,
        null,
        null,
        79.3692556
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        66.1911263
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "OBC",
        "H",
        null,
        null,
        null,
        83.7431799
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "SEBC",
        "H",
        null,
        null,
        null,
        82.3704723
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        87.2593857
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        80.2462012
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "ST-Ladies",
        "H",
        null,
        null,
        null,
        33.8928203
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        83.2071736
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "PWDOPEN",
        "H",
        null,
        null,
        null,
        2.21843
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "NT-B",
        "O",
        null,
        null,
        null,
        79.5928226
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "NT-C",
        "O",
        null,
        null,
        null,
        79.9864621
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "OBC",
        "O",
        null,
        null,
        null,
        82.9247643
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "SEBC",
        "O",
        null,
        null,
        null,
        82.9428736
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        83.7030299
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        79.4627847
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "NT-A-Ladies",
        "O",
        null,
        null,
        null,
        40.1861311
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        79.3794141
      ],
      [
        "Automation and Robotics",
        "SC",
        "H",
        null,
        null,
        null,
        77.2289819
      ],
      [
        "Automation and Robotics",
        "NT-A",
        "H",
        null,
        null,
        null,
        54.9832594
      ],
      [
        "Automation and Robotics",
        "NT-B",
        "H",
        null,
        null,
        null,
        72.8027463
      ],
      [
        "Automation and Robotics",
        "NT-C",
        "H",
        null,
        null,
        null,
        70.4215645
      ],
      [
        "Automation and Robotics",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        81.3607995
      ],
      [
        "Automation and Robotics",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        77.1955616
      ],
      [
        "Automation and Robotics",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        79.6966406
      ],
      [
        "Automation and Robotics",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        78.8983322
      ],
      [
        "Automation and Robotics",
        "SC",
        "O",
        null,
        null,
        null,
        76.5235824
      ],
      [
        "Automation and Robotics",
        "OBC",
        "O",
        null,
        null,
        null,
        78.890785
      ],
      [
        "Automation and Robotics",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        87.7359574
      ],
      [
        "Automation and Robotics",
        "VJ/DT-Ladies",
        "O",
        null,
        null,
        null,
        80.7910924
      ],
      [
        "Automation and Robotics",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        78.8262695
      ],
      [
        "Automation and Robotics",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        54.9832594
      ]
    ],
    "profile": {
      "overview": "M.G.M.'s College of Engineering and Technology is an engineering institute at MGM Educational Campus, Sector 1, Kamothe, Navi Mumbai. The CET Cell lists institute code 03175 and Mumbai University affiliation in its 2026-27 institute summary.",
      "campus": "The institute's 2024 NAAC Self Study Report describes a 17.5-acre campus with about 2 lakh sq. ft. built-up area, 23 classrooms, 2 air-conditioned seminar halls, 40 laboratories, a central computing facility, central library/reading room, 300-seat conference hall and a 2,000-seat open auditorium.",
      "environment": "The institute reports a nature-friendly landscaped campus, Wi-Fi/CCTV and power-backup facilities, indoor and outdoor sports, student clubs, cultural activities and a 'Clean and Green Campus' recognition in its 2024 Self Study Report.",
      "faculty": "The official faculty profile lists Dr. Geeta S. Lathkar (Director), Dr. S. L. Kotgire (Vice-Principal), and department heads including Dr. A. M. Rajurkar (CSE), Dr. M. G. Harkare (Mechanical), Dr. K. P. Jondhale (ECT), Mr. S. A. Hashmi (IT) and Mr. A. K. Hashmi (Civil). The institute also publishes a 2025-26 faculty list in its mandatory disclosure section.",
      "seats": "The official B.Tech page lists 720 regular seats across the listed undergraduate branches, plus 36 TFWS seats and 72 EWS seats (828 including those additional seat categories). Individual regular intakes include Civil 60, CSE 180, IT 120, E&TC 60, Mechanical 60, Automation & Robotics 60, AI & ML 120 and AI & Data Science 60.",
      "fees": "The institute publishes Fees Regulating Authority material; the current approved fee should be checked against the latest FRA notice before admission.",
      "placements": "The official CSE placement page reports 19 CSE students placed with a highest package of ₹10 LPA in 2025-26; it reports 17 students and ₹12.8 LPA in 2024-25. These figures are CSE-specific, not an institute-wide placement percentage.",
      "accreditation": "The official B.Tech intake page marks Civil Engineering, Computer Science and Engineering, Electronics & Telecommunication Engineering and Mechanical Engineering as accredited in its displayed intake table.",
      "facilities": "The institute reports 40 laboratories, central library, computing facilities, AICTE Idea Lab, Innovation and Incubation Laboratories, National Digital Library access, Virtual Laboratory nodal-centre facilities, student clubs, hostel facilities and sports grounds.",
      "admission": "The institute's 2026-27 admission notices cover B.Tech CAP vacancy/institutional-level rounds and direct second-year admissions. The Maharashtra CET Cell controls the centralized CAP process and publishes the official cutoffs and seat matrices.",
      "officialWebsite": "https://www.mgmcen.ac.in/",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03175",
      "sources": [
        "https://www.mgmcen.ac.in/",
        "https://mgmcen.ac.in/under-graduate.html",
        "https://mgmcen.ac.in/trainingandplacement/faculty-profile.html",
        "https://mgmcen.ac.in/trainingandplacement/training-placement.html",
        "https://mgmcen.ac.in/mandatory-disclosure.html",
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03175"
      ]
    }
  },
  {
    "id": "03182",
    "name": "Thadomal Shahani Engineering College",
    "shortName": "TSEC Mumbai",
    "city": "Mumbai",
    "region": "Mumbai",
    "district": "Mumbai",
    "status": "Un-Aided Minority",
    "university": "Mumbai University",
    "branches": [
      "Computer Engineering",
      "Information Technology",
      "Electronics and Telecommunication Engg",
      "Chemical Engineering",
      "AI & Data Science"
    ],
    "cutoffs": [
      [
        "Computer Engineering",
        "OPEN",
        "H",
        99.1425468,
        null,
        null,
        99.095532
      ],
      [
        "Computer Engineering",
        "OPEN",
        "O",
        98.3761272,
        null,
        null,
        98.6898385
      ],
      [
        "Information Technology",
        "OPEN",
        "H",
        99.0970568,
        null,
        null,
        98.996822
      ],
      [
        "Information Technology",
        "OPEN",
        "O",
        98.0818957,
        null,
        null,
        98.3243876
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "H",
        98.7772214,
        null,
        null,
        98.7923974
      ],
      [
        "Electronics and Telecommunication Engg",
        "TFWS",
        "State",
        98.3867855,
        null,
        null,
        null
      ],
      [
        "Chemical Engineering",
        "OPEN",
        "O",
        95.7805094,
        null,
        null,
        97.8812233
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        98.8142711
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        98.2786369
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        98.5909613
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        98.1313859
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        98.5077241
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "O",
        null,
        null,
        null,
        98.5058661
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        98.7019803
      ],
      [
        "Chemical Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        97.940521
      ],
      [
        "Chemical Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        97.8098824
      ],
      [
        "Chemical Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        96.4352588
      ],
      [
        "AI & Data Science",
        "OPEN",
        "H",
        null,
        null,
        null,
        98.909754
      ],
      [
        "AI & Data Science",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        98.4666744
      ],
      [
        "AI & Data Science",
        "OPEN",
        "O",
        null,
        null,
        null,
        98.2986841
      ],
      [
        "AI & Data Science",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        97.7942456
      ]
    ],
    "profile": {
      "overview": "Thadomal Shahani Engineering College is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 03182. Status: Un-Aided Minority. University/affiliation recorded in the CET directory: Mumbai University.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Mumbai, Mumbai, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Un-Aided Minority.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03182",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03182"
      ]
    }
  },
  {
    "id": "03154",
    "name": "Saraswati Education Society's Saraswati College of Engineering",
    "shortName": "Saraswati College of Engineering, Kharghar",
    "city": "Navi Mumbai",
    "region": "Mumbai",
    "district": "Raigad",
    "status": "Un-Aided Autonomous",
    "university": "Mumbai University",
    "branches": [
      "Civil Engineering",
      "Computer Engineering",
      "Information Technology",
      "Mechanical Engineering",
      "Computer Science and Engineering (AI & ML)",
      "Computer Science and Engineering (Data Science)",
      "Automobile Engineering"
    ],
    "cutoffs": [
      [
        "Civil Engineering",
        "OPEN",
        "State",
        76.7952218,
        null,
        null,
        76.3384255
      ],
      [
        "Civil Engineering",
        "ST",
        "State",
        65.2933256,
        null,
        null,
        27.9000459
      ],
      [
        "Civil Engineering",
        "VJ/DT",
        "State",
        66.5942029,
        null,
        null,
        66.0549811
      ],
      [
        "Civil Engineering",
        "OBC",
        "State",
        77.1955616,
        null,
        null,
        69.8506426
      ],
      [
        "Civil Engineering",
        "EWS",
        "State",
        62.5282864,
        null,
        null,
        null
      ],
      [
        "Computer Engineering",
        "OPEN",
        "State",
        88.8293119,
        null,
        null,
        88.9649575
      ],
      [
        "Computer Engineering",
        "SC",
        "State",
        87.6160033,
        null,
        null,
        84.0342981
      ],
      [
        "Computer Engineering",
        "ST",
        "State",
        86.6676057,
        null,
        null,
        16.2056174
      ],
      [
        "Computer Engineering",
        "OBC",
        "State",
        66.1169676,
        null,
        null,
        87.5726309
      ],
      [
        "Computer Engineering",
        "EWS",
        "State",
        88.2583444,
        null,
        null,
        null
      ],
      [
        "Information Technology",
        "OPEN",
        "State",
        86.6676057,
        null,
        null,
        86.8832732
      ],
      [
        "Information Technology",
        "ST",
        "State",
        84.0342981,
        null,
        null,
        20.9233553
      ],
      [
        "Information Technology",
        "OBC",
        "State",
        85.9425358,
        null,
        null,
        84.5795651
      ],
      [
        "Information Technology",
        "EWS",
        "State",
        86.6676057,
        null,
        null,
        null
      ],
      [
        "Mechanical Engineering",
        "ST",
        "State",
        75.6280193,
        null,
        null,
        null
      ],
      [
        "Mechanical Engineering",
        "SEBC",
        "State",
        85.0803043,
        null,
        null,
        69.7621466
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "OPEN",
        "State",
        88.8632429,
        null,
        null,
        87.1247638
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "SC",
        "State",
        84.3786315,
        null,
        null,
        81.5923479
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "ST",
        "State",
        78.9492107,
        null,
        null,
        68.4225402
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "NT-C",
        "State",
        87.1731352,
        null,
        null,
        82.1268327
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "OBC",
        "State",
        87.1731352,
        null,
        null,
        85.1689875
      ],
      [
        "Civil Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        64.7164682
      ],
      [
        "Civil Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        63.2367632
      ],
      [
        "Civil Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        71.1330463
      ],
      [
        "Civil Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        72.8027463
      ],
      [
        "Civil Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        67.2980865
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        76.2668468
      ],
      [
        "Civil Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        64.4305882
      ],
      [
        "Civil Engineering",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        42.3488094
      ],
      [
        "Civil Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        65.3107562
      ],
      [
        "Civil Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        55.7277177
      ],
      [
        "Computer Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        83.8560469
      ],
      [
        "Computer Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        84.4463229
      ],
      [
        "Computer Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        88.5637068
      ],
      [
        "Computer Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        87.4032298
      ],
      [
        "Computer Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        85.2987504
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        89.1791812
      ],
      [
        "Computer Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        82.9763421
      ],
      [
        "Computer Engineering",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        22.3579956
      ],
      [
        "Computer Engineering",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        78.685137
      ],
      [
        "Computer Engineering",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        82.9459739
      ],
      [
        "Computer Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        88.2059917
      ],
      [
        "Computer Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        85.9241674
      ],
      [
        "Computer Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        78.699881
      ],
      [
        "Information Technology",
        "SC",
        "State",
        null,
        null,
        null,
        80.5383458
      ],
      [
        "Information Technology",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        74.6516923
      ],
      [
        "Information Technology",
        "NT-A",
        "State",
        null,
        null,
        null,
        82.4592501
      ],
      [
        "Information Technology",
        "NT-B",
        "State",
        null,
        null,
        null,
        81.9712626
      ],
      [
        "Information Technology",
        "NT-C",
        "State",
        null,
        null,
        null,
        79.4663048
      ],
      [
        "Information Technology",
        "SEBC",
        "State",
        null,
        null,
        null,
        81.2737812
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        87.7884762
      ],
      [
        "Information Technology",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        81.643697
      ],
      [
        "Information Technology",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        76.3172626
      ],
      [
        "Information Technology",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        80.5339227
      ],
      [
        "Information Technology",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        78.0162614
      ],
      [
        "Information Technology",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        85.819156
      ],
      [
        "Information Technology",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        82.3548238
      ],
      [
        "Information Technology",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        17.0157534
      ],
      [
        "Automobile Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        78.3451044
      ],
      [
        "Automobile Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        73.2109713
      ],
      [
        "Automobile Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        72.9906413
      ],
      [
        "Automobile Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        34.8005502
      ],
      [
        "Automobile Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        71.1330463
      ],
      [
        "Automobile Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        51.5429844
      ],
      [
        "Automobile Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        78.733317
      ],
      [
        "Automobile Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        73.2908824
      ],
      [
        "Automobile Engineering",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        69.0271267
      ],
      [
        "Automobile Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        74.75684
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        84.207639
      ],
      [
        "Mechanical Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        74.1334872
      ],
      [
        "Mechanical Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        76.3384255
      ],
      [
        "Mechanical Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        81.2737812
      ],
      [
        "Mechanical Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        67.9203695
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        78.8262695
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        72.9916849
      ],
      [
        "Mechanical Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        71.7660957
      ],
      [
        "Mechanical Engineering",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        52.1191375
      ],
      [
        "Mechanical Engineering",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        47.7838912
      ],
      [
        "Mechanical Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        66.5942029
      ],
      [
        "Mechanical Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        56.5580532
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        71.1330463
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "NT-A",
        "State",
        null,
        null,
        null,
        83.9561363
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "NT-B",
        "State",
        null,
        null,
        null,
        84.9063828
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "SEBC",
        "State",
        null,
        null,
        null,
        81.3607995
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        87.468285
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        80.4716144
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        83.7431799
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        75.8548894
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        83.9283276
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        86.5848999
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        84.4137833
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        66.5496835
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "OPEN",
        "State",
        null,
        null,
        null,
        86.6676057
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "SC",
        "State",
        null,
        null,
        null,
        79.2630446
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "ST",
        "State",
        null,
        null,
        null,
        43.2064159
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        71.1120286
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "NT-A",
        "State",
        null,
        null,
        null,
        83.1707575
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "OBC",
        "State",
        null,
        null,
        null,
        84.539834
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "SEBC",
        "State",
        null,
        null,
        null,
        81.9712626
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        86.8832732
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        77.7384664
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        74.7351841
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        76.5032413
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        85.3469357
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        86.0457957
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        83.6630885
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        68.58833
      ]
    ],
    "profile": {
      "overview": "Saraswati Education Society's Saraswati College of Engineering is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 03154. Status: Un-Aided Autonomous. University/affiliation recorded in the CET directory: Mumbai University.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Navi Mumbai, Raigad, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Un-Aided Autonomous.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03154",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03154"
      ]
    }
  },
  {
    "id": "03176",
    "name": "Thakur College of Engineering and Technology",
    "shortName": "TCET Mumbai",
    "city": "Mumbai",
    "region": "Mumbai",
    "district": "Mumbai",
    "status": "Un-Aided Autonomous Minority",
    "university": "Autonomous Institute",
    "branches": [
      "Computer Science and Engineering (Cyber Security)",
      "Computer Engineering",
      "Information Technology",
      "AI & Data Science",
      "Civil Engineering",
      "Mechanical and Mechatronics Engineering (Additive Manufacturing)",
      "Computer Science and Engineering (IoT)",
      "Electronics and Telecommunication Engg",
      "Mechanical Engineering",
      "Electronics and Computer Science",
      "Artificial Intelligence and Machine Learning"
    ],
    "cutoffs": [
      [
        "Computer Science and Engineering (Cyber Security)",
        "OPEN",
        "State",
        95.5320057,
        null,
        null,
        95.7033017
      ],
      [
        "Computer Science and Engineering (Cyber Security)",
        "OPEN-Ladies",
        "State",
        95.7030198,
        null,
        null,
        95.1990767
      ],
      [
        "Computer Science and Engineering (Cyber Security)",
        "MI",
        "State",
        93.169136,
        null,
        null,
        null
      ],
      [
        "Computer Science and Engineering (Cyber Security)",
        "TFWS",
        "State",
        97.189844,
        null,
        null,
        null
      ],
      [
        "Civil Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        94.2967096
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        93.1635295
      ],
      [
        "Computer Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        97.5701659
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        96.7120842
      ],
      [
        "Information Technology",
        "OPEN",
        "State",
        null,
        null,
        null,
        96.8391244
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        96.0166614
      ],
      [
        "Mechanical and Mechatronics Engineering (Additive Manufacturing)",
        "OPEN",
        "State",
        null,
        null,
        null,
        93.611957
      ],
      [
        "Mechanical and Mechatronics Engineering (Additive Manufacturing)",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        92.0013784
      ],
      [
        "Computer Science and Engineering (IoT)",
        "OPEN",
        "State",
        null,
        null,
        null,
        95.4948805
      ],
      [
        "Computer Science and Engineering (IoT)",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        95.3151853
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "State",
        null,
        null,
        null,
        95.4161223
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        95.4430646
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        96.1725088
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        94.7585145
      ],
      [
        "Electronics and Computer Science",
        "OPEN",
        "State",
        null,
        null,
        null,
        95.3610436
      ],
      [
        "Electronics and Computer Science",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        95.101416
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "OPEN",
        "State",
        null,
        null,
        null,
        96.2707087
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        95.5792202
      ],
      [
        "AI & Data Science",
        "OPEN",
        "State",
        null,
        null,
        null,
        96.0805719
      ],
      [
        "AI & Data Science",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        95.8346459
      ]
    ],
    "profile": {
      "overview": "Thakur College of Engineering and Technology is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 03176. Status: Un-Aided Autonomous Minority. University/affiliation recorded in the CET directory: Autonomous Institute.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Mumbai, Mumbai, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Un-Aided Autonomous Minority.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03176",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03176"
      ]
    }
  },
  {
    "id": "03139",
    "name": "Vidyalankar Institute of Technology",
    "shortName": "VIT Wadala",
    "city": "Mumbai",
    "region": "Mumbai",
    "district": "Mumbai",
    "status": "Un-Aided Autonomous",
    "university": "Autonomous Institute",
    "branches": [
      "Computer Engineering",
      "Electronics and Computer Science",
      "Information Technology",
      "Electronics and Telecommunication Engg",
      "Bio Medical Engineering"
    ],
    "cutoffs": [
      [
        "Computer Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        97.9005056
      ],
      [
        "Electronics and Computer Science",
        "OPEN",
        "State",
        null,
        null,
        null,
        96.4855442
      ],
      [
        "Computer Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        96.0153643
      ],
      [
        "Computer Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        83.1461103
      ],
      [
        "Computer Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        93.7616003
      ],
      [
        "Computer Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        96.7919146
      ],
      [
        "Computer Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        96.8852136
      ],
      [
        "Computer Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        97.2886818
      ],
      [
        "Computer Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        97.628377
      ],
      [
        "Computer Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        96.9378727
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        97.3971254
      ],
      [
        "Computer Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        95.4799
      ],
      [
        "Computer Engineering",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        83.3904312
      ],
      [
        "Computer Engineering",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        96.2246812
      ],
      [
        "Computer Engineering",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        94.6694641
      ],
      [
        "Computer Engineering",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        94.2326904
      ],
      [
        "Computer Engineering",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        96.3494357
      ],
      [
        "Computer Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        96.8345273
      ],
      [
        "Computer Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        97.107136
      ],
      [
        "Computer Engineering",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        81.2524249
      ],
      [
        "Information Technology",
        "OPEN",
        "State",
        null,
        null,
        null,
        97.3155977
      ],
      [
        "Information Technology",
        "SC",
        "State",
        null,
        null,
        null,
        94.6480451
      ],
      [
        "Information Technology",
        "ST",
        "State",
        null,
        null,
        null,
        76.5995199
      ],
      [
        "Information Technology",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        92.1732083
      ],
      [
        "Information Technology",
        "NT-A",
        "State",
        null,
        null,
        null,
        95.9558175
      ],
      [
        "Information Technology",
        "NT-B",
        "State",
        null,
        null,
        null,
        95.8464164
      ],
      [
        "Information Technology",
        "NT-C",
        "State",
        null,
        null,
        null,
        96.2590235
      ],
      [
        "Information Technology",
        "OBC",
        "State",
        null,
        null,
        null,
        96.9232385
      ],
      [
        "Information Technology",
        "SEBC",
        "State",
        null,
        null,
        null,
        96.3555898
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        96.8737201
      ],
      [
        "Information Technology",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        93.9724337
      ],
      [
        "Information Technology",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        76.973775
      ],
      [
        "Information Technology",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        92.67182
      ],
      [
        "Information Technology",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        96.2590235
      ],
      [
        "Information Technology",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        95.4986174
      ],
      [
        "Information Technology",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        96.489538
      ],
      [
        "Information Technology",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        96.489538
      ],
      [
        "Information Technology",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        66.5496835
      ],
      [
        "Information Technology",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        94.2477571
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "State",
        null,
        null,
        null,
        96.3555898
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC",
        "State",
        null,
        null,
        null,
        93.4180802
      ],
      [
        "Electronics and Telecommunication Engg",
        "ST",
        "State",
        null,
        null,
        null,
        78.733317
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        91.1602633
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-A",
        "State",
        null,
        null,
        null,
        95.9447134
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B",
        "State",
        null,
        null,
        null,
        95.662116
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-C",
        "State",
        null,
        null,
        null,
        94.9780988
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC",
        "State",
        null,
        null,
        null,
        95.3858303
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC",
        "State",
        null,
        null,
        null,
        94.5705862
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        96.2623043
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        90.9108002
      ],
      [
        "Electronics and Telecommunication Engg",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        81.9275869
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        87.2152238
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        91.6505265
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        89.8845123
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        95.1740567
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        94.7805374
      ],
      [
        "Electronics and Telecommunication Engg",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        32.5421636
      ],
      [
        "Electronics and Telecommunication Engg",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        92.5689146
      ],
      [
        "Bio Medical Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        92.9222144
      ],
      [
        "Bio Medical Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        87.2248719
      ],
      [
        "Bio Medical Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        63.5901214
      ],
      [
        "Bio Medical Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        85.3230758
      ],
      [
        "Bio Medical Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        79.7046663
      ],
      [
        "Bio Medical Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        83.7986478
      ],
      [
        "Bio Medical Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        90.1398917
      ],
      [
        "Bio Medical Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        89.5432094
      ],
      [
        "Bio Medical Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        86.2729883
      ],
      [
        "Bio Medical Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        94.0618232
      ],
      [
        "Bio Medical Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        89.2347783
      ],
      [
        "Bio Medical Engineering",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        55.3743463
      ],
      [
        "Bio Medical Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        90.4539834
      ],
      [
        "Bio Medical Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        79.4663048
      ],
      [
        "Bio Medical Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        88.9649575
      ],
      [
        "Electronics and Computer Science",
        "SC",
        "State",
        null,
        null,
        null,
        93.4220277
      ],
      [
        "Electronics and Computer Science",
        "ST",
        "State",
        null,
        null,
        null,
        72.3753397
      ],
      [
        "Electronics and Computer Science",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        90.7879085
      ],
      [
        "Electronics and Computer Science",
        "NT-A",
        "State",
        null,
        null,
        null,
        93.1663509
      ],
      [
        "Electronics and Computer Science",
        "NT-B",
        "State",
        null,
        null,
        null,
        95.2882188
      ],
      [
        "Electronics and Computer Science",
        "NT-C",
        "State",
        null,
        null,
        null,
        94.9427415
      ],
      [
        "Electronics and Computer Science",
        "OBC",
        "State",
        null,
        null,
        null,
        95.6935818
      ],
      [
        "Electronics and Computer Science",
        "SEBC",
        "State",
        null,
        null,
        null,
        95.0867052
      ],
      [
        "Electronics and Computer Science",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        96.245889
      ],
      [
        "Electronics and Computer Science",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        91.1602633
      ],
      [
        "Electronics and Computer Science",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        72.6740126
      ],
      [
        "Electronics and Computer Science",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        87.468285
      ],
      [
        "Electronics and Computer Science",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        92.7160749
      ],
      [
        "Electronics and Computer Science",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        88.8600683
      ],
      [
        "Electronics and Computer Science",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        93.169136
      ],
      [
        "Electronics and Computer Science",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        94.8861284
      ],
      [
        "Electronics and Computer Science",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        94.7981886
      ],
      [
        "Electronics and Computer Science",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        61.9042106
      ],
      [
        "Electronics and Computer Science",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        93.3529772
      ]
    ],
    "profile": {
      "overview": "Vidyalankar Institute of Technology is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 03139. Status: Un-Aided Autonomous. University/affiliation recorded in the CET directory: Autonomous Institute.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Mumbai, Mumbai, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Un-Aided Autonomous.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03139",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03139"
      ]
    }
  },
  {
    "id": "03146",
    "name": "Jawahar Education Society's Annasaheb Chudaman Patil College of Engineering",
    "shortName": "ACP Kharghar",
    "city": "Kharghar, Navi Mumbai",
    "region": "Mumbai",
    "district": "Raigad",
    "status": "Un-Aided",
    "university": "Mumbai University",
    "branches": [
      "Computer Engineering",
      "Electrical Engineering",
      "Mechanical Engineering",
      "Artificial Intelligence and Data Science",
      "Aeronautical Engineering",
      "Information Technology",
      "Electronics and Telecommunication Engg",
      "Computer Science and Engineering (Internet of Things and Cyber Security Including Block Chain",
      "AI & Data Science"
    ],
    "cutoffs": [
      [
        "Aeronautical Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        85.21049
      ],
      [
        "Aeronautical Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        76.131941
      ],
      [
        "Aeronautical Engineering",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        31.0015898
      ],
      [
        "Aeronautical Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        75.6051641
      ],
      [
        "Aeronautical Engineering",
        "NT-C",
        "H",
        null,
        null,
        null,
        49.8699585
      ],
      [
        "Aeronautical Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        77.0914416
      ],
      [
        "Aeronautical Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        66.2459959
      ],
      [
        "Aeronautical Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        83.5707404
      ],
      [
        "Aeronautical Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        71.4864246
      ],
      [
        "Aeronautical Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        77.9303712
      ],
      [
        "Aeronautical Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        73.6510161
      ],
      [
        "Aeronautical Engineering",
        "ST",
        "H",
        null,
        null,
        null,
        13.1754171
      ],
      [
        "Aeronautical Engineering",
        "NT-A-Ladies",
        "H",
        null,
        null,
        null,
        78.1913582
      ],
      [
        "Aeronautical Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        88.2603909
      ],
      [
        "Aeronautical Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        76.5032413
      ],
      [
        "Aeronautical Engineering",
        "NT-B",
        "O",
        null,
        null,
        null,
        58.1150221
      ],
      [
        "Aeronautical Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        78.0162614
      ],
      [
        "Aeronautical Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        81.0159708
      ],
      [
        "Aeronautical Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        90.112628
      ],
      [
        "Aeronautical Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        84.8637817
      ],
      [
        "Aeronautical Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        57.8685189
      ],
      [
        "Computer Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        88.2603909
      ],
      [
        "Computer Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        83.1821207
      ],
      [
        "Computer Engineering",
        "ST",
        "H",
        null,
        null,
        null,
        43.1236655
      ],
      [
        "Computer Engineering",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        79.3766715
      ],
      [
        "Computer Engineering",
        "NT-A",
        "H",
        null,
        null,
        null,
        80.2462012
      ],
      [
        "Computer Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        81.2187812
      ],
      [
        "Computer Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        85.3954204
      ],
      [
        "Computer Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        81.9712626
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        88.2737276
      ],
      [
        "Computer Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        86.8832732
      ],
      [
        "Computer Engineering",
        "ST-Ladies",
        "H",
        null,
        null,
        null,
        35.8612172
      ],
      [
        "Computer Engineering",
        "VJ/DT-Ladies",
        "H",
        null,
        null,
        null,
        86.2039517
      ],
      [
        "Computer Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        83.9561363
      ],
      [
        "Computer Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        16.8210201
      ],
      [
        "Computer Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        85.21049
      ],
      [
        "Computer Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        77.8890571
      ],
      [
        "Computer Engineering",
        "ST",
        "O",
        null,
        null,
        null,
        40.369284
      ],
      [
        "Computer Engineering",
        "VJ/DT",
        "O",
        null,
        null,
        null,
        79.5538038
      ],
      [
        "Computer Engineering",
        "NT-A",
        "O",
        null,
        null,
        null,
        80.5383458
      ],
      [
        "Computer Engineering",
        "NT-C",
        "O",
        null,
        null,
        null,
        83.6630885
      ],
      [
        "Computer Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        84.4412567
      ],
      [
        "Computer Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        83.8560469
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        83.6630885
      ],
      [
        "Computer Engineering",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        73.9721817
      ],
      [
        "Computer Engineering",
        "NT-B-Ladies",
        "O",
        null,
        null,
        null,
        77.2143105
      ],
      [
        "Computer Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        80.7910924
      ],
      [
        "Computer Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        56.92563
      ],
      [
        "Information Technology",
        "OPEN",
        "H",
        null,
        null,
        null,
        86.0742045
      ],
      [
        "Information Technology",
        "SC",
        "H",
        null,
        null,
        null,
        78.8724264
      ],
      [
        "Information Technology",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        76.2668468
      ],
      [
        "Information Technology",
        "NT-A",
        "H",
        null,
        null,
        null,
        76.2591061
      ],
      [
        "Information Technology",
        "NT-B",
        "H",
        null,
        null,
        null,
        79.5928226
      ],
      [
        "Information Technology",
        "NT-C",
        "H",
        null,
        null,
        null,
        83.7431799
      ],
      [
        "Information Technology",
        "OBC",
        "H",
        null,
        null,
        null,
        83.988979
      ],
      [
        "Information Technology",
        "SEBC",
        "H",
        null,
        null,
        null,
        80.7910924
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        86.713982
      ],
      [
        "Information Technology",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        81.9275869
      ],
      [
        "Information Technology",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        77.741426
      ],
      [
        "Information Technology",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        84.4137833
      ],
      [
        "Information Technology",
        "OPEN",
        "O",
        null,
        null,
        null,
        81.6127789
      ],
      [
        "Information Technology",
        "SC",
        "O",
        null,
        null,
        null,
        76.5235824
      ],
      [
        "Information Technology",
        "OBC",
        "O",
        null,
        null,
        null,
        79.8369603
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        86.2020083
      ],
      [
        "Information Technology",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        75.242318
      ],
      [
        "Information Technology",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        76.3384255
      ],
      [
        "Information Technology",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        39.9385666
      ],
      [
        "Electrical Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        81.0159708
      ],
      [
        "Electrical Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        60.1814551
      ],
      [
        "Electrical Engineering",
        "ST",
        "H",
        null,
        null,
        null,
        77.3511663
      ],
      [
        "Electrical Engineering",
        "NT-A",
        "H",
        null,
        null,
        null,
        44.6246246
      ],
      [
        "Electrical Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        65.814611
      ],
      [
        "Electrical Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        73.2109713
      ],
      [
        "Electrical Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        74.8088122
      ],
      [
        "Electrical Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        76.6993653
      ],
      [
        "Electrical Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        70.6987601
      ],
      [
        "Electrical Engineering",
        "VJ/DT-Ladies",
        "H",
        null,
        null,
        null,
        72.3251186
      ],
      [
        "Electrical Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        63.4876968
      ],
      [
        "Electrical Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        63.5901214
      ],
      [
        "Electrical Engineering",
        "NT-C-Ladies",
        "H",
        null,
        null,
        null,
        38.0740533
      ],
      [
        "Electrical Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        77.4501436
      ],
      [
        "Electrical Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        74.2209832
      ],
      [
        "Electrical Engineering",
        "NT-B",
        "O",
        null,
        null,
        null,
        48.8548541
      ],
      [
        "Electrical Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        68.6498934
      ],
      [
        "Electrical Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        68.5042436
      ],
      [
        "Electrical Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        73.2041877
      ],
      [
        "Electrical Engineering",
        "ST-Ladies",
        "O",
        null,
        null,
        null,
        68.6031011
      ],
      [
        "Electrical Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        60.9157012
      ],
      [
        "Electrical Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        49.0487536
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "H",
        null,
        null,
        null,
        85.1550148
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC",
        "H",
        null,
        null,
        null,
        79.4627847
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        49.3545528
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B",
        "H",
        null,
        null,
        null,
        76.2668468
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC",
        "H",
        null,
        null,
        null,
        82.4999118
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC",
        "H",
        null,
        null,
        null,
        73.676029
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        83.014142
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        73.2109713
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-A-Ladies",
        "H",
        null,
        null,
        null,
        72.9249982
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        82.1648735
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        80.0260591
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "O",
        null,
        null,
        null,
        82.190886
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC",
        "O",
        null,
        null,
        null,
        81.643697
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC",
        "O",
        null,
        null,
        null,
        80.7035589
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        78.975446
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        66.4794206
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT-Ladies",
        "O",
        null,
        null,
        null,
        62.3077731
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-C-Ladies",
        "O",
        null,
        null,
        null,
        75.1493199
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        78.9492107
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        51.8020478
      ],
      [
        "Electronics and Telecommunication Engg",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        77.7384664
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        79.9864621
      ],
      [
        "Mechanical Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        69.8303637
      ],
      [
        "Mechanical Engineering",
        "ST",
        "H",
        null,
        null,
        null,
        66.0549811
      ],
      [
        "Mechanical Engineering",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        41.0952232
      ],
      [
        "Mechanical Engineering",
        "NT-C",
        "H",
        null,
        null,
        null,
        65.814611
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        74.9893249
      ],
      [
        "Mechanical Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        67.9621973
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        75.1493199
      ],
      [
        "Mechanical Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        52.1256716
      ],
      [
        "Mechanical Engineering",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        56.5182885
      ],
      [
        "Mechanical Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        61.5912113
      ],
      [
        "Mechanical Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        59.8130199
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        80.2313072
      ],
      [
        "Mechanical Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        59.7703364
      ],
      [
        "Mechanical Engineering",
        "NT-A",
        "O",
        null,
        null,
        null,
        46.3536656
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        71.2894525
      ],
      [
        "Mechanical Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        70.3901803
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        63.5035466
      ],
      [
        "Mechanical Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        58.4262318
      ],
      [
        "Mechanical Engineering",
        "NT-B",
        "O",
        null,
        null,
        null,
        77.1955616
      ],
      [
        "Computer Science and Engineering (Internet of Things and Cyber Security Including Block Chain",
        "OPEN",
        "H",
        null,
        null,
        null,
        85.3954204
      ],
      [
        "Computer Science and Engineering (Internet of Things and Cyber Security Including Block Chain",
        "SC",
        "H",
        null,
        null,
        null,
        78.3451044
      ],
      [
        "Computer Science and Engineering (Internet of Things and Cyber Security Including Block Chain",
        "NT-A",
        "H",
        null,
        null,
        null,
        75.9291421
      ],
      [
        "Computer Science and Engineering (Internet of Things and Cyber Security Including Block Chain",
        "NT-B",
        "H",
        null,
        null,
        null,
        76.973775
      ],
      [
        "Computer Science and Engineering (Internet of Things and Cyber Security Including Block Chain",
        "NT-C",
        "H",
        null,
        null,
        null,
        82.7018873
      ],
      [
        "Computer Science and Engineering (Internet of Things and Cyber Security Including Block Chain",
        "OBC",
        "H",
        null,
        null,
        null,
        84.0342981
      ],
      [
        "Computer Science and Engineering (Internet of Things and Cyber Security Including Block Chain",
        "SEBC",
        "H",
        null,
        null,
        null,
        82.4999118
      ],
      [
        "Computer Science and Engineering (Internet of Things and Cyber Security Including Block Chain",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        85.65358
      ],
      [
        "Computer Science and Engineering (Internet of Things and Cyber Security Including Block Chain",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        74.75684
      ],
      [
        "Computer Science and Engineering (Internet of Things and Cyber Security Including Block Chain",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        84.0342981
      ],
      [
        "Computer Science and Engineering (Internet of Things and Cyber Security Including Block Chain",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        84.1149833
      ],
      [
        "Computer Science and Engineering (Internet of Things and Cyber Security Including Block Chain",
        "ST",
        "H",
        null,
        null,
        null,
        58.235114
      ],
      [
        "Computer Science and Engineering (Internet of Things and Cyber Security Including Block Chain",
        "OPEN",
        "O",
        null,
        null,
        null,
        83.7134808
      ],
      [
        "Computer Science and Engineering (Internet of Things and Cyber Security Including Block Chain",
        "SC",
        "O",
        null,
        null,
        null,
        82.3704723
      ],
      [
        "Computer Science and Engineering (Internet of Things and Cyber Security Including Block Chain",
        "VJ/DT",
        "O",
        null,
        null,
        null,
        53.7903103
      ],
      [
        "Computer Science and Engineering (Internet of Things and Cyber Security Including Block Chain",
        "OBC",
        "O",
        null,
        null,
        null,
        81.6656822
      ],
      [
        "Computer Science and Engineering (Internet of Things and Cyber Security Including Block Chain",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        87.5957229
      ],
      [
        "Computer Science and Engineering (Internet of Things and Cyber Security Including Block Chain",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        69.8418157
      ],
      [
        "Computer Science and Engineering (Internet of Things and Cyber Security Including Block Chain",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        76.4503291
      ],
      [
        "AI & Data Science",
        "OPEN",
        "H",
        null,
        null,
        null,
        86.3505412
      ],
      [
        "AI & Data Science",
        "SC",
        "H",
        null,
        null,
        null,
        79.3692556
      ],
      [
        "AI & Data Science",
        "ST",
        "H",
        null,
        null,
        null,
        40.4581492
      ],
      [
        "AI & Data Science",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        70.4097117
      ],
      [
        "AI & Data Science",
        "NT-A",
        "H",
        null,
        null,
        null,
        76.3172626
      ],
      [
        "AI & Data Science",
        "NT-B",
        "H",
        null,
        null,
        null,
        79.5928226
      ],
      [
        "AI & Data Science",
        "OBC",
        "H",
        null,
        null,
        null,
        83.8560469
      ],
      [
        "AI & Data Science",
        "SEBC",
        "H",
        null,
        null,
        null,
        82.4780187
      ],
      [
        "AI & Data Science",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        88.070986
      ],
      [
        "AI & Data Science",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        81.2365306
      ],
      [
        "AI & Data Science",
        "VJ/DT-Ladies",
        "H",
        null,
        null,
        null,
        58.1324148
      ],
      [
        "AI & Data Science",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        79.9864621
      ],
      [
        "AI & Data Science",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        84.4467601
      ],
      [
        "AI & Data Science",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        83.4527296
      ],
      [
        "AI & Data Science",
        "OPEN",
        "O",
        null,
        null,
        null,
        82.9464759
      ],
      [
        "AI & Data Science",
        "SC",
        "O",
        null,
        null,
        null,
        76.5032413
      ],
      [
        "AI & Data Science",
        "NT-A",
        "O",
        null,
        null,
        null,
        77.2289819
      ],
      [
        "AI & Data Science",
        "NT-B",
        "O",
        null,
        null,
        null,
        81.9275869
      ],
      [
        "AI & Data Science",
        "NT-C",
        "O",
        null,
        null,
        null,
        79.0264353
      ],
      [
        "AI & Data Science",
        "OBC",
        "O",
        null,
        null,
        null,
        82.5741649
      ],
      [
        "AI & Data Science",
        "SEBC",
        "O",
        null,
        null,
        null,
        81.3283933
      ],
      [
        "AI & Data Science",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        85.1550148
      ],
      [
        "AI & Data Science",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        84.3204501
      ],
      [
        "AI & Data Science",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        61.7346759
      ]
    ],
    "profile": {
      "overview": "Jawahar Education Society's Annasaheb Chudaman Patil College of Engineering is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 03146. Status: Un-Aided. University/affiliation recorded in the CET directory: Mumbai University.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Kharghar, Navi Mumbai, Raigad, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Un-Aided.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03146",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03146"
      ]
    }
  },
  {
    "id": "03012",
    "name": "Veermata Jijabai Technological Institute (VJTI)",
    "shortName": "VJTI Mumbai",
    "city": "Matunga, Mumbai",
    "region": "Mumbai",
    "district": "Mumbai",
    "status": "Government-Aided Autonomous",
    "university": "Autonomous Institute",
    "branches": [
      "Civil Engineering",
      "Information Technology",
      "Electronics Engineering",
      "Computer Engineering",
      "Electrical Engineering",
      "Electronics and Telecommunication Engg",
      "Mechanical Engineering",
      "Production Engineering[Sandwich]",
      "Textile Technology"
    ],
    "cutoffs": [
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "State",
        98.4399761,
        null,
        null,
        98.4497019
      ],
      [
        "Civil Engineering",
        "OBC-Ladies",
        "State",
        97.3413057,
        null,
        null,
        97.7312329
      ],
      [
        "Civil Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        98.9878776
      ],
      [
        "Civil Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        96.4927019
      ],
      [
        "Civil Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        90.1398917
      ],
      [
        "Civil Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        97.545444
      ],
      [
        "Civil Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        98.0971721
      ],
      [
        "Civil Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        98.3371048
      ],
      [
        "Civil Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        98.6682994
      ],
      [
        "Civil Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        98.3819921
      ],
      [
        "Civil Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        94.6959625
      ],
      [
        "Civil Engineering",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        90.9612775
      ],
      [
        "Civil Engineering",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        96.3008972
      ],
      [
        "Civil Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        98.0106799
      ],
      [
        "Civil Engineering",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        81.0159708
      ],
      [
        "Civil Engineering",
        "PWDOBC",
        "State",
        null,
        null,
        null,
        75.242318
      ],
      [
        "Civil Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        95.8346459
      ],
      [
        "Computer Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        99.9923062
      ],
      [
        "Computer Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        99.3943022
      ],
      [
        "Computer Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        98.1399096
      ],
      [
        "Computer Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        99.9794281
      ],
      [
        "Computer Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        99.8274672
      ],
      [
        "Computer Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        99.9541236
      ],
      [
        "Computer Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        99.9828568
      ],
      [
        "Computer Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        99.8766907
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        99.9726962
      ],
      [
        "Computer Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        98.7189844
      ],
      [
        "Computer Engineering",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        96.7919146
      ],
      [
        "Computer Engineering",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        98.6682994
      ],
      [
        "Computer Engineering",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        99.4867045
      ],
      [
        "Computer Engineering",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        99.295478
      ],
      [
        "Computer Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        99.8385509
      ],
      [
        "Computer Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        99.7986222
      ],
      [
        "Computer Engineering",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        99.112515
      ],
      [
        "Computer Engineering",
        "PWDOBC",
        "State",
        null,
        null,
        null,
        97.2159208
      ],
      [
        "Computer Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        86.2729883
      ],
      [
        "Information Technology",
        "OPEN",
        "State",
        null,
        null,
        null,
        99.9571751
      ],
      [
        "Information Technology",
        "SC",
        "State",
        null,
        null,
        null,
        99.0390182
      ],
      [
        "Information Technology",
        "ST",
        "State",
        null,
        null,
        null,
        96.21834
      ],
      [
        "Information Technology",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        99.5446196
      ],
      [
        "Information Technology",
        "NT-B",
        "State",
        null,
        null,
        null,
        99.7440441
      ],
      [
        "Information Technology",
        "NT-C",
        "State",
        null,
        null,
        null,
        99.9076746
      ],
      [
        "Information Technology",
        "OBC",
        "State",
        null,
        null,
        null,
        99.8424652
      ],
      [
        "Information Technology",
        "SEBC",
        "State",
        null,
        null,
        null,
        99.8242396
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        99.8941313
      ],
      [
        "Information Technology",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        98.4296784
      ],
      [
        "Information Technology",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        94.9430074
      ],
      [
        "Information Technology",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        99.0970568
      ],
      [
        "Information Technology",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        99.2298181
      ],
      [
        "Information Technology",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        99.7282714
      ],
      [
        "Information Technology",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        99.6583984
      ],
      [
        "Information Technology",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        98.0748364
      ],
      [
        "Information Technology",
        "PWDOBC",
        "State",
        null,
        null,
        null,
        94.9572138
      ],
      [
        "Information Technology",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        74.6217331
      ],
      [
        "Electrical Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        99.6454857
      ],
      [
        "Electrical Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        97.3971254
      ],
      [
        "Electrical Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        91.7858261
      ],
      [
        "Electrical Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        98.2533366
      ],
      [
        "Electrical Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        98.6206102
      ],
      [
        "Electrical Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        98.9525497
      ],
      [
        "Electrical Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        99.1425468
      ],
      [
        "Electrical Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        99.4488606
      ],
      [
        "Electrical Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        99.2052023
      ],
      [
        "Electrical Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        99.4677796
      ],
      [
        "Electrical Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        96.4373935
      ],
      [
        "Electrical Engineering",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        91.7858261
      ],
      [
        "Electrical Engineering",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        98.4569438
      ],
      [
        "Electrical Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        99.1510977
      ],
      [
        "Electrical Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        98.9173025
      ],
      [
        "Electrical Engineering",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        90.5979613
      ],
      [
        "Electrical Engineering",
        "PWDOBC",
        "State",
        null,
        null,
        null,
        83.5700884
      ],
      [
        "Electrical Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        99.2177086
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "State",
        null,
        null,
        null,
        99.8962576
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC",
        "State",
        null,
        null,
        null,
        98.6612515
      ],
      [
        "Electronics and Telecommunication Engg",
        "ST",
        "State",
        null,
        null,
        null,
        94.6595693
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        99.1627842
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-A",
        "State",
        null,
        null,
        null,
        98.9382574
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B",
        "State",
        null,
        null,
        null,
        99.2854994
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC",
        "State",
        null,
        null,
        null,
        99.7057484
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC",
        "State",
        null,
        null,
        null,
        99.6089049
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        99.7310382
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        97.7924434
      ],
      [
        "Electronics and Telecommunication Engg",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        91.0387255
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        98.8613195
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        98.7438472
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        99.548187
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        99.5111353
      ],
      [
        "Electronics and Telecommunication Engg",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        95.2289207
      ],
      [
        "Electronics and Telecommunication Engg",
        "PWDOBC",
        "State",
        null,
        null,
        null,
        89.5592458
      ],
      [
        "Electronics and Telecommunication Engg",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        90.5012991
      ],
      [
        "Electronics Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        99.7860594
      ],
      [
        "Electronics Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        98.0547198
      ],
      [
        "Electronics Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        93.4491576
      ],
      [
        "Electronics Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        98.7772214
      ],
      [
        "Electronics Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        99.0001766
      ],
      [
        "Electronics Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        99.6091136
      ],
      [
        "Electronics Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        99.6185118
      ],
      [
        "Electronics Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        99.4960569
      ],
      [
        "Electronics Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        99.6456097
      ],
      [
        "Electronics Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        96.9644681
      ],
      [
        "Electronics Engineering",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        87.7370373
      ],
      [
        "Electronics Engineering",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        97.628377
      ],
      [
        "Electronics Engineering",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        99.057971
      ],
      [
        "Electronics Engineering",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        98.8167764
      ],
      [
        "Electronics Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        99.2275145
      ],
      [
        "Electronics Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        99.2510157
      ],
      [
        "Electronics Engineering",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        95.1347459
      ],
      [
        "Electronics Engineering",
        "PWDOBC",
        "State",
        null,
        null,
        null,
        85.9241674
      ],
      [
        "Electronics Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        99.4020758
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        99.6185118
      ],
      [
        "Mechanical Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        97.3413057
      ],
      [
        "Mechanical Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        90.5491967
      ],
      [
        "Mechanical Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        97.6978518
      ],
      [
        "Mechanical Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        98.6166496
      ],
      [
        "Mechanical Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        98.7109722
      ],
      [
        "Mechanical Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        99.1183262
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        99.3737606
      ],
      [
        "Mechanical Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        99.1388387
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        99.2474239
      ],
      [
        "Mechanical Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        95.4873006
      ],
      [
        "Mechanical Engineering",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        87.2636301
      ],
      [
        "Mechanical Engineering",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        97.8761672
      ],
      [
        "Mechanical Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        98.8107514
      ],
      [
        "Mechanical Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        98.6956522
      ],
      [
        "Mechanical Engineering",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        85.9106165
      ],
      [
        "Mechanical Engineering",
        "PWDOBC",
        "State",
        null,
        null,
        null,
        79.8369603
      ],
      [
        "Mechanical Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        98.044541
      ],
      [
        "Production Engineering[Sandwich]",
        "OPEN",
        "State",
        null,
        null,
        null,
        98.9897444
      ],
      [
        "Production Engineering[Sandwich]",
        "SC",
        "State",
        null,
        null,
        null,
        95.1447135
      ],
      [
        "Production Engineering[Sandwich]",
        "ST",
        "State",
        null,
        null,
        null,
        83.73706
      ],
      [
        "Production Engineering[Sandwich]",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        95.1406289
      ],
      [
        "Production Engineering[Sandwich]",
        "NT-B",
        "State",
        null,
        null,
        null,
        97.7594015
      ],
      [
        "Production Engineering[Sandwich]",
        "NT-C",
        "State",
        null,
        null,
        null,
        97.3791828
      ],
      [
        "Production Engineering[Sandwich]",
        "OBC",
        "State",
        null,
        null,
        null,
        98.626659
      ],
      [
        "Production Engineering[Sandwich]",
        "SEBC",
        "State",
        null,
        null,
        null,
        98.4431408
      ],
      [
        "Production Engineering[Sandwich]",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        98.5168677
      ],
      [
        "Production Engineering[Sandwich]",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        92.7564924
      ],
      [
        "Production Engineering[Sandwich]",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        89.5592458
      ],
      [
        "Production Engineering[Sandwich]",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        90.8211878
      ],
      [
        "Production Engineering[Sandwich]",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        94.7041159
      ],
      [
        "Production Engineering[Sandwich]",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        91.0982881
      ],
      [
        "Production Engineering[Sandwich]",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        97.545444
      ],
      [
        "Production Engineering[Sandwich]",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        97.510102
      ],
      [
        "Production Engineering[Sandwich]",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        59.2124434
      ],
      [
        "Production Engineering[Sandwich]",
        "PWDOBC",
        "State",
        null,
        null,
        null,
        43.6669107
      ],
      [
        "Production Engineering[Sandwich]",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        96.5565559
      ],
      [
        "Textile Technology",
        "OPEN",
        "State",
        null,
        null,
        null,
        98.297856
      ],
      [
        "Textile Technology",
        "SC",
        "State",
        null,
        null,
        null,
        94.2160225
      ],
      [
        "Textile Technology",
        "ST",
        "State",
        null,
        null,
        null,
        76.5235824
      ],
      [
        "Textile Technology",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        93.3319332
      ],
      [
        "Textile Technology",
        "NT-A",
        "State",
        null,
        null,
        null,
        96.7001378
      ],
      [
        "Textile Technology",
        "NT-B",
        "State",
        null,
        null,
        null,
        94.5936573
      ],
      [
        "Textile Technology",
        "NT-C",
        "State",
        null,
        null,
        null,
        96.3008972
      ],
      [
        "Textile Technology",
        "OBC",
        "State",
        null,
        null,
        null,
        96.9840554
      ],
      [
        "Textile Technology",
        "SEBC",
        "State",
        null,
        null,
        null,
        96.8016647
      ],
      [
        "Textile Technology",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        97.4393346
      ],
      [
        "Textile Technology",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        92.1611438
      ],
      [
        "Textile Technology",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        76.5995199
      ],
      [
        "Textile Technology",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        90.651656
      ],
      [
        "Textile Technology",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        95.2778203
      ],
      [
        "Textile Technology",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        96.0852595
      ],
      [
        "Textile Technology",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        96.8479282
      ],
      [
        "Textile Technology",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        86.560206
      ],
      [
        "Textile Technology",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        94.2477571
      ]
    ],
    "profile": {
      "overview": "Veermata Jijabai Technological Institute (VJTI) is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 03012. Status: Government-Aided Autonomous. University/affiliation recorded in the CET directory: Autonomous Institute.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Matunga, Mumbai, Mumbai, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Government-Aided Autonomous.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03012",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03012"
      ]
    }
  },
  {
    "id": "06175",
    "name": "Pimpri Chinchwad College of Engineering, Pune",
    "shortName": "PCCOE Pune",
    "city": "Pimpri-Chinchwad, Pune",
    "region": "Pune",
    "district": "Pune",
    "status": "Un-Aided Autonomous",
    "university": "Autonomous Institute",
    "branches": [
      "Civil Engineering",
      "Information Technology",
      "Computer Engineering",
      "Electronics and Telecommunication",
      "Electronics and Telecommunication Engg",
      "Electronics Engineering ( VLSI Design and Technology)",
      "Mechanical Engineering",
      "Computer Science and Engineering (AI & ML)"
    ],
    "cutoffs": [
      [
        "Civil Engineering",
        "OPEN",
        "State",
        97.2067626,
        null,
        null,
        96.1068782
      ],
      [
        "Civil Engineering",
        "OBC",
        "State",
        97.2027972,
        null,
        null,
        95.0068259
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "State",
        96.4449717,
        null,
        null,
        96.3494357
      ],
      [
        "Civil Engineering",
        "OBC-Ladies",
        "State",
        95.5792202,
        null,
        null,
        95.6987601
      ],
      [
        "Civil Engineering",
        "EWS",
        "State",
        91.7989964,
        null,
        null,
        null
      ],
      [
        "Civil Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        91.6505265
      ],
      [
        "Civil Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        71.0421393
      ],
      [
        "Civil Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        90.4512103
      ],
      [
        "Civil Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        94.3906546
      ],
      [
        "Civil Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        96.6285136
      ],
      [
        "Civil Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        89.1014047
      ],
      [
        "Civil Engineering",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        77.8612083
      ],
      [
        "Civil Engineering",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        91.1718238
      ],
      [
        "Civil Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        95.5511974
      ],
      [
        "Civil Engineering",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        77.2289819
      ],
      [
        "Civil Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        91.7505571
      ],
      [
        "Civil Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        92.8822002
      ],
      [
        "Computer Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        98.5473765
      ],
      [
        "Computer Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        95.4702014
      ],
      [
        "Computer Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        89.2347783
      ],
      [
        "Computer Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        96.0805719
      ],
      [
        "Computer Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        97.5899394
      ],
      [
        "Computer Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        98.5075769
      ],
      [
        "Computer Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        98.7035739
      ],
      [
        "Computer Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        98.4446702
      ],
      [
        "Computer Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        98.3622982
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        98.5153584
      ],
      [
        "Computer Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        94.3667284
      ],
      [
        "Computer Engineering",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        82.4850758
      ],
      [
        "Computer Engineering",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        96.4033308
      ],
      [
        "Computer Engineering",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        97.6794304
      ],
      [
        "Computer Engineering",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        97.1344765
      ],
      [
        "Computer Engineering",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        97.1023891
      ],
      [
        "Computer Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        98.2505176
      ],
      [
        "Computer Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        98.435333
      ],
      [
        "Computer Engineering",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        84.3808448
      ],
      [
        "Computer Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        94.9817832
      ],
      [
        "Information Technology",
        "OPEN",
        "State",
        null,
        null,
        null,
        98.7109722
      ],
      [
        "Information Technology",
        "SC",
        "State",
        null,
        null,
        null,
        95.6149583
      ],
      [
        "Information Technology",
        "ST",
        "State",
        null,
        null,
        null,
        84.3786315
      ],
      [
        "Information Technology",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        96.2707087
      ],
      [
        "Information Technology",
        "NT-A",
        "State",
        null,
        null,
        null,
        97.6984554
      ],
      [
        "Information Technology",
        "NT-B",
        "State",
        null,
        null,
        null,
        98.2788178
      ],
      [
        "Information Technology",
        "NT-C",
        "State",
        null,
        null,
        null,
        98.5404249
      ],
      [
        "Information Technology",
        "OBC",
        "State",
        null,
        null,
        null,
        98.5909613
      ],
      [
        "Information Technology",
        "SEBC",
        "State",
        null,
        null,
        null,
        98.5058661
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        98.4154992
      ],
      [
        "Information Technology",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        94.7041159
      ],
      [
        "Information Technology",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        88.8293119
      ],
      [
        "Information Technology",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        95.662116
      ],
      [
        "Information Technology",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        96.5496042
      ],
      [
        "Information Technology",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        97.6794304
      ],
      [
        "Information Technology",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        98.3131595
      ],
      [
        "Information Technology",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        97.9193354
      ],
      [
        "Information Technology",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        77.1955616
      ],
      [
        "Information Technology",
        "PWDOBC",
        "State",
        null,
        null,
        null,
        70.3402566
      ],
      [
        "Information Technology",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        96.3722342
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "State",
        null,
        null,
        null,
        98.3131595
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC",
        "State",
        null,
        null,
        null,
        94.1913399
      ],
      [
        "Electronics and Telecommunication Engg",
        "ST",
        "State",
        null,
        null,
        null,
        74.75684
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        94.9303758
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-A",
        "State",
        null,
        null,
        null,
        96.9378727
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B",
        "State",
        null,
        null,
        null,
        97.3276451
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-C",
        "State",
        null,
        null,
        null,
        97.4288016
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC",
        "State",
        null,
        null,
        null,
        98.1672355
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC",
        "State",
        null,
        null,
        null,
        97.9733277
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        98.1734808
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        93.3319332
      ],
      [
        "Electronics and Telecommunication Engg",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        70.4097117
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        94.6694641
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        93.9374669
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        97.0532519
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        97.7345783
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        97.6829141
      ],
      [
        "Electronics and Telecommunication Engg",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        76.131941
      ],
      [
        "Electronics and Telecommunication Engg",
        "PWDOBC",
        "State",
        null,
        null,
        null,
        56.5182885
      ],
      [
        "Electronics and Telecommunication Engg",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        95.7804433
      ],
      [
        "Electronics Engineering ( VLSI Design and Technology)",
        "OPEN",
        "State",
        null,
        null,
        null,
        97.9611464
      ],
      [
        "Electronics Engineering ( VLSI Design and Technology)",
        "SC",
        "State",
        null,
        null,
        null,
        94.0668068
      ],
      [
        "Electronics Engineering ( VLSI Design and Technology)",
        "ST",
        "State",
        null,
        null,
        null,
        73.0237189
      ],
      [
        "Electronics Engineering ( VLSI Design and Technology)",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        93.1261047
      ],
      [
        "Electronics Engineering ( VLSI Design and Technology)",
        "NT-A",
        "State",
        null,
        null,
        null,
        95.5358718
      ],
      [
        "Electronics Engineering ( VLSI Design and Technology)",
        "OBC",
        "State",
        null,
        null,
        null,
        97.7474428
      ],
      [
        "Electronics Engineering ( VLSI Design and Technology)",
        "SEBC",
        "State",
        null,
        null,
        null,
        97.5890264
      ],
      [
        "Electronics Engineering ( VLSI Design and Technology)",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        97.7919096
      ],
      [
        "Electronics Engineering ( VLSI Design and Technology)",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        90.9108002
      ],
      [
        "Electronics Engineering ( VLSI Design and Technology)",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        95.9433601
      ],
      [
        "Electronics Engineering ( VLSI Design and Technology)",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        93.7276356
      ],
      [
        "Electronics Engineering ( VLSI Design and Technology)",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        97.5427973
      ],
      [
        "Electronics Engineering ( VLSI Design and Technology)",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        96.9615697
      ],
      [
        "Electronics Engineering ( VLSI Design and Technology)",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        34.0437095
      ],
      [
        "Electronics Engineering ( VLSI Design and Technology)",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        96.1741748
      ],
      [
        "Electronics Engineering ( VLSI Design and Technology)",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        97.8098824
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        97.7130906
      ],
      [
        "Mechanical Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        92.1789653
      ],
      [
        "Mechanical Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        78.9956692
      ],
      [
        "Mechanical Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        92.8705176
      ],
      [
        "Mechanical Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        95.4430646
      ],
      [
        "Mechanical Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        96.1393231
      ],
      [
        "Mechanical Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        95.4901686
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        97.148562
      ],
      [
        "Mechanical Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        97.107136
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        97.0287935
      ],
      [
        "Mechanical Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        88.986683
      ],
      [
        "Mechanical Engineering",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        49.0487536
      ],
      [
        "Mechanical Engineering",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        87.1247638
      ],
      [
        "Mechanical Engineering",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        93.0429397
      ],
      [
        "Mechanical Engineering",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        93.158138
      ],
      [
        "Mechanical Engineering",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        92.9781315
      ],
      [
        "Mechanical Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        96.2537463
      ],
      [
        "Mechanical Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        96.2623043
      ],
      [
        "Mechanical Engineering",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        33.1537425
      ],
      [
        "Mechanical Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        91.6272372
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "OPEN",
        "State",
        null,
        null,
        null,
        98.644561
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "SC",
        "State",
        null,
        null,
        null,
        95.862761
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "ST",
        "State",
        null,
        null,
        null,
        84.207639
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        96.6956121
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "NT-A",
        "State",
        null,
        null,
        null,
        97.6103268
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "NT-B",
        "State",
        null,
        null,
        null,
        98.2533366
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "NT-C",
        "State",
        null,
        null,
        null,
        98.4569438
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "OBC",
        "State",
        null,
        null,
        null,
        98.5077241
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "SEBC",
        "State",
        null,
        null,
        null,
        98.4325799
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        98.4310487
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        94.9817832
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        82.7018873
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        96.3170599
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        96.787533
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        98.3477163
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        97.8881988
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        89.1809567
      ]
    ],
    "profile": {
      "overview": "Pimpri Chinchwad College of Engineering, Pune is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 06175. Status: Un-Aided Autonomous. University/affiliation recorded in the CET directory: Autonomous Institute.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Pimpri-Chinchwad, Pune, Pune, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Un-Aided Autonomous.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=06175",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=06175"
      ]
    }
  },
  {
    "id": "01012",
    "name": "Government College of Engineering, Yavatmal",
    "shortName": "GCOEY Yavatmal",
    "city": "Yavatmal",
    "region": "Other Maharashtra",
    "district": "Yavatmal",
    "status": "Government",
    "university": "Sant Gadge Baba Amravati University",
    "branches": [
      "Civil Engineering",
      "Computer Engineering",
      "Electrical Engineering",
      "Electronics and Telecommunication Engg",
      "Mechanical Engineering"
    ],
    "cutoffs": [
      [
        "Civil Engineering",
        "OPEN",
        "H",
        68.78733,
        null,
        null,
        80.1708014
      ],
      [
        "Civil Engineering",
        "SC",
        "H",
        61.9398096,
        null,
        null,
        72.0579403
      ],
      [
        "Civil Engineering",
        "OBC",
        "H",
        66.5496835,
        null,
        null,
        77.583794
      ],
      [
        "Civil Engineering",
        "OPEN",
        "O",
        81.9137967,
        null,
        null,
        84.4412567
      ],
      [
        "Civil Engineering",
        "SC",
        "O",
        77.937978,
        null,
        null,
        81.4271094
      ],
      [
        "Civil Engineering",
        "OBC",
        "O",
        80.0260591,
        null,
        null,
        84.3396689
      ],
      [
        "Computer Engineering",
        "OPEN",
        "H",
        91.4174744,
        null,
        null,
        87.2593857
      ],
      [
        "Computer Engineering",
        "SC",
        "H",
        81.6705255,
        null,
        null,
        81.9712626
      ],
      [
        "Computer Engineering",
        "OBC",
        "H",
        80.78157,
        null,
        null,
        86.3032893
      ],
      [
        "Computer Engineering",
        "SEBC",
        "H",
        60.5118338,
        null,
        null,
        82.3454058
      ],
      [
        "Computer Engineering",
        "OPEN",
        "O",
        89.5593612,
        null,
        null,
        92.0615223
      ],
      [
        "Computer Engineering",
        "SC",
        "O",
        83.9283276,
        null,
        null,
        85.2566749
      ],
      [
        "Computer Engineering",
        "ST",
        "O",
        83.8560469,
        null,
        null,
        57.6578681
      ],
      [
        "Civil Engineering",
        "ST",
        "H",
        null,
        null,
        null,
        29.612695
      ],
      [
        "Civil Engineering",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        75.2331528
      ],
      [
        "Civil Engineering",
        "NT-A",
        "H",
        null,
        null,
        null,
        70.3444621
      ],
      [
        "Civil Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        73.3487346
      ],
      [
        "Civil Engineering",
        "NT-C",
        "H",
        null,
        null,
        null,
        76.4346337
      ],
      [
        "Civil Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        59.0801845
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        80.5793663
      ],
      [
        "Civil Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        68.4225402
      ],
      [
        "Civil Engineering",
        "ST-Ladies",
        "H",
        null,
        null,
        null,
        56.4419991
      ],
      [
        "Civil Engineering",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        68.4225402
      ],
      [
        "Civil Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        79.3692556
      ],
      [
        "Civil Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        62.9339383
      ],
      [
        "Civil Engineering",
        "ST",
        "O",
        null,
        null,
        null,
        74.9893249
      ],
      [
        "Civil Engineering",
        "NT-A",
        "O",
        null,
        null,
        null,
        73.2109713
      ],
      [
        "Civil Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        83.7986478
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        85.65358
      ],
      [
        "Civil Engineering",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        77.937978
      ],
      [
        "Civil Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        85.1550148
      ],
      [
        "Civil Engineering",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        76.2591061
      ],
      [
        "Civil Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        52.0988164
      ],
      [
        "Computer Engineering",
        "ST",
        "H",
        null,
        null,
        null,
        74.112751
      ],
      [
        "Computer Engineering",
        "NT-A",
        "H",
        null,
        null,
        null,
        80.1766472
      ],
      [
        "Computer Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        84.0342981
      ],
      [
        "Computer Engineering",
        "NT-C",
        "H",
        null,
        null,
        null,
        84.3786315
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        88.1468922
      ],
      [
        "Computer Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        87.7370373
      ],
      [
        "Computer Engineering",
        "ST-Ladies",
        "H",
        null,
        null,
        null,
        79.3692556
      ],
      [
        "Computer Engineering",
        "VJ/DT-Ladies",
        "H",
        null,
        null,
        null,
        82.4780187
      ],
      [
        "Computer Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        86.8334686
      ],
      [
        "Computer Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        87.609626
      ],
      [
        "Computer Engineering",
        "PWDOPEN",
        "H",
        null,
        null,
        null,
        36.1833289
      ],
      [
        "Computer Engineering",
        "VJ/DT",
        "O",
        null,
        null,
        null,
        85.1550148
      ],
      [
        "Computer Engineering",
        "NT-B",
        "O",
        null,
        null,
        null,
        91.1552725
      ],
      [
        "Computer Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        90.8237951
      ],
      [
        "Computer Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        90.9144237
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        92.9541398
      ],
      [
        "Computer Engineering",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        83.6630885
      ],
      [
        "Computer Engineering",
        "ST-Ladies",
        "O",
        null,
        null,
        null,
        70.6987601
      ],
      [
        "Computer Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        92.2409094
      ],
      [
        "Computer Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        74.112751
      ],
      [
        "Electrical Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        78.9956692
      ],
      [
        "Electrical Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        69.8131691
      ],
      [
        "Electrical Engineering",
        "ST",
        "H",
        null,
        null,
        null,
        32.5248195
      ],
      [
        "Electrical Engineering",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        78.975446
      ],
      [
        "Electrical Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        74.5525612
      ],
      [
        "Electrical Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        75.9743237
      ],
      [
        "Electrical Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        80.1749582
      ],
      [
        "Electrical Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        82.6245527
      ],
      [
        "Electrical Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        62.9339383
      ],
      [
        "Electrical Engineering",
        "ST-Ladies",
        "H",
        null,
        null,
        null,
        41.7129534
      ],
      [
        "Electrical Engineering",
        "NT-A-Ladies",
        "H",
        null,
        null,
        null,
        77.550585
      ],
      [
        "Electrical Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        79.8369603
      ],
      [
        "Electrical Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        54.9832594
      ],
      [
        "Electrical Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        87.2593857
      ],
      [
        "Electrical Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        82.7018873
      ],
      [
        "Electrical Engineering",
        "ST",
        "O",
        null,
        null,
        null,
        63.5303851
      ],
      [
        "Electrical Engineering",
        "VJ/DT",
        "O",
        null,
        null,
        null,
        76.3324995
      ],
      [
        "Electrical Engineering",
        "NT-A",
        "O",
        null,
        null,
        null,
        72.4223602
      ],
      [
        "Electrical Engineering",
        "NT-B",
        "O",
        null,
        null,
        null,
        80.1708014
      ],
      [
        "Electrical Engineering",
        "NT-C",
        "O",
        null,
        null,
        null,
        79.9864621
      ],
      [
        "Electrical Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        86.3505412
      ],
      [
        "Electrical Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        75.9291421
      ],
      [
        "Electrical Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        85.21049
      ],
      [
        "Electrical Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        85.21049
      ],
      [
        "Electrical Engineering",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        71.4142775
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "H",
        null,
        null,
        null,
        83.1030453
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC",
        "H",
        null,
        null,
        null,
        74.8088122
      ],
      [
        "Electronics and Telecommunication Engg",
        "ST",
        "H",
        null,
        null,
        null,
        52.1585439
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        77.9589871
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-A",
        "H",
        null,
        null,
        null,
        73.262321
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B",
        "H",
        null,
        null,
        null,
        72.6740126
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-C",
        "H",
        null,
        null,
        null,
        81.5923479
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC",
        "H",
        null,
        null,
        null,
        81.9221888
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC",
        "H",
        null,
        null,
        null,
        59.0801845
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        81.7199
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        67.458483
      ],
      [
        "Electronics and Telecommunication Engg",
        "ST-Ladies",
        "H",
        null,
        null,
        null,
        15.7457927
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        71.4377156
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-C-Ladies",
        "H",
        null,
        null,
        null,
        78.0816199
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        80.5793663
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        83.1950716
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "O",
        null,
        null,
        null,
        89.9742931
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC",
        "O",
        null,
        null,
        null,
        85.4974574
      ],
      [
        "Electronics and Telecommunication Engg",
        "ST",
        "O",
        null,
        null,
        null,
        51.7178644
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC",
        "O",
        null,
        null,
        null,
        88.5427828
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC",
        "O",
        null,
        null,
        null,
        85.5286474
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        90.5252595
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        86.7003307
      ],
      [
        "Electronics and Telecommunication Engg",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        56.2435713
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        76.7952218
      ],
      [
        "Mechanical Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        64.1499185
      ],
      [
        "Mechanical Engineering",
        "ST",
        "H",
        null,
        null,
        null,
        29.4122187
      ],
      [
        "Mechanical Engineering",
        "NT-A",
        "H",
        null,
        null,
        null,
        70.4097117
      ],
      [
        "Mechanical Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        70.9482593
      ],
      [
        "Mechanical Engineering",
        "NT-C",
        "H",
        null,
        null,
        null,
        70.3444621
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        73.262321
      ],
      [
        "Mechanical Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        76.973775
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        71.1120286
      ],
      [
        "Mechanical Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        64.1240022
      ],
      [
        "Mechanical Engineering",
        "ST-Ladies",
        "H",
        null,
        null,
        null,
        61.9398096
      ],
      [
        "Mechanical Engineering",
        "VJ/DT-Ladies",
        "H",
        null,
        null,
        null,
        66.4794206
      ],
      [
        "Mechanical Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        48.401775
      ],
      [
        "Mechanical Engineering",
        "PWDOPEN",
        "H",
        null,
        null,
        null,
        11.1302155
      ],
      [
        "Mechanical Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        70.4215645
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        86.2729883
      ],
      [
        "Mechanical Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        76.2668468
      ],
      [
        "Mechanical Engineering",
        "ST",
        "O",
        null,
        null,
        null,
        57.8274425
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        85.9003507
      ],
      [
        "Mechanical Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        80.5383458
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        84.3396689
      ],
      [
        "Mechanical Engineering",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        76.3324995
      ],
      [
        "Mechanical Engineering",
        "ST-Ladies",
        "O",
        null,
        null,
        null,
        28.7105475
      ],
      [
        "Mechanical Engineering",
        "NT-B-Ladies",
        "O",
        null,
        null,
        null,
        63.552865
      ],
      [
        "Mechanical Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        82.4999118
      ],
      [
        "Mechanical Engineering",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        76.4503291
      ],
      [
        "Mechanical Engineering",
        "VJ/DT-Ladies",
        "O",
        null,
        null,
        null,
        55.7542662
      ],
      [
        "Mechanical Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        70.9390112
      ]
    ],
    "profile": {
      "overview": "Government College of Engineering, Yavatmal is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 01012. Status: Government. University/affiliation recorded in the CET directory: Sant Gadge Baba Amravati University.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Yavatmal, Yavatmal, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Government.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=01012",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=01012"
      ]
    }
  },
  {
    "id": "01101",
    "name": "Shri Sant Gajanan Maharaj College of Engineering, Shegaon",
    "shortName": "SSGMCE Shegaon",
    "city": "Shegaon",
    "region": "Other Maharashtra",
    "district": "Buldhana",
    "status": "Un-Aided Autonomous",
    "university": "Autonomous Institute",
    "branches": [
      "Computer Science and Engineering",
      "Information Technology",
      "Electrical Engineering (Electronics and Power)",
      "Electronics and Telecommunication Engg",
      "Mechanical Engineering"
    ],
    "cutoffs": [
      [
        "Computer Science and Engineering",
        "OPEN",
        "State",
        99.0382766,
        null,
        null,
        93.8558913
      ],
      [
        "Computer Science and Engineering",
        "SC",
        "State",
        90.1262916,
        null,
        null,
        86.5951005
      ],
      [
        "Computer Science and Engineering",
        "OBC",
        "State",
        96.113225,
        null,
        null,
        93.2955692
      ],
      [
        "Computer Science and Engineering",
        "OPEN-Ladies",
        "State",
        87.7370373,
        null,
        null,
        94.3099035
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "State",
        96.3008972,
        null,
        null,
        90.8566407
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC",
        "State",
        86.2729883,
        null,
        null,
        81.9275869
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "State",
        88.2909271,
        null,
        null,
        87.8970321
      ],
      [
        "Computer Science and Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        56.1183815
      ],
      [
        "Computer Science and Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        89.4256012
      ],
      [
        "Computer Science and Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        90.9727817
      ],
      [
        "Computer Science and Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        92.6165904
      ],
      [
        "Computer Science and Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        91.2331407
      ],
      [
        "Computer Science and Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        89.4256012
      ],
      [
        "Computer Science and Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        86.2660493
      ],
      [
        "Computer Science and Engineering",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        54.9733848
      ],
      [
        "Computer Science and Engineering",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        88.2603909
      ],
      [
        "Computer Science and Engineering",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        93.8417347
      ],
      [
        "Computer Science and Engineering",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        86.3943435
      ],
      [
        "Computer Science and Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        93.7445639
      ],
      [
        "Computer Science and Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        90.6279863
      ],
      [
        "Computer Science and Engineering",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        52.7016685
      ],
      [
        "Computer Science and Engineering",
        "PWDOBC",
        "State",
        null,
        null,
        null,
        48.5585273
      ],
      [
        "Information Technology",
        "OPEN",
        "State",
        null,
        null,
        null,
        92.476754
      ],
      [
        "Information Technology",
        "SC",
        "State",
        null,
        null,
        null,
        85.6921506
      ],
      [
        "Information Technology",
        "ST",
        "State",
        null,
        null,
        null,
        49.1097752
      ],
      [
        "Information Technology",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        87.468285
      ],
      [
        "Information Technology",
        "NT-B",
        "State",
        null,
        null,
        null,
        91.3672693
      ],
      [
        "Information Technology",
        "NT-C",
        "State",
        null,
        null,
        null,
        91.1518015
      ],
      [
        "Information Technology",
        "OBC",
        "State",
        null,
        null,
        null,
        92.1611438
      ],
      [
        "Information Technology",
        "SEBC",
        "State",
        null,
        null,
        null,
        87.5726309
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        93.1663509
      ],
      [
        "Information Technology",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        85.5419841
      ],
      [
        "Information Technology",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        66.5496835
      ],
      [
        "Information Technology",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        84.3786315
      ],
      [
        "Information Technology",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        90.5728815
      ],
      [
        "Information Technology",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        92.9404101
      ],
      [
        "Information Technology",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        88.8632429
      ],
      [
        "Information Technology",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        40.7074872
      ],
      [
        "Information Technology",
        "PWDOBC",
        "State",
        null,
        null,
        null,
        28.7105475
      ],
      [
        "Information Technology",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        75.406809
      ],
      [
        "Electrical Engineering (Electronics and Power)",
        "OPEN",
        "State",
        null,
        null,
        null,
        88.245893
      ],
      [
        "Electrical Engineering (Electronics and Power)",
        "SC",
        "State",
        null,
        null,
        null,
        81.2524249
      ],
      [
        "Electrical Engineering (Electronics and Power)",
        "ST",
        "State",
        null,
        null,
        null,
        12.7454023
      ],
      [
        "Electrical Engineering (Electronics and Power)",
        "NT-A",
        "State",
        null,
        null,
        null,
        82.5187713
      ],
      [
        "Electrical Engineering (Electronics and Power)",
        "NT-B",
        "State",
        null,
        null,
        null,
        81.9381769
      ],
      [
        "Electrical Engineering (Electronics and Power)",
        "NT-C",
        "State",
        null,
        null,
        null,
        88.1535836
      ],
      [
        "Electrical Engineering (Electronics and Power)",
        "OBC",
        "State",
        null,
        null,
        null,
        87.9627325
      ],
      [
        "Electrical Engineering (Electronics and Power)",
        "SEBC",
        "State",
        null,
        null,
        null,
        79.3794141
      ],
      [
        "Electrical Engineering (Electronics and Power)",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        89.935711
      ],
      [
        "Electrical Engineering (Electronics and Power)",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        76.3384255
      ],
      [
        "Electrical Engineering (Electronics and Power)",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        80.2462012
      ],
      [
        "Electrical Engineering (Electronics and Power)",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        72.1871837
      ],
      [
        "Electrical Engineering (Electronics and Power)",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        83.1950716
      ],
      [
        "Electrical Engineering (Electronics and Power)",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        89.0615554
      ],
      [
        "Electrical Engineering (Electronics and Power)",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        80.7004831
      ],
      [
        "Electrical Engineering (Electronics and Power)",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        27.1206001
      ],
      [
        "Electrical Engineering (Electronics and Power)",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        46.4182823
      ],
      [
        "Electronics and Telecommunication Engg",
        "ST",
        "State",
        null,
        null,
        null,
        25.432546
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        84.3204501
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-A",
        "State",
        null,
        null,
        null,
        88.7231708
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B",
        "State",
        null,
        null,
        null,
        87.730083
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-C",
        "State",
        null,
        null,
        null,
        90.1398917
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC",
        "State",
        null,
        null,
        null,
        90.5194308
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC",
        "State",
        null,
        null,
        null,
        87.2636301
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        91.6610792
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        83.5707404
      ],
      [
        "Electronics and Telecommunication Engg",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        34.4790806
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        81.9314642
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        84.2510483
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        83.769652
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        82.9763421
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        91.1365188
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        85.4732337
      ],
      [
        "Electronics and Telecommunication Engg",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        63.2367632
      ],
      [
        "Mechanical Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        78.0162614
      ],
      [
        "Mechanical Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        30.378919
      ],
      [
        "Mechanical Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        77.6220509
      ],
      [
        "Mechanical Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        84.3204501
      ],
      [
        "Mechanical Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        87.8605935
      ],
      [
        "Mechanical Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        83.7045586
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        86.8632708
      ],
      [
        "Mechanical Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        77.7384664
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        87.6160033
      ],
      [
        "Mechanical Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        74.1899324
      ],
      [
        "Mechanical Engineering",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        87.5726309
      ],
      [
        "Mechanical Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        83.2071736
      ],
      [
        "Mechanical Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        43.0034494
      ],
      [
        "Mechanical Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        90.1398917
      ]
    ],
    "profile": {
      "overview": "Shri Sant Gajanan Maharaj College of Engineering, Shegaon is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 01101. Status: Un-Aided Autonomous. University/affiliation recorded in the CET directory: Autonomous Institute.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Shegaon, Buldhana, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Un-Aided Autonomous.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=01101",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=01101"
      ]
    }
  },
  {
    "id": "01002",
    "name": "Government College of Engineering, Amravati",
    "shortName": "GCOEA Amravati",
    "city": "Amravati",
    "region": "Other Maharashtra",
    "district": "Amravati",
    "status": "Government Autonomous",
    "university": "Autonomous Institute",
    "branches": [
      "Civil Engineering",
      "Computer Science and Engineering",
      "Information Technology",
      "Electrical Engineering",
      "Electronics and Telecommunication Engg",
      "Instrumentation Engineering",
      "Mechanical Engineering"
    ],
    "cutoffs": [
      [
        "Civil Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        91.7858261
      ],
      [
        "Civil Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        85.6921506
      ],
      [
        "Civil Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        79.9864621
      ],
      [
        "Civil Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        89.9742931
      ],
      [
        "Civil Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        90.9657321
      ],
      [
        "Civil Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        88.245893
      ],
      [
        "Civil Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        90.8146472
      ],
      [
        "Civil Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        90.5704062
      ],
      [
        "Civil Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        89.6830085
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        93.0716724
      ],
      [
        "Civil Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        88.2977496
      ],
      [
        "Civil Engineering",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        81.2365306
      ],
      [
        "Civil Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        92.5914149
      ],
      [
        "Civil Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        89.6590708
      ],
      [
        "Civil Engineering",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        86.3943435
      ],
      [
        "Civil Engineering",
        "PWDOBC",
        "State",
        null,
        null,
        null,
        37.1379111
      ],
      [
        "Civil Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        80.4716144
      ],
      [
        "Computer Science and Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        97.4547994
      ],
      [
        "Computer Science and Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        94.0949981
      ],
      [
        "Computer Science and Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        87.921673
      ],
      [
        "Computer Science and Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        94.5397112
      ],
      [
        "Computer Science and Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        95.8699876
      ],
      [
        "Computer Science and Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        96.4812287
      ],
      [
        "Computer Science and Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        94.4638756
      ],
      [
        "Computer Science and Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        97.305038
      ],
      [
        "Computer Science and Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        96.3586613
      ],
      [
        "Computer Science and Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        97.286596
      ],
      [
        "Computer Science and Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        94.1937425
      ],
      [
        "Computer Science and Engineering",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        89.2656035
      ],
      [
        "Computer Science and Engineering",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        93.9889579
      ],
      [
        "Computer Science and Engineering",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        95.6826425
      ],
      [
        "Computer Science and Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        97.0303948
      ],
      [
        "Computer Science and Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        96.996587
      ],
      [
        "Computer Science and Engineering",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        79.4793202
      ],
      [
        "Computer Science and Engineering",
        "PWDOBC",
        "State",
        null,
        null,
        null,
        70.9390112
      ],
      [
        "Computer Science and Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        93.4464908
      ],
      [
        "Information Technology",
        "OPEN",
        "State",
        null,
        null,
        null,
        96.389325
      ],
      [
        "Information Technology",
        "SC",
        "State",
        null,
        null,
        null,
        92.4132948
      ],
      [
        "Information Technology",
        "ST",
        "State",
        null,
        null,
        null,
        83.014142
      ],
      [
        "Information Technology",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        93.8884805
      ],
      [
        "Information Technology",
        "NT-B",
        "State",
        null,
        null,
        null,
        95.3151853
      ],
      [
        "Information Technology",
        "NT-C",
        "State",
        null,
        null,
        null,
        93.8402527
      ],
      [
        "Information Technology",
        "OBC",
        "State",
        null,
        null,
        null,
        96.3129908
      ],
      [
        "Information Technology",
        "SEBC",
        "State",
        null,
        null,
        null,
        95.1933808
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        96.7919146
      ],
      [
        "Information Technology",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        92.8590573
      ],
      [
        "Information Technology",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        83.73706
      ],
      [
        "Information Technology",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        92.4095563
      ],
      [
        "Information Technology",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        92.1611438
      ],
      [
        "Information Technology",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        96.3433097
      ],
      [
        "Information Technology",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        94.7610231
      ],
      [
        "Information Technology",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        69.8131691
      ],
      [
        "Information Technology",
        "PWDOBC",
        "State",
        null,
        null,
        null,
        59.0801845
      ],
      [
        "Information Technology",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        90.0508521
      ],
      [
        "Electrical Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        93.9372552
      ],
      [
        "Electrical Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        90.9727817
      ],
      [
        "Electrical Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        78.9956692
      ],
      [
        "Electrical Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        90.1775065
      ],
      [
        "Electrical Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        89.4962236
      ],
      [
        "Electrical Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        92.1611438
      ],
      [
        "Electrical Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        90.0962861
      ],
      [
        "Electrical Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        93.462703
      ],
      [
        "Electrical Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        90.354069
      ],
      [
        "Electrical Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        93.603531
      ],
      [
        "Electrical Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        89.1809567
      ],
      [
        "Electrical Engineering",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        69.3105802
      ],
      [
        "Electrical Engineering",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        83.7030299
      ],
      [
        "Electrical Engineering",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        85.791852
      ],
      [
        "Electrical Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        93.0779848
      ],
      [
        "Electrical Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        88.2909271
      ],
      [
        "Electrical Engineering",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        62.5282864
      ],
      [
        "Electrical Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        83.4251983
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "State",
        null,
        null,
        null,
        95.6128536
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC",
        "State",
        null,
        null,
        null,
        92.6293219
      ],
      [
        "Electronics and Telecommunication Engg",
        "ST",
        "State",
        null,
        null,
        null,
        65.9070599
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        90.3279027
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B",
        "State",
        null,
        null,
        null,
        95.1283815
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-C",
        "State",
        null,
        null,
        null,
        91.6610792
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC",
        "State",
        null,
        null,
        null,
        95.060689
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC",
        "State",
        null,
        null,
        null,
        93.6416382
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        95.1933808
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        91.53248
      ],
      [
        "Electronics and Telecommunication Engg",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        79.4663048
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        91.8983104
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        92.2153383
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        94.5553041
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        93.462703
      ],
      [
        "Electronics and Telecommunication Engg",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        72.9906413
      ],
      [
        "Electronics and Telecommunication Engg",
        "PWDOBC",
        "State",
        null,
        null,
        null,
        23.5136803
      ],
      [
        "Electronics and Telecommunication Engg",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        91.3230812
      ],
      [
        "Instrumentation Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        90.8447181
      ],
      [
        "Instrumentation Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        84.3808448
      ],
      [
        "Instrumentation Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        49.1980067
      ],
      [
        "Instrumentation Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        81.9221888
      ],
      [
        "Instrumentation Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        82.8318522
      ],
      [
        "Instrumentation Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        89.7903443
      ],
      [
        "Instrumentation Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        88.7955476
      ],
      [
        "Instrumentation Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        89.6618256
      ],
      [
        "Instrumentation Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        85.9212092
      ],
      [
        "Instrumentation Engineering",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        81.6705255
      ],
      [
        "Instrumentation Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        89.2457163
      ],
      [
        "Instrumentation Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        89.5119454
      ],
      [
        "Instrumentation Engineering",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        35.8612172
      ],
      [
        "Instrumentation Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        40.4581492
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        93.1635295
      ],
      [
        "Mechanical Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        87.6469672
      ],
      [
        "Mechanical Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        71.4785529
      ],
      [
        "Mechanical Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        92.1242775
      ],
      [
        "Mechanical Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        89.1791812
      ],
      [
        "Mechanical Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        88.7955476
      ],
      [
        "Mechanical Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        89.9742931
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        92.4480361
      ],
      [
        "Mechanical Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        89.9552166
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        90.5194308
      ],
      [
        "Mechanical Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        85.2987504
      ],
      [
        "Mechanical Engineering",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        41.1906024
      ],
      [
        "Mechanical Engineering",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        83.9561363
      ],
      [
        "Mechanical Engineering",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        89.621821
      ],
      [
        "Mechanical Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        89.4256012
      ],
      [
        "Mechanical Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        86.5848999
      ],
      [
        "Mechanical Engineering",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        31.0015898
      ],
      [
        "Mechanical Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        85.9891185
      ]
    ],
    "profile": {
      "overview": "Government College of Engineering, Amravati is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 01002. Status: Government Autonomous. University/affiliation recorded in the CET directory: Autonomous Institute.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Amravati, Amravati, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Government Autonomous.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=01002",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=01002"
      ]
    }
  },
  {
    "id": "01005",
    "name": "Sant Gadge Baba Amravati University, Amravati",
    "shortName": "SGBAU Amravati",
    "city": "Amravati",
    "region": "Other Maharashtra",
    "district": "Amravati",
    "status": "University Department",
    "university": "Sant Gadge Baba Amravati University",
    "branches": [
      "Food Technology",
      "Oil and Paints Technology",
      "Paper and Pulp Technology",
      "Petro Chemical Engineering"
    ],
    "cutoffs": [
      [
        "Food Technology",
        "OPEN",
        "H",
        null,
        null,
        null,
        93.9617023
      ],
      [
        "Food Technology",
        "SC",
        "H",
        null,
        null,
        null,
        93.1737137
      ],
      [
        "Food Technology",
        "ST",
        "H",
        null,
        null,
        null,
        81.8599034
      ],
      [
        "Food Technology",
        "NT-B",
        "H",
        null,
        null,
        null,
        91.803141
      ],
      [
        "Food Technology",
        "OBC",
        "H",
        null,
        null,
        null,
        89.5068295
      ],
      [
        "Food Technology",
        "SEBC",
        "H",
        null,
        null,
        null,
        58.1924692
      ],
      [
        "Food Technology",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        94.9642625
      ],
      [
        "Food Technology",
        "OPEN",
        "O",
        null,
        null,
        null,
        96.7906266
      ],
      [
        "Food Technology",
        "SC",
        "O",
        null,
        null,
        null,
        94.2622611
      ],
      [
        "Food Technology",
        "VJ/DT",
        "O",
        null,
        null,
        null,
        94.6480451
      ],
      [
        "Food Technology",
        "SEBC",
        "O",
        null,
        null,
        null,
        84.539834
      ],
      [
        "Oil and Paints Technology",
        "OPEN",
        "H",
        null,
        null,
        null,
        43.1094862
      ],
      [
        "Oil and Paints Technology",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        37.8307719
      ],
      [
        "Oil and Paints Technology",
        "OBC",
        "H",
        null,
        null,
        null,
        41.0952232
      ],
      [
        "Oil and Paints Technology",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        56.2435713
      ],
      [
        "Oil and Paints Technology",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        51.2488599
      ],
      [
        "Oil and Paints Technology",
        "NT-B",
        "H",
        null,
        null,
        null,
        40.4581492
      ],
      [
        "Oil and Paints Technology",
        "OPEN",
        "O",
        null,
        null,
        null,
        77.9589871
      ],
      [
        "Oil and Paints Technology",
        "OBC",
        "O",
        null,
        null,
        null,
        58.1324148
      ],
      [
        "Oil and Paints Technology",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        53.1999725
      ],
      [
        "Paper and Pulp Technology",
        "OPEN",
        "H",
        null,
        null,
        null,
        55.7703505
      ],
      [
        "Paper and Pulp Technology",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        47.7838912
      ],
      [
        "Paper and Pulp Technology",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        44.3215833
      ],
      [
        "Paper and Pulp Technology",
        "NT-A",
        "H",
        null,
        null,
        null,
        26.166493
      ],
      [
        "Paper and Pulp Technology",
        "OBC",
        "H",
        null,
        null,
        null,
        9.4708811
      ],
      [
        "Paper and Pulp Technology",
        "OPEN",
        "O",
        null,
        null,
        null,
        58.1924692
      ],
      [
        "Paper and Pulp Technology",
        "OBC",
        "O",
        null,
        null,
        null,
        1.6757679
      ],
      [
        "Petro Chemical Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        64.7164682
      ],
      [
        "Petro Chemical Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        49.0487536
      ],
      [
        "Petro Chemical Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        54.9832594
      ],
      [
        "Petro Chemical Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        62.8284912
      ],
      [
        "Petro Chemical Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        53.8067479
      ],
      [
        "Petro Chemical Engineering",
        "NT-B",
        "O",
        null,
        null,
        null,
        62.4995214
      ],
      [
        "Petro Chemical Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        84.207639
      ],
      [
        "Petro Chemical Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        77.7140658
      ]
    ],
    "profile": {
      "overview": "Sant Gadge Baba Amravati University, Amravati is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 01005. Status: University Department. University/affiliation recorded in the CET directory: Sant Gadge Baba Amravati University.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Amravati, Amravati, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as University Department.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=01005",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=01005"
      ]
    }
  },
  {
    "id": "01105",
    "name": "Prof. Ram Meghe Institute of Technology & Research, Amravati",
    "shortName": "PRMIT&R Amravati",
    "city": "Amravati",
    "region": "Other Maharashtra",
    "district": "Amravati",
    "status": "Un-Aided Autonomous",
    "university": "Sant Gadge Baba Amravati University",
    "branches": [
      "Civil Engineering",
      "Computer Science and Engineering",
      "Information Technology",
      "Artificial Intelligence (AI) and Data Science",
      "Computer Science and Engineering (IoT)",
      "Electronics and Telecommunication Engg",
      "Mechanical Engineering"
    ],
    "cutoffs": [
      [
        "Civil Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        75.9291421
      ],
      [
        "Civil Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        71.9146758
      ],
      [
        "Civil Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        14.1484544
      ],
      [
        "Civil Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        75.6280193
      ],
      [
        "Civil Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        68.6031011
      ],
      [
        "Civil Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        66.0913492
      ],
      [
        "Civil Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        75.8548894
      ],
      [
        "Civil Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        74.8088122
      ],
      [
        "Civil Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        49.2473035
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        77.9303712
      ],
      [
        "Civil Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        74.8210845
      ],
      [
        "Civil Engineering",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        41.0952232
      ],
      [
        "Civil Engineering",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        77.8890571
      ],
      [
        "Civil Engineering",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        75.4489132
      ],
      [
        "Civil Engineering",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        76.6993653
      ],
      [
        "Civil Engineering",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        71.4142775
      ],
      [
        "Civil Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        75.9743237
      ],
      [
        "Civil Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        32.6058557
      ],
      [
        "Civil Engineering",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        21.6834785
      ],
      [
        "Computer Science and Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        89.9742931
      ],
      [
        "Computer Science and Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        87.0343086
      ],
      [
        "Computer Science and Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        58.3262891
      ],
      [
        "Computer Science and Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        84.4412567
      ],
      [
        "Computer Science and Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        89.3655049
      ],
      [
        "Computer Science and Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        86.8632708
      ],
      [
        "Computer Science and Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        86.2729883
      ],
      [
        "Computer Science and Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        89.5119454
      ],
      [
        "Computer Science and Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        83.2810347
      ],
      [
        "Computer Science and Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        91.1313556
      ],
      [
        "Computer Science and Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        87.5726309
      ],
      [
        "Computer Science and Engineering",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        60.5843098
      ],
      [
        "Computer Science and Engineering",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        87.3221306
      ],
      [
        "Computer Science and Engineering",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        90.0451538
      ],
      [
        "Computer Science and Engineering",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        86.713982
      ],
      [
        "Computer Science and Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        90.5491967
      ],
      [
        "Computer Science and Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        85.225256
      ],
      [
        "Computer Science and Engineering",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        37.8097183
      ],
      [
        "Computer Science and Engineering",
        "PWDOBC",
        "State",
        null,
        null,
        null,
        20.7039337
      ],
      [
        "Computer Science and Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        77.3511663
      ],
      [
        "Information Technology",
        "OPEN",
        "State",
        null,
        null,
        null,
        87.468285
      ],
      [
        "Information Technology",
        "SC",
        "State",
        null,
        null,
        null,
        83.4251983
      ],
      [
        "Information Technology",
        "ST",
        "State",
        null,
        null,
        null,
        16.8122355
      ],
      [
        "Information Technology",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        83.1950716
      ],
      [
        "Information Technology",
        "NT-A",
        "State",
        null,
        null,
        null,
        81.1271398
      ],
      [
        "Information Technology",
        "NT-B",
        "State",
        null,
        null,
        null,
        85.6921506
      ],
      [
        "Information Technology",
        "NT-C",
        "State",
        null,
        null,
        null,
        80.5595655
      ],
      [
        "Information Technology",
        "OBC",
        "State",
        null,
        null,
        null,
        87.0084871
      ],
      [
        "Information Technology",
        "SEBC",
        "State",
        null,
        null,
        null,
        76.5235824
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        88.9649575
      ],
      [
        "Information Technology",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        85.5419841
      ],
      [
        "Information Technology",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        34.8863278
      ],
      [
        "Information Technology",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        80.1749582
      ],
      [
        "Information Technology",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        86.5743412
      ],
      [
        "Information Technology",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        84.4790806
      ],
      [
        "Information Technology",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        85.0307561
      ],
      [
        "Information Technology",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        88.4219058
      ],
      [
        "Information Technology",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        81.3089554
      ],
      [
        "Information Technology",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        53.8067479
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "OPEN",
        "State",
        null,
        null,
        null,
        85.9891185
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "SC",
        "State",
        null,
        null,
        null,
        83.4251983
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "ST",
        "State",
        null,
        null,
        null,
        28.6606658
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        80.5383458
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "NT-A",
        "State",
        null,
        null,
        null,
        84.3808448
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "NT-B",
        "State",
        null,
        null,
        null,
        81.4993122
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "NT-C",
        "State",
        null,
        null,
        null,
        82.5741649
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "OBC",
        "State",
        null,
        null,
        null,
        85.4974574
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "SEBC",
        "State",
        null,
        null,
        null,
        77.022977
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        87.2379152
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        86.2729883
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        49.4593034
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        83.73706
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        86.2729883
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        82.0388536
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        9.0115153
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        15.8646734
      ],
      [
        "Computer Science and Engineering (IoT)",
        "OPEN",
        "State",
        null,
        null,
        null,
        83.7030299
      ],
      [
        "Computer Science and Engineering (IoT)",
        "SC",
        "State",
        null,
        null,
        null,
        82.3548238
      ],
      [
        "Computer Science and Engineering (IoT)",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        76.7952218
      ],
      [
        "Computer Science and Engineering (IoT)",
        "OBC",
        "State",
        null,
        null,
        null,
        83.2071736
      ],
      [
        "Computer Science and Engineering (IoT)",
        "SEBC",
        "State",
        null,
        null,
        null,
        68.6031011
      ],
      [
        "Computer Science and Engineering (IoT)",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        85.7396473
      ],
      [
        "Computer Science and Engineering (IoT)",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        80.0260591
      ],
      [
        "Computer Science and Engineering (IoT)",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        80.0260591
      ],
      [
        "Computer Science and Engineering (IoT)",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        70.4858678
      ],
      [
        "Computer Science and Engineering (IoT)",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        82.7777778
      ],
      [
        "Computer Science and Engineering (IoT)",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        85.0853734
      ],
      [
        "Computer Science and Engineering (IoT)",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        83.7134808
      ],
      [
        "Computer Science and Engineering (IoT)",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        85.4732337
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "State",
        null,
        null,
        null,
        85.1689875
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC",
        "State",
        null,
        null,
        null,
        78.9492107
      ],
      [
        "Electronics and Telecommunication Engg",
        "ST",
        "State",
        null,
        null,
        null,
        27.6982865
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        77.2619593
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-A",
        "State",
        null,
        null,
        null,
        80.5793663
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B",
        "State",
        null,
        null,
        null,
        80.9705409
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-C",
        "State",
        null,
        null,
        null,
        76.3324995
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC",
        "State",
        null,
        null,
        null,
        84.3396689
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC",
        "State",
        null,
        null,
        null,
        70.4215645
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        85.8946885
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        79.5928226
      ],
      [
        "Electronics and Telecommunication Engg",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        0.2152663
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        75.2331528
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        70.733113
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        85.129786
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        69.3105802
      ],
      [
        "Electronics and Telecommunication Engg",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        39.4647165
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        77.2619593
      ],
      [
        "Mechanical Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        69.0271267
      ],
      [
        "Mechanical Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        71.1330463
      ],
      [
        "Mechanical Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        66.1169676
      ],
      [
        "Mechanical Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        68.5042436
      ],
      [
        "Mechanical Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        65.6970807
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        75.9743237
      ],
      [
        "Mechanical Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        55.319298
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        74.8210845
      ],
      [
        "Mechanical Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        64.2926156
      ],
      [
        "Mechanical Engineering",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        64.5293156
      ],
      [
        "Mechanical Engineering",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        62.8284912
      ],
      [
        "Mechanical Engineering",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        68.9346395
      ],
      [
        "Mechanical Engineering",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        58.1924692
      ],
      [
        "Mechanical Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        74.1334872
      ],
      [
        "Mechanical Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        48.5585273
      ],
      [
        "Mechanical Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        28.2298995
      ]
    ],
    "profile": {
      "overview": "Prof. Ram Meghe Institute of Technology & Research, Amravati is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 01105. Status: Un-Aided Autonomous. University/affiliation recorded in the CET directory: Sant Gadge Baba Amravati University.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Amravati, Amravati, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Un-Aided Autonomous.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=01105",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=01105"
      ]
    }
  },
  {
    "id": "01107",
    "name": "P. R. Pote Patil College of Engineering & Management, Amravati",
    "shortName": "PRPCEM Amravati",
    "city": "Amravati",
    "region": "Other Maharashtra",
    "district": "Amravati",
    "status": "Un-Aided",
    "university": "Sant Gadge Baba Amravati University",
    "branches": [
      "Civil Engineering",
      "Computer Science and Engineering",
      "Electrical Engineering",
      "Electronics and Telecommunication Engg",
      "Mechanical Engineering",
      "Computer Science and Engineering (AI & ML)",
      "AI & Data Science"
    ],
    "cutoffs": [
      [
        "Civil Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        77.2289819
      ],
      [
        "Civil Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        70.4858678
      ],
      [
        "Civil Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        65.6313822
      ],
      [
        "Civil Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        70.733113
      ],
      [
        "Civil Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        66.2459959
      ],
      [
        "Civil Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        74.5525612
      ],
      [
        "Civil Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        64.5293156
      ],
      [
        "Civil Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        74.2209832
      ],
      [
        "Civil Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        39.1300992
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        83.9283276
      ],
      [
        "Civil Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        72.5022286
      ],
      [
        "Civil Engineering",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        68.6717464
      ],
      [
        "Civil Engineering",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        67.500481
      ],
      [
        "Civil Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        75.2331528
      ],
      [
        "Civil Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        41.7129534
      ],
      [
        "Computer Science and Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        86.3505412
      ],
      [
        "Computer Science and Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        81.2365306
      ],
      [
        "Computer Science and Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        49.1097752
      ],
      [
        "Computer Science and Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        82.5187713
      ],
      [
        "Computer Science and Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        81.6705255
      ],
      [
        "Computer Science and Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        83.1821207
      ],
      [
        "Computer Science and Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        78.733317
      ],
      [
        "Computer Science and Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        85.3954204
      ],
      [
        "Computer Science and Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        76.3384255
      ],
      [
        "Computer Science and Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        88.4177906
      ],
      [
        "Computer Science and Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        84.3183057
      ],
      [
        "Computer Science and Engineering",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        54.7674174
      ],
      [
        "Computer Science and Engineering",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        84.0343736
      ],
      [
        "Computer Science and Engineering",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        87.3221306
      ],
      [
        "Computer Science and Engineering",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        82.1268327
      ],
      [
        "Computer Science and Engineering",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        84.207639
      ],
      [
        "Computer Science and Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        87.4466038
      ],
      [
        "Computer Science and Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        78.9956692
      ],
      [
        "Computer Science and Engineering",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        32.5248195
      ],
      [
        "Computer Science and Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        44.7174641
      ],
      [
        "Electrical Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        78.4082225
      ],
      [
        "Electrical Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        70.9390112
      ],
      [
        "Electrical Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        29.2374051
      ],
      [
        "Electrical Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        69.7766245
      ],
      [
        "Electrical Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        75.4489132
      ],
      [
        "Electrical Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        74.1334872
      ],
      [
        "Electrical Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        61.114444
      ],
      [
        "Electrical Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        77.8612083
      ],
      [
        "Electrical Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        52.8560653
      ],
      [
        "Electrical Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        79.5928226
      ],
      [
        "Electrical Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        71.7544603
      ],
      [
        "Electrical Engineering",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        63.003413
      ],
      [
        "Electrical Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        78.975446
      ],
      [
        "Electrical Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        47.7548586
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "State",
        null,
        null,
        null,
        81.5923479
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC",
        "State",
        null,
        null,
        null,
        74.0786749
      ],
      [
        "Electronics and Telecommunication Engg",
        "ST",
        "State",
        null,
        null,
        null,
        53.7405107
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        73.0844718
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-A",
        "State",
        null,
        null,
        null,
        77.9049638
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B",
        "State",
        null,
        null,
        null,
        75.9291421
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-C",
        "State",
        null,
        null,
        null,
        75.4489132
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC",
        "State",
        null,
        null,
        null,
        80.5383458
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC",
        "State",
        null,
        null,
        null,
        57.9680585
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        82.8318522
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        77.741426
      ],
      [
        "Electronics and Telecommunication Engg",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        24.78221
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        71.4142775
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        80.7035589
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        76.5235824
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        80.5595655
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        56.4419991
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        74.9893249
      ],
      [
        "Mechanical Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        68.063194
      ],
      [
        "Mechanical Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        10.9209283
      ],
      [
        "Mechanical Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        69.7621466
      ],
      [
        "Mechanical Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        70.6970324
      ],
      [
        "Mechanical Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        63.0171253
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        74.6275026
      ],
      [
        "Mechanical Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        52.1256716
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        73.676029
      ],
      [
        "Mechanical Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        63.5035466
      ],
      [
        "Mechanical Engineering",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        72.3251186
      ],
      [
        "Mechanical Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        72.9916849
      ],
      [
        "Mechanical Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        45.8934793
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "OPEN",
        "State",
        null,
        null,
        null,
        80.5383458
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "SC",
        "State",
        null,
        null,
        null,
        74.9893249
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "ST",
        "State",
        null,
        null,
        null,
        18.3316683
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        77.741426
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "NT-A",
        "State",
        null,
        null,
        null,
        77.2289819
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "NT-B",
        "State",
        null,
        null,
        null,
        77.2143105
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "NT-C",
        "State",
        null,
        null,
        null,
        79.3692556
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "OBC",
        "State",
        null,
        null,
        null,
        80.1749582
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "SEBC",
        "State",
        null,
        null,
        null,
        55.7703505
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        82.6245527
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        72.9249982
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        46.728217
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        82.4999118
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        75.0953827
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        77.2619593
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        67.9621973
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        81.9137967
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        59.950946
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        4.0175987
      ],
      [
        "AI & Data Science",
        "OPEN",
        "State",
        null,
        null,
        null,
        81.9221888
      ],
      [
        "AI & Data Science",
        "SC",
        "State",
        null,
        null,
        null,
        77.6220509
      ],
      [
        "AI & Data Science",
        "ST",
        "State",
        null,
        null,
        null,
        43.2064159
      ],
      [
        "AI & Data Science",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        74.8210845
      ],
      [
        "AI & Data Science",
        "NT-A",
        "State",
        null,
        null,
        null,
        78.2850242
      ],
      [
        "AI & Data Science",
        "NT-B",
        "State",
        null,
        null,
        null,
        77.2619593
      ],
      [
        "AI & Data Science",
        "NT-C",
        "State",
        null,
        null,
        null,
        71.7479911
      ],
      [
        "AI & Data Science",
        "OBC",
        "State",
        null,
        null,
        null,
        80.78157
      ],
      [
        "AI & Data Science",
        "SEBC",
        "State",
        null,
        null,
        null,
        69.7621466
      ],
      [
        "AI & Data Science",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        84.207639
      ],
      [
        "AI & Data Science",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        78.733317
      ],
      [
        "AI & Data Science",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        12.3071672
      ],
      [
        "AI & Data Science",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        75.242318
      ],
      [
        "AI & Data Science",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        80.5595655
      ],
      [
        "AI & Data Science",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        80.4293972
      ],
      [
        "AI & Data Science",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        73.262321
      ],
      [
        "AI & Data Science",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        83.7134808
      ],
      [
        "AI & Data Science",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        74.6275026
      ],
      [
        "AI & Data Science",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        60.010721
      ]
    ],
    "profile": {
      "overview": "P. R. Pote Patil College of Engineering & Management, Amravati is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 01107. Status: Un-Aided. University/affiliation recorded in the CET directory: Sant Gadge Baba Amravati University.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Amravati, Amravati, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Un-Aided.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=01107",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=01107"
      ]
    }
  },
  {
    "id": "01114",
    "name": "Sipna Shikshan Prasarak Mandal College of Engineering & Technology, Amravati",
    "shortName": "Sipna COET Amravati",
    "city": "Amravati",
    "region": "Other Maharashtra",
    "district": "Amravati",
    "status": "Un-Aided Autonomous",
    "university": "Sant Gadge Baba Amravati University",
    "branches": [
      "Civil Engineering",
      "Computer Science and Engineering",
      "Information Technology",
      "Artificial Intelligence (AI) and Data Science",
      "Electronics and Telecommunication Engg",
      "Mechanical Engineering"
    ],
    "cutoffs": [
      [
        "Civil Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        69.1748413
      ],
      [
        "Civil Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        63.5303851
      ],
      [
        "Civil Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        34.1066887
      ],
      [
        "Civil Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        63.5303851
      ],
      [
        "Civil Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        68.6717464
      ],
      [
        "Civil Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        63.8128892
      ],
      [
        "Civil Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        59.3625359
      ],
      [
        "Civil Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        67.2980865
      ],
      [
        "Civil Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        31.8464164
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        70.3901803
      ],
      [
        "Civil Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        68.6254044
      ],
      [
        "Civil Engineering",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        59.950946
      ],
      [
        "Civil Engineering",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        57.6578681
      ],
      [
        "Civil Engineering",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        62.2946352
      ],
      [
        "Civil Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        68.9346395
      ],
      [
        "Civil Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        74.6275026
      ],
      [
        "Computer Science and Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        84.4651484
      ],
      [
        "Computer Science and Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        79.4663048
      ],
      [
        "Computer Science and Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        38.215662
      ],
      [
        "Computer Science and Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        81.2524249
      ],
      [
        "Computer Science and Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        78.9956692
      ],
      [
        "Computer Science and Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        81.4271094
      ],
      [
        "Computer Science and Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        81.9137967
      ],
      [
        "Computer Science and Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        84.0342981
      ],
      [
        "Computer Science and Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        72.8027463
      ],
      [
        "Computer Science and Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        86.3032893
      ],
      [
        "Computer Science and Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        82.5187713
      ],
      [
        "Computer Science and Engineering",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        61.2510322
      ],
      [
        "Computer Science and Engineering",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        80.7035589
      ],
      [
        "Computer Science and Engineering",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        85.4974574
      ],
      [
        "Computer Science and Engineering",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        76.3286018
      ],
      [
        "Computer Science and Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        85.225256
      ],
      [
        "Computer Science and Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        73.9021728
      ],
      [
        "Computer Science and Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        61.8012422
      ],
      [
        "Information Technology",
        "OPEN",
        "State",
        null,
        null,
        null,
        82.3548238
      ],
      [
        "Information Technology",
        "SC",
        "State",
        null,
        null,
        null,
        77.2619593
      ],
      [
        "Information Technology",
        "ST",
        "State",
        null,
        null,
        null,
        12.6034251
      ],
      [
        "Information Technology",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        80.1766472
      ],
      [
        "Information Technology",
        "NT-A",
        "State",
        null,
        null,
        null,
        77.1955616
      ],
      [
        "Information Technology",
        "NT-B",
        "State",
        null,
        null,
        null,
        77.937978
      ],
      [
        "Information Technology",
        "NT-C",
        "State",
        null,
        null,
        null,
        69.8131691
      ],
      [
        "Information Technology",
        "OBC",
        "State",
        null,
        null,
        null,
        81.7656352
      ],
      [
        "Information Technology",
        "SEBC",
        "State",
        null,
        null,
        null,
        66.3432235
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        83.4527296
      ],
      [
        "Information Technology",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        77.937978
      ],
      [
        "Information Technology",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        22.4923895
      ],
      [
        "Information Technology",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        80.5383458
      ],
      [
        "Information Technology",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        77.550585
      ],
      [
        "Information Technology",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        80.4716144
      ],
      [
        "Information Technology",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        83.2071736
      ],
      [
        "Information Technology",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        70.3444621
      ],
      [
        "Information Technology",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        39.9867632
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "OPEN",
        "State",
        null,
        null,
        null,
        81.2365306
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "SC",
        "State",
        null,
        null,
        null,
        76.468112
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        79.3794141
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "NT-A",
        "State",
        null,
        null,
        null,
        80.7055032
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "NT-B",
        "State",
        null,
        null,
        null,
        78.9492107
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "NT-C",
        "State",
        null,
        null,
        null,
        76.6875679
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "OBC",
        "State",
        null,
        null,
        null,
        80.7055032
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "SEBC",
        "State",
        null,
        null,
        null,
        64.2198294
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        82.9247643
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        77.937978
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        82.1268327
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        73.3356624
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        72.0373703
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        81.7199
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        71.4377156
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "State",
        null,
        null,
        null,
        79.2630446
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC",
        "State",
        null,
        null,
        null,
        73.9021728
      ],
      [
        "Electronics and Telecommunication Engg",
        "ST",
        "State",
        null,
        null,
        null,
        52.8560653
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        67.3167917
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-A",
        "State",
        null,
        null,
        null,
        73.262321
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B",
        "State",
        null,
        null,
        null,
        74.6217331
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-C",
        "State",
        null,
        null,
        null,
        67.1207715
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC",
        "State",
        null,
        null,
        null,
        78.733317
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC",
        "State",
        null,
        null,
        null,
        55.4914407
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        80.4992916
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        74.4163823
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        72.0373703
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        74.8210845
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        80.0260591
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        60.7738415
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        73.2109713
      ],
      [
        "Mechanical Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        67.458483
      ],
      [
        "Mechanical Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        64.7164682
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        72.3251186
      ],
      [
        "Mechanical Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        48.1265004
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        72.3251186
      ],
      [
        "Mechanical Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        64.1240022
      ],
      [
        "Mechanical Engineering",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        51.2488599
      ],
      [
        "Mechanical Engineering",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        62.5282864
      ],
      [
        "Mechanical Engineering",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        41.0952232
      ],
      [
        "Mechanical Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        71.1330463
      ],
      [
        "Mechanical Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        51.8020478
      ]
    ],
    "profile": {
      "overview": "Sipna Shikshan Prasarak Mandal College of Engineering & Technology, Amravati is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 01114. Status: Un-Aided Autonomous. University/affiliation recorded in the CET directory: Sant Gadge Baba Amravati University.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Amravati, Amravati, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Un-Aided Autonomous.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=01114",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=01114"
      ]
    }
  },
  {
    "id": "01116",
    "name": "Shri Shivaji Education Society's College of Engineering and Technology, Akola",
    "shortName": "SSCE Akola",
    "city": "Akola",
    "region": "Other Maharashtra",
    "district": "Akola",
    "status": "Un-Aided",
    "university": "Sant Gadge Baba Amravati University",
    "branches": [
      "Civil Engineering",
      "Computer Science and Engineering",
      "Information Technology",
      "Chemical Engineering",
      "Mechanical Engineering"
    ],
    "cutoffs": [
      [
        "Civil Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        62.8284912
      ],
      [
        "Civil Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        44.6087422
      ],
      [
        "Civil Engineering",
        "ST",
        "H",
        null,
        null,
        null,
        14.1268505
      ],
      [
        "Civil Engineering",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        52.6909021
      ],
      [
        "Civil Engineering",
        "NT-C",
        "H",
        null,
        null,
        null,
        32.0852596
      ],
      [
        "Civil Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        54.9986599
      ],
      [
        "Civil Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        15.4884768
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        58.235114
      ],
      [
        "Civil Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        49.8699585
      ],
      [
        "Civil Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        56.5580532
      ],
      [
        "Civil Engineering",
        "PWDOPEN",
        "H",
        null,
        null,
        null,
        32.5248195
      ],
      [
        "Civil Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        54.96898
      ],
      [
        "Civil Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        54.1426021
      ],
      [
        "Civil Engineering",
        "VJ/DT",
        "O",
        null,
        null,
        null,
        36.7116245
      ],
      [
        "Civil Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        44.6246246
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        31.8464164
      ],
      [
        "Civil Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        26.3181412
      ],
      [
        "Civil Engineering",
        "NT-A",
        "O",
        null,
        null,
        null,
        57.5477401
      ],
      [
        "Civil Engineering",
        "NT-B",
        "O",
        null,
        null,
        null,
        46.728217
      ],
      [
        "Computer Science and Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        72.9249982
      ],
      [
        "Computer Science and Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        60.268127
      ],
      [
        "Computer Science and Engineering",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        68.6254044
      ],
      [
        "Computer Science and Engineering",
        "NT-A",
        "H",
        null,
        null,
        null,
        60.1814551
      ],
      [
        "Computer Science and Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        66.0549811
      ],
      [
        "Computer Science and Engineering",
        "NT-C",
        "H",
        null,
        null,
        null,
        56.1183815
      ],
      [
        "Computer Science and Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        69.8131691
      ],
      [
        "Computer Science and Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        3.6878544
      ],
      [
        "Computer Science and Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        78.4082225
      ],
      [
        "Computer Science and Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        66.0913492
      ],
      [
        "Computer Science and Engineering",
        "VJ/DT-Ladies",
        "H",
        null,
        null,
        null,
        74.7351841
      ],
      [
        "Computer Science and Engineering",
        "NT-A-Ladies",
        "H",
        null,
        null,
        null,
        58.1924692
      ],
      [
        "Computer Science and Engineering",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        72.4223602
      ],
      [
        "Computer Science and Engineering",
        "NT-C-Ladies",
        "H",
        null,
        null,
        null,
        63.8128892
      ],
      [
        "Computer Science and Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        75.6051641
      ],
      [
        "Computer Science and Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        34.1022162
      ],
      [
        "Computer Science and Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        62.5282864
      ],
      [
        "Computer Science and Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        37.2122315
      ],
      [
        "Computer Science and Engineering",
        "VJ/DT",
        "O",
        null,
        null,
        null,
        43.723793
      ],
      [
        "Computer Science and Engineering",
        "NT-B",
        "O",
        null,
        null,
        null,
        48.1318449
      ],
      [
        "Computer Science and Engineering",
        "NT-C",
        "O",
        null,
        null,
        null,
        60.7738415
      ],
      [
        "Computer Science and Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        56.5580532
      ],
      [
        "Computer Science and Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        52.0988164
      ],
      [
        "Computer Science and Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        70.4097117
      ],
      [
        "Computer Science and Engineering",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        33.8928203
      ],
      [
        "Computer Science and Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        61.9398096
      ],
      [
        "Computer Science and Engineering",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        63.540901
      ],
      [
        "Computer Science and Engineering",
        "NT-A-Ladies",
        "O",
        null,
        null,
        null,
        57.502776
      ],
      [
        "Information Technology",
        "OPEN",
        "H",
        null,
        null,
        null,
        65.8087807
      ],
      [
        "Information Technology",
        "SC",
        "H",
        null,
        null,
        null,
        56.5505021
      ],
      [
        "Information Technology",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        35.5866115
      ],
      [
        "Information Technology",
        "NT-A",
        "H",
        null,
        null,
        null,
        61.5912113
      ],
      [
        "Information Technology",
        "NT-B",
        "H",
        null,
        null,
        null,
        49.7711098
      ],
      [
        "Information Technology",
        "NT-C",
        "H",
        null,
        null,
        null,
        60.070698
      ],
      [
        "Information Technology",
        "OBC",
        "H",
        null,
        null,
        null,
        65.2933256
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        69.1748413
      ],
      [
        "Information Technology",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        62.9339383
      ],
      [
        "Information Technology",
        "NT-A-Ladies",
        "H",
        null,
        null,
        null,
        41.0952232
      ],
      [
        "Information Technology",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        60.9758938
      ],
      [
        "Information Technology",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        66.4794206
      ],
      [
        "Information Technology",
        "OPEN",
        "O",
        null,
        null,
        null,
        55.4743121
      ],
      [
        "Information Technology",
        "SC",
        "O",
        null,
        null,
        null,
        56.5580532
      ],
      [
        "Information Technology",
        "OBC",
        "O",
        null,
        null,
        null,
        53.8067479
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        67.3167917
      ],
      [
        "Information Technology",
        "NT-C-Ladies",
        "O",
        null,
        null,
        null,
        61.5912113
      ],
      [
        "Information Technology",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        58.235114
      ],
      [
        "Information Technology",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        49.3545528
      ],
      [
        "Information Technology",
        "VJ/DT-Ladies",
        "O",
        null,
        null,
        null,
        34.1022162
      ],
      [
        "Information Technology",
        "NT-B-Ladies",
        "O",
        null,
        null,
        null,
        63.2367632
      ],
      [
        "Chemical Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        53.1039032
      ],
      [
        "Chemical Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        35.5866115
      ],
      [
        "Chemical Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        48.8664194
      ],
      [
        "Chemical Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        55.4743121
      ],
      [
        "Chemical Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        38.726658
      ],
      [
        "Chemical Engineering",
        "VJ/DT-Ladies",
        "H",
        null,
        null,
        null,
        52.9701068
      ],
      [
        "Chemical Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        4.4515103
      ],
      [
        "Chemical Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        20.7106482
      ],
      [
        "Chemical Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        19.7268589
      ],
      [
        "Chemical Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        68.58833
      ],
      [
        "Chemical Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        63.5035466
      ],
      [
        "Chemical Engineering",
        "NT-A",
        "O",
        null,
        null,
        null,
        65.6970807
      ],
      [
        "Chemical Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        63.4876968
      ],
      [
        "Chemical Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        57.5477401
      ],
      [
        "Chemical Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        80.1749582
      ],
      [
        "Chemical Engineering",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        27.84396
      ],
      [
        "Chemical Engineering",
        "NT-B",
        "O",
        null,
        null,
        null,
        38.215662
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        60.5539527
      ],
      [
        "Mechanical Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        38.9526061
      ],
      [
        "Mechanical Engineering",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        16.1702768
      ],
      [
        "Mechanical Engineering",
        "NT-A",
        "H",
        null,
        null,
        null,
        60.070698
      ],
      [
        "Mechanical Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        46.7128425
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        55.7703505
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        60.5539527
      ],
      [
        "Mechanical Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        57.0044084
      ],
      [
        "Mechanical Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        58.3262891
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        43.0034494
      ],
      [
        "Mechanical Engineering",
        "NT-C",
        "O",
        null,
        null,
        null,
        22.5386607
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        42.6120917
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        45.035095
      ],
      [
        "Mechanical Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        43.1236655
      ],
      [
        "Mechanical Engineering",
        "VJ/DT",
        "O",
        null,
        null,
        null,
        50.5512969
      ],
      [
        "Mechanical Engineering",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        41.3533547
      ],
      [
        "Mechanical Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        25.2991393
      ]
    ],
    "profile": {
      "overview": "Shri Shivaji Education Society's College of Engineering and Technology, Akola is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 01116. Status: Un-Aided. University/affiliation recorded in the CET directory: Sant Gadge Baba Amravati University.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Akola, Akola, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Un-Aided.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=01116",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=01116"
      ]
    }
  },
  {
    "id": "01117",
    "name": "Babasaheb Naik College Of Engineering, Pusad",
    "shortName": "BNCOE Pusad",
    "city": "Pusad",
    "region": "Other Maharashtra",
    "district": "Yavatmal",
    "status": "Un-Aided",
    "university": "Sant Gadge Baba Amravati University",
    "branches": [
      "Civil Engineering",
      "Computer Science and Engineering",
      "Electrical Engineering (Electronics and Power)",
      "Mechanical Engineering",
      "AI & Data Science"
    ],
    "cutoffs": [
      [
        "Civil Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        57.8274425
      ],
      [
        "Civil Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        13.7926161
      ],
      [
        "Civil Engineering",
        "ST",
        "H",
        null,
        null,
        null,
        52.8745002
      ],
      [
        "Civil Engineering",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        56.5182885
      ],
      [
        "Civil Engineering",
        "NT-A",
        "H",
        null,
        null,
        null,
        53.7405107
      ],
      [
        "Civil Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        44.3215833
      ],
      [
        "Civil Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        48.5585273
      ],
      [
        "Civil Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        25.6909658
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        69.8418157
      ],
      [
        "Civil Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        45.035095
      ],
      [
        "Civil Engineering",
        "ST-Ladies",
        "H",
        null,
        null,
        null,
        46.0219719
      ],
      [
        "Civil Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        36.6388387
      ],
      [
        "Civil Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        37.2122315
      ],
      [
        "Civil Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        22.4923895
      ],
      [
        "Civil Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        30.378919
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        30.8808364
      ],
      [
        "Civil Engineering",
        "NT-B",
        "O",
        null,
        null,
        null,
        29.2374051
      ],
      [
        "Civil Engineering",
        "ST-Ladies",
        "O",
        null,
        null,
        null,
        39.1300992
      ],
      [
        "Civil Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        45.457039
      ],
      [
        "Computer Science and Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        68.6717464
      ],
      [
        "Computer Science and Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        48.401775
      ],
      [
        "Computer Science and Engineering",
        "ST",
        "H",
        null,
        null,
        null,
        9.5733084
      ],
      [
        "Computer Science and Engineering",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        65.9070599
      ],
      [
        "Computer Science and Engineering",
        "NT-A",
        "H",
        null,
        null,
        null,
        64.5293156
      ],
      [
        "Computer Science and Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        46.3536656
      ],
      [
        "Computer Science and Engineering",
        "NT-C",
        "H",
        null,
        null,
        null,
        57.8685189
      ],
      [
        "Computer Science and Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        59.2443064
      ],
      [
        "Computer Science and Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        47.8755661
      ],
      [
        "Computer Science and Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        80.0260591
      ],
      [
        "Computer Science and Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        70.0706138
      ],
      [
        "Computer Science and Engineering",
        "ST-Ladies",
        "H",
        null,
        null,
        null,
        13.6469615
      ],
      [
        "Computer Science and Engineering",
        "VJ/DT-Ladies",
        "H",
        null,
        null,
        null,
        78.1913582
      ],
      [
        "Computer Science and Engineering",
        "NT-A-Ladies",
        "H",
        null,
        null,
        null,
        65.9070599
      ],
      [
        "Computer Science and Engineering",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        53.8067479
      ],
      [
        "Computer Science and Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        73.0237189
      ],
      [
        "Computer Science and Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        52.6909021
      ],
      [
        "Computer Science and Engineering",
        "PWDOPEN",
        "H",
        null,
        null,
        null,
        48.1265004
      ],
      [
        "Computer Science and Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        61.9398096
      ],
      [
        "Computer Science and Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        9.0115153
      ],
      [
        "Computer Science and Engineering",
        "VJ/DT",
        "O",
        null,
        null,
        null,
        33.9583652
      ],
      [
        "Computer Science and Engineering",
        "NT-A",
        "O",
        null,
        null,
        null,
        56.5580532
      ],
      [
        "Computer Science and Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        39.9867632
      ],
      [
        "Computer Science and Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        46.7128425
      ],
      [
        "Computer Science and Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        67.500481
      ],
      [
        "Computer Science and Engineering",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        20.4040793
      ],
      [
        "Computer Science and Engineering",
        "NT-A-Ladies",
        "O",
        null,
        null,
        null,
        29.41486
      ],
      [
        "Computer Science and Engineering",
        "NT-B-Ladies",
        "O",
        null,
        null,
        null,
        46.4182823
      ],
      [
        "Computer Science and Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        51.5429844
      ],
      [
        "Computer Science and Engineering",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        32.4603175
      ],
      [
        "Computer Science and Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        63.552865
      ],
      [
        "Electrical Engineering (Electronics and Power)",
        "OPEN",
        "H",
        null,
        null,
        null,
        54.9733848
      ],
      [
        "Electrical Engineering (Electronics and Power)",
        "SC",
        "H",
        null,
        null,
        null,
        18.8254623
      ],
      [
        "Electrical Engineering (Electronics and Power)",
        "NT-A",
        "H",
        null,
        null,
        null,
        45.6611497
      ],
      [
        "Electrical Engineering (Electronics and Power)",
        "OBC",
        "H",
        null,
        null,
        null,
        41.7620841
      ],
      [
        "Electrical Engineering (Electronics and Power)",
        "SEBC",
        "H",
        null,
        null,
        null,
        38.0740533
      ],
      [
        "Electrical Engineering (Electronics and Power)",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        68.6031011
      ],
      [
        "Electrical Engineering (Electronics and Power)",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        24.2423208
      ],
      [
        "Electrical Engineering (Electronics and Power)",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        37.2578704
      ],
      [
        "Electrical Engineering (Electronics and Power)",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        19.4285936
      ],
      [
        "Electrical Engineering (Electronics and Power)",
        "OPEN",
        "O",
        null,
        null,
        null,
        28.7105475
      ],
      [
        "Electrical Engineering (Electronics and Power)",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        58.1924692
      ],
      [
        "Electrical Engineering (Electronics and Power)",
        "SC",
        "O",
        null,
        null,
        null,
        22.8294494
      ],
      [
        "Electrical Engineering (Electronics and Power)",
        "NT-B",
        "O",
        null,
        null,
        null,
        42.6120917
      ],
      [
        "Electrical Engineering (Electronics and Power)",
        "OBC",
        "O",
        null,
        null,
        null,
        39.199832
      ],
      [
        "Electrical Engineering (Electronics and Power)",
        "SEBC",
        "O",
        null,
        null,
        null,
        24.093066
      ],
      [
        "Electrical Engineering (Electronics and Power)",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        19.3259851
      ],
      [
        "Electrical Engineering (Electronics and Power)",
        "VJ/DT-Ladies",
        "O",
        null,
        null,
        null,
        55.7542662
      ],
      [
        "Electrical Engineering (Electronics and Power)",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        38.0740533
      ],
      [
        "Electrical Engineering (Electronics and Power)",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        28.2298995
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        48.401775
      ],
      [
        "Mechanical Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        14.7883959
      ],
      [
        "Mechanical Engineering",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        47.8398896
      ],
      [
        "Mechanical Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        30.191544
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        27.9569892
      ],
      [
        "Mechanical Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        32.0852596
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        43.578754
      ],
      [
        "Mechanical Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        27.6982865
      ],
      [
        "Mechanical Engineering",
        "VJ/DT-Ladies",
        "H",
        null,
        null,
        null,
        41.1906024
      ],
      [
        "Mechanical Engineering",
        "NT-A-Ladies",
        "H",
        null,
        null,
        null,
        17.7235495
      ],
      [
        "Mechanical Engineering",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        25.0611389
      ],
      [
        "Mechanical Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        38.215662
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        45.1152324
      ],
      [
        "Mechanical Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        22.7484499
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        44.1937857
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        65.4837825
      ],
      [
        "Mechanical Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        35.8191126
      ],
      [
        "AI & Data Science",
        "OPEN",
        "H",
        null,
        null,
        null,
        60.9157012
      ],
      [
        "AI & Data Science",
        "SC",
        "H",
        null,
        null,
        null,
        31.4943887
      ],
      [
        "AI & Data Science",
        "ST",
        "H",
        null,
        null,
        null,
        34.0389056
      ],
      [
        "AI & Data Science",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        60.4816409
      ],
      [
        "AI & Data Science",
        "NT-A",
        "H",
        null,
        null,
        null,
        52.8745002
      ],
      [
        "AI & Data Science",
        "NT-B",
        "H",
        null,
        null,
        null,
        44.6246246
      ],
      [
        "AI & Data Science",
        "NT-C",
        "H",
        null,
        null,
        null,
        39.199832
      ],
      [
        "AI & Data Science",
        "OBC",
        "H",
        null,
        null,
        null,
        48.5585273
      ],
      [
        "AI & Data Science",
        "SEBC",
        "H",
        null,
        null,
        null,
        37.8307719
      ],
      [
        "AI & Data Science",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        71.9146758
      ],
      [
        "AI & Data Science",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        65.6970807
      ],
      [
        "AI & Data Science",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        67.2980865
      ],
      [
        "AI & Data Science",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        57.6578681
      ],
      [
        "AI & Data Science",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        65.4837825
      ],
      [
        "AI & Data Science",
        "OPEN",
        "O",
        null,
        null,
        null,
        44.5569356
      ],
      [
        "AI & Data Science",
        "SC",
        "O",
        null,
        null,
        null,
        32.7909025
      ],
      [
        "AI & Data Science",
        "VJ/DT",
        "O",
        null,
        null,
        null,
        39.966573
      ],
      [
        "AI & Data Science",
        "NT-A",
        "O",
        null,
        null,
        null,
        16.8122355
      ],
      [
        "AI & Data Science",
        "OBC",
        "O",
        null,
        null,
        null,
        48.1318449
      ],
      [
        "AI & Data Science",
        "SEBC",
        "O",
        null,
        null,
        null,
        40.369284
      ],
      [
        "AI & Data Science",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        53.1039032
      ],
      [
        "AI & Data Science",
        "NT-C-Ladies",
        "O",
        null,
        null,
        null,
        45.6611497
      ],
      [
        "AI & Data Science",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        51.7178644
      ],
      [
        "AI & Data Science",
        "NT-B",
        "O",
        null,
        null,
        null,
        49.1668381
      ],
      [
        "AI & Data Science",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        60.7738415
      ]
    ],
    "profile": {
      "overview": "Babasaheb Naik College Of Engineering, Pusad is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 01117. Status: Un-Aided. University/affiliation recorded in the CET directory: Sant Gadge Baba Amravati University.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Pusad, Yavatmal, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Un-Aided.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=01117",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=01117"
      ]
    }
  },
  {
    "id": "01120",
    "name": "Jawaharlal Darda Institute of Engineering and Technology, Yavatmal",
    "shortName": "JDIET Yavatmal",
    "city": "Yavatmal",
    "region": "Other Maharashtra",
    "district": "Yavatmal",
    "status": "Un-Aided",
    "university": "Sant Gadge Baba Amravati University",
    "branches": [
      "Civil Engineering",
      "Computer Science and Engineering",
      "Electrical Engineering",
      "Electronics and Telecommunication Engg",
      "Chemical Engineering",
      "Mechanical Engineering",
      "Textile Engineering / Technology"
    ],
    "cutoffs": [
      [
        "Civil Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        55.6712077
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        61.5912113
      ],
      [
        "Computer Science and Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        77.3787188
      ],
      [
        "Computer Science and Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        82.3548238
      ],
      [
        "Electrical Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        64.1240022
      ],
      [
        "Electrical Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        67.2980865
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "State",
        null,
        null,
        null,
        74.5525612
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        77.937978
      ],
      [
        "Chemical Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        58.4262318
      ],
      [
        "Chemical Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        70.4097117
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        56.5182885
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        56.5505021
      ],
      [
        "Textile Engineering / Technology",
        "OPEN",
        "State",
        null,
        null,
        null,
        53.7903103
      ],
      [
        "Textile Engineering / Technology",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        57.8685189
      ]
    ],
    "profile": {
      "overview": "Jawaharlal Darda Institute of Engineering and Technology, Yavatmal is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 01120. Status: Un-Aided. University/affiliation recorded in the CET directory: Sant Gadge Baba Amravati University.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Yavatmal, Yavatmal, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Un-Aided.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=01120",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=01120"
      ]
    }
  },
  {
    "id": "02008",
    "name": "Government College of Engineering, Chhatrapati Sambhajinagar",
    "shortName": "GCOE Chhatrapati Sambhajinagar",
    "city": "Chhatrapati Sambhajinagar",
    "region": "Marathwada",
    "district": "Chhatrapati Sambhajinagar",
    "status": "Government Autonomous",
    "university": "Autonomous Institute",
    "branches": [
      "Civil Engineering",
      "Computer Science and Engineering",
      "Information Technology",
      "Electrical Engineering",
      "Electronics and Telecommunication Engg",
      "Mechanical Engineering"
    ],
    "cutoffs": [
      [
        "Civil Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        94.372645
      ],
      [
        "Civil Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        89.2303375
      ],
      [
        "Civil Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        85.4732337
      ],
      [
        "Civil Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        93.462703
      ],
      [
        "Civil Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        91.2158031
      ],
      [
        "Civil Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        92.3471157
      ],
      [
        "Civil Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        93.237161
      ],
      [
        "Civil Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        93.0716724
      ],
      [
        "Civil Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        92.2409094
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        95.022244
      ],
      [
        "Civil Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        83.1707575
      ],
      [
        "Civil Engineering",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        84.4852349
      ],
      [
        "Civil Engineering",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        83.1707575
      ],
      [
        "Civil Engineering",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        90.0508521
      ],
      [
        "Civil Engineering",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        91.2331407
      ],
      [
        "Civil Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        92.2148897
      ],
      [
        "Civil Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        92.3369677
      ],
      [
        "Civil Engineering",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        89.2347783
      ],
      [
        "Civil Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        88.525902
      ],
      [
        "Computer Science and Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        97.6449135
      ],
      [
        "Computer Science and Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        94.9173586
      ],
      [
        "Computer Science and Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        82.6530612
      ],
      [
        "Computer Science and Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        94.1950375
      ],
      [
        "Computer Science and Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        97.4729104
      ],
      [
        "Computer Science and Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        96.8804098
      ],
      [
        "Computer Science and Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        96.8036058
      ],
      [
        "Computer Science and Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        97.3099865
      ],
      [
        "Computer Science and Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        96.7828418
      ],
      [
        "Computer Science and Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        97.4328274
      ],
      [
        "Computer Science and Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        94.9173586
      ],
      [
        "Computer Science and Engineering",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        89.4256012
      ],
      [
        "Computer Science and Engineering",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        96.1068782
      ],
      [
        "Computer Science and Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        96.9883668
      ],
      [
        "Computer Science and Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        96.9836134
      ],
      [
        "Computer Science and Engineering",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        80.78157
      ],
      [
        "Computer Science and Engineering",
        "PWDOBC",
        "State",
        null,
        null,
        null,
        78.5981492
      ],
      [
        "Computer Science and Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        65.4076693
      ],
      [
        "Information Technology",
        "OPEN",
        "State",
        null,
        null,
        null,
        96.6545506
      ],
      [
        "Information Technology",
        "SC",
        "State",
        null,
        null,
        null,
        93.5949221
      ],
      [
        "Information Technology",
        "ST",
        "State",
        null,
        null,
        null,
        76.7952218
      ],
      [
        "Information Technology",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        93.7198237
      ],
      [
        "Information Technology",
        "NT-A",
        "State",
        null,
        null,
        null,
        94.7805374
      ],
      [
        "Information Technology",
        "NT-B",
        "State",
        null,
        null,
        null,
        95.4882902
      ],
      [
        "Information Technology",
        "OBC",
        "State",
        null,
        null,
        null,
        96.3496751
      ],
      [
        "Information Technology",
        "SEBC",
        "State",
        null,
        null,
        null,
        96.4033464
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        96.6907341
      ],
      [
        "Information Technology",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        92.8132001
      ],
      [
        "Information Technology",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        80.4944215
      ],
      [
        "Information Technology",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        94.1950375
      ],
      [
        "Information Technology",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        90.5979613
      ],
      [
        "Information Technology",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        96.1068782
      ],
      [
        "Information Technology",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        96.2623043
      ],
      [
        "Information Technology",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        95.9544923
      ],
      [
        "Information Technology",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        82.7777778
      ],
      [
        "Information Technology",
        "PWDOBC",
        "State",
        null,
        null,
        null,
        61.114444
      ],
      [
        "Information Technology",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        93.3993174
      ],
      [
        "Electrical Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        94.3811959
      ],
      [
        "Electrical Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        90.2925429
      ],
      [
        "Electrical Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        63.5901214
      ],
      [
        "Electrical Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        90.9657321
      ],
      [
        "Electrical Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        93.0903303
      ],
      [
        "Electrical Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        90.7559146
      ],
      [
        "Electrical Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        93.4464908
      ],
      [
        "Electrical Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        93.7060041
      ],
      [
        "Electrical Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        93.9374669
      ],
      [
        "Electrical Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        93.3927676
      ],
      [
        "Electrical Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        88.2977496
      ],
      [
        "Electrical Engineering",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        74.6853954
      ],
      [
        "Electrical Engineering",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        88.7231708
      ],
      [
        "Electrical Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        92.2738405
      ],
      [
        "Electrical Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        92.9781315
      ],
      [
        "Electrical Engineering",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        77.4501436
      ],
      [
        "Electrical Engineering",
        "PWDOBC",
        "State",
        null,
        null,
        null,
        47.8532423
      ],
      [
        "Electrical Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        85.9003507
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "State",
        null,
        null,
        null,
        95.7937272
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC",
        "State",
        null,
        null,
        null,
        91.0435718
      ],
      [
        "Electronics and Telecommunication Engg",
        "ST",
        "State",
        null,
        null,
        null,
        65.9070599
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        90.6279863
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-A",
        "State",
        null,
        null,
        null,
        91.5631399
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B",
        "State",
        null,
        null,
        null,
        94.2531106
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-C",
        "State",
        null,
        null,
        null,
        95.3795495
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC",
        "State",
        null,
        null,
        null,
        95.343223
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC",
        "State",
        null,
        null,
        null,
        94.9624784
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        95.9433601
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        92.4095563
      ],
      [
        "Electronics and Telecommunication Engg",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        68.8065641
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        90.866765
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        89.7903443
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        91.6505265
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        95.3082494
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        95.1933808
      ],
      [
        "Electronics and Telecommunication Engg",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        66.1911263
      ],
      [
        "Electronics and Telecommunication Engg",
        "PWDOBC",
        "State",
        null,
        null,
        null,
        45.6611497
      ],
      [
        "Electronics and Telecommunication Engg",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        89.3287171
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        95.7070884
      ],
      [
        "Mechanical Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        88.070986
      ],
      [
        "Mechanical Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        63.003413
      ],
      [
        "Mechanical Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        88.5427828
      ],
      [
        "Mechanical Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        89.657308
      ],
      [
        "Mechanical Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        90.7559146
      ],
      [
        "Mechanical Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        93.4464908
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        94.2471177
      ],
      [
        "Mechanical Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        93.442623
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        94.9430074
      ],
      [
        "Mechanical Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        84.9389417
      ],
      [
        "Mechanical Engineering",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        78.975446
      ],
      [
        "Mechanical Engineering",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        91.1602633
      ],
      [
        "Mechanical Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        94.2967096
      ],
      [
        "Mechanical Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        90.9612775
      ],
      [
        "Mechanical Engineering",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        64.1499185
      ],
      [
        "Mechanical Engineering",
        "PWDOBC",
        "State",
        null,
        null,
        null,
        5.433669
      ],
      [
        "Mechanical Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        92.9703046
      ]
    ],
    "profile": {
      "overview": "Government College of Engineering, Chhatrapati Sambhajinagar is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 02008. Status: Government Autonomous. University/affiliation recorded in the CET directory: Autonomous Institute.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Chhatrapati Sambhajinagar, Chhatrapati Sambhajinagar, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Government Autonomous.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=02008",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=02008"
      ]
    }
  },
  {
    "id": "02015",
    "name": "Puranmal Lahoti Government Institute of Engineering and Technology, Latur",
    "shortName": "PLGIET Latur",
    "city": "Latur",
    "region": "Marathwada",
    "district": "Latur",
    "status": "Government",
    "university": "Dr. Babasaheb Ambedkar Technological University",
    "branches": [
      "Computer Engineering",
      "Electronics and Telecommunication Engg",
      "AI & Data Science"
    ],
    "cutoffs": [
      [
        "Computer Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        86.8832732
      ],
      [
        "Computer Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        82.4999118
      ],
      [
        "Computer Engineering",
        "ST",
        "H",
        null,
        null,
        null,
        25.0611389
      ],
      [
        "Computer Engineering",
        "NT-A",
        "H",
        null,
        null,
        null,
        74.8210845
      ],
      [
        "Computer Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        84.3786315
      ],
      [
        "Computer Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        85.3230758
      ],
      [
        "Computer Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        84.4651484
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        89.9742931
      ],
      [
        "Computer Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        86.8832732
      ],
      [
        "Computer Engineering",
        "ST-Ladies",
        "H",
        null,
        null,
        null,
        27.5667492
      ],
      [
        "Computer Engineering",
        "VJ/DT-Ladies",
        "H",
        null,
        null,
        null,
        80.5595655
      ],
      [
        "Computer Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        88.8686273
      ],
      [
        "Computer Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        88.8686273
      ],
      [
        "Computer Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        90.3279027
      ],
      [
        "Computer Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        84.207639
      ],
      [
        "Computer Engineering",
        "NT-B",
        "O",
        null,
        null,
        null,
        84.4852349
      ],
      [
        "Computer Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        89.5593612
      ],
      [
        "Computer Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        88.7231708
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        91.3216011
      ],
      [
        "Computer Engineering",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        77.9589871
      ],
      [
        "Computer Engineering",
        "ST-Ladies",
        "O",
        null,
        null,
        null,
        72.9916849
      ],
      [
        "Computer Engineering",
        "NT-C-Ladies",
        "O",
        null,
        null,
        null,
        88.5024155
      ],
      [
        "Computer Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        64.5293156
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "H",
        null,
        null,
        null,
        77.550585
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC",
        "H",
        null,
        null,
        null,
        68.4225402
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        60.268127
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B",
        "H",
        null,
        null,
        null,
        76.3286018
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-C",
        "H",
        null,
        null,
        null,
        77.2619593
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC",
        "H",
        null,
        null,
        null,
        72.9916849
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC",
        "H",
        null,
        null,
        null,
        74.9893249
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        81.6127789
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        68.6498934
      ],
      [
        "Electronics and Telecommunication Engg",
        "ST-Ladies",
        "H",
        null,
        null,
        null,
        51.0139791
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        76.6993653
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        76.3324995
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        79.7046663
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "O",
        null,
        null,
        null,
        85.4732337
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC",
        "O",
        null,
        null,
        null,
        71.1120286
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT",
        "O",
        null,
        null,
        null,
        79.3766715
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC",
        "O",
        null,
        null,
        null,
        81.4271094
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC",
        "O",
        null,
        null,
        null,
        83.7030299
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        85.9425358
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-A-Ladies",
        "O",
        null,
        null,
        null,
        47.8219396
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        84.2510483
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        77.6220509
      ],
      [
        "AI & Data Science",
        "OPEN",
        "H",
        null,
        null,
        null,
        82.0388536
      ],
      [
        "AI & Data Science",
        "SC",
        "H",
        null,
        null,
        null,
        69.3900327
      ],
      [
        "AI & Data Science",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        71.5917775
      ],
      [
        "AI & Data Science",
        "NT-A",
        "H",
        null,
        null,
        null,
        56.92563
      ],
      [
        "AI & Data Science",
        "NT-B",
        "H",
        null,
        null,
        null,
        78.9956692
      ],
      [
        "AI & Data Science",
        "NT-C",
        "H",
        null,
        null,
        null,
        78.9956692
      ],
      [
        "AI & Data Science",
        "OBC",
        "H",
        null,
        null,
        null,
        77.7140658
      ],
      [
        "AI & Data Science",
        "SEBC",
        "H",
        null,
        null,
        null,
        79.0728986
      ],
      [
        "AI & Data Science",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        84.7521447
      ],
      [
        "AI & Data Science",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        78.4699621
      ],
      [
        "AI & Data Science",
        "VJ/DT-Ladies",
        "H",
        null,
        null,
        null,
        35.5990164
      ],
      [
        "AI & Data Science",
        "NT-A-Ladies",
        "H",
        null,
        null,
        null,
        59.2124434
      ],
      [
        "AI & Data Science",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        84.3396689
      ],
      [
        "AI & Data Science",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        81.3089554
      ],
      [
        "AI & Data Science",
        "OPEN",
        "O",
        null,
        null,
        null,
        89.1852024
      ],
      [
        "AI & Data Science",
        "SC",
        "O",
        null,
        null,
        null,
        83.9283276
      ],
      [
        "AI & Data Science",
        "OBC",
        "O",
        null,
        null,
        null,
        87.3221306
      ],
      [
        "AI & Data Science",
        "SEBC",
        "O",
        null,
        null,
        null,
        84.5857013
      ],
      [
        "AI & Data Science",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        92.8822002
      ],
      [
        "AI & Data Science",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        74.0786749
      ],
      [
        "AI & Data Science",
        "NT-B-Ladies",
        "O",
        null,
        null,
        null,
        83.4527296
      ],
      [
        "AI & Data Science",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        90.2925429
      ]
    ],
    "profile": {
      "overview": "Puranmal Lahoti Government Institute of Engineering and Technology, Latur is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 02015. Status: Government. University/affiliation recorded in the CET directory: Dr. Babasaheb Ambedkar Technological University.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Latur, Latur, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Government.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=02015",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=02015"
      ]
    }
  },
  {
    "id": "02020",
    "name": "Shri Guru Gobind Singhji Institute of Engineering and Technology, Nanded",
    "shortName": "SGGSIET Nanded",
    "city": "Nanded",
    "region": "Marathwada",
    "district": "Nanded",
    "status": "Government Autonomous",
    "university": "Autonomous Institute",
    "branches": [
      "Civil Engineering",
      "Computer Science and Engineering",
      "Information Technology",
      "Electrical Engineering",
      "Electronics and Telecommunication Engg",
      "Instrumentation Engineering",
      "Chemical Engineering",
      "Production Engineering",
      "Mechanical Engineering",
      "Textile Technology"
    ],
    "cutoffs": [
      [
        "Civil Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        91.4806522
      ],
      [
        "Civil Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        83.73706
      ],
      [
        "Civil Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        70.8903389
      ],
      [
        "Civil Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        87.9735649
      ],
      [
        "Civil Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        90.966814
      ],
      [
        "Civil Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        88.8686273
      ],
      [
        "Civil Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        90.866765
      ],
      [
        "Civil Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        90.6279863
      ],
      [
        "Civil Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        90.8571649
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        91.1718238
      ],
      [
        "Civil Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        83.7431799
      ],
      [
        "Civil Engineering",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        73.2860799
      ],
      [
        "Civil Engineering",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        81.8599034
      ],
      [
        "Civil Engineering",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        90.9727817
      ],
      [
        "Civil Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        89.5119454
      ],
      [
        "Civil Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        89.2347783
      ],
      [
        "Civil Engineering",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        27.1206001
      ],
      [
        "Civil Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        54.2626684
      ],
      [
        "Computer Science and Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        97.1637483
      ],
      [
        "Computer Science and Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        92.9781315
      ],
      [
        "Computer Science and Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        76.973775
      ],
      [
        "Computer Science and Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        96.1680205
      ],
      [
        "Computer Science and Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        95.0252399
      ],
      [
        "Computer Science and Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        96.5024907
      ],
      [
        "Computer Science and Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        96.8936433
      ],
      [
        "Computer Science and Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        96.6966757
      ],
      [
        "Computer Science and Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        96.5873016
      ],
      [
        "Computer Science and Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        96.7842505
      ],
      [
        "Computer Science and Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        91.4802758
      ],
      [
        "Computer Science and Engineering",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        78.1913582
      ],
      [
        "Computer Science and Engineering",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        96.4650004
      ],
      [
        "Computer Science and Engineering",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        96.3170599
      ],
      [
        "Computer Science and Engineering",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        94.243738
      ],
      [
        "Computer Science and Engineering",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        95.1577916
      ],
      [
        "Computer Science and Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        96.3722342
      ],
      [
        "Computer Science and Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        96.3170599
      ],
      [
        "Computer Science and Engineering",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        85.9212092
      ],
      [
        "Information Technology",
        "OPEN",
        "State",
        null,
        null,
        null,
        96.3919151
      ],
      [
        "Information Technology",
        "SC",
        "State",
        null,
        null,
        null,
        92.2153383
      ],
      [
        "Information Technology",
        "ST",
        "State",
        null,
        null,
        null,
        70.4097117
      ],
      [
        "Information Technology",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        95.7805094
      ],
      [
        "Information Technology",
        "NT-B",
        "State",
        null,
        null,
        null,
        96.389325
      ],
      [
        "Information Technology",
        "NT-C",
        "State",
        null,
        null,
        null,
        95.1724675
      ],
      [
        "Information Technology",
        "OBC",
        "State",
        null,
        null,
        null,
        96.1393231
      ],
      [
        "Information Technology",
        "SEBC",
        "State",
        null,
        null,
        null,
        96.3129908
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        96.3129908
      ],
      [
        "Information Technology",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        91.0668866
      ],
      [
        "Information Technology",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        59.2443064
      ],
      [
        "Information Technology",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        95.1113117
      ],
      [
        "Information Technology",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        92.6489748
      ],
      [
        "Information Technology",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        93.9120113
      ],
      [
        "Information Technology",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        96.1068782
      ],
      [
        "Information Technology",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        95.7033017
      ],
      [
        "Information Technology",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        81.643697
      ],
      [
        "Information Technology",
        "PWDOBC",
        "State",
        null,
        null,
        null,
        37.8307719
      ],
      [
        "Information Technology",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        90.6918865
      ],
      [
        "Electrical Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        94.5016522
      ],
      [
        "Electrical Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        88.9445493
      ],
      [
        "Electrical Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        94.333639
      ],
      [
        "Electrical Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        92.7467219
      ],
      [
        "Electrical Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        91.8983104
      ],
      [
        "Electrical Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        92.0393375
      ],
      [
        "Electrical Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        94.2471177
      ],
      [
        "Electrical Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        93.4790313
      ],
      [
        "Electrical Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        94.3971331
      ],
      [
        "Electrical Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        94.2691204
      ],
      [
        "Electrical Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        93.8558913
      ],
      [
        "Electrical Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        93.887286
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "State",
        null,
        null,
        null,
        95.1330171
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC",
        "State",
        null,
        null,
        null,
        89.4256012
      ],
      [
        "Electronics and Telecommunication Engg",
        "ST",
        "State",
        null,
        null,
        null,
        64.1499185
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        93.4491576
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-A",
        "State",
        null,
        null,
        null,
        94.6756384
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B",
        "State",
        null,
        null,
        null,
        93.3747412
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-C",
        "State",
        null,
        null,
        null,
        94.9408232
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC",
        "State",
        null,
        null,
        null,
        94.5553041
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC",
        "State",
        null,
        null,
        null,
        94.2691204
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        94.9817832
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        89.451403
      ],
      [
        "Electronics and Telecommunication Engg",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        47.4563898
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        91.2331407
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        90.7163631
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        94.1948569
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        91.1313556
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        94.4264691
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        94.5733788
      ],
      [
        "Electronics and Telecommunication Engg",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        58.1324148
      ],
      [
        "Electronics and Telecommunication Engg",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        85.0803043
      ],
      [
        "Instrumentation Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        93.0779848
      ],
      [
        "Instrumentation Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        88.5427828
      ],
      [
        "Instrumentation Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        57.4188806
      ],
      [
        "Instrumentation Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        86.6676057
      ],
      [
        "Instrumentation Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        91.3672693
      ],
      [
        "Instrumentation Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        92.0888164
      ],
      [
        "Instrumentation Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        92.0068259
      ],
      [
        "Instrumentation Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        92.9443952
      ],
      [
        "Instrumentation Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        90.0196524
      ],
      [
        "Instrumentation Engineering",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        46.2039046
      ],
      [
        "Instrumentation Engineering",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        92.8766596
      ],
      [
        "Instrumentation Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        91.6438644
      ],
      [
        "Instrumentation Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        91.6804693
      ],
      [
        "Instrumentation Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        77.937978
      ],
      [
        "Chemical Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        91.4174744
      ],
      [
        "Chemical Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        84.2510483
      ],
      [
        "Chemical Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        41.7620841
      ],
      [
        "Chemical Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        83.73706
      ],
      [
        "Chemical Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        86.3037543
      ],
      [
        "Chemical Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        90.1218002
      ],
      [
        "Chemical Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        90.112628
      ],
      [
        "Chemical Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        93.1255955
      ],
      [
        "Chemical Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        87.2379152
      ],
      [
        "Chemical Engineering",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        76.2668468
      ],
      [
        "Chemical Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        90.5728815
      ],
      [
        "Chemical Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        90.6279863
      ],
      [
        "Production Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        85.3954204
      ],
      [
        "Production Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        78.1913582
      ],
      [
        "Production Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        80.9705409
      ],
      [
        "Production Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        81.9712626
      ],
      [
        "Production Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        81.2365306
      ],
      [
        "Production Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        83.1707575
      ],
      [
        "Production Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        83.4527296
      ],
      [
        "Production Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        86.2729883
      ],
      [
        "Production Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        76.131941
      ],
      [
        "Production Engineering",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        64.2198294
      ],
      [
        "Production Engineering",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        62.5282864
      ],
      [
        "Production Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        83.7030299
      ],
      [
        "Production Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        85.6921506
      ],
      [
        "Production Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        15.6344619
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        93.4220277
      ],
      [
        "Mechanical Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        88.8686273
      ],
      [
        "Mechanical Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        57.0044084
      ],
      [
        "Mechanical Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        92.5132937
      ],
      [
        "Mechanical Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        91.3857287
      ],
      [
        "Mechanical Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        90.5659048
      ],
      [
        "Mechanical Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        92.6489748
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        93.0166968
      ],
      [
        "Mechanical Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        91.3857287
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        92.5914149
      ],
      [
        "Mechanical Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        84.4412567
      ],
      [
        "Mechanical Engineering",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        46.2039046
      ],
      [
        "Mechanical Engineering",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        72.4223602
      ],
      [
        "Mechanical Engineering",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        85.129786
      ],
      [
        "Mechanical Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        91.8983104
      ],
      [
        "Mechanical Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        91.0135161
      ],
      [
        "Mechanical Engineering",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        40.6688911
      ],
      [
        "Mechanical Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        88.1535836
      ],
      [
        "Textile Technology",
        "OPEN",
        "State",
        null,
        null,
        null,
        87.9735649
      ],
      [
        "Textile Technology",
        "SC",
        "State",
        null,
        null,
        null,
        78.4082225
      ],
      [
        "Textile Technology",
        "ST",
        "State",
        null,
        null,
        null,
        45.6611497
      ],
      [
        "Textile Technology",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        54.96898
      ],
      [
        "Textile Technology",
        "NT-B",
        "State",
        null,
        null,
        null,
        81.9314642
      ],
      [
        "Textile Technology",
        "OBC",
        "State",
        null,
        null,
        null,
        85.0853734
      ],
      [
        "Textile Technology",
        "SEBC",
        "State",
        null,
        null,
        null,
        86.3482671
      ],
      [
        "Textile Technology",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        88.8600683
      ],
      [
        "Textile Technology",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        84.0343736
      ],
      [
        "Textile Technology",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        56.6825649
      ],
      [
        "Textile Technology",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        72.8027463
      ],
      [
        "Textile Technology",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        87.4032298
      ]
    ],
    "profile": {
      "overview": "Shri Guru Gobind Singhji Institute of Engineering and Technology, Nanded is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 02020. Status: Government Autonomous. University/affiliation recorded in the CET directory: Autonomous Institute.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Nanded, Nanded, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Government Autonomous.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=02020",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=02020"
      ]
    }
  },
  {
    "id": "02113",
    "name": "G. S. Mandal's Maharashtra Institute of Technology, Aurangabad",
    "shortName": "MIT Aurangabad",
    "city": "Chhatrapati Sambhajinagar",
    "region": "Marathwada",
    "district": "Chhatrapati Sambhajinagar",
    "status": "Un-Aided",
    "university": "Dr. Babasaheb Ambedkar Technological University",
    "branches": [
      "Agricultural Engineering",
      "Civil Engineering",
      "Computer Science and Engineering",
      "Computer Science and Design",
      "Artificial Intelligence (AI) and Data Science",
      "Electrical Engineering",
      "Electronics and Telecommunication Engg",
      "Plastic and Polymer Engineering",
      "Mechanical Engineering",
      "Mechatronics Engineering",
      "Electronics and Computer Engineering"
    ],
    "cutoffs": [
      [
        "Agricultural Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        93.1692658
      ],
      [
        "Agricultural Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        91.6849287
      ],
      [
        "Agricultural Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        73.0125794
      ],
      [
        "Agricultural Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        83.8629512
      ],
      [
        "Agricultural Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        81.0376189
      ],
      [
        "Agricultural Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        88.0876068
      ],
      [
        "Agricultural Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        83.2805393
      ],
      [
        "Agricultural Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        96.4579224
      ],
      [
        "Agricultural Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        91.7950237
      ],
      [
        "Agricultural Engineering",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        34.1022162
      ],
      [
        "Agricultural Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        92.1906652
      ],
      [
        "Agricultural Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        90.4057688
      ],
      [
        "Civil Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        66.4794206
      ],
      [
        "Civil Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        50.8920685
      ],
      [
        "Civil Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        24.3359483
      ],
      [
        "Civil Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        62.5282864
      ],
      [
        "Civil Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        60.4816409
      ],
      [
        "Civil Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        49.8699585
      ],
      [
        "Civil Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        63.5303851
      ],
      [
        "Civil Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        58.1324148
      ],
      [
        "Civil Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        63.003413
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        68.0484125
      ],
      [
        "Civil Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        47.0872596
      ],
      [
        "Civil Engineering",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        68.0484125
      ],
      [
        "Civil Engineering",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        66.5496835
      ],
      [
        "Civil Engineering",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        46.3536656
      ],
      [
        "Civil Engineering",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        62.9339383
      ],
      [
        "Civil Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        58.3262891
      ],
      [
        "Civil Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        59.8130199
      ],
      [
        "Civil Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        19.5229257
      ],
      [
        "Computer Science and Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        83.8560469
      ],
      [
        "Computer Science and Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        75.2331528
      ],
      [
        "Computer Science and Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        11.4456589
      ],
      [
        "Computer Science and Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        79.9864621
      ],
      [
        "Computer Science and Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        80.1708014
      ],
      [
        "Computer Science and Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        79.3766715
      ],
      [
        "Computer Science and Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        81.9275869
      ],
      [
        "Computer Science and Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        81.8599034
      ],
      [
        "Computer Science and Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        81.8599034
      ],
      [
        "Computer Science and Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        86.6485431
      ],
      [
        "Computer Science and Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        78.890785
      ],
      [
        "Computer Science and Engineering",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        41.7943409
      ],
      [
        "Computer Science and Engineering",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        82.4850758
      ],
      [
        "Computer Science and Engineering",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        78.9025471
      ],
      [
        "Computer Science and Engineering",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        81.6656822
      ],
      [
        "Computer Science and Engineering",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        83.1461103
      ],
      [
        "Computer Science and Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        83.2071736
      ],
      [
        "Computer Science and Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        84.3396689
      ],
      [
        "Computer Science and Engineering",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        63.4757967
      ],
      [
        "Computer Science and Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        55.4743121
      ],
      [
        "Computer Science and Design",
        "OPEN",
        "State",
        null,
        null,
        null,
        75.8548894
      ],
      [
        "Computer Science and Design",
        "SC",
        "State",
        null,
        null,
        null,
        68.6498934
      ],
      [
        "Computer Science and Design",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        68.6717464
      ],
      [
        "Computer Science and Design",
        "NT-A",
        "State",
        null,
        null,
        null,
        73.2908824
      ],
      [
        "Computer Science and Design",
        "NT-B",
        "State",
        null,
        null,
        null,
        72.0373703
      ],
      [
        "Computer Science and Design",
        "NT-C",
        "State",
        null,
        null,
        null,
        75.110975
      ],
      [
        "Computer Science and Design",
        "OBC",
        "State",
        null,
        null,
        null,
        73.2109713
      ],
      [
        "Computer Science and Design",
        "SEBC",
        "State",
        null,
        null,
        null,
        72.9249982
      ],
      [
        "Computer Science and Design",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        77.540946
      ],
      [
        "Computer Science and Design",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        67.2980865
      ],
      [
        "Computer Science and Design",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        70.4215645
      ],
      [
        "Computer Science and Design",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        69.3105802
      ],
      [
        "Computer Science and Design",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        74.6853954
      ],
      [
        "Computer Science and Design",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        74.6275026
      ],
      [
        "Computer Science and Design",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        74.9893249
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "OPEN",
        "State",
        null,
        null,
        null,
        80.5595655
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "SC",
        "State",
        null,
        null,
        null,
        72.8488305
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "ST",
        "State",
        null,
        null,
        null,
        72.6740126
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        77.8612083
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "NT-A",
        "State",
        null,
        null,
        null,
        74.75684
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "NT-B",
        "State",
        null,
        null,
        null,
        79.0728986
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "NT-C",
        "State",
        null,
        null,
        null,
        77.9589871
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "OBC",
        "State",
        null,
        null,
        null,
        78.699881
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "SEBC",
        "State",
        null,
        null,
        null,
        78.975446
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        81.9712626
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        73.3487346
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        66.0913492
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        75.2153333
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        79.4627847
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        77.2143105
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        78.9025471
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        79.3766715
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        80.1749582
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        14.6839821
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        52.1256716
      ],
      [
        "Electrical Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        68.9409579
      ],
      [
        "Electrical Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        54.96898
      ],
      [
        "Electrical Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        65.9070599
      ],
      [
        "Electrical Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        62.5282864
      ],
      [
        "Electrical Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        66.7193141
      ],
      [
        "Electrical Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        68.4225402
      ],
      [
        "Electrical Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        65.2933256
      ],
      [
        "Electrical Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        66.3432235
      ],
      [
        "Electrical Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        71.0421393
      ],
      [
        "Electrical Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        54.7674174
      ],
      [
        "Electrical Engineering",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        55.2387338
      ],
      [
        "Electrical Engineering",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        48.1265004
      ],
      [
        "Electrical Engineering",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        43.2614932
      ],
      [
        "Electrical Engineering",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        70.6987601
      ],
      [
        "Electrical Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        66.561551
      ],
      [
        "Electrical Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        67.967082
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "State",
        null,
        null,
        null,
        77.550585
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC",
        "State",
        null,
        null,
        null,
        70.4097117
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        70.3444621
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-A",
        "State",
        null,
        null,
        null,
        74.6516923
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B",
        "State",
        null,
        null,
        null,
        74.8088122
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-C",
        "State",
        null,
        null,
        null,
        77.4501436
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC",
        "State",
        null,
        null,
        null,
        75.6051641
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC",
        "State",
        null,
        null,
        null,
        76.3286018
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        79.4627847
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        68.8065641
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        71.4864246
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        68.0484125
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        78.975446
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        79.2630446
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        76.2668468
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        77.8612083
      ],
      [
        "Plastic and Polymer Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        42.1633326
      ],
      [
        "Plastic and Polymer Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        11.1244146
      ],
      [
        "Plastic and Polymer Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        22.0653604
      ],
      [
        "Plastic and Polymer Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        28.7221654
      ],
      [
        "Plastic and Polymer Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        11.420728
      ],
      [
        "Plastic and Polymer Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        31.4943887
      ],
      [
        "Plastic and Polymer Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        29.2374051
      ],
      [
        "Plastic and Polymer Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        27.84396
      ],
      [
        "Plastic and Polymer Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        52.1191375
      ],
      [
        "Plastic and Polymer Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        34.8863278
      ],
      [
        "Plastic and Polymer Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        50.184431
      ],
      [
        "Plastic and Polymer Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        26.2353347
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        70.3444621
      ],
      [
        "Mechanical Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        60.5118338
      ],
      [
        "Mechanical Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        65.4837825
      ],
      [
        "Mechanical Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        61.2510322
      ],
      [
        "Mechanical Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        62.6016833
      ],
      [
        "Mechanical Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        67.967082
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        64.1499185
      ],
      [
        "Mechanical Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        66.7193141
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        66.8147184
      ],
      [
        "Mechanical Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        58.4294088
      ],
      [
        "Mechanical Engineering",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        45.9819894
      ],
      [
        "Mechanical Engineering",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        61.2510322
      ],
      [
        "Mechanical Engineering",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        63.5303851
      ],
      [
        "Mechanical Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        60.4816409
      ],
      [
        "Mechanical Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        62.8284912
      ],
      [
        "Mechatronics Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        63.4876968
      ],
      [
        "Mechatronics Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        45.4941917
      ],
      [
        "Mechatronics Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        54.96898
      ],
      [
        "Mechatronics Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        41.3533547
      ],
      [
        "Mechatronics Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        53.7405107
      ],
      [
        "Mechatronics Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        60.070698
      ],
      [
        "Mechatronics Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        58.235114
      ],
      [
        "Mechatronics Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        59.5017065
      ],
      [
        "Mechatronics Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        46.2039046
      ],
      [
        "Mechatronics Engineering",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        37.1881218
      ],
      [
        "Mechatronics Engineering",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        55.6597249
      ],
      [
        "Mechatronics Engineering",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        55.6712077
      ],
      [
        "Mechatronics Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        83.4251983
      ],
      [
        "Mechatronics Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        11.6326387
      ],
      [
        "Electronics and Computer Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        72.1871837
      ],
      [
        "Electronics and Computer Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        63.5303851
      ],
      [
        "Electronics and Computer Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        66.0549811
      ],
      [
        "Electronics and Computer Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        65.8087807
      ],
      [
        "Electronics and Computer Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        67.3167917
      ],
      [
        "Electronics and Computer Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        70.4215645
      ],
      [
        "Electronics and Computer Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        69.3105802
      ],
      [
        "Electronics and Computer Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        70.8903389
      ],
      [
        "Electronics and Computer Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        74.2209832
      ],
      [
        "Electronics and Computer Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        63.9397326
      ],
      [
        "Electronics and Computer Engineering",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        65.6970807
      ],
      [
        "Electronics and Computer Engineering",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        68.9346395
      ],
      [
        "Electronics and Computer Engineering",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        69.3105802
      ],
      [
        "Electronics and Computer Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        70.3901803
      ],
      [
        "Electronics and Computer Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        71.4864246
      ]
    ],
    "profile": {
      "overview": "G. S. Mandal's Maharashtra Institute of Technology, Aurangabad is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 02113. Status: Un-Aided. University/affiliation recorded in the CET directory: Dr. Babasaheb Ambedkar Technological University.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Chhatrapati Sambhajinagar, Chhatrapati Sambhajinagar, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Un-Aided.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=02113",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=02113"
      ]
    }
  },
  {
    "id": "02114",
    "name": "Deogiri Institute of Engineering and Management Studies, Aurangabad",
    "shortName": "DIEMS Aurangabad",
    "city": "Chhatrapati Sambhajinagar",
    "region": "Marathwada",
    "district": "Chhatrapati Sambhajinagar",
    "status": "Un-Aided",
    "university": "Dr. Babasaheb Ambedkar Technological University",
    "branches": [
      "Civil Engineering",
      "Computer Science and Engineering",
      "Artificial Intelligence (AI) and Data Science",
      "Electrical Engineering",
      "Electronics and Telecommunication Engg",
      "Mechanical Engineering",
      "Computer Science and Engineering (AI & ML)"
    ],
    "cutoffs": [
      [
        "Civil Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        68.6031011
      ],
      [
        "Civil Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        57.4188806
      ],
      [
        "Civil Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        41.0952232
      ],
      [
        "Civil Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        63.5035466
      ],
      [
        "Civil Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        50.5512969
      ],
      [
        "Civil Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        57.0070614
      ],
      [
        "Civil Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        63.5303851
      ],
      [
        "Civil Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        62.5282864
      ],
      [
        "Civil Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        66.0549811
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        75.2331528
      ],
      [
        "Civil Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        56.1183815
      ],
      [
        "Civil Engineering",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        31.2469386
      ],
      [
        "Civil Engineering",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        61.7346759
      ],
      [
        "Civil Engineering",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        44.3215833
      ],
      [
        "Civil Engineering",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        60.5539527
      ],
      [
        "Civil Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        68.063194
      ],
      [
        "Civil Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        70.3402566
      ],
      [
        "Computer Science and Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        87.2196787
      ],
      [
        "Computer Science and Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        80.78157
      ],
      [
        "Computer Science and Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        32.4603175
      ],
      [
        "Computer Science and Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        86.8832732
      ],
      [
        "Computer Science and Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        83.1030453
      ],
      [
        "Computer Science and Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        82.9459739
      ],
      [
        "Computer Science and Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        83.1707575
      ],
      [
        "Computer Science and Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        85.0971341
      ],
      [
        "Computer Science and Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        86.3037543
      ],
      [
        "Computer Science and Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        89.3655049
      ],
      [
        "Computer Science and Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        80.2462012
      ],
      [
        "Computer Science and Engineering",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        61.7346759
      ],
      [
        "Computer Science and Engineering",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        85.1749825
      ],
      [
        "Computer Science and Engineering",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        80.5383458
      ],
      [
        "Computer Science and Engineering",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        83.9283276
      ],
      [
        "Computer Science and Engineering",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        84.2510483
      ],
      [
        "Computer Science and Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        87.609626
      ],
      [
        "Computer Science and Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        88.0941637
      ],
      [
        "Computer Science and Engineering",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        15.1259327
      ],
      [
        "Computer Science and Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        71.5294662
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "OPEN",
        "State",
        null,
        null,
        null,
        84.4790806
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "SC",
        "State",
        null,
        null,
        null,
        76.5032413
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        81.2365306
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "NT-A",
        "State",
        null,
        null,
        null,
        72.9916849
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "NT-B",
        "State",
        null,
        null,
        null,
        81.9314642
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "NT-C",
        "State",
        null,
        null,
        null,
        84.2510483
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "OBC",
        "State",
        null,
        null,
        null,
        81.9381769
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "SEBC",
        "State",
        null,
        null,
        null,
        84.0342981
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        85.9425358
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        77.4501436
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        65.6970807
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        78.890785
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        83.1030453
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        85.7757627
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        58.1924692
      ],
      [
        "Electrical Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        76.3384255
      ],
      [
        "Electrical Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        59.2124434
      ],
      [
        "Electrical Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        70.0706138
      ],
      [
        "Electrical Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        71.1120286
      ],
      [
        "Electrical Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        70.6987601
      ],
      [
        "Electrical Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        68.8065641
      ],
      [
        "Electrical Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        65.4837825
      ],
      [
        "Electrical Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        72.9249982
      ],
      [
        "Electrical Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        75.242318
      ],
      [
        "Electrical Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        60.9157012
      ],
      [
        "Electrical Engineering",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        64.1499185
      ],
      [
        "Electrical Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        68.063194
      ],
      [
        "Electrical Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        70.9390112
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "State",
        null,
        null,
        null,
        80.4944215
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC",
        "State",
        null,
        null,
        null,
        71.7660957
      ],
      [
        "Electronics and Telecommunication Engg",
        "ST",
        "State",
        null,
        null,
        null,
        45.457039
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        73.3487346
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-A",
        "State",
        null,
        null,
        null,
        73.2109713
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B",
        "State",
        null,
        null,
        null,
        75.1704646
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-C",
        "State",
        null,
        null,
        null,
        78.0816199
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC",
        "State",
        null,
        null,
        null,
        77.7384664
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC",
        "State",
        null,
        null,
        null,
        78.0816199
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        81.2365306
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        72.5022286
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        80.7035589
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        68.9409579
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        79.4663048
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        79.3766715
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        78.8262695
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        80.1766472
      ],
      [
        "Electronics and Telecommunication Engg",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        3.6536743
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        74.4163823
      ],
      [
        "Mechanical Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        62.8284912
      ],
      [
        "Mechanical Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        56.2435713
      ],
      [
        "Mechanical Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        70.9482593
      ],
      [
        "Mechanical Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        47.8219396
      ],
      [
        "Mechanical Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        71.0421393
      ],
      [
        "Mechanical Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        67.9203695
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        67.500481
      ],
      [
        "Mechanical Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        69.3105802
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        66.1311211
      ],
      [
        "Mechanical Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        58.4262318
      ],
      [
        "Mechanical Engineering",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        63.5303851
      ],
      [
        "Mechanical Engineering",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        57.8685189
      ],
      [
        "Mechanical Engineering",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        45.457039
      ],
      [
        "Mechanical Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        60.268127
      ],
      [
        "Mechanical Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        66.0549811
      ],
      [
        "Mechanical Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        13.1846958
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "OPEN",
        "State",
        null,
        null,
        null,
        85.3531656
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "SC",
        "State",
        null,
        null,
        null,
        79.3692556
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        80.7035589
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "NT-A",
        "State",
        null,
        null,
        null,
        85.129786
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "NT-B",
        "State",
        null,
        null,
        null,
        82.3454058
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "OBC",
        "State",
        null,
        null,
        null,
        83.1481862
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "SEBC",
        "State",
        null,
        null,
        null,
        85.129786
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        91.4174744
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        74.112751
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        82.9247643
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        83.7431799
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        90.9657321
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        34.1066887
      ]
    ],
    "profile": {
      "overview": "Deogiri Institute of Engineering and Management Studies, Aurangabad is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 02114. Status: Un-Aided. University/affiliation recorded in the CET directory: Dr. Babasaheb Ambedkar Technological University.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Chhatrapati Sambhajinagar, Chhatrapati Sambhajinagar, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Un-Aided.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=02114",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=02114"
      ]
    }
  },
  {
    "id": "02127",
    "name": "Mahatma Gandhi Missions College of Engineering, Nanded",
    "shortName": "MGMCOE Nanded",
    "city": "Nanded",
    "region": "Marathwada",
    "district": "Nanded",
    "status": "Un-Aided",
    "university": "Dr. Babasaheb Ambedkar Technological University",
    "branches": [
      "Civil Engineering",
      "Computer Science and Engineering",
      "Information Technology",
      "Electronics and Telecommunication Engg",
      "Mechanical Engineering",
      "Automation and Robotics",
      "Artificial Intelligence and Machine Learning",
      "AI & Data Science"
    ],
    "cutoffs": [
      [
        "Civil Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        76.6875679
      ],
      [
        "Civil Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        61.7346759
      ],
      [
        "Civil Engineering",
        "ST",
        "H",
        null,
        null,
        null,
        61.114444
      ],
      [
        "Civil Engineering",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        66.0956881
      ],
      [
        "Civil Engineering",
        "NT-A",
        "H",
        null,
        null,
        null,
        66.1169676
      ],
      [
        "Civil Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        72.5793422
      ],
      [
        "Civil Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        66.7193141
      ],
      [
        "Civil Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        66.1311211
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        77.2289819
      ],
      [
        "Civil Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        63.5901214
      ],
      [
        "Civil Engineering",
        "ST-Ladies",
        "H",
        null,
        null,
        null,
        64.087617
      ],
      [
        "Civil Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        75.1704646
      ],
      [
        "Civil Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        76.7952218
      ],
      [
        "Civil Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        77.2289819
      ],
      [
        "Civil Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        57.8274425
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        60.9758938
      ],
      [
        "Civil Engineering",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        5.9771774
      ],
      [
        "Civil Engineering",
        "NT-B-Ladies",
        "O",
        null,
        null,
        null,
        55.3743463
      ],
      [
        "Civil Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        60.9157012
      ],
      [
        "Civil Engineering",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        9.5733084
      ],
      [
        "Civil Engineering",
        "ST",
        "O",
        null,
        null,
        null,
        23.5136803
      ],
      [
        "Computer Science and Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        83.7986478
      ],
      [
        "Computer Science and Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        77.741426
      ],
      [
        "Computer Science and Engineering",
        "ST",
        "H",
        null,
        null,
        null,
        25.2991393
      ],
      [
        "Computer Science and Engineering",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        76.7952218
      ],
      [
        "Computer Science and Engineering",
        "NT-A",
        "H",
        null,
        null,
        null,
        81.9712626
      ],
      [
        "Computer Science and Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        83.3904312
      ],
      [
        "Computer Science and Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        81.4993122
      ],
      [
        "Computer Science and Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        81.4271094
      ],
      [
        "Computer Science and Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        87.730083
      ],
      [
        "Computer Science and Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        81.0159708
      ],
      [
        "Computer Science and Engineering",
        "ST-Ladies",
        "H",
        null,
        null,
        null,
        65.3107562
      ],
      [
        "Computer Science and Engineering",
        "VJ/DT-Ladies",
        "H",
        null,
        null,
        null,
        82.9708753
      ],
      [
        "Computer Science and Engineering",
        "NT-A-Ladies",
        "H",
        null,
        null,
        null,
        66.5496835
      ],
      [
        "Computer Science and Engineering",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        85.0803043
      ],
      [
        "Computer Science and Engineering",
        "NT-C-Ladies",
        "H",
        null,
        null,
        null,
        83.1461103
      ],
      [
        "Computer Science and Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        85.2987504
      ],
      [
        "Computer Science and Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        85.9106165
      ],
      [
        "Computer Science and Engineering",
        "PWDOPEN",
        "H",
        null,
        null,
        null,
        37.8307719
      ],
      [
        "Computer Science and Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        78.1913582
      ],
      [
        "Computer Science and Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        66.0549811
      ],
      [
        "Computer Science and Engineering",
        "ST",
        "O",
        null,
        null,
        null,
        20.9078498
      ],
      [
        "Computer Science and Engineering",
        "NT-A",
        "O",
        null,
        null,
        null,
        73.9021728
      ],
      [
        "Computer Science and Engineering",
        "NT-B",
        "O",
        null,
        null,
        null,
        60.268127
      ],
      [
        "Computer Science and Engineering",
        "NT-C",
        "O",
        null,
        null,
        null,
        77.7140658
      ],
      [
        "Computer Science and Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        75.8548894
      ],
      [
        "Computer Science and Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        75.9743237
      ],
      [
        "Computer Science and Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        84.4412567
      ],
      [
        "Computer Science and Engineering",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        67.2460619
      ],
      [
        "Computer Science and Engineering",
        "ST-Ladies",
        "O",
        null,
        null,
        null,
        45.8934793
      ],
      [
        "Computer Science and Engineering",
        "VJ/DT-Ladies",
        "O",
        null,
        null,
        null,
        61.5912113
      ],
      [
        "Computer Science and Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        81.9137967
      ],
      [
        "Computer Science and Engineering",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        83.0532651
      ],
      [
        "Computer Science and Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        36.1833289
      ],
      [
        "Information Technology",
        "OPEN",
        "H",
        null,
        null,
        null,
        78.2850242
      ],
      [
        "Information Technology",
        "SC",
        "H",
        null,
        null,
        null,
        71.4864246
      ],
      [
        "Information Technology",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        74.5525612
      ],
      [
        "Information Technology",
        "NT-A",
        "H",
        null,
        null,
        null,
        63.4757967
      ],
      [
        "Information Technology",
        "NT-B",
        "H",
        null,
        null,
        null,
        72.4223602
      ],
      [
        "Information Technology",
        "NT-C",
        "H",
        null,
        null,
        null,
        73.3356624
      ],
      [
        "Information Technology",
        "OBC",
        "H",
        null,
        null,
        null,
        76.3324995
      ],
      [
        "Information Technology",
        "SEBC",
        "H",
        null,
        null,
        null,
        76.6993653
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        80.4716144
      ],
      [
        "Information Technology",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        71.4142775
      ],
      [
        "Information Technology",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        77.7140658
      ],
      [
        "Information Technology",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        78.699881
      ],
      [
        "Information Technology",
        "OPEN",
        "O",
        null,
        null,
        null,
        71.2894525
      ],
      [
        "Information Technology",
        "SC",
        "O",
        null,
        null,
        null,
        60.070698
      ],
      [
        "Information Technology",
        "VJ/DT",
        "O",
        null,
        null,
        null,
        49.0487536
      ],
      [
        "Information Technology",
        "OBC",
        "O",
        null,
        null,
        null,
        66.7193141
      ],
      [
        "Information Technology",
        "SEBC",
        "O",
        null,
        null,
        null,
        66.1911263
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        73.6510161
      ],
      [
        "Information Technology",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        71.9146758
      ],
      [
        "Information Technology",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        37.8307719
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "H",
        null,
        null,
        null,
        74.1334872
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC",
        "H",
        null,
        null,
        null,
        59.2443064
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        73.9021728
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC",
        "H",
        null,
        null,
        null,
        70.6970324
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC",
        "H",
        null,
        null,
        null,
        73.2041877
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        77.4128766
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        58.4262318
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT-Ladies",
        "H",
        null,
        null,
        null,
        54.7674174
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        64.7164682
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        75.110975
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "O",
        null,
        null,
        null,
        71.7660957
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC",
        "O",
        null,
        null,
        null,
        48.401775
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B",
        "O",
        null,
        null,
        null,
        58.1324148
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC",
        "O",
        null,
        null,
        null,
        60.7556304
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        74.9818126
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        60.010721
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-A-Ladies",
        "O",
        null,
        null,
        null,
        52.0988164
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        74.8088122
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        55.7703505
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-C-Ladies",
        "O",
        null,
        null,
        null,
        63.552865
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        68.6254044
      ],
      [
        "Mechanical Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        53.1039032
      ],
      [
        "Mechanical Engineering",
        "NT-A",
        "H",
        null,
        null,
        null,
        37.2578704
      ],
      [
        "Mechanical Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        58.1324148
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        61.114444
      ],
      [
        "Mechanical Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        65.1614878
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        66.5496835
      ],
      [
        "Mechanical Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        66.1911263
      ],
      [
        "Mechanical Engineering",
        "NT-A-Ladies",
        "H",
        null,
        null,
        null,
        11.0099135
      ],
      [
        "Mechanical Engineering",
        "NT-C-Ladies",
        "H",
        null,
        null,
        null,
        56.6825649
      ],
      [
        "Mechanical Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        55.7542662
      ],
      [
        "Mechanical Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        65.4076693
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        57.9680585
      ],
      [
        "Mechanical Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        26.2353347
      ],
      [
        "Mechanical Engineering",
        "VJ/DT",
        "O",
        null,
        null,
        null,
        52.1191375
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        54.873582
      ],
      [
        "Mechanical Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        40.4599724
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        56.5580532
      ],
      [
        "Mechanical Engineering",
        "NT-B-Ladies",
        "O",
        null,
        null,
        null,
        23.5097171
      ],
      [
        "Automation and Robotics",
        "OPEN",
        "H",
        null,
        null,
        null,
        63.5901214
      ],
      [
        "Automation and Robotics",
        "SC",
        "H",
        null,
        null,
        null,
        53.7405107
      ],
      [
        "Automation and Robotics",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        37.2122315
      ],
      [
        "Automation and Robotics",
        "NT-B",
        "H",
        null,
        null,
        null,
        40.369284
      ],
      [
        "Automation and Robotics",
        "NT-C",
        "H",
        null,
        null,
        null,
        54.9832594
      ],
      [
        "Automation and Robotics",
        "OBC",
        "H",
        null,
        null,
        null,
        55.3743463
      ],
      [
        "Automation and Robotics",
        "SEBC",
        "H",
        null,
        null,
        null,
        62.4995214
      ],
      [
        "Automation and Robotics",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        71.1120286
      ],
      [
        "Automation and Robotics",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        37.5813241
      ],
      [
        "Automation and Robotics",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        52.9701068
      ],
      [
        "Automation and Robotics",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        69.8303637
      ],
      [
        "Automation and Robotics",
        "OPEN",
        "O",
        null,
        null,
        null,
        44.3215833
      ],
      [
        "Automation and Robotics",
        "SC",
        "O",
        null,
        null,
        null,
        56.5580532
      ],
      [
        "Automation and Robotics",
        "NT-A",
        "O",
        null,
        null,
        null,
        43.2064159
      ],
      [
        "Automation and Robotics",
        "OBC",
        "O",
        null,
        null,
        null,
        34.7115718
      ],
      [
        "Automation and Robotics",
        "SEBC",
        "O",
        null,
        null,
        null,
        14.1268505
      ],
      [
        "Automation and Robotics",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        53.7405107
      ],
      [
        "Automation and Robotics",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        28.2298995
      ],
      [
        "Automation and Robotics",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        55.2387338
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "OPEN",
        "H",
        null,
        null,
        null,
        74.9818126
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "SC",
        "H",
        null,
        null,
        null,
        65.8087807
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "NT-A",
        "H",
        null,
        null,
        null,
        52.7016685
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "NT-B",
        "H",
        null,
        null,
        null,
        74.75684
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "NT-C",
        "H",
        null,
        null,
        null,
        64.1240022
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "OBC",
        "H",
        null,
        null,
        null,
        70.8903389
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "SEBC",
        "H",
        null,
        null,
        null,
        74.1334872
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        77.7140658
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        71.4142775
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "VJ/DT-Ladies",
        "H",
        null,
        null,
        null,
        20.3272741
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "NT-A-Ladies",
        "H",
        null,
        null,
        null,
        51.8020478
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        77.4501436
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        72.0579403
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        76.4346337
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "OPEN",
        "O",
        null,
        null,
        null,
        69.3105802
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "SC",
        "O",
        null,
        null,
        null,
        66.0625569
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "ST",
        "O",
        null,
        null,
        null,
        33.9583652
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "NT-B",
        "O",
        null,
        null,
        null,
        60.268127
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "OBC",
        "O",
        null,
        null,
        null,
        63.5901214
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "SEBC",
        "O",
        null,
        null,
        null,
        58.1924692
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        75.9291421
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        73.676029
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "VJ/DT-Ladies",
        "O",
        null,
        null,
        null,
        0.2152663
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        75.1704646
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        55.319298
      ],
      [
        "AI & Data Science",
        "OPEN",
        "H",
        null,
        null,
        null,
        76.3286018
      ],
      [
        "AI & Data Science",
        "SC",
        "H",
        null,
        null,
        null,
        63.003413
      ],
      [
        "AI & Data Science",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        72.6740126
      ],
      [
        "AI & Data Science",
        "NT-A",
        "H",
        null,
        null,
        null,
        71.9146758
      ],
      [
        "AI & Data Science",
        "NT-B",
        "H",
        null,
        null,
        null,
        71.9146758
      ],
      [
        "AI & Data Science",
        "OBC",
        "H",
        null,
        null,
        null,
        71.0421393
      ],
      [
        "AI & Data Science",
        "SEBC",
        "H",
        null,
        null,
        null,
        72.9906413
      ],
      [
        "AI & Data Science",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        80.1708014
      ],
      [
        "AI & Data Science",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        60.7556304
      ],
      [
        "AI & Data Science",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        79.9422744
      ],
      [
        "AI & Data Science",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        77.9303712
      ],
      [
        "AI & Data Science",
        "OPEN",
        "O",
        null,
        null,
        null,
        71.1120286
      ],
      [
        "AI & Data Science",
        "SC",
        "O",
        null,
        null,
        null,
        70.3444621
      ],
      [
        "AI & Data Science",
        "NT-C",
        "O",
        null,
        null,
        null,
        63.5901214
      ],
      [
        "AI & Data Science",
        "OBC",
        "O",
        null,
        null,
        null,
        64.2198294
      ],
      [
        "AI & Data Science",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        74.1899324
      ],
      [
        "AI & Data Science",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        56.5505021
      ]
    ],
    "profile": {
      "overview": "Mahatma Gandhi Missions College of Engineering, Nanded is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 02127. Status: Un-Aided. University/affiliation recorded in the CET directory: Dr. Babasaheb Ambedkar Technological University.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Nanded, Nanded, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Un-Aided.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=02127",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=02127"
      ]
    }
  },
  {
    "id": "02129",
    "name": "M.S. Bidve Engineering College, Latur",
    "shortName": "MSBE Latur",
    "city": "Latur",
    "region": "Marathwada",
    "district": "Latur",
    "status": "Un-Aided",
    "university": "Dr. Babasaheb Ambedkar Technological University",
    "branches": [
      "Civil Engineering",
      "Computer Science and Engineering",
      "Information Technology",
      "Electrical Engineering",
      "Electronics and Telecommunication Engg",
      "Mechanical Engineering",
      "Computer Science and Engineering (AI & ML)"
    ],
    "cutoffs": [
      [
        "Civil Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        69.4641016
      ],
      [
        "Civil Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        47.8532423
      ],
      [
        "Civil Engineering",
        "NT-C",
        "H",
        null,
        null,
        null,
        69.3105802
      ],
      [
        "Civil Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        54.4258624
      ],
      [
        "Civil Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        57.0044084
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        74.5525612
      ],
      [
        "Civil Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        45.8934793
      ],
      [
        "Civil Engineering",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        62.9339383
      ],
      [
        "Civil Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        59.4665021
      ],
      [
        "Civil Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        34.2796407
      ],
      [
        "Civil Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        62.2946352
      ],
      [
        "Civil Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        47.7548586
      ],
      [
        "Civil Engineering",
        "VJ/DT",
        "O",
        null,
        null,
        null,
        45.457039
      ],
      [
        "Civil Engineering",
        "NT-B",
        "O",
        null,
        null,
        null,
        44.1521083
      ],
      [
        "Civil Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        53.864934
      ],
      [
        "Civil Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        61.7346759
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        69.8506426
      ],
      [
        "Civil Engineering",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        4.2388251
      ],
      [
        "Civil Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        57.0044084
      ],
      [
        "Computer Science and Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        77.4501436
      ],
      [
        "Computer Science and Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        68.6254044
      ],
      [
        "Computer Science and Engineering",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        67.2460619
      ],
      [
        "Computer Science and Engineering",
        "NT-A",
        "H",
        null,
        null,
        null,
        70.4215645
      ],
      [
        "Computer Science and Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        76.3172626
      ],
      [
        "Computer Science and Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        71.4864246
      ],
      [
        "Computer Science and Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        75.9743237
      ],
      [
        "Computer Science and Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        81.9381769
      ],
      [
        "Computer Science and Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        71.9146758
      ],
      [
        "Computer Science and Engineering",
        "VJ/DT-Ladies",
        "H",
        null,
        null,
        null,
        57.9680585
      ],
      [
        "Computer Science and Engineering",
        "NT-C-Ladies",
        "H",
        null,
        null,
        null,
        66.1169676
      ],
      [
        "Computer Science and Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        80.1749582
      ],
      [
        "Computer Science and Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        80.5383458
      ],
      [
        "Computer Science and Engineering",
        "NT-A-Ladies",
        "H",
        null,
        null,
        null,
        72.3753397
      ],
      [
        "Computer Science and Engineering",
        "PWDOPEN",
        "H",
        null,
        null,
        null,
        72.6740126
      ],
      [
        "Computer Science and Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        75.242318
      ],
      [
        "Computer Science and Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        69.7621466
      ],
      [
        "Computer Science and Engineering",
        "NT-C",
        "O",
        null,
        null,
        null,
        74.4163823
      ],
      [
        "Computer Science and Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        69.8131691
      ],
      [
        "Computer Science and Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        71.9146758
      ],
      [
        "Computer Science and Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        78.2850242
      ],
      [
        "Computer Science and Engineering",
        "NT-B-Ladies",
        "O",
        null,
        null,
        null,
        61.579051
      ],
      [
        "Computer Science and Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        74.4163823
      ],
      [
        "Computer Science and Engineering",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        76.7952218
      ],
      [
        "Computer Science and Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        79.3692556
      ],
      [
        "Information Technology",
        "OPEN",
        "H",
        null,
        null,
        null,
        68.6031011
      ],
      [
        "Information Technology",
        "SC",
        "H",
        null,
        null,
        null,
        59.2124434
      ],
      [
        "Information Technology",
        "NT-B",
        "H",
        null,
        null,
        null,
        67.2980865
      ],
      [
        "Information Technology",
        "NT-C",
        "H",
        null,
        null,
        null,
        65.3107562
      ],
      [
        "Information Technology",
        "OBC",
        "H",
        null,
        null,
        null,
        67.2460619
      ],
      [
        "Information Technology",
        "SEBC",
        "H",
        null,
        null,
        null,
        66.1911263
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        73.2860799
      ],
      [
        "Information Technology",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        60.4816409
      ],
      [
        "Information Technology",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        72.4223602
      ],
      [
        "Information Technology",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        70.3444621
      ],
      [
        "Information Technology",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        71.7479911
      ],
      [
        "Information Technology",
        "OPEN",
        "O",
        null,
        null,
        null,
        73.0844718
      ],
      [
        "Information Technology",
        "SC",
        "O",
        null,
        null,
        null,
        68.58833
      ],
      [
        "Information Technology",
        "OBC",
        "O",
        null,
        null,
        null,
        65.6970807
      ],
      [
        "Information Technology",
        "SEBC",
        "O",
        null,
        null,
        null,
        66.3432235
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        83.1950716
      ],
      [
        "Information Technology",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        67.1207715
      ],
      [
        "Information Technology",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        69.3900327
      ],
      [
        "Information Technology",
        "VJ/DT",
        "O",
        null,
        null,
        null,
        65.1648234
      ],
      [
        "Information Technology",
        "NT-A-Ladies",
        "O",
        null,
        null,
        null,
        70.6987601
      ],
      [
        "Electrical Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        56.5580532
      ],
      [
        "Electrical Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        21.5915263
      ],
      [
        "Electrical Engineering",
        "NT-A",
        "H",
        null,
        null,
        null,
        12.2161407
      ],
      [
        "Electrical Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        55.3743463
      ],
      [
        "Electrical Engineering",
        "NT-C",
        "H",
        null,
        null,
        null,
        34.1022162
      ],
      [
        "Electrical Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        52.1256716
      ],
      [
        "Electrical Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        53.7903103
      ],
      [
        "Electrical Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        59.5017065
      ],
      [
        "Electrical Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        56.2435713
      ],
      [
        "Electrical Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        52.016058
      ],
      [
        "Electrical Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        16.0591472
      ],
      [
        "Electrical Engineering",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        35.5866115
      ],
      [
        "Electrical Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        60.5843098
      ],
      [
        "Electrical Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        28.2298995
      ],
      [
        "Electrical Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        57.6578681
      ],
      [
        "Electrical Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        70.3402566
      ],
      [
        "Electrical Engineering",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        41.7620841
      ],
      [
        "Electrical Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        52.4918222
      ],
      [
        "Electrical Engineering",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        27.6982865
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "H",
        null,
        null,
        null,
        62.2946352
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC",
        "H",
        null,
        null,
        null,
        41.6288192
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-A",
        "H",
        null,
        null,
        null,
        42.1633326
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B",
        "H",
        null,
        null,
        null,
        59.2474828
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC",
        "H",
        null,
        null,
        null,
        57.502776
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC",
        "H",
        null,
        null,
        null,
        61.114444
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        70.4097117
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        42.3488094
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        66.5942029
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        65.6970807
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "O",
        null,
        null,
        null,
        60.9758938
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC",
        "O",
        null,
        null,
        null,
        36.6388387
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B",
        "O",
        null,
        null,
        null,
        57.8274425
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC",
        "O",
        null,
        null,
        null,
        47.7838912
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC",
        "O",
        null,
        null,
        null,
        58.1924692
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        69.8418157
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT",
        "O",
        null,
        null,
        null,
        45.1152324
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-A",
        "O",
        null,
        null,
        null,
        49.6322266
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-C-Ladies",
        "O",
        null,
        null,
        null,
        58.3262891
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        58.4262318
      ],
      [
        "Mechanical Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        44.3215833
      ],
      [
        "Mechanical Engineering",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        21.0617426
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        27.8805461
      ],
      [
        "Mechanical Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        34.7351841
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        37.8097183
      ],
      [
        "Mechanical Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        36.6414088
      ],
      [
        "Mechanical Engineering",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        33.0737389
      ],
      [
        "Mechanical Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        22.27398
      ],
      [
        "Mechanical Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        29.612695
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        51.2488599
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        43.723793
      ],
      [
        "Mechanical Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        29.612695
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        59.4665021
      ],
      [
        "Mechanical Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        38.215662
      ],
      [
        "Mechanical Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        42.6120917
      ],
      [
        "Mechanical Engineering",
        "NT-B",
        "O",
        null,
        null,
        null,
        52.9701068
      ],
      [
        "Mechanical Engineering",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        36.6414088
      ],
      [
        "Mechanical Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        64.4305882
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "OPEN",
        "H",
        null,
        null,
        null,
        71.2894525
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "SC",
        "H",
        null,
        null,
        null,
        59.0801845
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "NT-B",
        "H",
        null,
        null,
        null,
        64.7164682
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "NT-C",
        "H",
        null,
        null,
        null,
        63.5035466
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "OBC",
        "H",
        null,
        null,
        null,
        65.6313822
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "SEBC",
        "H",
        null,
        null,
        null,
        70.6987601
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        73.6510161
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        55.7542662
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "NT-A-Ladies",
        "H",
        null,
        null,
        null,
        66.7193141
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        72.5330927
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        63.5901214
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "OPEN",
        "O",
        null,
        null,
        null,
        68.1448034
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "SC",
        "O",
        null,
        null,
        null,
        52.7200757
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "OBC",
        "O",
        null,
        null,
        null,
        68.063194
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "SEBC",
        "O",
        null,
        null,
        null,
        59.8130199
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        66.0956881
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        61.7346759
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        39.9867632
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "VJ/DT-Ladies",
        "O",
        null,
        null,
        null,
        19.2990746
      ]
    ],
    "profile": {
      "overview": "M.S. Bidve Engineering College, Latur is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 02129. Status: Un-Aided. University/affiliation recorded in the CET directory: Dr. Babasaheb Ambedkar Technological University.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Latur, Latur, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Un-Aided.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=02129",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=02129"
      ]
    }
  },
  {
    "id": "02130",
    "name": "Terna Public Charitable Trust's College of Engineering, Osmanabad",
    "shortName": "Terna COE Osmanabad",
    "city": "Osmanabad",
    "region": "Marathwada",
    "district": "Dharashiv",
    "status": "Un-Aided",
    "university": "Dr. Babasaheb Ambedkar Technological University",
    "branches": [
      "Civil Engineering",
      "Computer Science and Engineering",
      "Electronics and Telecommunication Engg",
      "Mechanical Engineering",
      "AI & Data Science"
    ],
    "cutoffs": [
      [
        "Civil Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        60.268127
      ],
      [
        "Civil Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        35.5420211
      ],
      [
        "Civil Engineering",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        21.5368309
      ],
      [
        "Civil Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        54.9733848
      ],
      [
        "Civil Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        43.7064846
      ],
      [
        "Civil Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        23.5136803
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        43.723793
      ],
      [
        "Civil Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        21.6834785
      ],
      [
        "Civil Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        28.3220209
      ],
      [
        "Civil Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        16.2056174
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        53.8067479
      ],
      [
        "Civil Engineering",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        30.191544
      ],
      [
        "Civil Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        47.4563898
      ],
      [
        "Civil Engineering",
        "NT-B",
        "O",
        null,
        null,
        null,
        36.6299371
      ],
      [
        "Computer Science and Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        61.114444
      ],
      [
        "Computer Science and Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        31.3655815
      ],
      [
        "Computer Science and Engineering",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        61.114444
      ],
      [
        "Computer Science and Engineering",
        "NT-A",
        "H",
        null,
        null,
        null,
        51.4221759
      ],
      [
        "Computer Science and Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        53.8067479
      ],
      [
        "Computer Science and Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        44.8240166
      ],
      [
        "Computer Science and Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        44.5569356
      ],
      [
        "Computer Science and Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        69.8303637
      ],
      [
        "Computer Science and Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        27.6982865
      ],
      [
        "Computer Science and Engineering",
        "VJ/DT-Ladies",
        "H",
        null,
        null,
        null,
        63.9535342
      ],
      [
        "Computer Science and Engineering",
        "NT-A-Ladies",
        "H",
        null,
        null,
        null,
        57.9680585
      ],
      [
        "Computer Science and Engineering",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        64.1499185
      ],
      [
        "Computer Science and Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        61.114444
      ],
      [
        "Computer Science and Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        65.4837825
      ],
      [
        "Computer Science and Engineering",
        "NT-C-Ladies",
        "H",
        null,
        null,
        null,
        52.8745002
      ],
      [
        "Computer Science and Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        61.2830506
      ],
      [
        "Computer Science and Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        13.7926161
      ],
      [
        "Computer Science and Engineering",
        "VJ/DT",
        "O",
        null,
        null,
        null,
        49.1980067
      ],
      [
        "Computer Science and Engineering",
        "NT-C",
        "O",
        null,
        null,
        null,
        19.4445432
      ],
      [
        "Computer Science and Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        14.6839821
      ],
      [
        "Computer Science and Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        49.1980067
      ],
      [
        "Computer Science and Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        76.2591061
      ],
      [
        "Computer Science and Engineering",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        16.1702768
      ],
      [
        "Computer Science and Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        73.2908824
      ],
      [
        "Computer Science and Engineering",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        65.9070599
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "H",
        null,
        null,
        null,
        24.093066
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC",
        "H",
        null,
        null,
        null,
        8.3041898
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        44.3215833
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        65.6313822
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        25.8331579
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B",
        "H",
        null,
        null,
        null,
        43.2614932
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC",
        "H",
        null,
        null,
        null,
        34.1066887
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        74.4163823
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "O",
        null,
        null,
        null,
        49.0487536
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC",
        "O",
        null,
        null,
        null,
        7.8036355
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        82.016548
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B-Ladies",
        "O",
        null,
        null,
        null,
        15.1948779
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        40.6688911
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        18.2769061
      ],
      [
        "Mechanical Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        25.2895608
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        6.3481229
      ],
      [
        "Mechanical Engineering",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        5.1774267
      ],
      [
        "Mechanical Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        0.0819113
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        43.6669107
      ],
      [
        "Mechanical Engineering",
        "NT-C",
        "O",
        null,
        null,
        null,
        5.9771774
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        38.2278771
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        18.4565842
      ],
      [
        "Mechanical Engineering",
        "NT-B",
        "O",
        null,
        null,
        null,
        18.1365898
      ],
      [
        "Mechanical Engineering",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        21.1739609
      ],
      [
        "AI & Data Science",
        "OPEN",
        "H",
        null,
        null,
        null,
        38.6749482
      ],
      [
        "AI & Data Science",
        "SC",
        "H",
        null,
        null,
        null,
        30.378919
      ],
      [
        "AI & Data Science",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        28.7105475
      ],
      [
        "AI & Data Science",
        "NT-B",
        "H",
        null,
        null,
        null,
        10.9209283
      ],
      [
        "AI & Data Science",
        "NT-C",
        "H",
        null,
        null,
        null,
        38.215662
      ],
      [
        "AI & Data Science",
        "OBC",
        "H",
        null,
        null,
        null,
        7.6400322
      ],
      [
        "AI & Data Science",
        "SEBC",
        "H",
        null,
        null,
        null,
        30.1917921
      ],
      [
        "AI & Data Science",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        45.4941917
      ],
      [
        "AI & Data Science",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        16.3855337
      ],
      [
        "AI & Data Science",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        30.1917921
      ],
      [
        "AI & Data Science",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        41.7943409
      ],
      [
        "AI & Data Science",
        "OPEN",
        "O",
        null,
        null,
        null,
        60.9157012
      ],
      [
        "AI & Data Science",
        "SC",
        "O",
        null,
        null,
        null,
        37.5813241
      ],
      [
        "AI & Data Science",
        "NT-B",
        "O",
        null,
        null,
        null,
        34.2796407
      ],
      [
        "AI & Data Science",
        "OBC",
        "O",
        null,
        null,
        null,
        10.9209283
      ],
      [
        "AI & Data Science",
        "SEBC",
        "O",
        null,
        null,
        null,
        44.5569356
      ],
      [
        "AI & Data Science",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        67.9621973
      ],
      [
        "AI & Data Science",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        18.2769061
      ],
      [
        "AI & Data Science",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        59.8130199
      ]
    ],
    "profile": {
      "overview": "Terna Public Charitable Trust's College of Engineering, Osmanabad is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 02130. Status: Un-Aided. University/affiliation recorded in the CET directory: Dr. Babasaheb Ambedkar Technological University.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Osmanabad, Dharashiv, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Un-Aided.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=02130",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=02130"
      ]
    }
  },
  {
    "id": "02131",
    "name": "Shree Tuljabhavani College of Engineering, Tuljapur",
    "shortName": "STBCOE Tuljapur",
    "city": "Tuljapur",
    "region": "Marathwada",
    "district": "Dharashiv",
    "status": "Un-Aided",
    "university": "Dr. Babasaheb Ambedkar Technological University",
    "branches": [
      "Civil Engineering",
      "Computer Science and Engineering",
      "Electronics and Telecommunication Engg",
      "Mechanical Engineering"
    ],
    "cutoffs": [
      [
        "Civil Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        39.9385666
      ],
      [
        "Civil Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        14.8254817
      ],
      [
        "Civil Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        35.508346
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        64.2926156
      ],
      [
        "Civil Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        24.7436032
      ],
      [
        "Civil Engineering",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        14.6900893
      ],
      [
        "Civil Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        30.9042114
      ],
      [
        "Civil Engineering",
        "VJ/DT-Ladies",
        "H",
        null,
        null,
        null,
        20.9054033
      ],
      [
        "Civil Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        55.7703505
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        47.8532423
      ],
      [
        "Civil Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        17.7235495
      ],
      [
        "Civil Engineering",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        59.8130199
      ],
      [
        "Computer Science and Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        25.8055428
      ],
      [
        "Computer Science and Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        20.9233553
      ],
      [
        "Computer Science and Engineering",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        45.457039
      ],
      [
        "Computer Science and Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        48.8664194
      ],
      [
        "Computer Science and Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        27.147084
      ],
      [
        "Computer Science and Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        19.3259851
      ],
      [
        "Computer Science and Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        49.2473035
      ],
      [
        "Computer Science and Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        28.4767446
      ],
      [
        "Computer Science and Engineering",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        11.1302155
      ],
      [
        "Computer Science and Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        23.7839084
      ],
      [
        "Computer Science and Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        38.215662
      ],
      [
        "Computer Science and Engineering",
        "NT-C-Ladies",
        "H",
        null,
        null,
        null,
        14.4618704
      ],
      [
        "Computer Science and Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        60.9758938
      ],
      [
        "Computer Science and Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        28.7221654
      ],
      [
        "Computer Science and Engineering",
        "VJ/DT",
        "O",
        null,
        null,
        null,
        59.2474828
      ],
      [
        "Computer Science and Engineering",
        "NT-A",
        "O",
        null,
        null,
        null,
        22.5386607
      ],
      [
        "Computer Science and Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        51.7178644
      ],
      [
        "Computer Science and Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        46.0219719
      ],
      [
        "Computer Science and Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        73.2109713
      ],
      [
        "Computer Science and Engineering",
        "NT-B-Ladies",
        "O",
        null,
        null,
        null,
        32.5248195
      ],
      [
        "Computer Science and Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        49.1097752
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "H",
        null,
        null,
        null,
        26.166493
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-A",
        "H",
        null,
        null,
        null,
        15.4884768
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-C",
        "H",
        null,
        null,
        null,
        4.4515103
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        19.3259851
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        31.0015898
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC",
        "H",
        null,
        null,
        null,
        25.8331579
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC",
        "H",
        null,
        null,
        null,
        31.8464164
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        22.27398
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        43.1236655
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "O",
        null,
        null,
        null,
        12.0650457
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        52.9701068
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        51.8020478
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        46.4953181
      ],
      [
        "Mechanical Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        34.4790806
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        21.1739609
      ],
      [
        "Mechanical Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        18.0880939
      ],
      [
        "Mechanical Engineering",
        "NT-C",
        "H",
        null,
        null,
        null,
        21.5368309
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        48.401775
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        60.7738415
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        50.5512969
      ],
      [
        "Mechanical Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        54.4258624
      ]
    ],
    "profile": {
      "overview": "Shree Tuljabhavani College of Engineering, Tuljapur is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 02131. Status: Un-Aided. University/affiliation recorded in the CET directory: Dr. Babasaheb Ambedkar Technological University.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Tuljapur, Dharashiv, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Un-Aided.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=02131",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=02131"
      ]
    }
  },
  {
    "id": "02533",
    "name": "CSMSS Chh. Shahu College of Engineering, Aurangabad",
    "shortName": "CSMSS COE",
    "city": "Chhatrapati Sambhajinagar",
    "region": "Marathwada",
    "district": "Chhatrapati Sambhajinagar",
    "status": "Un-Aided",
    "university": "Dr. Babasaheb Ambedkar Technological University",
    "branches": [
      "Civil Engineering",
      "Computer Science and Engineering",
      "Electrical Engineering",
      "Electronics Engineering ( VLSI Design and Technology)",
      "Mechanical Engineering",
      "Electronics and Computer Engineering",
      "Electronics and Communication(Advanced Communication Technology)",
      "AI & Data Science"
    ],
    "cutoffs": [
      [
        "Civil Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        70.4215645
      ],
      [
        "Civil Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        61.9398096
      ],
      [
        "Civil Engineering",
        "ST",
        "H",
        null,
        null,
        null,
        8.764745
      ],
      [
        "Civil Engineering",
        "NT-A",
        "H",
        null,
        null,
        null,
        51.2488599
      ],
      [
        "Civil Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        65.814611
      ],
      [
        "Civil Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        60.4816409
      ],
      [
        "Civil Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        66.0625569
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        69.7621466
      ],
      [
        "Civil Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        52.8560653
      ],
      [
        "Civil Engineering",
        "VJ/DT-Ladies",
        "H",
        null,
        null,
        null,
        63.4757967
      ],
      [
        "Civil Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        55.7703505
      ],
      [
        "Civil Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        69.4641016
      ],
      [
        "Civil Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        69.8131691
      ],
      [
        "Civil Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        60.7556304
      ],
      [
        "Civil Engineering",
        "ST",
        "O",
        null,
        null,
        null,
        36.6711564
      ],
      [
        "Civil Engineering",
        "VJ/DT",
        "O",
        null,
        null,
        null,
        67.458483
      ],
      [
        "Civil Engineering",
        "NT-C",
        "O",
        null,
        null,
        null,
        60.5539527
      ],
      [
        "Civil Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        64.2926156
      ],
      [
        "Civil Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        63.9535342
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        75.0953827
      ],
      [
        "Civil Engineering",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        41.7129534
      ],
      [
        "Civil Engineering",
        "NT-A-Ladies",
        "O",
        null,
        null,
        null,
        39.1300992
      ],
      [
        "Civil Engineering",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        59.3625359
      ],
      [
        "Computer Science and Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        84.2510483
      ],
      [
        "Computer Science and Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        75.2153333
      ],
      [
        "Computer Science and Engineering",
        "ST",
        "H",
        null,
        null,
        null,
        15.7373377
      ],
      [
        "Computer Science and Engineering",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        81.2524249
      ],
      [
        "Computer Science and Engineering",
        "NT-A",
        "H",
        null,
        null,
        null,
        81.8599034
      ],
      [
        "Computer Science and Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        83.0532651
      ],
      [
        "Computer Science and Engineering",
        "NT-C",
        "H",
        null,
        null,
        null,
        83.9283276
      ],
      [
        "Computer Science and Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        81.6705255
      ],
      [
        "Computer Science and Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        83.1950716
      ],
      [
        "Computer Science and Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        88.2737276
      ],
      [
        "Computer Science and Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        80.5339227
      ],
      [
        "Computer Science and Engineering",
        "ST-Ladies",
        "H",
        null,
        null,
        null,
        44.3215833
      ],
      [
        "Computer Science and Engineering",
        "NT-A-Ladies",
        "H",
        null,
        null,
        null,
        87.2152238
      ],
      [
        "Computer Science and Engineering",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        83.1950716
      ],
      [
        "Computer Science and Engineering",
        "NT-C-Ladies",
        "H",
        null,
        null,
        null,
        86.3943435
      ],
      [
        "Computer Science and Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        83.73706
      ],
      [
        "Computer Science and Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        87.2379152
      ],
      [
        "Computer Science and Engineering",
        "PWDOPEN",
        "H",
        null,
        null,
        null,
        13.0221818
      ],
      [
        "Computer Science and Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        84.3396689
      ],
      [
        "Computer Science and Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        79.6966406
      ],
      [
        "Computer Science and Engineering",
        "ST",
        "O",
        null,
        null,
        null,
        36.6414088
      ],
      [
        "Computer Science and Engineering",
        "NT-B",
        "O",
        null,
        null,
        null,
        79.0264353
      ],
      [
        "Computer Science and Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        82.4850758
      ],
      [
        "Computer Science and Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        83.9990684
      ],
      [
        "Computer Science and Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        87.468285
      ],
      [
        "Computer Science and Engineering",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        79.5928226
      ],
      [
        "Computer Science and Engineering",
        "VJ/DT-Ladies",
        "O",
        null,
        null,
        null,
        76.099588
      ],
      [
        "Computer Science and Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        83.9283276
      ],
      [
        "Computer Science and Engineering",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        85.1550148
      ],
      [
        "Computer Science and Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        71.4377156
      ],
      [
        "Electrical Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        76.973775
      ],
      [
        "Electrical Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        57.0044084
      ],
      [
        "Electrical Engineering",
        "ST",
        "H",
        null,
        null,
        null,
        2.1067743
      ],
      [
        "Electrical Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        64.1240022
      ],
      [
        "Electrical Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        69.9192754
      ],
      [
        "Electrical Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        75.2331528
      ],
      [
        "Electrical Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        74.0786749
      ],
      [
        "Electrical Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        50.5512969
      ],
      [
        "Electrical Engineering",
        "ST-Ladies",
        "H",
        null,
        null,
        null,
        34.3896838
      ],
      [
        "Electrical Engineering",
        "VJ/DT-Ladies",
        "H",
        null,
        null,
        null,
        63.5901214
      ],
      [
        "Electrical Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        66.5942029
      ],
      [
        "Electrical Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        71.4864246
      ],
      [
        "Electrical Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        72.9906413
      ],
      [
        "Electrical Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        65.4837825
      ],
      [
        "Electrical Engineering",
        "NT-A",
        "O",
        null,
        null,
        null,
        71.7479911
      ],
      [
        "Electrical Engineering",
        "NT-C",
        "O",
        null,
        null,
        null,
        68.6031011
      ],
      [
        "Electrical Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        72.3753397
      ],
      [
        "Electrical Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        68.7336094
      ],
      [
        "Electrical Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        72.3753397
      ],
      [
        "Electrical Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        64.4305882
      ],
      [
        "Electrical Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        23.9884494
      ],
      [
        "Electronics Engineering ( VLSI Design and Technology)",
        "OPEN",
        "H",
        null,
        null,
        null,
        69.8303637
      ],
      [
        "Electronics Engineering ( VLSI Design and Technology)",
        "SC",
        "H",
        null,
        null,
        null,
        52.016058
      ],
      [
        "Electronics Engineering ( VLSI Design and Technology)",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        64.1240022
      ],
      [
        "Electronics Engineering ( VLSI Design and Technology)",
        "NT-A",
        "H",
        null,
        null,
        null,
        65.1614878
      ],
      [
        "Electronics Engineering ( VLSI Design and Technology)",
        "NT-C",
        "H",
        null,
        null,
        null,
        58.1324148
      ],
      [
        "Electronics Engineering ( VLSI Design and Technology)",
        "OBC",
        "H",
        null,
        null,
        null,
        63.540901
      ],
      [
        "Electronics Engineering ( VLSI Design and Technology)",
        "SEBC",
        "H",
        null,
        null,
        null,
        68.6498934
      ],
      [
        "Electronics Engineering ( VLSI Design and Technology)",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        70.9390112
      ],
      [
        "Electronics Engineering ( VLSI Design and Technology)",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        52.1652563
      ],
      [
        "Electronics Engineering ( VLSI Design and Technology)",
        "NT-A-Ladies",
        "H",
        null,
        null,
        null,
        56.4419991
      ],
      [
        "Electronics Engineering ( VLSI Design and Technology)",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        54.2626684
      ],
      [
        "Electronics Engineering ( VLSI Design and Technology)",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        65.1648234
      ],
      [
        "Electronics Engineering ( VLSI Design and Technology)",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        69.9192754
      ],
      [
        "Electronics Engineering ( VLSI Design and Technology)",
        "OPEN",
        "O",
        null,
        null,
        null,
        66.5496835
      ],
      [
        "Electronics Engineering ( VLSI Design and Technology)",
        "SC",
        "O",
        null,
        null,
        null,
        62.6016833
      ],
      [
        "Electronics Engineering ( VLSI Design and Technology)",
        "OBC",
        "O",
        null,
        null,
        null,
        65.2933256
      ],
      [
        "Electronics Engineering ( VLSI Design and Technology)",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        73.676029
      ],
      [
        "Electronics Engineering ( VLSI Design and Technology)",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        48.5585273
      ],
      [
        "Electronics Engineering ( VLSI Design and Technology)",
        "NT-B-Ladies",
        "O",
        null,
        null,
        null,
        72.3753397
      ],
      [
        "Electronics Engineering ( VLSI Design and Technology)",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        68.6031011
      ],
      [
        "Electronics Engineering ( VLSI Design and Technology)",
        "VJ/DT",
        "O",
        null,
        null,
        null,
        64.1240022
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        73.0237189
      ],
      [
        "Mechanical Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        58.1924692
      ],
      [
        "Mechanical Engineering",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        68.6031011
      ],
      [
        "Mechanical Engineering",
        "NT-A",
        "H",
        null,
        null,
        null,
        49.1980067
      ],
      [
        "Mechanical Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        62.9339383
      ],
      [
        "Mechanical Engineering",
        "NT-C",
        "H",
        null,
        null,
        null,
        67.9203695
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        63.540901
      ],
      [
        "Mechanical Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        68.6031011
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        65.1648234
      ],
      [
        "Mechanical Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        52.7016685
      ],
      [
        "Mechanical Engineering",
        "VJ/DT-Ladies",
        "H",
        null,
        null,
        null,
        62.6016833
      ],
      [
        "Mechanical Engineering",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        61.2510322
      ],
      [
        "Mechanical Engineering",
        "NT-C-Ladies",
        "H",
        null,
        null,
        null,
        63.003413
      ],
      [
        "Mechanical Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        57.8274425
      ],
      [
        "Mechanical Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        63.5035466
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        67.3538592
      ],
      [
        "Mechanical Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        54.4258624
      ],
      [
        "Mechanical Engineering",
        "VJ/DT",
        "O",
        null,
        null,
        null,
        60.070698
      ],
      [
        "Mechanical Engineering",
        "NT-A",
        "O",
        null,
        null,
        null,
        58.1150221
      ],
      [
        "Mechanical Engineering",
        "NT-B",
        "O",
        null,
        null,
        null,
        64.2198294
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        63.9397326
      ],
      [
        "Mechanical Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        65.6313822
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        66.0549811
      ],
      [
        "Mechanical Engineering",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        53.7405107
      ],
      [
        "Mechanical Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        61.9042106
      ],
      [
        "Mechanical Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        53.1039032
      ],
      [
        "Electronics and Computer Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        75.2153333
      ],
      [
        "Electronics and Computer Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        56.5182885
      ],
      [
        "Electronics and Computer Engineering",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        71.0421393
      ],
      [
        "Electronics and Computer Engineering",
        "NT-A",
        "H",
        null,
        null,
        null,
        66.5942029
      ],
      [
        "Electronics and Computer Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        66.2459959
      ],
      [
        "Electronics and Computer Engineering",
        "NT-C",
        "H",
        null,
        null,
        null,
        69.8131691
      ],
      [
        "Electronics and Computer Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        71.1330463
      ],
      [
        "Electronics and Computer Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        72.9249982
      ],
      [
        "Electronics and Computer Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        77.9589871
      ],
      [
        "Electronics and Computer Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        57.0070614
      ],
      [
        "Electronics and Computer Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        72.9916849
      ],
      [
        "Electronics and Computer Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        76.099588
      ],
      [
        "Electronics and Computer Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        70.8903389
      ],
      [
        "Electronics and Computer Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        60.268127
      ],
      [
        "Electronics and Computer Engineering",
        "ST",
        "O",
        null,
        null,
        null,
        57.0070614
      ],
      [
        "Electronics and Computer Engineering",
        "NT-B",
        "O",
        null,
        null,
        null,
        68.58833
      ],
      [
        "Electronics and Computer Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        68.6717464
      ],
      [
        "Electronics and Computer Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        70.733113
      ],
      [
        "Electronics and Computer Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        74.6275026
      ],
      [
        "Electronics and Computer Engineering",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        68.9409579
      ],
      [
        "Electronics and Computer Engineering",
        "VJ/DT-Ladies",
        "O",
        null,
        null,
        null,
        71.9146758
      ],
      [
        "Electronics and Computer Engineering",
        "NT-A-Ladies",
        "O",
        null,
        null,
        null,
        58.235114
      ],
      [
        "Electronics and Computer Engineering",
        "NT-C-Ladies",
        "O",
        null,
        null,
        null,
        72.1871837
      ],
      [
        "Electronics and Computer Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        74.0786749
      ],
      [
        "Electronics and Computer Engineering",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        74.1334872
      ],
      [
        "Electronics and Communication(Advanced Communication Technology)",
        "OPEN",
        "H",
        null,
        null,
        null,
        71.4142775
      ],
      [
        "Electronics and Communication(Advanced Communication Technology)",
        "SC",
        "H",
        null,
        null,
        null,
        54.9832594
      ],
      [
        "Electronics and Communication(Advanced Communication Technology)",
        "NT-B",
        "H",
        null,
        null,
        null,
        60.7556304
      ],
      [
        "Electronics and Communication(Advanced Communication Technology)",
        "OBC",
        "H",
        null,
        null,
        null,
        68.063194
      ],
      [
        "Electronics and Communication(Advanced Communication Technology)",
        "SEBC",
        "H",
        null,
        null,
        null,
        69.8303637
      ],
      [
        "Electronics and Communication(Advanced Communication Technology)",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        73.3487346
      ],
      [
        "Electronics and Communication(Advanced Communication Technology)",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        68.58833
      ],
      [
        "Electronics and Communication(Advanced Communication Technology)",
        "VJ/DT-Ladies",
        "H",
        null,
        null,
        null,
        65.2933256
      ],
      [
        "Electronics and Communication(Advanced Communication Technology)",
        "NT-A-Ladies",
        "H",
        null,
        null,
        null,
        68.6031011
      ],
      [
        "Electronics and Communication(Advanced Communication Technology)",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        64.1499185
      ],
      [
        "Electronics and Communication(Advanced Communication Technology)",
        "NT-C-Ladies",
        "H",
        null,
        null,
        null,
        65.6970807
      ],
      [
        "Electronics and Communication(Advanced Communication Technology)",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        68.78733
      ],
      [
        "Electronics and Communication(Advanced Communication Technology)",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        71.1330463
      ],
      [
        "Electronics and Communication(Advanced Communication Technology)",
        "OPEN",
        "O",
        null,
        null,
        null,
        69.4641016
      ],
      [
        "Electronics and Communication(Advanced Communication Technology)",
        "SC",
        "O",
        null,
        null,
        null,
        60.268127
      ],
      [
        "Electronics and Communication(Advanced Communication Technology)",
        "OBC",
        "O",
        null,
        null,
        null,
        68.6031011
      ],
      [
        "Electronics and Communication(Advanced Communication Technology)",
        "SEBC",
        "O",
        null,
        null,
        null,
        66.4794206
      ],
      [
        "Electronics and Communication(Advanced Communication Technology)",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        72.8027463
      ],
      [
        "Electronics and Communication(Advanced Communication Technology)",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        66.1169676
      ],
      [
        "AI & Data Science",
        "OPEN",
        "H",
        null,
        null,
        null,
        81.7199
      ],
      [
        "AI & Data Science",
        "SC",
        "H",
        null,
        null,
        null,
        69.7766245
      ],
      [
        "AI & Data Science",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        76.3172626
      ],
      [
        "AI & Data Science",
        "NT-A",
        "H",
        null,
        null,
        null,
        76.3172626
      ],
      [
        "AI & Data Science",
        "NT-B",
        "H",
        null,
        null,
        null,
        80.78157
      ],
      [
        "AI & Data Science",
        "NT-C",
        "H",
        null,
        null,
        null,
        80.5339227
      ],
      [
        "AI & Data Science",
        "OBC",
        "H",
        null,
        null,
        null,
        78.975446
      ],
      [
        "AI & Data Science",
        "SEBC",
        "H",
        null,
        null,
        null,
        79.4793202
      ],
      [
        "AI & Data Science",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        83.1707575
      ],
      [
        "AI & Data Science",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        72.5330927
      ],
      [
        "AI & Data Science",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        74.8210845
      ],
      [
        "AI & Data Science",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        80.9705409
      ],
      [
        "AI & Data Science",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        82.190886
      ],
      [
        "AI & Data Science",
        "OPEN",
        "O",
        null,
        null,
        null,
        79.5538038
      ],
      [
        "AI & Data Science",
        "SC",
        "O",
        null,
        null,
        null,
        75.4489132
      ],
      [
        "AI & Data Science",
        "VJ/DT",
        "O",
        null,
        null,
        null,
        77.9589871
      ],
      [
        "AI & Data Science",
        "NT-A",
        "O",
        null,
        null,
        null,
        78.1913582
      ],
      [
        "AI & Data Science",
        "NT-C",
        "O",
        null,
        null,
        null,
        75.2153333
      ],
      [
        "AI & Data Science",
        "OBC",
        "O",
        null,
        null,
        null,
        77.8890571
      ],
      [
        "AI & Data Science",
        "SEBC",
        "O",
        null,
        null,
        null,
        77.9589871
      ],
      [
        "AI & Data Science",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        81.9221888
      ],
      [
        "AI & Data Science",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        68.8065641
      ],
      [
        "AI & Data Science",
        "NT-B-Ladies",
        "O",
        null,
        null,
        null,
        71.9146758
      ],
      [
        "AI & Data Science",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        80.4716144
      ],
      [
        "AI & Data Science",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        81.7199
      ],
      [
        "AI & Data Science",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        21.6834785
      ]
    ],
    "profile": {
      "overview": "CSMSS Chh. Shahu College of Engineering, Aurangabad is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 02533. Status: Un-Aided. University/affiliation recorded in the CET directory: Dr. Babasaheb Ambedkar Technological University.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Chhatrapati Sambhajinagar, Chhatrapati Sambhajinagar, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Un-Aided.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=02533",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=02533"
      ]
    }
  },
  {
    "id": "03014",
    "name": "Sardar Patel College of Engineering, Andheri",
    "shortName": "SPCE Mumbai",
    "city": "Mumbai",
    "region": "Mumbai",
    "district": "Mumbai",
    "status": "Government-Aided Autonomous",
    "university": "Autonomous Institute",
    "branches": [
      "Civil Engineering",
      "Electrical Engineering",
      "Mechanical Engineering"
    ],
    "cutoffs": [
      [
        "Civil Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        98.4431408
      ],
      [
        "Civil Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        94.8860653
      ],
      [
        "Civil Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        85.819156
      ],
      [
        "Civil Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        95.1933808
      ],
      [
        "Civil Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        96.161333
      ],
      [
        "Civil Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        98.0166175
      ],
      [
        "Civil Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        97.6294546
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        97.4280163
      ],
      [
        "Civil Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        92.2148897
      ],
      [
        "Civil Engineering",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        80.3167508
      ],
      [
        "Civil Engineering",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        94.4877916
      ],
      [
        "Civil Engineering",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        95.9558175
      ],
      [
        "Civil Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        96.9031415
      ],
      [
        "Civil Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        96.0186459
      ],
      [
        "Civil Engineering",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        74.8112584
      ],
      [
        "Civil Engineering",
        "PWDOBC",
        "State",
        null,
        null,
        null,
        70.3402566
      ],
      [
        "Civil Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        94.0080367
      ],
      [
        "Electrical Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        99.2267861
      ],
      [
        "Electrical Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        95.9873991
      ],
      [
        "Electrical Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        87.2593857
      ],
      [
        "Electrical Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        97.259303
      ],
      [
        "Electrical Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        98.1021539
      ],
      [
        "Electrical Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        98.4993421
      ],
      [
        "Electrical Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        98.5473765
      ],
      [
        "Electrical Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        98.920728
      ],
      [
        "Electrical Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        98.4399761
      ],
      [
        "Electrical Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        98.905322
      ],
      [
        "Electrical Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        95.7070884
      ],
      [
        "Electrical Engineering",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        87.0771468
      ],
      [
        "Electrical Engineering",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        97.7429122
      ],
      [
        "Electrical Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        98.5858794
      ],
      [
        "Electrical Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        98.1370729
      ],
      [
        "Electrical Engineering",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        76.973775
      ],
      [
        "Electrical Engineering",
        "PWDOBC",
        "State",
        null,
        null,
        null,
        36.6711564
      ],
      [
        "Electrical Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        96.363568
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        99.2177086
      ],
      [
        "Mechanical Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        95.9338334
      ],
      [
        "Mechanical Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        83.1707575
      ],
      [
        "Mechanical Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        97.259303
      ],
      [
        "Mechanical Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        97.1327695
      ],
      [
        "Mechanical Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        98.174902
      ],
      [
        "Mechanical Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        96.7675378
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        98.7857913
      ],
      [
        "Mechanical Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        98.4990553
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        98.9164146
      ],
      [
        "Mechanical Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        93.9889579
      ],
      [
        "Mechanical Engineering",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        81.8599034
      ],
      [
        "Mechanical Engineering",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        88.7357048
      ],
      [
        "Mechanical Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        97.9193354
      ],
      [
        "Mechanical Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        97.4288016
      ],
      [
        "Mechanical Engineering",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        81.9712626
      ],
      [
        "Mechanical Engineering",
        "PWDOBC",
        "State",
        null,
        null,
        null,
        49.1980067
      ],
      [
        "Mechanical Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        96.9465353
      ]
    ],
    "profile": {
      "overview": "Sardar Patel College of Engineering, Andheri is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 03014. Status: Government-Aided Autonomous. University/affiliation recorded in the CET directory: Autonomous Institute.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Mumbai, Mumbai, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Government-Aided Autonomous.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03014",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03014"
      ]
    }
  },
  {
    "id": "03033",
    "name": "Dr. Babasaheb Ambedkar Technological University, Lonere",
    "shortName": "DBATU Lonere",
    "city": "Lonere",
    "region": "Mumbai",
    "district": "Raigad",
    "status": "Government University",
    "university": "Dr. Babasaheb Ambedkar Technological University",
    "branches": [
      "Civil Engineering",
      "Computer Engineering",
      "Information Technology",
      "Electrical Engineering",
      "Electronics and Telecommunication Engg",
      "Electronics Engineering ( VLSI Design and Technology)",
      "Chemical Engineering",
      "Petro Chemical Engineering",
      "Mechanical Engineering",
      "Computer Science and Engineering"
    ],
    "cutoffs": [
      [
        "Civil Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        49.6322266
      ],
      [
        "Civil Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        66.0913492
      ],
      [
        "Civil Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        40.4581492
      ],
      [
        "Civil Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        60.070698
      ],
      [
        "Civil Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        19.0169976
      ],
      [
        "Civil Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        64.1499185
      ],
      [
        "Civil Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        57.502776
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        61.5912113
      ],
      [
        "Civil Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        47.8532423
      ],
      [
        "Civil Engineering",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        55.6597249
      ],
      [
        "Civil Engineering",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        41.3533547
      ],
      [
        "Civil Engineering",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        44.3215833
      ],
      [
        "Civil Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        54.9733848
      ],
      [
        "Civil Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        70.3444621
      ],
      [
        "Computer Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        85.129786
      ],
      [
        "Computer Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        82.7777778
      ],
      [
        "Computer Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        55.4743121
      ],
      [
        "Computer Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        71.4377156
      ],
      [
        "Computer Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        84.7804686
      ],
      [
        "Computer Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        80.4992916
      ],
      [
        "Computer Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        82.9464759
      ],
      [
        "Computer Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        85.6921506
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        86.5951005
      ],
      [
        "Computer Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        84.3396689
      ],
      [
        "Computer Engineering",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        50.8385093
      ],
      [
        "Computer Engineering",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        77.3511663
      ],
      [
        "Computer Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        84.1149833
      ],
      [
        "Computer Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        82.1648735
      ],
      [
        "Computer Engineering",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        58.1324148
      ],
      [
        "Computer Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        77.741426
      ],
      [
        "Information Technology",
        "OPEN",
        "State",
        null,
        null,
        null,
        77.1955616
      ],
      [
        "Information Technology",
        "SC",
        "State",
        null,
        null,
        null,
        77.2143105
      ],
      [
        "Information Technology",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        78.699881
      ],
      [
        "Information Technology",
        "NT-B",
        "State",
        null,
        null,
        null,
        78.8262695
      ],
      [
        "Information Technology",
        "NT-C",
        "State",
        null,
        null,
        null,
        63.5303851
      ],
      [
        "Information Technology",
        "OBC",
        "State",
        null,
        null,
        null,
        77.2289819
      ],
      [
        "Information Technology",
        "SEBC",
        "State",
        null,
        null,
        null,
        76.5235824
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        83.0532651
      ],
      [
        "Information Technology",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        77.741426
      ],
      [
        "Information Technology",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        77.8612083
      ],
      [
        "Information Technology",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        64.7164682
      ],
      [
        "Information Technology",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        79.4627847
      ],
      [
        "Information Technology",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        81.4271094
      ],
      [
        "Information Technology",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        80.1749582
      ],
      [
        "Information Technology",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        69.0271267
      ],
      [
        "Electrical Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        60.268127
      ],
      [
        "Electrical Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        55.2387338
      ],
      [
        "Electrical Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        27.8805461
      ],
      [
        "Electrical Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        68.4225402
      ],
      [
        "Electrical Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        63.540901
      ],
      [
        "Electrical Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        68.9346395
      ],
      [
        "Electrical Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        69.8131691
      ],
      [
        "Electrical Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        59.4665021
      ],
      [
        "Electrical Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        62.5282864
      ],
      [
        "Electrical Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        54.2626684
      ],
      [
        "Electrical Engineering",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        52.8745002
      ],
      [
        "Electrical Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        35.5990164
      ],
      [
        "Electrical Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        87.6167151
      ],
      [
        "Electrical Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        76.7952218
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "State",
        null,
        null,
        null,
        52.1256716
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC",
        "State",
        null,
        null,
        null,
        42.4145111
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        64.2926156
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-A",
        "State",
        null,
        null,
        null,
        74.5525612
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B",
        "State",
        null,
        null,
        null,
        65.4076693
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC",
        "State",
        null,
        null,
        null,
        62.5282864
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC",
        "State",
        null,
        null,
        null,
        59.3625359
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        70.4097117
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        40.6688911
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        68.2993965
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        30.6281286
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        67.500481
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        73.3487346
      ],
      [
        "Electronics and Telecommunication Engg",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        4.2388251
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        55.2387338
      ],
      [
        "Electronics Engineering ( VLSI Design and Technology)",
        "OPEN",
        "State",
        null,
        null,
        null,
        50.8385093
      ],
      [
        "Electronics Engineering ( VLSI Design and Technology)",
        "SC",
        "State",
        null,
        null,
        null,
        59.2443064
      ],
      [
        "Electronics Engineering ( VLSI Design and Technology)",
        "NT-B",
        "State",
        null,
        null,
        null,
        65.9070599
      ],
      [
        "Electronics Engineering ( VLSI Design and Technology)",
        "NT-C",
        "State",
        null,
        null,
        null,
        59.2124434
      ],
      [
        "Electronics Engineering ( VLSI Design and Technology)",
        "OBC",
        "State",
        null,
        null,
        null,
        55.7703505
      ],
      [
        "Electronics Engineering ( VLSI Design and Technology)",
        "SEBC",
        "State",
        null,
        null,
        null,
        27.2101033
      ],
      [
        "Electronics Engineering ( VLSI Design and Technology)",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        61.7346759
      ],
      [
        "Electronics Engineering ( VLSI Design and Technology)",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        52.7200757
      ],
      [
        "Electronics Engineering ( VLSI Design and Technology)",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        55.6712077
      ],
      [
        "Electronics Engineering ( VLSI Design and Technology)",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        55.3743463
      ],
      [
        "Chemical Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        69.7766245
      ],
      [
        "Chemical Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        61.5912113
      ],
      [
        "Chemical Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        73.3356624
      ],
      [
        "Chemical Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        61.9042106
      ],
      [
        "Chemical Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        66.0625569
      ],
      [
        "Chemical Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        63.4757967
      ],
      [
        "Chemical Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        66.0549811
      ],
      [
        "Chemical Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        64.5293156
      ],
      [
        "Chemical Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        81.9275869
      ],
      [
        "Chemical Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        65.1648234
      ],
      [
        "Chemical Engineering",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        76.7952218
      ],
      [
        "Chemical Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        67.9621973
      ],
      [
        "Chemical Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        75.242318
      ],
      [
        "Petro Chemical Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        41.3533547
      ],
      [
        "Petro Chemical Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        15.4623879
      ],
      [
        "Petro Chemical Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        42.3488094
      ],
      [
        "Petro Chemical Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        33.1537425
      ],
      [
        "Petro Chemical Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        26.591875
      ],
      [
        "Petro Chemical Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        16.3855337
      ],
      [
        "Petro Chemical Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        6.8673857
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        59.8130199
      ],
      [
        "Mechanical Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        51.8020478
      ],
      [
        "Mechanical Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        17.0157534
      ],
      [
        "Mechanical Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        64.2198294
      ],
      [
        "Mechanical Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        68.1448034
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        65.6970807
      ],
      [
        "Mechanical Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        56.5182885
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        57.0044084
      ],
      [
        "Mechanical Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        49.2473035
      ],
      [
        "Mechanical Engineering",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        54.9733848
      ],
      [
        "Mechanical Engineering",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        34.8863278
      ],
      [
        "Mechanical Engineering",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        52.8745002
      ],
      [
        "Mechanical Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        37.8307719
      ],
      [
        "Mechanical Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        78.733317
      ],
      [
        "Mechanical Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        46.7128425
      ],
      [
        "Computer Science and Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        62.3077731
      ],
      [
        "Computer Science and Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        49.6322266
      ],
      [
        "Computer Science and Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        47.0872596
      ],
      [
        "Computer Science and Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        58.9637781
      ],
      [
        "Computer Science and Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        36.6711564
      ],
      [
        "Computer Science and Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        60.5118338
      ],
      [
        "Computer Science and Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        62.5282864
      ],
      [
        "Computer Science and Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        66.8147184
      ],
      [
        "Computer Science and Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        77.2143105
      ],
      [
        "Computer Science and Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        72.5022286
      ],
      [
        "Computer Science and Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        63.9397326
      ],
      [
        "Computer Science and Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        73.2860799
      ]
    ],
    "profile": {
      "overview": "Dr. Babasaheb Ambedkar Technological University, Lonere is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 03033. Status: Government University. University/affiliation recorded in the CET directory: Dr. Babasaheb Ambedkar Technological University.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Lonere, Raigad, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Government University.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03033",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03033"
      ]
    }
  },
  {
    "id": "03036",
    "name": "Institute of Chemical Technology, Matunga, Mumbai",
    "shortName": "ICT Mumbai",
    "city": "Mumbai",
    "region": "Mumbai",
    "district": "Mumbai",
    "status": "Government-Aided Deemed University",
    "university": "Autonomous Institute",
    "branches": [
      "Chemical Engineering",
      "Dyestuff Technology",
      "Oil,Oleochemicals and Surfactants Technology",
      "Pharmaceuticals Chemistry and Technology",
      "Fibres and Textile Processing Technology",
      "Polymer Engineering and Technology",
      "Food Engineering and Technology",
      "Surface Coating Technology"
    ],
    "cutoffs": [
      [
        "Chemical Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        99.6314681
      ],
      [
        "Chemical Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        96.5870307
      ],
      [
        "Chemical Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        88.4219058
      ],
      [
        "Chemical Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        98.3477163
      ],
      [
        "Chemical Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        97.2067626
      ],
      [
        "Chemical Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        99.4822739
      ],
      [
        "Chemical Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        99.1264191
      ],
      [
        "Chemical Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        98.996822
      ],
      [
        "Chemical Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        99.5311735
      ],
      [
        "Chemical Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        98.297856
      ],
      [
        "Chemical Engineering",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        91.6804693
      ],
      [
        "Chemical Engineering",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        97.321565
      ],
      [
        "Chemical Engineering",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        95.9433601
      ],
      [
        "Chemical Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        98.5598385
      ],
      [
        "Chemical Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        98.1399096
      ],
      [
        "Chemical Engineering",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        88.118041
      ],
      [
        "Chemical Engineering",
        "PWDOBC",
        "State",
        null,
        null,
        null,
        59.2443064
      ],
      [
        "Chemical Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        97.4167804
      ],
      [
        "Dyestuff Technology",
        "OPEN",
        "State",
        null,
        null,
        null,
        98.6575619
      ],
      [
        "Dyestuff Technology",
        "SC",
        "State",
        null,
        null,
        null,
        94.1950375
      ],
      [
        "Dyestuff Technology",
        "ST",
        "State",
        null,
        null,
        null,
        60.4816409
      ],
      [
        "Dyestuff Technology",
        "NT-A",
        "State",
        null,
        null,
        null,
        80.78157
      ],
      [
        "Dyestuff Technology",
        "OBC",
        "State",
        null,
        null,
        null,
        97.7989985
      ],
      [
        "Dyestuff Technology",
        "SEBC",
        "State",
        null,
        null,
        null,
        97.7429122
      ],
      [
        "Dyestuff Technology",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        98.4678322
      ],
      [
        "Dyestuff Technology",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        96.6937233
      ],
      [
        "Oil,Oleochemicals and Surfactants Technology",
        "OPEN",
        "State",
        null,
        null,
        null,
        98.8869054
      ],
      [
        "Oil,Oleochemicals and Surfactants Technology",
        "ST",
        "State",
        null,
        null,
        null,
        86.2039517
      ],
      [
        "Oil,Oleochemicals and Surfactants Technology",
        "NT-B",
        "State",
        null,
        null,
        null,
        96.5942413
      ],
      [
        "Oil,Oleochemicals and Surfactants Technology",
        "OBC",
        "State",
        null,
        null,
        null,
        98.6704553
      ],
      [
        "Oil,Oleochemicals and Surfactants Technology",
        "SEBC",
        "State",
        null,
        null,
        null,
        96.9644681
      ],
      [
        "Oil,Oleochemicals and Surfactants Technology",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        98.9208633
      ],
      [
        "Oil,Oleochemicals and Surfactants Technology",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        93.4491576
      ],
      [
        "Oil,Oleochemicals and Surfactants Technology",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        97.4328274
      ],
      [
        "Pharmaceuticals Chemistry and Technology",
        "OPEN",
        "State",
        null,
        null,
        null,
        99.9023611
      ],
      [
        "Pharmaceuticals Chemistry and Technology",
        "SC",
        "State",
        null,
        null,
        null,
        98.4924834
      ],
      [
        "Pharmaceuticals Chemistry and Technology",
        "ST",
        "State",
        null,
        null,
        null,
        98.1066556
      ],
      [
        "Pharmaceuticals Chemistry and Technology",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        98.83504
      ],
      [
        "Pharmaceuticals Chemistry and Technology",
        "NT-C",
        "State",
        null,
        null,
        null,
        97.7449977
      ],
      [
        "Pharmaceuticals Chemistry and Technology",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        99.9702836
      ],
      [
        "Pharmaceuticals Chemistry and Technology",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        99.5080612
      ],
      [
        "Fibres and Textile Processing Technology",
        "OPEN",
        "State",
        null,
        null,
        null,
        98.2626354
      ],
      [
        "Fibres and Textile Processing Technology",
        "SC",
        "State",
        null,
        null,
        null,
        93.1663509
      ],
      [
        "Fibres and Textile Processing Technology",
        "ST",
        "State",
        null,
        null,
        null,
        70.9390112
      ],
      [
        "Fibres and Textile Processing Technology",
        "NT-B",
        "State",
        null,
        null,
        null,
        94.9644162
      ],
      [
        "Fibres and Textile Processing Technology",
        "OBC",
        "State",
        null,
        null,
        null,
        96.3494357
      ],
      [
        "Fibres and Textile Processing Technology",
        "SEBC",
        "State",
        null,
        null,
        null,
        97.0991989
      ],
      [
        "Fibres and Textile Processing Technology",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        98.4399761
      ],
      [
        "Fibres and Textile Processing Technology",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        92.1611438
      ],
      [
        "Fibres and Textile Processing Technology",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        72.8488305
      ],
      [
        "Fibres and Textile Processing Technology",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        90.2558184
      ],
      [
        "Fibres and Textile Processing Technology",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        96.5027076
      ],
      [
        "Fibres and Textile Processing Technology",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        94.6508434
      ],
      [
        "Polymer Engineering and Technology",
        "OPEN",
        "State",
        null,
        null,
        null,
        99.4684566
      ],
      [
        "Polymer Engineering and Technology",
        "SC",
        "State",
        null,
        null,
        null,
        96.389325
      ],
      [
        "Polymer Engineering and Technology",
        "OBC",
        "State",
        null,
        null,
        null,
        99.0203625
      ],
      [
        "Polymer Engineering and Technology",
        "SEBC",
        "State",
        null,
        null,
        null,
        98.5373609
      ],
      [
        "Polymer Engineering and Technology",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        99.3890785
      ],
      [
        "Polymer Engineering and Technology",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        95.4430646
      ],
      [
        "Polymer Engineering and Technology",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        96.1739609
      ],
      [
        "Food Engineering and Technology",
        "OPEN",
        "State",
        null,
        null,
        null,
        99.8789608
      ],
      [
        "Food Engineering and Technology",
        "SC",
        "State",
        null,
        null,
        null,
        99.3277927
      ],
      [
        "Food Engineering and Technology",
        "ST",
        "State",
        null,
        null,
        null,
        96.5548617
      ],
      [
        "Food Engineering and Technology",
        "NT-C",
        "State",
        null,
        null,
        null,
        99.3988641
      ],
      [
        "Food Engineering and Technology",
        "OBC",
        "State",
        null,
        null,
        null,
        99.6868653
      ],
      [
        "Food Engineering and Technology",
        "SEBC",
        "State",
        null,
        null,
        null,
        99.1938484
      ],
      [
        "Food Engineering and Technology",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        99.8930525
      ],
      [
        "Food Engineering and Technology",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        98.744436
      ],
      [
        "Food Engineering and Technology",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        99.6304695
      ],
      [
        "Surface Coating Technology",
        "OPEN",
        "State",
        null,
        null,
        null,
        99.0001766
      ],
      [
        "Surface Coating Technology",
        "SC",
        "State",
        null,
        null,
        null,
        95.4986174
      ],
      [
        "Surface Coating Technology",
        "NT-A",
        "State",
        null,
        null,
        null,
        87.5957229
      ],
      [
        "Surface Coating Technology",
        "OBC",
        "State",
        null,
        null,
        null,
        98.302867
      ],
      [
        "Surface Coating Technology",
        "SEBC",
        "State",
        null,
        null,
        null,
        97.6863753
      ],
      [
        "Surface Coating Technology",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        98.976603
      ],
      [
        "Surface Coating Technology",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        41.5554243
      ]
    ],
    "profile": {
      "overview": "Institute of Chemical Technology, Matunga, Mumbai is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 03036. Status: Government-Aided Deemed University. University/affiliation recorded in the CET directory: Autonomous Institute.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Mumbai, Mumbai, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Government-Aided Deemed University.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03036",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03036"
      ]
    }
  },
  {
    "id": "03042",
    "name": "Loknete Shamrao Peje Government College of Engineering, Ratnagiri",
    "shortName": "LSPGCOE Ratnagiri",
    "city": "Ratnagiri",
    "region": "Mumbai",
    "district": "Ratnagiri",
    "status": "Government",
    "university": "Dr. Babasaheb Ambedkar Technological University",
    "branches": [
      "Electrical Engineering",
      "Food Technology And Management",
      "Mechatronics Engineering",
      "Civil and infrastructure Engineering",
      "AI & Data Science"
    ],
    "cutoffs": [
      [
        "Electrical Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        60.7738415
      ],
      [
        "Electrical Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        75.1493199
      ],
      [
        "Electrical Engineering",
        "NT-A",
        "H",
        null,
        null,
        null,
        52.1585439
      ],
      [
        "Electrical Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        42.4145111
      ],
      [
        "Electrical Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        80.7004831
      ],
      [
        "Electrical Engineering",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        81.5934486
      ],
      [
        "Electrical Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        75.2331528
      ],
      [
        "Electrical Engineering",
        "NT-C",
        "H",
        null,
        null,
        null,
        80.7883659
      ],
      [
        "Electrical Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        73.2908824
      ],
      [
        "Electrical Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        76.2668468
      ],
      [
        "Electrical Engineering",
        "VJ/DT-Ladies",
        "H",
        null,
        null,
        null,
        76.3384255
      ],
      [
        "Electrical Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        73.9021728
      ],
      [
        "Electrical Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        72.9249982
      ],
      [
        "Electrical Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        84.3396689
      ],
      [
        "Electrical Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        70.8903389
      ],
      [
        "Electrical Engineering",
        "NT-B",
        "O",
        null,
        null,
        null,
        76.2591061
      ],
      [
        "Electrical Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        83.8560469
      ],
      [
        "Electrical Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        81.9381769
      ],
      [
        "Electrical Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        81.8599034
      ],
      [
        "Electrical Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        71.7544603
      ],
      [
        "Electrical Engineering",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        76.3286018
      ],
      [
        "Electrical Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        38.6749482
      ],
      [
        "Food Technology And Management",
        "OPEN",
        "H",
        null,
        null,
        null,
        86.6048253
      ],
      [
        "Food Technology And Management",
        "SC",
        "H",
        null,
        null,
        null,
        62.9339383
      ],
      [
        "Food Technology And Management",
        "OBC",
        "H",
        null,
        null,
        null,
        79.4752709
      ],
      [
        "Food Technology And Management",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        91.161637
      ],
      [
        "Food Technology And Management",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        89.2017033
      ],
      [
        "Food Technology And Management",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        89.4549973
      ],
      [
        "Food Technology And Management",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        76.4934474
      ],
      [
        "Food Technology And Management",
        "ST",
        "H",
        null,
        null,
        null,
        49.0487536
      ],
      [
        "Food Technology And Management",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        66.2593432
      ],
      [
        "Food Technology And Management",
        "NT-A",
        "H",
        null,
        null,
        null,
        81.6539143
      ],
      [
        "Food Technology And Management",
        "NT-B",
        "H",
        null,
        null,
        null,
        93.6238274
      ],
      [
        "Food Technology And Management",
        "SEBC",
        "H",
        null,
        null,
        null,
        84.5301583
      ],
      [
        "Food Technology And Management",
        "ST-Ladies",
        "H",
        null,
        null,
        null,
        84.4998307
      ],
      [
        "Food Technology And Management",
        "NT-A-Ladies",
        "H",
        null,
        null,
        null,
        81.8262863
      ],
      [
        "Food Technology And Management",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        87.6585202
      ],
      [
        "Food Technology And Management",
        "NT-C-Ladies",
        "H",
        null,
        null,
        null,
        91.2342361
      ],
      [
        "Food Technology And Management",
        "OPEN",
        "O",
        null,
        null,
        null,
        93.06595
      ],
      [
        "Food Technology And Management",
        "SC",
        "O",
        null,
        null,
        null,
        88.9046689
      ],
      [
        "Food Technology And Management",
        "ST",
        "O",
        null,
        null,
        null,
        52.1585439
      ],
      [
        "Food Technology And Management",
        "OBC",
        "O",
        null,
        null,
        null,
        92.6826243
      ],
      [
        "Food Technology And Management",
        "SEBC",
        "O",
        null,
        null,
        null,
        92.4762298
      ],
      [
        "Food Technology And Management",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        97.3447938
      ],
      [
        "Food Technology And Management",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        93.4182496
      ],
      [
        "Food Technology And Management",
        "VJ/DT-Ladies",
        "O",
        null,
        null,
        null,
        25.2895608
      ],
      [
        "Food Technology And Management",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        85.5085244
      ],
      [
        "Mechatronics Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        42.6120917
      ],
      [
        "Mechatronics Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        19.2990746
      ],
      [
        "Mechatronics Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        73.7754477
      ],
      [
        "Mechatronics Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        58.4262318
      ],
      [
        "Mechatronics Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        39.966573
      ],
      [
        "Mechatronics Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        49.2473035
      ],
      [
        "Mechatronics Engineering",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        52.6909021
      ],
      [
        "Mechatronics Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        68.6254044
      ],
      [
        "Mechatronics Engineering",
        "NT-C",
        "H",
        null,
        null,
        null,
        50.5512969
      ],
      [
        "Mechatronics Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        59.3625359
      ],
      [
        "Mechatronics Engineering",
        "VJ/DT-Ladies",
        "H",
        null,
        null,
        null,
        24.9635504
      ],
      [
        "Mechatronics Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        34.7351841
      ],
      [
        "Mechatronics Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        75.6280193
      ],
      [
        "Mechatronics Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        74.8088122
      ],
      [
        "Mechatronics Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        71.5294662
      ],
      [
        "Mechatronics Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        74.1899324
      ],
      [
        "Mechatronics Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        70.3901803
      ],
      [
        "Mechatronics Engineering",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        64.2198294
      ],
      [
        "Mechatronics Engineering",
        "NT-B-Ladies",
        "O",
        null,
        null,
        null,
        38.215662
      ],
      [
        "Mechatronics Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        54.1426021
      ],
      [
        "Mechatronics Engineering",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        63.4876968
      ],
      [
        "Civil and infrastructure Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        44.6087422
      ],
      [
        "Civil and infrastructure Engineering",
        "ST",
        "H",
        null,
        null,
        null,
        40.4599724
      ],
      [
        "Civil and infrastructure Engineering",
        "NT-A",
        "H",
        null,
        null,
        null,
        28.7221654
      ],
      [
        "Civil and infrastructure Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        4.8375998
      ],
      [
        "Civil and infrastructure Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        63.003413
      ],
      [
        "Civil and infrastructure Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        30.6281286
      ],
      [
        "Civil and infrastructure Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        56.2435713
      ],
      [
        "Civil and infrastructure Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        72.3251186
      ],
      [
        "Civil and infrastructure Engineering",
        "NT-C",
        "H",
        null,
        null,
        null,
        69.8131691
      ],
      [
        "Civil and infrastructure Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        55.6712077
      ],
      [
        "Civil and infrastructure Engineering",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        40.1861311
      ],
      [
        "Civil and infrastructure Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        56.6825649
      ],
      [
        "Civil and infrastructure Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        54.4258624
      ],
      [
        "Civil and infrastructure Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        74.9893249
      ],
      [
        "Civil and infrastructure Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        46.0219719
      ],
      [
        "Civil and infrastructure Engineering",
        "VJ/DT",
        "O",
        null,
        null,
        null,
        59.4665021
      ],
      [
        "Civil and infrastructure Engineering",
        "NT-C",
        "O",
        null,
        null,
        null,
        74.8112584
      ],
      [
        "Civil and infrastructure Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        73.5651108
      ],
      [
        "Civil and infrastructure Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        57.5477401
      ],
      [
        "Civil and infrastructure Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        76.6993653
      ],
      [
        "Civil and infrastructure Engineering",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        38.215662
      ],
      [
        "Civil and infrastructure Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        62.4995214
      ],
      [
        "Civil and infrastructure Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        19.3259851
      ],
      [
        "AI & Data Science",
        "OPEN",
        "H",
        null,
        null,
        null,
        81.8599034
      ],
      [
        "AI & Data Science",
        "SC",
        "H",
        null,
        null,
        null,
        57.4188806
      ],
      [
        "AI & Data Science",
        "NT-A",
        "H",
        null,
        null,
        null,
        65.4076693
      ],
      [
        "AI & Data Science",
        "NT-B",
        "H",
        null,
        null,
        null,
        20.9233553
      ],
      [
        "AI & Data Science",
        "OBC",
        "H",
        null,
        null,
        null,
        66.561551
      ],
      [
        "AI & Data Science",
        "SEBC",
        "H",
        null,
        null,
        null,
        64.2926156
      ],
      [
        "AI & Data Science",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        83.769652
      ],
      [
        "AI & Data Science",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        38.6749482
      ],
      [
        "AI & Data Science",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        73.3487346
      ],
      [
        "AI & Data Science",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        66.561551
      ],
      [
        "AI & Data Science",
        "ST",
        "H",
        null,
        null,
        null,
        34.3896838
      ],
      [
        "AI & Data Science",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        81.9275869
      ],
      [
        "AI & Data Science",
        "ST-Ladies",
        "H",
        null,
        null,
        null,
        77.7140658
      ],
      [
        "AI & Data Science",
        "NT-C-Ladies",
        "H",
        null,
        null,
        null,
        19.3259851
      ],
      [
        "AI & Data Science",
        "OPEN",
        "O",
        null,
        null,
        null,
        88.4177906
      ],
      [
        "AI & Data Science",
        "SC",
        "O",
        null,
        null,
        null,
        85.9003507
      ],
      [
        "AI & Data Science",
        "NT-A",
        "O",
        null,
        null,
        null,
        75.8548894
      ],
      [
        "AI & Data Science",
        "NT-B",
        "O",
        null,
        null,
        null,
        83.1950716
      ],
      [
        "AI & Data Science",
        "OBC",
        "O",
        null,
        null,
        null,
        87.2593857
      ],
      [
        "AI & Data Science",
        "SEBC",
        "O",
        null,
        null,
        null,
        85.5419841
      ],
      [
        "AI & Data Science",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        90.5194308
      ],
      [
        "AI & Data Science",
        "ST-Ladies",
        "O",
        null,
        null,
        null,
        47.8532423
      ],
      [
        "AI & Data Science",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        89.5272602
      ],
      [
        "AI & Data Science",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        86.2729883
      ],
      [
        "AI & Data Science",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        88.2603909
      ]
    ],
    "profile": {
      "overview": "Loknete Shamrao Peje Government College of Engineering, Ratnagiri is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 03042. Status: Government. University/affiliation recorded in the CET directory: Dr. Babasaheb Ambedkar Technological University.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Ratnagiri, Ratnagiri, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Government.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03042",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03042"
      ]
    }
  },
  {
    "id": "03135",
    "name": "Manjara Charitable Trust's Rajiv Gandhi Institute of Technology, Mumbai",
    "shortName": "RGIT Mumbai",
    "city": "Mumbai",
    "region": "Mumbai",
    "district": "Mumbai",
    "status": "Un-Aided",
    "university": "Mumbai University",
    "branches": [
      "Computer Engineering",
      "Information Technology",
      "Electronics and Telecommunication Engg",
      "Mechanical Engineering",
      "AI & Data Science"
    ],
    "cutoffs": [
      [
        "Computer Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        95.8070096
      ],
      [
        "Computer Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        93.5645877
      ],
      [
        "Computer Engineering",
        "ST",
        "H",
        null,
        null,
        null,
        76.3172626
      ],
      [
        "Computer Engineering",
        "NT-A",
        "H",
        null,
        null,
        null,
        93.4294534
      ],
      [
        "Computer Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        94.2326904
      ],
      [
        "Computer Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        95.1210034
      ],
      [
        "Computer Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        93.1462266
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        95.6631314
      ],
      [
        "Computer Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        93.620848
      ],
      [
        "Computer Engineering",
        "ST-Ladies",
        "H",
        null,
        null,
        null,
        75.6280193
      ],
      [
        "Computer Engineering",
        "VJ/DT-Ladies",
        "H",
        null,
        null,
        null,
        90.8013388
      ],
      [
        "Computer Engineering",
        "NT-A-Ladies",
        "H",
        null,
        null,
        null,
        92.9316795
      ],
      [
        "Computer Engineering",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        94.2326904
      ],
      [
        "Computer Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        94.372645
      ],
      [
        "Computer Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        92.7160749
      ],
      [
        "Computer Engineering",
        "PWDOPEN",
        "H",
        null,
        null,
        null,
        43.7064846
      ],
      [
        "Computer Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        95.2882188
      ],
      [
        "Computer Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        92.5664772
      ],
      [
        "Computer Engineering",
        "ST",
        "O",
        null,
        null,
        null,
        86.6485431
      ],
      [
        "Computer Engineering",
        "VJ/DT",
        "O",
        null,
        null,
        null,
        91.9792268
      ],
      [
        "Computer Engineering",
        "NT-B",
        "O",
        null,
        null,
        null,
        93.462703
      ],
      [
        "Computer Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        94.7610231
      ],
      [
        "Computer Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        94.0675053
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        95.9687124
      ],
      [
        "Computer Engineering",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        91.3672693
      ],
      [
        "Computer Engineering",
        "NT-C-Ladies",
        "O",
        null,
        null,
        null,
        92.1789653
      ],
      [
        "Computer Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        90.5252595
      ],
      [
        "Information Technology",
        "OPEN",
        "H",
        null,
        null,
        null,
        95.0750038
      ],
      [
        "Information Technology",
        "SC",
        "H",
        null,
        null,
        null,
        92.1628997
      ],
      [
        "Information Technology",
        "ST",
        "H",
        null,
        null,
        null,
        73.0237189
      ],
      [
        "Information Technology",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        89.1014047
      ],
      [
        "Information Technology",
        "NT-A",
        "H",
        null,
        null,
        null,
        93.1944731
      ],
      [
        "Information Technology",
        "NT-B",
        "H",
        null,
        null,
        null,
        92.5144909
      ],
      [
        "Information Technology",
        "NT-C",
        "H",
        null,
        null,
        null,
        89.9552166
      ],
      [
        "Information Technology",
        "OBC",
        "H",
        null,
        null,
        null,
        94.5391572
      ],
      [
        "Information Technology",
        "SEBC",
        "H",
        null,
        null,
        null,
        91.3672693
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        94.7789294
      ],
      [
        "Information Technology",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        92.1611438
      ],
      [
        "Information Technology",
        "ST-Ladies",
        "H",
        null,
        null,
        null,
        56.1183815
      ],
      [
        "Information Technology",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        93.5072524
      ],
      [
        "Information Technology",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        91.2331407
      ],
      [
        "Information Technology",
        "PWDOPEN",
        "H",
        null,
        null,
        null,
        40.4599724
      ],
      [
        "Information Technology",
        "OPEN",
        "O",
        null,
        null,
        null,
        94.2038061
      ],
      [
        "Information Technology",
        "SC",
        "O",
        null,
        null,
        null,
        90.7559146
      ],
      [
        "Information Technology",
        "ST",
        "O",
        null,
        null,
        null,
        45.9819894
      ],
      [
        "Information Technology",
        "NT-A",
        "O",
        null,
        null,
        null,
        89.5432094
      ],
      [
        "Information Technology",
        "OBC",
        "O",
        null,
        null,
        null,
        93.9724337
      ],
      [
        "Information Technology",
        "SEBC",
        "O",
        null,
        null,
        null,
        93.7616003
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        94.2471177
      ],
      [
        "Information Technology",
        "VJ/DT-Ladies",
        "O",
        null,
        null,
        null,
        85.21049
      ],
      [
        "Information Technology",
        "NT-B-Ladies",
        "O",
        null,
        null,
        null,
        92.4858168
      ],
      [
        "Information Technology",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        93.6866278
      ],
      [
        "Information Technology",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        93.1462266
      ],
      [
        "Information Technology",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        89.4256012
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "H",
        null,
        null,
        null,
        93.4329298
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC",
        "H",
        null,
        null,
        null,
        89.364907
      ],
      [
        "Electronics and Telecommunication Engg",
        "ST",
        "H",
        null,
        null,
        null,
        44.6087422
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        66.0625569
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-A",
        "H",
        null,
        null,
        null,
        90.3030767
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B",
        "H",
        null,
        null,
        null,
        86.5796724
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC",
        "H",
        null,
        null,
        null,
        90.966814
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC",
        "H",
        null,
        null,
        null,
        88.2977496
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        92.8362212
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        85.9241674
      ],
      [
        "Electronics and Telecommunication Engg",
        "ST-Ladies",
        "H",
        null,
        null,
        null,
        33.7141758
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT-Ladies",
        "H",
        null,
        null,
        null,
        68.78733
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-A-Ladies",
        "H",
        null,
        null,
        null,
        84.3396689
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        87.2152238
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        91.4802758
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        87.921673
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "O",
        null,
        null,
        null,
        92.7160749
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC",
        "O",
        null,
        null,
        null,
        87.7884762
      ],
      [
        "Electronics and Telecommunication Engg",
        "ST",
        "O",
        null,
        null,
        null,
        68.6717464
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-C",
        "O",
        null,
        null,
        null,
        89.6830085
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC",
        "O",
        null,
        null,
        null,
        91.7505571
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC",
        "O",
        null,
        null,
        null,
        88.1968791
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        91.4870854
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        87.0771468
      ],
      [
        "Electronics and Telecommunication Engg",
        "ST-Ladies",
        "O",
        null,
        null,
        null,
        90.4666273
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        85.9425358
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        66.0956881
      ],
      [
        "Electronics and Telecommunication Engg",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        79.4663048
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        93.6359075
      ],
      [
        "Mechanical Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        88.0315567
      ],
      [
        "Mechanical Engineering",
        "ST",
        "H",
        null,
        null,
        null,
        41.7129534
      ],
      [
        "Mechanical Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        81.5934486
      ],
      [
        "Mechanical Engineering",
        "NT-C",
        "H",
        null,
        null,
        null,
        84.7521447
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        90.0962861
      ],
      [
        "Mechanical Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        89.1809567
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        90.0830242
      ],
      [
        "Mechanical Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        80.1708014
      ],
      [
        "Mechanical Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        89.8801547
      ],
      [
        "Mechanical Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        85.9212092
      ],
      [
        "Mechanical Engineering",
        "PWDOPEN",
        "H",
        null,
        null,
        null,
        70.8903389
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        92.119419
      ],
      [
        "Mechanical Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        87.3937627
      ],
      [
        "Mechanical Engineering",
        "VJ/DT",
        "O",
        null,
        null,
        null,
        76.099588
      ],
      [
        "Mechanical Engineering",
        "NT-B",
        "O",
        null,
        null,
        null,
        84.1149833
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        88.7627999
      ],
      [
        "Mechanical Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        86.560206
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        92.9781315
      ],
      [
        "Mechanical Engineering",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        78.1913582
      ],
      [
        "Mechanical Engineering",
        "NT-A-Ladies",
        "O",
        null,
        null,
        null,
        75.1704646
      ],
      [
        "Mechanical Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        74.6217331
      ],
      [
        "AI & Data Science",
        "OPEN",
        "H",
        null,
        null,
        null,
        95.0068259
      ],
      [
        "AI & Data Science",
        "SC",
        "H",
        null,
        null,
        null,
        93.1255955
      ],
      [
        "AI & Data Science",
        "ST",
        "H",
        null,
        null,
        null,
        80.7035589
      ],
      [
        "AI & Data Science",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        88.2737276
      ],
      [
        "AI & Data Science",
        "NT-A",
        "H",
        null,
        null,
        null,
        92.8241551
      ],
      [
        "AI & Data Science",
        "OBC",
        "H",
        null,
        null,
        null,
        94.1937425
      ],
      [
        "AI & Data Science",
        "SEBC",
        "H",
        null,
        null,
        null,
        91.6451799
      ],
      [
        "AI & Data Science",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        94.9303758
      ],
      [
        "AI & Data Science",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        90.0830242
      ],
      [
        "AI & Data Science",
        "ST-Ladies",
        "H",
        null,
        null,
        null,
        43.0034494
      ],
      [
        "AI & Data Science",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        88.9649575
      ],
      [
        "AI & Data Science",
        "NT-C-Ladies",
        "H",
        null,
        null,
        null,
        88.5637068
      ],
      [
        "AI & Data Science",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        93.6844271
      ],
      [
        "AI & Data Science",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        93.7694824
      ],
      [
        "AI & Data Science",
        "PWDOPEN",
        "H",
        null,
        null,
        null,
        13.510622
      ],
      [
        "AI & Data Science",
        "OPEN",
        "O",
        null,
        null,
        null,
        94.5016522
      ],
      [
        "AI & Data Science",
        "SC",
        "O",
        null,
        null,
        null,
        93.4202865
      ],
      [
        "AI & Data Science",
        "ST",
        "O",
        null,
        null,
        null,
        78.733317
      ],
      [
        "AI & Data Science",
        "OBC",
        "O",
        null,
        null,
        null,
        94.4720497
      ],
      [
        "AI & Data Science",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        94.4454247
      ],
      [
        "AI & Data Science",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        93.6831704
      ],
      [
        "AI & Data Science",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        93.6359075
      ],
      [
        "AI & Data Science",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        85.8665128
      ]
    ],
    "profile": {
      "overview": "Manjara Charitable Trust's Rajiv Gandhi Institute of Technology, Mumbai is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 03135. Status: Un-Aided. University/affiliation recorded in the CET directory: Mumbai University.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Mumbai, Mumbai, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Un-Aided.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03135",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03135"
      ]
    }
  },
  {
    "id": "03147",
    "name": "Yadavrao Tasgaonkar Institute of Engineering & Technology, Karjat",
    "shortName": "YTIET Karjat",
    "city": "Karjat",
    "region": "Mumbai",
    "district": "Raigad",
    "status": "Un-Aided",
    "university": "Mumbai University",
    "branches": [
      "Civil Engineering",
      "Robotics and Automation",
      "Computer Engineering",
      "Information Technology",
      "Internet of Things (IoT)",
      "Electrical Engineering",
      "Mechanical Engineering",
      "Data Science",
      "Artificial Intelligence and Machine Learning"
    ],
    "cutoffs": [
      [
        "Civil Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        71.4864246
      ],
      [
        "Civil Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        47.0872596
      ],
      [
        "Civil Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        65.3107562
      ],
      [
        "Civil Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        24.2423208
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        71.4377156
      ],
      [
        "Civil Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        60.1814551
      ],
      [
        "Civil Engineering",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        60.4816409
      ],
      [
        "Civil Engineering",
        "NT-A-Ladies",
        "H",
        null,
        null,
        null,
        36.6711564
      ],
      [
        "Civil Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        65.4076693
      ],
      [
        "Civil Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        45.6611497
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        52.7200757
      ],
      [
        "Civil Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        38.2037534
      ],
      [
        "Civil Engineering",
        "ST",
        "O",
        null,
        null,
        null,
        70.6987601
      ],
      [
        "Robotics and Automation",
        "OPEN",
        "H",
        null,
        null,
        null,
        72.0579403
      ],
      [
        "Robotics and Automation",
        "OBC",
        "H",
        null,
        null,
        null,
        45.457039
      ],
      [
        "Robotics and Automation",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        76.5032413
      ],
      [
        "Robotics and Automation",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        35.5420211
      ],
      [
        "Robotics and Automation",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        61.114444
      ],
      [
        "Robotics and Automation",
        "SEBC",
        "H",
        null,
        null,
        null,
        60.070698
      ],
      [
        "Robotics and Automation",
        "NT-C-Ladies",
        "H",
        null,
        null,
        null,
        30.378919
      ],
      [
        "Robotics and Automation",
        "OPEN",
        "O",
        null,
        null,
        null,
        72.5022286
      ],
      [
        "Robotics and Automation",
        "VJ/DT",
        "O",
        null,
        null,
        null,
        25.8055428
      ],
      [
        "Robotics and Automation",
        "OBC",
        "O",
        null,
        null,
        null,
        66.5496835
      ],
      [
        "Robotics and Automation",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        80.1749582
      ],
      [
        "Robotics and Automation",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        62.4995214
      ],
      [
        "Computer Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        83.9990684
      ],
      [
        "Computer Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        73.2908824
      ],
      [
        "Computer Engineering",
        "NT-A",
        "H",
        null,
        null,
        null,
        51.7178644
      ],
      [
        "Computer Engineering",
        "NT-C",
        "H",
        null,
        null,
        null,
        70.6987601
      ],
      [
        "Computer Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        80.5383458
      ],
      [
        "Computer Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        73.9021728
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        81.6705255
      ],
      [
        "Computer Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        76.6875679
      ],
      [
        "Computer Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        79.5928226
      ],
      [
        "Computer Engineering",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        52.8745002
      ],
      [
        "Computer Engineering",
        "ST-Ladies",
        "H",
        null,
        null,
        null,
        63.552865
      ],
      [
        "Computer Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        89.3287171
      ],
      [
        "Computer Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        71.4377156
      ],
      [
        "Computer Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        74.1334872
      ],
      [
        "Computer Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        71.7544603
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        78.9492107
      ],
      [
        "Computer Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        74.8112584
      ],
      [
        "Computer Engineering",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        43.1094862
      ],
      [
        "Computer Engineering",
        "NT-B-Ladies",
        "O",
        null,
        null,
        null,
        49.9737275
      ],
      [
        "Information Technology",
        "OPEN",
        "H",
        null,
        null,
        null,
        80.0260591
      ],
      [
        "Information Technology",
        "SC",
        "H",
        null,
        null,
        null,
        70.9482593
      ],
      [
        "Information Technology",
        "ST",
        "H",
        null,
        null,
        null,
        57.0044084
      ],
      [
        "Information Technology",
        "NT-B",
        "H",
        null,
        null,
        null,
        49.3545528
      ],
      [
        "Information Technology",
        "OBC",
        "H",
        null,
        null,
        null,
        73.2109713
      ],
      [
        "Information Technology",
        "SEBC",
        "H",
        null,
        null,
        null,
        62.5282864
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        81.9275869
      ],
      [
        "Information Technology",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        73.9021728
      ],
      [
        "Information Technology",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        71.4864246
      ],
      [
        "Information Technology",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        69.1748413
      ],
      [
        "Information Technology",
        "VJ/DT-Ladies",
        "H",
        null,
        null,
        null,
        29.5324884
      ],
      [
        "Information Technology",
        "OPEN",
        "O",
        null,
        null,
        null,
        72.0579403
      ],
      [
        "Information Technology",
        "OBC",
        "O",
        null,
        null,
        null,
        65.1648234
      ],
      [
        "Information Technology",
        "SEBC",
        "O",
        null,
        null,
        null,
        63.9397326
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        73.0844718
      ],
      [
        "Information Technology",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        46.3536656
      ],
      [
        "Information Technology",
        "NT-A-Ladies",
        "O",
        null,
        null,
        null,
        25.6909658
      ],
      [
        "Internet of Things (IoT)",
        "OPEN",
        "H",
        null,
        null,
        null,
        66.0913492
      ],
      [
        "Internet of Things (IoT)",
        "SC",
        "H",
        null,
        null,
        null,
        27.1206001
      ],
      [
        "Internet of Things (IoT)",
        "OBC",
        "H",
        null,
        null,
        null,
        62.4995214
      ],
      [
        "Internet of Things (IoT)",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        81.6656822
      ],
      [
        "Internet of Things (IoT)",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        56.6825649
      ],
      [
        "Internet of Things (IoT)",
        "OPEN",
        "O",
        null,
        null,
        null,
        63.5035466
      ],
      [
        "Internet of Things (IoT)",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        46.3536656
      ],
      [
        "Internet of Things (IoT)",
        "SC",
        "O",
        null,
        null,
        null,
        35.8191126
      ],
      [
        "Electrical Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        77.4501436
      ],
      [
        "Electrical Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        72.9906413
      ],
      [
        "Electrical Engineering",
        "ST",
        "H",
        null,
        null,
        null,
        28.2298995
      ],
      [
        "Electrical Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        55.7703505
      ],
      [
        "Electrical Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        58.235114
      ],
      [
        "Electrical Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        65.6970807
      ],
      [
        "Electrical Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        60.6803919
      ],
      [
        "Electrical Engineering",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        69.8131691
      ],
      [
        "Electrical Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        63.2367632
      ],
      [
        "Electrical Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        63.552865
      ],
      [
        "Electrical Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        60.4816409
      ],
      [
        "Electrical Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        58.235114
      ],
      [
        "Electrical Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        71.9146758
      ],
      [
        "Electrical Engineering",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        52.1191375
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        60.268127
      ],
      [
        "Mechanical Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        31.3655815
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        49.3545528
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        26.6925382
      ],
      [
        "Mechanical Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        4.7123118
      ],
      [
        "Mechanical Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        40.4162412
      ],
      [
        "Mechanical Engineering",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        52.1256716
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        70.0706138
      ],
      [
        "Mechanical Engineering",
        "NT-B",
        "O",
        null,
        null,
        null,
        22.5386607
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        57.5477401
      ],
      [
        "Mechanical Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        40.1861311
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        44.7174641
      ],
      [
        "Mechanical Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        46.3536656
      ],
      [
        "Mechanical Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        42.4145111
      ],
      [
        "Data Science",
        "OPEN",
        "H",
        null,
        null,
        null,
        77.583794
      ],
      [
        "Data Science",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        55.6712077
      ],
      [
        "Data Science",
        "NT-A",
        "H",
        null,
        null,
        null,
        49.8201439
      ],
      [
        "Data Science",
        "OBC",
        "H",
        null,
        null,
        null,
        69.3105802
      ],
      [
        "Data Science",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        82.5741649
      ],
      [
        "Data Science",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        61.5912113
      ],
      [
        "Data Science",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        69.7621466
      ],
      [
        "Data Science",
        "SEBC",
        "H",
        null,
        null,
        null,
        40.4162412
      ],
      [
        "Data Science",
        "OPEN",
        "O",
        null,
        null,
        null,
        55.4743121
      ],
      [
        "Data Science",
        "OBC",
        "O",
        null,
        null,
        null,
        54.1426021
      ],
      [
        "Data Science",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        72.9906413
      ],
      [
        "Data Science",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        51.2488599
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "OPEN",
        "H",
        null,
        null,
        null,
        83.1030453
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "SC",
        "H",
        null,
        null,
        null,
        66.3432235
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "NT-B",
        "H",
        null,
        null,
        null,
        71.7479911
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "NT-C",
        "H",
        null,
        null,
        null,
        74.8112584
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "OBC",
        "H",
        null,
        null,
        null,
        79.4663048
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "SEBC",
        "H",
        null,
        null,
        null,
        73.5651108
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        86.3037543
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        68.0484125
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        82.7018873
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        77.2289819
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "OPEN",
        "O",
        null,
        null,
        null,
        80.5595655
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "SC",
        "O",
        null,
        null,
        null,
        70.9482593
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "OBC",
        "O",
        null,
        null,
        null,
        80.1766472
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "SEBC",
        "O",
        null,
        null,
        null,
        60.5843098
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        83.7154638
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "VJ/DT-Ladies",
        "O",
        null,
        null,
        null,
        43.6669107
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        82.1268327
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "NT-A",
        "O",
        null,
        null,
        null,
        71.4785529
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "NT-B",
        "O",
        null,
        null,
        null,
        71.7479911
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        74.8088122
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        80.2313072
      ]
    ],
    "profile": {
      "overview": "Yadavrao Tasgaonkar Institute of Engineering & Technology, Karjat is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 03147. Status: Un-Aided. University/affiliation recorded in the CET directory: Mumbai University.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Karjat, Raigad, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Un-Aided.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03147",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03147"
      ]
    }
  },
  {
    "id": "03148",
    "name": "Mahavir Education Trust's Shah & Anchor Kutchhi Engineering College, Mumbai",
    "shortName": "SAKEC Mumbai",
    "city": "Mumbai",
    "region": "Mumbai",
    "district": "Mumbai",
    "status": "Un-Aided Autonomous",
    "university": "Mumbai University",
    "branches": [
      "Computer Engineering",
      "Information Technology",
      "Cyber Security",
      "Electronics and Telecommunication Engg",
      "Electronics Engineering ( VLSI Design and Technology)",
      "Electronics and Computer Science",
      "Electronics and Communication (Advanced Communication Technology)",
      "AI & Data Science"
    ],
    "cutoffs": [
      [
        "Computer Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        94.7283486
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        94.772118
      ],
      [
        "Information Technology",
        "OPEN",
        "State",
        null,
        null,
        null,
        93.4202865
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        93.442623
      ],
      [
        "Cyber Security",
        "OPEN",
        "State",
        null,
        null,
        null,
        92.9717253
      ],
      [
        "Cyber Security",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        92.9443952
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "State",
        null,
        null,
        null,
        92.9026198
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        91.9326024
      ],
      [
        "Electronics Engineering ( VLSI Design and Technology)",
        "OPEN",
        "State",
        null,
        null,
        null,
        90.1218002
      ],
      [
        "Electronics Engineering ( VLSI Design and Technology)",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        88.2603909
      ],
      [
        "Electronics and Computer Science",
        "OPEN",
        "State",
        null,
        null,
        null,
        91.8763536
      ],
      [
        "Electronics and Computer Science",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        91.7989964
      ],
      [
        "Electronics and Communication (Advanced Communication Technology)",
        "OPEN",
        "State",
        null,
        null,
        null,
        89.106913
      ],
      [
        "Electronics and Communication (Advanced Communication Technology)",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        88.5637068
      ],
      [
        "AI & Data Science",
        "OPEN",
        "State",
        null,
        null,
        null,
        93.7060041
      ],
      [
        "AI & Data Science",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        93.4649935
      ]
    ],
    "profile": {
      "overview": "Mahavir Education Trust's Shah & Anchor Kutchhi Engineering College, Mumbai is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 03148. Status: Un-Aided Autonomous. University/affiliation recorded in the CET directory: Mumbai University.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Mumbai, Mumbai, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Un-Aided Autonomous.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03148",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03148"
      ]
    }
  },
  {
    "id": "03183",
    "name": "Anjuman-I-Islam's M.H. Saboo Siddik College of Engineering, Byculla, Mumbai",
    "shortName": "M.H. Saboo Siddik COE",
    "city": "Mumbai",
    "region": "Mumbai",
    "district": "Mumbai",
    "status": "Un-Aided",
    "university": "Mumbai University",
    "branches": [
      "Civil Engineering",
      "Computer Engineering",
      "Information Technology",
      "Electronics and Telecommunication Engg",
      "Mechanical Engineering",
      "Mechanical Engineering Automobile",
      "Computer Science and Engineering (AI & ML)",
      "Computer Science and Engineering (Internet of Things and Cyber Security Including Block Chain"
    ],
    "cutoffs": [
      [
        "Civil Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        77.550585
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        65.1614878
      ],
      [
        "Civil Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        60.5118338
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        59.5499981
      ],
      [
        "Computer Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        86.6676057
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        87.3518409
      ],
      [
        "Computer Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        83.7986478
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        73.9021728
      ],
      [
        "Information Technology",
        "OPEN",
        "H",
        null,
        null,
        null,
        83.8560469
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        83.014142
      ],
      [
        "Information Technology",
        "OPEN",
        "O",
        null,
        null,
        null,
        80.4944215
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        77.022977
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "H",
        null,
        null,
        null,
        80.4293972
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        82.9247643
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "O",
        null,
        null,
        null,
        74.8210845
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        70.6970324
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        79.5928226
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        67.2460619
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        59.3625359
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        44.1937857
      ],
      [
        "Mechanical Engineering Automobile",
        "OPEN",
        "H",
        null,
        null,
        null,
        71.1330463
      ],
      [
        "Mechanical Engineering Automobile",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        57.4188806
      ],
      [
        "Mechanical Engineering Automobile",
        "OPEN",
        "O",
        null,
        null,
        null,
        49.4593034
      ],
      [
        "Mechanical Engineering Automobile",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        25.8331579
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "OPEN",
        "H",
        null,
        null,
        null,
        84.4651484
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        82.6530612
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "OPEN",
        "O",
        null,
        null,
        null,
        78.0162614
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        73.5651108
      ],
      [
        "Computer Science and Engineering (Internet of Things and Cyber Security Including Block Chain",
        "OPEN",
        "H",
        null,
        null,
        null,
        83.1030453
      ],
      [
        "Computer Science and Engineering (Internet of Things and Cyber Security Including Block Chain",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        81.8599034
      ],
      [
        "Computer Science and Engineering (Internet of Things and Cyber Security Including Block Chain",
        "OPEN",
        "O",
        null,
        null,
        null,
        82.1648735
      ],
      [
        "Computer Science and Engineering (Internet of Things and Cyber Security Including Block Chain",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        71.4864246
      ]
    ],
    "profile": {
      "overview": "Anjuman-I-Islam's M.H. Saboo Siddik College of Engineering, Byculla, Mumbai is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 03183. Status: Un-Aided. University/affiliation recorded in the CET directory: Mumbai University.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Mumbai, Mumbai, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Un-Aided.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03183",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03183"
      ]
    }
  },
  {
    "id": "03184",
    "name": "Fr. Conceicao Rodrigues College of Engineering, Bandra, Mumbai",
    "shortName": "CRCE Mumbai",
    "city": "Mumbai",
    "region": "Mumbai",
    "district": "Mumbai",
    "status": "Un-Aided Autonomous",
    "university": "Mumbai University",
    "branches": [
      "Computer Science and Engineering",
      "Computer Engineering",
      "Mechanical Engineering",
      "Electronics and Computer Science"
    ],
    "cutoffs": [
      [
        "Computer Science and Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        98.174902
      ],
      [
        "Computer Science and Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        97.624379
      ],
      [
        "Computer Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        98.2656941
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        97.7942456
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        97.225256
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        96.8479282
      ],
      [
        "Electronics and Computer Science",
        "OPEN",
        "State",
        null,
        null,
        null,
        97.9285523
      ],
      [
        "Electronics and Computer Science",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        97.3257727
      ]
    ],
    "profile": {
      "overview": "Fr. Conceicao Rodrigues College of Engineering, Bandra, Mumbai is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 03184. Status: Un-Aided Autonomous. University/affiliation recorded in the CET directory: Mumbai University.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Mumbai, Mumbai, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Un-Aided Autonomous.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03184",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03184"
      ]
    }
  },
  {
    "id": "03185",
    "name": "Vivekanand Education Society's Institute of Technology, Chembur, Mumbai",
    "shortName": "VESIT Mumbai",
    "city": "Mumbai",
    "region": "Mumbai",
    "district": "Mumbai",
    "status": "Un-Aided Autonomous",
    "university": "Mumbai University",
    "branches": [
      "Computer Engineering",
      "Information Technology",
      "Electronics and Telecommunication Engg",
      "Electronics and Computer Science",
      "Automation and Robotics",
      "AI & Data Science"
    ],
    "cutoffs": [
      [
        "Computer Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        98.5075769
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        98.0655851
      ],
      [
        "Information Technology",
        "OPEN",
        "State",
        null,
        null,
        null,
        97.9630636
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        97.4745389
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "State",
        null,
        null,
        null,
        97.5497917
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        97.0287935
      ],
      [
        "Electronics and Computer Science",
        "OPEN",
        "State",
        null,
        null,
        null,
        97.7594015
      ],
      [
        "Electronics and Computer Science",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        97.1923599
      ],
      [
        "Automation and Robotics",
        "OPEN",
        "State",
        null,
        null,
        null,
        96.7828418
      ],
      [
        "Automation and Robotics",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        96.389325
      ],
      [
        "AI & Data Science",
        "OPEN",
        "State",
        null,
        null,
        null,
        97.9249397
      ],
      [
        "AI & Data Science",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        97.5152589
      ]
    ],
    "profile": {
      "overview": "Vivekanand Education Society's Institute of Technology, Chembur, Mumbai is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 03185. Status: Un-Aided Autonomous. University/affiliation recorded in the CET directory: Mumbai University.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Mumbai, Mumbai, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Un-Aided Autonomous.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03185",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03185"
      ]
    }
  },
  {
    "id": "03187",
    "name": "N.Y.S.S.'s Datta Meghe College of Engineering, Airoli, Navi Mumbai",
    "shortName": "DMCE Airoli",
    "city": "Navi Mumbai",
    "region": "Mumbai",
    "district": "Thane",
    "status": "Un-Aided Autonomous",
    "university": "Mumbai University",
    "branches": [
      "Civil Engineering",
      "Computer Engineering",
      "Information Technology",
      "Electronics and Telecommunication Engg",
      "Chemical Engineering",
      "Mechanical Engineering",
      "Civil and infrastructure Engineering",
      "AI & Data Science"
    ],
    "cutoffs": [
      [
        "Civil Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        86.8005513
      ],
      [
        "Civil Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        75.6280193
      ],
      [
        "Civil Engineering",
        "ST",
        "H",
        null,
        null,
        null,
        36.6414088
      ],
      [
        "Civil Engineering",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        63.4876968
      ],
      [
        "Civil Engineering",
        "NT-A",
        "H",
        null,
        null,
        null,
        79.4663048
      ],
      [
        "Civil Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        73.2908824
      ],
      [
        "Civil Engineering",
        "NT-C",
        "H",
        null,
        null,
        null,
        77.2143105
      ],
      [
        "Civil Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        77.7140658
      ],
      [
        "Civil Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        68.0484125
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        86.5743412
      ],
      [
        "Civil Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        76.4503291
      ],
      [
        "Civil Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        78.1913582
      ],
      [
        "Civil Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        63.4757967
      ],
      [
        "Civil Engineering",
        "PWDOPEN",
        "H",
        null,
        null,
        null,
        65.4837825
      ],
      [
        "Civil Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        86.3032893
      ],
      [
        "Civil Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        80.1749582
      ],
      [
        "Civil Engineering",
        "ST",
        "O",
        null,
        null,
        null,
        27.9569892
      ],
      [
        "Civil Engineering",
        "NT-A",
        "O",
        null,
        null,
        null,
        74.4163823
      ],
      [
        "Civil Engineering",
        "NT-B",
        "O",
        null,
        null,
        null,
        84.6586561
      ],
      [
        "Civil Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        82.6530612
      ],
      [
        "Civil Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        75.242318
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        84.7521447
      ],
      [
        "Civil Engineering",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        78.0816199
      ],
      [
        "Civil Engineering",
        "NT-C-Ladies",
        "O",
        null,
        null,
        null,
        49.4593034
      ],
      [
        "Civil Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        81.6705255
      ],
      [
        "Civil Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        16.8122355
      ],
      [
        "Computer Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        93.233135
      ],
      [
        "Computer Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        88.8232797
      ],
      [
        "Computer Engineering",
        "ST",
        "H",
        null,
        null,
        null,
        64.2198294
      ],
      [
        "Computer Engineering",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        88.1968791
      ],
      [
        "Computer Engineering",
        "NT-A",
        "H",
        null,
        null,
        null,
        91.7854984
      ],
      [
        "Computer Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        90.8237951
      ],
      [
        "Computer Engineering",
        "NT-C",
        "H",
        null,
        null,
        null,
        91.9103015
      ],
      [
        "Computer Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        91.7505571
      ],
      [
        "Computer Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        90.9657321
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        93.4790313
      ],
      [
        "Computer Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        89.4256012
      ],
      [
        "Computer Engineering",
        "ST-Ladies",
        "H",
        null,
        null,
        null,
        81.0334862
      ],
      [
        "Computer Engineering",
        "VJ/DT-Ladies",
        "H",
        null,
        null,
        null,
        72.9916849
      ],
      [
        "Computer Engineering",
        "NT-A-Ladies",
        "H",
        null,
        null,
        null,
        85.2824124
      ],
      [
        "Computer Engineering",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        89.5522919
      ],
      [
        "Computer Engineering",
        "NT-C-Ladies",
        "H",
        null,
        null,
        null,
        85.6770225
      ],
      [
        "Computer Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        92.8132001
      ],
      [
        "Computer Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        90.6279863
      ],
      [
        "Computer Engineering",
        "PWDOPEN",
        "H",
        null,
        null,
        null,
        77.9303712
      ],
      [
        "Computer Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        90.0451538
      ],
      [
        "Computer Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        85.8665128
      ],
      [
        "Computer Engineering",
        "ST",
        "O",
        null,
        null,
        null,
        63.0171253
      ],
      [
        "Computer Engineering",
        "VJ/DT",
        "O",
        null,
        null,
        null,
        87.2379152
      ],
      [
        "Computer Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        89.5522919
      ],
      [
        "Computer Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        87.730083
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        89.6590708
      ],
      [
        "Computer Engineering",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        89.4256012
      ],
      [
        "Computer Engineering",
        "NT-B-Ladies",
        "O",
        null,
        null,
        null,
        83.9990684
      ],
      [
        "Computer Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        87.4032298
      ],
      [
        "Computer Engineering",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        86.2729883
      ],
      [
        "Computer Engineering",
        "ST-Ladies",
        "O",
        null,
        null,
        null,
        37.0257103
      ],
      [
        "Computer Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        86.2729883
      ],
      [
        "Information Technology",
        "OPEN",
        "H",
        null,
        null,
        null,
        90.966814
      ],
      [
        "Information Technology",
        "SC",
        "H",
        null,
        null,
        null,
        86.6676057
      ],
      [
        "Information Technology",
        "ST",
        "H",
        null,
        null,
        null,
        31.0015898
      ],
      [
        "Information Technology",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        82.7018873
      ],
      [
        "Information Technology",
        "NT-A",
        "H",
        null,
        null,
        null,
        85.3230758
      ],
      [
        "Information Technology",
        "NT-B",
        "H",
        null,
        null,
        null,
        87.2379152
      ],
      [
        "Information Technology",
        "NT-C",
        "H",
        null,
        null,
        null,
        85.3954204
      ],
      [
        "Information Technology",
        "OBC",
        "H",
        null,
        null,
        null,
        89.935711
      ],
      [
        "Information Technology",
        "SEBC",
        "H",
        null,
        null,
        null,
        88.7955476
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        90.9612775
      ],
      [
        "Information Technology",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        85.2566749
      ],
      [
        "Information Technology",
        "ST-Ladies",
        "H",
        null,
        null,
        null,
        3.0695292
      ],
      [
        "Information Technology",
        "VJ/DT-Ladies",
        "H",
        null,
        null,
        null,
        66.561551
      ],
      [
        "Information Technology",
        "NT-A-Ladies",
        "H",
        null,
        null,
        null,
        84.3786315
      ],
      [
        "Information Technology",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        80.9705409
      ],
      [
        "Information Technology",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        90.1045888
      ],
      [
        "Information Technology",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        88.0941637
      ],
      [
        "Information Technology",
        "OPEN",
        "O",
        null,
        null,
        null,
        88.2603909
      ],
      [
        "Information Technology",
        "SC",
        "O",
        null,
        null,
        null,
        81.9314642
      ],
      [
        "Information Technology",
        "VJ/DT",
        "O",
        null,
        null,
        null,
        86.564971
      ],
      [
        "Information Technology",
        "NT-A",
        "O",
        null,
        null,
        null,
        85.2566749
      ],
      [
        "Information Technology",
        "NT-B",
        "O",
        null,
        null,
        null,
        86.8832732
      ],
      [
        "Information Technology",
        "NT-C",
        "O",
        null,
        null,
        null,
        84.539834
      ],
      [
        "Information Technology",
        "OBC",
        "O",
        null,
        null,
        null,
        86.5848999
      ],
      [
        "Information Technology",
        "SEBC",
        "O",
        null,
        null,
        null,
        87.8605935
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        86.3943435
      ],
      [
        "Information Technology",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        81.4993122
      ],
      [
        "Information Technology",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        86.2660493
      ],
      [
        "Information Technology",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        83.2810347
      ],
      [
        "Information Technology",
        "ST",
        "O",
        null,
        null,
        null,
        43.7064846
      ],
      [
        "Information Technology",
        "ST-Ladies",
        "O",
        null,
        null,
        null,
        16.8210201
      ],
      [
        "Information Technology",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        77.3511663
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "H",
        null,
        null,
        null,
        88.8293119
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC",
        "H",
        null,
        null,
        null,
        82.9459739
      ],
      [
        "Electronics and Telecommunication Engg",
        "ST",
        "H",
        null,
        null,
        null,
        46.0219719
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        68.5042436
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-A",
        "H",
        null,
        null,
        null,
        77.4128766
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B",
        "H",
        null,
        null,
        null,
        76.5032413
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-C",
        "H",
        null,
        null,
        null,
        80.4293972
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC",
        "H",
        null,
        null,
        null,
        85.7757627
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC",
        "H",
        null,
        null,
        null,
        82.9464759
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        88.2977496
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        80.7004831
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-C-Ladies",
        "H",
        null,
        null,
        null,
        80.1766472
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        85.1182895
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        84.4852349
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT-Ladies",
        "H",
        null,
        null,
        null,
        63.5035466
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "O",
        null,
        null,
        null,
        88.1535836
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC",
        "O",
        null,
        null,
        null,
        81.4993122
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT",
        "O",
        null,
        null,
        null,
        74.8210845
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-A",
        "O",
        null,
        null,
        null,
        72.9249982
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B",
        "O",
        null,
        null,
        null,
        79.379989
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC",
        "O",
        null,
        null,
        null,
        85.3531656
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC",
        "O",
        null,
        null,
        null,
        85.3531656
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        85.6921506
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        84.5857013
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        83.1030453
      ],
      [
        "Electronics and Telecommunication Engg",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        48.8664194
      ],
      [
        "Chemical Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        90.4539834
      ],
      [
        "Chemical Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        76.3286018
      ],
      [
        "Chemical Engineering",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        69.4641016
      ],
      [
        "Chemical Engineering",
        "NT-A",
        "H",
        null,
        null,
        null,
        70.3901803
      ],
      [
        "Chemical Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        87.2593857
      ],
      [
        "Chemical Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        85.8946885
      ],
      [
        "Chemical Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        74.75684
      ],
      [
        "Chemical Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        94.1005655
      ],
      [
        "Chemical Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        89.2347783
      ],
      [
        "Chemical Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        88.525902
      ],
      [
        "Chemical Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        84.6586561
      ],
      [
        "Chemical Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        77.8612083
      ],
      [
        "Chemical Engineering",
        "NT-C",
        "O",
        null,
        null,
        null,
        63.003413
      ],
      [
        "Chemical Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        74.75684
      ],
      [
        "Chemical Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        84.3808448
      ],
      [
        "Chemical Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        85.4732337
      ],
      [
        "Chemical Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        80.9705409
      ],
      [
        "Chemical Engineering",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        52.4918222
      ],
      [
        "Chemical Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        61.579051
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        90.3271341
      ],
      [
        "Mechanical Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        85.225256
      ],
      [
        "Mechanical Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        81.9221888
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        85.9891185
      ],
      [
        "Mechanical Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        87.7370373
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        85.7396473
      ],
      [
        "Mechanical Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        74.0786749
      ],
      [
        "Mechanical Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        75.4755316
      ],
      [
        "Mechanical Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        68.5042436
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        86.099446
      ],
      [
        "Mechanical Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        79.5691881
      ],
      [
        "Mechanical Engineering",
        "ST",
        "O",
        null,
        null,
        null,
        61.2830506
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        82.6245527
      ],
      [
        "Mechanical Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        74.7351841
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        86.3943435
      ],
      [
        "Mechanical Engineering",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        55.7542662
      ],
      [
        "Mechanical Engineering",
        "VJ/DT-Ladies",
        "O",
        null,
        null,
        null,
        66.4794206
      ],
      [
        "Mechanical Engineering",
        "NT-A-Ladies",
        "O",
        null,
        null,
        null,
        38.215662
      ],
      [
        "Mechanical Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        79.3794141
      ],
      [
        "Mechanical Engineering",
        "NT-B-Ladies",
        "O",
        null,
        null,
        null,
        25.432546
      ],
      [
        "Mechanical Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        14.9547816
      ],
      [
        "Civil and infrastructure Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        80.4716144
      ],
      [
        "Civil and infrastructure Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        57.8274425
      ],
      [
        "Civil and infrastructure Engineering",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        61.7346759
      ],
      [
        "Civil and infrastructure Engineering",
        "NT-C",
        "H",
        null,
        null,
        null,
        41.7129534
      ],
      [
        "Civil and infrastructure Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        71.7544603
      ],
      [
        "Civil and infrastructure Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        53.1999725
      ],
      [
        "Civil and infrastructure Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        81.3089554
      ],
      [
        "Civil and infrastructure Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        57.8274425
      ],
      [
        "Civil and infrastructure Engineering",
        "NT-A-Ladies",
        "H",
        null,
        null,
        null,
        77.550585
      ],
      [
        "Civil and infrastructure Engineering",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        60.9157012
      ],
      [
        "Civil and infrastructure Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        68.6498934
      ],
      [
        "Civil and infrastructure Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        51.5429844
      ],
      [
        "Civil and infrastructure Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        73.5651108
      ],
      [
        "Civil and infrastructure Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        54.9832594
      ],
      [
        "Civil and infrastructure Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        61.579051
      ],
      [
        "Civil and infrastructure Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        86.0346936
      ],
      [
        "Civil and infrastructure Engineering",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        18.3800623
      ],
      [
        "AI & Data Science",
        "OPEN",
        "H",
        null,
        null,
        null,
        90.8237951
      ],
      [
        "AI & Data Science",
        "SC",
        "H",
        null,
        null,
        null,
        87.0084871
      ],
      [
        "AI & Data Science",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        83.5707404
      ],
      [
        "AI & Data Science",
        "NT-A",
        "H",
        null,
        null,
        null,
        85.1550148
      ],
      [
        "AI & Data Science",
        "NT-B",
        "H",
        null,
        null,
        null,
        83.1950716
      ],
      [
        "AI & Data Science",
        "NT-C",
        "H",
        null,
        null,
        null,
        89.4256012
      ],
      [
        "AI & Data Science",
        "OBC",
        "H",
        null,
        null,
        null,
        89.2347783
      ],
      [
        "AI & Data Science",
        "SEBC",
        "H",
        null,
        null,
        null,
        88.2909271
      ],
      [
        "AI & Data Science",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        90.7163631
      ],
      [
        "AI & Data Science",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        84.6438942
      ],
      [
        "AI & Data Science",
        "ST-Ladies",
        "H",
        null,
        null,
        null,
        68.2993965
      ],
      [
        "AI & Data Science",
        "VJ/DT-Ladies",
        "H",
        null,
        null,
        null,
        71.7544603
      ],
      [
        "AI & Data Science",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        83.1030453
      ],
      [
        "AI & Data Science",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        89.4962236
      ],
      [
        "AI & Data Science",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        88.070986
      ],
      [
        "AI & Data Science",
        "OPEN",
        "O",
        null,
        null,
        null,
        87.2636301
      ],
      [
        "AI & Data Science",
        "SC",
        "O",
        null,
        null,
        null,
        84.3396689
      ],
      [
        "AI & Data Science",
        "VJ/DT",
        "O",
        null,
        null,
        null,
        81.4271094
      ],
      [
        "AI & Data Science",
        "NT-A",
        "O",
        null,
        null,
        null,
        80.7883659
      ],
      [
        "AI & Data Science",
        "NT-B",
        "O",
        null,
        null,
        null,
        85.9425358
      ],
      [
        "AI & Data Science",
        "OBC",
        "O",
        null,
        null,
        null,
        85.65358
      ],
      [
        "AI & Data Science",
        "SEBC",
        "O",
        null,
        null,
        null,
        86.9322985
      ],
      [
        "AI & Data Science",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        85.6921506
      ],
      [
        "AI & Data Science",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        81.9137967
      ],
      [
        "AI & Data Science",
        "NT-C-Ladies",
        "O",
        null,
        null,
        null,
        71.0421393
      ],
      [
        "AI & Data Science",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        83.7030299
      ],
      [
        "AI & Data Science",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        76.6875679
      ]
    ],
    "profile": {
      "overview": "N.Y.S.S.'s Datta Meghe College of Engineering, Airoli, Navi Mumbai is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 03187. Status: Un-Aided Autonomous. University/affiliation recorded in the CET directory: Mumbai University.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Navi Mumbai, Thane, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Un-Aided Autonomous.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03187",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03187"
      ]
    }
  },
  {
    "id": "03189",
    "name": "Bharati Vidyapeeth College of Engineering, Navi Mumbai",
    "shortName": "BVCOE Navi Mumbai",
    "city": "Navi Mumbai",
    "region": "Mumbai",
    "district": "Navi Mumbai",
    "status": "Un-Aided",
    "university": "Mumbai University",
    "branches": [
      "Computer Engineering",
      "Information Technology",
      "Electronics and Telecommunication Engg",
      "Instrumentation Engineering",
      "Chemical Engineering",
      "Mechanical Engineering"
    ],
    "cutoffs": [
      [
        "Computer Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        94.9817832
      ],
      [
        "Computer Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        91.6804693
      ],
      [
        "Computer Engineering",
        "ST",
        "H",
        null,
        null,
        null,
        74.2209832
      ],
      [
        "Computer Engineering",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        91.3421736
      ],
      [
        "Computer Engineering",
        "NT-A",
        "H",
        null,
        null,
        null,
        93.0429397
      ],
      [
        "Computer Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        92.0615223
      ],
      [
        "Computer Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        94.0733176
      ],
      [
        "Computer Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        91.0668866
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        94.9572138
      ],
      [
        "Computer Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        92.1517727
      ],
      [
        "Computer Engineering",
        "ST-Ladies",
        "H",
        null,
        null,
        null,
        67.500481
      ],
      [
        "Computer Engineering",
        "NT-C-Ladies",
        "H",
        null,
        null,
        null,
        91.5582428
      ],
      [
        "Computer Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        93.4491576
      ],
      [
        "Computer Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        91.7858261
      ],
      [
        "Computer Engineering",
        "PWDOPEN",
        "H",
        null,
        null,
        null,
        41.7943409
      ],
      [
        "Computer Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        95.3963666
      ],
      [
        "Computer Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        89.3287171
      ],
      [
        "Computer Engineering",
        "ST",
        "O",
        null,
        null,
        null,
        59.5017065
      ],
      [
        "Computer Engineering",
        "VJ/DT",
        "O",
        null,
        null,
        null,
        92.3740511
      ],
      [
        "Computer Engineering",
        "NT-A",
        "O",
        null,
        null,
        null,
        90.0830242
      ],
      [
        "Computer Engineering",
        "NT-B",
        "O",
        null,
        null,
        null,
        95.2061875
      ],
      [
        "Computer Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        94.6756384
      ],
      [
        "Computer Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        94.2307013
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        96.2707087
      ],
      [
        "Computer Engineering",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        90.5209194
      ],
      [
        "Computer Engineering",
        "ST-Ladies",
        "O",
        null,
        null,
        null,
        72.3753397
      ],
      [
        "Computer Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        95.7836954
      ],
      [
        "Computer Engineering",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        94.8860653
      ],
      [
        "Computer Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        93.737776
      ],
      [
        "Information Technology",
        "OPEN",
        "H",
        null,
        null,
        null,
        94.6508434
      ],
      [
        "Information Technology",
        "SC",
        "H",
        null,
        null,
        null,
        92.5616727
      ],
      [
        "Information Technology",
        "ST",
        "H",
        null,
        null,
        null,
        68.6717464
      ],
      [
        "Information Technology",
        "NT-C",
        "H",
        null,
        null,
        null,
        93.2033865
      ],
      [
        "Information Technology",
        "OBC",
        "H",
        null,
        null,
        null,
        93.887286
      ],
      [
        "Information Technology",
        "SEBC",
        "H",
        null,
        null,
        null,
        92.5679358
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        93.6866278
      ],
      [
        "Information Technology",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        88.4219058
      ],
      [
        "Information Technology",
        "VJ/DT-Ladies",
        "H",
        null,
        null,
        null,
        82.4592501
      ],
      [
        "Information Technology",
        "NT-A-Ladies",
        "H",
        null,
        null,
        null,
        92.2976964
      ],
      [
        "Information Technology",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        89.5593612
      ],
      [
        "Information Technology",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        93.3554944
      ],
      [
        "Information Technology",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        90.8211878
      ],
      [
        "Information Technology",
        "PWDOPEN",
        "H",
        null,
        null,
        null,
        81.2365306
      ],
      [
        "Information Technology",
        "OPEN",
        "O",
        null,
        null,
        null,
        94.5733788
      ],
      [
        "Information Technology",
        "SC",
        "O",
        null,
        null,
        null,
        89.9742931
      ],
      [
        "Information Technology",
        "ST",
        "O",
        null,
        null,
        null,
        86.099446
      ],
      [
        "Information Technology",
        "OBC",
        "O",
        null,
        null,
        null,
        94.5582957
      ],
      [
        "Information Technology",
        "SEBC",
        "O",
        null,
        null,
        null,
        93.7694824
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        94.2112206
      ],
      [
        "Information Technology",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        93.6416382
      ],
      [
        "Information Technology",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        87.5237763
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "H",
        null,
        null,
        null,
        91.0387255
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC",
        "H",
        null,
        null,
        null,
        87.3937627
      ],
      [
        "Electronics and Telecommunication Engg",
        "ST",
        "H",
        null,
        null,
        null,
        26.3181412
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        82.5187713
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-A",
        "H",
        null,
        null,
        null,
        84.2510483
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B",
        "H",
        null,
        null,
        null,
        87.5957229
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-C",
        "H",
        null,
        null,
        null,
        86.099446
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC",
        "H",
        null,
        null,
        null,
        88.8293119
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC",
        "H",
        null,
        null,
        null,
        87.6469672
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        91.244949
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        88.0941637
      ],
      [
        "Electronics and Telecommunication Engg",
        "ST-Ladies",
        "H",
        null,
        null,
        null,
        65.6970807
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        89.451403
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        83.1030453
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "O",
        null,
        null,
        null,
        91.4334483
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC",
        "O",
        null,
        null,
        null,
        90.1775065
      ],
      [
        "Electronics and Telecommunication Engg",
        "ST",
        "O",
        null,
        null,
        null,
        32.4603175
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-C",
        "O",
        null,
        null,
        null,
        87.9735649
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC",
        "O",
        null,
        null,
        null,
        90.966814
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC",
        "O",
        null,
        null,
        null,
        90.9657321
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        92.0888164
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        91.6610792
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT-Ladies",
        "O",
        null,
        null,
        null,
        74.2209832
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-A-Ladies",
        "O",
        null,
        null,
        null,
        80.2462012
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B-Ladies",
        "O",
        null,
        null,
        null,
        88.5637068
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        89.6830085
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        91.0135161
      ],
      [
        "Electronics and Telecommunication Engg",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        78.890785
      ],
      [
        "Instrumentation Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        86.3037543
      ],
      [
        "Instrumentation Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        79.0264353
      ],
      [
        "Instrumentation Engineering",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        73.6510161
      ],
      [
        "Instrumentation Engineering",
        "NT-A",
        "H",
        null,
        null,
        null,
        40.5616465
      ],
      [
        "Instrumentation Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        76.3172626
      ],
      [
        "Instrumentation Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        78.8262695
      ],
      [
        "Instrumentation Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        65.1614878
      ],
      [
        "Instrumentation Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        85.0853734
      ],
      [
        "Instrumentation Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        68.2993965
      ],
      [
        "Instrumentation Engineering",
        "NT-A-Ladies",
        "H",
        null,
        null,
        null,
        63.5035466
      ],
      [
        "Instrumentation Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        78.8983322
      ],
      [
        "Instrumentation Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        87.5237763
      ],
      [
        "Instrumentation Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        74.6516923
      ],
      [
        "Instrumentation Engineering",
        "VJ/DT",
        "O",
        null,
        null,
        null,
        60.1814551
      ],
      [
        "Instrumentation Engineering",
        "NT-B",
        "O",
        null,
        null,
        null,
        55.6712077
      ],
      [
        "Instrumentation Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        82.6530612
      ],
      [
        "Instrumentation Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        81.8599034
      ],
      [
        "Instrumentation Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        81.9314642
      ],
      [
        "Instrumentation Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        70.9390112
      ],
      [
        "Chemical Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        93.611957
      ],
      [
        "Chemical Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        82.3548238
      ],
      [
        "Chemical Engineering",
        "NT-A",
        "H",
        null,
        null,
        null,
        60.070698
      ],
      [
        "Chemical Engineering",
        "NT-C",
        "H",
        null,
        null,
        null,
        75.1493199
      ],
      [
        "Chemical Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        91.9792268
      ],
      [
        "Chemical Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        81.2524249
      ],
      [
        "Chemical Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        94.7041159
      ],
      [
        "Chemical Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        85.239357
      ],
      [
        "Chemical Engineering",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        73.0237189
      ],
      [
        "Chemical Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        93.9486424
      ],
      [
        "Chemical Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        81.5923479
      ],
      [
        "Chemical Engineering",
        "ST-Ladies",
        "H",
        null,
        null,
        null,
        37.8307719
      ],
      [
        "Chemical Engineering",
        "VJ/DT-Ladies",
        "H",
        null,
        null,
        null,
        45.035095
      ],
      [
        "Chemical Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        90.866765
      ],
      [
        "Chemical Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        86.0314842
      ],
      [
        "Chemical Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        88.1968791
      ],
      [
        "Chemical Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        90.5012991
      ],
      [
        "Chemical Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        90.4021551
      ],
      [
        "Chemical Engineering",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        83.8560469
      ],
      [
        "Chemical Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        47.0872596
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        90.0621118
      ],
      [
        "Mechanical Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        83.1481862
      ],
      [
        "Mechanical Engineering",
        "ST",
        "H",
        null,
        null,
        null,
        75.6280193
      ],
      [
        "Mechanical Engineering",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        67.500481
      ],
      [
        "Mechanical Engineering",
        "NT-A",
        "H",
        null,
        null,
        null,
        85.1749825
      ],
      [
        "Mechanical Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        79.7046663
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        84.4463229
      ],
      [
        "Mechanical Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        84.2510483
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        86.8427506
      ],
      [
        "Mechanical Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        79.2630446
      ],
      [
        "Mechanical Engineering",
        "NT-C-Ladies",
        "H",
        null,
        null,
        null,
        45.035095
      ],
      [
        "Mechanical Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        74.8112584
      ],
      [
        "Mechanical Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        69.0271267
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        89.5539769
      ],
      [
        "Mechanical Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        76.5032413
      ],
      [
        "Mechanical Engineering",
        "ST",
        "O",
        null,
        null,
        null,
        20.4073236
      ],
      [
        "Mechanical Engineering",
        "NT-A",
        "O",
        null,
        null,
        null,
        84.4463229
      ],
      [
        "Mechanical Engineering",
        "NT-B",
        "O",
        null,
        null,
        null,
        82.4850758
      ],
      [
        "Mechanical Engineering",
        "NT-C",
        "O",
        null,
        null,
        null,
        83.7134808
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        85.2566749
      ],
      [
        "Mechanical Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        81.0159708
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        84.9063828
      ],
      [
        "Mechanical Engineering",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        82.3454058
      ],
      [
        "Mechanical Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        84.4852349
      ],
      [
        "Mechanical Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        68.6717464
      ]
    ],
    "profile": {
      "overview": "Bharati Vidyapeeth College of Engineering, Navi Mumbai is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 03189. Status: Un-Aided. University/affiliation recorded in the CET directory: Mumbai University.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Navi Mumbai, Navi Mumbai, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Un-Aided.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03189",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03189"
      ]
    }
  },
  {
    "id": "03190",
    "name": "Terna Engineering College, Nerul, Navi Mumbai",
    "shortName": "Terna Engineering College",
    "city": "Navi Mumbai",
    "region": "Mumbai",
    "district": "Thane",
    "status": "Un-Aided Autonomous",
    "university": "Mumbai University",
    "branches": [
      "Civil Engineering",
      "Computer Engineering",
      "Information Technology",
      "Artificial Intelligence (AI) and Data Science",
      "Electronics and Telecommunication Engg",
      "Electronics Engineering",
      "Mechanical Engineering",
      "Mechatronics Engineering"
    ],
    "cutoffs": [
      [
        "Civil Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        86.5796724
      ],
      [
        "Civil Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        76.5032413
      ],
      [
        "Civil Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        66.561551
      ],
      [
        "Civil Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        68.7336094
      ],
      [
        "Civil Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        84.3204501
      ],
      [
        "Civil Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        81.9275869
      ],
      [
        "Civil Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        76.3384255
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        84.207639
      ],
      [
        "Civil Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        73.7754477
      ],
      [
        "Civil Engineering",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        51.5429844
      ],
      [
        "Civil Engineering",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        63.2367632
      ],
      [
        "Civil Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        72.3814647
      ],
      [
        "Civil Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        80.1749582
      ],
      [
        "Civil Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        46.3536656
      ],
      [
        "Computer Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        93.4463876
      ],
      [
        "Computer Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        89.5272602
      ],
      [
        "Computer Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        66.0913492
      ],
      [
        "Computer Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        86.2729883
      ],
      [
        "Computer Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        91.0135161
      ],
      [
        "Computer Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        90.9727817
      ],
      [
        "Computer Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        90.9144237
      ],
      [
        "Computer Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        92.2148897
      ],
      [
        "Computer Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        91.1365188
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        93.0779848
      ],
      [
        "Computer Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        87.7370373
      ],
      [
        "Computer Engineering",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        74.8088122
      ],
      [
        "Computer Engineering",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        80.7910924
      ],
      [
        "Computer Engineering",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        92.4132948
      ],
      [
        "Computer Engineering",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        88.8464637
      ],
      [
        "Computer Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        92.2402301
      ],
      [
        "Computer Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        91.507071
      ],
      [
        "Computer Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        88.4177906
      ],
      [
        "Information Technology",
        "OPEN",
        "State",
        null,
        null,
        null,
        92.0393375
      ],
      [
        "Information Technology",
        "SC",
        "State",
        null,
        null,
        null,
        88.2758357
      ],
      [
        "Information Technology",
        "ST",
        "State",
        null,
        null,
        null,
        64.7164682
      ],
      [
        "Information Technology",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        86.5748101
      ],
      [
        "Information Technology",
        "NT-A",
        "State",
        null,
        null,
        null,
        86.0457957
      ],
      [
        "Information Technology",
        "NT-B",
        "State",
        null,
        null,
        null,
        89.0033044
      ],
      [
        "Information Technology",
        "NT-C",
        "State",
        null,
        null,
        null,
        90.9108002
      ],
      [
        "Information Technology",
        "OBC",
        "State",
        null,
        null,
        null,
        91.0387255
      ],
      [
        "Information Technology",
        "SEBC",
        "State",
        null,
        null,
        null,
        89.9742931
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        91.4870854
      ],
      [
        "Information Technology",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        87.5957229
      ],
      [
        "Information Technology",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        68.6498934
      ],
      [
        "Information Technology",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        83.4527296
      ],
      [
        "Information Technology",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        85.1182895
      ],
      [
        "Information Technology",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        90.0451538
      ],
      [
        "Information Technology",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        90.7025504
      ],
      [
        "Information Technology",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        90.5728815
      ],
      [
        "Information Technology",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        78.0816199
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "OPEN",
        "State",
        null,
        null,
        null,
        92.5132937
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "SC",
        "State",
        null,
        null,
        null,
        88.525902
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "ST",
        "State",
        null,
        null,
        null,
        49.6322266
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        85.65358
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "NT-A",
        "State",
        null,
        null,
        null,
        86.6676057
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "NT-B",
        "State",
        null,
        null,
        null,
        88.8600683
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "OBC",
        "State",
        null,
        null,
        null,
        91.2552493
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "SEBC",
        "State",
        null,
        null,
        null,
        89.935711
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        93.233135
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        88.4177906
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        50.9743237
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        85.7757627
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        82.3548238
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        88.4226013
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        88.8464637
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        91.8763536
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        89.0615554
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        75.4755316
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "State",
        null,
        null,
        null,
        89.1809567
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC",
        "State",
        null,
        null,
        null,
        85.65358
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        74.75684
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-A",
        "State",
        null,
        null,
        null,
        79.9422744
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B",
        "State",
        null,
        null,
        null,
        86.8832732
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-C",
        "State",
        null,
        null,
        null,
        87.3518409
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC",
        "State",
        null,
        null,
        null,
        86.8427506
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC",
        "State",
        null,
        null,
        null,
        83.9283276
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        89.1852024
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        83.9283276
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        65.6313822
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        82.190886
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        88.070986
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        85.6770225
      ],
      [
        "Electronics and Telecommunication Engg",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        13.9341445
      ],
      [
        "Electronics and Telecommunication Engg",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        74.75684
      ],
      [
        "Electronics Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        86.7461997
      ],
      [
        "Electronics Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        78.0162614
      ],
      [
        "Electronics Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        76.7952218
      ],
      [
        "Electronics Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        72.3251186
      ],
      [
        "Electronics Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        79.4627847
      ],
      [
        "Electronics Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        83.1821207
      ],
      [
        "Electronics Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        78.975446
      ],
      [
        "Electronics Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        87.0343086
      ],
      [
        "Electronics Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        75.4489132
      ],
      [
        "Electronics Engineering",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        64.2198294
      ],
      [
        "Electronics Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        82.190886
      ],
      [
        "Electronics Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        73.676029
      ],
      [
        "Electronics Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        66.8147184
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        89.3287171
      ],
      [
        "Mechanical Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        80.7403032
      ],
      [
        "Mechanical Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        61.5912113
      ],
      [
        "Mechanical Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        76.973775
      ],
      [
        "Mechanical Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        81.9381769
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        85.9425358
      ],
      [
        "Mechanical Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        78.0816199
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        82.4592501
      ],
      [
        "Mechanical Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        68.6031011
      ],
      [
        "Mechanical Engineering",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        61.114444
      ],
      [
        "Mechanical Engineering",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        58.235114
      ],
      [
        "Mechanical Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        78.8262695
      ],
      [
        "Mechanical Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        73.5651108
      ],
      [
        "Mechatronics Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        87.493276
      ],
      [
        "Mechatronics Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        76.973775
      ],
      [
        "Mechatronics Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        58.1924692
      ],
      [
        "Mechatronics Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        76.099588
      ],
      [
        "Mechatronics Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        62.6016833
      ],
      [
        "Mechatronics Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        67.9621973
      ],
      [
        "Mechatronics Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        79.8369603
      ],
      [
        "Mechatronics Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        81.6705255
      ],
      [
        "Mechatronics Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        85.4732337
      ],
      [
        "Mechatronics Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        76.468112
      ],
      [
        "Mechatronics Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        73.5651108
      ],
      [
        "Mechatronics Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        52.7200757
      ],
      [
        "Mechatronics Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        70.6970324
      ]
    ],
    "profile": {
      "overview": "Terna Engineering College, Nerul, Navi Mumbai is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 03190. Status: Un-Aided Autonomous. University/affiliation recorded in the CET directory: Mumbai University.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Navi Mumbai, Thane, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Un-Aided Autonomous.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03190",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03190"
      ]
    }
  },
  {
    "id": "03194",
    "name": "Vidyavardhini's College of Engineering and Technology, Vasai",
    "shortName": "VCET Vasai",
    "city": "Vasai",
    "region": "Mumbai",
    "district": "Palghar",
    "status": "Un-Aided Autonomous",
    "university": "Mumbai University",
    "branches": [
      "Civil Engineering",
      "Computer Engineering",
      "Information Technology",
      "Electronics and Telecommunication Engg",
      "Mechanical Engineering",
      "Computer Science and Engineering (Data Science)",
      "AI & Data Science"
    ],
    "cutoffs": [
      [
        "Civil Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        83.1461103
      ],
      [
        "Civil Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        65.814611
      ],
      [
        "Civil Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        21.5368309
      ],
      [
        "Civil Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        55.6712077
      ],
      [
        "Civil Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        76.3172626
      ],
      [
        "Civil Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        67.2980865
      ],
      [
        "Civil Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        81.3089554
      ],
      [
        "Civil Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        69.3105802
      ],
      [
        "Civil Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        53.1999725
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        78.1913582
      ],
      [
        "Civil Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        58.9637781
      ],
      [
        "Civil Engineering",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        67.458483
      ],
      [
        "Civil Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        34.1022162
      ],
      [
        "Civil Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        84.3396689
      ],
      [
        "Computer Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        91.7989964
      ],
      [
        "Computer Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        87.609626
      ],
      [
        "Computer Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        37.1379111
      ],
      [
        "Computer Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        81.3607995
      ],
      [
        "Computer Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        84.4463229
      ],
      [
        "Computer Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        86.099446
      ],
      [
        "Computer Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        88.2603909
      ],
      [
        "Computer Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        90.1262916
      ],
      [
        "Computer Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        86.564971
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        92.9222144
      ],
      [
        "Computer Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        87.8605935
      ],
      [
        "Computer Engineering",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        77.4128766
      ],
      [
        "Computer Engineering",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        90.1398917
      ],
      [
        "Computer Engineering",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        88.7627999
      ],
      [
        "Computer Engineering",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        84.6586561
      ],
      [
        "Computer Engineering",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        89.6934787
      ],
      [
        "Computer Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        87.4466038
      ],
      [
        "Computer Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        31.8317161
      ],
      [
        "Computer Engineering",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        83.1030453
      ],
      [
        "Computer Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        89.9742931
      ],
      [
        "Information Technology",
        "OPEN",
        "State",
        null,
        null,
        null,
        90.5491967
      ],
      [
        "Information Technology",
        "SC",
        "State",
        null,
        null,
        null,
        84.9063828
      ],
      [
        "Information Technology",
        "ST",
        "State",
        null,
        null,
        null,
        55.2387338
      ],
      [
        "Information Technology",
        "NT-A",
        "State",
        null,
        null,
        null,
        81.9221888
      ],
      [
        "Information Technology",
        "NT-B",
        "State",
        null,
        null,
        null,
        83.5707404
      ],
      [
        "Information Technology",
        "NT-C",
        "State",
        null,
        null,
        null,
        83.9283276
      ],
      [
        "Information Technology",
        "OBC",
        "State",
        null,
        null,
        null,
        89.6830085
      ],
      [
        "Information Technology",
        "SEBC",
        "State",
        null,
        null,
        null,
        83.9283276
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        90.8211878
      ],
      [
        "Information Technology",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        85.9425358
      ],
      [
        "Information Technology",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        77.741426
      ],
      [
        "Information Technology",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        89.3655049
      ],
      [
        "Information Technology",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        81.5934486
      ],
      [
        "Information Technology",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        89.364907
      ],
      [
        "Information Technology",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        91.4174744
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "State",
        null,
        null,
        null,
        88.245893
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC",
        "State",
        null,
        null,
        null,
        82.3704723
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        58.4294088
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-A",
        "State",
        null,
        null,
        null,
        82.7777778
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B",
        "State",
        null,
        null,
        null,
        83.2810347
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC",
        "State",
        null,
        null,
        null,
        85.239357
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC",
        "State",
        null,
        null,
        null,
        78.699881
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        87.5957229
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        77.2619593
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        76.6993653
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        74.1334872
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        84.207639
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        78.9956692
      ],
      [
        "Electronics and Telecommunication Engg",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        85.9106165
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        88.8293119
      ],
      [
        "Mechanical Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        75.0953827
      ],
      [
        "Mechanical Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        24.3359483
      ],
      [
        "Mechanical Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        73.9721817
      ],
      [
        "Mechanical Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        63.540901
      ],
      [
        "Mechanical Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        76.5235824
      ],
      [
        "Mechanical Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        80.2313072
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        82.1648735
      ],
      [
        "Mechanical Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        62.8284912
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        81.2365306
      ],
      [
        "Mechanical Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        27.2101033
      ],
      [
        "Mechanical Engineering",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        76.2668468
      ],
      [
        "Mechanical Engineering",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        74.1899324
      ],
      [
        "Mechanical Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        73.2908824
      ],
      [
        "Mechanical Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        87.9344536
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "OPEN",
        "State",
        null,
        null,
        null,
        89.2478098
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "SC",
        "State",
        null,
        null,
        null,
        84.4463229
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "ST",
        "State",
        null,
        null,
        null,
        33.7141758
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        78.1913582
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "NT-A",
        "State",
        null,
        null,
        null,
        80.0260591
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "NT-B",
        "State",
        null,
        null,
        null,
        79.9422744
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "NT-C",
        "State",
        null,
        null,
        null,
        81.6705255
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "OBC",
        "State",
        null,
        null,
        null,
        87.4466038
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "SEBC",
        "State",
        null,
        null,
        null,
        79.3794141
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        89.0033044
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        82.6245527
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        49.0487536
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        64.2926156
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        79.3766715
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        82.7777778
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        88.2909271
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        87.468285
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        79.3794141
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        31.8317161
      ],
      [
        "AI & Data Science",
        "OPEN",
        "State",
        null,
        null,
        null,
        91.2331407
      ],
      [
        "AI & Data Science",
        "SC",
        "State",
        null,
        null,
        null,
        85.0971341
      ],
      [
        "AI & Data Science",
        "ST",
        "State",
        null,
        null,
        null,
        63.5901214
      ],
      [
        "AI & Data Science",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        84.539834
      ],
      [
        "AI & Data Science",
        "NT-A",
        "State",
        null,
        null,
        null,
        88.1535836
      ],
      [
        "AI & Data Science",
        "NT-B",
        "State",
        null,
        null,
        null,
        81.7199
      ],
      [
        "AI & Data Science",
        "NT-C",
        "State",
        null,
        null,
        null,
        86.713982
      ],
      [
        "AI & Data Science",
        "OBC",
        "State",
        null,
        null,
        null,
        89.4256012
      ],
      [
        "AI & Data Science",
        "SEBC",
        "State",
        null,
        null,
        null,
        84.3808448
      ],
      [
        "AI & Data Science",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        90.1775065
      ],
      [
        "AI & Data Science",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        85.1689875
      ],
      [
        "AI & Data Science",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        57.8685189
      ],
      [
        "AI & Data Science",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        77.550585
      ],
      [
        "AI & Data Science",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        81.9221888
      ],
      [
        "AI & Data Science",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        87.493276
      ],
      [
        "AI & Data Science",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        83.014142
      ],
      [
        "AI & Data Science",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        68.6498934
      ]
    ],
    "profile": {
      "overview": "Vidyavardhini's College of Engineering and Technology, Vasai is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 03194. Status: Un-Aided Autonomous. University/affiliation recorded in the CET directory: Mumbai University.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Vasai, Palghar, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Un-Aided Autonomous.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03194",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03194"
      ]
    }
  },
  {
    "id": "03196",
    "name": "Lokmanya Tilak College of Engineering, Kopar Khairane, Navi Mumbai",
    "shortName": "LTCE Navi Mumbai",
    "city": "Navi Mumbai",
    "region": "Mumbai",
    "district": "Thane",
    "status": "Un-Aided Autonomous",
    "university": "Mumbai University",
    "branches": [
      "Computer Engineering",
      "Electrical Engineering",
      "Electronics and Telecommunication Engg",
      "Mechanical Engineering",
      "Computer Science and Engineering (AI & ML)",
      "Computer Science and Engineering (Data Science)",
      "Computer Science and Engineering (Internet of Things and Cyber Security Including Block Chain"
    ],
    "cutoffs": [
      [
        "Computer Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        91.4802758
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        91.6451799
      ],
      [
        "Electrical Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        84.3786315
      ],
      [
        "Electrical Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        80.7004831
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "State",
        null,
        null,
        null,
        86.0314842
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        84.7804686
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        86.560206
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        81.2737812
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "OPEN",
        "State",
        null,
        null,
        null,
        89.5539769
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        89.3287171
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "OPEN",
        "State",
        null,
        null,
        null,
        89.6618256
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        90.2371528
      ],
      [
        "Computer Science and Engineering (Internet of Things and Cyber Security Including Block Chain",
        "OPEN",
        "State",
        null,
        null,
        null,
        89.1809567
      ],
      [
        "Computer Science and Engineering (Internet of Things and Cyber Security Including Block Chain",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        89.1852024
      ]
    ],
    "profile": {
      "overview": "Lokmanya Tilak College of Engineering, Kopar Khairane, Navi Mumbai is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 03196. Status: Un-Aided Autonomous. University/affiliation recorded in the CET directory: Mumbai University.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Navi Mumbai, Thane, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Un-Aided Autonomous.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03196",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03196"
      ]
    }
  },
  {
    "id": "03197",
    "name": "Agnel Charities' Fr. C. Rodrigues Institute of Technology, Vashi, Navi Mumbai",
    "shortName": "FRCRCE Vashi",
    "city": "Navi Mumbai",
    "region": "Mumbai",
    "district": "Navi Mumbai",
    "status": "Un-Aided Autonomous",
    "university": "Mumbai University",
    "branches": [
      "Computer Science and Engineering",
      "Computer Engineering",
      "Electrical Engineering",
      "Electronics and Telecommunication Engg",
      "Mechanical Engineering"
    ],
    "cutoffs": [
      [
        "Computer Science and Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        97.0798432
      ],
      [
        "Computer Science and Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        96.8345273
      ],
      [
        "Computer Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        97.1696644
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        96.7426478
      ],
      [
        "Electrical Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        95.1330171
      ],
      [
        "Electrical Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        94.2531106
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "State",
        null,
        null,
        null,
        96.5917775
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        96.614828
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        95.1406289
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        92.476754
      ]
    ],
    "profile": {
      "overview": "Agnel Charities' Fr. C. Rodrigues Institute of Technology, Vashi, Navi Mumbai is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 03197. Status: Un-Aided Autonomous. University/affiliation recorded in the CET directory: Mumbai University.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Navi Mumbai, Navi Mumbai, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Un-Aided Autonomous.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03197",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03197"
      ]
    }
  },
  {
    "id": "03198",
    "name": "Konkan Gyanpeeth College of Engineering, Karjat",
    "shortName": "KGCE Karjat",
    "city": "Karjat",
    "region": "Mumbai",
    "district": "Raigad",
    "status": "Un-Aided",
    "university": "Mumbai University",
    "branches": [
      "Computer Science and Engineering",
      "Computer Engineering",
      "Information Technology",
      "Mechanical Engineering",
      "AI & Data Science"
    ],
    "cutoffs": [
      [
        "Computer Science and Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        77.2143105
      ],
      [
        "Computer Science and Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        65.4837825
      ],
      [
        "Computer Science and Engineering",
        "NT-A",
        "H",
        null,
        null,
        null,
        54.873582
      ],
      [
        "Computer Science and Engineering",
        "NT-C",
        "H",
        null,
        null,
        null,
        58.3262891
      ],
      [
        "Computer Science and Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        75.110975
      ],
      [
        "Computer Science and Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        65.4837825
      ],
      [
        "Computer Science and Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        81.2365306
      ],
      [
        "Computer Science and Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        77.9049638
      ],
      [
        "Computer Science and Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        79.0264353
      ],
      [
        "Computer Science and Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        63.9397326
      ],
      [
        "Computer Science and Engineering",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        43.2064159
      ],
      [
        "Computer Science and Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        35.5990164
      ],
      [
        "Computer Science and Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        77.2143105
      ],
      [
        "Computer Science and Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        75.110975
      ],
      [
        "Computer Science and Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        72.3251186
      ],
      [
        "Computer Science and Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        69.8131691
      ],
      [
        "Computer Science and Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        89.9742931
      ],
      [
        "Computer Science and Engineering",
        "ST-Ladies",
        "O",
        null,
        null,
        null,
        47.0872596
      ],
      [
        "Computer Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        78.733317
      ],
      [
        "Computer Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        72.6740126
      ],
      [
        "Computer Engineering",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        27.0109031
      ],
      [
        "Computer Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        45.4941917
      ],
      [
        "Computer Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        76.5995199
      ],
      [
        "Computer Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        68.6031011
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        83.4527296
      ],
      [
        "Computer Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        75.9291421
      ],
      [
        "Computer Engineering",
        "NT-A-Ladies",
        "H",
        null,
        null,
        null,
        66.0549811
      ],
      [
        "Computer Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        78.8983322
      ],
      [
        "Computer Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        73.2908824
      ],
      [
        "Computer Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        72.4223602
      ],
      [
        "Computer Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        56.5505021
      ],
      [
        "Computer Engineering",
        "NT-B",
        "O",
        null,
        null,
        null,
        27.0109031
      ],
      [
        "Computer Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        62.8284912
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        81.2524249
      ],
      [
        "Computer Engineering",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        36.6388387
      ],
      [
        "Computer Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        8.3041898
      ],
      [
        "Computer Engineering",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        70.733113
      ],
      [
        "Computer Engineering",
        "NT-C",
        "O",
        null,
        null,
        null,
        73.9021728
      ],
      [
        "Computer Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        29.4122187
      ],
      [
        "Information Technology",
        "OPEN",
        "H",
        null,
        null,
        null,
        74.8210845
      ],
      [
        "Information Technology",
        "SC",
        "H",
        null,
        null,
        null,
        60.010721
      ],
      [
        "Information Technology",
        "OBC",
        "H",
        null,
        null,
        null,
        73.262321
      ],
      [
        "Information Technology",
        "SEBC",
        "H",
        null,
        null,
        null,
        65.9070599
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        76.5235824
      ],
      [
        "Information Technology",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        61.9042106
      ],
      [
        "Information Technology",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        76.5032413
      ],
      [
        "Information Technology",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        31.7722006
      ],
      [
        "Information Technology",
        "OPEN",
        "O",
        null,
        null,
        null,
        46.3536656
      ],
      [
        "Information Technology",
        "SC",
        "O",
        null,
        null,
        null,
        43.2614932
      ],
      [
        "Information Technology",
        "OBC",
        "O",
        null,
        null,
        null,
        37.8097183
      ],
      [
        "Information Technology",
        "VJ/DT",
        "O",
        null,
        null,
        null,
        51.2488599
      ],
      [
        "Information Technology",
        "NT-A",
        "O",
        null,
        null,
        null,
        44.6087422
      ],
      [
        "Information Technology",
        "SEBC",
        "O",
        null,
        null,
        null,
        66.4794206
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        77.022977
      ],
      [
        "Information Technology",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        73.5651108
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        59.7703364
      ],
      [
        "Mechanical Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        30.647462
      ],
      [
        "Mechanical Engineering",
        "NT-A",
        "H",
        null,
        null,
        null,
        40.1861311
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        49.4593034
      ],
      [
        "Mechanical Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        51.7178644
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        52.1496391
      ],
      [
        "Mechanical Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        9.0115153
      ],
      [
        "Mechanical Engineering",
        "NT-C-Ladies",
        "H",
        null,
        null,
        null,
        45.9819894
      ],
      [
        "Mechanical Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        52.1191375
      ],
      [
        "Mechanical Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        19.0169976
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        40.1861311
      ],
      [
        "Mechanical Engineering",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        22.0653604
      ],
      [
        "Mechanical Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        54.7674174
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        47.7548586
      ],
      [
        "Mechanical Engineering",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        29.612695
      ],
      [
        "AI & Data Science",
        "OPEN",
        "H",
        null,
        null,
        null,
        81.9314642
      ],
      [
        "AI & Data Science",
        "SC",
        "H",
        null,
        null,
        null,
        62.9339383
      ],
      [
        "AI & Data Science",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        59.8130199
      ],
      [
        "AI & Data Science",
        "NT-A",
        "H",
        null,
        null,
        null,
        51.4221759
      ],
      [
        "AI & Data Science",
        "NT-B",
        "H",
        null,
        null,
        null,
        38.9526061
      ],
      [
        "AI & Data Science",
        "NT-C",
        "H",
        null,
        null,
        null,
        70.4215645
      ],
      [
        "AI & Data Science",
        "OBC",
        "H",
        null,
        null,
        null,
        73.2109713
      ],
      [
        "AI & Data Science",
        "SEBC",
        "H",
        null,
        null,
        null,
        76.3384255
      ],
      [
        "AI & Data Science",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        83.1707575
      ],
      [
        "AI & Data Science",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        82.6245527
      ],
      [
        "AI & Data Science",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        78.9025471
      ],
      [
        "AI & Data Science",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        80.2298047
      ],
      [
        "AI & Data Science",
        "OPEN",
        "O",
        null,
        null,
        null,
        73.0237189
      ],
      [
        "AI & Data Science",
        "SC",
        "O",
        null,
        null,
        null,
        53.1039032
      ],
      [
        "AI & Data Science",
        "OBC",
        "O",
        null,
        null,
        null,
        60.7556304
      ],
      [
        "AI & Data Science",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        59.950946
      ],
      [
        "AI & Data Science",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        57.9680585
      ],
      [
        "AI & Data Science",
        "SEBC",
        "O",
        null,
        null,
        null,
        75.1493199
      ]
    ],
    "profile": {
      "overview": "Konkan Gyanpeeth College of Engineering, Karjat is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 03198. Status: Un-Aided. University/affiliation recorded in the CET directory: Mumbai University.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Karjat, Raigad, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Un-Aided.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03198",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03198"
      ]
    }
  },
  {
    "id": "03199",
    "name": "Dwarkadas J. Sanghvi College of Engineering, Vile Parle, Mumbai",
    "shortName": "DJ Sanghvi Mumbai",
    "city": "Mumbai",
    "region": "Mumbai",
    "district": "Mumbai",
    "status": "Un-Aided Autonomous",
    "university": "Autonomous Institute",
    "branches": [
      "Computer Engineering",
      "Information Technology",
      "Artificial Intelligence (AI) and Data Science",
      "Electronics and Telecommunication Engg",
      "Mechanical Engineering",
      "Computer Science and Engineering (Data Science)",
      "Computer Science and Engineering (Internet of Things and Cyber Security Including Block Chain",
      "Artificial Intelligence and Machine Learning"
    ],
    "cutoffs": [
      [
        "Computer Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        99.6064496
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        99.4983512
      ],
      [
        "Information Technology",
        "OPEN",
        "State",
        null,
        null,
        null,
        99.3974848
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        99.23538
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "OPEN",
        "State",
        null,
        null,
        null,
        99.398859
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        99.1415633
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "State",
        null,
        null,
        null,
        99.1459959
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        98.7035739
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        98.5565976
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        97.9731032
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "OPEN",
        "State",
        null,
        null,
        null,
        99.312573
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        99.2007992
      ],
      [
        "Computer Science and Engineering (Internet of Things and Cyber Security Including Block Chain",
        "OPEN",
        "State",
        null,
        null,
        null,
        99.2765642
      ],
      [
        "Computer Science and Engineering (Internet of Things and Cyber Security Including Block Chain",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        98.991977
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "OPEN",
        "State",
        null,
        null,
        null,
        99.2799835
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        99.1054515
      ]
    ],
    "profile": {
      "overview": "Dwarkadas J. Sanghvi College of Engineering, Vile Parle, Mumbai is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 03199. Status: Un-Aided Autonomous. University/affiliation recorded in the CET directory: Autonomous Institute.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Mumbai, Mumbai, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Un-Aided Autonomous.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03199",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03199"
      ]
    }
  },
  {
    "id": "03201",
    "name": "Rizvi College of Engineering, Bandra, Mumbai",
    "shortName": "Rizvi COE Mumbai",
    "city": "Mumbai",
    "region": "Mumbai",
    "district": "Mumbai",
    "status": "Un-Aided",
    "university": "Mumbai University",
    "branches": [
      "Civil Engineering",
      "Computer Engineering",
      "Mechanical Engineering",
      "Electronics and Computer Science",
      "AI & Data Science"
    ],
    "cutoffs": [
      [
        "Civil Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        85.1996728
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        71.4377156
      ],
      [
        "Civil Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        77.022977
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        78.8983322
      ],
      [
        "Computer Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        92.8258661
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        91.2083671
      ],
      [
        "Computer Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        87.4032298
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        87.609626
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        88.1968791
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        76.099588
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        81.6705255
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        73.262321
      ],
      [
        "Electronics and Computer Science",
        "OPEN",
        "H",
        null,
        null,
        null,
        88.8686273
      ],
      [
        "Electronics and Computer Science",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        89.451403
      ],
      [
        "Electronics and Computer Science",
        "OPEN",
        "O",
        null,
        null,
        null,
        83.8560469
      ],
      [
        "Electronics and Computer Science",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        92.8132001
      ],
      [
        "AI & Data Science",
        "OPEN",
        "H",
        null,
        null,
        null,
        92.2148897
      ],
      [
        "AI & Data Science",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        90.4743555
      ],
      [
        "AI & Data Science",
        "OPEN",
        "O",
        null,
        null,
        null,
        89.2375447
      ],
      [
        "AI & Data Science",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        91.7858261
      ]
    ],
    "profile": {
      "overview": "Rizvi College of Engineering, Bandra, Mumbai is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 03201. Status: Un-Aided. University/affiliation recorded in the CET directory: Mumbai University.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Mumbai, Mumbai, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Un-Aided.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03201",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03201"
      ]
    }
  },
  {
    "id": "03203",
    "name": "Atharva College of Engineering, Malad West, Mumbai",
    "shortName": "Atharva COE Mumbai",
    "city": "Mumbai",
    "region": "Mumbai",
    "district": "Mumbai",
    "status": "Un-Aided Autonomous",
    "university": "Mumbai University",
    "branches": [
      "Computer Engineering",
      "Information Technology",
      "Electrical Engineering",
      "Electronics and Telecommunication Engg",
      "Electronics and Computer Science"
    ],
    "cutoffs": [
      [
        "Computer Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        94.8480746
      ],
      [
        "Computer Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        91.0694792
      ],
      [
        "Computer Engineering",
        "ST",
        "H",
        null,
        null,
        null,
        81.8599034
      ],
      [
        "Computer Engineering",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        88.5427828
      ],
      [
        "Computer Engineering",
        "NT-A",
        "H",
        null,
        null,
        null,
        88.6855305
      ],
      [
        "Computer Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        88.0941637
      ],
      [
        "Computer Engineering",
        "NT-C",
        "H",
        null,
        null,
        null,
        90.966814
      ],
      [
        "Computer Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        93.887286
      ],
      [
        "Computer Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        92.0078173
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        94.5936573
      ],
      [
        "Computer Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        90.8237951
      ],
      [
        "Computer Engineering",
        "ST-Ladies",
        "H",
        null,
        null,
        null,
        74.1334872
      ],
      [
        "Computer Engineering",
        "VJ/DT-Ladies",
        "H",
        null,
        null,
        null,
        91.7854984
      ],
      [
        "Computer Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        92.2402301
      ],
      [
        "Computer Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        8.1769489
      ],
      [
        "Computer Engineering",
        "PWDOPEN",
        "H",
        null,
        null,
        null,
        76.3286018
      ],
      [
        "Computer Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        93.611957
      ],
      [
        "Computer Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        87.1731352
      ],
      [
        "Computer Engineering",
        "ST",
        "O",
        null,
        null,
        null,
        48.8664194
      ],
      [
        "Computer Engineering",
        "NT-B",
        "O",
        null,
        null,
        null,
        92.6318737
      ],
      [
        "Computer Engineering",
        "NT-C",
        "O",
        null,
        null,
        null,
        93.4464908
      ],
      [
        "Computer Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        93.0779848
      ],
      [
        "Computer Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        93.4464908
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        91.794056
      ],
      [
        "Computer Engineering",
        "ST-Ladies",
        "O",
        null,
        null,
        null,
        31.4943887
      ],
      [
        "Computer Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        91.7854984
      ],
      [
        "Computer Engineering",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        91.512485
      ],
      [
        "Computer Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        84.4137833
      ],
      [
        "Information Technology",
        "OPEN",
        "H",
        null,
        null,
        null,
        93.7153061
      ],
      [
        "Information Technology",
        "SC",
        "H",
        null,
        null,
        null,
        90.0843448
      ],
      [
        "Information Technology",
        "ST",
        "H",
        null,
        null,
        null,
        72.3814647
      ],
      [
        "Information Technology",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        86.713982
      ],
      [
        "Information Technology",
        "NT-B",
        "H",
        null,
        null,
        null,
        89.1809567
      ],
      [
        "Information Technology",
        "OBC",
        "H",
        null,
        null,
        null,
        92.6165904
      ],
      [
        "Information Technology",
        "SEBC",
        "H",
        null,
        null,
        null,
        89.6934787
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        93.0647215
      ],
      [
        "Information Technology",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        89.8845123
      ],
      [
        "Information Technology",
        "ST-Ladies",
        "H",
        null,
        null,
        null,
        87.7359574
      ],
      [
        "Information Technology",
        "VJ/DT-Ladies",
        "H",
        null,
        null,
        null,
        81.0159708
      ],
      [
        "Information Technology",
        "NT-A-Ladies",
        "H",
        null,
        null,
        null,
        87.8605935
      ],
      [
        "Information Technology",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        86.713982
      ],
      [
        "Information Technology",
        "NT-C-Ladies",
        "H",
        null,
        null,
        null,
        91.6438644
      ],
      [
        "Information Technology",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        90.0963693
      ],
      [
        "Information Technology",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        57.0070614
      ],
      [
        "Information Technology",
        "OPEN",
        "O",
        null,
        null,
        null,
        91.9103015
      ],
      [
        "Information Technology",
        "SC",
        "O",
        null,
        null,
        null,
        86.8832732
      ],
      [
        "Information Technology",
        "ST",
        "O",
        null,
        null,
        null,
        40.4162412
      ],
      [
        "Information Technology",
        "VJ/DT",
        "O",
        null,
        null,
        null,
        90.1398917
      ],
      [
        "Information Technology",
        "OBC",
        "O",
        null,
        null,
        null,
        90.9657321
      ],
      [
        "Information Technology",
        "SEBC",
        "O",
        null,
        null,
        null,
        88.4177906
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        91.3672693
      ],
      [
        "Information Technology",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        85.65358
      ],
      [
        "Information Technology",
        "NT-A-Ladies",
        "O",
        null,
        null,
        null,
        83.9283276
      ],
      [
        "Information Technology",
        "NT-B-Ladies",
        "O",
        null,
        null,
        null,
        88.2583444
      ],
      [
        "Information Technology",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        87.6160033
      ],
      [
        "Information Technology",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        83.7431799
      ],
      [
        "Electrical Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        89.9742931
      ],
      [
        "Electrical Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        84.207639
      ],
      [
        "Electrical Engineering",
        "ST",
        "H",
        null,
        null,
        null,
        32.8661478
      ],
      [
        "Electrical Engineering",
        "NT-A",
        "H",
        null,
        null,
        null,
        68.0484125
      ],
      [
        "Electrical Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        71.4377156
      ],
      [
        "Electrical Engineering",
        "NT-C",
        "H",
        null,
        null,
        null,
        88.1535836
      ],
      [
        "Electrical Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        85.225256
      ],
      [
        "Electrical Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        76.3324995
      ],
      [
        "Electrical Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        89.1809567
      ],
      [
        "Electrical Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        76.3172626
      ],
      [
        "Electrical Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        74.7351841
      ],
      [
        "Electrical Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        71.2894525
      ],
      [
        "Electrical Engineering",
        "PWDOPEN",
        "H",
        null,
        null,
        null,
        18.0880939
      ],
      [
        "Electrical Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        88.2758357
      ],
      [
        "Electrical Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        79.7671884
      ],
      [
        "Electrical Engineering",
        "VJ/DT",
        "O",
        null,
        null,
        null,
        60.7556304
      ],
      [
        "Electrical Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        87.0343086
      ],
      [
        "Electrical Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        81.5923479
      ],
      [
        "Electrical Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        89.7903443
      ],
      [
        "Electrical Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        87.609626
      ],
      [
        "Electrical Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        63.552865
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "H",
        null,
        null,
        null,
        91.1518015
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC",
        "H",
        null,
        null,
        null,
        84.5857013
      ],
      [
        "Electronics and Telecommunication Engg",
        "ST",
        "H",
        null,
        null,
        null,
        40.4681495
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        47.4563898
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-A",
        "H",
        null,
        null,
        null,
        84.5795651
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B",
        "H",
        null,
        null,
        null,
        82.7777778
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-C",
        "H",
        null,
        null,
        null,
        89.5432094
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC",
        "H",
        null,
        null,
        null,
        88.4177906
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC",
        "H",
        null,
        null,
        null,
        79.4793202
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        90.1398917
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        85.3230758
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        80.7883659
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        85.3230758
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        86.560206
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "O",
        null,
        null,
        null,
        88.5637068
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC",
        "O",
        null,
        null,
        null,
        83.7045586
      ],
      [
        "Electronics and Telecommunication Engg",
        "ST",
        "O",
        null,
        null,
        null,
        13.0294287
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-A",
        "O",
        null,
        null,
        null,
        88.4177906
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B",
        "O",
        null,
        null,
        null,
        86.8334686
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-C",
        "O",
        null,
        null,
        null,
        80.4716144
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC",
        "O",
        null,
        null,
        null,
        87.6160033
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC",
        "O",
        null,
        null,
        null,
        87.8605935
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        90.5209194
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        84.207639
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        88.4219058
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        85.4732337
      ],
      [
        "Electronics and Telecommunication Engg",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        80.4944215
      ],
      [
        "Electronics and Computer Science",
        "OPEN",
        "H",
        null,
        null,
        null,
        91.5582428
      ],
      [
        "Electronics and Computer Science",
        "SC",
        "H",
        null,
        null,
        null,
        88.1535836
      ],
      [
        "Electronics and Computer Science",
        "NT-B",
        "H",
        null,
        null,
        null,
        79.4663048
      ],
      [
        "Electronics and Computer Science",
        "OBC",
        "H",
        null,
        null,
        null,
        89.5272602
      ],
      [
        "Electronics and Computer Science",
        "SEBC",
        "H",
        null,
        null,
        null,
        84.3808448
      ],
      [
        "Electronics and Computer Science",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        90.8447181
      ],
      [
        "Electronics and Computer Science",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        82.9708753
      ],
      [
        "Electronics and Computer Science",
        "NT-A-Ladies",
        "H",
        null,
        null,
        null,
        78.0816199
      ],
      [
        "Electronics and Computer Science",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        90.1262916
      ],
      [
        "Electronics and Computer Science",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        85.1182895
      ],
      [
        "Electronics and Computer Science",
        "OPEN",
        "O",
        null,
        null,
        null,
        89.6590708
      ],
      [
        "Electronics and Computer Science",
        "SC",
        "O",
        null,
        null,
        null,
        85.0307561
      ],
      [
        "Electronics and Computer Science",
        "OBC",
        "O",
        null,
        null,
        null,
        89.1450013
      ],
      [
        "Electronics and Computer Science",
        "SEBC",
        "O",
        null,
        null,
        null,
        86.5748101
      ],
      [
        "Electronics and Computer Science",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        89.2457163
      ],
      [
        "Electronics and Computer Science",
        "VJ/DT-Ladies",
        "O",
        null,
        null,
        null,
        61.8012422
      ],
      [
        "Electronics and Computer Science",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        89.0027605
      ],
      [
        "Electronics and Computer Science",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        82.4999118
      ]
    ],
    "profile": {
      "overview": "Atharva College of Engineering, Malad West, Mumbai is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 03203. Status: Un-Aided Autonomous. University/affiliation recorded in the CET directory: Mumbai University.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Mumbai, Mumbai, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Un-Aided Autonomous.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03203",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03203"
      ]
    }
  },
  {
    "id": "03204",
    "name": "St. Francis Institute of Technology, Borivali, Mumbai",
    "shortName": "SFIT Mumbai",
    "city": "Mumbai",
    "region": "Mumbai",
    "district": "Mumbai",
    "status": "Un-Aided Autonomous",
    "university": "Mumbai University",
    "branches": [
      "Computer Engineering",
      "Information Technology",
      "Electrical Engineering",
      "Electronics and Telecommunication Engg",
      "Mechanical Engineering",
      "Electronics and Computer Science",
      "Artificial Intelligence and Machine Learning"
    ],
    "cutoffs": [
      [
        "Computer Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        96.0092361
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        95.1979522
      ],
      [
        "Information Technology",
        "OPEN",
        "State",
        null,
        null,
        null,
        95.1347459
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        94.6694641
      ],
      [
        "Electrical Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        91.0694792
      ],
      [
        "Electrical Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        88.986683
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "State",
        null,
        null,
        null,
        92.9781315
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        93.1708179
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        92.3369677
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        90.1398917
      ],
      [
        "Electronics and Computer Science",
        "OPEN",
        "State",
        null,
        null,
        null,
        94.7041159
      ],
      [
        "Electronics and Computer Science",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        93.7153061
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "OPEN",
        "State",
        null,
        null,
        null,
        95.2778203
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        95.0784112
      ]
    ],
    "profile": {
      "overview": "St. Francis Institute of Technology, Borivali, Mumbai is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 03204. Status: Un-Aided Autonomous. University/affiliation recorded in the CET directory: Mumbai University.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Mumbai, Mumbai, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Un-Aided Autonomous.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03204",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03204"
      ]
    }
  },
  {
    "id": "03208",
    "name": "Don Bosco Institute of Technology, Mumbai",
    "shortName": "DBIT Mumbai",
    "city": "Mumbai",
    "region": "Mumbai",
    "district": "Mumbai",
    "status": "Un-Aided Autonomous",
    "university": "Mumbai University",
    "branches": [
      "Computer Engineering",
      "Information Technology",
      "Electronics and Telecommunication Engg",
      "Mechanical Engineering"
    ],
    "cutoffs": [
      [
        "Computer Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        95.4948805
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        95.1990767
      ],
      [
        "Information Technology",
        "OPEN",
        "State",
        null,
        null,
        null,
        95.0750038
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        94.9146711
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "State",
        null,
        null,
        null,
        94.3470195
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        93.9889579
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        93.442623
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        89.5272602
      ]
    ],
    "profile": {
      "overview": "Don Bosco Institute of Technology, Mumbai is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 03208. Status: Un-Aided Autonomous. University/affiliation recorded in the CET directory: Mumbai University.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Mumbai, Mumbai, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Un-Aided Autonomous.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03208",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03208"
      ]
    }
  },
  {
    "id": "03209",
    "name": "K J Somaiya Institute of Technology",
    "shortName": "KJSIT Mumbai",
    "city": "Mumbai",
    "region": "Mumbai",
    "district": "Mumbai",
    "status": "Un-Aided Autonomous",
    "university": "Mumbai University",
    "branches": [],
    "cutoffs": [],
    "profile": {
      "overview": "K J Somaiya Institute of Technology is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 03209. Status: Un-Aided Autonomous. University/affiliation recorded in the CET directory: Mumbai University.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Mumbai, Mumbai, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Un-Aided Autonomous.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03209",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03209"
      ]
    }
  },
  {
    "id": "03211",
    "name": "S.I.E.S. Graduate School of Technology, Nerul, Navi Mumbai",
    "shortName": "SIES GST Navi Mumbai",
    "city": "Navi Mumbai",
    "region": "Mumbai",
    "district": "Thane",
    "status": "Un-Aided Autonomous",
    "university": "Mumbai University",
    "branches": [
      "Computer Engineering",
      "Information Technology",
      "Artificial Intelligence (AI) and Data Science",
      "Electronics and Telecommunication Engg",
      "Electronics and Computer Science",
      "Computer Science and Engineering (Internet of Things and Cyber Security Including Block Chain",
      "Artificial Intelligence and Machine Learning"
    ],
    "cutoffs": [
      [
        "Computer Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        96.3174061
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        96.3161343
      ],
      [
        "Information Technology",
        "OPEN",
        "State",
        null,
        null,
        null,
        95.4161223
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        95.7888266
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "OPEN",
        "State",
        null,
        null,
        null,
        95.2312139
      ],
      [
        "Artificial Intelligence (AI) and Data Science",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        95.1990767
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "State",
        null,
        null,
        null,
        94.5768123
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        93.9909165
      ],
      [
        "Electronics and Computer Science",
        "OPEN",
        "State",
        null,
        null,
        null,
        94.5878726
      ],
      [
        "Electronics and Computer Science",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        94.5074586
      ],
      [
        "Computer Science and Engineering (Internet of Things and Cyber Security Including Block Chain",
        "OPEN",
        "State",
        null,
        null,
        null,
        95.0068259
      ],
      [
        "Computer Science and Engineering (Internet of Things and Cyber Security Including Block Chain",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        95.1347459
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "OPEN",
        "State",
        null,
        null,
        null,
        95.4882902
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        96.2623043
      ]
    ],
    "profile": {
      "overview": "S.I.E.S. Graduate School of Technology, Nerul, Navi Mumbai is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 03211. Status: Un-Aided Autonomous. University/affiliation recorded in the CET directory: Mumbai University.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Navi Mumbai, Thane, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Un-Aided Autonomous.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03211",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03211"
      ]
    }
  },
  {
    "id": "03215",
    "name": "Bhartiya Vidya Bhavan's Sardar Patel Institute of Technology, Andheri, Mumbai",
    "shortName": "SPIT Mumbai",
    "city": "Mumbai",
    "region": "Mumbai",
    "district": "Mumbai",
    "status": "Un-Aided Autonomous",
    "university": "Mumbai University",
    "branches": [
      "Computer Science and Engineering",
      "Computer Engineering",
      "Electronics and Telecommunication Engg"
    ],
    "cutoffs": [
      [
        "Computer Science and Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        99.8803597
      ],
      [
        "Computer Science and Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        98.6962457
      ],
      [
        "Computer Science and Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        93.9909165
      ],
      [
        "Computer Science and Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        99.3729563
      ],
      [
        "Computer Science and Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        99.4434527
      ],
      [
        "Computer Science and Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        99.3515358
      ],
      [
        "Computer Science and Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        99.8253173
      ],
      [
        "Computer Science and Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        99.7188507
      ],
      [
        "Computer Science and Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        99.6443286
      ],
      [
        "Computer Science and Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        99.8653069
      ],
      [
        "Computer Science and Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        97.4288016
      ],
      [
        "Computer Science and Engineering",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        94.3470195
      ],
      [
        "Computer Science and Engineering",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        98.4399761
      ],
      [
        "Computer Science and Engineering",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        99.09598
      ],
      [
        "Computer Science and Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        99.6046463
      ],
      [
        "Computer Science and Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        99.4224681
      ],
      [
        "Computer Science and Engineering",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        95.5976137
      ],
      [
        "Computer Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        99.8327645
      ],
      [
        "Computer Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        98.3819921
      ],
      [
        "Computer Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        90.9657321
      ],
      [
        "Computer Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        98.8923623
      ],
      [
        "Computer Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        99.22161
      ],
      [
        "Computer Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        99.1774657
      ],
      [
        "Computer Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        99.4582733
      ],
      [
        "Computer Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        99.6091136
      ],
      [
        "Computer Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        99.5302977
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        99.7268706
      ],
      [
        "Computer Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        96.9750684
      ],
      [
        "Computer Engineering",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        90.112628
      ],
      [
        "Computer Engineering",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        97.305038
      ],
      [
        "Computer Engineering",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        98.644561
      ],
      [
        "Computer Engineering",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        97.7312329
      ],
      [
        "Computer Engineering",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        98.6108985
      ],
      [
        "Computer Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        99.4145109
      ],
      [
        "Computer Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        99.2014366
      ],
      [
        "Computer Engineering",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        90.0621118
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "State",
        null,
        null,
        null,
        99.6682782
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC",
        "State",
        null,
        null,
        null,
        97.5556558
      ],
      [
        "Electronics and Telecommunication Engg",
        "ST",
        "State",
        null,
        null,
        null,
        89.621821
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        97.9611464
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-A",
        "State",
        null,
        null,
        null,
        98.7089833
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B",
        "State",
        null,
        null,
        null,
        98.9795918
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-C",
        "State",
        null,
        null,
        null,
        99.3554861
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC",
        "State",
        null,
        null,
        null,
        99.4239868
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC",
        "State",
        null,
        null,
        null,
        99.1107033
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        99.4224681
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        96.4352588
      ],
      [
        "Electronics and Telecommunication Engg",
        "ST-Ladies",
        "State",
        null,
        null,
        null,
        89.2347783
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        96.8875086
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        98.0447413
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        97.6121663
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        98.3966019
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        98.9760049
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        99.0273038
      ],
      [
        "Electronics and Telecommunication Engg",
        "PWDOPEN",
        "State",
        null,
        null,
        null,
        86.8334686
      ]
    ],
    "profile": {
      "overview": "Bhartiya Vidya Bhavan's Sardar Patel Institute of Technology, Andheri, Mumbai is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 03215. Status: Un-Aided Autonomous. University/affiliation recorded in the CET directory: Mumbai University.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Mumbai, Mumbai, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Un-Aided Autonomous.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03215",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03215"
      ]
    }
  },
  {
    "id": "03218",
    "name": "St. John College of Engineering & Management, Palghar",
    "shortName": "St John COE Palghar",
    "city": "Palghar",
    "region": "Mumbai",
    "district": "Palghar",
    "status": "Un-Aided",
    "university": "Mumbai University",
    "branches": [
      "Civil Engineering",
      "Computer Engineering",
      "Information Technology",
      "Mechanical Engineering",
      "Electronics and Computer Science",
      "Computer Science and Engineering (Data Science)",
      "Artificial Intelligence and Machine Learning"
    ],
    "cutoffs": [
      [
        "Civil Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        60.9758938
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        61.2510322
      ],
      [
        "Computer Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        82.9428736
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        82.190886
      ],
      [
        "Information Technology",
        "OPEN",
        "State",
        null,
        null,
        null,
        80.9705409
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        79.0264353
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        72.1871837
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        63.4757967
      ],
      [
        "Electronics and Computer Science",
        "OPEN",
        "State",
        null,
        null,
        null,
        78.3451044
      ],
      [
        "Electronics and Computer Science",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        77.0914416
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "OPEN",
        "State",
        null,
        null,
        null,
        82.0388536
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        79.9422744
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "OPEN",
        "State",
        null,
        null,
        null,
        79.5076004
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        79.3692556
      ]
    ],
    "profile": {
      "overview": "St. John College of Engineering & Management, Palghar is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 03218. Status: Un-Aided. University/affiliation recorded in the CET directory: Mumbai University.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Palghar, Palghar, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Un-Aided.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03218",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03218"
      ]
    }
  },
  {
    "id": "03221",
    "name": "VIVA Institute of Technology, Virar",
    "shortName": "VIVA Institute Virar",
    "city": "Virar",
    "region": "Mumbai",
    "district": "Palghar",
    "status": "Un-Aided",
    "university": "Mumbai University",
    "branches": [
      "Civil Engineering",
      "Computer Engineering",
      "Electronics and Telecommunication Engg",
      "Mechanical Engineering",
      "Computer Science and Engineering (AI & ML)",
      "Electrical and Computer Engineering"
    ],
    "cutoffs": [
      [
        "Civil Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        66.0625569
      ],
      [
        "Civil Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        20.9880869
      ],
      [
        "Civil Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        59.0801845
      ],
      [
        "Civil Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        16.7388465
      ],
      [
        "Civil Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        41.5554243
      ],
      [
        "Civil Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        57.0070614
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        57.8685189
      ],
      [
        "Civil Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        43.6823105
      ],
      [
        "Civil Engineering",
        "VJ/DT-Ladies",
        "State",
        null,
        null,
        null,
        15.6857493
      ],
      [
        "Civil Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        48.401775
      ],
      [
        "Computer Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        84.2510483
      ],
      [
        "Computer Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        76.4503291
      ],
      [
        "Computer Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        12.7454023
      ],
      [
        "Computer Engineering",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        74.8112584
      ],
      [
        "Computer Engineering",
        "NT-A",
        "State",
        null,
        null,
        null,
        78.975446
      ],
      [
        "Computer Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        78.3451044
      ],
      [
        "Computer Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        79.0728986
      ],
      [
        "Computer Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        79.0728986
      ],
      [
        "Computer Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        64.087617
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        82.6530612
      ],
      [
        "Computer Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        67.9621973
      ],
      [
        "Computer Engineering",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        60.9157012
      ],
      [
        "Computer Engineering",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        48.1265004
      ],
      [
        "Computer Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        79.8369603
      ],
      [
        "Computer Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        65.1614878
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "State",
        null,
        null,
        null,
        75.2331528
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC",
        "State",
        null,
        null,
        null,
        64.5293156
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-A",
        "State",
        null,
        null,
        null,
        52.4918222
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B",
        "State",
        null,
        null,
        null,
        30.191544
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC",
        "State",
        null,
        null,
        null,
        66.1311211
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC",
        "State",
        null,
        null,
        null,
        59.2443064
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        76.7952218
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        45.457039
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        42.4145111
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        25.3041937
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        68.78733
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        44.1521083
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        73.0844718
      ],
      [
        "Mechanical Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        34.1022162
      ],
      [
        "Mechanical Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        58.1150221
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        62.8386652
      ],
      [
        "Mechanical Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        48.1265004
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        57.8274425
      ],
      [
        "Mechanical Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        52.8560653
      ],
      [
        "Mechanical Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        75.4755316
      ],
      [
        "Mechanical Engineering",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        29.1650526
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "OPEN",
        "State",
        null,
        null,
        null,
        77.9589871
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "SC",
        "State",
        null,
        null,
        null,
        64.7164682
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "VJ/DT",
        "State",
        null,
        null,
        null,
        68.6498934
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "NT-A",
        "State",
        null,
        null,
        null,
        56.5580532
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "NT-B",
        "State",
        null,
        null,
        null,
        72.5022286
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "NT-C",
        "State",
        null,
        null,
        null,
        76.5235824
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "OBC",
        "State",
        null,
        null,
        null,
        72.9916849
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "SEBC",
        "State",
        null,
        null,
        null,
        53.8067479
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        76.468112
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        58.1324148
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        75.4489132
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        68.4225402
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "NT-C-Ladies",
        "State",
        null,
        null,
        null,
        70.3402566
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        63.0171253
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "SEBC-Ladies",
        "State",
        null,
        null,
        null,
        84.1149833
      ],
      [
        "Electrical and Computer Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        66.4794206
      ],
      [
        "Electrical and Computer Engineering",
        "SC",
        "State",
        null,
        null,
        null,
        33.9583652
      ],
      [
        "Electrical and Computer Engineering",
        "ST",
        "State",
        null,
        null,
        null,
        25.2895608
      ],
      [
        "Electrical and Computer Engineering",
        "NT-B",
        "State",
        null,
        null,
        null,
        5.5559443
      ],
      [
        "Electrical and Computer Engineering",
        "NT-C",
        "State",
        null,
        null,
        null,
        16.3855337
      ],
      [
        "Electrical and Computer Engineering",
        "OBC",
        "State",
        null,
        null,
        null,
        58.3262891
      ],
      [
        "Electrical and Computer Engineering",
        "SEBC",
        "State",
        null,
        null,
        null,
        33.4150899
      ],
      [
        "Electrical and Computer Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        69.8418157
      ],
      [
        "Electrical and Computer Engineering",
        "SC-Ladies",
        "State",
        null,
        null,
        null,
        35.5990164
      ],
      [
        "Electrical and Computer Engineering",
        "NT-A-Ladies",
        "State",
        null,
        null,
        null,
        26.3181412
      ],
      [
        "Electrical and Computer Engineering",
        "NT-B-Ladies",
        "State",
        null,
        null,
        null,
        44.5569356
      ],
      [
        "Electrical and Computer Engineering",
        "OBC-Ladies",
        "State",
        null,
        null,
        null,
        67.9621973
      ]
    ],
    "profile": {
      "overview": "VIVA Institute of Technology, Virar is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 03221. Status: Un-Aided. University/affiliation recorded in the CET directory: Mumbai University.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Virar, Palghar, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Un-Aided.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03221",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03221"
      ]
    }
  },
  {
    "id": "03223",
    "name": "Pillai HOC College of Engineering & Technology, Khalapur",
    "shortName": "Pillai HOC Khalapur",
    "city": "Khalapur",
    "region": "Mumbai",
    "district": "Raigad",
    "status": "Un-Aided Autonomous",
    "university": "Mumbai University",
    "branches": [
      "Civil Engineering",
      "Computer Engineering",
      "Information Technology",
      "Mechanical Engineering",
      "Electronics and Computer Science",
      "Electrical and Computer Engineering",
      "AI & Data Science"
    ],
    "cutoffs": [
      [
        "Civil Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        76.099588
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        66.0913492
      ],
      [
        "Computer Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        89.4256012
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        89.6590708
      ],
      [
        "Information Technology",
        "OPEN",
        "State",
        null,
        null,
        null,
        85.3230758
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        85.9106165
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        83.2810347
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        66.561551
      ],
      [
        "Electronics and Computer Science",
        "OPEN",
        "State",
        null,
        null,
        null,
        84.4137833
      ],
      [
        "Electronics and Computer Science",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        83.0532651
      ],
      [
        "Electrical and Computer Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        78.890785
      ],
      [
        "Electrical and Computer Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        80.4716144
      ],
      [
        "AI & Data Science",
        "OPEN",
        "State",
        null,
        null,
        null,
        88.0941637
      ],
      [
        "AI & Data Science",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        87.921673
      ]
    ],
    "profile": {
      "overview": "Pillai HOC College of Engineering & Technology, Khalapur is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 03223. Status: Un-Aided Autonomous. University/affiliation recorded in the CET directory: Mumbai University.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Khalapur, Raigad, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Un-Aided Autonomous.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03223",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03223"
      ]
    }
  },
  {
    "id": "03257",
    "name": "Vidya Prasarak Mandal's College of Engineering, Thane",
    "shortName": "VPM COE Thane",
    "city": "Thane",
    "region": "Mumbai",
    "district": "Thane",
    "status": "Un-Aided Autonomous",
    "university": "Mumbai University",
    "branches": [
      "Computer Engineering",
      "Information Technology",
      "Electrical Engineering",
      "Electronics and Telecommunication Engg",
      "Automation and Robotics"
    ],
    "cutoffs": [
      [
        "Computer Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        87.3937627
      ],
      [
        "Computer Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        81.643697
      ],
      [
        "Computer Engineering",
        "ST",
        "H",
        null,
        null,
        null,
        55.319298
      ],
      [
        "Computer Engineering",
        "NT-A",
        "H",
        null,
        null,
        null,
        78.685137
      ],
      [
        "Computer Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        79.4793202
      ],
      [
        "Computer Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        85.8665128
      ],
      [
        "Computer Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        82.5187713
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        87.7305257
      ],
      [
        "Computer Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        82.9708753
      ],
      [
        "Computer Engineering",
        "VJ/DT-Ladies",
        "H",
        null,
        null,
        null,
        26.6925382
      ],
      [
        "Computer Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        86.7003307
      ],
      [
        "Computer Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        81.0334862
      ],
      [
        "Computer Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        80.7035589
      ],
      [
        "Computer Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        75.242318
      ],
      [
        "Computer Engineering",
        "NT-B",
        "O",
        null,
        null,
        null,
        70.3901803
      ],
      [
        "Computer Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        77.8890571
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        78.975446
      ],
      [
        "Computer Engineering",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        61.9042106
      ],
      [
        "Computer Engineering",
        "ST-Ladies",
        "O",
        null,
        null,
        null,
        34.1022162
      ],
      [
        "Computer Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        76.099588
      ],
      [
        "Information Technology",
        "OPEN",
        "H",
        null,
        null,
        null,
        84.5857013
      ],
      [
        "Information Technology",
        "SC",
        "H",
        null,
        null,
        null,
        77.3511663
      ],
      [
        "Information Technology",
        "ST",
        "H",
        null,
        null,
        null,
        57.5392085
      ],
      [
        "Information Technology",
        "NT-A",
        "H",
        null,
        null,
        null,
        67.967082
      ],
      [
        "Information Technology",
        "NT-B",
        "H",
        null,
        null,
        null,
        74.6217331
      ],
      [
        "Information Technology",
        "NT-C",
        "H",
        null,
        null,
        null,
        75.6280193
      ],
      [
        "Information Technology",
        "OBC",
        "H",
        null,
        null,
        null,
        83.8560469
      ],
      [
        "Information Technology",
        "SEBC",
        "H",
        null,
        null,
        null,
        78.975446
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        87.3221306
      ],
      [
        "Information Technology",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        77.741426
      ],
      [
        "Information Technology",
        "ST-Ladies",
        "H",
        null,
        null,
        null,
        38.9526061
      ],
      [
        "Information Technology",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        84.4651484
      ],
      [
        "Information Technology",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        80.1766472
      ],
      [
        "Information Technology",
        "OPEN",
        "O",
        null,
        null,
        null,
        76.7952218
      ],
      [
        "Information Technology",
        "SC",
        "O",
        null,
        null,
        null,
        73.2860799
      ],
      [
        "Information Technology",
        "VJ/DT",
        "O",
        null,
        null,
        null,
        59.3625359
      ],
      [
        "Information Technology",
        "OBC",
        "O",
        null,
        null,
        null,
        75.110975
      ],
      [
        "Information Technology",
        "SEBC",
        "O",
        null,
        null,
        null,
        66.3432235
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        77.540946
      ],
      [
        "Information Technology",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        60.9157012
      ],
      [
        "Information Technology",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        73.2860799
      ],
      [
        "Information Technology",
        "ST",
        "O",
        null,
        null,
        null,
        45.4941917
      ],
      [
        "Electrical Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        75.2153333
      ],
      [
        "Electrical Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        60.1814551
      ],
      [
        "Electrical Engineering",
        "ST",
        "H",
        null,
        null,
        null,
        34.8863278
      ],
      [
        "Electrical Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        66.0625569
      ],
      [
        "Electrical Engineering",
        "NT-C",
        "H",
        null,
        null,
        null,
        70.6987601
      ],
      [
        "Electrical Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        71.2894525
      ],
      [
        "Electrical Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        55.4914407
      ],
      [
        "Electrical Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        77.741426
      ],
      [
        "Electrical Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        53.864934
      ],
      [
        "Electrical Engineering",
        "ST-Ladies",
        "H",
        null,
        null,
        null,
        59.5017065
      ],
      [
        "Electrical Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        68.063194
      ],
      [
        "Electrical Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        66.2459959
      ],
      [
        "Electrical Engineering",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        51.0139791
      ],
      [
        "Electrical Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        71.4377156
      ],
      [
        "Electrical Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        55.4914407
      ],
      [
        "Electrical Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        68.0484125
      ],
      [
        "Electrical Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        34.8005502
      ],
      [
        "Electrical Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        53.1039032
      ],
      [
        "Electrical Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        52.1191375
      ],
      [
        "Electrical Engineering",
        "NT-A",
        "O",
        null,
        null,
        null,
        57.0044084
      ],
      [
        "Electrical Engineering",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        49.4593034
      ],
      [
        "Electrical Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        39.8653069
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "H",
        null,
        null,
        null,
        79.9864621
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC",
        "H",
        null,
        null,
        null,
        74.1899324
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC",
        "H",
        null,
        null,
        null,
        77.9303712
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC",
        "H",
        null,
        null,
        null,
        68.6254044
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        82.1268327
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        67.967082
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT-Ladies",
        "H",
        null,
        null,
        null,
        39.9867632
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-A-Ladies",
        "H",
        null,
        null,
        null,
        62.3077731
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        64.4305882
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        78.975446
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        73.9721817
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "O",
        null,
        null,
        null,
        74.0786749
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC",
        "O",
        null,
        null,
        null,
        69.7621466
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B",
        "O",
        null,
        null,
        null,
        54.4258624
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-C",
        "O",
        null,
        null,
        null,
        53.7903103
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC",
        "O",
        null,
        null,
        null,
        70.0706138
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC",
        "O",
        null,
        null,
        null,
        66.7193141
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        63.8128892
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        59.5499981
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        61.7346759
      ],
      [
        "Automation and Robotics",
        "OPEN",
        "H",
        null,
        null,
        null,
        77.3787188
      ],
      [
        "Automation and Robotics",
        "SC",
        "H",
        null,
        null,
        null,
        69.3105802
      ],
      [
        "Automation and Robotics",
        "NT-A",
        "H",
        null,
        null,
        null,
        40.4162412
      ],
      [
        "Automation and Robotics",
        "NT-B",
        "H",
        null,
        null,
        null,
        58.1924692
      ],
      [
        "Automation and Robotics",
        "OBC",
        "H",
        null,
        null,
        null,
        72.3814647
      ],
      [
        "Automation and Robotics",
        "SEBC",
        "H",
        null,
        null,
        null,
        63.2367632
      ],
      [
        "Automation and Robotics",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        76.2591061
      ],
      [
        "Automation and Robotics",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        71.0421393
      ],
      [
        "Automation and Robotics",
        "NT-C-Ladies",
        "H",
        null,
        null,
        null,
        20.9290709
      ],
      [
        "Automation and Robotics",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        75.406809
      ],
      [
        "Automation and Robotics",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        69.8418157
      ],
      [
        "Automation and Robotics",
        "OPEN",
        "O",
        null,
        null,
        null,
        74.6275026
      ],
      [
        "Automation and Robotics",
        "SC",
        "O",
        null,
        null,
        null,
        61.5912113
      ],
      [
        "Automation and Robotics",
        "OBC",
        "O",
        null,
        null,
        null,
        49.9737275
      ],
      [
        "Automation and Robotics",
        "SEBC",
        "O",
        null,
        null,
        null,
        54.2626684
      ],
      [
        "Automation and Robotics",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        77.6220509
      ],
      [
        "Automation and Robotics",
        "NT-B-Ladies",
        "O",
        null,
        null,
        null,
        23.7839084
      ],
      [
        "Automation and Robotics",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        0.6614274
      ]
    ],
    "profile": {
      "overview": "Vidya Prasarak Mandal's College of Engineering, Thane is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 03257. Status: Un-Aided Autonomous. University/affiliation recorded in the CET directory: Mumbai University.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Thane, Thane, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Un-Aided Autonomous.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03257",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03257"
      ]
    }
  },
  {
    "id": "03475",
    "name": "A. P. Shah Institute of Technology, Thane",
    "shortName": "APSIT Thane",
    "city": "Thane",
    "region": "Mumbai",
    "district": "Thane",
    "status": "Un-Aided Autonomous",
    "university": "Mumbai University",
    "branches": [
      "Civil Engineering",
      "Computer Engineering",
      "Information Technology",
      "Mechanical Engineering",
      "Computer Science and Engineering (AI & ML)",
      "Computer Science and Engineering (Data Science)"
    ],
    "cutoffs": [
      [
        "Civil Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        84.2401501
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        80.7883659
      ],
      [
        "Civil Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        80.5595655
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        78.0816199
      ],
      [
        "Computer Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        92.5129597
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        92.9703046
      ],
      [
        "Computer Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        88.0866426
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        85.6921506
      ],
      [
        "Information Technology",
        "OPEN",
        "H",
        null,
        null,
        null,
        90.1004135
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        89.9552166
      ],
      [
        "Information Technology",
        "OPEN",
        "O",
        null,
        null,
        null,
        84.539834
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        83.1950716
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        88.5540762
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        83.3956241
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        82.5741649
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        81.8599034
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "OPEN",
        "H",
        null,
        null,
        null,
        90.6918865
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        90.5194308
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "OPEN",
        "O",
        null,
        null,
        null,
        86.0457957
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        83.3904312
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "OPEN",
        "H",
        null,
        null,
        null,
        89.9742931
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        90.0830242
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "OPEN",
        "O",
        null,
        null,
        null,
        84.4467601
      ],
      [
        "Computer Science and Engineering (Data Science)",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        83.1461103
      ]
    ],
    "profile": {
      "overview": "A. P. Shah Institute of Technology, Thane is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 03475. Status: Un-Aided Autonomous. University/affiliation recorded in the CET directory: Mumbai University.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Thane, Thane, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Un-Aided Autonomous.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03475",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03475"
      ]
    }
  },
  {
    "id": "03477",
    "name": "Chhatrapati Shivaji Maharaj Institute of Technology, Shedung, Panvel",
    "shortName": "CSMIT Panvel",
    "city": "Panvel",
    "region": "Mumbai",
    "district": "Raigad",
    "status": "Un-Aided",
    "university": "Mumbai University",
    "branches": [
      "Computer Engineering",
      "Data Science",
      "Artificial Intelligence and Machine Learning"
    ],
    "cutoffs": [
      [
        "Computer Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        81.0334862
      ],
      [
        "Computer Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        68.6717464
      ],
      [
        "Computer Engineering",
        "ST",
        "H",
        null,
        null,
        null,
        54.9986599
      ],
      [
        "Computer Engineering",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        66.0956881
      ],
      [
        "Computer Engineering",
        "NT-A",
        "H",
        null,
        null,
        null,
        43.578754
      ],
      [
        "Computer Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        68.4225402
      ],
      [
        "Computer Engineering",
        "NT-C",
        "H",
        null,
        null,
        null,
        61.8012422
      ],
      [
        "Computer Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        77.9049638
      ],
      [
        "Computer Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        76.2591061
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        81.9381769
      ],
      [
        "Computer Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        68.6031011
      ],
      [
        "Computer Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        78.890785
      ],
      [
        "Computer Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        69.7621466
      ],
      [
        "Computer Engineering",
        "NT-C-Ladies",
        "H",
        null,
        null,
        null,
        74.6853954
      ],
      [
        "Computer Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        79.0264353
      ],
      [
        "Computer Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        68.5042436
      ],
      [
        "Computer Engineering",
        "VJ/DT",
        "O",
        null,
        null,
        null,
        73.262321
      ],
      [
        "Computer Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        69.8131691
      ],
      [
        "Computer Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        69.9192754
      ],
      [
        "Computer Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        80.1766472
      ],
      [
        "Computer Engineering",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        68.4225402
      ],
      [
        "Computer Engineering",
        "NT-B-Ladies",
        "O",
        null,
        null,
        null,
        66.7193141
      ],
      [
        "Computer Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        79.3766715
      ],
      [
        "Computer Engineering",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        66.1311211
      ],
      [
        "Computer Engineering",
        "NT-A-Ladies",
        "O",
        null,
        null,
        null,
        67.9203695
      ],
      [
        "Computer Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        47.7548586
      ],
      [
        "Data Science",
        "OPEN",
        "H",
        null,
        null,
        null,
        74.8112584
      ],
      [
        "Data Science",
        "SC",
        "H",
        null,
        null,
        null,
        66.7193141
      ],
      [
        "Data Science",
        "OBC",
        "H",
        null,
        null,
        null,
        69.8131691
      ],
      [
        "Data Science",
        "SEBC",
        "H",
        null,
        null,
        null,
        67.2460619
      ],
      [
        "Data Science",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        76.2668468
      ],
      [
        "Data Science",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        74.4163823
      ],
      [
        "Data Science",
        "NT-A-Ladies",
        "H",
        null,
        null,
        null,
        40.4599724
      ],
      [
        "Data Science",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        60.7738415
      ],
      [
        "Data Science",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        72.8027463
      ],
      [
        "Data Science",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        47.4563898
      ],
      [
        "Data Science",
        "OPEN",
        "O",
        null,
        null,
        null,
        70.4097117
      ],
      [
        "Data Science",
        "SC",
        "O",
        null,
        null,
        null,
        57.0070614
      ],
      [
        "Data Science",
        "NT-B",
        "O",
        null,
        null,
        null,
        32.6058557
      ],
      [
        "Data Science",
        "OBC",
        "O",
        null,
        null,
        null,
        62.3077731
      ],
      [
        "Data Science",
        "SEBC",
        "O",
        null,
        null,
        null,
        23.5746832
      ],
      [
        "Data Science",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        76.973775
      ],
      [
        "Data Science",
        "NT-C-Ladies",
        "O",
        null,
        null,
        null,
        47.7548586
      ],
      [
        "Data Science",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        63.4876968
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "OPEN",
        "H",
        null,
        null,
        null,
        79.0264353
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "SC",
        "H",
        null,
        null,
        null,
        68.6254044
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "NT-A",
        "H",
        null,
        null,
        null,
        76.3172626
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "NT-B",
        "H",
        null,
        null,
        null,
        61.8012422
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "NT-C",
        "H",
        null,
        null,
        null,
        59.8130199
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "OBC",
        "H",
        null,
        null,
        null,
        77.1955616
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "SEBC",
        "H",
        null,
        null,
        null,
        72.5022286
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        80.2313072
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        72.9916849
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "VJ/DT-Ladies",
        "H",
        null,
        null,
        null,
        36.8722261
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        67.1207715
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        75.9291421
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        67.967082
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "PWDOPEN",
        "H",
        null,
        null,
        null,
        60.5843098
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        33.8928203
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "OPEN",
        "O",
        null,
        null,
        null,
        74.2209832
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "SC",
        "O",
        null,
        null,
        null,
        56.92563
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "ST",
        "O",
        null,
        null,
        null,
        43.0034494
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "NT-A",
        "O",
        null,
        null,
        null,
        55.6597249
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "OBC",
        "O",
        null,
        null,
        null,
        64.4305882
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "SEBC",
        "O",
        null,
        null,
        null,
        60.010721
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        67.931377
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        49.1980067
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        64.7164682
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        44.5569356
      ],
      [
        "Artificial Intelligence and Machine Learning",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        13.5260767
      ]
    ],
    "profile": {
      "overview": "Chhatrapati Shivaji Maharaj Institute of Technology, Shedung, Panvel is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 03477. Status: Un-Aided. University/affiliation recorded in the CET directory: Mumbai University.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Panvel, Raigad, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Un-Aided.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03477",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03477"
      ]
    }
  },
  {
    "id": "04004",
    "name": "Government College of Engineering, Chandrapur",
    "shortName": "GCOEC Chandrapur",
    "city": "Chandrapur",
    "region": "Vidarbha",
    "district": "Chandrapur",
    "status": "Government",
    "university": "Gondwana University",
    "branches": [
      "Civil Engineering",
      "Computer Science and Engineering",
      "Electrical Engineering",
      "Electronics and Telecommunication Engg",
      "Instrumentation Engineering",
      "Mechanical Engineering"
    ],
    "cutoffs": [
      [
        "Civil Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        68.2993965
      ],
      [
        "Civil Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        43.6669107
      ],
      [
        "Civil Engineering",
        "ST",
        "H",
        null,
        null,
        null,
        53.1039032
      ],
      [
        "Civil Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        56.92563
      ],
      [
        "Civil Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        60.5539527
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        66.1169676
      ],
      [
        "Civil Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        54.7674174
      ],
      [
        "Civil Engineering",
        "ST-Ladies",
        "H",
        null,
        null,
        null,
        65.1648234
      ],
      [
        "Civil Engineering",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        43.2064159
      ],
      [
        "Civil Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        59.3625359
      ],
      [
        "Civil Engineering",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        78.1913582
      ],
      [
        "Civil Engineering",
        "NT-C",
        "H",
        null,
        null,
        null,
        78.975446
      ],
      [
        "Civil Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        77.1955616
      ],
      [
        "Civil Engineering",
        "VJ/DT-Ladies",
        "H",
        null,
        null,
        null,
        77.6220509
      ],
      [
        "Civil Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        59.5017065
      ],
      [
        "Civil Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        83.9561363
      ],
      [
        "Civil Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        77.540946
      ],
      [
        "Civil Engineering",
        "ST",
        "O",
        null,
        null,
        null,
        66.0625569
      ],
      [
        "Civil Engineering",
        "NT-A",
        "O",
        null,
        null,
        null,
        81.5923479
      ],
      [
        "Civil Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        83.7154638
      ],
      [
        "Civil Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        80.4992916
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        85.1996728
      ],
      [
        "Civil Engineering",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        80.2462012
      ],
      [
        "Civil Engineering",
        "ST-Ladies",
        "O",
        null,
        null,
        null,
        74.2209832
      ],
      [
        "Civil Engineering",
        "NT-B-Ladies",
        "O",
        null,
        null,
        null,
        64.2926156
      ],
      [
        "Civil Engineering",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        35.5420211
      ],
      [
        "Civil Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        74.9893249
      ],
      [
        "Computer Science and Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        87.2379152
      ],
      [
        "Computer Science and Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        80.9705409
      ],
      [
        "Computer Science and Engineering",
        "ST",
        "H",
        null,
        null,
        null,
        78.5981492
      ],
      [
        "Computer Science and Engineering",
        "NT-A",
        "H",
        null,
        null,
        null,
        80.5383458
      ],
      [
        "Computer Science and Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        81.4271094
      ],
      [
        "Computer Science and Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        85.4732337
      ],
      [
        "Computer Science and Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        89.0027605
      ],
      [
        "Computer Science and Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        88.7357048
      ],
      [
        "Computer Science and Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        88.1968791
      ],
      [
        "Computer Science and Engineering",
        "ST-Ladies",
        "H",
        null,
        null,
        null,
        79.4793202
      ],
      [
        "Computer Science and Engineering",
        "NT-A-Ladies",
        "H",
        null,
        null,
        null,
        84.3396689
      ],
      [
        "Computer Science and Engineering",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        72.5022286
      ],
      [
        "Computer Science and Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        87.265016
      ],
      [
        "Computer Science and Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        80.7883659
      ],
      [
        "Computer Science and Engineering",
        "NT-C-Ladies",
        "H",
        null,
        null,
        null,
        81.9314642
      ],
      [
        "Computer Science and Engineering",
        "PWDOPEN",
        "H",
        null,
        null,
        null,
        58.235114
      ],
      [
        "Computer Science and Engineering",
        "PWDROBC",
        "H",
        null,
        null,
        null,
        31.0015898
      ],
      [
        "Computer Science and Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        93.0166968
      ],
      [
        "Computer Science and Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        90.6279863
      ],
      [
        "Computer Science and Engineering",
        "ST",
        "O",
        null,
        null,
        null,
        80.5595655
      ],
      [
        "Computer Science and Engineering",
        "VJ/DT",
        "O",
        null,
        null,
        null,
        92.4965846
      ],
      [
        "Computer Science and Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        92.9781315
      ],
      [
        "Computer Science and Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        92.6293219
      ],
      [
        "Computer Science and Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        94.1399317
      ],
      [
        "Computer Science and Engineering",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        90.4021551
      ],
      [
        "Computer Science and Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        93.9788054
      ],
      [
        "Computer Science and Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        85.1749825
      ],
      [
        "Electrical Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        71.2894525
      ],
      [
        "Electrical Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        66.2459959
      ],
      [
        "Electrical Engineering",
        "ST",
        "H",
        null,
        null,
        null,
        41.7129534
      ],
      [
        "Electrical Engineering",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        55.4743121
      ],
      [
        "Electrical Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        68.6498934
      ],
      [
        "Electrical Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        75.242318
      ],
      [
        "Electrical Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        31.6249855
      ],
      [
        "Electrical Engineering",
        "ST-Ladies",
        "H",
        null,
        null,
        null,
        72.5022286
      ],
      [
        "Electrical Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        69.4641016
      ],
      [
        "Electrical Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        79.8369603
      ],
      [
        "Electrical Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        74.8210845
      ],
      [
        "Electrical Engineering",
        "VJ/DT-Ladies",
        "H",
        null,
        null,
        null,
        67.3167917
      ],
      [
        "Electrical Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        74.8112584
      ],
      [
        "Electrical Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        84.5795651
      ],
      [
        "Electrical Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        81.9381769
      ],
      [
        "Electrical Engineering",
        "NT-B",
        "O",
        null,
        null,
        null,
        81.2365306
      ],
      [
        "Electrical Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        84.539834
      ],
      [
        "Electrical Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        72.0373703
      ],
      [
        "Electrical Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        87.0771468
      ],
      [
        "Electrical Engineering",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        81.0159708
      ],
      [
        "Electrical Engineering",
        "ST-Ladies",
        "O",
        null,
        null,
        null,
        66.5942029
      ],
      [
        "Electrical Engineering",
        "NT-A-Ladies",
        "O",
        null,
        null,
        null,
        77.3511663
      ],
      [
        "Electrical Engineering",
        "NT-C-Ladies",
        "O",
        null,
        null,
        null,
        72.3753397
      ],
      [
        "Electrical Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        84.2510483
      ],
      [
        "Electrical Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        41.153186
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "H",
        null,
        null,
        null,
        78.975446
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC",
        "H",
        null,
        null,
        null,
        76.099588
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        68.9409579
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-A",
        "H",
        null,
        null,
        null,
        71.7544603
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B",
        "H",
        null,
        null,
        null,
        73.0844718
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-C",
        "H",
        null,
        null,
        null,
        34.1022162
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC",
        "H",
        null,
        null,
        null,
        77.8612083
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        78.0816199
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        77.583794
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-A-Ladies",
        "H",
        null,
        null,
        null,
        70.4858678
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        76.3324995
      ],
      [
        "Electronics and Telecommunication Engg",
        "ST",
        "H",
        null,
        null,
        null,
        60.5539527
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC",
        "H",
        null,
        null,
        null,
        85.3469357
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        66.7193141
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "O",
        null,
        null,
        null,
        89.2174843
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC",
        "O",
        null,
        null,
        null,
        81.3089554
      ],
      [
        "Electronics and Telecommunication Engg",
        "ST",
        "O",
        null,
        null,
        null,
        38.2278771
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT",
        "O",
        null,
        null,
        null,
        78.8724264
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B",
        "O",
        null,
        null,
        null,
        81.2524249
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC",
        "O",
        null,
        null,
        null,
        87.5957229
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC",
        "O",
        null,
        null,
        null,
        85.9241674
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        87.5237763
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        72.3814647
      ],
      [
        "Electronics and Telecommunication Engg",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        22.27398
      ],
      [
        "Instrumentation Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        65.2933256
      ],
      [
        "Instrumentation Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        48.8548541
      ],
      [
        "Instrumentation Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        59.8130199
      ],
      [
        "Instrumentation Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        62.9339383
      ],
      [
        "Instrumentation Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        57.8685189
      ],
      [
        "Instrumentation Engineering",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        45.1152324
      ],
      [
        "Instrumentation Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        60.010721
      ],
      [
        "Instrumentation Engineering",
        "ST",
        "H",
        null,
        null,
        null,
        38.6749482
      ],
      [
        "Instrumentation Engineering",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        74.5525612
      ],
      [
        "Instrumentation Engineering",
        "NT-C",
        "H",
        null,
        null,
        null,
        41.6288192
      ],
      [
        "Instrumentation Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        62.6016833
      ],
      [
        "Instrumentation Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        77.937978
      ],
      [
        "Instrumentation Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        76.5995199
      ],
      [
        "Instrumentation Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        75.2331528
      ],
      [
        "Instrumentation Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        79.8369603
      ],
      [
        "Instrumentation Engineering",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        49.1097752
      ],
      [
        "Instrumentation Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        73.3487346
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        74.6853954
      ],
      [
        "Mechanical Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        69.0271267
      ],
      [
        "Mechanical Engineering",
        "ST",
        "H",
        null,
        null,
        null,
        35.5866115
      ],
      [
        "Mechanical Engineering",
        "NT-A",
        "H",
        null,
        null,
        null,
        64.1240022
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        67.500481
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        66.1911263
      ],
      [
        "Mechanical Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        65.1648234
      ],
      [
        "Mechanical Engineering",
        "ST-Ladies",
        "H",
        null,
        null,
        null,
        36.1833289
      ],
      [
        "Mechanical Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        56.6825649
      ],
      [
        "Mechanical Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        76.7952218
      ],
      [
        "Mechanical Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        76.099588
      ],
      [
        "Mechanical Engineering",
        "VJ/DT-Ladies",
        "H",
        null,
        null,
        null,
        63.9535342
      ],
      [
        "Mechanical Engineering",
        "NT-C-Ladies",
        "H",
        null,
        null,
        null,
        64.1499185
      ],
      [
        "Mechanical Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        71.4142775
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        88.1120509
      ],
      [
        "Mechanical Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        77.2289819
      ],
      [
        "Mechanical Engineering",
        "NT-A",
        "O",
        null,
        null,
        null,
        71.1330463
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        85.5419841
      ],
      [
        "Mechanical Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        80.1749582
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        85.9891185
      ],
      [
        "Mechanical Engineering",
        "ST-Ladies",
        "O",
        null,
        null,
        null,
        25.6909658
      ],
      [
        "Mechanical Engineering",
        "VJ/DT-Ladies",
        "O",
        null,
        null,
        null,
        81.0334862
      ],
      [
        "Mechanical Engineering",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        75.6051641
      ]
    ],
    "profile": {
      "overview": "Government College of Engineering, Chandrapur is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 04004. Status: Government. University/affiliation recorded in the CET directory: Gondwana University.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Chandrapur, Chandrapur, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Government.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=04004",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=04004"
      ]
    }
  },
  {
    "id": "04025",
    "name": "Government College of Engineering, Nagpur",
    "shortName": "GCOEN Nagpur",
    "city": "Nagpur",
    "region": "Vidarbha",
    "district": "Nagpur",
    "status": "Government",
    "university": "Autonomous Institute",
    "branches": [
      "Civil Engineering",
      "Computer Science and Engineering",
      "Electrical Engineering",
      "Electronics and Telecommunication Engg",
      "Mechanical Engineering"
    ],
    "cutoffs": [
      [
        "Civil Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        88.5637068
      ],
      [
        "Civil Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        84.0342981
      ],
      [
        "Civil Engineering",
        "ST",
        "H",
        null,
        null,
        null,
        73.6510161
      ],
      [
        "Civil Engineering",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        69.8506426
      ],
      [
        "Civil Engineering",
        "NT-A",
        "H",
        null,
        null,
        null,
        85.2987504
      ],
      [
        "Civil Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        74.6853954
      ],
      [
        "Civil Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        86.9330662
      ],
      [
        "Civil Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        62.4995214
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        88.856074
      ],
      [
        "Civil Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        80.4293972
      ],
      [
        "Civil Engineering",
        "ST-Ladies",
        "H",
        null,
        null,
        null,
        76.3172626
      ],
      [
        "Civil Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        88.245893
      ],
      [
        "Civil Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        37.9825825
      ],
      [
        "Civil Engineering",
        "PWDOPEN",
        "H",
        null,
        null,
        null,
        71.1330463
      ],
      [
        "Civil Engineering",
        "PWDOBC",
        "H",
        null,
        null,
        null,
        27.2730752
      ],
      [
        "Civil Engineering",
        "PWDROBC",
        "H",
        null,
        null,
        null,
        73.2109713
      ],
      [
        "Civil Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        90.4539834
      ],
      [
        "Civil Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        88.1060139
      ],
      [
        "Civil Engineering",
        "ST",
        "O",
        null,
        null,
        null,
        88.070986
      ],
      [
        "Civil Engineering",
        "NT-C",
        "O",
        null,
        null,
        null,
        90.0962861
      ],
      [
        "Civil Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        90.1218002
      ],
      [
        "Civil Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        90.1218002
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        90.3271341
      ],
      [
        "Civil Engineering",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        87.2196787
      ],
      [
        "Civil Engineering",
        "NT-B-Ladies",
        "O",
        null,
        null,
        null,
        80.78157
      ],
      [
        "Civil Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        89.8845123
      ],
      [
        "Civil Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        71.4785529
      ],
      [
        "Computer Science and Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        97.0049392
      ],
      [
        "Computer Science and Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        93.4463876
      ],
      [
        "Computer Science and Engineering",
        "ST",
        "H",
        null,
        null,
        null,
        88.8686273
      ],
      [
        "Computer Science and Engineering",
        "NT-C",
        "H",
        null,
        null,
        null,
        95.7931795
      ],
      [
        "Computer Science and Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        96.4033464
      ],
      [
        "Computer Science and Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        84.4137833
      ],
      [
        "Computer Science and Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        97.1327695
      ],
      [
        "Computer Science and Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        92.8258661
      ],
      [
        "Computer Science and Engineering",
        "NT-A-Ladies",
        "H",
        null,
        null,
        null,
        92.1789653
      ],
      [
        "Computer Science and Engineering",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        87.9627325
      ],
      [
        "Computer Science and Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        96.6937233
      ],
      [
        "Computer Science and Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        85.65358
      ],
      [
        "Computer Science and Engineering",
        "PWDOPEN",
        "H",
        null,
        null,
        null,
        79.5538038
      ],
      [
        "Computer Science and Engineering",
        "PWDOBC",
        "H",
        null,
        null,
        null,
        50.8385093
      ],
      [
        "Computer Science and Engineering",
        "PWDROBC",
        "H",
        null,
        null,
        null,
        52.1058919
      ],
      [
        "Computer Science and Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        97.4167804
      ],
      [
        "Computer Science and Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        94.9572138
      ],
      [
        "Computer Science and Engineering",
        "ST",
        "O",
        null,
        null,
        null,
        88.1060139
      ],
      [
        "Computer Science and Engineering",
        "VJ/DT",
        "O",
        null,
        null,
        null,
        95.126872
      ],
      [
        "Computer Science and Engineering",
        "NT-A",
        "O",
        null,
        null,
        null,
        95.1577916
      ],
      [
        "Computer Science and Engineering",
        "NT-B",
        "O",
        null,
        null,
        null,
        94.2307013
      ],
      [
        "Computer Science and Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        97.1665783
      ],
      [
        "Computer Science and Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        96.0805719
      ],
      [
        "Computer Science and Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        97.7688908
      ],
      [
        "Computer Science and Engineering",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        93.8402527
      ],
      [
        "Computer Science and Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        97.1344765
      ],
      [
        "Computer Science and Engineering",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        94.7789294
      ],
      [
        "Computer Science and Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        90.1218002
      ],
      [
        "Electrical Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        92.3536394
      ],
      [
        "Electrical Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        85.225256
      ],
      [
        "Electrical Engineering",
        "ST",
        "H",
        null,
        null,
        null,
        76.1726079
      ],
      [
        "Electrical Engineering",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        80.5595655
      ],
      [
        "Electrical Engineering",
        "NT-A",
        "H",
        null,
        null,
        null,
        87.4032298
      ],
      [
        "Electrical Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        89.5522919
      ],
      [
        "Electrical Engineering",
        "NT-C",
        "H",
        null,
        null,
        null,
        44.5569356
      ],
      [
        "Electrical Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        91.5631399
      ],
      [
        "Electrical Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        64.2198294
      ],
      [
        "Electrical Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        92.5132937
      ],
      [
        "Electrical Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        84.0343736
      ],
      [
        "Electrical Engineering",
        "ST-Ladies",
        "H",
        null,
        null,
        null,
        80.5339227
      ],
      [
        "Electrical Engineering",
        "VJ/DT-Ladies",
        "H",
        null,
        null,
        null,
        76.2668468
      ],
      [
        "Electrical Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        91.4806522
      ],
      [
        "Electrical Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        51.8020478
      ],
      [
        "Electrical Engineering",
        "PWDOPEN",
        "H",
        null,
        null,
        null,
        71.5294662
      ],
      [
        "Electrical Engineering",
        "PWDOBC",
        "H",
        null,
        null,
        null,
        11.134049
      ],
      [
        "Electrical Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        94.0581104
      ],
      [
        "Electrical Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        90.8211878
      ],
      [
        "Electrical Engineering",
        "NT-C",
        "O",
        null,
        null,
        null,
        93.276493
      ],
      [
        "Electrical Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        93.2955692
      ],
      [
        "Electrical Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        90.1398917
      ],
      [
        "Electrical Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        91.1552725
      ],
      [
        "Electrical Engineering",
        "ST-Ladies",
        "O",
        null,
        null,
        null,
        73.676029
      ],
      [
        "Electrical Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        90.0963693
      ],
      [
        "Electrical Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        90.1004135
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "H",
        null,
        null,
        null,
        94.6959625
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC",
        "H",
        null,
        null,
        null,
        90.8211878
      ],
      [
        "Electronics and Telecommunication Engg",
        "ST",
        "H",
        null,
        null,
        null,
        67.3538592
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        89.4256012
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-A",
        "H",
        null,
        null,
        null,
        92.5144909
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC",
        "H",
        null,
        null,
        null,
        94.2967096
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC",
        "H",
        null,
        null,
        null,
        72.5793422
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        94.6508434
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        89.106913
      ],
      [
        "Electronics and Telecommunication Engg",
        "ST-Ladies",
        "H",
        null,
        null,
        null,
        62.2946352
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B-Ladies",
        "H",
        null,
        null,
        null,
        86.3505412
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-C-Ladies",
        "H",
        null,
        null,
        null,
        85.819156
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        94.0758751
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        76.4346337
      ],
      [
        "Electronics and Telecommunication Engg",
        "PWDOPEN",
        "H",
        null,
        null,
        null,
        69.4641016
      ],
      [
        "Electronics and Telecommunication Engg",
        "PWDOBC",
        "H",
        null,
        null,
        null,
        59.2474828
      ],
      [
        "Electronics and Telecommunication Engg",
        "PWDROBC",
        "H",
        null,
        null,
        null,
        62.4995214
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "O",
        null,
        null,
        null,
        96.1680205
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC",
        "O",
        null,
        null,
        null,
        91.5631399
      ],
      [
        "Electronics and Telecommunication Engg",
        "ST",
        "O",
        null,
        null,
        null,
        94.372645
      ],
      [
        "Electronics and Telecommunication Engg",
        "VJ/DT",
        "O",
        null,
        null,
        null,
        88.1120509
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-B",
        "O",
        null,
        null,
        null,
        92.5144909
      ],
      [
        "Electronics and Telecommunication Engg",
        "OBC",
        "O",
        null,
        null,
        null,
        94.3667284
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC",
        "O",
        null,
        null,
        null,
        94.0032188
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        94.8415735
      ],
      [
        "Electronics and Telecommunication Engg",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        90.9200385
      ],
      [
        "Electronics and Telecommunication Engg",
        "NT-A-Ladies",
        "O",
        null,
        null,
        null,
        89.4554822
      ],
      [
        "Electronics and Telecommunication Engg",
        "SEBC-Ladies",
        "O",
        null,
        null,
        null,
        93.8884805
      ],
      [
        "Electronics and Telecommunication Engg",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        86.0314842
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "H",
        null,
        null,
        null,
        91.6610792
      ],
      [
        "Mechanical Engineering",
        "SC",
        "H",
        null,
        null,
        null,
        83.8560469
      ],
      [
        "Mechanical Engineering",
        "ST",
        "H",
        null,
        null,
        null,
        66.0625569
      ],
      [
        "Mechanical Engineering",
        "VJ/DT",
        "H",
        null,
        null,
        null,
        74.8088122
      ],
      [
        "Mechanical Engineering",
        "NT-A",
        "H",
        null,
        null,
        null,
        90.1218002
      ],
      [
        "Mechanical Engineering",
        "NT-B",
        "H",
        null,
        null,
        null,
        84.4651484
      ],
      [
        "Mechanical Engineering",
        "NT-C",
        "H",
        null,
        null,
        null,
        43.6669107
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "H",
        null,
        null,
        null,
        90.0962861
      ],
      [
        "Mechanical Engineering",
        "SEBC",
        "H",
        null,
        null,
        null,
        40.4599724
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "H",
        null,
        null,
        null,
        90.1262916
      ],
      [
        "Mechanical Engineering",
        "SC-Ladies",
        "H",
        null,
        null,
        null,
        84.4651484
      ],
      [
        "Mechanical Engineering",
        "VJ/DT-Ladies",
        "H",
        null,
        null,
        null,
        48.401775
      ],
      [
        "Mechanical Engineering",
        "OBC-Ladies",
        "H",
        null,
        null,
        null,
        89.6497245
      ],
      [
        "Mechanical Engineering",
        "SEBC-Ladies",
        "H",
        null,
        null,
        null,
        15.7457927
      ],
      [
        "Mechanical Engineering",
        "PWDOPEN",
        "H",
        null,
        null,
        null,
        20.7106482
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "O",
        null,
        null,
        null,
        94.1937425
      ],
      [
        "Mechanical Engineering",
        "SC",
        "O",
        null,
        null,
        null,
        90.4539834
      ],
      [
        "Mechanical Engineering",
        "ST",
        "O",
        null,
        null,
        null,
        63.4876968
      ],
      [
        "Mechanical Engineering",
        "OBC",
        "O",
        null,
        null,
        null,
        93.0166968
      ],
      [
        "Mechanical Engineering",
        "SEBC",
        "O",
        null,
        null,
        null,
        92.5616727
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "O",
        null,
        null,
        null,
        90.966814
      ],
      [
        "Mechanical Engineering",
        "SC-Ladies",
        "O",
        null,
        null,
        null,
        84.4547028
      ],
      [
        "Mechanical Engineering",
        "ST-Ladies",
        "O",
        null,
        null,
        null,
        59.8130199
      ],
      [
        "Mechanical Engineering",
        "OBC-Ladies",
        "O",
        null,
        null,
        null,
        90.7559146
      ],
      [
        "Mechanical Engineering",
        "DEFOPEN",
        "State",
        null,
        null,
        null,
        60.1814551
      ]
    ],
    "profile": {
      "overview": "Government College of Engineering, Nagpur is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 04025. Status: Government. University/affiliation recorded in the CET directory: Autonomous Institute.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Nagpur, Nagpur, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Government.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=04025",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=04025"
      ]
    }
  },
  {
    "id": "04116",
    "name": "G.H. Raisoni College of Engineering, Nagpur",
    "shortName": "GHRCE Nagpur",
    "city": "Nagpur",
    "region": "Vidarbha",
    "district": "Nagpur",
    "status": "Un-Aided Autonomous",
    "university": "Autonomous Institute",
    "branches": [
      "Civil Engineering",
      "Computer Science and Engineering",
      "Information Technology",
      "Computer Science and Engineering (Cyber Security)",
      "Computer Science and Engineering (IoT)",
      "Electrical Engineering",
      "Electronics and Telecommunication Engg",
      "Electronics Engineering",
      "Mechanical Engineering",
      "Computer Science and Engineering (AI & ML)",
      "Computer Science and Engineering (Artificial Intelligence)",
      "Data Science",
      "Artificial Intelligence"
    ],
    "cutoffs": [
      [
        "Civil Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        77.9049638
      ],
      [
        "Civil Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        78.9492107
      ],
      [
        "Computer Science and Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        91.0694792
      ],
      [
        "Computer Science and Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        91.7858261
      ],
      [
        "Information Technology",
        "OPEN",
        "State",
        null,
        null,
        null,
        88.6855305
      ],
      [
        "Information Technology",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        89.364907
      ],
      [
        "Computer Science and Engineering (Cyber Security)",
        "OPEN",
        "State",
        null,
        null,
        null,
        88.0315567
      ],
      [
        "Computer Science and Engineering (Cyber Security)",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        88.7299064
      ],
      [
        "Computer Science and Engineering (IoT)",
        "OPEN",
        "State",
        null,
        null,
        null,
        87.1731352
      ],
      [
        "Computer Science and Engineering (IoT)",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        86.8427506
      ],
      [
        "Electrical Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        81.6656822
      ],
      [
        "Electrical Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        81.5923479
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN",
        "State",
        null,
        null,
        null,
        86.6459627
      ],
      [
        "Electronics and Telecommunication Engg",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        87.0084871
      ],
      [
        "Electronics Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        82.5792479
      ],
      [
        "Electronics Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        84.207639
      ],
      [
        "Mechanical Engineering",
        "OPEN",
        "State",
        null,
        null,
        null,
        78.9492107
      ],
      [
        "Mechanical Engineering",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        78.699881
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "OPEN",
        "State",
        null,
        null,
        null,
        87.7370373
      ],
      [
        "Computer Science and Engineering (AI & ML)",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        88.3756645
      ],
      [
        "Computer Science and Engineering (Artificial Intelligence)",
        "OPEN",
        "State",
        null,
        null,
        null,
        87.5957229
      ],
      [
        "Computer Science and Engineering (Artificial Intelligence)",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        87.730083
      ],
      [
        "Data Science",
        "OPEN",
        "State",
        null,
        null,
        null,
        86.3943435
      ],
      [
        "Data Science",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        87.4032298
      ],
      [
        "Artificial Intelligence",
        "OPEN",
        "State",
        null,
        null,
        null,
        86.713982
      ],
      [
        "Artificial Intelligence",
        "OPEN-Ladies",
        "State",
        null,
        null,
        null,
        87.265016
      ]
    ],
    "profile": {
      "overview": "G.H. Raisoni College of Engineering, Nagpur is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: 04116. Status: Un-Aided Autonomous. University/affiliation recorded in the CET directory: Autonomous Institute.",
      "campus": "Campus information is provided through the institute's official profile/disclosure. Location: Nagpur, Nagpur, Maharashtra.",
      "environment": "Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.",
      "faculty": "Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.",
      "seats": "Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as Un-Aided Autonomous.",
      "fees": "Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.",
      "placements": "Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.",
      "accreditation": "Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.",
      "facilities": "Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.",
      "admission": "B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.",
      "officialWebsite": "",
      "cetProfile": "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=04116",
      "sources": [
        "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=04116"
      ]
    }
  }
];

const CUTOFF_YEAR = 2026;
const CUTOFF_ROUND = "CAP Round IV";
const DATA_SOURCE = "Maharashtra State CET Cell — CAP Round I, II, III and IV MH Cut Off, A.Y. 2026-27";
const CAP_ROUND_SOURCES = {
  "CAP 1": "https://cappublicdocs2026.blob.core.windows.net/documents/2026ENGG_CAP1_MH_CutOff_V1.pdf",
  "CAP 2": "https://cappublicdocs2026.blob.core.windows.net/documents/2026ENGG_CAP2_MH_CutOff.pdf",
  "CAP 3": "https://cappublicdocs2026.blob.core.windows.net/documents/2026ENGG_CAP3_MH_CutOff.pdf",
  "CAP 4": "https://cappublicdocs2026.blob.core.windows.net/documents/2026ENGG_CAP4_MH_CutOff.pdf"
};
/* Existing numeric cutoff rows are verified CAP-IV values.  CAP-I/II/III are
   intentionally not back-filled with estimates; the UI shows N/A until a
   matching official row has been loaded. */
const CAP_ROUNDS = ["CAP 1", "CAP 2", "CAP 3", "CAP 4"];
const DIRECTORY_SOURCE = "Maharashtra State CET Cell — Institute-Wise Allotment List, A.Y. 2026-27";


/* Detailed college-profile layer.
   CET Cell is the authoritative source for institute identity, courses and intake.
   College websites/mandatory disclosures are used for campus, faculty and placement
   information when those details have been verified. Unknown values are left explicit
   rather than invented. */
const DEFAULT_CET_PROFILE = id => `https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=${id}`;
COLLEGES.forEach(c => {
  const cet = DEFAULT_CET_PROFILE(c.id);
  c.profile = {
    overview: `${c.name} is a participating Maharashtra engineering institute in the 2026-27 State CET Cell directory. Institute code: ${c.id}. Status: ${c.status}. University/affiliation recorded in the CET directory: ${c.university}.`,
    campus: `Campus information is provided through the institute's official profile/disclosure. Location: ${c.city}, ${c.district}, Maharashtra.`,
    environment: `Campus environment, student activities and accommodation details should be read from the institute's current official disclosure; this program links the authoritative institute profile instead of inventing facilities.`,
    faculty: `Faculty and department information is maintained by the college. Use the official institute profile/website linked below for the current faculty directory.`,
    seats: `Current sanctioned intake and category-wise seats are maintained by the Maharashtra CET Cell seat matrix. The institute directory identifies this college as ${c.status}.`,
    fees: `Current approved tuition and other fees are determined through the Maharashtra Fees Regulating Authority and the institute's current fee notice.`,
    placements: `Placement statistics vary by academic year and branch. The current official placement report/mandatory disclosure should be used for verified figures.`,
    accreditation: `Accreditation/autonomy status can change by program and academic year. Verify the current status in the institute's official disclosure and CET Cell institute profile.`,
    facilities: `Laboratories, library, hostels, sports, computing and other facilities are maintained by the institute; the official profile/disclosure linked below is the source for current facilities.`,
    admission: `B.E./B.Tech admission follows the Maharashtra State CET Cell CAP process, with MHT-CET/JEE eligibility as applicable. CAP rounds, seat matrices and cutoffs are published by the CET Cell.`,
    officialWebsite: "",
    cetProfile: cet,
    sources: [cet]
  };
});

/* Verified expanded profile for M.G.M.'s College of Engineering and Technology, Kamothe. */
const mgm = COLLEGES.find(c => c.id === "03175");
if (mgm) {
  mgm.profile = {
    overview: "M.G.M.'s College of Engineering and Technology is an engineering institute at MGM Educational Campus, Sector 1, Kamothe, Navi Mumbai. The CET Cell lists institute code 03175 and Mumbai University affiliation in its 2026-27 institute summary.",
    campus: "The institute's 2024 NAAC Self Study Report describes a 17.5-acre campus with about 2 lakh sq. ft. built-up area, 23 classrooms, 2 air-conditioned seminar halls, 40 laboratories, a central computing facility, central library/reading room, 300-seat conference hall and a 2,000-seat open auditorium.",
    environment: "The institute reports a nature-friendly landscaped campus, Wi-Fi/CCTV and power-backup facilities, indoor and outdoor sports, student clubs, cultural activities and a 'Clean and Green Campus' recognition in its 2024 Self Study Report.",
    faculty: "The official faculty profile lists Dr. Geeta S. Lathkar (Director), Dr. S. L. Kotgire (Vice-Principal), and department heads including Dr. A. M. Rajurkar (CSE), Dr. M. G. Harkare (Mechanical), Dr. K. P. Jondhale (ECT), Mr. S. A. Hashmi (IT) and Mr. A. K. Hashmi (Civil). The institute also publishes a 2025-26 faculty list in its mandatory disclosure section.",
    seats: "The official B.Tech page lists 720 regular seats across the listed undergraduate branches, plus 36 TFWS seats and 72 EWS seats (828 including those additional seat categories). Individual regular intakes include Civil 60, CSE 180, IT 120, E&TC 60, Mechanical 60, Automation & Robotics 60, AI & ML 120 and AI & Data Science 60.",
    fees: "The institute publishes Fees Regulating Authority material; the current approved fee should be checked against the latest FRA notice before admission.",
    placements: "The official CSE placement page reports 19 CSE students placed with a highest package of ₹10 LPA in 2025-26; it reports 17 students and ₹12.8 LPA in 2024-25. These figures are CSE-specific, not an institute-wide placement percentage.",
    accreditation: "The official B.Tech intake page marks Civil Engineering, Computer Science and Engineering, Electronics & Telecommunication Engineering and Mechanical Engineering as accredited in its displayed intake table.",
    facilities: "The institute reports 40 laboratories, central library, computing facilities, AICTE Idea Lab, Innovation and Incubation Laboratories, National Digital Library access, Virtual Laboratory nodal-centre facilities, student clubs, hostel facilities and sports grounds.",
    admission: "The institute's 2026-27 admission notices cover B.Tech CAP vacancy/institutional-level rounds and direct second-year admissions. The Maharashtra CET Cell controls the centralized CAP process and publishes the official cutoffs and seat matrices.",
    officialWebsite: "https://www.mgmcen.ac.in/",
    cetProfile: DEFAULT_CET_PROFILE("03175"),
    sources: [
      "https://www.mgmcen.ac.in/",
      "https://mgmcen.ac.in/under-graduate.html",
      "https://mgmcen.ac.in/trainingandplacement/faculty-profile.html",
      "https://mgmcen.ac.in/trainingandplacement/training-placement.html",
      "https://mgmcen.ac.in/mandatory-disclosure.html",
      "https://fe2026.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=03175"
    ]
  };
}
