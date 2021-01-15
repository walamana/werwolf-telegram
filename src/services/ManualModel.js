

export class Manual {

    version = 1

    einfuerung = {
    }

    zeiten = {
        zeit_beginn_nacht1: "20:00",
        zeit_ende_rollen_nacht1: "22:00",
        zeit_ende_rollen_nacht2: "08:50",
        zeit_beginn_nacht2: "00:00",
        zeit_beginn_tag: "09:00",
        zeit_beginn_plaedoyer_klaeger: "18:00",
        zeit_beginn_plaedoyer_angeklagte: "18:15",
        zeit_beginn_abstimmung: "18:30",
        zeit_ende_abstimmung: "20:00",
    }

    grundlegende_regeln = {
        reden_ausserhalb_des_spiels: false,
        eindeutige_beweise: true,
    }

    justiz = {
        unschuldsvermutung: true,
        geteiltes_plaedoyer: true,
    }

    rollen = {
        rollenuebersicht: true,
        rollenuebersicht_amount: true,
        aktiviert: [],
        buergermeister: {
            aktiv: true,
            stimme: "1.5",
            neuwahl: 1, // 0: Keine Neuwahl, 1: Durch das Volk, 2: Durch den Bürgermeister
            // TODO: ...
        }
    }

    spielgruppen = {
        dorfgemeinde: {
            nachtaktiv: true,
        },
        werwolf_gruppe: true,
        jaeger_gruppe: {
            aktiv: false,
            tagaktiv: true,
            siegesbedingung: false
        },
        liebespaar_gruppe: {
            aktiv: false,
            tagaktiv: true
        },
        gute_geister: {
            aktiv: true,
            kommunizieren: 1,
            aufdecken: 2,
            raten: 0,
        },
        boese_geister: {
            aktiv: true,
            kommunizieren: 1,
            aufdecken: 0,
            raten: 0
        }
    }

    apply(man){
        this.rollen.aktiviert.splice(0, this.rollen.aktiviert.length)
        function applyTo(from, to){
            for(let key in from){
                if(to[key] !== undefined){
                    if(typeof to[key] === "object"){
                        if(Object.keys(from[key]).length > 0 && from[key][0] !== undefined){
                            for(let entry of from[key]){
                                to[key].push(entry)
                            }
                        }else{
                            applyTo(from[key], to[key])
                        }
                    }else{
                        to[key] = from[key]
                    }
                }
            }
        }
        applyTo(man, this)
    }
}
