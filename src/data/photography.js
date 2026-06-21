// Photography entries. `category` and `album` are unused today but kept on
// each entry so the Photography page can later group by them without a
// schema change — see future_support in the brief (albums, travel collections).

export const photography = [
  {
    id: "ph-01",
    title: "Morning Light, Campus Walk",
    category: "Street",
    album: null,
    orientation: "portrait",
    tone: "warm",
  },
  {
    id: "ph-02",
    title: "Concrete and Sky",
    category: "Architecture",
    album: null,
    orientation: "landscape",
    tone: "cool",
  },
  {
    id: "ph-03",
    title: "Reading Room, Late Afternoon",
    category: "Interiors",
    album: null,
    orientation: "portrait",
    tone: "warm",
  },
  {
    id: "ph-04",
    title: "Transit, Blue Hour",
    category: "Street",
    album: null,
    orientation: "landscape",
    tone: "cool",
  },
  {
    id: "ph-05",
    title: "Study in Shadow",
    category: "Portrait",
    album: null,
    orientation: "portrait",
    tone: "mono",
  },
  {
    id: "ph-06",
    title: "Rooftops, West Side",
    category: "Architecture",
    album: null,
    orientation: "landscape",
    tone: "warm",
  },
];

export const photographyPreview = photography.slice(0, 6);
