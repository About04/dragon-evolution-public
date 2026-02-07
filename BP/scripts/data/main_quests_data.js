const main_quests_data = [
  {
    id: "saga_saiyan_1",
    type: "main",
    objectives: [
      {
        type: "interact_npc",
        entity: "dbe:piccolo",
        dialog_count: 3
      },
      {
        type: "enter_biome",
        biome: "minecraft:dirtstone"
      },
      {
        type: "defeat_enemy",
        entity: "dbe:raditz",
        spawn_on_start: true,
        entity_definitions: {
          attributes: {
            total: 140,
            focus: {
              constitution: 1,
              dexterity: 0.8,
              spirit: 1,
              strength: 1
            }
          }
        }
      }
    ],
    rewards: [
      { type: "alignment_question" },
      { type: "training_points" },
      { type: "z_points" },
      { type: "zeni" }
    ]
  },
  {
    id: "saga_saiyan_2",
    type: "main",
    objectives: [
      {
        type: "learn_skill",
        skill: "fly"
      },
      {
        type: "interact_npc",
        entity: "dbe:kami_sama",
        dialog_count: 3,
        teleport_on_finish: "other_world"
      },
      {
        type: "enter_region",
        region: "king_kai_planet"
      },
      {
        type: "interact_npc",
        entity: "dbe:king_kai",
        dialog_count: 3
      },
      {
        type: "defeat_enemy",
        entity: "dbe:shadow_dummy",
        count: 4,
        is_restartable: false,
        spawn_on_start: false,
        entity_definitions: {
          friendly_damage: true
        }
      },
      {
        type: "interact_npc",
        entity: "dbe:kami_sama",
        dialog_count: 3
      }
    ],
    rewards: [
      { type: "give_quest", quest: "pirate_robot_treasure" },
      { type: "alignment_question" },
      { type: "training_points" },
      { type: "z_points" },
      { type: "zeni" }
    ]
  },
  {
    id: "saga_saiyan_3",
    type: "main",
    objectives: [
      {
        type: "enter_biome",
        biome: "minecraft:dirtstone"
      },
      {
        type: "defeat_enemy",
        entity: "dbe:saibaman",
        count: 2,
        is_restartable: false,
        spawn_on_start: true
      },
      {
        type: "defeat_enemy",
        entity: "dbe:saibaman",
        count: 4,
        is_restartable: false,
        spawn_on_start: true
      }
    ],
    rewards: [
      { type: "alignment_question" },
      { type: "training_points" },
      { type: "z_points" },
      { type: "zeni" }
    ]
  },
  {
    id: "saga_saiyan_4",
    type: "main",
    objectives: [
      {
        type: "enter_biome",
        biome: "minecraft:dirtstone"
      },
      {
        type: "defeat_enemy",
        entity: "dbe:nappa",
        spawn_on_start: true,
        entity_definitions: {
          attributes: {
            total: 280,
            focus: {
              constitution: 1.2,
              dexterity: 1,
              spirit: 1,
              strength: 1
            }
          }
        }
      }
    ],
    rewards: [
      { type: "alignment_question" },
      { type: "training_points" },
      { type: "z_points" },
      { type: "zeni" }
    ]
  },
  {
    id: "saga_saiyan_5",
    type: "main",
    objectives: [
      {
        type: "enter_biome",
        biome: "minecraft:dirtstone"
      },
      {
        type: "defeat_enemy",
        entity: "dbe:vegeta",
        spawn_on_start: true,
        entity_definitions: {
          attributes: {
            total: 420,
            focus: {
              constitution: 1,
              dexterity: 1.2,
              spirit: 1,
              strength: 1.2
            }
          },
          available_transformations: [
            "base",
            "oozaru"
          ]
        }
      }
    ],
    rewards: [
      { type: "alignment_question" },
      { type: "training_points" },
      { type: "z_points" },
      { type: "zeni" }
    ]
  },
  {
    id: "saga_frieza_1",
    type: "main",
    objectives: [
      {
        type: "interact_npc",
        entity: "dbe:kami_sama"
      },
      {
        type: "enter_biome",
        biome: "minecraft:namek"
      },
      {
        type: "defeat_enemy",
        entity: "dbe:frieza_soldier",
        count: 2,
        spawn_on_start: true,
        entity_definitions: {
          attributes: {
            total: 100,
            focus: {
              constitution: 1,
              dexterity: 0.8,
              spirit: 0.8,
              strength: 1
            }
          }
        }
      },
      {
        type: "defeat_enemy",
        entity: "dbe:frieza_soldier",
        count: 4,
        spawn_on_start: true,
        entity_definitions: {
          attributes: {
            total: 100,
            focus: {
              constitution: 1,
              dexterity: 0.8,
              spirit: 0.8,
              strength: 1
            }
          }
        }
      }
    ],
    rewards: [
      { type: "alignment_question" },
      { type: "training_points" },
      { type: "z_points" },
      { type: "zeni" }
    ]
  },
  {
    id: "saga_frieza_2",
    type: "main",
    objectives: [
      {
        type: "enter_biome",
        biome: "minecraft:namek"
      },
      {
        type: "defeat_enemy",
        entity: "dbe:cui",
        spawn_on_start: true,
        entity_definitions: {
          attributes: {
            total: 450,
            focus: {
              constitution: 1,
              dexterity: 1,
              spirit: 1,
              strength: 1
            }
          }
        }
      }
    ],
    rewards: [
      { type: "alignment_question" },
      { type: "training_points" },
      { type: "z_points" },
      { type: "zeni" }
    ]
  },
  {
    id: "saga_frieza_3",
    type: "main",
    objectives: [
      {
        type: "defeat_enemy",
        entity: "dbe:dodoria",
        spawn_on_start: true,
        entity_definitions: {
          attributes: {
            total: 460,
            focus: {
              constitution: 1.2,
              dexterity: 0.8,
              spirit: 1,
              strength: 1
            }
          }
        }
      }
    ],
    rewards: [
      { type: "alignment_question" },
      { type: "training_points" },
      { type: "z_points" },
      { type: "zeni" }
    ]
  },
  {
    id: "saga_frieza_4",
    type: "main",
    objectives: [
      {
        type: "enter_biome",
        biome: "minecraft:namek"
      },
      {
        type: "defeat_enemy",
        entity: "dbe:zarbon",
        spawn_on_start: true,
        entity_definitions: {
          attributes: {
            total: 490,
            focus: {
              constitution: 1,
              dexterity: 1.1,
              spirit: 1,
              strength: 1.2
            }
          },
          available_transformations: [
            "base",
            "final_form"
          ]
        }
      }
    ],
    rewards: [
      { type: "alignment_question" },
      { type: "training_points" },
      { type: "z_points" },
      { type: "zeni" }
    ]
  },
  {
    id: "saga_frieza_5",
    type: "main",
    objectives: [
      {
        type: "enter_biome",
        biome: "minecraft:namek"
      },
      {
        type: "defeat_enemy",
        entity: "dbe:guldo",
        spawn_on_start: true,
        entity_definitions: {
          attributes: {
            total: 180,
            focus: {
              constitution: 0.8,
              dexterity: 1.2,
              spirit: 1.2,
              strength: 0.8
            }
          }
        }
      },
      {
        type: "defeat_enemy",
        entity: "dbe:recoome",
        spawn_on_start: true,
        entity_definitions: {
          attributes: {
            total: 310,
            focus: {
              constitution: 1.2,
              dexterity: 1,
              spirit: 1,
              strength: 1.4
            }
          }
        }
      }
    ],
    rewards: [
      { type: "alignment_question" },
      { type: "training_points" },
      { type: "z_points" },
      { type: "zeni" }
    ]
  },
  {
    id: "saga_frieza_6",
    type: "main",
    objectives: [
      {
        type: "enter_biome",
        biome: "minecraft:namek"
      },
      {
        type: "defeat_enemy",
        entity: "dbe:burter",
        spawn_on_start: true,
        entity_definitions: {
          attributes: {
            total: 340,
            focus: {
              constitution: 1,
              dexterity: 1.3,
              spirit: 1,
              strength: 1
            }
          }
        }
      },
      {
        type: "defeat_enemy",
        entity: "dbe:jeice",
        spawn_on_start: true,
        entity_definitions: {
          attributes: {
            total: 340,
            focus: {
              constitution: 1,
              dexterity: 1,
              spirit: 1,
              strength: 1
            }
          }
        }
      }
    ],
    rewards: [
      { type: "alignment_question" },
      { type: "training_points" },
      { type: "z_points" },
      { type: "zeni" }
    ]
  },
  {
    id: "saga_frieza_7",
    type: "main",
    objectives: [
      {
        type: "enter_biome",
        biome: "minecraft:namek"
      },
      {
        type: "defeat_enemy",
        entity: "dbe:ginyu",
        spawn_on_start: true,
        entity_definitions: {
          attributes: {
            total: 440,
            focus: {
              constitution: 1,
              dexterity: 1.2,
              spirit: 1,
              strength: 1.2
            }
          }
        }
      }
    ],
    rewards: [
      { type: "alignment_question" },
      { type: "training_points" },
      { type: "z_points" },
      { type: "zeni" }
    ]
  },
  {
    id: "saga_frieza_8",
    type: "main",
    objectives: [
      {
        type: "enter_biome",
        biome: "minecraft:namek"
      },
      {
        type: "defeat_enemy",
        entity: "dbe:frieza",
        spawn_on_start: true,
        entity_definitions: {
          attributes: {
            total: 650,
            focus: {
              constitution: 1.2,
              dexterity: 1.3,
              spirit: 1,
              strength: 1.1
            }
          },
          available_transformations: [
            "base",
            "second_form",
            "third_form",
            "fourth_form"
          ]
        }
      }
    ],
    rewards: [
      { type: "alignment_question" },
      { type: "training_points" },
      { type: "z_points" },
      { type: "zeni" }
    ]
  },
  {
    id: "saga_frieza_9",
    type: "main",
    objectives: [
      {
        type: "enter_biome",
        biome: "minecraft:namek"
      },
      {
        type: "defeat_enemy",
        entity: "dbe:frieza",
        spawn_on_start: true,
        entity_definitions: {
          attributes: {
            total: 700,
            focus: {
              constitution: 1.2,
              dexterity: 1.3,
              spirit: 1,
              strength: 1.1
            }
          },
          available_transformations: [
            "full_power"
          ]
        }
      }
    ],
    rewards: [
      { type: "alignment_question" },
      { type: "training_points" },
      { type: "z_points" },
      { type: "zeni" }
    ]
  },
  {
    id: "saga_frieza_10",
    type: "main",
    objectives: [
      {
        type: "enter_biome",
        biome: "minecraft:dirtstone"
      },
      {
        type: "defeat_enemy",
        entity: "dbe:frieza_soldier",
        count: 1,
        spawn_on_start: true,
        entity_definitions: {
          attributes: {
            total: 110,
            focus: {
              constitution: 1,
              dexterity: 0.8,
              spirit: 0.8,
              strength: 1
            }
          }
        }
      },
      {
        type: "defeat_enemy",
        entity: "dbe:frieza_soldier",
        count: 2,
        spawn_on_start: true,
        entity_definitions: {
          attributes: {
            total: 110,
            focus: {
              constitution: 1,
              dexterity: 0.8,
              spirit: 0.8,
              strength: 1
            }
          }
        }
      },
      {
        type: "defeat_enemy",
        entity: "dbe:frieza_soldier",
        count: 3,
        spawn_on_start: true,
        entity_definitions: {
          attributes: {
            total: 110,
            focus: {
              constitution: 1,
              dexterity: 0.8,
              spirit: 0.8,
              strength: 1
            }
          }
        }
      }
    ],
    rewards: [
      { type: "alignment_question" },
      { type: "training_points" },
      { type: "z_points" },
      { type: "zeni" }
    ]
  },
  {
    id: "saga_frieza_11",
    type: "main",
    objectives: [
      {
        type: "defeat_enemy",
        entity: "dbe:king_cold",
        spawn_on_start: true,
        entity_definitions: {
          attributes: {
            total: 850,
            focus: {
              constitution: 1.3,
              dexterity: 1,
              spirit: 1,
              strength: 1.1
            }
          }
        }
      }
    ],
    rewards: [
      { type: "alignment_question" },
      { type: "training_points" },
      { type: "z_points" },
      { type: "zeni" }
    ]
  },
  {
    id: "saga_frieza_12",
    type: "main",
    objectives: [
      {
        type: "defeat_enemy",
        entity: "dbe:frieza",
        spawn_on_start: true,
        entity_definitions: {
          attributes: {
            total: 900,
            focus: {
              constitution: 1,
              dexterity: 1.5,
              spirit: 1,
              strength: 1
            }
          },
          available_transformations: [
            "mecha_frieza"
          ]
        }
      }
    ],
    rewards: [
      { type: "alignment_question" },
      { type: "training_points" },
      { type: "z_points" },
      { type: "zeni" }
    ]
  },
  {
    id: "saga_android_1",
    type: "main",
    objectives: [
      {
        type: "defeat_enemy",
        entity: "dbe:shadow_dummy",
        count: 2,
        is_restartable: false,
        spawn_on_start: false,
        entity_definitions: {
          friendly_damage: true
        }
      }
    ],
    rewards: [
      { type: "alignment_question" },
      { type: "training_points" },
      { type: "z_points" },
      { type: "zeni" }
    ]
  },
  {
    id: "saga_android_2",
    type: "main",
    objectives: [
      {
        type: "defeat_enemy",
        entity: "dbe:android_19",
        spawn_on_start: true,
        entity_definitions: {
          attributes: {
            total: 1100,
            focus: {
              constitution: 1.4,
              dexterity: 1,
              spirit: 1.2,
              strength: 1
            }
          },
          available_transformations: [
            "buffed"
          ]
        }
      },
      {
        type: "defeat_enemy",
        entity: "dbe:android_20",
        spawn_on_start: true,
        entity_definitions: {
          attributes: {
            total: 1100,
            focus: {
              constitution: 1,
              dexterity: 1,
              spirit: 1.4,
              strength: 1
            }
          },
          available_transformations: [
            "buffed"
          ]
        }
      }
    ],
    rewards: [
      { type: "alignment_question" },
      { type: "training_points" },
      { type: "z_points" },
      { type: "zeni" }
    ]
  },
  {
    id: "saga_android_3",
    type: "main",
    objectives: [
      {
        type: "defeat_enemy",
        entity: "dbe:android_17",
        spawn_on_start: true,
        entity_definitions: {
          attributes: {
            total: 1400,
            focus: {
              constitution: 1,
              dexterity: 1,
              spirit: 1.5,
              strength: 1.2
            }
          }
        }
      }
    ],
    rewards: [
      { type: "alignment_question" },
      { type: "training_points" },
      { type: "z_points" },
      { type: "zeni" }
    ]
  },
  {
    id: "saga_android_4",
    type: "main",
    objectives: [
      {
        type: "defeat_enemy",
        entity: "dbe:android_18",
        spawn_on_start: true,
        entity_definitions: {
          attributes: {
            total: 1500,
            focus: {
              constitution: 1,
              dexterity: 1,
              spirit: 1.4,
              strength: 1.3
            }
          }
        }
      }
    ],
    rewards: [
      { type: "alignment_question" },
      { type: "training_points" },
      { type: "z_points" },
      { type: "zeni" }
    ]
  },
  {
    id: "saga_android_5",
    type: "main",
    objectives: [
      {
        type: "defeat_enemy",
        entity: "dbe:cell",
        spawn_on_start: true,
        entity_definitions: {
          attributes: {
            total: 1600,
            focus: {
              constitution: 1,
              dexterity: 1,
              spirit: 1,
              strength: 1.1
            }
          },
          available_transformations: [
            "base",
            "semi_perfect"
          ]
        }
      },
      {
        type: "defeat_enemy",
        entity: "dbe:cell_junior",
        count: 4,
        spawn_on_start: true,
        entity_definitions: {
          attributes: {
            total: 400,
            focus: {
              constitution: 1,
              dexterity: 1.5,
              spirit: 1,
              strength: 1.3
            }
          },
          available_transformations: [
            "perfect"
          ]
        }
      },
      {
        type: "defeat_enemy",
        entity: "dbe:cell",
        spawn_on_start: true,
        entity_definitions: {
          attributes: {
            total: 1600,
            focus: {
              constitution: 1,
              dexterity: 1,
              spirit: 1,
              strength: 1.1
            }
          },
          available_transformations: [
            "perfect",
            "full_power",
            "super_perfect"
          ]
        }
      }
    ],
    rewards: [
      { type: "alignment_question" },
      { type: "training_points" },
      { type: "z_points" },
      { type: "zeni" }
    ]
  },
  {
    id: "saga_majin_1",
    type: "main",
    objectives: [
      {
        type: "defeat_enemy",
        entity: "dbe:puipui",
        spawn_on_start: true,
        entity_definitions: {
          attributes: {
            total: 1900,
            focus: {
              constitution: 1,
              dexterity: 1.2,
              spirit: 1,
              strength: 1
            }
          }
        }
      }
    ],
    rewards: [
      { type: "alignment_question" },
      { type: "training_points" },
      { type: "z_points" },
      { type: "zeni" }
    ]
  },
  {
    id: "saga_majin_2",
    type: "main",
    objectives: [
      {
        type: "defeat_enemy",
        entity: "dbe:yakon",
        spawn_on_start: true,
        entity_definitions: {
          attributes: {
            total: 2900,
            focus: {
              constitution: 1,
              dexterity: 1.2,
              spirit: 1.4,
              strength: 1
            }
          }
        }
      }
    ],
    rewards: [
      { type: "alignment_question" },
      { type: "training_points" },
      { type: "z_points" },
      { type: "zeni" }
    ]
  },
  {
    id: "saga_majin_3",
    type: "main",
    objectives: [
      {
        type: "defeat_enemy",
        entity: "dbe:dabura",
        spawn_on_start: true,
        entity_definitions: {
          attributes: {
            total: 3100,
            focus: {
              constitution: 1,
              dexterity: 1.6,
              spirit: 1,
              strength: 1.4
            }
          }
        }
      }
    ],
    rewards: [
      { type: "alignment_question" },
      { type: "training_points" },
      { type: "z_points" },
      { type: "zeni" }
    ]
  },
  {
    id: "saga_majin_4",
    type: "main",
    objectives: [
      {
        type: "defeat_enemy",
        entity: "dbe:majin_vegeta",
        spawn_on_start: true,
        entity_definitions: {
          attributes: {
            total: 1e3,
            focus: {
              constitution: 1,
              dexterity: 1.4,
              spirit: 1.4,
              strength: 1
            }
          },
          available_transformations: [
            "ssj2"
          ]
        }
      }
    ],
    rewards: [
      { type: "alignment_question" },
      { type: "training_points" },
      { type: "z_points" },
      { type: "zeni" }
    ]
  },
  {
    id: "saga_majin_5",
    type: "main",
    objectives: [
      {
        type: "defeat_enemy",
        entity: "dbe:fat_buu",
        spawn_on_start: true,
        entity_definitions: {
          attributes: {
            total: 2800,
            focus: {
              constitution: 1.5,
              dexterity: 1.2,
              spirit: 1,
              strength: 1
            }
          }
        }
      }
    ],
    rewards: [
      { type: "alignment_question" },
      { type: "training_points" },
      { type: "z_points" },
      { type: "zeni" }
    ]
  },
  {
    id: "saga_majin_6",
    type: "main",
    objectives: [
      {
        type: "defeat_enemy",
        entity: "dbe:super_buu",
        spawn_on_start: true,
        entity_definitions: {
          attributes: {
            total: 2900,
            focus: {
              constitution: 1,
              dexterity: 1,
              spirit: 1,
              strength: 1
            }
          },
          available_transformations: [
            "base",
            "super_buu_gohan",
            "super_buu_gotenks"
          ]
        }
      }
    ],
    rewards: [
      { type: "alignment_question" },
      { type: "training_points" },
      { type: "z_points" },
      { type: "zeni" }
    ]
  },
  {
    id: "saga_majin_7",
    type: "main",
    objectives: [
      {
        type: "defeat_enemy",
        entity: "dbe:kid_buu",
        spawn_on_start: true,
        entity_definitions: {
          attributes: {
            total: 5100,
            focus: {
              constitution: 1,
              dexterity: 1.3,
              spirit: 1,
              strength: 1.4
            }
          }
        }
      }
    ],
    rewards: [
      { type: "alignment_question" },
      { type: "training_points" },
      { type: "z_points" },
      { type: "zeni" }
    ]
  },
  {
    id: "saga_beerus_1",
    type: "main",
    objectives: [
      {
        type: "interact_npc",
        entity: "dbe:whis",
        dialog_count: 2
      },
      {
        type: "learn_skill",
        skill: "divine_ki"
      },
      {
        type: "unlock_transformation",
        race: "saiyan",
        transformation: "ssjg",
        requirements: {
          race: "saiyan"
        }
      },
      {
        type: "defeat_enemy",
        entity: "dbe:beerus_enemy",
        auto_start: false,
        spawn_on_start: true,
        entity_definitions: {
          friendly_damage: true,
          attributes: {
            total: 6100,
            focus: {
              constitution: 1,
              dexterity: 1.2,
              spirit: 1.1,
              strength: 1.2
            }
          }
        }
      },
      {
        type: "dialog",
        dialog_count: 2
      }
    ],
    rewards: [
      { type: "alignment_question" },
      { type: "training_points" },
      { type: "z_points" },
      { type: "zeni" }
    ]
  },
  {
    id: "saga_golden_frieza_1",
    type: "main",
    objectives: [
      {
        type: "defeat_enemy",
        entity: "dbe:shadow_dummy",
        count: 6,
        is_restartable: false,
        spawn_on_start: false,
        entity_definitions: {
          friendly_damage: true
        }
      }
    ],
    rewards: [
      { type: "alignment_question" },
      { type: "training_points" },
      { type: "z_points" },
      { type: "zeni" }
    ]
  },
  {
    id: "saga_golden_frieza_2",
    type: "main",
    objectives: [
      {
        type: "defeat_enemy",
        entity: "dbe:frieza_soldier",
        count: 3,
        spawn_on_start: true,
        entity_definitions: {
          attributes: {
            total: 800,
            focus: {
              constitution: 1,
              dexterity: 0.8,
              spirit: 0.8,
              strength: 1
            }
          }
        }
      },
      {
        type: "defeat_enemy",
        entity: "dbe:frieza_soldier",
        count: 6,
        spawn_on_start: true,
        entity_definitions: {
          attributes: {
            total: 800,
            focus: {
              constitution: 1,
              dexterity: 0.8,
              spirit: 0.8,
              strength: 1
            }
          }
        }
      }
    ],
    rewards: [
      { type: "alignment_question" },
      { type: "training_points" },
      { type: "z_points" },
      { type: "zeni" }
    ]
  },
  {
    id: "saga_golden_frieza_3",
    type: "main",
    objectives: [
      {
        type: "defeat_enemy",
        entity: "dbe:shisami",
        spawn_on_start: true,
        entity_definitions: {
          friendly_damage: true,
          attributes: {
            total: 4e3,
            focus: {
              constitution: 1.2,
              dexterity: 1.2,
              spirit: 1,
              strength: 1
            }
          }
        }
      },
      {
        type: "defeat_enemy",
        entity: "dbe:tagoma",
        spawn_on_start: true,
        entity_definitions: {
          friendly_damage: true,
          attributes: {
            total: 4200,
            focus: {
              constitution: 1,
              dexterity: 1.2,
              spirit: 1,
              strength: 1
            }
          }
        }
      }
    ],
    rewards: [
      { type: "alignment_question" },
      { type: "training_points" },
      { type: "z_points" },
      { type: "zeni" }
    ]
  },
  {
    id: "saga_golden_frieza_4",
    type: "main",
    objectives: [
      {
        type: "defeat_enemy",
        entity: "dbe:frieza",
        spawn_on_start: true,
        entity_definitions: {
          attributes: {
            total: 5300,
            focus: {
              constitution: 1.2,
              dexterity: 1.3,
              spirit: 1,
              strength: 1.1
            }
          },
          available_transformations: [
            "base",
            "fourth_form",
            "golden_form"
          ]
        }
      }
    ],
    rewards: [
      { type: "alignment_question" },
      { type: "training_points" },
      { type: "z_points" },
      { type: "zeni" }
    ]
  },
  {
    id: "saga_universe_6_1",
    type: "main",
    objectives: [
      {
        type: "interact_npc",
        entity: "dbe:piccolo",
        dialog_count: 3
      },
      {
        type: "defeat_enemy",
        entity: "dbe:piccolo_enemy",
        auto_start: false,
        spawn_on_start: true,
        entity_definitions: {
          friendly_damage: true,
          attributes: {
            total: 3800,
            focus: {
              constitution: 1,
              dexterity: 2,
              spirit: 3,
              strength: 2
            }
          },
          available_transformations: [
            "base",
            "full_released"
          ]
        }
      },
      {
        type: "interact_npc",
        entity: "dbe:goku",
        dialog_count: 3
      },
      {
        type: "defeat_enemy",
        entity: "dbe:goku_enemy",
        auto_start: false,
        spawn_on_start: true,
        entity_definitions: {
          friendly_damage: true,
          attributes: {
            total: 4400,
            focus: {
              constitution: 1,
              dexterity: 2,
              spirit: 3,
              strength: 2
            }
          },
          available_transformations: [
            "base",
            "ssj",
            "ssj2",
            "ssj3",
            "ssjg",
            "ssjb"
          ]
        }
      },
      {
        type: "dialog",
        dialog_count: 1
      }
    ],
    rewards: [
      { type: "alignment_question" },
      { type: "training_points" },
      { type: "z_points" },
      { type: "zeni" }
    ]
  },
  {
    id: "saga_universe_6_2",
    type: "main",
    objectives: [
      {
        type: "defeat_enemy",
        entity: "dbe:botamo",
        spawn_on_start: true,
        entity_definitions: {
          attributes: {
            total: 5200,
            focus: {
              constitution: 1.1,
              dexterity: 0.8,
              spirit: 1,
              strength: 0.8
            }
          }
        }
      }
    ],
    rewards: [
      { type: "alignment_question" },
      { type: "training_points" },
      { type: "z_points" },
      { type: "zeni" }
    ]
  },
  {
    id: "saga_universe_6_3",
    type: "main",
    objectives: [
      {
        type: "defeat_enemy",
        entity: "dbe:frost",
        spawn_on_start: true,
        entity_definitions: {
          attributes: {
            total: 5500,
            focus: {
              constitution: 1.1,
              dexterity: 0.8,
              spirit: 1,
              strength: 0.8
            }
          },
          available_transformations: [
            "base",
            "second_form",
            "third_form",
            "fourth_form"
          ]
        }
      }
    ],
    rewards: [
      { type: "alignment_question" },
      { type: "training_points" },
      { type: "z_points" },
      { type: "zeni" }
    ]
  },
  {
    id: "saga_universe_6_4",
    type: "main",
    objectives: [
      {
        type: "defeat_enemy",
        entity: "dbe:magetta",
        spawn_on_start: true,
        entity_definitions: {
          attributes: {
            total: 5800,
            focus: {
              constitution: 1.1,
              dexterity: 0.8,
              spirit: 1,
              strength: 0.8
            }
          }
        }
      }
    ],
    rewards: [
      { type: "alignment_question" },
      { type: "training_points" },
      { type: "z_points" },
      { type: "zeni" }
    ]
  },
  {
    id: "saga_universe_6_5",
    type: "main",
    objectives: [
      {
        type: "defeat_enemy",
        entity: "dbe:cabba",
        spawn_on_start: true,
        entity_definitions: {
          attributes: {
            total: 3300,
            focus: {
              constitution: 1.1,
              dexterity: 0.8,
              spirit: 1,
              strength: 0.8
            }
          },
          available_transformations: [
            "base",
            "ssj"
          ]
        }
      }
    ],
    rewards: [
      { type: "alignment_question" },
      { type: "training_points" },
      { type: "z_points" },
      { type: "zeni" }
    ]
  },
  {
    id: "saga_universe_6_6",
    type: "main",
    objectives: [
      {
        type: "defeat_enemy",
        entity: "dbe:hitto",
        spawn_on_start: true,
        entity_definitions: {
          attributes: {
            total: 8e3,
            focus: {
              constitution: 1.1,
              dexterity: 0.8,
              spirit: 1,
              strength: 0.8
            }
          }
        }
      }
    ],
    rewards: [
      { type: "alignment_question" },
      { type: "training_points" },
      { type: "z_points" },
      { type: "zeni" }
    ]
  }
];
export {
  main_quests_data
};
