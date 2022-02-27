import express from 'express';
import {mainSeries,nameSeries} from '../controller/series.js'


const seriesRouter = express.Router()

seriesRouter.get('/',mainSeries)
seriesRouter.get('/:title',nameSeries)

export {seriesRouter};