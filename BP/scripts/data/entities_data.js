const entity_data = [
  {
    id: "dbe:android_17",
    is_android: true,
    advanced_combat: true,
    race: "human",
    entity_definitions: {
      ki_color: "yellow",
      skills: [
        "aura_boost",
        "ki_blast",
        "rapid_movement"
      ]
    }
  },
  {
    id: "dbe:android_18",
    is_android: true,
    advanced_combat: true,
    race: "human",
    entity_definitions: {
      ki_color: "yellow",
      skills: [
        "aura_boost",
        "ki_blast",
        "rapid_movement"
      ]
    }
  },
  {
    id: "dbe:android_19",
    is_android: true,
    advanced_combat: true,
    race: "human",
    scale: 1.1,
    entity_definitions: {
      ki_color: "yellow",
      skills: [
        "aura_boost",
        "ki_blast",
        "rapid_movement"
      ]
    }
  },
  {
    id: "dbe:android_20",
    is_android: true,
    advanced_combat: true,
    race: "human",
    entity_definitions: {
      ki_color: "yellow",
      skills: [
        "aura_boost",
        "ki_blast",
        "rapid_movement"
      ]
    }
  },
  {
    id: "dbe:battle_jacket",
    advanced_combat: true,
    entity_definitions: {
      attributes: {
        total: 40,
        focus: {
          constitution: 1,
          dexterity: 1,
          spirit: 1,
          strength: 1
        }
      }
    }
  },
  {
    id: "dbe:beerus_enemy",
    advanced_combat: true,
    entity_definitions: {
      ki_color: "purple",
      skills: [
        "aura_boost",
        "ki_blast",
        "rapid_movement"
      ]
    }
  },
  {
    id: "dbe:burter",
    advanced_combat: true,
    entity_definitions: {
      ki_color: "red",
      skills: [
        "aura_boost",
        "ki_blast",
        "rapid_movement"
      ]
    }
  },
  {
    id: "dbe:botamo",
    advanced_combat: true,
    entity_definitions: {
      ki_color: "green",
      skills: [
        "aura_boost"
      ]
    }
  },
  {
    id: "dbe:cabba",
    advanced_combat: true,
    race: "saiyan",
    scale: 0.85,
    entity_definitions: {
      skills: [
        "aura_boost",
        "rapid_movement"
      ]
    }
  },
  {
    id: "dbe:cell",
    advanced_combat: true,
    race: "bio_android",
    entity_definitions: {
      skills: [
        "aura_boost",
        "kamehameha",
        "ki_blast",
        "rapid_movement"
      ]
    }
  },
  {
    id: "dbe:cell_junior",
    advanced_combat: true,
    race: "bio_android",
    scale: 0.9,
    entity_definitions: {
      skills: [
        "aura_boost",
        "ki_blast",
        "rapid_movement"
      ]
    }
  },
  {
    id: "dbe:cui",
    advanced_combat: true,
    entity_definitions: {
      ki_color: "purple",
      skills: [
        "aura_boost",
        "ki_blast",
        "rapid_movement"
      ]
    }
  },
  {
    id: "dbe:dabura",
    advanced_combat: true,
    entity_definitions: {
      ki_color: "red",
      skills: [
        "aura_boost",
        "ki_blast",
        "rapid_movement"
      ]
    }
  },
  {
    id: "dbe:deer",
    advanced_combat: false,
    entity_definitions: {
      attributes: {
        total: 5,
        focus: {
          constitution: 1,
          dexterity: 1,
          spirit: 0,
          strength: 1
        }
      }
    }
  },
  {
    id: "dbe:dinosaur",
    advanced_combat: false,
    entity_definitions: {
      attributes: {
        total: 30,
        focus: {
          constitution: 2,
          dexterity: 1,
          spirit: 0,
          strength: 2
        }
      }
    }
  },
  {
    id: "dbe:dodoria",
    advanced_combat: true,
    entity_definitions: {
      ki_color: "yellow",
      skills: [
        "aura_boost",
        "ki_blast",
        "rapid_movement"
      ]
    }
  },
  {
    id: "dbe:fat_buu",
    advanced_combat: true,
    race: "majin",
    scale: 1.3,
    entity_definitions: {
      ki_color: "pink",
      skills: [
        "aura_boost",
        "ki_blast",
        "rapid_movement"
      ]
    }
  },
  {
    id: "dbe:frieza",
    advanced_combat: true,
    race: "frost_demon",
    entity_definitions: {
      ki_color: "purple",
      skills: [
        "aura_boost",
        "ki_blast",
        "rapid_movement"
      ]
    },
    transformations: [
      {
        id: "mecha_frieza",
        modifiers: {
          constitution: 1,
          dexterity: 1,
          ki_consume: 0,
          size: 1,
          spirit: 1,
          strength: 1
        }
      }
    ]
  },
  {
    id: "dbe:frieza_soldier",
    advanced_combat: true,
    entity_definitions: {
      ki_color: "purple",
      skills: [
        "aura_boost",
        "ki_blast",
        "rapid_movement"
      ]
    }
  },
  {
    id: "dbe:frost",
    advanced_combat: true,
    race: "frost_demon",
    entity_definitions: {
      ki_color: "purple",
      skills: [
        "aura_boost",
        "ki_blast",
        "rapid_movement"
      ]
    }
  },
  {
    id: "dbe:future_trunks",
    advanced_combat: true,
    entity_definitions: {
      skills: [
        "aura_boost",
        "ki_blast",
        "rapid_movement"
      ]
    }
  },
  {
    id: "dbe:general_black",
    advanced_combat: false,
    race: "human"
  },
  {
    id: "dbe:giant_fish",
    advanced_combat: false,
    entity_definitions: {
      attributes: {
        total: 20,
        focus: {
          constitution: 2,
          dexterity: 1.5,
          spirit: 0,
          strength: 1
        }
      }
    }
  },
  {
    id: "dbe:ginyu",
    advanced_combat: true,
    entity_definitions: {
      ki_color: "purple",
      skills: [
        "aura_boost",
        "ki_blast",
        "rapid_movement"
      ]
    }
  },
  {
    id: "dbe:goku_enemy",
    advanced_combat: true,
    race: "saiyan",
    entity_definitions: {
      skills: [
        "aura_boost",
        "kamehameha",
        "ki_blast",
        "rapid_movement"
      ]
    }
  },
  {
    id: "dbe:guldo",
    advanced_combat: true,
    scale: 0.8
  },
  {
    id: "dbe:hitto",
    advanced_combat: true,
    entity_definitions: {
      ki_color: "purple",
      skills: [
        "aura_boost",
        "ki_blast",
        "rapid_movement"
      ]
    }
  },
  {
    id: "dbe:jeice",
    advanced_combat: true,
    entity_definitions: {
      ki_color: "red",
      skills: [
        "aura_boost",
        "ki_blast",
        "rapid_movement"
      ]
    }
  },
  {
    id: "dbe:kid_buu",
    advanced_combat: true,
    race: "majin",
    scale: 0.7,
    entity_definitions: {
      ki_color: "yellow",
      skills: [
        "aura_boost",
        "ki_blast",
        "rapid_movement"
      ]
    }
  },
  {
    id: "dbe:king_cold",
    advanced_combat: true,
    race: "frost_demon",
    scale: 1.3,
    entity_definitions: {
      ki_color: "red",
      skills: [
        "aura_boost",
        "ki_blast",
        "rapid_movement"
      ]
    }
  },
  {
    id: "dbe:magetta",
    advanced_combat: true
  },
  {
    id: "dbe:majin_vegeta",
    advanced_combat: true,
    race: "saiyan",
    scale: 0.9,
    entity_definitions: {
      ki_color: "yellow",
      skills: [
        "aura_boost",
        "ki_blast",
        "rapid_movement"
      ]
    }
  },
  {
    id: "dbe:namek_frog",
    advanced_combat: false,
    entity_definitions: {
      attributes: {
        total: 7,
        focus: {
          constitution: 1,
          dexterity: 1.2,
          spirit: 0,
          strength: 1
        }
      }
    }
  },
  {
    id: "dbe:namekian",
    advanced_combat: true,
    race: "namekian",
    entity_definitions: {
      ki_color: "yellow",
      attributes: {
        total: 55,
        focus: {
          constitution: 1,
          dexterity: 1,
          spirit: 1,
          strength: 1
        }
      },
      skills: [
        "aura_boost",
        "gigantification",
        "ki_blast",
        "rapid_movement"
      ]
    }
  },
  {
    id: "dbe:nappa",
    advanced_combat: true,
    race: "saiyan",
    entity_definitions: {
      ki_color: "yellow",
      skills: [
        "aura_boost",
        "ki_blast",
        "rapid_movement"
      ]
    }
  },
  {
    id: "dbe:piccolo_enemy",
    advanced_combat: true,
    race: "namekian",
    entity_definitions: {
      ki_color: "yellow",
      skills: [
        "aura_boost",
        "gigantification",
        "ki_blast",
        "rapid_movement"
      ]
    }
  },
  {
    id: "dbe:pirate_robot",
    advanced_combat: true,
    entity_definitions: {
      attributes: {
        total: 140,
        focus: {
          constitution: 1,
          dexterity: 2,
          spirit: 0,
          strength: 1
        }
      },
      skills: [
        "aura_boost"
      ]
    }
  },
  {
    id: "dbe:puipui",
    advanced_combat: true,
    entity_definitions: {
      ki_color: "green",
      skills: [
        "aura_boost",
        "ki_blast",
        "rapid_movement"
      ]
    }
  },
  {
    id: "dbe:raditz",
    advanced_combat: true,
    race: "saiyan",
    scale: 1.1,
    entity_definitions: {
      ki_color: "yellow",
      skills: [
        "aura_boost",
        "ki_blast",
        "rapid_movement"
      ]
    }
  },
  {
    id: "dbe:recoome",
    advanced_combat: true,
    entity_definitions: {
      ki_color: "pink",
      skills: [
        "aura_boost",
        "ki_blast",
        "rapid_movement"
      ]
    }
  },
  {
    id: "dbe:saber_tooth_tiger",
    advanced_combat: false,
    entity_definitions: {
      attributes: {
        total: 12,
        focus: {
          constitution: 1,
          dexterity: 1,
          spirit: 0,
          strength: 1
        }
      }
    }
  },
  {
    id: "dbe:saibaman",
    advanced_combat: true,
    scale: 0.95,
    entity_definitions: {
      attributes: {
        total: 110,
        focus: {
          constitution: 1,
          dexterity: 1.2,
          spirit: 1,
          strength: 1
        }
      },
      ki_color: "yellow",
      skills: [
        "aura_boost",
        "ki_blast",
        "rapid_movement"
      ]
    }
  },
  {
    id: "dbe:shadow_dummy",
    advanced_combat: true,
    entity_definitions: {
      friendly_damage: true
    }
  },
  {
    id: "dbe:shisami",
    advanced_combat: true,
    entity_definitions: {
      ki_color: "purple",
      skills: [
        "aura_boost",
        "ki_blast",
        "rapid_movement"
      ]
    }
  },
  {
    id: "dbe:super_buu",
    advanced_combat: true,
    race: "majin",
    entity_definitions: {
      ki_color: "yellow",
      skills: [
        "aura_boost",
        "ki_blast",
        "rapid_movement"
      ]
    },
    transformations: [
      {
        id: "super_buu_gohan",
        modifiers: {
          constitution: 1,
          dexterity: 2.1,
          ki_consume: 0,
          size: 1,
          spirit: 2.1,
          strength: 2.1
        }
      },
      {
        id: "super_buu_gotenks",
        modifiers: {
          constitution: 1,
          dexterity: 2.7,
          ki_consume: 0,
          size: 1,
          spirit: 2.7,
          strength: 2.7
        }
      }
    ]
  },
  {
    id: "dbe:tagoma",
    advanced_combat: true,
    entity_definitions: {
      ki_color: "purple",
      skills: [
        "aura_boost",
        "ki_blast",
        "rapid_movement"
      ]
    }
  },
  {
    id: "dbe:vegeta",
    advanced_combat: true,
    race: "saiyan",
    scale: 0.9,
    entity_definitions: {
      ki_color: "purple",
      skills: [
        "aura_boost",
        "ki_blast",
        "rapid_movement"
      ]
    }
  },
  {
    id: "dbe:yakon",
    advanced_combat: true,
    entity_definitions: {
      ki_color: "yellow",
      skills: [
        "aura_boost",
        "ki_blast",
        "rapid_movement"
      ]
    }
  },
  {
    id: "dbe:zarbon",
    advanced_combat: true,
    entity_definitions: {
      ki_color: "red",
      skills: [
        "aura_boost",
        "ki_blast",
        "rapid_movement"
      ]
    },
    transformations: [
      {
        id: "final_form",
        modifiers: {
          constitution: 1,
          dexterity: 1.4,
          ki_consume: 0,
          size: 1,
          spirit: 1.4,
          strength: 1.4
        }
      }
    ]
  }
];
export {
  entity_data
};
