// MountingHole_2.2mm_M2_Pad_Via
// TODO add more sizes as param?
module.exports = {
    nets: {
        net: undefined
    },
    params: {
        class: 'HOLE',
    },
    body: p => `
    (module "MountingHole:MountingHole_3.2mm_M3_Pad_Via" (version 20210722) (generator pcbnew) (layer "F.Cu")
      (tedit 56DDB9C7)
      ${p.at /* parametric position */} 
    
      (fp_text reference "${p.ref}" (at 0 -3.2) (layer "F.SilkS") ${p.ref_hide} 
        (effects (font (size 1 1) (thickness 0.15)))
        (tstamp b68bb25c-687d-44b1-b966-dad4cac66b35)
      )
    
      (fp_circle (center 0 0) (end 3.2 0) (layer "Cmts.User") (width 0.15) (fill none) (tstamp 5c5eaa92-cce1-4c12-a008-9dfd9b3268d6))
      (fp_circle (center 0 0) (end 3.45 0) (layer "F.CrtYd") (width 0.05) (fill none) (tstamp 3519f70d-de14-4eb0-8f8b-c6152c800a0d))
      (pad "1" thru_hole circle (at 0 0) (size 6.4 6.4) (drill 3.2) (layers *.Cu *.Mask) (tstamp 3d8e7201-6ce5-4a8e-862f-faa744c79c67))
      (pad "1" thru_hole circle (at 0 -2.4) (size 0.8 0.8) (drill 0.5) (layers *.Cu *.Mask) (tstamp 65840528-ae86-4ed9-af78-7b21e0f683c8))
      (pad "1" thru_hole circle (at 1.697056 -1.697056) (size 0.8 0.8) (drill 0.5) (layers *.Cu *.Mask) (tstamp 79401260-2f1e-4ed0-ada7-f2b90f89f5c6))
      (pad "1" thru_hole circle (at -1.697056 1.697056) (size 0.8 0.8) (drill 0.5) (layers *.Cu *.Mask) (tstamp 84b0d34f-561e-4159-b869-09ac10a3659e))
      (pad "1" thru_hole circle (at 2.4 0) (size 0.8 0.8) (drill 0.5) (layers *.Cu *.Mask) (tstamp b64b9c63-ae51-42f0-ac58-38094e4e141c))
      (pad "1" thru_hole circle (at -2.4 0) (size 0.8 0.8) (drill 0.5) (layers *.Cu *.Mask) (tstamp bebef2ce-b901-44fd-84a6-49ad9d2cf651))
      (pad "1" thru_hole circle (at -1.697056 -1.697056) (size 0.8 0.8) (drill 0.5) (layers *.Cu *.Mask) (tstamp c579da56-4f9a-4f3d-b913-557f4d7be3b4))
      (pad "1" thru_hole circle (at 1.697056 1.697056) (size 0.8 0.8) (drill 0.5) (layers *.Cu *.Mask) (tstamp d4839c2b-a8ac-4cb1-92a9-e61030bbd675))
      (pad "1" thru_hole circle (at 0 2.4) (size 0.8 0.8) (drill 0.5) (layers *.Cu *.Mask) (tstamp ee38aec0-5beb-4800-bc27-4f11cb44b86c))
    )`
}