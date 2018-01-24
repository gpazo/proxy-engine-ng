import { Request, Response } from 'express'
import * as request from 'request'
const Controller = require('trails/controller')

/**
 * @module DefaultController
 *
 * @description Default Controller included with a new Trails app
 * @see {@link http://trailsjs.io/doc/api/controllers}
 * @this TrailsApp
 */

export class LambdaController extends Controller {
  /**
   * Return some info about this application
   */
  test(req: Request, res: Response) {
    let lamdaTestURL = 'https://m3ehp1mwy9.execute-api.us-east-1.amazonaws.com/dev/test'
    request.post(lamdaTestURL, function(error, response, body){
      if (!error && response.statusCode == 200) {
        return res.json(body)
      }
    })
  }
}
