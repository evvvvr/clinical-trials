import HttpStatus from 'http-status-codes';

import db from '../../../db/models/db';
import validateTrialApplication from '../../../validation/api/v1/validation';
import { isErrorUniqueConstraintViolation } from '../../../db/db-utils';

function postTrialsApplication(request, response, next) {
  const validationResult = validateTrialApplication(request.body);

  if (!validationResult.valid) {
    response
      .status(HttpStatus.BAD_REQUEST)
      .json({
        errors: validationResult.errors,
      });
  } else {
    db.application
      .create(request.body)
      .then(application =>
        response
          .status(HttpStatus.CREATED)
          .json(application)
      )
      .catch((err) => {
        if (isErrorUniqueConstraintViolation(err)) {
          response
            .status(HttpStatus.CONFLICT)
            .end();
        } else {
          next(err);
        }
      });
  }
}

export default postTrialsApplication;
