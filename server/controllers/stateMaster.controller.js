// const express = require('express');
const StateMaster = require('../models').StateMaster;
const CountryMaster = require('../models').CountryMaster;

fetchStateList = (req, res, next) => {

    let incCountryList = [];
    
    if(req.params['includeCountry'] === 'true') {
        incCountryList = [{ 
            model: CountryMaster, 
            as: 'CountryMasters',
            attributes: ['shortName', 'id', 'countrycode', 'name'] }]
    }

    const includeList = {
        include: incCountryList,
        attributes: ['id', 'name', 'countryId'],
        limit: 3,
        where: {
            isActive: true
        }
    };

    StateMaster.findAll(includeList)
    .then(data => { res.json({ 'data': data }) })
    .catch(dataError => { res.json({ 'data': dataError }) })
};

module.exports = {
    fetchStateList
}