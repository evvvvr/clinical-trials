const TrialApplication = {
  id: 'api/v1/trials/application',
  type: 'object',
  properties: {
    gender: {
      type: 'string',
      nonEmptyString: true,
      enum: ['female', 'male'],
    },
    firstName: {
      type: 'string',
      nonEmptyString: true,
      minLength: 1,
      maxLength: 255,
    },
    lastName: {
      type: 'string',
      nonEmptyString: true,
      minLength: 1,
      maxLength: 255,
    },
    email: {
      type: 'string',
      nonEmptyString: true,
      format: 'email',
      maxLength: 255,
    },
    phone: {
      type: 'string',
      nonEmptyString: true,
      pattern: '^\\+?(\\d{7,12})$',
      minLength: 7,
      maxLength: 12,
    },
    age: {
      type: 'integer',
      minimum: 1,
      maximum: 99,
    },
    zip: {
      type: 'string',
      nonEmptyString: true,
      pattern: '^\\d{3,5}$',
      minLength: 3,
      maxLength: 5,
    },
  },
  required: ['gender', 'firstName', 'lastName', 'email', 'phone', 'age', 'zip'],
};

export default TrialApplication;
