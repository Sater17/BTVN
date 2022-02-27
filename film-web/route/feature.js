import express from 'express';
import {mainFeature,nameFeature} from '../controller/feature.js'

const featureRouter = express.Router()

featureRouter.get('/',mainFeature)
featureRouter.get('/:title',nameFeature)

export {featureRouter};