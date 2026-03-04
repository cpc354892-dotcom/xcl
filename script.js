// Main List (1-25 with points)
const mainLevels = [
    {
        number: 1,
        name: "Xalval Iks",
        id: "134658490",
        points: 1000,
        verifiedBy: "Nikabri",
        victors: []
    },
    {
        number: 2,
        name: "Xalval Na Stroyke",
        id: "134486111",
        points: 600,
        verifiedBy: "Azura",
        victors: ["#1 Florned"]
    },
    {
        number: 3,
        name: "Xalval Lavlax",
        id: "gdshare in tg",
        points: 400,
        verifiedBy: "Aproudy",
        victors: ["#1 Florned"]
    },
    {
        number: 4,
        name: "Xalval Balencisoulja",
        id: "134491014",
        points: 360,
        verifiedBy: "Florned",
        victors: []
    },
    {
        number: 5,
        name: "Xalval Obosral Deda",
        id: "134543751",
        points: 320,
        verifiedBy: "Azura",
        victors: ["#1 Florned"]
    },
    {
        number: 6,
        name: "Xalval Puzatiy",
        id: "133932027",
        points: 280,
        verifiedBy: "Florned",
        victors: []
    },
    {
        number: 7,
        name: "Xalval Dance",
        id: "134753156",
        points: 200,
        verifiedBy: "Azura",
        victors: []
    },
    {
        number: 8,
        name: "Xalval Igrok",
        id: "134004493",
        points: 120,
        verifiedBy: "Azura",
        victors: ["#1 Florned"]
    },
    {
        number: 9,
        name: "Xalval OKAK",
        id: "134361078",
        points: 75,
        verifiedBy: "Nikabri",
        victors: ["#1 Aproudy", "#2 Florned"]
    },
    {
        number: 10,
        name: "Xalval Phonk",
        id: "134671910",
        points: 65,
        verifiedBy: "Azura",
        victors: []
    },
    {
        number: 11,
        name: "Xalval Petushara",
        id: "133871529",
        points: 55,
        verifiedBy: "Azura",
        victors: ["#1 Florned", "#2 Dvleakkk", "#3 Xalval"]
    },
    {
        number: 12,
        name: "Xalval Na Kladbishe",
        id: "134567791",
        points: 45,
        verifiedBy: "Azura",
        victors: ["#1 Florned", "#2 Doctor Strang"]
    },
    {
        number: 13,
        name: "Xalval Xuyval",
        id: "134280207",
        points: 35,
        verifiedBy: "Ster3o",
        victors: ["#1 Azura", "#2 Florned", "#3 Xalval"]
    },
    {
        number: 14,
        name: "Xalval Tolstiy",
        id: "134542742",
        points: 25,
        verifiedBy: "Azura",
        victors: ["#1 Xalval", "#2 Florned"]
    },
    {
        number: 15,
        name: "Better Call Xalval",
        id: "133957384",
        points: 15,
        verifiedBy: "Dvleakkk",
        victors: ["#1 Azura", "#2 TimsTeam", "#3 Florned", "#4 Xalval"]
    },
    {
        number: 16,
        name: "Xalval 67",
        id: "134357062",
        points: 5,
        verifiedBy: "Azura",
        victors: ["#1 Nikabri", "#2 Florned", "#3 Xalval"]
    },
    {
        number: 17,
        name: "Xalval Pisya",
        id: "133934075",
        points: 4.6,
        verifiedBy: "Florned",
        victors: []
    },
    {
        number: 18,
        name: "4th Second Xalval",
        id: "134200966",
        points: 4.2,
        verifiedBy: "Azura",
        victors: ["#1 Florned", "#2 Sp1rtzy", "#4 Doctor Strang"]
    },
    {
        number: 19,
        name: "Xalval Navalniy",
        id: "133935971",
        points: 3.8,
        verifiedBy: "Florned",
        victors: ["#1 Artleb", "#2 Xalval", "#3 Aproudy", "#4 Doctor Strang", "#5 Dvleakkk"]
    },
    {
        number: 20,
        name: "Xalval Femboy",
        id: "134539221",
        points: 3.4,
        verifiedBy: "Azura",
        victors: ["#1 эйфория", "#2 Xalval", "#3 Dvleakkk", "#4 Aproudy", "#5 Florned", "#6 Doctor Strang"]
    },
    {
        number: 21,
        name: "Xalval JDFLAG",
        id: "134276235",
        points: 3,
        verifiedBy: "Florned",
        victors: ["#1 Azura", "#2 Artleb", "#3 Xalv", "#4 Aproudy"]
    },
    {
        number: 22,
        name: "Xalval Swing",
        id: "134203403",
        points: 2.6,
        verifiedBy: "Azura",
        victors: ["#1 Florned", "#2 Aproudy"]
    },
    {
        number: 23,
        name: "Xalval Beastars",
        id: "134279156",
        points: 2.2,
        verifiedBy: "Florned",
        victors: ["#1 Artleb", "#2 Dvleakkk", "#3 Aproudy"]
    },
    {
        number: 24,
        name: "Xalval Ebal Osla",
        id: "133877119",
        points: 1.8,
        verifiedBy: "Azura",
        victors: ["#1 Dvleakkk", "#2 Florned"]
    },
    {
        number: 25,
        name: "Xalval Petuh228",
        id: "133798148",
        points: 1.4,
        verifiedBy: "Artleb",
        victors: ["#1 Azura", "#2 Dvleakkk", "#3 Ster3o", "#4 Florned", "#5 Aproudy"]
    }
];

