module.exports = { //https://github.com/ergogen/ergogen/blob/930fd415bb7e98d91caa3046766992eceb31966c/src/footprints/diode.js
    // nets: {
    //     designator: 'D',
    //     from: undefined,
    //     to: undefined
    // },
    params: {
        class: 'D',
        designator: 'D',
        from: undefined,
        to: undefined,
    },
    body: p => `
    
    
    (module ComboDiode (layer F.Cu) (tedit 5B24D78E)


        ${p.at /* parametric position */}

        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
        
        ${''/* diode symbols */}
        (fp_line (start 0.25 0) (end 0.75 0) (layer F.SilkS) (width 0.1))
        (fp_line (start 0.25 0.4) (end -0.35 0) (layer F.SilkS) (width 0.1))
        (fp_line (start 0.25 -0.4) (end 0.25 0.4) (layer F.SilkS) (width 0.1))
        (fp_line (start -0.35 0) (end 0.25 -0.4) (layer F.SilkS) (width 0.1))
        (fp_line (start -0.55 0) (end -0.55 0.65) (layer F.SilkS) (width 0.3))
        (fp_line (start -0.55 0) (end -0.55 -0.65) (layer F.SilkS) (width 0.3))
        (fp_line (start -0.75 0) (end -0.35 0) (layer F.SilkS) (width 0.1))
        (fp_line (start 0.25 0) (end 0.75 0) (layer B.SilkS) (width 0.1))
        (fp_line (start 0.25 0.4) (end -0.35 0) (layer B.SilkS) (width 0.1))
        (fp_line (start 0.25 -0.4) (end 0.25 0.4) (layer B.SilkS) (width 0.1))
        (fp_line (start -0.35 0) (end 0.25 -0.4) (layer B.SilkS) (width 0.1))
        (fp_line (start -0.55 0) (end -0.55 0.65) (layer B.SilkS) (width 0.3))
        (fp_line (start -0.55 0) (end -0.55 -0.65) (layer B.SilkS) (width 0.3))
        (fp_line (start -0.75 0) (end -0.35 0) (layer B.SilkS) (width 0.1))
    
        ${''/* SMD pads on both sides */}
        (pad 1 smd rect (at -1.85 0 ${p.rot}) (size 1.3 1.4) (layers F.Cu F.Paste F.Mask) ${p.to.str})
        (pad 2 smd rect (at 1.85 0 ${p.rot}) (size 1.3 1.4) (layers B.Cu B.Paste B.Mask) ${p.from.str})
        (pad 1 smd rect (at -1.85 0 ${p.rot}) (size 1.3 1.4) (layers B.Cu B.Paste B.Mask) ${p.to.str})
        (pad 2 smd rect (at 1.85 0 ${p.rot}) (size 1.3 1.4) (layers F.Cu F.Paste F.Mask) ${p.from.str})

        ${''/* THT terminals */}
        (pad 1 thru_hole rect (at -3.81 0 ${p.rot}) (size 1.778 1.778) (drill 0.9906) (layers *.Cu *.Mask) ${p.to.str})
        (pad 2 thru_hole circle (at 3.81 0 ${p.rot}) (size 1.905 1.905) (drill 0.9906) (layers *.Cu *.Mask) ${p.from.str})

        ${''/* connect THT and pads */}
        (fp_line (start 3.81 0) (end 2.1 0) (layer F.Cu) (width 0.25))
        (fp_line (start 3.81 0) (end 2.1 0) (layer B.Cu) (width 0.25))
        (fp_line (start -3.81 0) (end -2.1 0) (layer F.Cu) (width 0.25))
        (fp_line (start -3.81 0) (end -2.1 0) (layer B.Cu) (width 0.25))
    )
    `
}
