import express from 'express';

const seriesRouter = express.Router()

seriesRouter.get('/',mainSeries)
seriesRouter.get('/:name',nameSeries)

export {seriesRouter};