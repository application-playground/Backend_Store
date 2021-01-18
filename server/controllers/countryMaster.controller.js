// const express = require('express');
const CountryMaster = require('../models').CountryMaster;

fetchCountryList = (req, res, next) => {
    CountryMaster.findAll()
        .then(data => { res.json({ 'data': data }) })
        .catch(dataError => { res.json({ 'data': dataError }) })
};

module.exports = {
    fetchCountryList
}