module.exports = {
    params: {
        designator: 'LEDBreakout',
        side: 'F',
        GND: {type: 'net', value: 'GND'},
        Data: undefined,
        VCC: {type: 'net', value: 'VCC'}
    },
    body: p => `
        (module lib:OLED_headers (layer F.Cu) (tedit 5E1ADAC2)
        ${p.at /* parametric position */} 

        ${'' /* footprint reference */}        
        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value LEDBreakout (at 0 -7.3) (layer F.Fab) (effects (font (size 1 1) (thickness 0.15))))

        ${'' /* pins */}
        (pad 4 thru_hole oval (at 1.6 2.18 ${p.r+270}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask)
        ${p.Data})
        (pad 3 thru_hole oval (at 1.6 4.72 ${p.r+270}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask)
        ${p.VCC})
        (pad 2 thru_hole oval (at 1.6 7.26 ${p.r+270}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask)
        ${p.Data})
        (pad 1 thru_hole rect (at 1.6 9.8 ${p.r+270}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask)
        ${p.GND})
        )
        `
}