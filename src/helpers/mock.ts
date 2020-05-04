export const followers =
  {
    displaySettings: {
      subType:'condition',
      type:'followers',
    },
    elements: [
      {
        type:'rule',
        condition: {
          entity:'contact',
          field:'followers',
          operand:'lt',
          value: 5000,
        },
        onFail: {
          action:'fallthrough'
        },
        onMatch:  {
          action:'goto',
          target:'5e26e98027b2c58a70085d4f'
        }
      },
      {
        type:'rule',
        condition: {
          entity:'contact',
          field:'followers',
          operand:'lt',
          value: 15000,
        },
        onFail: {
          action:'goto',
          target:'5e26e98027b2c58a70085d4e'
        },
        onMatch:  null
      }
    ]
  }
