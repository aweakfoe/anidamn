module.exports = {
  darkMode: "class",
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      "colors": {
              "on-tertiary-fixed": "#1b1b1b",
              "primary-fixed": "#e3e2e2",
              "on-secondary": "#303031",
              "on-primary-fixed": "#1b1c1c",
              "on-background": "#e3e2e2",
              "tertiary-container": "#919191",
              "surface-variant": "#343535",
              "on-secondary-container": "#b6b5b5",
              "outline-variant": "#444748",
              "surface-tint": "#c7c6c6",
              "primary": "#c7c6c6",
              "on-surface-variant": "#c4c7c7",
              "tertiary-fixed": "#e2e2e2",
              "tertiary": "#c6c6c6",
              "on-tertiary-container": "#2a2a2a",
              "secondary": "#c7c6c6",
              "tertiary-fixed-dim": "#c6c6c6",
              "background": "#121414",
              "surface": "#121414",
              "surface-container-low": "#1b1c1c",
              "surface-dim": "#121414",
              "secondary-fixed-dim": "#c7c6c6",
              "on-tertiary-fixed-variant": "#474747",
              "surface-container-high": "#292a2a",
              "on-surface": "#e3e2e2",
              "surface-container": "#1f2020",
              "on-tertiary": "#303030",
              "error": "#ffb4ab",
              "primary-container": "#919090",
              "primary-fixed-dim": "#c7c6c6",
              "inverse-on-surface": "#303031",
              "on-primary": "#303031",
              "on-error": "#690005",
              "on-primary-container": "#292a2a",
              "on-primary-fixed-variant": "#464747",
              "surface-bright": "#393939",
              "on-secondary-fixed-variant": "#464747",
              "inverse-primary": "#5e5e5e",
              "on-secondary-fixed": "#1b1c1c",
              "on-error-container": "#ffdad6",
              "error-container": "#93000a",
              "surface-container-highest": "#343535",
              "surface-container-lowest": "#0d0e0f",
              "secondary-container": "#464747",
              "inverse-surface": "#e3e2e2",
              "secondary-fixed": "#e3e2e2",
              "outline": "#8e9192",
              "match-success": "#7fe27f"
      },
      "borderRadius": {
              "DEFAULT": "0.25rem",
              "lg": "0.5rem",
              "xl": "0.75rem",
              "full": "9999px"
      },
      "spacing": {
              "md": "16px",
              "xs": "4px",
              "unit": "4px",
              "xl": "32px",
              "gutter": "16px",
              "lg": "24px",
              "xxl": "48px",
              "sm": "8px",
              "margin": "24px"
      },
      "fontFamily": {
              "body-lg": [
                      "Inter"
              ],
              "headline-lg": [
                      "Inter"
              ],
              "body-sm": [
                      "Inter"
              ],
              "label-md": [
                      "Inter"
              ],
              "headline-md": [
                      "Inter"
              ],
              "label-sm": [
                      "Inter"
              ],
              "headline-xl": [
                      "Inter"
              ],
              "body-md": [
                      "Inter"
              ],
              "label-caps": ["Inter"],
              "display-xl": ["Inter"]
      },
      "fontSize": {
              "body-lg": [
                      "18px",
                      {
                              "lineHeight": "1.6",
                              "fontWeight": "400"
                      }
              ],
              "headline-lg": [
                      "32px",
                      {
                              "lineHeight": "1.2",
                              "letterSpacing": "-0.01em",
                              "fontWeight": "700"
                      }
              ],
              "body-sm": [
                      "14px",
                      {
                              "lineHeight": "1.5",
                              "fontWeight": "400"
                      }
              ],
              "label-md": [
                      "14px",
                      {
                              "lineHeight": "1",
                              "letterSpacing": "0.05em",
                              "fontWeight": "600"
                      }
              ],
              "headline-md": [
                      "24px",
                      {
                              "lineHeight": "1.3",
                              "fontWeight": "600"
                      }
              ],
              "label-sm": [
                      "12px",
                      {
                              "lineHeight": "1",
                              "letterSpacing": "0.02em",
                              "fontWeight": "500"
                      }
              ],
              "headline-xl": [
                      "40px",
                      {
                              "lineHeight": "1.2",
                              "letterSpacing": "-0.02em",
                              "fontWeight": "700"
                      }
              ],
              "body-md": [
                      "16px",
                      {
                              "lineHeight": "1.6",
                              "fontWeight": "400"
                      }
              ],
              "display-lg": ["48px", {"lineHeight": "1.1", "letterSpacing": "-0.04em", "fontWeight": "700"}]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
