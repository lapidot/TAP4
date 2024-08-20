module.exports = {
    params: {
        designator: '0805',
        side: 'F',
        from: {type: 'net', value: 'from'},
        to: {type: 'net', value: 'to'}
    },
    body: p => `
        (module Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder (layer ${p.side}.Cu)
        ${'' /* footprint reference */}        
        (fp_text reference "JMP${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value Jumper (at 0 -7.3) (layer F.Fab) (effects (font (size 1 1) (thickness 0.15))))

            ${p.at /* parametric position */}

            (fp_line (start -0.227064 -0.735) (end 0.227064 -0.735) (layer "${p.side}.SilkS") (width 0.12) )
            (fp_line (start -0.227064 0.735) (end 0.227064 0.735) (layer "${p.side}.SilkS") (width 0.12) )
            (fp_line (start -1.85 0.95) (end 1.85 0.95) (layer "${p.side}.CrtYd") (width 0.05) )
            (fp_line (start -1.85 -0.95) (end -1.85 0.95) (layer "${p.side}.CrtYd") (width 0.05) )
            (fp_line (start 1.85 0.95) (end 1.85 -0.95) (layer "${p.side}.CrtYd") (width 0.05) )
            (fp_line (start 1.85 -0.95) (end -1.85 -0.95) (layer "${p.side}.CrtYd") (width 0.05) )
            (fp_line (start 1 -0.625) (end -1 -0.625) (layer "${p.side}.Fab") (width 0.1) )
            (fp_line (start 1 0.625) (end 1 -0.625) (layer "${p.side}.Fab") (width 0.1) )
            (fp_line (start -1 -0.625) (end -1 0.625) (layer "${p.side}.Fab") (width 0.1) )
            (fp_line (start -1 0.625) (end 1 0.625) (layer "${p.side}.Fab") (width 0.1) )
            (pad "1" smd roundrect (at -1 0 90) (size 1.2 1.4) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") ${p.from.str}(roundrect_rratio 0.208333))
            (pad "2" smd roundrect (at 1 0 90) (size 1.2 1.4) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask")${p.to.str} (roundrect_rratio 0.208333))
      )
    `
}
