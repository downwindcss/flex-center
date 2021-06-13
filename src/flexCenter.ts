const plugin = require('tailwindcss/plugin');

function flexCenter({ addUtilities }: { addUtilities: any }) {
  const flexCenterUtility = {
    '.flex-center': {
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center',
    },
  }
  // Same as 'flex': https://tailwindcss.com/docs/flex#variants
  const variants = ['responsive']
  addUtilities(flexCenterUtility, { variants })
}

export default plugin(flexCenter);