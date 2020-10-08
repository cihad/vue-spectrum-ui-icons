
      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","height":"8","width":"8"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M6.573 6.558c.056.055.092.13 0 .204l-1.148.74c-.093.056-.13.02-.167-.073L3.832 4.947l-1.87 2.055c-.02.037-.075.074-.13 0l-.889-.926c-.092-.055-.074-.111 0-.167l2.111-1.76-2.408-.906c-.037 0-.092-.074-.055-.167l.63-1.259a.097.097 0 01.166-.036l2.111 1.37.13-2.704a.097.097 0 01.111-.11L5.277.54c.092 0 .11.037.092.13l-.722 2.647 2.444-.74c.056-.038.111-.038.148.073l.241 1.37c.019.093 0 .13-.074.13l-2.556.204z"}})])
          )
        }
      }
    