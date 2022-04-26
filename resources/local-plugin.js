 const id = 'local';

/** @type {import('../src/config/config').CustomRulesConfig} */
 const rules = {
  oas3: {
    'operation-id-not-test': () => {
      return {
        Operation(operation, { report, location }) {
          if (operation.operationId === 'test') {
            report({
              message: `operationId must be not "test"`,
              location: location.child('operationId'),
            });
          }
        },
      };
    },
  },
};

rules.oas2 = rules.oas3;

/** @type {import('../src/config/config').PreprocessorsConfig} */
 const preprocessors = {
  oas3: {
    'duplicate-description': () => {
      return {
        Info(info) {
          if (info.description) {
            info.description = info.description + '\n' + info.description;
          }
        },
      };
    },
  },
};

/** @type {import('../src/config/config').DecoratorConfig} */
 const decorators = {
  oas3: {
    'inject-x-stats': () => {
      return {
        Info(info) {
          info['x-stats'] = { test: 1 };
        },
      };
    },
  },
};

 const configs = {
  all: {
    rules: {
      'local/operation-id-not-test': 'error',
      'boolean-parameter-prefixes': 'error',
      'operation-2xx-response': 'off'
    },
  },
};

module.exports = {
   id,
   rules,
   preprocessors,
   decorators,
   configs,
}