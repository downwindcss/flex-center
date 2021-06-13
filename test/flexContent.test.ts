import postcss from 'postcss';
import tailwindcss from 'tailwindcss';
import { TailwindConfig } from 'tailwindcss/tailwind-config';
import flexCenterPlugin from '../src/flexCenter';

const defaultConfig = ({
  plugins: [flexCenterPlugin],
  // disalble core plugins: https://tailwindcss.com/docs/configuration#core-plugins
  corePlugins: [],
} as unknown) as TailwindConfig;

function generateTailwindCss(customConfig?: TailwindConfig) {
  const config = Object.assign(defaultConfig, customConfig);

  return postcss([tailwindcss(config)]).process('@tailwind utilities', {
    from: undefined,
  });
}

test('Default breakpoint inline snapshot', async () => {
  const utility = await generateTailwindCss();
  expect(utility.css).toMatchInlineSnapshot(`
    ".flex-center {
      display: flex;
      justify-content: center;
      align-items: center
    }

    @media (min-width: 640px) {
      .sm\\\\:flex-center {
        display: flex;
        justify-content: center;
        align-items: center
      }
    }

    @media (min-width: 768px) {
      .md\\\\:flex-center {
        display: flex;
        justify-content: center;
        align-items: center
      }
    }

    @media (min-width: 1024px) {
      .lg\\\\:flex-center {
        display: flex;
        justify-content: center;
        align-items: center
      }
    }

    @media (min-width: 1280px) {
      .xl\\\\:flex-center {
        display: flex;
        justify-content: center;
        align-items: center
      }
    }

    @media (min-width: 1536px) {
      .\\\\32xl\\\\:flex-center {
        display: flex;
        justify-content: center;
        align-items: center
      }
    }"
  `);
});

test('Custom breakpoint testing', async () => {
  const customBreakpoints = ({
    theme: {
      extend: {
        screens: {
          sm: '100px',
          md: '200px',
          xl: '777px',
        },
      },
    },
  } as unknown) as TailwindConfig;

  const utility = await generateTailwindCss(customBreakpoints);
  expect(utility.css).toMatchInlineSnapshot(`
    ".flex-center {
      display: flex;
      justify-content: center;
      align-items: center
    }

    @media (min-width: 100px) {
      .sm\\\\:flex-center {
        display: flex;
        justify-content: center;
        align-items: center
      }
    }

    @media (min-width: 200px) {
      .md\\\\:flex-center {
        display: flex;
        justify-content: center;
        align-items: center
      }
    }

    @media (min-width: 1024px) {
      .lg\\\\:flex-center {
        display: flex;
        justify-content: center;
        align-items: center
      }
    }

    @media (min-width: 777px) {
      .xl\\\\:flex-center {
        display: flex;
        justify-content: center;
        align-items: center
      }
    }

    @media (min-width: 1536px) {
      .\\\\32xl\\\\:flex-center {
        display: flex;
        justify-content: center;
        align-items: center
      }
    }"
  `);
});
