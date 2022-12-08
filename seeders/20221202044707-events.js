'use strict';
const { User, Activity, sequelize } = require('../models')
const falso = require('@ngneat/falso')
const fs = require('fs')

const img_Assets_Path = __dirname + '/../assets/public/images'
let images = {}
fs.readdirSync(img_Assets_Path).filter(dirItem => !dirItem.includes('.')).map(folder => {
  images[folder] = fs.readdirSync(img_Assets_Path + '/' + folder).filter(dirItem => dirItem.slice(-4) === '.jpg')
})

const weightedNumArray = [1,1,1,1,1,1,2,2,3,3]

const eventWordBank = {
  hiking: ['Group Hike','Trails Friends Hike', 'Hike-a-thon','Day Hike','Evening Hike','Easy Hike','Dog Friendly Hike'],
  running: ['Group Run','Trail Run','Early Morning Run','5k Trail Run','Backcountry Run','40k Ultra Hellraiser'],
  ultimate: ['Ultimate Pick-up Game','Club Ultimate','Ultimate Frisbee','Ultimate Frisbee League','Dusk till Dawn Frisbee'],
  skiing: ['Skiing Lessons','Ski Resort','Ski Slopes','Skiing','Snowboarding Sundays'],
  mountainBiking: ['Group Ride','Free Rides to top','Mountain Bike Trails','Mountain Bike Ride'],
  roadBiking: ['Group Ride','Early Morning 20-mile','Weekend Ride','Mountain Road Group Ride'],
  kayaking: ['Kayak Launch','Kayaking','Lake Kayaking','Group Kayak','Weekend Kayak'],
  rafting: ['Rafting Guide','Whitewater Rafting Adventure','Whitewater Rafting','Level-5 Rafters'],
  fishing: ['Fish Spot','Trout Fishing','River Access','Fly Fishing','Fishing','Find-a-Fish Event'],
  birdWatching: ['Bird Watcher Anonymous','Bird Watchers Paradise','Bird Watching Club Meet','Bird Watching Spot'],
}

const recurring = ['no','daily','weekly','bi-weekly','monthly']

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const events = await Promise.all(
      [...Array(80)].map(async () => {
        let user = await User.findOne({ order: sequelize.random(), raw: true })
        let activity = await Activity.findOne({ order: sequelize.random(), raw: true})
        
        // get random number of images
        let imageFolder = activity.name.split(' ').join('_').toLowerCase()
        let randWeightIndex = Math.floor(Math.random() * weightedNumArray.length)
        let weightedRandNumOfImages = weightedNumArray[randWeightIndex]
        let imageList = [...images[imageFolder]]
        let randImages = []
        for (let i = 0; i < weightedRandNumOfImages; i++) {
          let imgUrl = 'img/' + imageFolder + '/' + imageList.splice(Math.floor(Math.random() * imageList.length), 1)[0]
          randImages.push(imgUrl)
        }

        return {
          name: eventWordBank[activity.ref][Math.floor(Math.random() * eventWordBank[activity.ref].length)],
          userId: user.id,
          activityId: activity.id,
          date: falso.randFutureDate({years: .125}),
          longitude: falso.randFloat({ min: -83.424048, max: -82.000369, fraction: 6 }), 
          latitude: falso.randFloat({ min: 35.290469, max: 35.978006, fraction: 6 }), 
          city: 'Ashville',
          state: 'NC',
          description: falso.randParagraph(),
          recurring: recurring[Math.floor(Math.random() * recurring.length)],
          img: randImages,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      })

    )
    return queryInterface.bulkInsert('events', events)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('events', null, {})
  }
};
