// Via
// Nets
//		net: the net this via should be connected to

module.exports = {

    body: p => `
      (module duck560 (layer F.Cu) (tedit 591DBFB0)
      ${p.at /* parametric position */}   
      ${'' /* footprint reference */}
      (fp_text reference "G***" (at 0 0) (layer "F.SilkS") hide
      (effects (font (size 1.524 1.524) (thickness 0.3)))
    (tstamp b59c4a27-260c-449a-829d-fcfb369b288b)
  )
  (fp_text value "LOGO" (at 0.75 0) (layer "F.SilkS") hide
      (effects (font (size 1.524 1.524) (thickness 0.3)))
    (tstamp fe7598cd-7bee-45c2-ac01-74d5c73eeb9f)
  )
  (fp_poly
    (pts
      (xy 0.149008 -6.422983)
      (xy 0.255018 -6.320422)
      (xy 0.27264 -6.293304)
      (xy 0.342769 -6.128241)
      (xy 0.362204 -5.96416)
      (xy 0.339199 -5.81441)
      (xy 0.282006 -5.692343)
      (xy 0.198879 -5.611308)
      (xy 0.098072 -5.584656)
      (xy -0.012164 -5.625737)
      (xy -0.09188 -5.703661)
      (xy -0.151336 -5.79884)
      (xy -0.175084 -5.906613)
      (xy -0.170994 -6.064099)
      (xy -0.170252 -6.073315)
      (xy -0.130685 -6.262534)
      (xy -0.056109 -6.387946)
      (xy 0.04121 -6.44346)
      (xy 0.149008 -6.422983)
    )

    (stroke (width 0.01) (type solid)) (fill solid) (layer "F.SilkS") (tstamp b5eccd9a-96ad-4e2e-b6f9-0ffa9e2e4e85))
  (fp_poly
    (pts
      (xy 3.059018 -1.433418)
      (xy 3.093881 -1.417525)
      (xy 3.220705 -1.362381)
      (xy 3.403737 -1.28793)
      (xy 3.613923 -1.205836)
      (xy 3.741965 -1.157394)
      (xy 3.942408 -1.081048)
      (xy 4.121541 -1.010011)
      (xy 4.255545 -0.95388)
      (xy 4.308929 -0.92902)
      (xy 4.512911 -0.774431)
      (xy 4.672658 -0.555293)
      (xy 4.762456 -0.330348)
      (xy 4.804793 -0.191471)
      (xy 4.855245 -0.097297)
      (xy 4.936368 -0.02006)
      (xy 5.070715 0.068009)
      (xy 5.100899 0.086315)
      (xy 5.320459 0.237735)
      (xy 5.464441 0.389979)
      (xy 5.545742 0.563922)
      (xy 5.577254 0.780441)
      (xy 5.578929 0.86026)
      (xy 5.560901 1.127192)
      (xy 5.511244 1.378405)
      (xy 5.436597 1.589633)
      (xy 5.343596 1.736611)
      (xy 5.337434 1.743002)
      (xy 5.26834 1.846256)
      (xy 5.238087 1.992429)
      (xy 5.234638 2.067523)
      (xy 5.188688 2.357879)
      (xy 5.06579 2.606759)
      (xy 4.871505 2.804499)
      (xy 4.774172 2.867607)
      (xy 4.671801 2.92243)
      (xy 4.578993 2.960517)
      (xy 4.475048 2.985604)
      (xy 4.339268 3.001425)
      (xy 4.150953 3.011713)
      (xy 3.935839 3.018847)
      (xy 3.585762 3.021676)
      (xy 3.286413 3.008928)
      (xy 3.056379 2.981446)
      (xy 3.038929 2.978124)
      (xy 2.805988 2.919599)
      (xy 2.604659 2.836838)
      (xy 2.414138 2.716874)
      (xy 2.213624 2.54674)
      (xy 1.996205 2.32818)
      (xy 1.816983 2.131025)
      (xy 1.679254 1.956199)
      (xy 1.561564 1.772232)
      (xy 1.442456 1.547657)
      (xy 1.388133 1.436336)
      (xy 1.287603 1.221883)
      (xy 1.196975 1.019134)
      (xy 1.126586 0.851803)
      (xy 1.088237 0.748392)
      (xy 1.038967 0.605397)
      (xy 0.970739 0.42537)
      (xy 0.917972 0.294821)
      (xy 0.846295 0.108977)
      (xy 0.787154 -0.070819)
      (xy 0.744528 -0.228151)
      (xy 0.722399 -0.346602)
      (xy 0.724745 -0.409757)
      (xy 0.747306 -0.409117)
      (xy 0.791301 -0.346437)
      (xy 0.855041 -0.224672)
      (xy 0.9253 -0.069249)
      (xy 0.930507 -0.056841)
      (xy 1.160589 0.480361)
      (xy 1.372488 0.946027)
      (xy 1.5643 1.336282)
      (xy 1.734122 1.647248)
      (xy 1.877893 1.872054)
      (xy 2.163519 2.22313)
      (xy 2.461896 2.491403)
      (xy 2.783794 2.681437)
      (xy 3.139981 2.797796)
      (xy 3.541224 2.845046)
      (xy 3.998292 2.82775)
      (xy 4.104822 2.816049)
      (xy 4.395344 2.770019)
      (xy 4.612767 2.706283)
      (xy 4.774304 2.615658)
      (xy 4.89717 2.488963)
      (xy 4.98334 2.347454)
      (xy 5.057905 2.171955)
      (xy 5.067895 2.053708)
      (xy 5.011799 1.984758)
      (xy 4.909539 1.958822)
      (xy 4.797186 1.935009)
      (xy 4.772277 1.892861)
      (xy 4.835023 1.831076)
      (xy 4.940109 1.770877)
      (xy 5.144403 1.622407)
      (xy 5.286295 1.413634)
      (xy 5.346743 1.247321)
      (xy 5.397423 0.944633)
      (xy 5.368868 0.685572)
      (xy 5.260242 0.468606)
      (xy 5.070712 0.292207)
      (xy 4.799445 0.154843)
      (xy 4.739822 0.133447)
      (xy 4.561282 0.062292)
      (xy 4.465986 -0.002849)
      (xy 4.445 -0.050911)
      (xy 4.481818 -0.086249)
      (xy 4.513036 -0.090715)
      (xy 4.567885 -0.127315)
      (xy 4.57605 -0.22761)
      (xy 4.537242 -0.377338)
      (xy 4.519792 -0.421719)
      (xy 4.394265 -0.612523)
      (xy 4.195362 -0.777264)
      (xy 3.939446 -0.903148)
      (xy 3.876955 -0.924408)
      (xy 3.564193 -1.028968)
      (xy 3.325916 -1.123728)
      (xy 3.147405 -1.215369)
      (xy 3.013941 -1.310574)
      (xy 3.000581 -1.322263)
      (xy 2.901596 -1.422521)
      (xy 2.879436 -1.475585)
      (xy 2.932458 -1.479776)
      (xy 3.059018 -1.433418)
    )

    (stroke (width 0.01) (type solid)) (fill solid) (layer "F.SilkS") (tstamp 3f2ca727-96c5-479d-92bb-4e25c4ecc696))
  (fp_poly
    (pts
      (xy -1.474107 -9.121983)
      (xy -1.092031 -9.071413)
      (xy -0.78304 -9.006944)
      (xy -0.529947 -8.923613)
      (xy -0.315562 -8.816456)
      (xy -0.233922 -8.763835)
      (xy -0.06336 -8.626696)
      (xy 0.07527 -8.464963)
      (xy 0.195024 -8.2589)
      (xy 0.308953 -7.988768)
      (xy 0.345612 -7.887562)
      (xy 0.462344 -7.617583)
      (xy 0.592064 -7.435039)
      (xy 0.611802 -7.415893)
      (xy 0.761181 -7.260874)
      (xy 0.877153 -7.09282)
      (xy 0.975141 -6.885168)
      (xy 1.060481 -6.643163)
      (xy 1.160801 -6.260824)
      (xy 1.228687 -5.85482)
      (xy 1.262424 -5.449562)
      (xy 1.260296 -5.06946)
      (xy 1.220587 -4.738923)
      (xy 1.200488 -4.650754)
      (xy 1.171624 -4.513956)
      (xy 1.15425 -4.358568)
      (xy 1.147489 -4.165102)
      (xy 1.150461 -3.914067)
      (xy 1.157612 -3.700064)
      (xy 1.169262 -3.443874)
      (xy 1.183148 -3.205224)
      (xy 1.197798 -3.005765)
      (xy 1.211736 -2.867151)
      (xy 1.21651 -2.835098)
      (xy 1.248771 -2.653945)
      (xy 1.724296 -2.602062)
      (xy 2.255224 -2.528612)
      (xy 2.722815 -2.428469)
      (xy 3.15219 -2.295058)
      (xy 3.568468 -2.121805)
      (xy 3.580281 -2.116269)
      (xy 3.826812 -2.000395)
      (xy 3.943138 -2.089851)
      (xy 4.321023 -2.361504)
      (xy 4.65108 -2.558162)
      (xy 4.935146 -2.680743)
      (xy 5.175058 -2.730163)
      (xy 5.2272 -2.731221)
      (xy 5.447409 -2.707927)
      (xy 5.602339 -2.640761)
      (xy 5.711905 -2.517014)
      (xy 5.775599 -2.38125)
      (xy 5.803273 -2.299132)
      (xy 5.824406 -2.208629)
      (xy 5.839865 -2.09662)
      (xy 5.850514 -1.949989)
      (xy 5.857219 -1.755614)
      (xy 5.860846 -1.500379)
      (xy 5.86226 -1.171164)
      (xy 5.862376 -1.065893)
      (xy 5.859642 -0.39443)
      (xy 5.849913 0.196676)
      (xy 5.832301 0.717579)
      (xy 5.805918 1.17843)
      (xy 5.769873 1.589382)
      (xy 5.723279 1.960587)
      (xy 5.665247 2.302197)
      (xy 5.594889 2.624364)
      (xy 5.512212 2.934147)
      (xy 5.338752 3.40106)
      (xy 5.095833 3.837655)
      (xy 4.77869 4.249745)
      (xy 4.38256 4.643144)
      (xy 3.902676 5.023665)
      (xy 3.665262 5.18752)
      (xy 3.452318 5.323166)
      (xy 3.269508 5.422463)
      (xy 3.082761 5.500732)
      (xy 2.858007 5.573298)
      (xy 2.721206 5.612099)
      (xy 2.488996 5.673036)
      (xy 2.262891 5.726873)
      (xy 2.071671 5.767051)
      (xy 1.961894 5.785107)
      (xy 1.824095 5.805812)
      (xy 1.756968 5.831803)
      (xy 1.740697 5.874767)
      (xy 1.746735 5.911996)
      (xy 1.763617 5.999738)
      (xy 1.789231 6.150422)
      (xy 1.819089 6.337243)
      (xy 1.831511 6.418035)
      (xy 1.861063 6.608267)
      (xy 1.901246 6.860895)
      (xy 1.947706 7.148846)
      (xy 1.996089 7.445048)
      (xy 2.019183 7.585014)
      (xy 2.064791 7.863507)
      (xy 2.09598 8.068628)
      (xy 2.11356 8.216436)
      (xy 2.118336 8.322986)
      (xy 2.111117 8.404336)
      (xy 2.09271 8.476541)
      (xy 2.067531 8.546234)
      (xy 1.943793 8.79657)
      (xy 1.789756 8.969933)
      (xy 1.636581 9.061573)
      (xy 1.533458 9.08692)
      (xy 1.361252 9.109115)
      (xy 1.139318 9.12754)
      (xy 0.887013 9.141579)
      (xy 0.623693 9.150613)
      (xy 0.368713 9.154025)
      (xy 0.14143 9.151198)
      (xy -0.038801 9.141513)
      (xy -0.152623 9.124354)
      (xy -0.167714 9.119139)
      (xy -0.258422 9.049145)
      (xy -0.337332 8.940857)
      (xy -0.337803 8.939949)
      (xy -0.386023 8.783243)
      (xy -0.40548 8.581585)
      (xy -0.40496 8.570254)
      (xy -0.305919 8.570254)
      (xy -0.277594 8.753619)
      (xy -0.231275 8.865544)
      (xy -0.160791 8.948173)
      (xy -0.05405 9.004959)
      (xy 0.101041 9.039354)
      (xy 0.316574 9.054814)
      (xy 0.604642 9.054789)
      (xy 0.762377 9.050609)
      (xy 1.027991 9.040591)
      (xy 1.221461 9.028299)
      (xy 1.361357 9.010976)
      (xy 1.466247 8.985861)
      (xy 1.554702 8.950197)
      (xy 1.601484 8.925957)
      (xy 1.776293 8.791353)
      (xy 1.896484 8.610644)
      (xy 1.946396 8.502607)
      (xy 1.973917 8.409792)
      (xy 1.981691 8.304425)
      (xy 1.972366 8.158735)
      (xy 1.954817 7.998322)
      (xy 1.92311 7.750324)
      (xy 1.882842 7.469738)
      (xy 1.842173 7.213134)
      (xy 1.838078 7.189107)
      (xy 1.79689 6.942572)
      (xy 1.751505 6.660106)
      (xy 1.710551 6.395582)
      (xy 1.703715 6.35)
      (xy 1.655618 6.060507)
      (xy 1.606231 5.843849)
      (xy 1.549663 5.682262)
      (xy 1.480021 5.557984)
      (xy 1.414093 5.476875)
      (xy 1.2659 5.378713)
      (xy 1.082824 5.345995)
      (xy 0.893612 5.379506)
      (xy 0.751829 5.458722)
      (xy 0.619193 5.56485)
      (xy 0.585024 6.422336)
      (xy 0.573904 6.708148)
      (xy 0.563928 6.977238)
      (xy 0.555759 7.210724)
      (xy 0.550059 7.389725)
      (xy 0.547571 7.489682)
      (xy 0.541864 7.611473)
      (xy 0.515663 7.684753)
      (xy 0.448055 7.737285)
      (xy 0.318126 7.796834)
      (xy 0.315287 7.798055)
      (xy 0.050183 7.946985)
      (xy -0.145472 8.131376)
      (xy -0.266049 8.342156)
      (xy -0.305919 8.570254)
      (xy -0.40496 8.570254)
      (xy -0.395991 8.374859)
      (xy -0.357372 8.202947)
      (xy -0.341364 8.166577)
      (xy -0.261261 8.068381)
      (xy -0.113666 7.942001)
      (xy 0.087116 7.798479)
      (xy 0.326781 7.648855)
      (xy 0.33746 7.642616)
      (xy 0.36467 7.61727)
      (xy 0.385749 7.569022)
      (xy 0.402014 7.485872)
      (xy 0.414782 7.355822)
      (xy 0.425371 7.166869)
      (xy 0.435099 6.907016)
      (xy 0.441588 6.694297)
      (xy 0.46776 5.791398)
      (xy 0.222541 5.82084)
      (xy 0.031095 5.837808)
      (xy -0.187102 5.848641)
      (xy -0.300915 5.850677)
      (xy -0.579152 5.851071)
      (xy -0.555064 7.118289)
      (xy -0.548099 7.518737)
      (xy -0.545008 7.839655)
      (xy -0.547185 8.092194)
      (xy -0.556019 8.287502)
      (xy -0.572903 8.436731)
      (xy -0.599227 8.55103)
      (xy -0.636385 8.64155)
      (xy -0.685766 8.719441)
      (xy -0.748764 8.795853)
      (xy -0.766965 8.816211)
      (xy -0.869083 8.914535)
      (xy -0.981442 8.984581)
      (xy -1.12125 9.030785)
      (xy -1.305717 9.057582)
      (xy -1.552049 9.069408)
      (xy -1.756132 9.071165)
      (xy -2.162087 9.063393)
      (xy -2.483336 9.040009)
      (xy -2.724658 9.000296)
      (xy -2.89083 8.943539)
      (xy -2.968752 8.88962)
      (xy -3.017174 8.8266)
      (xy -3.045521 8.741851)
      (xy -3.058688 8.611567)
      (xy -3.061607 8.438146)
      (xy -3.0609 8.385197)
      (xy -2.986162 8.385197)
      (xy -2.971468 8.570245)
      (xy -2.909522 8.730844)
      (xy -2.821267 8.826762)
      (xy -2.668642 8.889072)
      (xy -2.430112 8.933223)
      (xy -2.108724 8.958862)
      (xy -1.707523 8.965638)
      (xy -1.624681 8.964794)
      (xy -1.398351 8.959181)
      (xy -1.242082 8.947567)
      (xy -1.135259 8.92656)
      (xy -1.057267 8.892768)
      (xy -1.015162 8.864518)
      (xy -0.892408 8.763301)
      (xy -0.806463 8.661233)
      (xy -0.749359 8.538148)
      (xy -0.71313 8.373883)
      (xy -0.689806 8.148272)
      (xy -0.681291 8.01956)
      (xy -0.674762 7.846249)
      (xy -0.672056 7.623015)
      (xy -0.672753 7.365122)
      (xy -0.676434 7.087831)
      (xy -0.68268 6.806403)
      (xy -0.69107 6.536101)
      (xy -0.701186 6.292188)
      (xy -0.712609 6.089924)
      (xy -0.724918 5.944573)
      (xy -0.737694 5.871396)
      (xy -0.740459 5.866564)
      (xy -0.789614 5.852638)
      (xy -0.905039 5.829775)
      (xy -1.063195 5.801825)
      (xy -1.240543 5.772641)
      (xy -1.413545 5.746071)
      (xy -1.558662 5.725968)
      (xy -1.652355 5.716182)
      (xy -1.661958 5.715813)
      (xy -1.702679 5.740839)
      (xy -1.738154 5.823803)
      (xy -1.770927 5.974449)
      (xy -1.803541 6.202524)
      (xy -1.815639 6.304642)
      (xy -1.842666 6.511434)
      (xy -1.880545 6.762398)
      (xy -1.924051 7.026219)
      (xy -1.967962 7.27158)
      (xy -2.007055 7.467163)
      (xy -2.016545 7.509247)
      (xy -2.067155 7.58217)
      (xy -2.189962 7.647327)
      (xy -2.280579 7.678931)
      (xy -2.49789 7.774497)
      (xy -2.699739 7.911167)
      (xy -2.860507 8.068639)
      (xy -2.947201 8.207196)
      (xy -2.986162 8.385197)
      (xy -3.0609 8.385197)
      (xy -3.059152 8.254539)
      (xy -3.046911 8.134691)
      (xy -3.017567 8.051682)
      (xy -2.963806 7.978591)
      (xy -2.925535 7.937407)
      (xy -2.817421 7.847547)
      (xy -2.658436 7.742322)
      (xy -2.480778 7.642822)
      (xy -2.459635 7.63222)
      (xy -2.261859 7.523966)
      (xy -2.146989 7.434951)
      (xy -2.11137 7.374488)
      (xy -2.057235 7.084271)
      (xy -2.002258 6.768571)
      (xy -1.952462 6.463307)
      (xy -1.913873 6.204401)
      (xy -1.908504 6.164916)
      (xy -1.882873 5.989416)
      (xy -1.857508 5.843593)
      (xy -1.837394 5.755715)
      (xy -1.835339 5.7498)
      (xy -1.841233 5.699749)
      (xy -1.908309 5.649063)
      (xy -2.049707 5.588106)
      (xy -2.062301 5.583365)
      (xy -2.20602 5.532324)
      (xy -2.31723 5.497789)
      (xy -2.36307 5.488214)
      (xy -2.431993 5.467774)
      (xy -2.559009 5.41344)
      (xy -2.72309 5.33569)
      (xy -2.903205 5.245001)
      (xy -3.078328 5.151851)
      (xy -3.227429 5.066717)
      (xy -3.297426 5.02266)
      (xy -3.59565 4.774038)
      (xy -3.868703 4.449675)
      (xy -4.109772 4.062668)
      (xy -4.312042 3.626112)
      (xy -4.468698 3.153104)
      (xy -4.572926 2.656741)
      (xy -4.588726 2.54097)
      (xy -4.614066 2.351418)
      (xy -4.642843 2.221633)
      (xy -4.688602 2.121232)
      (xy -4.764885 2.019832)
      (xy -4.875537 1.897521)
      (xy -5.070806 1.653933)
      (xy -5.212201 1.396368)
      (xy -5.302393 1.111708)
      (xy -5.344052 0.786839)
      (xy -5.342114 0.612321)
      (xy -5.148035 0.612321)
      (xy -5.145039 0.851749)
      (xy -5.133541 1.026922)
      (xy -5.109782 1.164176)
      (xy -5.07 1.289848)
      (xy -5.041154 1.360714)
      (xy -4.964184 1.518164)
      (xy -4.880396 1.655402)
      (xy -4.802746 1.754587)
      (xy -4.74419 1.797883)
      (xy -4.726723 1.793627)
      (xy -4.724671 1.74229)
      (xy -4.738802 1.627213)
      (xy -4.766057 1.473305)
      (xy -4.766069 1.473246)
      (xy -4.783589 1.358186)
      (xy -4.794365 1.216469)
      (xy -4.797669 1.059857)
      (xy -4.620827 1.059857)
      (xy -4.617657 1.34866)
      (xy -4.607041 1.578589)
      (xy -4.588444 1.736114)
      (xy -4.580661 1.769228)
      (xy -4.558249 1.877615)
      (xy -4.532198 2.051371)
      (xy -4.505932 2.265423)
      (xy -4.485314 2.467685)
      (xy -4.457595 2.728922)
      (xy -4.423679 2.936358)
      (xy -4.374671 3.126865)
      (xy -4.301677 3.337318)
      (xy -4.233696 3.510899)
      (xy -4.113788 3.801295)
      (xy -4.010424 4.026259)
      (xy -3.910762 4.20618)
      (xy -3.801964 4.361451)
      (xy -3.671188 4.512463)
      (xy -3.505594 4.679605)
      (xy -3.485521 4.699059)
      (xy -3.310368 4.863811)
      (xy -3.163523 4.986144)
      (xy -3.02006 5.081273)
      (xy -2.855053 5.164411)
      (xy -2.643574 5.25077)
      (xy -2.483312 5.310718)
      (xy -2.139701 5.429433)
      (xy -1.822353 5.519997)
      (xy -1.487775 5.593819)
      (xy -1.224643 5.640873)
      (xy -1.052301 5.663096)
      (xy -0.834859 5.681566)
      (xy -0.590363 5.695855)
      (xy -0.33686 5.705532)
      (xy -0.092395 5.710169)
      (xy 0.124985 5.709336)
      (xy 0.297234 5.702604)
      (xy 0.406304 5.689543)
      (xy 0.431816 5.680287)
      (xy 0.482716 5.616941)
      (xy 0.532056 5.524079)
      (xy 0.623968 5.408401)
      (xy 0.775729 5.307718)
      (xy 0.956483 5.238322)
      (xy 1.115429 5.216071)
      (xy 1.307347 5.251957)
      (xy 1.481545 5.347047)
      (xy 1.60707 5.482486)
      (xy 1.63157 5.530463)
      (xy 1.678419 5.617371)
      (xy 1.742781 5.64776)
      (xy 1.852353 5.640983)
      (xy 2.262036 5.569718)
      (xy 2.669517 5.466303)
      (xy 3.042329 5.339913)
      (xy 3.270325 5.240201)
      (xy 3.557968 5.087838)
      (xy 3.812709 4.927402)
      (xy 4.057378 4.741876)
      (xy 4.314806 4.51424)
      (xy 4.547605 4.288046)
      (xy 4.742133 4.086261)
      (xy 4.88736 3.914567)
      (xy 5.003862 3.745213)
      (xy 5.112215 3.550443)
      (xy 5.149586 3.476073)
      (xy 5.255763 3.250722)
      (xy 5.346561 3.031607)
      (xy 5.423303 2.809298)
      (xy 5.487312 2.574364)
      (xy 5.539913 2.317375)
      (xy 5.582429 2.0289)
      (xy 5.616184 1.699509)
      (xy 5.642502 1.31977)
      (xy 5.662707 0.880254)
      (xy 5.678123 0.37153)
      (xy 5.690073 -0.215832)
      (xy 5.692964 -0.394785)
      (xy 5.699701 -0.881224)
      (xy 5.703457 -1.283421)
      (xy 5.704142 -1.607802)
      (xy 5.701666 -1.860794)
      (xy 5.695941 -2.048822)
      (xy 5.686876 -2.178314)
      (xy 5.674382 -2.255694)
      (xy 5.66669 -2.277106)
      (xy 5.528752 -2.475211)
      (xy 5.363101 -2.587017)
      (xy 5.168222 -2.613071)
      (xy 4.942603 -2.553922)
      (xy 4.924465 -2.546095)
      (xy 4.797879 -2.482431)
      (xy 4.64239 -2.393271)
      (xy 4.476648 -2.290804)
      (xy 4.319304 -2.187221)
      (xy 4.189008 -2.094712)
      (xy 4.104409 -2.025466)
      (xy 4.082143 -1.99554)
      (xy 4.123564 -1.974985)
      (xy 4.232589 -1.952295)
      (xy 4.386363 -1.932131)
      (xy 4.399643 -1.930793)
      (xy 4.593384 -1.904607)
      (xy 4.700104 -1.875994)
      (xy 4.723233 -1.849404)
      (xy 4.666205 -1.829283)
      (xy 4.53245 -1.82008)
      (xy 4.325401 -1.826243)
      (xy 4.319279 -1.826635)
      (xy 3.942368 -1.87556)
      (xy 3.564456 -1.97876)
      (xy 3.51419 -1.99614)
      (xy 2.975317 -2.169841)
      (xy 2.443166 -2.31008)
      (xy 1.944334 -2.410312)
      (xy 1.679065 -2.447732)
      (xy 1.48034 -2.471863)
      (xy 1.316399 -2.494286)
      (xy 1.207419 -2.512089)
      (xy 1.173939 -2.520626)
      (xy 1.147516 -2.573177)
      (xy 1.11959 -2.680109)
      (xy 1.113974 -2.709589)
      (xy 1.081068 -2.880158)
      (xy 1.052434 -2.976171)
      (xy 1.019954 -3.012934)
      (xy 0.975513 -3.005755)
      (xy 0.960794 -2.998472)
      (xy 0.842709 -2.947029)
      (xy 0.660867 -2.880542)
      (xy 0.439337 -2.806669)
      (xy 0.20219 -2.733064)
      (xy -0.026503 -2.667383)
      (xy -0.222673 -2.617284)
      (xy -0.272143 -2.606318)
      (xy -1.055766 -2.478679)
      (xy -1.812447 -2.433504)
      (xy -2.554045 -2.471259)
      (xy -3.292418 -2.59241)
      (xy -3.884376 -2.748346)
      (xy -4.084054 -2.809013)
      (xy -4.249411 -2.858505)
      (xy -4.362709 -2.891565)
      (xy -4.405983 -2.902962)
      (xy -4.411556 -2.86102)
      (xy -4.412994 -2.748383)
      (xy -4.410248 -2.584977)
      (xy -4.407035 -2.483408)
      (xy -4.405821 -2.247523)
      (xy -4.416346 -1.999555)
      (xy -4.43642 -1.785525)
      (xy -4.442108 -1.74625)
      (xy -4.479311 -1.473587)
      (xy -4.513335 -1.151547)
      (xy -4.543645 -0.793661)
      (xy -4.569708 -0.413461)
      (xy -4.590991 -0.024477)
      (xy -4.606961 0.359757)
      (xy -4.617084 0.725713)
      (xy -4.620827 1.059857)
      (xy -4.797669 1.059857)
      (xy -4.7981 1.03948)
      (xy -4.794497 0.818601)
      (xy -4.783257 0.545217)
      (xy -4.764084 0.21071)
      (xy -4.736679 -0.193535)
      (xy -4.700745 -0.676135)
      (xy -4.684654 -0.883619)
      (xy -4.673579 -1.046921)
      (xy -4.674518 -1.135111)
      (xy -4.690392 -1.163334)
      (xy -4.72412 -1.146735)
      (xy -4.733869 -1.138869)
      (xy -4.794438 -1.066455)
      (xy -4.807857 -1.02565)
      (xy -4.827987 -0.956638)
      (xy -4.87867 -0.843833)
      (xy -4.904874 -0.793079)
      (xy -4.999014 -0.590463)
      (xy -5.067247 -0.373487)
      (xy -5.112709 -0.124026)
      (xy -5.138536 0.176046)
      (xy -5.147864 0.544854)
      (xy -5.148035 0.612321)
      (xy -5.342114 0.612321)
      (xy -5.339851 0.408643)
      (xy -5.292461 -0.035995)
      (xy -5.282821 -0.102353)
      (xy -5.177048 -0.578713)
      (xy -5.010673 -0.990661)
      (xy -4.781754 -1.342979)
      (xy -4.777439 -1.348323)
      (xy -4.701352 -1.45034)
      (xy -4.650558 -1.547936)
      (xy -4.616207 -1.66784)
      (xy -4.589451 -1.83678)
      (xy -4.574726 -1.960644)
      (xy -4.544532 -2.331132)
      (xy -4.544237 -2.634362)
      (xy -4.57343 -2.864544)
      (xy -4.631705 -3.015888)
      (xy -4.651093 -3.041086)
      (xy -4.694839 -3.106477)
      (xy -4.725046 -3.20118)
      (xy -4.745658 -3.344742)
      (xy -4.760618 -3.556708)
      (xy -4.7625 -3.593231)
      (xy -4.764614 -3.635573)
      (xy -4.589138 -3.635573)
      (xy -4.5833 -3.468896)
      (xy -4.572033 -3.320857)
      (xy -4.556015 -3.218705)
      (xy -4.547872 -3.195738)
      (xy -4.466128 -3.121865)
      (xy -4.30476 -3.042471)
      (xy -4.074473 -2.960351)
      (xy -3.785975 -2.8783)
      (xy -3.449973 -2.799113)
      (xy -3.077174 -2.725586)
      (xy -2.678285 -2.660514)
      (xy -2.313214 -2.61235)
      (xy -2.134099 -2.601829)
      (xy -1.89026 -2.601783)
      (xy -1.606919 -2.610906)
      (xy -1.3093 -2.627893)
      (xy -1.022624 -2.651437)
      (xy -0.772113 -2.680232)
      (xy -0.657678 -2.69805)
      (xy -0.448673 -2.741923)
      (xy -0.204388 -2.803912)
      (xy 0.056677 -2.878108)
      (xy 0.316025 -2.958608)
      (xy 0.555157 -3.039503)
      (xy 0.755575 -3.114888)
      (xy 0.89878 -3.178856)
      (xy 0.95372 -3.212557)
      (xy 0.996145 -3.253814)
      (xy 1.021259 -3.306332)
      (xy 1.03138 -3.389741)
      (xy 1.028828 -3.523675)
      (xy 1.01592 -3.727765)
      (xy 1.01541 -3.734994)
      (xy 0.983854 -4.181594)
      (xy 0.834418 -4.018476)
      (xy 0.685449 -3.896419)
      (xy 0.526966 -3.85541)
      (xy 0.342869 -3.89337)
      (xy 0.236318 -3.941245)
      (xy 0.101148 -4.020486)
      (xy -0.002905 -4.112819)
      (xy -0.094321 -4.240383)
      (xy -0.191583 -4.425314)
      (xy -0.222695 -4.491064)
      (xy -0.298447 -4.675744)
      (xy -0.349741 -4.86377)
      (xy -0.384715 -5.08953)
      (xy -0.399637 -5.23875)
      (xy -0.417442 -5.534448)
      (xy -0.421553 -5.805715)
      (xy -0.239475 -5.805715)
      (xy -0.22542 -5.359155)
      (xy -0.187093 -4.991643)
      (xy -0.121209 -4.693971)
      (xy -0.024479 -4.456934)
      (xy 0.106381 -4.271324)
      (xy 0.274659 -4.127935)
      (xy 0.381894 -4.065002)
      (xy 0.533187 -4.027595)
      (xy 0.670174 -4.07965)
      (xy 0.757496 -4.168927)
      (xy 0.943587 -4.485966)
      (xy 1.061426 -4.846874)
      (xy 1.087027 -4.996835)
      (xy 1.103797 -5.275427)
      (xy 1.091114 -5.585374)
      (xy 1.052796 -5.911383)
      (xy 0.99266 -6.238156)
      (xy 0.914522 -6.5504)
      (xy 0.822201 -6.832819)
      (xy 0.719514 -7.070117)
      (xy 0.610277 -7.247)
      (xy 0.500488 -7.347023)
      (xy 0.350252 -7.394492)
      (xy 0.211253 -7.364344)
      (xy 0.075149 -7.252443)
      (xy -0.056502 -7.070794)
      (xy -0.130937 -6.893835)
      (xy -0.187198 -6.638061)
      (xy -0.223787 -6.313823)
      (xy -0.239208 -5.931475)
      (xy -0.239475 -5.805715)
      (xy -0.421553 -5.805715)
      (xy -0.422163 -5.845901)
      (xy -0.414883 -6.154839)
      (xy -0.396684 -6.442993)
      (xy -0.368648 -6.692095)
      (xy -0.331858 -6.883876)
      (xy -0.296202 -6.985)
      (xy -0.145063 -7.230908)
      (xy 0.01139 -7.403894)
      (xy 0.137806 -7.484647)
      (xy 0.230668 -7.535064)
      (xy 0.272009 -7.581145)
      (xy 0.272143 -7.583119)
      (xy 0.248081 -7.680268)
      (xy 0.184557 -7.827938)
      (xy 0.094568 -8.002642)
      (xy -0.008889 -8.180892)
      (xy -0.11282 -8.3392)
      (xy -0.204228 -8.454079)
      (xy -0.216865 -8.466901)
      (xy -0.439323 -8.628207)
      (xy -0.73717 -8.758622)
      (xy -1.099504 -8.855228)
      (xy -1.51542 -8.915108)
      (xy -1.967887 -8.93535)
      (xy -2.487732 -8.907058)
      (xy -2.96596 -8.824231)
      (xy -3.375152 -8.693902)
      (xy -3.59188 -8.577792)
      (xy -3.767509 -8.416631)
      (xy -3.918704 -8.192702)
      (xy -4.001247 -8.028215)
      (xy -4.065021 -7.861771)
      (xy -4.137171 -7.628944)
      (xy -4.212091 -7.352977)
      (xy -4.284176 -7.057118)
      (xy -4.347823 -6.764612)
      (xy -4.397426 -6.498705)
      (xy -4.42738 -6.282644)
      (xy -4.430482 -6.247947)
      (xy -4.457962 -5.896429)
      (xy -4.031927 -5.895616)
      (xy -3.584057 -5.874887)
      (xy -3.118597 -5.81774)
      (xy -2.660616 -5.729261)
      (xy -2.235183 -5.614538)
      (xy -1.867365 -5.478661)
      (xy -1.780369 -5.438612)
      (xy -1.607683 -5.348166)
      (xy -1.499922 -5.265367)
      (xy -1.437433 -5.16507)
      (xy -1.400561 -5.022128)
      (xy -1.386774 -4.93501)
      (xy -1.386313 -4.712554)
      (xy -1.461564 -4.523101)
      (xy -1.59453 -4.368616)
      (xy -1.742128 -4.262285)
      (xy -1.952954 -4.150499)
      (xy -2.201015 -4.044203)
      (xy -2.46032 -3.954339)
      (xy -2.704876 -3.891854)
      (xy -2.744107 -3.884569)
      (xy -3.065136 -3.84838)
      (xy -3.429243 -3.838628)
      (xy -3.798724 -3.854394)
      (xy -4.135872 -3.894759)
      (xy -4.271899 -3.92184)
      (xy -4.419147 -3.953927)
      (xy -4.52594 -3.972929)
      (xy -4.567286 -3.974976)
      (xy -4.581809 -3.915861)
      (xy -4.588867 -3.793644)
      (xy -4.589138 -3.635573)
      (xy -4.764614 -3.635573)
      (xy -4.785178 -4.04737)
      (xy -5.034643 -4.125019)
      (xy -5.296297 -4.218465)
      (xy -5.496681 -4.321756)
      (xy -5.664997 -4.451352)
      (xy -5.735565 -4.520066)
      (xy -5.825871 -4.621008)
      (xy -5.874095 -4.709589)
      (xy -5.893259 -4.821802)
      (xy -5.896428 -4.964668)
      (xy -5.894824 -5.024191)
      (xy -5.707515 -5.024191)
      (xy -5.687109 -4.830896)
      (xy -5.603606 -4.650048)
      (xy -5.465962 -4.508279)
      (xy -5.410845 -4.474948)
      (xy -5.315176 -4.43578)
      (xy -5.153834 -4.379799)
      (xy -4.948774 -4.31365)
      (xy -4.721949 -4.243979)
      (xy -4.495316 -4.177433)
      (xy -4.290829 -4.120656)
      (xy -4.130443 -4.080295)
      (xy -4.059464 -4.065886)
      (xy -3.842374 -4.047803)
      (xy -3.565978 -4.049182)
      (xy -3.259033 -4.067725)
      (xy -2.9503 -4.101134)
      (xy -2.668537 -4.14711)
      (xy -2.479228 -4.192159)
      (xy -2.296013 -4.247109)
      (xy -2.142955 -4.296427)
      (xy -2.043382 -4.332451)
      (xy -2.022179 -4.342318)
      (xy -1.898931 -4.431707)
      (xy -1.769832 -4.549343)
      (xy -1.667351 -4.664174)
      (xy -1.635592 -4.712033)
      (xy -1.606342 -4.841526)
      (xy -1.621217 -4.999292)
      (xy -1.674311 -5.137933)
      (xy -1.691757 -5.162691)
      (xy -1.804343 -5.251985)
      (xy -1.978654 -5.333276)
      (xy -2.185784 -5.394691)
      (xy -2.30972 -5.416544)
      (xy -2.462149 -5.4414)
      (xy -2.584784 -5.470744)
      (xy -2.629502 -5.487566)
      (xy -2.702185 -5.507781)
      (xy -2.848483 -5.53448)
      (xy -3.051721 -5.565421)
      (xy -3.295219 -5.59836)
      (xy -3.5623 -5.631054)
      (xy -3.836288 -5.661258)
      (xy -4.100504 -5.686729)
      (xy -4.1275 -5.689081)
      (xy -4.367099 -5.689227)
      (xy -4.631997 -5.655808)
      (xy -4.902798 -5.594987)
      (xy -5.160107 -5.51293)
      (xy -5.384529 -5.4158)
      (xy -5.55667 -5.309763)
      (xy -5.655865 -5.203305)
      (xy -5.707515 -5.024191)
      (xy -5.894824 -5.024191)
      (xy -5.892107 -5.124934)
      (xy -5.870596 -5.229384)
      (xy -5.819077 -5.312813)
      (xy -5.736557 -5.398587)
      (xy -5.592466 -5.517112)
      (xy -5.429319 -5.622557)
      (xy -5.385039 -5.64561)
      (xy -5.273544 -5.705364)
      (xy -5.211216 -5.767997)
      (xy -5.177131 -5.864738)
      (xy -5.169206 -5.911126)
      (xy -4.981672 -5.911126)
      (xy -4.976983 -5.844896)
      (xy -4.946461 -5.82845)
      (xy -4.90238 -5.836934)
      (xy -4.848403 -5.862789)
      (xy -4.819817 -5.919657)
      (xy -4.808998 -6.030793)
      (xy -4.807857 -6.125213)
      (xy -4.80178 -6.285043)
      (xy -4.777611 -6.384083)
      (xy -4.726446 -6.451791)
      (xy -4.703183 -6.471441)
      (xy -4.64173 -6.551136)
      (xy -4.581297 -6.680974)
      (xy -4.527028 -6.839822)
      (xy -4.48407 -7.006545)
      (xy -4.457567 -7.160012)
      (xy -4.452666 -7.279088)
      (xy -4.474512 -7.34264)
      (xy -4.489788 -7.347858)
      (xy -4.560783 -7.305441)
      (xy -4.640079 -7.187891)
      (xy -4.722339 -7.00976)
      (xy -4.802231 -6.785599)
      (xy -4.874421 -6.529958)
      (xy -4.933573 -6.25739)
      (xy -4.966628 -6.04709)
      (xy -4.981672 -5.911126)
      (xy -5.169206 -5.911126)
      (xy -5.156217 -5.987143)
      (xy -5.072155 -6.435133)
      (xy -4.96518 -6.809666)
      (xy -4.836998 -7.106793)
      (xy -4.689315 -7.322567)
      (xy -4.523836 -7.453038)
      (xy -4.522609 -7.453647)
      (xy -4.396324 -7.539569)
      (xy -4.354286 -7.626439)
      (xy -4.335345 -7.706092)
      (xy -4.28473 -7.842565)
      (xy -4.211747 -8.011748)
      (xy -4.176253 -8.087614)
      (xy -3.985468 -8.419542)
      (xy -3.769497 -8.675024)
      (xy -3.533806 -8.8477)
      (xy -3.515178 -8.85729)
      (xy -3.16534 -8.993491)
      (xy -2.752363 -9.088682)
      (xy -2.295224 -9.140402)
      (xy -1.812899 -9.146189)
      (xy -1.474107 -9.121983)
    )

    (stroke (width 0.01) (type solid)) (fill solid) (layer "F.SilkS") (tstamp 6c1c6af9-fd2d-422c-a70c-5602e33f2dba))
    `
}