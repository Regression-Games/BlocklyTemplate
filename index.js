var deaths, previousDeaths;


// !!!
// !!!
// !!! WARNING: This file is auto-generated using Google Blockly.  If you modify this file manually, any changes you make will be overwritten the next time you save changes to your Blockly blocks.
// !!!
// !!!

const { Pathfinder, Movements } = require('mineflayer-pathfinder');
const { GoalNear, GoalPlaceBlock, GoalLookAtBlock, GoalXZ, GoalInvert, GoalFollow } = require('mineflayer-pathfinder').goals
const { Chest, Furnace, Window, StorageEvents } = require('mineflayer')
const { RGMatchInfo } = require('rg-match-info');
const { Vec3 } = require('vec3');
const nbt = require("prismarine-nbt");
const { RGBot, BestHarvestTool,FindResult } = require('rg-bot');

let rg_bot = null;

function configureBot(bot) {
  rg_bot = bot;
   deaths = 0;
  rg_bot.on( 'spawn', async () => {
    previousDeaths = deaths;
    while (deaths == previousDeaths) {
      await rg_bot.wander( 1, 2 );
    }

  });
  rg_bot.on( 'death', async () => {
    deaths = (typeof deaths === 'number' ? deaths : 0) + 1;

  });

}
exports.configureBot = configureBot;
