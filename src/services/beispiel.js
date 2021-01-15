

export default {
    rollen: [
        {
            name: "Die Werwölfe",
            amount: 1,
            score: -1,
            enabled: true,
            template: `suchen zusammen mit den anderen Werwölfen jede Nacht ein Opfer aus.`,
            attitude: Attitude.EVIL
        },
        {
            name: "Der Seher",
            amount: 1,
            score: 2,
            template: "kann jede Nacht eine Person überprüfen, welche Gesinnung diese hat. Hierfür schreibt er /sie eine Privatnachricht an die Spielleitung, von welcher Person er / sie die Rolle erfahren möchte.",
            attitude: Attitude.GOOD
        },
    ]
}