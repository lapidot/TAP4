module.exports = {
    params: {
        designator: 'TRACKPAD',
        T1: {type: 'net', value: 'T1'},
        T2: {type: 'net', value: 'T2'},
        T3: {type: 'net', value: 'T3'},
        T4: {type: 'net', value: 'T4'},
        T5: {type: 'net', value: 'T5'},
        T6: {type: 'net', value: 'T6'},
    },
    body: p => {
        return `
        (module pinheaders (layer F.Cu) (tedit 5B24D78E)
          (tedit 628CE864) (tstamp 1efff5fe-2b01-4e4c-b5f2-aa0ee4dd6ea7)
          (descr "Through hole straight pin header, 1x06, 2.54mm pitch, single row")
          (tags "Through hole pin header THT 1x06 2.54mm single row")
          (attr through_hole)

          ${'' /* footprint reference */}
          (fp_text reference "Pinheaders${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
          (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

          ${p.at /* parametric position */}
          (fp_line (start -1.33 1.27) (end -1.33 14.03) (layer "F.SilkS") (width 0.12) (tstamp 2746b2ae-eb31-4d3f-afe9-32f1e2563364))
          (fp_line (start -1.33 14.03) (end 1.33 14.03) (layer "F.SilkS") (width 0.12) (tstamp 33ce72ee-2965-496c-98e0-17915c598537))
          (fp_line (start 1.33 1.27) (end 1.33 14.03) (layer "F.SilkS") (width 0.12) (tstamp 762e07d4-6e2a-4cb0-b700-3a641ba1bad8))
          (fp_line (start -1.33 -1.33) (end 0 -1.33) (layer "F.SilkS") (width 0.12) (tstamp a940f756-d9b7-49c2-a65c-83d9d3e46b52))
          (fp_line (start -1.33 0) (end -1.33 -1.33) (layer "F.SilkS") (width 0.12) (tstamp d04aec00-a3ea-41d9-a87f-5ed1a97c7337))
          (fp_line (start -1.33 1.27) (end 1.33 1.27) (layer "F.SilkS") (width 0.12) (tstamp d3e3642d-1145-4b6e-915a-fb984ef75069))
          (fp_line (start -1.8 14.5) (end 1.8 14.5) (layer "F.CrtYd") (width 0.05) (tstamp 26f11447-92af-4470-b49a-0a17b3be3570))
          (fp_line (start -1.8 -1.8) (end -1.8 14.5) (layer "F.CrtYd") (width 0.05) (tstamp 462f5d2a-6082-4714-b830-891d04e4fa8e))
          (fp_line (start 1.8 14.5) (end 1.8 -1.8) (layer "F.CrtYd") (width 0.05) (tstamp 4a7bb838-81b8-4ef1-ae9a-befd41b84865))
          (fp_line (start 1.8 -1.8) (end -1.8 -1.8) (layer "F.CrtYd") (width 0.05) (tstamp dca55029-964a-411b-a99f-e45f89b1ab65))
          (fp_line (start 1.27 13.97) (end -1.27 13.97) (layer "F.Fab") (width 0.1) (tstamp 05743b8c-61f6-4e0c-8eed-bf5ff5f84cd2))
          (fp_line (start -1.27 13.97) (end -1.27 -0.635) (layer "F.Fab") (width 0.1) (tstamp 0c241ac7-c917-4dac-99de-1f20b8b91153))
          (fp_line (start -0.635 -1.27) (end 1.27 -1.27) (layer "F.Fab") (width 0.1) (tstamp 23ad5dbc-49e1-43c1-b524-969bfa71ba08))
          (fp_line (start 1.27 -1.27) (end 1.27 13.97) (layer "F.Fab") (width 0.1) (tstamp 5ee02430-b4e9-4c5e-bfd0-dd78add153e5))
          (fp_line (start -1.27 -0.635) (end -0.635 -1.27) (layer "F.Fab") (width 0.1) (tstamp dedffea1-b276-445e-b5d0-fa9077226ea4))
          (pad "1" thru_hole rect locked (at 0 0 180) (size 1.7 1.7) (drill 1) (layers F&B.Cu *.Mask) ${p.T1.str})
          (pad "2" thru_hole oval locked (at 0 2.54 180) (size 1.7 1.7) (drill 1) (layers F&B.Cu *.Mask) ${p.T2.str})
          (pad "3" thru_hole oval locked (at 0 5.08 180) (size 1.7 1.7) (drill 1) (layers F&B.Cu *.Mask)${p.T3.str})
          (pad "4" thru_hole oval locked (at 0 7.62 180) (size 1.7 1.7) (drill 1) (layers F&B.Cu *.Mask)${p.T4.str})
          (pad "5" thru_hole oval locked (at 0 10.16) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.T5.str})
          (pad "6" thru_hole oval locked (at 0 12.7) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.T6.str})
          )
        `
    }
}
