const mongoose = require('mongoose')

const processSchema = new mongoose.Schema({
    name: String,
    description: String,
    serviceArea: String,
    owner: String,
    hasDiscovery: Boolean,
    hasBuild: Boolean,
    hasTests: Boolean,
    hasContent: Boolean,
    hasTranslation: Boolean,
    passedVerify: Boolean,
    hasMigrated: Boolean,
    notes: Array,
    complete: Boolean
})

const processModel = mongoose.model("processes", processSchema)

module.exports = processModel;