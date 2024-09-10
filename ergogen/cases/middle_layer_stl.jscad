function middle_layer_extrude_3_1_outline_fn(){
    return new CSG.Path2D([[117.8617747,-83.9399852],[89.8577942,-95.0476292]]).appendPoint([83.1482019,-161.9006687]).appendPoint([103.1419304,-221.2809125]).appendPoint([182.2927616,-231.9513695]).appendPoint([222.0095058,-218.2757978]).appendPoint([237.3790188,-218.2757978]).appendPoint([277.095763,-231.9513695]).appendPoint([356.2465942,-221.2809125]).appendPoint([376.2403227,-161.9006687]).appendPoint([369.5307304,-95.0476292]).appendPoint([341.5267499,-83.9399852]).appendPoint([229.6942623,-80.3842967]).appendPoint([185.0228373,-81.8046145]).appendPoint([189.2940809,-83.8878392]).appendArc([189.7545038,-85.2250043],{"radius":1,"clockwise":true,"large":false}).appendPoint([218.5159132,-99.252881]).appendArc([218.9763361,-100.5900462],{"radius":1,"clockwise":true,"large":false}).appendPoint([211.0856555,-116.7683391]).appendArc([209.7484904,-117.2287619],{"radius":1,"clockwise":true,"large":false}).appendPoint([175.5943166,-100.5706584]).appendArc([175.1338937,-99.2334932],{"radius":1,"clockwise":true,"large":false}).appendPoint([176.010636,-97.4359051]).appendPoint([147.2492265,-83.4080284]).appendArc([146.8273037,-83.0190328],{"radius":1,"clockwise":true,"large":false}).appendPoint([117.8617747,-83.9399852]).close().innerToCAG()
.subtract(
    new CSG.Path2D.arc({"center":[363.2126399,-105.3005186],"radius":5,"startangle":190.0000001,"endangle":550.0000001}).close().innerToCAG()
.union(
    new CSG.Path2D.arc({"center":[96.1758847,-105.3005186],"radius":5,"startangle":349.9999999,"endangle":709.9999999}).close().innerToCAG()
).union(
    CAG.circle({"center":[217.5068606,-87.6347136],"radius":5})
).union(
    CAG.circle({"center":[241.881664,-87.6347136],"radius":5})
).union(
    CAG.circle({"center":[298.1146979,-216.9774129],"radius":5})
).union(
    CAG.circle({"center":[333.047142,-212.8706634],"radius":5})
).union(
    CAG.circle({"center":[126.3413826,-212.8706634],"radius":5})
).union(
    CAG.circle({"center":[353.878077,-197.3764017],"radius":5})
).union(
    CAG.circle({"center":[314.6879204,-91.9336814],"radius":5})
).union(
    CAG.circle({"center":[144.7006042,-91.9336814],"radius":5})
).union(
    new CSG.Path2D([[298.9359845,-115.6367756],[312.0061104,-110.6196243]]).appendPoint([306.9889591,-97.5494984]).appendPoint([293.9188332,-102.5666497]).appendPoint([298.9359845,-115.6367756]).close().innerToCAG()
).union(
    new CSG.Path2D([[147.3824142,-110.6196243],[160.4525401,-115.6367756]]).appendPoint([165.4696914,-102.5666497]).appendPoint([152.3995655,-97.5494984]).appendPoint([147.3824142,-110.6196243]).close().innerToCAG()
).union(
    new CSG.Path2D([[305.7449755,-133.3748037],[318.8151014,-128.3576524]]).appendPoint([313.7979501,-115.2875265]).appendPoint([300.7278242,-120.3046778]).appendPoint([305.7449755,-133.3748037]).close().innerToCAG()
).union(
    new CSG.Path2D([[312.5539665,-151.1128318],[325.6240924,-146.0956805]]).appendPoint([320.6069411,-133.0255546]).appendPoint([307.5368152,-138.0427059]).appendPoint([312.5539665,-151.1128318]).close().innerToCAG()
).union(
    new CSG.Path2D([[140.5734232,-128.3576524],[153.6435491,-133.3748037]]).appendPoint([158.6607004,-120.3046778]).appendPoint([145.5905745,-115.2875265]).appendPoint([140.5734232,-128.3576524]).close().innerToCAG()
).union(
    new CSG.Path2D([[133.7644322,-146.0956805],[146.8345581,-151.1128318]]).appendPoint([151.8517094,-138.0427059]).appendPoint([138.7815835,-133.0255546]).appendPoint([133.7644322,-146.0956805]).close().innerToCAG()
).union(
    new CSG.Path2D([[99.8843862,-113.0624137],[113.6716947,-115.4934882]]).appendPoint([116.1027692,-101.7061797]).appendPoint([102.3154607,-99.2751052]).appendPoint([99.8843862,-113.0624137]).close().innerToCAG()
).union(
    new CSG.Path2D([[96.5850708,-131.773761],[110.3723793,-134.2048355]]).appendPoint([112.8034538,-120.417527]).appendPoint([99.0161453,-117.9864525]).appendPoint([96.5850708,-131.773761]).close().innerToCAG()
).union(
    new CSG.Path2D([[345.7168299,-115.4934882],[359.5041384,-113.0624137]]).appendPoint([357.0730639,-99.2751052]).appendPoint([343.2857554,-101.7061797]).appendPoint([345.7168299,-115.4934882]).close().innerToCAG()
).union(
    new CSG.Path2D([[93.2857554,-150.4851083],[107.0730639,-152.9161828]]).appendPoint([109.5041384,-139.1288743]).appendPoint([95.7168299,-136.6977998]).appendPoint([93.2857554,-150.4851083]).close().innerToCAG()
).union(
    new CSG.Path2D([[349.0161453,-134.2048355],[362.8034538,-131.773761]]).appendPoint([360.3723793,-117.9864525]).appendPoint([346.5850708,-120.417527]).appendPoint([349.0161453,-134.2048355]).close().innerToCAG()
).union(
    new CSG.Path2D([[352.3154607,-152.9161828],[366.1027692,-150.4851083]]).appendPoint([363.6716947,-136.6977998]).appendPoint([349.8843862,-139.1288743]).appendPoint([352.3154607,-152.9161828]).close().innerToCAG()
).union(
    new CSG.Path2D([[332.1088668,-149.0597863],[345.5665306,-145.2008633]]).appendPoint([341.7076076,-131.7431995]).appendPoint([328.2499438,-135.6021225]).appendPoint([332.1088668,-149.0597863]).close().innerToCAG()
).union(
    new CSG.Path2D([[326.871757,-130.7958141],[340.3294208,-126.9368911]]).appendPoint([336.4704978,-113.4792273]).appendPoint([323.012834,-117.3381503]).appendPoint([326.871757,-130.7958141]).close().innerToCAG()
).union(
    new CSG.Path2D([[321.6346473,-112.5318418],[335.0923111,-108.6729188]]).appendPoint([331.2333881,-95.215255]).appendPoint([317.7757243,-99.074178]).appendPoint([321.6346473,-112.5318418]).close().innerToCAG()
).union(
    new CSG.Path2D([[113.821994,-145.2008633],[127.2796578,-149.0597863]]).appendPoint([131.1385808,-135.6021225]).appendPoint([117.680917,-131.7431995]).appendPoint([113.821994,-145.2008633]).close().innerToCAG()
).union(
    new CSG.Path2D([[119.0591038,-126.9368911],[132.5167676,-130.7958141]]).appendPoint([136.3756906,-117.3381503]).appendPoint([122.9180268,-113.4792273]).appendPoint([119.0591038,-126.9368911]).close().innerToCAG()
).union(
    new CSG.Path2D([[124.2962135,-108.6729188],[137.7538773,-112.5318418]]).appendPoint([141.6128003,-99.074178]).appendPoint([128.1551365,-95.215255]).appendPoint([124.2962135,-108.6729188]).close().innerToCAG()
).union(
    new CSG.Path2D([[265.0712313,-139.7427166],[277.654348,-133.6055205]]).appendPoint([271.5171519,-121.0224038]).appendPoint([258.9340352,-127.1595999]).appendPoint([265.0712313,-139.7427166]).close().innerToCAG()
).union(
    new CSG.Path2D([[280.3948337,-127.8184887],[292.9779504,-121.6812926]]).appendPoint([286.8407543,-109.0981759]).appendPoint([274.2576376,-115.235372]).appendPoint([280.3948337,-127.8184887]).close().innerToCAG()
).union(
    new CSG.Path2D([[181.7341766,-133.6055205],[194.3172933,-139.7427166]]).appendPoint([200.4544894,-127.1595999]).appendPoint([187.8713727,-121.0224038]).appendPoint([181.7341766,-133.6055205]).close().innerToCAG()
).union(
    new CSG.Path2D([[166.4105742,-121.6812926],[178.9936909,-127.8184887]]).appendPoint([185.130887,-115.235372]).appendPoint([172.5477703,-109.0981759]).appendPoint([166.4105742,-121.6812926]).close().innerToCAG()
).union(
    new CSG.Path2D([[273.4002831,-156.8198035],[285.9833998,-150.6826074]]).appendPoint([279.8462037,-138.0994907]).appendPoint([267.263087,-144.2366868]).appendPoint([273.4002831,-156.8198035]).close().innerToCAG()
).union(
    new CSG.Path2D([[281.7293349,-173.8968904],[294.3124516,-167.7596943]]).appendPoint([288.1752555,-155.1765776]).appendPoint([275.5921388,-161.3137737]).appendPoint([281.7293349,-173.8968904]).close().innerToCAG()
).union(
    new CSG.Path2D([[288.7238855,-144.8955756],[301.3070022,-138.7583795]]).appendPoint([295.1698061,-126.1752628]).appendPoint([282.5866894,-132.3124589]).appendPoint([288.7238855,-144.8955756]).close().innerToCAG()
).union(
    new CSG.Path2D([[297.0529373,-161.9726624],[309.636054,-155.8354663]]).appendPoint([303.4988579,-143.2523496]).appendPoint([290.9157412,-149.3895457]).appendPoint([297.0529373,-161.9726624]).close().innerToCAG()
).union(
    new CSG.Path2D([[173.4051248,-150.6826074],[185.9882415,-156.8198035]]).appendPoint([192.1254376,-144.2366868]).appendPoint([179.5423209,-138.0994907]).appendPoint([173.4051248,-150.6826074]).close().innerToCAG()
).union(
    new CSG.Path2D([[165.076073,-167.7596943],[177.6591897,-173.8968904]]).appendPoint([183.7963858,-161.3137737]).appendPoint([171.2132691,-155.1765776]).appendPoint([165.076073,-167.7596943]).close().innerToCAG()
).union(
    new CSG.Path2D([[158.0815224,-138.7583795],[170.6646391,-144.8955756]]).appendPoint([176.8018352,-132.3124589]).appendPoint([164.2187185,-126.1752628]).appendPoint([158.0815224,-138.7583795]).close().innerToCAG()
).union(
    new CSG.Path2D([[149.7524706,-155.8354663],[162.3355873,-161.9726624]]).appendPoint([168.4727834,-149.3895457]).appendPoint([155.8896667,-143.2523496]).appendPoint([149.7524706,-155.8354663]).close().innerToCAG()
).union(
    new CSG.Path2D([[268.030844,-195.2850552],[276.8413295,-184.4050117]]).appendPoint([265.961286,-175.5945262]).appendPoint([265.3319656,-176.3716722]).appendPoint([261.8348087,-173.5397305]).appendPoint([254.2829641,-182.865482]).appendPoint([257.7801209,-185.6974237]).appendPoint([257.1508005,-186.4745697]).appendPoint([268.030844,-195.2850552]).close().innerToCAG()
).union(
    new CSG.Path2D([[182.5471951,-184.4050117],[191.3576806,-195.2850552]]).appendPoint([202.2377241,-186.4745697]).appendPoint([201.6084037,-185.6974237]).appendPoint([205.1055605,-182.865482]).appendPoint([197.5537159,-173.5397305]).appendPoint([194.056559,-176.3716722]).appendPoint([193.4272386,-175.5945262]).appendPoint([182.5471951,-184.4050117]).close().innerToCAG()
).union(
    new CSG.Path2D([[133.5935177,-173.9482408],[145.5938599,-181.1587738]]).appendPoint([152.8043929,-169.1584316]).appendPoint([141.2326343,-162.2054176]).appendPoint([143.0352676,-159.2053321]).appendPoint([138.7494311,-156.6301417]).appendPoint([132.5689742,-166.9161493]).appendPoint([136.4262271,-169.2338207]).appendPoint([133.5935177,-173.9482408]).close().innerToCAG()
).union(
    new CSG.Path2D([[149.8796964,-183.7339642],[161.8800386,-190.9444972]]).appendPoint([169.0905716,-178.944155]).appendPoint([157.518813,-171.991141]).appendPoint([159.3214463,-168.9910555]).appendPoint([155.0356098,-166.4158651]).appendPoint([148.8551529,-176.7018727]).appendPoint([152.7124058,-179.0195441]).appendPoint([149.8796964,-183.7339642]).close().innerToCAG()
).union(
    new CSG.Path2D([[297.508486,-190.9444972],[309.5088282,-183.7339642]]).appendPoint([306.6761188,-179.0195441]).appendPoint([310.5333717,-176.7018727]).appendPoint([304.3529148,-166.4158651]).appendPoint([300.0670783,-168.9910555]).appendPoint([301.8697116,-171.991141]).appendPoint([290.297953,-178.944155]).appendPoint([297.508486,-190.9444972]).close().innerToCAG()
).union(
    new CSG.Path2D([[313.7946647,-181.1587738],[325.7950069,-173.9482408]]).appendPoint([322.9622975,-169.2338207]).appendPoint([326.8195504,-166.9161493]).appendPoint([320.6390935,-156.6301417]).appendPoint([316.353257,-159.2053321]).appendPoint([318.1558903,-162.2054176]).appendPoint([306.5841317,-169.1584316]).appendPoint([313.7946647,-181.1587738]).close().innerToCAG()
).union(
    new CSG.Path2D([[284.2125882,-205.4935642],[293.0230737,-194.6135207]]).appendPoint([288.7487709,-191.1522585]).appendPoint([291.5807126,-187.6551017]).appendPoint([282.2549611,-180.1032571]).appendPoint([279.1083592,-183.9889869]).appendPoint([281.82837,-186.1916082]).appendPoint([273.3325447,-196.6830787]).appendPoint([284.2125882,-205.4935642]).close().innerToCAG()
).union(
    new CSG.Path2D([[166.3654509,-194.6135207],[175.1759364,-205.4935642]]).appendPoint([186.0559799,-196.6830787]).appendPoint([177.5601546,-186.1916082]).appendPoint([180.2801654,-183.9889869]).appendPoint([177.1335635,-180.1032571]).appendPoint([167.807812,-187.6551017]).appendPoint([170.6397537,-191.1522585]).appendPoint([166.3654509,-194.6135207]).close().innerToCAG()
).union(
    new CSG.Path2D([[177.9675929,-210.1716676],[182.5255471,-223.4089276]]).appendPoint([195.7628071,-218.8509734]).appendPoint([191.367637,-206.0864727]).appendPoint([194.676952,-204.9469841]).appendPoint([193.0491113,-200.2193912]).appendPoint([181.7028884,-204.1262091]).appendPoint([183.167945,-208.3810427]).appendPoint([177.9675929,-210.1716676]).close().innerToCAG()
).union(
    new CSG.Path2D([[276.8629775,-223.4089276],[281.4209317,-210.1716676]]).appendPoint([276.2205796,-208.3810427]).appendPoint([277.6856362,-204.1262091]).appendPoint([266.3394133,-200.2193912]).appendPoint([264.7115726,-204.9469841]).appendPoint([268.0208876,-206.0864727]).appendPoint([263.6257175,-218.8509734]).appendPoint([276.8629775,-223.4089276]).close().innerToCAG()
).union(
    new CSG.Path2D([[195.9324458,-203.9858727],[200.4904,-217.2231327]]).appendPoint([213.72766,-212.6651785]).appendPoint([213.4020918,-211.7196599]).appendPoint([214.4431272,-211.3612027]).appendArc([215.7784962,-204.7992486],{"radius":5,"clockwise":false,"large":true}).appendPoint([213.7501076,-198.9083804]).appendPoint([209.4952739,-200.373437]).appendPoint([209.1697058,-199.4279185]).appendPoint([195.9324458,-203.9858727]).close().innerToCAG()
).union(
    new CSG.Path2D([[258.8981246,-217.2231327],[263.4560788,-203.9858727]]).appendPoint([250.2188188,-199.4279185]).appendPoint([249.8932507,-200.373437]).appendPoint([245.638417,-198.9083804]).appendPoint([243.6100284,-204.7992486]).appendArc([244.9453974,-211.3612027],{"radius":5,"clockwise":false,"large":true}).appendPoint([245.9864328,-211.7196599]).appendPoint([245.6608646,-212.6651785]).appendPoint([258.8981246,-217.2231327]).close().innerToCAG()
)).extrude({ offset: [0, 0, 3.1] });
}




                function middle_layer_stl_case_fn() {
                    

                // creating part 0 of case middle_layer_stl
                let middle_layer_stl__part_0 = middle_layer_extrude_3_1_outline_fn();

                // make sure that rotations are relative
                let middle_layer_stl__part_0_bounds = middle_layer_stl__part_0.getBounds();
                let middle_layer_stl__part_0_x = middle_layer_stl__part_0_bounds[0].x + (middle_layer_stl__part_0_bounds[1].x - middle_layer_stl__part_0_bounds[0].x) / 2
                let middle_layer_stl__part_0_y = middle_layer_stl__part_0_bounds[0].y + (middle_layer_stl__part_0_bounds[1].y - middle_layer_stl__part_0_bounds[0].y) / 2
                middle_layer_stl__part_0 = translate([-middle_layer_stl__part_0_x, -middle_layer_stl__part_0_y, 0], middle_layer_stl__part_0);
                middle_layer_stl__part_0 = rotate([0,0,0], middle_layer_stl__part_0);
                middle_layer_stl__part_0 = translate([middle_layer_stl__part_0_x, middle_layer_stl__part_0_y, 0], middle_layer_stl__part_0);

                middle_layer_stl__part_0 = translate([-207.5,135,0], middle_layer_stl__part_0);
                let result = middle_layer_stl__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return middle_layer_stl_case_fn();
            }

        