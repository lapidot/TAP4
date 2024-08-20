module.exports = {
  params: {
    designator: 'TRACKPAD',
    orientation: 'down',
  },
  body: p => {
    const standard = `
      (module Azoteq-TPS45 (layer F.Cu) (tedit 5B95C1BF)
        (attr smd)
        ${p.at /* parametric position */}
        (fp_rect (start -43.434 0) (end 0 40.386) (layer "B.SilkS") (width 0.3))

        ${'' /* footprint reference */}
        (fp_text reference "AZO${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
      )
        `
    function pins(def_neg, def_pos) {
      return `
      `
    }
    if(p.orientation == 'down') {
      return `
        ${standard}
        `
    } else {
      return `
        ${standard}
        `
    }
  }
}