// Legacy List (26-30, no points)
const legacyLevels = [
    {
        number: 26,
        name: "Xalval Skrutchik",
        id: "133869933",
        verifiedBy: "Azura",
        victors: ["#1 Dvleakkk", "#2 Atleb", "#3 Florned", "#4 Sp1rtzy", "#5 Aproudy"]
    },
    {
        number: 27,
        name: "Xalval Baobab",
        id: "134283179",
        verifiedBy: "Azura",
        victors: ["#1 Ster3o", "#2 Florned", "#3 Dvleakkk", "#4 Sp1rtzy", "#5 Aproudy"]
    },
    {
        number: 28,
        name: "Xalval Ubil Baty",
        id: "133872859",
        verifiedBy: "Azura",
        victors: ["#1 Dvleakkk", "#2 Florned", "#3 Aproudy"]
    },
    {
        number: 29,
        name: "Xalval Sosal",
        id: "133874090",
        verifiedBy: "Artleb",
        victors: ["#1 Azura", "#2 Dvleakkk", "#3 Florned", "#4 эйфория", "#5 Sp1rtzy"]
    },
    {
        number: 30,
        name: "Xalval El Kal",
        id: "133934482",
        verifiedBy: "Artleb",
        victors: ["#1 Azura", "#2 Florned", "#3 Dvleakkk", "#4 эйфория", "#5 Sp1rtzy"]
    }
];

// Petuh Pack
const packLevels = [
    {
        number: "P1",
        name: "Xalval Petuh228",
        id: "133798148",
        verifiedBy: "Artleb",
        victors: ["#1 Azura", "#2 Dvleakkk", "#3 Ster3o", "#4 Florned", "#5 Aproudy"]
    },
    {
        number: "P2",
        name: "Xalval Petushara",
        id: "133871529",
        verifiedBy: "Azura",
        victors: ["#1 Florned", "#2 Dvleakkk", "#3 Xalval"]
    }
];

// Leaderboard
const leaderboardData = [
    { player: "Florned", points: 2362, hardest: "Xalval Na Stroyke" },
    { player: "Azura", points: 1501.4, hardest: "Xalval Na Stroyke" },
    { player: "Nikabri", points: 1080, hardest: "Xalval Iks" },
    { player: "Aproudy", points: 491.4, hardest: "Xalval Lavlax" },
    { player: "Xalval", points: 145.2, hardest: "Xalval Petushara" },
    { player: "Dvleakkk", points: 78.8, hardest: "Xalval Petushara" },
    { player: "Ster3o", points: 36.4, hardest: "Xalval Xuyval" },
    { player: "TimsTeam", points: 15, hardest: "Better Call Xalval" },
    { player: "Artleb", points: 11.4, hardest: "Xalval Navalniy" },
    { player: "Doctor Strang", points: 10.4, hardest: "4th Second Xalval" },
    { player: "Sp1rtzy", points: 4.2, hardest: "4th Second Xalval" },
    { player: "эйфория", points: 3.4, hardest: "Xalval Femboy" }
];

// All levels combined for dropdowns
const allLevels = [
    ...mainLevels.map(l => ({ name: l.name, id: l.id })),
    ...legacyLevels.map(l => ({ name: l.name, id: l.id })),
    ...packLevels.map(l => ({ name: l.name, id: l.id }))
];
