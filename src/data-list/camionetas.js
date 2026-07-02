// =========================
// LLANTAS DE CAMIONETA
// =========================
const camionetaProducts = [
  {
    id: 301,
    brand: "hankook",
    vehicleType: "camioneta",
    name: "Dynapro HP2",
    size: "265/50 R20",
    load: 775,
    speed: "240 Km/h",
    image:
      "/images/products/hankook/camioneta-hankook-dynapro-hp2-265-50-r20.webp",
  },
  {
    id: 302,
    brand: "bridgestone",
    vehicleType: "camioneta",
    name: "Dueler A/T 693",
    size: "235/75 R15",
    load: 1000,
    speed: "180 Km/h",
    image:
      "/images/products/bridgestone/camioneta-bridgestone-dueler-at-693-235-75-r15.webp",
  },
  {
    id: 303,
    brand: "bridgestone",
    vehicleType: "camioneta",
    name: "Dueler A/T 693",
    size: "205/70 R15",
    load: 710,
    speed: "180 Km/h",
    image:
      "/images/products/bridgestone/camioneta-bridgestone-dueler-at-693-205-70-r15.webp",
  },
  {
    id: 304,
    brand: "bridgestone",
    vehicleType: "camioneta",
    name: "Dueler A/T 693",
    size: "205/65 R15",
    load: 670,
    speed: "180 Km/h",
    image:
      "/images/products/bridgestone/camioneta-bridgestone-dueler-at-693-205-65-r15.webp",
  },
  {
    id: 305,
    brand: "bridgestone",
    vehicleType: "camioneta",
    name: "Dueler A/T 693 OWL",
    size: "215/80 R16",
    load: 975,
    speed: "180 Km/h",
    image:
      "/images/products/bridgestone/camioneta-bridgestone-dueler-at-693-owl-215-80-r16.webp",
  },
  {
    id: 306,
    brand: "bridgestone",
    vehicleType: "camioneta",
    name: "Dueler A/T 693 OWL",
    size: "215/80 R16",
    load: 975,
    speed: "180 Km/h",
    image:
      "/images/products/bridgestone/camioneta-bridgestone-dueler-at-693-owl-215-80-r16-2.webp",
  },
  {
    id: 307,
    brand: "bridgestone",
    vehicleType: "camioneta",
    name: "Dueler A/T 693",
    size: "265/70 R16",
    load: 1100,
    speed: "180 Km/h",
    image:
      "/images/products/bridgestone/camioneta-bridgestone-dueler-at-693-265-70-r16.webp",
  },
  {
    id: 308,
    brand: "bridgestone",
    vehicleType: "camioneta",
    name: "Dueler A/T 693",
    size: "245/70 R16",
    load: 975,
    speed: "180 Km/h",
    image:
      "/images/products/bridgestone/camioneta-bridgestone-dueler-at-693-245-70-r16.webp",
  },
  {
    id: 309,
    brand: "bridgestone",
    vehicleType: "camioneta",
    name: "Dueler H/T 684",
    size: "265/65 R17",
    load: 1120,
    speed: "180 Km/h",
    image:
      "/images/products/bridgestone/camioneta-bridgestone-dueler-ht-684-265-65-r17.webp",
  },
  {
    id: 310,
    brand: "bridgestone",
    vehicleType: "camioneta",
    name: "Dueler H/T 684",
    size: "245/70 R16",
    load: 975,
    speed: "180 Km/h",
    image:
      "/images/products/bridgestone/camioneta-bridgestone-dueler-ht-684-245-70-r16.webp",
  },
  {
    id: 311,
    brand: "bridgestone",
    vehicleType: "camioneta",
    name: "Dueler H/T 684",
    size: "205/70 R15",
    load: 690,
    speed: "180 Km/h",
    image:
      "/images/products/bridgestone/camioneta-bridgestone-dueler-ht-684-205-70-r15.webp",
  },
  {
    id: 312,
    brand: "bridgestone",
    vehicleType: "camioneta",
    name: "Dueler H/T 684",
    size: "215/70 R16",
    load: 775,
    speed: "210 Km/h",
    image:
      "/images/products/bridgestone/camioneta-bridgestone-dueler-ht-684-215-70-r16.webp",
  },
  {
    id: 313,
    brand: "bridgestone",
    vehicleType: "camioneta",
    name: "Dueler H/T 684",
    size: "235/60 R16",
    load: 900,
    speed: "210 Km/h",
    image:
      "/images/products/bridgestone/camioneta-bridgestone-dueler-ht-684-235-60-r16.webp",
  },
  {
    id: 314,
    brand: "bridgestone",
    vehicleType: "camioneta",
    name: "Dueler H/T 684",
    size: "265/70 R16",
    load: 1000,
    speed: "180 Km/h",
    image:
      "/images/products/bridgestone/camioneta-bridgestone-dueler-ht-684-265-70-r16.webp",
  },
  {
    id: 315,
    brand: "bridgestone",
    vehicleType: "camioneta",
    name: "Dueler H/T 684",
    size: "265/65 R17",
    load: 1120,
    speed: "180 Km/h",
    image:
      "/images/products/bridgestone/camioneta-bridgestone-dueler-ht-684-265-65-r17-2.webp",
  },
  {
    id: 316,
    brand: "bridgestone",
    vehicleType: "camioneta",
    name: "Dueler H/T 684",
    size: "275/65 R17",
    load: 1215,
    speed: "180 Km/h",
    image:
      "/images/products/bridgestone/camioneta-bridgestone-dueler-ht-684-275-65-r17.webp",
  },
  {
    id: 317,
    brand: "bridgestone",
    vehicleType: "camioneta",
    name: "Dueler H/T 684",
    size: "265/65 R17",
    load: 1120,
    speed: "210 Km/h",
    image:
      "/images/products/bridgestone/camioneta-bridgestone-dueler-ht-684-265-65-r17-3.webp",
  },
  {
    id: 318,
    brand: "bridgestone",
    vehicleType: "camioneta",
    name: "Dueler H/T 684",
    size: "265/60 R18",
    load: 1180,
    speed: "210 Km/h",
    image: "/images/products/bridgestone/pnpm",
  },
];

export default camionetaProducts;
