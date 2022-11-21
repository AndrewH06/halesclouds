export const clouds = {
  high: {
    cirrocumulus: {
      images: [
        "https://www.weather.gov/images/jetstream/clouds/h9_1.jpg",
        "https://whatsthiscloud.com/wp-content/uploads/2019/03/cirrocumulus-stratiformis-undulatus.jpg",
        "https://whatsthiscloud.com/wp-content/uploads/2018/03/cirrocumulus-stratiformis-undulatus-lacunosus-1040x585.jpg",
        "https://whatsthiscloud.com/wp-content/uploads/2018/03/cirrocumulus-floccus-1040x585.jpg",
        "https://whatsthiscloud.com/wp-content/uploads/2018/03/cirrocumulus-undulatus-1040x585.jpg",
        "https://pixy.org/download/442400/",
      ],
      description:
        "Cirrocumulus clouds are thin cloud patches found high in the sky. They are the most rare out of the 10 main cloud types. Cirrocumulus often come with cirrus and cirrostratus clouds nearby. These clouds reflect sunsets beautifully.",
      formation:
        "They are made of ice and supercooled water. They form when turbulent vertical air currents meet cirrus clouds which creates the puffy shape.",
      indicates: "These clouds usually come before stormy and cloudy weather.",
      precipitation: 1,
      rarity: 2,
    },
    cirrostratus: {
      images: [
        "https://www.weather.gov/images/jetstream/clouds/h6_1.jpg",
        "https://www.weather.gov/images/jetstream/clouds/h7_4.jpg",
        "https://www.weather.gov/images/jetstream/clouds/h8_2.jpg",
        "https://whatsthiscloud.com/wp-content/uploads/2018/03/cirrostratus-fibratus-undulatus-halo-1040x585.jpg",
        "https://whatsthiscloud.com/wp-content/uploads/2018/03/cirrostratus-fibratus-halo-1040x585.jpg",
        "https://whatsthiscloud.com/wp-content/uploads/2018/03/cirrostratus-2-1040x585.jpg",
      ],
      description:
        "Cirrostratus clouds are thin cloud blankets that cover the sky. Because they are composed of ice crystals, they can create halos around the sun and moon. Cirrostratus clouds are moon. They are thinner than altostratus, their mid level counterpart.",
      formation:
        "They are a result of slowly rising air. Because they form at the forefront of frontal weather systems, they are often are used to predict the weather.",
      indicates:
        "Cirrostratus nebulosus indicates a likely warm front brining rain and cirrostratus fibratus indicates likely drizzles.",
      precipitation: 0,
      rarity: 1,
    },
    cirrus: {
      images: [
        "https://www.weather.gov/images/jetstream/clouds/h1_1.jpg",
        "https://www.weather.gov/images/jetstream/clouds/h2_3.jpg",
        "https://www.weather.gov/images/jetstream/clouds/h4_1.jpg",
        "https://whatsthiscloud.com/wp-content/uploads/2018/07/cirrus-floccus-radiatus-1040x585.jpg",
        "https://whatsthiscloud.com/wp-content/uploads/2018/03/cirrus-spissatus-1040x585.jpg",
        "https://whatsthiscloud.com/wp-content/uploads/2018/03/cirrus-uncinus-1040x585.jpg",
      ],
      description:
        "These clouds are made of ice crystals so they are very thin and wispy. They are the highest clouds in the sky and are often seen at the edge of storms. They are the most common cloud type.",
      formation: "When air masses meet at high levels, advancing a warm front.",
      indicates: "A change in weather is on it's way.",
      precipitation: 0,
      rarity: 0,
    },
  },
  mid: {
    altocumulus: {
      images: [
        "https://www.weather.gov/images/jetstream/clouds/m3_1.jpg",
        "https://www.weather.gov/images/jetstream/clouds/m5_2.jpg",
        "https://www.weather.gov/images/jetstream/clouds/m7_2.jpg",
        "https://www.weather.gov/images/jetstream/clouds/m8_6.jpg",
        "https://www.weather.gov/images/jetstream/clouds/m9_3.jpg",
        "https://whatsthiscloud.com/wp-content/uploads/2018/03/altocumulus-floccus-1040x585.jpg",
        "https://whatsthiscloud.com/wp-content/uploads/2019/03/altocumulus-sunset.jpg",
      ],
      description:
        "Altocumulus clouds are clumped together. They are very diverse in shape and size. They can be differentiated from cirrocumulus by the shaded sides they have.",
      formation:
        "These clouds can be formed in three ways: These can formed by broken up altostatus clouds, mountains creating waves for clouds form, or by rising air pockets cooled by turbulence.",
      indicates:
        "These clouds form in settled weather and are usually a sign of fair weather.",
      precipitation: 1,
      rarity: 0,
    },
    altostratus: {
      images: [
        "https://www.weather.gov/images/jetstream/clouds/m1_1.jpg",
        "https://www.weather.gov/images/jetstream/clouds/m2_3.jpg",
        "https://whatsthiscloud.com/wp-content/uploads/2018/03/altostratus-opacus-1040x585.jpg",
        "https://whatsthiscloud.com/wp-content/uploads/2018/03/altostratus-translucidus-1040x585.jpg",
      ],
      description:
        "These clouds are pretty boring to look at. They are gray and cover the sky.",
      formation:
        "Altostratus form from cirrostratus clouds descending to a lower level.",
      indicates:
        "These clouds indicate a change in weather. They are usually followed by a warm front creating rain or snow.",
      precipitation: 2,
      rarity: 1,
    },
    nimbostratus: {
      images: [
        "https://www.weather.gov/images/jetstream/clouds/m2_3.jpg",
        "https://whatsthiscloud.com/wp-content/uploads/2019/03/nimbostratus.jpg",
        "https://whatsthiscloud.com/wp-content/uploads/2018/03/nimbostratus-praecipitatio-pannus-1040x585.jpg",
      ],
      description:
        "Nimbostratus clouds are commonly associated with a gloomy, rainy day. These clouds actually live in multiple levels of the sky but commonly are classified as mid level. They give off a dark gray color for its thickness.",
      formation:
        "Altostratus clouds, formed from warm fronts, can thicken and produce nimbostratus clouds.",
      indicates: "Rainy and snowy conditions for potentially several hours.",
      precipitation: 4,
      rarity: 1,
    },
  },
  low: {
    cumulonimbus: {
      images: [
        "https://www.weather.gov/images/jetstream/clouds/l3_4.jpg",
        "https://whatsthiscloud.com/wp-content/uploads/2018/03/cumulonimbus-murus-praecipitatio-1040x585.jpg",
        "https://whatsthiscloud.com/wp-content/uploads/2018/03/cumulonimbus-incus.jpg",
        "https://whatsthiscloud.com/wp-content/uploads/2018/03/cumulonimbus-capillatus-incus-1040x585.jpg",
      ],
      description:
        "Cumulonimbus clouds are the most dramatic clouds in the sky; sometimes they look like menacing castles looming over the earth. They are responsible for storms like hail, thunder, and lightning. They span all levels of the sky.",
      formation:
        "Cumulonimbus clouds are born from convection, the process of warm air rising as it becomes less dense than cooler air. A smaller cumulus clouds will grow in cold fronts causing large masses of hot air to rise.",
      indicates:
        "Extreme weather is on its way. These clouds bring rain, hail, lightning, and sometimes tornadoes. Small collections of them commonly release short heavy showers before dissipating.",
      precipitation: 3,
      rarity: 2,
    },
    cumulus: {
      images: [
        "https://whatsthiscloud.com/wp-content/uploads/2018/03/cumulus-mediocris-1040x585.jpg",
        "https://www.weather.gov/images/jetstream/clouds/l2_4.jpg",
        "https://whatsthiscloud.com/wp-content/uploads/2018/03/cumulus-2-1040x585.jpg",
        "https://whatsthiscloud.com/wp-content/uploads/2018/03/cumulus-fractus-1040x585.jpg",
        "https://whatsthiscloud.com/wp-content/uploads/2018/03/cumulus-congestus-1040x585.jpg",
      ],
      description:
        "Cumulus clouds are the clouds from the cartoons, the classic puffy white clouds. They come in all sizes big and small",
      formation:
        "All cumulus clouds are born from convection, the process of warm air rising as it becomes less dense than cooler air.",
      indicates:
        "Mainly cumulus clouds indicate fair weather, unless they grow into cumulonimbus clouds.",
      precipitation: 2,
      rarity: 0,
    },
    stratocumulus: {
      images: [
        "https://whatsthiscloud.com/wp-content/uploads/2019/03/stratocumulus-sunset.jpg",
        "https://www.weather.gov/images/jetstream/clouds/l4_2.jpg",
        "https://www.weather.gov/images/jetstream/clouds/l5_1.jpg",
        "https://whatsthiscloud.com/wp-content/uploads/2018/03/stratocumulus-floccus-1040x585.jpg",
        "https://whatsthiscloud.com/wp-content/uploads/2018/03/stratocumulus-1040x585.jpg",
        "https://whatsthiscloud.com/wp-content/uploads/2018/03/stratocumulus-floccus-1-1040x585.jpg",
        "https://whatsthiscloud.com/wp-content/uploads/2018/03/stratocumulus-castellanus-1040x585.jpg",
      ],
      description:
        "These clouds could are basically just stratus and cumulus mixed. They a similar to altocumulus but more dense and lower in the sky.",
      formation:
        "Stratocumulus are formed from a stratus cloud breaking up. They usually form from a warm or cold front.",
      indicates:
        "These clouds indicate a change in weather. They can be present in any weather condition in association with other cloud types.",
      precipitation: 2,
      rarity: 0,
    },
    stratus: {
      images: [
        "https://www.weather.gov/images/jetstream/clouds/l6_1.jpg",
        "https://whatsthiscloud.com/wp-content/uploads/2018/03/stratus-nebulosus-opacus-1040x585.jpg",
        "https://www.weather.gov/images/jetstream/clouds/l7_1.jpg",
      ],
      description:
        "These clouds bring cloudy and gloomy days. They blanket the sky but stay close to the ground. Sometimes these clouds are low enough and become fog.",
      formation: "Stratus clouds form in calm and moist conditions.",
      indicates: "They can produce a light drizzle if they are thick enough.",
      precipitation: 2,
      rarity: 1,
    },
  },
};
