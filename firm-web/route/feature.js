import express from 'express';

const featureRouter = express.Router()

featureRouter.get('/',mainFeature)
featureRouter.get('/:name',nameFeature)

export {featureRouter};